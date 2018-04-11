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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _picker = __webpack_require__(26);

	// FastClick.attach(document.body);

	/* picker */
	// 普通选择器
	document.querySelector('#pickerBtn').addEventListener('click', function () {
	    (0, _picker.picker)([{
	        label: '飞机票',
	        value: 0
	    }, {
	        label: '火车票(disabled)',
	        disabled: true,
	        value: 1
	    }, {
	        label: '的士票(disabled)',
	        disabled: true,
	        value: 2
	    }, {
	        label: '住宿费',
	        value: 3
	    }, {
	        label: '礼品费',
	        value: 4
	    }, {
	        label: '活动费',
	        value: 5
	    }, {
	        label: '通讯费',
	        value: 6
	    }, {
	        label: '补助',
	        value: 7
	    }, {
	        label: '通讯费',
	        value: 8
	    }, {
	        label: '其他',
	        value: 9
	    }], {
	        defaultValue: [8],
	        rowHeight: 34 * window.RATIO,
	        className: 'custom-classname',
	        onChange: function onChange(result) {
	            //console.log(item, index);
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'picker'
	    });
	});

	// 时间选择器
	// import FastClick from 'fastclick';
	document.querySelector('#datePickerBtn').addEventListener('click', function () {
	    (0, _picker.datePicker)({
	        start: '2016-12-29',
	        end: '2030-12-29',
	        /**
	         * https://zh.wikipedia.org/wiki/Cron
	         * cron 表达式后三位
	         * 示例：
	         *  * * *                每天
	         *  5 * *                每个月的5日
	         *  1-10 * *             每个月的前10日
	         *  1,5,10 * *           每个月的1号、5号、10号
	         *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
	         *  * 2 0                2月的每个周日
	         *  * * 0,6              每个周末
	         *  * * 3                每周三
	         */
	        cron: '* */2 0',
	        defaultValue: [2017, 7, 9],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'datePicker'
	    });
	});

	// 多列选择器
	document.querySelector('#multiPickerBtn').addEventListener('click', function () {
	    (0, _picker.picker)([{
	        label: '1',
	        value: '1'
	    }, {
	        label: '2',
	        value: '2'
	    }, {
	        label: '3',
	        value: '3'
	    }], [{
	        label: 'A',
	        value: 'A'
	    }, {
	        label: 'B',
	        value: 'B'
	    }, {
	        label: 'C',
	        value: 'C'
	    }], {
	        defaultValue: ['3', 'A'],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'multiPickerBtn',
	        onClose: function onClose() {
	            console.log('onClose');
	        }
	    });
	});

	// 级联选择器
	document.querySelector('#cascadePickerBtn').addEventListener('click', function () {
	    (0, _picker.picker)([{
	        label: '广东',
	        value: 0,
	        children: [{
	            label: '广州',
	            value: 0,
	            children: [{
	                label: '海珠',
	                value: 0
	            }, {
	                label: '番禺',
	                value: 1
	            }]
	        }, {
	            label: '佛山',
	            value: 1,
	            children: [{
	                label: '禅城',
	                value: 0
	            }, {
	                label: '南海',
	                value: 1
	            }]
	        }]
	    }, {
	        label: '广西',
	        value: 1,
	        children: [{
	            label: '南宁',
	            value: 0,
	            children: [{
	                label: '青秀',
	                value: 0
	            }, {
	                label: '兴宁',
	                value: 1
	            }]
	        }, {
	            label: '桂林',
	            value: 1,
	            children: [{
	                label: '象山',
	                value: 0
	            }, {
	                label: '秀峰',
	                value: 1
	            }]
	        }]
	    }], {
	        depth: 3,
	        defaultValue: [0, 1, 1],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'cascadePicker'
	    });
	});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	__webpack_require__(5);

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(7);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments;

	        if (_typeof(arguments[0]) == 'object') {
	            var attrsObj = arguments[0];
	            var that = this;
	            Object.keys(attrsObj).forEach(function (attr) {
	                that.forEach(function ($element) {
	                    $element.setAttribute(attr, attrsObj[attr]);
	                });
	            });
	            return this;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 取值：<%= variable %>
	     * 表达式：<% if {} %>
	     * 例子：
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
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

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
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

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _cron = __webpack_require__(27);

	var _cron2 = _interopRequireDefault(_cron);

	__webpack_require__(28);

	var _util3 = __webpack_require__(29);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(30);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(31);

	var _group2 = _interopRequireDefault(_group);

	__webpack_require__(32);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Result(item) {
	    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) != 'object') {
	        item = {
	            label: item,
	            value: item
	        };
	    }
	    _util2.default.extend(this, item);
	}
	Result.prototype.toString = function () {
	    return this.value;
	};
	Result.prototype.valueOf = function () {
	    return this.value;
	};

	var _sington = void 0;
	var temp = {}; // temp 存在上一次滑动的位置

	/**
	 * picker 多列选择器。
	 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
	 * @param {Object} options 配置项
	 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
	 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
	 * @param {string=} [options.className] 自定义类名
	 * @param {string=} [options.container] 指定容器
	 * @param {array=} [options.defaultValue] 默认选项的value数组
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 * @param {function=} [options.onClose] picker关闭后的回调
	 *
	 * @example
	 * // 单列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     disabled: true // 不可用
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3
	 * },
	 * {
	 *     label: '公车票',
	 *     value: 4,
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 多列picker
	 * weui.picker([
	 *     {
	 *         label: '1',
	 *         value: '1'
	 *     }, {
	 *         label: '2',
	 *         value: '2'
	 *     }, {
	 *         label: '3',
	 *         value: '3'
	 *     }
	 * ], [
	 *     {
	 *         label: 'A',
	 *         value: 'A'
	 *     }, {
	 *         label: 'B',
	 *         value: 'B'
	 *     }, {
	 *         label: 'C',
	 *         value: 'C'
	 *     }
	 * ], {
	 *     defaultValue: ['3', 'A'],
	 *     onChange: function (result) {
	 *         console.log(result);
	 *     },
	 *     onConfirm: function (result) {
	 *         console.log(result);
	 *     },
	 *     id: 'multiPickerBtn'
	 * });
	 *
	 * @example
	 * // 级联picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '经济舱',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '商务舱',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '卧铺',
	 *             value: 1,
	 *             disabled: true // 不可用
	 *         },
	 *         {
	 *             label: '坐票',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '站票',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '快班',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '普通',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [1, 3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */
	function picker() {
	    if (_sington) return _sington;

	    // 配置项
	    var options = arguments[arguments.length - 1];
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        container: 'body',
	        rowHeight: 34,
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        onClose: _util2.default.noop
	    }, options);

	    // 数据处理
	    var items = void 0;
	    var isMulti = false; // 是否多列的类型
	    if (arguments.length > 2) {
	        var i = 0;
	        items = [];
	        while (i < arguments.length - 1) {
	            items.push(arguments[i++]);
	        }
	        isMulti = true;
	    } else {
	        items = arguments[0];
	    }

	    // 获取缓存
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_util2.default.render(_picker2.default, defaults));
	    var depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])),
	        groups = '';

	    // 显示与隐藏的方法
	    function show() {
	        (0, _util2.default)(defaults.container).append($picker);

	        // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	        _util2.default.getStyle($picker[0], 'transform');

	        $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	    }
	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	            $picker.remove();
	            _sington = false;
	            defaults.onClose();
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    // 初始化滚动的方法
	    function scroll(items, level) {
	        if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
	            // 没有缓存选项，而且存在defaultValue
	            var defaultVal = defaults.defaultValue[level];
	            var index = 0,
	                len = items.length;

	            if (_typeof(items[index]) == 'object') {
	                for (; index < len; ++index) {
	                    if (defaultVal == items[index].value) break;
	                }
	            } else {
	                for (; index < len; ++index) {
	                    if (defaultVal == items[index]) break;
	                }
	            }
	            if (index < len) {
	                lineTemp[level] = index;
	            } else {
	                console.warn('Picker has not match defaultValue: ' + defaultVal);
	            }
	        }
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            rowHeight: defaults.rowHeight,
	            onChange: function onChange(item, index) {
	                //为当前的result赋值。
	                if (item) {
	                    result[level] = new Result(item);
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;

	                if (isMulti) {
	                    if (result.length == depth) {
	                        defaults.onChange(result);
	                    }
	                } else {
	                    /**
	                     * @子列表处理
	                     * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
	                     * 2. 滑动之后发现重新有子列表时，再次显示子列表。
	                     *
	                     * @回调处理
	                     * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
	                     * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
	                     */
	                    if (item.children && item.children.length > 0) {
	                        $picker.find('.weui-picker__group').eq(level + 1).show();
	                        !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
	                    } else {
	                        //如果子列表test不通过，子孙列表都隐藏。
	                        var $items = $picker.find('.weui-picker__group');
	                        $items.forEach(function (ele, index) {
	                            if (index > level) {
	                                (0, _util2.default)(ele).hide();
	                            }
	                        });

	                        result.splice(level + 1);

	                        defaults.onChange(result);
	                    }
	                }
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }

	    var _depth = depth;
	    while (_depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show();

	    if (isMulti) {
	        items.forEach(function (item, index) {
	            scroll(item, index);
	        });
	    } else {
	        scroll(items, 0);
	    }

	    $picker.on('click', '.weui-mask', function () {
	        hide();
	    }).on('click', '.weui-picker__action', function () {
	        hide();
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });

	    _sington = $picker[0];
	    _sington.hide = hide;
	    return _sington;
	}

	/**
	 * datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
	 * @param options 配置项
	 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
	 * @param {number=|string|Date} [options.start=2000] 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date
	 * @param {number=|string|Date} [options.end=2030] 结束年份，同上
	 * @param {string=} [options.cron=* * *] cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六）
	 * @param {string=} [options.className] 自定义类名
	 * @param {array=} [options.defaultValue] 默认选项的value数组, 如 [1991, 6, 9]
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 *@example
	 * // 示例1：
	 * weui.datePicker({
	 *     start: 1990,
	 *     end: 2000,
	 *     defaultValue: [1991, 6, 9],
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 *
	 * // 示例2：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      defaultValue: [2020, 6, 9],
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例3：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '* * 0,6',  // 每逢周日、周六
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例4：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '1-10 * *',  // 每月1日-10日
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 */
	function datePicker(options) {
	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: 2000,
	        end: 2030,
	        cron: '* * *'
	    }, options);

	    // 兼容原来的 start、end 传 Number 的用法
	    if (typeof defaults.start === 'number') {
	        defaults.start = new Date(defaults.start + '/01/01');
	    } else if (typeof defaults.start === 'string') {
	        defaults.start = new Date(defaults.start.replace(/-/g, '/'));
	    }
	    if (typeof defaults.end === 'number') {
	        defaults.end = new Date(defaults.end + '/12/31');
	    } else if (typeof defaults.end === 'string') {
	        defaults.end = new Date(defaults.end.replace(/-/g, '/'));
	    }

	    var findBy = function findBy(array, key, value) {
	        for (var i = 0, len = array.length; i < len; i++) {
	            var _obj = array[i];
	            if (_obj[key] == value) {
	                return _obj;
	            }
	        }
	    };

	    var date = [];
	    var interval = _cron2.default.parse(defaults.cron, defaults.start, defaults.end);
	    var obj = void 0;
	    do {
	        obj = interval.next();

	        var year = obj.value.getFullYear();
	        var month = obj.value.getMonth() + 1;
	        var day = obj.value.getDate();

	        var Y = findBy(date, 'value', year);
	        if (!Y) {
	            Y = {
	                label: year + '年',
	                value: year,
	                children: []
	            };
	            date.push(Y);
	        }
	        var M = findBy(Y.children, 'value', month);
	        if (!M) {
	            M = {
	                label: month + '月',
	                value: month,
	                children: []
	            };
	            Y.children.push(M);
	        }
	        M.children.push({
	            label: day + '日',
	            value: day
	        });
	    } while (!obj.done);

	    return picker(date, defaults);
	}

	exports.default = {
	    picker: picker,
	    datePicker: datePicker
	};
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
	var constraints = [[1, 31], [1, 12], [0, 6]];

	/**
	 * Schedule
	 */

	var Schedule = function () {
	    function Schedule(fields, start, end) {
	        _classCallCheck(this, Schedule);

	        /**
	         * dayOfMonth
	         * @type {Array}
	         */
	        this._dates = fields[0];

	        /**
	         * month
	         * @type {Array}
	         */
	        this._months = fields[1];

	        /**
	         * dayOfWeek
	         * @type {Array}
	         */
	        this._days = fields[2];

	        /**
	         * start
	         * @type {Date}
	         */
	        this._start = start;

	        /**
	         * end
	         * @type {Date}
	         */
	        this._end = end;

	        /**
	         * cursor
	         * @type {Date}
	         * @private
	         */
	        this._pointer = start;
	    }

	    _createClass(Schedule, [{
	        key: '_findNext',
	        value: function _findNext() {
	            var next = void 0;
	            while (true) {
	                if (this._end.getTime() - this._pointer.getTime() < 0) {
	                    throw new Error('out of range, end is ' + this._end + ', current is ' + this._pointer);
	                }

	                var month = this._pointer.getMonth();
	                var date = this._pointer.getDate();
	                var day = this._pointer.getDay();

	                if (this._months.indexOf(month + 1) === -1) {
	                    this._pointer.setMonth(month + 1);
	                    this._pointer.setDate(1);
	                    continue;
	                }

	                if (this._dates.indexOf(date) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                if (this._days.indexOf(day) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                next = new Date(this._pointer);

	                break;
	            }
	            return next;
	        }

	        /**
	         * fetch next data
	         */

	    }, {
	        key: 'next',
	        value: function next() {
	            var value = this._findNext();
	            // move next date
	            this._pointer.setDate(this._pointer.getDate() + 1);
	            return {
	                value: value,
	                done: !this.hasNext()
	            };
	        }

	        /**
	         * has next
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasNext',
	        value: function hasNext() {
	            try {
	                this._findNext();
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }]);

	    return Schedule;
	}();

	function parseField(field, constraints) {
	    var low = constraints[0];
	    var high = constraints[1];
	    var result = [];
	    var pointer = void 0;

	    // * 号等于最低到最高
	    field = field.replace(/\*/g, low + '-' + high);

	    // 处理 1,2,5-9 这种情况
	    var fields = field.split(',');
	    for (var i = 0, len = fields.length; i < len; i++) {
	        var f = fields[i];
	        if (f.match(regex)) {
	            f.replace(regex, function ($0, lower, upper, step) {
	                // ref to `cron-parser`
	                step = parseInt(step) || 1;
	                // Positive integer higher than constraints[0]
	                lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

	                // Positive integer lower than constraints[1]
	                upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

	                // Count from the lower barrier to the upper
	                pointer = lower;

	                do {
	                    result.push(pointer);
	                    pointer += step;
	                } while (pointer <= upper);
	            });
	        }
	    }
	    return result;
	}

	/**
	 *
	 * @param expr
	 * @param start
	 * @param end
	 * @returns {*}
	 */
	function parse(expr, start, end) {
	    var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
	    var fields = [];
	    atoms.forEach(function (atom, index) {
	        var constraint = constraints[index];
	        fields.push(parseField(atom, constraint));
	    });
	    return new Schedule(fields, start, end);
	}

	exports.default = {
	    parse: parse
	};
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;

	    var defaults = _util2.default.extend({
	        items: [], // 数据
	        scrollable: '.weui-picker__content', // 滚动的元素
	        offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
	        rowHeight: 34, // 列表每一行的高度
	        onChange: _util2.default.noop, // onChange回调
	        temp: null // translate的缓存
	    }, options);
	    defaults.bodyHeight = 7 * defaults.rowHeight; // picker的高度，用于辅助点击滚动的计算

	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object' ? item.label : item) + '</div>';
	    }).join('');
	    var $this = (0, _util2.default)(this);

	    $this.find('.weui-picker__content').html(items);

	    var $scrollable = $this.find(defaults.scrollable); // 可滚动的元素
	    var start = void 0; // 保存开始按下的位置
	    var end = void 0; // 保存结束时的位置
	    var startTime = void 0; // 开始触摸的时间
	    var translate = void 0; // 缓存 translate
	    var points = []; // 记录移动点
	    var windowHeight = window.innerHeight; // 屏幕的高度

	    // 首次触发选中事件
	    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 移动到最接近的那一行
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 不要超过最大值或者最小值
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 如果是 disabled 的就跳过
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 触发选择事件
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    function _start(pageY) {
	        start = pageY;
	        startTime = +new Date();
	    }
	    function _move(pageY) {
	        end = pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }
	    }
	    function _end(pageY) {
	        if (!start) return;

	        /**
	         * 思路:
	         * 0. touchstart 记录按下的点和时间
	         * 1. touchmove 移动时记录前 40个经过的点和时间
	         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
	         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
	         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
	         */
	        var endTime = new Date().getTime();
	        var relativeY = windowHeight - defaults.bodyHeight / 2;
	        end = pageY;

	        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
	        if (endTime - startTime > 100) {
	            //如果end和start相差小于10，则视为
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 出手时的速度
	                    var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }

	        start = null;
	    }

	    /**
	     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
	     */
	    $scrollable = $this.offAll().on('touchstart', function (evt) {
	        _start(evt.changedTouches[0].pageY);
	    }).on('touchmove', function (evt) {
	        _move(evt.changedTouches[0].pageY);
	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        _end(evt.changedTouches[0].pageY);
	    }).find(defaults.scrollable);

	    // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
	    var isSupportTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
	    if (!isSupportTouch) {
	        $this.on('mousedown', function (evt) {
	            _start(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mousemove', function (evt) {
	            if (!start) return;

	            _move(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mouseup mouseleave', function (evt) {
	            _end(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        });
	    }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> ";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js?modules&importLoaders=1&localIdentName=[local]!../../node_modules/_postcss-loader@0.13.0@postcss-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./picker.less", function() {
				var newContent = require("!!../../node_modules/_css-loader@0.25.0@css-loader/index.js?modules&importLoaders=1&localIdentName=[local]!../../node_modules/_postcss-loader@0.13.0@postcss-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./picker.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, "/*\n* Tencent is pleased to support the open source community by making WeUI available.\n*\n* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.\n*\n* Licensed under the MIT License (the \"License\"); you may not use this file except in compliance\n* with the License. You may obtain a copy of the License at\n*\n*       http://opensource.org/licenses/MIT\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License is\n* distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,\n* either express or implied. See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n/* picker */\n.weui-picker {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  z-index: 5000;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translate(0, 100%);\n  transition: transform .3s;\n}\n.weui-picker__hd {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.18rem .3rem;\n  background-color: #fff;\n  position: relative;\n  text-align: center;\n  font-size: 1.7em;\n}\n.weui-picker__hd:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-picker__action {\n  display: block;\n  -ms-flex: 1;\n      flex: 1;\n  color: #FA6855;\n  text-decoration: none;\n}\n.weui-picker__action:first-child {\n  text-align: left;\n  color: #888;\n}\n.weui-picker__action:last-child {\n  text-align: right;\n}\n.weui-picker__bd {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: 4.76rem;\n  overflow: hidden;\n}\n.weui-picker__group {\n  -ms-flex: 1;\n      flex: 1;\n  position: relative;\n  height: 100%;\n}\n.weui-picker__mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  z-index: 3;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n  background-position: top, bottom;\n  background-size: 100% 2.04rem;\n  background-repeat: no-repeat;\n  transform: translateZ(0);\n}\n.weui-picker__indicator {\n  width: 100%;\n  height: 0.68rem;\n  position: absolute;\n  left: 0;\n  top: 2.04rem;\n  z-index: 3;\n}\n.weui-picker__indicator:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-picker__indicator:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-picker__content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.weui-picker__item {\n  padding: 0;\n  height: 0.68rem;\n  line-height: 0.68rem;\n  text-align: center;\n  color: #000;\n  font-size: 1.6em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.weui-picker__item_disabled {\n  color: #999999;\n}\n/* animate */\n@keyframes slideUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.weui-animate-slide-up {\n  animation: slideUp ease .3s forwards;\n}\n@keyframes slideDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.weui-animate-slide-down {\n  animation: slideDown ease .3s forwards;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.weui-animate-fade-in {\n  animation: fadeIn ease .3s forwards;\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.weui-animate-fade-out {\n  animation: fadeOut ease .3s forwards;\n}\n/* mask */\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n", ""]);

	// exports
	exports.locals = {
		"weui-picker": "weui-picker",
		"weui-picker__hd": "weui-picker__hd",
		"weui-picker__action": "weui-picker__action",
		"weui-picker__bd": "weui-picker__bd",
		"weui-picker__group": "weui-picker__group",
		"weui-picker__mask": "weui-picker__mask",
		"weui-picker__indicator": "weui-picker__indicator",
		"weui-picker__content": "weui-picker__content",
		"weui-picker__item": "weui-picker__item",
		"weui-picker__item_disabled": "weui-picker__item_disabled",
		"weui-animate-slide-up": "weui-animate-slide-up",
		"slideUp": "slideUp",
		"weui-animate-slide-down": "weui-animate-slide-down",
		"slideDown": "slideDown",
		"weui-animate-fade-in": "weui-animate-fade-in",
		"fadeIn": "fadeIn",
		"weui-animate-fade-out": "weui-animate-fade-out",
		"fadeOut": "fadeOut",
		"weui-mask": "weui-mask",
		"weui-mask_transparent": "weui-mask_transparent"
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);