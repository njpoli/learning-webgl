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
var InputManager = /** @class */ (function () {
    function InputManager() {
    }
    InputManager.initialize = function () {
        for (var i = 0; i < 255; i++) {
            InputManager._keys[i] = false;
        }
        window.addEventListener('keydown', InputManager.onKeyDown);
        window.addEventListener('keyup', InputManager.onKeyUp);
    };
    InputManager.isKeyDown = function (key) {
        return InputManager._keys[key];
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
    InputManager._keys = [];
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
        gl.clearColor(0, 0, 0.3, 1);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        var imageContext = __webpack_require__(245);
        var jsonContext = __webpack_require__(924);
        this.loadAll(imageContext);
        this.loadAll(jsonContext);
        this._basicShader = new BasicShader();
        this._basicShader.use();
        // Load materials
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('woodPlank', 'src/assets/textures/wood_plank.jpg', Color.white()));
        MaterialManager.registerMaterial(new Material('bird', 'src/assets/textures/bird.png', Color.white()));
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO1lBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNsQyxJQUFJLE9BQU8sQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDL0IsQ0FDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNsQyxJQUFJLE9BQU8sQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDL0IsQ0FDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUks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R0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDRCQUFRLEdBQWYsVUFBZ0IsQ0FBWTtRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7Ozs7QUN0TnVDO0FBQ0o7QUFFcEM7SUFBQTtRQUNTLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFDakMsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUNqQyxVQUFLLEdBQVksV0FBVyxDQUFDO0lBb0N0QyxDQUFDO0lBbENRLDRCQUFRLEdBQWYsVUFBZ0IsU0FBb0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLDJDQUF1QixHQUE5QjtRQUNFLElBQUksV0FBVyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RCxJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2hCLENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osT0FBTyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDOzs7O0FDdEM2QztBQUNBO0FBRzlDO0lBZ0JFLG1CQUFtQixFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFkbEQsY0FBUyxHQUFnQixFQUFFLENBQUM7UUFFNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFDL0IsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFFN0IsaUJBQVksR0FBYyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9DLGlCQUFZLEdBQWMsa0JBQWtCLEVBQUUsQ0FBQztRQUloRCxjQUFTLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUc1QyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBVyx5QkFBRTthQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQVc7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBUTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVNLDRCQUFRLEdBQWYsVUFBZ0IsS0FBZ0I7UUFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsS0FBZ0I7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDMUIsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFlBQUssS0FBSyxHQUFHLEVBQWIsQ0FBYSxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRU0sbUNBQWUsR0FBdEIsVUFBdUIsSUFBWTtRQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxLQUFrQixVQUFjLEVBQWQsU0FBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUFFO1lBQTdCLElBQUksS0FBSztZQUNaLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUN4QixPQUFPLE1BQU0sQ0FBQzthQUNmO1NBQ0Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQVksR0FBbkIsVUFBb0IsU0FBcUI7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsUUFBbUI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNqQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFrQixVQUFjLEVBQWQsU0FBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUFFO1lBQTdCLElBQUksS0FBSztZQUNaLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2xFLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDakMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNqQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVTLDJCQUFPLEdBQWpCLFVBQWtCLEtBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFpQixHQUF6QixVQUEwQixpQkFBd0M7UUFDaEUsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FDcEMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQzs7OztBQzlJdUM7QUFFeEM7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLE1BQWlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQkFBZSxHQUF0QixVQUF1QixJQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7O0FDckNvRTtBQUNOO0FBRS9CO0FBQ1E7QUFFeEMsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDJEQUFhO0lBQ2IsK0NBQU87SUFDUCxpREFBUTtBQUNWLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUVEO0lBUUUsY0FBbUIsRUFBVSxFQUFFLElBQVksRUFBRSxXQUFtQjtRQUh4RCxXQUFNLEdBQWMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLG9CQUFFO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQVc7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVNLHlCQUFVLEdBQWpCLFVBQWtCLFFBQWE7UUFBL0IsaUJBUUM7UUFQQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtZQUM5QixLQUFJLENBQUMsYUFBYSxDQUFDLENBQWMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVNLHFCQUFNLEdBQWIsY0FBdUIsQ0FBQztJQUVqQixxQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLGNBQTRCLENBQUM7SUFFdEIsNEJBQWEsR0FBcEIsY0FBOEIsQ0FBQztJQUV2Qiw0QkFBYSxHQUFyQixVQUFzQixXQUFnQixFQUFFLE1BQTZCO1FBQXJFLGlCQW9DQztRQW5DQyxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakUsSUFBSSxXQUFXLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNO2dCQUNwQyxJQUFNLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtnQkFDbkMsSUFBTSxRQUFRLEdBQUcsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksV0FBVyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNO2dCQUNsQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7Ozs7QUNqSCtCO0FBSWE7QUFDZjtBQUU5QjtJQU9FO0lBQXVCLENBQUM7SUFFVixzQkFBVSxHQUF4QjtRQUNFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxZQUFZO1FBQ1osV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDO0lBQ3JFLENBQUM7SUFFYSxzQkFBVSxHQUF4QixVQUF5QixFQUFVO1FBQ2pDLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ2xELElBQUksMEJBQTBCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hFLElBQU0sS0FBSyxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3QjthQUNGO2lCQUFNO2dCQUNMLGlCQUFpQixDQUNmLGlDQUFpQyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFDcEUsV0FBVyxDQUFDLEtBQUssQ0FDbEIsQ0FBQztnQkFDRixzQkFBc0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRDtTQUNGO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFZLEVBQUUsb0JBQWlCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFYSxrQkFBTSxHQUFwQixVQUFxQixJQUFZO1FBQy9CLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRWEsa0JBQU0sR0FBcEIsVUFBcUIsTUFBYztRQUNqQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBb0IsQ0FBQztZQUN6QyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVjLG9CQUFRLEdBQXZCLFVBQXdCLEtBQWdCO1FBQ3RDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxNQUFjLENBQUM7UUFDbkIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQzVDLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7UUFFRCxJQUFJLGVBQWUsR0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxFQUFFO1lBQzVDLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUVELFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN2RSxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXpGYyx5QkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLHVEQUF1RDtJQUN4Qyw0QkFBZ0IsR0FBNkIsRUFBRSxDQUFDO0lBd0ZqRSxrQkFBQztDQUFBO0FBM0Z1Qjs7O0FDVitEO0FBQ3JCO0FBQ0s7QUFDbEI7QUFDUztBQUN5QjtBQUNoQjtBQUM3QjtBQUNhO0FBQ2Q7QUFDTTtBQUNjO0FBQ1Q7QUFDUDtBQUNLO0FBQ0E7QUFFbEQ7O0dBRUc7QUFDSDtJQU1FOztPQUVHO0lBQ0g7UUFMUSxrQkFBYSxHQUFXLENBQUMsQ0FBQztJQUtaLENBQUM7SUFFdkI7O09BRUc7SUFDSSxzQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3hDLHVCQUF1QixFQUFFLENBQUM7UUFDMUIsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQixzQkFBc0IsRUFBRSxDQUFDO1FBRXpCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksWUFBWSxHQUFHLHdCQUlsQixDQUFDO1FBQ0YsSUFBSSxXQUFXLEdBQUcsd0JBQXVELENBQUM7UUFFMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXhCLGlCQUFpQjtRQUNqQixnQ0FBZ0MsQ0FDOUIsSUFBSSxRQUFRLENBQ1YsV0FBVyxFQUNYLG9DQUFvQyxFQUNwQyxXQUFXLEVBQUUsQ0FDZCxDQUNGLENBQUM7UUFFRixnQ0FBZ0MsQ0FDOUIsSUFBSSxRQUFRLENBQ1YsV0FBVyxFQUNYLG9DQUFvQyxFQUNwQyxXQUFXLEVBQUUsQ0FDZCxDQUNGLENBQUM7UUFFRixnQ0FBZ0MsQ0FDOUIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLDhCQUE4QixFQUFFLFdBQVcsRUFBRSxDQUFDLENBQ3BFLENBQUM7UUFFRixnQ0FBZ0M7UUFDaEMsZ0NBQWdDLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7UUFDL0QsZ0NBQWdDLENBQUMsSUFBSSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7UUFDdkUsK0JBQStCLENBQUMsSUFBSSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDL0QsK0JBQStCLENBQUMsSUFBSSwrQkFBK0IsRUFBRSxDQUFDLENBQUM7UUFFdkUsZ0RBQWdEO1FBQ2hELHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLHVCQUFNLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUV6QyxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixDQUN2QyxDQUFDLEVBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUNuQixDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQ04sS0FBSyxDQUNOLENBQUM7WUFFRixXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVPLHFCQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLHdCQUFPLEdBQWYsVUFBZ0IsY0FBaUQ7UUFDL0QsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sdUJBQU0sR0FBZDtRQUNFLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRW5ELGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTyx1QkFBTSxHQUFkO1FBQ0UsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztRQUNELGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6QyxJQUFNLGtCQUFrQixHQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXZELG1CQUFtQixDQUNqQixrQkFBa0IsRUFDbEIsS0FBSyxFQUNMLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQ3hDLENBQUM7U0FDSDtRQUNELHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7O0FDdEpvQjtBQUNrQjtBQUV2QyxJQUFJLE1BQWMsQ0FBQztBQUNuQiwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsUUFBUSxHQUFHO0lBQ2hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvdGV4dHVyZXN8c3luY3xDOi8uKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy96b25lc3xzeW5jfEM6Ly4oanNvbikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VCdXMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvaW1hZ2VBc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvYXNzZXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC92ZWN0b3IyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2wudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdmVjdG9yMy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3ZlcnRleC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2FuaW1hdGVkU3ByaXRlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9pbnB1dC9pbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvYmFzZUJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9yb3RhdGlvbkJlaGF2aW9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvc2hhZGVycy9iYXNpY1NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL2NvbG9yLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdHJpeDR4NC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2ltT2JqZWN0LnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS93b3JsZC96b25lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2JpcmQucG5nXCI6IDExLFxuXHRcIi4vc3RvbmVfd2FsbC5qcGdcIjogMTkwLFxuXHRcIi4vc3RvbmVfd2FsbF8xMjh4MTI4LmpwZ1wiOiA3MzgsXG5cdFwiLi93b29kX3BsYW5rLmpwZ1wiOiA4NDcsXG5cdFwiLi93b29kX3BsYW5rXzEyOHgxMjguanBnXCI6IDMwNlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI0NTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vdGVzdFpvbmUuanNvblwiOiA5OTNcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA5MjQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlIHtcclxuICBwdWJsaWMgbWVzc2FnZTogTWVzc2FnZTtcclxuICBwdWJsaWMgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWVzc2FnZTogTWVzc2FnZSwgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB9IGZyb20gJy4vbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlUHJpb3JpdHkgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdXMge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zdWJzY3JpcHRpb25zOiB7IFtjb2RlOiBzdHJpbmddOiBJTWVzc2FnZUhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9ub3JtYWxRdWV1ZU1lc3NhZ2VQZXJVcGRhdGU6IG51bWJlciA9IDEwO1xyXG4gIHByaXZhdGUgc3RhdGljIF9ub3JtYWxNZXNzYWdlUXVldWU6IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkU3Vic2NyaXB0aW9uKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmluZGV4T2YoaGFuZGxlcikgIT09IC0xKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnQXR0ZW1wdGluZyB0byBhZGQgYSBkdXBsaWNhdGUgaGFuZGxlciB0byBjb2RlICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnLiBTdWJzY3JpcHRpb24gbm90IGFkZGVkLidcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlU3Vic2NyaXB0aW9uKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyBOb3Qgc3VyZSBpZiB0aGlzIGlzIGNvcnJlY3RcclxuICAgIGlmICghTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0Nhbm5vdCB1bnN1YnNjcmliZSBoYW5kbGVyIGZyb20gY29kZTogJyArXHJcbiAgICAgICAgICBjb2RlICtcclxuICAgICAgICAgICcgYmVjYXVzZSB0aGF0IGNvZGUgZG9lcyBub3Qgc3Vic2NyaWJlZCB0by4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm9kZUluZGV4ID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgaWYgKG5vZGVJbmRleCAhPT0gLTEpIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uZmlsdGVyKFxyXG4gICAgICAgIChfLCBpZHgpID0+IGlkeCAhPT0gbm9kZUluZGV4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBvc3QobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2UgcG9zdGVkOicsIG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgaGFuZGxlcnMgPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW21lc3NhZ2UuY29kZV07XHJcbiAgICBpZiAoIWhhbmRsZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVycy5mb3JFYWNoKChoKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLnByaW9yaXR5ID09PSBNZXNzYWdlUHJpb3JpdHkuSElHSCkge1xyXG4gICAgICAgIGgub25NZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5wdXNoKFxyXG4gICAgICAgICAgbmV3IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlKG1lc3NhZ2UsIGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBOb3QgdXNpbmcgdGltZT9cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXNzYWdlTGltaXQgPSBNYXRoLm1pbihcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlLFxyXG4gICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUubGVuZ3RoXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZUxpbWl0OyArK2kpIHtcclxuICAgICAgbGV0IG5vZGUgPSBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucG9wKCk7XHJcbiAgICAgIG5vZGU/LmhhbmRsZXIub25NZXNzYWdlKG5vZGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZUJ1cyc7XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUHJpb3JpdHkge1xyXG4gIE5PUk1BTCxcclxuICBISUdILFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICBwdWJsaWMgY29udGV4dDogdW5rbm93bjtcclxuICBwdWJsaWMgc2VuZGVyOiB1bmtub3duO1xyXG4gIHB1YmxpYyBwcmlvcml0eTogTWVzc2FnZVByaW9yaXR5O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0OiB1bmtub3duLFxyXG4gICAgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eSA9IE1lc3NhZ2VQcmlvcml0eS5OT1JNQUxcclxuICApIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNlbmQoY29kZTogc3RyaW5nLCBzZW5kZXI6IHVua25vd24sIGNvbnRleHQ/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnBvc3QobmV3IE1lc3NhZ2UoY29kZSwgc2VuZGVyLCBjb250ZXh0LCBNZXNzYWdlUHJpb3JpdHkuTk9STUFMKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNlbmRQcmlvcml0eShcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIHNlbmRlcjogdW5rbm93bixcclxuICAgIGNvbnRleHQ/OiB1bmtub3duXHJcbiAgKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnBvc3QobmV3IE1lc3NhZ2UoY29kZSwgc2VuZGVyLCBjb250ZXh0LCBNZXNzYWdlUHJpb3JpdHkuSElHSCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMuYWRkU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnN1YnNjcmliZShjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5yZW1vdmVTdWJzY3JpcHRpb24oY29kZSwgaGFuZGxlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldExvYWRlciBpbXBsZW1lbnRzIElBc3NldExvYWRlciB7XHJcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRFeHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbJ3BuZycsICdnaWYnLCAnanBnJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IHRoaXMub25JbWFnZUxvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYXNzZXROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkltYWdlTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IG5ldyBJbWFnZUFzc2V0KGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IGFueTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydqc29uJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgYXNzZXROYW1lKTtcclxuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2xvYWQnLFxyXG4gICAgICB0aGlzLm9uSnNvbkxvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgcmVxdWVzdClcclxuICAgICk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Kc29uTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCByZXF1ZXN0OiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIHJlcXVlc3QpO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IHJlcXVlc3QuRE9ORSkge1xyXG4gICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICBjb25zdCBhc3NldCA9IG5ldyBKc29uQXNzZXQoYXNzZXROYW1lLCBqc29uKTtcclxuICAgICAgQXNzZXRNYW5hZ2VyLm9uQXNzZXRMb2FkZWQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IEltYWdlQXNzZXRMb2FkZXIgfSBmcm9tICcuL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBKc29uQXNzZXRMb2FkZXIgfSBmcm9tICcuL2pzb25Bc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEID1cclxuICAnTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEOjonO1xyXG5leHBvcnQgY2xhc3MgQXNzZXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfbG9hZGVyczogSUFzc2V0TG9hZGVyW10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRpYyBfbG9hZGVkQXNzZXRzOiB7IFtuYW1lOiBzdHJpbmddOiBJQXNzZXQgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEltYWdlQXNzZXRMb2FkZXIoKSk7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgSnNvbkFzc2V0TG9hZGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckxvYWRlcihsb2FkZXI6IElBc3NldExvYWRlcik6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobG9hZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb25Bc3NldExvYWRlZChhc3NldDogSUFzc2V0KTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldC5uYW1lXSA9IGFzc2V0O1xyXG4gICAgTWVzc2FnZS5zZW5kKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIGFzc2V0Lm5hbWUsIHRoaXMsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldE5hbWUuc3BsaXQoJy4nKS5wb3AoKT8udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBsIG9mIEFzc2V0TWFuYWdlci5fbG9hZGVycykge1xyXG4gICAgICBpZiAobC5zdXBwb3J0ZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uIHx8ICcnKSAhPT0gLTEpIHtcclxuICAgICAgICBsLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFVuYWJsZSB0byBsb2FkIGFzc2V0IHdpdGggZXh0ZW5zaW9uICR7ZXh0ZW5zaW9ufSBiZWNhdXNlIHRoZXJlIGlzIG5vIGxvYWRlciBhc3NvY2lhdGVkIHdpdGggaXQuYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNBc3NldExvYWRlZChhc3NldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xyXG4gICAgcmV0dXJuICEhQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiBJQXNzZXQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV0pIHtcclxuICAgICAgcmV0dXJuIEFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBBc3NldE1hbmFnZXIubG9hZEFzc2V0KGFzc2V0TmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOiBWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6IFZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHlGcm9tKHY6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2Ll94O1xyXG4gICAgdGhpcy5feSA9IHYuX3k7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3gsIHRoaXMuX3ldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi54KSB7XHJcbiAgICAgIHRoaXMuX3ggPSBOdW1iZXIoanNvbi54KTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLnkpIHtcclxuICAgICAgdGhpcy5feSA9IE51bWJlcihqc29uLnkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4vKipcclxuICogUmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgYSBXZWJHTCByZW5kZXJpbmcgY29udGV4dFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVXRpbGl0aWVzIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBXZWJHTCwgcG90ZW50aWFsbHkgdXNpbmcgdGhlIGNhbnZhcyB3aXRoIGFuIGFzc2lnbmVkIGlkIG1hdGNoaW5nXHJcbiAgICogdGhlIHByb3ZpZGVkIGlmIGl0IGlzIGRlZmluZWQuXHJcbiAgICogQHBhcmFtIGVsZW1lbnRJZCBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cclxuICAgKiBAcmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKGVsZW1lbnRJZD86IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIGlmIChlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBpZiAoY2FudmFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgY2FudmFzIGVsZW1lbnQgbmFtZWQgJyArIGVsZW1lbnRJZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgaWYgKGdsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIEdMQnVmZmVyIGF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUluZm8ge1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgbG9jYXRpb246IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSAobnVtYmVyIG9mIGVsZW1lbnRzKSBpbiB0aGlzIGF0dHJpYnV0ZSAoaS5lLiBWZWN0b3IzID0gMylcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIG9mZnNldDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTEJ1ZmZlciB7XHJcbiAgcHJpdmF0ZSBfaGFzQXR0cmlidXRlTG9jYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9lbGVtZW50U2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0cmlkZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9idWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICBwcml2YXRlIF90YXJnZXRCdWZmZXJUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGF0YVR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9tb2RlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdHlwZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVJbmZvW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBHTCBCdWZmZXIuXHJcbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSBkYXRhIHR5cGUgb2YgdGhlIGJ1ZmZlci4gRGVmYXVsdDogZ2wuRkxPQVRcclxuICAgKiBAcGFyYW0gdGFyZ2V0QnVmZmVyVHlwZSBUaGUgYnVmZmVyIHRhcmdldCB0eXBlLiBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIuIERlZmF1bHQ6IGdsLkFSUkFZX0JVRkZFUlxyXG4gICAqIEBwYXJhbSBtb2RlIFRoZSBkcmF3aW5nIG1vZGUgb2YgdGhlIGJ1ZmZlci4gKGkuZS4gZ2wuVFJJQU5HTEVTIG9yIGdsLkxJTkVTKS4gRGVmYXVsdDogZ2wuVFJJQU5HTEVTXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgZGF0YVR5cGU6IG51bWJlciA9IGdsLkZMT0FULFxyXG4gICAgdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyID0gZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgbW9kZTogbnVtYmVyID0gZ2wuVFJJQU5HTEVTXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50U2l6ZSA9IDA7XHJcbiAgICB0aGlzLl9kYXRhVHlwZSA9IGRhdGFUeXBlO1xyXG4gICAgdGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9IHRhcmdldEJ1ZmZlclR5cGU7XHJcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgYnl0ZSBzaXplXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgIC8vIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAvLyBvbmx5IHBvc2l0aXZlIGJ1dCB0d2ljZSB0aGUgc2l6ZSBvZiBpbnRcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSA0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAxO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGRhdGEgdHlwZSAke2RhdGFUeXBlLnRvU3RyaW5nKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2l6ZSBvZiBlbGVtZW50cyAqIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGVsZW1lbnRcclxuICAgIHRoaXMuX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIFdlYkdMQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveXMgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kcyB0aGlzIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gbm9ybWFsaXplZCBJbmRpY2F0ZXMgaWYgdGhpcyBkYXRhIHNob3VsZCBiZSBub3JtYWxpemVkLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaW5kKG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbikge1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgIGl0LmxvY2F0aW9uLFxyXG4gICAgICAgICAgaXQuc2l6ZSxcclxuICAgICAgICAgIHRoaXMuX2RhdGFUeXBlLFxyXG4gICAgICAgICAgbm9ybWFsaXplZCxcclxuICAgICAgICAgIHRoaXMuX3N0cmlkZSxcclxuICAgICAgICAgIGl0Lm9mZnNldCAqIHRoaXMuX3R5cGVTaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgaW5mb3JtYXRpb24gdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiB0byBiZSBhZGRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVMb2NhdGlvbihpbmZvOiBBdHRyaWJ1dGVJbmZvKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbiA9IHRydWU7XHJcbiAgICBpbmZvLm9mZnNldCA9IHRoaXMuX2VsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKGluZm8pO1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgKz0gaW5mby5zaXplO1xyXG4gICAgdGhpcy5fc3RyaWRlID0gdGhpcy5fZWxlbWVudFNpemUgKiB0aGlzLl90eXBlU2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGRhdGEgaW4gdGhlIGJ1ZmZlciB3aXRoIHByb3ZpZGVkIGRhdGEuXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYmUgbG9hZGVkIGluIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNldERhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICB0aGlzLnB1c2hCYWNrRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBvdXQgYWxsIGRhdGEgaW4gdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICBwdWJsaWMgY2xlYXJEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0YS5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwdXNoQmFja0RhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgdGhpcyBkYXRhIHRvIHRoZSBHUFVcclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGxldCBidWZmZXJEYXRhOiBBcnJheUJ1ZmZlcjtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGEgdHlwZSBlcnJvciBpbiBwdXNoQmFja0RhdGEoKSBmb3IgZGF0YXR5cGUgJHt0aGlzLl9kYXRhVHlwZS50b1N0cmluZygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgYnVmZmVyRGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXModGhpcy5fbW9kZSwgMCwgdGhpcy5fZGF0YS5sZW5ndGggLyB0aGlzLl9lbGVtZW50U2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0aGlzLl9tb2RlLCB0aGlzLl9kYXRhLmxlbmd0aCwgdGhpcy5fZGF0YVR5cGUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5cclxuY2xhc3MgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hdGVyaWFsczogeyBbbmFtZTogc3RyaW5nXTogTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbmV3IE1hdGVyaWFsUmVmZXJlbmNlTm9kZShcclxuICAgICAgICBtYXRlcmlhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgICAgcmV0dXJuIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxSZWZlcmVuY2UgPSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgaWYgKCFtYXRlcmlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCByZWxlYXNlIGEgbWF0ZXJpYWwgd2hpY2ggaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxICYmXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw/LmRlc3Ryb3koKTtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3o6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgICB0aGlzLl96ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB6KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLngpIHtcclxuICAgICAgdGhpcy5feCA9IE51bWJlcihqc29uLngpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueSkge1xyXG4gICAgICB0aGlzLl95ID0gTnVtYmVyKGpzb24ueSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi56KSB7XHJcbiAgICAgIHRoaXMuX3ogPSBOdW1iZXIoanNvbi56KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgdGhpcy5feiArPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICB0aGlzLl96ICo9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGRhdGEgZm9yIGEgc2luZ2xlIHZlcnRleFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlcnRleCB7XHJcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG4gIHB1YmxpYyB0ZXhDb29yZHM6IFZlY3RvcjIgPSBWZWN0b3IyLnplcm87XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHg6IG51bWJlciA9IDAsXHJcbiAgICB5OiBudW1iZXIgPSAwLFxyXG4gICAgejogbnVtYmVyID0gMCxcclxuICAgIHR1OiBudW1iZXIgPSAwLFxyXG4gICAgdHY6IG51bWJlciA9IDBcclxuICApIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgdGhpcy5wb3NpdGlvbi56ID0gejtcclxuXHJcbiAgICB0aGlzLnRleENvb3Jkcy54ID0gdHU7XHJcbiAgICB0aGlzLnRleENvb3Jkcy55ID0gdHY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgYXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQodGhpcy5wb3NpdGlvbi50b0FycmF5KCkpO1xyXG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQodGhpcy50ZXhDb29yZHMudG9BcnJheSgpKTtcclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuLi9nbC9nbCc7XHJcbmltcG9ydCB7IEF0dHJpYnV0ZUluZm8sIEdMQnVmZmVyIH0gZnJvbSAnLi4vZ2wvZ2xCdWZmZXInO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSAnLi92ZXJ0ZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgcHJvdGVjdGVkIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF93aWR0aDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9idWZmZXI6IEdMQnVmZmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG4gIHByb3RlY3RlZCBfbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNlczogVmVydGV4W10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyID0gMTAwLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSAxMDBcclxuICApIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IG1hdGVyaWFsTmFtZTtcclxuICAgIHRoaXMuX21hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYnVmZmVyKSB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVsZWFzZU1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbCA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEdMQnVmZmVyKCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIC8vIFJlbW92ZWQgcmVmZXJlbmNlIHRvIHNoYWRlciwgYmFkIHByYWN0aWNlIHRvIHBhc3Mgc2hhZGVyIGluZm8gdG8gc3ByaXRlIG9uIGxvYWRcclxuICAgIC8vIFN0aWxsIG5vdCBpZGVhbCAocmVmZXJlbmNpbmcgYV9sb2NhdGlvbiBpbiB2ZXJ0ZXhTaGFkZXJTb3VyY2UgYnkgaGFyZGNvZGluZyAwKVxyXG4gICAgLy8gRWFjaCB2YXJpYWJsZSBpbiBzaGFkZXJTb3VyY2UgaXMgcmVmZXJlbmNlZCBieSBpbmRleCBpbiBvcmRlciBvZiBkZWNsYXJhdGlvbiAoZS5nLiBiZWNhdXNlIGFfbG9jYXRpb24gaXMgdGhlIGZpcnN0IHZhcmlhYmxlIGl0IGlzIGluZGV4IDApXHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5sb2NhdGlvbiA9IDA7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5zaXplID0gMztcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbihwb3NpdGlvbkF0dHJpYnV0ZSk7XHJcblxyXG4gICAgbGV0IHRleENvb3JkQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLmxvY2F0aW9uID0gMTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLnNpemUgPSAyO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHRleENvb3JkQXR0cmlidXRlKTtcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgdGhpcy5fdmVydGljZXMgPSBbXHJcbiAgICAgIC8vIHgsIHksIHosIFU6IHRleHR1cmUgeCwgVjogdGV4dHVyZSB5XHJcbiAgICAgIC8vIHRyaWFuZ2xlIDFcclxuICAgICAgLy8gcG9pbnQgMVxyXG4gICAgICBuZXcgVmVydGV4KDAsIDAsIDAsIDAsIDAsKSxcclxuICAgICAgLy8gcG9pbnQgMlxyXG4gICAgICBuZXcgVmVydGV4KDAsIHRoaXMuX2hlaWdodCwgMCwgMCwgMS4wLCksXHJcbiAgICAgIC8vIHBvaW50IDNcclxuICAgICAgbmV3IFZlcnRleCh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCAwLCAxLjAsIDEuMCwpLFxyXG4gICAgICAvLyB0cmlhbmdsZSAyXHJcbiAgICAgIC8vIHBvaW50IDRcclxuICAgICAgbmV3IFZlcnRleCh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCAwLCAxLjAsIDEuMCksXHJcbiAgICAgIC8vIHBvaW50IDVcclxuICAgICAgbmV3IFZlcnRleCh0aGlzLl93aWR0aCwgMCwgMCwgMS4wLCAwKSxcclxuICAgICAgLy8gcG9pbnQgNlxyXG4gICAgICBuZXcgVmVydGV4KDAsIDAsIDAsIDAsIDApLFxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLl92ZXJ0aWNlcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8ucHVzaEJhY2tEYXRhKHYudG9BcnJheSgpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fYnVmZmVyLnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyLnVuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyLCBtb2RlbDogTWF0cml4NHg0KTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxMb2NhdGlvbiwgZmFsc2UsIG1vZGVsLnRvRmxvYXQzMkFycmF5KCkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3RpbnQnKTtcclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBnbC51bmlmb3JtNGZ2KGNvbG9yTG9jYXRpb24sIHRoaXMuX21hdGVyaWFsLnRpbnQudG9GbG9hdDMyQXJyYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsPy5kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5hY3RpdmF0ZUFuZEJpbmQoMCk7XHJcbiAgICAgIGNvbnN0IGRpZmZ1c2VMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfZGlmZnVzZScpO1xyXG4gICAgICAvLyBwYXNzIGEgc2luZ2xlIGludGVnZXJcclxuICAgICAgZ2wudW5pZm9ybTFpKGRpZmZ1c2VMb2NhdGlvbiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2J1ZmZlcikge1xyXG4gICAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXIuZHJhdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhc3NpZ25lZCBidWZmZXIgZm9yIHNwcml0ZSAnICsgdGhpcy5fbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL21hdGgvdmVjdG9yMic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmNsYXNzIFVWSW5mbyB7XHJcbiAgcHVibGljIG1pbjogVmVjdG9yMjtcclxuICBwdWJsaWMgbWF4OiBWZWN0b3IyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWN0b3IyLCBtYXg6IFZlY3RvcjIpIHtcclxuICAgIHRoaXMubWluID0gbWluO1xyXG4gICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2ZyYW1lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZnJhbWVXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZyYW1lQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9mcmFtZVNlcXVlbmNlOiBudW1iZXJbXTtcclxuICAvLyBUT0RPOiBNYWtlIHRoaXMgY29uZmlndXJhYmxlXHJcbiAgcHJpdmF0ZSBfZnJhbWVUaW1lOiBudW1iZXIgPSAxMjE7XHJcbiAgcHJpdmF0ZSBfZnJhbWVVVnM6IFVWSW5mb1tdID0gW107XHJcbiAgcHJpdmF0ZSBfY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRGcmFtZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9hc3NldExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Fzc2V0V2lkdGg6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBfYXNzZXRIZWlnaHQ6IG51bWJlciA9IDI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwLFxyXG4gICAgZnJhbWVXaWR0aDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUhlaWdodDogbnVtYmVyID0gMTAsXHJcbiAgICBmcmFtZUNvdW50OiBudW1iZXIgPSAxLFxyXG4gICAgZnJhbWVTZXF1ZW5jZTogbnVtYmVyW10gPSBbXVxyXG4gICkge1xyXG4gICAgc3VwZXIobmFtZSwgbWF0ZXJpYWxOYW1lLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLl9mcmFtZVdpZHRoID0gZnJhbWVXaWR0aDtcclxuICAgIHRoaXMuX2ZyYW1lSGVpZ2h0ID0gZnJhbWVIZWlnaHQ7XHJcbiAgICB0aGlzLl9mcmFtZUNvdW50ID0gZnJhbWVDb3VudDtcclxuICAgIHRoaXMuX2ZyYW1lU2VxdWVuY2UgPSBmcmFtZVNlcXVlbmNlO1xyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICBNZXNzYWdlLnN1YnNjcmliZShcclxuICAgICAgICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZU5hbWUsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lc3NhZ2UuY29kZSA9PT1cclxuICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIHRoaXMuX2Fzc2V0SGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG4gICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVVZzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgc3VwZXIubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vIEhhY2sgYXJvdW5kIGZvciBub3QgYmVpbmcgaW5zdGFudGlhdGVkIGJlZm9yZSBvbk1lc3NhZ2UgaXMgc2VudFxyXG4gICAgLy8gUmV2aXNpdFxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsICYmICF0aGlzLl9hc3NldExvYWRlZCkge1xyXG4gICAgICBsZXQgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQoXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApIGFzIEltYWdlQXNzZXQ7XHJcbiAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9hc3NldEhlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuICAgICAgICB0aGlzLl9hc3NldFdpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVVVnMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPiB0aGlzLl9mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEZyYW1lKys7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50RnJhbWUgPj0gdGhpcy5fZnJhbWVTZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmcmFtZVVWcyA9IHRoaXMuX2ZyYW1lU2VxdWVuY2VbdGhpcy5fY3VycmVudEZyYW1lXTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbMF0udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5taW4pO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1sxXS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzJdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4KTtcclxuICAgICAgdGhpcy5fdmVydGljZXNbM10udGV4Q29vcmRzLmNvcHlGcm9tKHRoaXMuX2ZyYW1lVVZzW2ZyYW1lVVZzXS5tYXgpO1xyXG4gICAgICB0aGlzLl92ZXJ0aWNlc1s0XS50ZXhDb29yZHMuY29weUZyb20oXHJcbiAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWF4LngsXHJcbiAgICAgICAgICB0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluLnlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzWzVdLnRleENvb3Jkcy5jb3B5RnJvbSh0aGlzLl9mcmFtZVVWc1tmcmFtZVVWc10ubWluKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1ZmZlcj8uY2xlYXJEYXRhKCk7XHJcbiAgICAgIHRoaXMuX3ZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICB0aGlzLl9idWZmZXI/LnB1c2hCYWNrRGF0YSh2LnRvQXJyYXkoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVwbG9hZCgpO1xyXG4gICAgICB0aGlzLl9idWZmZXI/LnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVVZzKCk6IHZvaWQge1xyXG4gICAgbGV0IHRvdGFsV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgeVZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mcmFtZUNvdW50OyBpKyspIHtcclxuICAgICAgdG90YWxXaWR0aCA9IGkgKiB0aGlzLl9mcmFtZVdpZHRoO1xyXG4gICAgICBpZiAodG90YWxXaWR0aCA+IHRoaXMuX2Fzc2V0V2lkdGgpIHtcclxuICAgICAgICB5VmFsdWUrKztcclxuICAgICAgICB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHUgPSAoaSAqIHRoaXMuX2ZyYW1lV2lkdGgpIC8gdGhpcy5fYXNzZXRXaWR0aDtcclxuICAgICAgbGV0IHYgPSAoeVZhbHVlICogdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtaW46IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1LCB2KTtcclxuXHJcbiAgICAgIGxldCB1TWF4ID0gKGkgKiB0aGlzLl9mcmFtZVdpZHRoICsgdGhpcy5fZnJhbWVXaWR0aCkgLyB0aGlzLl9hc3NldFdpZHRoO1xyXG4gICAgICBsZXQgdk1heCA9XHJcbiAgICAgICAgKHlWYWx1ZSAqIHRoaXMuX2ZyYW1lSGVpZ2h0ICsgdGhpcy5fZnJhbWVIZWlnaHQpIC8gdGhpcy5fYXNzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBtYXg6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMih1TWF4LCB2TWF4KTtcclxuXHJcbiAgICAgIHRoaXMuX2ZyYW1lVVZzLnB1c2gobmV3IFVWSW5mbyhtaW4sIG1heCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL2NvcmUvd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gIHByb3RlY3RlZCBfb3duZXI6IFNpbU9iamVjdCB8IHVuZGVmaW5lZDtcclxuICBwcm90ZWN0ZWQgX2RhdGE6IElDb21wb25lbnREYXRhO1xyXG5cclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUNvbXBvbmVudERhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvd25lcigpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX293bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE93bmVyKG93bmVyOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyID0gb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2NvcmUvZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9zcHJpdGUnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcbmltcG9ydCB7IElDb21wb25lbnREYXRhIH0gZnJvbSAnLi9JQ29tcG9uZW50RGF0YSc7XHJcbmltcG9ydCB7IENvbXBvbmVudE1hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudE1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudERhdGEgaW1wbGVtZW50cyBJQ29tcG9uZW50RGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBtYXRlcmlhbE5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ubWF0ZXJpYWxOYW1lKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxOYW1lID0gU3RyaW5nKGpzb24ubWF0ZXJpYWxOYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnRCdWlsZGVyIGltcGxlbWVudHMgSUNvbXBvbmVudEJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdzcHJpdGUnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBTcHJpdGVDb21wb25lbnREYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgU3ByaXRlQ29tcG9uZW50KGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogU3ByaXRlQ29tcG9uZW50RGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZShkYXRhLm5hbWUsIGRhdGEubWF0ZXJpYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpIHtcclxuICAgICAgdGhpcy5fc3ByaXRlLmRyYXcoc2hhZGVyLCB0aGlzLl9vd25lcj8ud29ybGRNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3ByaXRlIH0gZnJvbSAnLi4vY29yZS9ncmFwaGljcy9hbmltYXRlZFNwcml0ZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSUNvbXBvbmVudEJ1aWxkZXIgfSBmcm9tICcuL0lDb21wb25lbnRCdWlsZGVyJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudERhdGEgfSBmcm9tICcuL0lDb21wb25lbnREYXRhJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vc3ByaXRlQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBleHRlbmRzIFNwcml0ZUNvbXBvbmVudERhdGFcclxuICBpbXBsZW1lbnRzIElDb21wb25lbnREYXRhXHJcbntcclxuICBwdWJsaWMgZnJhbWVXaWR0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgZnJhbWVIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGZyYW1lU2VxdWVuY2U6IG51bWJlcltdID0gW107XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIHN1cGVyLnNldEZyb21Kc29uKGpzb24pO1xyXG5cclxuICAgIGlmIChqc29uLmZyYW1lV2lkdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lV2lkdGggdG8gYmUgZGVmaW5lZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZVdpZHRoID0gTnVtYmVyKGpzb24uZnJhbWVXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lSGVpZ2h0IHRvIGJlIGRlZmluZWQnXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyYW1lSGVpZ2h0ID0gTnVtYmVyKGpzb24uZnJhbWVIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLmZyYW1lQ291bnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuaW1hdGVkIHNwcml0ZSBkYXRhIHJlcXVpcmVzIGZyYW1lQ291bnQgdG8gYmUgZGVmaW5lZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZUNvdW50ID0gTnVtYmVyKGpzb24uZnJhbWVDb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uZnJhbWVTZXF1ZW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQW5pbWF0ZWQgc3ByaXRlIGRhdGEgcmVxdWlyZXMgZnJhbWVTZXF1ZW5jZSB0byBiZSBkZWZpbmVkJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcmFtZVNlcXVlbmNlID0ganNvbi5mcmFtZVNlcXVlbmNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnYW5pbWF0ZWRTcHJpdGUnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogQW5pbWF0ZWRTcHJpdGU7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBBbmltYXRlZFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBBbmltYXRlZFNwcml0ZShcclxuICAgICAgZGF0YS5uYW1lLFxyXG4gICAgICBkYXRhLm1hdGVyaWFsTmFtZSxcclxuICAgICAgZGF0YS5mcmFtZVdpZHRoLFxyXG4gICAgICBkYXRhLmZyYW1lSGVpZ2h0LFxyXG4gICAgICBkYXRhLmZyYW1lV2lkdGgsXHJcbiAgICAgIGRhdGEuZnJhbWVIZWlnaHQsXHJcbiAgICAgIGRhdGEuZnJhbWVDb3VudCxcclxuICAgICAgZGF0YS5mcmFtZVNlcXVlbmNlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS51cGRhdGUodGltZSk7XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi9JQ29tcG9uZW50QnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRCdWlsZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUNvbXBvbmVudEJ1aWxkZXIgfSA9XHJcbiAgICB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogSUNvbXBvbmVudEJ1aWxkZXIpOiB2b2lkIHtcclxuICAgIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdENvbXBvbmVudChqc29uOiBhbnkpOiBJQ29tcG9uZW50IHtcclxuICAgIGlmIChqc29uLnR5cGUpIHtcclxuICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5fcmVnaXN0ZXJlZEJ1aWxkZXJzW1xyXG4gICAgICAgICAgU3RyaW5nKGpzb24udHlwZSlcclxuICAgICAgICBdLmJ1aWxkRnJvbUpzb24oanNvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ0NvbXBvbmVudCBtYW5hZ2VyIGVycm9yOiB0eXBlIGlzIG1pc3Npbmcgb3IgYnVpbGRlciBpcyBub3QgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCZWhhdmlvck1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElCZWhhdmlvckJ1aWxkZXIgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQnVpbGRlcihidWlsZGVyOiBJQmVoYXZpb3JCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEJlaGF2aW9yKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbXHJcbiAgICAgICAgICBTdHJpbmcoanNvbi50eXBlKVxyXG4gICAgICAgIF0uYnVpbGRGcm9tSnNvbihqc29uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQmVoYXZpb3IgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEtleXMge1xyXG4gIExFRlQgPSAzNyxcclxuICBVUCA9IDM4LFxyXG4gIFJJR0hUID0gMzksXHJcbiAgRE9XTiA9IDQwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogYm9vbGVhbltdID0gW107XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcclxuICAgICAgSW5wdXRNYW5hZ2VyLl9rZXlzW2ldID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBJbnB1dE1hbmFnZXIub25LZXlEb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIElucHV0TWFuYWdlci5vbktleVVwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNLZXlEb3duKGtleTogS2V5cyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIElucHV0TWFuYWdlci5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgIT09IDE2ICYmIGV2ZW50LmtleUNvZGUgIT09IDE3ICYmIGV2ZW50LmtleUNvZGUgIT09IDczKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBJbnB1dE1hbmFnZXIuX2tleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxNiAmJiBldmVudC5rZXlDb2RlICE9PSAxNyAmJiBldmVudC5rZXlDb2RlICE9PSA3Mykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi4vd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQmVoYXZpb3IgaW1wbGVtZW50cyBJQmVoYXZpb3Ige1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfZGF0YTogSUJlaGF2aW9yRGF0YTtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJQmVoYXZpb3JEYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMuX2RhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBhcHBseSh1c2VyRGF0YTogYW55KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0TWFuYWdlciwgS2V5cyB9IGZyb20gJy4uL2lucHV0L2lucHV0TWFuYWdlcic7XHJcbmltcG9ydCB7IEJhc2VCZWhhdmlvciB9IGZyb20gJy4vYmFzZUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yRGF0YSB9IGZyb20gJy4vSUJlaGF2aW9yRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCFqc29uLm5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIG11c3QgYmUgZGVmaW5lZCBpbiBiZWhhdmlvciBkYXRhLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IFN0cmluZyhqc29uLm5hbWUpO1xyXG5cclxuICAgIGlmIChqc29uLnNwZWVkKSB7XHJcbiAgICAgIHRoaXMuc3BlZWQgPSBOdW1iZXIoanNvbi5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciBpbXBsZW1lbnRzIElCZWhhdmlvckJ1aWxkZXIge1xyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdrZXlib2FyZE1vdmVtZW50JztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IEtleWJvYXJkTW92ZW1lbnRCZWhhdmlvcihkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZE1vdmVtZW50QmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3Ige1xyXG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMC4xO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yRGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5MRUZUKSAmJiB0aGlzLl9vd25lcikge1xyXG4gICAgICB0aGlzLl9vd25lci50cmFuc2Zvcm0ucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChJbnB1dE1hbmFnZXIuaXNLZXlEb3duKEtleXMuUklHSFQpICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKElucHV0TWFuYWdlci5pc0tleURvd24oS2V5cy5VUCkgJiYgdGhpcy5fb3duZXIpIHtcclxuICAgICAgdGhpcy5fb3duZXIudHJhbnNmb3JtLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmlzS2V5RG93bihLZXlzLkRPV04pICYmIHRoaXMuX293bmVyKSB7XHJcbiAgICAgIHRoaXMuX293bmVyLnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IzJztcclxuaW1wb3J0IHsgQmFzZUJlaGF2aW9yIH0gZnJvbSAnLi9iYXNlQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuL0lCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckJ1aWxkZXIgfSBmcm9tICcuL0lCZWhhdmlvckJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkJlaGF2aW9yRGF0YSBpbXBsZW1lbnRzIElCZWhhdmlvckRhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvO1xyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWpzb24ubmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgbXVzdCBiZSBkZWZpbmVkIGluIGJlaGF2aW9yIGRhdGEuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYW1lID0gU3RyaW5nKGpzb24ubmFtZSk7XHJcblxyXG4gICAgaWYgKGpzb24ucm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldEZyb21Kc29uKGpzb24ucm90YXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyIGltcGxlbWVudHMgSUJlaGF2aW9yQnVpbGRlciB7XHJcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3JvdGF0aW9uJztcclxuICB9XHJcblxyXG4gIGJ1aWxkRnJvbUpzb24oanNvbjogYW55KTogSUJlaGF2aW9yIHtcclxuICAgIGxldCBkYXRhID0gbmV3IFJvdGF0aW9uQmVoYXZpb3JEYXRhKCk7XHJcbiAgICBkYXRhLnNldEZyb21Kc29uKGpzb24pO1xyXG4gICAgcmV0dXJuIG5ldyBSb3RhdGlvbkJlaGF2aW9yKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3IgZXh0ZW5kcyBCYXNlQmVoYXZpb3Ige1xyXG4gIHByaXZhdGUgX3JvdGF0aW9uOiBWZWN0b3IzO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUm90YXRpb25CZWhhdmlvckRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGF0YS5yb3RhdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lcj8udHJhbnNmb3JtLnJvdGF0aW9uLmFkZCh0aGlzLl9yb3RhdGlvbik7XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBzaGFkZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhZGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Byb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3VuaWZvcm1zOiB7IFtuYW1lOiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBmcmFnbWVudCBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2UoKTogdm9pZCB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbG9jYXRpb24gb2YgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIG5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJldHJpZXZlXHJcbiAgICogQHJldHVybnMgQW4gYXR0cmlidXRlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5fYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgYXR0cmlidXRlIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xyXG4gICAgaWYgKHRoaXMuX3VuaWZvcm1zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCB1bmlmb3JtIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fdW5pZm9ybXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZCh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdEF0dHJpYnV0ZXMoKTtcclxuICAgIHRoaXMuZGV0ZWN0VW5pZm9ybXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFNoYWRlcihzb3VyY2U6IHN0cmluZywgc2hhZGVyVHlwZTogbnVtYmVyKTogV2ViR0xTaGFkZXIge1xyXG4gICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSkgYXMgV2ViR0xTaGFkZXI7XHJcblxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIGxldCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvbXBpbGluZyBzaGFkZXI6ICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyLFxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLl9wcm9ncmFtKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycnJvciBsaW5raW5nIHNoYWRlciAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdEF0dHJpYnV0ZXMoKTogdm9pZCB7XHJcbiAgICAvLyBnaXZlcyBhbGwgYXR0cmlidXRlcyBpbiB0aGUgc2hhZGVyXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVDb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9BVFRSSUJVVEVTXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBhdHRyaWJ1dGVJbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVBdHRyaWIoXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIWF0dHJpYnV0ZUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXNbYXR0cmlidXRlSW5mby5uYW1lXSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgYXR0cmlidXRlSW5mby5uYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdFVuaWZvcm1zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdW5pZm9ybUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX1VOSUZPUk1TXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgdW5pZm9ybUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl91bmlmb3Jtc1t1bmlmb3JtSW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIHVuaWZvcm1JbmZvLm5hbWVcclxuICAgICAgKSBhcyBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1NoYWRlciBleHRlbmRzIFNoYWRlciB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2Jhc2ljJyk7XHJcblxyXG4gICAgdGhpcy5sb2FkKHRoaXMuZ2V0VmVydGV4U291cmNlKCksIHRoaXMuZ2V0RnJhZ21lbnRTb3VyY2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnRleFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIGF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG5cclxuICAgIHVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcbiAgICB1bmlmb3JtIG1hdDQgdV9tb2RlbDtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogdV9tb2RlbCAqIHZlYzQoYV9wb3NpdGlvbiwgMS4wKTtcclxuICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGcmFnbWVudFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIHVuaWZvcm0gdmVjNCB1X3RpbnQ7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X2RpZmZ1c2U7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdV90aW50ICogdGV4dHVyZTJEKHVfZGlmZnVzZSwgdl90ZXhDb29yZCk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gIHByaXZhdGUgX3I6IG51bWJlcjtcclxuICBwcml2YXRlIF9nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2E6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcjogbnVtYmVyID0gMjU1LFxyXG4gICAgZzogbnVtYmVyID0gMjU1LFxyXG4gICAgYjogbnVtYmVyID0gMjU1LFxyXG4gICAgYTogbnVtYmVyID0gMjU1XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9yID0gcjtcclxuICAgIHRoaXMuX2cgPSBnO1xyXG4gICAgdGhpcy5fYiA9IGI7XHJcbiAgICB0aGlzLl9hID0gYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGcodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYkZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYiAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBiKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2E7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2EgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9hID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2FdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXRBcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IgLyAyNTUuMCwgdGhpcy5fZyAvIDI1NS4wLCB0aGlzLl9iIC8gMjU1LjAsIHRoaXMuX2EgLyAyNTUuMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9GbG9hdEFycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aGl0ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsYWNrKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVkKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMjU1LCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBncmVlbigpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDI1NSwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmx1ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDI1NSwgMjU1KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBc3NldE1hbmFnZXIsXHJcbiAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVELFxyXG59IGZyb20gJy4uL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmNvbnN0IExFVkVMOiBudW1iZXIgPSAwO1xyXG5jb25zdCBCT1JERVI6IG51bWJlciA9IDA7XHJcbmNvbnN0IFRFTVBfSU1BR0VfREFUQTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaGFuZGxlOiBXZWJHTFRleHR1cmU7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyID0gMSwgaGVpZ2h0OiBudW1iZXIgPSAxKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlID0gZ2wuY3JlYXRlVGV4dHVyZSgpIGFzIFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZShNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9uYW1lLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNpZ25hdHVyZSBpcyBmb3IgbG9hZGluZyByYXcgZGF0YSBpbnRvIGEgdGV4dHVyZVxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIEJPUkRFUixcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgVEVNUF9JTUFHRV9EQVRBXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldEFzc2V0KHRoaXMuX25hbWUpIGFzIEltYWdlQXNzZXQ7XHJcbiAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChhc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGdsLmRlbGV0ZVRleHR1cmUodGhpcy5faGFuZGxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYWtlcyBhIGNhbGwgdG8gd2ViZ2wgYW5kIHRlbGxzIGl0IHdoYXQgY2hhbm5lbCB0byBhY3RpdmF0ZSBvblxyXG4gICAqICgzMiB0b3RhbClcclxuICAgKiBAcGFyYW0gdGV4dHVyZVVuaXQgdGV4dHVyZSB0byBhY3RpdmF0ZSBvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZUFuZEJpbmQodGV4dHVyZVVuaXQ6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXh0dXJlVW5pdCk7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PT0gTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbmFtZSkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KG1lc3NhZ2UuY29udGV4dCBhcyBJbWFnZUFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQ6IEltYWdlQXNzZXQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3dpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBhc3NldC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaWduYXR1cmUgaXMgZm9yIGxvYWRpbmcgYW4gaW1hZ2UgYml0bWFwcGVyXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgYXNzZXQuZGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1Bvd2VyT2YyKCkpIHtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYSBtaXAgbWFwIGFuZCBjbGFtcCB3cmFwcGluZyB0byBlZGdlLlxyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgfVxyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Bvd2VyT2YyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc1ZhbHVlUG93ZXJPZjIodGhpcy5fd2lkdGgpICYmIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX2hlaWdodClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsdWVQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJztcclxuXHJcbmNsYXNzIFRleHR1cmVSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgdGV4dHVyZTogVGV4dHVyZTtcclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfdGV4dHVyZXM6IHsgW25hbWU6IHN0cmluZ106IFRleHR1cmVSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogVGV4dHVyZSB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRleHR1cmVOYW1lKTtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSA9IG5ldyBUZXh0dXJlUmVmZXJlbmNlTm9kZSh0ZXh0dXJlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VUZXh0dXJlKHRleHR1cmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYEEgdGV4dHVyZSBuYW1lZCAke3RleHR1cmVOYW1lfSBkb2VzIG5vdCBleGlzdCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZWxlYXNlZC5gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50LS07XHJcbiAgICAgIGlmIChUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50IDwgMSkge1xyXG4gICAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0udGV4dHVyZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJztcclxuaW1wb3J0IHsgVGV4dHVyZU1hbmFnZXIgfSBmcm9tICcuL3RleHR1cmVNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbCB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZTogVGV4dHVyZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF90aW50OiBDb2xvcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlmZnVzZVRleHR1cmVOYW1lOiBzdHJpbmcsIHRpbnQ6IENvbG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSA9IGRpZmZ1c2VUZXh0dXJlTmFtZTtcclxuICAgIHRoaXMuX3RpbnQgPSB0aW50O1xyXG5cclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IFRleHR1cmVNYW5hZ2VyLmdldFRleHR1cmUoXHJcbiAgICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpZmZ1c2VUZXh0dXJlKCk6IFRleHR1cmUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLl9kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2RpZmZ1c2VUZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0aW50KCk6IENvbG9yIHtcclxuICAgIHJldHVybiB0aGlzLl90aW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBkaWZmdXNlVGV4dHVyZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIucmVsZWFzZVRleHR1cmUodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IFRleHR1cmVNYW5hZ2VyLmdldFRleHR1cmUoXHJcbiAgICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4NHg0IHtcclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gSWRlbnRpdHkgbWF0cml4IChkZWZhdWx0IG1hdHJpeClcclxuICAgIHRoaXMuX2RhdGEgPSBbXHJcbiAgICAgIC8vIHJvdyAxXHJcbiAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAyXHJcbiAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAzXHJcbiAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgIC8vIHJvdyA0XHJcbiAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0eDQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9ydGhvZ3JhcGhpYyBtYXRyaXhcclxuICAgKiBObyBwZXJzcGVjdGl2ZSwgcmVuZGVycyBzb21ldGhpbmcgYXMgaWYgaXQgaXMgZmxhdCBpbiBzcGFjZVxyXG4gICAqIEBwYXJhbSBsZWZ0IHBvc2l0aW9uIGZyb20gbGVmdCBvZiBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMClcclxuICAgKiBAcGFyYW0gcmlnaHQgZGlzdGFuY2UgdG8gcmlnaHQgc2lkZSBvZiBzY3JlZW4gZnJvbSB0aGUgbGVmdCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxOTIwKVxyXG4gICAqIEBwYXJhbSBib3R0b20gcG9zaXRpb24gZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMCkgd2ViZ2wgc3RhcnRzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQHBhcmFtIHRvcCBwb3NpdGlvbiBmcm9tIGJvdHRvbSBvZiBzY3JlZW4gdG8gdGhlIHRvcCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxMDgwKVxyXG4gICAqIEBwYXJhbSBuZWFyQ2xpcCBzb21ldGhpbmcgbmVnYXRpdmUgKHRvIHByZXZlbnQgY2xpcHBpbmcgaW4gZnJvbnQpXHJcbiAgICogQHBhcmFtIGZhckNsaXAgYXJiaXRyYXJ5IG51bWJlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljKFxyXG4gICAgbGVmdDogbnVtYmVyLFxyXG4gICAgcmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgdG9wOiBudW1iZXIsXHJcbiAgICBuZWFyQ2xpcDogbnVtYmVyLFxyXG4gICAgZmFyQ2xpcDogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGNvbnN0IGxyOiBudW1iZXIgPSAxLjAgLyAobGVmdCAtIHJpZ2h0KTtcclxuICAgIGNvbnN0IGJ0OiBudW1iZXIgPSAxLjAgLyAoYm90dG9tIC0gdG9wKTtcclxuICAgIGNvbnN0IG5mOiBudW1iZXIgPSAxLjAgLyAobmVhckNsaXAgLSBmYXJDbGlwKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gLTIuMCAqIGxyO1xyXG4gICAgbS5fZGF0YVs1XSA9IC0yLjAgKiBidDtcclxuICAgIG0uX2RhdGFbMTBdID0gMi4wICogbmY7XHJcblxyXG4gICAgbS5fZGF0YVsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xyXG4gICAgbS5fZGF0YVsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxNF0gPSAoZmFyQ2xpcCArIG5lYXJDbGlwKSAqIG5mO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXRyaXggdGhhdCBob2xkcyBkYXRhIHRoYXQgcmVwcmVzZW50cyBtb3ZlbWVudCBvZiBhbiBvYmplY3RcclxuICAgKiB0aHJvdWdoIHNwYWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24ocG9zaXRpb246IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgLy8gZWRpdGluZyAxc3QgMyBudW1iZXJzIGluIGxhc3Qgcm93IG9mIG1hdHJpeDRcclxuICAgIG0uX2RhdGFbMTJdID0gcG9zaXRpb24ueDtcclxuICAgIG0uX2RhdGFbMTNdID0gcG9zaXRpb24ueTtcclxuICAgIG0uX2RhdGFbMTRdID0gcG9zaXRpb24uejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSByb3RhdGlvbiBtYXRyaXggb24gdGhlIFggYXhpcyBmcm9tIHRoZSBwcm92aWRlZCBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcbiAgICBtLl9kYXRhWzZdID0gcztcclxuICAgIG0uX2RhdGFbOV0gPSAtcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMl0gPSAtcztcclxuICAgIG0uX2RhdGFbOF0gPSBzO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblooYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICAvLyByYWRpYW5zIGFyZSB1c2VkIGluIGFsbW9zdCBhbGwgbWF0aCBsaWJyYXJpZXMgYmVjYXVzZSBpdCBpcyBtb3JlIHBlcmZvcm1hbnRcclxuICAgIC8vIHVuZGVyIHRoZSBob29kXHJcblxyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMV0gPSBzO1xyXG4gICAgbS5fZGF0YVs0XSA9IC1zO1xyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWFlaKFxyXG4gICAgeFJhZGlhbnM6IG51bWJlcixcclxuICAgIHlSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB6UmFkaWFuczogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGNvbnN0IHJ4ID0gTWF0cml4NHg0LnJvdGF0aW9uWCh4UmFkaWFucyk7XHJcbiAgICBjb25zdCByeSA9IE1hdHJpeDR4NC5yb3RhdGlvblkoeVJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnogPSBNYXRyaXg0eDQucm90YXRpb25aKHpSYWRpYW5zKTtcclxuXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseShyeiwgcnkpLCByeCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHNjYWxlOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBzY2FsZS54O1xyXG4gICAgbS5fZGF0YVs1XSA9IHNjYWxlLnk7XHJcbiAgICBtLl9kYXRhWzEwXSA9IHNjYWxlLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IE1hdHJpeDR4NCwgYjogTWF0cml4NHg0KTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBiMDAgPSBiLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYjAxID0gYi5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGIwMiA9IGIuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBiMDMgPSBiLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYjEwID0gYi5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGIxMSA9IGIuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBiMTIgPSBiLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYjEzID0gYi5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGIyMCA9IGIuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBiMjEgPSBiLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYjIyID0gYi5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGIyMyA9IGIuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBiMzAgPSBiLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYjMxID0gYi5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGIzMiA9IGIuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBiMzMgPSBiLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbGV0IGEwMCA9IGEuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBhMDEgPSBhLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYTAyID0gYS5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGEwMyA9IGEuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBhMTAgPSBhLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYTExID0gYS5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGExMiA9IGEuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBhMTMgPSBhLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYTIwID0gYS5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGEyMSA9IGEuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBhMjIgPSBhLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYTIzID0gYS5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGEzMCA9IGEuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBhMzEgPSBhLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYTMyID0gYS5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGEzMyA9IGEuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xyXG4gICAgbS5fZGF0YVs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xyXG4gICAgbS5fZGF0YVs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcclxuICAgIG0uX2RhdGFbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcclxuICAgIG0uX2RhdGFbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbShtOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gbS5fZGF0YVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHNjYWxlOiBWZWN0b3IzID0gVmVjdG9yMy5vbmU7XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgdGhpcy5yb3RhdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucm90YXRpb24pO1xyXG4gICAgdGhpcy5zY2FsZS5jb3B5RnJvbSh0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBNYXRyaXg0eDQudHJhbnNsYXRpb24odGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uID0gTWF0cml4NHg0LnJvdGF0aW9uWFlaKFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLngsXHJcbiAgICAgIHRoaXMucm90YXRpb24ueSxcclxuICAgICAgdGhpcy5yb3RhdGlvbi56XHJcbiAgICApO1xyXG4gICAgbGV0IHNjYWxlID0gTWF0cml4NHg0LnNjYWxlKHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIC8vIG9yZGVyIG1hdHRlcnMgaGVyZVxyXG4gICAgLy8gVCAqIFIgKiBTXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseSh0cmFuc2xhdGlvbiwgcm90YXRpb24pLCBzY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0RnJvbUpzb24oanNvbi5yb3RhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uc2NhbGUpIHtcclxuICAgICAgdGhpcy5zY2FsZS5zZXRGcm9tSnNvbihqc29uLnNjYWxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuLi9iZWhhdmlvcnMvSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL3RyYW5zZm9ybSc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltT2JqZWN0IHtcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBTaW1PYmplY3RbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2JlaGF2aW9yczogSUJlaGF2aW9yW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG4gIHByaXZhdGUgX3dvcmxkTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybTogVHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzY2VuZT86IFNjZW5lKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudCB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdvcmxkTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gdGhpcy5fd29ybGRNYXRyaXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgY2hpbGQub25BZGRlZCh0aGlzLl9zY2VuZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNoaWxkLl9wYXJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIC8vIGRvdWJsZSBjaGVjayB0aGlzIHdvcmtzXHJcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKChfLCBpZHgpID0+IGluZGV4ICE9PSBpZHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9iamVjdEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gY2hpbGQuZ2V0T2JqZWN0QnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRCZWhhdmlvcihiZWhhdmlvcjogSUJlaGF2aW9yKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XHJcbiAgICBiZWhhdmlvci5zZXRPd25lcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC5sb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5sb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYWxNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeChcclxuICAgICAgdGhpcy5fcGFyZW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9wYXJlbnQud29ybGRNYXRyaXggOiB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZSh0aW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JlaGF2aW9ycy5mb3JFYWNoKChiZWhhdmlvcikgPT4ge1xyXG4gICAgICBiZWhhdmlvci51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBlbnVtIFpvbmVTdGF0ZSB7XHJcbiAgVU5JTklUSUFMSVpFRCxcclxuICBMT0FESU5HLFxyXG4gIFVQREFUSU5HLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IFpvbmVTdGF0ZSA9IFpvbmVTdGF0ZS5VTklOSVRJQUxJWkVEO1xyXG4gIHByaXZhdGUgX2dsb2JhbElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh6b25lRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoem9uZURhdGEub2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBpbml0aWFsaXphdGlvbiBlcnJvcjogb2JqZWN0cyBub3QgcHJlc2VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvbmVEYXRhLm9iamVjdHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvIGFzIFNpbU9iamVjdCwgdGhpcy5fc2NlbmUucm9vdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuTE9BRElORztcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5sb2FkKCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5sb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG9uRGVhY3RpdmF0ZWQoKTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIGxvYWRTaW1PYmplY3QoZGF0YVNlY3Rpb246IGFueSwgcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGxldCBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGlmIChkYXRhU2VjdGlvbi5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbmFtZSA9IFN0cmluZyhkYXRhU2VjdGlvbi5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9nbG9iYWxJZCsrO1xyXG4gICAgbGV0IHNpbU9iamVjdCA9IG5ldyBTaW1PYmplY3QodGhpcy5fZ2xvYmFsSWQsIG5hbWUsIHRoaXMuX3NjZW5lKTtcclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24udHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc2ltT2JqZWN0LnRyYW5zZm9ybS5zZXRGcm9tSnNvbihkYXRhU2VjdGlvbi50cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jb21wb25lbnRzKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNvbXBvbmVudHMuZm9yRWFjaCgoYzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50TWFuYWdlci5leHRyYWN0Q29tcG9uZW50KGMpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLmJlaGF2aW9ycykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5iZWhhdmlvcnMuZm9yRWFjaCgoYjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBCZWhhdmlvck1hbmFnZXIuZXh0cmFjdEJlaGF2aW9yKGIpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRCZWhhdmlvcihiZWhhdmlvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jaGlsZHJlbiAmJiBkYXRhU2VjdGlvbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goKG86IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvLCBzaW1PYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50LmFkZENoaWxkKHNpbU9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2pzb25Bc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tICcuL3pvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVNYW5hZ2VyIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZ2xvYmFsWm9uZUlEOiBudW1iZXIgPSAtMTtcclxuICAvLyAgcHJpdmF0ZSBzdGF0aWMgX3pvbmVzOiB7IFtpZDogbnVtYmVyXTogWm9uZSB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRab25lczogeyBbaWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2FjdGl2ZVpvbmU6IFpvbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFpvbmVNYW5hZ2VyO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgWm9uZU1hbmFnZXIuX2luc3QgPSBuZXcgWm9uZU1hbmFnZXIoKTtcclxuICAgIC8vIHRlbXBvcmFyeVxyXG4gICAgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1swXSA9ICdzcmMvYXNzZXRzL3pvbmVzL3Rlc3Rab25lLmpzb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGFuZ2Vab25lKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uRGVhY3RpdmF0ZWQoKTtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudW5sb2FkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChBc3NldE1hbmFnZXIuaXNBc3NldExvYWRlZChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSkpIHtcclxuICAgICAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICBab25lTWFuYWdlci5sb2FkWm9uZShhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0sXHJcbiAgICAgICAgICBab25lTWFuYWdlci5faW5zdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWm9uZSBpZDogJHtpZH0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlLmluZGV4T2YoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEKSAhPT0gLTEpIHtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEpzb25Bc3NldDtcclxuICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbG9hZFpvbmUoYXNzZXQ6IEpzb25Bc3NldCk6IHZvaWQge1xyXG4gICAgY29uc3Qgem9uZURhdGEgPSBhc3NldC5kYXRhO1xyXG4gICAgbGV0IHpvbmVJZDogbnVtYmVyO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIGlkIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZUlkID0gTnVtYmVyKHpvbmVEYXRhLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAodHlwZW9mIHpvbmVEYXRhID09PSAnb2JqZWN0JyAmJiB6b25lRGF0YSkge1xyXG4gICAgICBpZiAoIXpvbmVEYXRhLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIG5hbWUgbm90IHByZXNlbnQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB6b25lTmFtZSA9IFN0cmluZyh6b25lRGF0YS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgem9uZURlc2NyaXB0aW9uID0gU3RyaW5nKHpvbmVEYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gbmV3IFpvbmUoem9uZUlkISwgem9uZU5hbWUsIHpvbmVEZXNjcmlwdGlvbik7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5pbml0aWFsaXplKHpvbmVEYXRhKTtcclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uQWN0aXZhdGVkKCk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5sb2FkKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWF0ZWRTcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi9iZWhhdmlvcnMvYmVoYXZpb3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL2tleWJvYXJkTW92ZW1lbnRCZWhhdmlvcic7XHJcbmltcG9ydCB7IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9iZWhhdmlvcnMvcm90YXRpb25CZWhhdmlvcic7XHJcbmltcG9ydCB7IGdsLCBHTFV0aWxpdGllcyB9IGZyb20gJy4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBCYXNpY1NoYWRlciB9IGZyb20gJy4vZ2wvc2hhZGVycy9iYXNpY1NoYWRlcic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9ncmFwaGljcy9jb2xvcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSAnLi9pbnB1dC9pbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuL21hdGgvbWF0cml4NHg0JztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlQnVzJztcclxuaW1wb3J0IHsgWm9uZU1hbmFnZXIgfSBmcm9tICcuL3dvcmxkL3pvbmVNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBnYW1lIGVuZ2luZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9iYXNpY1NoYWRlcjogQmFzaWNTaGFkZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3ByZXZpb3VzVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdXAgdGhpcyBlbmdpbmVcclxuICAgKi9cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYW52YXMgPSBHTFV0aWxpdGllcy5pbml0aWFsaXplKCk7XHJcbiAgICBBc3NldE1hbmFnZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAuMywgMSk7XHJcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG4gICAgbGV0IGltYWdlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBqc29uQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3pvbmVzLycsIHRydWUsIC9cXC4oanNvbikkL2kpO1xyXG5cclxuICAgIHRoaXMubG9hZEFsbChpbWFnZUNvbnRleHQpO1xyXG4gICAgdGhpcy5sb2FkQWxsKGpzb25Db250ZXh0KTtcclxuXHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlciA9IG5ldyBCYXNpY1NoYWRlcigpO1xyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIudXNlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBtYXRlcmlhbHNcclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3N0b25lV2FsbCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvc3RvbmVfd2FsbC5qcGcnLFxyXG4gICAgICAgIENvbG9yLndoaXRlKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICd3b29kUGxhbmsnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3dvb2RfcGxhbmsuanBnJyxcclxuICAgICAgICBDb2xvci53aGl0ZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbCgnYmlyZCcsICdzcmMvYXNzZXRzL3RleHR1cmVzL2JpcmQucG5nJywgQ29sb3Iud2hpdGUoKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gRmluZCBhIGJldHRlciBwbGFjZSBmb3IgdGhpcz9cclxuICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJCdWlsZGVyKG5ldyBTcHJpdGVDb21wb25lbnRCdWlsZGVyKCkpO1xyXG4gICAgQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IEFuaW1hdGVkU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG4gICAgQmVoYXZpb3JNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgS2V5Ym9hcmRNb3ZlbWVudEJlaGF2aW9yQnVpbGRlcigpKTtcclxuXHJcbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byBiZSByZWFkIGZyb20gZ2FtZSBjb25maWdcclxuICAgIFpvbmVNYW5hZ2VyLmNoYW5nZVpvbmUoMCk7XHJcblxyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMubG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplcyB0aGUgY2FudmFzIHRvIGZpdCB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl9wcm9qZWN0aW9uID0gTWF0cml4NHg0Lm9ydGhvZ3JhcGhpYyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgLTEwMC4wLFxyXG4gICAgICAgIDEwMC4wXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRBbGwocmVxdWlyZUNvbnRleHQ6IF9fV2VicGFja01vZHVsZUFwaS5SZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmVxdWlyZUNvbnRleHQua2V5cygpLmZvckVhY2gocmVxdWlyZUNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZGVsdGEgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3ByZXZpb3VzVGltZTtcclxuXHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICB0aGlzLl9wcmV2aW91c1RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Jhc2ljU2hhZGVyKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLnJlbmRlcih0aGlzLl9iYXNpY1NoYWRlcik7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdW5pZm9ybXNcclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlciAmJiB0aGlzLl9wcm9qZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3Rpb25Qb3NpdGlvbiA9XHJcbiAgICAgICAgdGhpcy5fYmFzaWNTaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3Byb2plY3Rpb24nKTtcclxuXHJcbiAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgICAgcHJvamVjdGlvblBvc2l0aW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fcHJvamVjdGlvbi5kYXRhKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vY29yZS9lbmdpbmUnO1xyXG5cclxudmFyIGVuZ2luZTogRW5naW5lO1xyXG4vLyBUaGUgbWFpbiBlbnRyeSBwb2ludCB0byB0aGUgYXBwbGljYXRpb25cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbiAgZW5naW5lLnN0YXJ0KCk7XHJcbn07XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lLnJlc2l6ZSgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=