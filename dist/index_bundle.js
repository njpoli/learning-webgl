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


;// CONCATENATED MODULE: ./src/core/assets/assetManager.ts


var MESSAGE_ASSET_LOADER_ASSET_LOADED = 'MESSAGE_ASSET_LOADER_ASSET_LOADED::';
var AssetManager = /** @class */ (function () {
    function AssetManager() {
    }
    AssetManager.initialize = function () {
        AssetManager._loaders.push(new ImageAssetLoader());
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

var BasicShader = /** @class */ (function (_super) {
    __extends(BasicShader, _super);
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
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
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


;// CONCATENATED MODULE: ./src/core/gl/glBuffer.ts

/**
 * Represents the information needed for a GLBuffer attribute
 */
var AttributeInfo = /** @class */ (function () {
    function AttributeInfo() {
    }
    return AttributeInfo;
}());

/**
 * Represents a WebGL buffer
 */
var GLBuffer = /** @class */ (function () {
    /**
     * Creates a new GL Buffer.
     * @param elementSize The size of each element in the buffer.
     * @param dataType The data type of the buffer. Default: gl.FLOAT
     * @param targetBufferType The buffer target type. gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER. Default: gl.ARRAY_BUFFER
     * @param mode The drawing mode of the buffer. (i.e. gl.TRIANGLES or gl.LINES). Default: gl.TRIANGLES
     */
    function GLBuffer(elementSize, dataType, targetBufferType, mode) {
        if (dataType === void 0) { dataType = gl.FLOAT; }
        if (targetBufferType === void 0) { targetBufferType = gl.ARRAY_BUFFER; }
        if (mode === void 0) { mode = gl.TRIANGLES; }
        this._hasAttributeLocation = false;
        this._data = [];
        this._attributes = [];
        this._elementSize = elementSize;
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
        this._stride = this._elementSize * this._typeSize;
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
        this._attributes.push(info);
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


;// CONCATENATED MODULE: ./src/core/graphics/sprite.ts



var Sprite = /** @class */ (function () {
    function Sprite(name, materialName, width, height) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
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
        this._buffer = new GLBuffer(5);
        var positionAttribute = new AttributeInfo();
        // Removed reference to shader, bad practice to pass shader info to sprite on load
        // Still not ideal (referencing a_location in vertexShaderSource by hardcoding 0)
        // Each variable in shaderSource is referenced by index in order of declaration (e.g. because a_location is the first variable it is index 0)
        positionAttribute.location = 0;
        positionAttribute.offset = 0;
        positionAttribute.size = 3;
        this._buffer.addAttributeLocation(positionAttribute);
        var texCoordAttribute = new AttributeInfo();
        texCoordAttribute.location = 1;
        // matches the size of the postion attribute
        texCoordAttribute.offset = 3;
        texCoordAttribute.size = 2;
        this._buffer.addAttributeLocation(texCoordAttribute);
        // prettier-ignore
        var vertices = [
            // x, y, z, U: texture x, V: texture y
            // triangle 1
            // point 1
            0, 0, 0, 0, 0,
            // point 2
            0, this._height, 0, 0, 1.0,
            // point 3
            this._width, this._height, 0, 1.0, 1.0,
            // triangle 2
            // point 4
            this._width, this._height, 0, 1.0, 1.0,
            // point 5
            this._width, 0, 0, 1.0, 0,
            // point 6
            0, 0, 0, 0, 0,
        ];
        this._buffer.pushBackData(vertices);
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


;// CONCATENATED MODULE: ./src/components/baseComponent.ts
var BaseComponent = /** @class */ (function () {
    function BaseComponent(name) {
        this.name = name;
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


var SpriteComponent = /** @class */ (function (_super) {
    spriteComponent_extends(SpriteComponent, _super);
    function SpriteComponent(name, materialName) {
        var _this = _super.call(this, name) || this;
        _this._sprite = new Sprite(name, materialName);
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
    return Vector3;
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
    return Transform;
}());


;// CONCATENATED MODULE: ./src/core/world/simObject.ts


var SimObject = /** @class */ (function () {
    function SimObject(id, name, scene) {
        this._children = [];
        this._isLoaded = false;
        this._components = [];
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
    return Zone;
}());


;// CONCATENATED MODULE: ./src/core/world/testZone.ts
var testZone_extends = (undefined && undefined.__extends) || (function () {
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



var TestZone = /** @class */ (function (_super) {
    testZone_extends(TestZone, _super);
    function TestZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestZone.prototype.load = function () {
        //this._sprite = new Sprite('test', 'stoneWall');
        //this._sprite.load();
        //this._sprite.position.x = 200;
        //this._sprite.position.y = 100;
        this._parentObject = new SimObject(0, 'parentObject');
        this._parentSprite = new SpriteComponent('parentTest', 'woodPlank');
        this._parentObject.addComponent(this._parentSprite);
        this._parentObject.transform.position.x = 800;
        this._parentObject.transform.position.y = 400;
        this._testObject = new SimObject(1, 'testObject');
        this._testSprite = new SpriteComponent('test', 'stoneWall');
        this._testObject.addComponent(this._testSprite);
        this._testObject.transform.position.x = 100;
        this._testObject.transform.position.y = 100;
        this._parentObject.addChild(this._testObject);
        this.scene.addObject(this._parentObject);
        _super.prototype.load.call(this);
    };
    TestZone.prototype.update = function (time) {
        this._parentObject.transform.rotation.z += 0.015;
        this._testObject.transform.rotation.z += 0.01;
        _super.prototype.update.call(this, time);
    };
    return TestZone;
}(Zone));


;// CONCATENATED MODULE: ./src/core/world/zoneManager.ts


var ZoneManager = /** @class */ (function () {
    function ZoneManager() {
    }
    ZoneManager.createZone = function (name, description) {
        ZoneManager._globalZoneID++;
        var zone = new Zone(ZoneManager._globalZoneID, name, description);
        ZoneManager._zones[ZoneManager._globalZoneID] = zone;
        return ZoneManager._globalZoneID;
    };
    // this is temporary code until file loading is supported
    ZoneManager.createTestZone = function () {
        ZoneManager._globalZoneID++;
        var zone = new TestZone(ZoneManager._globalZoneID, 'test', 'A simple test zone.');
        ZoneManager._zones[ZoneManager._globalZoneID] = zone;
        return ZoneManager._globalZoneID;
    };
    ZoneManager.changeZone = function (id) {
        if (ZoneManager._activeZone !== undefined) {
            ZoneManager._activeZone.onDeactivated();
            ZoneManager._activeZone.unload();
        }
        if (ZoneManager._zones[id] !== undefined) {
            ZoneManager._activeZone = ZoneManager._zones[id];
            ZoneManager._activeZone.onActivated();
            ZoneManager._activeZone.load();
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
    ZoneManager._globalZoneID = -1;
    ZoneManager._zones = {};
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
    }
    /**
     * Starts up this engine
     */
    Engine.prototype.start = function () {
        this._canvas = GLUtilities.initialize();
        AssetManager.initialize();
        gl.clearColor(0, 0, 0, 1);
        var context = __webpack_require__(245);
        this.loadAllImages(context);
        this._basicShader = new BasicShader();
        this._basicShader.use();
        // Load materials
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall_128x128.jpg', new Color(155, 155, 255, 255)));
        MaterialManager.registerMaterial(new Material('woodPlank', 'src/assets/textures/wood_plank_128x128.jpg', new Color(155, 155, 255, 255)));
        var zoneId = ZoneManager.createTestZone();
        // Load
        ZoneManager.changeZone(zoneId);
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
        MessageBus.update(0);
        ZoneManager.update(0);
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
    Engine.prototype.loadAllImages = function (requireContext) {
        requireContext.keys().forEach(requireContext);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1FBQ3JCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFdEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEsa0JBQVEsR0FBdEIsVUFBdUIsQ0FBWSxFQUFFLENBQVk7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUV4QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxL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Q0QscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sOEJBQWEsR0FBckIsVUFBc0IsY0FBaUQ7UUFDckUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7QUNySG9CO0FBQ2tCO0FBRXZDLElBQUksTUFBYyxDQUFDO0FBQ25CLDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy90ZXh0dXJlc3xzeW5jfEM6Ly4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VCdXMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvaW1hZ2VBc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9hc3NldE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9jb2xvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRyaXg0eDQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29tcG9uZW50cy9zcHJpdGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NpbU9iamVjdC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NjZW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3Rlc3Rab25lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL3N0b25lX3dhbGwuanBnXCI6IDE5MCxcblx0XCIuL3N0b25lX3dhbGxfMTI4eDEyOC5qcGdcIjogNzM4LFxuXHRcIi4vd29vZF9wbGFuay5qcGdcIjogODQ3LFxuXHRcIi4vd29vZF9wbGFua18xMjh4MTI4LmpwZ1wiOiAzMDZcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlIHtcclxuICBwdWJsaWMgbWVzc2FnZTogTWVzc2FnZTtcclxuICBwdWJsaWMgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWVzc2FnZTogTWVzc2FnZSwgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB9IGZyb20gJy4vbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlUHJpb3JpdHkgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdXMge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zdWJzY3JpcHRpb25zOiB7IFtjb2RlOiBzdHJpbmddOiBJTWVzc2FnZUhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9ub3JtYWxRdWV1ZU1lc3NhZ2VQZXJVcGRhdGU6IG51bWJlciA9IDEwO1xyXG4gIHByaXZhdGUgc3RhdGljIF9ub3JtYWxNZXNzYWdlUXVldWU6IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkU3Vic2NyaXB0aW9uKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmluZGV4T2YoaGFuZGxlcikgIT09IC0xKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnQXR0ZW1wdGluZyB0byBhZGQgYSBkdXBsaWNhdGUgaGFuZGxlciB0byBjb2RlICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnLiBTdWJzY3JpcHRpb24gbm90IGFkZGVkLidcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlU3Vic2NyaXB0aW9uKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyBOb3Qgc3VyZSBpZiB0aGlzIGlzIGNvcnJlY3RcclxuICAgIGlmICghTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0Nhbm5vdCB1bnN1YnNjcmliZSBoYW5kbGVyIGZyb20gY29kZTogJyArXHJcbiAgICAgICAgICBjb2RlICtcclxuICAgICAgICAgICcgYmVjYXVzZSB0aGF0IGNvZGUgZG9lcyBub3Qgc3Vic2NyaWJlZCB0by4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm9kZUluZGV4ID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgaWYgKG5vZGVJbmRleCAhPT0gLTEpIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uZmlsdGVyKFxyXG4gICAgICAgIChfLCBpZHgpID0+IGlkeCAhPT0gbm9kZUluZGV4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHBvc3QobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2UgcG9zdGVkOicsIG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgaGFuZGxlcnMgPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW21lc3NhZ2UuY29kZV07XHJcbiAgICBpZiAoIWhhbmRsZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVycy5mb3JFYWNoKChoKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLnByaW9yaXR5ID09PSBNZXNzYWdlUHJpb3JpdHkuSElHSCkge1xyXG4gICAgICAgIGgub25NZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5wdXNoKFxyXG4gICAgICAgICAgbmV3IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlKG1lc3NhZ2UsIGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBOb3QgdXNpbmcgdGltZT9cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXNzYWdlTGltaXQgPSBNYXRoLm1pbihcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlLFxyXG4gICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUubGVuZ3RoXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZUxpbWl0OyArK2kpIHtcclxuICAgICAgbGV0IG5vZGUgPSBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucG9wKCk7XHJcbiAgICAgIG5vZGU/LmhhbmRsZXIub25NZXNzYWdlKG5vZGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4vbWVzc2FnZUJ1cyc7XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlUHJpb3JpdHkge1xyXG4gIE5PUk1BTCxcclxuICBISUdILFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICBwdWJsaWMgY29udGV4dDogdW5rbm93bjtcclxuICBwdWJsaWMgc2VuZGVyOiB1bmtub3duO1xyXG4gIHB1YmxpYyBwcmlvcml0eTogTWVzc2FnZVByaW9yaXR5O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0OiB1bmtub3duLFxyXG4gICAgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eSA9IE1lc3NhZ2VQcmlvcml0eS5OT1JNQUxcclxuICApIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNlbmQoY29kZTogc3RyaW5nLCBzZW5kZXI6IHVua25vd24sIGNvbnRleHQ/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnBvc3QobmV3IE1lc3NhZ2UoY29kZSwgc2VuZGVyLCBjb250ZXh0LCBNZXNzYWdlUHJpb3JpdHkuTk9STUFMKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNlbmRQcmlvcml0eShcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIHNlbmRlcjogdW5rbm93bixcclxuICAgIGNvbnRleHQ/OiB1bmtub3duXHJcbiAgKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnBvc3QobmV3IE1lc3NhZ2UoY29kZSwgc2VuZGVyLCBjb250ZXh0LCBNZXNzYWdlUHJpb3JpdHkuSElHSCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMuYWRkU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB1bnN1YnNjcmliZShjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5yZW1vdmVTdWJzY3JpcHRpb24oY29kZSwgaGFuZGxlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldCBpbXBsZW1lbnRzIElBc3NldCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGF0YTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VBc3NldExvYWRlciBpbXBsZW1lbnRzIElBc3NldExvYWRlciB7XHJcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRFeHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbJ3BuZycsICdnaWYnLCAnanBnJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IHRoaXMub25JbWFnZUxvYWRlZC5iaW5kKHRoaXMsIGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYXNzZXROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkltYWdlTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IG5ldyBJbWFnZUFzc2V0KGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgPVxyXG4gICdNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQ6Oic7XHJcbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZXJzOiBJQXNzZXRMb2FkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZWRBc3NldHM6IHsgW25hbWU6IHN0cmluZ106IElBc3NldCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgSW1hZ2VBc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGEgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFV0aWxpdGllcyB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgV2ViR0wsIHBvdGVudGlhbGx5IHVzaW5nIHRoZSBjYW52YXMgd2l0aCBhbiBhc3NpZ25lZCBpZCBtYXRjaGluZ1xyXG4gICAqIHRoZSBwcm92aWRlZCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBlbGVtZW50SWQgVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXHJcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50SWQ/OiBzdHJpbmcpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICBpZiAoZWxlbWVudElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgaWYgKGNhbnZhcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIGNhbnZhcyBlbGVtZW50IG5hbWVkICcgKyBlbGVtZW50SWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIGlmIChnbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBzaGFkZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhZGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Byb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3VuaWZvcm1zOiB7IFtuYW1lOiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBmcmFnbWVudCBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2UoKTogdm9pZCB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbG9jYXRpb24gb2YgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIG5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJldHJpZXZlXHJcbiAgICogQHJldHVybnMgQW4gYXR0cmlidXRlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5fYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgYXR0cmlidXRlIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xyXG4gICAgaWYgKHRoaXMuX3VuaWZvcm1zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCB1bmlmb3JtIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fdW5pZm9ybXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZCh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdEF0dHJpYnV0ZXMoKTtcclxuICAgIHRoaXMuZGV0ZWN0VW5pZm9ybXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFNoYWRlcihzb3VyY2U6IHN0cmluZywgc2hhZGVyVHlwZTogbnVtYmVyKTogV2ViR0xTaGFkZXIge1xyXG4gICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSkgYXMgV2ViR0xTaGFkZXI7XHJcblxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIGxldCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvbXBpbGluZyBzaGFkZXI6ICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyLFxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLl9wcm9ncmFtKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycnJvciBsaW5raW5nIHNoYWRlciAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdEF0dHJpYnV0ZXMoKTogdm9pZCB7XHJcbiAgICAvLyBnaXZlcyBhbGwgYXR0cmlidXRlcyBpbiB0aGUgc2hhZGVyXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVDb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9BVFRSSUJVVEVTXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBhdHRyaWJ1dGVJbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVBdHRyaWIoXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIWF0dHJpYnV0ZUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXNbYXR0cmlidXRlSW5mby5uYW1lXSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgYXR0cmlidXRlSW5mby5uYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdFVuaWZvcm1zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdW5pZm9ybUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX1VOSUZPUk1TXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgdW5pZm9ybUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl91bmlmb3Jtc1t1bmlmb3JtSW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIHVuaWZvcm1JbmZvLm5hbWVcclxuICAgICAgKSBhcyBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1NoYWRlciBleHRlbmRzIFNoYWRlciB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2Jhc2ljJyk7XHJcblxyXG4gICAgdGhpcy5sb2FkKHRoaXMuZ2V0VmVydGV4U291cmNlKCksIHRoaXMuZ2V0RnJhZ21lbnRTb3VyY2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnRleFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIGF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG5cclxuICAgIHVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcbiAgICB1bmlmb3JtIG1hdDQgdV9tb2RlbDtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogdV9tb2RlbCAqIHZlYzQoYV9wb3NpdGlvbiwgMS4wKTtcclxuICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGcmFnbWVudFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIHVuaWZvcm0gdmVjNCB1X3RpbnQ7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X2RpZmZ1c2U7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdV90aW50ICogdGV4dHVyZTJEKHVfZGlmZnVzZSwgdl90ZXhDb29yZCk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gIHByaXZhdGUgX3I6IG51bWJlcjtcclxuICBwcml2YXRlIF9nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2E6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcjogbnVtYmVyID0gMjU1LFxyXG4gICAgZzogbnVtYmVyID0gMjU1LFxyXG4gICAgYjogbnVtYmVyID0gMjU1LFxyXG4gICAgYTogbnVtYmVyID0gMjU1XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9yID0gcjtcclxuICAgIHRoaXMuX2cgPSBnO1xyXG4gICAgdGhpcy5fYiA9IGI7XHJcbiAgICB0aGlzLl9hID0gYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGcodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYkZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYiAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBiKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2E7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2EgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9hID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2FdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXRBcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IgLyAyNTUuMCwgdGhpcy5fZyAvIDI1NS4wLCB0aGlzLl9iIC8gMjU1LjAsIHRoaXMuX2EgLyAyNTUuMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9GbG9hdEFycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aGl0ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsYWNrKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVkKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMjU1LCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBncmVlbigpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDI1NSwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmx1ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDI1NSwgMjU1KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBc3NldE1hbmFnZXIsXHJcbiAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVELFxyXG59IGZyb20gJy4uL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmNvbnN0IExFVkVMOiBudW1iZXIgPSAwO1xyXG5jb25zdCBCT1JERVI6IG51bWJlciA9IDA7XHJcbmNvbnN0IFRFTVBfSU1BR0VfREFUQTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaGFuZGxlOiBXZWJHTFRleHR1cmU7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyID0gMSwgaGVpZ2h0OiBudW1iZXIgPSAxKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlID0gZ2wuY3JlYXRlVGV4dHVyZSgpIGFzIFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZShNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9uYW1lLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNpZ25hdHVyZSBpcyBmb3IgbG9hZGluZyByYXcgZGF0YSBpbnRvIGEgdGV4dHVyZVxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIEJPUkRFUixcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgVEVNUF9JTUFHRV9EQVRBXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldEFzc2V0KHRoaXMuX25hbWUpIGFzIEltYWdlQXNzZXQ7XHJcbiAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChhc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGdsLmRlbGV0ZVRleHR1cmUodGhpcy5faGFuZGxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYWtlcyBhIGNhbGwgdG8gd2ViZ2wgYW5kIHRlbGxzIGl0IHdoYXQgY2hhbm5lbCB0byBhY3RpdmF0ZSBvblxyXG4gICAqICgzMiB0b3RhbClcclxuICAgKiBAcGFyYW0gdGV4dHVyZVVuaXQgdGV4dHVyZSB0byBhY3RpdmF0ZSBvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZUFuZEJpbmQodGV4dHVyZVVuaXQ6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXh0dXJlVW5pdCk7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2UuY29kZSA9PT0gTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgdGhpcy5fbmFtZSkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KG1lc3NhZ2UuY29udGV4dCBhcyBJbWFnZUFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQ6IEltYWdlQXNzZXQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3dpZHRoID0gYXNzZXQud2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBhc3NldC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaWduYXR1cmUgaXMgZm9yIGxvYWRpbmcgYW4gaW1hZ2UgYml0bWFwcGVyXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgYXNzZXQuZGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1Bvd2VyT2YyKCkpIHtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYSBtaXAgbWFwIGFuZCBjbGFtcCB3cmFwcGluZyB0byBlZGdlLlxyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQb3dlck9mMigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX3dpZHRoKSAmJiB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl9oZWlnaHQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlUG93ZXJPZjIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcblxyXG5jbGFzcyBUZXh0dXJlUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIHRleHR1cmU6IFRleHR1cmU7XHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RleHR1cmVzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSBuZXcgVGV4dHVyZVJlZmVyZW5jZU5vZGUodGV4dHVyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWxlYXNlVGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBBIHRleHR1cmUgbmFtZWQgJHt0ZXh0dXJlTmFtZX0gZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmVsZWFzZWQuYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEpIHtcclxuICAgICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSc7XHJcbmltcG9ydCB7IFRleHR1cmVNYW5hZ2VyIH0gZnJvbSAnLi90ZXh0dXJlTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IFRleHR1cmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGludDogQ29sb3I7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nLCB0aW50OiBDb2xvcikge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSBkaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgICB0aGlzLl90aW50ID0gdGludDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZSgpOiBUZXh0dXJlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5fZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcblxyXG5jbGFzcyBNYXRlcmlhbFJlZmVyZW5jZU5vZGUge1xyXG4gIHB1YmxpYyBtYXRlcmlhbDogTWF0ZXJpYWwgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyByZWZlcmVuY2VDb3VudDogbnVtYmVyID0gMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1hdGVyaWFsOiBNYXRlcmlhbCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfbWF0ZXJpYWxzOiB7IFtuYW1lOiBzdHJpbmddOiBNYXRlcmlhbFJlZmVyZW5jZU5vZGUgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWdpc3Rlck1hdGVyaWFsKG1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgaWYgKE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPSBuZXcgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlKFxyXG4gICAgICAgIG1hdGVyaWFsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1hdGVyaWFsKG1hdGVyaWFsTmFtZTogc3RyaW5nKTogTWF0ZXJpYWwgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudCsrO1xyXG4gICAgICByZXR1cm4gTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZU1hdGVyaWFsKG1hdGVyaWFsTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXRlcmlhbFJlZmVyZW5jZSA9IE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV07XHJcbiAgICBpZiAoIW1hdGVyaWFsUmVmZXJlbmNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IHJlbGVhc2UgYSBtYXRlcmlhbCB3aGljaCBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudC0tO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudCA8IDEgJiZcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdICE9PSB1bmRlZmluZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbD8uZGVzdHJveSgpO1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4NHg0IHtcclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gSWRlbnRpdHkgbWF0cml4IChkZWZhdWx0IG1hdHJpeClcclxuICAgIHRoaXMuX2RhdGEgPSBbXHJcbiAgICAgIC8vIHJvdyAxXHJcbiAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAyXHJcbiAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAzXHJcbiAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgIC8vIHJvdyA0XHJcbiAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0eDQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9ydGhvZ3JhcGhpYyBtYXRyaXhcclxuICAgKiBObyBwZXJzcGVjdGl2ZSwgcmVuZGVycyBzb21ldGhpbmcgYXMgaWYgaXQgaXMgZmxhdCBpbiBzcGFjZVxyXG4gICAqIEBwYXJhbSBsZWZ0IHBvc2l0aW9uIGZyb20gbGVmdCBvZiBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMClcclxuICAgKiBAcGFyYW0gcmlnaHQgZGlzdGFuY2UgdG8gcmlnaHQgc2lkZSBvZiBzY3JlZW4gZnJvbSB0aGUgbGVmdCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxOTIwKVxyXG4gICAqIEBwYXJhbSBib3R0b20gcG9zaXRpb24gZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMCkgd2ViZ2wgc3RhcnRzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQHBhcmFtIHRvcCBwb3NpdGlvbiBmcm9tIGJvdHRvbSBvZiBzY3JlZW4gdG8gdGhlIHRvcCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxMDgwKVxyXG4gICAqIEBwYXJhbSBuZWFyQ2xpcCBzb21ldGhpbmcgbmVnYXRpdmUgKHRvIHByZXZlbnQgY2xpcHBpbmcgaW4gZnJvbnQpXHJcbiAgICogQHBhcmFtIGZhckNsaXAgYXJiaXRyYXJ5IG51bWJlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljKFxyXG4gICAgbGVmdDogbnVtYmVyLFxyXG4gICAgcmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgdG9wOiBudW1iZXIsXHJcbiAgICBuZWFyQ2xpcDogbnVtYmVyLFxyXG4gICAgZmFyQ2xpcDogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGNvbnN0IGxyOiBudW1iZXIgPSAxLjAgLyAobGVmdCAtIHJpZ2h0KTtcclxuICAgIGNvbnN0IGJ0OiBudW1iZXIgPSAxLjAgLyAoYm90dG9tIC0gdG9wKTtcclxuICAgIGNvbnN0IG5mOiBudW1iZXIgPSAxLjAgLyAobmVhckNsaXAgLSBmYXJDbGlwKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gLTIuMCAqIGxyO1xyXG4gICAgbS5fZGF0YVs1XSA9IC0yLjAgKiBidDtcclxuICAgIG0uX2RhdGFbMTBdID0gMi4wICogbmY7XHJcblxyXG4gICAgbS5fZGF0YVsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xyXG4gICAgbS5fZGF0YVsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxNF0gPSAoZmFyQ2xpcCArIG5lYXJDbGlwKSAqIG5mO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXRyaXggdGhhdCBob2xkcyBkYXRhIHRoYXQgcmVwcmVzZW50cyBtb3ZlbWVudCBvZiBhbiBvYmplY3RcclxuICAgKiB0aHJvdWdoIHNwYWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24ocG9zaXRpb246IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgLy8gZWRpdGluZyAxc3QgMyBudW1iZXJzIGluIGxhc3Qgcm93IG9mIG1hdHJpeDRcclxuICAgIG0uX2RhdGFbMTJdID0gcG9zaXRpb24ueDtcclxuICAgIG0uX2RhdGFbMTNdID0gcG9zaXRpb24ueTtcclxuICAgIG0uX2RhdGFbMTRdID0gcG9zaXRpb24uejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSByb3RhdGlvbiBtYXRyaXggb24gdGhlIFggYXhpcyBmcm9tIHRoZSBwcm92aWRlZCBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcbiAgICBtLl9kYXRhWzZdID0gcztcclxuICAgIG0uX2RhdGFbOV0gPSAtcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMl0gPSAtcztcclxuICAgIG0uX2RhdGFbOF0gPSBzO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblooYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICAvLyByYWRpYW5zIGFyZSB1c2VkIGluIGFsbW9zdCBhbGwgbWF0aCBsaWJyYXJpZXMgYmVjYXVzZSBpdCBpcyBtb3JlIHBlcmZvcm1hbnRcclxuICAgIC8vIHVuZGVyIHRoZSBob29kXHJcblxyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMV0gPSBzO1xyXG4gICAgbS5fZGF0YVs0XSA9IC1zO1xyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWFlaKFxyXG4gICAgeFJhZGlhbnM6IG51bWJlcixcclxuICAgIHlSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB6UmFkaWFuczogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGNvbnN0IHJ4ID0gTWF0cml4NHg0LnJvdGF0aW9uWCh4UmFkaWFucyk7XHJcbiAgICBjb25zdCByeSA9IE1hdHJpeDR4NC5yb3RhdGlvblkoeVJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnogPSBNYXRyaXg0eDQucm90YXRpb25aKHpSYWRpYW5zKTtcclxuXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseShyeiwgcnkpLCByeCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHNjYWxlOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBzY2FsZS54O1xyXG4gICAgbS5fZGF0YVs1XSA9IHNjYWxlLnk7XHJcbiAgICBtLl9kYXRhWzEwXSA9IHNjYWxlLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IE1hdHJpeDR4NCwgYjogTWF0cml4NHg0KTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBiMDAgPSBiLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYjAxID0gYi5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGIwMiA9IGIuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBiMDMgPSBiLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYjEwID0gYi5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGIxMSA9IGIuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBiMTIgPSBiLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYjEzID0gYi5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGIyMCA9IGIuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBiMjEgPSBiLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYjIyID0gYi5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGIyMyA9IGIuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBiMzAgPSBiLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYjMxID0gYi5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGIzMiA9IGIuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBiMzMgPSBiLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbGV0IGEwMCA9IGEuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBhMDEgPSBhLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYTAyID0gYS5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGEwMyA9IGEuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBhMTAgPSBhLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYTExID0gYS5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGExMiA9IGEuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBhMTMgPSBhLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYTIwID0gYS5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGEyMSA9IGEuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBhMjIgPSBhLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYTIzID0gYS5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGEzMCA9IGEuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBhMzEgPSBhLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYTMyID0gYS5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGEzMyA9IGEuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xyXG4gICAgbS5fZGF0YVs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xyXG4gICAgbS5fZGF0YVs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcclxuICAgIG0uX2RhdGFbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcclxuICAgIG0uX2RhdGFbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbShtOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gbS5fZGF0YVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIGEgR0xCdWZmZXIgYXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSW5mbyB7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIChudW1iZXIgb2YgZWxlbWVudHMpIGluIHRoaXMgYXR0cmlidXRlIChpLmUuIFZlY3RvcjMgPSAzKVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBzaXplOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgb2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgYnVmZmVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xCdWZmZXIge1xyXG4gIHByaXZhdGUgX2hhc0F0dHJpYnV0ZUxvY2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZWxlbWVudFNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdHJpZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9idWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICBwcml2YXRlIF90YXJnZXRCdWZmZXJUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGF0YVR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9tb2RlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdHlwZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVJbmZvW10gPSBbXTtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEdMIEJ1ZmZlci5cclxuICAgKiBAcGFyYW0gZWxlbWVudFNpemUgVGhlIHNpemUgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBidWZmZXIuXHJcbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSBkYXRhIHR5cGUgb2YgdGhlIGJ1ZmZlci4gRGVmYXVsdDogZ2wuRkxPQVRcclxuICAgKiBAcGFyYW0gdGFyZ2V0QnVmZmVyVHlwZSBUaGUgYnVmZmVyIHRhcmdldCB0eXBlLiBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIuIERlZmF1bHQ6IGdsLkFSUkFZX0JVRkZFUlxyXG4gICAqIEBwYXJhbSBtb2RlIFRoZSBkcmF3aW5nIG1vZGUgb2YgdGhlIGJ1ZmZlci4gKGkuZS4gZ2wuVFJJQU5HTEVTIG9yIGdsLkxJTkVTKS4gRGVmYXVsdDogZ2wuVFJJQU5HTEVTXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFNpemU6IG51bWJlcixcclxuICAgIGRhdGFUeXBlOiBudW1iZXIgPSBnbC5GTE9BVCxcclxuICAgIHRhcmdldEJ1ZmZlclR5cGU6IG51bWJlciA9IGdsLkFSUkFZX0JVRkZFUixcclxuICAgIG1vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFU1xyXG4gICkge1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgPSBlbGVtZW50U2l6ZTtcclxuICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XHJcbiAgICB0aGlzLl90YXJnZXRCdWZmZXJUeXBlID0gdGFyZ2V0QnVmZmVyVHlwZTtcclxuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG5cclxuICAgIC8vIERldGVybWluZSBieXRlIHNpemVcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgLy8gcG9zaXRpdmUgb3IgbmVnYXRpdmVcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgIC8vIG9ubHkgcG9zaXRpdmUgYnV0IHR3aWNlIHRoZSBzaXplIG9mIGludFxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDE7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZGF0YSB0eXBlICR7ZGF0YVR5cGUudG9TdHJpbmcoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaXplIG9mIGVsZW1lbnRzICogbnVtYmVyIG9mIGJ5dGVzIGluIGVhY2ggZWxlbWVudFxyXG4gICAgdGhpcy5fc3RyaWRlID0gdGhpcy5fZWxlbWVudFNpemUgKiB0aGlzLl90eXBlU2l6ZTtcclxuICAgIHRoaXMuX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIFdlYkdMQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveXMgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kcyB0aGlzIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gbm9ybWFsaXplZCBJbmRpY2F0ZXMgaWYgdGhpcyBkYXRhIHNob3VsZCBiZSBub3JtYWxpemVkLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaW5kKG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbikge1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgIGl0LmxvY2F0aW9uLFxyXG4gICAgICAgICAgaXQuc2l6ZSxcclxuICAgICAgICAgIHRoaXMuX2RhdGFUeXBlLFxyXG4gICAgICAgICAgbm9ybWFsaXplZCxcclxuICAgICAgICAgIHRoaXMuX3N0cmlkZSxcclxuICAgICAgICAgIGl0Lm9mZnNldCAqIHRoaXMuX3R5cGVTaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgaW5mb3JtYXRpb24gdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiB0byBiZSBhZGRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVMb2NhdGlvbihpbmZvOiBBdHRyaWJ1dGVJbmZvKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKGluZm8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwdXNoQmFja0RhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgdGhpcyBkYXRhIHRvIHRoZSBHUFVcclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGxldCBidWZmZXJEYXRhOiBBcnJheUJ1ZmZlcjtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGEgdHlwZSBlcnJvciBpbiBwdXNoQmFja0RhdGEoKSBmb3IgZGF0YXR5cGUgJHt0aGlzLl9kYXRhVHlwZS50b1N0cmluZygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgYnVmZmVyRGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXModGhpcy5fbW9kZSwgMCwgdGhpcy5fZGF0YS5sZW5ndGggLyB0aGlzLl9lbGVtZW50U2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0aGlzLl9tb2RlLCB0aGlzLl9kYXRhLmxlbmd0aCwgdGhpcy5fZGF0YVR5cGUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgQXR0cmlidXRlSW5mbywgR0xCdWZmZXIgfSBmcm9tICcuLi9nbC9nbEJ1ZmZlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuYWdlciB9IGZyb20gJy4vbWF0ZXJpYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2J1ZmZlcjogR0xCdWZmZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX21hdGVyaWFsTmFtZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZyxcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDEwMFxyXG4gICkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWxOYW1lO1xyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSBNYXRlcmlhbE1hbmFnZXIuZ2V0TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9idWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWxlYXNlTWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxOYW1lKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgR0xCdWZmZXIoNSk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIC8vIFJlbW92ZWQgcmVmZXJlbmNlIHRvIHNoYWRlciwgYmFkIHByYWN0aWNlIHRvIHBhc3Mgc2hhZGVyIGluZm8gdG8gc3ByaXRlIG9uIGxvYWRcclxuICAgIC8vIFN0aWxsIG5vdCBpZGVhbCAocmVmZXJlbmNpbmcgYV9sb2NhdGlvbiBpbiB2ZXJ0ZXhTaGFkZXJTb3VyY2UgYnkgaGFyZGNvZGluZyAwKVxyXG4gICAgLy8gRWFjaCB2YXJpYWJsZSBpbiBzaGFkZXJTb3VyY2UgaXMgcmVmZXJlbmNlZCBieSBpbmRleCBpbiBvcmRlciBvZiBkZWNsYXJhdGlvbiAoZS5nLiBiZWNhdXNlIGFfbG9jYXRpb24gaXMgdGhlIGZpcnN0IHZhcmlhYmxlIGl0IGlzIGluZGV4IDApXHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5sb2NhdGlvbiA9IDA7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5vZmZzZXQgPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUuc2l6ZSA9IDM7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24ocG9zaXRpb25BdHRyaWJ1dGUpO1xyXG5cclxuICAgIGxldCB0ZXhDb29yZEF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5sb2NhdGlvbiA9IDE7XHJcbiAgICAvLyBtYXRjaGVzIHRoZSBzaXplIG9mIHRoZSBwb3N0aW9uIGF0dHJpYnV0ZVxyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUub2Zmc2V0ID0gMztcclxuICAgIHRleENvb3JkQXR0cmlidXRlLnNpemUgPSAyO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHRleENvb3JkQXR0cmlidXRlKTtcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgdmVydGljZXMgPSBbXHJcbiAgICAgIC8vIHgsIHksIHosIFU6IHRleHR1cmUgeCwgVjogdGV4dHVyZSB5XHJcbiAgICAgIC8vIHRyaWFuZ2xlIDFcclxuICAgICAgLy8gcG9pbnQgMVxyXG4gICAgICAwLCAwLCAwLCAwLCAwLFxyXG4gICAgICAvLyBwb2ludCAyXHJcbiAgICAgIDAsIHRoaXMuX2hlaWdodCwgMCwgMCwgMS4wLFxyXG4gICAgICAvLyBwb2ludCAzXHJcbiAgICAgIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIDAsIDEuMCwgMS4wLFxyXG4gICAgICAvLyB0cmlhbmdsZSAyXHJcbiAgICAgIC8vIHBvaW50IDRcclxuICAgICAgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgMCwgMS4wLCAxLjAsXHJcbiAgICAgIC8vIHBvaW50IDVcclxuICAgICAgdGhpcy5fd2lkdGgsIDAsIDAsIDEuMCwgMCxcclxuICAgICAgLy8gcG9pbnQgNlxyXG4gICAgICAwLCAwLCAwLCAwLCAwLFxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLl9idWZmZXIucHVzaEJhY2tEYXRhKHZlcnRpY2VzKTtcclxuICAgIHRoaXMuX2J1ZmZlci51cGxvYWQoKTtcclxuICAgIHRoaXMuX2J1ZmZlci51bmJpbmQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgZHJhdyhzaGFkZXI6IFNoYWRlciwgbW9kZWw6IE1hdHJpeDR4NCk6IHZvaWQge1xyXG4gICAgbGV0IG1vZGVsTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X21vZGVsJyk7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTG9jYXRpb24sIGZhbHNlLCBtb2RlbC50b0Zsb2F0MzJBcnJheSgpKTtcclxuXHJcbiAgICBjb25zdCBjb2xvckxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV90aW50Jyk7XHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWwpIHtcclxuICAgICAgZ2wudW5pZm9ybTRmdihjb2xvckxvY2F0aW9uLCB0aGlzLl9tYXRlcmlhbC50aW50LnRvRmxvYXQzMkFycmF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9tYXRlcmlhbD8uZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgdGhpcy5fbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUuYWN0aXZhdGVBbmRCaW5kKDApO1xyXG4gICAgICBjb25zdCBkaWZmdXNlTG9jYXRpb24gPSBzaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X2RpZmZ1c2UnKTtcclxuICAgICAgLy8gcGFzcyBhIHNpbmdsZSBpbnRlZ2VyXHJcbiAgICAgIGdsLnVuaWZvcm0xaShkaWZmdXNlTG9jYXRpb24sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9idWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5fYnVmZmVyLmRyYXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXNzaWduZWQgYnVmZmVyIGZvciBzcHJpdGUgJyArIHRoaXMuX25hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4uL2NvcmUvd29ybGQvc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG93bmVyKCk6IFNpbU9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3duZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9jb3JlL2dyYXBoaWNzL3Nwcml0ZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtYXRlcmlhbE5hbWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFNwcml0ZShuYW1lLCBtYXRlcmlhbE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zcHJpdGUubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCkge1xyXG4gICAgICB0aGlzLl9zcHJpdGUuZHJhdyhzaGFkZXIsIHRoaXMuX293bmVyPy53b3JsZE1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVuZGVyKHNoYWRlcik7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3o6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgICB0aGlzLl96ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB6KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHNjYWxlOiBWZWN0b3IzID0gVmVjdG9yMy5vbmU7XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgdGhpcy5yb3RhdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucm90YXRpb24pO1xyXG4gICAgdGhpcy5zY2FsZS5jb3B5RnJvbSh0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBNYXRyaXg0eDQudHJhbnNsYXRpb24odGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uID0gTWF0cml4NHg0LnJvdGF0aW9uWFlaKFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLngsXHJcbiAgICAgIHRoaXMucm90YXRpb24ueSxcclxuICAgICAgdGhpcy5yb3RhdGlvbi56XHJcbiAgICApO1xyXG4gICAgbGV0IHNjYWxlID0gTWF0cml4NHg0LnNjYWxlKHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIC8vIG9yZGVyIG1hdHRlcnMgaGVyZVxyXG4gICAgLy8gVCAqIFIgKiBTXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseSh0cmFuc2xhdGlvbiwgcm90YXRpb24pLCBzY2FsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1PYmplY3Qge1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IFNpbU9iamVjdFtdID0gW107XHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY29tcG9uZW50czogQmFzZUNvbXBvbmVudFtdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2xvY2FsTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuICBwcml2YXRlIF93b3JsZE1hdHJpeDogTWF0cml4NHg0ID0gTWF0cml4NHg0LmlkZW50aXR5KCk7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm06IFRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc2NlbmU/OiBTY2VuZSkge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXJlbnQoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgfHwgdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3b3JsZE1hdHJpeCgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmxkTWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDaGlsZChjaGlsZDogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgaWYgKHRoaXMuX3NjZW5lKSB7XHJcbiAgICAgIGNoaWxkLm9uQWRkZWQodGhpcy5fc2NlbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUNoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjaGlsZC5fcGFyZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAvLyBkb3VibGUgY2hlY2sgdGhpcyB3b3Jrc1xyXG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLmZpbHRlcigoXywgaWR4KSA9PiBpbmRleCAhPT0gaWR4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQmFzZUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgY2hpbGQubG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2xvY2FsTWF0cml4ID0gdGhpcy50cmFuc2Zvcm0uZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKTtcclxuICAgIHRoaXMudXBkYXRlV29ybGRNYXRyaXgoXHJcbiAgICAgIHRoaXMuX3BhcmVudCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fcGFyZW50LndvcmxkTWF0cml4IDogdW5kZWZpbmVkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGVudW0gWm9uZVN0YXRlIHtcclxuICBVTklOSVRJQUxJWkVELFxyXG4gIExPQURJTkcsXHJcbiAgVVBEQVRJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBab25lIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICBwcml2YXRlIF9zdGF0ZTogWm9uZVN0YXRlID0gWm9uZVN0YXRlLlVOSU5JVElBTElaRUQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKTogU2NlbmUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IFpvbmVTdGF0ZS5MT0FESU5HO1xyXG5cclxuICAgIHRoaXMuX3NjZW5lLmxvYWQoKTtcclxuXHJcbiAgICB0aGlzLl9zdGF0ZSA9IFpvbmVTdGF0ZS5VUERBVElORztcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmxvYWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLl9zdGF0ZSA9IFpvbmVTdGF0ZS5VUERBVElORykpIHtcclxuICAgICAgdGhpcy5fc2NlbmUudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLl9zdGF0ZSA9IFpvbmVTdGF0ZS5VUERBVElORykpIHtcclxuICAgICAgdGhpcy5fc2NlbmUucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25BY3RpdmF0ZWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgb25EZWFjdGl2YXRlZCgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9ncmFwaGljcy9zcHJpdGUnO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tICcuL3pvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3Rab25lIGV4dGVuZHMgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfcGFyZW50T2JqZWN0OiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfcGFyZW50U3ByaXRlOiBTcHJpdGVDb21wb25lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdGVzdE9iamVjdDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3Rlc3RTcHJpdGU6IFNwcml0ZUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUoJ3Rlc3QnLCAnc3RvbmVXYWxsJyk7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgICAvL3RoaXMuX3Nwcml0ZS5wb3NpdGlvbi54ID0gMjAwO1xyXG4gICAgLy90aGlzLl9zcHJpdGUucG9zaXRpb24ueSA9IDEwMDtcclxuICAgIHRoaXMuX3BhcmVudE9iamVjdCA9IG5ldyBTaW1PYmplY3QoMCwgJ3BhcmVudE9iamVjdCcpO1xyXG4gICAgdGhpcy5fcGFyZW50U3ByaXRlID0gbmV3IFNwcml0ZUNvbXBvbmVudCgncGFyZW50VGVzdCcsICd3b29kUGxhbmsnKTtcclxuICAgIHRoaXMuX3BhcmVudE9iamVjdC5hZGRDb21wb25lbnQodGhpcy5fcGFyZW50U3ByaXRlKTtcclxuICAgIHRoaXMuX3BhcmVudE9iamVjdC50cmFuc2Zvcm0ucG9zaXRpb24ueCA9IDgwMDtcclxuICAgIHRoaXMuX3BhcmVudE9iamVjdC50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IDQwMDtcclxuXHJcbiAgICB0aGlzLl90ZXN0T2JqZWN0ID0gbmV3IFNpbU9iamVjdCgxLCAndGVzdE9iamVjdCcpO1xyXG4gICAgdGhpcy5fdGVzdFNwcml0ZSA9IG5ldyBTcHJpdGVDb21wb25lbnQoJ3Rlc3QnLCAnc3RvbmVXYWxsJyk7XHJcbiAgICB0aGlzLl90ZXN0T2JqZWN0LmFkZENvbXBvbmVudCh0aGlzLl90ZXN0U3ByaXRlKTtcclxuXHJcbiAgICB0aGlzLl90ZXN0T2JqZWN0LnRyYW5zZm9ybS5wb3NpdGlvbi54ID0gMTAwO1xyXG4gICAgdGhpcy5fdGVzdE9iamVjdC50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IDEwMDtcclxuXHJcbiAgICB0aGlzLl9wYXJlbnRPYmplY3QuYWRkQ2hpbGQodGhpcy5fdGVzdE9iamVjdCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZS5hZGRPYmplY3QodGhpcy5fcGFyZW50T2JqZWN0KTtcclxuXHJcbiAgICBzdXBlci5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcGFyZW50T2JqZWN0IS50cmFuc2Zvcm0ucm90YXRpb24ueiArPSAwLjAxNTtcclxuICAgIHRoaXMuX3Rlc3RPYmplY3QhLnRyYW5zZm9ybS5yb3RhdGlvbi56ICs9IDAuMDE7XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFRlc3Rab25lIH0gZnJvbSAnLi90ZXN0Wm9uZSc7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tICcuL3pvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZ2xvYmFsWm9uZUlEOiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIHN0YXRpYyBfem9uZXM6IHsgW2lkOiBudW1iZXJdOiBab25lIH0gPSB7fTtcclxuICBwcml2YXRlIHN0YXRpYyBfYWN0aXZlWm9uZTogWm9uZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlWm9uZShuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgWm9uZU1hbmFnZXIuX2dsb2JhbFpvbmVJRCsrO1xyXG4gICAgbGV0IHpvbmUgPSBuZXcgWm9uZShab25lTWFuYWdlci5fZ2xvYmFsWm9uZUlELCBuYW1lLCBkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgWm9uZU1hbmFnZXIuX3pvbmVzW1pvbmVNYW5hZ2VyLl9nbG9iYWxab25lSURdID0gem9uZTtcclxuICAgIHJldHVybiBab25lTWFuYWdlci5fZ2xvYmFsWm9uZUlEO1xyXG4gIH1cclxuXHJcbiAgLy8gdGhpcyBpcyB0ZW1wb3JhcnkgY29kZSB1bnRpbCBmaWxlIGxvYWRpbmcgaXMgc3VwcG9ydGVkXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVUZXN0Wm9uZSgpOiBudW1iZXIge1xyXG4gICAgWm9uZU1hbmFnZXIuX2dsb2JhbFpvbmVJRCsrO1xyXG4gICAgbGV0IHpvbmUgPSBuZXcgVGVzdFpvbmUoXHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9nbG9iYWxab25lSUQsXHJcbiAgICAgICd0ZXN0JyxcclxuICAgICAgJ0Egc2ltcGxlIHRlc3Qgem9uZS4nXHJcbiAgICApO1xyXG5cclxuICAgIFpvbmVNYW5hZ2VyLl96b25lc1tab25lTWFuYWdlci5fZ2xvYmFsWm9uZUlEXSA9IHpvbmU7XHJcbiAgICByZXR1cm4gWm9uZU1hbmFnZXIuX2dsb2JhbFpvbmVJRDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlWm9uZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkRlYWN0aXZhdGVkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChab25lTWFuYWdlci5fem9uZXNbaWRdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgPSBab25lTWFuYWdlci5fem9uZXNbaWRdO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5vbkFjdGl2YXRlZCgpO1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5sb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAoWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgZ2wsIEdMVXRpbGl0aWVzIH0gZnJvbSAnLi9nbC9nbCc7XHJcbmltcG9ydCB7IEJhc2ljU2hhZGVyIH0gZnJvbSAnLi9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2dyYXBoaWNzL2NvbG9yJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL2dyYXBoaWNzL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL2dyYXBoaWNzL3Nwcml0ZSc7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VCdXMnO1xyXG5pbXBvcnQgeyBab25lTWFuYWdlciB9IGZyb20gJy4vd29ybGQvem9uZU1hbmFnZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGdhbWUgZW5naW5lIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2Jhc2ljU2hhZGVyOiBCYXNpY1NoYWRlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9wcm9qZWN0aW9uOiBNYXRyaXg0eDQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHVwIHRoaXMgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gR0xVdGlsaXRpZXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xyXG5cclxuICAgIGxldCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICAgICAnLi4vYXNzZXRzL3RleHR1cmVzLycsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubG9hZEFsbEltYWdlcyhjb250ZXh0KTtcclxuXHJcbiAgICB0aGlzLl9iYXNpY1NoYWRlciA9IG5ldyBCYXNpY1NoYWRlcigpO1xyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIudXNlKCk7XHJcblxyXG4gICAgLy8gTG9hZCBtYXRlcmlhbHNcclxuICAgIE1hdGVyaWFsTWFuYWdlci5yZWdpc3Rlck1hdGVyaWFsKFxyXG4gICAgICBuZXcgTWF0ZXJpYWwoXHJcbiAgICAgICAgJ3N0b25lV2FsbCcsXHJcbiAgICAgICAgJ3NyYy9hc3NldHMvdGV4dHVyZXMvc3RvbmVfd2FsbF8xMjh4MTI4LmpwZycsXHJcbiAgICAgICAgbmV3IENvbG9yKDE1NSwgMTU1LCAyNTUsIDI1NSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICd3b29kUGxhbmsnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3dvb2RfcGxhbmtfMTI4eDEyOC5qcGcnLFxyXG4gICAgICAgIG5ldyBDb2xvcigxNTUsIDE1NSwgMjU1LCAyNTUpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgem9uZUlkID0gWm9uZU1hbmFnZXIuY3JlYXRlVGVzdFpvbmUoKTtcclxuICAgIC8vIExvYWRcclxuICAgIFpvbmVNYW5hZ2VyLmNoYW5nZVpvbmUoem9uZUlkKTtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgdGhpcy5sb29wKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBjYW52YXMgdG8gZml0IHRoZSB3aW5kb3cuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLl9jYW52YXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX3Byb2plY3Rpb24gPSBNYXRyaXg0eDQub3J0aG9ncmFwaGljKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAtMTAwLjAsXHJcbiAgICAgICAgMTAwLjBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvb3AoKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZSgwKTtcclxuXHJcbiAgICBab25lTWFuYWdlci51cGRhdGUoMCk7XHJcblxyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Jhc2ljU2hhZGVyKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLnJlbmRlcih0aGlzLl9iYXNpY1NoYWRlcik7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdW5pZm9ybXNcclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlciAmJiB0aGlzLl9wcm9qZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3Rpb25Qb3NpdGlvbiA9XHJcbiAgICAgICAgdGhpcy5fYmFzaWNTaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3Byb2plY3Rpb24nKTtcclxuXHJcbiAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgICAgcHJvamVjdGlvblBvc2l0aW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fcHJvamVjdGlvbi5kYXRhKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEFsbEltYWdlcyhyZXF1aXJlQ29udGV4dDogX19XZWJwYWNrTW9kdWxlQXBpLlJlcXVpcmVDb250ZXh0KSB7XHJcbiAgICByZXF1aXJlQ29udGV4dC5rZXlzKCkuZm9yRWFjaChyZXF1aXJlQ29udGV4dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcclxuXHJcbnZhciBlbmdpbmU6IEVuZ2luZTtcclxuLy8gVGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xyXG4gIGVuZ2luZS5zdGFydCgpO1xyXG59O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGVuZ2luZS5yZXNpemUoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9