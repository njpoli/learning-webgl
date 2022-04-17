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
            console.log("loading texture from asset");
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
            return this.diffuseTextureName;
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
            return this.diffuseTexture;
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
        //@ts-ignore
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
            //@ts-ignore
            return undefined;
        }
        else {
            MaterialManager._materials[materialName].referenceCount++;
            return MaterialManager._materials[materialName].material;
        }
    };
    MaterialManager.releaseMaterial = function (materialName) {
        if (!MaterialManager._materials[materialName]) {
            console.warn('Cannot release a material which has not been registered');
        }
        else {
            MaterialManager._materials[materialName].referenceCount--;
            if (MaterialManager._materials[materialName].referenceCount < 1) {
                MaterialManager._materials[materialName].material.destroy();
                // @ts-ignore
                MaterialManager._materials[materialName].material = undefined;
                delete MaterialManager._materials[materialName];
            }
        }
    };
    MaterialManager._materials = {};
    return MaterialManager;
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
    Vector3.prototype.toArray = function () {
        return [this._x, this._y, this._z];
    };
    Vector3.prototype.toFloat32Array = function () {
        return new Float32Array(this.toArray());
    };
    return Vector3;
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
    return Matrix4x4;
}());


;// CONCATENATED MODULE: ./src/core/graphics/sprite.ts





var Sprite = /** @class */ (function () {
    function Sprite(name, materialName, width, height) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
        this.position = new Vector3();
        this._name = name;
        this._width = width;
        this._height = height;
        this._materialName = materialName;
        //@ts-ignore
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
        this._buffer.destroy();
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
    Sprite.prototype.draw = function (shader) {
        var modelLocation = shader.getUniformLocation('u_model');
        gl.uniformMatrix4fv(modelLocation, false, new Float32Array(Matrix4x4.translation(this.position).data));
        var colorLocation = shader.getUniformLocation('u_tint');
        //gl.uniform4f(colorLocation 1, 0.4, 1, 1);
        gl.uniform4fv(colorLocation, this._material.tint.toFloat32Array());
        if (this._material) {
            this._material.diffuseTexture.activateAndBind(0);
            var diffuseLocation = shader.getUniformLocation('u_diffuse');
            // pass a single integer
            gl.uniform1i(diffuseLocation, 0);
        }
        this._buffer.bind();
        this._buffer.draw();
    };
    return Sprite;
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
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall_128x128.jpg', new Color(255, 128, 0, 0)));
        // Load
        this._sprite = new Sprite('test', 'stoneWall');
        this._sprite.load();
        this._sprite.position.x = 200;
        this._sprite.position.y = 100;
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
        gl.clear(gl.COLOR_BUFFER_BIT);
        // Set uniforms
        var projectionPosition = this._basicShader.getUniformLocation('u_projection');
        gl.uniformMatrix4fv(projectionPosition, false, new Float32Array(this._projection.data));
        debugger;
        this._sprite.draw(this._basicShader);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDRixRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sOEJBQWEsR0FBckIsVUFBc0IsY0FBaUQ7UUFDckUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7QUM5R29CO0FBQ2tCO0FBRXZDLElBQUksTUFBYyxDQUFDO0FBQ25CLDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy90ZXh0dXJlc3xzeW5jfEM6Ly4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VCdXMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvaW1hZ2VBc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9hc3NldE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9jb2xvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ2wvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL21hdHJpeDR4NC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3RvbmVfd2FsbC5qcGdcIjogMTkwLFxuXHRcIi4vc3RvbmVfd2FsbF8xMjh4MTI4LmpwZ1wiOiA3MzgsXG5cdFwiLi93b29kX3BsYW5rLmpwZ1wiOiA4NDcsXG5cdFwiLi93b29kX3BsYW5rXzEyOHgxMjguanBnXCI6IDMwNlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI0NTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUge1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gIHB1YmxpYyBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtZXNzYWdlOiBNZXNzYWdlLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlIH0gZnJvbSAnLi9tZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VQcmlvcml0eSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N1YnNjcmlwdGlvbnM6IHsgW2NvZGU6IHN0cmluZ106IElNZXNzYWdlSGFuZGxlcltdIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZTogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX25vcm1hbE1lc3NhZ2VRdWV1ZTogTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGRTdWJzY3JpcHRpb24oY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIGlmICghTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKSAhPT0gLTEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdBdHRlbXB0aW5nIHRvIGFkZCBhIGR1cGxpY2F0ZSBoYW5kbGVyIHRvIGNvZGUgJyArXHJcbiAgICAgICAgICBjb2RlICtcclxuICAgICAgICAgICcuIFN1YnNjcmlwdGlvbiBub3QgYWRkZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW1vdmVTdWJzY3JpcHRpb24oXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgaXMgY29ycmVjdFxyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnQ2Fubm90IHVuc3Vic2NyaWJlIGhhbmRsZXIgZnJvbSBjb2RlOiAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJyBiZWNhdXNlIHRoYXQgY29kZSBkb2VzIG5vdCBzdWJzY3JpYmVkIHRvLidcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBub2RlSW5kZXggPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmluZGV4T2YoaGFuZGxlcik7XHJcbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5maWx0ZXIoXHJcbiAgICAgICAgKF8sIGlkeCkgPT4gaWR4ICE9PSBub2RlSW5kZXhcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcG9zdChtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBwb3N0ZWQ6JywgbWVzc2FnZSk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbbWVzc2FnZS5jb2RlXTtcclxuICAgIGlmICghaGFuZGxlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJzLmZvckVhY2goKGgpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UucHJpb3JpdHkgPT09IE1lc3NhZ2VQcmlvcml0eS5ISUdIKSB7XHJcbiAgICAgICAgaC5vbk1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnB1c2goXHJcbiAgICAgICAgICBuZXcgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUobWVzc2FnZSwgaClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE5vdCB1c2luZyB0aW1lP1xyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VMaW1pdCA9IE1hdGgubWluKFxyXG4gICAgICBNZXNzYWdlQnVzLl9ub3JtYWxRdWV1ZU1lc3NhZ2VQZXJVcGRhdGUsXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5sZW5ndGhcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlTGltaXQ7ICsraSkge1xyXG4gICAgICBsZXQgbm9kZSA9IE1lc3NhZ2VCdXMuX25vcm1hbE1lc3NhZ2VRdWV1ZS5wb3AoKTtcclxuICAgICAgbm9kZT8uaGFuZGxlci5vbk1lc3NhZ2Uobm9kZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlQnVzJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VQcmlvcml0eSB7XHJcbiAgTk9STUFMLFxyXG4gIEhJR0gsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICBwdWJsaWMgY29kZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb250ZXh0OiB1bmtub3duO1xyXG4gIHB1YmxpYyBzZW5kZXI6IHVua25vd247XHJcbiAgcHVibGljIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIHNlbmRlcjogdW5rbm93bixcclxuICAgIGNvbnRleHQ6IHVua25vd24sXHJcbiAgICBwcmlvcml0eTogTWVzc2FnZVByaW9yaXR5ID0gTWVzc2FnZVByaW9yaXR5Lk5PUk1BTFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZChjb2RlOiBzdHJpbmcsIHNlbmRlcjogdW5rbm93biwgY29udGV4dD86IHVua25vd24pOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5OT1JNQUwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VuZFByaW9yaXR5KFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dD86IHVua25vd25cclxuICApOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucG9zdChuZXcgTWVzc2FnZShjb2RlLCBzZW5kZXIsIGNvbnRleHQsIE1lc3NhZ2VQcmlvcml0eS5ISUdIKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZShjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5hZGRTdWJzY3JpcHRpb24oY29kZSwgaGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVuc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnJlbW92ZVN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tICcuL2lBc3NldCc7XHJcbmltcG9ydCB7IElBc3NldExvYWRlciB9IGZyb20gJy4vSUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS53aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsncG5nJywgJ2dpZicsICdqcGcnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkQXNzZXQoYXNzZXROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gdGhpcy5vbkltYWdlTG9hZGVkLmJpbmQodGhpcywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gYXNzZXROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkltYWdlTG9hZGVkKGFzc2V0TmFtZTogc3RyaW5nLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ29uSW1hZ2VMb2FkZWRcIiBhc3NldE5hbWUvaW1hZ2UnLCBhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBhc3NldCA9IG5ldyBJbWFnZUFzc2V0KGFzc2V0TmFtZSwgaW1hZ2UpO1xyXG5cclxuICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgPVxyXG4gICdNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQ6Oic7XHJcbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZXJzOiBJQXNzZXRMb2FkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIF9sb2FkZWRBc3NldHM6IHsgW25hbWU6IHN0cmluZ106IElBc3NldCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBBc3NldE1hbmFnZXIuX2xvYWRlcnMucHVzaChuZXcgSW1hZ2VBc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuLyoqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGEgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFV0aWxpdGllcyB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgV2ViR0wsIHBvdGVudGlhbGx5IHVzaW5nIHRoZSBjYW52YXMgd2l0aCBhbiBhc3NpZ25lZCBpZCBtYXRjaGluZ1xyXG4gICAqIHRoZSBwcm92aWRlZCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBlbGVtZW50SWQgVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXHJcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIHRvIHRoZSBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50SWQ/OiBzdHJpbmcpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICBpZiAoZWxlbWVudElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgaWYgKGNhbnZhcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIGNhbnZhcyBlbGVtZW50IG5hbWVkICcgKyBlbGVtZW50SWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIGlmIChnbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4vZ2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBXZWJHTCBzaGFkZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhZGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3Byb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3VuaWZvcm1zOiB7IFtuYW1lOiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxyXG4gICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBmcmFnbWVudCBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugc2hhZGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2UoKTogdm9pZCB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbG9jYXRpb24gb2YgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIG5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJldHJpZXZlXHJcbiAgICogQHJldHVybnMgQW4gYXR0cmlidXRlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5fYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5hYmxlIHRvIGZpbmQgYXR0cmlidXRlIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKTogV2ViR0xVbmlmb3JtTG9jYXRpb24ge1xyXG4gICAgaWYgKHRoaXMuX3VuaWZvcm1zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCB1bmlmb3JtIG5hbWUgJHtuYW1lfSBpbiBzaGFkZXIgJHt0aGlzLl9uYW1lfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fdW5pZm9ybXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZCh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdEF0dHJpYnV0ZXMoKTtcclxuICAgIHRoaXMuZGV0ZWN0VW5pZm9ybXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFNoYWRlcihzb3VyY2U6IHN0cmluZywgc2hhZGVyVHlwZTogbnVtYmVyKTogV2ViR0xTaGFkZXIge1xyXG4gICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSkgYXMgV2ViR0xTaGFkZXI7XHJcblxyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgIGxldCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGNvbXBpbGluZyBzaGFkZXI6ICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyLFxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpIGFzIFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5fcHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLl9wcm9ncmFtKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycnJvciBsaW5raW5nIHNoYWRlciAnICsgdGhpcy5fbmFtZSArICc6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdEF0dHJpYnV0ZXMoKTogdm9pZCB7XHJcbiAgICAvLyBnaXZlcyBhbGwgYXR0cmlidXRlcyBpbiB0aGUgc2hhZGVyXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVDb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgIGdsLkFDVElWRV9BVFRSSUJVVEVTXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBhdHRyaWJ1dGVJbmZvOiBXZWJHTEFjdGl2ZUluZm8gPSBnbC5nZXRBY3RpdmVBdHRyaWIoXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIWF0dHJpYnV0ZUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXNbYXR0cmlidXRlSW5mby5uYW1lXSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgYXR0cmlidXRlSW5mby5uYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGVjdFVuaWZvcm1zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdW5pZm9ybUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX1VOSUZPUk1TXHJcbiAgICApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgdW5pZm9ybUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBpXHJcbiAgICAgICkgYXMgV2ViR0xBY3RpdmVJbmZvO1xyXG4gICAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlcyBfYXR0cmlidWVzIHdpdGggZWFjaCBhdHRyaWJ1dGUgYXMgYXMgdGhlIHZhbHVlIGFuZCB0aGUgYXR0cmlidXRlIG5hbWUgYXMgdGhlIGtleVxyXG4gICAgICB0aGlzLl91bmlmb3Jtc1t1bmlmb3JtSW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIHVuaWZvcm1JbmZvLm5hbWVcclxuICAgICAgKSBhcyBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1NoYWRlciBleHRlbmRzIFNoYWRlciB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2Jhc2ljJyk7XHJcblxyXG4gICAgdGhpcy5sb2FkKHRoaXMuZ2V0VmVydGV4U291cmNlKCksIHRoaXMuZ2V0RnJhZ21lbnRTb3VyY2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnRleFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIGF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG5cclxuICAgIHVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcbiAgICB1bmlmb3JtIG1hdDQgdV9tb2RlbDtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogdV9tb2RlbCAqIHZlYzQoYV9wb3NpdGlvbiwgMS4wKTtcclxuICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGcmFnbWVudFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgIHVuaWZvcm0gdmVjNCB1X3RpbnQ7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1X2RpZmZ1c2U7XHJcblxyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdV90aW50ICogdGV4dHVyZTJEKHVfZGlmZnVzZSwgdl90ZXhDb29yZCk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gIHByaXZhdGUgX3I6IG51bWJlcjtcclxuICBwcml2YXRlIF9nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2E6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcjogbnVtYmVyID0gMjU1LFxyXG4gICAgZzogbnVtYmVyID0gMjU1LFxyXG4gICAgYjogbnVtYmVyID0gMjU1LFxyXG4gICAgYTogbnVtYmVyID0gMjU1XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9yID0gcjtcclxuICAgIHRoaXMuX2cgPSBnO1xyXG4gICAgdGhpcy5fYiA9IGI7XHJcbiAgICB0aGlzLl9hID0gYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3IgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9nIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGcodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYkZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYiAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBiKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2E7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2EgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgYSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9hID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2FdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXRBcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW3RoaXMuX3IgLyAyNTUuMCwgdGhpcy5fZyAvIDI1NS4wLCB0aGlzLl9iIC8gMjU1LjAsIHRoaXMuX2EgLyAyNTUuMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9GbG9hdEFycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aGl0ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJsYWNrKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVkKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMjU1LCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBncmVlbigpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDI1NSwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmx1ZSgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDI1NSwgMjU1KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBc3NldE1hbmFnZXIsXHJcbiAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVELFxyXG59IGZyb20gJy4uL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlQXNzZXRMb2FkZXInO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi4vbWVzc2FnZS9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcclxuXHJcbmNvbnN0IExFVkVMOiBudW1iZXIgPSAwO1xyXG5jb25zdCBCT1JERVI6IG51bWJlciA9IDA7XHJcbmNvbnN0IFRFTVBfSU1BR0VfREFUQTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaGFuZGxlOiBXZWJHTFRleHR1cmU7XHJcbiAgcHJpdmF0ZSBfaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyID0gMSwgaGVpZ2h0OiBudW1iZXIgPSAxKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlID0gZ2wuY3JlYXRlVGV4dHVyZSgpIGFzIFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgICBNZXNzYWdlLnN1YnNjcmliZShNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9uYW1lLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNpZ25hdHVyZSBpcyBmb3IgbG9hZGluZyByYXcgZGF0YSBpbnRvIGEgdGV4dHVyZVxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIEJPUkRFUixcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgVEVNUF9JTUFHRV9EQVRBXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldEFzc2V0KHRoaXMuX25hbWUpIGFzIEltYWdlQXNzZXQ7XHJcbiAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgdGV4dHVyZSBmcm9tIGFzc2V0YCk7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuX2hhbmRsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuYmluZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZXMgYSBjYWxsIHRvIHdlYmdsIGFuZCB0ZWxscyBpdCB3aGF0IGNoYW5uZWwgdG8gYWN0aXZhdGUgb25cclxuICAgKiAoMzIgdG90YWwpXHJcbiAgICogQHBhcmFtIHRleHR1cmVVbml0IHRleHR1cmUgdG8gYWN0aXZhdGUgb25cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVBbmRCaW5kKHRleHR1cmVVbml0OiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4dHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlLmNvZGUgPT09IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUpIHtcclxuICAgICAgdGhpcy5sb2FkVGV4dHVyZUZyb21Bc3NldChtZXNzYWdlLmNvbnRleHQgYXMgSW1hZ2VBc3NldCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0OiBJbWFnZUFzc2V0KTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGFzc2V0LndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gYXNzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIGFuIGltYWdlIGJpdG1hcHBlclxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgTEVWRUwsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIGFzc2V0LmRhdGFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNQb3dlck9mMigpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGEgbWlwIG1hcCBhbmQgY2xhbXAgd3JhcHBpbmcgdG8gZWRnZS5cclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUG93ZXJPZjIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzVmFsdWVQb3dlck9mMih0aGlzLl93aWR0aCkgJiYgdGhpcy5pc1ZhbHVlUG93ZXJPZjIodGhpcy5faGVpZ2h0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWx1ZVBvd2VyT2YyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnO1xyXG5cclxuY2xhc3MgVGV4dHVyZVJlZmVyZW5jZU5vZGUge1xyXG4gIHB1YmxpYyB0ZXh0dXJlOiBUZXh0dXJlO1xyXG4gIHB1YmxpYyByZWZlcmVuY2VDb3VudDogbnVtYmVyID0gMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZU1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF90ZXh0dXJlczogeyBbbmFtZTogc3RyaW5nXTogVGV4dHVyZVJlZmVyZW5jZU5vZGUgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRUZXh0dXJlKHRleHR1cmVOYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcclxuICAgIGlmICghVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSkge1xyXG4gICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGV4dHVyZU5hbWUpO1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdID0gbmV3IFRleHR1cmVSZWZlcmVuY2VOb2RlKHRleHR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS5yZWZlcmVuY2VDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0udGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZVRleHR1cmUodGV4dHVyZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgQSB0ZXh0dXJlIG5hbWVkICR7dGV4dHVyZU5hbWV9IGRvZXMgbm90IGV4aXN0IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJlbGVhc2VkLmBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxKSB7XHJcbiAgICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXS50ZXh0dXJlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnO1xyXG5pbXBvcnQgeyBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vdGV4dHVyZU1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZTogVGV4dHVyZTtcclxuICBwcml2YXRlIF90aW50OiBDb2xvcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlmZnVzZVRleHR1cmVOYW1lOiBzdHJpbmcsIHRpbnQ6IENvbG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSA9IGRpZmZ1c2VUZXh0dXJlTmFtZTtcclxuICAgIHRoaXMuX3RpbnQgPSB0aW50O1xyXG5cclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IFRleHR1cmVNYW5hZ2VyLmdldFRleHR1cmUoXHJcbiAgICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRpZmZ1c2VUZXh0dXJlTmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlmZnVzZVRleHR1cmUoKTogVGV4dHVyZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWZmdXNlVGV4dHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdGludCgpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlmZnVzZVRleHR1cmVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmUgPSBUZXh0dXJlTWFuYWdlci5nZXRUZXh0dXJlKFxyXG4gICAgICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBUZXh0dXJlTWFuYWdlci5yZWxlYXNlVGV4dHVyZSh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL21hdGVyaWFsJztcclxuXHJcbmNsYXNzIE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB7XHJcbiAgcHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbDtcclxuXHJcbiAgcHVibGljIHJlZmVyZW5jZUNvdW50OiBudW1iZXIgPSAxO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobWF0ZXJpYWw6IE1hdGVyaWFsKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9tYXRlcmlhbHM6IHsgW25hbWU6IHN0cmluZ106IE1hdGVyaWFsUmVmZXJlbmNlTm9kZSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyTWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsKTogdm9pZCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9IG5ldyBNYXRlcmlhbFJlZmVyZW5jZU5vZGUoXHJcbiAgICAgICAgbWF0ZXJpYWxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWF0ZXJpYWwobWF0ZXJpYWxOYW1lOiBzdHJpbmcpOiBNYXRlcmlhbCB7XHJcbiAgICBpZiAoTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5yZWZlcmVuY2VDb3VudCsrO1xyXG4gICAgICByZXR1cm4gTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXS5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZU1hdGVyaWFsKG1hdGVyaWFsTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIU1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgcmVsZWFzZSBhIG1hdGVyaWFsIHdoaWNoIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50LS07XHJcbiAgICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLnJlZmVyZW5jZUNvdW50IDwgMSkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWwuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIEdMQnVmZmVyIGF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUluZm8ge1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgbG9jYXRpb246IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSAobnVtYmVyIG9mIGVsZW1lbnRzKSBpbiB0aGlzIGF0dHJpYnV0ZSAoaS5lLiBWZWN0b3IzID0gMylcclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIuXHJcbiAgICovXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIFdlYkdMIGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMQnVmZmVyIHtcclxuICBwcml2YXRlIF9oYXNBdHRyaWJ1dGVMb2NhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2VsZW1lbnRTaXplOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RyaWRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfdGFyZ2V0QnVmZmVyVHlwZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2RhdGFUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbW9kZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3R5cGVTaXplOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlSW5mb1tdID0gW107XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBHTCBCdWZmZXIuXHJcbiAgICogQHBhcmFtIGVsZW1lbnRTaXplIFRoZSBzaXplIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgYnVmZmVyLlxyXG4gICAqIEBwYXJhbSBkYXRhVHlwZSBUaGUgZGF0YSB0eXBlIG9mIHRoZSBidWZmZXIuIERlZmF1bHQ6IGdsLkZMT0FUXHJcbiAgICogQHBhcmFtIHRhcmdldEJ1ZmZlclR5cGUgVGhlIGJ1ZmZlciB0YXJnZXQgdHlwZS4gZ2wuQVJSQVlfQlVGRkVSIG9yIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLiBEZWZhdWx0OiBnbC5BUlJBWV9CVUZGRVJcclxuICAgKiBAcGFyYW0gbW9kZSBUaGUgZHJhd2luZyBtb2RlIG9mIHRoZSBidWZmZXIuIChpLmUuIGdsLlRSSUFOR0xFUyBvciBnbC5MSU5FUykuIERlZmF1bHQ6IGdsLlRSSUFOR0xFU1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRTaXplOiBudW1iZXIsXHJcbiAgICBkYXRhVHlwZTogbnVtYmVyID0gZ2wuRkxPQVQsXHJcbiAgICB0YXJnZXRCdWZmZXJUeXBlOiBudW1iZXIgPSBnbC5BUlJBWV9CVUZGRVIsXHJcbiAgICBtb2RlOiBudW1iZXIgPSBnbC5UUklBTkdMRVNcclxuICApIHtcclxuICAgIHRoaXMuX2VsZW1lbnRTaXplID0gZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLl9kYXRhVHlwZSA9IGRhdGFUeXBlO1xyXG4gICAgdGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9IHRhcmdldEJ1ZmZlclR5cGU7XHJcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgYnl0ZSBzaXplXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgIC8vIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAvLyBvbmx5IHBvc2l0aXZlIGJ1dCB0d2ljZSB0aGUgc2l6ZSBvZiBpbnRcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSA0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgIHRoaXMuX3R5cGVTaXplID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAxO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGRhdGEgdHlwZSAke2RhdGFUeXBlLnRvU3RyaW5nKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2l6ZSBvZiBlbGVtZW50cyAqIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGVsZW1lbnRcclxuICAgIHRoaXMuX3N0cmlkZSA9IHRoaXMuX2VsZW1lbnRTaXplICogdGhpcy5fdHlwZVNpemU7XHJcbiAgICB0aGlzLl9idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSBhcyBXZWJHTEJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lzIHRoZSBidWZmZXJcclxuICAgKi9cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9idWZmZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZHMgdGhpcyBidWZmZXIuXHJcbiAgICogQHBhcmFtIG5vcm1hbGl6ZWQgSW5kaWNhdGVzIGlmIHRoaXMgZGF0YSBzaG91bGQgYmUgbm9ybWFsaXplZC4gRGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgYmluZChub3JtYWxpemVkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBpZiAodGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24pIHtcclxuICAgICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgICBpdC5sb2NhdGlvbixcclxuICAgICAgICAgIGl0LnNpemUsXHJcbiAgICAgICAgICB0aGlzLl9kYXRhVHlwZSxcclxuICAgICAgICAgIG5vcm1hbGl6ZWQsXHJcbiAgICAgICAgICB0aGlzLl9zdHJpZGUsXHJcbiAgICAgICAgICBpdC5vZmZzZXQgKiB0aGlzLl90eXBlU2l6ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGl0LmxvY2F0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChpdCkgPT4ge1xyXG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gYXR0cmlidXRlIHdpdGggdGhlIHByb3ZpZGVkIGluZm9ybWF0aW9uIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gdG8gYmUgYWRkZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWRkQXR0cmlidXRlTG9jYXRpb24oaW5mbzogQXR0cmlidXRlSW5mbyk6IHZvaWQge1xyXG4gICAgdGhpcy5faGFzQXR0cmlidXRlTG9jYXRpb24gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2F0dHJpYnV0ZXMucHVzaChpbmZvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgZGF0YSB0byB0aGUgYnVmZmVyXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBwdWJsaWMgcHVzaEJhY2tEYXRhKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWRzIHRoaXMgZGF0YSB0byB0aGUgR1BVXHJcbiAgICovXHJcbiAgcHVibGljIHVwbG9hZCgpOiB2b2lkIHtcclxuICAgIGdsLmJpbmRCdWZmZXIodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgdGhpcy5fYnVmZmVyKTtcclxuXHJcbiAgICBsZXQgYnVmZmVyRGF0YTogQXJyYXlCdWZmZXI7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgZ2wuRkxPQVQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuSU5UOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEludDE2QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5CWVRFOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBEYXRhIHR5cGUgZXJyb3IgaW4gcHVzaEJhY2tEYXRhKCkgZm9yIGRhdGF0eXBlICR7dGhpcy5fZGF0YVR5cGUudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnbC5idWZmZXJEYXRhKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIGJ1ZmZlckRhdGEsIGdsLlNUQVRJQ19EUkFXKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRHJhd3MgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkFSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKHRoaXMuX21vZGUsIDAsIHRoaXMuX2RhdGEubGVuZ3RoIC8gdGhpcy5fZWxlbWVudFNpemUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRCdWZmZXJUeXBlID09PSBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xyXG4gICAgICBnbC5kcmF3RWxlbWVudHModGhpcy5fbW9kZSwgdGhpcy5fZGF0YS5sZW5ndGgsIHRoaXMuX2RhdGFUeXBlLCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfejogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICAgIHRoaXMuX3ogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3kgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHoodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFt0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXg0eDQge1xyXG4gIHByaXZhdGUgX2RhdGE6IG51bWJlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBJZGVudGl0eSBtYXRyaXggKGRlZmF1bHQgbWF0cml4KVxyXG4gICAgdGhpcy5fZGF0YSA9IFtcclxuICAgICAgLy8gcm93IDFcclxuICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgLy8gcm93IDJcclxuICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgLy8gcm93IDNcclxuICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgLy8gcm93IDRcclxuICAgICAgMCwgMCwgMCwgMSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRhdGEoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeDR4NCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3J0aG9ncmFwaGljIG1hdHJpeFxyXG4gICAqIE5vIHBlcnNwZWN0aXZlLCByZW5kZXJzIHNvbWV0aGluZyBhcyBpZiBpdCBpcyBmbGF0IGluIHNwYWNlXHJcbiAgICogQHBhcmFtIGxlZnQgcG9zaXRpb24gZnJvbSBsZWZ0IG9mIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKVxyXG4gICAqIEBwYXJhbSByaWdodCBkaXN0YW5jZSB0byByaWdodCBzaWRlIG9mIHNjcmVlbiBmcm9tIHRoZSBsZWZ0IChlLmcuIDEwODBwIHdvdWxkIGJlIDE5MjApXHJcbiAgICogQHBhcmFtIGJvdHRvbSBwb3NpdGlvbiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoYWxtb3N0IGFsd2F5cyAwKSB3ZWJnbCBzdGFydHMgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cclxuICAgKiBAcGFyYW0gdG9wIHBvc2l0aW9uIGZyb20gYm90dG9tIG9mIHNjcmVlbiB0byB0aGUgdG9wIChlLmcuIDEwODBwIHdvdWxkIGJlIDEwODApXHJcbiAgICogQHBhcmFtIG5lYXJDbGlwIHNvbWV0aGluZyBuZWdhdGl2ZSAodG8gcHJldmVudCBjbGlwcGluZyBpbiBmcm9udClcclxuICAgKiBAcGFyYW0gZmFyQ2xpcCBhcmJpdHJhcnkgbnVtYmVyXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvcnRob2dyYXBoaWMoXHJcbiAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICByaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICB0b3A6IG51bWJlcixcclxuICAgIG5lYXJDbGlwOiBudW1iZXIsXHJcbiAgICBmYXJDbGlwOiBudW1iZXJcclxuICApOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgY29uc3QgbHI6IG51bWJlciA9IDEuMCAvIChsZWZ0IC0gcmlnaHQpO1xyXG4gICAgY29uc3QgYnQ6IG51bWJlciA9IDEuMCAvIChib3R0b20gLSB0b3ApO1xyXG4gICAgY29uc3QgbmY6IG51bWJlciA9IDEuMCAvIChuZWFyQ2xpcCAtIGZhckNsaXApO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSAtMi4wICogbHI7XHJcbiAgICBtLl9kYXRhWzVdID0gLTIuMCAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxMF0gPSAyLjAgKiBuZjtcclxuXHJcbiAgICBtLl9kYXRhWzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XHJcbiAgICBtLl9kYXRhWzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XHJcbiAgICBtLl9kYXRhWzE0XSA9IChmYXJDbGlwICsgbmVhckNsaXApICogbmY7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIG1hdHJpeCB0aGF0IGhvbGRzIGRhdGEgdGhhdCByZXByZXNlbnRzIG1vdmVtZW50IG9mIGFuIG9iamVjdFxyXG4gICAqIHRocm91Z2ggc3BhY2UuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmFuc2xhdGlvbihwb3NpdGlvbjogVmVjdG9yMyk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgbSA9IG5ldyBNYXRyaXg0eDQoKTtcclxuXHJcbiAgICAvLyBlZGl0aW5nIDFzdCAzIG51bWJlcnMgaW4gbGFzdCByb3cgb2YgbWF0cml4NFxyXG4gICAgbS5fZGF0YVsxMl0gPSBwb3NpdGlvbi54O1xyXG4gICAgbS5fZGF0YVsxM10gPSBwb3NpdGlvbi55O1xyXG4gICAgbS5fZGF0YVsxNF0gPSBwb3NpdGlvbi56O1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gJy4uL2dsL2dsJztcclxuaW1wb3J0IHsgQXR0cmlidXRlSW5mbywgR0xCdWZmZXIgfSBmcm9tICcuLi9nbC9nbEJ1ZmZlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBNYXRyaXg0eDQgfSBmcm9tICcuLi9tYXRoL21hdHJpeDR4NCc7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnO1xyXG5pbXBvcnQgeyBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vdGV4dHVyZU1hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfYnVmZmVyOiBHTEJ1ZmZlcjtcclxuICBwcml2YXRlIF9tYXRlcmlhbDogTWF0ZXJpYWw7XHJcbiAgcHJpdmF0ZSBfbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG1hdGVyaWFsTmFtZTogc3RyaW5nLFxyXG4gICAgd2lkdGg6IG51bWJlciA9IDEwMCxcclxuICAgIGhlaWdodDogbnVtYmVyID0gMTAwXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSBtYXRlcmlhbE5hbWU7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9idWZmZXIuZGVzdHJveSgpO1xyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlbGVhc2VNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbE5hbWUpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5fbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBHTEJ1ZmZlcig1KTtcclxuXHJcbiAgICBsZXQgcG9zaXRpb25BdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlSW5mbygpO1xyXG4gICAgLy8gUmVtb3ZlZCByZWZlcmVuY2UgdG8gc2hhZGVyLCBiYWQgcHJhY3RpY2UgdG8gcGFzcyBzaGFkZXIgaW5mbyB0byBzcHJpdGUgb24gbG9hZFxyXG4gICAgLy8gU3RpbGwgbm90IGlkZWFsIChyZWZlcmVuY2luZyBhX2xvY2F0aW9uIGluIHZlcnRleFNoYWRlclNvdXJjZSBieSBoYXJkY29kaW5nIDApXHJcbiAgICAvLyBFYWNoIHZhcmlhYmxlIGluIHNoYWRlclNvdXJjZSBpcyByZWZlcmVuY2VkIGJ5IGluZGV4IGluIG9yZGVyIG9mIGRlY2xhcmF0aW9uIChlLmcuIGJlY2F1c2UgYV9sb2NhdGlvbiBpcyB0aGUgZmlyc3QgdmFyaWFibGUgaXQgaXMgaW5kZXggMClcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLmxvY2F0aW9uID0gMDtcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLm9mZnNldCA9IDA7XHJcbiAgICBwb3NpdGlvbkF0dHJpYnV0ZS5zaXplID0gMztcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbihwb3NpdGlvbkF0dHJpYnV0ZSk7XHJcblxyXG4gICAgbGV0IHRleENvb3JkQXR0cmlidXRlID0gbmV3IEF0dHJpYnV0ZUluZm8oKTtcclxuICAgIHRleENvb3JkQXR0cmlidXRlLmxvY2F0aW9uID0gMTtcclxuICAgIC8vIG1hdGNoZXMgdGhlIHNpemUgb2YgdGhlIHBvc3Rpb24gYXR0cmlidXRlXHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5vZmZzZXQgPSAzO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUuc2l6ZSA9IDI7XHJcbiAgICB0aGlzLl9idWZmZXIuYWRkQXR0cmlidXRlTG9jYXRpb24odGV4Q29vcmRBdHRyaWJ1dGUpO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLy8geCwgeSwgeiwgVTogdGV4dHVyZSB4LCBWOiB0ZXh0dXJlIHlcclxuICAgICAgLy8gdHJpYW5nbGUgMVxyXG4gICAgICAvLyBwb2ludCAxXHJcbiAgICAgIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAgIC8vIHBvaW50IDJcclxuICAgICAgMCwgdGhpcy5faGVpZ2h0LCAwLCAwLCAxLjAsXHJcbiAgICAgIC8vIHBvaW50IDNcclxuICAgICAgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgMCwgMS4wLCAxLjAsXHJcbiAgICAgIC8vIHRyaWFuZ2xlIDJcclxuICAgICAgLy8gcG9pbnQgNFxyXG4gICAgICB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCAwLCAxLjAsIDEuMCxcclxuICAgICAgLy8gcG9pbnQgNVxyXG4gICAgICB0aGlzLl93aWR0aCwgMCwgMCwgMS4wLCAwLFxyXG4gICAgICAvLyBwb2ludCA2XHJcbiAgICAgIDAsIDAsIDAsIDAsIDAsXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMuX2J1ZmZlci5wdXNoQmFja0RhdGEodmVydGljZXMpO1xyXG4gICAgdGhpcy5fYnVmZmVyLnVwbG9hZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyLnVuYmluZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBkcmF3KHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfbW9kZWwnKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgIG1vZGVsTG9jYXRpb24sXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KE1hdHJpeDR4NC50cmFuc2xhdGlvbih0aGlzLnBvc2l0aW9uKS5kYXRhKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb2xvckxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV90aW50Jyk7XHJcbiAgICAvL2dsLnVuaWZvcm00Zihjb2xvckxvY2F0aW9uIDEsIDAuNCwgMSwgMSk7XHJcbiAgICBnbC51bmlmb3JtNGZ2KGNvbG9yTG9jYXRpb24sIHRoaXMuX21hdGVyaWFsLnRpbnQudG9GbG9hdDMyQXJyYXkoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmFjdGl2YXRlQW5kQmluZCgwKTtcclxuICAgICAgY29uc3QgZGlmZnVzZUxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9kaWZmdXNlJyk7XHJcbiAgICAgIC8vIHBhc3MgYSBzaW5nbGUgaW50ZWdlclxyXG4gICAgICBnbC51bmlmb3JtMWkoZGlmZnVzZUxvY2F0aW9uLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9idWZmZXIuYmluZCgpO1xyXG4gICAgdGhpcy5fYnVmZmVyLmRyYXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXNzZXRNYW5hZ2VyIH0gZnJvbSAnLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgZ2wsIEdMVXRpbGl0aWVzIH0gZnJvbSAnLi9nbC9nbCc7XHJcbmltcG9ydCB7IEJhc2ljU2hhZGVyIH0gZnJvbSAnLi9nbC9zaGFkZXJzL2Jhc2ljU2hhZGVyJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2dyYXBoaWNzL2NvbG9yJztcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tICcuL2dyYXBoaWNzL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNYW5hZ2VyIH0gZnJvbSAnLi9ncmFwaGljcy9tYXRlcmlhbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL2dyYXBoaWNzL3Nwcml0ZSc7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VCdXMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGdhbWUgZW5naW5lIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfYmFzaWNTaGFkZXI6IEJhc2ljU2hhZGVyO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbjogTWF0cml4NHg0O1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGVuZ2luZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyB1cCB0aGlzIGVuZ2luZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IEdMVXRpbGl0aWVzLmluaXRpYWxpemUoKTtcclxuICAgIEFzc2V0TWFuYWdlci5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcclxuXHJcbiAgICBsZXQgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAgICAgJy4uL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvYWRBbGxJbWFnZXMoY29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIgPSBuZXcgQmFzaWNTaGFkZXIoKTtcclxuICAgIHRoaXMuX2Jhc2ljU2hhZGVyLnVzZSgpO1xyXG5cclxuICAgIC8vIExvYWQgbWF0ZXJpYWxzXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdzdG9uZVdhbGwnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3N0b25lX3dhbGxfMTI4eDEyOC5qcGcnLFxyXG4gICAgICAgIG5ldyBDb2xvcigyNTUsIDEyOCwgMCwgMClcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBMb2FkXHJcbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKCd0ZXN0JywgJ3N0b25lV2FsbCcpO1xyXG4gICAgdGhpcy5fc3ByaXRlLmxvYWQoKTtcclxuICAgIHRoaXMuX3Nwcml0ZS5wb3NpdGlvbi54ID0gMjAwO1xyXG4gICAgdGhpcy5fc3ByaXRlLnBvc2l0aW9uLnkgPSAxMDA7XHJcblxyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICAgIHRoaXMubG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplcyB0aGUgY2FudmFzIHRvIGZpdCB0aGUgd2luZG93LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl9wcm9qZWN0aW9uID0gTWF0cml4NHg0Lm9ydGhvZ3JhcGhpYyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCxcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgLTEwMC4wLFxyXG4gICAgICAgIDEwMC4wXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy51cGRhdGUoMCk7XHJcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAvLyBTZXQgdW5pZm9ybXNcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0aW9uUG9zaXRpb24gPVxyXG4gICAgICB0aGlzLl9iYXNpY1NoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfcHJvamVjdGlvbicpO1xyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihcclxuICAgICAgcHJvamVjdGlvblBvc2l0aW9uLFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9wcm9qZWN0aW9uLmRhdGEpXHJcbiAgICApO1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICB0aGlzLl9zcHJpdGUuZHJhdyh0aGlzLl9iYXNpY1NoYWRlcik7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEFsbEltYWdlcyhyZXF1aXJlQ29udGV4dDogX19XZWJwYWNrTW9kdWxlQXBpLlJlcXVpcmVDb250ZXh0KSB7XHJcbiAgICByZXF1aXJlQ29udGV4dC5rZXlzKCkuZm9yRWFjaChyZXF1aXJlQ29udGV4dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcclxuXHJcbnZhciBlbmdpbmU6IEVuZ2luZTtcclxuLy8gVGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xyXG4gIGVuZ2luZS5zdGFydCgpO1xyXG59O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGVuZ2luZS5yZXNpemUoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9