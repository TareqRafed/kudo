(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'static/chunks/7716c_core-js-pure_c91240._.js',
  {
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var check = function (it) {
            return it && it.Math === Math && it;
          };
          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          module.exports = // eslint-disable-next-line es/no-global-this -- safe
            check(typeof globalThis == 'object' && globalThis) ||
            check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
            check(typeof self == 'object' && self) ||
            check(typeof global == 'object' && global) ||
            check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
            (function () {
              return this;
            })() ||
            Function('return this')();
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = function (exec) {
            try {
              return !!exec();
            } catch (error) {
              return true;
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-native.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          module.exports = !fails(function () {
            // eslint-disable-next-line es/no-function-prototype-bind -- safe
            var test = function () {}.bind();
            // eslint-disable-next-line no-prototype-builtins -- safe
            return typeof test != 'function' || test.hasOwnProperty('prototype');
          });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-apply.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var NATIVE_BIND = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-native.js [app-client] (ecmascript)',
          );
          var FunctionPrototype = Function.prototype;
          var apply = FunctionPrototype.apply;
          var call = FunctionPrototype.call;
          // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
          module.exports =
            (typeof Reflect == 'object' && Reflect.apply) ||
            (NATIVE_BIND
              ? call.bind(apply)
              : function () {
                  return call.apply(apply, arguments);
                });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var NATIVE_BIND = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-native.js [app-client] (ecmascript)',
          );
          var FunctionPrototype = Function.prototype;
          var call = FunctionPrototype.call;
          // eslint-disable-next-line es/no-function-prototype-bind -- safe
          var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
          module.exports = NATIVE_BIND
            ? uncurryThisWithBind
            : function (fn) {
                return function () {
                  return call.apply(fn, arguments);
                };
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var toString = uncurryThis({}.toString);
          var stringSlice = uncurryThis(''.slice);
          module.exports = function (it) {
            return stringSlice(toString(it), 8, -1);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var classofRaw = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          module.exports = function (fn) {
            // Nashorn bug:
            //   https://github.com/zloirock/core-js/issues/1128
            //   https://github.com/zloirock/core-js/issues/1130
            if (classofRaw(fn) === 'Function') return uncurryThis(fn);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
          var documentAll = typeof document == 'object' && document.all;
          // `IsCallable` abstract operation
          // https://tc39.es/ecma262/#sec-iscallable
          // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
          module.exports =
            typeof documentAll == 'undefined' && documentAll !== undefined
              ? function (argument) {
                  return typeof argument == 'function' || argument === documentAll;
                }
              : function (argument) {
                  return typeof argument == 'function';
                };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          // Detect IE8's incomplete defineProperty implementation
          module.exports = !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1] !== 7
            );
          });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var NATIVE_BIND = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-native.js [app-client] (ecmascript)',
          );
          var call = Function.prototype.call;
          // eslint-disable-next-line es/no-function-prototype-bind -- safe
          module.exports = NATIVE_BIND
            ? call.bind(call)
            : function () {
                return call.apply(call, arguments);
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $propertyIsEnumerable = {}.propertyIsEnumerable;
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          // Nashorn ~ JDK8 bug
          var NASHORN_BUG =
            getOwnPropertyDescriptor &&
            !$propertyIsEnumerable.call(
              {
                1: 2,
              },
              1,
            );
          // `Object.prototype.propertyIsEnumerable` method implementation
          // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
          exports.f = NASHORN_BUG
            ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
              }
            : $propertyIsEnumerable;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value,
            };
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/indexed-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var $Object = Object;
          var split = uncurryThis(''.split);
          // fallback for non-array-like ES3 and non-enumerable old V8 strings
          module.exports = fails(function () {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins -- safe
            return !$Object('z').propertyIsEnumerable(0);
          })
            ? function (it) {
                return classof(it) === 'String' ? split(it, '') : $Object(it);
              }
            : $Object;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-null-or-undefined.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // we can't use just `it == null` since of `document.all` special case
          // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
          module.exports = function (it) {
            return it === null || it === undefined;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isNullOrUndefined = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-null-or-undefined.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          // `RequireObjectCoercible` abstract operation
          // https://tc39.es/ecma262/#sec-requireobjectcoercible
          module.exports = function (it) {
            if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
            return it;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // toObject with fallback for non-array-like ES3 strings
          var IndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/indexed-object.js [app-client] (ecmascript)',
          );
          var requireObjectCoercible = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)',
          );
          module.exports = function (it) {
            return IndexedObject(requireObjectCoercible(it));
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          module.exports = function (it) {
            return typeof it == 'object' ? it !== null : isCallable(it);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = {};
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var aFunction = function (variable) {
            return isCallable(variable) ? variable : undefined;
          };
          module.exports = function (namespace, method) {
            return arguments.length < 2
              ? aFunction(path[namespace]) || aFunction(globalThis[namespace])
              : (path[namespace] && path[namespace][method]) ||
                  (globalThis[namespace] && globalThis[namespace][method]);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          module.exports = uncurryThis({}.isPrototypeOf);
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var navigator = globalThis.navigator;
          var userAgent = navigator && navigator.userAgent;
          module.exports = userAgent ? String(userAgent) : '';
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var userAgent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)',
          );
          var process = globalThis.process;
          var Deno = globalThis.Deno;
          var versions = (process && process.versions) || (Deno && Deno.version);
          var v8 = versions && versions.v8;
          var match, version;
          if (v8) {
            match = v8.split('.');
            // in old Chrome, versions of V8 isn't V8 = Chrome / 10
            // but their correct versions are not interesting for us
            version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
          }
          // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
          // so check `userAgent` even if `.v8` exists, but 0
          if (!version && userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
              match = userAgent.match(/Chrome\/(\d+)/);
              if (match) version = +match[1];
            }
          }
          module.exports = version;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var $String = globalThis.String;
          // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
          module.exports =
            !!Object.getOwnPropertySymbols &&
            !fails(function () {
              var symbol = Symbol('symbol detection');
              // Chrome 38 Symbol has incorrect toString conversion
              // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
              // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
              // of course, fail.
              return (
                !$String(symbol) ||
                !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
                (!Symbol.sham && V8_VERSION && V8_VERSION < 41)
              );
            });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var USE_SYMBOL_AS_UID = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js [app-client] (ecmascript)',
          );
          var $Object = Object;
          module.exports = USE_SYMBOL_AS_UID
            ? function (it) {
                return typeof it == 'symbol';
              }
            : function (it) {
                var $Symbol = getBuiltIn('Symbol');
                return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/try-to-string.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $String = String;
          module.exports = function (argument) {
            try {
              return $String(argument);
            } catch (error) {
              return 'Object';
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var tryToString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/try-to-string.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          // `Assert: IsCallable(argument) is true`
          module.exports = function (argument) {
            if (isCallable(argument)) return argument;
            throw new $TypeError(tryToString(argument) + ' is not a function');
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          var isNullOrUndefined = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-null-or-undefined.js [app-client] (ecmascript)',
          );
          // `GetMethod` abstract operation
          // https://tc39.es/ecma262/#sec-getmethod
          module.exports = function (V, P) {
            var func = V[P];
            return isNullOrUndefined(func) ? undefined : aCallable(func);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          // `OrdinaryToPrimitive` abstract operation
          // https://tc39.es/ecma262/#sec-ordinarytoprimitive
          module.exports = function (input, pref) {
            var fn, val;
            if (pref === 'string' && isCallable((fn = input.toString)) && !isObject((val = call(fn, input))))
              return val;
            if (isCallable((fn = input.valueOf)) && !isObject((val = call(fn, input)))) return val;
            if (pref !== 'string' && isCallable((fn = input.toString)) && !isObject((val = call(fn, input))))
              return val;
            throw new $TypeError("Can't convert object to primitive value");
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = true;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-global-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          // eslint-disable-next-line es/no-object-defineproperty -- safe
          var defineProperty = Object.defineProperty;
          module.exports = function (key, value) {
            try {
              defineProperty(globalThis, key, {
                value: value,
                configurable: true,
                writable: true,
              });
            } catch (error) {
              globalThis[key] = value;
            }
            return value;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-store.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var IS_PURE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var defineGlobalProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-global-property.js [app-client] (ecmascript)',
          );
          var SHARED = '__core-js_shared__';
          var store = (module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {}));
          (store.versions || (store.versions = [])).push({
            version: '3.40.0',
            mode: IS_PURE ? 'pure' : 'global',
            copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
            license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
            source: 'https://github.com/zloirock/core-js',
          });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var store = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-store.js [app-client] (ecmascript)',
          );
          module.exports = function (key, value) {
            return store[key] || (store[key] = value || {});
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var requireObjectCoercible = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)',
          );
          var $Object = Object;
          // `ToObject` abstract operation
          // https://tc39.es/ecma262/#sec-toobject
          module.exports = function (argument) {
            return $Object(requireObjectCoercible(argument));
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var hasOwnProperty = uncurryThis({}.hasOwnProperty);
          // `HasOwnProperty` abstract operation
          // https://tc39.es/ecma262/#sec-hasownproperty
          // eslint-disable-next-line es/no-object-hasown -- safe
          module.exports =
            Object.hasOwn ||
            function hasOwn(it, key) {
              return hasOwnProperty(toObject(it), key);
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/uid.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var id = 0;
          var postfix = Math.random();
          var toString = uncurryThis((1.0).toString);
          module.exports = function (key) {
            return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var uid = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/uid.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          var USE_SYMBOL_AS_UID = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js [app-client] (ecmascript)',
          );
          var Symbol = globalThis.Symbol;
          var WellKnownSymbolsStore = shared('wks');
          var createWellKnownSymbol = USE_SYMBOL_AS_UID
            ? Symbol['for'] || Symbol
            : (Symbol && Symbol.withoutSetter) || uid;
          module.exports = function (name) {
            if (!hasOwn(WellKnownSymbolsStore, name)) {
              WellKnownSymbolsStore[name] =
                NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
            }
            return WellKnownSymbolsStore[name];
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-primitive.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var isSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)',
          );
          var getMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-method.js [app-client] (ecmascript)',
          );
          var ordinaryToPrimitive = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
          // `ToPrimitive` abstract operation
          // https://tc39.es/ecma262/#sec-toprimitive
          module.exports = function (input, pref) {
            if (!isObject(input) || isSymbol(input)) return input;
            var exoticToPrim = getMethod(input, TO_PRIMITIVE);
            var result;
            if (exoticToPrim) {
              if (pref === undefined) pref = 'default';
              result = call(exoticToPrim, input, pref);
              if (!isObject(result) || isSymbol(result)) return result;
              throw new $TypeError("Can't convert object to primitive value");
            }
            if (pref === undefined) pref = 'number';
            return ordinaryToPrimitive(input, pref);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-property-key.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toPrimitive = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-primitive.js [app-client] (ecmascript)',
          );
          var isSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)',
          );
          // `ToPropertyKey` abstract operation
          // https://tc39.es/ecma262/#sec-topropertykey
          module.exports = function (argument) {
            var key = toPrimitive(argument, 'string');
            return isSymbol(key) ? key : key + '';
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/document-create-element.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var document = globalThis.document;
          // typeof document.createElement is 'object' in old IE
          var EXISTS = isObject(document) && isObject(document.createElement);
          module.exports = function (it) {
            return EXISTS ? document.createElement(it) : {};
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/ie8-dom-define.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var createElement = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/document-create-element.js [app-client] (ecmascript)',
          );
          // Thanks to IE8 for its funny defineProperty
          module.exports =
            !DESCRIPTORS &&
            !fails(function () {
              // eslint-disable-next-line es/no-object-defineproperty -- required for testing
              return (
                Object.defineProperty(createElement('div'), 'a', {
                  get: function () {
                    return 7;
                  },
                }).a !== 7
              );
            });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var propertyIsEnumerableModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js [app-client] (ecmascript)',
          );
          var createPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var toPropertyKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-property-key.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var IE8_DOM_DEFINE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/ie8-dom-define.js [app-client] (ecmascript)',
          );
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          // `Object.getOwnPropertyDescriptor` method
          // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
          exports.f = DESCRIPTORS
            ? $getOwnPropertyDescriptor
            : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPropertyKey(P);
                if (IE8_DOM_DEFINE)
                  try {
                    return $getOwnPropertyDescriptor(O, P);
                  } catch (error) {}
                if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-forced.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var replacement = /#|\.prototype\./;
          var isForced = function (feature, detection) {
            var value = data[normalize(feature)];
            return value === POLYFILL
              ? true
              : value === NATIVE
                ? false
                : isCallable(detection)
                  ? fails(detection)
                  : !!detection;
          };
          var normalize = (isForced.normalize = function (string) {
            return String(string).replace(replacement, '.').toLowerCase();
          });
          var data = (isForced.data = {});
          var NATIVE = (isForced.NATIVE = 'N');
          var POLYFILL = (isForced.POLYFILL = 'P');
          module.exports = isForced;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-context.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js [app-client] (ecmascript)',
          );
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          var NATIVE_BIND = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-native.js [app-client] (ecmascript)',
          );
          var bind = uncurryThis(uncurryThis.bind);
          // optional / simple context binding
          module.exports = function (fn, that) {
            aCallable(fn);
            return that === undefined
              ? fn
              : NATIVE_BIND
                ? bind(fn, that)
                : function () {
                    return fn.apply(that, arguments);
                  };
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          // V8 ~ Chrome 36-
          // https://bugs.chromium.org/p/v8/issues/detail?id=3334
          module.exports =
            DESCRIPTORS &&
            fails(function () {
              // eslint-disable-next-line es/no-object-defineproperty -- required for testing
              return (
                Object.defineProperty(function () {}, 'prototype', {
                  value: 42,
                  writable: false,
                }).prototype !== 42
              );
            });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var $String = String;
          var $TypeError = TypeError;
          // `Assert: Type(argument) is Object`
          module.exports = function (argument) {
            if (isObject(argument)) return argument;
            throw new $TypeError($String(argument) + ' is not an object');
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var IE8_DOM_DEFINE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/ie8-dom-define.js [app-client] (ecmascript)',
          );
          var V8_PROTOTYPE_DEFINE_BUG = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js [app-client] (ecmascript)',
          );
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var toPropertyKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-property-key.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          // eslint-disable-next-line es/no-object-defineproperty -- safe
          var $defineProperty = Object.defineProperty;
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          var ENUMERABLE = 'enumerable';
          var CONFIGURABLE = 'configurable';
          var WRITABLE = 'writable';
          // `Object.defineProperty` method
          // https://tc39.es/ecma262/#sec-object.defineproperty
          exports.f = DESCRIPTORS
            ? V8_PROTOTYPE_DEFINE_BUG
              ? function defineProperty(O, P, Attributes) {
                  anObject(O);
                  P = toPropertyKey(P);
                  anObject(Attributes);
                  if (
                    typeof O === 'function' &&
                    P === 'prototype' &&
                    'value' in Attributes &&
                    WRITABLE in Attributes &&
                    !Attributes[WRITABLE]
                  ) {
                    var current = $getOwnPropertyDescriptor(O, P);
                    if (current && current[WRITABLE]) {
                      O[P] = Attributes.value;
                      Attributes = {
                        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                        writable: false,
                      };
                    }
                  }
                  return $defineProperty(O, P, Attributes);
                }
              : $defineProperty
            : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return $defineProperty(O, P, Attributes);
                  } catch (error) {}
                if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var definePropertyModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          );
          var createPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)',
          );
          module.exports = DESCRIPTORS
            ? function (object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
              }
            : function (object, key, value) {
                object[key] = value;
                return object;
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var apply = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-apply.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var getOwnPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js [app-client] (ecmascript)',
          ).f;
          var isForced = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-forced.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          var bind = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-context.js [app-client] (ecmascript)',
          );
          var createNonEnumerableProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          // add debugging info
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-store.js [app-client] (ecmascript)',
          );
          var wrapConstructor = function (NativeConstructor) {
            var Wrapper = function (a, b, c) {
              if (this instanceof Wrapper) {
                switch (arguments.length) {
                  case 0:
                    return new NativeConstructor();
                  case 1:
                    return new NativeConstructor(a);
                  case 2:
                    return new NativeConstructor(a, b);
                }
                return new NativeConstructor(a, b, c);
              }
              return apply(NativeConstructor, this, arguments);
            };
            Wrapper.prototype = NativeConstructor.prototype;
            return Wrapper;
          };
          /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function (options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var PROTO = options.proto;
            var nativeSource = GLOBAL
              ? globalThis
              : STATIC
                ? globalThis[TARGET]
                : globalThis[TARGET] && globalThis[TARGET].prototype;
            var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
            var targetPrototype = target.prototype;
            var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
            var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
            for (key in source) {
              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
              // contains in native
              USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
              targetProperty = target[key];
              if (USE_NATIVE)
                if (options.dontCallGetSet) {
                  descriptor = getOwnPropertyDescriptor(nativeSource, key);
                  nativeProperty = descriptor && descriptor.value;
                } else nativeProperty = nativeSource[key];
              // export native or implementation
              sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
              if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
              // bind methods to global for calling from export context
              if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis);
              else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
              else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
              else resultProperty = sourceProperty;
              // add a flag to not completely full polyfills
              if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(resultProperty, 'sham', true);
              }
              createNonEnumerableProperty(target, key, resultProperty);
              if (PROTO) {
                VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
                if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
                  createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
                }
                // export virtual prototype methods
                createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
                // export real prototype methods
                if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
                  createNonEnumerableProperty(targetPrototype, key, sourceProperty);
                }
              }
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.define-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          ).f;
          // `Object.defineProperty` method
          // https://tc39.es/ecma262/#sec-object.defineproperty
          // eslint-disable-next-line es/no-object-defineproperty -- safe
          $(
            {
              target: 'Object',
              stat: true,
              forced: Object.defineProperty !== defineProperty,
              sham: !DESCRIPTORS,
            },
            {
              defineProperty: defineProperty,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/object/define-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.define-property.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          var Object = path.Object;
          var defineProperty = (module.exports = function defineProperty(it, key, desc) {
            return Object.defineProperty(it, key, desc);
          });
          if (Object.defineProperty.sham) defineProperty.sham = true;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/object/define-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/object/define-property.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          // `IsArray` abstract operation
          // https://tc39.es/ecma262/#sec-isarray
          // eslint-disable-next-line es/no-array-isarray -- safe
          module.exports =
            Array.isArray ||
            function isArray(argument) {
              return classof(argument) === 'Array';
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string-tag-support.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          var test = {};
          test[TO_STRING_TAG] = 'z';
          module.exports = String(test) === '[object z]';
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var TO_STRING_TAG_SUPPORT = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string-tag-support.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var classofRaw = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          var $Object = Object;
          // ES3 wrong here
          var CORRECT_ARGUMENTS =
            classofRaw(
              (function () {
                return arguments;
              })(),
            ) === 'Arguments';
          // fallback for IE11 Script Access Denied error
          var tryGet = function (it, key) {
            try {
              return it[key];
            } catch (error) {}
          };
          // getting tag from ES6+ `Object.prototype.toString`
          module.exports = TO_STRING_TAG_SUPPORT
            ? classofRaw
            : function (it) {
                var O, tag, result;
                return it === undefined
                  ? 'Undefined'
                  : it === null
                    ? 'Null'
                    : typeof (tag = tryGet((O = $Object(it)), TO_STRING_TAG)) == 'string'
                      ? tag
                      : CORRECT_ARGUMENTS
                        ? classofRaw(O)
                        : (result = classofRaw(O)) === 'Object' && isCallable(O.callee)
                          ? 'Arguments'
                          : result;
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/inspect-source.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var store = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-store.js [app-client] (ecmascript)',
          );
          var functionToString = uncurryThis(Function.toString);
          // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
          if (!isCallable(store.inspectSource)) {
            store.inspectSource = function (it) {
              return functionToString(it);
            };
          }
          module.exports = store.inspectSource;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-constructor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)',
          );
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var inspectSource = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/inspect-source.js [app-client] (ecmascript)',
          );
          var noop = function () {};
          var construct = getBuiltIn('Reflect', 'construct');
          var constructorRegExp = /^\s*(?:class|function)\b/;
          var exec = uncurryThis(constructorRegExp.exec);
          var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
          var isConstructorModern = function isConstructor(argument) {
            if (!isCallable(argument)) return false;
            try {
              construct(noop, [], argument);
              return true;
            } catch (error) {
              return false;
            }
          };
          var isConstructorLegacy = function isConstructor(argument) {
            if (!isCallable(argument)) return false;
            switch (classof(argument)) {
              case 'AsyncFunction':
              case 'GeneratorFunction':
              case 'AsyncGeneratorFunction':
                return false;
            }
            try {
              // we can't check .prototype since constructors produced by .bind haven't it
              // `Function#toString` throws on some built-it function in some legacy engines
              // (for example, `DOMQuad` and similar in FF41-)
              return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
            } catch (error) {
              return true;
            }
          };
          isConstructorLegacy.sham = true;
          // `IsConstructor` abstract operation
          // https://tc39.es/ecma262/#sec-isconstructor
          module.exports =
            !construct ||
            fails(function () {
              var called;
              return (
                isConstructorModern(isConstructorModern.call) ||
                !isConstructorModern(Object) ||
                !isConstructorModern(function () {
                  called = true;
                }) ||
                called
              );
            })
              ? isConstructorLegacy
              : isConstructorModern;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/math-trunc.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var ceil = Math.ceil;
          var floor = Math.floor;
          // `Math.trunc` method
          // https://tc39.es/ecma262/#sec-math.trunc
          // eslint-disable-next-line es/no-math-trunc -- safe
          module.exports =
            Math.trunc ||
            function trunc(x) {
              var n = +x;
              return (n > 0 ? floor : ceil)(n);
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var trunc = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/math-trunc.js [app-client] (ecmascript)',
          );
          // `ToIntegerOrInfinity` abstract operation
          // https://tc39.es/ecma262/#sec-tointegerorinfinity
          module.exports = function (argument) {
            var number = +argument;
            // eslint-disable-next-line no-self-compare -- NaN check
            return number !== number || number === 0 ? 0 : trunc(number);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-absolute-index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toIntegerOrInfinity = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js [app-client] (ecmascript)',
          );
          var max = Math.max;
          var min = Math.min;
          // Helper for a popular repeating case of the spec:
          // Let integer be ? ToInteger(index).
          // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
          module.exports = function (index, length) {
            var integer = toIntegerOrInfinity(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-length.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toIntegerOrInfinity = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js [app-client] (ecmascript)',
          );
          var min = Math.min;
          // `ToLength` abstract operation
          // https://tc39.es/ecma262/#sec-tolength
          module.exports = function (argument) {
            var len = toIntegerOrInfinity(argument);
            return len > 0 ? min(len, 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toLength = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-length.js [app-client] (ecmascript)',
          );
          // `LengthOfArrayLike` abstract operation
          // https://tc39.es/ecma262/#sec-lengthofarraylike
          module.exports = function (obj) {
            return toLength(obj.length);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var definePropertyModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          );
          var createPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)',
          );
          module.exports = function (object, key, value) {
            if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
            else object[key] = value;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-has-species-support.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var V8_VERSION = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)',
          );
          var SPECIES = wellKnownSymbol('species');
          module.exports = function (METHOD_NAME) {
            // We can't use this feature detection in V8 since it causes
            // deoptimization and serious performance degradation
            // https://github.com/zloirock/core-js/issues/677
            return (
              V8_VERSION >= 51 ||
              !fails(function () {
                var array = [];
                var constructor = (array.constructor = {});
                constructor[SPECIES] = function () {
                  return {
                    foo: 1,
                  };
                };
                return array[METHOD_NAME](Boolean).foo !== 1;
              })
            );
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          module.exports = uncurryThis([].slice);
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          var isConstructor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-constructor.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var toAbsoluteIndex = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-absolute-index.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var createProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var arrayMethodHasSpeciesSupport = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-has-species-support.js [app-client] (ecmascript)',
          );
          var nativeSlice = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-slice.js [app-client] (ecmascript)',
          );
          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
          var SPECIES = wellKnownSymbol('species');
          var $Array = Array;
          var max = Math.max;
          // `Array.prototype.slice` method
          // https://tc39.es/ecma262/#sec-array.prototype.slice
          // fallback for not array-like ES3 strings and DOM objects
          $(
            {
              target: 'Array',
              proto: true,
              forced: !HAS_SPECIES_SUPPORT,
            },
            {
              slice: function slice(start, end) {
                var O = toIndexedObject(this);
                var length = lengthOfArrayLike(O);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(end === undefined ? length : end, length);
                // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
                var Constructor, result, n;
                if (isArray(O)) {
                  Constructor = O.constructor;
                  // cross-realm fallback
                  if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
                    Constructor = undefined;
                  } else if (isObject(Constructor)) {
                    Constructor = Constructor[SPECIES];
                    if (Constructor === null) Constructor = undefined;
                  }
                  if (Constructor === $Array || Constructor === undefined) {
                    return nativeSlice(O, k, fin);
                  }
                }
                result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
                for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
                result.length = n;
                return result;
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          module.exports = function (CONSTRUCTOR, METHOD) {
            var Namespace = path[CONSTRUCTOR + 'Prototype'];
            var pureMethod = Namespace && Namespace[METHOD];
            if (pureMethod) return pureMethod;
            var NativeConstructor = globalThis[CONSTRUCTOR];
            var NativePrototype = NativeConstructor && NativeConstructor.prototype;
            return NativePrototype && NativePrototype[METHOD];
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.slice.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'slice');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/slice.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.slice;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/slice.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)',
          );
          var $String = String;
          module.exports = function (argument) {
            if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
            return $String(argument);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/string-multibyte.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var toIntegerOrInfinity = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var requireObjectCoercible = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)',
          );
          var charAt = uncurryThis(''.charAt);
          var charCodeAt = uncurryThis(''.charCodeAt);
          var stringSlice = uncurryThis(''.slice);
          var createMethod = function (CONVERT_TO_STRING) {
            return function ($this, pos) {
              var S = toString(requireObjectCoercible($this));
              var position = toIntegerOrInfinity(pos);
              var size = S.length;
              var first, second;
              if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
              first = charCodeAt(S, position);
              return first < 0xd800 ||
                first > 0xdbff ||
                position + 1 === size ||
                (second = charCodeAt(S, position + 1)) < 0xdc00 ||
                second > 0xdfff
                ? CONVERT_TO_STRING
                  ? charAt(S, position)
                  : first
                : CONVERT_TO_STRING
                  ? stringSlice(S, position, position + 2)
                  : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
            };
          };
          module.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.es/ecma262/#sec-string.prototype.codepointat
            codeAt: createMethod(false),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: createMethod(true),
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var WeakMap = globalThis.WeakMap;
          module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-key.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var uid = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/uid.js [app-client] (ecmascript)',
          );
          var keys = shared('keys');
          module.exports = function (key) {
            return keys[key] || (keys[key] = uid(key));
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/hidden-keys.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = {};
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/internal-state.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var NATIVE_WEAK_MAP = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var createNonEnumerableProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-store.js [app-client] (ecmascript)',
          );
          var sharedKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-key.js [app-client] (ecmascript)',
          );
          var hiddenKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/hidden-keys.js [app-client] (ecmascript)',
          );
          var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
          var TypeError = globalThis.TypeError;
          var WeakMap = globalThis.WeakMap;
          var set, get, has;
          var enforce = function (it) {
            return has(it) ? get(it) : set(it, {});
          };
          var getterFor = function (TYPE) {
            return function (it) {
              var state;
              if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
              }
              return state;
            };
          };
          if (NATIVE_WEAK_MAP || shared.state) {
            var store = shared.state || (shared.state = new WeakMap());
            /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
            store.has = store.has;
            store.set = store.set;
            /* eslint-enable no-self-assign -- prototype methods protection */ set = function (it, metadata) {
              if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              store.set(it, metadata);
              return metadata;
            };
            get = function (it) {
              return store.get(it) || {};
            };
            has = function (it) {
              return store.has(it);
            };
          } else {
            var STATE = sharedKey('state');
            hiddenKeys[STATE] = true;
            set = function (it, metadata) {
              if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              createNonEnumerableProperty(it, STATE, metadata);
              return metadata;
            };
            get = function (it) {
              return hasOwn(it, STATE) ? it[STATE] : {};
            };
            has = function (it) {
              return hasOwn(it, STATE);
            };
          }
          module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor,
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-name.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var FunctionPrototype = Function.prototype;
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
          var EXISTS = hasOwn(FunctionPrototype, 'name');
          // additional protection from minified / mangled / dropped function names
          var PROPER = EXISTS && function something() {}.name === 'something';
          var CONFIGURABLE =
            EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));
          module.exports = {
            EXISTS: EXISTS,
            PROPER: PROPER,
            CONFIGURABLE: CONFIGURABLE,
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-includes.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var toAbsoluteIndex = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-absolute-index.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          // `Array.prototype.{ indexOf, includes }` methods implementation
          var createMethod = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
              var O = toIndexedObject($this);
              var length = lengthOfArrayLike(O);
              if (length === 0) return !IS_INCLUDES && -1;
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare -- NaN check
              if (IS_INCLUDES && el !== el)
                while (length > index) {
                  value = O[index++];
                  // eslint-disable-next-line no-self-compare -- NaN check
                  if (value !== value) return true;
                  // Array#indexOf ignores holes, Array#includes - not
                }
              else
                for (; length > index; index++) {
                  if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                }
              return !IS_INCLUDES && -1;
            };
          };
          module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.es/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.es/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false),
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys-internal.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var indexOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-includes.js [app-client] (ecmascript)',
          ).indexOf;
          var hiddenKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/hidden-keys.js [app-client] (ecmascript)',
          );
          var push = uncurryThis([].push);
          module.exports = function (object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
            // Don't enum bug & hidden keys
            while (names.length > i)
              if (hasOwn(O, (key = names[i++]))) {
                ~indexOf(result, key) || push(result, key);
              }
            return result;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/enum-bug-keys.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // IE8- don't enum bug keys
          module.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
          ];
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var internalObjectKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys-internal.js [app-client] (ecmascript)',
          );
          var enumBugKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/enum-bug-keys.js [app-client] (ecmascript)',
          );
          // `Object.keys` method
          // https://tc39.es/ecma262/#sec-object.keys
          // eslint-disable-next-line es/no-object-keys -- safe
          module.exports =
            Object.keys ||
            function keys(O) {
              return internalObjectKeys(O, enumBugKeys);
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-properties.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var V8_PROTOTYPE_DEFINE_BUG = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js [app-client] (ecmascript)',
          );
          var definePropertyModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          );
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var objectKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys.js [app-client] (ecmascript)',
          );
          // `Object.defineProperties` method
          // https://tc39.es/ecma262/#sec-object.defineproperties
          // eslint-disable-next-line es/no-object-defineproperties -- safe
          exports.f =
            DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
              ? Object.defineProperties
              : function defineProperties(O, Properties) {
                  anObject(O);
                  var props = toIndexedObject(Properties);
                  var keys = objectKeys(Properties);
                  var length = keys.length;
                  var index = 0;
                  var key;
                  while (length > index) definePropertyModule.f(O, (key = keys[index++]), props[key]);
                  return O;
                };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/html.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltIn('document', 'documentElement');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-create.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* global ActiveXObject -- old IE, WSH */ var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var definePropertiesModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-properties.js [app-client] (ecmascript)',
          );
          var enumBugKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/enum-bug-keys.js [app-client] (ecmascript)',
          );
          var hiddenKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/hidden-keys.js [app-client] (ecmascript)',
          );
          var html = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/html.js [app-client] (ecmascript)',
          );
          var documentCreateElement = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/document-create-element.js [app-client] (ecmascript)',
          );
          var sharedKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-key.js [app-client] (ecmascript)',
          );
          var GT = '>';
          var LT = '<';
          var PROTOTYPE = 'prototype';
          var SCRIPT = 'script';
          var IE_PROTO = sharedKey('IE_PROTO');
          var EmptyConstructor = function () {};
          var scriptTag = function (content) {
            return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
          };
          // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
          var NullProtoObjectViaActiveX = function (activeXDocument) {
            activeXDocument.write(scriptTag(''));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            // eslint-disable-next-line no-useless-assignment -- avoid memory leak
            activeXDocument = null;
            return temp;
          };
          // Create object with fake `null` prototype: use iframe Object with cleared prototype
          var NullProtoObjectViaIFrame = function () {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = documentCreateElement('iframe');
            var JS = 'java' + SCRIPT + ':';
            var iframeDocument;
            iframe.style.display = 'none';
            html.appendChild(iframe);
            // https://github.com/zloirock/core-js/issues/475
            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag('document.F=Object'));
            iframeDocument.close();
            return iframeDocument.F;
          };
          // Check for document.domain and active x support
          // No need to use active x approach when document.domain is not set
          // see https://github.com/es-shims/es5-shim/issues/150
          // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
          // avoid IE GC bug
          var activeXDocument;
          var NullProtoObject = function () {
            try {
              activeXDocument = new ActiveXObject('htmlfile');
            } catch (error) {}
            NullProtoObject =
              typeof document != 'undefined'
                ? document.domain && activeXDocument
                  ? NullProtoObjectViaActiveX(activeXDocument) // old IE
                  : NullProtoObjectViaIFrame()
                : NullProtoObjectViaActiveX(activeXDocument); // WSH
            var length = enumBugKeys.length;
            while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject();
          };
          hiddenKeys[IE_PROTO] = true;
          // `Object.create` method
          // https://tc39.es/ecma262/#sec-object.create
          // eslint-disable-next-line es/no-object-create -- safe
          module.exports =
            Object.create ||
            function create(O, Properties) {
              var result;
              if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor();
                EmptyConstructor[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
              } else result = NullProtoObject();
              return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/correct-prototype-getter.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          module.exports = !fails(function () {
            function F() {}
            F.prototype.constructor = null;
            // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
            return Object.getPrototypeOf(new F()) !== F.prototype;
          });
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-prototype-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var sharedKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-key.js [app-client] (ecmascript)',
          );
          var CORRECT_PROTOTYPE_GETTER = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/correct-prototype-getter.js [app-client] (ecmascript)',
          );
          var IE_PROTO = sharedKey('IE_PROTO');
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          // `Object.getPrototypeOf` method
          // https://tc39.es/ecma262/#sec-object.getprototypeof
          // eslint-disable-next-line es/no-object-getprototypeof -- safe
          module.exports = CORRECT_PROTOTYPE_GETTER
            ? $Object.getPrototypeOf
            : function (O) {
                var object = toObject(O);
                if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
                var constructor = object.constructor;
                if (isCallable(constructor) && object instanceof constructor) {
                  return constructor.prototype;
                }
                return object instanceof $Object ? ObjectPrototype : null;
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var createNonEnumerableProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)',
          );
          module.exports = function (target, key, value, options) {
            if (options && options.enumerable) target[key] = value;
            else createNonEnumerableProperty(target, key, value);
            return target;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators-core.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var create = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-create.js [app-client] (ecmascript)',
          );
          var getPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-prototype-of.js [app-client] (ecmascript)',
          );
          var defineBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var IS_PURE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)',
          );
          var ITERATOR = wellKnownSymbol('iterator');
          var BUGGY_SAFARI_ITERATORS = false;
          // `%IteratorPrototype%` object
          // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
          var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
          /* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
            arrayIterator = [].keys();
            // Safari 8 has buggy iterators w/o `next`
            if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
            else {
              PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
              if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
          }
          var NEW_ITERATOR_PROTOTYPE =
            !isObject(IteratorPrototype) ||
            fails(function () {
              var test = {};
              // FF44- legacy iterators case
              return IteratorPrototype[ITERATOR].call(test) !== test;
            });
          if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
          else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
          // `%IteratorPrototype%[@@iterator]()` method
          // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
          if (!isCallable(IteratorPrototype[ITERATOR])) {
            defineBuiltIn(IteratorPrototype, ITERATOR, function () {
              return this;
            });
          }
          module.exports = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-to-string.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var TO_STRING_TAG_SUPPORT = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string-tag-support.js [app-client] (ecmascript)',
          );
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)',
          );
          // `Object.prototype.toString` method implementation
          // https://tc39.es/ecma262/#sec-object.prototype.tostring
          module.exports = TO_STRING_TAG_SUPPORT
            ? {}.toString
            : function toString() {
                return '[object ' + classof(this) + ']';
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var TO_STRING_TAG_SUPPORT = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string-tag-support.js [app-client] (ecmascript)',
          );
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          ).f;
          var createNonEnumerableProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-to-string.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          module.exports = function (it, TAG, STATIC, SET_METHOD) {
            var target = STATIC ? it : it && it.prototype;
            if (target) {
              if (!hasOwn(target, TO_STRING_TAG)) {
                defineProperty(target, TO_STRING_TAG, {
                  configurable: true,
                  value: TAG,
                });
              }
              if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
                createNonEnumerableProperty(target, 'toString', toString);
              }
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = {};
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-create-constructor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var IteratorPrototype = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators-core.js [app-client] (ecmascript)',
          ).IteratorPrototype;
          var create = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-create.js [app-client] (ecmascript)',
          );
          var createPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          var returnThis = function () {
            return this;
          };
          module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
            var TO_STRING_TAG = NAME + ' Iterator';
            IteratorConstructor.prototype = create(IteratorPrototype, {
              next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next),
            });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          module.exports = function (object, key, method) {
            try {
              // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
              return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
            } catch (error) {}
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-possible-prototype.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          module.exports = function (argument) {
            return isObject(argument) || argument === null;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-possible-prototype.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPossiblePrototype = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-possible-prototype.js [app-client] (ecmascript)',
          );
          var $String = String;
          var $TypeError = TypeError;
          module.exports = function (argument) {
            if (isPossiblePrototype(argument)) return argument;
            throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-set-prototype-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* eslint-disable no-proto -- safe */ var uncurryThisAccessor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var requireObjectCoercible = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)',
          );
          var aPossiblePrototype = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-possible-prototype.js [app-client] (ecmascript)',
          );
          // `Object.setPrototypeOf` method
          // https://tc39.es/ecma262/#sec-object.setprototypeof
          // Works with __proto__ only. Old v8 can't work with null proto objects.
          // eslint-disable-next-line es/no-object-setprototypeof -- safe
          module.exports =
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function () {
                  var CORRECT_SETTER = false;
                  var test = {};
                  var setter;
                  try {
                    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
                    setter(test, []);
                    CORRECT_SETTER = test instanceof Array;
                  } catch (error) {}
                  return function setPrototypeOf(O, proto) {
                    requireObjectCoercible(O);
                    aPossiblePrototype(proto);
                    if (!isObject(O)) return O;
                    if (CORRECT_SETTER) setter(O, proto);
                    else O.__proto__ = proto;
                    return O;
                  };
                })()
              : undefined);
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-define.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var IS_PURE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)',
          );
          var FunctionName = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-name.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var createIteratorConstructor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-create-constructor.js [app-client] (ecmascript)',
          );
          var getPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-prototype-of.js [app-client] (ecmascript)',
          );
          var setPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-set-prototype-of.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          var createNonEnumerableProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js [app-client] (ecmascript)',
          );
          var defineBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          var IteratorsCore = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators-core.js [app-client] (ecmascript)',
          );
          var PROPER_FUNCTION_NAME = FunctionName.PROPER;
          var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
          var IteratorPrototype = IteratorsCore.IteratorPrototype;
          var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
          var ITERATOR = wellKnownSymbol('iterator');
          var KEYS = 'keys';
          var VALUES = 'values';
          var ENTRIES = 'entries';
          var returnThis = function () {
            return this;
          };
          module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var getIterationMethod = function (KIND) {
              if (KIND === DEFAULT && defaultIterator) return defaultIterator;
              if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
              switch (KIND) {
                case KEYS:
                  return function keys() {
                    return new IteratorConstructor(this, KIND);
                  };
                case VALUES:
                  return function values() {
                    return new IteratorConstructor(this, KIND);
                  };
                case ENTRIES:
                  return function entries() {
                    return new IteratorConstructor(this, KIND);
                  };
              }
              return function () {
                return new IteratorConstructor(this);
              };
            };
            var TO_STRING_TAG = NAME + ' Iterator';
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator =
              IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || (DEFAULT && IterablePrototype[DEFAULT]);
            var defaultIterator = (!BUGGY_SAFARI_ITERATORS && nativeIterator) || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY;
            // fix native
            if (anyNativeIterator) {
              CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
              if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                  if (setPrototypeOf) {
                    setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                  } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                    defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
                  }
                }
                // Set @@toStringTag to native iterators
                setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
              }
            }
            // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
            if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
              if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
                createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
              } else {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() {
                  return call(nativeIterator, this);
                };
              }
            }
            // export additional methods
            if (DEFAULT) {
              methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES),
              };
              if (FORCED)
                for (KEY in methods) {
                  if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                    defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
                  }
                }
              else
                $(
                  {
                    target: NAME,
                    proto: true,
                    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME,
                  },
                  methods,
                );
            }
            // define iterator
            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
              defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
                name: DEFAULT,
              });
            }
            Iterators[NAME] = defaultIterator;
            return methods;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-iter-result-object.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // `CreateIterResultObject` abstract operation
          // https://tc39.es/ecma262/#sec-createiterresultobject
          module.exports = function (value, done) {
            return {
              value: value,
              done: done,
            };
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.string.iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var charAt = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/string-multibyte.js [app-client] (ecmascript)',
          ).charAt;
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var InternalStateModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/internal-state.js [app-client] (ecmascript)',
          );
          var defineIterator = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-define.js [app-client] (ecmascript)',
          );
          var createIterResultObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-iter-result-object.js [app-client] (ecmascript)',
          );
          var STRING_ITERATOR = 'String Iterator';
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
          // `String.prototype[@@iterator]` method
          // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
          defineIterator(
            String,
            'String',
            function (iterated) {
              setInternalState(this, {
                type: STRING_ITERATOR,
                string: toString(iterated),
                index: 0,
              });
              // `%StringIteratorPrototype%.next` method
              // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
            },
            function next() {
              var state = getInternalState(this);
              var string = state.string;
              var index = state.index;
              var point;
              if (index >= string.length) return createIterResultObject(undefined, true);
              point = charAt(string, index);
              state.index += point.length;
              return createIterResultObject(point, false);
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-close.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var getMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-method.js [app-client] (ecmascript)',
          );
          module.exports = function (iterator, kind, value) {
            var innerResult, innerError;
            anObject(iterator);
            try {
              innerResult = getMethod(iterator, 'return');
              if (!innerResult) {
                if (kind === 'throw') throw value;
                return value;
              }
              innerResult = call(innerResult, iterator);
            } catch (error) {
              innerError = true;
              innerResult = error;
            }
            if (kind === 'throw') throw value;
            if (innerError) throw innerResult;
            anObject(innerResult);
            return value;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var iteratorClose = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-close.js [app-client] (ecmascript)',
          );
          // call something on iterator step with safe closing on error
          module.exports = function (iterator, fn, value, ENTRIES) {
            try {
              return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
            } catch (error) {
              iteratorClose(iterator, 'throw', error);
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          var ITERATOR = wellKnownSymbol('iterator');
          var ArrayPrototype = Array.prototype;
          // check on default Array iterator
          module.exports = function (it) {
            return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)',
          );
          var getMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-method.js [app-client] (ecmascript)',
          );
          var isNullOrUndefined = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-null-or-undefined.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var ITERATOR = wellKnownSymbol('iterator');
          module.exports = function (it) {
            if (!isNullOrUndefined(it))
              return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var tryToString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/try-to-string.js [app-client] (ecmascript)',
          );
          var getIteratorMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator-method.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          module.exports = function (argument, usingIterator) {
            var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
            if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
            throw new $TypeError(tryToString(argument) + ' is not iterable');
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var bind = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-context.js [app-client] (ecmascript)',
          );
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var callWithSafeIterationClosing = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js [app-client] (ecmascript)',
          );
          var isArrayIteratorMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array-iterator-method.js [app-client] (ecmascript)',
          );
          var isConstructor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-constructor.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var createProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property.js [app-client] (ecmascript)',
          );
          var getIterator = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator.js [app-client] (ecmascript)',
          );
          var getIteratorMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator-method.js [app-client] (ecmascript)',
          );
          var $Array = Array;
          // `Array.from` method implementation
          // https://tc39.es/ecma262/#sec-array.from
          module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
            var O = toObject(arrayLike);
            var IS_CONSTRUCTOR = isConstructor(this);
            var argumentsLength = arguments.length;
            var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
            var iteratorMethod = getIteratorMethod(O);
            var index = 0;
            var length, result, step, iterator, next, value;
            // if the target is not iterable or it's an array with the default iterator - use a simple case
            if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
              result = IS_CONSTRUCTOR ? new this() : [];
              iterator = getIterator(O, iteratorMethod);
              next = iterator.next;
              for (; !(step = call(next, iterator)).done; index++) {
                value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                createProperty(result, index, value);
              }
            } else {
              length = lengthOfArrayLike(O);
              result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
              for (; length > index; index++) {
                value = mapping ? mapfn(O[index], index) : O[index];
                createProperty(result, index, value);
              }
            }
            result.length = index;
            return result;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/check-correctness-of-iteration.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var ITERATOR = wellKnownSymbol('iterator');
          var SAFE_CLOSING = false;
          try {
            var called = 0;
            var iteratorWithReturn = {
              next: function () {
                return {
                  done: !!called++,
                };
              },
              return: function () {
                SAFE_CLOSING = true;
              },
            };
            iteratorWithReturn[ITERATOR] = function () {
              return this;
            };
            // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
            Array.from(iteratorWithReturn, function () {
              throw 2;
            });
          } catch (error) {}
          module.exports = function (exec, SKIP_CLOSING) {
            try {
              if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
            } catch (error) {
              return false;
            } // workaround of old WebKit + `eval` bug
            var ITERATION_SUPPORT = false;
            try {
              var object = {};
              object[ITERATOR] = function () {
                return {
                  next: function () {
                    return {
                      done: (ITERATION_SUPPORT = true),
                    };
                  },
                };
              };
              exec(object);
            } catch (error) {}
            return ITERATION_SUPPORT;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var from = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-from.js [app-client] (ecmascript)',
          );
          var checkCorrectnessOfIteration = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/check-correctness-of-iteration.js [app-client] (ecmascript)',
          );
          var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
            // eslint-disable-next-line es/no-array-from -- required for testing
            Array.from(iterable);
          });
          // `Array.from` method
          // https://tc39.es/ecma262/#sec-array.from
          $(
            {
              target: 'Array',
              stat: true,
              forced: INCORRECT_ITERATION,
            },
            {
              from: from,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.string.iterator.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.from.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          module.exports = path.Array.from;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/from.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $TypeError = TypeError;
          var MAX_SAFE_INTEGER = 0x1fffffffffffff; // 2 ** 53 - 1 == 9007199254740991
          module.exports = function (it) {
            if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
            return it;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-species-constructor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          var isConstructor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-constructor.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var SPECIES = wellKnownSymbol('species');
          var $Array = Array;
          // a part of `ArraySpeciesCreate` abstract operation
          // https://tc39.es/ecma262/#sec-arrayspeciescreate
          module.exports = function (originalArray) {
            var C;
            if (isArray(originalArray)) {
              C = originalArray.constructor;
              // cross-realm fallback
              if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
              else if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }
            return C === undefined ? $Array : C;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-species-create.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var arraySpeciesConstructor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-species-constructor.js [app-client] (ecmascript)',
          );
          // `ArraySpeciesCreate` abstract operation
          // https://tc39.es/ecma262/#sec-arrayspeciescreate
          module.exports = function (originalArray, length) {
            return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.concat.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          var isObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-object.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var doesNotExceedSafeInteger = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js [app-client] (ecmascript)',
          );
          var createProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property.js [app-client] (ecmascript)',
          );
          var arraySpeciesCreate = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-species-create.js [app-client] (ecmascript)',
          );
          var arrayMethodHasSpeciesSupport = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-has-species-support.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var V8_VERSION = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)',
          );
          var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/679
          var IS_CONCAT_SPREADABLE_SUPPORT =
            V8_VERSION >= 51 ||
            !fails(function () {
              var array = [];
              array[IS_CONCAT_SPREADABLE] = false;
              return array.concat()[0] !== array;
            });
          var isConcatSpreadable = function (O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
          };
          var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');
          // `Array.prototype.concat` method
          // https://tc39.es/ecma262/#sec-array.prototype.concat
          // with adding support of @@isConcatSpreadable and @@species
          $(
            {
              target: 'Array',
              proto: true,
              arity: 1,
              forced: FORCED,
            },
            {
              // eslint-disable-next-line no-unused-vars -- required for `.length`
              concat: function concat(arg) {
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;
                for (i = -1, length = arguments.length; i < length; i++) {
                  E = i === -1 ? O : arguments[i];
                  if (isConcatSpreadable(E)) {
                    len = lengthOfArrayLike(E);
                    doesNotExceedSafeInteger(n + len);
                    for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
                  } else {
                    doesNotExceedSafeInteger(n + 1);
                    createProperty(A, n++, E);
                  }
                }
                A.length = n;
                return A;
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.to-string.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-names.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var internalObjectKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys-internal.js [app-client] (ecmascript)',
          );
          var enumBugKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/enum-bug-keys.js [app-client] (ecmascript)',
          );
          var hiddenKeys = enumBugKeys.concat('length', 'prototype');
          // `Object.getOwnPropertyNames` method
          // https://tc39.es/ecma262/#sec-object.getownpropertynames
          // eslint-disable-next-line es/no-object-getownpropertynames -- safe
          exports.f =
            Object.getOwnPropertyNames ||
            function getOwnPropertyNames(O) {
              return internalObjectKeys(O, hiddenKeys);
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-names-external.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* eslint-disable es/no-object-getownpropertynames -- safe */ var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var $getOwnPropertyNames = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-names.js [app-client] (ecmascript)',
          ).f;
          var arraySlice = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-slice.js [app-client] (ecmascript)',
          );
          var windowNames =
            typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          var getWindowNames = function (it) {
            try {
              return $getOwnPropertyNames(it);
            } catch (error) {
              return arraySlice(windowNames);
            }
          };
          // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
          module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && classof(it) === 'Window'
              ? getWindowNames(it)
              : $getOwnPropertyNames(toIndexedObject(it));
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
          exports.f = Object.getOwnPropertySymbols;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in-accessor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          );
          module.exports = function (target, name, descriptor) {
            return defineProperty.f(target, name, descriptor);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-wrapped.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          exports.f = wellKnownSymbol;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var wrappedWellKnownSymbolModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-wrapped.js [app-client] (ecmascript)',
          );
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          ).f;
          module.exports = function (NAME) {
            var Symbol = path.Symbol || (path.Symbol = {});
            if (!hasOwn(Symbol, NAME))
              defineProperty(Symbol, NAME, {
                value: wrappedWellKnownSymbolModule.f(NAME),
              });
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-define-to-primitive.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var defineBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in.js [app-client] (ecmascript)',
          );
          module.exports = function () {
            var Symbol = getBuiltIn('Symbol');
            var SymbolPrototype = Symbol && Symbol.prototype;
            var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
            var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
            if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
              // `Symbol.prototype[@@toPrimitive]` method
              // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
              // eslint-disable-next-line no-unused-vars -- required for .length
              defineBuiltIn(
                SymbolPrototype,
                TO_PRIMITIVE,
                function (hint) {
                  return call(valueOf, this);
                },
                {
                  arity: 1,
                },
              );
            }
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-iteration.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var bind = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-bind-context.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var IndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/indexed-object.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var arraySpeciesCreate = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-species-create.js [app-client] (ecmascript)',
          );
          var push = uncurryThis([].push);
          // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
          var createMethod = function (TYPE) {
            var IS_MAP = TYPE === 1;
            var IS_FILTER = TYPE === 2;
            var IS_SOME = TYPE === 3;
            var IS_EVERY = TYPE === 4;
            var IS_FIND_INDEX = TYPE === 6;
            var IS_FILTER_REJECT = TYPE === 7;
            var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
            return function ($this, callbackfn, that, specificCreate) {
              var O = toObject($this);
              var self = IndexedObject(O);
              var length = lengthOfArrayLike(self);
              var boundFunction = bind(callbackfn, that);
              var index = 0;
              var create = specificCreate || arraySpeciesCreate;
              var target = IS_MAP
                ? create($this, length)
                : IS_FILTER || IS_FILTER_REJECT
                  ? create($this, 0)
                  : undefined;
              var value, result;
              for (; length > index; index++)
                if (NO_HOLES || index in self) {
                  value = self[index];
                  result = boundFunction(value, index, O);
                  if (TYPE) {
                    if (IS_MAP)
                      target[index] = result; // map
                    else if (result)
                      switch (TYPE) {
                        case 3:
                          return true; // some
                        case 5:
                          return value; // find
                        case 6:
                          return index; // findIndex
                        case 2:
                          push(target, value); // filter
                      }
                    else
                      switch (TYPE) {
                        case 4:
                          return false; // every
                        case 7:
                          push(target, value); // filterReject
                      }
                  }
                }
              return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
            };
          };
          module.exports = {
            // `Array.prototype.forEach` method
            // https://tc39.es/ecma262/#sec-array.prototype.foreach
            forEach: createMethod(0),
            // `Array.prototype.map` method
            // https://tc39.es/ecma262/#sec-array.prototype.map
            map: createMethod(1),
            // `Array.prototype.filter` method
            // https://tc39.es/ecma262/#sec-array.prototype.filter
            filter: createMethod(2),
            // `Array.prototype.some` method
            // https://tc39.es/ecma262/#sec-array.prototype.some
            some: createMethod(3),
            // `Array.prototype.every` method
            // https://tc39.es/ecma262/#sec-array.prototype.every
            every: createMethod(4),
            // `Array.prototype.find` method
            // https://tc39.es/ecma262/#sec-array.prototype.find
            find: createMethod(5),
            // `Array.prototype.findIndex` method
            // https://tc39.es/ecma262/#sec-array.prototype.findIndex
            findIndex: createMethod(6),
            // `Array.prototype.filterReject` method
            // https://github.com/tc39/proposal-array-filtering
            filterReject: createMethod(7),
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.constructor.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var IS_PURE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)',
          );
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var toPropertyKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-property-key.js [app-client] (ecmascript)',
          );
          var $toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var createPropertyDescriptor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-property-descriptor.js [app-client] (ecmascript)',
          );
          var nativeObjectCreate = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-create.js [app-client] (ecmascript)',
          );
          var objectKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-keys.js [app-client] (ecmascript)',
          );
          var getOwnPropertyNamesModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-names.js [app-client] (ecmascript)',
          );
          var getOwnPropertyNamesExternal = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-names-external.js [app-client] (ecmascript)',
          );
          var getOwnPropertySymbolsModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js [app-client] (ecmascript)',
          );
          var getOwnPropertyDescriptorModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js [app-client] (ecmascript)',
          );
          var definePropertyModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          );
          var definePropertiesModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-properties.js [app-client] (ecmascript)',
          );
          var propertyIsEnumerableModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js [app-client] (ecmascript)',
          );
          var defineBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in.js [app-client] (ecmascript)',
          );
          var defineBuiltInAccessor = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/define-built-in-accessor.js [app-client] (ecmascript)',
          );
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var sharedKey = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared-key.js [app-client] (ecmascript)',
          );
          var hiddenKeys = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/hidden-keys.js [app-client] (ecmascript)',
          );
          var uid = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/uid.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var wrappedWellKnownSymbolModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-wrapped.js [app-client] (ecmascript)',
          );
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          var defineSymbolToPrimitive = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-define-to-primitive.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          var InternalStateModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/internal-state.js [app-client] (ecmascript)',
          );
          var $forEach = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-iteration.js [app-client] (ecmascript)',
          ).forEach;
          var HIDDEN = sharedKey('hidden');
          var SYMBOL = 'Symbol';
          var PROTOTYPE = 'prototype';
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(SYMBOL);
          var ObjectPrototype = Object[PROTOTYPE];
          var $Symbol = globalThis.Symbol;
          var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
          var RangeError = globalThis.RangeError;
          var TypeError = globalThis.TypeError;
          var QObject = globalThis.QObject;
          var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          var nativeDefineProperty = definePropertyModule.f;
          var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
          var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
          var push = uncurryThis([].push);
          var AllSymbols = shared('symbols');
          var ObjectPrototypeSymbols = shared('op-symbols');
          var WellKnownSymbolsStore = shared('wks');
          // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
          var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
          // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
          var fallbackDefineProperty = function (O, P, Attributes) {
            var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
            if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
            nativeDefineProperty(O, P, Attributes);
            if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
              nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
            }
          };
          var setSymbolDescriptor =
            DESCRIPTORS &&
            fails(function () {
              return (
                nativeObjectCreate(
                  nativeDefineProperty({}, 'a', {
                    get: function () {
                      return nativeDefineProperty(this, 'a', {
                        value: 7,
                      }).a;
                    },
                  }),
                ).a !== 7
              );
            })
              ? fallbackDefineProperty
              : nativeDefineProperty;
          var wrap = function (tag, description) {
            var symbol = (AllSymbols[tag] = nativeObjectCreate(SymbolPrototype));
            setInternalState(symbol, {
              type: SYMBOL,
              tag: tag,
              description: description,
            });
            if (!DESCRIPTORS) symbol.description = description;
            return symbol;
          };
          var $defineProperty = function defineProperty(O, P, Attributes) {
            if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
            anObject(O);
            var key = toPropertyKey(P);
            anObject(Attributes);
            if (hasOwn(AllSymbols, key)) {
              if (!Attributes.enumerable) {
                if (!hasOwn(O, HIDDEN))
                  nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
                O[HIDDEN][key] = true;
              } else {
                if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
                Attributes = nativeObjectCreate(Attributes, {
                  enumerable: createPropertyDescriptor(0, false),
                });
              }
              return setSymbolDescriptor(O, key, Attributes);
            }
            return nativeDefineProperty(O, key, Attributes);
          };
          var $defineProperties = function defineProperties(O, Properties) {
            anObject(O);
            var properties = toIndexedObject(Properties);
            var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
            $forEach(keys, function (key) {
              if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key))
                $defineProperty(O, key, properties[key]);
            });
            return O;
          };
          var $create = function create(O, Properties) {
            return Properties === undefined
              ? nativeObjectCreate(O)
              : $defineProperties(nativeObjectCreate(O), Properties);
          };
          var $propertyIsEnumerable = function propertyIsEnumerable(V) {
            var P = toPropertyKey(V);
            var enumerable = call(nativePropertyIsEnumerable, this, P);
            if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
            return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || (hasOwn(this, HIDDEN) && this[HIDDEN][P])
              ? enumerable
              : true;
          };
          var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
            var it = toIndexedObject(O);
            var key = toPropertyKey(P);
            if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
            var descriptor = nativeGetOwnPropertyDescriptor(it, key);
            if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
              descriptor.enumerable = true;
            }
            return descriptor;
          };
          var $getOwnPropertyNames = function getOwnPropertyNames(O) {
            var names = nativeGetOwnPropertyNames(toIndexedObject(O));
            var result = [];
            $forEach(names, function (key) {
              if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
            });
            return result;
          };
          var $getOwnPropertySymbols = function (O) {
            var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
            var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
            var result = [];
            $forEach(names, function (key) {
              if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
                push(result, AllSymbols[key]);
              }
            });
            return result;
          };
          // `Symbol` constructor
          // https://tc39.es/ecma262/#sec-symbol-constructor
          if (!NATIVE_SYMBOL) {
            $Symbol = function Symbol() {
              if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
              var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
              var tag = uid(description);
              var setter = function (value) {
                var $this = this === undefined ? globalThis : this;
                if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
                if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
                var descriptor = createPropertyDescriptor(1, value);
                try {
                  setSymbolDescriptor($this, tag, descriptor);
                } catch (error) {
                  if (!(error instanceof RangeError)) throw error;
                  fallbackDefineProperty($this, tag, descriptor);
                }
              };
              if (DESCRIPTORS && USE_SETTER)
                setSymbolDescriptor(ObjectPrototype, tag, {
                  configurable: true,
                  set: setter,
                });
              return wrap(tag, description);
            };
            SymbolPrototype = $Symbol[PROTOTYPE];
            defineBuiltIn(SymbolPrototype, 'toString', function toString() {
              return getInternalState(this).tag;
            });
            defineBuiltIn($Symbol, 'withoutSetter', function (description) {
              return wrap(uid(description), description);
            });
            propertyIsEnumerableModule.f = $propertyIsEnumerable;
            definePropertyModule.f = $defineProperty;
            definePropertiesModule.f = $defineProperties;
            getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
            getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
            getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
            wrappedWellKnownSymbolModule.f = function (name) {
              return wrap(wellKnownSymbol(name), name);
            };
            if (DESCRIPTORS) {
              // https://github.com/tc39/proposal-Symbol-description
              defineBuiltInAccessor(SymbolPrototype, 'description', {
                configurable: true,
                get: function description() {
                  return getInternalState(this).description;
                },
              });
              if (!IS_PURE) {
                defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
                  unsafe: true,
                });
              }
            }
          }
          $(
            {
              global: true,
              constructor: true,
              wrap: true,
              forced: !NATIVE_SYMBOL,
              sham: !NATIVE_SYMBOL,
            },
            {
              Symbol: $Symbol,
            },
          );
          $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
            defineWellKnownSymbol(name);
          });
          $(
            {
              target: SYMBOL,
              stat: true,
              forced: !NATIVE_SYMBOL,
            },
            {
              useSetter: function () {
                USE_SETTER = true;
              },
              useSimple: function () {
                USE_SETTER = false;
              },
            },
          );
          $(
            {
              target: 'Object',
              stat: true,
              forced: !NATIVE_SYMBOL,
              sham: !DESCRIPTORS,
            },
            {
              // `Object.create` method
              // https://tc39.es/ecma262/#sec-object.create
              create: $create,
              // `Object.defineProperty` method
              // https://tc39.es/ecma262/#sec-object.defineproperty
              defineProperty: $defineProperty,
              // `Object.defineProperties` method
              // https://tc39.es/ecma262/#sec-object.defineproperties
              defineProperties: $defineProperties,
              // `Object.getOwnPropertyDescriptor` method
              // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
              getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            },
          );
          $(
            {
              target: 'Object',
              stat: true,
              forced: !NATIVE_SYMBOL,
            },
            {
              // `Object.getOwnPropertyNames` method
              // https://tc39.es/ecma262/#sec-object.getownpropertynames
              getOwnPropertyNames: $getOwnPropertyNames,
            },
          );
          // `Symbol.prototype[@@toPrimitive]` method
          // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
          defineSymbolToPrimitive();
          // `Symbol.prototype[@@toStringTag]` property
          // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
          setToStringTag($Symbol, SYMBOL);
          hiddenKeys[HIDDEN] = true;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-registry-detection.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          /* eslint-disable es/no-symbol -- safe */ module.exports =
            NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.for.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL_REGISTRY = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-registry-detection.js [app-client] (ecmascript)',
          );
          var StringToSymbolRegistry = shared('string-to-symbol-registry');
          var SymbolToStringRegistry = shared('symbol-to-string-registry');
          // `Symbol.for` method
          // https://tc39.es/ecma262/#sec-symbol.for
          $(
            {
              target: 'Symbol',
              stat: true,
              forced: !NATIVE_SYMBOL_REGISTRY,
            },
            {
              for: function (key) {
                var string = toString(key);
                if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
                var symbol = getBuiltIn('Symbol')(string);
                StringToSymbolRegistry[string] = symbol;
                SymbolToStringRegistry[symbol] = string;
                return symbol;
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.key-for.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var isSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)',
          );
          var tryToString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/try-to-string.js [app-client] (ecmascript)',
          );
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL_REGISTRY = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-registry-detection.js [app-client] (ecmascript)',
          );
          var SymbolToStringRegistry = shared('symbol-to-string-registry');
          // `Symbol.keyFor` method
          // https://tc39.es/ecma262/#sec-symbol.keyfor
          $(
            {
              target: 'Symbol',
              stat: true,
              forced: !NATIVE_SYMBOL_REGISTRY,
            },
            {
              keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
                if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-json-replacer-function.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var push = uncurryThis([].push);
          module.exports = function (replacer) {
            if (isCallable(replacer)) return replacer;
            if (!isArray(replacer)) return;
            var rawLength = replacer.length;
            var keys = [];
            for (var i = 0; i < rawLength; i++) {
              var element = replacer[i];
              if (typeof element == 'string') push(keys, element);
              else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String')
                push(keys, toString(element));
            }
            var keysLength = keys.length;
            var root = true;
            return function (key, value) {
              if (root) {
                root = false;
                return value;
              }
              if (isArray(this)) return value;
              for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
            };
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.json.stringify.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var apply = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-apply.js [app-client] (ecmascript)',
          );
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var isCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-callable.js [app-client] (ecmascript)',
          );
          var isSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)',
          );
          var arraySlice = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-slice.js [app-client] (ecmascript)',
          );
          var getReplacerFunction = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-json-replacer-function.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          var $String = String;
          var $stringify = getBuiltIn('JSON', 'stringify');
          var exec = uncurryThis(/./.exec);
          var charAt = uncurryThis(''.charAt);
          var charCodeAt = uncurryThis(''.charCodeAt);
          var replace = uncurryThis(''.replace);
          var numberToString = uncurryThis((1.0).toString);
          var tester = /[\uD800-\uDFFF]/g;
          var low = /^[\uD800-\uDBFF]$/;
          var hi = /^[\uDC00-\uDFFF]$/;
          var WRONG_SYMBOLS_CONVERSION =
            !NATIVE_SYMBOL ||
            fails(function () {
              var symbol = getBuiltIn('Symbol')('stringify detection');
              // MS Edge converts symbol values to JSON as {}
              return (
                $stringify([symbol]) !== '[null]' ||
                $stringify({
                  a: symbol,
                }) !== '{}' ||
                $stringify(Object(symbol)) !== '{}'
              );
            });
          // https://github.com/tc39/proposal-well-formed-stringify
          var ILL_FORMED_UNICODE = fails(function () {
            return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
          });
          var stringifyWithSymbolsFix = function (it, replacer) {
            var args = arraySlice(arguments);
            var $replacer = getReplacerFunction(replacer);
            if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
            args[1] = function (key, value) {
              // some old implementations (like WebKit) could pass numbers as keys
              if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
              if (!isSymbol(value)) return value;
            };
            return apply($stringify, null, args);
          };
          var fixIllFormed = function (match, offset, string) {
            var prev = charAt(string, offset - 1);
            var next = charAt(string, offset + 1);
            if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
              return '\\u' + numberToString(charCodeAt(match, 0), 16);
            }
            return match;
          };
          if ($stringify) {
            // `JSON.stringify` method
            // https://tc39.es/ecma262/#sec-json.stringify
            $(
              {
                target: 'JSON',
                stat: true,
                arity: 3,
                forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE,
              },
              {
                // eslint-disable-next-line no-unused-vars -- required for `.length`
                stringify: function stringify(it, replacer, space) {
                  var args = arraySlice(arguments);
                  var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
                  return ILL_FORMED_UNICODE && typeof result == 'string'
                    ? replace(result, tester, fixIllFormed)
                    : result;
                },
              },
            );
          }
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var NATIVE_SYMBOL = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var getOwnPropertySymbolsModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
          // https://bugs.chromium.org/p/v8/issues/detail?id=3443
          var FORCED =
            !NATIVE_SYMBOL ||
            fails(function () {
              getOwnPropertySymbolsModule.f(1);
            });
          // `Object.getOwnPropertySymbols` method
          // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
          $(
            {
              target: 'Object',
              stat: true,
              forced: FORCED,
            },
            {
              getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // TODO: Remove this module from `core-js@4` since it's split to modules listed below
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.constructor.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.for.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.key-for.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.json.stringify.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.async-iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.asyncIterator` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.asynciterator
          defineWellKnownSymbol('asyncIterator');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.description.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.has-instance.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.hasInstance` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.hasinstance
          defineWellKnownSymbol('hasInstance');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.isConcatSpreadable` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
          defineWellKnownSymbol('isConcatSpreadable');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.iterator` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.iterator
          defineWellKnownSymbol('iterator');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.match.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.match` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.match
          defineWellKnownSymbol('match');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.match-all.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.matchAll` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.matchall
          defineWellKnownSymbol('matchAll');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.replace.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.replace` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.replace
          defineWellKnownSymbol('replace');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.search.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.search` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.search
          defineWellKnownSymbol('search');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.species.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.species` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.species
          defineWellKnownSymbol('species');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.split.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.split` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.split
          defineWellKnownSymbol('split');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.to-primitive.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          var defineSymbolToPrimitive = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-define-to-primitive.js [app-client] (ecmascript)',
          );
          // `Symbol.toPrimitive` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.toprimitive
          defineWellKnownSymbol('toPrimitive');
          // `Symbol.prototype[@@toPrimitive]` method
          // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
          defineSymbolToPrimitive();
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.to-string-tag.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          // `Symbol.toStringTag` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.tostringtag
          defineWellKnownSymbol('toStringTag');
          // `Symbol.prototype[@@toStringTag]` property
          // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
          setToStringTag(getBuiltIn('Symbol'), 'Symbol');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.unscopables.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.unscopables` well-known symbol
          // https://tc39.es/ecma262/#sec-symbol.unscopables
          defineWellKnownSymbol('unscopables');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.json.to-string-tag.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          // JSON[@@toStringTag] property
          // https://tc39.es/ecma262/#sec-json-@@tostringtag
          setToStringTag(globalThis.JSON, 'JSON', true);
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.math.to-string-tag.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.reflect.to-string-tag.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/symbol/index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.concat.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.to-string.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.async-iterator.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.description.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.has-instance.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.iterator.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.match.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.match-all.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.replace.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.search.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.species.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.split.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.to-primitive.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.to-string-tag.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.symbol.unscopables.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.json.to-string-tag.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.math.to-string-tag.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.reflect.to-string-tag.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          module.exports = path.Symbol;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/add-to-unscopables.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = function () {};
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var toIndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-indexed-object.js [app-client] (ecmascript)',
          );
          var addToUnscopables = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/add-to-unscopables.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          var InternalStateModule = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/internal-state.js [app-client] (ecmascript)',
          );
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          ).f;
          var defineIterator = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterator-define.js [app-client] (ecmascript)',
          );
          var createIterResultObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/create-iter-result-object.js [app-client] (ecmascript)',
          );
          var IS_PURE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-pure.js [app-client] (ecmascript)',
          );
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var ARRAY_ITERATOR = 'Array Iterator';
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
          // `Array.prototype.entries` method
          // https://tc39.es/ecma262/#sec-array.prototype.entries
          // `Array.prototype.keys` method
          // https://tc39.es/ecma262/#sec-array.prototype.keys
          // `Array.prototype.values` method
          // https://tc39.es/ecma262/#sec-array.prototype.values
          // `Array.prototype[@@iterator]` method
          // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
          // `CreateArrayIterator` internal method
          // https://tc39.es/ecma262/#sec-createarrayiterator
          module.exports = defineIterator(
            Array,
            'Array',
            function (iterated, kind) {
              setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind: kind, // kind
              });
              // `%ArrayIteratorPrototype%.next` method
              // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
            },
            function () {
              var state = getInternalState(this);
              var target = state.target;
              var index = state.index++;
              if (!target || index >= target.length) {
                state.target = null;
                return createIterResultObject(undefined, true);
              }
              switch (state.kind) {
                case 'keys':
                  return createIterResultObject(index, false);
                case 'values':
                  return createIterResultObject(target[index], false);
              }
              return createIterResultObject([index, target[index]], false);
            },
            'values',
          );
          // argumentsList[@@iterator] is %ArrayProto_values%
          // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
          // https://tc39.es/ecma262/#sec-createmappedargumentsobject
          var values = (Iterators.Arguments = Iterators.Array);
          // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
          addToUnscopables('keys');
          addToUnscopables('values');
          addToUnscopables('entries');
          // V8 ~ Chrome 45- bug
          if (!IS_PURE && DESCRIPTORS && values.name !== 'values')
            try {
              defineProperty(values, 'name', {
                value: 'values',
              });
            } catch (error) {}
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/dom-iterables.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // iterable DOM collections
          // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
          module.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.iterator.js [app-client] (ecmascript)',
          );
          var DOMIterables = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/dom-iterables.js [app-client] (ecmascript)',
          );
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var setToStringTag = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/set-to-string-tag.js [app-client] (ecmascript)',
          );
          var Iterators = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/iterators.js [app-client] (ecmascript)',
          );
          for (var COLLECTION_NAME in DOMIterables) {
            setToStringTag(globalThis[COLLECTION_NAME], COLLECTION_NAME);
            Iterators[COLLECTION_NAME] = Iterators.Array;
          }
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/symbol/index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/symbol/index.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.iterator.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.string.iterator.js [app-client] (ecmascript)',
          );
          var getIteratorMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-iterator-method.js [app-client] (ecmascript)',
          );
          module.exports = getIteratorMethod;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/get-iterator-method.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/get-iterator-method.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/get-iterator-method.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/get-iterator-method.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/get-iterator-method.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          // `Array.isArray` method
          // https://tc39.es/ecma262/#sec-array.isarray
          $(
            {
              target: 'Array',
              stat: true,
            },
            {
              isArray: isArray,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.is-array.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          module.exports = path.Array.isArray;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/is-array.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/array/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/is-array.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/array/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/array/is-array.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/array/is-array.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/array/is-array.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.function.metadata.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var defineProperty = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-define-property.js [app-client] (ecmascript)',
          ).f;
          var METADATA = wellKnownSymbol('metadata');
          var FunctionPrototype = Function.prototype;
          // Function.prototype[@@metadata]
          // https://github.com/tc39/proposal-decorator-metadata
          if (FunctionPrototype[METADATA] === undefined) {
            defineProperty(FunctionPrototype, METADATA, {
              value: null,
            });
          }
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.asyncDispose` well-known symbol
          // https://github.com/tc39/proposal-async-explicit-resource-management
          defineWellKnownSymbol('asyncDispose');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.dispose.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.dispose` well-known symbol
          // https://github.com/tc39/proposal-explicit-resource-management
          defineWellKnownSymbol('dispose');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.metadata.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.metadata` well-known symbol
          // https://github.com/tc39/proposal-decorators
          defineWellKnownSymbol('metadata');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/symbol/index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/symbol/index.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.function.metadata.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.dispose.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.metadata.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-registered.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var Symbol = getBuiltIn('Symbol');
          var keyFor = Symbol.keyFor;
          var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);
          // `Symbol.isRegisteredSymbol` method
          // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
          module.exports =
            Symbol.isRegisteredSymbol ||
            function isRegisteredSymbol(value) {
              try {
                return keyFor(thisSymbolValue(value)) !== undefined;
              } catch (error) {
                return false;
              }
            };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isRegisteredSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-registered.js [app-client] (ecmascript)',
          );
          // `Symbol.isRegisteredSymbol` method
          // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
          $(
            {
              target: 'Symbol',
              stat: true,
            },
            {
              isRegisteredSymbol: isRegisteredSymbol,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-well-known.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var shared = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/shared.js [app-client] (ecmascript)',
          );
          var getBuiltIn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var isSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-symbol.js [app-client] (ecmascript)',
          );
          var wellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol.js [app-client] (ecmascript)',
          );
          var Symbol = getBuiltIn('Symbol');
          var $isWellKnownSymbol = Symbol.isWellKnownSymbol;
          var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
          var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);
          var WellKnownSymbolsStore = shared('wks');
          for (
            var i = 0, symbolKeys = getOwnPropertyNames(Symbol), symbolKeysLength = symbolKeys.length;
            i < symbolKeysLength;
            i++
          ) {
            // some old engines throws on access to some keys like `arguments` or `caller`
            try {
              var symbolKey = symbolKeys[i];
              if (isSymbol(Symbol[symbolKey])) wellKnownSymbol(symbolKey);
            } catch (error) {}
          }
          // `Symbol.isWellKnownSymbol` method
          // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
          // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
          module.exports = function isWellKnownSymbol(value) {
            if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
            try {
              var symbol = thisSymbolValue(value);
              for (
                var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length;
                j < keysLength;
                j++
              ) {
                // eslint-disable-next-line eqeqeq -- polyfilled symbols case
                if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
              }
            } catch (error) {}
            return false;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-well-known.js [app-client] (ecmascript)',
          );
          // `Symbol.isWellKnownSymbol` method
          // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
          // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
          $(
            {
              target: 'Symbol',
              stat: true,
              forced: true,
            },
            {
              isWellKnownSymbol: isWellKnownSymbol,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.custom-matcher.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.customMatcher` well-known symbol
          // https://github.com/tc39/proposal-pattern-matching
          defineWellKnownSymbol('customMatcher');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.observable.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.observable` well-known symbol
          // https://github.com/tc39/proposal-observable
          defineWellKnownSymbol('observable');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-registered.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isRegisteredSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-registered.js [app-client] (ecmascript)',
          );
          // `Symbol.isRegistered` method
          // obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
          $(
            {
              target: 'Symbol',
              stat: true,
              name: 'isRegisteredSymbol',
            },
            {
              isRegistered: isRegisteredSymbol,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var isWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/symbol-is-well-known.js [app-client] (ecmascript)',
          );
          // `Symbol.isWellKnown` method
          // obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
          // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
          $(
            {
              target: 'Symbol',
              stat: true,
              name: 'isWellKnownSymbol',
              forced: true,
            },
            {
              isWellKnown: isWellKnownSymbol,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.matcher.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.matcher` well-known symbol
          // https://github.com/tc39/proposal-pattern-matching
          defineWellKnownSymbol('matcher');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // TODO: Remove from `core-js@4`
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.metadataKey` well-known symbol
          // https://github.com/tc39/proposal-decorator-metadata
          defineWellKnownSymbol('metadataKey');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // TODO: remove from `core-js@4`
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          // `Symbol.patternMatch` well-known symbol
          // https://github.com/tc39/proposal-pattern-matching
          defineWellKnownSymbol('patternMatch');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.replace-all.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // TODO: remove from `core-js@4`
          var defineWellKnownSymbol = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/well-known-symbol-define.js [app-client] (ecmascript)',
          );
          defineWellKnownSymbol('replaceAll');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/symbol/index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/symbol/index.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.custom-matcher.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.observable.js [app-client] (ecmascript)',
          );
          // TODO: Remove from `core-js@4`
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-registered.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.matcher.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/esnext.symbol.replace-all.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/symbol/index.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/symbol/index.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-set-length.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var isArray = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/is-array.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          // Safari < 13 does not throw an error in this case
          var SILENT_ON_NON_WRITABLE_LENGTH_SET =
            DESCRIPTORS &&
            !(function () {
              // makes no sense without proper strict mode support
              if (this !== undefined) return true;
              try {
                // eslint-disable-next-line es/no-object-defineproperty -- safe
                Object.defineProperty([], 'length', {
                  writable: false,
                }).length = 1;
              } catch (error) {
                return error instanceof TypeError;
              }
            })();
          module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET
            ? function (O, length) {
                if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
                  throw new $TypeError('Cannot set read only .length');
                }
                return (O.length = length);
              }
            : function (O, length) {
                return (O.length = length);
              };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var setArrayLength = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-set-length.js [app-client] (ecmascript)',
          );
          var doesNotExceedSafeInteger = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var INCORRECT_TO_LENGTH = fails(function () {
            return (
              [].push.call(
                {
                  length: 0x100000000,
                },
                1,
              ) !== 4294967297
            );
          });
          // V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
          // https://bugs.chromium.org/p/v8/issues/detail?id=12681
          var properErrorOnNonWritableLength = function () {
            try {
              // eslint-disable-next-line es/no-object-defineproperty -- safe
              Object.defineProperty([], 'length', {
                writable: false,
              }).push();
            } catch (error) {
              return error instanceof TypeError;
            }
          };
          var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
          // `Array.prototype.push` method
          // https://tc39.es/ecma262/#sec-array.prototype.push
          $(
            {
              target: 'Array',
              proto: true,
              arity: 1,
              forced: FORCED,
            },
            {
              // eslint-disable-next-line no-unused-vars -- required for `.length`
              push: function push(item) {
                var O = toObject(this);
                var len = lengthOfArrayLike(O);
                var argCount = arguments.length;
                doesNotExceedSafeInteger(len + argCount);
                for (var i = 0; i < argCount; i++) {
                  O[len] = arguments[i];
                  len++;
                }
                setArrayLength(O, len);
                return len;
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.push.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'push');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/push.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.push;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.push)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/push.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/instance/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/push.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/instance/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/instance/push.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/instance/push.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/instance/push.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/instance/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/slice.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/instance/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/instance/slice.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/instance/slice.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/instance/slice.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/array/from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/from.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/array/from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/actual/array/from.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/features/array/from.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/full/array/from.js [app-client] (ecmascript)',
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.regexp.flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/regexp-flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var anObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/an-object.js [app-client] (ecmascript)',
          );
          // `RegExp.prototype.flags` getter implementation
          // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
          module.exports = function () {
            var that = anObject(this);
            var result = '';
            if (that.hasIndices) result += 'd';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.dotAll) result += 's';
            if (that.unicode) result += 'u';
            if (that.unicodeSets) result += 'v';
            if (that.sticky) result += 'y';
            return result;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/regexp-get-flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var call = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-call.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var regExpFlags = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/regexp-flags.js [app-client] (ecmascript)',
          );
          var RegExpPrototype = RegExp.prototype;
          module.exports = function (R) {
            var flags = R.flags;
            return flags === undefined &&
              !('flags' in RegExpPrototype) &&
              !hasOwn(R, 'flags') &&
              isPrototypeOf(RegExpPrototype, R)
              ? call(regExpFlags, R)
              : flags;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/regexp/flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.regexp.flags.js [app-client] (ecmascript)',
          );
          var getRegExpFlags = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/regexp-get-flags.js [app-client] (ecmascript)',
          );
          module.exports = getRegExpFlags;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var flags = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/regexp/flags.js [app-client] (ecmascript)',
          );
          var RegExpPrototype = RegExp.prototype;
          module.exports = function (it) {
            return it === RegExpPrototype || isPrototypeOf(RegExpPrototype, it) ? flags(it) : it.flags;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/flags.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/flags.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/delete-property-or-throw.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var tryToString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/try-to-string.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          module.exports = function (O, P) {
            if (!delete O[P])
              throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-sort.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var arraySlice = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-slice.js [app-client] (ecmascript)',
          );
          var floor = Math.floor;
          var sort = function (array, comparefn) {
            var length = array.length;
            if (length < 8) {
              // insertion sort
              var i = 1;
              var element, j;
              while (i < length) {
                j = i;
                element = array[i];
                while (j && comparefn(array[j - 1], element) > 0) {
                  array[j] = array[--j];
                }
                if (j !== i++) array[j] = element;
              }
            } else {
              // merge sort
              var middle = floor(length / 2);
              var left = sort(arraySlice(array, 0, middle), comparefn);
              var right = sort(arraySlice(array, middle), comparefn);
              var llength = left.length;
              var rlength = right.length;
              var lindex = 0;
              var rindex = 0;
              while (lindex < llength || rindex < rlength) {
                array[lindex + rindex] =
                  lindex < llength && rindex < rlength
                    ? comparefn(left[lindex], right[rindex]) <= 0
                      ? left[lindex++]
                      : right[rindex++]
                    : lindex < llength
                      ? left[lindex++]
                      : right[rindex++];
              }
            }
            return array;
          };
          module.exports = sort;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-is-strict.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          module.exports = function (METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return (
              !!method &&
              fails(function () {
                // eslint-disable-next-line no-useless-call -- required for testing
                method.call(
                  null,
                  argument ||
                    function () {
                      return 1;
                    },
                  1,
                );
              })
            );
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-ff-version.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var userAgent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)',
          );
          var firefox = userAgent.match(/firefox\/(\d+)/i);
          module.exports = !!firefox && +firefox[1];
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-is-ie-or-edge.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var UA = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)',
          );
          module.exports = /MSIE|Trident/.test(UA);
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-webkit-version.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var userAgent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)',
          );
          var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
          module.exports = !!webkit && +webkit[1];
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.sort.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var deletePropertyOrThrow = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/delete-property-or-throw.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var internalSort = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-sort.js [app-client] (ecmascript)',
          );
          var arrayMethodIsStrict = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-is-strict.js [app-client] (ecmascript)',
          );
          var FF = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-ff-version.js [app-client] (ecmascript)',
          );
          var IE_OR_EDGE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-is-ie-or-edge.js [app-client] (ecmascript)',
          );
          var V8 = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)',
          );
          var WEBKIT = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-webkit-version.js [app-client] (ecmascript)',
          );
          var test = [];
          var nativeSort = uncurryThis(test.sort);
          var push = uncurryThis(test.push);
          // IE8-
          var FAILS_ON_UNDEFINED = fails(function () {
            test.sort(undefined);
          });
          // V8 bug
          var FAILS_ON_NULL = fails(function () {
            test.sort(null);
          });
          // Old WebKit
          var STRICT_METHOD = arrayMethodIsStrict('sort');
          var STABLE_SORT = !fails(function () {
            // feature detection can be too slow, so check engines versions
            if (V8) return V8 < 70;
            if (FF && FF > 3) return;
            if (IE_OR_EDGE) return true;
            if (WEBKIT) return WEBKIT < 603;
            var result = '';
            var code, chr, value, index;
            // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
            for (code = 65; code < 76; code++) {
              chr = String.fromCharCode(code);
              switch (code) {
                case 66:
                case 69:
                case 70:
                case 72:
                  value = 3;
                  break;
                case 68:
                case 71:
                  value = 4;
                  break;
                default:
                  value = 2;
              }
              for (index = 0; index < 47; index++) {
                test.push({
                  k: chr + index,
                  v: value,
                });
              }
            }
            test.sort(function (a, b) {
              return b.v - a.v;
            });
            for (index = 0; index < test.length; index++) {
              chr = test[index].k.charAt(0);
              if (result.charAt(result.length - 1) !== chr) result += chr;
            }
            return result !== 'DGBEFHACIJK';
          });
          var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
          var getSortCompare = function (comparefn) {
            return function (x, y) {
              if (y === undefined) return -1;
              if (x === undefined) return 1;
              if (comparefn !== undefined) return +comparefn(x, y) || 0;
              return toString(x) > toString(y) ? 1 : -1;
            };
          };
          // `Array.prototype.sort` method
          // https://tc39.es/ecma262/#sec-array.prototype.sort
          $(
            {
              target: 'Array',
              proto: true,
              forced: FORCED,
            },
            {
              sort: function sort(comparefn) {
                if (comparefn !== undefined) aCallable(comparefn);
                var array = toObject(this);
                if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
                var items = [];
                var arrayLength = lengthOfArrayLike(array);
                var itemsLength, index;
                for (index = 0; index < arrayLength; index++) {
                  if (index in array) push(items, array[index]);
                }
                internalSort(items, getSortCompare(comparefn));
                itemsLength = lengthOfArrayLike(items);
                index = 0;
                while (index < itemsLength) array[index] = items[index++];
                while (index < arrayLength) deletePropertyOrThrow(array, index++);
                return array;
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/sort.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.sort.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'sort');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/sort.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/sort.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.sort;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.sort)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/sort.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/sort.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/whitespaces.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // a string of all valid unicode whitespaces
          module.exports =
            '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
            '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/string-trim.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var requireObjectCoercible = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/require-object-coercible.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var whitespaces = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/whitespaces.js [app-client] (ecmascript)',
          );
          var replace = uncurryThis(''.replace);
          var ltrim = RegExp('^[' + whitespaces + ']+');
          var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');
          // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
          var createMethod = function (TYPE) {
            return function ($this) {
              var string = toString(requireObjectCoercible($this));
              if (TYPE & 1) string = replace(string, ltrim, '');
              if (TYPE & 2) string = replace(string, rtrim, '$1');
              return string;
            };
          };
          module.exports = {
            // `String.prototype.{ trimLeft, trimStart }` methods
            // https://tc39.es/ecma262/#sec-string.prototype.trimstart
            start: createMethod(1),
            // `String.prototype.{ trimRight, trimEnd }` methods
            // https://tc39.es/ecma262/#sec-string.prototype.trimend
            end: createMethod(2),
            // `String.prototype.trim` method
            // https://tc39.es/ecma262/#sec-string.prototype.trim
            trim: createMethod(3),
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/number-parse-int.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var fails = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/fails.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this.js [app-client] (ecmascript)',
          );
          var toString = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-string.js [app-client] (ecmascript)',
          );
          var trim = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/string-trim.js [app-client] (ecmascript)',
          ).trim;
          var whitespaces = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/whitespaces.js [app-client] (ecmascript)',
          );
          var $parseInt = globalThis.parseInt;
          var Symbol = globalThis.Symbol;
          var ITERATOR = Symbol && Symbol.iterator;
          var hex = /^[+-]?0x/i;
          var exec = uncurryThis(hex.exec);
          var FORCED =
            $parseInt(whitespaces + '08') !== 8 ||
            $parseInt(whitespaces + '0x16') !== 22 ||
            (ITERATOR &&
              !fails(function () {
                $parseInt(Object(ITERATOR));
              }));
          // `parseInt` method
          // https://tc39.es/ecma262/#sec-parseint-string-radix
          module.exports = FORCED
            ? function parseInt(string, radix) {
                var S = trim(toString(string));
                return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
              }
            : $parseInt;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.parse-int.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var $parseInt = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/number-parse-int.js [app-client] (ecmascript)',
          );
          // `parseInt` method
          // https://tc39.es/ecma262/#sec-parseint-string-radix
          $(
            {
              global: true,
              forced: parseInt !== $parseInt,
            },
            {
              parseInt: $parseInt,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/parse-int.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.parse-int.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          module.exports = path.parseInt;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/parse-int.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/parse-int.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.index-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var uncurryThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js [app-client] (ecmascript)',
          );
          var $indexOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-includes.js [app-client] (ecmascript)',
          ).indexOf;
          var arrayMethodIsStrict = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-is-strict.js [app-client] (ecmascript)',
          );
          var nativeIndexOf = uncurryThis([].indexOf);
          var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
          var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          $(
            {
              target: 'Array',
              proto: true,
              forced: FORCED,
            },
            {
              indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
                var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
                return NEGATIVE_ZERO
                  ? nativeIndexOf(this, searchElement, fromIndex) || 0
                  : $indexOf(this, searchElement, fromIndex);
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/index-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.index-of.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'indexOf');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/index-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/index-of.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.indexOf;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/index-of.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/index-of.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $forEach = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-iteration.js [app-client] (ecmascript)',
          ).forEach;
          var arrayMethodIsStrict = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-is-strict.js [app-client] (ecmascript)',
          );
          var STRICT_METHOD = arrayMethodIsStrict('forEach');
          // `Array.prototype.forEach` method implementation
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          module.exports = !STRICT_METHOD
            ? function forEach(callbackfn /* , thisArg */) {
                return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                // eslint-disable-next-line es/no-array-prototype-foreach -- safe
              }
            : [].forEach;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var forEach = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-for-each.js [app-client] (ecmascript)',
          );
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          // eslint-disable-next-line es/no-array-prototype-foreach -- safe
          $(
            {
              target: 'Array',
              proto: true,
              forced: [].forEach !== forEach,
            },
            {
              forEach: forEach,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.for-each.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'forEach');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/virtual/for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/for-each.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/web.dom-collections.for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          // empty
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/for-each.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof.js [app-client] (ecmascript)',
          );
          var hasOwn = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/has-own-property.js [app-client] (ecmascript)',
          );
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/array/virtual/for-each.js [app-client] (ecmascript)',
          );
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/web.dom-collections.for-each.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          var DOMIterables = {
            DOMTokenList: true,
            NodeList: true,
          };
          module.exports = function (it) {
            var own = it.forEach;
            return it === ArrayPrototype ||
              (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach) ||
              hasOwn(DOMIterables, classof(it))
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.create.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          // TODO: Remove from `core-js@4`
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var DESCRIPTORS = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/descriptors.js [app-client] (ecmascript)',
          );
          var create = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-create.js [app-client] (ecmascript)',
          );
          // `Object.create` method
          // https://tc39.es/ecma262/#sec-object.create
          $(
            {
              target: 'Object',
              stat: true,
              sham: !DESCRIPTORS,
            },
            {
              create: create,
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/object/create.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.object.create.js [app-client] (ecmascript)',
          );
          var path = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/path.js [app-client] (ecmascript)',
          );
          var Object = path.Object;
          module.exports = function create(P, D) {
            return Object.create(P, D);
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/object/create.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/object/create.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/concat.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.concat.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'concat');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/concat.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/concat.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.concat;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/concat.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/concat.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-reduce.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var aCallable = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/a-callable.js [app-client] (ecmascript)',
          );
          var toObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/to-object.js [app-client] (ecmascript)',
          );
          var IndexedObject = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/indexed-object.js [app-client] (ecmascript)',
          );
          var lengthOfArrayLike = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/length-of-array-like.js [app-client] (ecmascript)',
          );
          var $TypeError = TypeError;
          var REDUCE_EMPTY = 'Reduce of empty array with no initial value';
          // `Array.prototype.{ reduce, reduceRight }` methods implementation
          var createMethod = function (IS_RIGHT) {
            return function (that, callbackfn, argumentsLength, memo) {
              var O = toObject(that);
              var self = IndexedObject(O);
              var length = lengthOfArrayLike(O);
              aCallable(callbackfn);
              if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
              var index = IS_RIGHT ? length - 1 : 0;
              var i = IS_RIGHT ? -1 : 1;
              if (argumentsLength < 2)
                while (true) {
                  if (index in self) {
                    memo = self[index];
                    index += i;
                    break;
                  }
                  index += i;
                  if (IS_RIGHT ? index < 0 : length <= index) {
                    throw new $TypeError(REDUCE_EMPTY);
                  }
                }
              for (; IS_RIGHT ? index >= 0 : length > index; index += i)
                if (index in self) {
                  memo = callbackfn(memo, self[index], index, O);
                }
              return memo;
            };
          };
          module.exports = {
            // `Array.prototype.reduce` method
            // https://tc39.es/ecma262/#sec-array.prototype.reduce
            left: createMethod(false),
            // `Array.prototype.reduceRight` method
            // https://tc39.es/ecma262/#sec-array.prototype.reduceright
            right: createMethod(true),
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          /* global Bun, Deno -- detection */ var globalThis = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/global-this.js [app-client] (ecmascript)',
          );
          var userAgent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-user-agent.js [app-client] (ecmascript)',
          );
          var classof = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/classof-raw.js [app-client] (ecmascript)',
          );
          var userAgentStartsWith = function (string) {
            return userAgent.slice(0, string.length) === string;
          };
          module.exports = (function () {
            if (userAgentStartsWith('Bun/')) return 'BUN';
            if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
            if (userAgentStartsWith('Deno/')) return 'DENO';
            if (userAgentStartsWith('Node.js/')) return 'NODE';
            if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
            if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
            if (classof(globalThis.process) === 'process') return 'NODE';
            if (globalThis.window && globalThis.document) return 'BROWSER';
            return 'REST';
          })();
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-is-node.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var ENVIRONMENT = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment.js [app-client] (ecmascript)',
          );
          module.exports = ENVIRONMENT === 'NODE';
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.reduce.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var $reduce = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-reduce.js [app-client] (ecmascript)',
          ).left;
          var arrayMethodIsStrict = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-is-strict.js [app-client] (ecmascript)',
          );
          var CHROME_VERSION = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-v8-version.js [app-client] (ecmascript)',
          );
          var IS_NODE = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/environment-is-node.js [app-client] (ecmascript)',
          );
          // Chrome 80-82 has a critical bug
          // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
          var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
          var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          $(
            {
              target: 'Array',
              proto: true,
              forced: FORCED,
            },
            {
              reduce: function reduce(callbackfn /* , initialValue */) {
                var length = arguments.length;
                return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/reduce.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.reduce.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'reduce');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/reduce.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/reduce.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.reduce;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/reduce.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/reduce.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.map.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var $ = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/export.js [app-client] (ecmascript)',
          );
          var $map = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-iteration.js [app-client] (ecmascript)',
          ).map;
          var arrayMethodHasSpeciesSupport = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/array-method-has-species-support.js [app-client] (ecmascript)',
          );
          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          // with adding support of @@species
          $(
            {
              target: 'Array',
              proto: true,
              forced: !HAS_SPECIES_SUPPORT,
            },
            {
              map: function map(callbackfn /* , thisArg */) {
                return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
              },
            },
          );
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/map.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/modules/es.array.map.js [app-client] (ecmascript)',
          );
          var getBuiltInPrototypeMethod = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js [app-client] (ecmascript)',
          );
          module.exports = getBuiltInPrototypeMethod('Array', 'map');
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/map.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var isPrototypeOf = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/internals/object-is-prototype-of.js [app-client] (ecmascript)',
          );
          var method = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/array/virtual/map.js [app-client] (ecmascript)',
          );
          var ArrayPrototype = Array.prototype;
          module.exports = function (it) {
            var own = it.map;
            return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map)
              ? method
              : own;
          };
        }
      },
    '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/stable/instance/map.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          r: __turbopack_require__,
          f: __turbopack_module_context__,
          i: __turbopack_import__,
          s: __turbopack_esm__,
          v: __turbopack_export_value__,
          n: __turbopack_export_namespace__,
          c: __turbopack_cache__,
          M: __turbopack_modules__,
          l: __turbopack_load__,
          j: __turbopack_dynamic__,
          P: __turbopack_resolve_absolute_path__,
          U: __turbopack_relative_url__,
          R: __turbopack_resolve_module_id_path__,
          b: __turbopack_worker_blob_url__,
          g: global,
          __dirname,
          m: module,
          e: exports,
          t: __turbopack_require_real__,
        } = __turbopack_context__;
        {
          ('use strict');
          var parent = __turbopack_require__(
            '[project]/node_modules/.pnpm/core-js-pure@3.40.0/node_modules/core-js-pure/es/instance/map.js [app-client] (ecmascript)',
          );
          module.exports = parent;
        }
      },
  },
]);

//# sourceMappingURL=7716c_core-js-pure_c91240._.js.map
