var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);

// ../../node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = (z && a[z]) || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = (G.prototype = new F());
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = {
      current: null,
    };
    var L = {
      key: true,
      ref: true,
      __self: true,
      __source: true,
    };
    function M(a, b, e) {
      var d,
        c = {},
        k = null,
        h = null;
      if (null != b)
        for (d in (void 0 !== b.ref && (h = b.ref),
        void 0 !== b.key && (k = "" + b.key),
        b))
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d]);
      return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current,
      };
    }
    function N(a, b) {
      return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner,
      };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = {
        "=": "=0",
        ":": "=2",
      };
      return (
        "$" +
        a.replace(/[=:]/g, function (a2) {
          return b[a2];
        })
      );
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key
        ? escape("" + a.key)
        : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return (
          (h = a),
          (c = c(h)),
          (a = "" === d ? "." + Q(h, 0) : d),
          I(c)
            ? ((e = ""),
              null != a && (e = a.replace(P, "$&/") + "/"),
              R(c, b, e, "", function (a2) {
                return a2;
              }))
            : null != c &&
              (O(c) &&
                (c = N(
                  c,
                  e +
                    (!c.key || (h && h.key === c.key)
                      ? ""
                      : ("" + c.key).replace(P, "$&/") + "/") +
                    a
                )),
              b.push(c)),
          1
        );
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (((f = A(a)), "function" === typeof f))
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c));
      else if ("object" === k)
        throw (
          ((b = String(a)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === b
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : b) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [],
        c = 0;
      R(a, d, "", "", function (a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(
          function (b2) {
            if (0 === a._status || -1 === a._status)
              (a._status = 1), (a._result = b2);
          },
          function (b2) {
            if (0 === a._status || -1 === a._status)
              (a._status = 2), (a._result = b2);
          }
        );
        -1 === a._status && ((a._status = 0), (a._result = b));
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = {
      current: null,
    };
    var V = {
      transition: null,
    };
    var W = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: K,
    };
    exports.Children = {
      map: S,
      forEach: function (a, b, e) {
        S(
          a,
          function () {
            b.apply(this, arguments);
          },
          e
        );
      },
      count: function (a) {
        var b = 0;
        S(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return (
          S(a, function (a2) {
            return a2;
          }) || []
        );
      },
      only: function (a) {
        if (!O(a))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return a;
      },
    };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function (a, b, e) {
      if (null === a || void 0 === a)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            a +
            "."
        );
      var d = C({}, a.props),
        c = a.key,
        k = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && ((k = b.ref), (h = K.current));
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) &&
            !L.hasOwnProperty(f) &&
            (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h,
      };
    };
    exports.createContext = function (a) {
      a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      a.Provider = {
        $$typeof: t,
        _context: a,
      };
      return (a.Consumer = a);
    };
    exports.createElement = M;
    exports.createFactory = function (a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function () {
      return {
        current: null,
      };
    };
    exports.forwardRef = function (a) {
      return {
        $$typeof: v,
        render: a,
      };
    };
    exports.isValidElement = O;
    exports.lazy = function (a) {
      return {
        $$typeof: y,
        _payload: {
          _status: -1,
          _result: a,
        },
        _init: T,
      };
    };
    exports.memo = function (a, b) {
      return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b,
      };
    };
    exports.startTransition = function (a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function (a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function (a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function () {};
    exports.useDeferredValue = function (a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function (a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function () {
      return U.current.useId();
    };
    exports.useImperativeHandle = function (a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function (a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function (a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function (a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function (a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function (a) {
      return U.current.useRef(a);
    };
    exports.useState = function (a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function (a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function () {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  },
});

// ../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function () {
        "use strict";
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
            "function"
        ) {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
            new Error()
          );
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null,
        };
        var ReactCurrentBatchConfig = {
          transition: null,
        };
        var ReactCurrentActQueue = {
          current: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
        };
        var ReactCurrentOwner = {
          current: null,
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (
                var _len = arguments.length,
                  args = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function (item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName =
              (_constructor &&
                (_constructor.displayName || _constructor.name)) ||
              "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error(
              "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
              callerName,
              componentName
            );
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function (publicInstance) {
            return false;
          },
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function (
            publicInstance,
            completeState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function (
            publicInstance,
            partialState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, "setState");
          },
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          if (
            typeof partialState !== "object" &&
            typeof partialState !== "function" &&
            partialState != null
          ) {
            throw new Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          }
          this.updater.enqueueSetState(
            this,
            partialState,
            callback,
            "setState"
          );
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: [
              "isMounted",
              "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
            ],
            replaceState: [
              "replaceState",
              "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
            ],
          };
          var defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function () {
                warn(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  info[0],
                  info[1]
                );
                return void 0;
              },
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = (PureComponent.prototype =
          new ComponentDummy());
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null,
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag =
              typeof Symbol === "function" && Symbol.toStringTag;
            var type =
              (hasToStringTag && value[Symbol.toStringTag]) ||
              value.constructor.name ||
              "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error(
                "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                typeName(value)
              );
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== ""
            ? wrapperName + "(" + functionName + ")"
            : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              );
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true,
        };
        var specialPropKeyWarningShown,
          specialPropRefWarningShown,
          didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  displayName
                );
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true,
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error(
                  "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  displayName
                );
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true,
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (
              typeof config.ref === "string" &&
              ReactCurrentOwner.current &&
              config.__self &&
              ReactCurrentOwner.current.stateNode !== config.__self
            ) {
              var componentName = getComponentNameFromType(
                ReactCurrentOwner.current.type
              );
              if (!didWarnAboutStringRefs[componentName]) {
                error(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  componentName,
                  config.ref
                );
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function (
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner,
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self,
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source,
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName =
                typeof type === "function"
                  ? type.displayName || type.name || "Unknown"
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          );
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          );
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                element +
                "."
            );
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(
            element.type,
            key,
            ref,
            self,
            source,
            owner,
            props
          );
        }
        function isValidElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2",
          };
          var escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (
            typeof element === "object" &&
            element !== null &&
            element.key != null
          ) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(
          children,
          array,
          escapedPrefix,
          nameSoFar,
          callback
        ) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey =
              nameSoFar === ""
                ? SEPARATOR + getElementKey(_child, 0)
                : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(
                mappedChild,
                array,
                escapedChildKey,
                "",
                function (c) {
                  return c;
                }
              );
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (
                    mappedChild.key &&
                    (!_child || _child.key !== mappedChild.key)
                  ) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix +
                    (mappedChild.key &&
                    (!_child || _child.key !== mappedChild.key)
                      ? escapeUserProvidedKey("" + mappedChild.key) + "/"
                      : "") +
                    childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix =
            nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback
              );
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                    );
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(
                  child,
                  array,
                  escapedPrefix,
                  nextName,
                  callback
                );
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error(
                "Objects are not valid as a React child (found: " +
                  (childrenString === "[object Object]"
                    ? "object with keys {" +
                      Object.keys(children).join(", ") +
                      "}"
                    : childrenString) +
                  "). If you meant to render a collection of children, use an array instead."
              );
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function () {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        }
        function toArray(children) {
          return (
            mapChildren(children, function (child) {
              return child;
            }) || []
          );
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error(
              "React.Children.only expected to receive a single React element child."
            );
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context,
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function () {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error(
                      "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                    );
                  }
                  return context.Provider;
                },
                set: function (_Provider) {
                  context.Provider = _Provider;
                },
              },
              _currentValue: {
                get: function () {
                  return context._currentValue;
                },
                set: function (_currentValue) {
                  context._currentValue = _currentValue;
                },
              },
              _currentValue2: {
                get: function () {
                  return context._currentValue2;
                },
                set: function (_currentValue2) {
                  context._currentValue2 = _currentValue2;
                },
              },
              _threadCount: {
                get: function () {
                  return context._threadCount;
                },
                set: function (_threadCount) {
                  context._threadCount = _threadCount;
                },
              },
              Consumer: {
                get: function () {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error(
                      "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                    );
                  }
                  return context.Consumer;
                },
              },
              displayName: {
                get: function () {
                  return context.displayName;
                },
                set: function (displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn(
                      "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                      displayName
                    );
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                },
              },
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(
              function (moduleObject2) {
                if (
                  payload._status === Pending ||
                  payload._status === Uninitialized
                ) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              },
              function (error2) {
                if (
                  payload._status === Pending ||
                  payload._status === Uninitialized
                ) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              }
            );
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error(
                  "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
                  moduleObject
                );
              }
            }
            {
              if (!("default" in moduleObject)) {
                error(
                  "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                  moduleObject
                );
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: Uninitialized,
            _result: ctor,
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer,
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function () {
                  return defaultProps;
                },
                set: function (newDefaultProps) {
                  error(
                    "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                  );
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true,
                  });
                },
              },
              propTypes: {
                configurable: true,
                get: function () {
                  return propTypes;
                },
                set: function (newPropTypes) {
                  error(
                    "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                  );
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true,
                  });
                },
              },
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error(
                "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
              );
            } else if (typeof render !== "function") {
              error(
                "forwardRef requires a render function but was given %s.",
                render === null ? "null" : typeof render
              );
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error(
                  "forwardRef render functions accept exactly two parameters: props and ref. %s",
                  render.length === 1
                    ? "Did you forget to use the ref parameter?"
                    : "Any additional parameter will be undefined."
                );
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error(
                  "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
                );
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render,
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_PROFILER_TYPE ||
            enableDebugTracing ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            enableLegacyHidden ||
            type === REACT_OFFSCREEN_TYPE ||
            enableScopeAPI ||
            enableCacheElement ||
            enableTransitionTracing
          ) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_MODULE_REFERENCE ||
              type.getModuleId !== void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error(
                "memo: The first argument must be a component. Instead received: %s",
                type === null ? "null" : typeof type
              );
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare,
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error(
                "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
              );
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error(
                  "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
                );
              } else if (realContext.Provider === Context) {
                error(
                  "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
                );
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        ) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true,
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props,
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog,
                }),
                info: assign({}, props, {
                  value: prevInfo,
                }),
                warn: assign({}, props, {
                  value: prevWarn,
                }),
                error: assign({}, props, {
                  value: prevError,
                }),
                group: assign({}, props, {
                  value: prevGroup,
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed,
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd,
                }),
              });
            }
            if (disabledDepth < 0) {
              error(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
            }
          }
        }
        var ReactCurrentDispatcher$1 =
          ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = (match && match[1]) || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function () {
                  throw Error();
                },
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame =
                          "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace(
                            "<anonymous>",
                            fn.displayName
                          );
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(
                  type.type,
                  source,
                  ownerFn
                );
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(
                    init(payload),
                    source,
                    ownerFn
                  );
                } catch (x) {}
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 =
          ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          element
        ) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error(
                      (componentName || "React class") +
                        ": " +
                        location +
                        " type `" +
                        typeSpecName +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof typeSpecs[typeSpecName] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    componentName || "React class",
                    location,
                    typeSpecName,
                    typeof error$1
                  );
                  setCurrentlyValidatingElement(null);
                }
                if (
                  error$1 instanceof Error &&
                  !(error$1.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return (
              "\n\nCheck your code at " + fileName + ":" + lineNumber + "."
            );
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName =
              typeof parentType === "string"
                ? parentType
                : parentType.displayName || parentType.name;
            if (parentName) {
              info =
                "\n\nCheck the top-level render call using <" +
                parentName +
                ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (
            !element._store ||
            element._store.validated ||
            element.key != null
          ) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo =
            getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (
            element &&
            element._owner &&
            element._owner !== ReactCurrentOwner.current
          ) {
            childOwner =
              " It was passed a child from " +
              getComponentNameFromType(element._owner.type) +
              ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              currentComponentErrorInfo,
              childOwner
            );
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (
              typeof type === "object" &&
              (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE)
            ) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (
              type.PropTypes !== void 0 &&
              !propTypesMisspellWarningShown
            ) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error(
                "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                _name || "Unknown"
              );
            }
            if (
              typeof type.getDefaultProps === "function" &&
              !type.getDefaultProps.isReactClassApproved
            ) {
              error(
                "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
              );
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  key
                );
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (
              type === void 0 ||
              (typeof type === "object" &&
                type !== null &&
                Object.keys(type).length === 0)
            ) {
              info +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (
              type !== void 0 &&
              type.$$typeof === REACT_ELEMENT_TYPE
            ) {
              typeString =
                "<" +
                (getComponentNameFromType(type.type) || "Unknown") +
                " />";
              info =
                " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error(
                "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                typeString,
                info
              );
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn(
                "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
              );
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function () {
                warn(
                  "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                );
                Object.defineProperty(this, "type", {
                  value: type,
                });
                return type;
              },
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers =
              /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn(
                    "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                  );
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function (callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                      );
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (
                !prevIsBatchingLegacy &&
                ReactCurrentActQueue.didScheduleLegacyUpdate
              ) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (
              result !== null &&
              typeof result === "object" &&
              typeof result.then === "function"
            ) {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function (resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(
                    function (returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(
                          returnValue2,
                          resolve,
                          reject
                        );
                      } else {
                        resolve(returnValue2);
                      }
                    },
                    function (error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    }
                  );
                },
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve()
                    .then(function () {})
                    .then(function () {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error(
                          "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                        );
                      }
                    });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function (resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(
                        returnValue,
                        resolve,
                        reject
                      );
                    } else {
                      resolve(returnValue);
                    }
                  },
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function (resolve, reject) {
                    resolve(returnValue);
                  },
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error(
                "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
              );
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function () {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild,
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
          ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
            "function"
        ) {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
            new Error()
          );
        }
      })();
    }
  },
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production_min();
    } else {
      module.exports = require_react_development();
    }
  },
});

// components/button/Button.tsx
var import_react2 = __toESM(require_react());
import { css as _css } from "@emotion/react";
import styled from "@emotion/styled";
import { jsx as __cssprop } from "@emotion/react";
var MyButton = ({
  children,
  color,
  size,
  variant,
  rightIcon,
  leftIcon,
  className,
  height,
  width,
  borderWidth,
}) => {
  const styleOptions = [];
  const heightStyle = height ? _css`height: ${height};` : null;
  const widthStyle = width ? _css`width: ${width};` : null;
  const borderWidthStyle = borderWidth
    ? _css`border-width: ${borderWidth};`
    : null;
  const sizeMap = {
    xs: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    sm: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    md: {
      paddingLeft: "1.75rem",
      paddingRight: "1.75rem",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    lg: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
  };
  styleOptions.push(sizeMap[size], heightStyle, widthStyle, borderWidthStyle);
  const colorMap = {
    yellow: {
      solid: {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(252 207 0 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(215 178 7 / var(--tw-bg-opacity))",
        },
      },
      outline: {
        borderWidth: "2px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(252 207 0 / var(--tw-border-opacity))",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(252 207 0 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(252 207 0 / var(--tw-bg-opacity))",
        },
      },
      ghost: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(252 207 0 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(252 207 0 / var(--tw-bg-opacity))",
        },
      },
      link: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(252 207 0 / var(--tw-text-opacity))",
        ":hover": {
          backgroundColor: "transparent",
          textDecorationLine: "underline",
        },
      },
    },
    green: {
      solid: {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(68 175 53 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(40 140 26 / var(--tw-bg-opacity))",
        },
      },
      outline: {
        borderWidth: "2px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(68 175 53 / var(--tw-border-opacity))",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(68 175 53 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(68 175 53 / var(--tw-bg-opacity))",
        },
      },
      ghost: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(68 175 53 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(68 175 53 / var(--tw-bg-opacity))",
        },
      },
      link: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(68 175 53 / var(--tw-text-opacity))",
        ":hover": {
          backgroundColor: "transparent",
          textDecorationLine: "underline",
        },
      },
    },
    blue: {
      solid: {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(0 155 217 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(18 97 128 / var(--tw-bg-opacity))",
        },
      },
      outline: {
        borderWidth: "2px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(0 155 217 / var(--tw-border-opacity))",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(0 155 217 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(0 155 217 / var(--tw-bg-opacity))",
        },
      },
      ghost: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(0 155 217 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(0 155 217 / var(--tw-bg-opacity))",
        },
      },
      link: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(0 155 217 / var(--tw-text-opacity))",
        ":hover": {
          backgroundColor: "transparent",
          textDecorationLine: "underline",
        },
      },
    },
    red: {
      solid: {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(230 35 16 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(185 28 28 / var(--tw-bg-opacity))",
        },
      },
      outline: {
        borderWidth: "2px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(230 35 16 / var(--tw-border-opacity))",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(230 35 16 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(230 35 16 / var(--tw-bg-opacity))",
        },
      },
      ghost: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(230 35 16 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "0.2",
          backgroundColor: "rgb(230 35 16 / var(--tw-bg-opacity))",
        },
      },
      link: {
        borderStyle: "none",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(230 35 16 / var(--tw-text-opacity))",
        ":hover": {
          backgroundColor: "transparent",
          textDecorationLine: "underline",
        },
      },
    },
  };
  const variantMap = {
    solid: _css`
      ${{
        borderRadius: "0.75rem",
        borderWidth: "1px",
        borderStyle: "solid",
        "--tw-border-opacity": "1",
        borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingLeft: "1.75rem",
        paddingRight: "1.75rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(209 213 219 / var(--tw-bg-opacity))",
        },
      }}
      ${({ color: color2 }) => {
        var _a;
        return color2 && ((_a = colorMap[color2]) == null ? void 0 : _a.solid);
      }}
    `,
    outline: _css`
      ${{
        borderWidth: "1px",
        borderStyle: "solid",
        "--tw-border-opacity": "1",
        borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
        backgroundColor: "transparent",
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
        },
      }}
      ${({ color: color2 }) => {
        var _a;
        return (
          color2 && ((_a = colorMap[color2]) == null ? void 0 : _a.outline)
        );
      }}
    `,
    ghost: {
      borderStyle: "none",
      backgroundColor: "transparent",
      "--tw-text-opacity": "1",
      color: "rgb(75 85 99 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
      },
    },
    link: {
      borderStyle: "none",
      backgroundColor: "transparent",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        backgroundColor: "transparent",
        textDecorationLine: "underline",
      },
    },
  };
  const getVariantStyle = (variant2, color2) => {
    var _a, _b;
    if (color2 && variant2) {
      return (_a = colorMap[color2]) == null ? void 0 : _a[variant2];
    }
    if (color2) {
      return (_b = colorMap[color2]) == null ? void 0 : _b["solid"];
    }
    if (variant2) {
      return variantMap[variant2];
    }
    return null;
  };
  styleOptions.push(getVariantStyle(variant, color));
  const baseStyle2 = {
    borderRadius: "0.375rem",
    borderWidth: "1px",
    borderStyle: "solid",
    "--tw-border-opacity": "1",
    borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
    paddingLeft: "1.75rem",
    paddingRight: "1.75rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    fontFamily: "SuperMario, sans-serif",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    "--tw-text-opacity": "1",
    color: "rgb(75 85 99 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(209 213 219 / var(--tw-bg-opacity))",
    },
  };
  const Button = styled.button`
    ${baseStyle2}
    ${styleOptions}
  `;
  const IconWrapper = styled.span`
    ${{
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    }};
  `;
  return __cssprop(
    Button,
    {
      className,
    },
    __cssprop(
      "div",
      {
        className: "flex items-center",
      },
      leftIcon && __cssprop(IconWrapper, null, leftIcon),
      children,
      rightIcon && __cssprop(IconWrapper, null, rightIcon)
    )
  );
};
var Button_default = MyButton;

// components/checkbox/Checkbox.tsx
var import_react4 = __toESM(require_react());
import styled2 from "@emotion/styled";
import { jsx as __cssprop2 } from "@emotion/react";
var MyCheckbox = ({ size, color, disabled }) => {
  const styleOptions = [];
  const sizeMap = {
    xs: {
      position: "relative",
      height: "0.75rem",
      width: "0.75rem",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "0.25rem",
      borderWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
      ":checked": {
        borderColor: "rgb(133 77 14 / var(--tw-border-opacity))",
        "--tw-border-opacity": "1",
        backgroundImage:
          "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
        backgroundSize: "contain",
      },
      ":focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },
    },
    md: {
      position: "relative",
      height: "1rem",
      width: "1rem",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "0.25rem",
      borderWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
      ":checked": {
        borderColor: "rgb(133 77 14 / var(--tw-border-opacity))",
        "--tw-border-opacity": "1",
        backgroundImage:
          "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
        backgroundSize: "contain",
      },
      ":focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },
    },
    lg: {
      position: "relative",
      height: "1.25rem",
      width: "1.25rem",
      cursor: "pointer",
      appearance: "none",
      borderRadius: "0.25rem",
      borderWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
      ":checked": {
        borderColor: "rgb(133 77 14 / var(--tw-border-opacity))",
        "--tw-border-opacity": "1",
        backgroundImage:
          "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
        backgroundSize: "contain",
      },
      ":focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },
    },
  };
  styleOptions.push(sizeMap[size]);
  const colorMap = {
    green: {
      ":checked": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(22 163 74 / var(--tw-border-opacity))",
      },
    },
    blue: {
      ":checked": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(30 64 175 / var(--tw-border-opacity))",
      },
    },
    yellow: {
      ":checked": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(253 224 71 / var(--tw-border-opacity))",
      },
    },
  };
  styleOptions.push(colorMap[color]);
  const baseStyle2 = {
    position: "relative",
    height: "1rem",
    width: "1rem",
    cursor: "pointer",
    appearance: "none",
    borderRadius: "0.25rem",
    borderWidth: "2px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
    ":checked": {
      borderWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(133 77 14 / var(--tw-border-opacity))",
      backgroundImage:
        "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  };
  const Checkbox = styled2.input`
    ${baseStyle2}
  `;
  return __cssprop2(Checkbox, {
    css: styleOptions,
    type: "checkbox",
    disabled,
  });
};
var Checkbox_default = MyCheckbox;

// components/input/Input.tsx
var import_react6 = __toESM(require_react());
import styled3 from "@emotion/styled";
import { jsx as __cssprop3 } from "@emotion/react";
var baseStyle = {
  width: "100%",
  borderRadius: "0.5rem",
  borderWidth: "1px",
  borderStyle: "solid",
  "--tw-border-opacity": "1",
  borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  "--tw-text-opacity": "1",
  color: "rgb(0 0 0 / var(--tw-text-opacity))",
  ":focus": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(107 114 128 / var(--tw-border-opacity))",
    outline: "2px solid transparent",
    outlineOffset: "2px",
  },
};
var Input = styled3.input`
  ${baseStyle}
`;
var MyInput = ({ variant, size, placeholder, onChange, value }) => {
  const styleOptions = [];
  const sizeMap = {
    xs: {
      borderRadius: "0.375rem",
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
      paddingTop: "0px",
      paddingBottom: "0px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    sm: {
      borderRadius: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    md: {
      borderRadius: "0.5rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    lg: {
      borderRadius: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
  };
  styleOptions.push(sizeMap[size]);
  const variantMap = {
    outline: {
      borderWidth: "1px",
      borderStyle: "solid",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
    },
    filled: {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
      ":focus": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
      },
    },
    flushed: {
      borderRadius: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderTopWidth: "0px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
    unstyled: {
      borderRadius: "0px",
      borderWidth: "0px",
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
  };
  styleOptions.push(variantMap[variant]);
  return __cssprop3(Input, {
    type: "text",
    placeholder,
    css: styleOptions,
    onChange,
    value,
  });
};
var Input_default = MyInput;

// components/textarea/Textarea.tsx
var import_react8 = __toESM(require_react());
import styled4 from "@emotion/styled";
import { jsx as __cssprop4 } from "@emotion/react";
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
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
var MyTextarea = ({ placeholder, resize, disabled, ...props }) => {
  const styleOptions = [];
  const resizeMap = {
    none: {
      resize: "none",
    },
    both: {
      resize: "both",
    },
    horizontal: {
      resize: "horizontal",
    },
    vertical: {
      resize: "vertical",
    },
  };
  styleOptions.push(resizeMap[resize]);
  disabled: ({
    cursor: "not-allowed",
    "--tw-border-opacity": "1",
    borderColor: "rgb(229 231 235 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(229 231 235 / var(--tw-text-opacity))",
  });
  const baseStyle2 = {
    height: "4rem",
    width: "100%",
    minWidth: "min-content",
    maxWidth: "100%",
    borderRadius: "0.5rem",
    borderWidth: "2px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(209 213 219 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
    padding: "1rem",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(127 29 29 / var(--tw-border-opacity))",
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  };
  const Textarea = styled4.textarea`
    ${baseStyle2}
  `;
  return __cssprop4(
    Textarea,
    _extends({}, props, {
      placeholder,
      disabled,
      css: styleOptions,
    })
  );
};
var Textarea_default = MyTextarea;

// components/radio/Radio.tsx
var import_react10 = __toESM(require_react());
import styled5 from "@emotion/styled";
import { jsx as __cssprop5 } from "@emotion/react";
var Radio = styled5.input`
  ${{
    display: "none",
  }}
`;
var Label = styled5.label`
  ${{
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-x-reverse": "0",
      marginRight: "calc(0.5rem * var(--tw-space-x-reverse))",
      marginLeft: "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))",
    },
  }}
`;
var Indicator = styled5.span`
  ${({ variant, isChecked }) => {
    if (isChecked) {
      if (variant === "primary") {
        return {
          height: "1rem",
          width: "1rem",
          borderRadius: "9999px",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
        };
      }
      if (variant === "secondary") {
        return {
          height: "1rem",
          width: "1rem",
          borderRadius: "9999px",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(239 68 68 / var(--tw-bg-opacity))",
        };
      }
      return {
        height: "1rem",
        width: "1rem",
        borderRadius: "9999px",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(107 114 128 / var(--tw-bg-opacity))",
      };
    }
    return {
      height: "1rem",
      width: "1rem",
      borderRadius: "9999px",
      borderWidth: "1px",
      "--tw-border-opacity": "1",
      borderColor: "rgb(107 114 128 / var(--tw-border-opacity))",
    };
  }}
`;
var Text = styled5.span`
  ${({ size }) => {
    if (size === "sm") {
      return {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      };
    }
    if (size === "lg") {
      return {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      };
    }
    return {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    };
  }}
`;
var MyRadio = ({
  variant = "default",
  size = "md",
  className,
  isChecked = false,
  onChange,
  value,
}) => {
  const handleInputChange = () => {
    if (onChange) {
      onChange(value || "");
    }
  };
  return __cssprop5(
    Label,
    {
      className,
    },
    __cssprop5(Radio, {
      type: "radio",
      onChange: handleInputChange,
    }),
    __cssprop5(Indicator, {
      variant,
      isChecked,
    }),
    __cssprop5(
      Text,
      {
        size,
      },
      "Option"
    )
  );
};
var Radio_default = MyRadio;
export {
  Button_default as MyButton,
  Checkbox_default as MyCheckbox,
  Input_default as MyInput,
  Radio_default as MyRadio,
  Textarea_default as MyTextarea,
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
