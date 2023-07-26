import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-dropdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-dropdown/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
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
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(source, true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var DEFAULT_PLACEHOLDER_STRING = "Select...";
    var Dropdown = function(_Component) {
      _inherits(Dropdown2, _Component);
      function Dropdown2(props) {
        var _this;
        _classCallCheck(this, Dropdown2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown2).call(this, props));
        _this.state = {
          selected: _this.parseValue(props.value, props.options) || {
            label: typeof props.placeholder === "undefined" ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
            value: ""
          },
          isOpen: false
        };
        _this.dropdownRef = (0, _react.createRef)();
        _this.mounted = true;
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
        _this.fireChangeEvent = _this.fireChangeEvent.bind(_assertThisInitialized(_this));
        return _this;
      }
      _createClass(Dropdown2, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.value !== prevProps.value) {
            if (this.props.value) {
              var selected = this.parseValue(this.props.value, this.props.options);
              if (selected !== this.state.selected) {
                this.setState({
                  selected
                });
              }
            } else {
              this.setState({
                selected: {
                  label: typeof this.props.placeholder === "undefined" ? DEFAULT_PLACEHOLDER_STRING : this.props.placeholder,
                  value: ""
                }
              });
            }
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          document.addEventListener("click", this.handleDocumentClick, false);
          document.addEventListener("touchend", this.handleDocumentClick, false);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
          document.removeEventListener("click", this.handleDocumentClick, false);
          document.removeEventListener("touchend", this.handleDocumentClick, false);
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown(event) {
          if (this.props.onFocus && typeof this.props.onFocus === "function") {
            this.props.onFocus(this.state.isOpen);
          }
          if (event.type === "mousedown" && event.button !== 0)
            return;
          event.stopPropagation();
          event.preventDefault();
          if (!this.props.disabled) {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }
        }
      }, {
        key: "parseValue",
        value: function parseValue(value, options) {
          var option;
          if (typeof value === "string") {
            for (var i = 0, num = options.length; i < num; i++) {
              if (options[i].type === "group") {
                var match = options[i].items.filter(function(item) {
                  return item.value === value;
                });
                if (match.length) {
                  option = match[0];
                }
              } else if (typeof options[i].value !== "undefined" && options[i].value === value) {
                option = options[i];
              }
            }
          }
          return option || value;
        }
      }, {
        key: "setValue",
        value: function setValue(value, label) {
          var newState = {
            selected: {
              value,
              label
            },
            isOpen: false
          };
          this.fireChangeEvent(newState);
          this.setState(newState);
        }
      }, {
        key: "fireChangeEvent",
        value: function fireChangeEvent(newState) {
          if (newState.selected !== this.state.selected && this.props.onChange) {
            this.props.onChange(newState.selected);
          }
        }
      }, {
        key: "renderOption",
        value: function renderOption(option) {
          var _classes;
          var value = option.value;
          if (typeof value === "undefined") {
            value = option.label || option;
          }
          var label = option.label || option.value || option;
          var isSelected = value === this.state.selected.value || value === this.state.selected;
          var classes = (_classes = {}, _defineProperty(_classes, "".concat(this.props.baseClassName, "-option"), true), _defineProperty(_classes, option.className, !!option.className), _defineProperty(_classes, "is-selected", isSelected), _classes);
          var optionClass = (0, _classnames["default"])(classes);
          var dataAttributes = Object.keys(option.data || {}).reduce(function(acc, dataKey) {
            return _objectSpread({}, acc, _defineProperty({}, "data-".concat(dataKey), option.data[dataKey]));
          }, {});
          return _react["default"].createElement("div", _extends({
            key: value,
            className: optionClass,
            onMouseDown: this.setValue.bind(this, value, label),
            onClick: this.setValue.bind(this, value, label),
            role: "option",
            "aria-selected": isSelected ? "true" : "false"
          }, dataAttributes), label);
        }
      }, {
        key: "buildMenu",
        value: function buildMenu() {
          var _this2 = this;
          var _this$props = this.props, options = _this$props.options, baseClassName = _this$props.baseClassName;
          var ops = options.map(function(option) {
            if (option.type === "group") {
              var groupTitle = _react["default"].createElement("div", {
                className: "".concat(baseClassName, "-title")
              }, option.name);
              var _options = option.items.map(function(item) {
                return _this2.renderOption(item);
              });
              return _react["default"].createElement("div", {
                className: "".concat(baseClassName, "-group"),
                key: option.name,
                role: "listbox",
                tabIndex: "-1"
              }, groupTitle, _options);
            } else {
              return _this2.renderOption(option);
            }
          });
          return ops.length ? ops : _react["default"].createElement("div", {
            className: "".concat(baseClassName, "-noresults")
          }, "No options found");
        }
      }, {
        key: "handleDocumentClick",
        value: function handleDocumentClick(event) {
          if (this.mounted) {
            if (!this.dropdownRef.current.contains(event.target)) {
              if (this.state.isOpen) {
                this.setState({
                  isOpen: false
                });
              }
            }
          }
        }
      }, {
        key: "isValueSelected",
        value: function isValueSelected() {
          return typeof this.state.selected === "string" || this.state.selected.value !== "";
        }
      }, {
        key: "render",
        value: function render() {
          var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;
          var _this$props2 = this.props, baseClassName = _this$props2.baseClassName, controlClassName = _this$props2.controlClassName, placeholderClassName = _this$props2.placeholderClassName, menuClassName = _this$props2.menuClassName, arrowClassName = _this$props2.arrowClassName, arrowClosed = _this$props2.arrowClosed, arrowOpen = _this$props2.arrowOpen, className = _this$props2.className;
          var disabledClass = this.props.disabled ? "Dropdown-disabled" : "";
          var placeHolderValue = typeof this.state.selected === "string" ? this.state.selected : this.state.selected.label;
          var dropdownClass = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-root"), true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, "is-open", this.state.isOpen), _classNames));
          var controlClass = (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-control"), true), _defineProperty(_classNames2, controlClassName, !!controlClassName), _defineProperty(_classNames2, disabledClass, !!disabledClass), _classNames2));
          var placeholderClass = (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, "".concat(baseClassName, "-placeholder"), true), _defineProperty(_classNames3, placeholderClassName, !!placeholderClassName), _defineProperty(_classNames3, "is-selected", this.isValueSelected()), _classNames3));
          var menuClass = (0, _classnames["default"])((_classNames4 = {}, _defineProperty(_classNames4, "".concat(baseClassName, "-menu"), true), _defineProperty(_classNames4, menuClassName, !!menuClassName), _classNames4));
          var arrowClass = (0, _classnames["default"])((_classNames5 = {}, _defineProperty(_classNames5, "".concat(baseClassName, "-arrow"), true), _defineProperty(_classNames5, arrowClassName, !!arrowClassName), _classNames5));
          var value = _react["default"].createElement("div", {
            className: placeholderClass
          }, placeHolderValue);
          var menu = this.state.isOpen ? _react["default"].createElement("div", {
            className: menuClass,
            "aria-expanded": "true"
          }, this.buildMenu()) : null;
          return _react["default"].createElement("div", {
            ref: this.dropdownRef,
            className: dropdownClass
          }, _react["default"].createElement("div", {
            className: controlClass,
            onMouseDown: this.handleMouseDown.bind(this),
            onTouchEnd: this.handleMouseDown.bind(this),
            "aria-haspopup": "listbox"
          }, value, _react["default"].createElement("div", {
            className: "".concat(baseClassName, "-arrow-wrapper")
          }, arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : _react["default"].createElement("span", {
            className: arrowClass
          }))), menu);
        }
      }]);
      return Dropdown2;
    }(_react.Component);
    Dropdown.defaultProps = {
      baseClassName: "Dropdown"
    };
    var _default = Dropdown;
    exports["default"] = _default;
  }
});
export default require_dist();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-dropdown.js.map
