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
    __extends(SpriteComponent, _super);
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
    }
    /**
     * Starts up this engine
     */
    Engine.prototype.start = function () {
        this._canvas = GLUtilities.initialize();
        AssetManager.initialize();
        ZoneManager.initialize();
        gl.clearColor(0, 0, 0, 1);
        var imageContext = __webpack_require__(245);
        var jsonContext = __webpack_require__(924);
        this.loadAll(imageContext);
        this.loadAll(jsonContext);
        this._basicShader = new BasicShader();
        this._basicShader.use();
        // Load materials
        MaterialManager.registerMaterial(new Material('stoneWall', 'src/assets/textures/stone_wall_128x128.jpg', new Color(155, 155, 255, 255)));
        MaterialManager.registerMaterial(new Material('woodPlank', 'src/assets/textures/wood_plank_128x128.jpg', new Color(155, 155, 255, 255)));
        // Find a better place for this?
        ComponentManager.registerBuilder(new SpriteComponentBuilder());
        BehaviorManager.registerBuilder(new RotationBehaviorBuilder());
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
    Engine.prototype.loadAll = function (requireContext) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUU1RCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxrQ0FBYyxHQUFyQjtRQUNFLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLENBQVk7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDOzs7O0FDdE51QztBQUNKO0FBRXBDO0lBQUE7UUFDUyxhQUFRLEdBQVksWUFBWSxDQUFDO1FBQ2pDLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFDakMsVUFBSyxHQUFZLFdBQVcsQ0FBQztJQW9DdEMsQ0FBQztJQWxDUSw0QkFBUSxHQUFmLFVBQWdCLFNBQW9CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwyQ0FBdUIsR0FBOUI7UUFDRSxJQUFJLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkQsSUFBSSxRQUFRLEdBQUcscUJBQXFCLENBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNoQixDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLE9BQU8sa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixJQUFTO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQzs7OztBQ3RDNkM7QUFDQTtBQUc5QztJQWdCRSxtQkFBbUIsRUFBVSxFQUFFLElBQVksRUFBRSxLQUFhO1FBZGxELGNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRTVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsZ0JBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRTdCLGlCQUFZLEdBQWMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvQyxpQkFBWSxHQUFjLGtCQUFrQixFQUFFLENBQUM7UUFJaEQsY0FBUyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFHNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcseUJBQUU7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFNO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtDQUFXO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQVE7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLEtBQWdCO1FBQzlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLEtBQWdCO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQzFCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxZQUFLLEtBQUssR0FBRyxFQUFiLENBQWEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVNLG1DQUFlLEdBQXRCLFVBQXVCLElBQVk7UUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDeEIsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLFNBQXFCO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLFFBQW1CO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHdCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDakMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBa0IsVUFBYyxFQUFkLFNBQUksQ0FBQyxTQUFTLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTtZQUE3QixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLENBQ3BCLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNsRSxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsTUFBYztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDakMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBN0IsSUFBSSxLQUFLO1lBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFUywyQkFBTyxHQUFqQixVQUFrQixLQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTyxxQ0FBaUIsR0FBekIsVUFBMEIsaUJBQXdDO1FBQ2hFLElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQ3BDLGlCQUFpQixFQUNqQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7Ozs7QUM5SXVDO0FBRXhDO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFXLHVCQUFJO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBUTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSx5QkFBUyxHQUFoQixVQUFpQixNQUFpQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0JBQWUsR0FBdEIsVUFBdUIsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7OztBQ3JDb0U7QUFDTjtBQUUvQjtBQUNRO0FBRXhDLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwyREFBYTtJQUNiLCtDQUFPO0lBQ1AsaURBQVE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRDtJQVFFLGNBQW1CLEVBQVUsRUFBRSxJQUFZLEVBQUUsV0FBbUI7UUFIeEQsV0FBTSxHQUFjLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDNUMsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBVyxvQkFBRTthQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0JBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFXO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixRQUFhO1FBQS9CLGlCQVFDO1FBUEMsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7UUFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU07WUFDOUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFjLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTSxxQkFBTSxHQUFiLGNBQXVCLENBQUM7SUFFakIscUJBQU0sR0FBYixVQUFjLElBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVNLHFCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSwwQkFBVyxHQUFsQixjQUE0QixDQUFDO0lBRXRCLDRCQUFhLEdBQXBCLGNBQThCLENBQUM7SUFFdkIsNEJBQWEsR0FBckIsVUFBc0IsV0FBZ0IsRUFBRSxNQUE2QjtRQUFyRSxpQkFvQ0M7UUFuQ0MsSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLElBQUksV0FBVyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDdkMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQzFCLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtnQkFDcEMsSUFBTSxTQUFTLEdBQUcsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN6QixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU07Z0JBQ25DLElBQU0sUUFBUSxHQUFHLCtCQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtnQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDOzs7O0FDakgrQjtBQUlhO0FBQ2Y7QUFFOUI7SUFPRTtJQUF1QixDQUFDO0lBRVYsc0JBQVUsR0FBeEI7UUFDRSxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEMsWUFBWTtRQUNaLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUNyRSxDQUFDO0lBRWEsc0JBQVUsR0FBeEIsVUFBeUIsRUFBVTtRQUNqQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQyxXQUFXLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUNyQztRQUVELElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNsRCxJQUFJLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNoRSxJQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtpQkFBTTtnQkFDTCxpQkFBaUIsQ0FDZixpQ0FBaUMsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQ3BFLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQUM7Z0JBQ0Ysc0JBQXNCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7U0FDRjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBWSxFQUFFLG9CQUFpQixDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRWEsa0JBQU0sR0FBcEIsVUFBcUIsSUFBWTtRQUMvQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVhLGtCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsSUFBSSxXQUFXLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQW9CLENBQUM7WUFDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFYyxvQkFBUSxHQUF2QixVQUF3QixLQUFnQjtRQUN0QyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksTUFBYyxDQUFDO1FBQ25CLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUM1QyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUVELElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBRUQsSUFBSSxlQUFlLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUM1QyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFFRCxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDdkUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUF6RmMseUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxQyx1REFBdUQ7SUFDeEMsNEJBQWdCLEdBQTZCLEVBQUUsQ0FBQztJQXdGakUsa0JBQUM7Q0FBQTtBQTNGdUI7OztBQ1YwQztBQUNLO0FBQ2xCO0FBQ1M7QUFDUztBQUM3QjtBQUNhO0FBQ2Q7QUFDTTtBQUNjO0FBQ2hCO0FBQ0s7QUFDQTtBQUVsRDs7R0FFRztBQUNIO0lBS0U7O09BRUc7SUFDSDtJQUFzQixDQUFDO0lBRXZCOztPQUVHO0lBQ0ksc0JBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUN4Qyx1QkFBdUIsRUFBRSxDQUFDO1FBQzFCLHNCQUFzQixFQUFFLENBQUM7UUFFekIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksWUFBWSxHQUFHLHdCQUlsQixDQUFDO1FBQ0YsSUFBSSxXQUFXLEdBQUcsd0JBQXVELENBQUM7UUFFMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXhCLGlCQUFpQjtRQUNqQixnQ0FBZ0MsQ0FDOUIsSUFBSSxRQUFRLENBQ1YsV0FBVyxFQUNYLDRDQUE0QyxFQUM1QyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDOUIsQ0FDRixDQUFDO1FBRUYsZ0NBQWdDLENBQzlCLElBQUksUUFBUSxDQUNWLFdBQVcsRUFDWCw0Q0FBNEMsRUFDNUMsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQzlCLENBQ0YsQ0FBQztRQUVGLGdDQUFnQztRQUNoQyxnQ0FBZ0MsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQztRQUMvRCwrQkFBK0IsQ0FBQyxJQUFJLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUUvRCxnREFBZ0Q7UUFDaEQsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQU0sR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRXpDLElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLENBQ3ZDLENBQUMsRUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLENBQUMsRUFDRCxDQUFDLEtBQUssRUFDTixLQUFLLENBQ04sQ0FBQztZQUVGLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRU8scUJBQUksR0FBWjtRQUNFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJCLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7UUFDRCxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBTSxrQkFBa0IsR0FDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV2RCxtQkFBbUIsQ0FDakIsa0JBQWtCLEVBQ2xCLEtBQUssRUFDTCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUN4QyxDQUFDO1NBQ0g7UUFDRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyx3QkFBTyxHQUFmLFVBQWdCLGNBQWlEO1FBQy9ELGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7O0FDOUhvQjtBQUNrQjtBQUV2QyxJQUFJLE1BQWMsQ0FBQztBQUNuQiwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsUUFBUSxHQUFHO0lBQ2hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9hc3NldHMvdGV4dHVyZXN8c3luY3xDOi8uKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9pIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2Fzc2V0cy96b25lc3xzeW5jfEM6Ly4oanNvbikkL2kiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9nbC9nbC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL2dsQnVmZmVyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3MvbWF0ZXJpYWxNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZ3JhcGhpY3Mvc3ByaXRlLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21lc3NhZ2UvbWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2VCdXMudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tZXNzYWdlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvaW1hZ2VBc3NldExvYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2Fzc2V0cy9qc29uQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9hc3NldHMvYXNzZXRNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL21hdGgvdmVjdG9yMy50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2JlaGF2aW9ycy9iYXNlQmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9iZWhhdmlvcnMvcm90YXRpb25CZWhhdmlvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy9jb2xvci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9ncmFwaGljcy90ZXh0dXJlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL2dyYXBoaWNzL21hdGVyaWFsLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvbWF0aC9tYXRyaXg0eDQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmctd2ViZ2wvLi9zcmMvY29yZS9tYXRoL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NpbU9iamVjdC50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3NjZW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvd29ybGQvem9uZS50cyIsIndlYnBhY2s6Ly9sZWFybmluZy13ZWJnbC8uL3NyYy9jb3JlL3dvcmxkL3pvbmVNYW5hZ2VyLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2NvcmUvZW5naW5lLnRzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYmdsLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9zdG9uZV93YWxsLmpwZ1wiOiAxOTAsXG5cdFwiLi9zdG9uZV93YWxsXzEyOHgxMjguanBnXCI6IDczOCxcblx0XCIuL3dvb2RfcGxhbmsuanBnXCI6IDg0Nyxcblx0XCIuL3dvb2RfcGxhbmtfMTI4eDEyOC5qcGdcIjogMzA2XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjQ1OyIsInZhciBtYXAgPSB7XG5cdFwiLi90ZXN0Wm9uZS5qc29uXCI6IDk5M1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDkyNDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElDb21wb25lbnRCdWlsZGVyIH0gPVxyXG4gICAge307XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IElDb21wb25lbnRCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbYnVpbGRlci50eXBlXSA9IGJ1aWxkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RDb21wb25lbnQoanNvbjogYW55KTogSUNvbXBvbmVudCB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbU3RyaW5nKGpzb24udHlwZSldKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tcclxuICAgICAgICAgIFN0cmluZyhqc29uLnR5cGUpXHJcbiAgICAgICAgXS5idWlsZEZyb21Kc29uKGpzb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdDb21wb25lbnQgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbi8qKlxyXG4gKiBSZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xVdGlsaXRpZXMge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIFdlYkdMLCBwb3RlbnRpYWxseSB1c2luZyB0aGUgY2FudmFzIHdpdGggYW4gYXNzaWduZWQgaWQgbWF0Y2hpbmdcclxuICAgKiB0aGUgcHJvdmlkZWQgaWYgaXQgaXMgZGVmaW5lZC5cclxuICAgKiBAcGFyYW0gZWxlbWVudElkIFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxyXG4gICAqIEByZXR1cm5zIHJlZmVyZW5jZSB0byB0aGUgSFRNTENhbnZhc0VsZW1lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoZWxlbWVudElkPzogc3RyaW5nKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGlmIChjYW52YXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSBjYW52YXMgZWxlbWVudCBuYW1lZCAnICsgZWxlbWVudElkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICBpZiAoZ2wgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2dsJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIGEgR0xCdWZmZXIgYXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSW5mbyB7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIChudW1iZXIgb2YgZWxlbWVudHMpIGluIHRoaXMgYXR0cmlidXRlIChpLmUuIFZlY3RvcjMgPSAzKVxyXG4gICAqL1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHB1YmxpYyBzaXplOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlci5cclxuICAgKi9cclxuICAvL0B0cy1pZ25vcmVcclxuICBwdWJsaWMgb2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgV2ViR0wgYnVmZmVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xCdWZmZXIge1xyXG4gIHByaXZhdGUgX2hhc0F0dHJpYnV0ZUxvY2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZWxlbWVudFNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdHJpZGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9idWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICBwcml2YXRlIF90YXJnZXRCdWZmZXJUeXBlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGF0YVR5cGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9tb2RlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdHlwZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0YTogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiBBdHRyaWJ1dGVJbmZvW10gPSBbXTtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEdMIEJ1ZmZlci5cclxuICAgKiBAcGFyYW0gZWxlbWVudFNpemUgVGhlIHNpemUgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBidWZmZXIuXHJcbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSBkYXRhIHR5cGUgb2YgdGhlIGJ1ZmZlci4gRGVmYXVsdDogZ2wuRkxPQVRcclxuICAgKiBAcGFyYW0gdGFyZ2V0QnVmZmVyVHlwZSBUaGUgYnVmZmVyIHRhcmdldCB0eXBlLiBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIuIERlZmF1bHQ6IGdsLkFSUkFZX0JVRkZFUlxyXG4gICAqIEBwYXJhbSBtb2RlIFRoZSBkcmF3aW5nIG1vZGUgb2YgdGhlIGJ1ZmZlci4gKGkuZS4gZ2wuVFJJQU5HTEVTIG9yIGdsLkxJTkVTKS4gRGVmYXVsdDogZ2wuVFJJQU5HTEVTXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFNpemU6IG51bWJlcixcclxuICAgIGRhdGFUeXBlOiBudW1iZXIgPSBnbC5GTE9BVCxcclxuICAgIHRhcmdldEJ1ZmZlclR5cGU6IG51bWJlciA9IGdsLkFSUkFZX0JVRkZFUixcclxuICAgIG1vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFU1xyXG4gICkge1xyXG4gICAgdGhpcy5fZWxlbWVudFNpemUgPSBlbGVtZW50U2l6ZTtcclxuICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XHJcbiAgICB0aGlzLl90YXJnZXRCdWZmZXJUeXBlID0gdGFyZ2V0QnVmZmVyVHlwZTtcclxuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG5cclxuICAgIC8vIERldGVybWluZSBieXRlIHNpemVcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgLy8gcG9zaXRpdmUgb3IgbmVnYXRpdmVcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgIC8vIG9ubHkgcG9zaXRpdmUgYnV0IHR3aWNlIHRoZSBzaXplIG9mIGludFxyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuU0hPUlQ6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgdGhpcy5fdHlwZVNpemUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICB0aGlzLl90eXBlU2l6ZSA9IDE7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZGF0YSB0eXBlICR7ZGF0YVR5cGUudG9TdHJpbmcoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaXplIG9mIGVsZW1lbnRzICogbnVtYmVyIG9mIGJ5dGVzIGluIGVhY2ggZWxlbWVudFxyXG4gICAgdGhpcy5fc3RyaWRlID0gdGhpcy5fZWxlbWVudFNpemUgKiB0aGlzLl90eXBlU2l6ZTtcclxuICAgIHRoaXMuX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIFdlYkdMQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveXMgdGhlIGJ1ZmZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kcyB0aGlzIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gbm9ybWFsaXplZCBJbmRpY2F0ZXMgaWYgdGhpcyBkYXRhIHNob3VsZCBiZSBub3JtYWxpemVkLiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBiaW5kKG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbikge1xyXG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgIGl0LmxvY2F0aW9uLFxyXG4gICAgICAgICAgaXQuc2l6ZSxcclxuICAgICAgICAgIHRoaXMuX2RhdGFUeXBlLFxyXG4gICAgICAgICAgbm9ybWFsaXplZCxcclxuICAgICAgICAgIHRoaXMuX3N0cmlkZSxcclxuICAgICAgICAgIGl0Lm9mZnNldCAqIHRoaXMuX3R5cGVTaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaXQubG9jYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGl0KSA9PiB7XHJcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpdC5sb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgaW5mb3JtYXRpb24gdG8gdGhlIGJ1ZmZlclxyXG4gICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiB0byBiZSBhZGRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRBdHRyaWJ1dGVMb2NhdGlvbihpbmZvOiBBdHRyaWJ1dGVJbmZvKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNBdHRyaWJ1dGVMb2NhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKGluZm8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBidWZmZXJcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwdXNoQmFja0RhdGEoZGF0YTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgdGhpcyBkYXRhIHRvIHRoZSBHUFVcclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZEJ1ZmZlcih0aGlzLl90YXJnZXRCdWZmZXJUeXBlLCB0aGlzLl9idWZmZXIpO1xyXG5cclxuICAgIGxldCBidWZmZXJEYXRhOiBBcnJheUJ1ZmZlcjtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBnbC5GTE9BVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5JTlQ6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlVOU0lHTkVEX0lOVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLlNIT1JUOlxyXG4gICAgICAgIGJ1ZmZlckRhdGEgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnbC5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2RhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdsLkJZVEU6XHJcbiAgICAgICAgYnVmZmVyRGF0YSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2wuVU5TSUdORURfQllURTpcclxuICAgICAgICBidWZmZXJEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGEgdHlwZSBlcnJvciBpbiBwdXNoQmFja0RhdGEoKSBmb3IgZGF0YXR5cGUgJHt0aGlzLl9kYXRhVHlwZS50b1N0cmluZygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSwgYnVmZmVyRGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fdGFyZ2V0QnVmZmVyVHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXModGhpcy5fbW9kZSwgMCwgdGhpcy5fZGF0YS5sZW5ndGggLyB0aGlzLl9lbGVtZW50U2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldEJ1ZmZlclR5cGUgPT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0aGlzLl9tb2RlLCB0aGlzLl9kYXRhLmxlbmd0aCwgdGhpcy5fZGF0YVR5cGUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vbWF0ZXJpYWwnO1xyXG5cclxuY2xhc3MgTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgbWF0ZXJpYWw6IE1hdGVyaWFsIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21hdGVyaWFsczogeyBbbmFtZTogc3RyaW5nXTogTWF0ZXJpYWxSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsLm5hbWVdID0gbmV3IE1hdGVyaWFsUmVmZXJlbmNlTm9kZShcclxuICAgICAgICBtYXRlcmlhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IE1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgICAgcmV0dXJuIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VNYXRlcmlhbChtYXRlcmlhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxSZWZlcmVuY2UgPSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgaWYgKCFtYXRlcmlhbFJlZmVyZW5jZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCByZWxlYXNlIGEgbWF0ZXJpYWwgd2hpY2ggaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQtLTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ucmVmZXJlbmNlQ291bnQgPCAxICYmXHJcbiAgICAgICAgTWF0ZXJpYWxNYW5hZ2VyLl9tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIE1hdGVyaWFsTWFuYWdlci5fbWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0ubWF0ZXJpYWw/LmRlc3Ryb3koKTtcclxuICAgICAgICBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdLm1hdGVyaWFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGRlbGV0ZSBNYXRlcmlhbE1hbmFnZXIuX21hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbmZvLCBHTEJ1ZmZlciB9IGZyb20gJy4uL2dsL2dsQnVmZmVyJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSAnLi9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9idWZmZXI6IEdMQnVmZmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX21hdGVyaWFsOiBNYXRlcmlhbCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9tYXRlcmlhbE5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmcsXHJcbiAgICB3aWR0aDogbnVtYmVyID0gMTAwLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSAxMDBcclxuICApIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IG1hdGVyaWFsTmFtZTtcclxuICAgIHRoaXMuX21hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYnVmZmVyKSB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVsZWFzZU1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTmFtZSk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLl9tYXRlcmlhbCA9IHVuZGVmaW5lZDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEdMQnVmZmVyKDUpO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBBdHRyaWJ1dGVJbmZvKCk7XHJcbiAgICAvLyBSZW1vdmVkIHJlZmVyZW5jZSB0byBzaGFkZXIsIGJhZCBwcmFjdGljZSB0byBwYXNzIHNoYWRlciBpbmZvIHRvIHNwcml0ZSBvbiBsb2FkXHJcbiAgICAvLyBTdGlsbCBub3QgaWRlYWwgKHJlZmVyZW5jaW5nIGFfbG9jYXRpb24gaW4gdmVydGV4U2hhZGVyU291cmNlIGJ5IGhhcmRjb2RpbmcgMClcclxuICAgIC8vIEVhY2ggdmFyaWFibGUgaW4gc2hhZGVyU291cmNlIGlzIHJlZmVyZW5jZWQgYnkgaW5kZXggaW4gb3JkZXIgb2YgZGVjbGFyYXRpb24gKGUuZy4gYmVjYXVzZSBhX2xvY2F0aW9uIGlzIHRoZSBmaXJzdCB2YXJpYWJsZSBpdCBpcyBpbmRleCAwKVxyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUubG9jYXRpb24gPSAwO1xyXG4gICAgcG9zaXRpb25BdHRyaWJ1dGUub2Zmc2V0ID0gMDtcclxuICAgIHBvc2l0aW9uQXR0cmlidXRlLnNpemUgPSAzO1xyXG4gICAgdGhpcy5fYnVmZmVyLmFkZEF0dHJpYnV0ZUxvY2F0aW9uKHBvc2l0aW9uQXR0cmlidXRlKTtcclxuXHJcbiAgICBsZXQgdGV4Q29vcmRBdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlSW5mbygpO1xyXG4gICAgdGV4Q29vcmRBdHRyaWJ1dGUubG9jYXRpb24gPSAxO1xyXG4gICAgLy8gbWF0Y2hlcyB0aGUgc2l6ZSBvZiB0aGUgcG9zdGlvbiBhdHRyaWJ1dGVcclxuICAgIHRleENvb3JkQXR0cmlidXRlLm9mZnNldCA9IDM7XHJcbiAgICB0ZXhDb29yZEF0dHJpYnV0ZS5zaXplID0gMjtcclxuICAgIHRoaXMuX2J1ZmZlci5hZGRBdHRyaWJ1dGVMb2NhdGlvbih0ZXhDb29yZEF0dHJpYnV0ZSk7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IHZlcnRpY2VzID0gW1xyXG4gICAgICAvLyB4LCB5LCB6LCBVOiB0ZXh0dXJlIHgsIFY6IHRleHR1cmUgeVxyXG4gICAgICAvLyB0cmlhbmdsZSAxXHJcbiAgICAgIC8vIHBvaW50IDFcclxuICAgICAgMCwgMCwgMCwgMCwgMCxcclxuICAgICAgLy8gcG9pbnQgMlxyXG4gICAgICAwLCB0aGlzLl9oZWlnaHQsIDAsIDAsIDEuMCxcclxuICAgICAgLy8gcG9pbnQgM1xyXG4gICAgICB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCAwLCAxLjAsIDEuMCxcclxuICAgICAgLy8gdHJpYW5nbGUgMlxyXG4gICAgICAvLyBwb2ludCA0XHJcbiAgICAgIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIDAsIDEuMCwgMS4wLFxyXG4gICAgICAvLyBwb2ludCA1XHJcbiAgICAgIHRoaXMuX3dpZHRoLCAwLCAwLCAxLjAsIDAsXHJcbiAgICAgIC8vIHBvaW50IDZcclxuICAgICAgMCwgMCwgMCwgMCwgMCxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyLnB1c2hCYWNrRGF0YSh2ZXJ0aWNlcyk7XHJcbiAgICB0aGlzLl9idWZmZXIudXBsb2FkKCk7XHJcbiAgICB0aGlzLl9idWZmZXIudW5iaW5kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIGRyYXcoc2hhZGVyOiBTaGFkZXIsIG1vZGVsOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGxldCBtb2RlbExvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9tb2RlbCcpO1xyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbExvY2F0aW9uLCBmYWxzZSwgbW9kZWwudG9GbG9hdDMyQXJyYXkoKSk7XHJcblxyXG4gICAgY29uc3QgY29sb3JMb2NhdGlvbiA9IHNoYWRlci5nZXRVbmlmb3JtTG9jYXRpb24oJ3VfdGludCcpO1xyXG4gICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgIGdsLnVuaWZvcm00ZnYoY29sb3JMb2NhdGlvbiwgdGhpcy5fbWF0ZXJpYWwudGludC50b0Zsb2F0MzJBcnJheSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbWF0ZXJpYWw/LmRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgIHRoaXMuX21hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLmFjdGl2YXRlQW5kQmluZCgwKTtcclxuICAgICAgY29uc3QgZGlmZnVzZUxvY2F0aW9uID0gc2hhZGVyLmdldFVuaWZvcm1Mb2NhdGlvbigndV9kaWZmdXNlJyk7XHJcbiAgICAgIC8vIHBhc3MgYSBzaW5nbGUgaW50ZWdlclxyXG4gICAgICBnbC51bmlmb3JtMWkoZGlmZnVzZUxvY2F0aW9uLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYnVmZmVyKSB7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMuX2J1ZmZlci5kcmF3KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFzc2lnbmVkIGJ1ZmZlciBmb3Igc3ByaXRlICcgKyB0aGlzLl9uYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vY29yZS9nbC9zaGFkZXInO1xyXG5pbXBvcnQgeyBTaW1PYmplY3QgfSBmcm9tICcuLi9jb3JlL3dvcmxkL3NpbU9iamVjdCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcbiAgcHJvdGVjdGVkIF9kYXRhOiBJQ29tcG9uZW50RGF0YTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElDb21wb25lbnREYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3duZXIoKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9vd25lcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWQoKTogdm9pZCB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHJlbmRlcihzaGFkZXI6IFNoYWRlcik6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9jb3JlL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2NvcmUvZ3JhcGhpY3Mvc3ByaXRlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50QnVpbGRlciB9IGZyb20gJy4vSUNvbXBvbmVudEJ1aWxkZXInO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vSUNvbXBvbmVudERhdGEnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnREYXRhIGltcGxlbWVudHMgSUNvbXBvbmVudERhdGEge1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgbWF0ZXJpYWxOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHNldEZyb21Kc29uKGpzb246IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGpzb24ubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBTdHJpbmcoanNvbi5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChqc29uLm1hdGVyaWFsTmFtZSkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IFN0cmluZyhqc29uLm1hdGVyaWFsTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQ29tcG9uZW50QnVpbGRlciBpbXBsZW1lbnRzIElDb21wb25lbnRCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc3ByaXRlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZEZyb21Kc29uKGpzb246IGFueSk6IElDb21wb25lbnQge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgU3ByaXRlQ29tcG9uZW50RGF0YSgpO1xyXG4gICAgZGF0YS5zZXRGcm9tSnNvbihqc29uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZUNvbXBvbmVudChkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFNwcml0ZUNvbXBvbmVudERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBTcHJpdGUoZGF0YS5uYW1lLCBkYXRhLm1hdGVyaWFsTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Nwcml0ZS5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3duZXI/LndvcmxkTWF0cml4KSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZS5kcmF3KHNoYWRlciwgdGhpcy5fb3duZXI/LndvcmxkTWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW5kZXIoc2hhZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnLi9JTWVzc2FnZUhhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZSB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgcHVibGljIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IE1lc3NhZ2UsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4vSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZVN1YnNjcmlwdGlvbk5vZGUgfSBmcm9tICcuL21lc3NhZ2VTdWJzY3JpcHRpb25Ob2RlJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVByaW9yaXR5IH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICBwcml2YXRlIHN0YXRpYyBfc3Vic2NyaXB0aW9uczogeyBbY29kZTogc3RyaW5nXTogSU1lc3NhZ2VIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsUXVldWVNZXNzYWdlUGVyVXBkYXRlOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHN0YXRpYyBfbm9ybWFsTWVzc2FnZVF1ZXVlOiBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZFN1YnNjcmlwdGlvbihjb2RlOiBzdHJpbmcsIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlcik6IHZvaWQge1xyXG4gICAgaWYgKCFNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1tjb2RlXS5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYWRkIGEgZHVwbGljYXRlIGhhbmRsZXIgdG8gY29kZSAnICtcclxuICAgICAgICAgIGNvZGUgK1xyXG4gICAgICAgICAgJy4gU3Vic2NyaXB0aW9uIG5vdCBhZGRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbW92ZVN1YnNjcmlwdGlvbihcclxuICAgIGNvZGU6IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IElNZXNzYWdlSGFuZGxlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gTm90IHN1cmUgaWYgdGhpcyBpcyBjb3JyZWN0XHJcbiAgICBpZiAoIU1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdDYW5ub3QgdW5zdWJzY3JpYmUgaGFuZGxlciBmcm9tIGNvZGU6ICcgK1xyXG4gICAgICAgICAgY29kZSArXHJcbiAgICAgICAgICAnIGJlY2F1c2UgdGhhdCBjb2RlIGRvZXMgbm90IHN1YnNjcmliZWQgdG8uJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVJbmRleCA9IE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgIGlmIChub2RlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIE1lc3NhZ2VCdXMuX3N1YnNjcmlwdGlvbnNbY29kZV0gPSBNZXNzYWdlQnVzLl9zdWJzY3JpcHRpb25zW2NvZGVdLmZpbHRlcihcclxuICAgICAgICAoXywgaWR4KSA9PiBpZHggIT09IG5vZGVJbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBwb3N0KG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIHBvc3RlZDonLCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0gTWVzc2FnZUJ1cy5fc3Vic2NyaXB0aW9uc1ttZXNzYWdlLmNvZGVdO1xyXG4gICAgaWYgKCFoYW5kbGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5wcmlvcml0eSA9PT0gTWVzc2FnZVByaW9yaXR5LkhJR0gpIHtcclxuICAgICAgICBoLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNZXNzYWdlQnVzLl9ub3JtYWxNZXNzYWdlUXVldWUucHVzaChcclxuICAgICAgICAgIG5ldyBNZXNzYWdlU3Vic2NyaXB0aW9uTm9kZShtZXNzYWdlLCBoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IHVzaW5nIHRpbWU/XHJcbiAgcHVibGljIHN0YXRpYyB1cGRhdGUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxpbWl0ID0gTWF0aC5taW4oXHJcbiAgICAgIE1lc3NhZ2VCdXMuX25vcm1hbFF1ZXVlTWVzc2FnZVBlclVwZGF0ZSxcclxuICAgICAgTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VMaW1pdDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlID0gTWVzc2FnZUJ1cy5fbm9ybWFsTWVzc2FnZVF1ZXVlLnBvcCgpO1xyXG4gICAgICBub2RlPy5oYW5kbGVyLm9uTWVzc2FnZShub2RlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2VCdXMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVByaW9yaXR5IHtcclxuICBOT1JNQUwsXHJcbiAgSElHSCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIHB1YmxpYyBjb2RlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbnRleHQ6IHVua25vd247XHJcbiAgcHVibGljIHNlbmRlcjogdW5rbm93bjtcclxuICBwdWJsaWMgcHJpb3JpdHk6IE1lc3NhZ2VQcmlvcml0eTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgc2VuZGVyOiB1bmtub3duLFxyXG4gICAgY29udGV4dDogdW5rbm93bixcclxuICAgIHByaW9yaXR5OiBNZXNzYWdlUHJpb3JpdHkgPSBNZXNzYWdlUHJpb3JpdHkuTk9STUFMXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kKGNvZGU6IHN0cmluZywgc2VuZGVyOiB1bmtub3duLCBjb250ZXh0PzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5Lk5PUk1BTCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZW5kUHJpb3JpdHkoXHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBzZW5kZXI6IHVua25vd24sXHJcbiAgICBjb250ZXh0PzogdW5rbm93blxyXG4gICk6IHZvaWQge1xyXG4gICAgTWVzc2FnZUJ1cy5wb3N0KG5ldyBNZXNzYWdlKGNvZGUsIHNlbmRlciwgY29udGV4dCwgTWVzc2FnZVByaW9yaXR5LkhJR0gpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNvZGU6IHN0cmluZywgaGFuZGxlcjogSU1lc3NhZ2VIYW5kbGVyKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLmFkZFN1YnNjcmlwdGlvbihjb2RlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdW5zdWJzY3JpYmUoY29kZTogc3RyaW5nLCBoYW5kbGVyOiBJTWVzc2FnZUhhbmRsZXIpOiB2b2lkIHtcclxuICAgIE1lc3NhZ2VCdXMucmVtb3ZlU3Vic2NyaXB0aW9uKGNvZGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IElBc3NldCB9IGZyb20gJy4vaUFzc2V0JztcclxuaW1wb3J0IHsgSUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9JQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQXNzZXRMb2FkZXIgaW1wbGVtZW50cyBJQXNzZXRMb2FkZXIge1xyXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkRXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydwbmcnLCAnZ2lmJywgJ2pwZyddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIGltYWdlKTtcclxuICAgIGltYWdlLnNyYyA9IGFzc2V0TmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbWFnZUxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBuZXcgSW1hZ2VBc3NldChhc3NldE5hbWUsIGltYWdlKTtcclxuXHJcbiAgICBBc3NldE1hbmFnZXIub25Bc3NldExvYWRlZChhc3NldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFzc2V0TWFuYWdlciB9IGZyb20gJy4vYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0IGltcGxlbWVudHMgSUFzc2V0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBkYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkFzc2V0TG9hZGVyIGltcGxlbWVudHMgSUFzc2V0TG9hZGVyIHtcclxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnanNvbiddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJlcXVlc3Q6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGFzc2V0TmFtZSk7XHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdsb2FkJyxcclxuICAgICAgdGhpcy5vbkpzb25Mb2FkZWQuYmluZCh0aGlzLCBhc3NldE5hbWUsIHJlcXVlc3QpXHJcbiAgICApO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSnNvbkxvYWRlZChhc3NldE5hbWU6IHN0cmluZywgcmVxdWVzdDogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkltYWdlTG9hZGVkXCIgYXNzZXROYW1lL2ltYWdlJywgYXNzZXROYW1lLCByZXF1ZXN0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgSnNvbkFzc2V0KGFzc2V0TmFtZSwganNvbik7XHJcbiAgICAgIEFzc2V0TWFuYWdlci5vbkFzc2V0TG9hZGVkKGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSAnLi9pQXNzZXQnO1xyXG5pbXBvcnQgeyBJQXNzZXRMb2FkZXIgfSBmcm9tICcuL0lBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0TG9hZGVyIH0gZnJvbSAnLi9pbWFnZUFzc2V0TG9hZGVyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0TG9hZGVyIH0gZnJvbSAnLi9qc29uQXNzZXRMb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCA9XHJcbiAgJ01FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRDo6JztcclxuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlcnM6IElBc3NldExvYWRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRlZEFzc2V0czogeyBbbmFtZTogc3RyaW5nXTogSUFzc2V0IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKG5ldyBJbWFnZUFzc2V0TG9hZGVyKCkpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZXJzLnB1c2gobmV3IEpzb25Bc3NldExvYWRlcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJMb2FkZXIobG9hZGVyOiBJQXNzZXRMb2FkZXIpOiB2b2lkIHtcclxuICAgIEFzc2V0TWFuYWdlci5fbG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uQXNzZXRMb2FkZWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgQXNzZXRNYW5hZ2VyLl9sb2FkZWRBc3NldHNbYXNzZXQubmFtZV0gPSBhc3NldDtcclxuICAgIE1lc3NhZ2Uuc2VuZChNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyBhc3NldC5uYW1lLCB0aGlzLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXROYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgbCBvZiBBc3NldE1hbmFnZXIuX2xvYWRlcnMpIHtcclxuICAgICAgaWYgKGwuc3VwcG9ydGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbiB8fCAnJykgIT09IC0xKSB7XHJcbiAgICAgICAgbC5sb2FkQXNzZXQoYXNzZXROYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBVbmFibGUgdG8gbG9hZCBhc3NldCB3aXRoIGV4dGVuc2lvbiAke2V4dGVuc2lvbn0gYmVjYXVzZSB0aGVyZSBpcyBubyBsb2FkZXIgYXNzb2NpYXRlZCB3aXRoIGl0LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQXNzZXRMb2FkZWQoYXNzZXROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd29ya3NcclxuICAgIHJldHVybiAhIUFzc2V0TWFuYWdlci5fbG9hZGVkQXNzZXRzW2Fzc2V0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFzc2V0KGFzc2V0TmFtZTogc3RyaW5nKTogSUFzc2V0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdKSB7XHJcbiAgICAgIHJldHVybiBBc3NldE1hbmFnZXIuX2xvYWRlZEFzc2V0c1thc3NldE5hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChhc3NldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JCdWlsZGVyIH0gZnJvbSAnLi9JQmVoYXZpb3JCdWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCZWhhdmlvck1hbmFnZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIF9yZWdpc3RlcmVkQnVpbGRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElCZWhhdmlvckJ1aWxkZXIgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQnVpbGRlcihidWlsZGVyOiBJQmVoYXZpb3JCdWlsZGVyKTogdm9pZCB7XHJcbiAgICBCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tidWlsZGVyLnR5cGVdID0gYnVpbGRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEJlaGF2aW9yKGpzb246IGFueSk6IElCZWhhdmlvciB7XHJcbiAgICBpZiAoanNvbi50eXBlKSB7XHJcbiAgICAgIGlmIChCZWhhdmlvck1hbmFnZXIuX3JlZ2lzdGVyZWRCdWlsZGVyc1tTdHJpbmcoanNvbi50eXBlKV0pIHtcclxuICAgICAgICByZXR1cm4gQmVoYXZpb3JNYW5hZ2VyLl9yZWdpc3RlcmVkQnVpbGRlcnNbXHJcbiAgICAgICAgICBTdHJpbmcoanNvbi50eXBlKVxyXG4gICAgICAgIF0uYnVpbGRGcm9tSnNvbihqc29uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAnQmVoYXZpb3IgbWFuYWdlciBlcnJvcjogdHlwZSBpcyBtaXNzaW5nIG9yIGJ1aWxkZXIgaXMgbm90IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3o6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHo6IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgICB0aGlzLl96ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl96O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB6KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5feCwgdGhpcy5feSwgdGhpcy5fel07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdDMyQXJyYXkoKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudG9BcnJheSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ggPSB2ZWN0b3IuX3g7XHJcbiAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChqc29uLngpIHtcclxuICAgICAgdGhpcy5feCA9IE51bWJlcihqc29uLngpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24ueSkge1xyXG4gICAgICB0aGlzLl95ID0gTnVtYmVyKGpzb24ueSk7XHJcbiAgICB9XHJcbiAgICBpZiAoanNvbi56KSB7XHJcbiAgICAgIHRoaXMuX3ogPSBOdW1iZXIoanNvbi56KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQodjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgdGhpcy5feiArPSB2Ll96O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YnRyYWN0KHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLT0gdi5feDtcclxuICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICB0aGlzLl96ICo9IHYuX3o7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi4vd29ybGQvc2ltT2JqZWN0JztcclxuaW1wb3J0IHsgSUJlaGF2aW9yIH0gZnJvbSAnLi9JQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3JEYXRhIH0gZnJvbSAnLi9JQmVoYXZpb3JEYXRhJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQmVoYXZpb3IgaW1wbGVtZW50cyBJQmVoYXZpb3Ige1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfZGF0YTogSUJlaGF2aW9yRGF0YTtcclxuICBwcm90ZWN0ZWQgX293bmVyOiBTaW1PYmplY3QgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJQmVoYXZpb3JEYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMuX2RhdGEubmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPd25lcihvd25lcjogU2ltT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vd25lciA9IG93bmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyBhcHBseSh1c2VyRGF0YTogYW55KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi9tYXRoL3ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBCYXNlQmVoYXZpb3IgfSBmcm9tICcuL2Jhc2VCZWhhdmlvcic7XHJcbmltcG9ydCB7IElCZWhhdmlvciB9IGZyb20gJy4vSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgSUJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vSUJlaGF2aW9yQnVpbGRlcic7XHJcbmltcG9ydCB7IElCZWhhdmlvckRhdGEgfSBmcm9tICcuL0lCZWhhdmlvckRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uQmVoYXZpb3JEYXRhIGltcGxlbWVudHMgSUJlaGF2aW9yRGF0YSB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tSnNvbihqc29uOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghanNvbi5uYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBtdXN0IGJlIGRlZmluZWQgaW4gYmVoYXZpb3IgZGF0YS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvbi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0RnJvbUpzb24oanNvbi5yb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvckJ1aWxkZXIgaW1wbGVtZW50cyBJQmVoYXZpb3JCdWlsZGVyIHtcclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAncm90YXRpb24nO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGcm9tSnNvbihqc29uOiBhbnkpOiBJQmVoYXZpb3Ige1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgUm90YXRpb25CZWhhdmlvckRhdGEoKTtcclxuICAgIGRhdGEuc2V0RnJvbUpzb24oanNvbik7XHJcbiAgICByZXR1cm4gbmV3IFJvdGF0aW9uQmVoYXZpb3IoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRpb25CZWhhdmlvciBleHRlbmRzIEJhc2VCZWhhdmlvciB7XHJcbiAgcHJpdmF0ZSBfcm90YXRpb246IFZlY3RvcjM7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBSb3RhdGlvbkJlaGF2aW9yRGF0YSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkYXRhLnJvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX293bmVyPy50cmFuc2Zvcm0ucm90YXRpb24uYWRkKHRoaXMuX3JvdGF0aW9uKTtcclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSAnLi9nbCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIFdlYkdMIHNoYWRlci5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFkZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBfcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgcHJpdmF0ZSBfdW5pZm9ybXM6IHsgW25hbWU6IHN0cmluZ106IFdlYkdMVW5pZm9ybUxvY2F0aW9uIH0gPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBzaGFkZXIuXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNoYWRlci5cclxuICAgKiBAcGFyYW0gdmVydGV4U291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHZlcnRleCBzaGFkZXIuXHJcbiAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGZyYWdtZW50IHNoYWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBzaGFkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHVzZSgpOiB2b2lkIHtcclxuICAgIGdsLnVzZVByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsb2NhdGlvbiBvZiBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZVxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gcmV0cmlldmVcclxuICAgKiBAcmV0dXJucyBBbiBhdHRyaWJ1dGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0QXR0cmlidXRlTG9jYXRpb24obmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLl9hdHRyaWJ1dGVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBVbmFibGUgdG8gZmluZCBhdHRyaWJ1dGUgbmFtZSAke25hbWV9IGluIHNoYWRlciAke3RoaXMuX25hbWV9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVuaWZvcm1Mb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB7XHJcbiAgICBpZiAodGhpcy5fdW5pZm9ybXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFVuYWJsZSB0byBmaW5kIHVuaWZvcm0gbmFtZSAke25hbWV9IGluIHNoYWRlciAke3RoaXMuX25hbWV9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl91bmlmb3Jtc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBsb2FkKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKHZlcnRleFNvdXJjZSwgZ2wuVkVSVEVYX1NIQURFUik7XHJcbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXIoZnJhZ21lbnRTb3VyY2UsIGdsLkZSQUdNRU5UX1NIQURFUik7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgIHRoaXMuZGV0ZWN0QXR0cmlidXRlcygpO1xyXG4gICAgdGhpcy5kZXRlY3RVbmlmb3JtcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkU2hhZGVyKHNvdXJjZTogc3RyaW5nLCBzaGFkZXJUeXBlOiBudW1iZXIpOiBXZWJHTFNoYWRlciB7XHJcbiAgICBsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKSBhcyBXZWJHTFNoYWRlcjtcclxuXHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgbGV0IGVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgY29tcGlsaW5nIHNoYWRlcjogJyArIHRoaXMuX25hbWUgKyAnOiAnICsgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoYWRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUHJvZ3JhbShcclxuICAgIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsXHJcbiAgICBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXJcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuX3Byb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkgYXMgV2ViR0xQcm9ncmFtO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLl9wcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuX3Byb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJycm9yIGxpbmtpbmcgc2hhZGVyICcgKyB0aGlzLl9uYW1lICsgJzogJyArIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0QXR0cmlidXRlcygpOiB2b2lkIHtcclxuICAgIC8vIGdpdmVzIGFsbCBhdHRyaWJ1dGVzIGluIHRoZSBzaGFkZXJcclxuICAgIGNvbnN0IGF0dHJpYnV0ZUNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihcclxuICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgZ2wuQUNUSVZFX0FUVFJJQlVURVNcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVDb3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZUluZm86IFdlYkdMQWN0aXZlSW5mbyA9IGdsLmdldEFjdGl2ZUF0dHJpYihcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGlcclxuICAgICAgKSBhcyBXZWJHTEFjdGl2ZUluZm87XHJcbiAgICAgIGlmICghYXR0cmlidXRlSW5mbykge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZXMgX2F0dHJpYnVlcyB3aXRoIGVhY2ggYXR0cmlidXRlIGFzIGFzIHRoZSB2YWx1ZSBhbmQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFzIHRoZSBrZXlcclxuICAgICAgdGhpcy5fYXR0cmlidXRlc1thdHRyaWJ1dGVJbmZvLm5hbWVdID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSxcclxuICAgICAgICBhdHRyaWJ1dGVJbmZvLm5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0VW5pZm9ybXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1bmlmb3JtQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICBnbC5BQ1RJVkVfVU5JRk9STVNcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3JtQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCB1bmlmb3JtSW5mbzogV2ViR0xBY3RpdmVJbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShcclxuICAgICAgICB0aGlzLl9wcm9ncmFtLFxyXG4gICAgICAgIGlcclxuICAgICAgKSBhcyBXZWJHTEFjdGl2ZUluZm87XHJcbiAgICAgIGlmICghdW5pZm9ybUluZm8pIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9wdWxhdGVzIF9hdHRyaWJ1ZXMgd2l0aCBlYWNoIGF0dHJpYnV0ZSBhcyBhcyB0aGUgdmFsdWUgYW5kIHRoZSBhdHRyaWJ1dGUgbmFtZSBhcyB0aGUga2V5XHJcbiAgICAgIHRoaXMuX3VuaWZvcm1zW3VuaWZvcm1JbmZvLm5hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0sXHJcbiAgICAgICAgdW5pZm9ybUluZm8ubmFtZVxyXG4gICAgICApIGFzIFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXIgfSBmcm9tICcuLi9zaGFkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignYmFzaWMnKTtcclxuXHJcbiAgICB0aGlzLmxvYWQodGhpcy5nZXRWZXJ0ZXhTb3VyY2UoKSwgdGhpcy5nZXRGcmFnbWVudFNvdXJjZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmVydGV4U291cmNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgYXR0cmlidXRlIHZlYzMgYV9wb3NpdGlvbjtcclxuICAgIGF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcblxyXG4gICAgdW5pZm9ybSBtYXQ0IHVfcHJvamVjdGlvbjtcclxuICAgIHVuaWZvcm0gbWF0NCB1X21vZGVsO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG5cclxuICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgZ2xfUG9zaXRpb24gPSB1X3Byb2plY3Rpb24gKiB1X21vZGVsICogdmVjNChhX3Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZyYWdtZW50U291cmNlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblxyXG4gICAgdW5pZm9ybSB2ZWM0IHVfdGludDtcclxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfZGlmZnVzZTtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKCkge1xyXG4gICAgICBnbF9GcmFnQ29sb3IgPSB1X3RpbnQgKiB0ZXh0dXJlMkQodV9kaWZmdXNlLCB2X3RleENvb3JkKTtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHJpdmF0ZSBfcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2c6IG51bWJlcjtcclxuICBwcml2YXRlIF9iOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICByOiBudW1iZXIgPSAyNTUsXHJcbiAgICBnOiBudW1iZXIgPSAyNTUsXHJcbiAgICBiOiBudW1iZXIgPSAyNTUsXHJcbiAgICBhOiBudW1iZXIgPSAyNTVcclxuICApIHtcclxuICAgIHRoaXMuX3IgPSByO1xyXG4gICAgdGhpcy5fZyA9IGc7XHJcbiAgICB0aGlzLl9iID0gYjtcclxuICAgIHRoaXMuX2EgPSBhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgckZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fciAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2c7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdGbG9hdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2cgLyAyNTUuMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiRmxvYXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9iIC8gMjU1LjA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYUZsb2F0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYSAvIDI1NS4wO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2EgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9GbG9hdEFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbdGhpcy5fciAvIDI1NS4wLCB0aGlzLl9nIC8gMjU1LjAsIHRoaXMuX2IgLyAyNTUuMCwgdGhpcy5fYSAvIDI1NS4wXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0Zsb2F0QXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdoaXRlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmxhY2soKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWQoKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdyZWVuKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMjU1LCAwLCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBibHVlKCk6IENvbG9yIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMjU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFzc2V0TWFuYWdlcixcclxuICBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQsXHJcbn0gZnJvbSAnLi4vYXNzZXRzL2Fzc2V0TWFuYWdlcic7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VBc3NldExvYWRlcic7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi4vZ2wvZ2wnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZUhhbmRsZXIgfSBmcm9tICcuLi9tZXNzYWdlL0lNZXNzYWdlSGFuZGxlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xyXG5cclxuY29uc3QgTEVWRUw6IG51bWJlciA9IDA7XHJcbmNvbnN0IEJPUkRFUjogbnVtYmVyID0gMDtcclxuY29uc3QgVEVNUF9JTUFHRV9EQVRBOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUgaW1wbGVtZW50cyBJTWVzc2FnZUhhbmRsZXIge1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9oYW5kbGU6IFdlYkdMVGV4dHVyZTtcclxuICBwcml2YXRlIF9pc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIgPSAxLCBoZWlnaHQ6IG51bWJlciA9IDEpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLl9oYW5kbGUgPSBnbC5jcmVhdGVUZXh0dXJlKCkgYXMgV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCArIHRoaXMuX25hbWUsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgIC8vIFRoaXMgc2lnbmF0dXJlIGlzIGZvciBsb2FkaW5nIHJhdyBkYXRhIGludG8gYSB0ZXh0dXJlXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICBMRVZFTCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgQk9SREVSLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBURU1QX0lNQUdFX0RBVEFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXNzZXQgPSBBc3NldE1hbmFnZXIuZ2V0QXNzZXQodGhpcy5fbmFtZSkgYXMgSW1hZ2VBc3NldDtcclxuICAgIGlmIChhc3NldCkge1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlRnJvbUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLl9oYW5kbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiaW5kKCk6IHZvaWQge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5faGFuZGxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1ha2VzIGEgY2FsbCB0byB3ZWJnbCBhbmQgdGVsbHMgaXQgd2hhdCBjaGFubmVsIHRvIGFjdGl2YXRlIG9uXHJcbiAgICogKDMyIHRvdGFsKVxyXG4gICAqIEBwYXJhbSB0ZXh0dXJlVW5pdCB0ZXh0dXJlIHRvIGFjdGl2YXRlIG9uXHJcbiAgICovXHJcbiAgcHVibGljIGFjdGl2YXRlQW5kQmluZCh0ZXh0dXJlVW5pdDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHRleHR1cmVVbml0KTtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlID09PSBNRVNTQUdFX0FTU0VUX0xPQURFUl9BU1NFVF9MT0FERUQgKyB0aGlzLl9uYW1lKSB7XHJcbiAgICAgIHRoaXMubG9hZFRleHR1cmVGcm9tQXNzZXQobWVzc2FnZS5jb250ZXh0IGFzIEltYWdlQXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkVGV4dHVyZUZyb21Bc3NldChhc3NldDogSW1hZ2VBc3NldCk6IHZvaWQge1xyXG4gICAgdGhpcy5fd2lkdGggPSBhc3NldC53aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IGFzc2V0LmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAvLyBUaGlzIHNpZ25hdHVyZSBpcyBmb3IgbG9hZGluZyBhbiBpbWFnZSBiaXRtYXBwZXJcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAgIExFVkVMLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBhc3NldC5kYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUG93ZXJPZjIoKSkge1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhIG1pcCBtYXAgYW5kIGNsYW1wIHdyYXBwaW5nIHRvIGVkZ2UuXHJcblxyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Bvd2VyT2YyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc1ZhbHVlUG93ZXJPZjIodGhpcy5fd2lkdGgpICYmIHRoaXMuaXNWYWx1ZVBvd2VyT2YyKHRoaXMuX2hlaWdodClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsdWVQb3dlck9mMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJztcclxuXHJcbmNsYXNzIFRleHR1cmVSZWZlcmVuY2VOb2RlIHtcclxuICBwdWJsaWMgdGV4dHVyZTogVGV4dHVyZTtcclxuICBwdWJsaWMgcmVmZXJlbmNlQ291bnQ6IG51bWJlciA9IDE7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVNYW5hZ2VyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfdGV4dHVyZXM6IHsgW25hbWU6IHN0cmluZ106IFRleHR1cmVSZWZlcmVuY2VOb2RlIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZTogc3RyaW5nKTogVGV4dHVyZSB7XHJcbiAgICBpZiAoIVRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0pIHtcclxuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRleHR1cmVOYW1lKTtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSA9IG5ldyBUZXh0dXJlUmVmZXJlbmNlTm9kZSh0ZXh0dXJlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0ucmVmZXJlbmNlQ291bnQrKztcclxuICAgIH1cclxuICAgIHJldHVybiBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnRleHR1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VUZXh0dXJlKHRleHR1cmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYEEgdGV4dHVyZSBuYW1lZCAke3RleHR1cmVOYW1lfSBkb2VzIG5vdCBleGlzdCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZWxlYXNlZC5gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50LS07XHJcbiAgICAgIGlmIChUZXh0dXJlTWFuYWdlci5fdGV4dHVyZXNbdGV4dHVyZU5hbWVdLnJlZmVyZW5jZUNvdW50IDwgMSkge1xyXG4gICAgICAgIFRleHR1cmVNYW5hZ2VyLl90ZXh0dXJlc1t0ZXh0dXJlTmFtZV0udGV4dHVyZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgVGV4dHVyZU1hbmFnZXIuX3RleHR1cmVzW3RleHR1cmVOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJztcclxuaW1wb3J0IHsgVGV4dHVyZU1hbmFnZXIgfSBmcm9tICcuL3RleHR1cmVNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbCB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RpZmZ1c2VUZXh0dXJlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9kaWZmdXNlVGV4dHVyZTogVGV4dHVyZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF90aW50OiBDb2xvcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGlmZnVzZVRleHR1cmVOYW1lOiBzdHJpbmcsIHRpbnQ6IENvbG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSA9IGRpZmZ1c2VUZXh0dXJlTmFtZTtcclxuICAgIHRoaXMuX3RpbnQgPSB0aW50O1xyXG5cclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IFRleHR1cmVNYW5hZ2VyLmdldFRleHR1cmUoXHJcbiAgICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWZmdXNlVGV4dHVyZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpZmZ1c2VUZXh0dXJlKCk6IFRleHR1cmUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLl9kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2RpZmZ1c2VUZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0aW50KCk6IENvbG9yIHtcclxuICAgIHJldHVybiB0aGlzLl90aW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBkaWZmdXNlVGV4dHVyZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgVGV4dHVyZU1hbmFnZXIucmVsZWFzZVRleHR1cmUodGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZU5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IFRleHR1cmVNYW5hZ2VyLmdldFRleHR1cmUoXHJcbiAgICAgICAgdGhpcy5fZGlmZnVzZVRleHR1cmVOYW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIFRleHR1cmVNYW5hZ2VyLnJlbGVhc2VUZXh0dXJlKHRoaXMuX2RpZmZ1c2VUZXh0dXJlTmFtZSk7XHJcbiAgICB0aGlzLl9kaWZmdXNlVGV4dHVyZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJy4vdmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4NHg0IHtcclxuICBwcml2YXRlIF9kYXRhOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gSWRlbnRpdHkgbWF0cml4IChkZWZhdWx0IG1hdHJpeClcclxuICAgIHRoaXMuX2RhdGEgPSBbXHJcbiAgICAgIC8vIHJvdyAxXHJcbiAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAyXHJcbiAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgIC8vIHJvdyAzXHJcbiAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgIC8vIHJvdyA0XHJcbiAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkYXRhKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXRyaXg0eDQge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0eDQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9ydGhvZ3JhcGhpYyBtYXRyaXhcclxuICAgKiBObyBwZXJzcGVjdGl2ZSwgcmVuZGVycyBzb21ldGhpbmcgYXMgaWYgaXQgaXMgZmxhdCBpbiBzcGFjZVxyXG4gICAqIEBwYXJhbSBsZWZ0IHBvc2l0aW9uIGZyb20gbGVmdCBvZiBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMClcclxuICAgKiBAcGFyYW0gcmlnaHQgZGlzdGFuY2UgdG8gcmlnaHQgc2lkZSBvZiBzY3JlZW4gZnJvbSB0aGUgbGVmdCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxOTIwKVxyXG4gICAqIEBwYXJhbSBib3R0b20gcG9zaXRpb24gZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGFsbW9zdCBhbHdheXMgMCkgd2ViZ2wgc3RhcnRzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQHBhcmFtIHRvcCBwb3NpdGlvbiBmcm9tIGJvdHRvbSBvZiBzY3JlZW4gdG8gdGhlIHRvcCAoZS5nLiAxMDgwcCB3b3VsZCBiZSAxMDgwKVxyXG4gICAqIEBwYXJhbSBuZWFyQ2xpcCBzb21ldGhpbmcgbmVnYXRpdmUgKHRvIHByZXZlbnQgY2xpcHBpbmcgaW4gZnJvbnQpXHJcbiAgICogQHBhcmFtIGZhckNsaXAgYXJiaXRyYXJ5IG51bWJlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljKFxyXG4gICAgbGVmdDogbnVtYmVyLFxyXG4gICAgcmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgdG9wOiBudW1iZXIsXHJcbiAgICBuZWFyQ2xpcDogbnVtYmVyLFxyXG4gICAgZmFyQ2xpcDogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGNvbnN0IGxyOiBudW1iZXIgPSAxLjAgLyAobGVmdCAtIHJpZ2h0KTtcclxuICAgIGNvbnN0IGJ0OiBudW1iZXIgPSAxLjAgLyAoYm90dG9tIC0gdG9wKTtcclxuICAgIGNvbnN0IG5mOiBudW1iZXIgPSAxLjAgLyAobmVhckNsaXAgLSBmYXJDbGlwKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gLTIuMCAqIGxyO1xyXG4gICAgbS5fZGF0YVs1XSA9IC0yLjAgKiBidDtcclxuICAgIG0uX2RhdGFbMTBdID0gMi4wICogbmY7XHJcblxyXG4gICAgbS5fZGF0YVsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xyXG4gICAgbS5fZGF0YVsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xyXG4gICAgbS5fZGF0YVsxNF0gPSAoZmFyQ2xpcCArIG5lYXJDbGlwKSAqIG5mO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBtYXRyaXggdGhhdCBob2xkcyBkYXRhIHRoYXQgcmVwcmVzZW50cyBtb3ZlbWVudCBvZiBhbiBvYmplY3RcclxuICAgKiB0aHJvdWdoIHNwYWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24ocG9zaXRpb246IFZlY3RvcjMpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgLy8gZWRpdGluZyAxc3QgMyBudW1iZXJzIGluIGxhc3Qgcm93IG9mIG1hdHJpeDRcclxuICAgIG0uX2RhdGFbMTJdID0gcG9zaXRpb24ueDtcclxuICAgIG0uX2RhdGFbMTNdID0gcG9zaXRpb24ueTtcclxuICAgIG0uX2RhdGFbMTRdID0gcG9zaXRpb24uejtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSByb3RhdGlvbiBtYXRyaXggb24gdGhlIFggYXhpcyBmcm9tIHRoZSBwcm92aWRlZCBhbmdsZSBpbiByYWRpYW5zLlxyXG4gICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFucy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWChhbmdsZUluUmFkaWFuczogbnVtYmVyKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcbiAgICBtLl9kYXRhWzZdID0gcztcclxuICAgIG0uX2RhdGFbOV0gPSAtcztcclxuICAgIG0uX2RhdGFbMTBdID0gYztcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBNYXRyaXg0eDQge1xyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMl0gPSAtcztcclxuICAgIG0uX2RhdGFbOF0gPSBzO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBjO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByb3RhdGlvblooYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IE1hdHJpeDR4NCB7XHJcbiAgICAvLyByYWRpYW5zIGFyZSB1c2VkIGluIGFsbW9zdCBhbGwgbWF0aCBsaWJyYXJpZXMgYmVjYXVzZSBpdCBpcyBtb3JlIHBlcmZvcm1hbnRcclxuICAgIC8vIHVuZGVyIHRoZSBob29kXHJcblxyXG4gICAgbGV0IG0gPSBuZXcgTWF0cml4NHg0KCk7XHJcblxyXG4gICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYztcclxuICAgIG0uX2RhdGFbMV0gPSBzO1xyXG4gICAgbS5fZGF0YVs0XSA9IC1zO1xyXG4gICAgbS5fZGF0YVs1XSA9IGM7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uWFlaKFxyXG4gICAgeFJhZGlhbnM6IG51bWJlcixcclxuICAgIHlSYWRpYW5zOiBudW1iZXIsXHJcbiAgICB6UmFkaWFuczogbnVtYmVyXHJcbiAgKTogTWF0cml4NHg0IHtcclxuICAgIGNvbnN0IHJ4ID0gTWF0cml4NHg0LnJvdGF0aW9uWCh4UmFkaWFucyk7XHJcbiAgICBjb25zdCByeSA9IE1hdHJpeDR4NC5yb3RhdGlvblkoeVJhZGlhbnMpO1xyXG4gICAgY29uc3QgcnogPSBNYXRyaXg0eDQucm90YXRpb25aKHpSYWRpYW5zKTtcclxuXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseShyeiwgcnkpLCByeCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNjYWxlKHNjYWxlOiBWZWN0b3IzKTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIG0uX2RhdGFbMF0gPSBzY2FsZS54O1xyXG4gICAgbS5fZGF0YVs1XSA9IHNjYWxlLnk7XHJcbiAgICBtLl9kYXRhWzEwXSA9IHNjYWxlLno7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IE1hdHJpeDR4NCwgYjogTWF0cml4NHg0KTogTWF0cml4NHg0IHtcclxuICAgIGxldCBtID0gbmV3IE1hdHJpeDR4NCgpO1xyXG5cclxuICAgIGxldCBiMDAgPSBiLl9kYXRhWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgYjAxID0gYi5fZGF0YVswICogNCArIDFdO1xyXG4gICAgbGV0IGIwMiA9IGIuX2RhdGFbMCAqIDQgKyAyXTtcclxuICAgIGxldCBiMDMgPSBiLl9kYXRhWzAgKiA0ICsgM107XHJcbiAgICBsZXQgYjEwID0gYi5fZGF0YVsxICogNCArIDBdO1xyXG4gICAgbGV0IGIxMSA9IGIuX2RhdGFbMSAqIDQgKyAxXTtcclxuICAgIGxldCBiMTIgPSBiLl9kYXRhWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgYjEzID0gYi5fZGF0YVsxICogNCArIDNdO1xyXG4gICAgbGV0IGIyMCA9IGIuX2RhdGFbMiAqIDQgKyAwXTtcclxuICAgIGxldCBiMjEgPSBiLl9kYXRhWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgYjIyID0gYi5fZGF0YVsyICogNCArIDJdO1xyXG4gICAgbGV0IGIyMyA9IGIuX2RhdGFbMiAqIDQgKyAzXTtcclxuICAgIGxldCBiMzAgPSBiLl9kYXRhWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgYjMxID0gYi5fZGF0YVszICogNCArIDFdO1xyXG4gICAgbGV0IGIzMiA9IGIuX2RhdGFbMyAqIDQgKyAyXTtcclxuICAgIGxldCBiMzMgPSBiLl9kYXRhWzMgKiA0ICsgM107XHJcblxyXG4gICAgbGV0IGEwMCA9IGEuX2RhdGFbMCAqIDQgKyAwXTtcclxuICAgIGxldCBhMDEgPSBhLl9kYXRhWzAgKiA0ICsgMV07XHJcbiAgICBsZXQgYTAyID0gYS5fZGF0YVswICogNCArIDJdO1xyXG4gICAgbGV0IGEwMyA9IGEuX2RhdGFbMCAqIDQgKyAzXTtcclxuICAgIGxldCBhMTAgPSBhLl9kYXRhWzEgKiA0ICsgMF07XHJcbiAgICBsZXQgYTExID0gYS5fZGF0YVsxICogNCArIDFdO1xyXG4gICAgbGV0IGExMiA9IGEuX2RhdGFbMSAqIDQgKyAyXTtcclxuICAgIGxldCBhMTMgPSBhLl9kYXRhWzEgKiA0ICsgM107XHJcbiAgICBsZXQgYTIwID0gYS5fZGF0YVsyICogNCArIDBdO1xyXG4gICAgbGV0IGEyMSA9IGEuX2RhdGFbMiAqIDQgKyAxXTtcclxuICAgIGxldCBhMjIgPSBhLl9kYXRhWzIgKiA0ICsgMl07XHJcbiAgICBsZXQgYTIzID0gYS5fZGF0YVsyICogNCArIDNdO1xyXG4gICAgbGV0IGEzMCA9IGEuX2RhdGFbMyAqIDQgKyAwXTtcclxuICAgIGxldCBhMzEgPSBhLl9kYXRhWzMgKiA0ICsgMV07XHJcbiAgICBsZXQgYTMyID0gYS5fZGF0YVszICogNCArIDJdO1xyXG4gICAgbGV0IGEzMyA9IGEuX2RhdGFbMyAqIDQgKyAzXTtcclxuXHJcbiAgICBtLl9kYXRhWzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcclxuICAgIG0uX2RhdGFbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xyXG4gICAgbS5fZGF0YVs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcclxuICAgIG0uX2RhdGFbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xyXG4gICAgbS5fZGF0YVs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcclxuICAgIG0uX2RhdGFbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XHJcbiAgICBtLl9kYXRhWzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xyXG4gICAgbS5fZGF0YVsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XHJcbiAgICBtLl9kYXRhWzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcclxuICAgIG0uX2RhdGFbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xyXG4gICAgbS5fZGF0YVsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XHJcbiAgICBtLl9kYXRhWzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcclxuICAgIG0uX2RhdGFbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbShtOiBNYXRyaXg0eDQpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICB0aGlzLl9kYXRhW2ldID0gbS5fZGF0YVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi92ZWN0b3IzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuemVybztcclxuICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLnplcm87XHJcbiAgcHVibGljIHNjYWxlOiBWZWN0b3IzID0gVmVjdG9yMy5vbmU7XHJcblxyXG4gIHB1YmxpYyBjb3B5RnJvbSh0cmFuc2Zvcm06IFRyYW5zZm9ybSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgdGhpcy5yb3RhdGlvbi5jb3B5RnJvbSh0cmFuc2Zvcm0ucm90YXRpb24pO1xyXG4gICAgdGhpcy5zY2FsZS5jb3B5RnJvbSh0cmFuc2Zvcm0uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBNYXRyaXg0eDQudHJhbnNsYXRpb24odGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgbGV0IHJvdGF0aW9uID0gTWF0cml4NHg0LnJvdGF0aW9uWFlaKFxyXG4gICAgICB0aGlzLnJvdGF0aW9uLngsXHJcbiAgICAgIHRoaXMucm90YXRpb24ueSxcclxuICAgICAgdGhpcy5yb3RhdGlvbi56XHJcbiAgICApO1xyXG4gICAgbGV0IHNjYWxlID0gTWF0cml4NHg0LnNjYWxlKHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIC8vIG9yZGVyIG1hdHRlcnMgaGVyZVxyXG4gICAgLy8gVCAqIFIgKiBTXHJcbiAgICByZXR1cm4gTWF0cml4NHg0Lm11bHRpcGx5KE1hdHJpeDR4NC5tdWx0aXBseSh0cmFuc2xhdGlvbiwgcm90YXRpb24pLCBzY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RnJvbUpzb24oanNvbjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoanNvbi5wb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldEZyb21Kc29uKGpzb24ucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqc29uLnJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0RnJvbUpzb24oanNvbi5yb3RhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGpzb24uc2NhbGUpIHtcclxuICAgICAgdGhpcy5zY2FsZS5zZXRGcm9tSnNvbihqc29uLnNjYWxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJQmVoYXZpb3IgfSBmcm9tICcuLi9iZWhhdmlvcnMvSUJlaGF2aW9yJztcclxuaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgTWF0cml4NHg0IH0gZnJvbSAnLi4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL3RyYW5zZm9ybSc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltT2JqZWN0IHtcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBTaW1PYmplY3RbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BhcmVudDogU2ltT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2JlaGF2aW9yczogSUJlaGF2aW9yW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxNYXRyaXg6IE1hdHJpeDR4NCA9IE1hdHJpeDR4NC5pZGVudGl0eSgpO1xyXG4gIHByaXZhdGUgX3dvcmxkTWF0cml4OiBNYXRyaXg0eDQgPSBNYXRyaXg0eDQuaWRlbnRpdHkoKTtcclxuXHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybTogVHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzY2VuZT86IFNjZW5lKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudCB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdvcmxkTWF0cml4KCk6IE1hdHJpeDR4NCB7XHJcbiAgICByZXR1cm4gdGhpcy5fd29ybGRNYXRyaXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENoaWxkKGNoaWxkOiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgY2hpbGQub25BZGRlZCh0aGlzLl9zY2VuZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQ2hpbGQoY2hpbGQ6IFNpbU9iamVjdCk6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNoaWxkLl9wYXJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIC8vIGRvdWJsZSBjaGVjayB0aGlzIHdvcmtzXHJcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKChfLCBpZHgpID0+IGluZGV4ICE9PSBpZHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9iamVjdEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBTaW1PYmplY3QgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gY2hpbGQuZ2V0T2JqZWN0QnlOYW1lKG5hbWUpO1xyXG4gICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRCZWhhdmlvcihiZWhhdmlvcjogSUJlaGF2aW9yKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XHJcbiAgICBiZWhhdmlvci5zZXRPd25lcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC5sb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5sb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fbG9jYWxNYXRyaXggPSB0aGlzLnRyYW5zZm9ybS5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeChcclxuICAgICAgdGhpcy5fcGFyZW50ICE9PSB1bmRlZmluZWQgPyB0aGlzLl9wYXJlbnQud29ybGRNYXRyaXggOiB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgY29tcG9uZW50LnVwZGF0ZSh0aW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2JlaGF2aW9ycy5mb3JFYWNoKChiZWhhdmlvcikgPT4ge1xyXG4gICAgICBiZWhhdmlvci51cGRhdGUodGltZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQucmVuZGVyKHNoYWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC5yZW5kZXIoc2hhZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkFkZGVkKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXg6IE1hdHJpeDR4NCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBNYXRyaXg0eDQubXVsdGlwbHkoXHJcbiAgICAgICAgcGFyZW50V29ybGRNYXRyaXgsXHJcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4LmNvcHlGcm9tKHRoaXMuX2xvY2FsTWF0cml4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyIH0gZnJvbSAnLi4vZ2wvc2hhZGVyJztcclxuaW1wb3J0IHsgU2ltT2JqZWN0IH0gZnJvbSAnLi9zaW1PYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9yb290OiBTaW1PYmplY3Q7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBuZXcgU2ltT2JqZWN0KDAsICdfX1JPT1RfXycsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb290KCk6IFNpbU9iamVjdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5pc0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPYmplY3Qob2JqZWN0OiBTaW1PYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPYmplY3RCeU5hbWUobmFtZTogc3RyaW5nKTogU2ltT2JqZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290LmdldE9iamVjdEJ5TmFtZShuYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC5sb2FkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdC51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHNoYWRlcjogU2hhZGVyKSB7XHJcbiAgICB0aGlzLl9yb290LnJlbmRlcihzaGFkZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JNYW5hZ2VyIH0gZnJvbSAnLi4vYmVoYXZpb3JzL2JlaGF2aW9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNpbU9iamVjdCB9IGZyb20gJy4vc2ltT2JqZWN0JztcclxuXHJcbmV4cG9ydCBlbnVtIFpvbmVTdGF0ZSB7XHJcbiAgVU5JTklUSUFMSVpFRCxcclxuICBMT0FESU5HLFxyXG4gIFVQREFUSU5HLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZSB7XHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBfc3RhdGU6IFpvbmVTdGF0ZSA9IFpvbmVTdGF0ZS5VTklOSVRJQUxJWkVEO1xyXG4gIHByaXZhdGUgX2dsb2JhbElkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpOiBTY2VuZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh6b25lRGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoem9uZURhdGEub2JqZWN0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBpbml0aWFsaXphdGlvbiBlcnJvcjogb2JqZWN0cyBub3QgcHJlc2VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHpvbmVEYXRhLm9iamVjdHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvIGFzIFNpbU9iamVjdCwgdGhpcy5fc2NlbmUucm9vdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuTE9BRElORztcclxuXHJcbiAgICB0aGlzLl9zY2VuZS5sb2FkKCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5sb2FkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5fc3RhdGUgPSBab25lU3RhdGUuVVBEQVRJTkcpKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQWN0aXZhdGVkKCk6IHZvaWQge31cclxuXHJcbiAgcHVibGljIG9uRGVhY3RpdmF0ZWQoKTogdm9pZCB7fVxyXG5cclxuICBwcml2YXRlIGxvYWRTaW1PYmplY3QoZGF0YVNlY3Rpb246IGFueSwgcGFyZW50OiBTaW1PYmplY3QgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGxldCBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGlmIChkYXRhU2VjdGlvbi5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbmFtZSA9IFN0cmluZyhkYXRhU2VjdGlvbi5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9nbG9iYWxJZCsrO1xyXG4gICAgbGV0IHNpbU9iamVjdCA9IG5ldyBTaW1PYmplY3QodGhpcy5fZ2xvYmFsSWQsIG5hbWUsIHRoaXMuX3NjZW5lKTtcclxuXHJcbiAgICBpZiAoZGF0YVNlY3Rpb24udHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc2ltT2JqZWN0LnRyYW5zZm9ybS5zZXRGcm9tSnNvbihkYXRhU2VjdGlvbi50cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jb21wb25lbnRzKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNvbXBvbmVudHMuZm9yRWFjaCgoYzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50TWFuYWdlci5leHRyYWN0Q29tcG9uZW50KGMpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTZWN0aW9uLmJlaGF2aW9ycykge1xyXG4gICAgICBkYXRhU2VjdGlvbi5iZWhhdmlvcnMuZm9yRWFjaCgoYjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBCZWhhdmlvck1hbmFnZXIuZXh0cmFjdEJlaGF2aW9yKGIpO1xyXG4gICAgICAgIHNpbU9iamVjdC5hZGRCZWhhdmlvcihiZWhhdmlvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU2VjdGlvbi5jaGlsZHJlbiAmJiBkYXRhU2VjdGlvbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRhdGFTZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goKG86IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZFNpbU9iamVjdChvLCBzaW1PYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50LmFkZENoaWxkKHNpbU9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQXNzZXRNYW5hZ2VyLFxyXG4gIE1FU1NBR0VfQVNTRVRfTE9BREVSX0FTU0VUX0xPQURFRCxcclxufSBmcm9tICcuLi9hc3NldHMvYXNzZXRNYW5hZ2VyJztcclxuaW1wb3J0IHsgSnNvbkFzc2V0IH0gZnJvbSAnLi4vYXNzZXRzL2pzb25Bc3NldExvYWRlcic7XHJcbmltcG9ydCB7IFNoYWRlciB9IGZyb20gJy4uL2dsL3NoYWRlcic7XHJcbmltcG9ydCB7IElNZXNzYWdlSGFuZGxlciB9IGZyb20gJy4uL21lc3NhZ2UvSU1lc3NhZ2VIYW5kbGVyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tICcuL3pvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVNYW5hZ2VyIGltcGxlbWVudHMgSU1lc3NhZ2VIYW5kbGVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZ2xvYmFsWm9uZUlEOiBudW1iZXIgPSAtMTtcclxuICAvLyAgcHJpdmF0ZSBzdGF0aWMgX3pvbmVzOiB7IFtpZDogbnVtYmVyXTogWm9uZSB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZ2lzdGVyZWRab25lczogeyBbaWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2FjdGl2ZVpvbmU6IFpvbmUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFpvbmVNYW5hZ2VyO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgWm9uZU1hbmFnZXIuX2luc3QgPSBuZXcgWm9uZU1hbmFnZXIoKTtcclxuICAgIC8vIHRlbXBvcmFyeVxyXG4gICAgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1swXSA9ICdzcmMvYXNzZXRzL3pvbmVzL3Rlc3Rab25lLmpzb24nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGFuZ2Vab25lKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uRGVhY3RpdmF0ZWQoKTtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudW5sb2FkKCk7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChBc3NldE1hbmFnZXIuaXNBc3NldExvYWRlZChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSkpIHtcclxuICAgICAgICBjb25zdCBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICBab25lTWFuYWdlci5sb2FkWm9uZShhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1lc3NhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEICsgWm9uZU1hbmFnZXIuX3JlZ2lzdGVyZWRab25lc1tpZF0sXHJcbiAgICAgICAgICBab25lTWFuYWdlci5faW5zdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgQXNzZXRNYW5hZ2VyLmxvYWRBc3NldChab25lTWFuYWdlci5fcmVnaXN0ZXJlZFpvbmVzW2lkXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWm9uZSBpZDogJHtpZH0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgWm9uZU1hbmFnZXIuX2FjdGl2ZVpvbmUudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW5kZXIoc2hhZGVyOiBTaGFkZXIpOiB2b2lkIHtcclxuICAgIGlmIChab25lTWFuYWdlci5fYWN0aXZlWm9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLnJlbmRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICBpZiAobWVzc2FnZS5jb2RlLmluZGV4T2YoTUVTU0FHRV9BU1NFVF9MT0FERVJfQVNTRVRfTE9BREVEKSAhPT0gLTEpIHtcclxuICAgICAgbGV0IGFzc2V0ID0gbWVzc2FnZS5jb250ZXh0IGFzIEpzb25Bc3NldDtcclxuICAgICAgWm9uZU1hbmFnZXIubG9hZFpvbmUoYXNzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbG9hZFpvbmUoYXNzZXQ6IEpzb25Bc3NldCk6IHZvaWQge1xyXG4gICAgY29uc3Qgem9uZURhdGEgPSBhc3NldC5kYXRhO1xyXG4gICAgbGV0IHpvbmVJZDogbnVtYmVyO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIGlkIG5vdCBwcmVzZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgem9uZUlkID0gTnVtYmVyKHpvbmVEYXRhLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAodHlwZW9mIHpvbmVEYXRhID09PSAnb2JqZWN0JyAmJiB6b25lRGF0YSkge1xyXG4gICAgICBpZiAoIXpvbmVEYXRhLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgZmlsZSBmb3JtYXQgZXhjZXB0aW9uOiBab25lIG5hbWUgbm90IHByZXNlbnQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB6b25lTmFtZSA9IFN0cmluZyh6b25lRGF0YS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b25lRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiB6b25lRGF0YSA9PT0gJ29iamVjdCcgJiYgem9uZURhdGEpIHtcclxuICAgICAgaWYgKHpvbmVEYXRhLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgem9uZURlc2NyaXB0aW9uID0gU3RyaW5nKHpvbmVEYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lID0gbmV3IFpvbmUoem9uZUlkISwgem9uZU5hbWUsIHpvbmVEZXNjcmlwdGlvbik7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5pbml0aWFsaXplKHpvbmVEYXRhKTtcclxuICAgIFpvbmVNYW5hZ2VyLl9hY3RpdmVab25lLm9uQWN0aXZhdGVkKCk7XHJcbiAgICBab25lTWFuYWdlci5fYWN0aXZlWm9uZS5sb2FkKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudE1hbmFnZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvbmVudE1hbmFnZXInO1xyXG5pbXBvcnQgeyBTcHJpdGVDb21wb25lbnRCdWlsZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcHJpdGVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBc3NldE1hbmFnZXIgfSBmcm9tICcuL2Fzc2V0cy9hc3NldE1hbmFnZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvck1hbmFnZXIgfSBmcm9tICcuL2JlaGF2aW9ycy9iZWhhdmlvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBSb3RhdGlvbkJlaGF2aW9yQnVpbGRlciB9IGZyb20gJy4vYmVoYXZpb3JzL3JvdGF0aW9uQmVoYXZpb3InO1xyXG5pbXBvcnQgeyBnbCwgR0xVdGlsaXRpZXMgfSBmcm9tICcuL2dsL2dsJztcclxuaW1wb3J0IHsgQmFzaWNTaGFkZXIgfSBmcm9tICcuL2dsL3NoYWRlcnMvYmFzaWNTaGFkZXInO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vZ3JhcGhpY3MvY29sb3InO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gJy4vZ3JhcGhpY3MvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmFnZXIgfSBmcm9tICcuL2dyYXBoaWNzL21hdGVyaWFsTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hdHJpeDR4NCB9IGZyb20gJy4vbWF0aC9tYXRyaXg0eDQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2VCdXMnO1xyXG5pbXBvcnQgeyBab25lTWFuYWdlciB9IGZyb20gJy4vd29ybGQvem9uZU1hbmFnZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGdhbWUgZW5naW5lIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2Jhc2ljU2hhZGVyOiBCYXNpY1NoYWRlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9wcm9qZWN0aW9uOiBNYXRyaXg0eDQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHVwIHRoaXMgZW5naW5lXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gR0xVdGlsaXRpZXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgQXNzZXRNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuICAgIFpvbmVNYW5hZ2VyLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xyXG5cclxuICAgIGxldCBpbWFnZUNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXHJcbiAgICAgICcuLi9hc3NldHMvdGV4dHVyZXMvJyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2lcclxuICAgICk7XHJcbiAgICBsZXQganNvbkNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy96b25lcy8nLCB0cnVlLCAvXFwuKGpzb24pJC9pKTtcclxuXHJcbiAgICB0aGlzLmxvYWRBbGwoaW1hZ2VDb250ZXh0KTtcclxuICAgIHRoaXMubG9hZEFsbChqc29uQ29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5fYmFzaWNTaGFkZXIgPSBuZXcgQmFzaWNTaGFkZXIoKTtcclxuICAgIHRoaXMuX2Jhc2ljU2hhZGVyLnVzZSgpO1xyXG5cclxuICAgIC8vIExvYWQgbWF0ZXJpYWxzXHJcbiAgICBNYXRlcmlhbE1hbmFnZXIucmVnaXN0ZXJNYXRlcmlhbChcclxuICAgICAgbmV3IE1hdGVyaWFsKFxyXG4gICAgICAgICdzdG9uZVdhbGwnLFxyXG4gICAgICAgICdzcmMvYXNzZXRzL3RleHR1cmVzL3N0b25lX3dhbGxfMTI4eDEyOC5qcGcnLFxyXG4gICAgICAgIG5ldyBDb2xvcigxNTUsIDE1NSwgMjU1LCAyNTUpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgTWF0ZXJpYWxNYW5hZ2VyLnJlZ2lzdGVyTWF0ZXJpYWwoXHJcbiAgICAgIG5ldyBNYXRlcmlhbChcclxuICAgICAgICAnd29vZFBsYW5rJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cy90ZXh0dXJlcy93b29kX3BsYW5rXzEyOHgxMjguanBnJyxcclxuICAgICAgICBuZXcgQ29sb3IoMTU1LCAxNTUsIDI1NSwgMjU1KVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgcGxhY2UgZm9yIHRoaXM/XHJcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQnVpbGRlcihuZXcgU3ByaXRlQ29tcG9uZW50QnVpbGRlcigpKTtcclxuICAgIEJlaGF2aW9yTWFuYWdlci5yZWdpc3RlckJ1aWxkZXIobmV3IFJvdGF0aW9uQmVoYXZpb3JCdWlsZGVyKCkpO1xyXG5cclxuICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIGJlIHJlYWQgZnJvbSBnYW1lIGNvbmZpZ1xyXG4gICAgWm9uZU1hbmFnZXIuY2hhbmdlWm9uZSgwKTtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgdGhpcy5sb29wKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBjYW52YXMgdG8gZml0IHRoZSB3aW5kb3cuXHJcbiAgICovXHJcbiAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLl9jYW52YXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX3Byb2plY3Rpb24gPSBNYXRyaXg0eDQub3J0aG9ncmFwaGljKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAtMTAwLjAsXHJcbiAgICAgICAgMTAwLjBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvb3AoKTogdm9pZCB7XHJcbiAgICBNZXNzYWdlQnVzLnVwZGF0ZSgwKTtcclxuXHJcbiAgICBab25lTWFuYWdlci51cGRhdGUoMCk7XHJcblxyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Jhc2ljU2hhZGVyKSB7XHJcbiAgICAgIFpvbmVNYW5hZ2VyLnJlbmRlcih0aGlzLl9iYXNpY1NoYWRlcik7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdW5pZm9ybXNcclxuICAgIGlmICh0aGlzLl9iYXNpY1NoYWRlciAmJiB0aGlzLl9wcm9qZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3Rpb25Qb3NpdGlvbiA9XHJcbiAgICAgICAgdGhpcy5fYmFzaWNTaGFkZXIuZ2V0VW5pZm9ybUxvY2F0aW9uKCd1X3Byb2plY3Rpb24nKTtcclxuXHJcbiAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgICAgcHJvamVjdGlvblBvc2l0aW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fcHJvamVjdGlvbi5kYXRhKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEFsbChyZXF1aXJlQ29udGV4dDogX19XZWJwYWNrTW9kdWxlQXBpLlJlcXVpcmVDb250ZXh0KSB7XHJcbiAgICByZXF1aXJlQ29udGV4dC5rZXlzKCkuZm9yRWFjaChyZXF1aXJlQ29udGV4dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcclxuXHJcbnZhciBlbmdpbmU6IEVuZ2luZTtcclxuLy8gVGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xyXG4gIGVuZ2luZS5zdGFydCgpO1xyXG59O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGVuZ2luZS5yZXNpemUoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9