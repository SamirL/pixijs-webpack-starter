/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _pixi = __webpack_require__(1);

	var _pixi2 = _interopRequireDefault(_pixi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderer = _pixi2.default.autoDetectRenderer(800, 600);

	document.body.appendChild(renderer.view);

	var stage = new _pixi2.default.Container();

	renderer.render(stage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	__webpack_require__(2);

	var core = module.exports = __webpack_require__(7);

	core.extras = __webpack_require__(112);
	core.filters = __webpack_require__(120);
	core.interaction = __webpack_require__(132);
	core.loaders = __webpack_require__(136);
	core.mesh = __webpack_require__(188);
	core.particles = __webpack_require__(194);
	core.accessibility = __webpack_require__(199);
	core.extract = __webpack_require__(202);
	core.prepare = __webpack_require__(205);

	core.loader = new core.loaders.Loader();

	Object.assign(core, __webpack_require__(208));

	global.PIXI = core;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(6);

	if (!window.ArrayBuffer) {
	  window.ArrayBuffer = Array;
	}
	if (!window.Float32Array) {
	  window.Float32Array = Array;
	}
	if (!window.Uint32Array) {
	  window.Uint32Array = Array;
	}
	if (!window.Uint16Array) {
	  window.Uint16Array = Array;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (!Object.assign) {
	    Object.assign = __webpack_require__(4);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			var test1 = new String('abc');
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	if (!(Date.now && Date.prototype.getTime)) {
	    Date.now = function now() {
	        return new Date().getTime();
	    };
	}

	if (!(global.performance && global.performance.now)) {
	    var startTime = Date.now();
	    if (!global.performance) {
	        global.performance = {};
	    }
	    global.performance.now = function () {
	        return Date.now() - startTime;
	    };
	}

	var lastTime = Date.now();
	var vendors = ['ms', 'moz', 'webkit', 'o'];

	for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
	    global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
	    global.cancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] || global[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!global.requestAnimationFrame) {
	    global.requestAnimationFrame = function (callback) {
	        if (typeof callback !== 'function') {
	            throw new TypeError(callback + 'is not a function');
	        }

	        var currentTime = Date.now(),
	            delay = 16 + lastTime - currentTime;

	        if (delay < 0) {
	            delay = 0;
	        }

	        lastTime = currentTime;

	        return setTimeout(function () {
	            lastTime = Date.now();
	            callback(performance.now());
	        }, delay);
	    };
	}

	if (!global.cancelAnimationFrame) {
	    global.cancelAnimationFrame = function (id) {
	        clearTimeout(id);
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	if (!Math.sign) {
	    Math.sign = function (x) {
	        x = +x;
	        if (x === 0 || isNaN(x)) {
	            return x;
	        }
	        return x > 0 ? 1 : -1;
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI core library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	var core = module.exports = Object.assign(__webpack_require__(8), __webpack_require__(11), {
	    utils: __webpack_require__(21),
	    ticker: __webpack_require__(24),

	    DisplayObject: __webpack_require__(26),
	    Container: __webpack_require__(31),
	    Transform: __webpack_require__(29),
	    TransformStatic: __webpack_require__(27),
	    TransformBase: __webpack_require__(28),

	    Sprite: __webpack_require__(32),
	    CanvasSpriteRenderer: __webpack_require__(46),
	    CanvasTinter: __webpack_require__(55),
	    SpriteRenderer: __webpack_require__(56),

	    Text: __webpack_require__(97),
	    TextStyle: __webpack_require__(98),

	    Graphics: __webpack_require__(99),
	    GraphicsData: __webpack_require__(100),
	    GraphicsRenderer: __webpack_require__(102),
	    CanvasGraphicsRenderer: __webpack_require__(111),

	    Texture: __webpack_require__(33),
	    BaseTexture: __webpack_require__(34),
	    RenderTexture: __webpack_require__(49),
	    BaseRenderTexture: __webpack_require__(50),
	    VideoBaseTexture: __webpack_require__(44),
	    TextureUvs: __webpack_require__(45),

	    CanvasRenderer: __webpack_require__(47),
	    CanvasRenderTarget: __webpack_require__(52),

	    Shader: __webpack_require__(86),
	    WebGLRenderer: __webpack_require__(59),
	    WebGLManager: __webpack_require__(58),
	    ObjectRenderer: __webpack_require__(57),
	    RenderTarget: __webpack_require__(83),
	    Quad: __webpack_require__(84),

	    SpriteMaskFilter: __webpack_require__(61),
	    Filter: __webpack_require__(62),

	    glCore: __webpack_require__(64),

	    autoDetectRenderer: function autoDetectRenderer(width, height, options, noWebGL) {
	        width = width || 800;
	        height = height || 600;

	        if (!noWebGL && core.utils.isWebGLSupported()) {
	            return new core.WebGLRenderer(width, height, options);
	        }

	        return new core.CanvasRenderer(width, height, options);
	    }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = {
	  VERSION: '__VERSION__',

	  PI_2: Math.PI * 2,

	  RAD_TO_DEG: 180 / Math.PI,

	  DEG_TO_RAD: Math.PI / 180,

	  TARGET_FPMS: 0.06,

	  RENDERER_TYPE: {
	    UNKNOWN: 0,
	    WEBGL: 1,
	    CANVAS: 2
	  },

	  BLEND_MODES: {
	    NORMAL: 0,
	    ADD: 1,
	    MULTIPLY: 2,
	    SCREEN: 3,
	    OVERLAY: 4,
	    DARKEN: 5,
	    LIGHTEN: 6,
	    COLOR_DODGE: 7,
	    COLOR_BURN: 8,
	    HARD_LIGHT: 9,
	    SOFT_LIGHT: 10,
	    DIFFERENCE: 11,
	    EXCLUSION: 12,
	    HUE: 13,
	    SATURATION: 14,
	    COLOR: 15,
	    LUMINOSITY: 16
	  },

	  DRAW_MODES: {
	    POINTS: 0,
	    LINES: 1,
	    LINE_LOOP: 2,
	    LINE_STRIP: 3,
	    TRIANGLES: 4,
	    TRIANGLE_STRIP: 5,
	    TRIANGLE_FAN: 6
	  },

	  SCALE_MODES: {
	    DEFAULT: 0,
	    LINEAR: 0,
	    NEAREST: 1
	  },

	  WRAP_MODES: {
	    DEFAULT: 0,
	    CLAMP: 0,
	    REPEAT: 1,
	    MIRRORED_REPEAT: 2
	  },

	  GC_MODES: {
	    DEFAULT: 0,
	    AUTO: 0,
	    MANUAL: 1
	  },

	  MIPMAP_TEXTURES: true,

	  RETINA_PREFIX: /@(.+)x/,

	  RESOLUTION: 1,

	  FILTER_RESOLUTION: 1,

	  DEFAULT_RENDER_OPTIONS: {
	    view: null,
	    resolution: 1,
	    antialias: false,
	    forceFXAA: false,
	    autoResize: false,
	    transparent: false,
	    backgroundColor: 0x000000,
	    clearBeforeRender: true,
	    preserveDrawingBuffer: false,
	    roundPixels: false
	  },

	  SHAPES: {
	    POLY: 0,
	    RECT: 1,
	    CIRC: 2,
	    ELIP: 3,
	    RREC: 4
	  },

	  PRECISION: {
	    DEFAULT: 'mediump',
	    LOW: 'lowp',
	    MEDIUM: 'mediump',
	    HIGH: 'highp'
	  },

	  TRANSFORM_MODE: {
	    DEFAULT: 0,
	    STATIC: 0,
	    DYNAMIC: 1
	  },

	  TEXT_GRADIENT: {
	    LINEAR_VERTICAL: 0,
	    LINEAR_HORIZONTAL: 1
	  },

	  SPRITE_BATCH_SIZE: 4096,

	  SPRITE_MAX_TEXTURES: __webpack_require__(9)(32)
	};

	module.exports = CONST;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Device = __webpack_require__(10);

	var maxRecommendedTextures = function maxRecommendedTextures(max) {

		if (Device.tablet || Device.phone) {
			return 2;
		} else {
			return max;
		}
	};

	module.exports = maxRecommendedTextures;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {

	    var apple_phone = /iPhone/i,
	        apple_ipod = /iPod/i,
	        apple_tablet = /iPad/i,
	        android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
	        android_tablet = /Android/i,
	        amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone = /IEMobile/i,
	        windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
	        other_blackberry = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera = /Opera Mini/i,
	        other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
	        seven_inch = new RegExp('(?:' + 'Nexus 7' + '|' + 'BNTV250' + '|' + 'Kindle Fire' + '|' + 'Silk' + '|' + 'GT-P1000' + ')', 'i');

	    var match = function match(regex, userAgent) {
	        return regex.test(userAgent);
	    };

	    var IsMobileClass = function IsMobileClass(userAgent) {
	        var ua = userAgent || navigator.userAgent;

	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }

	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }

	        this.apple = {
	            phone: match(apple_phone, ua),
	            ipod: match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone: match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone: match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone: match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry: match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera: match(other_opera, ua),
	            firefox: match(other_firefox, ua),
	            chrome: match(other_chrome, ua),
	            device: match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };

	    var instantiate = function instantiate() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };

	    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
	        module.exports = IsMobileClass;
	    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
	        module.exports = instantiate();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }
	})(undefined);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    Point: __webpack_require__(12),
	    ObservablePoint: __webpack_require__(13),
	    Matrix: __webpack_require__(14),
	    GroupD8: __webpack_require__(15),

	    Circle: __webpack_require__(16),
	    Ellipse: __webpack_require__(18),
	    Polygon: __webpack_require__(19),
	    Rectangle: __webpack_require__(17),
	    RoundedRectangle: __webpack_require__(20)
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	function Point(x, y) {
	  this.x = x || 0;

	  this.y = y || 0;
	}

	Point.prototype.constructor = Point;
	module.exports = Point;

	Point.prototype.clone = function () {
	  return new Point(this.x, this.y);
	};

	Point.prototype.copy = function (p) {
	  this.set(p.x, p.y);
	};

	Point.prototype.equals = function (p) {
	  return p.x === this.x && p.y === this.y;
	};

	Point.prototype.set = function (x, y) {
	  this.x = x || 0;
	  this.y = y || (y !== 0 ? this.x : 0);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	function ObservablePoint(cb, scope, x, y) {
	    this._x = x || 0;
	    this._y = y || 0;

	    this.cb = cb;
	    this.scope = scope;
	}

	ObservablePoint.prototype.constructor = ObservablePoint;
	module.exports = ObservablePoint;

	Object.defineProperties(ObservablePoint.prototype, {
	    x: {
	        get: function get() {
	            return this._x;
	        },
	        set: function set(value) {
	            if (this._x !== value) {
	                this._x = value;
	                this.cb.call(this.scope);
	            }
	        }
	    },

	    y: {
	        get: function get() {
	            return this._y;
	        },
	        set: function set(value) {
	            if (this._y !== value) {
	                this._y = value;
	                this.cb.call(this.scope);
	            }
	        }
	    }
	});

	ObservablePoint.prototype.set = function (x, y) {
	    var _x = x || 0;
	    var _y = y || (y !== 0 ? _x : 0);
	    if (this._x !== _x || this._y !== _y) {
	        this._x = _x;
	        this._y = _y;
	        this.cb.call(this.scope);
	    }
	};

	ObservablePoint.prototype.copy = function (point) {
	    if (this._x !== point.x || this._y !== point.y) {
	        this._x = point.x;
	        this._y = point.y;
	        this.cb.call(this.scope);
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Point = __webpack_require__(12);

	function Matrix() {
	    this.a = 1;

	    this.b = 0;

	    this.c = 0;

	    this.d = 1;

	    this.tx = 0;

	    this.ty = 0;

	    this.array = null;
	}

	Matrix.prototype.constructor = Matrix;
	module.exports = Matrix;

	Matrix.prototype.fromArray = function (array) {
	    this.a = array[0];
	    this.b = array[1];
	    this.c = array[3];
	    this.d = array[4];
	    this.tx = array[2];
	    this.ty = array[5];
	};

	Matrix.prototype.set = function (a, b, c, d, tx, ty) {
	    this.a = a;
	    this.b = b;
	    this.c = c;
	    this.d = d;
	    this.tx = tx;
	    this.ty = ty;

	    return this;
	};

	Matrix.prototype.toArray = function (transpose, out) {
	    if (!this.array) {
	        this.array = new Float32Array(9);
	    }

	    var array = out || this.array;

	    if (transpose) {
	        array[0] = this.a;
	        array[1] = this.b;
	        array[2] = 0;
	        array[3] = this.c;
	        array[4] = this.d;
	        array[5] = 0;
	        array[6] = this.tx;
	        array[7] = this.ty;
	        array[8] = 1;
	    } else {
	        array[0] = this.a;
	        array[1] = this.c;
	        array[2] = this.tx;
	        array[3] = this.b;
	        array[4] = this.d;
	        array[5] = this.ty;
	        array[6] = 0;
	        array[7] = 0;
	        array[8] = 1;
	    }

	    return array;
	};

	Matrix.prototype.apply = function (pos, newPos) {
	    newPos = newPos || new Point();

	    var x = pos.x;
	    var y = pos.y;

	    newPos.x = this.a * x + this.c * y + this.tx;
	    newPos.y = this.b * x + this.d * y + this.ty;

	    return newPos;
	};

	Matrix.prototype.applyInverse = function (pos, newPos) {
	    newPos = newPos || new Point();

	    var id = 1 / (this.a * this.d + this.c * -this.b);

	    var x = pos.x;
	    var y = pos.y;

	    newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
	    newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

	    return newPos;
	};

	Matrix.prototype.translate = function (x, y) {
	    this.tx += x;
	    this.ty += y;

	    return this;
	};

	Matrix.prototype.scale = function (x, y) {
	    this.a *= x;
	    this.d *= y;
	    this.c *= x;
	    this.b *= y;
	    this.tx *= x;
	    this.ty *= y;

	    return this;
	};

	Matrix.prototype.rotate = function (angle) {
	    var cos = Math.cos(angle);
	    var sin = Math.sin(angle);

	    var a1 = this.a;
	    var c1 = this.c;
	    var tx1 = this.tx;

	    this.a = a1 * cos - this.b * sin;
	    this.b = a1 * sin + this.b * cos;
	    this.c = c1 * cos - this.d * sin;
	    this.d = c1 * sin + this.d * cos;
	    this.tx = tx1 * cos - this.ty * sin;
	    this.ty = tx1 * sin + this.ty * cos;

	    return this;
	};

	Matrix.prototype.append = function (matrix) {
	    var a1 = this.a;
	    var b1 = this.b;
	    var c1 = this.c;
	    var d1 = this.d;

	    this.a = matrix.a * a1 + matrix.b * c1;
	    this.b = matrix.a * b1 + matrix.b * d1;
	    this.c = matrix.c * a1 + matrix.d * c1;
	    this.d = matrix.c * b1 + matrix.d * d1;

	    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
	    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

	    return this;
	};

	Matrix.prototype.setTransform = function (x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
	    var a, b, c, d, sr, cr, cy, sy, nsx, cx;

	    sr = Math.sin(rotation);
	    cr = Math.cos(rotation);
	    cy = Math.cos(skewY);
	    sy = Math.sin(skewY);
	    nsx = -Math.sin(skewX);
	    cx = Math.cos(skewX);

	    a = cr * scaleX;
	    b = sr * scaleX;
	    c = -sr * scaleY;
	    d = cr * scaleY;

	    this.a = cy * a + sy * c;
	    this.b = cy * b + sy * d;
	    this.c = nsx * a + cx * c;
	    this.d = nsx * b + cx * d;

	    this.tx = x + (pivotX * a + pivotY * c);
	    this.ty = y + (pivotX * b + pivotY * d);

	    return this;
	};

	Matrix.prototype.prepend = function (matrix) {
	    var tx1 = this.tx;

	    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
	        var a1 = this.a;
	        var c1 = this.c;
	        this.a = a1 * matrix.a + this.b * matrix.c;
	        this.b = a1 * matrix.b + this.b * matrix.d;
	        this.c = c1 * matrix.a + this.d * matrix.c;
	        this.d = c1 * matrix.b + this.d * matrix.d;
	    }

	    this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
	    this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;

	    return this;
	};

	Matrix.prototype.decompose = function (transform) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d;

	    var skewX = Math.atan2(-c, d);
	    var skewY = Math.atan2(b, a);

	    var delta = Math.abs(1 - skewX / skewY);

	    if (delta < 0.00001) {
	        transform.rotation = skewY;

	        if (a < 0 && d >= 0) {
	            transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
	        }

	        transform.skew.x = transform.skew.y = 0;
	    } else {
	        transform.skew.x = skewX;
	        transform.skew.y = skewY;
	    }

	    transform.scale.x = Math.sqrt(a * a + b * b);
	    transform.scale.y = Math.sqrt(c * c + d * d);

	    transform.position.x = this.tx;
	    transform.position.y = this.ty;

	    return transform;
	};

	Matrix.prototype.invert = function () {
	    var a1 = this.a;
	    var b1 = this.b;
	    var c1 = this.c;
	    var d1 = this.d;
	    var tx1 = this.tx;
	    var n = a1 * d1 - b1 * c1;

	    this.a = d1 / n;
	    this.b = -b1 / n;
	    this.c = -c1 / n;
	    this.d = a1 / n;
	    this.tx = (c1 * this.ty - d1 * tx1) / n;
	    this.ty = -(a1 * this.ty - b1 * tx1) / n;

	    return this;
	};

	Matrix.prototype.identity = function () {
	    this.a = 1;
	    this.b = 0;
	    this.c = 0;
	    this.d = 1;
	    this.tx = 0;
	    this.ty = 0;

	    return this;
	};

	Matrix.prototype.clone = function () {
	    var matrix = new Matrix();
	    matrix.a = this.a;
	    matrix.b = this.b;
	    matrix.c = this.c;
	    matrix.d = this.d;
	    matrix.tx = this.tx;
	    matrix.ty = this.ty;

	    return matrix;
	};

	Matrix.prototype.copy = function (matrix) {
	    matrix.a = this.a;
	    matrix.b = this.b;
	    matrix.c = this.c;
	    matrix.d = this.d;
	    matrix.tx = this.tx;
	    matrix.ty = this.ty;

	    return matrix;
	};

	Matrix.IDENTITY = new Matrix();

	Matrix.TEMP_MATRIX = new Matrix();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
	var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
	var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
	var tempMatrices = [];
	var Matrix = __webpack_require__(14);

	var mul = [];

	function signum(x) {
	    if (x < 0) {
	        return -1;
	    }
	    if (x > 0) {
	        return 1;
	    }
	    return 0;
	}

	function init() {
	    for (var i = 0; i < 16; i++) {
	        var row = [];
	        mul.push(row);
	        for (var j = 0; j < 16; j++) {
	            var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
	            var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
	            var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
	            var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
	            for (var k = 0; k < 16; k++) {
	                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
	                    row.push(k);
	                    break;
	                }
	            }
	        }
	    }

	    for (i = 0; i < 16; i++) {
	        var mat = new Matrix();
	        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
	        tempMatrices.push(mat);
	    }
	}

	init();

	var GroupD8 = {
	    E: 0,
	    SE: 1,
	    S: 2,
	    SW: 3,
	    W: 4,
	    NW: 5,
	    N: 6,
	    NE: 7,
	    MIRROR_VERTICAL: 8,
	    MIRROR_HORIZONTAL: 12,
	    uX: function uX(ind) {
	        return ux[ind];
	    },
	    uY: function uY(ind) {
	        return uy[ind];
	    },
	    vX: function vX(ind) {
	        return vx[ind];
	    },
	    vY: function vY(ind) {
	        return vy[ind];
	    },
	    inv: function inv(rotation) {
	        if (rotation & 8) {
	            return rotation & 15;
	        }
	        return -rotation & 7;
	    },
	    add: function add(rotationSecond, rotationFirst) {
	        return mul[rotationSecond][rotationFirst];
	    },
	    sub: function sub(rotationSecond, rotationFirst) {
	        return mul[rotationSecond][GroupD8.inv(rotationFirst)];
	    },

	    rotate180: function rotate180(rotation) {
	        return rotation ^ 4;
	    },

	    isSwapWidthHeight: function isSwapWidthHeight(rotation) {
	        return (rotation & 3) === 2;
	    },
	    byDirection: function byDirection(dx, dy) {
	        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
	            if (dy >= 0) {
	                return GroupD8.S;
	            } else {
	                return GroupD8.N;
	            }
	        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
	            if (dx > 0) {
	                return GroupD8.E;
	            } else {
	                return GroupD8.W;
	            }
	        } else {
	            if (dy > 0) {
	                if (dx > 0) {
	                    return GroupD8.SE;
	                } else {
	                    return GroupD8.SW;
	                }
	            } else if (dx > 0) {
	                return GroupD8.NE;
	            } else {
	                return GroupD8.NW;
	            }
	        }
	    },

	    matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation, tx, ty) {
	        var mat = tempMatrices[GroupD8.inv(rotation)];
	        tx = tx || 0;
	        ty = ty || 0;
	        mat.tx = tx;
	        mat.ty = ty;
	        matrix.append(mat);
	    }
	};

	module.exports = GroupD8;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Rectangle = __webpack_require__(17),
	    CONST = __webpack_require__(8);

	function Circle(x, y, radius) {
	  this.x = x || 0;

	  this.y = y || 0;

	  this.radius = radius || 0;

	  this.type = CONST.SHAPES.CIRC;
	}

	Circle.prototype.constructor = Circle;
	module.exports = Circle;

	Circle.prototype.clone = function () {
	  return new Circle(this.x, this.y, this.radius);
	};

	Circle.prototype.contains = function (x, y) {
	  if (this.radius <= 0) {
	    return false;
	  }

	  var dx = this.x - x,
	      dy = this.y - y,
	      r2 = this.radius * this.radius;

	  dx *= dx;
	  dy *= dy;

	  return dx + dy <= r2;
	};

	Circle.prototype.getBounds = function () {
	  return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function Rectangle(x, y, width, height) {
	    this.x = x || 0;

	    this.y = y || 0;

	    this.width = width || 0;

	    this.height = height || 0;

	    this.type = CONST.SHAPES.RECT;
	}

	Rectangle.prototype.constructor = Rectangle;
	module.exports = Rectangle;

	Rectangle.EMPTY = new Rectangle(0, 0, 0, 0);

	Rectangle.prototype.clone = function () {
	    return new Rectangle(this.x, this.y, this.width, this.height);
	};

	Rectangle.prototype.copy = function (rectangle) {
	    this.x = rectangle.x;
	    this.y = rectangle.y;
	    this.width = rectangle.width;
	    this.height = rectangle.height;

	    return this;
	};

	Rectangle.prototype.contains = function (x, y) {
	    if (this.width <= 0 || this.height <= 0) {
	        return false;
	    }

	    if (x >= this.x && x < this.x + this.width) {
	        if (y >= this.y && y < this.y + this.height) {
	            return true;
	        }
	    }

	    return false;
	};

	Rectangle.prototype.pad = function (paddingX, paddingY) {
	    paddingX = paddingX || 0;
	    paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);

	    this.x -= paddingX;
	    this.y -= paddingY;

	    this.width += paddingX * 2;
	    this.height += paddingY * 2;
	};

	Rectangle.prototype.fit = function (rectangle) {
	    if (this.x < rectangle.x) {
	        this.width += this.x;
	        if (this.width < 0) {
	            this.width = 0;
	        }

	        this.x = rectangle.x;
	    }

	    if (this.y < rectangle.y) {
	        this.height += this.y;
	        if (this.height < 0) {
	            this.height = 0;
	        }
	        this.y = rectangle.y;
	    }

	    if (this.x + this.width > rectangle.x + rectangle.width) {
	        this.width = rectangle.width - this.x;
	        if (this.width < 0) {
	            this.width = 0;
	        }
	    }

	    if (this.y + this.height > rectangle.y + rectangle.height) {
	        this.height = rectangle.height - this.y;
	        if (this.height < 0) {
	            this.height = 0;
	        }
	    }
	};

	Rectangle.prototype.enlarge = function (rect) {

	    if (rect === Rectangle.EMPTY) {
	        return;
	    }

	    var x1 = Math.min(this.x, rect.x);
	    var x2 = Math.max(this.x + this.width, rect.x + rect.width);
	    var y1 = Math.min(this.y, rect.y);
	    var y2 = Math.max(this.y + this.height, rect.y + rect.height);
	    this.x = x1;
	    this.width = x2 - x1;
	    this.y = y1;
	    this.height = y2 - y1;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Rectangle = __webpack_require__(17),
	    CONST = __webpack_require__(8);

	function Ellipse(x, y, width, height) {
	  this.x = x || 0;

	  this.y = y || 0;

	  this.width = width || 0;

	  this.height = height || 0;

	  this.type = CONST.SHAPES.ELIP;
	}

	Ellipse.prototype.constructor = Ellipse;
	module.exports = Ellipse;

	Ellipse.prototype.clone = function () {
	  return new Ellipse(this.x, this.y, this.width, this.height);
	};

	Ellipse.prototype.contains = function (x, y) {
	  if (this.width <= 0 || this.height <= 0) {
	    return false;
	  }

	  var normx = (x - this.x) / this.width,
	      normy = (y - this.y) / this.height;

	  normx *= normx;
	  normy *= normy;

	  return normx + normy <= 1;
	};

	Ellipse.prototype.getBounds = function () {
	  return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Point = __webpack_require__(12),
	    CONST = __webpack_require__(8);

	function Polygon(points_) {
	    var points = points_;

	    if (!Array.isArray(points)) {
	        points = new Array(arguments.length);

	        for (var a = 0; a < points.length; ++a) {
	            points[a] = arguments[a];
	        }
	    }

	    if (points[0] instanceof Point) {
	        var p = [];
	        for (var i = 0, il = points.length; i < il; i++) {
	            p.push(points[i].x, points[i].y);
	        }

	        points = p;
	    }

	    this.closed = true;

	    this.points = points;

	    this.type = CONST.SHAPES.POLY;
	}

	Polygon.prototype.constructor = Polygon;
	module.exports = Polygon;

	Polygon.prototype.clone = function () {
	    return new Polygon(this.points.slice());
	};

	Polygon.prototype.close = function () {
	    var points = this.points;

	    if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	        points.push(points[0], points[1]);
	    }
	};

	Polygon.prototype.contains = function (x, y) {
	    var inside = false;

	    var length = this.points.length / 2;

	    for (var i = 0, j = length - 1; i < length; j = i++) {
	        var xi = this.points[i * 2],
	            yi = this.points[i * 2 + 1],
	            xj = this.points[j * 2],
	            yj = this.points[j * 2 + 1],
	            intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;

	        if (intersect) {
	            inside = !inside;
	        }
	    }

	    return inside;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function RoundedRectangle(x, y, width, height, radius) {
	  this.x = x || 0;

	  this.y = y || 0;

	  this.width = width || 0;

	  this.height = height || 0;

	  this.radius = radius || 20;

	  this.type = CONST.SHAPES.RREC;
	}

	RoundedRectangle.prototype.constructor = RoundedRectangle;
	module.exports = RoundedRectangle;

	RoundedRectangle.prototype.clone = function () {
	  return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
	};

	RoundedRectangle.prototype.contains = function (x, y) {
	  if (this.width <= 0 || this.height <= 0) {
	    return false;
	  }

	  if (x >= this.x && x <= this.x + this.width) {
	    if (y >= this.y && y <= this.y + this.height) {
	      return true;
	    }
	  }

	  return false;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	var utils = module.exports = {
	    _uid: 0,
	    _saidHello: false,

	    EventEmitter: __webpack_require__(22),
	    pluginTarget: __webpack_require__(23),

	    uid: function uid() {
	        return ++utils._uid;
	    },

	    hex2rgb: function hex2rgb(hex, out) {
	        out = out || [];

	        out[0] = (hex >> 16 & 0xFF) / 255;
	        out[1] = (hex >> 8 & 0xFF) / 255;
	        out[2] = (hex & 0xFF) / 255;

	        return out;
	    },

	    hex2string: function hex2string(hex) {
	        hex = hex.toString(16);
	        hex = '000000'.substr(0, 6 - hex.length) + hex;

	        return '#' + hex;
	    },

	    rgb2hex: function rgb2hex(rgb) {
	        return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255;
	    },

	    getResolutionOfUrl: function getResolutionOfUrl(url) {
	        var resolution = CONST.RETINA_PREFIX.exec(url);

	        if (resolution) {
	            return parseFloat(resolution[1]);
	        }

	        return 1;
	    },

	    sayHello: function sayHello(type) {
	        if (utils._saidHello) {
	            return;
	        }

	        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
	            var args = ['\n %c %c %c Pixi.js ' + CONST.VERSION + ' - ✰ ' + type + ' ✰  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];

	            window.console.log.apply(console, args);
	        } else if (window.console) {
	            window.console.log('Pixi.js ' + CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/');
	        }

	        utils._saidHello = true;
	    },

	    isWebGLSupported: function isWebGLSupported() {
	        var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };
	        try {
	            if (!window.WebGLRenderingContext) {
	                return false;
	            }

	            var canvas = document.createElement('canvas'),
	                gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

	            var success = !!(gl && gl.getContextAttributes().stencil);
	            if (gl) {
	                var loseContext = gl.getExtension('WEBGL_lose_context');

	                if (loseContext) {
	                    loseContext.loseContext();
	                }
	            }
	            gl = null;

	            return success;
	        } catch (e) {
	            return false;
	        }
	    },

	    sign: function sign(n) {
	        return n ? n < 0 ? -1 : 1 : 0;
	    },

	    removeItems: function removeItems(arr, startIdx, removeCount) {
	        var length = arr.length;

	        if (startIdx >= length || removeCount === 0) {
	            return;
	        }

	        removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
	        for (var i = startIdx, len = length - removeCount; i < len; ++i) {
	            arr[i] = arr[i + removeCount];
	        }

	        arr.length = len;
	    },

	    TextureCache: {},

	    BaseTextureCache: {}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	var prefix = typeof Object.create !== 'function' ? '~' : false;

	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	function EventEmitter() {}

	EventEmitter.prototype._events = undefined;

	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events,
	      names = [],
	      name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event,
	      available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1:
	        return listeners.fn.call(listeners.context), true;
	      case 2:
	        return listeners.fn.call(listeners.context, a1), true;
	      case 3:
	        return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4:
	        return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len - 1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length,
	        j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1:
	          listeners[i].fn.call(listeners[i].context);break;
	        case 2:
	          listeners[i].fn.call(listeners[i].context, a1);break;
	        case 3:
	          listeners[i].fn.call(listeners[i].context, a1, a2);break;
	        default:
	          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt],
	      events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	EventEmitter.prefixed = prefix;

	if (true) {
	  module.exports = EventEmitter;
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	function pluginTarget(obj) {
	    obj.__plugins = {};

	    obj.registerPlugin = function (pluginName, ctor) {
	        obj.__plugins[pluginName] = ctor;
	    };

	    obj.prototype.initPlugins = function () {
	        this.plugins = this.plugins || {};

	        for (var o in obj.__plugins) {
	            this.plugins[o] = new obj.__plugins[o](this);
	        }
	    };

	    obj.prototype.destroyPlugins = function () {
	        for (var o in this.plugins) {
	            this.plugins[o].destroy();
	            this.plugins[o] = null;
	        }

	        this.plugins = null;
	    };
	}

	module.exports = {
	    mixin: function mixin(obj) {
	        pluginTarget(obj);
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Ticker = __webpack_require__(25);

	var shared = new Ticker();
	shared.autoStart = true;

	module.exports = {
	  shared: shared,
	  Ticker: Ticker
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8),
	    EventEmitter = __webpack_require__(22),
	    TICK = 'tick';

	function Ticker() {
	    var _this = this;

	    this._tick = function _tick(time) {

	        _this._requestId = null;

	        if (_this.started) {
	            _this.update(time);

	            if (_this.started && _this._requestId === null && _this._emitter.listeners(TICK, true)) {
	                _this._requestId = requestAnimationFrame(_this._tick);
	            }
	        }
	    };

	    this._emitter = new EventEmitter();

	    this._requestId = null;

	    this._maxElapsedMS = 100;

	    this.autoStart = false;

	    this.deltaTime = 1;

	    this.elapsedMS = 1 / CONST.TARGET_FPMS;
	    this.lastTime = 0;

	    this.speed = 1;

	    this.started = false;
	}

	Object.defineProperties(Ticker.prototype, {
	    FPS: {
	        get: function get() {
	            return 1000 / this.elapsedMS;
	        }
	    },

	    minFPS: {
	        get: function get() {
	            return 1000 / this._maxElapsedMS;
	        },
	        set: function set(fps) {
	            var minFPMS = Math.min(Math.max(0, fps) / 1000, CONST.TARGET_FPMS);
	            this._maxElapsedMS = 1 / minFPMS;
	        }
	    }
	});

	Ticker.prototype._requestIfNeeded = function _requestIfNeeded() {
	    if (this._requestId === null && this._emitter.listeners(TICK, true)) {
	        this.lastTime = performance.now();
	        this._requestId = requestAnimationFrame(this._tick);
	    }
	};

	Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded() {
	    if (this._requestId !== null) {
	        cancelAnimationFrame(this._requestId);
	        this._requestId = null;
	    }
	};

	Ticker.prototype._startIfPossible = function _startIfPossible() {
	    if (this.started) {
	        this._requestIfNeeded();
	    } else if (this.autoStart) {
	        this.start();
	    }
	};

	Ticker.prototype.add = function add(fn, context) {
	    this._emitter.on(TICK, fn, context);

	    this._startIfPossible();

	    return this;
	};

	Ticker.prototype.addOnce = function addOnce(fn, context) {
	    this._emitter.once(TICK, fn, context);

	    this._startIfPossible();

	    return this;
	};

	Ticker.prototype.remove = function remove(fn, context) {
	    this._emitter.off(TICK, fn, context);

	    if (!this._emitter.listeners(TICK, true)) {
	        this._cancelIfNeeded();
	    }

	    return this;
	};

	Ticker.prototype.start = function start() {
	    if (!this.started) {
	        this.started = true;
	        this._requestIfNeeded();
	    }
	};

	Ticker.prototype.stop = function stop() {
	    if (this.started) {
	        this.started = false;
	        this._cancelIfNeeded();
	    }
	};

	Ticker.prototype.update = function update(currentTime) {
	    var elapsedMS;

	    currentTime = currentTime || performance.now();

	    if (currentTime > this.lastTime) {
	        elapsedMS = this.elapsedMS = currentTime - this.lastTime;

	        if (elapsedMS > this._maxElapsedMS) {
	            elapsedMS = this._maxElapsedMS;
	        }

	        this.deltaTime = elapsedMS * CONST.TARGET_FPMS * this.speed;

	        this._emitter.emit(TICK, this.deltaTime);
	    } else {
	        this.deltaTime = this.elapsedMS = 0;
	    }

	    this.lastTime = currentTime;
	};

	module.exports = Ticker;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(22),
	    CONST = __webpack_require__(8),
	    TransformStatic = __webpack_require__(27),
	    Transform = __webpack_require__(29),
	    Bounds = __webpack_require__(30),
	    math = __webpack_require__(11),
	    _tempDisplayObjectParent = new DisplayObject();

	function DisplayObject() {
	    EventEmitter.call(this);

	    var TransformClass = CONST.TRANSFORM_MODE.DEFAULT === CONST.TRANSFORM_MODE.STATIC ? TransformStatic : Transform;

	    this.transform = new TransformClass();

	    this.alpha = 1;

	    this.visible = true;

	    this.renderable = true;

	    this.parent = null;

	    this.worldAlpha = 1;

	    this.filterArea = null;

	    this._filters = null;
	    this._enabledFilters = null;

	    this._bounds = new Bounds();
	    this._boundsID = 0;
	    this._lastBoundsID = -1;
	    this._boundsRect = null;
	    this._localBoundsRect = null;

	    this._mask = null;
	}

	DisplayObject.prototype = Object.create(EventEmitter.prototype);
	DisplayObject.prototype.constructor = DisplayObject;
	module.exports = DisplayObject;

	Object.defineProperties(DisplayObject.prototype, {
	    x: {
	        get: function get() {
	            return this.position.x;
	        },
	        set: function set(value) {
	            this.transform.position.x = value;
	        }
	    },

	    y: {
	        get: function get() {
	            return this.position.y;
	        },
	        set: function set(value) {
	            this.transform.position.y = value;
	        }
	    },

	    worldTransform: {
	        get: function get() {
	            return this.transform.worldTransform;
	        }
	    },

	    localTransform: {
	        get: function get() {
	            return this.transform.localTransform;
	        }
	    },

	    position: {
	        get: function get() {
	            return this.transform.position;
	        },
	        set: function set(value) {
	            this.transform.position.copy(value);
	        }
	    },

	    scale: {
	        get: function get() {
	            return this.transform.scale;
	        },
	        set: function set(value) {
	            this.transform.scale.copy(value);
	        }
	    },

	    pivot: {
	        get: function get() {
	            return this.transform.pivot;
	        },
	        set: function set(value) {
	            this.transform.pivot.copy(value);
	        }
	    },

	    skew: {
	        get: function get() {
	            return this.transform.skew;
	        },
	        set: function set(value) {
	            this.transform.skew.copy(value);
	        }
	    },

	    rotation: {
	        get: function get() {
	            return this.transform.rotation;
	        },
	        set: function set(value) {
	            this.transform.rotation = value;
	        }
	    },

	    worldVisible: {
	        get: function get() {
	            var item = this;

	            do {
	                if (!item.visible) {
	                    return false;
	                }

	                item = item.parent;
	            } while (item);

	            return true;
	        }
	    },

	    mask: {
	        get: function get() {
	            return this._mask;
	        },
	        set: function set(value) {
	            if (this._mask) {
	                this._mask.renderable = true;
	            }

	            this._mask = value;

	            if (this._mask) {
	                this._mask.renderable = false;
	            }
	        }
	    },

	    filters: {
	        get: function get() {
	            return this._filters && this._filters.slice();
	        },
	        set: function set(value) {
	            this._filters = value && value.slice();
	        }
	    }

	});

	DisplayObject.prototype.updateTransform = function () {
	    this.transform.updateTransform(this.parent.transform);

	    this.worldAlpha = this.alpha * this.parent.worldAlpha;

	    this._bounds.updateID++;
	};

	DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

	DisplayObject.prototype._recursivePostUpdateTransform = function () {
	    if (this.parent) {
	        this.parent._recursivePostUpdateTransform();
	        this.transform.updateTransform(this.parent.transform);
	    } else {
	        this.transform.updateTransform(_tempDisplayObjectParent.transform);
	    }
	};

	DisplayObject.prototype.getBounds = function (skipUpdate, rect) {
	    if (!skipUpdate) {
	        if (!this.parent) {
	            this.parent = _tempDisplayObjectParent;
	            this.parent.transform._worldID++;
	            this.updateTransform();
	            this.parent = null;
	        } else {
	            this._recursivePostUpdateTransform();
	            this.updateTransform();
	        }
	    }

	    if (this._boundsID !== this._lastBoundsID) {
	        this.calculateBounds();
	    }

	    if (!rect) {
	        if (!this._boundsRect) {
	            this._boundsRect = new math.Rectangle();
	        }

	        rect = this._boundsRect;
	    }

	    return this._bounds.getRectangle(rect);
	};

	DisplayObject.prototype.getLocalBounds = function (rect) {
	    var transformRef = this.transform;
	    var parentRef = this.parent;

	    this.parent = null;
	    this.transform = _tempDisplayObjectParent.transform;

	    if (!rect) {
	        if (!this._localBoundsRect) {
	            this._localBoundsRect = new math.Rectangle();
	        }

	        rect = this._localBoundsRect;
	    }

	    var bounds = this.getBounds(false, rect);

	    this.parent = parentRef;
	    this.transform = transformRef;

	    return bounds;
	};

	DisplayObject.prototype.toGlobal = function (position, point, skipUpdate) {
	    if (!skipUpdate) {
	        this._recursivePostUpdateTransform();

	        if (!this.parent) {
	            this.parent = _tempDisplayObjectParent;
	            this.displayObjectUpdateTransform();
	            this.parent = null;
	        } else {
	            this.displayObjectUpdateTransform();
	        }
	    }

	    return this.worldTransform.apply(position, point);
	};

	DisplayObject.prototype.toLocal = function (position, from, point, skipUpdate) {
	    if (from) {
	        position = from.toGlobal(position, point, skipUpdate);
	    }

	    if (!skipUpdate) {
	        this._recursivePostUpdateTransform();

	        if (!this.parent) {
	            this.parent = _tempDisplayObjectParent;
	            this.displayObjectUpdateTransform();
	            this.parent = null;
	        } else {
	            this.displayObjectUpdateTransform();
	        }
	    }

	    return this.worldTransform.applyInverse(position, point);
	};

	DisplayObject.prototype.renderWebGL = function (renderer) {};

	DisplayObject.prototype.renderCanvas = function (renderer) {};

	DisplayObject.prototype.setParent = function (container) {
	    if (!container || !container.addChild) {
	        throw new Error('setParent: Argument must be a Container');
	    }

	    container.addChild(this);
	    return container;
	};

	DisplayObject.prototype.setTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) {
	    this.position.x = x || 0;
	    this.position.y = y || 0;
	    this.scale.x = !scaleX ? 1 : scaleX;
	    this.scale.y = !scaleY ? 1 : scaleY;
	    this.rotation = rotation || 0;
	    this.skew.x = skewX || 0;
	    this.skew.y = skewY || 0;
	    this.pivot.x = pivotX || 0;
	    this.pivot.y = pivotY || 0;
	    return this;
	};

	DisplayObject.prototype.destroy = function () {
	    this.removeAllListeners();
	    if (this.parent) {
	        this.parent.removeChild(this);
	    }
	    this.transform = null;

	    this.parent = null;

	    this._bounds = null;
	    this._currentBounds = null;
	    this._mask = null;

	    this.filterArea = null;

	    this.interactive = false;
	    this.interactiveChildren = false;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    TransformBase = __webpack_require__(28);

	function TransformStatic() {
	    TransformBase.call(this);

	    this.position = new math.ObservablePoint(this.onChange, this, 0, 0);

	    this.scale = new math.ObservablePoint(this.onChange, this, 1, 1);

	    this.pivot = new math.ObservablePoint(this.onChange, this, 0, 0);

	    this.skew = new math.ObservablePoint(this.updateSkew, this, 0, 0);

	    this._rotation = 0;

	    this._sr = Math.sin(0);
	    this._cr = Math.cos(0);
	    this._cy = Math.cos(0);
	    this._sy = Math.sin(0);
	    this._nsx = Math.sin(0);
	    this._cx = Math.cos(0);

	    this._localID = 0;
	    this._currentLocalID = 0;
	}

	TransformStatic.prototype = Object.create(TransformBase.prototype);
	TransformStatic.prototype.constructor = TransformStatic;

	TransformStatic.prototype.onChange = function () {
	    this._localID++;
	};

	TransformStatic.prototype.updateSkew = function () {
	    this._cy = Math.cos(this.skew._y);
	    this._sy = Math.sin(this.skew._y);
	    this._nsx = Math.sin(this.skew._x);
	    this._cx = Math.cos(this.skew._x);

	    this._localID++;
	};

	TransformStatic.prototype.updateLocalTransform = function () {
	    var lt = this.localTransform;
	    if (this._localID !== this._currentLocalID) {
	        var a, b, c, d;

	        a = this._cr * this.scale._x;
	        b = this._sr * this.scale._x;
	        c = -this._sr * this.scale._y;
	        d = this._cr * this.scale._y;

	        lt.a = this._cy * a + this._sy * c;
	        lt.b = this._cy * b + this._sy * d;
	        lt.c = this._nsx * a + this._cx * c;
	        lt.d = this._nsx * b + this._cx * d;

	        lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
	        lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
	        this._currentLocalID = this._localID;

	        this._parentID = -1;
	    }
	};

	TransformStatic.prototype.updateTransform = function (parentTransform) {
	    var pt = parentTransform.worldTransform;
	    var wt = this.worldTransform;
	    var lt = this.localTransform;

	    if (this._localID !== this._currentLocalID) {
	        var a, b, c, d;

	        a = this._cr * this.scale._x;
	        b = this._sr * this.scale._x;
	        c = -this._sr * this.scale._y;
	        d = this._cr * this.scale._y;

	        lt.a = this._cy * a + this._sy * c;
	        lt.b = this._cy * b + this._sy * d;
	        lt.c = this._nsx * a + this._cx * c;
	        lt.d = this._nsx * b + this._cx * d;

	        lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
	        lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
	        this._currentLocalID = this._localID;

	        this._parentID = -1;
	    }

	    if (this._parentID !== parentTransform._worldID) {
	        wt.a = lt.a * pt.a + lt.b * pt.c;
	        wt.b = lt.a * pt.b + lt.b * pt.d;
	        wt.c = lt.c * pt.a + lt.d * pt.c;
	        wt.d = lt.c * pt.b + lt.d * pt.d;
	        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

	        this._parentID = parentTransform._worldID;

	        this._worldID++;
	    }
	};

	TransformStatic.prototype.setFromMatrix = function (matrix) {
	    matrix.decompose(this);
	    this._localID++;
	};

	Object.defineProperties(TransformStatic.prototype, {
	    rotation: {
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(value) {
	            this._rotation = value;
	            this._sr = Math.sin(value);
	            this._cr = Math.cos(value);
	            this._localID++;
	        }
	    }
	});

	module.exports = TransformStatic;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11);

	function TransformBase() {
	  this.worldTransform = new math.Matrix();

	  this.localTransform = new math.Matrix();

	  this._worldID = 0;
	}

	TransformBase.prototype.constructor = TransformBase;

	TransformBase.prototype.updateLocalTransform = function () {};

	TransformBase.prototype.updateTransform = function (parentTransform) {
	  var pt = parentTransform.worldTransform;
	  var wt = this.worldTransform;
	  var lt = this.localTransform;

	  wt.a = lt.a * pt.a + lt.b * pt.c;
	  wt.b = lt.a * pt.b + lt.b * pt.d;
	  wt.c = lt.c * pt.a + lt.d * pt.c;
	  wt.d = lt.c * pt.b + lt.d * pt.d;
	  wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	  wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

	  this._worldID++;
	};

	TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;

	TransformBase.IDENTITY = new TransformBase();

	module.exports = TransformBase;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    TransformBase = __webpack_require__(28);

	function Transform() {
	    TransformBase.call(this);

	    this.position = new math.Point(0, 0);

	    this.scale = new math.Point(1, 1);

	    this.skew = new math.ObservablePoint(this.updateSkew, this, 0, 0);

	    this.pivot = new math.Point(0, 0);

	    this._rotation = 0;

	    this._sr = Math.sin(0);
	    this._cr = Math.cos(0);
	    this._cy = Math.cos(0);
	    this._sy = Math.sin(0);
	    this._nsx = Math.sin(0);
	    this._cx = Math.cos(0);
	}

	Transform.prototype = Object.create(TransformBase.prototype);
	Transform.prototype.constructor = Transform;

	Transform.prototype.updateSkew = function () {
	    this._cy = Math.cos(this.skew.y);
	    this._sy = Math.sin(this.skew.y);
	    this._nsx = Math.sin(this.skew.x);
	    this._cx = Math.cos(this.skew.x);
	};

	Transform.prototype.updateLocalTransform = function () {
	    var lt = this.localTransform;
	    var a, b, c, d;

	    a = this._cr * this.scale.x;
	    b = this._sr * this.scale.x;
	    c = -this._sr * this.scale.y;
	    d = this._cr * this.scale.y;

	    lt.a = this._cy * a + this._sy * c;
	    lt.b = this._cy * b + this._sy * d;
	    lt.c = this._nsx * a + this._cx * c;
	    lt.d = this._nsx * b + this._cx * d;
	};

	Transform.prototype.updateTransform = function (parentTransform) {

	    var pt = parentTransform.worldTransform;
	    var wt = this.worldTransform;
	    var lt = this.localTransform;
	    var a, b, c, d;

	    a = this._cr * this.scale.x;
	    b = this._sr * this.scale.x;
	    c = -this._sr * this.scale.y;
	    d = this._cr * this.scale.y;

	    lt.a = this._cy * a + this._sy * c;
	    lt.b = this._cy * b + this._sy * d;
	    lt.c = this._nsx * a + this._cx * c;
	    lt.d = this._nsx * b + this._cx * d;

	    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
	    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);

	    wt.a = lt.a * pt.a + lt.b * pt.c;
	    wt.b = lt.a * pt.b + lt.b * pt.d;
	    wt.c = lt.c * pt.a + lt.d * pt.c;
	    wt.d = lt.c * pt.b + lt.d * pt.d;
	    wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
	    wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

	    this._worldID++;
	};

	Transform.prototype.setFromMatrix = function (matrix) {
	    matrix.decompose(this);
	};

	Object.defineProperties(Transform.prototype, {
	    rotation: {
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(value) {
	            this._rotation = value;
	            this._sr = Math.sin(value);
	            this._cr = Math.cos(value);
	        }
	    }
	});

	module.exports = Transform;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    Rectangle = math.Rectangle;

	function Bounds() {
	    this.minX = Infinity;

	    this.minY = Infinity;

	    this.maxX = -Infinity;

	    this.maxY = -Infinity;

	    this.rect = null;
	}

	Bounds.prototype.constructor = Bounds;
	module.exports = Bounds;

	Bounds.prototype.isEmpty = function () {
	    return this.minX > this.maxX || this.minY > this.maxY;
	};

	Bounds.prototype.clear = function () {
	    this.updateID++;

	    this.minX = Infinity;
	    this.minY = Infinity;
	    this.maxX = -Infinity;
	    this.maxY = -Infinity;
	};

	Bounds.prototype.getRectangle = function (rect) {
	    if (this.minX > this.maxX || this.minY > this.maxY) {
	        return Rectangle.EMPTY;
	    }

	    rect = rect || new Rectangle(0, 0, 1, 1);

	    rect.x = this.minX;
	    rect.y = this.minY;
	    rect.width = this.maxX - this.minX;
	    rect.height = this.maxY - this.minY;

	    return rect;
	};

	Bounds.prototype.addPoint = function (point) {
	    this.minX = Math.min(this.minX, point.x);
	    this.maxX = Math.max(this.maxX, point.x);
	    this.minY = Math.min(this.minY, point.y);
	    this.maxY = Math.max(this.maxY, point.y);
	};

	Bounds.prototype.addQuad = function (vertices) {
	    var minX = this.minX,
	        minY = this.minY,
	        maxX = this.maxX,
	        maxY = this.maxY;

	    var x = vertices[0];
	    var y = vertices[1];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = vertices[2];
	    y = vertices[3];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = vertices[4];
	    y = vertices[5];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = vertices[6];
	    y = vertices[7];
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};

	Bounds.prototype.addFrame = function (transform, x0, y0, x1, y1) {
	    var matrix = transform.worldTransform;
	    var a = matrix.a,
	        b = matrix.b,
	        c = matrix.c,
	        d = matrix.d,
	        tx = matrix.tx,
	        ty = matrix.ty;
	    var minX = this.minX,
	        minY = this.minY,
	        maxX = this.maxX,
	        maxY = this.maxY;

	    var x = a * x0 + c * y0 + tx;
	    var y = b * x0 + d * y0 + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = a * x1 + c * y0 + tx;
	    y = b * x1 + d * y0 + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = a * x0 + c * y1 + tx;
	    y = b * x0 + d * y1 + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    x = a * x1 + c * y1 + tx;
	    y = b * x1 + d * y1 + ty;
	    minX = x < minX ? x : minX;
	    minY = y < minY ? y : minY;
	    maxX = x > maxX ? x : maxX;
	    maxY = y > maxY ? y : maxY;

	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};

	Bounds.prototype.addVertices = function (transform, vertices, beginOffset, endOffset) {
	    var matrix = transform.worldTransform;
	    var a = matrix.a,
	        b = matrix.b,
	        c = matrix.c,
	        d = matrix.d,
	        tx = matrix.tx,
	        ty = matrix.ty;
	    var minX = this.minX,
	        minY = this.minY,
	        maxX = this.maxX,
	        maxY = this.maxY;

	    for (var i = beginOffset; i < endOffset; i += 2) {
	        var rawX = vertices[i],
	            rawY = vertices[i + 1];
	        var x = a * rawX + c * rawY + tx;
	        var y = d * rawY + b * rawX + ty;

	        minX = x < minX ? x : minX;
	        minY = y < minY ? y : minY;
	        maxX = x > maxX ? x : maxX;
	        maxY = y > maxY ? y : maxY;
	    }

	    this.minX = minX;
	    this.minY = minY;
	    this.maxX = maxX;
	    this.maxY = maxY;
	};

	Bounds.prototype.addBounds = function (bounds) {
	    var minX = this.minX,
	        minY = this.minY,
	        maxX = this.maxX,
	        maxY = this.maxY;

	    this.minX = bounds.minX < minX ? bounds.minX : minX;
	    this.minY = bounds.minY < minY ? bounds.minY : minY;
	    this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
	    this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(21),
	    DisplayObject = __webpack_require__(26);

	function Container() {
	    DisplayObject.call(this);

	    this.children = [];
	}

	Container.prototype = Object.create(DisplayObject.prototype);
	Container.prototype.constructor = Container;
	module.exports = Container;

	Object.defineProperties(Container.prototype, {
	    width: {
	        get: function get() {
	            return this.scale.x * this.getLocalBounds().width;
	        },
	        set: function set(value) {

	            var width = this.getLocalBounds().width;

	            if (width !== 0) {
	                this.scale.x = value / width;
	            } else {
	                this.scale.x = 1;
	            }

	            this._width = value;
	        }
	    },

	    height: {
	        get: function get() {
	            return this.scale.y * this.getLocalBounds().height;
	        },
	        set: function set(value) {

	            var height = this.getLocalBounds().height;

	            if (height !== 0) {
	                this.scale.y = value / height;
	            } else {
	                this.scale.y = 1;
	            }

	            this._height = value;
	        }
	    }
	});

	Container.prototype.onChildrenChange = function () {};

	Container.prototype.addChild = function (child) {
	    var argumentsLength = arguments.length;

	    if (argumentsLength > 1) {
	        for (var i = 0; i < argumentsLength; i++) {
	            this.addChild(arguments[i]);
	        }
	    } else {
	        if (child.parent) {
	            child.parent.removeChild(child);
	        }

	        child.parent = this;

	        this.transform._parentID = -1;

	        this.children.push(child);

	        this.onChildrenChange(this.children.length - 1);
	        child.emit('added', this);
	    }

	    return child;
	};

	Container.prototype.addChildAt = function (child, index) {
	    if (index >= 0 && index <= this.children.length) {
	        if (child.parent) {
	            child.parent.removeChild(child);
	        }

	        child.parent = this;

	        this.children.splice(index, 0, child);

	        this.onChildrenChange(index);
	        child.emit('added', this);

	        return child;
	    } else {
	        throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
	    }
	};

	Container.prototype.swapChildren = function (child, child2) {
	    if (child === child2) {
	        return;
	    }

	    var index1 = this.getChildIndex(child);
	    var index2 = this.getChildIndex(child2);

	    if (index1 < 0 || index2 < 0) {
	        throw new Error('swapChildren: Both the supplied DisplayObjects must be children of the caller.');
	    }

	    this.children[index1] = child2;
	    this.children[index2] = child;
	    this.onChildrenChange(index1 < index2 ? index1 : index2);
	};

	Container.prototype.getChildIndex = function (child) {
	    var index = this.children.indexOf(child);

	    if (index === -1) {
	        throw new Error('The supplied DisplayObject must be a child of the caller');
	    }

	    return index;
	};

	Container.prototype.setChildIndex = function (child, index) {
	    if (index < 0 || index >= this.children.length) {
	        throw new Error('The supplied index is out of bounds');
	    }

	    var currentIndex = this.getChildIndex(child);

	    utils.removeItems(this.children, currentIndex, 1);
	    this.children.splice(index, 0, child);
	    this.onChildrenChange(index);
	};

	Container.prototype.getChildAt = function (index) {
	    if (index < 0 || index >= this.children.length) {
	        throw new Error('getChildAt: Supplied index ' + index + ' does not exist in the child list, or the supplied DisplayObject is not a child of the caller');
	    }

	    return this.children[index];
	};

	Container.prototype.removeChild = function (child) {
	    var argumentsLength = arguments.length;

	    if (argumentsLength > 1) {
	        for (var i = 0; i < argumentsLength; i++) {
	            this.removeChild(arguments[i]);
	        }
	    } else {
	        var index = this.children.indexOf(child);

	        if (index === -1) {
	            return;
	        }

	        child.parent = null;
	        utils.removeItems(this.children, index, 1);

	        this.onChildrenChange(index);
	        child.emit('removed', this);
	    }

	    return child;
	};

	Container.prototype.removeChildAt = function (index) {
	    var child = this.getChildAt(index);

	    child.parent = null;
	    utils.removeItems(this.children, index, 1);

	    this.onChildrenChange(index);
	    child.emit('removed', this);

	    return child;
	};

	Container.prototype.removeChildren = function (beginIndex, endIndex) {
	    var begin = beginIndex || 0;
	    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
	    var range = end - begin;
	    var removed, i;

	    if (range > 0 && range <= end) {
	        removed = this.children.splice(begin, range);

	        for (i = 0; i < removed.length; ++i) {
	            removed[i].parent = null;
	        }

	        this.onChildrenChange(beginIndex);

	        for (i = 0; i < removed.length; ++i) {
	            removed[i].emit('removed', this);
	        }

	        return removed;
	    } else if (range === 0 && this.children.length === 0) {
	        return [];
	    } else {
	        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
	    }
	};

	Container.prototype.updateTransform = function () {
	    this._boundsID++;

	    if (!this.visible) {
	        return;
	    }

	    this.transform.updateTransform(this.parent.transform);

	    this.worldAlpha = this.alpha * this.parent.worldAlpha;

	    for (var i = 0, j = this.children.length; i < j; ++i) {
	        this.children[i].updateTransform();
	    }
	};

	Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

	Container.prototype.calculateBounds = function () {
	    this._bounds.clear();

	    if (!this.visible) {
	        return;
	    }

	    this._calculateBounds();

	    for (var i = 0; i < this.children.length; i++) {
	        var child = this.children[i];

	        child.calculateBounds();

	        this._bounds.addBounds(child._bounds);
	    }

	    this._boundsID = this._lastBoundsID;
	};

	Container.prototype._calculateBounds = function () {};

	Container.prototype.renderWebGL = function (renderer) {
	    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {

	        return;
	    }

	    if (this._mask || this._filters) {
	        this.renderAdvancedWebGL(renderer);
	    } else {
	        this._renderWebGL(renderer);

	        for (var i = 0, j = this.children.length; i < j; ++i) {
	            this.children[i].renderWebGL(renderer);
	        }
	    }
	};

	Container.prototype.renderAdvancedWebGL = function (renderer) {
	    renderer.currentRenderer.flush();

	    var filters = this._filters;
	    var mask = this._mask;
	    var i, j;

	    if (filters) {
	        if (!this._enabledFilters) {
	            this._enabledFilters = [];
	        }

	        this._enabledFilters.length = 0;

	        for (i = 0; i < filters.length; i++) {
	            if (filters[i].enabled) {
	                this._enabledFilters.push(filters[i]);
	            }
	        }

	        if (this._enabledFilters.length) {
	            renderer.filterManager.pushFilter(this, this._enabledFilters);
	        }
	    }

	    if (mask) {
	        renderer.maskManager.pushMask(this, this._mask);
	    }

	    renderer.currentRenderer.start();

	    this._renderWebGL(renderer);

	    for (i = 0, j = this.children.length; i < j; i++) {
	        this.children[i].renderWebGL(renderer);
	    }

	    renderer.currentRenderer.flush();

	    if (mask) {
	        renderer.maskManager.popMask(this, this._mask);
	    }

	    if (filters && this._enabledFilters && this._enabledFilters.length) {
	        renderer.filterManager.popFilter();
	    }

	    renderer.currentRenderer.start();
	};

	Container.prototype._renderWebGL = function (renderer) {};

	Container.prototype._renderCanvas = function (renderer) {};

	Container.prototype.renderCanvas = function (renderer) {
	    if (!this.visible || this.alpha <= 0 || !this.renderable) {
	        return;
	    }

	    if (this._mask) {
	        renderer.maskManager.pushMask(this._mask);
	    }

	    this._renderCanvas(renderer);
	    for (var i = 0, j = this.children.length; i < j; ++i) {
	        this.children[i].renderCanvas(renderer);
	    }

	    if (this._mask) {
	        renderer.maskManager.popMask(renderer);
	    }
	};

	Container.prototype.destroy = function (options) {
	    DisplayObject.prototype.destroy.call(this);

	    var destroyChildren = typeof options === 'boolean' ? options : options && options.children;

	    var oldChildren = this.children;
	    this.children = null;

	    if (destroyChildren) {
	        for (var i = oldChildren.length - 1; i >= 0; i--) {
	            var child = oldChildren[i];
	            child.parent = null;
	            child.destroy(options);
	        }
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    Texture = __webpack_require__(33),
	    Container = __webpack_require__(31),
	    utils = __webpack_require__(21),
	    CONST = __webpack_require__(8),
	    tempPoint = new math.Point();

	function Sprite(texture) {
	    Container.call(this);

	    this.anchor = new math.ObservablePoint(this.onAnchorUpdate, this);

	    this._texture = null;

	    this._width = 0;

	    this._height = 0;

	    this._tint = null;
	    this._tintRGB = null;
	    this.tint = 0xFFFFFF;

	    this.blendMode = CONST.BLEND_MODES.NORMAL;

	    this.shader = null;

	    this.cachedTint = 0xFFFFFF;

	    this.texture = texture || Texture.EMPTY;

	    this.vertexData = new Float32Array(8);

	    this.vertexTrimmedData = null;

	    this._transformID = -1;
	    this._textureID = -1;
	}

	Sprite.prototype = Object.create(Container.prototype);
	Sprite.prototype.constructor = Sprite;
	module.exports = Sprite;

	Object.defineProperties(Sprite.prototype, {
	    width: {
	        get: function get() {
	            return Math.abs(this.scale.x) * this.texture.orig.width;
	        },
	        set: function set(value) {
	            var sign = utils.sign(this.scale.x) || 1;
	            this.scale.x = sign * value / this.texture.orig.width;
	            this._width = value;
	        }
	    },

	    height: {
	        get: function get() {
	            return Math.abs(this.scale.y) * this.texture.orig.height;
	        },
	        set: function set(value) {
	            var sign = utils.sign(this.scale.y) || 1;
	            this.scale.y = sign * value / this.texture.orig.height;
	            this._height = value;
	        }
	    },

	    tint: {
	        get: function get() {
	            return this._tint;
	        },
	        set: function set(value) {
	            this._tint = value;
	            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
	        }
	    },

	    texture: {
	        get: function get() {
	            return this._texture;
	        },
	        set: function set(value) {
	            if (this._texture === value) {
	                return;
	            }

	            this._texture = value;
	            this.cachedTint = 0xFFFFFF;

	            this._textureID = -1;

	            if (value) {
	                if (value.baseTexture.hasLoaded) {
	                    this._onTextureUpdate();
	                } else {
	                    value.once('update', this._onTextureUpdate, this);
	                }
	            }
	        }
	    }
	});

	Sprite.prototype._onTextureUpdate = function () {
	    this._textureID = -1;

	    if (this._width) {
	        this.scale.x = utils.sign(this.scale.x) * this._width / this.texture.orig.width;
	    }

	    if (this._height) {
	        this.scale.y = utils.sign(this.scale.y) * this._height / this.texture.orig.height;
	    }
	};

	Sprite.prototype.onAnchorUpdate = function () {
	    this._transformID = -1;
	};

	Sprite.prototype.calculateVertices = function () {
	    if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
	        return;
	    }

	    this._transformID = this.transform._worldID;
	    this._textureID = this._texture._updateID;

	    var texture = this._texture,
	        wt = this.transform.worldTransform,
	        a = wt.a,
	        b = wt.b,
	        c = wt.c,
	        d = wt.d,
	        tx = wt.tx,
	        ty = wt.ty,
	        vertexData = this.vertexData,
	        w0,
	        w1,
	        h0,
	        h1,
	        trim = texture.trim,
	        orig = texture.orig;

	    if (trim) {
	        w1 = trim.x - this.anchor._x * orig.width;
	        w0 = w1 + trim.width;

	        h1 = trim.y - this.anchor._y * orig.height;
	        h0 = h1 + trim.height;
	    } else {
	        w0 = orig.width * (1 - this.anchor._x);
	        w1 = orig.width * -this.anchor._x;

	        h0 = orig.height * (1 - this.anchor._y);
	        h1 = orig.height * -this.anchor._y;
	    }

	    vertexData[0] = a * w1 + c * h1 + tx;
	    vertexData[1] = d * h1 + b * w1 + ty;

	    vertexData[2] = a * w0 + c * h1 + tx;
	    vertexData[3] = d * h1 + b * w0 + ty;

	    vertexData[4] = a * w0 + c * h0 + tx;
	    vertexData[5] = d * h0 + b * w0 + ty;

	    vertexData[6] = a * w1 + c * h0 + tx;
	    vertexData[7] = d * h0 + b * w1 + ty;
	};

	Sprite.prototype.calculateTrimmedVertices = function () {
	    if (!this.vertexTrimmedData) {
	        this.vertexTrimmedData = new Float32Array(8);
	    }

	    var texture = this._texture,
	        vertexData = this.vertexTrimmedData,
	        orig = texture.orig;

	    var wt = this.transform.worldTransform,
	        a = wt.a,
	        b = wt.b,
	        c = wt.c,
	        d = wt.d,
	        tx = wt.tx,
	        ty = wt.ty,
	        w0,
	        w1,
	        h0,
	        h1;

	    w0 = orig.width * (1 - this.anchor._x);
	    w1 = orig.width * -this.anchor._x;

	    h0 = orig.height * (1 - this.anchor._y);
	    h1 = orig.height * -this.anchor._y;

	    vertexData[0] = a * w1 + c * h1 + tx;
	    vertexData[1] = d * h1 + b * w1 + ty;

	    vertexData[2] = a * w0 + c * h1 + tx;
	    vertexData[3] = d * h1 + b * w0 + ty;

	    vertexData[4] = a * w0 + c * h0 + tx;
	    vertexData[5] = d * h0 + b * w0 + ty;

	    vertexData[6] = a * w1 + c * h0 + tx;
	    vertexData[7] = d * h0 + b * w1 + ty;
	};

	Sprite.prototype._renderWebGL = function (renderer) {
	    this.calculateVertices();

	    renderer.setObjectRenderer(renderer.plugins.sprite);
	    renderer.plugins.sprite.render(this);
	};

	Sprite.prototype._renderCanvas = function (renderer) {
	    renderer.plugins.sprite.render(this);
	};

	Sprite.prototype._calculateBounds = function () {

	    var trim = this._texture.trim,
	        orig = this._texture.orig;

	    if (!trim || trim.width === orig.width && trim.height === orig.height) {
	        this.calculateVertices();
	        this._bounds.addQuad(this.vertexData);
	    } else {
	        this.calculateTrimmedVertices();
	        this._bounds.addQuad(this.vertexTrimmedData);
	    }
	};

	Sprite.prototype.getLocalBounds = function (rect) {
	    if (this.children.length === 0) {

	        this._bounds.minX = -this._texture.orig.width * this.anchor._x;
	        this._bounds.minY = -this._texture.orig.height * this.anchor._y;
	        this._bounds.maxX = this._texture.orig.width;
	        this._bounds.maxY = this._texture.orig.height;

	        if (!rect) {
	            if (!this._localBoundsRect) {
	                this._localBoundsRect = new math.Rectangle();
	            }

	            rect = this._localBoundsRect;
	        }

	        return this._bounds.getRectangle(rect);
	    } else {
	        return Container.prototype.getLocalBounds.call(this, rect);
	    }
	};

	Sprite.prototype.containsPoint = function (point) {
	    this.worldTransform.applyInverse(point, tempPoint);

	    var width = this._texture.orig.width;
	    var height = this._texture.orig.height;
	    var x1 = -width * this.anchor.x;
	    var y1;

	    if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
	        y1 = -height * this.anchor.y;

	        if (tempPoint.y > y1 && tempPoint.y < y1 + height) {
	            return true;
	        }
	    }

	    return false;
	};

	Sprite.prototype.destroy = function (options) {
	    Container.prototype.destroy.call(this, options);

	    this.anchor = null;

	    var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;
	    if (destroyTexture) {
	        var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;
	        this._texture.destroy(!!destroyBaseTexture);
	    }

	    this._texture = null;
	    this.shader = null;
	};

	Sprite.from = function (source) {
	    return new Sprite(Texture.from(source));
	};

	Sprite.fromFrame = function (frameId) {
	    var texture = utils.TextureCache[frameId];

	    if (!texture) {
	        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
	    }

	    return new Sprite(texture);
	};

	Sprite.fromImage = function (imageId, crossorigin, scaleMode) {
	    return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseTexture = __webpack_require__(34),
	    VideoBaseTexture = __webpack_require__(44),
	    TextureUvs = __webpack_require__(45),
	    EventEmitter = __webpack_require__(22),
	    math = __webpack_require__(11),
	    utils = __webpack_require__(21);

	function Texture(baseTexture, frame, orig, trim, rotate) {
	    EventEmitter.call(this);

	    this.noFrame = false;

	    if (!frame) {
	        this.noFrame = true;
	        frame = new math.Rectangle(0, 0, 1, 1);
	    }

	    if (baseTexture instanceof Texture) {
	        baseTexture = baseTexture.baseTexture;
	    }

	    this.baseTexture = baseTexture;

	    this._frame = frame;

	    this.trim = trim;

	    this.valid = false;

	    this.requiresUpdate = false;

	    this._uvs = null;

	    this.orig = orig || frame;

	    this._rotate = +(rotate || 0);

	    if (rotate === true) {
	        this._rotate = 2;
	    } else {
	        if (this._rotate % 2 !== 0) {
	            throw 'attempt to use diamond-shaped UVs. If you are sure, set rotation manually';
	        }
	    }

	    if (baseTexture.hasLoaded) {
	        if (this.noFrame) {
	            frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);

	            baseTexture.on('update', this.onBaseTextureUpdated, this);
	        }
	        this.frame = frame;
	    } else {
	        baseTexture.once('loaded', this.onBaseTextureLoaded, this);
	    }

	    this._updateID = 0;
	}

	Texture.prototype = Object.create(EventEmitter.prototype);
	Texture.prototype.constructor = Texture;
	module.exports = Texture;

	Object.defineProperties(Texture.prototype, {
	    frame: {
	        get: function get() {
	            return this._frame;
	        },
	        set: function set(frame) {
	            this._frame = frame;

	            this.noFrame = false;

	            if (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height) {
	                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
	            }

	            this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;

	            if (!this.trim && !this.rotate) {
	                this.orig = frame;
	            }

	            if (this.valid) {
	                this._updateUvs();
	            }
	        }
	    },

	    rotate: {
	        get: function get() {
	            return this._rotate;
	        },
	        set: function set(rotate) {
	            this._rotate = rotate;
	            if (this.valid) {
	                this._updateUvs();
	            }
	        }
	    },

	    width: {
	        get: function get() {
	            return this.orig ? this.orig.width : 0;
	        }
	    },

	    height: {
	        get: function get() {
	            return this.orig ? this.orig.height : 0;
	        }
	    }
	});

	Texture.prototype.update = function () {
	    this.baseTexture.update();
	};

	Texture.prototype.onBaseTextureLoaded = function (baseTexture) {
	    this._updateID++;

	    if (this.noFrame) {
	        this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
	    } else {
	        this.frame = this._frame;
	    }

	    this.baseTexture.on('update', this.onBaseTextureUpdated, this);
	    this.emit('update', this);
	};

	Texture.prototype.onBaseTextureUpdated = function (baseTexture) {
	    this._updateID++;

	    this._frame.width = baseTexture.width;
	    this._frame.height = baseTexture.height;

	    this.emit('update', this);
	};

	Texture.prototype.destroy = function (destroyBase) {
	    if (this.baseTexture) {

	        if (destroyBase) {
	            if (utils.TextureCache[this.baseTexture.imageUrl]) {
	                delete utils.TextureCache[this.baseTexture.imageUrl];
	            }

	            this.baseTexture.destroy();
	        }

	        this.baseTexture.off('update', this.onBaseTextureUpdated, this);
	        this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);

	        this.baseTexture = null;
	    }

	    this._frame = null;
	    this._uvs = null;
	    this.trim = null;
	    this.orig = null;

	    this.valid = false;

	    this.off('dispose', this.dispose, this);
	    this.off('update', this.update, this);
	};

	Texture.prototype.clone = function () {
	    return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
	};

	Texture.prototype._updateUvs = function () {
	    if (!this._uvs) {
	        this._uvs = new TextureUvs();
	    }

	    this._uvs.set(this._frame, this.baseTexture, this.rotate);

	    this._updateID++;
	};

	Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {
	    var texture = utils.TextureCache[imageUrl];

	    if (!texture) {
	        texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
	        utils.TextureCache[imageUrl] = texture;
	    }

	    return texture;
	};

	Texture.fromFrame = function (frameId) {
	    var texture = utils.TextureCache[frameId];

	    if (!texture) {
	        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
	    }

	    return texture;
	};

	Texture.fromCanvas = function (canvas, scaleMode) {
	    return new Texture(BaseTexture.fromCanvas(canvas, scaleMode));
	};

	Texture.fromVideo = function (video, scaleMode) {
	    if (typeof video === 'string') {
	        return Texture.fromVideoUrl(video, scaleMode);
	    } else {
	        return new Texture(VideoBaseTexture.fromVideo(video, scaleMode));
	    }
	};

	Texture.fromVideoUrl = function (videoUrl, scaleMode) {
	    return new Texture(VideoBaseTexture.fromUrl(videoUrl, scaleMode));
	};

	Texture.from = function (source) {
	    if (typeof source === 'string') {
	        var texture = utils.TextureCache[source];

	        if (!texture) {
	            var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;
	            if (isVideo) {
	                return Texture.fromVideoUrl(source);
	            }

	            return Texture.fromImage(source);
	        }

	        return texture;
	    } else if (source instanceof HTMLCanvasElement) {
	        return Texture.fromCanvas(source);
	    } else if (source instanceof HTMLVideoElement) {
	        return Texture.fromVideo(source);
	    } else if (source instanceof BaseTexture) {
	        return new Texture(BaseTexture);
	    } else {
	        return source;
	    }
	};

	Texture.addTextureToCache = function (texture, id) {
	    utils.TextureCache[id] = texture;
	};

	Texture.removeTextureFromCache = function (id) {
	    var texture = utils.TextureCache[id];

	    delete utils.TextureCache[id];
	    delete utils.BaseTextureCache[id];

	    return texture;
	};

	Texture.EMPTY = new Texture(new BaseTexture());
	Texture.EMPTY.destroy = function () {};
	Texture.EMPTY.on = function () {};
	Texture.EMPTY.once = function () {};
	Texture.EMPTY.emit = function () {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(21),
	    CONST = __webpack_require__(8),
	    EventEmitter = __webpack_require__(22),
	    determineCrossOrigin = __webpack_require__(35),
	    bitTwiddle = __webpack_require__(43);

	function BaseTexture(source, scaleMode, resolution) {
	    EventEmitter.call(this);

	    this.uid = utils.uid();

	    this.touched = 0;

	    this.resolution = resolution || CONST.RESOLUTION;

	    this.width = 100;

	    this.height = 100;

	    this.realWidth = 100;

	    this.realHeight = 100;

	    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

	    this.hasLoaded = false;

	    this.isLoading = false;

	    this.source = null;
	    this.premultipliedAlpha = true;

	    this.imageUrl = null;

	    this.isPowerOfTwo = false;

	    this.mipmap = CONST.MIPMAP_TEXTURES;

	    this.wrapMode = CONST.WRAP_MODES.DEFAULT;

	    this._glTextures = [];
	    this._enabled = 0;
	    this._id = 0;

	    if (source) {
	        this.loadSource(source);
	    }
	}

	BaseTexture.prototype = Object.create(EventEmitter.prototype);
	BaseTexture.prototype.constructor = BaseTexture;
	module.exports = BaseTexture;

	BaseTexture.prototype.update = function () {
	    this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
	    this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;

	    this.width = this.realWidth / this.resolution;
	    this.height = this.realHeight / this.resolution;

	    this.isPowerOfTwo = bitTwiddle.isPow2(this.realWidth) && bitTwiddle.isPow2(this.realHeight);

	    this.emit('update', this);
	};

	BaseTexture.prototype.loadSource = function (source) {
	    var wasLoading = this.isLoading;
	    this.hasLoaded = false;
	    this.isLoading = false;

	    if (wasLoading && this.source) {
	        this.source.onload = null;
	        this.source.onerror = null;
	    }

	    this.source = source;

	    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {
	        this._sourceLoaded();
	    } else if (!source.getContext) {
	        this.isLoading = true;

	        var scope = this;

	        source.onload = function () {
	            source.onload = null;
	            source.onerror = null;

	            if (!scope.isLoading) {
	                return;
	            }

	            scope.isLoading = false;
	            scope._sourceLoaded();

	            scope.emit('loaded', scope);
	        };

	        source.onerror = function () {
	            source.onload = null;
	            source.onerror = null;

	            if (!scope.isLoading) {
	                return;
	            }

	            scope.isLoading = false;
	            scope.emit('error', scope);
	        };

	        if (source.complete && source.src) {
	            this.isLoading = false;

	            source.onload = null;
	            source.onerror = null;

	            if (source.width && source.height) {
	                this._sourceLoaded();

	                if (wasLoading) {
	                    this.emit('loaded', this);
	                }
	            } else {
	                if (wasLoading) {
	                    this.emit('error', this);
	                }
	            }
	        }
	    }
	};

	BaseTexture.prototype._sourceLoaded = function () {
	    this.hasLoaded = true;
	    this.update();
	};

	BaseTexture.prototype.destroy = function () {
	    if (this.imageUrl) {
	        delete utils.BaseTextureCache[this.imageUrl];
	        delete utils.TextureCache[this.imageUrl];

	        this.imageUrl = null;

	        if (!navigator.isCocoonJS) {
	            this.source.src = '';
	        }
	    } else if (this.source && this.source._pixiId) {
	        delete utils.BaseTextureCache[this.source._pixiId];
	    }

	    this.source = null;

	    this.dispose();
	};

	BaseTexture.prototype.dispose = function () {
	    this.emit('dispose', this);
	};

	BaseTexture.prototype.updateSourceImage = function (newSrc) {
	    this.source.src = newSrc;

	    this.loadSource(this.source);
	};

	BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {
	    var baseTexture = utils.BaseTextureCache[imageUrl];

	    if (!baseTexture) {
	        var image = new Image();

	        if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
	            image.crossOrigin = determineCrossOrigin(imageUrl);
	        }

	        baseTexture = new BaseTexture(image, scaleMode);
	        baseTexture.imageUrl = imageUrl;

	        image.src = imageUrl;

	        utils.BaseTextureCache[imageUrl] = baseTexture;

	        baseTexture.resolution = utils.getResolutionOfUrl(imageUrl);
	    }

	    return baseTexture;
	};

	BaseTexture.fromCanvas = function (canvas, scaleMode) {
	    if (!canvas._pixiId) {
	        canvas._pixiId = 'canvas_' + utils.uid();
	    }

	    var baseTexture = utils.BaseTextureCache[canvas._pixiId];

	    if (!baseTexture) {
	        baseTexture = new BaseTexture(canvas, scaleMode);
	        utils.BaseTextureCache[canvas._pixiId] = baseTexture;
	    }

	    return baseTexture;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tempAnchor;
	var _url = __webpack_require__(36);

	var determineCrossOrigin = function determineCrossOrigin(url, loc) {
	    if (url.indexOf('data:') === 0) {
	        return '';
	    }

	    loc = loc || window.location;

	    if (!tempAnchor) {
	        tempAnchor = document.createElement('a');
	    }

	    tempAnchor.href = url;
	    url = _url.parse(tempAnchor.href);

	    var samePort = !url.port && loc.port === '' || url.port === loc.port;

	    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
	        return 'anonymous';
	    }

	    return '';
	};

	module.exports = determineCrossOrigin;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var punycode = __webpack_require__(37);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	    autoEscape = ['\''].concat(unwise),
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    unsafeProtocol = {
	  'javascript': true,
	  'javascript:': true
	},
	    hostlessProtocol = {
	  'javascript': true,
	  'javascript:': true
	},
	    slashedProtocol = {
	  'http': true,
	  'https': true,
	  'ftp': true,
	  'gopher': true,
	  'file': true,
	  'http:': true,
	  'https:': true,
	  'ftp:': true,
	  'gopher:': true,
	  'file:': true
	},
	    querystring = __webpack_require__(40);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url();
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
	  }

	  var rest = url;

	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
	    }

	    var auth, atSign;
	    if (hostEnd === -1) {
	      atSign = rest.lastIndexOf('@');
	    } else {
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
	    }

	    if (hostEnd === -1) hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    this.parseHost();

	    this.hostname = this.hostname || '';

	    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }

	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  if (!unsafeProtocol[lowerProto]) {
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }

	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  this.href = this.format();
	  return this;
	};

	function urlFormat(obj) {
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function () {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query && isObject(this.query) && Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || query && '?' + query || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function (match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function (relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function (relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function (k) {
	    result[k] = this[k];
	  }, this);

	  result.hash = relative.hash;

	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  if (relative.slashes && !relative.protocol) {
	    Object.keys(relative).forEach(function (k) {
	      if (k !== 'protocol') result[k] = relative[k];
	    });

	    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function (k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift())) {}
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;

	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
	      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
	      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    result.host = relative.host || relative.host === '' ? relative.host : result.host;
	    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	  } else if (relPath.length) {
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();

	      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;

	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    result.pathname = null;

	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (result.host || relative.host) && (last === '.' || last === '..') || last === '';

	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';

	    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || result.host && srcPath.length;

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function () {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return arg == null;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	;(function (root) {
		var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
		var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
		var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
			root = freeGlobal;
		}

		var punycode,
		    maxInt = 2147483647,
		    base = 36,
		    tMin = 1,
		    tMax = 26,
		    skew = 38,
		    damp = 700,
		    initialBias = 72,
		    initialN = 128,
		    delimiter = '-',
		    regexPunycode = /^xn--/,
		    regexNonASCII = /[^\x20-\x7E]/,
		    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		    errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
		    baseMinusTMin = base - tMin,
		    floor = Math.floor,
		    stringFromCharCode = String.fromCharCode,
		    key;

		function error(type) {
			throw RangeError(errors[type]);
		}

		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				result = parts[0] + '@';
				string = parts[1];
			}

			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		function ucs2encode(array) {
			return map(array, function (value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		function digitToBasic(digit, flag) {
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		function decode(input) {
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    baseMinusT;

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
				for (oldi = i, w = 1, k = base;; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;
				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				output.splice(i++, 0, n);
			}

			return ucs2encode(output);
		}

		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    inputLength,
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			input = ucs2decode(input);

			inputLength = input.length;

			n = initialN;
			delta = 0;
			bias = initialBias;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			if (basicLength) {
				output.push(delimiter);
			}

			while (handledCPCount < inputLength) {
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						for (q = delta, k = base;; k += base) {
							t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;
			}
			return output.join('');
		}

		function toUnicode(input) {
			return mapDomain(input, function (string) {
				return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
			});
		}

		function toASCII(input) {
			return mapDomain(input, function (string) {
				return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
			});
		}

		punycode = {
			'version': '1.3.2',

			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		if ("function" == 'function' && _typeof(__webpack_require__(39)) == 'object' && __webpack_require__(39)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				freeModule.exports = punycode;
			} else {
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			root.punycode = punycode;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module), (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];

			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(41);
	exports.encode = exports.stringify = __webpack_require__(42);

/***/ },
/* 41 */
/***/ function(module, exports) {

	

	'use strict';

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;

	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    return Object.keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	

	"use strict";"use restrict";

	var INT_BITS = 32;

	exports.INT_BITS = INT_BITS;
	exports.INT_MAX = 0x7fffffff;
	exports.INT_MIN = -1 << INT_BITS - 1;

	exports.sign = function (v) {
	  return (v > 0) - (v < 0);
	};

	exports.abs = function (v) {
	  var mask = v >> INT_BITS - 1;
	  return (v ^ mask) - mask;
	};

	exports.min = function (x, y) {
	  return y ^ (x ^ y) & -(x < y);
	};

	exports.max = function (x, y) {
	  return x ^ (x ^ y) & -(x < y);
	};

	exports.isPow2 = function (v) {
	  return !(v & v - 1) && !!v;
	};

	exports.log2 = function (v) {
	  var r, shift;
	  r = (v > 0xFFFF) << 4;v >>>= r;
	  shift = (v > 0xFF) << 3;v >>>= shift;r |= shift;
	  shift = (v > 0xF) << 2;v >>>= shift;r |= shift;
	  shift = (v > 0x3) << 1;v >>>= shift;r |= shift;
	  return r | v >> 1;
	};

	exports.log10 = function (v) {
	  return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
	};

	exports.popCount = function (v) {
	  v = v - (v >>> 1 & 0x55555555);
	  v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
	  return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
	};

	function countTrailingZeros(v) {
	  var c = 32;
	  v &= -v;
	  if (v) c--;
	  if (v & 0x0000FFFF) c -= 16;
	  if (v & 0x00FF00FF) c -= 8;
	  if (v & 0x0F0F0F0F) c -= 4;
	  if (v & 0x33333333) c -= 2;
	  if (v & 0x55555555) c -= 1;
	  return c;
	}
	exports.countTrailingZeros = countTrailingZeros;

	exports.nextPow2 = function (v) {
	  v += v === 0;
	  --v;
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v + 1;
	};

	exports.prevPow2 = function (v) {
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v - (v >>> 1);
	};

	exports.parity = function (v) {
	  v ^= v >>> 16;
	  v ^= v >>> 8;
	  v ^= v >>> 4;
	  v &= 0xf;
	  return 0x6996 >>> v & 1;
	};

	var REVERSE_TABLE = new Array(256);

	(function (tab) {
	  for (var i = 0; i < 256; ++i) {
	    var v = i,
	        r = i,
	        s = 7;
	    for (v >>>= 1; v; v >>>= 1) {
	      r <<= 1;
	      r |= v & 1;
	      --s;
	    }
	    tab[i] = r << s & 0xff;
	  }
	})(REVERSE_TABLE);

	exports.reverse = function (v) {
	  return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
	};

	exports.interleave2 = function (x, y) {
	  x &= 0xFFFF;
	  x = (x | x << 8) & 0x00FF00FF;
	  x = (x | x << 4) & 0x0F0F0F0F;
	  x = (x | x << 2) & 0x33333333;
	  x = (x | x << 1) & 0x55555555;

	  y &= 0xFFFF;
	  y = (y | y << 8) & 0x00FF00FF;
	  y = (y | y << 4) & 0x0F0F0F0F;
	  y = (y | y << 2) & 0x33333333;
	  y = (y | y << 1) & 0x55555555;

	  return x | y << 1;
	};

	exports.deinterleave2 = function (v, n) {
	  v = v >>> n & 0x55555555;
	  v = (v | v >>> 1) & 0x33333333;
	  v = (v | v >>> 2) & 0x0F0F0F0F;
	  v = (v | v >>> 4) & 0x00FF00FF;
	  v = (v | v >>> 16) & 0x000FFFF;
	  return v << 16 >> 16;
	};

	exports.interleave3 = function (x, y, z) {
	  x &= 0x3FF;
	  x = (x | x << 16) & 4278190335;
	  x = (x | x << 8) & 251719695;
	  x = (x | x << 4) & 3272356035;
	  x = (x | x << 2) & 1227133513;

	  y &= 0x3FF;
	  y = (y | y << 16) & 4278190335;
	  y = (y | y << 8) & 251719695;
	  y = (y | y << 4) & 3272356035;
	  y = (y | y << 2) & 1227133513;
	  x |= y << 1;

	  z &= 0x3FF;
	  z = (z | z << 16) & 4278190335;
	  z = (z | z << 8) & 251719695;
	  z = (z | z << 4) & 3272356035;
	  z = (z | z << 2) & 1227133513;

	  return x | z << 2;
	};

	exports.deinterleave3 = function (v, n) {
	  v = v >>> n & 1227133513;
	  v = (v | v >>> 2) & 3272356035;
	  v = (v | v >>> 4) & 251719695;
	  v = (v | v >>> 8) & 4278190335;
	  v = (v | v >>> 16) & 0x3FF;
	  return v << 22 >> 22;
	};

	exports.nextCombination = function (v) {
	  var t = v | v - 1;
	  return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseTexture = __webpack_require__(34),
	    utils = __webpack_require__(21);

	function VideoBaseTexture(source, scaleMode) {
	    if (!source) {
	        throw new Error('No video source element specified.');
	    }

	    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
	        source.complete = true;
	    }

	    BaseTexture.call(this, source, scaleMode);

	    this.autoUpdate = false;

	    this._onUpdate = this._onUpdate.bind(this);
	    this._onCanPlay = this._onCanPlay.bind(this);

	    if (!source.complete) {
	        source.addEventListener('canplay', this._onCanPlay);
	        source.addEventListener('canplaythrough', this._onCanPlay);

	        source.addEventListener('play', this._onPlayStart.bind(this));
	        source.addEventListener('pause', this._onPlayStop.bind(this));
	    }

	    this.__loaded = false;
	}

	VideoBaseTexture.prototype = Object.create(BaseTexture.prototype);
	VideoBaseTexture.prototype.constructor = VideoBaseTexture;
	module.exports = VideoBaseTexture;

	VideoBaseTexture.prototype._onUpdate = function () {
	    if (this.autoUpdate) {
	        window.requestAnimationFrame(this._onUpdate);
	        this.update();
	    }
	};

	VideoBaseTexture.prototype._onPlayStart = function () {
	    if (!this.hasLoaded) {
	        this._onCanPlay();
	    }

	    if (!this.autoUpdate) {
	        window.requestAnimationFrame(this._onUpdate);
	        this.autoUpdate = true;
	    }
	};

	VideoBaseTexture.prototype._onPlayStop = function () {
	    this.autoUpdate = false;
	};

	VideoBaseTexture.prototype._onCanPlay = function () {
	    this.hasLoaded = true;

	    if (this.source) {
	        this.source.removeEventListener('canplay', this._onCanPlay);
	        this.source.removeEventListener('canplaythrough', this._onCanPlay);

	        this.width = this.source.videoWidth;
	        this.height = this.source.videoHeight;

	        this.source.play();

	        if (!this.__loaded) {
	            this.__loaded = true;
	            this.emit('loaded', this);
	        }
	    }
	};

	VideoBaseTexture.prototype.destroy = function () {
	    if (this.source && this.source._pixiId) {
	        delete utils.BaseTextureCache[this.source._pixiId];
	        delete this.source._pixiId;
	    }

	    BaseTexture.prototype.destroy.call(this);
	};

	VideoBaseTexture.fromVideo = function (video, scaleMode) {
	    if (!video._pixiId) {
	        video._pixiId = 'video_' + utils.uid();
	    }

	    var baseTexture = utils.BaseTextureCache[video._pixiId];

	    if (!baseTexture) {
	        baseTexture = new VideoBaseTexture(video, scaleMode);
	        utils.BaseTextureCache[video._pixiId] = baseTexture;
	    }

	    return baseTexture;
	};

	VideoBaseTexture.fromUrl = function (videoSrc, scaleMode) {
	    var video = document.createElement('video');

	    if (Array.isArray(videoSrc)) {
	        for (var i = 0; i < videoSrc.length; ++i) {
	            video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
	        }
	    } else {
	            video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
	        }

	    video.load();
	    video.play();

	    return VideoBaseTexture.fromVideo(video, scaleMode);
	};

	VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

	function createSource(path, type) {
	    if (!type) {
	        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
	    }

	    var source = document.createElement('source');

	    source.src = path;
	    source.type = type;

	    return source;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function TextureUvs() {
	    this.x0 = 0;
	    this.y0 = 0;

	    this.x1 = 1;
	    this.y1 = 0;

	    this.x2 = 1;
	    this.y2 = 1;

	    this.x3 = 0;
	    this.y3 = 1;

	    this.uvsUint32 = new Uint32Array(4);
	}

	module.exports = TextureUvs;

	var GroupD8 = __webpack_require__(15);

	TextureUvs.prototype.set = function (frame, baseFrame, rotate) {
	    var tw = baseFrame.width;
	    var th = baseFrame.height;

	    if (rotate) {
	        var w2 = frame.width / 2 / tw;
	        var h2 = frame.height / 2 / th;

	        var cX = frame.x / tw + w2;
	        var cY = frame.y / th + h2;
	        rotate = GroupD8.add(rotate, GroupD8.NW);
	        this.x0 = cX + w2 * GroupD8.uX(rotate);
	        this.y0 = cY + h2 * GroupD8.uY(rotate);
	        rotate = GroupD8.add(rotate, 2);
	        this.x1 = cX + w2 * GroupD8.uX(rotate);
	        this.y1 = cY + h2 * GroupD8.uY(rotate);
	        rotate = GroupD8.add(rotate, 2);
	        this.x2 = cX + w2 * GroupD8.uX(rotate);
	        this.y2 = cY + h2 * GroupD8.uY(rotate);
	        rotate = GroupD8.add(rotate, 2);
	        this.x3 = cX + w2 * GroupD8.uX(rotate);
	        this.y3 = cY + h2 * GroupD8.uY(rotate);
	    } else {

	        this.x0 = frame.x / tw;
	        this.y0 = frame.y / th;

	        this.x1 = (frame.x + frame.width) / tw;
	        this.y1 = frame.y / th;

	        this.x2 = (frame.x + frame.width) / tw;
	        this.y2 = (frame.y + frame.height) / th;

	        this.x3 = frame.x / tw;
	        this.y3 = (frame.y + frame.height) / th;
	    }

	    this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
	    this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
	    this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
	    this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CanvasRenderer = __webpack_require__(47),
	    CONST = __webpack_require__(8),
	    math = __webpack_require__(11),
	    canvasRenderWorldTransform = new math.Matrix(),
	    CanvasTinter = __webpack_require__(55);

	function CanvasSpriteRenderer(renderer) {
	    this.renderer = renderer;
	}

	CanvasSpriteRenderer.prototype.constructor = CanvasSpriteRenderer;
	module.exports = CanvasSpriteRenderer;

	CanvasRenderer.registerPlugin('sprite', CanvasSpriteRenderer);

	CanvasSpriteRenderer.prototype.render = function (sprite) {
	    var texture = sprite._texture,
	        renderer = this.renderer,
	        wt = sprite.transform.worldTransform,
	        dx,
	        dy,
	        width = texture._frame.width,
	        height = texture._frame.height;

	    if (texture.orig.width <= 0 || texture.orig.height <= 0 || !texture.baseTexture.source) {
	        return;
	    }

	    renderer.setBlendMode(sprite.blendMode);

	    if (texture.valid) {
	        renderer.context.globalAlpha = sprite.worldAlpha;

	        var smoothingEnabled = texture.baseTexture.scaleMode === CONST.SCALE_MODES.LINEAR;
	        if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
	            renderer.context[renderer.smoothProperty] = smoothingEnabled;
	        }

	        if (texture.trim) {
	            dx = texture.trim.width / 2 + texture.trim.x - sprite.anchor.x * texture.orig.width;
	            dy = texture.trim.height / 2 + texture.trim.y - sprite.anchor.y * texture.orig.height;
	        } else {
	            dx = (0.5 - sprite.anchor.x) * texture.orig.width;
	            dy = (0.5 - sprite.anchor.y) * texture.orig.height;
	        }
	        if (texture.rotate) {
	            wt.copy(canvasRenderWorldTransform);
	            wt = canvasRenderWorldTransform;
	            math.GroupD8.matrixAppendRotationInv(wt, texture.rotate, dx, dy);

	            dx = 0;
	            dy = 0;
	        }
	        dx -= width / 2;
	        dy -= height / 2;

	        if (renderer.roundPixels) {
	            renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution | 0, wt.ty * renderer.resolution | 0);

	            dx = dx | 0;
	            dy = dy | 0;
	        } else {
	            renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution, wt.ty * renderer.resolution);
	        }

	        var resolution = texture.baseTexture.resolution;

	        if (sprite.tint !== 0xFFFFFF) {
	            if (sprite.cachedTint !== sprite.tint) {
	                sprite.cachedTint = sprite.tint;

	                sprite.tintedTexture = CanvasTinter.getTintedTexture(sprite, sprite.tint);
	            }

	            renderer.context.drawImage(sprite.tintedTexture, 0, 0, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
	        } else {

	            renderer.context.drawImage(texture.baseTexture.source, texture._frame.x * resolution, texture._frame.y * resolution, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
	        }
	    }
	};

	CanvasSpriteRenderer.prototype.destroy = function () {
	    this.renderer = null;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SystemRenderer = __webpack_require__(48),
	    CanvasMaskManager = __webpack_require__(51),
	    CanvasRenderTarget = __webpack_require__(52),
	    mapCanvasBlendModesToPixi = __webpack_require__(53),
	    utils = __webpack_require__(21),
	    CONST = __webpack_require__(8);

	function CanvasRenderer(width, height, options) {
	    options = options || {};

	    SystemRenderer.call(this, 'Canvas', width, height, options);

	    this.type = CONST.RENDERER_TYPE.CANVAS;

	    this.rootContext = this.view.getContext('2d', { alpha: this.transparent });
	    this.rootResolution = this.resolution;

	    this.refresh = true;

	    this.maskManager = new CanvasMaskManager(this);

	    this.smoothProperty = 'imageSmoothingEnabled';

	    if (!this.rootContext.imageSmoothingEnabled) {
	        if (this.rootContext.webkitImageSmoothingEnabled) {
	            this.smoothProperty = 'webkitImageSmoothingEnabled';
	        } else if (this.rootContext.mozImageSmoothingEnabled) {
	            this.smoothProperty = 'mozImageSmoothingEnabled';
	        } else if (this.rootContext.oImageSmoothingEnabled) {
	            this.smoothProperty = 'oImageSmoothingEnabled';
	        } else if (this.rootContext.msImageSmoothingEnabled) {
	            this.smoothProperty = 'msImageSmoothingEnabled';
	        }
	    }

	    this.initPlugins();

	    this.blendModes = mapCanvasBlendModesToPixi();
	    this._activeBlendMode = null;

	    this.context = null;
	    this.renderingToScreen = false;

	    this.resize(width, height);
	}

	CanvasRenderer.prototype = Object.create(SystemRenderer.prototype);
	CanvasRenderer.prototype.constructor = CanvasRenderer;
	module.exports = CanvasRenderer;
	utils.pluginTarget.mixin(CanvasRenderer);

	CanvasRenderer.prototype.render = function (displayObject, renderTexture, clear, transform, skipUpdateTransform) {

	    if (!this.view) {
	        return;
	    }

	    this.renderingToScreen = !renderTexture;

	    this.emit('prerender');

	    if (renderTexture) {
	        renderTexture = renderTexture.baseTexture || renderTexture;

	        if (!renderTexture._canvasRenderTarget) {

	            renderTexture._canvasRenderTarget = new CanvasRenderTarget(renderTexture.width, renderTexture.height, renderTexture.resolution);
	            renderTexture.source = renderTexture._canvasRenderTarget.canvas;
	            renderTexture.valid = true;
	        }

	        this.context = renderTexture._canvasRenderTarget.context;
	        this.resolution = renderTexture._canvasRenderTarget.resolution;
	    } else {

	        this.context = this.rootContext;
	        this.resolution = this.rootResolution;
	    }

	    var context = this.context;

	    if (!renderTexture) {
	        this._lastObjectRendered = displayObject;
	    }

	    if (!skipUpdateTransform) {
	        var cacheParent = displayObject.parent;
	        var tempWt = this._tempDisplayObjectParent.transform.worldTransform;

	        if (transform) {
	            transform.copy(tempWt);
	        } else {
	            tempWt.identity();
	        }

	        displayObject.parent = this._tempDisplayObjectParent;
	        displayObject.updateTransform();
	        displayObject.parent = cacheParent;
	    }

	    context.setTransform(1, 0, 0, 1, 0, 0);
	    context.globalAlpha = 1;
	    context.globalCompositeOperation = this.blendModes[CONST.BLEND_MODES.NORMAL];

	    if (navigator.isCocoonJS && this.view.screencanvas) {
	        context.fillStyle = 'black';
	        context.clear();
	    }

	    if (clear !== undefined ? clear : this.clearBeforeRender) {
	        if (this.renderingToScreen) {
	            if (this.transparent) {
	                context.clearRect(0, 0, this.width, this.height);
	            } else {
	                context.fillStyle = this._backgroundColorString;
	                context.fillRect(0, 0, this.width, this.height);
	            }
	        }
	    }

	    var tempContext = this.context;

	    this.context = context;
	    displayObject.renderCanvas(this);
	    this.context = tempContext;

	    this.emit('postrender');
	};

	CanvasRenderer.prototype.setBlendMode = function (blendMode) {
	    if (this._activeBlendMode === blendMode) {
	        return;
	    }

	    this.context.globalCompositeOperation = this.blendModes[blendMode];
	};

	CanvasRenderer.prototype.destroy = function (removeView) {
	    this.destroyPlugins();

	    SystemRenderer.prototype.destroy.call(this, removeView);

	    this.context = null;

	    this.refresh = true;

	    this.maskManager.destroy();
	    this.maskManager = null;

	    this.smoothProperty = null;
	};

	CanvasRenderer.prototype.resize = function (width, height) {
	    SystemRenderer.prototype.resize.call(this, width, height);

	    if (this.smoothProperty) {
	        this.rootContext[this.smoothProperty] = CONST.SCALE_MODES.DEFAULT === CONST.SCALE_MODES.LINEAR;
	    }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(21),
	    math = __webpack_require__(11),
	    CONST = __webpack_require__(8),
	    Container = __webpack_require__(31),
	    RenderTexture = __webpack_require__(49),
	    EventEmitter = __webpack_require__(22),
	    tempMatrix = new math.Matrix();

	function SystemRenderer(system, width, height, options) {
	  EventEmitter.call(this);

	  utils.sayHello(system);

	  if (options) {
	    for (var i in CONST.DEFAULT_RENDER_OPTIONS) {
	      if (typeof options[i] === 'undefined') {
	        options[i] = CONST.DEFAULT_RENDER_OPTIONS[i];
	      }
	    }
	  } else {
	    options = CONST.DEFAULT_RENDER_OPTIONS;
	  }

	  this.type = CONST.RENDERER_TYPE.UNKNOWN;

	  this.width = width || 800;

	  this.height = height || 600;

	  this.view = options.view || document.createElement('canvas');

	  this.resolution = options.resolution;

	  this.transparent = options.transparent;

	  this.autoResize = options.autoResize || false;

	  this.blendModes = null;

	  this.preserveDrawingBuffer = options.preserveDrawingBuffer;

	  this.clearBeforeRender = options.clearBeforeRender;

	  this.roundPixels = options.roundPixels;

	  this._backgroundColor = 0x000000;

	  this._backgroundColorRgba = [0, 0, 0, 0];

	  this._backgroundColorString = '#000000';

	  this.backgroundColor = options.backgroundColor || this._backgroundColor;
	  this._tempDisplayObjectParent = new Container();

	  this._lastObjectRendered = this._tempDisplayObjectParent;
	}

	SystemRenderer.prototype = Object.create(EventEmitter.prototype);
	SystemRenderer.prototype.constructor = SystemRenderer;
	module.exports = SystemRenderer;

	Object.defineProperties(SystemRenderer.prototype, {
	  backgroundColor: {
	    get: function get() {
	      return this._backgroundColor;
	    },
	    set: function set(val) {
	      this._backgroundColor = val;
	      this._backgroundColorString = utils.hex2string(val);
	      utils.hex2rgb(val, this._backgroundColorRgba);
	    }
	  }
	});

	SystemRenderer.prototype.resize = function (width, height) {
	  this.width = width * this.resolution;
	  this.height = height * this.resolution;

	  this.view.width = this.width;
	  this.view.height = this.height;

	  if (this.autoResize) {
	    this.view.style.width = this.width / this.resolution + 'px';
	    this.view.style.height = this.height / this.resolution + 'px';
	  }
	};

	SystemRenderer.prototype.generateTexture = function (displayObject, scaleMode, resolution) {

	  var bounds = displayObject.getLocalBounds();

	  var renderTexture = RenderTexture.create(bounds.width | 0, bounds.height | 0, scaleMode, resolution);

	  tempMatrix.tx = -bounds.x;
	  tempMatrix.ty = -bounds.y;

	  this.render(displayObject, renderTexture, false, tempMatrix, true);

	  return renderTexture;
	};

	SystemRenderer.prototype.destroy = function (removeView) {
	  if (removeView && this.view.parentNode) {
	    this.view.parentNode.removeChild(this.view);
	  }

	  this.type = CONST.RENDERER_TYPE.UNKNOWN;

	  this.width = 0;
	  this.height = 0;

	  this.view = null;

	  this.resolution = 0;

	  this.transparent = false;

	  this.autoResize = false;

	  this.blendModes = null;

	  this.preserveDrawingBuffer = false;
	  this.clearBeforeRender = false;

	  this.roundPixels = false;

	  this._backgroundColor = 0;
	  this._backgroundColorRgba = null;
	  this._backgroundColorString = null;

	  this.backgroundColor = 0;
	  this._tempDisplayObjectParent = null;
	  this._lastObjectRendered = null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseRenderTexture = __webpack_require__(50),
	    Texture = __webpack_require__(33);

	function RenderTexture(baseRenderTexture, frame) {
	    this.legacyRenderer = null;

	    if (!(baseRenderTexture instanceof BaseRenderTexture)) {
	        var width = arguments[1];
	        var height = arguments[2];
	        var scaleMode = arguments[3] || 0;
	        var resolution = arguments[4] || 1;

	        console.warn('v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create(' + width + ', ' + height + ')');
	        this.legacyRenderer = arguments[0];

	        frame = null;
	        baseRenderTexture = new BaseRenderTexture(width, height, scaleMode, resolution);
	    }

	    Texture.call(this, baseRenderTexture, frame);

	    this.valid = true;

	    this._updateUvs();
	}

	RenderTexture.prototype = Object.create(Texture.prototype);
	RenderTexture.prototype.constructor = RenderTexture;
	module.exports = RenderTexture;

	RenderTexture.prototype.resize = function (width, height, doNotResizeBaseTexture) {
	    this.valid = width > 0 && height > 0;

	    this._frame.width = this.orig.width = width;
	    this._frame.height = this.orig.height = height;

	    if (!doNotResizeBaseTexture) {
	        this.baseTexture.resize(width, height);
	    }

	    this._updateUvs();
	};

	RenderTexture.create = function (width, height, scaleMode, resolution) {
	    return new RenderTexture(new BaseRenderTexture(width, height, scaleMode, resolution));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseTexture = __webpack_require__(34),
	    CONST = __webpack_require__(8);

	function BaseRenderTexture(width, height, scaleMode, resolution) {
	  BaseTexture.call(this, null, scaleMode);

	  this.resolution = resolution || CONST.RESOLUTION;

	  this.width = width || 100;
	  this.height = height || 100;

	  this.realWidth = this.width * this.resolution;
	  this.realHeight = this.height * this.resolution;

	  this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
	  this.hasLoaded = true;

	  this._glRenderTargets = [];

	  this._canvasRenderTarget = null;

	  this.valid = false;
	}

	BaseRenderTexture.prototype = Object.create(BaseTexture.prototype);
	BaseRenderTexture.prototype.constructor = BaseRenderTexture;
	module.exports = BaseRenderTexture;

	BaseRenderTexture.prototype.resize = function (width, height) {

	  if (width === this.width && height === this.height) {
	    return;
	  }

	  this.valid = width > 0 && height > 0;

	  this.width = width;
	  this.height = height;

	  this.realWidth = this.width * this.resolution;
	  this.realHeight = this.height * this.resolution;

	  if (!this.valid) {
	    return;
	  }

	  this.emit('update', this);
	};

	BaseRenderTexture.prototype.destroy = function () {
	  BaseTexture.prototype.destroy.call(this, true);
	  this.renderer = null;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function CanvasMaskManager(renderer) {
	    this.renderer = renderer;
	}

	CanvasMaskManager.prototype.constructor = CanvasMaskManager;
	module.exports = CanvasMaskManager;

	CanvasMaskManager.prototype.pushMask = function (maskData) {
	    var renderer = this.renderer;

	    renderer.context.save();

	    var cacheAlpha = maskData.alpha;
	    var transform = maskData.transform.worldTransform;
	    var resolution = renderer.resolution;

	    renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

	    if (!maskData._texture) {
	        this.renderGraphicsShape(maskData);
	        renderer.context.clip();
	    }

	    maskData.worldAlpha = cacheAlpha;
	};

	CanvasMaskManager.prototype.renderGraphicsShape = function (graphics) {
	    var context = this.renderer.context;
	    var len = graphics.graphicsData.length;

	    if (len === 0) {
	        return;
	    }

	    context.beginPath();

	    for (var i = 0; i < len; i++) {
	        var data = graphics.graphicsData[i];
	        var shape = data.shape;

	        if (data.type === CONST.SHAPES.POLY) {

	            var points = shape.points;

	            context.moveTo(points[0], points[1]);

	            for (var j = 1; j < points.length / 2; j++) {
	                context.lineTo(points[j * 2], points[j * 2 + 1]);
	            }

	            if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
	                context.closePath();
	            }
	        } else if (data.type === CONST.SHAPES.RECT) {
	            context.rect(shape.x, shape.y, shape.width, shape.height);
	            context.closePath();
	        } else if (data.type === CONST.SHAPES.CIRC) {
	            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	            context.closePath();
	        } else if (data.type === CONST.SHAPES.ELIP) {

	            var w = shape.width * 2;
	            var h = shape.height * 2;

	            var x = shape.x - w / 2;
	            var y = shape.y - h / 2;

	            var kappa = 0.5522848,
	                ox = w / 2 * kappa,
	                oy = h / 2 * kappa,
	                xe = x + w,
	                ye = y + h,
	                xm = x + w / 2,
	                ym = y + h / 2;

	            context.moveTo(x, ym);
	            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	            context.closePath();
	        } else if (data.type === CONST.SHAPES.RREC) {

	            var rx = shape.x;
	            var ry = shape.y;
	            var width = shape.width;
	            var height = shape.height;
	            var radius = shape.radius;

	            var maxRadius = Math.min(width, height) / 2 | 0;
	            radius = radius > maxRadius ? maxRadius : radius;

	            context.moveTo(rx, ry + radius);
	            context.lineTo(rx, ry + height - radius);
	            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
	            context.lineTo(rx + width - radius, ry + height);
	            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
	            context.lineTo(rx + width, ry + radius);
	            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
	            context.lineTo(rx + radius, ry);
	            context.quadraticCurveTo(rx, ry, rx, ry + radius);
	            context.closePath();
	        }
	    }
	};

	CanvasMaskManager.prototype.popMask = function (renderer) {
	    renderer.context.restore();
	};

	CanvasMaskManager.prototype.destroy = function () {};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function CanvasRenderTarget(width, height, resolution) {
	    this.canvas = document.createElement('canvas');

	    this.context = this.canvas.getContext('2d');

	    this.resolution = resolution || CONST.RESOLUTION;

	    this.resize(width, height);
	}

	CanvasRenderTarget.prototype.constructor = CanvasRenderTarget;
	module.exports = CanvasRenderTarget;

	Object.defineProperties(CanvasRenderTarget.prototype, {
	    width: {
	        get: function get() {
	            return this.canvas.width;
	        },
	        set: function set(val) {
	            this.canvas.width = val;
	        }
	    },

	    height: {
	        get: function get() {
	            return this.canvas.height;
	        },
	        set: function set(val) {
	            this.canvas.height = val;
	        }
	    }
	});

	CanvasRenderTarget.prototype.clear = function () {
	    this.context.setTransform(1, 0, 0, 1, 0, 0);
	    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	CanvasRenderTarget.prototype.resize = function (width, height) {

	    this.canvas.width = width * this.resolution;
	    this.canvas.height = height * this.resolution;
	};

	CanvasRenderTarget.prototype.destroy = function () {
	    this.context = null;
	    this.canvas = null;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8),
	    canUseNewCanvasBlendModes = __webpack_require__(54);

	function mapCanvasBlendModesToPixi(array) {
	    array = array || [];

	    if (canUseNewCanvasBlendModes()) {
	        array[CONST.BLEND_MODES.NORMAL] = 'source-over';
	        array[CONST.BLEND_MODES.ADD] = 'lighter';
	        array[CONST.BLEND_MODES.MULTIPLY] = 'multiply';
	        array[CONST.BLEND_MODES.SCREEN] = 'screen';
	        array[CONST.BLEND_MODES.OVERLAY] = 'overlay';
	        array[CONST.BLEND_MODES.DARKEN] = 'darken';
	        array[CONST.BLEND_MODES.LIGHTEN] = 'lighten';
	        array[CONST.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
	        array[CONST.BLEND_MODES.COLOR_BURN] = 'color-burn';
	        array[CONST.BLEND_MODES.HARD_LIGHT] = 'hard-light';
	        array[CONST.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
	        array[CONST.BLEND_MODES.DIFFERENCE] = 'difference';
	        array[CONST.BLEND_MODES.EXCLUSION] = 'exclusion';
	        array[CONST.BLEND_MODES.HUE] = 'hue';
	        array[CONST.BLEND_MODES.SATURATION] = 'saturate';
	        array[CONST.BLEND_MODES.COLOR] = 'color';
	        array[CONST.BLEND_MODES.LUMINOSITY] = 'luminosity';
	    } else {
	        array[CONST.BLEND_MODES.NORMAL] = 'source-over';
	        array[CONST.BLEND_MODES.ADD] = 'lighter';
	        array[CONST.BLEND_MODES.MULTIPLY] = 'source-over';
	        array[CONST.BLEND_MODES.SCREEN] = 'source-over';
	        array[CONST.BLEND_MODES.OVERLAY] = 'source-over';
	        array[CONST.BLEND_MODES.DARKEN] = 'source-over';
	        array[CONST.BLEND_MODES.LIGHTEN] = 'source-over';
	        array[CONST.BLEND_MODES.COLOR_DODGE] = 'source-over';
	        array[CONST.BLEND_MODES.COLOR_BURN] = 'source-over';
	        array[CONST.BLEND_MODES.HARD_LIGHT] = 'source-over';
	        array[CONST.BLEND_MODES.SOFT_LIGHT] = 'source-over';
	        array[CONST.BLEND_MODES.DIFFERENCE] = 'source-over';
	        array[CONST.BLEND_MODES.EXCLUSION] = 'source-over';
	        array[CONST.BLEND_MODES.HUE] = 'source-over';
	        array[CONST.BLEND_MODES.SATURATION] = 'source-over';
	        array[CONST.BLEND_MODES.COLOR] = 'source-over';
	        array[CONST.BLEND_MODES.LUMINOSITY] = 'source-over';
	    }

	    return array;
	}

	module.exports = mapCanvasBlendModesToPixi;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	var createColoredCanvas = function createColoredCanvas(color) {
	    var canvas = document.createElement('canvas');
	    canvas.width = 6;
	    canvas.height = 1;

	    var context = canvas.getContext('2d');
	    context.fillStyle = color;
	    context.fillRect(0, 0, 6, 1);
	    return canvas;
	};

	var canUseNewCanvasBlendModes = function canUseNewCanvasBlendModes() {
	    if (typeof document === 'undefined') {
	        return false;
	    }

	    var magenta = createColoredCanvas('#ff00ff');
	    var yellow = createColoredCanvas('#ffff00');

	    var canvas = document.createElement('canvas');
	    canvas.width = 6;
	    canvas.height = 1;

	    var context = canvas.getContext('2d');
	    context.globalCompositeOperation = 'multiply';
	    context.drawImage(magenta, 0, 0);
	    context.drawImage(yellow, 2, 0);

	    var imageData = context.getImageData(2, 0, 1, 1);

	    if (!imageData) {
	        return false;
	    }

	    var data = imageData.data;

	    return data[0] === 255 && data[1] === 0 && data[2] === 0;
	};

	module.exports = canUseNewCanvasBlendModes;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(21),
	    canUseNewCanvasBlendModes = __webpack_require__(54);

	var CanvasTinter = module.exports = {
	    getTintedTexture: function getTintedTexture(sprite, color) {
	        var texture = sprite.texture;

	        color = CanvasTinter.roundColor(color);

	        var stringColor = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

	        texture.tintCache = texture.tintCache || {};

	        if (texture.tintCache[stringColor]) {
	            return texture.tintCache[stringColor];
	        }

	        var canvas = CanvasTinter.canvas || document.createElement('canvas');

	        CanvasTinter.tintMethod(texture, color, canvas);

	        if (CanvasTinter.convertTintToImage) {
	            var tintImage = new Image();
	            tintImage.src = canvas.toDataURL();

	            texture.tintCache[stringColor] = tintImage;
	        } else {
	            texture.tintCache[stringColor] = canvas;

	            CanvasTinter.canvas = null;
	        }

	        return canvas;
	    },

	    tintWithMultiply: function tintWithMultiply(texture, color, canvas) {
	        var context = canvas.getContext('2d');
	        var crop = texture._frame.clone();
	        var resolution = texture.baseTexture.resolution;

	        crop.x *= resolution;
	        crop.y *= resolution;
	        crop.width *= resolution;
	        crop.height *= resolution;

	        canvas.width = crop.width;
	        canvas.height = crop.height;

	        context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

	        context.fillRect(0, 0, crop.width, crop.height);

	        context.globalCompositeOperation = 'multiply';

	        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

	        context.globalCompositeOperation = 'destination-atop';

	        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
	    },

	    tintWithOverlay: function tintWithOverlay(texture, color, canvas) {
	        var context = canvas.getContext('2d');
	        var crop = texture._frame.clone();
	        var resolution = texture.baseTexture.resolution;

	        crop.x *= resolution;
	        crop.y *= resolution;
	        crop.width *= resolution;
	        crop.height *= resolution;

	        canvas.width = crop.width;
	        canvas.height = crop.height;

	        context.globalCompositeOperation = 'copy';
	        context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
	        context.fillRect(0, 0, crop.width, crop.height);

	        context.globalCompositeOperation = 'destination-atop';
	        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
	    },

	    tintWithPerPixel: function tintWithPerPixel(texture, color, canvas) {
	        var context = canvas.getContext('2d');
	        var crop = texture._frame.clone();
	        var resolution = texture.baseTexture.resolution;

	        crop.x *= resolution;
	        crop.y *= resolution;
	        crop.width *= resolution;
	        crop.height *= resolution;

	        canvas.width = crop.width;
	        canvas.height = crop.height;

	        context.globalCompositeOperation = 'copy';
	        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

	        var rgbValues = utils.hex2rgb(color);
	        var r = rgbValues[0],
	            g = rgbValues[1],
	            b = rgbValues[2];

	        var pixelData = context.getImageData(0, 0, crop.width, crop.height);

	        var pixels = pixelData.data;

	        for (var i = 0; i < pixels.length; i += 4) {
	            pixels[i + 0] *= r;
	            pixels[i + 1] *= g;
	            pixels[i + 2] *= b;
	        }

	        context.putImageData(pixelData, 0, 0);
	    },

	    roundColor: function roundColor(color) {
	        var step = CanvasTinter.cacheStepsPerColorChannel;

	        var rgbValues = utils.hex2rgb(color);

	        rgbValues[0] = Math.min(255, rgbValues[0] / step * step);
	        rgbValues[1] = Math.min(255, rgbValues[1] / step * step);
	        rgbValues[2] = Math.min(255, rgbValues[2] / step * step);

	        return utils.rgb2hex(rgbValues);
	    },

	    cacheStepsPerColorChannel: 8,

	    convertTintToImage: false,

	    canUseMultiply: canUseNewCanvasBlendModes(),

	    tintMethod: 0
	};

	CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ObjectRenderer = __webpack_require__(57),
	    WebGLRenderer = __webpack_require__(59),
	    createIndicesForQuads = __webpack_require__(85),
	    generateMultiTextureShader = __webpack_require__(94),
	    checkMaxIfStatmentsInShader = __webpack_require__(95),
	    Buffer = __webpack_require__(96),
	    CONST = __webpack_require__(8),
	    glCore = __webpack_require__(64),
	    bitTwiddle = __webpack_require__(43);

	var TICK = 0;

	function SpriteRenderer(renderer) {
	    ObjectRenderer.call(this, renderer);

	    this.vertSize = 5;

	    this.vertByteSize = this.vertSize * 4;

	    this.size = CONST.SPRITE_BATCH_SIZE;

	    this.buffers = [];
	    for (var i = 1; i <= bitTwiddle.nextPow2(this.size); i *= 2) {
	        var numVertsTemp = i * 4 * this.vertByteSize;
	        this.buffers.push(new Buffer(numVertsTemp));
	    }

	    this.indices = createIndicesForQuads(this.size);

	    this.shaders = null;

	    this.currentIndex = 0;
	    TICK = 0;
	    this.groups = [];

	    for (var k = 0; k < this.size; k++) {
	        this.groups[k] = { textures: [], textureCount: 0, ids: [], size: 0, start: 0, blend: 0 };
	    }

	    this.sprites = [];

	    this.vertexBuffers = [];
	    this.vaos = [];

	    this.vaoMax = 2;
	    this.vertexCount = 0;

	    this.renderer.on('prerender', this.onPrerender, this);
	}

	SpriteRenderer.prototype = Object.create(ObjectRenderer.prototype);
	SpriteRenderer.prototype.constructor = SpriteRenderer;
	module.exports = SpriteRenderer;

	WebGLRenderer.registerPlugin('sprite', SpriteRenderer);

	SpriteRenderer.prototype.onContextChange = function () {
	    var gl = this.renderer.gl;

	    this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), CONST.SPRITE_MAX_TEXTURES);

	    this.MAX_TEXTURES = checkMaxIfStatmentsInShader(this.MAX_TEXTURES, gl);

	    this.shaders = new Array(this.MAX_TEXTURES);
	    this.shaders[0] = generateMultiTextureShader(gl, 1);
	    this.shaders[1] = generateMultiTextureShader(gl, 2);

	    this.indexBuffer = glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

	    var shader = this.shaders[1];

	    for (var i = 0; i < this.vaoMax; i++) {
	        this.vertexBuffers[i] = glCore.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);

	        this.vaos[i] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[i], shader.attributes.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0).addAttribute(this.vertexBuffers[i], shader.attributes.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(this.vertexBuffers[i], shader.attributes.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4).addAttribute(this.vertexBuffers[i], shader.attributes.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4);
	    }

	    this.vao = this.vaos[0];
	    this.currentBlendMode = 99999;
	};

	SpriteRenderer.prototype.onPrerender = function () {
	    this.vertexCount = 0;
	};

	SpriteRenderer.prototype.render = function (sprite) {
	    if (this.currentIndex >= this.size) {
	        this.flush();
	    }

	    if (!sprite.texture._uvs) {
	        return;
	    }

	    this.sprites[this.currentIndex++] = sprite;
	};

	SpriteRenderer.prototype.flush = function () {
	    if (this.currentIndex === 0) {
	        return;
	    }

	    var gl = this.renderer.gl;

	    var np2 = bitTwiddle.nextPow2(this.currentIndex);
	    var log2 = bitTwiddle.log2(np2);
	    var buffer = this.buffers[log2];

	    var sprites = this.sprites;
	    var groups = this.groups;

	    var float32View = buffer.float32View;
	    var uint32View = buffer.uint32View;

	    var index = 0;
	    var nextTexture;
	    var currentTexture;
	    var groupCount = 1;
	    var textureCount = 0;
	    var currentGroup = groups[0];
	    var vertexData;
	    var tint;
	    var uvs;
	    var textureId;
	    var blendMode = sprites[0].blendMode;
	    var shader;

	    currentGroup.textureCount = 0;
	    currentGroup.start = 0;
	    currentGroup.blend = blendMode;

	    TICK++;

	    for (var i = 0; i < this.currentIndex; i++) {
	        var sprite = sprites[i];

	        nextTexture = sprite._texture.baseTexture;

	        if (blendMode !== sprite.blendMode) {
	            blendMode = sprite.blendMode;

	            currentTexture = null;
	            textureCount = this.MAX_TEXTURES;
	            TICK++;
	        }

	        if (currentTexture !== nextTexture) {
	            currentTexture = nextTexture;

	            if (nextTexture._enabled !== TICK) {
	                if (textureCount === this.MAX_TEXTURES) {
	                    TICK++;

	                    textureCount = 0;

	                    currentGroup.size = i - currentGroup.start;

	                    currentGroup = groups[groupCount++];
	                    currentGroup.textureCount = 0;
	                    currentGroup.blend = blendMode;
	                    currentGroup.start = i;
	                }

	                nextTexture._enabled = TICK;
	                nextTexture._id = textureCount;

	                currentGroup.textures[currentGroup.textureCount++] = nextTexture;
	                textureCount++;
	            }
	        }

	        vertexData = sprite.vertexData;

	        tint = sprite._tintRGB + (sprite.worldAlpha * 255 << 24);
	        uvs = sprite._texture._uvs.uvsUint32;
	        textureId = nextTexture._id;

	        if (this.renderer.roundPixels) {
	            var resolution = this.renderer.resolution;

	            float32View[index] = (vertexData[0] * resolution | 0) / resolution;
	            float32View[index + 1] = (vertexData[1] * resolution | 0) / resolution;

	            float32View[index + 5] = (vertexData[2] * resolution | 0) / resolution;
	            float32View[index + 6] = (vertexData[3] * resolution | 0) / resolution;

	            float32View[index + 10] = (vertexData[4] * resolution | 0) / resolution;
	            float32View[index + 11] = (vertexData[5] * resolution | 0) / resolution;

	            float32View[index + 15] = (vertexData[6] * resolution | 0) / resolution;
	            float32View[index + 16] = (vertexData[7] * resolution | 0) / resolution;
	        } else {
	            float32View[index] = vertexData[0];
	            float32View[index + 1] = vertexData[1];

	            float32View[index + 5] = vertexData[2];
	            float32View[index + 6] = vertexData[3];

	            float32View[index + 10] = vertexData[4];
	            float32View[index + 11] = vertexData[5];

	            float32View[index + 15] = vertexData[6];
	            float32View[index + 16] = vertexData[7];
	        }

	        uint32View[index + 2] = uvs[0];
	        uint32View[index + 7] = uvs[1];
	        uint32View[index + 12] = uvs[2];
	        uint32View[index + 17] = uvs[3];

	        uint32View[index + 3] = uint32View[index + 8] = uint32View[index + 13] = uint32View[index + 18] = tint;
	        float32View[index + 4] = float32View[index + 9] = float32View[index + 14] = float32View[index + 19] = textureId;

	        index += 20;
	    }

	    currentGroup.size = i - currentGroup.start;

	    this.vertexCount++;

	    if (this.vaoMax <= this.vertexCount) {
	        this.vaoMax++;
	        shader = this.shaders[1];
	        this.vertexBuffers[this.vertexCount] = glCore.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);

	        this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount], shader.attributes.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], shader.attributes.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(this.vertexBuffers[this.vertexCount], shader.attributes.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4).addAttribute(this.vertexBuffers[this.vertexCount], shader.attributes.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4);
	    }

	    this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0);
	    this.vao = this.vaos[this.vertexCount].bind();

	    for (i = 0; i < groupCount; i++) {

	        var group = groups[i];
	        var groupTextureCount = group.textureCount;
	        shader = this.shaders[groupTextureCount - 1];

	        if (!shader) {
	            shader = this.shaders[groupTextureCount - 1] = generateMultiTextureShader(gl, groupTextureCount);
	        }

	        this.renderer.bindShader(shader);

	        for (var j = 0; j < groupTextureCount; j++) {
	            this.renderer.bindTexture(group.textures[j], j);
	        }

	        this.renderer.state.setBlendMode(group.blend);

	        gl.drawElements(gl.TRIANGLES, group.size * 6, gl.UNSIGNED_SHORT, group.start * 6 * 2);
	    }

	    this.currentIndex = 0;
	};

	SpriteRenderer.prototype.start = function () {};

	SpriteRenderer.prototype.stop = function () {
	    this.flush();
	    this.vao.unbind();
	};

	SpriteRenderer.prototype.destroy = function () {
	    for (var i = 0; i < this.vaoMax; i++) {
	        this.vertexBuffers[i].destroy();
	        this.vaos[i].destroy();
	    }

	    this.indexBuffer.destroy();

	    this.renderer.off('prerender', this.onPrerender, this);
	    ObjectRenderer.prototype.destroy.call(this);

	    for (i = 0; i < this.shaders.length; i++) {

	        if (this.shaders[i]) {
	            this.shaders[i].destroy();
	        }
	    }

	    this.vertexBuffers = null;
	    this.vaos = null;
	    this.indexBuffer = null;
	    this.indices = null;

	    this.sprites = null;

	    for (i = 0; i < this.buffers.length; i++) {
	        this.buffers[i].destroy();
	    }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var WebGLManager = __webpack_require__(58);

	function ObjectRenderer(renderer) {
	  WebGLManager.call(this, renderer);
	}

	ObjectRenderer.prototype = Object.create(WebGLManager.prototype);
	ObjectRenderer.prototype.constructor = ObjectRenderer;
	module.exports = ObjectRenderer;

	ObjectRenderer.prototype.start = function () {};

	ObjectRenderer.prototype.stop = function () {
	  this.flush();
	};

	ObjectRenderer.prototype.flush = function () {};

	ObjectRenderer.prototype.render = function (object) {};

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	function WebGLManager(renderer) {
	  this.renderer = renderer;

	  this.renderer.on('context', this.onContextChange, this);
	}

	WebGLManager.prototype.constructor = WebGLManager;
	module.exports = WebGLManager;

	WebGLManager.prototype.onContextChange = function () {};

	WebGLManager.prototype.destroy = function () {
	  this.renderer.off('context', this.onContextChange, this);

	  this.renderer = null;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SystemRenderer = __webpack_require__(48),
	    MaskManager = __webpack_require__(60),
	    StencilManager = __webpack_require__(81),
	    FilterManager = __webpack_require__(82),
	    RenderTarget = __webpack_require__(83),
	    ObjectRenderer = __webpack_require__(57),
	    TextureManager = __webpack_require__(88),
	    TextureGarbageCollector = __webpack_require__(89),
	    WebGLState = __webpack_require__(90),
	    createContext = __webpack_require__(64).createContext,
	    mapWebGLDrawModesToPixi = __webpack_require__(92),
	    validateContext = __webpack_require__(93),
	    utils = __webpack_require__(21),
	    glCore = __webpack_require__(64),
	    CONST = __webpack_require__(8);

	var CONTEXT_UID = 0;

	function WebGLRenderer(width, height, options) {
	    options = options || {};

	    SystemRenderer.call(this, 'WebGL', width, height, options);

	    this.type = CONST.RENDERER_TYPE.WEBGL;

	    this.handleContextLost = this.handleContextLost.bind(this);
	    this.handleContextRestored = this.handleContextRestored.bind(this);

	    this.view.addEventListener('webglcontextlost', this.handleContextLost, false);
	    this.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);

	    this._contextOptions = {
	        alpha: this.transparent,
	        antialias: options.antialias,
	        premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
	        stencil: true,
	        preserveDrawingBuffer: options.preserveDrawingBuffer
	    };

	    this._backgroundColorRgba[3] = this.transparent ? 0 : 1;

	    this.maskManager = new MaskManager(this);

	    this.stencilManager = new StencilManager(this);

	    this.emptyRenderer = new ObjectRenderer(this);

	    this.currentRenderer = this.emptyRenderer;

	    this.initPlugins();

	    if (options.context) {
	        validateContext(options.context);
	    }

	    this.gl = options.context || createContext(this.view, this._contextOptions);

	    this.CONTEXT_UID = CONTEXT_UID++;

	    this.state = new WebGLState(this.gl);

	    this.renderingToScreen = true;

	    this._initContext();

	    this.filterManager = new FilterManager(this);

	    this.drawModes = mapWebGLDrawModesToPixi(this.gl);

	    this._activeShader = null;

	    this._activeRenderTarget = null;
	    this._activeTextureLocation = 999;
	    this._activeTexture = null;

	    this.setBlendMode(0);
	}

	WebGLRenderer.prototype = Object.create(SystemRenderer.prototype);
	WebGLRenderer.prototype.constructor = WebGLRenderer;
	module.exports = WebGLRenderer;
	utils.pluginTarget.mixin(WebGLRenderer);

	WebGLRenderer.prototype._initContext = function () {
	    var gl = this.gl;

	    this.textureManager = new TextureManager(this);
	    this.textureGC = new TextureGarbageCollector(this);

	    this.state.resetToDefault();

	    this.rootRenderTarget = new RenderTarget(gl, this.width, this.height, null, this.resolution, true);
	    this.rootRenderTarget.clearColor = this._backgroundColorRgba;

	    this.bindRenderTarget(this.rootRenderTarget);

	    this.emit('context', gl);

	    this.resize(this.width, this.height);
	};

	WebGLRenderer.prototype.render = function (displayObject, renderTexture, clear, transform, skipUpdateTransform) {
	    this.renderingToScreen = !renderTexture;

	    this.emit('prerender');

	    if (!this.gl || this.gl.isContextLost()) {
	        return;
	    }

	    if (!renderTexture) {
	        this._lastObjectRendered = displayObject;
	    }

	    if (!skipUpdateTransform) {
	        var cacheParent = displayObject.parent;
	        displayObject.parent = this._tempDisplayObjectParent;
	        displayObject.updateTransform();
	        displayObject.parent = cacheParent;
	    }

	    this.bindRenderTexture(renderTexture, transform);

	    this.currentRenderer.start();

	    if (clear !== undefined ? clear : this.clearBeforeRender) {
	        this._activeRenderTarget.clear();
	    }

	    displayObject.renderWebGL(this);

	    this.currentRenderer.flush();

	    this.textureGC.update();

	    this.emit('postrender');
	};

	WebGLRenderer.prototype.setObjectRenderer = function (objectRenderer) {
	    if (this.currentRenderer === objectRenderer) {
	        return;
	    }

	    this.currentRenderer.stop();
	    this.currentRenderer = objectRenderer;
	    this.currentRenderer.start();
	};

	WebGLRenderer.prototype.flush = function () {
	    this.setObjectRenderer(this.emptyRenderer);
	};

	WebGLRenderer.prototype.resize = function (width, height) {

	    SystemRenderer.prototype.resize.call(this, width, height);

	    this.rootRenderTarget.resize(width, height);

	    if (this._activeRenderTarget === this.rootRenderTarget) {
	        this.rootRenderTarget.activate();

	        if (this._activeShader) {
	            this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(true);
	        }
	    }
	};

	WebGLRenderer.prototype.setBlendMode = function (blendMode) {
	    this.state.setBlendMode(blendMode);
	};

	WebGLRenderer.prototype.clear = function (clearColor) {
	    this._activeRenderTarget.clear(clearColor);
	};

	WebGLRenderer.prototype.setTransform = function (matrix) {
	    this._activeRenderTarget.transform = matrix;
	};

	WebGLRenderer.prototype.bindRenderTexture = function (renderTexture, transform) {
	    var renderTarget;

	    if (renderTexture) {
	        var baseTexture = renderTexture.baseTexture;
	        var gl = this.gl;

	        if (!baseTexture._glRenderTargets[this.CONTEXT_UID]) {

	            this.textureManager.updateTexture(baseTexture);
	            gl.bindTexture(gl.TEXTURE_2D, null);
	        } else {
	            this._activeTextureLocation = baseTexture._id;
	            gl.activeTexture(gl.TEXTURE0 + baseTexture._id);
	            gl.bindTexture(gl.TEXTURE_2D, null);
	        }

	        renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
	        renderTarget.setFrame(renderTexture.frame);
	    } else {
	        renderTarget = this.rootRenderTarget;
	    }

	    renderTarget.transform = transform;
	    this.bindRenderTarget(renderTarget);

	    return this;
	};

	WebGLRenderer.prototype.bindRenderTarget = function (renderTarget) {
	    if (renderTarget !== this._activeRenderTarget) {
	        this._activeRenderTarget = renderTarget;
	        renderTarget.activate();

	        if (this._activeShader) {
	            this._activeShader.uniforms.projectionMatrix = renderTarget.projectionMatrix.toArray(true);
	        }

	        this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
	    }

	    return this;
	};

	WebGLRenderer.prototype.bindShader = function (shader) {
	    if (this._activeShader !== shader) {
	        this._activeShader = shader;
	        shader.bind();

	        shader.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(true);
	    }

	    return this;
	};

	WebGLRenderer.prototype.bindTexture = function (texture, location) {
	    texture = texture.baseTexture || texture;

	    var gl = this.gl;

	    location = location || 0;

	    if (this._activeTextureLocation !== location) {
	            this._activeTextureLocation = location;
	            gl.activeTexture(gl.TEXTURE0 + location);
	        }

	    this._activeTexture = texture;

	    if (!texture._glTextures[this.CONTEXT_UID]) {
	        this.textureManager.updateTexture(texture);
	    } else {
	        texture.touched = this.textureGC.count;

	        texture._glTextures[this.CONTEXT_UID].bind();
	    }

	    return this;
	};

	WebGLRenderer.prototype.createVao = function () {
	    return new glCore.VertexArrayObject(this.gl, this.state.attribState);
	};

	WebGLRenderer.prototype.reset = function () {
	    this.setObjectRenderer(this.emptyRenderer);

	    this._activeShader = null;
	    this._activeRenderTarget = this.rootRenderTarget;
	    this._activeTextureLocation = 999;
	    this._activeTexture = null;

	    this.rootRenderTarget.activate();

	    this.state.resetToDefault();

	    return this;
	};

	WebGLRenderer.prototype.handleContextLost = function (event) {
	    event.preventDefault();
	};

	WebGLRenderer.prototype.handleContextRestored = function () {
	    this._initContext();
	    this.textureManager.removeAll();
	};

	WebGLRenderer.prototype.destroy = function (removeView) {
	    this.destroyPlugins();

	    this.view.removeEventListener('webglcontextlost', this.handleContextLost);
	    this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);

	    this.textureManager.destroy();

	    SystemRenderer.prototype.destroy.call(this, removeView);

	    this.uid = 0;

	    this.maskManager.destroy();
	    this.stencilManager.destroy();
	    this.filterManager.destroy();

	    this.maskManager = null;
	    this.filterManager = null;
	    this.textureManager = null;
	    this.currentRenderer = null;

	    this.handleContextLost = null;
	    this.handleContextRestored = null;

	    this._contextOptions = null;
	    this.gl.useProgram(null);

	    if (this.gl.getExtension('WEBGL_lose_context')) {
	        this.gl.getExtension('WEBGL_lose_context').loseContext();
	    }

	    this.gl = null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var WebGLManager = __webpack_require__(58),
	    AlphaMaskFilter = __webpack_require__(61);

	function MaskManager(renderer) {
	    WebGLManager.call(this, renderer);

	    this.scissor = false;
	    this.scissorData = null;
	    this.scissorRenderTarget = null;

	    this.enableScissor = true;

	    this.alphaMaskPool = [];
	    this.alphaMaskIndex = 0;
	}

	MaskManager.prototype = Object.create(WebGLManager.prototype);
	MaskManager.prototype.constructor = MaskManager;
	module.exports = MaskManager;

	MaskManager.prototype.pushMask = function (target, maskData) {
	    if (maskData.texture) {
	        this.pushSpriteMask(target, maskData);
	    } else {
	        if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && maskData.isFastRect()) {
	            var matrix = maskData.worldTransform;

	            var rot = Math.atan2(matrix.b, matrix.a);

	            rot = Math.round(rot * (180 / Math.PI));

	            if (rot % 90) {
	                this.pushStencilMask(maskData);
	            } else {
	                this.pushScissorMask(target, maskData);
	            }
	        } else {
	            this.pushStencilMask(maskData);
	        }
	    }
	};

	MaskManager.prototype.popMask = function (target, maskData) {
	    if (maskData.texture) {
	        this.popSpriteMask(target, maskData);
	    } else {
	        if (this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length) {
	            this.popScissorMask(target, maskData);
	        } else {
	            this.popStencilMask(target, maskData);
	        }
	    }
	};

	MaskManager.prototype.pushSpriteMask = function (target, maskData) {
	    var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];

	    if (!alphaMaskFilter) {
	        alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new AlphaMaskFilter(maskData)];
	    }

	    alphaMaskFilter[0].resolution = this.renderer.resolution;
	    alphaMaskFilter[0].maskSprite = maskData;

	    target.filterArea = maskData.getBounds(true);

	    this.renderer.filterManager.pushFilter(target, alphaMaskFilter);

	    this.alphaMaskIndex++;
	};

	MaskManager.prototype.popSpriteMask = function () {
	    this.renderer.filterManager.popFilter();
	    this.alphaMaskIndex--;
	};

	MaskManager.prototype.pushStencilMask = function (maskData) {
	    this.renderer.currentRenderer.stop();
	    this.renderer.stencilManager.pushStencil(maskData);
	};

	MaskManager.prototype.popStencilMask = function () {
	    this.renderer.currentRenderer.stop();
	    this.renderer.stencilManager.popStencil();
	};

	MaskManager.prototype.pushScissorMask = function (target, maskData) {
	    maskData.renderable = true;

	    var renderTarget = this.renderer._activeRenderTarget;

	    var bounds = maskData.getBounds();

	    bounds.fit(renderTarget.size);
	    maskData.renderable = false;

	    this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);

	    var resolution = this.renderer.resolution;
	    this.renderer.gl.scissor(bounds.x * resolution, (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y) * resolution, bounds.width * resolution, bounds.height * resolution);

	    this.scissorRenderTarget = renderTarget;
	    this.scissorData = maskData;
	    this.scissor = true;
	};

	MaskManager.prototype.popScissorMask = function () {
	    this.scissorRenderTarget = null;
	    this.scissorData = null;
	    this.scissor = false;

	    var gl = this.renderer.gl;
	    gl.disable(gl.SCISSOR_TEST);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Filter = __webpack_require__(62),
	    math = __webpack_require__(11);

	var glslify = __webpack_require__(80);

	function SpriteMaskFilter(sprite) {
	    var maskMatrix = new math.Matrix();

	    Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n', '#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n');

	    sprite.renderable = false;

	    this.maskSprite = sprite;
	    this.maskMatrix = maskMatrix;
	}

	SpriteMaskFilter.prototype = Object.create(Filter.prototype);
	SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;
	module.exports = SpriteMaskFilter;

	SpriteMaskFilter.prototype.apply = function (filterManager, input, output) {
	    var maskSprite = this.maskSprite;

	    this.uniforms.mask = maskSprite._texture;
	    this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite);
	    this.uniforms.alpha = maskSprite.worldAlpha;

	    filterManager.applyFilter(this, input, output);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var extractUniformsFromSrc = __webpack_require__(63),
	    utils = __webpack_require__(21),
	    CONST = __webpack_require__(8),
	    SOURCE_KEY_MAP = {};

	function Filter(vertexSrc, fragmentSrc, uniforms) {
	  this.vertexSrc = vertexSrc || Filter.defaultVertexSrc;

	  this.fragmentSrc = fragmentSrc || Filter.defaultFragmentSrc;

	  this.blendMode = CONST.BLEND_MODES.NORMAL;

	  this.uniformData = uniforms || extractUniformsFromSrc(this.vertexSrc, this.fragmentSrc, 'projectionMatrix|uSampler');

	  this.uniforms = {};

	  for (var i in this.uniformData) {
	    this.uniforms[i] = this.uniformData[i].value;
	  }

	  this.glShaders = [];

	  if (!SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc]) {
	    SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc] = utils.uid();
	  }

	  this.glShaderKey = SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc];

	  this.padding = 4;

	  this.resolution = 1;

	  this.enabled = true;
	}

	module.exports = Filter;

	Filter.prototype.apply = function (filterManager, input, output, clear) {

	  filterManager.applyFilter(this, input, output, clear);
	};

	Filter.defaultVertexSrc = ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 projectionMatrix;', 'uniform mat3 filterMatrix;', 'varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;', '   vTextureCoord = aTextureCoord ;', '}'].join('\n');

	Filter.defaultFragmentSrc = ['varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'uniform sampler2D uSampler;', 'uniform sampler2D filterSampler;', 'void main(void){', '   vec4 masky = texture2D(filterSampler, vFilterCoord);', '   vec4 sample = texture2D(uSampler, vTextureCoord);', '   vec4 color;', '   if(mod(vFilterCoord.x, 1.0) > 0.5)', '   {', '     color = vec4(1.0, 0.0, 0.0, 1.0);', '   }', '   else', '   {', '     color = vec4(0.0, 1.0, 0.0, 1.0);', '   }', '   gl_FragColor = mix(sample, masky, 0.5);', '   gl_FragColor *= sample.a;', '}'].join('\n');

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaultValue = __webpack_require__(64).shader.defaultValue;

	function extractUniformsFromSrc(vertexSrc, fragmentSrc, mask) {
	    var vertUniforms = extractUniformsFromString(vertexSrc, mask);
	    var fragUniforms = extractUniformsFromString(fragmentSrc, mask);

	    return Object.assign(vertUniforms, fragUniforms);
	}

	function extractUniformsFromString(string) {
	    var maskRegex = new RegExp('^(projectionMatrix|uSampler|filterArea)$');

	    var uniforms = {};
	    var nameSplit;

	    var lines = string.replace(/\s+/g, ' ').split(/\s*;\s*/);

	    for (var i = 0; i < lines.length; i++) {
	        var line = lines[i].trim();

	        if (line.indexOf('uniform') > -1) {
	            var splitLine = line.split(' ');
	            var type = splitLine[1];

	            var name = splitLine[2];
	            var size = 1;

	            if (name.indexOf('[') > -1) {
	                nameSplit = name.split(/\[|\]/);
	                name = nameSplit[0];
	                size *= Number(nameSplit[1]);
	            }

	            if (!name.match(maskRegex)) {
	                uniforms[name] = {
	                    value: defaultValue(type, size),
	                    name: name,
	                    type: type
	                };
	            }
	        }
	    }

	    return uniforms;
	}

	module.exports = extractUniformsFromSrc;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var gl = {
	    createContext: __webpack_require__(65),
	    setVertexAttribArrays: __webpack_require__(66),
	    GLBuffer: __webpack_require__(67),
	    GLFramebuffer: __webpack_require__(68),
	    GLShader: __webpack_require__(70),
	    GLTexture: __webpack_require__(69),
	    VertexArrayObject: __webpack_require__(78),
	    shader: __webpack_require__(79)
	};

	if (typeof module !== 'undefined' && module.exports) {
	    module.exports = gl;
	}

	if (typeof window !== 'undefined') {
	    window.pixi = { gl: gl };
	}

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	var createContext = function createContext(canvas, options) {
	    var gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);

	    if (!gl) {
	        throw new Error('This browser does not support webGL. Try using the canvas renderer');
	    }

	    return gl;
	};

	module.exports = createContext;

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	var setVertexAttribArrays = function setVertexAttribArrays(gl, attribs, state) {
	    var i;
	    if (state) {
	        var tempAttribState = state.tempAttribState,
	            attribState = state.attribState;

	        for (i = 0; i < tempAttribState.length; i++) {
	            tempAttribState[i] = false;
	        }

	        for (i = 0; i < attribs.length; i++) {
	            tempAttribState[attribs[i].attribute.location] = true;
	        }

	        for (i = 0; i < attribState.length; i++) {
	            if (attribState[i] !== tempAttribState[i]) {
	                attribState[i] = tempAttribState[i];

	                if (state.attribState[i]) {
	                    gl.enableVertexAttribArray(i);
	                } else {
	                    gl.disableVertexAttribArray(i);
	                }
	            }
	        }
	    } else {
	        for (i = 0; i < attribs.length; i++) {
	            var attrib = attribs[i];
	            gl.enableVertexAttribArray(attrib.attribute.location);
	        }
	    }
	};

	module.exports = setVertexAttribArrays;

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);

	var Buffer = function Buffer(gl, type, data, drawType) {
	  this.gl = gl;

	  this.buffer = gl.createBuffer();

	  this.type = type || gl.ARRAY_BUFFER;

	  this.drawType = drawType || gl.STATIC_DRAW;

	  this.data = EMPTY_ARRAY_BUFFER;

	  if (data) {
	    this.upload(data);
	  }
	};

	Buffer.prototype.upload = function (data, offset, dontBind) {
	  if (!dontBind) this.bind();

	  var gl = this.gl;

	  data = data || this.data;
	  offset = offset || 0;

	  if (this.data.byteLength >= data.byteLength) {
	    gl.bufferSubData(this.type, offset, data);
	  } else {
	    gl.bufferData(this.type, data, this.drawType);
	  }

	  this.data = data;
	};

	Buffer.prototype.bind = function () {
	  var gl = this.gl;
	  gl.bindBuffer(this.type, this.buffer);
	};

	Buffer.createVertexBuffer = function (gl, data, drawType) {
	  return new Buffer(gl, gl.ARRAY_BUFFER, data, drawType);
	};

	Buffer.createIndexBuffer = function (gl, data, drawType) {
	  return new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
	};

	Buffer.create = function (gl, type, data, drawType) {
	  return new Buffer(gl, type, drawType);
	};

	Buffer.prototype.destroy = function () {
	  this.gl.deleteBuffer(this.buffer);
	};

	module.exports = Buffer;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Texture = __webpack_require__(69);

	var Framebuffer = function Framebuffer(gl, width, height) {
	  this.gl = gl;

	  this.framebuffer = gl.createFramebuffer();

	  this.stencil = null;

	  this.texture = null;

	  this.width = width || 100;

	  this.height = height || 100;
	};

	Framebuffer.prototype.enableTexture = function (texture) {
	  var gl = this.gl;

	  this.texture = texture || new Texture(gl);

	  this.texture.bind();

	  this.bind();

	  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
	};

	Framebuffer.prototype.enableStencil = function () {
	  if (this.stencil) return;

	  var gl = this.gl;

	  this.stencil = gl.createRenderbuffer();

	  gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);

	  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
	  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
	};

	Framebuffer.prototype.clear = function (r, g, b, a) {
	  this.bind();

	  var gl = this.gl;

	  gl.clearColor(r, g, b, a);
	  gl.clear(gl.COLOR_BUFFER_BIT);
	};

	Framebuffer.prototype.bind = function () {
	  var gl = this.gl;

	  if (this.texture) {
	    this.texture.unbind();
	  }

	  gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	};

	Framebuffer.prototype.unbind = function () {
	  var gl = this.gl;
	  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	};

	Framebuffer.prototype.resize = function (width, height) {
	  var gl = this.gl;

	  this.width = width;
	  this.height = height;

	  if (this.texture) {
	    this.texture.uploadData(null, width, height);
	  }

	  if (this.stencil) {
	    gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
	    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
	  }
	};

	Framebuffer.prototype.destroy = function () {
	  var gl = this.gl;

	  if (this.texture) {
	    this.texture.destroy();
	  }

	  gl.deleteFramebuffer(this.framebuffer);

	  this.gl = null;

	  this.stencil = null;
	  this.texture = null;
	};

	Framebuffer.createRGBA = function (gl, width, height) {
	  var texture = Texture.fromData(gl, null, width, height);
	  texture.enableNearestScaling();
	  texture.enableWrapClamp();

	  var fbo = new Framebuffer(gl, width, height);
	  fbo.enableTexture(texture);

	  fbo.unbind();

	  return fbo;
	};

	Framebuffer.createFloat32 = function (gl, width, height, data) {
	  var texture = new Texture.fromData(gl, data, width, height);
	  texture.enableNearestScaling();
	  texture.enableWrapClamp();

	  var fbo = new Framebuffer(gl, width, height);
	  fbo.enableTexture(texture);

	  fbo.unbind();

	  return fbo;
	};

	module.exports = Framebuffer;

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	var Texture = function Texture(gl, width, height, format, type) {
		this.gl = gl;

		this.texture = gl.createTexture();

		this.mipmap = false;

		this.premultiplyAlpha = false;

		this.width = width || 0;

		this.height = height || 0;

		this.format = format || gl.RGBA;

		this.type = type || gl.UNSIGNED_BYTE;
	};

	Texture.prototype.upload = function (source) {
		this.bind();

		var gl = this.gl;

		this.width = source.videoWidth || source.width;
		this.height = source.videoHeight || source.height;

		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	};

	var FLOATING_POINT_AVAILABLE = false;

	Texture.prototype.uploadData = function (data, width, height) {
		this.bind();

		var gl = this.gl;

		this.width = width || this.width;
		this.height = height || this.height;

		if (data instanceof Float32Array) {
			if (!FLOATING_POINT_AVAILABLE) {
				var ext = gl.getExtension("OES_texture_float");

				if (ext) {
					FLOATING_POINT_AVAILABLE = true;
				} else {
					throw new Error('floating point textures not available');
				}
			}

			this.type = gl.FLOAT;
		} else {
			this.type = gl.UNSIGNED_BYTE;
		}

		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, data || null);
	};

	Texture.prototype.bind = function (location) {
		var gl = this.gl;

		if (location !== undefined) {
			gl.activeTexture(gl.TEXTURE0 + location);
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
	};

	Texture.prototype.unbind = function () {
		var gl = this.gl;
		gl.bindTexture(gl.TEXTURE_2D, null);
	};

	Texture.prototype.minFilter = function (linear) {
		var gl = this.gl;

		this.bind();

		if (this.mipmap) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
		} else {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
		}
	};

	Texture.prototype.magFilter = function (linear) {
		var gl = this.gl;

		this.bind();

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	};

	Texture.prototype.enableMipmap = function () {
		var gl = this.gl;

		this.bind();

		this.mipmap = true;

		gl.generateMipmap(gl.TEXTURE_2D);
	};

	Texture.prototype.enableLinearScaling = function () {
		this.minFilter(true);
		this.magFilter(true);
	};

	Texture.prototype.enableNearestScaling = function () {
		this.minFilter(false);
		this.magFilter(false);
	};

	Texture.prototype.enableWrapClamp = function () {
		var gl = this.gl;

		this.bind();

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	};

	Texture.prototype.enableWrapRepeat = function () {
		var gl = this.gl;

		this.bind();

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	};

	Texture.prototype.enableWrapMirrorRepeat = function () {
		var gl = this.gl;

		this.bind();

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
	};

	Texture.prototype.destroy = function () {
		var gl = this.gl;

		gl.deleteTexture(this.texture);
	};

	Texture.fromSource = function (gl, source, premultiplyAlpha) {
		var texture = new Texture(gl);
		texture.premultiplyAlpha = premultiplyAlpha || false;
		texture.upload(source);

		return texture;
	};

	Texture.fromData = function (gl, data, width, height) {
		var texture = new Texture(gl);
		texture.uploadData(data, width, height);

		return texture;
	};

	module.exports = Texture;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var compileProgram = __webpack_require__(71),
	    extractAttributes = __webpack_require__(72),
	    extractUniforms = __webpack_require__(75),
	    generateUniformAccessObject = __webpack_require__(77);

	var Shader = function Shader(gl, vertexSrc, fragmentSrc) {
		this.gl = gl;

		this.program = compileProgram(gl, vertexSrc, fragmentSrc);

		this.attributes = extractAttributes(gl, this.program);

		var uniformData = extractUniforms(gl, this.program);

		this.uniforms = generateUniformAccessObject(gl, uniformData);
	};

	Shader.prototype.bind = function () {
		this.gl.useProgram(this.program);
	};

	Shader.prototype.destroy = function () {};

	module.exports = Shader;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	var compileProgram = function compileProgram(gl, vertexSrc, fragmentSrc) {
	    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
	    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

	    var program = gl.createProgram();

	    gl.attachShader(program, glVertShader);
	    gl.attachShader(program, glFragShader);
	    gl.linkProgram(program);

	    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	        console.error('Pixi.js Error: Could not initialize shader.');
	        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
	        console.error('gl.getError()', gl.getError());

	        if (gl.getProgramInfoLog(program) !== '') {
	            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
	        }

	        gl.deleteProgram(program);
	        program = null;
	    }

	    gl.deleteShader(glVertShader);
	    gl.deleteShader(glFragShader);

	    return program;
	};

	var compileShader = function compileShader(gl, type, src) {
	    var shader = gl.createShader(type);

	    gl.shaderSource(shader, src);
	    gl.compileShader(shader);

	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        console.log(gl.getShaderInfoLog(shader));
	        return null;
	    }

	    return shader;
	};

	module.exports = compileProgram;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapType = __webpack_require__(73);
	var mapSize = __webpack_require__(74);

	var extractAttributes = function extractAttributes(gl, program) {
	    var attributes = {};

	    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

	    for (var i = 0; i < totalAttributes; i++) {
	        var attribData = gl.getActiveAttrib(program, i);
	        var type = mapType(gl, attribData.type);

	        attributes[attribData.name] = {
	            type: type,
	            size: mapSize(type),
	            location: gl.getAttribLocation(program, attribData.name),

	            pointer: pointer
	        };
	    }

	    return attributes;
	};

	var pointer = function pointer(type, normalized, stride, start) {
	    gl.vertexAttribPointer(this.location, this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
	};

	module.exports = extractAttributes;

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	var mapSize = function mapSize(gl, type) {
	    if (!GL_TABLE) {
	        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

	        GL_TABLE = {};

	        for (var i = 0; i < typeNames.length; ++i) {
	            var tn = typeNames[i];
	            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
	        }
	    }

	    return GL_TABLE[type];
	};

	var GL_TABLE = null;

	var GL_TO_GLSL_TYPES = {
	    'FLOAT': 'float',
	    'FLOAT_VEC2': 'vec2',
	    'FLOAT_VEC3': 'vec3',
	    'FLOAT_VEC4': 'vec4',

	    'INT': 'int',
	    'INT_VEC2': 'ivec2',
	    'INT_VEC3': 'ivec3',
	    'INT_VEC4': 'ivec4',

	    'BOOL': 'bool',
	    'BOOL_VEC2': 'bvec2',
	    'BOOL_VEC3': 'bvec3',
	    'BOOL_VEC4': 'bvec4',

	    'FLOAT_MAT2': 'mat2',
	    'FLOAT_MAT3': 'mat3',
	    'FLOAT_MAT4': 'mat4',

	    'SAMPLER_2D': 'sampler2D'
	};

	module.exports = mapSize;

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';

	var mapSize = function mapSize(type) {
	    return GLSL_TO_SIZE[type];
	};

	var GLSL_TO_SIZE = {
	    'float': 1,
	    'vec2': 2,
	    'vec3': 3,
	    'vec4': 4,

	    'int': 1,
	    'ivec2': 2,
	    'ivec3': 3,
	    'ivec4': 4,

	    'bool': 1,
	    'bvec2': 2,
	    'bvec3': 3,
	    'bvec4': 4,

	    'mat2': 4,
	    'mat3': 9,
	    'mat4': 16,

	    'sampler2D': 1
	};

	module.exports = mapSize;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapType = __webpack_require__(73);
	var defaultValue = __webpack_require__(76);

	var extractUniforms = function extractUniforms(gl, program) {
	  var uniforms = {};

	  var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

	  for (var i = 0; i < totalUniforms; i++) {
	    var uniformData = gl.getActiveUniform(program, i);
	    var name = uniformData.name.replace(/\[.*?\]/, "");
	    var type = mapType(gl, uniformData.type);

	    uniforms[name] = {
	      type: type,
	      size: uniformData.size,
	      location: gl.getUniformLocation(program, name),
	      value: defaultValue(type, uniformData.size)
	    };
	  }

	  return uniforms;
	};

	module.exports = extractUniforms;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	var defaultValue = function defaultValue(type, size) {
	    switch (type) {
	        case 'float':
	            return 0;

	        case 'vec2':
	            return new Float32Array(2 * size);

	        case 'vec3':
	            return new Float32Array(3 * size);

	        case 'vec4':
	            return new Float32Array(4 * size);

	        case 'int':
	        case 'sampler2D':
	            return 0;

	        case 'ivec2':
	            return new Int32Array(2 * size);

	        case 'ivec3':
	            return new Int32Array(3 * size);

	        case 'ivec4':
	            return new Int32Array(4 * size);

	        case 'bool':
	            return false;

	        case 'bvec2':

	            return booleanArray(2 * size);

	        case 'bvec3':
	            return booleanArray(3 * size);

	        case 'bvec4':
	            return booleanArray(4 * size);

	        case 'mat2':
	            return new Float32Array([1, 0, 0, 1]);

	        case 'mat3':
	            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

	        case 'mat4':
	            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	    }
	};

	var booleanArray = function booleanArray(size) {
	    var array = new Array(size);

	    for (var i = 0; i < array.length; i++) {
	        array[i] = false;
	    }

	    return array;
	};

	module.exports = defaultValue;

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	var generateUniformAccessObject = function generateUniformAccessObject(gl, uniformData) {
	    var uniforms = { data: {} };

	    uniforms.gl = gl;

	    var uniformKeys = Object.keys(uniformData);

	    for (var i = 0; i < uniformKeys.length; i++) {
	        var fullName = uniformKeys[i];

	        var nameTokens = fullName.split('.');
	        var name = nameTokens[nameTokens.length - 1];

	        var uniformGroup = getUniformGroup(nameTokens, uniforms);

	        var uniform = uniformData[fullName];
	        uniformGroup.data[name] = uniform;

	        uniformGroup.gl = gl;

	        Object.defineProperty(uniformGroup, name, {
	            get: generateGetter(name),
	            set: generateSetter(name, uniform)
	        });
	    }

	    return uniforms;
	};

	var generateGetter = function generateGetter(name) {
	    var template = getterTemplate.replace('%%', name);
	    return new Function(template);
	};

	var generateSetter = function generateSetter(name, uniform) {
	    var template = setterTemplate.replace(/%%/g, name);
	    var setTemplate;

	    if (uniform.size === 1) {
	        setTemplate = GLSL_TO_SINGLE_SETTERS[uniform.type];
	    } else {
	        setTemplate = GLSL_TO_ARRAY_SETTERS[uniform.type];
	    }

	    if (setTemplate) {
	        template += "\nthis.gl." + setTemplate + ";";
	    }

	    return new Function('value', template);
	};

	var getUniformGroup = function getUniformGroup(nameTokens, uniform) {
	    var cur = uniform;

	    for (var i = 0; i < nameTokens.length - 1; i++) {
	        var o = cur[nameTokens[i]] || { data: {} };
	        cur[nameTokens[i]] = o;
	        cur = o;
	    }

	    return cur;
	};

	var getterTemplate = ['return this.data.%%.value;'].join('\n');

	var setterTemplate = ['this.data.%%.value = value;', 'var location = this.data.%%.location;'].join('\n');

	var GLSL_TO_SINGLE_SETTERS = {

	    'float': 'uniform1f(location, value)',

	    'vec2': 'uniform2f(location, value[0], value[1])',
	    'vec3': 'uniform3f(location, value[0], value[1], value[2])',
	    'vec4': 'uniform4f(location, value[0], value[1], value[2], value[3])',

	    'int': 'uniform1i(location, value)',
	    'ivec2': 'uniform2i(location, value[0], value[1])',
	    'ivec3': 'uniform3i(location, value[0], value[1], value[2])',
	    'ivec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',

	    'bool': 'uniform1i(location, value)',
	    'bvec2': 'uniform2i(location, value[0], value[1])',
	    'bvec3': 'uniform3i(location, value[0], value[1], value[2])',
	    'bvec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',

	    'mat2': 'uniformMatrix2fv(location, false, value)',
	    'mat3': 'uniformMatrix3fv(location, false, value)',
	    'mat4': 'uniformMatrix4fv(location, false, value)',

	    'sampler2D': 'uniform1i(location, value)'
	};

	var GLSL_TO_ARRAY_SETTERS = {

	    'float': 'uniform1fv(location, value)',

	    'vec2': 'uniform2fv(location, value)',
	    'vec3': 'uniform3fv(location, value)',
	    'vec4': 'uniform4fv(location, value)',

	    'int': 'uniform1iv(location, value)',
	    'ivec2': 'uniform2iv(location, value)',
	    'ivec3': 'uniform3iv(location, value)',
	    'ivec4': 'uniform4iv(location, value)',

	    'bool': 'uniform1iv(location, value)',
	    'bvec2': 'uniform2iv(location, value)',
	    'bvec3': 'uniform3iv(location, value)',
	    'bvec4': 'uniform4iv(location, value)',

	    'sampler2D': 'uniform1iv(location, value)'
	};

	module.exports = generateUniformAccessObject;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var setVertexAttribArrays = __webpack_require__(66);

	function VertexArrayObject(gl, state) {
	    this.nativeVaoExtension = null;

	    if (!VertexArrayObject.FORCE_NATIVE) {
	        this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
	    }

	    this.nativeState = state;

	    if (this.nativeVaoExtension) {
	        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();

	        var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

	        this.nativeState = {
	            tempAttribState: new Array(maxAttribs),
	            attribState: new Array(maxAttribs)
	        };
	    }

	    this.gl = gl;

	    this.attributes = [];

	    this.indexBuffer = null;

	    this.dirty = false;
	}

	VertexArrayObject.prototype.constructor = VertexArrayObject;
	module.exports = VertexArrayObject;

	VertexArrayObject.FORCE_NATIVE = false;

	VertexArrayObject.prototype.bind = function () {
	    if (this.nativeVao) {
	        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);

	        if (this.dirty) {
	            this.dirty = false;
	            this.activate();
	        }
	    } else {

	        this.activate();
	    }

	    return this;
	};

	VertexArrayObject.prototype.unbind = function () {
	    if (this.nativeVao) {
	        this.nativeVaoExtension.bindVertexArrayOES(null);
	    }

	    return this;
	};

	VertexArrayObject.prototype.activate = function () {

	    var gl = this.gl;
	    var lastBuffer = null;

	    for (var i = 0; i < this.attributes.length; i++) {
	        var attrib = this.attributes[i];

	        if (lastBuffer !== attrib.buffer) {
	            attrib.buffer.bind();
	            lastBuffer = attrib.buffer;
	        }

	        gl.vertexAttribPointer(attrib.attribute.location, attrib.attribute.size, attrib.type || gl.FLOAT, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
	    }

	    setVertexAttribArrays(gl, this.attributes, this.nativeState);

	    this.indexBuffer.bind();

	    return this;
	};

	VertexArrayObject.prototype.addAttribute = function (buffer, attribute, type, normalized, stride, start) {
	    this.attributes.push({
	        buffer: buffer,
	        attribute: attribute,

	        location: attribute.location,
	        type: type || this.gl.FLOAT,
	        normalized: normalized || false,
	        stride: stride || 0,
	        start: start || 0
	    });

	    this.dirty = true;

	    return this;
	};

	VertexArrayObject.prototype.addIndex = function (buffer) {
	    this.indexBuffer = buffer;

	    this.dirty = true;

	    return this;
	};

	VertexArrayObject.prototype.clear = function () {
	    if (this.nativeVao) {
	        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
	    }

	    this.attributes.length = 0;
	    this.indexBuffer = null;

	    return this;
	};

	VertexArrayObject.prototype.draw = function (type, size, start) {
	    var gl = this.gl;
	    gl.drawElements(type, size, gl.UNSIGNED_SHORT, start || 0);

	    return this;
	};

	VertexArrayObject.prototype.destroy = function () {
	    this.gl = null;
	    this.indexBuffer = null;
	    this.attributes = null;
	    this.nativeState = null;

	    if (this.nativeVao) {
	        this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
	    }

	    this.nativeVaoExtension = null;
	    this.nativeVao = null;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    compileProgram: __webpack_require__(71),
	    defaultValue: __webpack_require__(76),
	    extractAttributes: __webpack_require__(72),
	    extractUniforms: __webpack_require__(75),
	    generateUniformAccessObject: __webpack_require__(77),
	    mapSize: __webpack_require__(74),
	    mapType: __webpack_require__(73)
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
	  throw new Error("It appears that you're using glslify in browserify without " + "its transform applied. Make sure that you've set up glslify as a source transform: " + "https://github.com/substack/node-browserify#browserifytransform");
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var WebGLManager = __webpack_require__(58);

	function StencilManager(renderer) {
	    WebGLManager.call(this, renderer);
	    this.stencilMaskStack = null;
	}

	StencilManager.prototype = Object.create(WebGLManager.prototype);
	StencilManager.prototype.constructor = StencilManager;
	module.exports = StencilManager;

	StencilManager.prototype.setMaskStack = function (stencilMaskStack) {
	    this.stencilMaskStack = stencilMaskStack;

	    var gl = this.renderer.gl;

	    if (stencilMaskStack.length === 0) {
	        gl.disable(gl.STENCIL_TEST);
	    } else {
	        gl.enable(gl.STENCIL_TEST);
	    }
	};

	StencilManager.prototype.pushStencil = function (graphics) {
	    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

	    this.renderer._activeRenderTarget.attachStencilBuffer();

	    var gl = this.renderer.gl,
	        sms = this.stencilMaskStack;

	    if (sms.length === 0) {
	        gl.enable(gl.STENCIL_TEST);
	        gl.clear(gl.STENCIL_BUFFER_BIT);
	        gl.stencilFunc(gl.ALWAYS, 1, 1);
	    }

	    sms.push(graphics);

	    gl.colorMask(false, false, false, false);
	    gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);

	    this.renderer.plugins.graphics.render(graphics);

	    gl.colorMask(true, true, true, true);
	    gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
	    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
	};

	StencilManager.prototype.popStencil = function () {
	    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

	    var gl = this.renderer.gl,
	        sms = this.stencilMaskStack;

	    var graphics = sms.pop();

	    if (sms.length === 0) {
	        gl.disable(gl.STENCIL_TEST);
	    } else {
	        gl.colorMask(false, false, false, false);
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);

	        this.renderer.plugins.graphics.render(graphics);

	        gl.colorMask(true, true, true, true);
	        gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
	        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
	    }
	};

	StencilManager.prototype.destroy = function () {
	    WebGLManager.prototype.destroy.call(this);

	    this.stencilMaskStack.stencilStack = null;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var WebGLManager = __webpack_require__(58),
	    RenderTarget = __webpack_require__(83),
	    Quad = __webpack_require__(84),
	    math = __webpack_require__(11),
	    Shader = __webpack_require__(86),
	    filterTransforms = __webpack_require__(87),
	    bitTwiddle = __webpack_require__(43);

	var FilterState = function FilterState() {
	    this.renderTarget = null;
	    this.sourceFrame = new math.Rectangle();
	    this.destinationFrame = new math.Rectangle();
	    this.filters = [];
	    this.target = null;
	    this.resolution = 1;
	};

	function FilterManager(renderer) {
	    WebGLManager.call(this, renderer);

	    this.gl = this.renderer.gl;

	    this.quad = new Quad(this.gl, renderer.state.attribState);

	    this.shaderCache = {};

	    this.pool = {};

	    this.filterData = null;
	}

	FilterManager.prototype = Object.create(WebGLManager.prototype);
	FilterManager.prototype.constructor = FilterManager;
	module.exports = FilterManager;

	FilterManager.prototype.pushFilter = function (target, filters) {
	    var renderer = this.renderer;

	    var filterData = this.filterData;

	    if (!filterData) {
	        filterData = this.renderer._activeRenderTarget.filterStack;

	        var filterState = new FilterState();
	        filterState.sourceFrame = filterState.destinationFrame = this.renderer._activeRenderTarget.size;
	        filterState.renderTarget = renderer._activeRenderTarget;

	        this.renderer._activeRenderTarget.filterData = filterData = {
	            index: 0,
	            stack: [filterState]
	        };

	        this.filterData = filterData;
	    }

	    var currentState = filterData.stack[++filterData.index];
	    if (!currentState) {
	        currentState = filterData.stack[filterData.index] = new FilterState();
	    }

	    var resolution = filters[0].resolution;
	    var padding = filters[0].padding;
	    var targetBounds = target.filterArea || target.getBounds(true);
	    var sourceFrame = currentState.sourceFrame;
	    var destinationFrame = currentState.destinationFrame;

	    sourceFrame.x = (targetBounds.x * resolution | 0) / resolution;
	    sourceFrame.y = (targetBounds.y * resolution | 0) / resolution;
	    sourceFrame.width = (targetBounds.width * resolution | 0) / resolution;
	    sourceFrame.height = (targetBounds.height * resolution | 0) / resolution;

	    if (filterData.stack[0].renderTarget.transform) {} else {

	        sourceFrame.fit(filterData.stack[0].destinationFrame);
	    }

	    destinationFrame.width = sourceFrame.width;
	    destinationFrame.height = sourceFrame.height;

	    sourceFrame.pad(padding);

	    var renderTarget = this.getPotRenderTarget(renderer.gl, sourceFrame.width, sourceFrame.height, resolution);

	    currentState.target = target;
	    currentState.filters = filters;
	    currentState.resolution = resolution;
	    currentState.renderTarget = renderTarget;

	    renderTarget.setFrame(destinationFrame, sourceFrame);

	    renderer.bindRenderTarget(renderTarget);

	    renderer.clear();
	};

	FilterManager.prototype.popFilter = function () {
	    var filterData = this.filterData;

	    var lastState = filterData.stack[filterData.index - 1];
	    var currentState = filterData.stack[filterData.index];

	    this.quad.map(currentState.renderTarget.size, currentState.sourceFrame).upload();

	    var filters = currentState.filters;

	    if (filters.length === 1) {
	        filters[0].apply(this, currentState.renderTarget, lastState.renderTarget, false);
	        this.freePotRenderTarget(currentState.renderTarget);
	    } else {
	        var flip = currentState.renderTarget;
	        var flop = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, 1);
	        flop.setFrame(currentState.destinationFrame, currentState.sourceFrame);

	        for (var i = 0; i < filters.length - 1; i++) {
	            filters[i].apply(this, flip, flop, true);

	            var t = flip;
	            flip = flop;
	            flop = t;
	        }

	        filters[i].apply(this, flip, lastState.renderTarget, false);

	        this.freePotRenderTarget(flip);
	        this.freePotRenderTarget(flop);
	    }

	    filterData.index--;

	    if (filterData.index === 0) {
	        this.filterData = null;
	    }
	};

	FilterManager.prototype.applyFilter = function (filter, input, output, clear) {
	    var renderer = this.renderer;
	    var shader = filter.glShaders[renderer.CONTEXT_UID];

	    if (!shader) {
	        if (filter.glShaderKey) {
	            shader = this.shaderCache[filter.glShaderKey];

	            if (!shader) {
	                shader = filter.glShaders[renderer.CONTEXT_UID] = this.shaderCache[filter.glShaderKey] = new Shader(this.gl, filter.vertexSrc, filter.fragmentSrc);
	            }
	        } else {
	            shader = filter.glShaders[renderer.CONTEXT_UID] = new Shader(this.gl, filter.vertexSrc, filter.fragmentSrc);
	        }

	        this.quad.initVao(shader);
	    }

	    renderer.bindRenderTarget(output);

	    if (clear) {
	        var gl = renderer.gl;

	        gl.disable(gl.SCISSOR_TEST);
	        renderer.clear();
	        gl.enable(gl.SCISSOR_TEST);
	    }

	    if (output === renderer.maskManager.scissorRenderTarget) {
	        renderer.maskManager.pushScissorMask(null, renderer.maskManager.scissorData);
	    }

	    renderer.bindShader(shader);

	    this.syncUniforms(shader, filter);

	    input.texture.bind(0);

	    renderer._activeTextureLocation = 0;

	    renderer.state.setBlendMode(filter.blendMode);

	    this.quad.draw();
	};

	FilterManager.prototype.syncUniforms = function (shader, filter) {
	    var uniformData = filter.uniformData;
	    var uniforms = filter.uniforms;

	    var textureCount = 1;
	    var currentState;

	    if (shader.uniforms.data.filterArea) {
	        currentState = this.filterData.stack[this.filterData.index];
	        var filterArea = shader.uniforms.filterArea;

	        filterArea[0] = currentState.renderTarget.size.width;
	        filterArea[1] = currentState.renderTarget.size.height;
	        filterArea[2] = currentState.sourceFrame.x;
	        filterArea[3] = currentState.sourceFrame.y;

	        shader.uniforms.filterArea = filterArea;
	    }

	    if (shader.uniforms.data.filterClamp) {
	        currentState = this.filterData.stack[this.filterData.index];
	        var filterClamp = shader.uniforms.filterClamp;

	        filterClamp[0] = 0.5 / currentState.renderTarget.size.width;
	        filterClamp[1] = 0.5 / currentState.renderTarget.size.height;
	        filterClamp[2] = (currentState.sourceFrame.width - 0.5) / currentState.renderTarget.size.width;
	        filterClamp[3] = (currentState.sourceFrame.height - 0.5) / currentState.renderTarget.size.height;

	        shader.uniforms.filterClamp = filterClamp;
	    }

	    var val;

	    for (var i in uniformData) {
	        if (uniformData[i].type === 'sampler2D') {
	            shader.uniforms[i] = textureCount;

	            if (uniforms[i].baseTexture) {
	                this.renderer.bindTexture(uniforms[i].baseTexture, textureCount);
	            } else {
	                var gl = this.renderer.gl;
	                this.renderer._activeTextureLocation = gl.TEXTURE0 + textureCount;
	                gl.activeTexture(gl.TEXTURE0 + textureCount);
	                uniforms[i].texture.bind();
	            }

	            textureCount++;
	        } else if (uniformData[i].type === 'mat3') {
	            if (uniforms[i].a !== undefined) {
	                shader.uniforms[i] = uniforms[i].toArray(true);
	            } else {
	                shader.uniforms[i] = uniforms[i];
	            }
	        } else if (uniformData[i].type === 'vec2') {
	            if (uniforms[i].x !== undefined) {
	                val = shader.uniforms[i] || new Float32Array(2);
	                val[0] = uniforms[i].x;
	                val[1] = uniforms[i].y;
	                shader.uniforms[i] = val;
	            } else {
	                shader.uniforms[i] = uniforms[i];
	            }
	        } else if (uniformData[i].type === 'float') {
	            if (shader.uniforms.data[i].value !== uniformData[i]) {
	                shader.uniforms[i] = uniforms[i];
	            }
	        } else {
	            shader.uniforms[i] = uniforms[i];
	        }
	    }
	};

	FilterManager.prototype.getRenderTarget = function (clear, resolution) {
	    var currentState = this.filterData.stack[this.filterData.index];
	    var renderTarget = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, resolution || currentState.resolution);
	    renderTarget.setFrame(currentState.destinationFrame, currentState.sourceFrame);

	    return renderTarget;
	};

	FilterManager.prototype.returnRenderTarget = function (renderTarget) {
	    return this.freePotRenderTarget(renderTarget);
	};

	FilterManager.prototype.calculateScreenSpaceMatrix = function (outputMatrix) {
	    var currentState = this.filterData.stack[this.filterData.index];
	    return filterTransforms.calculateScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size);
	};

	FilterManager.prototype.calculateNormalizedScreenSpaceMatrix = function (outputMatrix) {
	    var currentState = this.filterData.stack[this.filterData.index];

	    return filterTransforms.calculateNormalizedScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, currentState.destinationFrame);
	};

	FilterManager.prototype.calculateSpriteMatrix = function (outputMatrix, sprite) {
	    var currentState = this.filterData.stack[this.filterData.index];
	    return filterTransforms.calculateSpriteMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, sprite);
	};

	FilterManager.prototype.destroy = function () {
	    this.shaderCache = [];
	    this.emptyPool();
	};

	FilterManager.prototype.getPotRenderTarget = function (gl, minWidth, minHeight, resolution) {
	    minWidth = bitTwiddle.nextPow2(minWidth * resolution);
	    minHeight = bitTwiddle.nextPow2(minHeight * resolution);

	    var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;

	    if (!this.pool[key]) {
	        this.pool[key] = [];
	    }

	    var renderTarget = this.pool[key].pop() || new RenderTarget(gl, minWidth, minHeight, null, 1);

	    renderTarget.resolution = resolution;
	    renderTarget.defaultFrame.width = renderTarget.size.width = minWidth / resolution;
	    renderTarget.defaultFrame.height = renderTarget.size.height = minHeight / resolution;
	    return renderTarget;
	};

	FilterManager.prototype.emptyPool = function () {
	    for (var i in this.pool) {
	        var textures = this.pool[i];
	        if (textures) {
	            for (var j = 0; j < textures.length; j++) {
	                textures[j].destroy(true);
	            }
	        }
	    }

	    this.pool = {};
	};

	FilterManager.prototype.freePotRenderTarget = function (renderTarget) {
	    var minWidth = renderTarget.size.width * renderTarget.resolution;
	    var minHeight = renderTarget.size.height * renderTarget.resolution;

	    var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;
	    this.pool[key].push(renderTarget);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    CONST = __webpack_require__(8),
	    GLFramebuffer = __webpack_require__(64).GLFramebuffer;

	var RenderTarget = function RenderTarget(gl, width, height, scaleMode, resolution, root) {
	  this.gl = gl;

	  this.frameBuffer = null;

	  this.texture = null;

	  this.clearColor = [0, 0, 0, 0];

	  this.size = new math.Rectangle(0, 0, 1, 1);

	  this.resolution = resolution || CONST.RESOLUTION;

	  this.projectionMatrix = new math.Matrix();

	  this.transform = null;

	  this.frame = null;

	  this.defaultFrame = new math.Rectangle();
	  this.destinationFrame = null;
	  this.sourceFrame = null;

	  this.stencilBuffer = null;

	  this.stencilMaskStack = [];

	  this.filterData = null;

	  this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

	  this.root = root;

	  if (!this.root) {
	    this.frameBuffer = GLFramebuffer.createRGBA(gl, 100, 100);

	    if (this.scaleMode === CONST.SCALE_MODES.NEAREST) {
	      this.frameBuffer.texture.enableNearestScaling();
	    } else {
	      this.frameBuffer.texture.enableLinearScaling();
	    }

	    this.texture = this.frameBuffer.texture;
	  } else {
	    this.frameBuffer = new GLFramebuffer(gl, 100, 100);
	    this.frameBuffer.framebuffer = null;
	  }

	  this.setFrame();

	  this.resize(width, height);
	};

	RenderTarget.prototype.constructor = RenderTarget;
	module.exports = RenderTarget;

	RenderTarget.prototype.clear = function (clearColor) {
	  var cc = clearColor || this.clearColor;
	  this.frameBuffer.clear(cc[0], cc[1], cc[2], cc[3]);
	};

	RenderTarget.prototype.attachStencilBuffer = function () {
	  if (!this.root) {
	    this.frameBuffer.enableStencil();
	  }
	};

	RenderTarget.prototype.setFrame = function (destinationFrame, sourceFrame) {
	  this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
	  this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
	};

	RenderTarget.prototype.activate = function () {
	  var gl = this.gl;

	  this.frameBuffer.bind();

	  this.calculateProjection(this.destinationFrame, this.sourceFrame);

	  if (this.transform) {
	    this.projectionMatrix.append(this.transform);
	  }

	  if (this.destinationFrame !== this.sourceFrame) {

	    gl.enable(gl.SCISSOR_TEST);
	    gl.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
	  } else {
	    gl.disable(gl.SCISSOR_TEST);
	  }

	  gl.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
	};

	RenderTarget.prototype.calculateProjection = function (destinationFrame, sourceFrame) {
	  var pm = this.projectionMatrix;

	  sourceFrame = sourceFrame || destinationFrame;

	  pm.identity();

	  if (!this.root) {
	    pm.a = 1 / destinationFrame.width * 2;
	    pm.d = 1 / destinationFrame.height * 2;

	    pm.tx = -1 - sourceFrame.x * pm.a;
	    pm.ty = -1 - sourceFrame.y * pm.d;
	  } else {
	    pm.a = 1 / destinationFrame.width * 2;
	    pm.d = -1 / destinationFrame.height * 2;

	    pm.tx = -1 - sourceFrame.x * pm.a;
	    pm.ty = 1 - sourceFrame.y * pm.d;
	  }
	};

	RenderTarget.prototype.resize = function (width, height) {
	  width = width | 0;
	  height = height | 0;

	  if (this.size.width === width && this.size.height === height) {
	    return;
	  }

	  this.size.width = width;
	  this.size.height = height;

	  this.defaultFrame.width = width;
	  this.defaultFrame.height = height;

	  this.frameBuffer.resize(width * this.resolution, height * this.resolution);

	  var projectionFrame = this.frame || this.size;

	  this.calculateProjection(projectionFrame);
	};

	RenderTarget.prototype.destroy = function () {
	  this.frameBuffer.destroy();

	  this.frameBuffer = null;
	  this.texture = null;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var glCore = __webpack_require__(64),
	    createIndicesForQuads = __webpack_require__(85);

	function Quad(gl, state) {
	  this.gl = gl;

	  this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);

	  this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

	  this.interleaved = new Float32Array(8 * 2);

	  for (var i = 0; i < 4; i++) {
	    this.interleaved[i * 4] = this.vertices[i * 2];
	    this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
	    this.interleaved[i * 4 + 2] = this.uvs[i * 2];
	    this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
	  }

	  this.indices = createIndicesForQuads(1);

	  this.vertexBuffer = glCore.GLBuffer.createVertexBuffer(gl, this.interleaved, gl.STATIC_DRAW);

	  this.indexBuffer = glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

	  this.vao = new glCore.VertexArrayObject(gl, state);
	}

	Quad.prototype.constructor = Quad;

	Quad.prototype.initVao = function (shader) {
	  this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, shader.attributes.aVertexPosition, this.gl.FLOAT, false, 4 * 4, 0).addAttribute(this.vertexBuffer, shader.attributes.aTextureCoord, this.gl.FLOAT, false, 4 * 4, 2 * 4);
	};

	Quad.prototype.map = function (targetTextureFrame, destinationFrame) {
	  var x = 0;
	  var y = 0;

	  this.uvs[0] = x;
	  this.uvs[1] = y;

	  this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
	  this.uvs[3] = y;

	  this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
	  this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;

	  this.uvs[6] = x;
	  this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;

	  x = destinationFrame.x;
	  y = destinationFrame.y;

	  this.vertices[0] = x;
	  this.vertices[1] = y;

	  this.vertices[2] = x + destinationFrame.width;
	  this.vertices[3] = y;

	  this.vertices[4] = x + destinationFrame.width;
	  this.vertices[5] = y + destinationFrame.height;

	  this.vertices[6] = x;
	  this.vertices[7] = y + destinationFrame.height;

	  return this;
	};

	Quad.prototype.draw = function () {
	  this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind();

	  return this;
	};

	Quad.prototype.upload = function () {
	  for (var i = 0; i < 4; i++) {
	    this.interleaved[i * 4] = this.vertices[i * 2];
	    this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
	    this.interleaved[i * 4 + 2] = this.uvs[i * 2];
	    this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
	  }

	  this.vertexBuffer.upload(this.interleaved);

	  return this;
	};

	Quad.prototype.destroy = function () {
	  var gl = this.gl;

	  gl.deleteBuffer(this.vertexBuffer);
	  gl.deleteBuffer(this.indexBuffer);
	};

	module.exports = Quad;

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	var createIndicesForQuads = function createIndicesForQuads(size) {

	    var totalIndices = size * 6;

	    var indices = new Uint16Array(totalIndices);

	    for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
	        indices[i + 0] = j + 0;
	        indices[i + 1] = j + 1;
	        indices[i + 2] = j + 2;
	        indices[i + 3] = j + 0;
	        indices[i + 4] = j + 2;
	        indices[i + 5] = j + 3;
	    }

	    return indices;
	};

	module.exports = createIndicesForQuads;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var GLShader = __webpack_require__(64).GLShader;
	var Const = __webpack_require__(8);

	function checkPrecision(src) {
	    if (src instanceof Array) {
	        if (src[0].substring(0, 9) !== 'precision') {
	            var copy = src.slice(0);
	            copy.unshift('precision ' + Const.PRECISION.DEFAULT + ' float;');
	            return copy;
	        }
	    } else {
	        if (src.substring(0, 9) !== 'precision') {
	            return 'precision ' + Const.PRECISION.DEFAULT + ' float;\n' + src;
	        }
	    }
	    return src;
	}

	var Shader = function Shader(gl, vertexSrc, fragmentSrc) {
	    GLShader.call(this, gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc));
	};

	Shader.prototype = Object.create(GLShader.prototype);
	Shader.prototype.constructor = Shader;
	module.exports = Shader;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11);

	var calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
	    var mappedMatrix = outputMatrix.identity();

	    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

	    mappedMatrix.scale(textureSize.width, textureSize.height);

	    return mappedMatrix;
	};

	var calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
	    var mappedMatrix = outputMatrix.identity();

	    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

	    var translateScaleX = textureSize.width / filterArea.width;
	    var translateScaleY = textureSize.height / filterArea.height;

	    mappedMatrix.scale(translateScaleX, translateScaleY);

	    return mappedMatrix;
	};

	var calculateSpriteMatrix = function calculateSpriteMatrix(outputMatrix, filterArea, textureSize, sprite) {
	    var worldTransform = sprite.worldTransform.copy(math.Matrix.TEMP_MATRIX),
	        texture = sprite._texture.baseTexture;

	    var mappedMatrix = outputMatrix.identity();

	    var ratio = textureSize.height / textureSize.width;

	    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

	    mappedMatrix.scale(1, ratio);

	    var translateScaleX = textureSize.width / texture.width;
	    var translateScaleY = textureSize.height / texture.height;

	    worldTransform.tx /= texture.width * translateScaleX;

	    worldTransform.ty /= texture.width * translateScaleX;


	    worldTransform.invert();
	    mappedMatrix.prepend(worldTransform);

	    mappedMatrix.scale(1, 1 / ratio);

	    mappedMatrix.scale(translateScaleX, translateScaleY);

	    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

	    return mappedMatrix;
	};

	module.exports = {
	    calculateScreenSpaceMatrix: calculateScreenSpaceMatrix,
	    calculateNormalizedScreenSpaceMatrix: calculateNormalizedScreenSpaceMatrix,
	    calculateSpriteMatrix: calculateSpriteMatrix
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var GLTexture = __webpack_require__(64).GLTexture,
	    CONST = __webpack_require__(8),
	    RenderTarget = __webpack_require__(83),
	    utils = __webpack_require__(21);

	var TextureManager = function TextureManager(renderer) {
	    this.renderer = renderer;

	    this.gl = renderer.gl;

	    this._managedTextures = [];
	};

	TextureManager.prototype.bindTexture = function () {};

	TextureManager.prototype.getTexture = function () {};

	TextureManager.prototype.updateTexture = function (texture) {
	    texture = texture.baseTexture || texture;

	    var isRenderTexture = !!texture._glRenderTargets;

	    if (!texture.hasLoaded) {
	        return;
	    }

	    var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];

	    if (!glTexture) {
	        if (isRenderTexture) {
	            var renderTarget = new RenderTarget(this.gl, texture.width, texture.height, texture.scaleMode, texture.resolution);
	            renderTarget.resize(texture.width, texture.height);
	            texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
	            glTexture = renderTarget.texture;
	        } else {
	            glTexture = new GLTexture(this.gl);
	            glTexture.premultiplyAlpha = true;
	            glTexture.upload(texture.source);
	        }

	        texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;

	        texture.on('update', this.updateTexture, this);
	        texture.on('dispose', this.destroyTexture, this);

	        this._managedTextures.push(texture);

	        if (texture.isPowerOfTwo) {
	            if (texture.mipmap) {
	                glTexture.enableMipmap();
	            }

	            if (texture.wrapMode === CONST.WRAP_MODES.CLAMP) {
	                glTexture.enableWrapClamp();
	            } else if (texture.wrapMode === CONST.WRAP_MODES.REPEAT) {
	                glTexture.enableWrapRepeat();
	            } else {
	                glTexture.enableWrapMirrorRepeat();
	            }
	        } else {
	            glTexture.enableWrapClamp();
	        }

	        if (texture.scaleMode === CONST.SCALE_MODES.NEAREST) {
	            glTexture.enableNearestScaling();
	        } else {
	            glTexture.enableLinearScaling();
	        }
	    } else {
	        if (isRenderTexture) {
	            texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
	        } else {
	            glTexture.upload(texture.source);
	        }
	    }

	    return glTexture;
	};

	TextureManager.prototype.destroyTexture = function (texture, skipRemove) {
	    texture = texture.baseTexture || texture;

	    if (!texture.hasLoaded) {
	        return;
	    }

	    if (texture._glTextures[this.renderer.CONTEXT_UID]) {
	        texture._glTextures[this.renderer.CONTEXT_UID].destroy();
	        texture.off('update', this.updateTexture, this);
	        texture.off('dispose', this.destroyTexture, this);

	        delete texture._glTextures[this.renderer.CONTEXT_UID];

	        if (!skipRemove) {
	            var i = this._managedTextures.indexOf(texture);
	            if (i !== -1) {
	                utils.removeItems(this._managedTextures, i, 1);
	            }
	        }
	    }
	};

	TextureManager.prototype.removeAll = function () {
	    for (var i = 0; i < this._managedTextures.length; ++i) {
	        var texture = this._managedTextures[i];
	        if (texture._glTextures[this.renderer.CONTEXT_UID]) {
	            delete texture._glTextures[this.renderer.CONTEXT_UID];
	        }
	    }
	};

	TextureManager.prototype.destroy = function () {
	    for (var i = 0; i < this._managedTextures.length; ++i) {
	        var texture = this._managedTextures[i];
	        this.destroyTexture(texture, true);
	        texture.off('update', this.updateTexture, this);
	        texture.off('dispose', this.destroyTexture, this);
	    }

	    this._managedTextures = null;
	};

	module.exports = TextureManager;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function TextureGarbageCollector(renderer) {
	    this.renderer = renderer;

	    this.count = 0;
	    this.checkCount = 0;
	    this.maxIdle = 60 * 60;
	    this.checkCountMax = 60 * 10;

	    this.mode = CONST.GC_MODES.DEFAULT;
	}

	TextureGarbageCollector.prototype.constructor = TextureGarbageCollector;
	module.exports = TextureGarbageCollector;

	TextureGarbageCollector.prototype.update = function () {
	    this.count++;

	    if (this.mode === CONST.GC_MODES.MANUAL) {
	        return;
	    }

	    this.checkCount++;

	    if (this.checkCount > this.checkCountMax) {
	        this.checkCount = 0;

	        this.run();
	    }
	};

	TextureGarbageCollector.prototype.run = function () {
	    var tm = this.renderer.textureManager;
	    var managedTextures = tm._managedTextures;
	    var wasRemoved = false;
	    var i, j;

	    for (i = 0; i < managedTextures.length; i++) {
	        var texture = managedTextures[i];

	        if (!texture._glRenderTargets && this.count - texture.touched > this.maxIdle) {
	            tm.destroyTexture(texture, true);
	            managedTextures[i] = null;
	            wasRemoved = true;
	        }
	    }

	    if (wasRemoved) {
	        j = 0;

	        for (i = 0; i < managedTextures.length; i++) {
	            if (managedTextures[i] !== null) {
	                managedTextures[j++] = managedTextures[i];
	            }
	        }

	        managedTextures.length = j;
	    }
	};

	TextureGarbageCollector.prototype.unload = function (displayObject) {
	    var tm = this.renderer.textureManager;

	    if (displayObject._texture) {
	        tm.destroyTexture(displayObject._texture, true);
	    }

	    for (var i = displayObject.children.length - 1; i >= 0; i--) {

	        this.unload(displayObject.children[i]);
	    }
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapWebGLBlendModesToPixi = __webpack_require__(91);

	function WebGLState(gl) {
	    this.activeState = new Uint8Array(16);

	    this.defaultState = new Uint8Array(16);

	    this.defaultState[0] = 1;

	    this.stackIndex = 0;

	    this.stack = [];

	    this.gl = gl;

	    this.maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

	    this.attribState = { tempAttribState: new Array(this.maxAttribs),
	        attribState: new Array(this.maxAttribs) };

	    this.blendModes = mapWebGLBlendModesToPixi(gl);

	    this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
	}

	WebGLState.prototype.push = function () {
	    var state = this.stack[++this.stackIndex];

	    if (!state) {
	        state = this.stack[this.stackIndex] = new Uint8Array(16);
	    }

	    for (var i = 0; i < this.activeState.length; i++) {
	        this.activeState[i] = state[i];
	    }
	};

	var BLEND = 0,
	    DEPTH_TEST = 1,
	    FRONT_FACE = 2,
	    CULL_FACE = 3,
	    BLEND_FUNC = 4;

	WebGLState.prototype.pop = function () {
	    var state = this.stack[--this.stackIndex];
	    this.setState(state);
	};

	WebGLState.prototype.setState = function (state) {
	    this.setBlend(state[BLEND]);
	    this.setDepthTest(state[DEPTH_TEST]);
	    this.setFrontFace(state[FRONT_FACE]);
	    this.setCullFace(state[CULL_FACE]);
	    this.setBlendMode(state[BLEND_FUNC]);
	};

	WebGLState.prototype.setBlend = function (value) {
	    if (this.activeState[BLEND] === value | 0) {
	        return;
	    }

	    this.activeState[BLEND] = value | 0;

	    var gl = this.gl;

	    if (value) {
	        gl.enable(gl.BLEND);
	    } else {
	        gl.disable(gl.BLEND);
	    }
	};

	WebGLState.prototype.setBlendMode = function (value) {
	    if (value === this.activeState[BLEND_FUNC]) {
	        return;
	    }

	    this.activeState[BLEND_FUNC] = value;

	    this.gl.blendFunc(this.blendModes[value][0], this.blendModes[value][1]);
	};

	WebGLState.prototype.setDepthTest = function (value) {
	    if (this.activeState[DEPTH_TEST] === value | 0) {
	        return;
	    }

	    this.activeState[DEPTH_TEST] = value | 0;

	    var gl = this.gl;

	    if (value) {
	        gl.enable(gl.DEPTH_TEST);
	    } else {
	        gl.disable(gl.DEPTH_TEST);
	    }
	};

	WebGLState.prototype.setCullFace = function (value) {
	    if (this.activeState[CULL_FACE] === value | 0) {
	        return;
	    }

	    this.activeState[CULL_FACE] = value | 0;

	    var gl = this.gl;

	    if (value) {
	        gl.enable(gl.CULL_FACE);
	    } else {
	        gl.disable(gl.CULL_FACE);
	    }
	};

	WebGLState.prototype.setFrontFace = function (value) {
	    if (this.activeState[FRONT_FACE] === value | 0) {
	        return;
	    }

	    this.activeState[FRONT_FACE] = value | 0;

	    var gl = this.gl;

	    if (value) {
	        gl.frontFace(gl.CW);
	    } else {
	        gl.frontFace(gl.CCW);
	    }
	};

	WebGLState.prototype.resetAttributes = function () {
	    var i;

	    for (i = 0; i < this.attribState.tempAttribState.length; i++) {
	        this.attribState.tempAttribState[i] = 0;
	    }

	    for (i = 0; i < this.attribState.attribState.length; i++) {
	        this.attribState.attribState[i] = 0;
	    }

	    var gl = this.gl;

	    for (i = 1; i < this.maxAttribs; i++) {
	        gl.disableVertexAttribArray(i);
	    }
	};

	WebGLState.prototype.resetToDefault = function () {
	    if (this.nativeVaoExtension) {
	        this.nativeVaoExtension.bindVertexArrayOES(null);
	    }

	    this.resetAttributes();

	    for (var i = 0; i < this.activeState.length; i++) {
	        this.activeState[i] = 32;
	    }

	    var gl = this.gl;
	    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

	    this.setState(this.defaultState);
	};

	module.exports = WebGLState;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function mapWebGLBlendModesToPixi(gl, array) {
	    array = array || [];

	    array[CONST.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.ADD] = [gl.ONE, gl.DST_ALPHA];
	    array[CONST.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR];
	    array[CONST.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
	    array[CONST.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

	    return array;
	}

	module.exports = mapWebGLBlendModesToPixi;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8);

	function mapWebGLDrawModesToPixi(gl, object) {
	  object = object || {};

	  object[CONST.DRAW_MODES.POINTS] = gl.POINTS;
	  object[CONST.DRAW_MODES.LINES] = gl.LINES;
	  object[CONST.DRAW_MODES.LINE_LOOP] = gl.LINE_LOOP;
	  object[CONST.DRAW_MODES.LINE_STRIP] = gl.LINE_STRIP;
	  object[CONST.DRAW_MODES.TRIANGLES] = gl.TRIANGLES;
	  object[CONST.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
	  object[CONST.DRAW_MODES.TRIANGLE_FAN] = gl.TRIANGLE_FAN;
	}

	module.exports = mapWebGLDrawModesToPixi;

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	function validateContext(gl) {
		var attributes = gl.getContextAttributes();

		if (!attributes.stencil) {
			console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
		}
	}

	module.exports = validateContext;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Shader = __webpack_require__(86);
	var glslify = __webpack_require__(80);

	var fragTemplate = ['varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'varying float vTextureId;', 'uniform sampler2D uSamplers[%count%];', 'void main(void){', 'vec4 color;', 'float textureId = floor(vTextureId+0.5);', '%forloop%', 'gl_FragColor = color * vColor;', '}'].join('\n');

	function generateMultiTextureShader(gl, maxTextures) {
	    var vertexSrc = '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n';
	    var fragmentSrc = fragTemplate;

	    fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
	    fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));

	    var shader = new Shader(gl, vertexSrc, fragmentSrc);

	    var sampleValues = [];
	    for (var i = 0; i < maxTextures; i++) {
	        sampleValues[i] = i;
	    }

	    shader.bind();
	    shader.uniforms.uSamplers = sampleValues;

	    return shader;
	}

	function generateSampleSrc(maxTextures) {
	    var src = '';

	    src += '\n';
	    src += '\n';

	    for (var i = 0; i < maxTextures; i++) {
	        if (i > 0) {
	            src += '\nelse ';
	        }

	        if (i < maxTextures - 1) {
	            src += 'if(textureId == ' + i + '.0)';
	        }

	        src += '\n{';
	        src += '\n\tcolor = texture2D(uSamplers[' + i + '], vTextureCoord);';
	        src += '\n}';
	    }

	    src += '\n';
	    src += '\n';

	    return src;
	}

	module.exports = generateMultiTextureShader;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var glCore = __webpack_require__(64);

	var fragTemplate = ['precision mediump float;', 'void main(void){', 'float test = 0.1;', '%forloop%', 'gl_FragColor = vec4(0.0);', '}'].join('\n');

	var checkMaxIfStatmentsInShader = function checkMaxIfStatmentsInShader(maxIfs, gl) {
	    var createTempContext = !gl;

	    if (createTempContext) {
	        var tinyCanvas = document.createElement('canvas');
	        tinyCanvas.width = 1;
	        tinyCanvas.height = 1;

	        gl = glCore.createContext(tinyCanvas);
	    }

	    var shader = gl.createShader(gl.FRAGMENT_SHADER);

	    while (true) {
	        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));

	        gl.shaderSource(shader, fragmentSrc);
	        gl.compileShader(shader);

	        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	            maxIfs = maxIfs / 2 | 0;
	        } else {
	            break;
	        }
	    }

	    if (createTempContext) {
	        if (gl.getExtension('WEBGL_lose_context')) {
	            gl.getExtension('WEBGL_lose_context').loseContext();
	        }
	    }

	    return maxIfs;
	};

	function generateIfTestSrc(maxIfs) {
	    var src = '';

	    for (var i = 0; i < maxIfs; i++) {
	        if (i > 0) {
	            src += '\nelse ';
	        }

	        if (i < maxIfs - 1) {
	            src += 'if(test == ' + i + '.0){}';
	        }
	    }

	    return src;
	}

	module.exports = checkMaxIfStatmentsInShader;

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";

	var Buffer = function Buffer(size) {

	  this.vertices = new ArrayBuffer(size);

	  this.float32View = new Float32Array(this.vertices);

	  this.uint32View = new Uint32Array(this.vertices);
	};

	module.exports = Buffer;

	Buffer.prototype.destroy = function () {
	  this.vertices = null;
	  this.positions = null;
	  this.uvs = null;
	  this.colors = null;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Sprite = __webpack_require__(32),
	    Texture = __webpack_require__(33),
	    math = __webpack_require__(11),
	    utils = __webpack_require__(21),
	    CONST = __webpack_require__(8),
	    TextStyle = __webpack_require__(98);

	var defaultDestroyOptions = {
	    texture: true,
	    children: false,
	    baseTexture: true
	};

	function Text(text, style) {
	    this.canvas = document.createElement('canvas');

	    this.context = this.canvas.getContext('2d');

	    this.resolution = CONST.RESOLUTION;

	    this._text = null;

	    this._style = null;

	    this._styleListener = null;

	    this._font = '';

	    var texture = Texture.fromCanvas(this.canvas);
	    texture.orig = new math.Rectangle();
	    texture.trim = new math.Rectangle();
	    Sprite.call(this, texture);

	    this.text = text;
	    this.style = style;

	    this.localStyleID = -1;
	}

	Text.prototype = Object.create(Sprite.prototype);
	Text.prototype.constructor = Text;
	module.exports = Text;

	Text.fontPropertiesCache = {};
	Text.fontPropertiesCanvas = document.createElement('canvas');
	Text.fontPropertiesContext = Text.fontPropertiesCanvas.getContext('2d');

	Object.defineProperties(Text.prototype, {
	    width: {
	        get: function get() {
	            this.updateText(true);

	            return Math.abs(this.scale.x) * this.texture.orig.width;
	        },
	        set: function set(value) {
	            this.updateText(true);

	            var sign = utils.sign(this.scale.x) || 1;
	            this.scale.x = sign * value / this.texture.orig.width;
	            this._width = value;
	        }
	    },

	    height: {
	        get: function get() {
	            this.updateText(true);

	            return Math.abs(this.scale.y) * this._texture.orig.height;
	        },
	        set: function set(value) {
	            this.updateText(true);

	            var sign = utils.sign(this.scale.y) || 1;
	            this.scale.y = sign * value / this.texture.orig.height;
	            this._height = value;
	        }
	    },

	    style: {
	        get: function get() {
	            return this._style;
	        },
	        set: function set(style) {

	            style = style || {};
	            if (style instanceof TextStyle) {
	                this._style = style;
	            } else {
	                this._style = new TextStyle(style);
	            }

	            this.localStyleID = -1;
	            this.dirty = true;
	        }
	    },

	    text: {
	        get: function get() {
	            return this._text;
	        },
	        set: function set(text) {

	            text = text || ' ';
	            text = text.toString();

	            if (this._text === text) {
	                return;
	            }
	            this._text = text;
	            this.dirty = true;
	        }
	    }
	});

	Text.prototype.updateText = function (respectDirty) {
	    var style = this._style;

	    if (this.localStyleID !== style.styleID) {
	        this.dirty = true;
	        this.localStyleID = style.styleID;
	    }

	    if (!this.dirty && respectDirty) {
	        return;
	    }

	    var fontSizeString = typeof style.fontSize === 'number' ? style.fontSize + 'px' : style.fontSize;
	    this._font = style.fontStyle + ' ' + style.fontVariant + ' ' + style.fontWeight + ' ' + fontSizeString + ' ' + style.fontFamily;

	    this.context.font = this._font;

	    var outputText = style.wordWrap ? this.wordWrap(this._text) : this._text;

	    var lines = outputText.split(/(?:\r\n|\r|\n)/);

	    var lineWidths = new Array(lines.length);
	    var maxLineWidth = 0;
	    var fontProperties = this.determineFontProperties(this._font);

	    var i;
	    for (i = 0; i < lines.length; i++) {
	        var lineWidth = this.context.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;
	        lineWidths[i] = lineWidth;
	        maxLineWidth = Math.max(maxLineWidth, lineWidth);
	    }

	    var width = maxLineWidth + style.strokeThickness;
	    if (style.dropShadow) {
	        width += style.dropShadowDistance;
	    }

	    width += style.padding * 2;

	    this.canvas.width = Math.ceil((width + this.context.lineWidth) * this.resolution);

	    var lineHeight = this.style.lineHeight || fontProperties.fontSize + style.strokeThickness;

	    var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness) + (lines.length - 1) * lineHeight;
	    if (style.dropShadow) {
	        height += style.dropShadowDistance;
	    }

	    this.canvas.height = Math.ceil((height + this._style.padding * 2) * this.resolution);

	    this.context.scale(this.resolution, this.resolution);

	    if (navigator.isCocoonJS) {
	        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    }

	    this.context.font = this._font;
	    this.context.strokeStyle = style.stroke;
	    this.context.lineWidth = style.strokeThickness;
	    this.context.textBaseline = style.textBaseline;
	    this.context.lineJoin = style.lineJoin;
	    this.context.miterLimit = style.miterLimit;

	    var linePositionX;
	    var linePositionY;

	    if (style.dropShadow) {
	        if (style.dropShadowBlur > 0) {
	            this.context.shadowColor = style.dropShadowColor;
	            this.context.shadowBlur = style.dropShadowBlur;
	        } else {
	            this.context.fillStyle = style.dropShadowColor;
	        }

	        var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
	        var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;

	        for (i = 0; i < lines.length; i++) {
	            linePositionX = style.strokeThickness / 2;
	            linePositionY = style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent;

	            if (style.align === 'right') {
	                linePositionX += maxLineWidth - lineWidths[i];
	            } else if (style.align === 'center') {
	                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
	            }

	            if (style.fill) {
	                this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding);

	                if (style.stroke && style.strokeThickness) {
	                    this.context.strokeStyle = style.dropShadowColor;
	                    this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding, true);
	                    this.context.strokeStyle = style.stroke;
	                }
	            }
	        }
	    }

	    this.context.fillStyle = this._generateFillStyle(style, lines);

	    for (i = 0; i < lines.length; i++) {
	        linePositionX = style.strokeThickness / 2;
	        linePositionY = style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent;

	        if (style.align === 'right') {
	            linePositionX += maxLineWidth - lineWidths[i];
	        } else if (style.align === 'center') {
	            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
	        }

	        if (style.stroke && style.strokeThickness) {
	            this.drawLetterSpacing(lines[i], linePositionX + style.padding, linePositionY + style.padding, true);
	        }

	        if (style.fill) {
	            this.drawLetterSpacing(lines[i], linePositionX + style.padding, linePositionY + style.padding);
	        }
	    }

	    this.updateTexture();
	};

	Text.prototype.drawLetterSpacing = function (text, x, y, isStroke) {
	    var style = this._style;

	    var letterSpacing = style.letterSpacing;

	    if (letterSpacing === 0) {
	        if (isStroke) {
	            this.context.strokeText(text, x, y);
	        } else {
	            this.context.fillText(text, x, y);
	        }
	        return;
	    }

	    var characters = String.prototype.split.call(text, ''),
	        index = 0,
	        current,
	        currentPosition = x;

	    while (index < text.length) {
	        current = characters[index++];
	        if (isStroke) {
	            this.context.strokeText(current, currentPosition, y);
	        } else {
	            this.context.fillText(current, currentPosition, y);
	        }
	        currentPosition += this.context.measureText(current).width + letterSpacing;
	    }
	};

	Text.prototype.updateTexture = function () {
	    var texture = this._texture;
	    var style = this._style;

	    texture.baseTexture.hasLoaded = true;
	    texture.baseTexture.resolution = this.resolution;

	    texture.baseTexture.realWidth = this.canvas.width;
	    texture.baseTexture.realHeight = this.canvas.height;
	    texture.baseTexture.width = this.canvas.width / this.resolution;
	    texture.baseTexture.height = this.canvas.height / this.resolution;
	    texture.trim.width = texture._frame.width = this.canvas.width / this.resolution;
	    texture.trim.height = texture._frame.height = this.canvas.height / this.resolution;

	    texture.trim.x = -style.padding;
	    texture.trim.y = -style.padding;

	    texture.orig.width = texture._frame.width - style.padding * 2;
	    texture.orig.height = texture._frame.height - style.padding * 2;

	    this._onTextureUpdate();

	    texture.baseTexture.emit('update', texture.baseTexture);

	    this.dirty = false;
	};

	Text.prototype.renderWebGL = function (renderer) {
	    if (this.resolution !== renderer.resolution) {
	        this.resolution = renderer.resolution;
	        this.dirty = true;
	    }

	    this.updateText(true);

	    Sprite.prototype.renderWebGL.call(this, renderer);
	};

	Text.prototype._renderCanvas = function (renderer) {
	    if (this.resolution !== renderer.resolution) {
	        this.resolution = renderer.resolution;
	        this.dirty = true;
	    }

	    this.updateText(true);

	    Sprite.prototype._renderCanvas.call(this, renderer);
	};

	Text.prototype.determineFontProperties = function (fontStyle) {
	    var properties = Text.fontPropertiesCache[fontStyle];

	    if (!properties) {
	        properties = {};

	        var canvas = Text.fontPropertiesCanvas;
	        var context = Text.fontPropertiesContext;

	        context.font = fontStyle;

	        var width = Math.ceil(context.measureText('|MÉq').width);
	        var baseline = Math.ceil(context.measureText('M').width);
	        var height = 2 * baseline;

	        baseline = baseline * 1.4 | 0;

	        canvas.width = width;
	        canvas.height = height;

	        context.fillStyle = '#f00';
	        context.fillRect(0, 0, width, height);

	        context.font = fontStyle;

	        context.textBaseline = 'alphabetic';
	        context.fillStyle = '#000';
	        context.fillText('|MÉq', 0, baseline);

	        var imagedata = context.getImageData(0, 0, width, height).data;
	        var pixels = imagedata.length;
	        var line = width * 4;

	        var i, j;

	        var idx = 0;
	        var stop = false;

	        for (i = 0; i < baseline; i++) {
	            for (j = 0; j < line; j += 4) {
	                if (imagedata[idx + j] !== 255) {
	                    stop = true;
	                    break;
	                }
	            }
	            if (!stop) {
	                idx += line;
	            } else {
	                break;
	            }
	        }

	        properties.ascent = baseline - i;

	        idx = pixels - line;
	        stop = false;

	        for (i = height; i > baseline; i--) {
	            for (j = 0; j < line; j += 4) {
	                if (imagedata[idx + j] !== 255) {
	                    stop = true;
	                    break;
	                }
	            }
	            if (!stop) {
	                idx -= line;
	            } else {
	                break;
	            }
	        }

	        properties.descent = i - baseline;
	        properties.fontSize = properties.ascent + properties.descent;

	        Text.fontPropertiesCache[fontStyle] = properties;
	    }

	    return properties;
	};

	Text.prototype.wordWrap = function (text) {
	    var result = '';
	    var lines = text.split('\n');
	    var wordWrapWidth = this._style.wordWrapWidth;
	    for (var i = 0; i < lines.length; i++) {
	        var spaceLeft = wordWrapWidth;
	        var words = lines[i].split(' ');
	        for (var j = 0; j < words.length; j++) {
	            var wordWidth = this.context.measureText(words[j]).width;
	            if (this._style.breakWords && wordWidth > wordWrapWidth) {
	                var characters = words[j].split('');
	                for (var c = 0; c < characters.length; c++) {
	                    var characterWidth = this.context.measureText(characters[c]).width;
	                    if (characterWidth > spaceLeft) {
	                        result += '\n' + characters[c];
	                        spaceLeft = wordWrapWidth - characterWidth;
	                    } else {
	                        if (c === 0) {
	                            result += ' ';
	                        }
	                        result += characters[c];
	                        spaceLeft -= characterWidth;
	                    }
	                }
	            } else {
	                var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width;
	                if (j === 0 || wordWidthWithSpace > spaceLeft) {
	                    if (j > 0) {
	                        result += '\n';
	                    }
	                    result += words[j];
	                    spaceLeft = wordWrapWidth - wordWidth;
	                } else {
	                    spaceLeft -= wordWidthWithSpace;
	                    result += ' ' + words[j];
	                }
	            }
	        }

	        if (i < lines.length - 1) {
	            result += '\n';
	        }
	    }
	    return result;
	};

	Text.prototype._calculateBounds = function () {
	    this.updateText(true);
	    this.calculateVertices();

	    this._bounds.addQuad(this.vertexData);
	};

	Text.prototype._onStyleChange = function () {
	    this.dirty = true;
	};

	Text.prototype._generateFillStyle = function (style, lines) {
	    if (!Array.isArray(style.fill)) {
	        return style.fill;
	    } else {
	        var i;
	        var gradient;
	        var totalIterations;
	        var currentIteration;
	        var stop;

	        var width = this.canvas.width / this.resolution;
	        var height = this.canvas.height / this.resolution;

	        if (style.fillGradientType === CONST.TEXT_GRADIENT.LINEAR_VERTICAL) {
	            gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);

	            totalIterations = (style.fill.length + 1) * lines.length;
	            currentIteration = 0;
	            for (i = 0; i < lines.length; i++) {
	                currentIteration += 1;
	                for (var j = 0; j < style.fill.length; j++) {
	                    stop = currentIteration / totalIterations;
	                    gradient.addColorStop(stop, style.fill[j]);
	                    currentIteration++;
	                }
	            }
	        } else {
	            gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);

	            totalIterations = style.fill.length + 1;
	            currentIteration = 1;

	            for (i = 0; i < style.fill.length; i++) {
	                stop = currentIteration / totalIterations;
	                gradient.addColorStop(stop, style.fill[i]);
	                currentIteration++;
	            }
	        }

	        return gradient;
	    }
	};

	Text.prototype.destroy = function (options) {
	    if (typeof options === 'boolean') {
	        options = { children: options };
	    }

	    options = Object.assign({}, defaultDestroyOptions, options);

	    Sprite.prototype.destroy.call(this, options);

	    this.context = null;
	    this.canvas = null;

	    this._style = null;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CONST = __webpack_require__(8),
	    utils = __webpack_require__(21);

	function TextStyle(style) {
	    this.styleID = 0;
	    Object.assign(this, this._defaults, style);
	}

	TextStyle.prototype.constructor = TextStyle;
	module.exports = TextStyle;

	TextStyle.prototype._defaults = {
	    align: 'left',
	    breakWords: false,
	    dropShadow: false,
	    dropShadowAngle: Math.PI / 6,
	    dropShadowBlur: 0,
	    dropShadowColor: '#000000',
	    dropShadowDistance: 5,
	    fill: 'black',
	    fillGradientType: CONST.TEXT_GRADIENT.LINEAR_VERTICAL,
	    fontFamily: 'Arial',
	    fontSize: 26,
	    fontStyle: 'normal',
	    fontVariant: 'normal',
	    fontWeight: 'normal',
	    letterSpacing: 0,
	    lineHeight: 0,
	    lineJoin: 'miter',
	    miterLimit: 10,
	    padding: 0,
	    stroke: 'black',
	    strokeThickness: 0,
	    textBaseline: 'alphabetic',
	    wordWrap: false,
	    wordWrapWidth: 100
	};

	TextStyle.prototype.clone = function () {
	    var clonedProperties = {};
	    for (var key in this._defaults) {
	        clonedProperties[key] = this[key];
	    }
	    return new TextStyle(clonedProperties);
	};

	TextStyle.prototype.reset = function () {
	    Object.assign(this, this._defaults);
	};

	Object.defineProperties(TextStyle.prototype, {
	    align: {
	        get: function get() {
	            return this._align;
	        },
	        set: function set(align) {
	            if (this._align !== align) {
	                this._align = align;
	                this.styleID++;
	            }
	        }
	    },

	    breakWords: {
	        get: function get() {
	            return this._breakWords;
	        },
	        set: function set(breakWords) {
	            if (this._breakWords !== breakWords) {
	                this._breakWords = breakWords;
	                this.styleID++;
	            }
	        }
	    },

	    dropShadow: {
	        get: function get() {
	            return this._dropShadow;
	        },
	        set: function set(dropShadow) {
	            if (this._dropShadow !== dropShadow) {
	                this._dropShadow = dropShadow;
	                this.styleID++;
	            }
	        }
	    },

	    dropShadowAngle: {
	        get: function get() {
	            return this._dropShadowAngle;
	        },
	        set: function set(dropShadowAngle) {
	            if (this._dropShadowAngle !== dropShadowAngle) {
	                this._dropShadowAngle = dropShadowAngle;
	                this.styleID++;
	            }
	        }
	    },

	    dropShadowBlur: {
	        get: function get() {
	            return this._dropShadowBlur;
	        },
	        set: function set(dropShadowBlur) {
	            if (this._dropShadowBlur !== dropShadowBlur) {
	                this._dropShadowBlur = dropShadowBlur;
	                this.styleID++;
	            }
	        }
	    },

	    dropShadowColor: {
	        get: function get() {
	            return this._dropShadowColor;
	        },
	        set: function set(dropShadowColor) {
	            var outputColor = getColor(dropShadowColor);
	            if (this._dropShadowColor !== outputColor) {
	                this._dropShadowColor = outputColor;
	                this.styleID++;
	            }
	        }
	    },

	    dropShadowDistance: {
	        get: function get() {
	            return this._dropShadowDistance;
	        },
	        set: function set(dropShadowDistance) {
	            if (this._dropShadowDistance !== dropShadowDistance) {
	                this._dropShadowDistance = dropShadowDistance;
	                this.styleID++;
	            }
	        }
	    },

	    fill: {
	        get: function get() {
	            return this._fill;
	        },
	        set: function set(fill) {
	            var outputColor = getColor(fill);
	            if (this._fill !== outputColor) {
	                this._fill = outputColor;
	                this.styleID++;
	            }
	        }
	    },

	    fillGradientType: {
	        get: function get() {
	            return this._fillGradientType;
	        },
	        set: function set(fillGradientType) {
	            if (this._fillGradientType !== fillGradientType) {
	                this._fillGradientType = fillGradientType;
	                this.styleID++;
	            }
	        }
	    },

	    fontFamily: {
	        get: function get() {
	            return this._fontFamily;
	        },
	        set: function set(fontFamily) {
	            if (this.fontFamily !== fontFamily) {
	                this._fontFamily = fontFamily;
	                this.styleID++;
	            }
	        }
	    },

	    fontSize: {
	        get: function get() {
	            return this._fontSize;
	        },
	        set: function set(fontSize) {
	            if (this._fontSize !== fontSize) {
	                this._fontSize = fontSize;
	                this.styleID++;
	            }
	        }
	    },

	    fontStyle: {
	        get: function get() {
	            return this._fontStyle;
	        },
	        set: function set(fontStyle) {
	            if (this._fontStyle !== fontStyle) {
	                this._fontStyle = fontStyle;
	                this.styleID++;
	            }
	        }
	    },

	    fontVariant: {
	        get: function get() {
	            return this._fontVariant;
	        },
	        set: function set(fontVariant) {
	            if (this._fontVariant !== fontVariant) {
	                this._fontVariant = fontVariant;
	                this.styleID++;
	            }
	        }
	    },

	    fontWeight: {
	        get: function get() {
	            return this._fontWeight;
	        },
	        set: function set(fontWeight) {
	            if (this._fontWeight !== fontWeight) {
	                this._fontWeight = fontWeight;
	                this.styleID++;
	            }
	        }
	    },

	    letterSpacing: {
	        get: function get() {
	            return this._letterSpacing;
	        },
	        set: function set(letterSpacing) {
	            if (this._letterSpacing !== letterSpacing) {
	                this._letterSpacing = letterSpacing;
	                this.styleID++;
	            }
	        }
	    },

	    lineHeight: {
	        get: function get() {
	            return this._lineHeight;
	        },
	        set: function set(lineHeight) {
	            if (this._lineHeight !== lineHeight) {
	                this._lineHeight = lineHeight;
	                this.styleID++;
	            }
	        }
	    },

	    lineJoin: {
	        get: function get() {
	            return this._lineJoin;
	        },
	        set: function set(lineJoin) {
	            if (this._lineJoin !== lineJoin) {
	                this._lineJoin = lineJoin;
	                this.styleID++;
	            }
	        }
	    },

	    miterLimit: {
	        get: function get() {
	            return this._miterLimit;
	        },
	        set: function set(miterLimit) {
	            if (this._miterLimit !== miterLimit) {
	                this._miterLimit = miterLimit;
	                this.styleID++;
	            }
	        }
	    },

	    padding: {
	        get: function get() {
	            return this._padding;
	        },
	        set: function set(padding) {
	            if (this._padding !== padding) {
	                this._padding = padding;
	                this.styleID++;
	            }
	        }
	    },

	    stroke: {
	        get: function get() {
	            return this._stroke;
	        },
	        set: function set(stroke) {
	            var outputColor = getColor(stroke);
	            if (this._stroke !== outputColor) {
	                this._stroke = outputColor;
	                this.styleID++;
	            }
	        }
	    },

	    strokeThickness: {
	        get: function get() {
	            return this._strokeThickness;
	        },
	        set: function set(strokeThickness) {
	            if (this._strokeThickness !== strokeThickness) {
	                this._strokeThickness = strokeThickness;
	                this.styleID++;
	            }
	        }
	    },

	    textBaseline: {
	        get: function get() {
	            return this._textBaseline;
	        },
	        set: function set(textBaseline) {
	            if (this._textBaseline !== textBaseline) {
	                this._textBaseline = textBaseline;
	                this.styleID++;
	            }
	        }
	    },

	    wordWrap: {
	        get: function get() {
	            return this._wordWrap;
	        },
	        set: function set(wordWrap) {
	            if (this._wordWrap !== wordWrap) {
	                this._wordWrap = wordWrap;
	                this.styleID++;
	            }
	        }
	    },

	    wordWrapWidth: {
	        get: function get() {
	            return this._wordWrapWidth;
	        },
	        set: function set(wordWrapWidth) {
	            if (this._wordWrapWidth !== wordWrapWidth) {
	                this._wordWrapWidth = wordWrapWidth;
	                this.styleID++;
	            }
	        }
	    }
	});

	function getColor(color) {
	    if (typeof color === 'number') {
	        return utils.hex2string(color);
	    } else if (Array.isArray(color)) {
	        for (var i = 0; i < color.length; ++i) {
	            if (typeof color[i] === 'number') {
	                color[i] = utils.hex2string(color[i]);
	            }
	        }
	    }

	    return color;
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Container = __webpack_require__(31),
	    RenderTexture = __webpack_require__(49),
	    Texture = __webpack_require__(33),
	    GraphicsData = __webpack_require__(100),
	    Sprite = __webpack_require__(32),
	    math = __webpack_require__(11),
	    CONST = __webpack_require__(8),
	    utils = __webpack_require__(21),
	    Bounds = __webpack_require__(30),
	    bezierCurveTo = __webpack_require__(101),
	    CanvasRenderer = __webpack_require__(47),
	    canvasRenderer,
	    tempMatrix = new math.Matrix(),
	    tempPoint = new math.Point(),
	    tempColor1 = new Float32Array(4),
	    tempColor2 = new Float32Array(4);

	function Graphics() {
	    Container.call(this);

	    this.fillAlpha = 1;

	    this.lineWidth = 0;

	    this.lineColor = 0;

	    this.graphicsData = [];

	    this.tint = 0xFFFFFF;

	    this._prevTint = 0xFFFFFF;

	    this.blendMode = CONST.BLEND_MODES.NORMAL;

	    this.currentPath = null;

	    this._webGL = {};

	    this.isMask = false;

	    this.boundsPadding = 0;

	    this._localBounds = new Bounds();

	    this.dirty = 0;

	    this.fastRectDirty = -1;

	    this.clearDirty = 0;

	    this.boundsDirty = -1;

	    this.cachedSpriteDirty = false;

	    this._spriteRect = null;
	    this._fastRect = false;
	}

	Graphics._SPRITE_TEXTURE = null;

	Graphics.prototype = Object.create(Container.prototype);
	Graphics.prototype.constructor = Graphics;
	module.exports = Graphics;

	Graphics.prototype.clone = function () {
	    var clone = new Graphics();

	    clone.renderable = this.renderable;
	    clone.fillAlpha = this.fillAlpha;
	    clone.lineWidth = this.lineWidth;
	    clone.lineColor = this.lineColor;
	    clone.tint = this.tint;
	    clone.blendMode = this.blendMode;
	    clone.isMask = this.isMask;
	    clone.boundsPadding = this.boundsPadding;
	    clone.dirty = 0;
	    clone.cachedSpriteDirty = this.cachedSpriteDirty;

	    for (var i = 0; i < this.graphicsData.length; ++i) {
	        clone.graphicsData.push(this.graphicsData[i].clone());
	    }

	    clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

	    clone.updateLocalBounds();

	    return clone;
	};

	Graphics.prototype.lineStyle = function (lineWidth, color, alpha) {
	    this.lineWidth = lineWidth || 0;
	    this.lineColor = color || 0;
	    this.lineAlpha = alpha === undefined ? 1 : alpha;

	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length) {
	            var shape = new math.Polygon(this.currentPath.shape.points.slice(-2));
	            shape.closed = false;
	            this.drawShape(shape);
	        } else {
	            this.currentPath.lineWidth = this.lineWidth;
	            this.currentPath.lineColor = this.lineColor;
	            this.currentPath.lineAlpha = this.lineAlpha;
	        }
	    }

	    return this;
	};

	Graphics.prototype.moveTo = function (x, y) {
	    var shape = new math.Polygon([x, y]);
	    shape.closed = false;
	    this.drawShape(shape);

	    return this;
	};

	Graphics.prototype.lineTo = function (x, y) {
	    this.currentPath.shape.points.push(x, y);
	    this.dirty++;

	    return this;
	};

	Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {
	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points = [0, 0];
	        }
	    } else {
	        this.moveTo(0, 0);
	    }

	    var xa,
	        ya,
	        n = 20,
	        points = this.currentPath.shape.points;

	    if (points.length === 0) {
	        this.moveTo(0, 0);
	    }

	    var fromX = points[points.length - 2];
	    var fromY = points[points.length - 1];

	    var j = 0;
	    for (var i = 1; i <= n; ++i) {
	        j = i / n;

	        xa = fromX + (cpX - fromX) * j;
	        ya = fromY + (cpY - fromY) * j;

	        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
	    }

	    this.dirty++;

	    return this;
	};

	Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {
	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points = [0, 0];
	        }
	    } else {
	        this.moveTo(0, 0);
	    }

	    var points = this.currentPath.shape.points;

	    var fromX = points[points.length - 2];
	    var fromY = points[points.length - 1];

	    points.length -= 2;

	    bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

	    this.dirty++;

	    return this;
	};

	Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {
	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	            this.currentPath.shape.points.push(x1, y1);
	        }
	    } else {
	        this.moveTo(x1, y1);
	    }

	    var points = this.currentPath.shape.points,
	        fromX = points[points.length - 2],
	        fromY = points[points.length - 1],
	        a1 = fromY - y1,
	        b1 = fromX - x1,
	        a2 = y2 - y1,
	        b2 = x2 - x1,
	        mm = Math.abs(a1 * b2 - b1 * a2);

	    if (mm < 1.0e-8 || radius === 0) {
	        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
	            points.push(x1, y1);
	        }
	    } else {
	        var dd = a1 * a1 + b1 * b1,
	            cc = a2 * a2 + b2 * b2,
	            tt = a1 * a2 + b1 * b2,
	            k1 = radius * Math.sqrt(dd) / mm,
	            k2 = radius * Math.sqrt(cc) / mm,
	            j1 = k1 * tt / dd,
	            j2 = k2 * tt / cc,
	            cx = k1 * b2 + k2 * b1,
	            cy = k1 * a2 + k2 * a1,
	            px = b1 * (k2 + j1),
	            py = a1 * (k2 + j1),
	            qx = b2 * (k1 + j2),
	            qy = a2 * (k1 + j2),
	            startAngle = Math.atan2(py - cy, px - cx),
	            endAngle = Math.atan2(qy - cy, qx - cx);

	        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	    }

	    this.dirty++;

	    return this;
	};

	Graphics.prototype.arc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
	    anticlockwise = anticlockwise || false;

	    if (startAngle === endAngle) {
	        return this;
	    }

	    if (!anticlockwise && endAngle <= startAngle) {
	        endAngle += Math.PI * 2;
	    } else if (anticlockwise && startAngle <= endAngle) {
	        startAngle += Math.PI * 2;
	    }

	    var sweep = anticlockwise ? (startAngle - endAngle) * -1 : endAngle - startAngle;
	    var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;

	    if (sweep === 0) {
	        return this;
	    }

	    var startX = cx + Math.cos(startAngle) * radius;
	    var startY = cy + Math.sin(startAngle) * radius;

	    if (this.currentPath) {
	        this.currentPath.shape.points.push(startX, startY);
	    } else {
	        this.moveTo(startX, startY);
	    }

	    var points = this.currentPath.shape.points;

	    var theta = sweep / (segs * 2);
	    var theta2 = theta * 2;

	    var cTheta = Math.cos(theta);
	    var sTheta = Math.sin(theta);

	    var segMinus = segs - 1;

	    var remainder = segMinus % 1 / segMinus;

	    for (var i = 0; i <= segMinus; i++) {
	        var real = i + remainder * i;

	        var angle = theta + startAngle + theta2 * real;

	        var c = Math.cos(angle);
	        var s = -Math.sin(angle);

	        points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
	    }

	    this.dirty++;

	    return this;
	};

	Graphics.prototype.beginFill = function (color, alpha) {
	    this.filling = true;
	    this.fillColor = color || 0;
	    this.fillAlpha = alpha === undefined ? 1 : alpha;

	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length <= 2) {
	            this.currentPath.fill = this.filling;
	            this.currentPath.fillColor = this.fillColor;
	            this.currentPath.fillAlpha = this.fillAlpha;
	        }
	    }
	    return this;
	};

	Graphics.prototype.endFill = function () {
	    this.filling = false;
	    this.fillColor = null;
	    this.fillAlpha = 1;

	    return this;
	};

	Graphics.prototype.drawRect = function (x, y, width, height) {
	    this.drawShape(new math.Rectangle(x, y, width, height));

	    return this;
	};

	Graphics.prototype.drawRoundedRect = function (x, y, width, height, radius) {
	    this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));

	    return this;
	};

	Graphics.prototype.drawCircle = function (x, y, radius) {
	    this.drawShape(new math.Circle(x, y, radius));

	    return this;
	};

	Graphics.prototype.drawEllipse = function (x, y, width, height) {
	    this.drawShape(new math.Ellipse(x, y, width, height));

	    return this;
	};

	Graphics.prototype.drawPolygon = function (path) {
	    var points = path;

	    var closed = true;

	    if (points instanceof math.Polygon) {
	        closed = points.closed;
	        points = points.points;
	    }

	    if (!Array.isArray(points)) {
	        points = new Array(arguments.length);

	        for (var i = 0; i < points.length; ++i) {
	            points[i] = arguments[i];
	        }
	    }

	    var shape = new math.Polygon(points);
	    shape.closed = closed;

	    this.drawShape(shape);

	    return this;
	};

	Graphics.prototype.clear = function () {
	    this.lineWidth = 0;
	    this.filling = false;

	    this.dirty++;
	    this.clearDirty++;
	    this.graphicsData = [];

	    return this;
	};

	Graphics.prototype.isFastRect = function () {
	    return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === CONST.SHAPES.RECT && !this.graphicsData[0].lineWidth;
	};

	Graphics.prototype._renderWebGL = function (renderer) {
	    if (this.dirty !== this.fastRectDirty) {
	        this.fastRectDirty = this.dirty;
	        this._fastRect = this.isFastRect();
	    }

	    if (this._fastRect) {
	        this._renderSpriteRect(renderer);
	    } else {
	        renderer.setObjectRenderer(renderer.plugins.graphics);
	        renderer.plugins.graphics.render(this);
	    }
	};

	Graphics.prototype._renderSpriteRect = function (renderer) {
	    var rect = this.graphicsData[0].shape;
	    if (!this._spriteRect) {
	        if (!Graphics._SPRITE_TEXTURE) {
	            Graphics._SPRITE_TEXTURE = RenderTexture.create(10, 10);

	            var currentRenderTarget = renderer._activeRenderTarget;
	            renderer.bindRenderTexture(Graphics._SPRITE_TEXTURE);
	            renderer.clear([1, 1, 1, 1]);
	            renderer.bindRenderTarget(currentRenderTarget);
	        }

	        this._spriteRect = new Sprite(Graphics._SPRITE_TEXTURE);
	    }
	    if (this.tint === 0xffffff) {
	        this._spriteRect.tint = this.graphicsData[0].fillColor;
	    } else {
	        var t1 = tempColor1;
	        var t2 = tempColor2;
	        utils.hex2rgb(this.graphicsData[0].fillColor, t1);
	        utils.hex2rgb(this.tint, t2);
	        t1[0] *= t2[0];
	        t1[1] *= t2[1];
	        t1[2] *= t2[2];
	        this._spriteRect.tint = utils.rgb2hex(t1);
	    }
	    this._spriteRect.alpha = this.graphicsData[0].fillAlpha;
	    this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha;

	    Graphics._SPRITE_TEXTURE._frame.width = rect.width;
	    Graphics._SPRITE_TEXTURE._frame.height = rect.height;

	    this._spriteRect.transform.worldTransform = this.transform.worldTransform;

	    this._spriteRect.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
	    this._spriteRect.onAnchorUpdate();

	    this._spriteRect._renderWebGL(renderer);
	};

	Graphics.prototype._renderCanvas = function (renderer) {
	    if (this.isMask === true) {
	        return;
	    }

	    renderer.plugins.graphics.render(this);
	};

	Graphics.prototype._calculateBounds = function () {
	    if (!this.renderable) {
	        return;
	    }

	    if (this.boundsDirty !== this.dirty) {
	        this.boundsDirty = this.dirty;
	        this.updateLocalBounds();

	        this.dirty++;
	        this.cachedSpriteDirty = true;
	    }

	    var lb = this._localBounds;
	    this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
	};

	Graphics.prototype.containsPoint = function (point) {
	    this.worldTransform.applyInverse(point, tempPoint);

	    var graphicsData = this.graphicsData;

	    for (var i = 0; i < graphicsData.length; i++) {
	        var data = graphicsData[i];

	        if (!data.fill) {
	            continue;
	        }

	        if (data.shape) {
	            if (data.shape.contains(tempPoint.x, tempPoint.y)) {
	                return true;
	            }
	        }
	    }

	    return false;
	};

	Graphics.prototype.updateLocalBounds = function () {
	    var minX = Infinity;
	    var maxX = -Infinity;

	    var minY = Infinity;
	    var maxY = -Infinity;

	    if (this.graphicsData.length) {
	        var shape, points, x, y, w, h;

	        for (var i = 0; i < this.graphicsData.length; i++) {
	            var data = this.graphicsData[i];
	            var type = data.type;
	            var lineWidth = data.lineWidth;
	            shape = data.shape;

	            if (type === CONST.SHAPES.RECT || type === CONST.SHAPES.RREC) {
	                x = shape.x - lineWidth / 2;
	                y = shape.y - lineWidth / 2;
	                w = shape.width + lineWidth;
	                h = shape.height + lineWidth;

	                minX = x < minX ? x : minX;
	                maxX = x + w > maxX ? x + w : maxX;

	                minY = y < minY ? y : minY;
	                maxY = y + h > maxY ? y + h : maxY;
	            } else if (type === CONST.SHAPES.CIRC) {
	                x = shape.x;
	                y = shape.y;
	                w = shape.radius + lineWidth / 2;
	                h = shape.radius + lineWidth / 2;

	                minX = x - w < minX ? x - w : minX;
	                maxX = x + w > maxX ? x + w : maxX;

	                minY = y - h < minY ? y - h : minY;
	                maxY = y + h > maxY ? y + h : maxY;
	            } else if (type === CONST.SHAPES.ELIP) {
	                x = shape.x;
	                y = shape.y;
	                w = shape.width + lineWidth / 2;
	                h = shape.height + lineWidth / 2;

	                minX = x - w < minX ? x - w : minX;
	                maxX = x + w > maxX ? x + w : maxX;

	                minY = y - h < minY ? y - h : minY;
	                maxY = y + h > maxY ? y + h : maxY;
	            } else {
	                points = shape.points;

	                for (var j = 0; j < points.length; j += 2) {
	                    x = points[j];
	                    y = points[j + 1];

	                    minX = x - lineWidth < minX ? x - lineWidth : minX;
	                    maxX = x + lineWidth > maxX ? x + lineWidth : maxX;

	                    minY = y - lineWidth < minY ? y - lineWidth : minY;
	                    maxY = y + lineWidth > maxY ? y + lineWidth : maxY;
	                }
	            }
	        }
	    } else {
	        minX = 0;
	        maxX = 0;
	        minY = 0;
	        maxY = 0;
	    }

	    var padding = this.boundsPadding;

	    this._localBounds.minX = minX - padding;
	    this._localBounds.maxX = maxX + padding * 2;

	    this._localBounds.minY = minY - padding;
	    this._localBounds.maxY = maxY + padding * 2;
	};

	Graphics.prototype.drawShape = function (shape) {
	    if (this.currentPath) {
	        if (this.currentPath.shape.points.length <= 2) {
	            this.graphicsData.pop();
	        }
	    }

	    this.currentPath = null;

	    var data = new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, shape);

	    this.graphicsData.push(data);

	    if (data.type === CONST.SHAPES.POLY) {
	        data.shape.closed = data.shape.closed || this.filling;
	        this.currentPath = data;
	    }

	    this.dirty++;

	    return data;
	};

	Graphics.prototype.generateCanvasTexture = function (scaleMode, resolution) {
	    resolution = resolution || 1;

	    var bounds = this.getLocalBounds();

	    var canvasBuffer = new RenderTexture.create(bounds.width * resolution, bounds.height * resolution);

	    if (!canvasRenderer) {
	        canvasRenderer = new CanvasRenderer();
	    }

	    tempMatrix.tx = -bounds.x;
	    tempMatrix.ty = -bounds.y;

	    canvasRenderer.render(this, canvasBuffer, false, tempMatrix);

	    var texture = Texture.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode);
	    texture.baseTexture.resolution = resolution;

	    return texture;
	};

	Graphics.prototype.closePath = function () {
	    var currentPath = this.currentPath;
	    if (currentPath && currentPath.shape) {
	        currentPath.shape.close();
	    }
	    return this;
	};

	Graphics.prototype.addHole = function () {
	    var hole = this.graphicsData.pop();

	    this.currentPath = this.graphicsData[this.graphicsData.length - 1];

	    this.currentPath.addHole(hole.shape);
	    this.currentPath = null;

	    return this;
	};

	Graphics.prototype.destroy = function () {
	    Container.prototype.destroy.apply(this, arguments);

	    for (var i = 0; i < this.graphicsData.length; ++i) {
	        this.graphicsData[i].destroy();
	    }

	    for (var id in this._webgl) {
	        for (var j = 0; j < this._webgl[id].data.length; ++j) {
	            this._webgl[id].data[j].destroy();
	        }
	    }

	    if (this._spriteRect) {
	        this._spriteRect.destroy();
	    }
	    this.graphicsData = null;

	    this.currentPath = null;
	    this._webgl = null;
	    this._localBounds = null;
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape) {
	  this.lineWidth = lineWidth;

	  this.lineColor = lineColor;

	  this.lineAlpha = lineAlpha;

	  this._lineTint = lineColor;

	  this.fillColor = fillColor;

	  this.fillAlpha = fillAlpha;

	  this._fillTint = fillColor;

	  this.fill = fill;

	  this.holes = [];

	  this.shape = shape;

	  this.type = shape.type;
	}

	GraphicsData.prototype.constructor = GraphicsData;
	module.exports = GraphicsData;

	GraphicsData.prototype.clone = function () {
	  return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape);
	};

	GraphicsData.prototype.addHole = function (shape) {
	  this.holes.push(shape);
	};

	GraphicsData.prototype.destroy = function () {
	  this.shape = null;
	  this.holes = null;
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";

	var bezierCurveTo = function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, path) {
	    path = path || [];

	    var n = 20,
	        dt,
	        dt2,
	        dt3,
	        t2,
	        t3;

	    path.push(fromX, fromY);

	    var j = 0;

	    for (var i = 1; i <= n; ++i) {
	        j = i / n;

	        dt = 1 - j;
	        dt2 = dt * dt;
	        dt3 = dt2 * dt;

	        t2 = j * j;
	        t3 = t2 * j;

	        path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
	    }

	    return path;
	};

	module.exports = bezierCurveTo;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(21),
	    CONST = __webpack_require__(8),
	    ObjectRenderer = __webpack_require__(57),
	    WebGLRenderer = __webpack_require__(59),
	    WebGLGraphicsData = __webpack_require__(103),
	    PrimitiveShader = __webpack_require__(104),
	    buildPoly = __webpack_require__(105),
	    buildRectangle = __webpack_require__(108),
	    buildRoundedRectangle = __webpack_require__(109),
	    buildCircle = __webpack_require__(110);

	function GraphicsRenderer(renderer) {
	    ObjectRenderer.call(this, renderer);

	    this.graphicsDataPool = [];

	    this.primitiveShader = null;

	    this.gl = renderer.gl;

	    this.CONTEXT_UID = 0;
	}

	GraphicsRenderer.prototype = Object.create(ObjectRenderer.prototype);
	GraphicsRenderer.prototype.constructor = GraphicsRenderer;
	module.exports = GraphicsRenderer;

	WebGLRenderer.registerPlugin('graphics', GraphicsRenderer);

	GraphicsRenderer.prototype.onContextChange = function () {
	    this.gl = this.renderer.gl;
	    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
	    this.primitiveShader = new PrimitiveShader(this.gl);
	};

	GraphicsRenderer.prototype.destroy = function () {
	    ObjectRenderer.prototype.destroy.call(this);

	    for (var i = 0; i < this.graphicsDataPool.length; ++i) {
	        this.graphicsDataPool[i].destroy();
	    }

	    this.graphicsDataPool = null;
	};

	GraphicsRenderer.prototype.render = function (graphics) {
	    var renderer = this.renderer;
	    var gl = renderer.gl;

	    var webGLData;

	    var webGL = graphics._webGL[this.CONTEXT_UID];

	    if (!webGL || graphics.dirty !== webGL.dirty) {

	        this.updateGraphics(graphics);

	        webGL = graphics._webGL[this.CONTEXT_UID];
	    }

	    var shader = this.primitiveShader;
	    renderer.bindShader(shader);
	    renderer.state.setBlendMode(graphics.blendMode);

	    for (var i = 0, n = webGL.data.length; i < n; i++) {
	        webGLData = webGL.data[i];
	        var shaderTemp = webGLData.shader;

	        renderer.bindShader(shaderTemp);
	        shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
	        shaderTemp.uniforms.tint = utils.hex2rgb(graphics.tint);
	        shaderTemp.uniforms.alpha = graphics.worldAlpha;

	        webGLData.vao.bind().draw(gl.TRIANGLE_STRIP, webGLData.indices.length).unbind();
	    }
	};

	GraphicsRenderer.prototype.updateGraphics = function (graphics) {
	    var gl = this.renderer.gl;

	    var webGL = graphics._webGL[this.CONTEXT_UID];

	    if (!webGL) {
	        webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl, clearDirty: -1, dirty: -1 };
	    }

	    webGL.dirty = graphics.dirty;

	    var i;

	    if (graphics.clearDirty !== webGL.clearDirty) {
	        webGL.clearDirty = graphics.clearDirty;

	        for (i = 0; i < webGL.data.length; i++) {
	            var graphicsData = webGL.data[i];
	            this.graphicsDataPool.push(graphicsData);
	        }

	        webGL.data = [];
	        webGL.lastIndex = 0;
	    }

	    var webGLData;

	    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++) {
	        var data = graphics.graphicsData[i];

	        webGLData = this.getWebGLData(webGL, 0);

	        if (data.type === CONST.SHAPES.POLY) {
	            buildPoly(data, webGLData);
	        }
	        if (data.type === CONST.SHAPES.RECT) {
	            buildRectangle(data, webGLData);
	        } else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP) {
	            buildCircle(data, webGLData);
	        } else if (data.type === CONST.SHAPES.RREC) {
	            buildRoundedRectangle(data, webGLData);
	        }

	        webGL.lastIndex++;
	    }

	    for (i = 0; i < webGL.data.length; i++) {
	        webGLData = webGL.data[i];

	        if (webGLData.dirty) {
	            webGLData.upload();
	        }
	    }
	};

	GraphicsRenderer.prototype.getWebGLData = function (webGL, type) {
	    var webGLData = webGL.data[webGL.data.length - 1];

	    if (!webGLData || webGLData.points.length > 320000) {
	        webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
	        webGLData.reset(type);
	        webGL.data.push(webGLData);
	    }

	    webGLData.dirty = true;

	    return webGLData;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var glCore = __webpack_require__(64);

	function WebGLGraphicsData(gl, shader, attribsState) {
	  this.gl = gl;

	  this.color = [0, 0, 0];
	  this.points = [];

	  this.indices = [];

	  this.buffer = glCore.GLBuffer.createVertexBuffer(gl);

	  this.indexBuffer = glCore.GLBuffer.createIndexBuffer(gl);

	  this.dirty = true;

	  this.glPoints = null;
	  this.glIndices = null;

	  this.shader = shader;

	  this.vao = new glCore.VertexArrayObject(gl, attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer, shader.attributes.aVertexPosition, gl.FLOAT, false, 4 * 6, 0).addAttribute(this.buffer, shader.attributes.aColor, gl.FLOAT, false, 4 * 6, 2 * 4);
	}

	WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;
	module.exports = WebGLGraphicsData;

	WebGLGraphicsData.prototype.reset = function () {
	  this.points.length = 0;
	  this.indices.length = 0;
	};

	WebGLGraphicsData.prototype.upload = function () {
	  this.glPoints = new Float32Array(this.points);
	  this.buffer.upload(this.glPoints);

	  this.glIndices = new Uint16Array(this.indices);
	  this.indexBuffer.upload(this.glIndices);

	  this.dirty = false;
	};

	WebGLGraphicsData.prototype.destroy = function () {
	  this.color = null;
	  this.points = null;
	  this.indices = null;

	  this.vao.destroy();
	  this.buffer.destroy();
	  this.indexBuffer.destroy();

	  this.gl = null;

	  this.buffer = null;
	  this.indexBuffer = null;

	  this.glPoints = null;
	  this.glIndices = null;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Shader = __webpack_require__(86);

	function PrimitiveShader(gl) {
	    Shader.call(this, gl, ['attribute vec2 aVertexPosition;', 'attribute vec4 aColor;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform float alpha;', 'uniform vec3 tint;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = aColor * vec4(tint * alpha, alpha);', '}'].join('\n'), ['varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n'));
	}

	PrimitiveShader.prototype = Object.create(Shader.prototype);
	PrimitiveShader.prototype.constructor = PrimitiveShader;

	module.exports = PrimitiveShader;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var buildLine = __webpack_require__(106),
	    utils = __webpack_require__(21),
	    earcut = __webpack_require__(107);

	var buildPoly = function buildPoly(graphicsData, webGLData) {
	    graphicsData.points = graphicsData.shape.points.slice();

	    var points = graphicsData.points;

	    if (graphicsData.fill && points.length >= 6) {
	        var holeArray = [];

	        var holes = graphicsData.holes;

	        for (var i = 0; i < holes.length; i++) {
	            var hole = holes[i];

	            holeArray.push(points.length / 2);

	            points = points.concat(hole.points);
	        }

	        var verts = webGLData.points;
	        var indices = webGLData.indices;

	        var length = points.length / 2;

	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;
	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;

	        var triangles = earcut(points, holeArray, 2);

	        if (!triangles) {
	            return;
	        }

	        var vertPos = verts.length / 6;

	        for (i = 0; i < triangles.length; i += 3) {
	            indices.push(triangles[i] + vertPos);
	            indices.push(triangles[i] + vertPos);
	            indices.push(triangles[i + 1] + vertPos);
	            indices.push(triangles[i + 2] + vertPos);
	            indices.push(triangles[i + 2] + vertPos);
	        }

	        for (i = 0; i < length; i++) {
	            verts.push(points[i * 2], points[i * 2 + 1], r, g, b, alpha);
	        }
	    }

	    if (graphicsData.lineWidth > 0) {
	        buildLine(graphicsData, webGLData);
	    }
	};

	module.exports = buildPoly;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var math = __webpack_require__(11),
	    utils = __webpack_require__(21);

	var buildLine = function buildLine(graphicsData, webGLData) {
	    var i = 0;
	    var points = graphicsData.points;

	    if (points.length === 0) {
	        return;
	    }

	    var firstPoint = new math.Point(points[0], points[1]);
	    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

	    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
	        points = points.slice();

	        points.pop();
	        points.pop();

	        lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

	        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
	        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;

	        points.unshift(midPointX, midPointY);
	        points.push(midPointX, midPointY);
	    }

	    var verts = webGLData.points;
	    var indices = webGLData.indices;
	    var length = points.length / 2;
	    var indexCount = points.length;
	    var indexStart = verts.length / 6;

	    var width = graphicsData.lineWidth / 2;

	    var color = utils.hex2rgb(graphicsData.lineColor);
	    var alpha = graphicsData.lineAlpha;
	    var r = color[0] * alpha;
	    var g = color[1] * alpha;
	    var b = color[2] * alpha;

	    var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
	    var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
	    var a1, b1, c1, a2, b2, c2;
	    var denom, pdist, dist;

	    p1x = points[0];
	    p1y = points[1];

	    p2x = points[2];
	    p2y = points[3];

	    perpx = -(p1y - p2y);
	    perpy = p1x - p2x;

	    dist = Math.sqrt(perpx * perpx + perpy * perpy);

	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;

	    verts.push(p1x - perpx, p1y - perpy, r, g, b, alpha);

	    verts.push(p1x + perpx, p1y + perpy, r, g, b, alpha);

	    for (i = 1; i < length - 1; i++) {
	        p1x = points[(i - 1) * 2];
	        p1y = points[(i - 1) * 2 + 1];

	        p2x = points[i * 2];
	        p2y = points[i * 2 + 1];

	        p3x = points[(i + 1) * 2];
	        p3y = points[(i + 1) * 2 + 1];

	        perpx = -(p1y - p2y);
	        perpy = p1x - p2x;

	        dist = Math.sqrt(perpx * perpx + perpy * perpy);
	        perpx /= dist;
	        perpy /= dist;
	        perpx *= width;
	        perpy *= width;

	        perp2x = -(p2y - p3y);
	        perp2y = p2x - p3x;

	        dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
	        perp2x /= dist;
	        perp2y /= dist;
	        perp2x *= width;
	        perp2y *= width;

	        a1 = -perpy + p1y - (-perpy + p2y);
	        b1 = -perpx + p2x - (-perpx + p1x);
	        c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
	        a2 = -perp2y + p3y - (-perp2y + p2y);
	        b2 = -perp2x + p2x - (-perp2x + p3x);
	        c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

	        denom = a1 * b2 - a2 * b1;

	        if (Math.abs(denom) < 0.1) {

	            denom += 10.1;
	            verts.push(p2x - perpx, p2y - perpy, r, g, b, alpha);

	            verts.push(p2x + perpx, p2y + perpy, r, g, b, alpha);

	            continue;
	        }

	        px = (b1 * c2 - b2 * c1) / denom;
	        py = (a2 * c1 - a1 * c2) / denom;

	        pdist = (px - p2x) * (px - p2x) + (py - p2y) * (py - p2y);

	        if (pdist > 140 * 140) {
	            perp3x = perpx - perp2x;
	            perp3y = perpy - perp2y;

	            dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
	            perp3x /= dist;
	            perp3y /= dist;
	            perp3x *= width;
	            perp3y *= width;

	            verts.push(p2x - perp3x, p2y - perp3y);
	            verts.push(r, g, b, alpha);

	            verts.push(p2x + perp3x, p2y + perp3y);
	            verts.push(r, g, b, alpha);

	            verts.push(p2x - perp3x, p2y - perp3y);
	            verts.push(r, g, b, alpha);

	            indexCount++;
	        } else {

	            verts.push(px, py);
	            verts.push(r, g, b, alpha);

	            verts.push(p2x - (px - p2x), p2y - (py - p2y));
	            verts.push(r, g, b, alpha);
	        }
	    }

	    p1x = points[(length - 2) * 2];
	    p1y = points[(length - 2) * 2 + 1];

	    p2x = points[(length - 1) * 2];
	    p2y = points[(length - 1) * 2 + 1];

	    perpx = -(p1y - p2y);
	    perpy = p1x - p2x;

	    dist = Math.sqrt(perpx * perpx + perpy * perpy);
	    perpx /= dist;
	    perpy /= dist;
	    perpx *= width;
	    perpy *= width;

	    verts.push(p2x - perpx, p2y - perpy);
	    verts.push(r, g, b, alpha);

	    verts.push(p2x + perpx, p2y + perpy);
	    verts.push(r, g, b, alpha);

	    indices.push(indexStart);

	    for (i = 0; i < indexCount; i++) {
	        indices.push(indexStart++);
	    }

	    indices.push(indexStart - 1);
	};

	module.exports = buildLine;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	module.exports = earcut;

	function earcut(data, holeIndices, dim) {

	    dim = dim || 2;

	    var hasHoles = holeIndices && holeIndices.length,
	        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
	        outerNode = linkedList(data, 0, outerLen, dim, true),
	        triangles = [];

	    if (!outerNode) return triangles;

	    var minX, minY, maxX, maxY, x, y, size;

	    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

	    if (data.length > 80 * dim) {
	        minX = maxX = data[0];
	        minY = maxY = data[1];

	        for (var i = dim; i < outerLen; i += dim) {
	            x = data[i];
	            y = data[i + 1];
	            if (x < minX) minX = x;
	            if (y < minY) minY = y;
	            if (x > maxX) maxX = x;
	            if (y > maxY) maxY = y;
	        }

	        size = Math.max(maxX - minX, maxY - minY);
	    }

	    earcutLinked(outerNode, triangles, dim, minX, minY, size);

	    return triangles;
	}

	function linkedList(data, start, end, dim, clockwise) {
	    var i, last;

	    if (clockwise === signedArea(data, start, end, dim) > 0) {
	        for (i = start; i < end; i += dim) {
	            last = insertNode(i, data[i], data[i + 1], last);
	        }
	    } else {
	        for (i = end - dim; i >= start; i -= dim) {
	            last = insertNode(i, data[i], data[i + 1], last);
	        }
	    }

	    if (last && equals(last, last.next)) {
	        removeNode(last);
	        last = last.next;
	    }

	    return last;
	}

	function filterPoints(start, end) {
	    if (!start) return start;
	    if (!end) end = start;

	    var p = start,
	        again;
	    do {
	        again = false;

	        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
	            removeNode(p);
	            p = end = p.prev;
	            if (p === p.next) return null;
	            again = true;
	        } else {
	            p = p.next;
	        }
	    } while (again || p !== end);

	    return end;
	}

	function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
	    if (!ear) return;

	    if (!pass && size) indexCurve(ear, minX, minY, size);

	    var stop = ear,
	        prev,
	        next;

	    while (ear.prev !== ear.next) {
	        prev = ear.prev;
	        next = ear.next;

	        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
	            triangles.push(prev.i / dim);
	            triangles.push(ear.i / dim);
	            triangles.push(next.i / dim);

	            removeNode(ear);

	            ear = next.next;
	            stop = next.next;

	            continue;
	        }

	        ear = next;

	        if (ear === stop) {
	            if (!pass) {
	                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
	            } else if (pass === 1) {
	                ear = cureLocalIntersections(ear, triangles, dim);
	                earcutLinked(ear, triangles, dim, minX, minY, size, 2);
	            } else if (pass === 2) {
	                splitEarcut(ear, triangles, dim, minX, minY, size);
	            }

	            break;
	        }
	    }
	}

	function isEar(ear) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;

	    if (area(a, b, c) >= 0) return false;
	    var p = ear.next.next;

	    while (p !== ear.prev) {
	        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
	        p = p.next;
	    }

	    return true;
	}

	function isEarHashed(ear, minX, minY, size) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;

	    if (area(a, b, c) >= 0) return false;
	    var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
	        minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
	        maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
	        maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;

	    var minZ = zOrder(minTX, minTY, minX, minY, size),
	        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

	    var p = ear.nextZ;

	    while (p && p.z <= maxZ) {
	        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
	        p = p.nextZ;
	    }

	    p = ear.prevZ;

	    while (p && p.z >= minZ) {
	        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;
	    }

	    return true;
	}

	function cureLocalIntersections(start, triangles, dim) {
	    var p = start;
	    do {
	        var a = p.prev,
	            b = p.next.next;

	        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

	            triangles.push(a.i / dim);
	            triangles.push(p.i / dim);
	            triangles.push(b.i / dim);

	            removeNode(p);
	            removeNode(p.next);

	            p = start = b;
	        }
	        p = p.next;
	    } while (p !== start);

	    return p;
	}

	function splitEarcut(start, triangles, dim, minX, minY, size) {
	    var a = start;
	    do {
	        var b = a.next.next;
	        while (b !== a.prev) {
	            if (a.i !== b.i && isValidDiagonal(a, b)) {
	                var c = splitPolygon(a, b);

	                a = filterPoints(a, a.next);
	                c = filterPoints(c, c.next);

	                earcutLinked(a, triangles, dim, minX, minY, size);
	                earcutLinked(c, triangles, dim, minX, minY, size);
	                return;
	            }
	            b = b.next;
	        }
	        a = a.next;
	    } while (a !== start);
	}

	function eliminateHoles(data, holeIndices, outerNode, dim) {
	    var queue = [],
	        i,
	        len,
	        start,
	        end,
	        list;

	    for (i = 0, len = holeIndices.length; i < len; i++) {
	        start = holeIndices[i] * dim;
	        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	        list = linkedList(data, start, end, dim, false);
	        if (list === list.next) list.steiner = true;
	        queue.push(getLeftmost(list));
	    }

	    queue.sort(compareX);

	    for (i = 0; i < queue.length; i++) {
	        eliminateHole(queue[i], outerNode);
	        outerNode = filterPoints(outerNode, outerNode.next);
	    }

	    return outerNode;
	}

	function compareX(a, b) {
	    return a.x - b.x;
	}

	function eliminateHole(hole, outerNode) {
	    outerNode = findHoleBridge(hole, outerNode);
	    if (outerNode) {
	        var b = splitPolygon(outerNode, hole);
	        filterPoints(b, b.next);
	    }
	}

	function findHoleBridge(hole, outerNode) {
	    var p = outerNode,
	        hx = hole.x,
	        hy = hole.y,
	        qx = -Infinity,
	        m;

	    do {
	        if (hy <= p.y && hy >= p.next.y) {
	            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
	            if (x <= hx && x > qx) {
	                qx = x;
	                if (x === hx) {
	                    if (hy === p.y) return p;
	                    if (hy === p.next.y) return p.next;
	                }
	                m = p.x < p.next.x ? p : p.next;
	            }
	        }
	        p = p.next;
	    } while (p !== outerNode);

	    if (!m) return null;

	    if (hx === qx) return m.prev;

	    var stop = m,
	        mx = m.x,
	        my = m.y,
	        tanMin = Infinity,
	        tan;

	    p = m.next;

	    while (p !== stop) {
	        if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

	            tan = Math.abs(hy - p.y) / (hx - p.x);

	            if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
	                m = p;
	                tanMin = tan;
	            }
	        }

	        p = p.next;
	    }

	    return m;
	}

	function indexCurve(start, minX, minY, size) {
	    var p = start;
	    do {
	        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
	        p.prevZ = p.prev;
	        p.nextZ = p.next;
	        p = p.next;
	    } while (p !== start);

	    p.prevZ.nextZ = null;
	    p.prevZ = null;

	    sortLinked(p);
	}

	function sortLinked(list) {
	    var i,
	        p,
	        q,
	        e,
	        tail,
	        numMerges,
	        pSize,
	        qSize,
	        inSize = 1;

	    do {
	        p = list;
	        list = null;
	        tail = null;
	        numMerges = 0;

	        while (p) {
	            numMerges++;
	            q = p;
	            pSize = 0;
	            for (i = 0; i < inSize; i++) {
	                pSize++;
	                q = q.nextZ;
	                if (!q) break;
	            }

	            qSize = inSize;

	            while (pSize > 0 || qSize > 0 && q) {

	                if (pSize === 0) {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                } else if (qSize === 0 || !q) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else if (p.z <= q.z) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                }

	                if (tail) tail.nextZ = e;else list = e;

	                e.prevZ = tail;
	                tail = e;
	            }

	            p = q;
	        }

	        tail.nextZ = null;
	        inSize *= 2;
	    } while (numMerges > 1);

	    return list;
	}

	function zOrder(x, y, minX, minY, size) {
	    x = 32767 * (x - minX) / size;
	    y = 32767 * (y - minY) / size;

	    x = (x | x << 8) & 0x00FF00FF;
	    x = (x | x << 4) & 0x0F0F0F0F;
	    x = (x | x << 2) & 0x33333333;
	    x = (x | x << 1) & 0x55555555;

	    y = (y | y << 8) & 0x00FF00FF;
	    y = (y | y << 4) & 0x0F0F0F0F;
	    y = (y | y << 2) & 0x33333333;
	    y = (y | y << 1) & 0x55555555;

	    return x | y << 1;
	}

	function getLeftmost(start) {
	    var p = start,
	        leftmost = start;
	    do {
	        if (p.x < leftmost.x) leftmost = p;
	        p = p.next;
	    } while (p !== start);

	    return leftmost;
	}

	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
	    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
	}

	function isValidDiagonal(a, b) {
	    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
	}

	function area(p, q, r) {
	    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}

	function equals(p1, p2) {
	    return p1.x === p2.x && p1.y === p2.y;
	}

	function intersects(p1, q1, p2, q2) {
	    if (equals(p1, q1) && equals(p2, q2) || equals(p1, q2) && equals(p2, q1)) return true;
	    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
	}

	function intersectsPolygon(a, b) {
	    var p = a;
	    do {
	        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
	        p = p.next;
	    } while (p !== a);

	    return false;
	}

	function locallyInside(a, b) {
	    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}

	function middleInside(a, b) {
	    var p = a,
	        inside = false,
	        px = (a.x + b.x) / 2,
	        py = (a.y + b.y) / 2;
	    do {
	        if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
	        p = p.next;
	    } while (p !== a);

	    return inside;
	}

	function splitPolygon(a, b) {
	    var a2 = new Node(a.i, a.x, a.y),
	        b2 = new Node(b.i, b.x, b.y),
	        an = a.next,
	        bp = b.prev;

	    a.next = b;
	    b.prev = a;

	    a2.next = an;
	    an.prev = a2;

	    b2.next = a2;
	    a2.prev = b2;

	    bp.next = b2;
	    b2.prev = bp;

	    return b2;
	}

	function insertNode(i, x, y, last) {
	    var p = new Node(i, x, y);

	    if (!last) {
	        p.prev = p;
	        p.next = p;
	    } else {
	        p.next = last.next;
	        p.prev = last;
	        last.next.prev = p;
	        last.next = p;
	    }
	    return p;
	}

	function removeNode(p) {
	    p.next.prev = p.prev;
	    p.prev.next = p.next;

	    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
	    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
	}

	function Node(i, x, y) {
	    this.i = i;

	    this.x = x;
	    this.y = y;

	    this.prev = null;
	    this.next = null;

	    this.z = null;

	    this.prevZ = null;
	    this.nextZ = null;

	    this.steiner = false;
	}

	earcut.deviation = function (data, holeIndices, dim, triangles) {
	    var hasHoles = holeIndices && holeIndices.length;
	    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

	    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
	    if (hasHoles) {
	        for (var i = 0, len = holeIndices.length; i < len; i++) {
	            var start = holeIndices[i] * dim;
	            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	            polygonArea -= Math.abs(signedArea(data, start, end, dim));
	        }
	    }

	    var trianglesArea = 0;
	    for (i = 0; i < triangles.length; i += 3) {
	        var a = triangles[i] * dim;
	        var b = triangles[i + 1] * dim;
	        var c = triangles[i + 2] * dim;
	        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
	    }

	    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
	};

	function signedArea(data, start, end, dim) {
	    var sum = 0;
	    for (var i = start, j = end - dim; i < end; i += dim) {
	        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
	        j = i;
	    }
	    return sum;
	}

	earcut.flatten = function (data) {
	    var dim = data[0][0].length,
	        result = { vertices: [], holes: [], dimensions: dim },
	        holeIndex = 0;

	    for (var i = 0; i < data.length; i++) {
	        for (var j = 0; j < data[i].length; j++) {
	            for (var d = 0; d < dim; d++) {
	                result.vertices.push(data[i][j][d]);
	            }
	        }
	        if (i > 0) {
	            holeIndex += data[i - 1].length;
	            result.holes.push(holeIndex);
	        }
	    }
	    return result;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var buildLine = __webpack_require__(106),
	    utils = __webpack_require__(21);

	var buildRectangle = function buildRectangle(graphicsData, webGLData) {
	    var rectData = graphicsData.shape;
	    var x = rectData.x;
	    var y = rectData.y;
	    var width = rectData.width;
	    var height = rectData.height;

	    if (graphicsData.fill) {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;

	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;

	        var verts = webGLData.points;
	        var indices = webGLData.indices;

	        var vertPos = verts.length / 6;

	        verts.push(x, y);
	        verts.push(r, g, b, alpha);

	        verts.push(x + width, y);
	        verts.push(r, g, b, alpha);

	        verts.push(x, y + height);
	        verts.push(r, g, b, alpha);

	        verts.push(x + width, y + height);
	        verts.push(r, g, b, alpha);

	        indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
	    }

	    if (graphicsData.lineWidth) {
	        var tempPoints = graphicsData.points;

	        graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];

	        buildLine(graphicsData, webGLData);

	        graphicsData.points = tempPoints;
	    }
	};

	module.exports = buildRectangle;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var earcut = __webpack_require__(107),
	    buildLine = __webpack_require__(106),
	    utils = __webpack_require__(21);

	var buildRoundedRectangle = function buildRoundedRectangle(graphicsData, webGLData) {
	    var rrectData = graphicsData.shape;
	    var x = rrectData.x;
	    var y = rrectData.y;
	    var width = rrectData.width;
	    var height = rrectData.height;

	    var radius = rrectData.radius;

	    var recPoints = [];
	    recPoints.push(x, y + radius);
	    quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
	    quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
	    quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
	    quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);

	    if (graphicsData.fill) {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;

	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;

	        var verts = webGLData.points;
	        var indices = webGLData.indices;

	        var vecPos = verts.length / 6;

	        var triangles = earcut(recPoints, null, 2);

	        var i = 0;
	        for (i = 0; i < triangles.length; i += 3) {
	            indices.push(triangles[i] + vecPos);
	            indices.push(triangles[i] + vecPos);
	            indices.push(triangles[i + 1] + vecPos);
	            indices.push(triangles[i + 2] + vecPos);
	            indices.push(triangles[i + 2] + vecPos);
	        }

	        for (i = 0; i < recPoints.length; i++) {
	            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
	        }
	    }

	    if (graphicsData.lineWidth) {
	        var tempPoints = graphicsData.points;

	        graphicsData.points = recPoints;

	        buildLine(graphicsData, webGLData);

	        graphicsData.points = tempPoints;
	    }
	};

	var quadraticBezierCurve = function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out) {
	    var xa,
	        ya,
	        xb,
	        yb,
	        x,
	        y,
	        n = 20,
	        points = out || [];

	    function getPt(n1, n2, perc) {
	        var diff = n2 - n1;

	        return n1 + diff * perc;
	    }

	    var j = 0;
	    for (var i = 0; i <= n; i++) {
	        j = i / n;

	        xa = getPt(fromX, cpX, j);
	        ya = getPt(fromY, cpY, j);
	        xb = getPt(cpX, toX, j);
	        yb = getPt(cpY, toY, j);

	        x = getPt(xa, xb, j);
	        y = getPt(ya, yb, j);

	        points.push(x, y);
	    }

	    return points;
	};

	module.exports = buildRoundedRectangle;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var buildLine = __webpack_require__(106),
	    CONST = __webpack_require__(8),
	    utils = __webpack_require__(21);

	var buildCircle = function buildCircle(graphicsData, webGLData) {
	    var circleData = graphicsData.shape;
	    var x = circleData.x;
	    var y = circleData.y;
	    var width;
	    var height;

	    if (graphicsData.type === CONST.SHAPES.CIRC) {
	        width = circleData.radius;
	        height = circleData.radius;
	    } else {
	        width = circleData.width;
	        height = circleData.height;
	    }

	    var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
	    var seg = Math.PI * 2 / totalSegs;

	    var i = 0;

	    if (graphicsData.fill) {
	        var color = utils.hex2rgb(graphicsData.fillColor);
	        var alpha = graphicsData.fillAlpha;

	        var r = color[0] * alpha;
	        var g = color[1] * alpha;
	        var b = color[2] * alpha;

	        var verts = webGLData.points;
	        var indices = webGLData.indices;

	        var vecPos = verts.length / 6;

	        indices.push(vecPos);

	        for (i = 0; i < totalSegs + 1; i++) {
	            verts.push(x, y, r, g, b, alpha);

	            verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);

	            indices.push(vecPos++, vecPos++);
	        }

	        indices.push(vecPos - 1);
	    }

	    if (graphicsData.lineWidth) {
	        var tempPoints = graphicsData.points;

	        graphicsData.points = [];

	        for (i = 0; i < totalSegs + 1; i++) {
	            graphicsData.points.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height);
	        }

	        buildLine(graphicsData, webGLData);

	        graphicsData.points = tempPoints;
	    }
	};

	module.exports = buildCircle;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CanvasRenderer = __webpack_require__(47),
	    CONST = __webpack_require__(8);

	function CanvasGraphicsRenderer(renderer) {
	    this.renderer = renderer;
	}

	CanvasGraphicsRenderer.prototype.constructor = CanvasGraphicsRenderer;
	module.exports = CanvasGraphicsRenderer;

	CanvasRenderer.registerPlugin('graphics', CanvasGraphicsRenderer);

	CanvasGraphicsRenderer.prototype.render = function (graphics) {
	    var renderer = this.renderer;
	    var context = renderer.context;
	    var worldAlpha = graphics.worldAlpha;
	    var transform = graphics.transform.worldTransform;
	    var resolution = renderer.resolution;

	    if (this._prevTint !== this.tint) {
	        this.dirty = true;
	    }

	    context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

	    if (graphics.dirty) {
	        this.updateGraphicsTint(graphics);
	        graphics.dirty = false;
	    }

	    renderer.setBlendMode(graphics.blendMode);

	    for (var i = 0; i < graphics.graphicsData.length; i++) {
	        var data = graphics.graphicsData[i];
	        var shape = data.shape;

	        var fillColor = data._fillTint;
	        var lineColor = data._lineTint;

	        context.lineWidth = data.lineWidth;

	        if (data.type === CONST.SHAPES.POLY) {
	            context.beginPath();

	            this.renderPolygon(shape.points, shape.closed, context);

	            for (var j = 0; j < data.holes.length; j++) {
	                var hole = data.holes[j];
	                this.renderPolygon(hole.points, true, context);
	            }

	            if (data.fill) {
	                context.globalAlpha = data.fillAlpha * worldAlpha;
	                context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                context.fill();
	            }
	            if (data.lineWidth) {
	                context.globalAlpha = data.lineAlpha * worldAlpha;
	                context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                context.stroke();
	            }
	        } else if (data.type === CONST.SHAPES.RECT) {

	            if (data.fillColor || data.fillColor === 0) {
	                context.globalAlpha = data.fillAlpha * worldAlpha;
	                context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                context.fillRect(shape.x, shape.y, shape.width, shape.height);
	            }
	            if (data.lineWidth) {
	                context.globalAlpha = data.lineAlpha * worldAlpha;
	                context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                context.strokeRect(shape.x, shape.y, shape.width, shape.height);
	            }
	        } else if (data.type === CONST.SHAPES.CIRC) {
	            context.beginPath();
	            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	            context.closePath();

	            if (data.fill) {
	                context.globalAlpha = data.fillAlpha * worldAlpha;
	                context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                context.fill();
	            }
	            if (data.lineWidth) {
	                context.globalAlpha = data.lineAlpha * worldAlpha;
	                context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                context.stroke();
	            }
	        } else if (data.type === CONST.SHAPES.ELIP) {

	            var w = shape.width * 2;
	            var h = shape.height * 2;

	            var x = shape.x - w / 2;
	            var y = shape.y - h / 2;

	            context.beginPath();

	            var kappa = 0.5522848,
	                ox = w / 2 * kappa,
	                oy = h / 2 * kappa,
	                xe = x + w,
	                ye = y + h,
	                xm = x + w / 2,
	                ym = y + h / 2;

	            context.moveTo(x, ym);
	            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

	            context.closePath();

	            if (data.fill) {
	                context.globalAlpha = data.fillAlpha * worldAlpha;
	                context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                context.fill();
	            }
	            if (data.lineWidth) {
	                context.globalAlpha = data.lineAlpha * worldAlpha;
	                context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                context.stroke();
	            }
	        } else if (data.type === CONST.SHAPES.RREC) {
	            var rx = shape.x;
	            var ry = shape.y;
	            var width = shape.width;
	            var height = shape.height;
	            var radius = shape.radius;

	            var maxRadius = Math.min(width, height) / 2 | 0;
	            radius = radius > maxRadius ? maxRadius : radius;

	            context.beginPath();
	            context.moveTo(rx, ry + radius);
	            context.lineTo(rx, ry + height - radius);
	            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
	            context.lineTo(rx + width - radius, ry + height);
	            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
	            context.lineTo(rx + width, ry + radius);
	            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
	            context.lineTo(rx + radius, ry);
	            context.quadraticCurveTo(rx, ry, rx, ry + radius);
	            context.closePath();

	            if (data.fillColor || data.fillColor === 0) {
	                context.globalAlpha = data.fillAlpha * worldAlpha;
	                context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
	                context.fill();
	            }
	            if (data.lineWidth) {
	                context.globalAlpha = data.lineAlpha * worldAlpha;
	                context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
	                context.stroke();
	            }
	        }
	    }
	};

	CanvasGraphicsRenderer.prototype.updateGraphicsTint = function (graphics) {
	    graphics._prevTint = graphics.tint;

	    var tintR = (graphics.tint >> 16 & 0xFF) / 255;
	    var tintG = (graphics.tint >> 8 & 0xFF) / 255;
	    var tintB = (graphics.tint & 0xFF) / 255;

	    for (var i = 0; i < graphics.graphicsData.length; i++) {
	        var data = graphics.graphicsData[i];

	        var fillColor = data.fillColor | 0;
	        var lineColor = data.lineColor | 0;

	        data._fillTint = ((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255;
	        data._lineTint = ((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255;
	    }
	};

	CanvasGraphicsRenderer.prototype.renderPolygon = function (points, close, context) {
	    context.moveTo(points[0], points[1]);

	    for (var j = 1; j < points.length / 2; j++) {
	        context.lineTo(points[j * 2], points[j * 2 + 1]);
	    }

	    if (close) {
	        context.closePath();
	    }
	};

	CanvasGraphicsRenderer.prototype.destroy = function () {
	    this.renderer = null;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI extras library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);

	module.exports = {
	  MovieClip: __webpack_require__(116),
	  TilingSprite: __webpack_require__(117),
	  BitmapText: __webpack_require__(119)
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    DisplayObject = core.DisplayObject,
	    _tempMatrix = new core.Matrix();

	DisplayObject.prototype._cacheAsBitmap = false;
	DisplayObject.prototype._cacheData = false;

	var CacheData = function CacheData() {

	    this.originalRenderWebGL = null;
	    this.originalRenderCanvas = null;
	    this.originalCalculateBounds = null;
	    this.originalGetLocalBounds = null;

	    this.originalUpdateTransform = null;
	    this.originalHitTest = null;
	    this.originalDestroy = null;
	    this.originalMask = null;
	    this.originalFilterArea = null;
	    this.sprite = null;
	};

	Object.defineProperties(DisplayObject.prototype, {
	    cacheAsBitmap: {
	        get: function get() {
	            return this._cacheAsBitmap;
	        },
	        set: function set(value) {
	            if (this._cacheAsBitmap === value) {
	                return;
	            }

	            this._cacheAsBitmap = value;

	            var data;

	            if (value) {

	                if (!this._cacheData) {
	                    this._cacheData = new CacheData();
	                }

	                data = this._cacheData;

	                data.originalRenderWebGL = this.renderWebGL;
	                data.originalRenderCanvas = this.renderCanvas;

	                data.originalUpdateTransform = this.updateTransform;
	                data.originalCalculateBounds = this._calculateBounds;
	                data.originalGetLocalBounds = this.getLocalBounds;

	                data.originalDestroy = this.destroy;

	                data.originalContainsPoint = this.containsPoint;

	                data.originalMask = this._mask;
	                data.originalFilterArea = this.filterArea;

	                this.renderWebGL = this._renderCachedWebGL;
	                this.renderCanvas = this._renderCachedCanvas;

	                this.destroy = this._cacheAsBitmapDestroy;
	            } else {
	                data = this._cacheData;

	                if (data.sprite) {
	                    this._destroyCachedDisplayObject();
	                }

	                this.renderWebGL = data.originalRenderWebGL;
	                this.renderCanvas = data.originalRenderCanvas;
	                this._calculateBounds = data.originalCalculateBounds;
	                this.getLocalBounds = data.originalGetLocalBounds;

	                this.destroy = data.originalDestroy;

	                this.updateTransform = data.originalUpdateTransform;
	                this.containsPoint = data.originalContainsPoint;

	                this._mask = data.originalMask;
	                this.filterArea = data.originalFilterArea;
	            }
	        }
	    }
	});

	DisplayObject.prototype._renderCachedWebGL = function (renderer) {
	    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	        return;
	    }

	    this._initCachedDisplayObject(renderer);

	    this._cacheData.sprite._transformID = -1;
	    this._cacheData.sprite.worldAlpha = this.worldAlpha;
	    this._cacheData.sprite._renderWebGL(renderer);
	};

	DisplayObject.prototype._initCachedDisplayObject = function (renderer) {
	    if (this._cacheData && this._cacheData.sprite) {
	        return;
	    }

	    var cacheAlpha = this.alpha;
	    this.alpha = 1;

	    renderer.currentRenderer.flush();

	    var bounds = this.getLocalBounds().clone();

	    if (this._filters) {
	        var padding = this._filters[0].padding;

	        bounds.pad(padding);
	    }

	    var cachedRenderTarget = renderer._activeRenderTarget;

	    var stack = renderer.filterManager.filterStack;

	    var renderTexture = core.RenderTexture.create(bounds.width | 0, bounds.height | 0);

	    var m = _tempMatrix;
	    m.tx = -bounds.x;
	    m.ty = -bounds.y;

	    this.transform.worldTransform.identity();

	    this.renderWebGL = this._cacheData.originalRenderWebGL;

	    renderer.render(this, renderTexture, true, m, true);


	    renderer.bindRenderTarget(cachedRenderTarget);

	    renderer.filterManager.filterStack = stack;

	    this.renderWebGL = this._renderCachedWebGL;
	    this.updateTransform = this.displayObjectUpdateTransform;

	    this._mask = null;
	    this.filterArea = null;

	    var cachedSprite = new core.Sprite(renderTexture);
	    cachedSprite.transform.worldTransform = this.transform.worldTransform;
	    cachedSprite.anchor.x = -(bounds.x / bounds.width);
	    cachedSprite.anchor.y = -(bounds.y / bounds.height);
	    cachedSprite.alpha = cacheAlpha;
	    cachedSprite._bounds = this._bounds;

	    this._calculateBounds = this._calculateCachedBounds;
	    this.getLocalBounds = this._getCachedLocalBounds;

	    this._cacheData.sprite = cachedSprite;

	    this.transform._parentID = -1;

	    this.updateTransform();

	    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
	};

	DisplayObject.prototype._renderCachedCanvas = function (renderer) {
	    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
	        return;
	    }

	    this._initCachedDisplayObjectCanvas(renderer);

	    this._cacheData.sprite.worldAlpha = this.worldAlpha;

	    this._cacheData.sprite.renderCanvas(renderer);
	};

	DisplayObject.prototype._initCachedDisplayObjectCanvas = function (renderer) {
	    if (this._cacheData && this._cacheData.sprite) {
	        return;
	    }

	    var bounds = this.getLocalBounds();

	    var cacheAlpha = this.alpha;
	    this.alpha = 1;

	    var cachedRenderTarget = renderer.context;

	    var renderTexture = new core.RenderTexture.create(bounds.width | 0, bounds.height | 0);

	    var m = _tempMatrix;
	    this.transform.worldTransform.copy(m);
	    m.invert();

	    m.tx -= bounds.x;
	    m.ty -= bounds.y;

	    this.renderCanvas = this._cacheData.originalRenderCanvas;

	    renderer.render(this, renderTexture, true, m, false);

	    renderer.context = cachedRenderTarget;

	    this.renderCanvas = this._renderCachedCanvas;
	    this._calculateBounds = this._calculateCachedBounds;

	    this._mask = null;
	    this.filterArea = null;

	    var cachedSprite = new core.Sprite(renderTexture);
	    cachedSprite.transform.worldTransform = this.transform.worldTransform;
	    cachedSprite.anchor.x = -(bounds.x / bounds.width);
	    cachedSprite.anchor.y = -(bounds.y / bounds.height);
	    cachedSprite._bounds = this._bounds;
	    cachedSprite.alpha = cacheAlpha;

	    this.updateTransform();
	    this.updateTransform = this.displayObjectUpdateTransform;

	    this._cacheData.sprite = cachedSprite;

	    this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
	};

	DisplayObject.prototype._calculateCachedBounds = function () {
	    return this._cacheData.sprite._calculateBounds();
	};

	DisplayObject.prototype._getCachedLocalBounds = function () {
	    return this._cacheData.sprite.getLocalBounds();
	};

	DisplayObject.prototype._destroyCachedDisplayObject = function () {
	    this._cacheData.sprite._texture.destroy(true);
	    this._cacheData.sprite = null;
	};

	DisplayObject.prototype._cacheAsBitmapDestroy = function () {
	    this.cacheAsBitmap = false;
	    this.destroy();
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	core.DisplayObject.prototype.name = null;

	core.Container.prototype.getChildByName = function (name) {
	    for (var i = 0; i < this.children.length; i++) {
	        if (this.children[i].name === name) {
	            return this.children[i];
	        }
	    }
	    return null;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	core.DisplayObject.prototype.getGlobalPosition = function (point) {
	    point = point || new core.Point();

	    if (this.parent) {
	        this.displayObjectUpdateTransform();

	        point.x = this.worldTransform.tx;
	        point.y = this.worldTransform.ty;
	    } else {
	        point.x = this.position.x;
	        point.y = this.position.y;
	    }

	    return point;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	function MovieClip(textures) {
	    core.Sprite.call(this, textures[0] instanceof core.Texture ? textures[0] : textures[0].texture);

	    this._textures = null;

	    this._durations = null;

	    this.textures = textures;

	    this.animationSpeed = 1;

	    this.loop = true;

	    this.onComplete = null;

	    this._currentTime = 0;

	    this.playing = false;
	}

	MovieClip.prototype = Object.create(core.Sprite.prototype);
	MovieClip.prototype.constructor = MovieClip;
	module.exports = MovieClip;

	Object.defineProperties(MovieClip.prototype, {
	    totalFrames: {
	        get: function get() {
	            return this._textures.length;
	        }
	    },

	    textures: {
	        get: function get() {
	            return this._textures;
	        },
	        set: function set(value) {
	            if (value[0] instanceof core.Texture) {
	                this._textures = value;
	                this._durations = null;
	            } else {
	                this._textures = [];
	                this._durations = [];
	                for (var i = 0; i < value.length; i++) {
	                    this._textures.push(value[i].texture);
	                    this._durations.push(value[i].time);
	                }
	            }
	        }
	    },

	    currentFrame: {
	        get: function get() {
	            var currentFrame = Math.floor(this._currentTime) % this._textures.length;
	            if (currentFrame < 0) {
	                currentFrame += this._textures.length;
	            }
	            return currentFrame;
	        }
	    }

	});

	MovieClip.prototype.stop = function () {
	    if (!this.playing) {
	        return;
	    }

	    this.playing = false;
	    core.ticker.shared.remove(this.update, this);
	};

	MovieClip.prototype.play = function () {
	    if (this.playing) {
	        return;
	    }

	    this.playing = true;
	    core.ticker.shared.add(this.update, this);
	};

	MovieClip.prototype.gotoAndStop = function (frameNumber) {
	    this.stop();

	    this._currentTime = frameNumber;

	    this._texture = this._textures[this.currentFrame];
	    this._textureID = -1;
	};

	MovieClip.prototype.gotoAndPlay = function (frameNumber) {
	    this._currentTime = frameNumber;

	    this.play();
	};

	MovieClip.prototype.update = function (deltaTime) {
	    var elapsed = this.animationSpeed * deltaTime;

	    if (this._durations !== null) {
	        var lag = this._currentTime % 1 * this._durations[this.currentFrame];

	        lag += elapsed / 60 * 1000;

	        while (lag < 0) {
	            this._currentTime--;
	            lag += this._durations[this.currentFrame];
	        }

	        var sign = Math.sign(this.animationSpeed * deltaTime);
	        this._currentTime = Math.floor(this._currentTime);

	        while (lag >= this._durations[this.currentFrame]) {
	            lag -= this._durations[this.currentFrame] * sign;
	            this._currentTime += sign;
	        }

	        this._currentTime += lag / this._durations[this.currentFrame];
	    } else {
	        this._currentTime += elapsed;
	    }

	    if (this._currentTime < 0 && !this.loop) {
	        this.gotoAndStop(0);

	        if (this.onComplete) {
	            this.onComplete();
	        }
	    } else if (this._currentTime >= this._textures.length && !this.loop) {
	        this.gotoAndStop(this._textures.length - 1);

	        if (this.onComplete) {
	            this.onComplete();
	        }
	    } else {
	        this._texture = this._textures[this.currentFrame];
	        this._textureID = -1;
	    }
	};

	MovieClip.prototype.destroy = function () {
	    this.stop();
	    core.Sprite.prototype.destroy.call(this);
	};

	MovieClip.fromFrames = function (frames) {
	    var textures = [];

	    for (var i = 0; i < frames.length; ++i) {
	        textures.push(core.Texture.fromFrame(frames[i]));
	    }

	    return new MovieClip(textures);
	};

	MovieClip.fromImages = function (images) {
	    var textures = [];

	    for (var i = 0; i < images.length; ++i) {
	        textures.push(core.Texture.fromImage(images[i]));
	    }

	    return new MovieClip(textures);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    tempPoint = new core.Point(),
	    Texture = __webpack_require__(33),
	    CanvasTinter = __webpack_require__(55),
	    TilingShader = __webpack_require__(118),
	    tempArray = new Float32Array(4);

	function TilingSprite(texture, width, height) {
	    core.Sprite.call(this, texture);

	    this.tileScale = new core.Point(1, 1);

	    this.tilePosition = new core.Point(0, 0);

	    this._width = width || 100;

	    this._height = height || 100;

	    this._uvs = new core.TextureUvs();

	    this._canvasPattern = null;

	    this._glDatas = [];
	}

	TilingSprite.prototype = Object.create(core.Sprite.prototype);
	TilingSprite.prototype.constructor = TilingSprite;
	module.exports = TilingSprite;

	Object.defineProperties(TilingSprite.prototype, {
	    width: {
	        get: function get() {
	            return this._width;
	        },
	        set: function set(value) {
	            this._width = value;
	        }
	    },

	    height: {
	        get: function get() {
	            return this._height;
	        },
	        set: function set(value) {
	            this._height = value;
	        }
	    }
	});

	TilingSprite.prototype._onTextureUpdate = function () {
	    return;
	};

	TilingSprite.prototype._renderWebGL = function (renderer) {
	    var texture = this._texture;

	    if (!texture || !texture._uvs) {
	        return;
	    }

	    renderer.flush();

	    var gl = renderer.gl;
	    var glData = this._glDatas[renderer.CONTEXT_UID];

	    if (!glData) {
	        glData = {
	            shader: new TilingShader(gl),
	            quad: new core.Quad(gl)
	        };

	        this._glDatas[renderer.CONTEXT_UID] = glData;

	        glData.quad.initVao(glData.shader);
	    }

	    var vertices = glData.quad.vertices;

	    vertices[0] = vertices[6] = this._width * -this.anchor.x;
	    vertices[1] = vertices[3] = this._height * -this.anchor.y;

	    vertices[2] = vertices[4] = this._width * (1 - this.anchor.x);
	    vertices[5] = vertices[7] = this._height * (1 - this.anchor.y);

	    glData.quad.upload();

	    renderer.bindShader(glData.shader);

	    var textureUvs = texture._uvs,
	        textureWidth = texture._frame.width,
	        textureHeight = texture._frame.height,
	        textureBaseWidth = texture.baseTexture.width,
	        textureBaseHeight = texture.baseTexture.height;

	    var uPixelSize = glData.shader.uniforms.uPixelSize;
	    uPixelSize[0] = 1.0 / textureBaseWidth;
	    uPixelSize[1] = 1.0 / textureBaseHeight;
	    glData.shader.uniforms.uPixelSize = uPixelSize;

	    var uFrame = glData.shader.uniforms.uFrame;
	    uFrame[0] = textureUvs.x0;
	    uFrame[1] = textureUvs.y0;
	    uFrame[2] = textureUvs.x1 - textureUvs.x0;
	    uFrame[3] = textureUvs.y2 - textureUvs.y0;
	    glData.shader.uniforms.uFrame = uFrame;

	    var uTransform = glData.shader.uniforms.uTransform;
	    uTransform[0] = this.tilePosition.x % (textureWidth * this.tileScale.x) / this._width;
	    uTransform[1] = this.tilePosition.y % (textureHeight * this.tileScale.y) / this._height;
	    uTransform[2] = textureBaseWidth / this._width * this.tileScale.x;
	    uTransform[3] = textureBaseHeight / this._height * this.tileScale.y;
	    glData.shader.uniforms.uTransform = uTransform;

	    glData.shader.uniforms.translationMatrix = this.worldTransform.toArray(true);

	    var color = tempArray;

	    core.utils.hex2rgb(this.tint, color);
	    color[3] = this.worldAlpha;

	    glData.shader.uniforms.uColor = color;

	    renderer.bindTexture(this._texture, 0);

	    renderer.state.setBlendMode(this.blendMode);
	    glData.quad.draw();
	};

	TilingSprite.prototype._renderCanvas = function (renderer) {
	    var texture = this._texture;

	    if (!texture.baseTexture.hasLoaded) {
	        return;
	    }

	    var context = renderer.context,
	        transform = this.worldTransform,
	        resolution = renderer.resolution,
	        baseTexture = texture.baseTexture,
	        modX = this.tilePosition.x / this.tileScale.x % texture._frame.width,
	        modY = this.tilePosition.y / this.tileScale.y % texture._frame.height;

	    if (!this._canvasPattern) {
	        var tempCanvas = new core.CanvasRenderTarget(texture._frame.width, texture._frame.height);

	        if (this.tint !== 0xFFFFFF) {
	            if (this.cachedTint !== this.tint) {
	                this.cachedTint = this.tint;

	                this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
	            }
	            tempCanvas.context.drawImage(this.tintedTexture, 0, 0);
	        } else {
	            tempCanvas.context.drawImage(baseTexture.source, -texture._frame.x, -texture._frame.y);
	        }
	        this._canvasPattern = tempCanvas.context.createPattern(tempCanvas.canvas, 'repeat');
	    }

	    context.globalAlpha = this.worldAlpha;
	    context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

	    context.scale(this.tileScale.x, this.tileScale.y);

	    context.translate(modX + this.anchor.x * -this._width, modY + this.anchor.y * -this._height);

	    var compositeOperation = renderer.blendModes[this.blendMode];
	    if (compositeOperation !== renderer.context.globalCompositeOperation) {
	        context.globalCompositeOperation = compositeOperation;
	    }

	    context.fillStyle = this._canvasPattern;
	    context.fillRect(-modX, -modY, this._width / this.tileScale.x, this._height / this.tileScale.y);
	};

	TilingSprite.prototype.getBounds = function () {
	    var width = this._width;
	    var height = this._height;

	    var w0 = width * (1 - this.anchor.x);
	    var w1 = width * -this.anchor.x;

	    var h0 = height * (1 - this.anchor.y);
	    var h1 = height * -this.anchor.y;

	    var worldTransform = this.worldTransform;

	    var a = worldTransform.a;
	    var b = worldTransform.b;
	    var c = worldTransform.c;
	    var d = worldTransform.d;
	    var tx = worldTransform.tx;
	    var ty = worldTransform.ty;

	    var x1 = a * w1 + c * h1 + tx;
	    var y1 = d * h1 + b * w1 + ty;

	    var x2 = a * w0 + c * h1 + tx;
	    var y2 = d * h1 + b * w0 + ty;

	    var x3 = a * w0 + c * h0 + tx;
	    var y3 = d * h0 + b * w0 + ty;

	    var x4 = a * w1 + c * h0 + tx;
	    var y4 = d * h0 + b * w1 + ty;

	    var minX, maxX, minY, maxY;

	    minX = x1;
	    minX = x2 < minX ? x2 : minX;
	    minX = x3 < minX ? x3 : minX;
	    minX = x4 < minX ? x4 : minX;

	    minY = y1;
	    minY = y2 < minY ? y2 : minY;
	    minY = y3 < minY ? y3 : minY;
	    minY = y4 < minY ? y4 : minY;

	    maxX = x1;
	    maxX = x2 > maxX ? x2 : maxX;
	    maxX = x3 > maxX ? x3 : maxX;
	    maxX = x4 > maxX ? x4 : maxX;

	    maxY = y1;
	    maxY = y2 > maxY ? y2 : maxY;
	    maxY = y3 > maxY ? y3 : maxY;
	    maxY = y4 > maxY ? y4 : maxY;

	    var bounds = this._bounds;

	    bounds.x = minX;
	    bounds.width = maxX - minX;

	    bounds.y = minY;
	    bounds.height = maxY - minY;

	    this._currentBounds = bounds;

	    return bounds;
	};

	TilingSprite.prototype.containsPoint = function (point) {
	    this.worldTransform.applyInverse(point, tempPoint);

	    var width = this._width;
	    var height = this._height;
	    var x1 = -width * this.anchor.x;
	    var y1;

	    if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
	        y1 = -height * this.anchor.y;

	        if (tempPoint.y > y1 && tempPoint.y < y1 + height) {
	            return true;
	        }
	    }

	    return false;
	};

	TilingSprite.prototype.destroy = function () {
	    core.Sprite.prototype.destroy.call(this);

	    this.tileScale = null;
	    this._tileScaleOffset = null;
	    this.tilePosition = null;

	    this._uvs = null;
	};

	TilingSprite.from = function (source, width, height) {
	    return new TilingSprite(Texture.from(source), width, height);
	};

	TilingSprite.fromFrame = function (frameId, width, height) {
	    var texture = core.utils.TextureCache[frameId];

	    if (!texture) {
	        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
	    }

	    return new TilingSprite(texture, width, height);
	};

	TilingSprite.fromImage = function (imageId, width, height, crossorigin, scaleMode) {
	    return new TilingSprite(core.Texture.fromImage(imageId, crossorigin, scaleMode), width, height);
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Shader = __webpack_require__(86);
	var glslify = __webpack_require__(80);

	function TilingShader(gl) {
	    Shader.call(this, gl, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n', '#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n');
	}

	TilingShader.prototype = Object.create(Shader.prototype);
	TilingShader.prototype.constructor = TilingShader;
	module.exports = TilingShader;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    ObservablePoint = __webpack_require__(13);

	function BitmapText(text, style) {
	    core.Container.call(this);

	    style = style || {};

	    this.textWidth = 0;

	    this.textHeight = 0;

	    this._glyphs = [];

	    this._font = {
	        tint: style.tint !== undefined ? style.tint : 0xFFFFFF,
	        align: style.align || 'left',
	        name: null,
	        size: 0
	    };

	    this.font = style.font;
	    this._text = text;

	    this.maxWidth = 0;

	    this.maxLineHeight = 0;

	    this._anchor = new ObservablePoint(this.makeDirty, this, 0, 0);

	    this.dirty = false;

	    this.updateText();
	}

	BitmapText.prototype = Object.create(core.Container.prototype);
	BitmapText.prototype.constructor = BitmapText;
	module.exports = BitmapText;

	Object.defineProperties(BitmapText.prototype, {
	    tint: {
	        get: function get() {
	            return this._font.tint;
	        },
	        set: function set(value) {
	            this._font.tint = typeof value === 'number' && value >= 0 ? value : 0xFFFFFF;

	            this.dirty = true;
	        }
	    },

	    align: {
	        get: function get() {
	            return this._font.align;
	        },
	        set: function set(value) {
	            this._font.align = value || 'left';

	            this.dirty = true;
	        }
	    },

	    anchor: {
	        get: function get() {
	            return this._anchor;
	        },
	        set: function set(value) {
	            if (typeof value === 'number') {
	                this._anchor.set(value);
	            } else {
	                this._anchor.copy(value);
	            }
	        }
	    },

	    font: {
	        get: function get() {
	            return this._font;
	        },
	        set: function set(value) {
	            if (!value) {
	                return;
	            }

	            if (typeof value === 'string') {
	                value = value.split(' ');

	                this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
	                this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
	            } else {
	                this._font.name = value.name;
	                this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
	            }

	            this.dirty = true;
	        }
	    },

	    text: {
	        get: function get() {
	            return this._text;
	        },
	        set: function set(value) {
	            value = value.toString() || ' ';
	            if (this._text === value) {
	                return;
	            }
	            this._text = value;
	            this.dirty = true;
	        }
	    }
	});

	BitmapText.prototype.updateText = function () {
	    var data = BitmapText.fonts[this._font.name];
	    var pos = new core.Point();
	    var prevCharCode = null;
	    var chars = [];
	    var lastLineWidth = 0;
	    var maxLineWidth = 0;
	    var lineWidths = [];
	    var line = 0;
	    var scale = this._font.size / data.size;
	    var lastSpace = -1;
	    var lastSpaceWidth = 0;
	    var maxLineHeight = 0;

	    for (var i = 0; i < this.text.length; i++) {
	        var charCode = this.text.charCodeAt(i);

	        if (/(\s)/.test(this.text.charAt(i))) {
	            lastSpace = i;
	            lastSpaceWidth = lastLineWidth;
	        }

	        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
	            lineWidths.push(lastLineWidth);
	            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
	            line++;

	            pos.x = 0;
	            pos.y += data.lineHeight;
	            prevCharCode = null;
	            continue;
	        }

	        if (lastSpace !== -1 && this.maxWidth > 0 && pos.x * scale > this.maxWidth) {
	            core.utils.removeItems(chars, lastSpace, i - lastSpace);
	            i = lastSpace;
	            lastSpace = -1;

	            lineWidths.push(lastSpaceWidth);
	            maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
	            line++;

	            pos.x = 0;
	            pos.y += data.lineHeight;
	            prevCharCode = null;
	            continue;
	        }

	        var charData = data.chars[charCode];

	        if (!charData) {
	            continue;
	        }

	        if (prevCharCode && charData.kerning[prevCharCode]) {
	            pos.x += charData.kerning[prevCharCode];
	        }

	        chars.push({ texture: charData.texture, line: line, charCode: charCode, position: new core.Point(pos.x + charData.xOffset, pos.y + charData.yOffset) });
	        lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
	        pos.x += charData.xAdvance;
	        maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
	        prevCharCode = charCode;
	    }

	    lineWidths.push(lastLineWidth);
	    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

	    var lineAlignOffsets = [];

	    for (i = 0; i <= line; i++) {
	        var alignOffset = 0;

	        if (this._font.align === 'right') {
	            alignOffset = maxLineWidth - lineWidths[i];
	        } else if (this._font.align === 'center') {
	            alignOffset = (maxLineWidth - lineWidths[i]) / 2;
	        }

	        lineAlignOffsets.push(alignOffset);
	    }

	    var lenChars = chars.length;
	    var tint = this.tint;

	    for (i = 0; i < lenChars; i++) {
	        var c = this._glyphs[i];

	        if (c) {
	            c.texture = chars[i].texture;
	        } else {
	            c = new core.Sprite(chars[i].texture);
	            this._glyphs.push(c);
	        }

	        c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
	        c.position.y = chars[i].position.y * scale;
	        c.scale.x = c.scale.y = scale;
	        c.tint = tint;

	        if (!c.parent) {
	            this.addChild(c);
	        }
	    }

	    for (i = lenChars; i < this._glyphs.length; ++i) {
	        this.removeChild(this._glyphs[i]);
	    }

	    this.textWidth = maxLineWidth * scale;
	    this.textHeight = (pos.y + data.lineHeight) * scale;

	    if (this.anchor.x !== 0 || this.anchor.y !== 0) {
	        for (i = 0; i < lenChars; i++) {
	            this._glyphs[i].x -= this.textWidth * this.anchor.x;
	            this._glyphs[i].y -= this.textHeight * this.anchor.y;
	        }
	    }
	    this.maxLineHeight = maxLineHeight * scale;
	};

	BitmapText.prototype.updateTransform = function () {
	    this.validate();
	    this.containerUpdateTransform();
	};

	BitmapText.prototype.getLocalBounds = function () {
	    this.validate();
	    return core.Container.prototype.getLocalBounds.call(this);
	};

	BitmapText.prototype.validate = function () {
	    if (this.dirty) {
	        this.updateText();
	        this.dirty = false;
	    }
	};

	BitmapText.prototype.makeDirty = function () {
	    this.dirty = true;
	};

	BitmapText.fonts = {};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI filters library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  FXAAFilter: __webpack_require__(121),
	  NoiseFilter: __webpack_require__(122),
	  DisplacementFilter: __webpack_require__(123),
	  BlurFilter: __webpack_require__(124),
	  BlurXFilter: __webpack_require__(125),
	  BlurYFilter: __webpack_require__(129),
	  ColorMatrixFilter: __webpack_require__(130),
	  VoidFilter: __webpack_require__(131)
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var glslify = __webpack_require__(80);

	function FXAAFilter() {
	    core.Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}', '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n');
	}

	FXAAFilter.prototype = Object.create(core.Filter.prototype);
	FXAAFilter.prototype.constructor = FXAAFilter;

	module.exports = FXAAFilter;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var glslify = __webpack_require__(80);

	function NoiseFilter() {
	    core.Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}', 'precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n');

	    this.noise = 0.5;
	}

	NoiseFilter.prototype = Object.create(core.Filter.prototype);
	NoiseFilter.prototype.constructor = NoiseFilter;
	module.exports = NoiseFilter;

	Object.defineProperties(NoiseFilter.prototype, {
	    noise: {
	        get: function get() {
	            return this.uniforms.noise;
	        },
	        set: function set(value) {
	            this.uniforms.noise = value;
	        }
	    }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var glslify = __webpack_require__(80);

	function DisplacementFilter(sprite, scale) {
	    var maskMatrix = new core.Matrix();
	    sprite.renderable = false;

	    core.Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}', '#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n');

	    this.maskSprite = sprite;
	    this.maskMatrix = maskMatrix;

	    this.uniforms.mapSampler = sprite.texture;
	    this.uniforms.filterMatrix = maskMatrix.toArray(true);
	    this.uniforms.scale = { x: 1, y: 1 };

	    if (scale === null || scale === undefined) {
	        scale = 20;
	    }

	    this.scale = new core.Point(scale, scale);
	}

	DisplacementFilter.prototype = Object.create(core.Filter.prototype);
	DisplacementFilter.prototype.constructor = DisplacementFilter;
	module.exports = DisplacementFilter;

	DisplacementFilter.prototype.apply = function (filterManager, input, output) {
	    var ratio = 1 / output.destinationFrame.width * (output.size.width / input.size.width);

	    this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
	    this.uniforms.scale.x = this.scale.x * ratio;
	    this.uniforms.scale.y = this.scale.y * ratio;

	    filterManager.applyFilter(this, input, output);
	};

	Object.defineProperties(DisplacementFilter.prototype, {
	    map: {
	        get: function get() {
	            return this.uniforms.mapSampler;
	        },
	        set: function set(value) {
	            this.uniforms.mapSampler = value;
	        }
	    }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    BlurXFilter = __webpack_require__(125),
	    BlurYFilter = __webpack_require__(129);

	function BlurFilter(strength, quality, resolution) {
	    core.Filter.call(this);

	    this.blurXFilter = new BlurXFilter();
	    this.blurYFilter = new BlurYFilter();
	    this.resolution = 1;

	    this.padding = 0;
	    this.resolution = resolution || 1;
	    this.quality = quality || 4;
	    this.blur = strength || 8;
	}

	BlurFilter.prototype = Object.create(core.Filter.prototype);
	BlurFilter.prototype.constructor = BlurFilter;
	module.exports = BlurFilter;

	BlurFilter.prototype.apply = function (filterManager, input, output) {

	    var renderTarget = filterManager.getRenderTarget(true);

	    this.blurXFilter.apply(filterManager, input, renderTarget, true);
	    this.blurYFilter.apply(filterManager, renderTarget, output, false);

	    filterManager.returnRenderTarget(renderTarget);
	};

	Object.defineProperties(BlurFilter.prototype, {
	    blur: {
	        get: function get() {
	            return this.blurXFilter.blur;
	        },
	        set: function set(value) {
	            this.blurXFilter.blur = this.blurYFilter.blur = value;
	            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
	        }
	    },

	    quality: {
	        get: function get() {
	            return this.blurXFilter.quality;
	        },
	        set: function set(value) {

	            this.blurXFilter.quality = this.blurYFilter.quality = value;
	        }
	    },

	    blurX: {
	        get: function get() {
	            return this.blurXFilter.blur;
	        },
	        set: function set(value) {
	            this.blurXFilter.blur = value;
	            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
	        }
	    },

	    blurY: {
	        get: function get() {
	            return this.blurYFilter.blur;
	        },
	        set: function set(value) {
	            this.blurYFilter.blur = value;
	            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
	        }
	    }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var generateBlurVertSource = __webpack_require__(126);
	var generateBlurFragSource = __webpack_require__(127);
	var getMaxBlurKernelSize = __webpack_require__(128);

	function BlurXFilter(strength, quality, resolution) {
	    var vertSrc = generateBlurVertSource(5, true);
	    var fragSrc = generateBlurFragSource(5);

	    core.Filter.call(this, vertSrc, fragSrc);

	    this.resolution = resolution || 1;

	    this._quality = 0;

	    this.quality = quality || 4;
	    this.strength = strength || 8;

	    this.firstRun = true;
	}

	BlurXFilter.prototype = Object.create(core.Filter.prototype);
	BlurXFilter.prototype.constructor = BlurXFilter;
	module.exports = BlurXFilter;

	BlurXFilter.prototype.apply = function (filterManager, input, output, clear) {
	    if (this.firstRun) {
	        var gl = filterManager.renderer.gl;
	        var kernelSize = getMaxBlurKernelSize(gl);

	        this.vertexSrc = generateBlurVertSource(kernelSize, true);
	        this.fragmentSrc = generateBlurFragSource(kernelSize);

	        this.firstRun = false;
	    }

	    this.uniforms.strength = 1 / output.size.width * (output.size.width / input.size.width);
	    this.uniforms.strength *= this.strength;
	    this.uniforms.strength /= this.passes;

	    if (this.passes === 1) {
	        filterManager.applyFilter(this, input, output, clear);
	    } else {
	        var renderTarget = filterManager.getRenderTarget(true);
	        var flip = input;
	        var flop = renderTarget;

	        for (var i = 0; i < this.passes - 1; i++) {
	            filterManager.applyFilter(this, flip, flop, true);

	            var temp = flop;
	            flop = flip;
	            flip = temp;
	        }

	        filterManager.applyFilter(this, flip, output, clear);

	        filterManager.returnRenderTarget(renderTarget);
	    }
	};

	Object.defineProperties(BlurXFilter.prototype, {
	    blur: {
	        get: function get() {
	            return this.strength;
	        },
	        set: function set(value) {
	            this.padding = Math.abs(value) * 2;
	            this.strength = value;
	        }
	    },

	    quality: {
	        get: function get() {
	            return this._quality;
	        },
	        set: function set(value) {
	            this._quality = value;
	            this.passes = value;
	        }
	    }
	});

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	var vertTemplate = ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform float strength;', 'uniform mat3 projectionMatrix;', 'varying vec2 vBlurTexCoords[%size%];', 'void main(void)', '{', 'gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);', '%blur%', '}'].join('\n');

	var generateVertBlurSource = function generateVertBlurSource(kernelSize, x) {
	  var halfLength = Math.ceil(kernelSize / 2);

	  var vertSource = vertTemplate;

	  var blurLoop = '';
	  var template;
	  var value;

	  if (x) {
	    template = 'vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);';
	  } else {
	    template = 'vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);';
	  }

	  for (var i = 0; i < kernelSize; i++) {
	    var blur = template.replace('%index%', i);

	    value = i;

	    if (i >= halfLength) {
	      value = kernelSize - i - 1;
	    }

	    blur = blur.replace('%sampleIndex%', i - (halfLength - 1) + '.0');

	    blurLoop += blur;
	    blurLoop += '\n';
	  }

	  vertSource = vertSource.replace('%blur%', blurLoop);
	  vertSource = vertSource.replace('%size%', kernelSize);

	  return vertSource;
	};

	module.exports = generateVertBlurSource;

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	var GAUSSIAN_VALUES = {
	  5: [0.153388, 0.221461, 0.250301],
	  7: [0.071303, 0.131514, 0.189879, 0.214607],
	  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
	  11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
	  13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
	  15: [0.000489, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
	};

	var fragTemplate = ['varying vec2 vBlurTexCoords[%size%];', 'uniform sampler2D uSampler;', 'void main(void)', '{', '	gl_FragColor = vec4(0.0);', '	%blur%', '}'].join('\n');

	var generateFragBlurSource = function generateFragBlurSource(kernelSize) {
	  var kernel = GAUSSIAN_VALUES[kernelSize];
	  var halfLength = kernel.length;

	  var fragSource = fragTemplate;

	  var blurLoop = '';
	  var template = 'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;';
	  var value;

	  for (var i = 0; i < kernelSize; i++) {
	    var blur = template.replace('%index%', i);

	    value = i;

	    if (i >= halfLength) {
	      value = kernelSize - i - 1;
	    }

	    blur = blur.replace('%value%', kernel[value]);

	    blurLoop += blur;
	    blurLoop += '\n';
	  }

	  fragSource = fragSource.replace('%blur%', blurLoop);
	  fragSource = fragSource.replace('%size%', kernelSize);

	  return fragSource;
	};

	module.exports = generateFragBlurSource;

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";

	var getMaxKernelSize = function getMaxKernelSize(gl) {
	    var maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
	    var kernelSize = 15;

	    while (kernelSize > maxVaryings) {
	        kernelSize -= 2;
	    }

	    return kernelSize;
	};

	module.exports = getMaxKernelSize;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var generateBlurVertSource = __webpack_require__(126);
	var generateBlurFragSource = __webpack_require__(127);
	var getMaxBlurKernelSize = __webpack_require__(128);

	function BlurYFilter(strength, quality, resolution) {
	    var vertSrc = generateBlurVertSource(5, false);
	    var fragSrc = generateBlurFragSource(5);

	    core.Filter.call(this, vertSrc, fragSrc);

	    this.resolution = resolution || 1;

	    this._quality = 0;

	    this.quality = quality || 4;
	    this.strength = strength || 8;

	    this.firstRun = true;
	}

	BlurYFilter.prototype = Object.create(core.Filter.prototype);
	BlurYFilter.prototype.constructor = BlurYFilter;
	module.exports = BlurYFilter;

	BlurYFilter.prototype.apply = function (filterManager, input, output, clear) {
	    if (this.firstRun) {
	        var gl = filterManager.renderer.gl;
	        var kernelSize = getMaxBlurKernelSize(gl);

	        this.vertexSrc = generateBlurVertSource(kernelSize, false);
	        this.fragmentSrc = generateBlurFragSource(kernelSize);

	        this.firstRun = false;
	    }

	    this.uniforms.strength = 1 / output.size.height * (output.size.height / input.size.height);

	    this.uniforms.strength *= this.strength;
	    this.uniforms.strength /= this.passes;

	    if (this.passes === 1) {
	        filterManager.applyFilter(this, input, output, clear);
	    } else {
	        var renderTarget = filterManager.getRenderTarget(true);
	        var flip = input;
	        var flop = renderTarget;

	        for (var i = 0; i < this.passes - 1; i++) {
	            filterManager.applyFilter(this, flip, flop, true);

	            var temp = flop;
	            flop = flip;
	            flip = temp;
	        }

	        filterManager.applyFilter(this, flip, output, clear);

	        filterManager.returnRenderTarget(renderTarget);
	    }
	};

	Object.defineProperties(BlurYFilter.prototype, {
	    blur: {
	        get: function get() {
	            return this.strength;
	        },
	        set: function set(value) {
	            this.padding = Math.abs(value) * 2;
	            this.strength = value;
	        }
	    },

	    quality: {
	        get: function get() {
	            return this._quality;
	        },
	        set: function set(value) {
	            this._quality = value;
	            this.passes = value;
	        }
	    }
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	var glslify = __webpack_require__(80);

	function ColorMatrixFilter() {
	    core.Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}', '#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n');

	    this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
	}

	ColorMatrixFilter.prototype = Object.create(core.Filter.prototype);
	ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;
	module.exports = ColorMatrixFilter;

	ColorMatrixFilter.prototype._loadMatrix = function (matrix, multiply) {
	    multiply = !!multiply;

	    var newMatrix = matrix;

	    if (multiply) {
	        this._multiply(newMatrix, this.uniforms.m, matrix);
	        newMatrix = this._colorMatrix(newMatrix);
	    }

	    this.uniforms.m = newMatrix;
	};

	ColorMatrixFilter.prototype._multiply = function (out, a, b) {
	    out[0] = a[0] * b[0] + a[1] * b[5] + a[2] * b[10] + a[3] * b[15];
	    out[1] = a[0] * b[1] + a[1] * b[6] + a[2] * b[11] + a[3] * b[16];
	    out[2] = a[0] * b[2] + a[1] * b[7] + a[2] * b[12] + a[3] * b[17];
	    out[3] = a[0] * b[3] + a[1] * b[8] + a[2] * b[13] + a[3] * b[18];
	    out[4] = a[0] * b[4] + a[1] * b[9] + a[2] * b[14] + a[3] * b[19];

	    out[5] = a[5] * b[0] + a[6] * b[5] + a[7] * b[10] + a[8] * b[15];
	    out[6] = a[5] * b[1] + a[6] * b[6] + a[7] * b[11] + a[8] * b[16];
	    out[7] = a[5] * b[2] + a[6] * b[7] + a[7] * b[12] + a[8] * b[17];
	    out[8] = a[5] * b[3] + a[6] * b[8] + a[7] * b[13] + a[8] * b[18];
	    out[9] = a[5] * b[4] + a[6] * b[9] + a[7] * b[14] + a[8] * b[19];

	    out[10] = a[10] * b[0] + a[11] * b[5] + a[12] * b[10] + a[13] * b[15];
	    out[11] = a[10] * b[1] + a[11] * b[6] + a[12] * b[11] + a[13] * b[16];
	    out[12] = a[10] * b[2] + a[11] * b[7] + a[12] * b[12] + a[13] * b[17];
	    out[13] = a[10] * b[3] + a[11] * b[8] + a[12] * b[13] + a[13] * b[18];
	    out[14] = a[10] * b[4] + a[11] * b[9] + a[12] * b[14] + a[13] * b[19];

	    out[15] = a[15] * b[0] + a[16] * b[5] + a[17] * b[10] + a[18] * b[15];
	    out[16] = a[15] * b[1] + a[16] * b[6] + a[17] * b[11] + a[18] * b[16];
	    out[17] = a[15] * b[2] + a[16] * b[7] + a[17] * b[12] + a[18] * b[17];
	    out[18] = a[15] * b[3] + a[16] * b[8] + a[17] * b[13] + a[18] * b[18];
	    out[19] = a[15] * b[4] + a[16] * b[9] + a[17] * b[14] + a[18] * b[19];

	    return out;
	};

	ColorMatrixFilter.prototype._colorMatrix = function (matrix) {
	    var m = new Float32Array(matrix);
	    m[4] /= 255;
	    m[9] /= 255;
	    m[14] /= 255;
	    m[19] /= 255;

	    return m;
	};

	ColorMatrixFilter.prototype.brightness = function (b, multiply) {
	    var matrix = [b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.greyscale = function (scale, multiply) {
	    var matrix = [scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;

	ColorMatrixFilter.prototype.blackAndWhite = function (multiply) {
	    var matrix = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.hue = function (rotation, multiply) {
	    rotation = (rotation || 0) / 180 * Math.PI;

	    var cosR = Math.cos(rotation),
	        sinR = Math.sin(rotation),
	        sqrt = Math.sqrt;

	    var w = 1 / 3,
	        sqrW = sqrt(w);

	    var a00 = cosR + (1.0 - cosR) * w;
	    var a01 = w * (1.0 - cosR) - sqrW * sinR;
	    var a02 = w * (1.0 - cosR) + sqrW * sinR;

	    var a10 = w * (1.0 - cosR) + sqrW * sinR;
	    var a11 = cosR + w * (1.0 - cosR);
	    var a12 = w * (1.0 - cosR) - sqrW * sinR;

	    var a20 = w * (1.0 - cosR) - sqrW * sinR;
	    var a21 = w * (1.0 - cosR) + sqrW * sinR;
	    var a22 = cosR + w * (1.0 - cosR);

	    var matrix = [a00, a01, a02, 0, 0, a10, a11, a12, 0, 0, a20, a21, a22, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.contrast = function (amount, multiply) {
	    var v = (amount || 0) + 1;
	    var o = -128 * (v - 1);

	    var matrix = [v, 0, 0, 0, o, 0, v, 0, 0, o, 0, 0, v, 0, o, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.saturate = function (amount, multiply) {
	    var x = (amount || 0) * 2 / 3 + 1;
	    var y = (x - 1) * -0.5;

	    var matrix = [x, y, y, 0, 0, y, x, y, 0, 0, y, y, x, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.desaturate = function () {
	    this.saturate(-1);
	};

	ColorMatrixFilter.prototype.negative = function (multiply) {
	    var matrix = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.sepia = function (multiply) {
	    var matrix = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.technicolor = function (multiply) {
	    var matrix = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.polaroid = function (multiply) {
	    var matrix = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.toBGR = function (multiply) {
	    var matrix = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.kodachrome = function (multiply) {
	    var matrix = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.browni = function (multiply) {
	    var matrix = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.vintage = function (multiply) {
	    var matrix = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.colorTone = function (desaturation, toned, lightColor, darkColor, multiply) {
	    desaturation = desaturation || 0.2;
	    toned = toned || 0.15;
	    lightColor = lightColor || 0xFFE580;
	    darkColor = darkColor || 0x338000;

	    var lR = (lightColor >> 16 & 0xFF) / 255;
	    var lG = (lightColor >> 8 & 0xFF) / 255;
	    var lB = (lightColor & 0xFF) / 255;

	    var dR = (darkColor >> 16 & 0xFF) / 255;
	    var dG = (darkColor >> 8 & 0xFF) / 255;
	    var dB = (darkColor & 0xFF) / 255;

	    var matrix = [0.3, 0.59, 0.11, 0, 0, lR, lG, lB, desaturation, 0, dR, dG, dB, toned, 0, lR - dR, lG - dG, lB - dB, 0, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.night = function (intensity, multiply) {
	    intensity = intensity || 0.1;
	    var matrix = [intensity * -2.0, -intensity, 0, 0, 0, -intensity, 0, intensity, 0, 0, 0, intensity, intensity * 2.0, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.predator = function (amount, multiply) {
	    var matrix = [11.224130630493164 * amount, -4.794486999511719 * amount, -2.8746118545532227 * amount, 0 * amount, 0.40342438220977783 * amount, -3.6330697536468506 * amount, 9.193157196044922 * amount, -2.951810836791992 * amount, 0 * amount, -1.316135048866272 * amount, -3.2184197902679443 * amount, -4.2375030517578125 * amount, 7.476448059082031 * amount, 0 * amount, 0.8044459223747253 * amount, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.lsd = function (multiply) {
	    var matrix = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, multiply);
	};

	ColorMatrixFilter.prototype.reset = function () {
	    var matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

	    this._loadMatrix(matrix, false);
	};

	Object.defineProperties(ColorMatrixFilter.prototype, {
	    matrix: {
	        get: function get() {
	            return this.uniforms.m;
	        },
	        set: function set(value) {
	            this.uniforms.m = value;
	        }
	    }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	var glslify = __webpack_require__(80);

	function VoidFilter() {
	    core.Filter.call(this, '#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}', '#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n');

	    this.glShaderKey = 'void';
	}

	VoidFilter.prototype = Object.create(core.Filter.prototype);
	VoidFilter.prototype.constructor = VoidFilter;
	module.exports = VoidFilter;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI interactions library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  InteractionData: __webpack_require__(133),
	  InteractionManager: __webpack_require__(134),
	  interactiveTarget: __webpack_require__(135)
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	function InteractionData() {
	  this.global = new core.Point();

	  this.target = null;

	  this.originalEvent = null;
	}

	InteractionData.prototype.constructor = InteractionData;
	module.exports = InteractionData;

	InteractionData.prototype.getLocalPosition = function (displayObject, point, globalPos) {
	  return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    InteractionData = __webpack_require__(133),
	    EventEmitter = __webpack_require__(22);

	Object.assign(core.DisplayObject.prototype, __webpack_require__(135));

	function InteractionManager(renderer, options) {
	    EventEmitter.call(this);

	    options = options || {};

	    this.renderer = renderer;

	    this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;

	    this.interactionFrequency = options.interactionFrequency || 10;

	    this.mouse = new InteractionData();

	    this.mouse.global.set(-999999);

	    this.eventData = {
	        stopped: false,
	        target: null,
	        type: null,
	        data: this.mouse,
	        stopPropagation: function stopPropagation() {
	            this.stopped = true;
	        }
	    };

	    this.interactiveDataPool = [];

	    this.interactionDOMElement = null;

	    this.moveWhenInside = false;

	    this.eventsAdded = false;

	    this.onMouseUp = this.onMouseUp.bind(this);
	    this.processMouseUp = this.processMouseUp.bind(this);

	    this.onMouseDown = this.onMouseDown.bind(this);
	    this.processMouseDown = this.processMouseDown.bind(this);

	    this.onMouseMove = this.onMouseMove.bind(this);
	    this.processMouseMove = this.processMouseMove.bind(this);

	    this.onMouseOut = this.onMouseOut.bind(this);
	    this.processMouseOverOut = this.processMouseOverOut.bind(this);

	    this.onMouseOver = this.onMouseOver.bind(this);

	    this.onTouchStart = this.onTouchStart.bind(this);
	    this.processTouchStart = this.processTouchStart.bind(this);

	    this.onTouchEnd = this.onTouchEnd.bind(this);
	    this.processTouchEnd = this.processTouchEnd.bind(this);

	    this.onTouchMove = this.onTouchMove.bind(this);
	    this.processTouchMove = this.processTouchMove.bind(this);

	    this.defaultCursorStyle = 'inherit';

	    this.currentCursorStyle = 'inherit';

	    this._tempPoint = new core.Point();

	    this.resolution = 1;

	    this.setTargetElement(this.renderer.view, this.renderer.resolution);
	}

	InteractionManager.prototype = Object.create(EventEmitter.prototype);
	InteractionManager.prototype.constructor = InteractionManager;
	module.exports = InteractionManager;

	InteractionManager.prototype.setTargetElement = function (element, resolution) {
	    this.removeEvents();

	    this.interactionDOMElement = element;

	    this.resolution = resolution || 1;

	    this.addEvents();
	};

	InteractionManager.prototype.addEvents = function () {
	    if (!this.interactionDOMElement) {
	        return;
	    }

	    core.ticker.shared.add(this.update, this);

	    if (window.navigator.msPointerEnabled) {
	        this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
	        this.interactionDOMElement.style['-ms-touch-action'] = 'none';
	    }

	    window.document.addEventListener('mousemove', this.onMouseMove, true);
	    this.interactionDOMElement.addEventListener('mousedown', this.onMouseDown, true);
	    this.interactionDOMElement.addEventListener('mouseout', this.onMouseOut, true);
	    this.interactionDOMElement.addEventListener('mouseover', this.onMouseOver, true);

	    this.interactionDOMElement.addEventListener('touchstart', this.onTouchStart, true);
	    this.interactionDOMElement.addEventListener('touchend', this.onTouchEnd, true);
	    this.interactionDOMElement.addEventListener('touchmove', this.onTouchMove, true);

	    window.addEventListener('mouseup', this.onMouseUp, true);

	    this.eventsAdded = true;
	};

	InteractionManager.prototype.removeEvents = function () {
	    if (!this.interactionDOMElement) {
	        return;
	    }

	    core.ticker.shared.remove(this.update);

	    if (window.navigator.msPointerEnabled) {
	        this.interactionDOMElement.style['-ms-content-zooming'] = '';
	        this.interactionDOMElement.style['-ms-touch-action'] = '';
	    }

	    window.document.removeEventListener('mousemove', this.onMouseMove, true);
	    this.interactionDOMElement.removeEventListener('mousedown', this.onMouseDown, true);
	    this.interactionDOMElement.removeEventListener('mouseout', this.onMouseOut, true);
	    this.interactionDOMElement.removeEventListener('mouseover', this.onMouseOver, true);

	    this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, true);
	    this.interactionDOMElement.removeEventListener('touchend', this.onTouchEnd, true);
	    this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, true);

	    this.interactionDOMElement = null;

	    window.removeEventListener('mouseup', this.onMouseUp, true);

	    this.eventsAdded = false;
	};

	InteractionManager.prototype.update = function (deltaTime) {
	    this._deltaTime += deltaTime;

	    if (this._deltaTime < this.interactionFrequency) {
	        return;
	    }

	    this._deltaTime = 0;

	    if (!this.interactionDOMElement) {
	        return;
	    }

	    if (this.didMove) {
	        this.didMove = false;
	        return;
	    }

	    this.cursor = this.defaultCursorStyle;

	    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, true);

	    if (this.currentCursorStyle !== this.cursor) {
	        this.currentCursorStyle = this.cursor;
	        this.interactionDOMElement.style.cursor = this.cursor;
	    }
	};

	InteractionManager.prototype.dispatchEvent = function (displayObject, eventString, eventData) {
	    if (!eventData.stopped) {
	        eventData.target = displayObject;
	        eventData.type = eventString;

	        displayObject.emit(eventString, eventData);

	        if (displayObject[eventString]) {
	            displayObject[eventString](eventData);
	        }
	    }
	};

	InteractionManager.prototype.mapPositionToPoint = function (point, x, y) {
	    var rect;

	    if (!this.interactionDOMElement.parentElement) {
	        rect = { x: 0, y: 0, width: 0, height: 0 };
	    } else {
	        rect = this.interactionDOMElement.getBoundingClientRect();
	    }

	    point.x = (x - rect.left) * (this.interactionDOMElement.width / rect.width) / this.resolution;
	    point.y = (y - rect.top) * (this.interactionDOMElement.height / rect.height) / this.resolution;
	};

	InteractionManager.prototype.processInteractive = function (point, displayObject, func, hitTest, interactive) {
	    if (!displayObject || !displayObject.visible) {
	        return false;
	    }

	    var hit = false,
	        interactiveParent = interactive = displayObject.interactive || interactive;

	    if (displayObject.hitArea) {
	        interactiveParent = false;
	    }

	    if (hitTest && displayObject._mask) {
	        if (!displayObject._mask.containsPoint(point)) {
	            hitTest = false;
	        }
	    }

	    if (hitTest && displayObject.filterArea) {
	        if (!displayObject.filterArea.contains(point.x, point.y)) {
	            hitTest = false;
	        }
	    }

	    if (displayObject.interactiveChildren) {
	        var children = displayObject.children;

	        for (var i = children.length - 1; i >= 0; i--) {
	            var child = children[i];

	            if (this.processInteractive(point, child, func, hitTest, interactiveParent)) {
	                if (!child.parent) {
	                    continue;
	                }

	                hit = true;

	                interactiveParent = false;

	                hitTest = false;
	            }
	        }
	    }

	    if (interactive) {
	        if (hitTest && !hit) {

	            if (displayObject.hitArea) {
	                displayObject.worldTransform.applyInverse(point, this._tempPoint);
	                hit = displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y);
	            } else if (displayObject.containsPoint) {
	                hit = displayObject.containsPoint(point);
	            }
	        }

	        if (displayObject.interactive) {
	            func(displayObject, hit);
	        }
	    }

	    return hit;
	};

	InteractionManager.prototype.onMouseDown = function (event) {
	    this.mouse.originalEvent = event;
	    this.eventData.data = this.mouse;
	    this.eventData.stopped = false;

	    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);

	    if (this.autoPreventDefault) {
	        this.mouse.originalEvent.preventDefault();
	    }

	    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, true);

	    var isRightButton = event.button === 2 || event.which === 3;
	    this.emit(isRightButton ? 'rightdown' : 'mousedown', this.eventData);
	};

	InteractionManager.prototype.processMouseDown = function (displayObject, hit) {
	    var e = this.mouse.originalEvent;

	    var isRightButton = e.button === 2 || e.which === 3;

	    if (hit) {
	        displayObject[isRightButton ? '_isRightDown' : '_isLeftDown'] = true;
	        this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', this.eventData);
	    }
	};

	InteractionManager.prototype.onMouseUp = function (event) {
	    this.mouse.originalEvent = event;
	    this.eventData.data = this.mouse;
	    this.eventData.stopped = false;

	    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);

	    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, true);

	    var isRightButton = event.button === 2 || event.which === 3;
	    this.emit(isRightButton ? 'rightup' : 'mouseup', this.eventData);
	};

	InteractionManager.prototype.processMouseUp = function (displayObject, hit) {
	    var e = this.mouse.originalEvent;

	    var isRightButton = e.button === 2 || e.which === 3;
	    var isDown = isRightButton ? '_isRightDown' : '_isLeftDown';

	    if (hit) {
	        this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', this.eventData);

	        if (displayObject[isDown]) {
	            displayObject[isDown] = false;
	            this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', this.eventData);
	        }
	    } else {
	        if (displayObject[isDown]) {
	            displayObject[isDown] = false;
	            this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', this.eventData);
	        }
	    }
	};

	InteractionManager.prototype.onMouseMove = function (event) {
	    this.mouse.originalEvent = event;
	    this.eventData.data = this.mouse;
	    this.eventData.stopped = false;

	    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);

	    this.didMove = true;

	    this.cursor = this.defaultCursorStyle;

	    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, true);

	    this.emit('mousemove', this.eventData);

	    if (this.currentCursorStyle !== this.cursor) {
	        this.currentCursorStyle = this.cursor;
	        this.interactionDOMElement.style.cursor = this.cursor;
	    }
	};

	InteractionManager.prototype.processMouseMove = function (displayObject, hit) {
	    this.processMouseOverOut(displayObject, hit);

	    if (!this.moveWhenInside || hit) {
	        this.dispatchEvent(displayObject, 'mousemove', this.eventData);
	    }
	};

	InteractionManager.prototype.onMouseOut = function (event) {
	    this.mouse.originalEvent = event;
	    this.eventData.data = this.mouse;
	    this.eventData.stopped = false;

	    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);

	    this.interactionDOMElement.style.cursor = this.defaultCursorStyle;

	    this.mapPositionToPoint(this.mouse.global, event.clientX, event.clientY);

	    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, false);

	    this.emit('mouseout', this.eventData);
	};

	InteractionManager.prototype.processMouseOverOut = function (displayObject, hit) {
	    if (hit) {
	        if (!displayObject._over) {
	            displayObject._over = true;
	            this.dispatchEvent(displayObject, 'mouseover', this.eventData);
	        }

	        if (displayObject.buttonMode) {
	            this.cursor = displayObject.defaultCursor;
	        }
	    } else {
	        if (displayObject._over) {
	            displayObject._over = false;
	            this.dispatchEvent(displayObject, 'mouseout', this.eventData);
	        }
	    }
	};

	InteractionManager.prototype.onMouseOver = function (event) {
	    this.mouse.originalEvent = event;
	    this.eventData.data = this.mouse;
	    this.eventData.stopped = false;

	    this.emit('mouseover', this.eventData);
	};

	InteractionManager.prototype.onTouchStart = function (event) {
	    if (this.autoPreventDefault) {
	        event.preventDefault();
	    }

	    var changedTouches = event.changedTouches;
	    var cLength = changedTouches.length;

	    for (var i = 0; i < cLength; i++) {
	        var touchEvent = changedTouches[i];

	        var touchData = this.getTouchData(touchEvent);

	        touchData.originalEvent = event;

	        this.eventData.data = touchData;
	        this.eventData.stopped = false;

	        this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchStart, true);

	        this.emit('touchstart', this.eventData);

	        this.returnTouchData(touchData);
	    }
	};

	InteractionManager.prototype.processTouchStart = function (displayObject, hit) {
	    if (hit) {
	        displayObject._touchDown = true;
	        this.dispatchEvent(displayObject, 'touchstart', this.eventData);
	    }
	};

	InteractionManager.prototype.onTouchEnd = function (event) {
	    if (this.autoPreventDefault) {
	        event.preventDefault();
	    }

	    var changedTouches = event.changedTouches;
	    var cLength = changedTouches.length;

	    for (var i = 0; i < cLength; i++) {
	        var touchEvent = changedTouches[i];

	        var touchData = this.getTouchData(touchEvent);

	        touchData.originalEvent = event;

	        this.eventData.data = touchData;
	        this.eventData.stopped = false;

	        this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchEnd, true);

	        this.emit('touchend', this.eventData);

	        this.returnTouchData(touchData);
	    }
	};

	InteractionManager.prototype.processTouchEnd = function (displayObject, hit) {
	    if (hit) {
	        this.dispatchEvent(displayObject, 'touchend', this.eventData);

	        if (displayObject._touchDown) {
	            displayObject._touchDown = false;
	            this.dispatchEvent(displayObject, 'tap', this.eventData);
	        }
	    } else {
	        if (displayObject._touchDown) {
	            displayObject._touchDown = false;
	            this.dispatchEvent(displayObject, 'touchendoutside', this.eventData);
	        }
	    }
	};

	InteractionManager.prototype.onTouchMove = function (event) {
	    if (this.autoPreventDefault) {
	        event.preventDefault();
	    }

	    var changedTouches = event.changedTouches;
	    var cLength = changedTouches.length;

	    for (var i = 0; i < cLength; i++) {
	        var touchEvent = changedTouches[i];

	        var touchData = this.getTouchData(touchEvent);

	        touchData.originalEvent = event;

	        this.eventData.data = touchData;
	        this.eventData.stopped = false;

	        this.processInteractive(touchData.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside);

	        this.emit('touchmove', this.eventData);

	        this.returnTouchData(touchData);
	    }
	};

	InteractionManager.prototype.processTouchMove = function (displayObject, hit) {
	    if (!this.moveWhenInside || hit) {
	        this.dispatchEvent(displayObject, 'touchmove', this.eventData);
	    }
	};

	InteractionManager.prototype.getTouchData = function (touchEvent) {
	    var touchData = this.interactiveDataPool.pop();

	    if (!touchData) {
	        touchData = new InteractionData();
	    }

	    touchData.identifier = touchEvent.identifier;
	    this.mapPositionToPoint(touchData.global, touchEvent.clientX, touchEvent.clientY);

	    if (navigator.isCocoonJS) {
	        touchData.global.x = touchData.global.x / this.resolution;
	        touchData.global.y = touchData.global.y / this.resolution;
	    }

	    touchEvent.globalX = touchData.global.x;
	    touchEvent.globalY = touchData.global.y;

	    return touchData;
	};

	InteractionManager.prototype.returnTouchData = function (touchData) {
	    this.interactiveDataPool.push(touchData);
	};

	InteractionManager.prototype.destroy = function () {
	    this.removeEvents();

	    this.removeAllListeners();

	    this.renderer = null;

	    this.mouse = null;

	    this.eventData = null;

	    this.interactiveDataPool = null;

	    this.interactionDOMElement = null;

	    this.onMouseUp = null;
	    this.processMouseUp = null;

	    this.onMouseDown = null;
	    this.processMouseDown = null;

	    this.onMouseMove = null;
	    this.processMouseMove = null;

	    this.onMouseOut = null;
	    this.processMouseOverOut = null;

	    this.onMouseOver = null;

	    this.onTouchStart = null;
	    this.processTouchStart = null;

	    this.onTouchEnd = null;
	    this.processTouchEnd = null;

	    this.onTouchMove = null;
	    this.processTouchMove = null;

	    this._tempPoint = null;
	};

	core.WebGLRenderer.registerPlugin('interaction', InteractionManager);
	core.CanvasRenderer.registerPlugin('interaction', InteractionManager);

/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';

	var interactiveTarget = {
	  interactive: false,

	  interactiveChildren: true,

	  hitArea: null,

	  buttonMode: false,

	  defaultCursor: 'pointer',

	  _over: false,

	  _isLeftDown: false,

	  _isRightDown: false,

	  _touchDown: false
	};

	module.exports = interactiveTarget;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI loaders library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  Loader: __webpack_require__(137),

	  bitmapFontParser: __webpack_require__(187),
	  spritesheetParser: __webpack_require__(185),
	  textureParser: __webpack_require__(184),
	  Resource: __webpack_require__(138).Resource
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ResourceLoader = __webpack_require__(138),
	    textureParser = __webpack_require__(184),
	    spritesheetParser = __webpack_require__(185),
	    bitmapFontParser = __webpack_require__(187);

	function Loader(baseUrl, concurrency) {
	    ResourceLoader.call(this, baseUrl, concurrency);

	    for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
	        this.use(Loader._pixiMiddleware[i]());
	    }
	}

	Loader.prototype = Object.create(ResourceLoader.prototype);
	Loader.prototype.constructor = Loader;

	module.exports = Loader;

	Loader._pixiMiddleware = [ResourceLoader.middleware.parsing.blob, textureParser, spritesheetParser, bitmapFontParser];

	Loader.addPixiMiddleware = function (fn) {
	    Loader._pixiMiddleware.push(fn);
	};

	var Resource = ResourceLoader.Resource;

	Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	module.exports = __webpack_require__(139);
	module.exports.Resource = __webpack_require__(180);
	module.exports.middleware = {
	    caching: {
	        memory: __webpack_require__(181)
	    },
	    parsing: {
	        blob: __webpack_require__(182)
	    }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var asyncQueue = __webpack_require__(140);
	var asyncEachSeries = __webpack_require__(159);
	var urlParser = __webpack_require__(36);
	var Resource = __webpack_require__(180);
	var EventEmitter = __webpack_require__(22);

	var DEFAULT_CONCURRENCY = 10;
	var MAX_PROGRESS = 100;

	function Loader(baseUrl, concurrency) {
	    EventEmitter.call(this);

	    concurrency = concurrency || DEFAULT_CONCURRENCY;

	    this.baseUrl = baseUrl || '';

	    this.progress = 0;

	    this.loading = false;

	    this._progressChunk = 0;

	    this._beforeMiddleware = [];

	    this._afterMiddleware = [];

	    this._boundLoadResource = this._loadResource.bind(this);

	    this._buffer = [];

	    this._numToLoad = 0;

	    this._queue = asyncQueue(this._boundLoadResource, concurrency);

	    this.resources = {};
	}

	Loader.prototype = Object.create(EventEmitter.prototype);
	Loader.prototype.constructor = Loader;
	module.exports = Loader;

	Loader.prototype.add = Loader.prototype.enqueue = function (name, url, options, cb) {
	    if (Array.isArray(name)) {
	        for (var i = 0; i < name.length; ++i) {
	            this.add(name[i]);
	        }

	        return this;
	    }

	    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	        cb = url || name.callback || name.onComplete;
	        options = name;
	        url = name.url;
	        name = name.name || name.key || name.url;
	    }

	    if (typeof url !== 'string') {
	        cb = options;
	        options = url;
	        url = name;
	    }

	    if (typeof url !== 'string') {
	        throw new Error('No url passed to add resource to loader.');
	    }

	    if (typeof options === 'function') {
	        cb = options;
	        options = null;
	    }

	    if (this.resources[name]) {
	        throw new Error('Resource with name "' + name + '" already exists.');
	    }

	    url = this._prepareUrl(url);

	    this.resources[name] = new Resource(name, url, options);

	    if (typeof cb === 'function') {
	        this.resources[name].once('afterMiddleware', cb);
	    }

	    this._numToLoad++;

	    if (this._queue.started) {
	        this._queue.push(this.resources[name]);
	        this._progressChunk = (MAX_PROGRESS - this.progress) / (this._queue.length() + this._queue.running());
	    } else {
	            this._buffer.push(this.resources[name]);
	            this._progressChunk = MAX_PROGRESS / this._buffer.length;
	        }

	    return this;
	};

	Loader.prototype.before = Loader.prototype.pre = function (fn) {
	    this._beforeMiddleware.push(fn);

	    return this;
	};

	Loader.prototype.after = Loader.prototype.use = function (fn) {
	    this._afterMiddleware.push(fn);

	    return this;
	};

	Loader.prototype.reset = function () {

	    this.progress = 0;

	    this.loading = false;

	    this._progressChunk = 0;

	    this._buffer.length = 0;

	    this._numToLoad = 0;

	    this._queue.kill();
	    this._queue.started = false;

	    for (var k in this.resources) {
	        var res = this.resources[k];

	        res.off('complete', this._onLoad, this);

	        if (res.isLoading) {
	            res.abort();
	        }
	    }

	    this.resources = {};

	    return this;
	};

	Loader.prototype.load = function (cb) {
	    if (typeof cb === 'function') {
	        this.once('complete', cb);
	    }

	    if (this._queue.started) {
	        return this;
	    }

	    this.emit('start', this);

	    this.loading = true;

	    for (var i = 0; i < this._buffer.length; ++i) {
	        this._queue.push(this._buffer[i]);
	    }

	    this._buffer.length = 0;

	    return this;
	};

	Loader.prototype._prepareUrl = function (url) {
	    var parsedUrl = urlParser.parse(url);

	    if (parsedUrl.protocol || !parsedUrl.pathname || parsedUrl.pathname.indexOf('//') === 0) {
	        return url;
	    }

	    if (this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && url.charAt(0) !== '/') {
	        return this.baseUrl + '/' + url;
	    }

	    return this.baseUrl + url;
	};

	Loader.prototype._loadResource = function (resource, dequeue) {
	    var self = this;

	    resource._dequeue = dequeue;

	    asyncEachSeries(this._beforeMiddleware, function (fn, next) {
	        fn.call(self, resource, function () {
	            next(resource.isComplete ? {} : null);
	        });
	    }, function () {

	        if (resource.isComplete) {
	            self._onLoad(resource);
	        } else {
	            resource.once('complete', self._onLoad, self);
	            resource.load();
	        }
	    });
	};

	Loader.prototype._onComplete = function () {
	    this.loading = false;

	    this.emit('complete', this, this.resources);
	};

	Loader.prototype._onLoad = function (resource) {
	    var self = this;

	    asyncEachSeries(this._afterMiddleware, function (fn, next) {
	        fn.call(self, resource, next);
	    }, function () {
	        resource.emit('afterMiddleware', resource);

	        self._numToLoad--;

	        self.progress += self._progressChunk;
	        self.emit('progress', self, resource);

	        if (resource.error) {
	            self.emit('error', resource.error, self, resource);
	        } else {
	            self.emit('load', self, resource);
	        }

	        if (self._numToLoad === 0) {
	            self.progress = 100;
	            self._onComplete();
	        }
	    });

	    resource._dequeue();
	};

	Loader.LOAD_TYPE = Resource.LOAD_TYPE;
	Loader.XHR_RESPONSE_TYPE = Resource.XHR_RESPONSE_TYPE;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (worker, concurrency) {
	  return (0, _queue2.default)(function (items, cb) {
	    worker(items[0], cb);
	  }, concurrency, 1);
	};

	var _queue = __webpack_require__(141);

	var _queue2 = _interopRequireDefault(_queue);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = queue;

	var _arrayEach = __webpack_require__(142);

	var _arrayEach2 = _interopRequireDefault(_arrayEach);

	var _isArray = __webpack_require__(143);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _noop = __webpack_require__(144);

	var _noop2 = _interopRequireDefault(_noop);

	var _rest = __webpack_require__(145);

	var _rest2 = _interopRequireDefault(_rest);

	var _onlyOnce = __webpack_require__(154);

	var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

	var _setImmediate = __webpack_require__(155);

	var _setImmediate2 = _interopRequireDefault(_setImmediate);

	var _DoublyLinkedList = __webpack_require__(158);

	var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function queue(worker, concurrency, payload) {
	    if (concurrency == null) {
	        concurrency = 1;
	    } else if (concurrency === 0) {
	        throw new Error('Concurrency must not be zero');
	    }

	    function _insert(data, insertAtFront, callback) {
	        if (callback != null && typeof callback !== 'function') {
	            throw new Error('task callback must be a function');
	        }
	        q.started = true;
	        if (!(0, _isArray2.default)(data)) {
	            data = [data];
	        }
	        if (data.length === 0 && q.idle()) {
	            return (0, _setImmediate2.default)(function () {
	                q.drain();
	            });
	        }
	        (0, _arrayEach2.default)(data, function (task) {
	            var item = {
	                data: task,
	                callback: callback || _noop2.default
	            };

	            if (insertAtFront) {
	                q._tasks.unshift(item);
	            } else {
	                q._tasks.push(item);
	            }
	        });
	        (0, _setImmediate2.default)(q.process);
	    }

	    function _next(tasks) {
	        return (0, _rest2.default)(function (args) {
	            workers -= 1;

	            (0, _arrayEach2.default)(tasks, function (task) {
	                (0, _arrayEach2.default)(_workersList, function (worker, index) {
	                    if (worker === task) {
	                        _workersList.splice(index, 1);
	                        return false;
	                    }
	                });

	                task.callback.apply(task, args);

	                if (args[0] != null) {
	                    q.error(args[0], task.data);
	                }
	            });

	            if (workers <= q.concurrency - q.buffer) {
	                q.unsaturated();
	            }

	            if (q.idle()) {
	                q.drain();
	            }
	            q.process();
	        });
	    }

	    var workers = 0;
	    var _workersList = [];
	    var q = {
	        _tasks: new _DoublyLinkedList2.default(),
	        concurrency: concurrency,
	        payload: payload,
	        saturated: _noop2.default,
	        unsaturated: _noop2.default,
	        buffer: concurrency / 4,
	        empty: _noop2.default,
	        drain: _noop2.default,
	        error: _noop2.default,
	        started: false,
	        paused: false,
	        push: function push(data, callback) {
	            _insert(data, false, callback);
	        },
	        kill: function kill() {
	            q.drain = _noop2.default;
	            q._tasks.empty();
	        },
	        unshift: function unshift(data, callback) {
	            _insert(data, true, callback);
	        },
	        process: function process() {
	            while (!q.paused && workers < q.concurrency && q._tasks.length) {
	                var tasks = [],
	                    data = [];
	                var l = q._tasks.length;
	                if (q.payload) l = Math.min(l, q.payload);
	                for (var i = 0; i < l; i++) {
	                    var node = q._tasks.shift();
	                    tasks.push(node);
	                    data.push(node.data);
	                }

	                if (q._tasks.length === 0) {
	                    q.empty();
	                }
	                workers += 1;
	                _workersList.push(tasks[0]);

	                if (workers === q.concurrency) {
	                    q.saturated();
	                }

	                var cb = (0, _onlyOnce2.default)(_next(tasks));
	                worker(data, cb);
	            }
	        },
	        length: function length() {
	            return q._tasks.length;
	        },
	        running: function running() {
	            return workers;
	        },
	        workersList: function workersList() {
	            return _workersList;
	        },
	        idle: function idle() {
	            return q._tasks.length + workers === 0;
	        },
	        pause: function pause() {
	            q.paused = true;
	        },
	        resume: function resume() {
	            if (q.paused === false) {
	                return;
	            }
	            q.paused = false;
	            var resumeCount = Math.min(q.concurrency, q._tasks.length);

	            for (var w = 1; w <= resumeCount; w++) {
	                (0, _setImmediate2.default)(q.process);
	            }
	        }
	    };
	    return q;
	}
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";

	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";

	var isArray = Array.isArray;

	module.exports = isArray;

/***/ },
/* 144 */
/***/ function(module, exports) {

	"use strict";

	function noop() {}

	module.exports = noop;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseRest = __webpack_require__(146),
	    toInteger = __webpack_require__(148);

	var FUNC_ERROR_TEXT = 'Expected a function';

	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = start === undefined ? start : toInteger(start);
	  return baseRest(func, start);
	}

	module.exports = rest;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var apply = __webpack_require__(147);

	var nativeMax = Math.max;

	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;

/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";

	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toFinite = __webpack_require__(149);

	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? remainder ? result - remainder : result : 0;
	}

	module.exports = toInteger;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toNumber = __webpack_require__(150);

	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(151),
	    isSymbol = __webpack_require__(152);

	var NAN = 0 / 0;

	var reTrim = /^\s+|\s+$/g;

	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	var reIsBinary = /^0b[01]+$/i;

	var reIsOctal = /^0o[0-7]+$/i;

	var freeParseInt = parseInt;

	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? other + '' : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}

	module.exports = toNumber;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isObjectLike = __webpack_require__(153);

	var symbolTag = '[object Symbol]';

	var objectProto = Object.prototype;

	var objectToString = objectProto.toString;

	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}

	module.exports = isSymbol;

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = onlyOnce;
	function onlyOnce(fn) {
	    return function () {
	        if (fn === null) throw new Error("Callback was already called.");
	        var callFn = fn;
	        fn = null;
	        callFn.apply(this, arguments);
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hasNextTick = exports.hasSetImmediate = undefined;
	exports.fallback = fallback;
	exports.wrap = wrap;

	var _rest = __webpack_require__(145);

	var _rest2 = _interopRequireDefault(_rest);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
	var hasNextTick = exports.hasNextTick = (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof process.nextTick === 'function';

	function fallback(fn) {
	    setTimeout(fn, 0);
	}

	function wrap(defer) {
	    return (0, _rest2.default)(function (fn, args) {
	        defer(function () {
	            fn.apply(null, args);
	        });
	    });
	}

	var _defer;

	if (hasSetImmediate) {
	    _defer = setImmediate;
	} else if (hasNextTick) {
	    _defer = process.nextTick;
	} else {
	    _defer = fallback;
	}

	exports.default = wrap(_defer);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156).setImmediate, __webpack_require__(157)))

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(157).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }

	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156).setImmediate, __webpack_require__(156).clearImmediate))

/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';

	var process = module.exports = {};

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    }

	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        return clearTimeout(marker);
	    }

	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = '';
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DLL;

	function DLL() {
	    this.head = this.tail = null;
	    this.length = 0;
	}

	function setInitial(dll, node) {
	    dll.length = 1;
	    dll.head = dll.tail = node;
	}

	DLL.prototype.removeLink = function (node) {
	    if (node.prev) node.prev.next = node.next;else this.head = node.next;
	    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;

	    node.prev = node.next = null;
	    this.length -= 1;
	    return node;
	};

	DLL.prototype.empty = DLL;

	DLL.prototype.insertAfter = function (node, newNode) {
	    newNode.prev = node;
	    newNode.next = node.next;
	    if (node.next) node.next.prev = newNode;else this.tail = newNode;
	    node.next = newNode;
	    this.length += 1;
	};

	DLL.prototype.insertBefore = function (node, newNode) {
	    newNode.prev = node.prev;
	    newNode.next = node;
	    if (node.prev) node.prev.next = newNode;else this.head = newNode;
	    node.prev = newNode;
	    this.length += 1;
	};

	DLL.prototype.unshift = function (node) {
	    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
	};

	DLL.prototype.push = function (node) {
	    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
	};

	DLL.prototype.shift = function () {
	    return this.head && this.removeLink(this.head);
	};

	DLL.prototype.pop = function () {
	    return this.tail && this.removeLink(this.tail);
	};
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eachLimit = __webpack_require__(160);

	var _eachLimit2 = _interopRequireDefault(_eachLimit);

	var _doLimit = __webpack_require__(179);

	var _doLimit2 = _interopRequireDefault(_doLimit);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = (0, _doLimit2.default)(_eachLimit2.default, 1);
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eachLimit;

	var _eachOfLimit = __webpack_require__(161);

	var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

	var _withoutIndex = __webpack_require__(178);

	var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function eachLimit(coll, limit, iteratee, callback) {
	  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)(iteratee), callback);
	}
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = _eachOfLimit;

	var _noop = __webpack_require__(144);

	var _noop2 = _interopRequireDefault(_noop);

	var _once = __webpack_require__(162);

	var _once2 = _interopRequireDefault(_once);

	var _iterator = __webpack_require__(163);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _onlyOnce = __webpack_require__(154);

	var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _eachOfLimit(limit) {
	    return function (obj, iteratee, callback) {
	        callback = (0, _once2.default)(callback || _noop2.default);
	        if (limit <= 0 || !obj) {
	            return callback(null);
	        }
	        var nextElem = (0, _iterator2.default)(obj);
	        var done = false;
	        var running = 0;

	        function iterateeCallback(err) {
	            running -= 1;
	            if (err) {
	                done = true;
	                callback(err);
	            } else if (done && running <= 0) {
	                return callback(null);
	            } else {
	                replenish();
	            }
	        }

	        function replenish() {
	            while (running < limit && !done) {
	                var elem = nextElem();
	                if (elem === null) {
	                    done = true;
	                    if (running <= 0) {
	                        callback(null);
	                    }
	                    return;
	                }
	                running += 1;
	                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
	            }
	        }

	        replenish();
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = once;
	function once(fn) {
	    return function () {
	        if (fn === null) return;
	        var callFn = fn;
	        fn = null;
	        callFn.apply(this, arguments);
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = iterator;

	var _isArrayLike = __webpack_require__(164);

	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

	var _getIterator = __webpack_require__(167);

	var _getIterator2 = _interopRequireDefault(_getIterator);

	var _keys = __webpack_require__(168);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function createArrayIterator(coll) {
	    var i = -1;
	    var len = coll.length;
	    return function next() {
	        return ++i < len ? { value: coll[i], key: i } : null;
	    };
	}

	function createES2015Iterator(iterator) {
	    var i = -1;
	    return function next() {
	        var item = iterator.next();
	        if (item.done) return null;
	        i++;
	        return { value: item.value, key: i };
	    };
	}

	function createObjectIterator(obj) {
	    var okeys = (0, _keys2.default)(obj);
	    var i = -1;
	    var len = okeys.length;
	    return function next() {
	        var key = okeys[++i];
	        return i < len ? { value: obj[key], key: key } : null;
	    };
	}

	function iterator(coll) {
	    if ((0, _isArrayLike2.default)(coll)) {
	        return createArrayIterator(coll);
	    }

	    var iterator = (0, _getIterator2.default)(coll);
	    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
	}
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(165),
	    isLength = __webpack_require__(166);

	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(151);

	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	var objectProto = Object.prototype;

	var objectToString = objectProto.toString;

	function isFunction(value) {
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	var MAX_SAFE_INTEGER = 9007199254740991;

	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (coll) {
	    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
	};

	var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayLikeKeys = __webpack_require__(169),
	    baseKeys = __webpack_require__(174),
	    isArrayLike = __webpack_require__(164);

	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseTimes = __webpack_require__(170),
	    isArguments = __webpack_require__(171),
	    isArray = __webpack_require__(143),
	    isIndex = __webpack_require__(173);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function arrayLikeKeys(value, inherited) {
	  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;

/***/ },
/* 170 */
/***/ function(module, exports) {

	"use strict";

	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLikeObject = __webpack_require__(172);

	var argsTag = '[object Arguments]';

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	var objectToString = objectProto.toString;

	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	function isArguments(value) {
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLike = __webpack_require__(164),
	    isObjectLike = __webpack_require__(153);

	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;

/***/ },
/* 173 */
/***/ function(module, exports) {

	'use strict';

	var MAX_SAFE_INTEGER = 9007199254740991;

	var reIsUint = /^(?:0|[1-9]\d*)$/;

	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPrototype = __webpack_require__(175),
	    nativeKeys = __webpack_require__(176);

	var objectProto = Object.prototype;

	var hasOwnProperty = objectProto.hasOwnProperty;

	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';

	var objectProto = Object.prototype;

	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(177);

	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";

	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = _withoutIndex;
	function _withoutIndex(iteratee) {
	    return function (value, index, callback) {
	        return iteratee(value, callback);
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = doLimit;
	function doLimit(fn, limit) {
	    return function (iterable, iteratee, callback) {
	        return fn(iterable, limit, iteratee, callback);
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(22);
	var _url = __webpack_require__(36);

	var useXdr = !!(window.XDomainRequest && !('withCredentials' in new XMLHttpRequest()));
	var tempAnchor = null;

	var STATUS_NONE = 0;
	var STATUS_OK = 200;
	var STATUS_EMPTY = 204;

	function Resource(name, url, options) {
	    EventEmitter.call(this);

	    options = options || {};

	    if (typeof name !== 'string' || typeof url !== 'string') {
	        throw new Error('Both name and url are required for constructing a resource.');
	    }

	    this.name = name;

	    this.url = url;

	    this.isDataUrl = this.url.indexOf('data:') === 0;

	    this.data = null;

	    this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;

	    this.loadType = options.loadType || this._determineLoadType();

	    this.xhrType = options.xhrType;

	    this.metadata = options.metadata || {};

	    this.error = null;

	    this.xhr = null;

	    this.isJson = false;

	    this.isXml = false;

	    this.isImage = false;

	    this.isAudio = false;

	    this.isVideo = false;

	    this.isComplete = false;

	    this.isLoading = false;

	    this._dequeue = null;

	    this._boundComplete = this.complete.bind(this);

	    this._boundOnError = this._onError.bind(this);

	    this._boundOnProgress = this._onProgress.bind(this);

	    this._boundXhrOnError = this._xhrOnError.bind(this);
	    this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
	    this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
	    this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this);
	}

	Resource.prototype = Object.create(EventEmitter.prototype);
	Resource.prototype.constructor = Resource;
	module.exports = Resource;

	Resource.prototype.complete = function () {
	    if (this.data && this.data.removeEventListener) {
	        this.data.removeEventListener('error', this._boundOnError, false);
	        this.data.removeEventListener('load', this._boundComplete, false);
	        this.data.removeEventListener('progress', this._boundOnProgress, false);
	        this.data.removeEventListener('canplaythrough', this._boundComplete, false);
	    }

	    if (this.xhr) {
	        if (this.xhr.removeEventListener) {
	            this.xhr.removeEventListener('error', this._boundXhrOnError, false);
	            this.xhr.removeEventListener('abort', this._boundXhrOnAbort, false);
	            this.xhr.removeEventListener('progress', this._boundOnProgress, false);
	            this.xhr.removeEventListener('load', this._boundXhrOnLoad, false);
	        } else {
	            this.xhr.onerror = null;
	            this.xhr.ontimeout = null;
	            this.xhr.onprogress = null;
	            this.xhr.onload = null;
	        }
	    }

	    if (this.isComplete) {
	        throw new Error('Complete called again for an already completed resource.');
	    }

	    this.isComplete = true;
	    this.isLoading = false;

	    this.emit('complete', this);
	};

	Resource.prototype.abort = function (message) {
	    if (this.error) {
	        return;
	    }

	    this.error = new Error(message);

	    if (this.xhr) {
	        this.xhr.abort();
	    } else if (this.xdr) {
	        this.xdr.abort();
	    } else if (this.data) {
	        if (typeof this.data.src !== 'undefined') {
	            this.data.src = '';
	        } else {
	                while (this.data.firstChild) {
	                    this.data.removeChild(this.data.firstChild);
	                }
	            }
	    }

	    this.complete();
	};

	Resource.prototype.load = function (cb) {
	    if (this.isLoading) {
	        return;
	    }

	    if (this.isComplete) {
	        if (cb) {
	            var self = this;

	            setTimeout(function () {
	                cb(self);
	            }, 1);
	        }

	        return;
	    } else if (cb) {
	        this.once('complete', cb);
	    }

	    this.isLoading = true;

	    this.emit('start', this);

	    if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
	        this.crossOrigin = this._determineCrossOrigin(this.url);
	    }

	    switch (this.loadType) {
	        case Resource.LOAD_TYPE.IMAGE:
	            this._loadElement('image');
	            break;

	        case Resource.LOAD_TYPE.AUDIO:
	            this._loadSourceElement('audio');
	            break;

	        case Resource.LOAD_TYPE.VIDEO:
	            this._loadSourceElement('video');
	            break;

	        case Resource.LOAD_TYPE.XHR:
	        default:
	            if (useXdr && this.crossOrigin) {
	                this._loadXdr();
	            } else {
	                this._loadXhr();
	            }
	            break;
	    }
	};

	Resource.prototype._loadElement = function (type) {
	    if (this.metadata.loadElement) {
	        this.data = this.metadata.loadElement;
	    } else if (type === 'image' && typeof window.Image !== 'undefined') {
	        this.data = new Image();
	    } else {
	        this.data = document.createElement(type);
	    }

	    if (this.crossOrigin) {
	        this.data.crossOrigin = this.crossOrigin;
	    }

	    if (!this.metadata.skipSource) {
	        this.data.src = this.url;
	    }

	    var typeName = 'is' + type[0].toUpperCase() + type.substring(1);

	    if (this[typeName] === false) {
	        this[typeName] = true;
	    }

	    this.data.addEventListener('error', this._boundOnError, false);
	    this.data.addEventListener('load', this._boundComplete, false);
	    this.data.addEventListener('progress', this._boundOnProgress, false);
	};

	Resource.prototype._loadSourceElement = function (type) {
	    if (this.metadata.loadElement) {
	        this.data = this.metadata.loadElement;
	    } else if (type === 'audio' && typeof window.Audio !== 'undefined') {
	        this.data = new Audio();
	    } else {
	        this.data = document.createElement(type);
	    }

	    if (this.data === null) {
	        this.abort('Unsupported element ' + type);

	        return;
	    }

	    if (!this.metadata.skipSource) {
	        if (navigator.isCocoonJS) {
	            this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
	        } else if (Array.isArray(this.url)) {
	            for (var i = 0; i < this.url.length; ++i) {
	                this.data.appendChild(this._createSource(type, this.url[i]));
	            }
	        } else {
	            this.data.appendChild(this._createSource(type, this.url));
	        }
	    }

	    this['is' + type[0].toUpperCase() + type.substring(1)] = true;

	    this.data.addEventListener('error', this._boundOnError, false);
	    this.data.addEventListener('load', this._boundComplete, false);
	    this.data.addEventListener('progress', this._boundOnProgress, false);
	    this.data.addEventListener('canplaythrough', this._boundComplete, false);

	    this.data.load();
	};

	Resource.prototype._loadXhr = function () {
	    if (typeof this.xhrType !== 'string') {
	        this.xhrType = this._determineXhrType();
	    }

	    var xhr = this.xhr = new XMLHttpRequest();

	    xhr.open('GET', this.url, true);

	    if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
	        xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT;
	    } else {
	        xhr.responseType = this.xhrType;
	    }

	    xhr.addEventListener('error', this._boundXhrOnError, false);
	    xhr.addEventListener('abort', this._boundXhrOnAbort, false);
	    xhr.addEventListener('progress', this._boundOnProgress, false);
	    xhr.addEventListener('load', this._boundXhrOnLoad, false);

	    xhr.send();
	};

	Resource.prototype._loadXdr = function () {
	    if (typeof this.xhrType !== 'string') {
	        this.xhrType = this._determineXhrType();
	    }

	    var xdr = this.xhr = new XDomainRequest();

	    xdr.timeout = 5000;

	    xdr.onerror = this._boundXhrOnError;
	    xdr.ontimeout = this._boundXdrOnTimeout;
	    xdr.onprogress = this._boundOnProgress;
	    xdr.onload = this._boundXhrOnLoad;

	    xdr.open('GET', this.url, true);

	    setTimeout(function () {
	        xdr.send();
	    }, 0);
	};

	Resource.prototype._createSource = function (type, url, mime) {
	    if (!mime) {
	        mime = type + '/' + url.substr(url.lastIndexOf('.') + 1);
	    }

	    var source = document.createElement('source');

	    source.src = url;
	    source.type = mime;

	    return source;
	};

	Resource.prototype._onError = function (event) {
	    this.abort('Failed to load element using ' + event.target.nodeName);
	};

	Resource.prototype._onProgress = function (event) {
	    if (event && event.lengthComputable) {
	        this.emit('progress', this, event.loaded / event.total);
	    }
	};

	Resource.prototype._xhrOnError = function () {
	    var xhr = this.xhr;

	    this.abort(reqType(xhr) + ' Request failed. Status: ' + xhr.status + ', text: "' + xhr.statusText + '"');
	};

	Resource.prototype._xhrOnAbort = function () {
	    this.abort(reqType(this.xhr) + ' Request was aborted by the user.');
	};

	Resource.prototype._xdrOnTimeout = function () {
	    this.abort(reqType(this.xhr) + ' Request timed out.');
	};

	Resource.prototype._xhrOnLoad = function () {
	    var xhr = this.xhr;
	    var status = typeof xhr.status === 'undefined' ? xhr.status : STATUS_OK;
	    if (status === STATUS_OK || status === STATUS_EMPTY || status === STATUS_NONE && xhr.responseText.length > 0) {
	        if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) {
	            this.data = xhr.responseText;
	        } else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) {
	                try {
	                    this.data = JSON.parse(xhr.responseText);
	                    this.isJson = true;
	                } catch (e) {
	                    this.abort('Error trying to parse loaded json:', e);

	                    return;
	                }
	            } else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
	                    try {
	                        if (window.DOMParser) {
	                            var domparser = new DOMParser();

	                            this.data = domparser.parseFromString(xhr.responseText, 'text/xml');
	                        } else {
	                            var div = document.createElement('div');

	                            div.innerHTML = xhr.responseText;
	                            this.data = div;
	                        }
	                        this.isXml = true;
	                    } catch (e) {
	                        this.abort('Error trying to parse loaded xml:', e);

	                        return;
	                    }
	                } else {
	                        this.data = xhr.response || xhr.responseText;
	                    }
	    } else {
	        this.abort('[' + xhr.status + ']' + xhr.statusText + ':' + xhr.responseURL);

	        return;
	    }

	    this.complete();
	};

	Resource.prototype._determineCrossOrigin = function (url, loc) {
	    if (url.indexOf('data:') === 0) {
	        return '';
	    }

	    loc = loc || window.location;

	    if (!tempAnchor) {
	        tempAnchor = document.createElement('a');
	    }

	    tempAnchor.href = url;
	    url = _url.parse(tempAnchor.href);

	    var samePort = !url.port && loc.port === '' || url.port === loc.port;

	    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
	        return 'anonymous';
	    }

	    return '';
	};

	Resource.prototype._determineXhrType = function () {
	    return Resource._xhrTypeMap[this._getExtension()] || Resource.XHR_RESPONSE_TYPE.TEXT;
	};

	Resource.prototype._determineLoadType = function () {
	    return Resource._loadTypeMap[this._getExtension()] || Resource.LOAD_TYPE.XHR;
	};

	Resource.prototype._getExtension = function () {
	    var url = this.url;
	    var ext = '';

	    if (this.isDataUrl) {
	        var slashIndex = url.indexOf('/');

	        ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
	    } else {
	        var queryStart = url.indexOf('?');

	        if (queryStart !== -1) {
	            url = url.substring(0, queryStart);
	        }

	        ext = url.substring(url.lastIndexOf('.') + 1);
	    }

	    return ext.toLowerCase();
	};

	Resource.prototype._getMimeFromXhrType = function (type) {
	    switch (type) {
	        case Resource.XHR_RESPONSE_TYPE.BUFFER:
	            return 'application/octet-binary';

	        case Resource.XHR_RESPONSE_TYPE.BLOB:
	            return 'application/blob';

	        case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
	            return 'application/xml';

	        case Resource.XHR_RESPONSE_TYPE.JSON:
	            return 'application/json';

	        case Resource.XHR_RESPONSE_TYPE.DEFAULT:
	        case Resource.XHR_RESPONSE_TYPE.TEXT:
	        default:
	            return 'text/plain';

	    }
	};

	function reqType(xhr) {
	    return xhr.toString().replace('object ', '');
	}

	Resource.LOAD_TYPE = {
	    XHR: 1,

	    IMAGE: 2,

	    AUDIO: 3,

	    VIDEO: 4
	};

	Resource.XHR_RESPONSE_TYPE = {
	    DEFAULT: 'text',

	    BUFFER: 'arraybuffer',

	    BLOB: 'blob',

	    DOCUMENT: 'document',

	    JSON: 'json',

	    TEXT: 'text'
	};

	Resource._loadTypeMap = {
	    gif: Resource.LOAD_TYPE.IMAGE,
	    png: Resource.LOAD_TYPE.IMAGE,
	    bmp: Resource.LOAD_TYPE.IMAGE,
	    jpg: Resource.LOAD_TYPE.IMAGE,
	    jpeg: Resource.LOAD_TYPE.IMAGE,
	    tif: Resource.LOAD_TYPE.IMAGE,
	    tiff: Resource.LOAD_TYPE.IMAGE,
	    webp: Resource.LOAD_TYPE.IMAGE,
	    tga: Resource.LOAD_TYPE.IMAGE,
	    'svg+xml': Resource.LOAD_TYPE.IMAGE
	};

	Resource._xhrTypeMap = {
	    xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
	    svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,

	    gif: Resource.XHR_RESPONSE_TYPE.BLOB,
	    png: Resource.XHR_RESPONSE_TYPE.BLOB,
	    bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
	    jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
	    jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tif: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
	    webp: Resource.XHR_RESPONSE_TYPE.BLOB,
	    tga: Resource.XHR_RESPONSE_TYPE.BLOB,

	    json: Resource.XHR_RESPONSE_TYPE.JSON,

	    text: Resource.XHR_RESPONSE_TYPE.TEXT,
	    txt: Resource.XHR_RESPONSE_TYPE.TEXT
	};

	Resource.setExtensionLoadType = function (extname, loadType) {
	    setExtMap(Resource._loadTypeMap, extname, loadType);
	};

	Resource.setExtensionXhrType = function (extname, xhrType) {
	    setExtMap(Resource._xhrTypeMap, extname, xhrType);
	};

	function setExtMap(map, extname, val) {
	    if (extname && extname.indexOf('.') === 0) {
	        extname = extname.substring(1);
	    }

	    if (!extname) {
	        return;
	    }

	    map[extname] = val;
	}

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	var cache = {};

	module.exports = function () {
	    return function (resource, next) {
	        if (cache[resource.url]) {
	            resource.data = cache[resource.url];
	            resource.complete();
	        } else {
	                resource.once('complete', function () {
	                    cache[this.url] = this.data;
	                });
	            }

	        next();
	    };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Resource = __webpack_require__(180);
	var b64 = __webpack_require__(183);

	var Url = window.URL || window.webkitURL;

	module.exports = function () {
	    return function (resource, next) {
	        if (!resource.data) {
	            next();

	            return;
	        }

	        if (resource.xhr && resource.xhrType === Resource.XHR_RESPONSE_TYPE.BLOB) {
	            if (!window.Blob || typeof resource.data === 'string') {
	                var type = resource.xhr.getResponseHeader('content-type');

	                if (type && type.indexOf('image') === 0) {
	                    resource.data = new Image();
	                    resource.data.src = 'data:' + type + ';base64,' + b64.encodeBinary(resource.xhr.responseText);

	                    resource.isImage = true;

	                    resource.data.onload = function () {
	                        resource.data.onload = null;

	                        next();
	                    };

	                    return;
	                }
	            } else if (resource.data.type.indexOf('image') === 0) {
	                    var src = Url.createObjectURL(resource.data);

	                    resource.blob = resource.data;
	                    resource.data = new Image();
	                    resource.data.src = src;

	                    resource.isImage = true;

	                    resource.data.onload = function () {
	                        Url.revokeObjectURL(src);
	                        resource.data.onload = null;

	                        next();
	                    };

	                    return;
	                }
	        }

	        next();
	    };
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	
	'use strict';

	module.exports = {
	    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

	    encodeBinary: function encodeBinary(input) {
	        var output = '';
	        var bytebuffer;
	        var encodedCharIndexes = new Array(4);
	        var inx = 0;
	        var jnx = 0;
	        var paddingBytes = 0;

	        while (inx < input.length) {
	            bytebuffer = new Array(3);

	            for (jnx = 0; jnx < bytebuffer.length; jnx++) {
	                if (inx < input.length) {
	                    bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
	                } else {
	                    bytebuffer[jnx] = 0;
	                }
	            }

	            encodedCharIndexes[0] = bytebuffer[0] >> 2;

	            encodedCharIndexes[1] = (bytebuffer[0] & 0x3) << 4 | bytebuffer[1] >> 4;

	            encodedCharIndexes[2] = (bytebuffer[1] & 0x0f) << 2 | bytebuffer[2] >> 6;

	            encodedCharIndexes[3] = bytebuffer[2] & 0x3f;

	            paddingBytes = inx - (input.length - 1);
	            switch (paddingBytes) {
	                case 2:
	                    encodedCharIndexes[3] = 64;
	                    encodedCharIndexes[2] = 64;
	                    break;

	                case 1:
	                    encodedCharIndexes[3] = 64;
	                    break;

	                default:
	                    break;}

	            for (jnx = 0; jnx < encodedCharIndexes.length; jnx++) {
	                output += this._keyStr.charAt(encodedCharIndexes[jnx]);
	            }
	        }

	        return output;
	    }
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	module.exports = function () {
	    return function (resource, next) {
	        if (resource.data && resource.isImage) {
	            var baseTexture = new core.BaseTexture(resource.data, null, core.utils.getResolutionOfUrl(resource.url));
	            baseTexture.imageUrl = resource.url;
	            resource.texture = new core.Texture(baseTexture);

	            core.utils.BaseTextureCache[resource.url] = baseTexture;
	            core.utils.TextureCache[resource.url] = resource.texture;
	        }

	        next();
	    };
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Resource = __webpack_require__(138).Resource,
	    path = __webpack_require__(186),
	    core = __webpack_require__(7);

	var BATCH_SIZE = 1000;

	module.exports = function () {
	    return function (resource, next) {
	        var resourcePath;
	        var imageResourceName = resource.name + '_image';

	        if (!resource.data || !resource.isJson || !resource.data.frames || this.resources[imageResourceName]) {
	            return next();
	        }

	        var loadOptions = {
	            crossOrigin: resource.crossOrigin,
	            loadType: Resource.LOAD_TYPE.IMAGE,
	            metadata: resource.metadata.imageMetadata
	        };

	        if (resource.isDataUrl) {
	            resourcePath = resource.data.meta.image;
	        } else {
	            resourcePath = path.dirname(resource.url.replace(this.baseUrl, '')) + '/' + resource.data.meta.image;
	        }

	        this.add(imageResourceName, resourcePath, loadOptions, function (res) {
	            resource.textures = {};

	            var frames = resource.data.frames;
	            var frameKeys = Object.keys(frames);
	            var resolution = core.utils.getResolutionOfUrl(resource.url);
	            var batchIndex = 0;

	            function processFrames(initialFrameIndex, maxFrames) {
	                var frameIndex = initialFrameIndex;

	                while (frameIndex - initialFrameIndex < maxFrames && frameIndex < frameKeys.length) {
	                    var i = frameKeys[frameIndex];
	                    var rect = frames[i].frame;

	                    if (rect) {

	                        var frame = null;
	                        var trim = null;
	                        var orig = new core.Rectangle(0, 0, frames[i].sourceSize.w / resolution, frames[i].sourceSize.h / resolution);

	                        if (frames[i].rotated) {
	                            frame = new core.Rectangle(rect.x / resolution, rect.y / resolution, rect.h / resolution, rect.w / resolution);
	                        } else {
	                            frame = new core.Rectangle(rect.x / resolution, rect.y / resolution, rect.w / resolution, rect.h / resolution);
	                        }

	                        if (frames[i].trimmed) {
	                            trim = new core.Rectangle(frames[i].spriteSourceSize.x / resolution, frames[i].spriteSourceSize.y / resolution, frames[i].spriteSourceSize.w / resolution, frames[i].spriteSourceSize.h / resolution);
	                        }

	                        resource.textures[i] = new core.Texture(res.texture.baseTexture, frame, orig, trim, frames[i].rotated ? 2 : 0);

	                        core.utils.TextureCache[i] = resource.textures[i];
	                    }

	                    frameIndex++;
	                }
	            }

	            function shouldProcessNextBatch() {
	                return batchIndex * BATCH_SIZE < frameKeys.length;
	            }

	            function processNextBatch(done) {
	                processFrames(batchIndex * BATCH_SIZE, BATCH_SIZE);
	                batchIndex++;
	                setTimeout(done, 0);
	            }

	            function iteration() {
	                processNextBatch(function () {
	                    if (shouldProcessNextBatch()) {
	                        iteration();
	                    } else {
	                        next();
	                    }
	                });
	            }

	            if (frameKeys.length <= BATCH_SIZE) {
	                processFrames(0, BATCH_SIZE);
	                next();
	            } else {
	                iteration();
	            }
	        });
	    };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	function normalizeArray(parts, allowAboveRoot) {
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function splitPath(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	exports.resolve = function () {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = i >= 0 ? arguments[i] : process.cwd();

	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
	};

	exports.normalize = function (path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  path = normalizeArray(filter(path.split('/'), function (p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	exports.isAbsolute = function (path) {
	  return path.charAt(0) === '/';
	};

	exports.join = function () {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function (p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};

	exports.relative = function (from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function (path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    return '.';
	  }

	  if (dir) {
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};

	exports.basename = function (path, ext) {
	  var f = splitPath(path)[2];

	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};

	exports.extname = function (path) {
	  return splitPath(path)[3];
	};

	function filter(xs, f) {
	  if (xs.filter) return xs.filter(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    if (f(xs[i], i, xs)) res.push(xs[i]);
	  }
	  return res;
	}

	var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
	  return str.substr(start, len);
	} : function (str, start, len) {
	  if (start < 0) start = str.length + start;
	  return str.substr(start, len);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(157)))

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Resource = __webpack_require__(138).Resource,
	    core = __webpack_require__(7),
	    extras = __webpack_require__(112),
	    path = __webpack_require__(186);

	function parse(resource, texture) {
	    var data = {};
	    var info = resource.data.getElementsByTagName('info')[0];
	    var common = resource.data.getElementsByTagName('common')[0];

	    data.font = info.getAttribute('face');
	    data.size = parseInt(info.getAttribute('size'), 10);
	    data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
	    data.chars = {};

	    var letters = resource.data.getElementsByTagName('char');

	    for (var i = 0; i < letters.length; i++) {
	        var charCode = parseInt(letters[i].getAttribute('id'), 10);

	        var textureRect = new core.Rectangle(parseInt(letters[i].getAttribute('x'), 10) + texture.frame.x, parseInt(letters[i].getAttribute('y'), 10) + texture.frame.y, parseInt(letters[i].getAttribute('width'), 10), parseInt(letters[i].getAttribute('height'), 10));

	        data.chars[charCode] = {
	            xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
	            yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
	            xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
	            kerning: {},
	            texture: new core.Texture(texture.baseTexture, textureRect)

	        };
	    }

	    var kernings = resource.data.getElementsByTagName('kerning');
	    for (i = 0; i < kernings.length; i++) {
	        var first = parseInt(kernings[i].getAttribute('first'), 10);
	        var second = parseInt(kernings[i].getAttribute('second'), 10);
	        var amount = parseInt(kernings[i].getAttribute('amount'), 10);

	        if (data.chars[second]) {
	            data.chars[second].kerning[first] = amount;
	        }
	    }

	    resource.bitmapFont = data;

	    extras.BitmapText.fonts[data.font] = data;
	}

	module.exports = function () {
	    return function (resource, next) {
	        if (!resource.data || !resource.isXml) {
	            return next();
	        }

	        if (resource.data.getElementsByTagName('page').length === 0 || resource.data.getElementsByTagName('info').length === 0 || resource.data.getElementsByTagName('info')[0].getAttribute('face') === null) {
	            return next();
	        }

	        var xmlUrl = !resource.isDataUrl ? path.dirname(resource.url) : '';

	        if (resource.isDataUrl) {
	            if (xmlUrl === '.') {
	                xmlUrl = '';
	            }

	            if (this.baseUrl && xmlUrl) {
	                if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/') {
	                    xmlUrl += '/';
	                }

	                xmlUrl = xmlUrl.replace(this.baseUrl, '');
	            }
	        }

	        if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/') {
	            xmlUrl += '/';
	        }

	        var textureUrl = xmlUrl + resource.data.getElementsByTagName('page')[0].getAttribute('file');
	        if (core.utils.TextureCache[textureUrl]) {
	            parse(resource, core.utils.TextureCache[textureUrl]);
	            next();
	        } else {
	            var loadOptions = {
	                crossOrigin: resource.crossOrigin,
	                loadType: Resource.LOAD_TYPE.IMAGE,
	                metadata: resource.metadata.imageMetadata
	            };

	            this.add(resource.name + '_image', textureUrl, loadOptions, function (res) {
	                parse(resource, res.texture);
	                next();
	            });
	        }
	    };
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI extras library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  Mesh: __webpack_require__(189),
	  Plane: __webpack_require__(191),
	  NineSlicePlane: __webpack_require__(192),
	  Rope: __webpack_require__(193),
	  MeshShader: __webpack_require__(190)
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    glCore = __webpack_require__(64),
	    Shader = __webpack_require__(190),
	    tempPoint = new core.Point(),
	    tempPolygon = new core.Polygon();

	function Mesh(texture, vertices, uvs, indices, drawMode) {
	    core.Container.call(this);

	    this._texture = null;

	    this.uvs = uvs || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

	    this.vertices = vertices || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);

	    this.indices = indices || new Uint16Array([0, 1, 3, 2]);

	    this.dirty = 0;
	    this.indexDirty = 0;

	    this.blendMode = core.BLEND_MODES.NORMAL;

	    this.canvasPadding = 0;

	    this.drawMode = drawMode || Mesh.DRAW_MODES.TRIANGLE_MESH;

	    this.texture = texture;

	    this.shader = null;

	    this.tintRgb = new Float32Array([1, 1, 1]);

	    this._glDatas = [];
	}

	Mesh.prototype = Object.create(core.Container.prototype);
	Mesh.prototype.constructor = Mesh;
	module.exports = Mesh;

	Object.defineProperties(Mesh.prototype, {
	    texture: {
	        get: function get() {
	            return this._texture;
	        },
	        set: function set(value) {
	            if (this._texture === value) {
	                return;
	            }

	            this._texture = value;

	            if (value) {
	                if (value.baseTexture.hasLoaded) {
	                    this._onTextureUpdate();
	                } else {
	                    value.once('update', this._onTextureUpdate, this);
	                }
	            }
	        }
	    },

	    tint: {
	        get: function get() {
	            return core.utils.rgb2hex(this.tintRgb);
	        },
	        set: function set(value) {
	            this.tintRgb = core.utils.hex2rgb(value, this.tintRgb);
	        }
	    }
	});

	Mesh.prototype._renderWebGL = function (renderer) {
	    renderer.flush();

	    var gl = renderer.gl;
	    var glData = this._glDatas[renderer.CONTEXT_UID];

	    if (!glData) {
	        glData = {
	            shader: new Shader(gl),
	            vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, this.vertices, gl.STREAM_DRAW),
	            uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, this.uvs, gl.STREAM_DRAW),
	            indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW),

	            vao: new glCore.VertexArrayObject(gl),
	            dirty: this.dirty,
	            indexDirty: this.indexDirty
	        };

	        glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0);

	        this._glDatas[renderer.CONTEXT_UID] = glData;
	    }

	    if (this.dirty !== glData.dirty) {
	        glData.dirty = this.dirty;
	        glData.uvBuffer.upload();
	    }

	    if (this.indexDirty !== glData.indexDirty) {
	        glData.indexDirty = this.indexDirty;
	        glData.indexBuffer.upload();
	    }

	    glData.vertexBuffer.upload();

	    renderer.bindShader(glData.shader);
	    renderer.bindTexture(this._texture, 0);
	    renderer.state.setBlendMode(this.blendMode);

	    glData.shader.uniforms.translationMatrix = this.worldTransform.toArray(true);
	    glData.shader.uniforms.alpha = this.worldAlpha;
	    glData.shader.uniforms.tint = this.tintRgb;

	    var drawMode = this.drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH ? gl.TRIANGLE_STRIP : gl.TRIANGLES;

	    glData.vao.bind().draw(drawMode, this.indices.length).unbind();
	};

	Mesh.prototype._renderCanvas = function (renderer) {
	    var context = renderer.context;

	    var transform = this.worldTransform;
	    var res = renderer.resolution;

	    if (renderer.roundPixels) {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
	    } else {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
	    }

	    if (this.drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH) {
	        this._renderCanvasTriangleMesh(context);
	    } else {
	        this._renderCanvasTriangles(context);
	    }
	};

	Mesh.prototype._renderCanvasTriangleMesh = function (context) {
	    var vertices = this.vertices;
	    var uvs = this.uvs;

	    var length = vertices.length / 2;


	    for (var i = 0; i < length - 2; i++) {
	        var index = i * 2;
	        this._renderCanvasDrawTriangle(context, vertices, uvs, index, index + 2, index + 4);
	    }
	};

	Mesh.prototype._renderCanvasTriangles = function (context) {
	    var vertices = this.vertices;
	    var uvs = this.uvs;
	    var indices = this.indices;

	    var length = indices.length;


	    for (var i = 0; i < length; i += 3) {
	        var index0 = indices[i] * 2,
	            index1 = indices[i + 1] * 2,
	            index2 = indices[i + 2] * 2;
	        this._renderCanvasDrawTriangle(context, vertices, uvs, index0, index1, index2);
	    }
	};

	Mesh.prototype._renderCanvasDrawTriangle = function (context, vertices, uvs, index0, index1, index2) {
	    var base = this._texture.baseTexture;
	    var textureSource = base.source;
	    var textureWidth = base.width;
	    var textureHeight = base.height;

	    var x0 = vertices[index0],
	        x1 = vertices[index1],
	        x2 = vertices[index2];
	    var y0 = vertices[index0 + 1],
	        y1 = vertices[index1 + 1],
	        y2 = vertices[index2 + 1];

	    var u0 = uvs[index0] * base.width,
	        u1 = uvs[index1] * base.width,
	        u2 = uvs[index2] * base.width;
	    var v0 = uvs[index0 + 1] * base.height,
	        v1 = uvs[index1 + 1] * base.height,
	        v2 = uvs[index2 + 1] * base.height;

	    if (this.canvasPadding > 0) {
	        var paddingX = this.canvasPadding / this.worldTransform.a;
	        var paddingY = this.canvasPadding / this.worldTransform.d;
	        var centerX = (x0 + x1 + x2) / 3;
	        var centerY = (y0 + y1 + y2) / 3;

	        var normX = x0 - centerX;
	        var normY = y0 - centerY;

	        var dist = Math.sqrt(normX * normX + normY * normY);
	        x0 = centerX + normX / dist * (dist + paddingX);
	        y0 = centerY + normY / dist * (dist + paddingY);

	        normX = x1 - centerX;
	        normY = y1 - centerY;

	        dist = Math.sqrt(normX * normX + normY * normY);
	        x1 = centerX + normX / dist * (dist + paddingX);
	        y1 = centerY + normY / dist * (dist + paddingY);

	        normX = x2 - centerX;
	        normY = y2 - centerY;

	        dist = Math.sqrt(normX * normX + normY * normY);
	        x2 = centerX + normX / dist * (dist + paddingX);
	        y2 = centerY + normY / dist * (dist + paddingY);
	    }

	    context.save();
	    context.beginPath();

	    context.moveTo(x0, y0);
	    context.lineTo(x1, y1);
	    context.lineTo(x2, y2);

	    context.closePath();

	    context.clip();

	    var delta = u0 * v1 + v0 * u2 + u1 * v2 - v1 * u2 - v0 * u1 - u0 * v2;
	    var deltaA = x0 * v1 + v0 * x2 + x1 * v2 - v1 * x2 - v0 * x1 - x0 * v2;
	    var deltaB = u0 * x1 + x0 * u2 + u1 * x2 - x1 * u2 - x0 * u1 - u0 * x2;
	    var deltaC = u0 * v1 * x2 + v0 * x1 * u2 + x0 * u1 * v2 - x0 * v1 * u2 - v0 * u1 * x2 - u0 * x1 * v2;
	    var deltaD = y0 * v1 + v0 * y2 + y1 * v2 - v1 * y2 - v0 * y1 - y0 * v2;
	    var deltaE = u0 * y1 + y0 * u2 + u1 * y2 - y1 * u2 - y0 * u1 - u0 * y2;
	    var deltaF = u0 * v1 * y2 + v0 * y1 * u2 + y0 * u1 * v2 - y0 * v1 * u2 - v0 * u1 * y2 - u0 * y1 * v2;

	    context.transform(deltaA / delta, deltaD / delta, deltaB / delta, deltaE / delta, deltaC / delta, deltaF / delta);

	    context.drawImage(textureSource, 0, 0, textureWidth * base.resolution, textureHeight * base.resolution, 0, 0, textureWidth, textureHeight);
	    context.restore();
	};

	Mesh.prototype.renderMeshFlat = function (Mesh) {
	    var context = this.context;
	    var vertices = Mesh.vertices;

	    var length = vertices.length / 2;


	    context.beginPath();
	    for (var i = 1; i < length - 2; i++) {
	        var index = i * 2;

	        var x0 = vertices[index],
	            x1 = vertices[index + 2],
	            x2 = vertices[index + 4];
	        var y0 = vertices[index + 1],
	            y1 = vertices[index + 3],
	            y2 = vertices[index + 5];

	        context.moveTo(x0, y0);
	        context.lineTo(x1, y1);
	        context.lineTo(x2, y2);
	    }

	    context.fillStyle = '#FF0000';
	    context.fill();
	    context.closePath();
	};

	Mesh.prototype._onTextureUpdate = function () {};

	Mesh.prototype._calculateBounds = function () {
	    this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
	};

	Mesh.prototype.containsPoint = function (point) {
	    if (!this.getBounds().contains(point.x, point.y)) {
	        return false;
	    }
	    this.worldTransform.applyInverse(point, tempPoint);

	    var vertices = this.vertices;
	    var points = tempPolygon.points;

	    var indices = this.indices;
	    var len = this.indices.length;
	    var step = this.drawMode === Mesh.DRAW_MODES.TRIANGLES ? 3 : 1;
	    for (var i = 0; i + 2 < len; i += step) {
	        var ind0 = indices[i] * 2,
	            ind1 = indices[i + 1] * 2,
	            ind2 = indices[i + 2] * 2;
	        points[0] = vertices[ind0];
	        points[1] = vertices[ind0 + 1];
	        points[2] = vertices[ind1];
	        points[3] = vertices[ind1 + 1];
	        points[4] = vertices[ind2];
	        points[5] = vertices[ind2 + 1];
	        if (tempPolygon.contains(tempPoint.x, tempPoint.y)) {
	            return true;
	        }
	    }
	    return false;
	};

	Mesh.DRAW_MODES = {
	    TRIANGLE_MESH: 0,
	    TRIANGLES: 1
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Shader = __webpack_require__(86);

	function MeshShader(gl) {
	    Shader.call(this, gl, ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '}'].join('\n'), ['varying vec2 vTextureCoord;', 'uniform float alpha;', 'uniform vec3 tint;', 'uniform sampler2D uSampler;', 'void main(void){', '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);', '}'].join('\n'));
	}

	MeshShader.prototype = Object.create(Shader.prototype);
	MeshShader.prototype.constructor = MeshShader;
	module.exports = MeshShader;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Mesh = __webpack_require__(189);

	function Plane(texture, verticesX, verticesY) {
	    Mesh.call(this, texture);

	    this._ready = true;

	    this.verticesX = verticesX || 10;
	    this.verticesY = verticesY || 10;

	    this.drawMode = Mesh.DRAW_MODES.TRIANGLES;
	    this.refresh();
	}

	Plane.prototype = Object.create(Mesh.prototype);
	Plane.prototype.constructor = Plane;
	module.exports = Plane;

	Plane.prototype.refresh = function () {
	    var total = this.verticesX * this.verticesY;
	    var verts = [];
	    var colors = [];
	    var uvs = [];
	    var indices = [];
	    var texture = this.texture;

	    var segmentsX = this.verticesX - 1;
	    var segmentsY = this.verticesY - 1;
	    var i = 0;

	    var sizeX = texture.width / segmentsX;
	    var sizeY = texture.height / segmentsY;

	    for (i = 0; i < total; i++) {

	        var x = i % this.verticesX;
	        var y = i / this.verticesX | 0;

	        verts.push(x * sizeX, y * sizeY);

	        uvs.push(texture._uvs.x0 + (texture._uvs.x1 - texture._uvs.x0) * (x / (this.verticesX - 1)), texture._uvs.y0 + (texture._uvs.y3 - texture._uvs.y0) * (y / (this.verticesY - 1)));
	    }

	    var totalSub = segmentsX * segmentsY;

	    for (i = 0; i < totalSub; i++) {

	        var xpos = i % segmentsX;
	        var ypos = i / segmentsX | 0;

	        var value = ypos * this.verticesX + xpos;
	        var value2 = ypos * this.verticesX + xpos + 1;
	        var value3 = (ypos + 1) * this.verticesX + xpos;
	        var value4 = (ypos + 1) * this.verticesX + xpos + 1;

	        indices.push(value, value2, value3);
	        indices.push(value2, value4, value3);
	    }

	    this.vertices = new Float32Array(verts);
	    this.uvs = new Float32Array(uvs);
	    this.colors = new Float32Array(colors);
	    this.indices = new Uint16Array(indices);

	    this.indexDirty = true;
	};

	Plane.prototype._onTextureUpdate = function () {
	    Mesh.prototype._onTextureUpdate.call(this);

	    if (this._ready) {
	        this.refresh();
	    }
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DEFAULT_BORDER_SIZE = 10;

	var Plane = __webpack_require__(191);

	function NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight) {
	    Plane.call(this, texture, 4, 4);

	    var uvs = this.uvs;

	    uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
	    uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;

	    this._origWidth = texture.width;
	    this._origHeight = texture.height;
	    this._uvw = 1 / this._origWidth;
	    this._uvh = 1 / this._origHeight;

	    this.width = texture.width;

	    this.height = texture.height;

	    uvs[2] = uvs[10] = uvs[18] = uvs[26] = this._uvw * leftWidth;
	    uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - this._uvw * rightWidth;
	    uvs[9] = uvs[11] = uvs[13] = uvs[15] = this._uvh * topHeight;
	    uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - this._uvh * bottomHeight;

	    this.leftWidth = typeof leftWidth !== 'undefined' ? leftWidth : DEFAULT_BORDER_SIZE;

	    this.rightWidth = typeof rightWidth !== 'undefined' ? rightWidth : DEFAULT_BORDER_SIZE;

	    this.topHeight = typeof topHeight !== 'undefined' ? topHeight : DEFAULT_BORDER_SIZE;

	    this.bottomHeight = typeof bottomHeight !== 'undefined' ? bottomHeight : DEFAULT_BORDER_SIZE;
	}

	NineSlicePlane.prototype = Object.create(Plane.prototype);
	NineSlicePlane.prototype.constructor = NineSlicePlane;
	module.exports = NineSlicePlane;

	Object.defineProperties(NineSlicePlane.prototype, {
	    width: {
	        get: function get() {
	            return this._width;
	        },
	        set: function set(value) {
	            this._width = value;
	            this.updateVerticalVertices();
	        }
	    },

	    height: {
	        get: function get() {
	            return this._height;
	        },
	        set: function set(value) {
	            this._height = value;
	            this.updateHorizontalVertices();
	        }
	    },

	    leftWidth: {
	        get: function get() {
	            return this._leftWidth;
	        },
	        set: function set(value) {
	            this._leftWidth = value;
	            var uvs = this.uvs;
	            var vertices = this.vertices;
	            uvs[2] = uvs[10] = uvs[18] = uvs[26] = this._uvw * value;
	            vertices[2] = vertices[10] = vertices[18] = vertices[26] = value;
	            this.dirty = true;
	        }
	    },

	    rightWidth: {
	        get: function get() {
	            return this._rightWidth;
	        },
	        set: function set(value) {
	            this._rightWidth = value;
	            var uvs = this.uvs;
	            var vertices = this.vertices;
	            uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - this._uvw * value;
	            vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - value;
	            this.dirty = true;
	        }
	    },

	    topHeight: {
	        get: function get() {
	            return this._topHeight;
	        },
	        set: function set(value) {
	            this._topHeight = value;
	            var uvs = this.uvs;
	            var vertices = this.vertices;
	            uvs[9] = uvs[11] = uvs[13] = uvs[15] = this._uvh * value;
	            vertices[9] = vertices[11] = vertices[13] = vertices[15] = value;
	            this.dirty = true;
	        }
	    },

	    bottomHeight: {
	        get: function get() {
	            return this._bottomHeight;
	        },
	        set: function set(value) {
	            this._bottomHeight = value;
	            var uvs = this.uvs;
	            var vertices = this.vertices;
	            uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - this._uvh * value;
	            vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - value;
	            this.dirty = true;
	        }
	    }
	});

	NineSlicePlane.prototype.updateHorizontalVertices = function () {
	    var vertices = this.vertices;
	    vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight;
	    vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - this._bottomHeight;
	    vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
	};

	NineSlicePlane.prototype.updateVerticalVertices = function () {
	    var vertices = this.vertices;
	    vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth;
	    vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - this._rightWidth;
	    vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
	};

	NineSlicePlane.prototype._renderCanvas = function (renderer) {
	    var context = renderer.context;
	    context.globalAlpha = this.worldAlpha;

	    var transform = this.worldTransform;
	    var res = renderer.resolution;

	    if (renderer.roundPixels) {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
	    } else {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
	    }

	    var base = this._texture.baseTexture;
	    var textureSource = base.source;
	    var w = base.width;
	    var h = base.height;

	    this.drawSegment(context, textureSource, w, h, 0, 1, 10, 11);
	    this.drawSegment(context, textureSource, w, h, 2, 3, 12, 13);
	    this.drawSegment(context, textureSource, w, h, 4, 5, 14, 15);
	    this.drawSegment(context, textureSource, w, h, 8, 9, 18, 19);
	    this.drawSegment(context, textureSource, w, h, 10, 11, 20, 21);
	    this.drawSegment(context, textureSource, w, h, 12, 13, 22, 23);
	    this.drawSegment(context, textureSource, w, h, 16, 17, 26, 27);
	    this.drawSegment(context, textureSource, w, h, 18, 19, 28, 29);
	    this.drawSegment(context, textureSource, w, h, 20, 21, 30, 31);
	};

	NineSlicePlane.prototype.drawSegment = function (context, textureSource, w, h, x1, y1, x2, y2) {
	    var uvs = this.uvs;
	    var vertices = this.vertices;

	    var sw = (uvs[x2] - uvs[x1]) * w;
	    var sh = (uvs[y2] - uvs[y1]) * h;
	    var dw = vertices[x2] - vertices[x1];
	    var dh = vertices[y2] - vertices[y1];

	    if (sw < 1) {
	        sw = 1;
	    }
	    if (sh < 1) {
	        sh = 1;
	    }

	    if (dw < 1) {
	        dw = 1;
	    }
	    if (dh < 1) {
	        dh = 1;
	    }
	    context.drawImage(textureSource, uvs[x1] * w, uvs[y1] * h, sw, sh, vertices[x1], vertices[y1], dw, dh);
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Mesh = __webpack_require__(189);
	var core = __webpack_require__(7);

	function Rope(texture, points) {
	    Mesh.call(this, texture);

	    this.points = points;

	    this.vertices = new Float32Array(points.length * 4);

	    this.uvs = new Float32Array(points.length * 4);

	    this.colors = new Float32Array(points.length * 2);

	    this.indices = new Uint16Array(points.length * 2);

	    this._ready = true;

	    this.refresh();
	}

	Rope.prototype = Object.create(Mesh.prototype);
	Rope.prototype.constructor = Rope;
	module.exports = Rope;

	Rope.prototype.refresh = function () {
	    var points = this.points;

	    if (points.length < 1 || !this._texture._uvs) {
	        return;
	    }

	    var uvs = this.uvs;

	    var indices = this.indices;
	    var colors = this.colors;

	    var textureUvs = this._texture._uvs;
	    var offset = new core.Point(textureUvs.x0, textureUvs.y0);
	    var factor = new core.Point(textureUvs.x2 - textureUvs.x0, textureUvs.y2 - textureUvs.y0);

	    uvs[0] = 0 + offset.x;
	    uvs[1] = 0 + offset.y;
	    uvs[2] = 0 + offset.x;
	    uvs[3] = 1 * factor.y + offset.y;

	    colors[0] = 1;
	    colors[1] = 1;

	    indices[0] = 0;
	    indices[1] = 1;

	    var total = points.length,
	        point,
	        index,
	        amount;

	    for (var i = 1; i < total; i++) {
	        point = points[i];
	        index = i * 4;

	        amount = i / (total - 1);

	        uvs[index] = amount * factor.x + offset.x;
	        uvs[index + 1] = 0 + offset.y;

	        uvs[index + 2] = amount * factor.x + offset.x;
	        uvs[index + 3] = 1 * factor.y + offset.y;

	        index = i * 2;
	        colors[index] = 1;
	        colors[index + 1] = 1;

	        index = i * 2;
	        indices[index] = index;
	        indices[index + 1] = index + 1;
	    }

	    this.dirty = true;
	    this.indexDirty = true;
	};

	Rope.prototype._onTextureUpdate = function () {

	    Mesh.prototype._onTextureUpdate.call(this);

	    if (this._ready) {
	        this.refresh();
	    }
	};

	Rope.prototype.updateTransform = function () {
	    var points = this.points;

	    if (points.length < 1) {
	        return;
	    }

	    var lastPoint = points[0];
	    var nextPoint;
	    var perpX = 0;
	    var perpY = 0;

	    var vertices = this.vertices;
	    var total = points.length,
	        point,
	        index,
	        ratio,
	        perpLength,
	        num;

	    for (var i = 0; i < total; i++) {
	        point = points[i];
	        index = i * 4;

	        if (i < points.length - 1) {
	            nextPoint = points[i + 1];
	        } else {
	            nextPoint = point;
	        }

	        perpY = -(nextPoint.x - lastPoint.x);
	        perpX = nextPoint.y - lastPoint.y;

	        ratio = (1 - i / (total - 1)) * 10;

	        if (ratio > 1) {
	            ratio = 1;
	        }

	        perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
	        num = this._texture.height / 2;
	        perpX /= perpLength;
	        perpY /= perpLength;

	        perpX *= num;
	        perpY *= num;

	        vertices[index] = point.x + perpX;
	        vertices[index + 1] = point.y + perpY;
	        vertices[index + 2] = point.x - perpX;
	        vertices[index + 3] = point.y - perpY;

	        lastPoint = point;
	    }

	    this.containerUpdateTransform();
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI extras library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  ParticleContainer: __webpack_require__(195),
	  ParticleRenderer: __webpack_require__(196)
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	function ParticleContainer(maxSize, properties, batchSize) {
	    core.Container.call(this);

	    batchSize = batchSize || 15000;
	    maxSize = maxSize || 15000;

	    var maxBatchSize = 16384;
	    if (batchSize > maxBatchSize) {
	        batchSize = maxBatchSize;
	    }

	    if (batchSize > maxSize) {
	        batchSize = maxSize;
	    }

	    this._properties = [false, true, false, false, false];

	    this._maxSize = maxSize;

	    this._batchSize = batchSize;

	    this._glBuffers = [];

	    this._bufferToUpdate = 0;

	    this.interactiveChildren = false;

	    this.blendMode = core.BLEND_MODES.NORMAL;

	    this.roundPixels = true;

	    this.baseTexture = null;

	    this.setProperties(properties);
	}

	ParticleContainer.prototype = Object.create(core.Container.prototype);
	ParticleContainer.prototype.constructor = ParticleContainer;
	module.exports = ParticleContainer;

	ParticleContainer.prototype.setProperties = function (properties) {
	    if (properties) {
	        this._properties[0] = 'scale' in properties ? !!properties.scale : this._properties[0];
	        this._properties[1] = 'position' in properties ? !!properties.position : this._properties[1];
	        this._properties[2] = 'rotation' in properties ? !!properties.rotation : this._properties[2];
	        this._properties[3] = 'uvs' in properties ? !!properties.uvs : this._properties[3];
	        this._properties[4] = 'alpha' in properties ? !!properties.alpha : this._properties[4];
	    }
	};

	ParticleContainer.prototype.updateTransform = function () {
	    this.displayObjectUpdateTransform();
	};

	ParticleContainer.prototype.renderWebGL = function (renderer) {
	    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
	        return;
	    }

	    if (!this.baseTexture) {
	        this.baseTexture = this.children[0]._texture.baseTexture;
	        if (!this.baseTexture.hasLoaded) {
	            this.baseTexture.once('update', function () {
	                this.onChildrenChange(0);
	            }, this);
	        }
	    }

	    renderer.setObjectRenderer(renderer.plugins.particle);
	    renderer.plugins.particle.render(this);
	};

	ParticleContainer.prototype.onChildrenChange = function (smallestChildIndex) {
	    var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
	    if (bufferIndex < this._bufferToUpdate) {
	        this._bufferToUpdate = bufferIndex;
	    }
	};

	ParticleContainer.prototype.renderCanvas = function (renderer) {
	    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
	        return;
	    }

	    var context = renderer.context;
	    var transform = this.worldTransform;
	    var isRotated = true;

	    var positionX = 0;
	    var positionY = 0;

	    var finalWidth = 0;
	    var finalHeight = 0;

	    var compositeOperation = renderer.blendModes[this.blendMode];
	    if (compositeOperation !== context.globalCompositeOperation) {
	        context.globalCompositeOperation = compositeOperation;
	    }

	    context.globalAlpha = this.worldAlpha;

	    this.displayObjectUpdateTransform();

	    for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i];

	        if (!child.visible) {
	            continue;
	        }

	        var frame = child.texture.frame;

	        context.globalAlpha = this.worldAlpha * child.alpha;

	        if (child.rotation % (Math.PI * 2) === 0) {
	            if (isRotated) {
	                context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx * renderer.resolution, transform.ty * renderer.resolution);

	                isRotated = false;
	            }

	            positionX = child.anchor.x * (-frame.width * child.scale.x) + child.position.x + 0.5;
	            positionY = child.anchor.y * (-frame.height * child.scale.y) + child.position.y + 0.5;

	            finalWidth = frame.width * child.scale.x;
	            finalHeight = frame.height * child.scale.y;
	        } else {
	            if (!isRotated) {
	                isRotated = true;
	            }

	            child.displayObjectUpdateTransform();

	            var childTransform = child.worldTransform;

	            if (renderer.roundPixels) {
	                context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution | 0, childTransform.ty * renderer.resolution | 0);
	            } else {
	                context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution, childTransform.ty * renderer.resolution);
	            }

	            positionX = child.anchor.x * -frame.width + 0.5;
	            positionY = child.anchor.y * -frame.height + 0.5;

	            finalWidth = frame.width;
	            finalHeight = frame.height;
	        }

	        var resolution = child.texture.baseTexture.resolution;

	        context.drawImage(child.texture.baseTexture.source, frame.x * resolution, frame.y * resolution, frame.width * resolution, frame.height * resolution, positionX * resolution, positionY * resolution, finalWidth * resolution, finalHeight * resolution);
	    }
	};

	ParticleContainer.prototype.destroy = function () {
	    core.Container.prototype.destroy.apply(this, arguments);

	    if (this._buffers) {
	        for (var i = 0; i < this._buffers.length; ++i) {
	            this._buffers[i].destroy();
	        }
	    }

	    this._properties = null;
	    this._buffers = null;
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    ParticleShader = __webpack_require__(197),
	    ParticleBuffer = __webpack_require__(198);

	function ParticleRenderer(renderer) {
	    core.ObjectRenderer.call(this, renderer);

	    this.shader = null;

	    this.indexBuffer = null;

	    this.properties = null;

	    this.tempMatrix = new core.Matrix();

	    this.CONTEXT_UID = 0;
	}

	ParticleRenderer.prototype = Object.create(core.ObjectRenderer.prototype);
	ParticleRenderer.prototype.constructor = ParticleRenderer;
	module.exports = ParticleRenderer;

	core.WebGLRenderer.registerPlugin('particle', ParticleRenderer);

	ParticleRenderer.prototype.onContextChange = function () {
	    var gl = this.renderer.gl;

	    this.CONTEXT_UID = this.renderer.CONTEXT_UID;

	    this.shader = new ParticleShader(gl);

	    this.properties = [{
	        attribute: this.shader.attributes.aVertexPosition,
	        size: 2,
	        uploadFunction: this.uploadVertices,
	        offset: 0
	    }, {
	        attribute: this.shader.attributes.aPositionCoord,
	        size: 2,
	        uploadFunction: this.uploadPosition,
	        offset: 0
	    }, {
	        attribute: this.shader.attributes.aRotation,
	        size: 1,
	        uploadFunction: this.uploadRotation,
	        offset: 0
	    }, {
	        attribute: this.shader.attributes.aTextureCoord,
	        size: 2,
	        uploadFunction: this.uploadUvs,
	        offset: 0
	    }, {
	        attribute: this.shader.attributes.aColor,
	        size: 1,
	        uploadFunction: this.uploadAlpha,
	        offset: 0
	    }];
	};

	ParticleRenderer.prototype.start = function () {
	    this.renderer.bindShader(this.shader);
	};

	ParticleRenderer.prototype.render = function (container) {
	    var children = container.children,
	        totalChildren = children.length,
	        maxSize = container._maxSize,
	        batchSize = container._batchSize;

	    if (totalChildren === 0) {
	        return;
	    } else if (totalChildren > maxSize) {
	        totalChildren = maxSize;
	    }

	    var buffers = container._glBuffers[this.renderer.CONTEXT_UID];

	    if (!buffers) {
	        buffers = container._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(container);
	    }

	    this.renderer.setBlendMode(container.blendMode);

	    var gl = this.renderer.gl;

	    var m = container.worldTransform.copy(this.tempMatrix);
	    m.prepend(this.renderer._activeRenderTarget.projectionMatrix);
	    this.shader.uniforms.projectionMatrix = m.toArray(true);
	    this.shader.uniforms.uAlpha = container.worldAlpha;

	    var baseTexture = children[0]._texture.baseTexture;

	    this.renderer.bindTexture(baseTexture);

	    for (var i = 0, j = 0; i < totalChildren; i += batchSize, j += 1) {
	        var amount = totalChildren - i;
	        if (amount > batchSize) {
	            amount = batchSize;
	        }

	        var buffer = buffers[j];

	        buffer.uploadDynamic(children, i, amount);

	        if (container._bufferToUpdate === j) {
	            buffer.uploadStatic(children, i, amount);
	            container._bufferToUpdate = j + 1;
	        }

	        buffer.vao.bind().draw(gl.TRIANGLES, amount * 6).unbind();
	    }
	};

	ParticleRenderer.prototype.generateBuffers = function (container) {
	    var gl = this.renderer.gl,
	        buffers = [],
	        size = container._maxSize,
	        batchSize = container._batchSize,
	        dynamicPropertyFlags = container._properties,
	        i;

	    for (i = 0; i < size; i += batchSize) {
	        buffers.push(new ParticleBuffer(gl, this.properties, dynamicPropertyFlags, batchSize));
	    }

	    return buffers;
	};

	ParticleRenderer.prototype.uploadVertices = function (children, startIndex, amount, array, stride, offset) {
	    var sprite, texture, trim, orig, sx, sy, w0, w1, h0, h1;

	    for (var i = 0; i < amount; i++) {

	        sprite = children[startIndex + i];
	        texture = sprite._texture;
	        sx = sprite.scale.x;
	        sy = sprite.scale.y;
	        trim = texture.trim;
	        orig = texture.orig;

	        if (trim) {
	            w1 = trim.x - sprite.anchor.x * orig.width;
	            w0 = w1 + trim.width;

	            h1 = trim.y - sprite.anchor.y * orig.height;
	            h0 = h1 + trim.height;
	        } else {
	            w0 = orig.width * (1 - sprite.anchor.x);
	            w1 = orig.width * -sprite.anchor.x;

	            h0 = orig.height * (1 - sprite.anchor.y);
	            h1 = orig.height * -sprite.anchor.y;
	        }

	        array[offset] = w1 * sx;
	        array[offset + 1] = h1 * sy;

	        array[offset + stride] = w0 * sx;
	        array[offset + stride + 1] = h1 * sy;

	        array[offset + stride * 2] = w0 * sx;
	        array[offset + stride * 2 + 1] = h0 * sy;

	        array[offset + stride * 3] = w1 * sx;
	        array[offset + stride * 3 + 1] = h0 * sy;

	        offset += stride * 4;
	    }
	};

	ParticleRenderer.prototype.uploadPosition = function (children, startIndex, amount, array, stride, offset) {
	    for (var i = 0; i < amount; i++) {
	        var spritePosition = children[startIndex + i].position;

	        array[offset] = spritePosition.x;
	        array[offset + 1] = spritePosition.y;

	        array[offset + stride] = spritePosition.x;
	        array[offset + stride + 1] = spritePosition.y;

	        array[offset + stride * 2] = spritePosition.x;
	        array[offset + stride * 2 + 1] = spritePosition.y;

	        array[offset + stride * 3] = spritePosition.x;
	        array[offset + stride * 3 + 1] = spritePosition.y;

	        offset += stride * 4;
	    }
	};

	ParticleRenderer.prototype.uploadRotation = function (children, startIndex, amount, array, stride, offset) {
	    for (var i = 0; i < amount; i++) {
	        var spriteRotation = children[startIndex + i].rotation;

	        array[offset] = spriteRotation;
	        array[offset + stride] = spriteRotation;
	        array[offset + stride * 2] = spriteRotation;
	        array[offset + stride * 3] = spriteRotation;

	        offset += stride * 4;
	    }
	};

	ParticleRenderer.prototype.uploadUvs = function (children, startIndex, amount, array, stride, offset) {
	    for (var i = 0; i < amount; i++) {
	        var textureUvs = children[startIndex + i]._texture._uvs;

	        if (textureUvs) {
	            array[offset] = textureUvs.x0;
	            array[offset + 1] = textureUvs.y0;

	            array[offset + stride] = textureUvs.x1;
	            array[offset + stride + 1] = textureUvs.y1;

	            array[offset + stride * 2] = textureUvs.x2;
	            array[offset + stride * 2 + 1] = textureUvs.y2;

	            array[offset + stride * 3] = textureUvs.x3;
	            array[offset + stride * 3 + 1] = textureUvs.y3;

	            offset += stride * 4;
	        } else {
	            array[offset] = 0;
	            array[offset + 1] = 0;

	            array[offset + stride] = 0;
	            array[offset + stride + 1] = 0;

	            array[offset + stride * 2] = 0;
	            array[offset + stride * 2 + 1] = 0;

	            array[offset + stride * 3] = 0;
	            array[offset + stride * 3 + 1] = 0;

	            offset += stride * 4;
	        }
	    }
	};

	ParticleRenderer.prototype.uploadAlpha = function (children, startIndex, amount, array, stride, offset) {
	    for (var i = 0; i < amount; i++) {
	        var spriteAlpha = children[startIndex + i].alpha;

	        array[offset] = spriteAlpha;
	        array[offset + stride] = spriteAlpha;
	        array[offset + stride * 2] = spriteAlpha;
	        array[offset + stride * 3] = spriteAlpha;

	        offset += stride * 4;
	    }
	};

	ParticleRenderer.prototype.destroy = function () {
	    if (this.renderer.gl) {
	        this.renderer.gl.deleteBuffer(this.indexBuffer);
	    }
	    core.ObjectRenderer.prototype.destroy.apply(this, arguments);

	    this.shader.destroy();

	    this.indices = null;
	    this.tempMatrix = null;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Shader = __webpack_require__(86);

	function ParticleShader(gl) {
	    Shader.call(this, gl, ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'attribute float aColor;', 'attribute vec2 aPositionCoord;', 'attribute vec2 aScale;', 'attribute float aRotation;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'varying float vColor;', 'void main(void){', '   vec2 v = aVertexPosition;', '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);', '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);', '   v = v + aPositionCoord;', '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '   vColor = aColor;', '}'].join('\n'), ['varying vec2 vTextureCoord;', 'varying float vColor;', 'uniform sampler2D uSampler;', 'uniform float uAlpha;', 'void main(void){', '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;', '  if (color.a == 0.0) discard;', '  gl_FragColor = color;', '}'].join('\n'));
	}

	ParticleShader.prototype = Object.create(Shader.prototype);
	ParticleShader.prototype.constructor = ParticleShader;

	module.exports = ParticleShader;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var glCore = __webpack_require__(64),
	    createIndicesForQuads = __webpack_require__(85);

	function ParticleBuffer(gl, properties, dynamicPropertyFlags, size) {
	    this.gl = gl;

	    this.vertSize = 2;

	    this.vertByteSize = this.vertSize * 4;

	    this.size = size;

	    this.dynamicProperties = [];

	    this.staticProperties = [];

	    for (var i = 0; i < properties.length; i++) {
	        var property = properties[i];

	        property = {
	            attribute: property.attribute,
	            size: property.size,
	            uploadFunction: property.uploadFunction,
	            offset: property.offset
	        };

	        if (dynamicPropertyFlags[i]) {
	            this.dynamicProperties.push(property);
	        } else {
	            this.staticProperties.push(property);
	        }
	    }

	    this.staticStride = 0;
	    this.staticBuffer = null;
	    this.staticData = null;

	    this.dynamicStride = 0;
	    this.dynamicBuffer = null;
	    this.dynamicData = null;

	    this.initBuffers();
	}

	ParticleBuffer.prototype.constructor = ParticleBuffer;
	module.exports = ParticleBuffer;

	ParticleBuffer.prototype.initBuffers = function () {
	    var gl = this.gl;
	    var i;
	    var property;

	    var dynamicOffset = 0;

	    this.indices = createIndicesForQuads(this.size);
	    this.indexBuffer = glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

	    this.dynamicStride = 0;

	    for (i = 0; i < this.dynamicProperties.length; i++) {
	        property = this.dynamicProperties[i];

	        property.offset = dynamicOffset;
	        dynamicOffset += property.size;
	        this.dynamicStride += property.size;
	    }

	    this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4);
	    this.dynamicBuffer = glCore.GLBuffer.createVertexBuffer(gl, this.dynamicData, gl.STREAM_DRAW);

	    var staticOffset = 0;
	    this.staticStride = 0;

	    for (i = 0; i < this.staticProperties.length; i++) {
	        property = this.staticProperties[i];

	        property.offset = staticOffset;
	        staticOffset += property.size;
	        this.staticStride += property.size;
	    }

	    this.staticData = new Float32Array(this.size * this.staticStride * 4);
	    this.staticBuffer = glCore.GLBuffer.createVertexBuffer(gl, this.staticData, gl.STATIC_DRAW);

	    this.vao = new glCore.VertexArrayObject(gl).addIndex(this.indexBuffer);

	    for (i = 0; i < this.dynamicProperties.length; i++) {
	        property = this.dynamicProperties[i];
	        this.vao.addAttribute(this.dynamicBuffer, property.attribute, gl.FLOAT, false, this.dynamicStride * 4, property.offset * 4);
	    }

	    for (i = 0; i < this.staticProperties.length; i++) {
	        property = this.staticProperties[i];
	        this.vao.addAttribute(this.staticBuffer, property.attribute, gl.FLOAT, false, this.staticStride * 4, property.offset * 4);
	    }
	};

	ParticleBuffer.prototype.uploadDynamic = function (children, startIndex, amount) {
	    for (var i = 0; i < this.dynamicProperties.length; i++) {
	        var property = this.dynamicProperties[i];
	        property.uploadFunction(children, startIndex, amount, this.dynamicData, this.dynamicStride, property.offset);
	    }

	    this.dynamicBuffer.upload();
	};

	ParticleBuffer.prototype.uploadStatic = function (children, startIndex, amount) {
	    for (var i = 0; i < this.staticProperties.length; i++) {
	        var property = this.staticProperties[i];
	        property.uploadFunction(children, startIndex, amount, this.staticData, this.staticStride, property.offset);
	    }

	    this.staticBuffer.upload();
	};

	ParticleBuffer.prototype.bind = function () {
	    this.vao.bind();
	};

	ParticleBuffer.prototype.destroy = function () {
	    this.dynamicProperties = null;
	    this.dynamicData = null;
	    this.dynamicBuffer.destroy();

	    this.staticProperties = null;
	    this.staticData = null;
	    this.staticBuffer.destroy();
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file        Main export of the PIXI accessibility library
	 * @author      Mat Groves <mat@goodboydigital.com>
	 * @copyright   2013-2015 GoodBoyDigital
	 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
	 */

	module.exports = {
	  accessibleTarget: __webpack_require__(200),
	  AccessibilityManager: __webpack_require__(201)
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	var accessibleTarget = {
	  accessible: false,

	  accessibleTitle: null,

	  accessibleHint: null,

	  tabIndex: 0,

	  _accessibleActive: false,

	  _accessibleDiv: false

	};

	module.exports = accessibleTarget;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);
	var Device = __webpack_require__(10);

	Object.assign(core.DisplayObject.prototype, __webpack_require__(200));

	function AccessibilityManager(renderer) {
		if (Device.tablet || Device.phone) {
			this.createTouchHook();
		}

		var div = document.createElement('div');

		div.style.width = 100 + 'px';
		div.style.height = 100 + 'px';
		div.style.position = 'absolute';
		div.style.top = 0;
		div.style.left = 0;

		div.style.zIndex = 2;

		this.div = div;

		this.pool = [];

		this.renderId = 0;

		this.debug = false;

		this.renderer = renderer;

		this.children = [];

		this._onKeyDown = this._onKeyDown.bind(this);
		this._onMouseMove = this._onMouseMove.bind(this);

		this.isActive = false;
		this.isMobileAccessabillity = false;

		window.addEventListener('keydown', this._onKeyDown, false);
	}

	AccessibilityManager.prototype.constructor = AccessibilityManager;
	module.exports = AccessibilityManager;

	AccessibilityManager.prototype.createTouchHook = function () {
		var hookDiv = document.createElement('button');
		hookDiv.style.width = 1 + 'px';
		hookDiv.style.height = 1 + 'px';
		hookDiv.style.position = 'absolute';
		hookDiv.style.top = -1000 + 'px';
		hookDiv.style.left = -1000 + 'px';
		hookDiv.style.zIndex = 2;
		hookDiv.style.backgroundColor = '#FF0000';
		hookDiv.title = 'HOOK DIV';

		hookDiv.addEventListener('focus', function () {

			this.isMobileAccessabillity = true;
			this.activate();
			document.body.removeChild(hookDiv);
		}.bind(this));

		document.body.appendChild(hookDiv);
	};

	AccessibilityManager.prototype.activate = function () {
		if (this.isActive) {
			return;
		}

		this.isActive = true;

		window.document.addEventListener('mousemove', this._onMouseMove, true);
		window.removeEventListener('keydown', this._onKeyDown, false);

		this.renderer.on('postrender', this.update, this);

		if (this.renderer.view.parentNode) {
			this.renderer.view.parentNode.appendChild(this.div);
		}
	};

	AccessibilityManager.prototype.deactivate = function () {

		if (!this.isActive || this.isMobileAccessabillity) {
			return;
		}

		this.isActive = false;

		window.document.removeEventListener('mousemove', this._onMouseMove);
		window.addEventListener('keydown', this._onKeyDown, false);

		this.renderer.off('postrender', this.update);

		if (this.div.parentNode) {
			this.div.parentNode.removeChild(this.div);
		}
	};

	AccessibilityManager.prototype.updateAccessibleObjects = function (displayObject) {
		if (!displayObject.visible) {
			return;
		}

		if (displayObject.accessible && displayObject.interactive) {
			if (!displayObject._accessibleActive) {
				this.addChild(displayObject);
			}

			displayObject.renderId = this.renderId;
		}

		var children = displayObject.children;

		for (var i = children.length - 1; i >= 0; i--) {

			this.updateAccessibleObjects(children[i]);
		}
	};

	AccessibilityManager.prototype.update = function () {
		if (!this.renderer.renderingToScreen) {
			return;
		}

		this.updateAccessibleObjects(this.renderer._lastObjectRendered);

		var rect = this.renderer.view.getBoundingClientRect();
		var sx = rect.width / this.renderer.width;
		var sy = rect.height / this.renderer.height;

		var div = this.div;

		div.style.left = rect.left + 'px';
		div.style.top = rect.top + 'px';
		div.style.width = this.renderer.width + 'px';
		div.style.height = this.renderer.height + 'px';

		for (var i = 0; i < this.children.length; i++) {

			var child = this.children[i];

			if (child.renderId !== this.renderId) {
				child._accessibleActive = false;

				core.utils.removeItems(this.children, i, 1);
				this.div.removeChild(child._accessibleDiv);
				this.pool.push(child._accessibleDiv);
				child._accessibleDiv = null;

				i--;

				if (this.children.length === 0) {
					this.deactivate();
				}
			} else {
				div = child._accessibleDiv;
				var hitArea = child.hitArea;
				var wt = child.worldTransform;

				if (child.hitArea) {
					div.style.left = (wt.tx + hitArea.x * wt.a) * sx + 'px';
					div.style.top = (wt.ty + hitArea.y * wt.d) * sy + 'px';

					div.style.width = hitArea.width * wt.a * sx + 'px';
					div.style.height = hitArea.height * wt.d * sy + 'px';
				} else {
					hitArea = child.getBounds();

					this.capHitArea(hitArea);

					div.style.left = hitArea.x * sx + 'px';
					div.style.top = hitArea.y * sy + 'px';

					div.style.width = hitArea.width * sx + 'px';
					div.style.height = hitArea.height * sy + 'px';
				}
			}
		}

		this.renderId++;
	};

	AccessibilityManager.prototype.capHitArea = function (hitArea) {
		if (hitArea.x < 0) {
			hitArea.width += hitArea.x;
			hitArea.x = 0;
		}

		if (hitArea.y < 0) {
			hitArea.height += hitArea.y;
			hitArea.y = 0;
		}

		if (hitArea.x + hitArea.width > this.renderer.width) {
			hitArea.width = this.renderer.width - hitArea.x;
		}

		if (hitArea.y + hitArea.height > this.renderer.height) {
			hitArea.height = this.renderer.height - hitArea.y;
		}
	};

	AccessibilityManager.prototype.addChild = function (displayObject) {

		var div = this.pool.pop();

		if (!div) {
			div = document.createElement('button');

			div.style.width = 100 + 'px';
			div.style.height = 100 + 'px';
			div.style.backgroundColor = this.debug ? 'rgba(255,0,0,0.5)' : 'transparent';
			div.style.position = 'absolute';
			div.style.zIndex = 2;
			div.style.borderStyle = 'none';

			div.addEventListener('click', this._onClick.bind(this));
			div.addEventListener('focus', this._onFocus.bind(this));
			div.addEventListener('focusout', this._onFocusOut.bind(this));
		}

		if (displayObject.accessibleTitle) {
			div.title = displayObject.accessibleTitle;
		} else if (!displayObject.accessibleTitle && !displayObject.accessibleHint) {
			div.title = 'displayObject ' + this.tabIndex;
		}

		if (displayObject.accessibleHint) {
			div.setAttribute('aria-label', displayObject.accessibleHint);
		}

		displayObject._accessibleActive = true;
		displayObject._accessibleDiv = div;
		div.displayObject = displayObject;

		this.children.push(displayObject);
		this.div.appendChild(displayObject._accessibleDiv);
		displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
	};

	AccessibilityManager.prototype._onClick = function (e) {
		var interactionManager = this.renderer.plugins.interaction;
		interactionManager.dispatchEvent(e.target.displayObject, 'click', interactionManager.eventData);
	};

	AccessibilityManager.prototype._onFocus = function (e) {
		var interactionManager = this.renderer.plugins.interaction;
		interactionManager.dispatchEvent(e.target.displayObject, 'mouseover', interactionManager.eventData);
	};

	AccessibilityManager.prototype._onFocusOut = function (e) {
		var interactionManager = this.renderer.plugins.interaction;
		interactionManager.dispatchEvent(e.target.displayObject, 'mouseout', interactionManager.eventData);
	};

	AccessibilityManager.prototype._onKeyDown = function (e) {
		if (e.keyCode !== 9) {
			return;
		}

		this.activate();
	};

	AccessibilityManager.prototype._onMouseMove = function () {
		this.deactivate();
	};

	AccessibilityManager.prototype.destroy = function () {
		this.div = null;

		for (var i = 0; i < this.children.length; i++) {
			this.children[i].div = null;
		}

		window.document.removeEventListener('mousemove', this._onMouseMove);
		window.removeEventListener('keydown', this._onKeyDown);

		this.pool = null;
		this.children = null;
		this.renderer = null;
	};

	core.WebGLRenderer.registerPlugin('accessibility', AccessibilityManager);
	core.CanvasRenderer.registerPlugin('accessibility', AccessibilityManager);

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    webGL: __webpack_require__(203),
	    canvas: __webpack_require__(204)
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    tempRect = new core.Rectangle();

	function WebGLExtract(renderer) {
	    this.renderer = renderer;
	    renderer.extract = this;
	}

	WebGLExtract.prototype.constructor = WebGLExtract;
	module.exports = WebGLExtract;

	WebGLExtract.prototype.image = function (target) {
	    var image = new Image();
	    image.src = this.base64(target);
	    return image;
	};

	WebGLExtract.prototype.base64 = function (target) {
	    return this.canvas(target).toDataURL();
	};

	WebGLExtract.prototype.canvas = function (target) {
	    var renderer = this.renderer;
	    var textureBuffer;
	    var resolution;
	    var frame;
	    var flipY = false;
	    var renderTexture;

	    if (target) {
	        if (target instanceof core.RenderTexture) {
	            renderTexture = target;
	        } else {
	            renderTexture = this.renderer.generateTexture(target);
	        }
	    }

	    if (renderTexture) {
	        textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
	        resolution = textureBuffer.resolution;
	        frame = renderTexture.frame;
	        flipY = false;
	    } else {
	        textureBuffer = this.renderer.rootRenderTarget;
	        resolution = textureBuffer.resolution;
	        flipY = true;

	        frame = tempRect;
	        frame.width = textureBuffer.size.width;
	        frame.height = textureBuffer.size.height;
	    }

	    var width = frame.width * resolution;
	    var height = frame.height * resolution;

	    var canvasBuffer = new core.CanvasRenderTarget(width, height);

	    if (textureBuffer) {
	        renderer.bindRenderTarget(textureBuffer);

	        var webGLPixels = new Uint8Array(4 * width * height);

	        var gl = renderer.gl;
	        gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);

	        var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
	        canvasData.data.set(webGLPixels);

	        canvasBuffer.context.putImageData(canvasData, 0, 0);

	        if (flipY) {
	            canvasBuffer.context.scale(1, -1);
	            canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
	        }
	    }

	    return canvasBuffer.canvas;
	};

	WebGLExtract.prototype.pixels = function (target) {
	    var renderer = this.renderer;
	    var textureBuffer;
	    var resolution;
	    var frame;
	    var renderTexture;

	    if (target) {
	        if (target instanceof core.RenderTexture) {
	            renderTexture = target;
	        } else {
	            renderTexture = this.renderer.generateTexture(target);
	        }
	    }

	    if (renderTexture) {
	        textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
	        resolution = textureBuffer.resolution;
	        frame = renderTexture.frame;
	    } else {
	        textureBuffer = this.renderer.rootRenderTarget;
	        resolution = textureBuffer.resolution;

	        frame = tempRect;
	        frame.width = textureBuffer.size.width;
	        frame.height = textureBuffer.size.height;
	    }

	    var width = frame.width * resolution;
	    var height = frame.height * resolution;

	    var webGLPixels = new Uint8Array(4 * width * height);

	    if (textureBuffer) {
	        renderer.bindRenderTarget(textureBuffer);

	        var gl = renderer.gl;
	        gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
	    }

	    return webGLPixels;
	};

	WebGLExtract.prototype.destroy = function () {
	    this.renderer.extract = null;
	    this.renderer = null;
	};

	core.WebGLRenderer.registerPlugin('extract', WebGLExtract);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    tempRect = new core.Rectangle();

	function CanvasExtract(renderer) {
	    this.renderer = renderer;
	    renderer.extract = this;
	}

	CanvasExtract.prototype.constructor = CanvasExtract;
	module.exports = CanvasExtract;

	CanvasExtract.prototype.image = function (target) {
	    var image = new Image();
	    image.src = this.base64(target);
	    return image;
	};

	CanvasExtract.prototype.base64 = function (target) {
	    return this.canvas(target).toDataURL();
	};

	CanvasExtract.prototype.canvas = function (target) {
	    var renderer = this.renderer;
	    var context;
	    var resolution;
	    var frame;
	    var renderTexture;

	    if (target) {
	        if (target instanceof core.RenderTexture) {
	            renderTexture = target;
	        } else {
	            renderTexture = renderer.generateTexture(target);
	        }
	    }

	    if (renderTexture) {
	        context = renderTexture.baseTexture._canvasRenderTarget.context;
	        resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
	        frame = renderTexture.frame;
	    } else {
	        context = renderer.rootContext;
	        resolution = renderer.rootResolution;

	        frame = tempRect;
	        frame.width = this.renderer.width;
	        frame.height = this.renderer.height;
	    }

	    var width = frame.width * resolution;
	    var height = frame.height * resolution;

	    var canvasBuffer = new core.CanvasRenderTarget(width, height);
	    var canvasData = context.getImageData(frame.x * resolution, frame.y * resolution, width, height);
	    canvasBuffer.context.putImageData(canvasData, 0, 0);

	    return canvasBuffer.canvas;
	};

	CanvasExtract.prototype.pixels = function (target) {
	    var renderer = this.renderer;
	    var context;
	    var resolution;
	    var frame;
	    var renderTexture;

	    if (target) {
	        if (target instanceof core.RenderTexture) {
	            renderTexture = target;
	        } else {
	            renderTexture = renderer.generateTexture(target);
	        }
	    }

	    if (renderTexture) {
	        context = renderTexture.baseTexture._canvasRenderTarget.context;
	        resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
	        frame = renderTexture.frame;
	    } else {
	        context = renderer.rootContext;
	        resolution = renderer.rootResolution;

	        frame = tempRect;
	        frame.width = renderer.width;
	        frame.height = renderer.height;
	    }

	    return context.getImageData(0, 0, frame.width * resolution, frame.height * resolution).data;
	};

	CanvasExtract.prototype.destroy = function () {
	    this.renderer.extract = null;
	    this.renderer = null;
	};

	core.CanvasRenderer.registerPlugin('extract', CanvasExtract);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    webGL: __webpack_require__(206),
	    canvas: __webpack_require__(207)
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    SharedTicker = core.ticker.shared;

	function WebGLPrepare(renderer) {
	    this.renderer = renderer;

	    this.queue = [];

	    this.addHooks = [];

	    this.uploadHooks = [];

	    this.completes = [];

	    this.ticking = false;

	    this.register(findBaseTextures, uploadBaseTextures).register(findGraphics, uploadGraphics);
	}

	WebGLPrepare.UPLOADS_PER_FRAME = 4;

	WebGLPrepare.prototype.constructor = WebGLPrepare;
	module.exports = WebGLPrepare;

	WebGLPrepare.prototype.upload = function (item, done) {
	    if (typeof item === 'function') {
	        done = item;
	        item = null;
	    }

	    if (item) {
	        this.add(item);
	    }

	    if (this.queue.length) {
	        this.numLeft = WebGLPrepare.UPLOADS_PER_FRAME;
	        this.completes.push(done);
	        if (!this.ticking) {
	            this.ticking = true;
	            SharedTicker.add(this.tick, this);
	        }
	    } else {
	        done();
	    }
	};

	WebGLPrepare.prototype.tick = function () {
	    var i, len;

	    while (this.queue.length && this.numLeft > 0) {
	        var item = this.queue[0];
	        var uploaded = false;
	        for (i = 0, len = this.uploadHooks.length; i < len; i++) {
	            if (this.uploadHooks[i](this.renderer, item)) {
	                this.numLeft--;
	                this.queue.shift();
	                uploaded = true;
	                break;
	            }
	        }
	        if (!uploaded) {
	            this.queue.shift();
	        }
	    }

	    if (this.queue.length) {
	        this.numLeft = WebGLPrepare.UPLOADS_PER_FRAME;
	    } else {
	        this.ticking = false;
	        SharedTicker.remove(this.tick, this);
	        var completes = this.completes.slice(0);
	        this.completes.length = 0;
	        for (i = 0, len = completes.length; i < len; i++) {
	            completes[i]();
	        }
	    }
	};

	WebGLPrepare.prototype.register = function (addHook, uploadHook) {
	    if (addHook) {
	        this.addHooks.push(addHook);
	    }
	    if (uploadHook) {
	        this.uploadHooks.push(uploadHook);
	    }
	    return this;
	};

	WebGLPrepare.prototype.add = function (item) {
	    var i, len;

	    for (i = 0, len = this.addHooks.length; i < len; i++) {
	        if (this.addHooks[i](item, this.queue)) {
	            break;
	        }
	    }

	    if (item instanceof core.Container) {
	        for (i = item.children.length - 1; i >= 0; i--) {
	            this.add(item.children[i]);
	        }
	    }
	    return this;
	};

	WebGLPrepare.prototype.destroy = function () {
	    if (this.ticking) {
	        SharedTicker.remove(this.tick, this);
	    }
	    this.ticking = false;
	    this.addHooks = null;
	    this.uploadHooks = null;
	    this.renderer = null;
	    this.completes = null;
	    this.queue = null;
	};

	function uploadBaseTextures(renderer, item) {
	    if (item instanceof core.BaseTexture) {
	        renderer.textureManager.updateTexture(item);
	        return true;
	    }
	    return false;
	}

	function uploadGraphics(renderer, item) {
	    if (item instanceof core.Graphics) {
	        renderer.plugins.graphics.updateGraphics(item);
	        return true;
	    }
	    return false;
	}

	function findBaseTextures(item, queue) {
	    if (item instanceof core.BaseTexture) {
	        if (queue.indexOf(item) === -1) {
	            queue.push(item);
	        }
	        return true;
	    } else if (item._texture && item._texture instanceof core.Texture) {
	        var texture = item._texture.baseTexture;
	        if (queue.indexOf(texture) === -1) {
	            queue.push(texture);
	        }
	        return true;
	    }
	    return false;
	}

	function findGraphics(item, queue) {
	    if (item instanceof core.Graphics) {
	        queue.push(item);
	        return true;
	    }
	    return false;
	}

	core.WebGLRenderer.registerPlugin('prepare', WebGLPrepare);

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7);

	function CanvasPrepare() {}

	CanvasPrepare.prototype.constructor = CanvasPrepare;
	module.exports = CanvasPrepare;

	CanvasPrepare.prototype.upload = function (displayObject, done) {
	  if (typeof displayObject === 'function') {
	    done = displayObject;
	    displayObject = null;
	  }
	  done();
	};

	CanvasPrepare.prototype.register = function () {
	  return this;
	};

	CanvasPrepare.prototype.add = function () {
	  return this;
	};

	CanvasPrepare.prototype.destroy = function () {};

	core.CanvasRenderer.registerPlugin('prepare', CanvasPrepare);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(7),
	    mesh = __webpack_require__(188),
	    particles = __webpack_require__(194),
	    extras = __webpack_require__(112),
	    filters = __webpack_require__(120);

	function warn(msg) {
	    var stack = new Error().stack;

	    if (typeof stack === 'undefined') {
	        console.warn('Deprecation Warning: ', msg);
	    } else {
	        stack = stack.split('\n').splice(3).join('\n');

	        if (console.groupCollapsed) {
	            console.groupCollapsed('%cDeprecation Warning: %c%s', 'color:#614108;background:#fffbe6', 'font-weight:normal;color:#614108;background:#fffbe6', msg);
	            console.warn(stack);
	            console.groupEnd();
	        } else {
	            console.warn('Deprecation Warning: ', msg);
	            console.warn(stack);
	        }
	    }
	}

	core.SpriteBatch = function () {
	    throw new ReferenceError('SpriteBatch does not exist any more, please use the new ParticleContainer instead.');
	};

	core.AssetLoader = function () {
	    throw new ReferenceError('The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.');
	};

	Object.defineProperties(core, {
	    Stage: {
	        get: function get() {
	            warn('You do not need to use a PIXI Stage any more, you can simply render any container.');

	            return core.Container;
	        }
	    },

	    DisplayObjectContainer: {
	        get: function get() {
	            warn('DisplayObjectContainer has been shortened to Container, please use Container from now on.');

	            return core.Container;
	        }
	    },

	    Strip: {
	        get: function get() {
	            warn('The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.');

	            return mesh.Mesh;
	        }
	    },

	    Rope: {
	        get: function get() {
	            warn('The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.');

	            return mesh.Rope;
	        }
	    },

	    ParticleContainer: {
	        get: function get() {
	            warn('The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on.');

	            return particles.ParticleContainer;
	        }
	    },

	    MovieClip: {
	        get: function get() {
	            warn('The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.');

	            return extras.MovieClip;
	        }
	    },

	    TilingSprite: {
	        get: function get() {
	            warn('The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.');

	            return extras.TilingSprite;
	        }
	    },

	    BitmapText: {
	        get: function get() {
	            warn('The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.');

	            return extras.BitmapText;
	        }
	    },

	    blendModes: {
	        get: function get() {
	            warn('The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.');

	            return core.BLEND_MODES;
	        }
	    },

	    scaleModes: {
	        get: function get() {
	            warn('The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.');

	            return core.SCALE_MODES;
	        }
	    },

	    BaseTextureCache: {
	        get: function get() {
	            warn('The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.');

	            return core.utils.BaseTextureCache;
	        }
	    },

	    TextureCache: {
	        get: function get() {
	            warn('The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.');

	            return core.utils.TextureCache;
	        }
	    },

	    math: {
	        get: function get() {
	            warn('The math namespace is deprecated, please access members already accessible on PIXI.');

	            return core;
	        }
	    },

	    AbstractFilter: {
	        get: function get() {
	            warn('AstractFilter has been renamed to Filter, please use PIXI.Filter');

	            return core.Filter;
	        }
	    },

	    TransformManual: {
	        get: function get() {
	            warn('TransformManual has been renamed to TransformBase, please update your pixi-spine');

	            return core.TransformBase;
	        }
	    }
	});

	core.DisplayObject.prototype.generateTexture = function (renderer, scaleMode, resolution) {
	    warn('generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)');

	    return renderer.generateTexture(this, scaleMode, resolution);
	};

	core.Graphics.prototype.generateTexture = function (scaleMode, resolution) {
	    warn('graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture');

	    return this.generateCanvasTexture(scaleMode, resolution);
	};

	core.RenderTexture.prototype.render = function (displayObject, matrix, clear, updateTransform) {
	    this.legacyRenderer.render(displayObject, this, clear, matrix, !updateTransform);

	    warn('RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)');
	};

	core.RenderTexture.prototype.getImage = function (target) {
	    warn('RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)');

	    return this.legacyRenderer.extract.image(target);
	};

	core.RenderTexture.prototype.getBase64 = function (target) {
	    warn('RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)');

	    return this.legacyRenderer.extract.base64(target);
	};

	core.RenderTexture.prototype.getCanvas = function (target) {
	    warn('RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)');

	    return this.legacyRenderer.extract.canvas(target);
	};

	core.RenderTexture.prototype.getPixels = function (target) {
	    warn('RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)');

	    return this.legacyRenderer.pixels(target);
	};

	core.Sprite.prototype.setTexture = function (texture) {
	    this.texture = texture;

	    warn('setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;');
	};

	extras.BitmapText.prototype.setText = function (text) {
	    this.text = text;

	    warn('setText is now deprecated, please use the text property, e.g : myBitmapText.text = \'my text\';');
	};

	core.Text.prototype.setText = function (text) {
	    this.text = text;

	    warn('setText is now deprecated, please use the text property, e.g : myText.text = \'my text\';');
	};

	core.Text.prototype.setStyle = function (style) {
	    this.style = style;

	    warn('setStyle is now deprecated, please use the style property, e.g : myText.style = style;');
	};

	Object.defineProperties(core.TextStyle.prototype, {
	    font: {
	        get: function get() {
	            warn('text style property \'font\' is now deprecated, please use the \'fontFamily\',\'fontSize\',fontStyle\',\'fontVariant\' and \'fontWeight\' properties from now on');

	            var fontSizeString = typeof this._fontSize === 'number' ? this._fontSize + 'px' : this._fontSize;
	            return this._fontStyle + ' ' + this._fontVariant + ' ' + this._fontWeight + ' ' + fontSizeString + ' ' + this._fontFamily;
	        },
	        set: function set(font) {
	            warn('text style property \'font\' is now deprecated, please use the \'fontFamily\',\'fontSize\',fontStyle\',\'fontVariant\' and \'fontWeight\' properties from now on');

	            if (font.indexOf('italic') > 1) {
	                this._fontStyle = 'italic';
	            } else if (font.indexOf('oblique') > -1) {
	                this._fontStyle = 'oblique';
	            } else {
	                this._fontStyle = 'normal';
	            }

	            if (font.indexOf('small-caps') > -1) {
	                this._fontVariant = 'small-caps';
	            } else {
	                this._fontVariant = 'normal';
	            }

	            var splits = font.split(' ');
	            var i;
	            var fontSizeIndex = -1;

	            this._fontSize = 26;
	            for (i = 0; i < splits.length; ++i) {
	                if (splits[i].match(/(px|pt|em|%)/)) {
	                    fontSizeIndex = i;
	                    this._fontSize = splits[i];
	                    break;
	                }
	            }

	            this._fontWeight = 'normal';
	            for (i = 0; i < fontSizeIndex; ++i) {
	                if (splits[i].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
	                    this._fontWeight = splits[i];
	                    break;
	                }
	            }

	            if (fontSizeIndex > -1 && fontSizeIndex < splits.length - 1) {
	                this._fontFamily = '';
	                for (i = fontSizeIndex + 1; i < splits.length; ++i) {
	                    this._fontFamily += splits[i] + ' ';
	                }

	                this._fontFamily = this._fontFamily.slice(0, -1);
	            } else {
	                this._fontFamily = 'Arial';
	            }

	            this.styleID++;
	        }
	    }
	});

	core.Texture.prototype.setFrame = function (frame) {
	    this.frame = frame;

	    warn('setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;');
	};

	Object.defineProperties(filters, {
	    AbstractFilter: {
	        get: function get() {
	            warn('AstractFilter has been renamed to Filter, please use PIXI.Filter');

	            return core.AbstractFilter;
	        }
	    },

	    SpriteMaskFilter: {
	        get: function get() {
	            warn('filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.');

	            return core.SpriteMaskFilter;
	        }
	    }
	});

	core.utils.uuid = function () {
	    warn('utils.uuid() is deprecated, please use utils.uid() from now on.');

	    return core.utils.uid();
	};

	core.utils.canUseNewCanvasBlendModes = function () {
	    warn('utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on');

	    return core.CanvasTinter.canUseMultiply;
	};

/***/ }
/******/ ]);