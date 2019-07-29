module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0ac3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"87de69ce-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal-layout.vue?vue&type=template&id=c909d5ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ModalLayout",class:{hasHeader: _vm.hasHeader, hasFooter: _vm.hasFooter, isScrollable: _vm.isScrollable, isPlain: _vm.isPlain},style:(_vm.computedStyle)},[(!_vm.hideCloser)?_c('div',{staticClass:"ModalLayout__close",on:{"click":function($event){return _vm.close()}}}):_vm._e(),(_vm.hasHeader)?_c('div',{staticClass:"ModalLayout__header"},[_vm._t("header",[_c('div',{staticClass:"ModalLayout__title"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")])])],2):_vm._e(),_c('div',{staticClass:"ModalLayout__body"},[_vm._t("default")],2),(_vm.hasFooter)?_c('div',{staticClass:"ModalLayout__footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal-layout.vue?vue&type=template&id=c909d5ea&

// EXTERNAL MODULE: ./src/last-modal.js
var last_modal = __webpack_require__("acf7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal-layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modal_layoutvue_type_script_lang_js_ = ({
  name: "modal-layout",
  props: {
    title: String,
    hideCloser: Boolean,
    scroll: Boolean,
    plain: Boolean,
    width: {
      type: [Number, String],
      default: 600
    }
  },
  computed: {
    isScrollable: function isScrollable() {
      return this.scroll;
    },
    isPlain: function isPlain() {
      return this.plain;
    },
    hasHeader: function hasHeader() {
      return this.$slots.header || this.title;
    },
    hasFooter: function hasFooter() {
      return this.$slots.footer;
    },
    computedStyle: function computedStyle() {
      var maxWidth = this.width + (Number(this.width) ? "px" : "");

      if (maxWidth && maxWidth !== "auto") {
        return {
          width: "100%",
          maxWidth: maxWidth
        };
      }
    }
  },
  methods: {
    close: function close() {
      last_modal["a" /* default */].bus.$emit("closeTop");
    }
  }
});
// CONCATENATED MODULE: ./src/components/modal-layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modal_layoutvue_type_script_lang_js_ = (modal_layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/modal-layout.vue?vue&type=style&index=0&lang=postcss&
var modal_layoutvue_type_style_index_0_lang_postcss_ = __webpack_require__("a956");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/modal-layout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_modal_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modal_layout = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "1574":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"87de69ce-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal-stack.vue?vue&type=template&id=0af9d8f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ModalStack"},[_c('transition',{attrs:{"name":_vm.backdropTransitionName}},[(_vm.modals.length)?_c('div',{staticClass:"ModalStack__backdrop"}):_vm._e()]),_c('transition-group',{attrs:{"name":_vm.modalTransitionName}},_vm._l((_vm.modals),function(modal){return _c('div',{key:modal.id,staticClass:"ModalStack__modalWrapper",on:{"click":function($event){return _vm.closeByBackdropClick($event, modal)}}},[_c(modal.component,_vm._b({ref:("modal_" + (modal.id)),refInFor:true,tag:"component",staticClass:"ModalStack__modal",class:{isTop: _vm.topModal.id === modal.id},on:{"close":function($event){return _vm.close(modal, $event)}}},'component',modal.props,false))],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal-stack.vue?vue&type=template&id=0af9d8f0&

// EXTERNAL MODULE: ./src/last-modal.js
var last_modal = __webpack_require__("acf7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal-stack.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modal_stackvue_type_script_lang_js_ = ({
  name: "modal-stack",
  props: {
    config: {
      type: Object
    }
  },
  data: function data() {
    return {
      sequence: 1,
      modals: []
    };
  },
  computed: {
    topModal: function topModal() {
      return this.modals.length ? this.modals[this.modals.length - 1] : null;
    },
    modalTransitionName: function modalTransitionName() {
      return (this.topModal ? this.topModal.transition : null) || this.config.modalTransitionName;
    },
    backdropTransitionName: function backdropTransitionName() {
      return (this.topModal ? this.topModal.backdropTransition : null) || this.config.backdropTransitionName;
    }
  },
  methods: {
    open: function open(modal) {
      document.activeElement && document.activeElement.blur();
      this.modals.push(_objectSpread({}, modal, {
        id: this.sequence++
      }));
    },
    close: function close(modal) {
      var _this = this;

      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (!this.modals.find(function (_ref) {
        var id = _ref.id;
        return id === modal.id;
      })) {
        return;
      }

      var closingRoutine = function closingRoutine() {
        _this.modals = _this.modals.filter(function (_ref2) {
          var id = _ref2.id;
          return id !== modal.id;
        });
        modal && modal.resolve(result);
      };

      var modalInstance = this._getModalInstance(modal);

      if (modalInstance && 'before-close' in modalInstance.$listeners) {
        modalInstance.$emit('before-close', closingRoutine);
      } else {
        closingRoutine();
      }
    },
    closeTop: function closeTop() {
      this.close(this.topModal);
    },
    closeByEscKey: function closeByEscKey(e) {
      if (this.topModal && e.key === "Escape" && !e.defaultPrevented) {
        e.preventDefault();
        this.closeTop();
      }
    },
    closeByBackdropClick: function closeByBackdropClick(e, modal) {
      if (e.target === e.currentTarget) {
        this.close(modal);
      }
    },
    _getModalInstance: function _getModalInstance(modal) {
      return this.$refs["modal_".concat(modal.id)][0].$children[0];
    }
  },
  mounted: function mounted() {
    document.body.appendChild(this.$el);
    document.addEventListener("keydown", this.closeByEscKey);
    last_modal["a" /* default */].bus.$on("open", this.open);
    last_modal["a" /* default */].bus.$on("close", this.close);
    last_modal["a" /* default */].bus.$on("closeTop", this.closeTop);
  },
  destroyed: function destroyed() {
    document.body.removeChild(this.$el);
    document.removeEventListener("keydown", this.closeByEscKey);
    last_modal["a" /* default */].bus.$off("open", this.open);
    last_modal["a" /* default */].bus.$off("close", this.close);
    last_modal["a" /* default */].bus.$off("closeTop", this.closeTop);
  }
});
// CONCATENATED MODULE: ./src/components/modal-stack.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modal_stackvue_type_script_lang_js_ = (modal_stackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/modal-stack.vue?vue&type=style&index=0&lang=postcss&
var modal_stackvue_type_style_index_0_lang_postcss_ = __webpack_require__("5bff");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/modal-stack.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_modal_stackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modal_stack = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "24a4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".ModalLayout{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:auto;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.1);box-shadow:0 2px 10px rgba(0,0,0,.1)}.ModalLayout.isScrollable{min-height:auto;max-height:calc(100vh - 3rem)}.ModalLayout__header{padding:1.25rem 4rem 1.25rem 1.5rem}.ModalLayout__header .ModalLayout.isPlain{padding:0}.ModalLayout__title{font-size:larger}.ModalLayout__close{position:absolute;z-index:1;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:4rem;height:4.3rem;font-size:1.85rem;opacity:.4}.ModalLayout__close:before{content:\"\\D7\";-webkit-transform:translateY(-.15rem);transform:translateY(-.15rem)}.ModalLayout__close:hover{opacity:1;cursor:pointer}.ModalLayout__body{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;padding:1.5rem;border-radius:4px}.ModalLayout.hasHeader .ModalLayout__body{padding-top:0;border-top-right-radius:0;border-top-left-radius:0}.ModalLayout.hasFooter .ModalLayout__body{padding-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.ModalLayout.isScrollable .ModalLayout__body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto;padding:1.5rem}.ModalLayout.isScrollable.hasHeader .ModalLayout__body{border-top:1px solid rgba(0,0,0,.1)}.ModalLayout.isScrollable.hasFooter .ModalLayout__body{border-bottom:1px solid rgba(0,0,0,.1)}.ModalLayout.isPlain .ModalLayout__body{padding:0}.ModalLayout__footer{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:1.25rem 1.5rem}.ModalLayout.isPlain .ModalLayout__footer{padding:0}", ""]);

// exports


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "37be":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".ModalStack{position:fixed;z-index:1050}.ModalStack__backdrop{background:rgba(0,0,0,.35);position:fixed;z-index:1;top:0;left:0;width:100%;height:100%}.ModalStack__modalWrapper{position:fixed;z-index:2;top:0;left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;padding:1.5rem}.ModalStack__modalScroller,.ModalStack__modalWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;height:100vh;overflow:auto}.ModalStack__modalScroller{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.ModalStack__modal{-webkit-transition:-webkit-filter .15s;transition:-webkit-filter .15s;transition:filter .15s;transition:filter .15s,-webkit-filter .15s}.ModalStack__modal:not(.isTop){-webkit-filter:brightness(80%);filter:brightness(80%)}.ModalStack__modal-enter-active,.ModalStack__modal-leave-active{-webkit-transition:opacity .25s;transition:opacity .25s;pointer-events:none}.ModalStack__modal-enter,.ModalStack__modal-leave-to{opacity:0;pointer-events:none}.ModalStack__backdrop-enter-active,.ModalStack__backdrop-leave-active{-webkit-transition:opacity .25s;transition:opacity .25s;pointer-events:none}.ModalStack__backdrop-enter,.ModalStack__backdrop-leave-to{opacity:0;pointer-events:none}", ""]);

// exports


/***/ }),

/***/ "4170":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("24a4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5288e582", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5411":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ccd2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5bff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_stack_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be9f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_stack_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_stack_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_stack_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7011":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".ModalLayoutDialog__buttons{text-align:right;margin-top:1rem}.ModalLayoutDialog__buttonWrapper+.ModalLayoutDialog__buttonWrapper{margin-left:.5rem}", ""]);

// exports


/***/ }),

/***/ "9565":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"87de69ce-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dialog.vue?vue&type=template&id=9bc8d134&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal-layout',{staticClass:"ModalLayoutDialog",attrs:{"width":"480","title":_vm.title,"closer":""}},[_vm._v("\n  "+_vm._s(_vm.message)+"\n\n  "),(_vm.buttons && _vm.buttons.length)?_c('template',{slot:"footer"},[_c('div',{staticClass:"ModalLayoutDialog__buttons"},_vm._l((_vm.buttons),function(button,$index){return _c('span',{key:$index,staticClass:"ModalLayoutDialog__buttonWrapper"},[_c('button',{class:button.className,attrs:{"type":"button"},on:{"click":function($event){return _vm.$emit('close', button.value)}}},[_vm._v("\n          "+_vm._s(button.label)+"\n        ")])])}),0)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dialog.vue?vue&type=template&id=9bc8d134&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  props: {
    title: String,
    message: String,
    buttons: Array
  },
  mounted: function mounted() {
    var buttons = this.$el.querySelectorAll('button');

    if (buttons.length) {
      buttons[buttons.length - 1].focus();
    }
  }
});
// CONCATENATED MODULE: ./src/components/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/dialog.vue?vue&type=style&index=0&lang=postcss&
var dialogvue_type_style_index_0_lang_postcss_ = __webpack_require__("5411");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/dialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialog = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a956":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_layout_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4170");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_layout_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_layout_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_layout_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "acf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_dialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9565");
/* harmony import */ var _components_modal_layout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0ac3");
/* harmony import */ var _components_modal_stack_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1574");



var defaultConfig = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  buttonClassName: 'btn btn-secondary',
  primaryButtonClassName: 'btn btn-primary',
  backdropTransitionName: 'ModalStack__backdrop',
  modalTransitionName: 'ModalStack__modal'
};
var LastModal = {
  install: function install(Vue) {
    var _this = this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    config = Object.assign({}, defaultConfig, config);
    this.installed = true;
    this.bus = new Vue();
    Vue.component(_components_modal_layout_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].name, _components_modal_layout_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

    var initModalStackContainer = function initModalStackContainer(parent) {
      if (!_this.container) {
        _this.container = document.createElement('div');
        document.body.appendChild(_this.container);
        new Vue({
          parent: parent,
          render: function render(h) {
            return h(_components_modal_stack_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
              props: {
                config: config
              }
            });
          }
        }).$mount(_this.container);
      }

      return _this.container;
    };

    Vue.prototype.$modal = function (component) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      initModalStackContainer(this.$root);
      return new Promise(function (resolve) {
        LastModal.bus.$emit("open", {
          component: component,
          props: props,
          resolve: resolve,
          inline: inline
        });
      });
    };

    Vue.prototype.$dialog = function (_ref) {
      var title = _ref.title,
          message = _ref.message,
          buttons = _ref.buttons;
      return this.$modal(_components_dialog_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        title: title,
        message: message,
        buttons: buttons
      });
    };

    Vue.prototype.$alert = function (options) {
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }

      return this.$dialog({
        title: options.title,
        message: options.message,
        buttons: [{
          className: config.buttonClassName,
          label: options.confirmLabel || config.confirmLabel
        }]
      });
    };

    Vue.prototype.$confirm = function (options) {
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }

      return this.$dialog({
        title: options.title,
        message: options.message,
        buttons: [{
          className: config.buttonClassName,
          label: options.cancelLabel || config.cancelLabel,
          value: false
        }, {
          className: config.primaryButtonClassName,
          label: options.confirmLabel || config.confirmLabel,
          value: true
        }]
      });
    };
  }
}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(LastModal);
}

/* harmony default export */ __webpack_exports__["a"] = (LastModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "be9f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("37be");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0fb8df7a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ccd2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7011");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b14d6a7c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/last-modal.js
var last_modal = __webpack_require__("acf7");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (last_modal["a" /* default */]);



/***/ })

/******/ });