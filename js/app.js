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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

/* harmony default export */ __webpack_exports__["default"] = (Glide$1);


/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child element.`);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function saferEval(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return expression.call(dataContext);
    }

    return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
    }

    let AsyncFunction = Function;
    /* MODERN-ONLY:START */

    AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    /* MODERN-ONLY:END */
    // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

    if (Object.keys(dataContext).includes(expression)) {
      let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

      if (typeof methodReference === 'function') {
        return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
      } else {
        return Promise.resolve();
      }
    }

    return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  function transitionIn(el, show, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type);
  }
  function transitionClassesIn(el, component, directives, showCallback) {
    let ensureStringExpression = expression => {
      return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
    };

    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN);
  }
  function transitionClassesOut(el, component, directives, hideCallback) {
    const leave = convertClassStringToArray((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression);
    const leaveStart = convertClassStringToArray((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression);
    const leaveEnd = convertClassStringToArray((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression);
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type);
  }
  function transition(el, stages, type) {
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      callback: once(() => {
        stages.hide(); // Adding an "isConnected" check, in case the callback
        // removed the element from the DOM.

        if (el.isConnected) {
          stages.cleanup();
        }

        delete el.__x_transition;
      }),
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.callback, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    } // This adds support for the `i in n` syntax.


    if (isNumeric(iteratorNames.items)) {
      return Array.from(Array(parseInt(iteratorNames.items, 10)).keys(), i => i + 1);
    }

    return component.evaluateReturnExpression(el, iteratorNames.items, extraVars);
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && expression.match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = el.value == value;
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value === 'string' && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => val == el.value);
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = convertClassStringToArray(value);
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = resolve => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish());
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler, options);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler, options);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(i => i !== newValue);
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      }; // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.getUnobservedData());
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.getUnobservedData());
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(thing => {
        return new Promise(resolve => {
          thing(finish => {
            resolve(finish);
          });
        });
      }).reduce((nestedPromise, promise) => {
        return nestedPromise.then(() => {
          return promise.then(finish => finish());
        });
      }, Promise.resolve(() => {})); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const rawData = saferEval(mutations[i].target.getAttribute('x-data') || '{}', {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.7.0",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime(el => {
        this.initializeComponent(el);
      });
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/dynamics.js/lib/dynamics.js":
/*!**************************************************!*\
  !*** ./node_modules/dynamics.js/lib/dynamics.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.7.1
(function() {
  var Color, DecomposedMatrix, DecomposedMatrix2D, InterpolableArray, InterpolableColor, InterpolableNumber, InterpolableObject, InterpolableString, Matrix, Matrix2D, Set, Vector, addTimeout, addUnitsToNumberInterpolables, animationTick, animations, animationsTimeouts, applyDefaults, applyFrame, applyProperties, baseSVG, cacheFn, cancelTimeout, clone, createInterpolable, defaultValueForKey, degProperties, dynamics, getCurrentProperties, interpolate, isDocumentVisible, isSVGElement, lastTime, leftDelayForTimeout, makeArrayFn, observeVisibilityChange, parseProperties, prefixFor, propertyWithPrefix, pxProperties, rAF, roundf, runLoopPaused, runLoopRunning, runLoopTick, setRealTimeout, slow, slowRatio, startAnimation, startRunLoop, svgProperties, timeBeforeVisibilityChange, timeoutLastId, timeouts, toDashed, transformProperties, transformValueForProperty, unitForProperty,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  isDocumentVisible = function() {
    return document.visibilityState === "visible" || (dynamics.tests != null);
  };

  observeVisibilityChange = (function() {
    var fns;
    fns = [];
    if (typeof document !== "undefined" && document !== null) {
      document.addEventListener("visibilitychange", function() {
        var fn, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = fns.length; _i < _len; _i++) {
          fn = fns[_i];
          _results.push(fn(isDocumentVisible()));
        }
        return _results;
      });
    }
    return function(fn) {
      return fns.push(fn);
    };
  })();

  clone = function(o) {
    var k, newO, v;
    newO = {};
    for (k in o) {
      v = o[k];
      newO[k] = v;
    }
    return newO;
  };

  cacheFn = function(func) {
    var data;
    data = {};
    return function() {
      var k, key, result, _i, _len;
      key = "";
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        k = arguments[_i];
        key += k.toString() + ",";
      }
      result = data[key];
      if (!result) {
        data[key] = result = func.apply(this, arguments);
      }
      return result;
    };
  };

  makeArrayFn = function(fn) {
    return function(el) {
      var args, i, res;
      if (el instanceof Array || el instanceof NodeList || el instanceof HTMLCollection) {
        res = (function() {
          var _i, _ref, _results;
          _results = [];
          for (i = _i = 0, _ref = el.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            args = Array.prototype.slice.call(arguments, 1);
            args.splice(0, 0, el[i]);
            _results.push(fn.apply(this, args));
          }
          return _results;
        }).apply(this, arguments);
        return res;
      }
      return fn.apply(this, arguments);
    };
  };

  applyDefaults = function(options, defaults) {
    var k, v, _results;
    _results = [];
    for (k in defaults) {
      v = defaults[k];
      _results.push(options[k] != null ? options[k] : options[k] = v);
    }
    return _results;
  };

  applyFrame = function(el, properties) {
    var k, v, _results;
    if ((el.style != null)) {
      return applyProperties(el, properties);
    } else {
      _results = [];
      for (k in properties) {
        v = properties[k];
        _results.push(el[k] = v.format());
      }
      return _results;
    }
  };

  applyProperties = function(el, properties) {
    var isSVG, k, matrix, transforms, v;
    properties = parseProperties(properties);
    transforms = [];
    isSVG = isSVGElement(el);
    for (k in properties) {
      v = properties[k];
      if (transformProperties.contains(k)) {
        transforms.push([k, v]);
      } else {
        if (v.format != null) {
          v = v.format();
        }
        if (typeof v === 'number') {
          v = "" + v + (unitForProperty(k, v));
        }
        if ((el.hasAttribute != null) && el.hasAttribute(k)) {
          el.setAttribute(k, v);
        } else if (el.style != null) {
          el.style[propertyWithPrefix(k)] = v;
        }
        if (k in el) {
          el[k] = v;
        }
      }
    }
    if (transforms.length > 0) {
      if (isSVG) {
        matrix = new Matrix2D();
        matrix.applyProperties(transforms);
        return el.setAttribute("transform", matrix.decompose().format());
      } else {
        v = (transforms.map(function(transform) {
          return transformValueForProperty(transform[0], transform[1]);
        })).join(" ");
        return el.style[propertyWithPrefix("transform")] = v;
      }
    }
  };

  isSVGElement = function(el) {
    var _ref, _ref1;
    if ((typeof SVGElement !== "undefined" && SVGElement !== null) && (typeof SVGSVGElement !== "undefined" && SVGSVGElement !== null)) {
      return el instanceof SVGElement && !(el instanceof SVGSVGElement);
    } else {
      return (_ref = (_ref1 = dynamics.tests) != null ? typeof _ref1.isSVG === "function" ? _ref1.isSVG(el) : void 0 : void 0) != null ? _ref : false;
    }
  };

  roundf = function(v, decimal) {
    var d;
    d = Math.pow(10, decimal);
    return Math.round(v * d) / d;
  };

  Set = (function() {
    function Set(array) {
      var v, _i, _len;
      this.obj = {};
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        v = array[_i];
        this.obj[v] = 1;
      }
    }

    Set.prototype.contains = function(v) {
      return this.obj[v] === 1;
    };

    return Set;

  })();

  toDashed = function(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return "-" + $1.toLowerCase();
    });
  };

  pxProperties = new Set('marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius'.split(','));

  degProperties = new Set('rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ'.split(','));

  transformProperties = new Set('translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective'.split(','));

  svgProperties = new Set('accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z'.split(','));

  unitForProperty = function(k, v) {
    if (typeof v !== 'number') {
      return '';
    }
    if (pxProperties.contains(k)) {
      return 'px';
    } else if (degProperties.contains(k)) {
      return 'deg';
    }
    return '';
  };

  transformValueForProperty = function(k, v) {
    var match, unit;
    match = ("" + v).match(/^([0-9.-]*)([^0-9]*)$/);
    if (match != null) {
      v = match[1];
      unit = match[2];
    } else {
      v = parseFloat(v);
    }
    v = roundf(parseFloat(v), 10);
    if ((unit == null) || unit === "") {
      unit = unitForProperty(k, v);
    }
    return "" + k + "(" + v + unit + ")";
  };

  parseProperties = function(properties) {
    var axis, match, parsed, property, value, _i, _len, _ref;
    parsed = {};
    for (property in properties) {
      value = properties[property];
      if (transformProperties.contains(property)) {
        match = property.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/);
        if (match && match[2].length > 0) {
          parsed[property] = value;
        } else {
          _ref = ['X', 'Y', 'Z'];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            axis = _ref[_i];
            parsed[match[1] + axis] = value;
          }
        }
      } else {
        parsed[property] = value;
      }
    }
    return parsed;
  };

  defaultValueForKey = function(key) {
    var v;
    v = key === 'opacity' ? 1 : 0;
    return "" + v + (unitForProperty(key, v));
  };

  getCurrentProperties = function(el, keys) {
    var isSVG, key, matrix, properties, style, v, _i, _j, _len, _len1, _ref;
    properties = {};
    isSVG = isSVGElement(el);
    if (el.style != null) {
      style = window.getComputedStyle(el, null);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (transformProperties.contains(key)) {
          if (properties['transform'] == null) {
            if (isSVG) {
              matrix = new Matrix2D((_ref = el.transform.baseVal.consolidate()) != null ? _ref.matrix : void 0);
            } else {
              matrix = Matrix.fromTransform(style[propertyWithPrefix('transform')]);
            }
            properties['transform'] = matrix.decompose();
          }
        } else {
          if ((el.hasAttribute != null) && el.hasAttribute(key)) {
            v = el.getAttribute(key);
          } else if (key in el) {
            v = el[key];
          } else {
            v = style[key];
          }
          if (((v == null) || key === 'd') && svgProperties.contains(key)) {
            v = el.getAttribute(key);
          }
          if (v === "" || (v == null)) {
            v = defaultValueForKey(key);
          }
          properties[key] = createInterpolable(v);
        }
      }
    } else {
      for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
        key = keys[_j];
        properties[key] = createInterpolable(el[key]);
      }
    }
    addUnitsToNumberInterpolables(el, properties);
    return properties;
  };

  addUnitsToNumberInterpolables = function(el, properties) {
    var interpolable, k;
    for (k in properties) {
      interpolable = properties[k];
      if (interpolable instanceof InterpolableNumber && (el.style != null) && k in el.style) {
        interpolable = new InterpolableString([interpolable, unitForProperty(k, 0)]);
      }
      properties[k] = interpolable;
    }
    return properties;
  };

  createInterpolable = function(value) {
    var interpolable, klass, klasses, _i, _len;
    klasses = [InterpolableArray, InterpolableObject, InterpolableNumber, InterpolableString];
    for (_i = 0, _len = klasses.length; _i < _len; _i++) {
      klass = klasses[_i];
      interpolable = klass.create(value);
      if (interpolable != null) {
        return interpolable;
      }
    }
    return null;
  };

  InterpolableString = (function() {
    function InterpolableString(parts) {
      this.parts = parts;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableString.prototype.interpolate = function(endInterpolable, t) {
      var end, i, newParts, start, _i, _ref;
      start = this.parts;
      end = endInterpolable.parts;
      newParts = [];
      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (start[i].interpolate != null) {
          newParts.push(start[i].interpolate(end[i], t));
        } else {
          newParts.push(start[i]);
        }
      }
      return new InterpolableString(newParts);
    };

    InterpolableString.prototype.format = function() {
      var parts;
      parts = this.parts.map(function(val) {
        if (val.format != null) {
          return val.format();
        } else {
          return val;
        }
      });
      return parts.join('');
    };

    InterpolableString.create = function(value) {
      var index, match, matches, parts, re, type, types, _i, _j, _len, _len1;
      value = "" + value;
      matches = [];
      types = [
        {
          re: /(#[a-f\d]{3,6})/ig,
          klass: InterpolableColor,
          parse: function(v) {
            return v;
          }
        }, {
          re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
          klass: InterpolableColor,
          parse: function(v) {
            return v;
          }
        }, {
          re: /([-+]?[\d.]+)/ig,
          klass: InterpolableNumber,
          parse: parseFloat
        }
      ];
      for (_i = 0, _len = types.length; _i < _len; _i++) {
        type = types[_i];
        re = type.re;
        while (match = re.exec(value)) {
          matches.push({
            index: match.index,
            length: match[1].length,
            interpolable: type.klass.create(type.parse(match[1]))
          });
        }
      }
      matches = matches.sort(function(a, b) {
        if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      });
      parts = [];
      index = 0;
      for (_j = 0, _len1 = matches.length; _j < _len1; _j++) {
        match = matches[_j];
        if (match.index < index) {
          continue;
        }
        if (match.index > index) {
          parts.push(value.substring(index, match.index));
        }
        parts.push(match.interpolable);
        index = match.index + match.length;
      }
      if (index < value.length) {
        parts.push(value.substring(index));
      }
      return new InterpolableString(parts);
    };

    return InterpolableString;

  })();

  InterpolableObject = (function() {
    function InterpolableObject(obj) {
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
      this.obj = obj;
    }

    InterpolableObject.prototype.interpolate = function(endInterpolable, t) {
      var end, k, newObj, start, v;
      start = this.obj;
      end = endInterpolable.obj;
      newObj = {};
      for (k in start) {
        v = start[k];
        if (v.interpolate != null) {
          newObj[k] = v.interpolate(end[k], t);
        } else {
          newObj[k] = v;
        }
      }
      return new InterpolableObject(newObj);
    };

    InterpolableObject.prototype.format = function() {
      return this.obj;
    };

    InterpolableObject.create = function(value) {
      var k, obj, v;
      if (value instanceof Object) {
        obj = {};
        for (k in value) {
          v = value[k];
          obj[k] = createInterpolable(v);
        }
        return new InterpolableObject(obj);
      }
      return null;
    };

    return InterpolableObject;

  })();

  InterpolableNumber = (function() {
    function InterpolableNumber(value) {
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
      this.value = parseFloat(value);
    }

    InterpolableNumber.prototype.interpolate = function(endInterpolable, t) {
      var end, start;
      start = this.value;
      end = endInterpolable.value;
      return new InterpolableNumber((end - start) * t + start);
    };

    InterpolableNumber.prototype.format = function() {
      return roundf(this.value, 5);
    };

    InterpolableNumber.create = function(value) {
      if (typeof value === 'number') {
        return new InterpolableNumber(value);
      }
      return null;
    };

    return InterpolableNumber;

  })();

  InterpolableArray = (function() {
    function InterpolableArray(values) {
      this.values = values;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableArray.prototype.interpolate = function(endInterpolable, t) {
      var end, i, newValues, start, _i, _ref;
      start = this.values;
      end = endInterpolable.values;
      newValues = [];
      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (start[i].interpolate != null) {
          newValues.push(start[i].interpolate(end[i], t));
        } else {
          newValues.push(start[i]);
        }
      }
      return new InterpolableArray(newValues);
    };

    InterpolableArray.prototype.format = function() {
      return this.values.map(function(val) {
        if (val.format != null) {
          return val.format();
        } else {
          return val;
        }
      });
    };

    InterpolableArray.createFromArray = function(arr) {
      var values;
      values = arr.map(function(val) {
        return createInterpolable(val) || val;
      });
      values = values.filter(function(val) {
        return val != null;
      });
      return new InterpolableArray(values);
    };

    InterpolableArray.create = function(value) {
      if (value instanceof Array) {
        return InterpolableArray.createFromArray(value);
      }
      return null;
    };

    return InterpolableArray;

  })();

  Color = (function() {
    function Color(rgb, format) {
      this.rgb = rgb != null ? rgb : {};
      this.format = format;
      this.toRgba = __bind(this.toRgba, this);
      this.toRgb = __bind(this.toRgb, this);
      this.toHex = __bind(this.toHex, this);
    }

    Color.fromHex = function(hex) {
      var hex3, result;
      hex3 = hex.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
      if (hex3 != null) {
        hex = "#" + hex3[1] + hex3[1] + hex3[2] + hex3[2] + hex3[3] + hex3[3];
      }
      result = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      if (result != null) {
        return new Color({
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: 1
        }, "hex");
      }
      return null;
    };

    Color.fromRgb = function(rgb) {
      var match, _ref;
      match = rgb.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
      if (match != null) {
        return new Color({
          r: parseFloat(match[1]),
          g: parseFloat(match[2]),
          b: parseFloat(match[3]),
          a: parseFloat((_ref = match[4]) != null ? _ref : 1)
        }, match[4] != null ? "rgba" : "rgb");
      }
      return null;
    };

    Color.componentToHex = function(c) {
      var hex;
      hex = c.toString(16);
      if (hex.length === 1) {
        return "0" + hex;
      } else {
        return hex;
      }
    };

    Color.prototype.toHex = function() {
      return "#" + Color.componentToHex(this.rgb.r) + Color.componentToHex(this.rgb.g) + Color.componentToHex(this.rgb.b);
    };

    Color.prototype.toRgb = function() {
      return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")";
    };

    Color.prototype.toRgba = function() {
      return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")";
    };

    return Color;

  })();

  InterpolableColor = (function() {
    function InterpolableColor(color) {
      this.color = color;
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    InterpolableColor.prototype.interpolate = function(endInterpolable, t) {
      var end, k, rgb, start, v, _i, _len, _ref;
      start = this.color;
      end = endInterpolable.color;
      rgb = {};
      _ref = ['r', 'g', 'b'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        v = Math.round((end.rgb[k] - start.rgb[k]) * t + start.rgb[k]);
        rgb[k] = Math.min(255, Math.max(0, v));
      }
      k = "a";
      v = roundf((end.rgb[k] - start.rgb[k]) * t + start.rgb[k], 5);
      rgb[k] = Math.min(1, Math.max(0, v));
      return new InterpolableColor(new Color(rgb, end.format));
    };

    InterpolableColor.prototype.format = function() {
      if (this.color.format === "hex") {
        return this.color.toHex();
      } else if (this.color.format === "rgb") {
        return this.color.toRgb();
      } else if (this.color.format === "rgba") {
        return this.color.toRgba();
      }
    };

    InterpolableColor.create = function(value) {
      var color;
      if (typeof value !== "string") {
        return;
      }
      color = Color.fromHex(value) || Color.fromRgb(value);
      if (color != null) {
        return new InterpolableColor(color);
      }
      return null;
    };

    return InterpolableColor;

  })();

  DecomposedMatrix2D = (function() {
    function DecomposedMatrix2D(props) {
      this.props = props;
      this.applyRotateCenter = __bind(this.applyRotateCenter, this);
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    DecomposedMatrix2D.prototype.interpolate = function(endMatrix, t) {
      var i, k, newProps, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2;
      newProps = {};
      _ref = ['translate', 'scale', 'rotate'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        newProps[k] = [];
        for (i = _j = 0, _ref1 = this.props[k].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          newProps[k][i] = (endMatrix.props[k][i] - this.props[k][i]) * t + this.props[k][i];
        }
      }
      for (i = _k = 1; _k <= 2; i = ++_k) {
        newProps['rotate'][i] = endMatrix.props['rotate'][i];
      }
      _ref2 = ['skew'];
      for (_l = 0, _len1 = _ref2.length; _l < _len1; _l++) {
        k = _ref2[_l];
        newProps[k] = (endMatrix.props[k] - this.props[k]) * t + this.props[k];
      }
      return new DecomposedMatrix2D(newProps);
    };

    DecomposedMatrix2D.prototype.format = function() {
      return "translate(" + (this.props.translate.join(',')) + ") rotate(" + (this.props.rotate.join(',')) + ") skewX(" + this.props.skew + ") scale(" + (this.props.scale.join(',')) + ")";
    };

    DecomposedMatrix2D.prototype.applyRotateCenter = function(rotateC) {
      var i, m, m2d, negativeTranslate, _i, _results;
      m = baseSVG.createSVGMatrix();
      m = m.translate(rotateC[0], rotateC[1]);
      m = m.rotate(this.props.rotate[0]);
      m = m.translate(-rotateC[0], -rotateC[1]);
      m2d = new Matrix2D(m);
      negativeTranslate = m2d.decompose().props.translate;
      _results = [];
      for (i = _i = 0; _i <= 1; i = ++_i) {
        _results.push(this.props.translate[i] -= negativeTranslate[i]);
      }
      return _results;
    };

    return DecomposedMatrix2D;

  })();

  baseSVG = typeof document !== "undefined" && document !== null ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0;

  Matrix2D = (function() {
    function Matrix2D(m) {
      this.m = m;
      this.applyProperties = __bind(this.applyProperties, this);
      this.decompose = __bind(this.decompose, this);
      if (!this.m) {
        this.m = baseSVG.createSVGMatrix();
      }
    }

    Matrix2D.prototype.decompose = function() {
      var kx, ky, kz, r0, r1;
      r0 = new Vector([this.m.a, this.m.b]);
      r1 = new Vector([this.m.c, this.m.d]);
      kx = r0.length();
      kz = r0.dot(r1);
      r0 = r0.normalize();
      ky = r1.combine(r0, 1, -kz).length();
      return new DecomposedMatrix2D({
        translate: [this.m.e, this.m.f],
        rotate: [Math.atan2(this.m.b, this.m.a) * 180 / Math.PI, this.rotateCX, this.rotateCY],
        scale: [kx, ky],
        skew: kz / ky * 180 / Math.PI
      });
    };

    Matrix2D.prototype.applyProperties = function(properties) {
      var hash, k, props, v, _i, _len, _ref, _ref1;
      hash = {};
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        props = properties[_i];
        hash[props[0]] = props[1];
      }
      for (k in hash) {
        v = hash[k];
        if (k === "translateX") {
          this.m = this.m.translate(v, 0);
        } else if (k === "translateY") {
          this.m = this.m.translate(0, v);
        } else if (k === "scaleX") {
          this.m = this.m.scaleNonUniform(v, 1);
        } else if (k === "scaleY") {
          this.m = this.m.scaleNonUniform(1, v);
        } else if (k === "rotateZ") {
          this.m = this.m.rotate(v);
        } else if (k === "skewX") {
          this.m = this.m.skewX(v);
        } else if (k === "skewY") {
          this.m = this.m.skewY(v);
        }
      }
      this.rotateCX = (_ref = hash.rotateCX) != null ? _ref : 0;
      return this.rotateCY = (_ref1 = hash.rotateCY) != null ? _ref1 : 0;
    };

    return Matrix2D;

  })();

  Vector = (function() {
    function Vector(els) {
      this.els = els;
      this.combine = __bind(this.combine, this);
      this.normalize = __bind(this.normalize, this);
      this.length = __bind(this.length, this);
      this.cross = __bind(this.cross, this);
      this.dot = __bind(this.dot, this);
      this.e = __bind(this.e, this);
    }

    Vector.prototype.e = function(i) {
      if (i < 1 || i > this.els.length) {
        return null;
      } else {
        return this.els[i - 1];
      }
    };

    Vector.prototype.dot = function(vector) {
      var V, n, product;
      V = vector.els || vector;
      product = 0;
      n = this.els.length;
      if (n !== V.length) {
        return null;
      }
      n += 1;
      while (--n) {
        product += this.els[n - 1] * V[n - 1];
      }
      return product;
    };

    Vector.prototype.cross = function(vector) {
      var A, B;
      B = vector.els || vector;
      if (this.els.length !== 3 || B.length !== 3) {
        return null;
      }
      A = this.els;
      return new Vector([(A[1] * B[2]) - (A[2] * B[1]), (A[2] * B[0]) - (A[0] * B[2]), (A[0] * B[1]) - (A[1] * B[0])]);
    };

    Vector.prototype.length = function() {
      var a, e, _i, _len, _ref;
      a = 0;
      _ref = this.els;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        a += Math.pow(e, 2);
      }
      return Math.sqrt(a);
    };

    Vector.prototype.normalize = function() {
      var e, i, length, newElements, _ref;
      length = this.length();
      newElements = [];
      _ref = this.els;
      for (i in _ref) {
        e = _ref[i];
        newElements[i] = e / length;
      }
      return new Vector(newElements);
    };

    Vector.prototype.combine = function(b, ascl, bscl) {
      var i, result, _i, _ref;
      result = [];
      for (i = _i = 0, _ref = this.els.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        result[i] = (ascl * this.els[i]) + (bscl * b.els[i]);
      }
      return new Vector(result);
    };

    return Vector;

  })();

  DecomposedMatrix = (function() {
    function DecomposedMatrix() {
      this.toMatrix = __bind(this.toMatrix, this);
      this.format = __bind(this.format, this);
      this.interpolate = __bind(this.interpolate, this);
    }

    DecomposedMatrix.prototype.interpolate = function(decomposedB, t, only) {
      var angle, decomposed, decomposedA, i, invscale, invth, k, qa, qb, scale, th, _i, _j, _k, _l, _len, _ref, _ref1;
      if (only == null) {
        only = null;
      }
      decomposedA = this;
      decomposed = new DecomposedMatrix;
      _ref = ['translate', 'scale', 'skew', 'perspective'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        decomposed[k] = [];
        for (i = _j = 0, _ref1 = decomposedA[k].length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          if ((only == null) || only.indexOf(k) > -1 || only.indexOf("" + k + ['x', 'y', 'z'][i]) > -1) {
            decomposed[k][i] = (decomposedB[k][i] - decomposedA[k][i]) * t + decomposedA[k][i];
          } else {
            decomposed[k][i] = decomposedA[k][i];
          }
        }
      }
      if ((only == null) || only.indexOf('rotate') !== -1) {
        qa = decomposedA.quaternion;
        qb = decomposedB.quaternion;
        angle = qa[0] * qb[0] + qa[1] * qb[1] + qa[2] * qb[2] + qa[3] * qb[3];
        if (angle < 0.0) {
          for (i = _k = 0; _k <= 3; i = ++_k) {
            qa[i] = -qa[i];
          }
          angle = -angle;
        }
        if (angle + 1.0 > .05) {
          if (1.0 - angle >= .05) {
            th = Math.acos(angle);
            invth = 1.0 / Math.sin(th);
            scale = Math.sin(th * (1.0 - t)) * invth;
            invscale = Math.sin(th * t) * invth;
          } else {
            scale = 1.0 - t;
            invscale = t;
          }
        } else {
          qb[0] = -qa[1];
          qb[1] = qa[0];
          qb[2] = -qa[3];
          qb[3] = qa[2];
          scale = Math.sin(piDouble * (.5 - t));
          invscale = Math.sin(piDouble * t);
        }
        decomposed.quaternion = [];
        for (i = _l = 0; _l <= 3; i = ++_l) {
          decomposed.quaternion[i] = qa[i] * scale + qb[i] * invscale;
        }
      } else {
        decomposed.quaternion = decomposedA.quaternion;
      }
      return decomposed;
    };

    DecomposedMatrix.prototype.format = function() {
      return this.toMatrix().toString();
    };

    DecomposedMatrix.prototype.toMatrix = function() {
      var decomposedMatrix, i, j, match, matrix, quaternion, skew, temp, w, x, y, z, _i, _j, _k, _l;
      decomposedMatrix = this;
      matrix = Matrix.I(4);
      for (i = _i = 0; _i <= 3; i = ++_i) {
        matrix.els[i][3] = decomposedMatrix.perspective[i];
      }
      quaternion = decomposedMatrix.quaternion;
      x = quaternion[0];
      y = quaternion[1];
      z = quaternion[2];
      w = quaternion[3];
      skew = decomposedMatrix.skew;
      match = [[1, 0], [2, 0], [2, 1]];
      for (i = _j = 2; _j >= 0; i = --_j) {
        if (skew[i]) {
          temp = Matrix.I(4);
          temp.els[match[i][0]][match[i][1]] = skew[i];
          matrix = matrix.multiply(temp);
        }
      }
      matrix = matrix.multiply(new Matrix([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]));
      for (i = _k = 0; _k <= 2; i = ++_k) {
        for (j = _l = 0; _l <= 2; j = ++_l) {
          matrix.els[i][j] *= decomposedMatrix.scale[i];
        }
        matrix.els[3][i] = decomposedMatrix.translate[i];
      }
      return matrix;
    };

    return DecomposedMatrix;

  })();

  Matrix = (function() {
    function Matrix(els) {
      this.els = els;
      this.toString = __bind(this.toString, this);
      this.decompose = __bind(this.decompose, this);
      this.inverse = __bind(this.inverse, this);
      this.augment = __bind(this.augment, this);
      this.toRightTriangular = __bind(this.toRightTriangular, this);
      this.transpose = __bind(this.transpose, this);
      this.multiply = __bind(this.multiply, this);
      this.dup = __bind(this.dup, this);
      this.e = __bind(this.e, this);
    }

    Matrix.prototype.e = function(i, j) {
      if (i < 1 || i > this.els.length || j < 1 || j > this.els[0].length) {
        return null;
      }
      return this.els[i - 1][j - 1];
    };

    Matrix.prototype.dup = function() {
      return new Matrix(this.els);
    };

    Matrix.prototype.multiply = function(matrix) {
      var M, c, cols, elements, i, j, ki, kj, nc, ni, nj, returnVector, sum;
      returnVector = matrix.modulus ? true : false;
      M = matrix.els || matrix;
      if (typeof M[0][0] === 'undefined') {
        M = new Matrix(M).els;
      }
      ni = this.els.length;
      ki = ni;
      kj = M[0].length;
      cols = this.els[0].length;
      elements = [];
      ni += 1;
      while (--ni) {
        i = ki - ni;
        elements[i] = [];
        nj = kj;
        nj += 1;
        while (--nj) {
          j = kj - nj;
          sum = 0;
          nc = cols;
          nc += 1;
          while (--nc) {
            c = cols - nc;
            sum += this.els[i][c] * M[c][j];
          }
          elements[i][j] = sum;
        }
      }
      M = new Matrix(elements);
      if (returnVector) {
        return M.col(1);
      } else {
        return M;
      }
    };

    Matrix.prototype.transpose = function() {
      var cols, elements, i, j, ni, nj, rows;
      rows = this.els.length;
      cols = this.els[0].length;
      elements = [];
      ni = cols;
      ni += 1;
      while (--ni) {
        i = cols - ni;
        elements[i] = [];
        nj = rows;
        nj += 1;
        while (--nj) {
          j = rows - nj;
          elements[i][j] = this.els[j][i];
        }
      }
      return new Matrix(elements);
    };

    Matrix.prototype.toRightTriangular = function() {
      var M, els, i, j, k, kp, multiplier, n, np, p, _i, _j, _ref, _ref1;
      M = this.dup();
      n = this.els.length;
      k = n;
      kp = this.els[0].length;
      while (--n) {
        i = k - n;
        if (M.els[i][i] === 0) {
          for (j = _i = _ref = i + 1; _ref <= k ? _i < k : _i > k; j = _ref <= k ? ++_i : --_i) {
            if (M.els[j][i] !== 0) {
              els = [];
              np = kp;
              np += 1;
              while (--np) {
                p = kp - np;
                els.push(M.els[i][p] + M.els[j][p]);
              }
              M.els[i] = els;
              break;
            }
          }
        }
        if (M.els[i][i] !== 0) {
          for (j = _j = _ref1 = i + 1; _ref1 <= k ? _j < k : _j > k; j = _ref1 <= k ? ++_j : --_j) {
            multiplier = M.els[j][i] / M.els[i][i];
            els = [];
            np = kp;
            np += 1;
            while (--np) {
              p = kp - np;
              els.push(p <= i ? 0 : M.els[j][p] - M.els[i][p] * multiplier);
            }
            M.els[j] = els;
          }
        }
      }
      return M;
    };

    Matrix.prototype.augment = function(matrix) {
      var M, T, cols, i, j, ki, kj, ni, nj;
      M = matrix.els || matrix;
      if (typeof M[0][0] === 'undefined') {
        M = new Matrix(M).els;
      }
      T = this.dup();
      cols = T.els[0].length;
      ni = T.els.length;
      ki = ni;
      kj = M[0].length;
      if (ni !== M.length) {
        return null;
      }
      ni += 1;
      while (--ni) {
        i = ki - ni;
        nj = kj;
        nj += 1;
        while (--nj) {
          j = kj - nj;
          T.els[i][cols + j] = M[i][j];
        }
      }
      return T;
    };

    Matrix.prototype.inverse = function() {
      var M, divisor, els, i, inverse_elements, j, ki, kp, new_element, ni, np, p, _i;
      ni = this.els.length;
      ki = ni;
      M = this.augment(Matrix.I(ni)).toRightTriangular();
      kp = M.els[0].length;
      inverse_elements = [];
      ni += 1;
      while (--ni) {
        i = ni - 1;
        els = [];
        np = kp;
        inverse_elements[i] = [];
        divisor = M.els[i][i];
        np += 1;
        while (--np) {
          p = kp - np;
          new_element = M.els[i][p] / divisor;
          els.push(new_element);
          if (p >= ki) {
            inverse_elements[i].push(new_element);
          }
        }
        M.els[i] = els;
        for (j = _i = 0; 0 <= i ? _i < i : _i > i; j = 0 <= i ? ++_i : --_i) {
          els = [];
          np = kp;
          np += 1;
          while (--np) {
            p = kp - np;
            els.push(M.els[j][p] - M.els[i][p] * M.els[j][i]);
          }
          M.els[j] = els;
        }
      }
      return new Matrix(inverse_elements);
    };

    Matrix.I = function(n) {
      var els, i, j, k, nj;
      els = [];
      k = n;
      n += 1;
      while (--n) {
        i = k - n;
        els[i] = [];
        nj = k;
        nj += 1;
        while (--nj) {
          j = k - nj;
          els[i][j] = i === j ? 1 : 0;
        }
      }
      return new Matrix(els);
    };

    Matrix.prototype.decompose = function() {
      var els, i, inversePerspectiveMatrix, j, k, matrix, pdum3, perspective, perspectiveMatrix, quaternion, result, rightHandSide, rotate, row, rowElement, s, scale, skew, t, translate, transposedInversePerspectiveMatrix, type, typeKey, v, w, x, y, z, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      matrix = this;
      translate = [];
      scale = [];
      skew = [];
      quaternion = [];
      perspective = [];
      els = [];
      for (i = _i = 0; _i <= 3; i = ++_i) {
        els[i] = [];
        for (j = _j = 0; _j <= 3; j = ++_j) {
          els[i][j] = matrix.els[i][j];
        }
      }
      if (els[3][3] === 0) {
        return false;
      }
      for (i = _k = 0; _k <= 3; i = ++_k) {
        for (j = _l = 0; _l <= 3; j = ++_l) {
          els[i][j] /= els[3][3];
        }
      }
      perspectiveMatrix = matrix.dup();
      for (i = _m = 0; _m <= 2; i = ++_m) {
        perspectiveMatrix.els[i][3] = 0;
      }
      perspectiveMatrix.els[3][3] = 1;
      if (els[0][3] !== 0 || els[1][3] !== 0 || els[2][3] !== 0) {
        rightHandSide = new Vector(els.slice(0, 4)[3]);
        inversePerspectiveMatrix = perspectiveMatrix.inverse();
        transposedInversePerspectiveMatrix = inversePerspectiveMatrix.transpose();
        perspective = transposedInversePerspectiveMatrix.multiply(rightHandSide).els;
        for (i = _n = 0; _n <= 2; i = ++_n) {
          els[i][3] = 0;
        }
        els[3][3] = 1;
      } else {
        perspective = [0, 0, 0, 1];
      }
      for (i = _o = 0; _o <= 2; i = ++_o) {
        translate[i] = els[3][i];
        els[3][i] = 0;
      }
      row = [];
      for (i = _p = 0; _p <= 2; i = ++_p) {
        row[i] = new Vector(els[i].slice(0, 3));
      }
      scale[0] = row[0].length();
      row[0] = row[0].normalize();
      skew[0] = row[0].dot(row[1]);
      row[1] = row[1].combine(row[0], 1.0, -skew[0]);
      scale[1] = row[1].length();
      row[1] = row[1].normalize();
      skew[0] /= scale[1];
      skew[1] = row[0].dot(row[2]);
      row[2] = row[2].combine(row[0], 1.0, -skew[1]);
      skew[2] = row[1].dot(row[2]);
      row[2] = row[2].combine(row[1], 1.0, -skew[2]);
      scale[2] = row[2].length();
      row[2] = row[2].normalize();
      skew[1] /= scale[2];
      skew[2] /= scale[2];
      pdum3 = row[1].cross(row[2]);
      if (row[0].dot(pdum3) < 0) {
        for (i = _q = 0; _q <= 2; i = ++_q) {
          scale[i] *= -1;
          for (j = _r = 0; _r <= 2; j = ++_r) {
            row[i].els[j] *= -1;
          }
        }
      }
      rowElement = function(index, elementIndex) {
        return row[index].els[elementIndex];
      };
      rotate = [];
      rotate[1] = Math.asin(-rowElement(0, 2));
      if (Math.cos(rotate[1]) !== 0) {
        rotate[0] = Math.atan2(rowElement(1, 2), rowElement(2, 2));
        rotate[2] = Math.atan2(rowElement(0, 1), rowElement(0, 0));
      } else {
        rotate[0] = Math.atan2(-rowElement(2, 0), rowElement(1, 1));
        rotate[1] = 0;
      }
      t = rowElement(0, 0) + rowElement(1, 1) + rowElement(2, 2) + 1.0;
      if (t > 1e-4) {
        s = 0.5 / Math.sqrt(t);
        w = 0.25 / s;
        x = (rowElement(2, 1) - rowElement(1, 2)) * s;
        y = (rowElement(0, 2) - rowElement(2, 0)) * s;
        z = (rowElement(1, 0) - rowElement(0, 1)) * s;
      } else if ((rowElement(0, 0) > rowElement(1, 1)) && (rowElement(0, 0) > rowElement(2, 2))) {
        s = Math.sqrt(1.0 + rowElement(0, 0) - rowElement(1, 1) - rowElement(2, 2)) * 2.0;
        x = 0.25 * s;
        y = (rowElement(0, 1) + rowElement(1, 0)) / s;
        z = (rowElement(0, 2) + rowElement(2, 0)) / s;
        w = (rowElement(2, 1) - rowElement(1, 2)) / s;
      } else if (rowElement(1, 1) > rowElement(2, 2)) {
        s = Math.sqrt(1.0 + rowElement(1, 1) - rowElement(0, 0) - rowElement(2, 2)) * 2.0;
        x = (rowElement(0, 1) + rowElement(1, 0)) / s;
        y = 0.25 * s;
        z = (rowElement(1, 2) + rowElement(2, 1)) / s;
        w = (rowElement(0, 2) - rowElement(2, 0)) / s;
      } else {
        s = Math.sqrt(1.0 + rowElement(2, 2) - rowElement(0, 0) - rowElement(1, 1)) * 2.0;
        x = (rowElement(0, 2) + rowElement(2, 0)) / s;
        y = (rowElement(1, 2) + rowElement(2, 1)) / s;
        z = 0.25 * s;
        w = (rowElement(1, 0) - rowElement(0, 1)) / s;
      }
      quaternion = [x, y, z, w];
      result = new DecomposedMatrix;
      result.translate = translate;
      result.scale = scale;
      result.skew = skew;
      result.quaternion = quaternion;
      result.perspective = perspective;
      result.rotate = rotate;
      for (typeKey in result) {
        type = result[typeKey];
        for (k in type) {
          v = type[k];
          if (isNaN(v)) {
            type[k] = 0;
          }
        }
      }
      return result;
    };

    Matrix.prototype.toString = function() {
      var i, j, str, _i, _j;
      str = 'matrix3d(';
      for (i = _i = 0; _i <= 3; i = ++_i) {
        for (j = _j = 0; _j <= 3; j = ++_j) {
          str += roundf(this.els[i][j], 10);
          if (!(i === 3 && j === 3)) {
            str += ',';
          }
        }
      }
      str += ')';
      return str;
    };

    Matrix.matrixForTransform = cacheFn(function(transform) {
      var matrixEl, result, style, _ref, _ref1, _ref2;
      matrixEl = document.createElement('div');
      matrixEl.style.position = 'absolute';
      matrixEl.style.visibility = 'hidden';
      matrixEl.style[propertyWithPrefix("transform")] = transform;
      document.body.appendChild(matrixEl);
      style = window.getComputedStyle(matrixEl, null);
      result = (_ref = (_ref1 = style.transform) != null ? _ref1 : style[propertyWithPrefix("transform")]) != null ? _ref : (_ref2 = dynamics.tests) != null ? _ref2.matrixForTransform(transform) : void 0;
      document.body.removeChild(matrixEl);
      return result;
    });

    Matrix.fromTransform = function(transform) {
      var digits, elements, i, match, matrixElements, _i;
      match = transform != null ? transform.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0;
      if (match) {
        digits = match[1].split(',');
        digits = digits.map(parseFloat);
        if (digits.length === 6) {
          elements = [digits[0], digits[1], 0, 0, digits[2], digits[3], 0, 0, 0, 0, 1, 0, digits[4], digits[5], 0, 1];
        } else {
          elements = digits;
        }
      } else {
        elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }
      matrixElements = [];
      for (i = _i = 0; _i <= 3; i = ++_i) {
        matrixElements.push(elements.slice(i * 4, i * 4 + 4));
      }
      return new Matrix(matrixElements);
    };

    return Matrix;

  })();

  prefixFor = cacheFn(function(property) {
    var k, prefix, prop, propArray, propertyName, _i, _j, _len, _len1, _ref;
    if (document.body.style[property] !== void 0) {
      return '';
    }
    propArray = property.split('-');
    propertyName = "";
    for (_i = 0, _len = propArray.length; _i < _len; _i++) {
      prop = propArray[_i];
      propertyName += prop.substring(0, 1).toUpperCase() + prop.substring(1);
    }
    _ref = ["Webkit", "Moz", "ms"];
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      prefix = _ref[_j];
      k = prefix + propertyName;
      if (document.body.style[k] !== void 0) {
        return prefix;
      }
    }
    return '';
  });

  propertyWithPrefix = cacheFn(function(property) {
    var prefix;
    prefix = prefixFor(property);
    if (prefix === 'Moz') {
      return "" + prefix + (property.substring(0, 1).toUpperCase() + property.substring(1));
    }
    if (prefix !== '') {
      return "-" + (prefix.toLowerCase()) + "-" + (toDashed(property));
    }
    return toDashed(property);
  });

  rAF = typeof window !== "undefined" && window !== null ? window.requestAnimationFrame : void 0;

  animations = [];

  animationsTimeouts = [];

  slow = false;

  slowRatio = 1;

  if (typeof window !== "undefined" && window !== null) {
    window.addEventListener('keyup', function(e) {
      if (e.keyCode === 68 && e.shiftKey && e.ctrlKey) {
        return dynamics.toggleSlow();
      }
    });
  }

  if (rAF == null) {
    lastTime = 0;
    rAF = function(callback) {
      var currTime, id, timeToCall;
      currTime = Date.now();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function() {
        return callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  runLoopRunning = false;

  runLoopPaused = false;

  startRunLoop = function() {
    if (!runLoopRunning) {
      runLoopRunning = true;
      return rAF(runLoopTick);
    }
  };

  runLoopTick = function(t) {
    var animation, toRemoveAnimations, _i, _len;
    if (runLoopPaused) {
      rAF(runLoopTick);
      return;
    }
    toRemoveAnimations = [];
    for (_i = 0, _len = animations.length; _i < _len; _i++) {
      animation = animations[_i];
      if (!animationTick(t, animation)) {
        toRemoveAnimations.push(animation);
      }
    }
    animations = animations.filter(function(animation) {
      return toRemoveAnimations.indexOf(animation) === -1;
    });
    if (animations.length === 0) {
      return runLoopRunning = false;
    } else {
      return rAF(runLoopTick);
    }
  };

  animationTick = function(t, animation) {
    var key, properties, property, tt, y, _base, _base1, _ref;
    if (animation.tStart == null) {
      animation.tStart = t;
    }
    tt = (t - animation.tStart) / animation.options.duration;
    y = animation.curve(tt);
    properties = {};
    if (tt >= 1) {
      if (animation.curve.returnsToSelf) {
        properties = animation.properties.start;
      } else {
        properties = animation.properties.end;
      }
    } else {
      _ref = animation.properties.start;
      for (key in _ref) {
        property = _ref[key];
        properties[key] = interpolate(property, animation.properties.end[key], y);
      }
    }
    applyFrame(animation.el, properties);
    if (typeof (_base = animation.options).change === "function") {
      _base.change(animation.el, Math.min(1, tt));
    }
    if (tt >= 1) {
      if (typeof (_base1 = animation.options).complete === "function") {
        _base1.complete(animation.el);
      }
    }
    return tt < 1;
  };

  interpolate = function(start, end, y) {
    if ((start != null) && (start.interpolate != null)) {
      return start.interpolate(end, y);
    }
    return null;
  };

  startAnimation = function(el, properties, options, timeoutId) {
    var endProperties, isSVG, k, matrix, startProperties, transforms, v;
    if (timeoutId != null) {
      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
        return timeout.id !== timeoutId;
      });
    }
    dynamics.stop(el, {
      timeout: false
    });
    if (!options.animated) {
      dynamics.css(el, properties);
      if (typeof options.complete === "function") {
        options.complete(this);
      }
      return;
    }
    startProperties = getCurrentProperties(el, Object.keys(properties));
    properties = parseProperties(properties);
    endProperties = {};
    transforms = [];
    for (k in properties) {
      v = properties[k];
      if ((el.style != null) && transformProperties.contains(k)) {
        transforms.push([k, v]);
      } else {
        endProperties[k] = createInterpolable(v);
      }
    }
    if (transforms.length > 0) {
      isSVG = isSVGElement(el);
      if (isSVG) {
        matrix = new Matrix2D();
        matrix.applyProperties(transforms);
      } else {
        v = (transforms.map(function(transform) {
          return transformValueForProperty(transform[0], transform[1]);
        })).join(" ");
        matrix = Matrix.fromTransform(Matrix.matrixForTransform(v));
      }
      endProperties['transform'] = matrix.decompose();
      if (isSVG) {
        startProperties.transform.applyRotateCenter([endProperties.transform.props.rotate[1], endProperties.transform.props.rotate[2]]);
      }
    }
    addUnitsToNumberInterpolables(el, endProperties);
    animations.push({
      el: el,
      properties: {
        start: startProperties,
        end: endProperties
      },
      options: options,
      curve: options.type.call(options.type, options)
    });
    return startRunLoop();
  };

  timeouts = [];

  timeoutLastId = 0;

  setRealTimeout = function(timeout) {
    if (!isDocumentVisible()) {
      return;
    }
    return rAF(function() {
      if (timeouts.indexOf(timeout) === -1) {
        return;
      }
      return timeout.realTimeoutId = setTimeout(function() {
        timeout.fn();
        return cancelTimeout(timeout.id);
      }, timeout.delay);
    });
  };

  addTimeout = function(fn, delay) {
    var timeout;
    timeoutLastId += 1;
    timeout = {
      id: timeoutLastId,
      tStart: Date.now(),
      fn: fn,
      delay: delay,
      originalDelay: delay
    };
    setRealTimeout(timeout);
    timeouts.push(timeout);
    return timeoutLastId;
  };

  cancelTimeout = function(id) {
    return timeouts = timeouts.filter(function(timeout) {
      if (timeout.id === id && timeout.realTimeoutId) {
        clearTimeout(timeout.realTimeoutId);
      }
      return timeout.id !== id;
    });
  };

  leftDelayForTimeout = function(time, timeout) {
    var consumedDelay;
    if (time != null) {
      consumedDelay = time - timeout.tStart;
      return timeout.originalDelay - consumedDelay;
    } else {
      return timeout.originalDelay;
    }
  };

  if (typeof window !== "undefined" && window !== null) {
    window.addEventListener('unload', function() {});
  }

  timeBeforeVisibilityChange = null;

  observeVisibilityChange(function(visible) {
    var animation, difference, timeout, _i, _j, _k, _len, _len1, _len2, _results;
    runLoopPaused = !visible;
    if (!visible) {
      timeBeforeVisibilityChange = Date.now();
      _results = [];
      for (_i = 0, _len = timeouts.length; _i < _len; _i++) {
        timeout = timeouts[_i];
        _results.push(clearTimeout(timeout.realTimeoutId));
      }
      return _results;
    } else {
      if (runLoopRunning) {
        difference = Date.now() - timeBeforeVisibilityChange;
        for (_j = 0, _len1 = animations.length; _j < _len1; _j++) {
          animation = animations[_j];
          if (animation.tStart != null) {
            animation.tStart += difference;
          }
        }
      }
      for (_k = 0, _len2 = timeouts.length; _k < _len2; _k++) {
        timeout = timeouts[_k];
        timeout.delay = leftDelayForTimeout(timeBeforeVisibilityChange, timeout);
        setRealTimeout(timeout);
      }
      return timeBeforeVisibilityChange = null;
    }
  });

  dynamics = {};

  dynamics.linear = function() {
    return function(t) {
      return t;
    };
  };

  dynamics.spring = function(options) {
    var A1, A2, decal, frequency, friction, s;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.spring.defaults);
    frequency = Math.max(1, options.frequency / 20);
    friction = Math.pow(20, options.friction / 100);
    s = options.anticipationSize / 1000;
    decal = Math.max(0, s);
    A1 = function(t) {
      var M, a, b, x0, x1;
      M = 0.8;
      x0 = s / (1 - s);
      x1 = 0;
      b = (x0 - (M * x1)) / (x0 - x1);
      a = (M - b) / x0;
      return (a * t * options.anticipationStrength / 100) + b;
    };
    A2 = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };
    return function(t) {
      var A, At, a, angle, b, frictionT, y0, yS;
      frictionT = (t / (1 - s)) - (s / (1 - s));
      if (t < s) {
        yS = (s / (1 - s)) - (s / (1 - s));
        y0 = (0 / (1 - s)) - (s / (1 - s));
        b = Math.acos(1 / A1(yS));
        a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
        A = A1;
      } else {
        A = A2;
        b = 0;
        a = 1;
      }
      At = A(frictionT);
      angle = frequency * (t - s) * a + b;
      return 1 - (At * Math.cos(angle));
    };
  };

  dynamics.bounce = function(options) {
    var A, fn, frequency, friction;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.bounce.defaults);
    frequency = Math.max(1, options.frequency / 20);
    friction = Math.pow(20, options.friction / 100);
    A = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };
    fn = function(t) {
      var At, a, angle, b;
      b = -3.14 / 2;
      a = 1;
      At = A(t);
      angle = frequency * t * a + b;
      return At * Math.cos(angle);
    };
    fn.returnsToSelf = true;
    return fn;
  };

  dynamics.gravity = function(options) {
    var L, bounciness, curves, elasticity, fn, getPointInCurve, gravity;
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.gravity.defaults);
    bounciness = Math.min(options.bounciness / 1250, 0.8);
    elasticity = options.elasticity / 1000;
    gravity = 100;
    curves = [];
    L = (function() {
      var b, curve;
      b = Math.sqrt(2 / gravity);
      curve = {
        a: -b,
        b: b,
        H: 1
      };
      if (options.returnsToSelf) {
        curve.a = 0;
        curve.b = curve.b * 2;
      }
      while (curve.H > 0.001) {
        L = curve.b - curve.a;
        curve = {
          a: curve.b,
          b: curve.b + L * bounciness,
          H: curve.H * bounciness * bounciness
        };
      }
      return curve.b;
    })();
    getPointInCurve = function(a, b, H, t) {
      var c, t2;
      L = b - a;
      t2 = (2 / L) * t - 1 - (a * 2 / L);
      c = t2 * t2 * H - H + 1;
      if (options.returnsToSelf) {
        c = 1 - c;
      }
      return c;
    };
    (function() {
      var L2, b, curve, _results;
      b = Math.sqrt(2 / (gravity * L * L));
      curve = {
        a: -b,
        b: b,
        H: 1
      };
      if (options.returnsToSelf) {
        curve.a = 0;
        curve.b = curve.b * 2;
      }
      curves.push(curve);
      L2 = L;
      _results = [];
      while (curve.b < 1 && curve.H > 0.001) {
        L2 = curve.b - curve.a;
        curve = {
          a: curve.b,
          b: curve.b + L2 * bounciness,
          H: curve.H * elasticity
        };
        _results.push(curves.push(curve));
      }
      return _results;
    })();
    fn = function(t) {
      var curve, i, v;
      i = 0;
      curve = curves[i];
      while (!(t >= curve.a && t <= curve.b)) {
        i += 1;
        curve = curves[i];
        if (!curve) {
          break;
        }
      }
      if (!curve) {
        v = options.returnsToSelf ? 0 : 1;
      } else {
        v = getPointInCurve(curve.a, curve.b, curve.H, t);
      }
      return v;
    };
    fn.returnsToSelf = options.returnsToSelf;
    return fn;
  };

  dynamics.forceWithGravity = function(options) {
    if (options == null) {
      options = {};
    }
    applyDefaults(options, dynamics.forceWithGravity.defaults);
    options.returnsToSelf = true;
    return dynamics.gravity(options);
  };

  dynamics.bezier = (function() {
    var Bezier, Bezier_, yForX;
    Bezier_ = function(t, p0, p1, p2, p3) {
      return (Math.pow(1 - t, 3) * p0) + (3 * Math.pow(1 - t, 2) * t * p1) + (3 * (1 - t) * Math.pow(t, 2) * p2) + Math.pow(t, 3) * p3;
    };
    Bezier = function(t, p0, p1, p2, p3) {
      return {
        x: Bezier_(t, p0.x, p1.x, p2.x, p3.x),
        y: Bezier_(t, p0.y, p1.y, p2.y, p3.y)
      };
    };
    yForX = function(xTarget, Bs, returnsToSelf) {
      var B, aB, i, lower, percent, upper, x, xTolerance, _i, _len;
      B = null;
      for (_i = 0, _len = Bs.length; _i < _len; _i++) {
        aB = Bs[_i];
        if (xTarget >= aB(0).x && xTarget <= aB(1).x) {
          B = aB;
        }
        if (B !== null) {
          break;
        }
      }
      if (!B) {
        if (returnsToSelf) {
          return 0;
        } else {
          return 1;
        }
      }
      xTolerance = 0.0001;
      lower = 0;
      upper = 1;
      percent = (upper + lower) / 2;
      x = B(percent).x;
      i = 0;
      while (Math.abs(xTarget - x) > xTolerance && i < 100) {
        if (xTarget > x) {
          lower = percent;
        } else {
          upper = percent;
        }
        percent = (upper + lower) / 2;
        x = B(percent).x;
        i += 1;
      }
      return B(percent).y;
    };
    return function(options) {
      var Bs, fn, points;
      if (options == null) {
        options = {};
      }
      points = options.points;
      Bs = (function() {
        var i, k, _fn;
        Bs = [];
        _fn = function(pointA, pointB) {
          var B2;
          B2 = function(t) {
            return Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
          };
          return Bs.push(B2);
        };
        for (i in points) {
          k = parseInt(i);
          if (k >= points.length - 1) {
            break;
          }
          _fn(points[k], points[k + 1]);
        }
        return Bs;
      })();
      fn = function(t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return yForX(t, Bs, this.returnsToSelf);
        }
      };
      fn.returnsToSelf = points[points.length - 1].y === 0;
      return fn;
    };
  })();

  dynamics.easeInOut = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeInOut.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0.92 - (friction / 1000),
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 0.08 + (friction / 1000),
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.easeIn = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeIn.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0.92 - (friction / 1000),
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 1,
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.easeOut = function(options) {
    var friction, _ref;
    if (options == null) {
      options = {};
    }
    friction = (_ref = options.friction) != null ? _ref : dynamics.easeOut.defaults.friction;
    return dynamics.bezier({
      points: [
        {
          x: 0,
          y: 0,
          cp: [
            {
              x: 0,
              y: 0
            }
          ]
        }, {
          x: 1,
          y: 1,
          cp: [
            {
              x: 0.08 + (friction / 1000),
              y: 1
            }
          ]
        }
      ]
    });
  };

  dynamics.spring.defaults = {
    frequency: 300,
    friction: 200,
    anticipationSize: 0,
    anticipationStrength: 0
  };

  dynamics.bounce.defaults = {
    frequency: 300,
    friction: 200
  };

  dynamics.forceWithGravity.defaults = dynamics.gravity.defaults = {
    bounciness: 400,
    elasticity: 200
  };

  dynamics.easeInOut.defaults = dynamics.easeIn.defaults = dynamics.easeOut.defaults = {
    friction: 500
  };

  dynamics.css = makeArrayFn(function(el, properties) {
    return applyProperties(el, properties, true);
  });

  dynamics.animate = makeArrayFn(function(el, properties, options) {
    var id;
    if (options == null) {
      options = {};
    }
    options = clone(options);
    applyDefaults(options, {
      type: dynamics.easeInOut,
      duration: 1000,
      delay: 0,
      animated: true
    });
    options.duration = Math.max(0, options.duration * slowRatio);
    options.delay = Math.max(0, options.delay);
    if (options.delay === 0) {
      return startAnimation(el, properties, options);
    } else {
      id = dynamics.setTimeout(function() {
        return startAnimation(el, properties, options, id);
      }, options.delay);
      return animationsTimeouts.push({
        id: id,
        el: el
      });
    }
  });

  dynamics.stop = makeArrayFn(function(el, options) {
    if (options == null) {
      options = {};
    }
    if (options.timeout == null) {
      options.timeout = true;
    }
    if (options.timeout) {
      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
        if (timeout.el === el && ((options.filter == null) || options.filter(timeout))) {
          dynamics.clearTimeout(timeout.id);
          return false;
        }
        return true;
      });
    }
    return animations = animations.filter(function(animation) {
      return animation.el !== el;
    });
  });

  dynamics.setTimeout = function(fn, delay) {
    return addTimeout(fn, delay * slowRatio);
  };

  dynamics.clearTimeout = function(id) {
    return cancelTimeout(id);
  };

  dynamics.toggleSlow = function() {
    slow = !slow;
    if (slow) {
      slowRatio = 3;
    } else {
      slowRatio = 1;
    }
    return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("dynamics.js: slow animations " + (slow ? "enabled" : "disabled")) : void 0 : void 0;
  };

  if ( true && typeof module.exports === "object") {
    module.exports = dynamics;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return dynamics;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _simpleModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simpleModal.js */ "./resources/js/simpleModal.js");



new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 2500
}).mount();
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./resources/js/simpleModal.js":
/*!*************************************!*\
  !*** ./resources/js/simpleModal.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dynamics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dynamics.js */ "./node_modules/dynamics.js/lib/dynamics.js");
/* harmony import */ var dynamics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dynamics_js__WEBPACK_IMPORTED_MODULE_0__);

var btnOpen = select('.js-open');
var btnClose = select('.js-close');
var modal = select('.js-modal');
var modalChildren = modal.children;

function hideModal() {
  dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.animate(modal, {
    opacity: 0,
    translateY: 100
  }, {
    type: dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.spring,
    frequency: 50,
    friction: 600,
    duration: 1500
  });
}

function showModal() {
  // Define initial properties
  dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.css(modal, {
    opacity: 0,
    scale: .5
  }); // Animate to final properties

  dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.animate(modal, {
    opacity: 1,
    scale: 1
  }, {
    type: dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.spring,
    frequency: 300,
    friction: 400,
    duration: 1000
  });
} // function showBtn() {
//   dynamics.css(btnOpen, {
//     opacity: 0
//   });
//   dynamics.animate(btnOpen, {
//     opacity: 1
//   }, {
//     type: dynamics.spring,
//     frequency: 300,
//     friction: 400,
//     duration: 800
//   });
// }


function showModalChildren() {
  // Animate each child individually
  for (var i = 0; i < modalChildren.length; i++) {
    var item = modalChildren[i]; // Define initial properties

    dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.css(item, {
      opacity: 0,
      translateY: 30
    }); // Animate to final properties

    dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.animate(item, {
      opacity: 1,
      translateY: 0
    }, {
      type: dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.spring,
      frequency: 300,
      friction: 400,
      duration: 1000,
      delay: 100 + i * 40
    });
  }
}

function toggleClasses() {
  //toggleClass(btnOpen, 'is-active');
  toggleClass(modal, 'hidden');
} // click outside modal content


modal.addEventListener('click', function (e) {
  if (hasClass(e.target, 'modal')) {
    closeModal();
  }
}); // Open nav when clicking sandwich button

btnOpen.forEach(function (btnOpen) {
  btnOpen.addEventListener('click', function (e) {
    toggleClasses();
    showModal();
    showModalChildren();
  });
}); // Open nav when clicking sandwich button

btnClose.addEventListener('click', function (e) {
  closeModal();
});

function closeModal() {
  hideModal();
  dynamics_js__WEBPACK_IMPORTED_MODULE_0___default.a.setTimeout(toggleClasses, 500); //dynamics.setTimeout(showBtn, 500);
} // hasClass


function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
} // toggleClass


function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }

    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
} // select


function select(selector) {
  var elements = document.querySelectorAll(selector);

  if (elements.length > 1) {
    return elements;
  } else {
    return elements.item(0);
  }
}

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\laragon\www\gpsmedicasite\wp-content\themes\gpsmedicasite\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\laragon\www\gpsmedicasite\wp-content\themes\gpsmedicasite\resources\css\app.css */"./resources/css/app.css");


/***/ })

/******/ });