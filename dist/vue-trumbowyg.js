(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("trumbowyg/dist/ui/icons.svg"), require("trumbowyg"));
	else if(typeof define === 'function' && define.amd)
		define("VueTrumbowyg", ["jquery", "trumbowyg/dist/ui/icons.svg", "trumbowyg"], factory);
	else if(typeof exports === 'object')
		exports["VueTrumbowyg"] = factory(require("jquery"), require("trumbowyg/dist/ui/icons.svg"), require("trumbowyg"));
	else
		root["VueTrumbowyg"] = factory(root["jQuery"], root["trumbowyg/dist/ui/icons.svg"], root["trumbowyg"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "trumbowygPlugin", function() { return /* binding */ src_trumbowygPlugin; });
__webpack_require__.d(__webpack_exports__, "component", function() { return /* reexport */ component; });

// EXTERNAL MODULE: external {"commonjs":"jquery","commonjs2":"jquery","amd":"jquery","root":"jQuery"}
var external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_ = __webpack_require__(0);
var external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_);

// EXTERNAL MODULE: external "trumbowyg"
var external_trumbowyg_ = __webpack_require__(2);

// EXTERNAL MODULE: external "trumbowyg/dist/ui/icons.svg"
var icons_svg_ = __webpack_require__(1);
var icons_svg_default = /*#__PURE__*/__webpack_require__.n(icons_svg_);

// CONCATENATED MODULE: ./src/events.js
/* harmony default export */ var events = (['init', 'focus', 'blur', 'change', 'resize', 'paste', 'openfullscreen', 'closefullscreen', 'close', 'modalopen', 'modalclose']);
// CONCATENATED MODULE: ./src/component.js
// Need full jQuery build

 // You have to import css yourself
// You have to configure webpack to load svg files

 // https://alex-d.github.io/Trumbowyg/documentation/#events


var eventPrefix = 'tbw';
/* harmony default export */ var component = ({
  name: 'trumbowyg',
  render: function render(el) {
    return el('textarea');
  },
  props: {
    value: {
      "default": null,
      required: true,
      validator: function validator(value) {
        return value === null || typeof value === 'string' || value instanceof String;
      }
    },
    // http://alex-d.github.io/Trumbowyg/documentation.html#basic-options
    config: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    // https://alex-d.github.io/Trumbowyg/documentation/#svg-icons
    svgPath: {
      type: [String, Boolean],
      "default": icons_svg_default.a
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      /**
       * @var jQuery DOM
       */
      el: null
    };
  },
  mounted: function mounted() {
    // Return early if instance is already loaded
    if (this.el) return; // Store DOM

    this.el = external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_default()(this.$el); // Init editor with config

    this.el.trumbowyg(external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_default.a.extend(true, {}, {
      svgPath: this.svgPath
    }, this.config)); // Set initial value

    this.el.trumbowyg('html', this.value); // Watch for further changes

    this.el.on("".concat(eventPrefix, "change"), this.onChange); // Blur event for validation libraries

    this.el.on("".concat(eventPrefix, "blur"), this.onBlur); // Initial value for disabled prop

    this.toggleDisabled(this.disabled); // Register events

    this.registerEvents();
  },
  watch: {
    /**
     * Listen to change from parent component and update DOM
     *
     * @param newValue String
     */
    value: function value(newValue) {
      if (!this.el) return; // Prevent multiple input events

      if (newValue === this.el.trumbowyg('html')) return; // Set new value

      this.el.trumbowyg('html', newValue);
    },
    disabled: function disabled(newValue) {
      this.toggleDisabled(newValue);
    }
  },
  methods: {
    /**
     * Emit input event with current editor value
     * This will update v-model on parent component
     * This method gets called when value gets changed by editor itself
     *
     * @param event
     */
    onChange: function onChange(event) {
      this.$emit('input', event.target.value);
    },

    /**
     * This event is different from tbw-blur event
     *
     * @param event
     */
    onBlur: function onBlur(event) {
      this.$emit('blur', event.target.value);
    },

    /**
     * Emit all available events
     */
    registerEvents: function registerEvents() {
      var _this = this;

      events.forEach(function (name) {
        _this.el.on("".concat(eventPrefix).concat(name), function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, ["".concat(eventPrefix, "-").concat(name)].concat(args));
        });
      });
    },
    toggleDisabled: function toggleDisabled(value) {
      var method = value ? 'disable' : 'enable';
      this.el.trumbowyg(method);
    }
  },

  /**
   * Release memory
   */
  beforeDestroy: function beforeDestroy() {
    if (!this.el) return;
    this.el.trumbowyg('destroy');
    this.el = null;
  }
});
// CONCATENATED MODULE: ./src/index.js


var src_trumbowygPlugin = function trumbowygPlugin(Vue, params) {
  var name = 'trumbowyg';
  if (typeof params === 'string') name = params;
  Vue.component(name, component);
};

component.install = src_trumbowygPlugin;
/* harmony default export */ var src = __webpack_exports__["default"] = (component);


/***/ })
/******/ ]);
});