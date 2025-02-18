module.exports = {
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        module.exports = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)',
        ).vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            RequestCookies: null,
            ResponseCookies: null,
            stringifyCookie: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          RequestCookies: function () {
            return _cookies.RequestCookies;
          },
          ResponseCookies: function () {
            return _cookies.ResponseCookies;
          },
          stringifyCookie: function () {
            return _cookies.stringifyCookie;
          },
        });
        const _cookies = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)',
        ); //# sourceMappingURL=cookies.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'ReflectAdapter', {
          enumerable: true,
          get: function () {
            return ReflectAdapter;
          },
        });
        class ReflectAdapter {
          static get(target, prop, receiver) {
            const value = Reflect.get(target, prop, receiver);
            if (typeof value === 'function') {
              return value.bind(target);
            }
            return value;
          }
          static set(target, prop, value, receiver) {
            return Reflect.set(target, prop, value, receiver);
          }
          static has(target, prop) {
            return Reflect.has(target, prop);
          }
          static deleteProperty(target, prop) {
            return Reflect.deleteProperty(target, prop);
          }
        } //# sourceMappingURL=reflect.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            MutableRequestCookiesAdapter: null,
            ReadonlyRequestCookiesError: null,
            RequestCookiesAdapter: null,
            appendMutableCookies: null,
            areCookiesMutableInCurrentPhase: null,
            getModifiedCookieValues: null,
            responseCookiesToRequestCookies: null,
            wrapWithMutableAccessCheck: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          MutableRequestCookiesAdapter: function () {
            return MutableRequestCookiesAdapter;
          },
          ReadonlyRequestCookiesError: function () {
            return ReadonlyRequestCookiesError;
          },
          RequestCookiesAdapter: function () {
            return RequestCookiesAdapter;
          },
          appendMutableCookies: function () {
            return appendMutableCookies;
          },
          areCookiesMutableInCurrentPhase: function () {
            return areCookiesMutableInCurrentPhase;
          },
          getModifiedCookieValues: function () {
            return getModifiedCookieValues;
          },
          responseCookiesToRequestCookies: function () {
            return responseCookiesToRequestCookies;
          },
          wrapWithMutableAccessCheck: function () {
            return wrapWithMutableAccessCheck;
          },
        });
        const _cookies = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)',
        );
        const _reflect = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)',
        );
        const _workasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
        );
        const _workunitasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
        );
        class ReadonlyRequestCookiesError extends Error {
          constructor() {
            super(
              'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options',
            );
          }
          static callable() {
            throw new ReadonlyRequestCookiesError();
          }
        }
        class RequestCookiesAdapter {
          static seal(cookies) {
            return new Proxy(cookies, {
              get(target, prop, receiver) {
                switch (prop) {
                  case 'clear':
                  case 'delete':
                  case 'set':
                    return ReadonlyRequestCookiesError.callable;
                  default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
              },
            });
          }
        }
        const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
        function getModifiedCookieValues(cookies) {
          const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
          if (!modified || !Array.isArray(modified) || modified.length === 0) {
            return [];
          }
          return modified;
        }
        function appendMutableCookies(headers, mutableCookies) {
          const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
          if (modifiedCookieValues.length === 0) {
            return false;
          }
          // Return a new response that extends the response with
          // the modified cookies as fallbacks. `res` cookies
          // will still take precedence.
          const resCookies = new _cookies.ResponseCookies(headers);
          const returnedCookies = resCookies.getAll();
          // Set the modified cookies as fallbacks.
          for (const cookie of modifiedCookieValues) {
            resCookies.set(cookie);
          }
          // Set the original cookies as the final values.
          for (const cookie of returnedCookies) {
            resCookies.set(cookie);
          }
          return true;
        }
        class MutableRequestCookiesAdapter {
          static wrap(cookies, onUpdateCookies) {
            const responseCookies = new _cookies.ResponseCookies(new Headers());
            for (const cookie of cookies.getAll()) {
              responseCookies.set(cookie);
            }
            let modifiedValues = [];
            const modifiedCookies = new Set();
            const updateResponseCookies = () => {
              // TODO-APP: change method of getting workStore
              const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
              if (workStore) {
                workStore.pathWasRevalidated = true;
              }
              const allCookies = responseCookies.getAll();
              modifiedValues = allCookies.filter(c => modifiedCookies.has(c.name));
              if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues) {
                  const tempCookies = new _cookies.ResponseCookies(new Headers());
                  tempCookies.set(cookie);
                  serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
              }
            };
            const wrappedCookies = new Proxy(responseCookies, {
              get(target, prop, receiver) {
                switch (prop) {
                  // A special symbol to get the modified cookie values
                  case SYMBOL_MODIFY_COOKIE_VALUES:
                    return modifiedValues;
                  // TODO: Throw error if trying to set a cookie after the response
                  // headers have been set.
                  case 'delete':
                    return function (...args) {
                      modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                      try {
                        target.delete(...args);
                        return wrappedCookies;
                      } finally {
                        updateResponseCookies();
                      }
                    };
                  case 'set':
                    return function (...args) {
                      modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                      try {
                        target.set(...args);
                        return wrappedCookies;
                      } finally {
                        updateResponseCookies();
                      }
                    };
                  default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
              },
            });
            return wrappedCookies;
          }
        }
        function wrapWithMutableAccessCheck(responseCookies) {
          const wrappedCookies = new Proxy(responseCookies, {
            get(target, prop, receiver) {
              switch (prop) {
                case 'delete':
                  return function (...args) {
                    ensureCookiesAreStillMutable('cookies().delete');
                    target.delete(...args);
                    return wrappedCookies;
                  };
                case 'set':
                  return function (...args) {
                    ensureCookiesAreStillMutable('cookies().set');
                    target.set(...args);
                    return wrappedCookies;
                  };
                default:
                  return _reflect.ReflectAdapter.get(target, prop, receiver);
              }
            },
          });
          return wrappedCookies;
        }
        function areCookiesMutableInCurrentPhase(requestStore) {
          return requestStore.phase === 'action';
        }
        /** Ensure that cookies() starts throwing on mutation
         * if we changed phases and can no longer mutate.
         *
         * This can happen when going:
         *   'render' -> 'after'
         *   'action' -> 'render'
         * */ function ensureCookiesAreStillMutable(callingExpression) {
          const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
          if (!areCookiesMutableInCurrentPhase(requestStore)) {
            // TODO: maybe we can give a more precise error message based on callingExpression?
            throw new ReadonlyRequestCookiesError();
          }
        }
        function responseCookiesToRequestCookies(responseCookies) {
          const requestCookies = new _cookies.RequestCookies(new Headers());
          for (const cookie of responseCookies.getAll()) {
            requestCookies.set(cookie);
          }
          return requestCookies;
        } //# sourceMappingURL=request-cookies.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            DynamicServerError: null,
            isDynamicServerError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          DynamicServerError: function () {
            return DynamicServerError;
          },
          isDynamicServerError: function () {
            return isDynamicServerError;
          },
        });
        const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
        class DynamicServerError extends Error {
          constructor(description) {
            super('Dynamic server usage: ' + description),
              (this.description = description),
              (this.digest = DYNAMIC_ERROR_CODE);
          }
        }
        function isDynamicServerError(err) {
          if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
            return false;
          }
          return err.digest === DYNAMIC_ERROR_CODE;
        }
        if (
          (typeof exports.default === 'function' ||
            (typeof exports.default === 'object' && exports.default !== null)) &&
          typeof exports.default.__esModule === 'undefined'
        ) {
          Object.defineProperty(exports.default, '__esModule', {
            value: true,
          });
          Object.assign(exports.default, exports);
          module.exports = exports.default;
        } //# sourceMappingURL=hooks-server-context.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            StaticGenBailoutError: null,
            isStaticGenBailoutError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          StaticGenBailoutError: function () {
            return StaticGenBailoutError;
          },
          isStaticGenBailoutError: function () {
            return isStaticGenBailoutError;
          },
        });
        const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
        class StaticGenBailoutError extends Error {
          constructor(...args) {
            super(...args), (this.code = NEXT_STATIC_GEN_BAILOUT);
          }
        }
        function isStaticGenBailoutError(error) {
          if (typeof error !== 'object' || error === null || !('code' in error)) {
            return false;
          }
          return error.code === NEXT_STATIC_GEN_BAILOUT;
        }
        if (
          (typeof exports.default === 'function' ||
            (typeof exports.default === 'object' && exports.default !== null)) &&
          typeof exports.default.__esModule === 'undefined'
        ) {
          Object.defineProperty(exports.default, '__esModule', {
            value: true,
          });
          Object.assign(exports.default, exports);
          module.exports = exports.default;
        } //# sourceMappingURL=static-generation-bailout.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        /**
         * This function constructs a promise that will never resolve. This is primarily
         * useful for dynamicIO where we use promise resolution timing to determine which
         * parts of a render can be included in a prerender.
         *
         * @internal
         */ ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'makeHangingPromise', {
          enumerable: true,
          get: function () {
            return makeHangingPromise;
          },
        });
        function makeHangingPromise(signal, expression) {
          const hangingPromise = new Promise((_, reject) => {
            signal.addEventListener(
              'abort',
              () => {
                reject(
                  new Error(
                    `During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`,
                  ),
                );
              },
              {
                once: true,
              },
            );
          });
          // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
          // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
          // your own promise out of it you'll need to ensure you handle the error when it rejects.
          hangingPromise.catch(ignoreReject);
          return hangingPromise;
        }
        function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            METADATA_BOUNDARY_NAME: null,
            OUTLET_BOUNDARY_NAME: null,
            VIEWPORT_BOUNDARY_NAME: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          METADATA_BOUNDARY_NAME: function () {
            return METADATA_BOUNDARY_NAME;
          },
          OUTLET_BOUNDARY_NAME: function () {
            return OUTLET_BOUNDARY_NAME;
          },
          VIEWPORT_BOUNDARY_NAME: function () {
            return VIEWPORT_BOUNDARY_NAME;
          },
        });
        const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
        const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
        const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        /**
         * The functions provided by this module are used to communicate certain properties
         * about the currently running code so that Next.js can make decisions on how to handle
         * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
         *
         * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
         * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
         * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
         * Dynamic indications.
         *
         * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
         * the currently executing code simply declares that the current scope is dynamic but if you use it
         * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
         * make the default dynamic to begin with because the only way you would ever be static is inside
         * a cache scope which this indication does not affect.
         *
         * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
         * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
         * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
         * read that data outside the cache and pass it in as an argument to the cached function.
         */ ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            Postpone: null,
            abortAndThrowOnSynchronousRequestDataAccess: null,
            abortOnSynchronousPlatformIOAccess: null,
            accessedDynamicData: null,
            annotateDynamicAccess: null,
            consumeDynamicAccess: null,
            createDynamicTrackingState: null,
            createDynamicValidationState: null,
            createPostponedAbortSignal: null,
            formatDynamicAPIAccesses: null,
            getFirstDynamicReason: null,
            isDynamicPostpone: null,
            isPrerenderInterruptedError: null,
            markCurrentScopeAsDynamic: null,
            postponeWithTracking: null,
            throwIfDisallowedDynamic: null,
            throwToInterruptStaticGeneration: null,
            trackAllowedDynamicAccess: null,
            trackDynamicDataInDynamicRender: null,
            trackFallbackParamAccessed: null,
            trackSynchronousPlatformIOAccessInDev: null,
            trackSynchronousRequestDataAccessInDev: null,
            useDynamicRouteParams: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          Postpone: function () {
            return Postpone;
          },
          abortAndThrowOnSynchronousRequestDataAccess: function () {
            return abortAndThrowOnSynchronousRequestDataAccess;
          },
          abortOnSynchronousPlatformIOAccess: function () {
            return abortOnSynchronousPlatformIOAccess;
          },
          accessedDynamicData: function () {
            return accessedDynamicData;
          },
          annotateDynamicAccess: function () {
            return annotateDynamicAccess;
          },
          consumeDynamicAccess: function () {
            return consumeDynamicAccess;
          },
          createDynamicTrackingState: function () {
            return createDynamicTrackingState;
          },
          createDynamicValidationState: function () {
            return createDynamicValidationState;
          },
          createPostponedAbortSignal: function () {
            return createPostponedAbortSignal;
          },
          formatDynamicAPIAccesses: function () {
            return formatDynamicAPIAccesses;
          },
          getFirstDynamicReason: function () {
            return getFirstDynamicReason;
          },
          isDynamicPostpone: function () {
            return isDynamicPostpone;
          },
          isPrerenderInterruptedError: function () {
            return isPrerenderInterruptedError;
          },
          markCurrentScopeAsDynamic: function () {
            return markCurrentScopeAsDynamic;
          },
          postponeWithTracking: function () {
            return postponeWithTracking;
          },
          throwIfDisallowedDynamic: function () {
            return throwIfDisallowedDynamic;
          },
          throwToInterruptStaticGeneration: function () {
            return throwToInterruptStaticGeneration;
          },
          trackAllowedDynamicAccess: function () {
            return trackAllowedDynamicAccess;
          },
          trackDynamicDataInDynamicRender: function () {
            return trackDynamicDataInDynamicRender;
          },
          trackFallbackParamAccessed: function () {
            return trackFallbackParamAccessed;
          },
          trackSynchronousPlatformIOAccessInDev: function () {
            return trackSynchronousPlatformIOAccessInDev;
          },
          trackSynchronousRequestDataAccessInDev: function () {
            return trackSynchronousRequestDataAccessInDev;
          },
          useDynamicRouteParams: function () {
            return useDynamicRouteParams;
          },
        });
        const _react = /*#__PURE__*/ _interop_require_default(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          ),
        );
        const _hooksservercontext = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)',
        );
        const _staticgenerationbailout = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)',
        );
        const _workunitasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
        );
        const _workasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
        );
        const _dynamicrenderingutils = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)',
        );
        const _metadataconstants = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)',
        );
        function _interop_require_default(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }
        const hasPostpone = typeof _react.default.unstable_postpone === 'function';
        function createDynamicTrackingState(isDebugDynamicAccesses) {
          return {
            isDebugDynamicAccesses,
            dynamicAccesses: [],
            syncDynamicExpression: undefined,
            syncDynamicErrorWithStack: null,
          };
        }
        function createDynamicValidationState() {
          return {
            hasSuspendedDynamic: false,
            hasDynamicMetadata: false,
            hasDynamicViewport: false,
            hasSyncDynamicErrors: false,
            dynamicErrors: [],
          };
        }
        function getFirstDynamicReason(trackingState) {
          var _trackingState_dynamicAccesses_;
          return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null
            ? void 0
            : _trackingState_dynamicAccesses_.expression;
        }
        function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
          if (workUnitStore) {
            if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
              // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
              // creates a cache boundary. This is subtly different from reading a dynamic data source which is
              // forbidden inside a cache scope.
              return;
            }
          }
          // If we're forcing dynamic rendering or we're forcing static rendering, we
          // don't need to do anything here because the entire page is already dynamic
          // or it's static and it should not throw or postpone here.
          if (store.forceDynamic || store.forceStatic) return;
          if (store.dynamicShouldError) {
            throw new _staticgenerationbailout.StaticGenBailoutError(
              `Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
            );
          }
          if (workUnitStore) {
            if (workUnitStore.type === 'prerender-ppr') {
              postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
              workUnitStore.revalidate = 0;
              // We aren't prerendering but we are generating a static page. We need to bail out of static generation
              const err = new _hooksservercontext.DynamicServerError(
                `Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
              );
              store.dynamicUsageDescription = expression;
              store.dynamicUsageStack = err.stack;
              throw err;
            } else if (
              ('TURBOPACK compile-time value', 'development') === 'development' &&
              workUnitStore &&
              workUnitStore.type === 'request'
            ) {
              workUnitStore.usedDynamic = true;
            }
          }
        }
        function trackFallbackParamAccessed(store, expression) {
          const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
          postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
        }
        function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
          // We aren't prerendering but we are generating a static page. We need to bail out of static generation
          const err = new _hooksservercontext.DynamicServerError(
            `Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
          );
          prerenderStore.revalidate = 0;
          store.dynamicUsageDescription = expression;
          store.dynamicUsageStack = err.stack;
          throw err;
        }
        function trackDynamicDataInDynamicRender(_store, workUnitStore) {
          if (workUnitStore) {
            if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
              // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
              // creates a cache boundary. This is subtly different from reading a dynamic data source which is
              // forbidden inside a cache scope.
              return;
            }
            if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
              workUnitStore.revalidate = 0;
            }
            if (('TURBOPACK compile-time value', 'development') === 'development' && workUnitStore.type === 'request') {
              workUnitStore.usedDynamic = true;
            }
          }
        }
        // Despite it's name we don't actually abort unless we have a controller to call abort on
        // There are times when we let a prerender run long to discover caches where we want the semantics
        // of tracking dynamic access without terminating the prerender early
        function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
          const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
          const error = createPrerenderInterruptedError(reason);
          prerenderStore.controller.abort(error);
          const dynamicTracking = prerenderStore.dynamicTracking;
          if (dynamicTracking) {
            dynamicTracking.dynamicAccesses.push({
              // When we aren't debugging, we don't need to create another error for the
              // stack trace.
              stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
              expression,
            });
          }
        }
        function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
          const dynamicTracking = prerenderStore.dynamicTracking;
          if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
              dynamicTracking.syncDynamicExpression = expression;
              dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
          }
          return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        }
        function trackSynchronousPlatformIOAccessInDev(requestStore) {
          // We don't actually have a controller to abort but we do the semantic equivalent by
          // advancing the request store out of prerender mode
          requestStore.prerenderPhase = false;
        }
        function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
          const dynamicTracking = prerenderStore.dynamicTracking;
          if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
              dynamicTracking.syncDynamicExpression = expression;
              dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
              if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
              }
            }
          }
          abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
          throw createPrerenderInterruptedError(
            `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`,
          );
        }
        const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
        function Postpone({ reason, route }) {
          const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          const dynamicTracking =
            prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
          postponeWithTracking(route, reason, dynamicTracking);
        }
        function postponeWithTracking(route, expression, dynamicTracking) {
          assertPostpone();
          if (dynamicTracking) {
            dynamicTracking.dynamicAccesses.push({
              // When we aren't debugging, we don't need to create another error for the
              // stack trace.
              stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
              expression,
            });
          }
          _react.default.unstable_postpone(createPostponeReason(route, expression));
        }
        function createPostponeReason(route, expression) {
          return (
            `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` +
            `React throws this special object to indicate where. It should not be caught by ` +
            `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`
          );
        }
        function isDynamicPostpone(err) {
          if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
            return isDynamicPostponeReason(err.message);
          }
          return false;
        }
        function isDynamicPostponeReason(reason) {
          return (
            reason.includes('needs to bail out of prerendering at this point because it used') &&
            reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error')
          );
        }
        if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
          throw new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js');
        }
        const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
        function createPrerenderInterruptedError(message) {
          const error = new Error(message);
          error.digest = NEXT_PRERENDER_INTERRUPTED;
          return error;
        }
        function isPrerenderInterruptedError(error) {
          return (
            typeof error === 'object' &&
            error !== null &&
            error.digest === NEXT_PRERENDER_INTERRUPTED &&
            'name' in error &&
            'message' in error &&
            error instanceof Error
          );
        }
        function accessedDynamicData(dynamicAccesses) {
          return dynamicAccesses.length > 0;
        }
        function consumeDynamicAccess(serverDynamic, clientDynamic) {
          // We mutate because we only call this once we are no longer writing
          // to the dynamicTrackingState and it's more efficient than creating a new
          // array.
          serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
          return serverDynamic.dynamicAccesses;
        }
        function formatDynamicAPIAccesses(dynamicAccesses) {
          return dynamicAccesses
            .filter(access => typeof access.stack === 'string' && access.stack.length > 0)
            .map(({ expression, stack }) => {
              stack = stack
                .split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
                // well as the first 4 lines of the stack trace which is the distance
                // from the user code and the `new Error().stack` call.
                .slice(4)
                .filter(line => {
                  // Exclude Next.js internals from the stack trace.
                  if (line.includes('node_modules/next/')) {
                    return false;
                  }
                  // Exclude anonymous functions from the stack trace.
                  if (line.includes(' (<anonymous>)')) {
                    return false;
                  }
                  // Exclude Node.js internals from the stack trace.
                  if (line.includes(' (node:')) {
                    return false;
                  }
                  return true;
                })
                .join('\n');
              return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
            });
        }
        function assertPostpone() {
          if (!hasPostpone) {
            throw new Error(
              `Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`,
            );
          }
        }
        function createPostponedAbortSignal(reason) {
          assertPostpone();
          const controller = new AbortController();
          // We get our hands on a postpone instance by calling postpone and catching the throw
          try {
            _react.default.unstable_postpone(reason);
          } catch (x) {
            controller.abort(x);
          }
          return controller.signal;
        }
        function annotateDynamicAccess(expression, prerenderStore) {
          const dynamicTracking = prerenderStore.dynamicTracking;
          if (dynamicTracking) {
            dynamicTracking.dynamicAccesses.push({
              stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
              expression,
            });
          }
        }
        function useDynamicRouteParams(expression) {
          if (('TURBOPACK compile-time truthy', 1)) {
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (
              workStore &&
              workStore.isStaticGeneration &&
              workStore.fallbackRouteParams &&
              workStore.fallbackRouteParams.size > 0
            ) {
              // There are fallback route params, we should track these as dynamic
              // accesses.
              const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
              if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                  // We are in a prerender with dynamicIO semantics
                  // We are going to hang here and never resolve. This will cause the currently
                  // rendering component to effectively be a dynamic hole
                  _react.default.use(
                    (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression),
                  );
                } else if (workUnitStore.type === 'prerender-ppr') {
                  // We're prerendering with PPR
                  postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                  throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
              }
            }
          }
        }
        const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
        const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
        const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
        const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
        function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
          if (hasOutletRegex.test(componentStack)) {
            // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
            return;
          } else if (hasMetadataRegex.test(componentStack)) {
            dynamicValidation.hasDynamicMetadata = true;
            return;
          } else if (hasViewportRegex.test(componentStack)) {
            dynamicValidation.hasDynamicViewport = true;
            return;
          } else if (hasSuspenseRegex.test(componentStack)) {
            dynamicValidation.hasSuspendedDynamic = true;
            return;
          } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
            dynamicValidation.hasSyncDynamicErrors = true;
            return;
          } else {
            const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
            const error = createErrorWithComponentStack(message, componentStack);
            dynamicValidation.dynamicErrors.push(error);
            return;
          }
        }
        function createErrorWithComponentStack(message, componentStack) {
          const error = new Error(message);
          error.stack = 'Error: ' + message + componentStack;
          return error;
        }
        function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
          let syncError;
          let syncExpression;
          let syncLogged;
          if (serverDynamic.syncDynamicErrorWithStack) {
            syncError = serverDynamic.syncDynamicErrorWithStack;
            syncExpression = serverDynamic.syncDynamicExpression;
            syncLogged = serverDynamic.syncDynamicLogged === true;
          } else if (clientDynamic.syncDynamicErrorWithStack) {
            syncError = clientDynamic.syncDynamicErrorWithStack;
            syncExpression = clientDynamic.syncDynamicExpression;
            syncLogged = clientDynamic.syncDynamicLogged === true;
          } else {
            syncError = null;
            syncExpression = undefined;
            syncLogged = false;
          }
          if (dynamicValidation.hasSyncDynamicErrors && syncError) {
            if (!syncLogged) {
              // In dev we already log errors about sync dynamic access. But during builds we need to ensure
              // the offending sync error is logged before we exit the build
              console.error(syncError);
            }
            // The actual error should have been logged when the sync access ocurred
            throw new _staticgenerationbailout.StaticGenBailoutError();
          }
          const dynamicErrors = dynamicValidation.dynamicErrors;
          if (dynamicErrors.length) {
            for (let i = 0; i < dynamicErrors.length; i++) {
              console.error(dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
          }
          if (!dynamicValidation.hasSuspendedDynamic) {
            if (dynamicValidation.hasDynamicMetadata) {
              if (syncError) {
                console.error(syncError);
                throw new _staticgenerationbailout.StaticGenBailoutError(
                  `Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`,
                );
              }
              throw new _staticgenerationbailout.StaticGenBailoutError(
                `Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`,
              );
            } else if (dynamicValidation.hasDynamicViewport) {
              if (syncError) {
                console.error(syncError);
                throw new _staticgenerationbailout.StaticGenBailoutError(
                  `Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`,
                );
              }
              throw new _staticgenerationbailout.StaticGenBailoutError(
                `Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`,
              );
            }
          }
        } //# sourceMappingURL=dynamic-rendering.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'createDedupedByCallsiteServerErrorLoggerDev', {
          enumerable: true,
          get: function () {
            return createDedupedByCallsiteServerErrorLoggerDev;
          },
        });
        const _react = /*#__PURE__*/ _interop_require_wildcard(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          ),
        );
        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== 'function') return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function (nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interop_require_wildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
            return {
              default: obj,
            };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {
            __proto__: null,
          };
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj.default = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        const errorRef = {
          current: null,
        };
        // React.cache is currently only available in canary/experimental React channels.
        const cache = typeof _react.cache === 'function' ? _react.cache : fn => fn;
        // When Dynamic IO is enabled, we record these as errors so that they
        // are captured by the dev overlay as it's more critical to fix these
        // when enabled.
        const logErrorOrWarn = ('TURBOPACK compile-time falsy', 0)
          ? ('TURBOPACK unreachable', undefined)
          : console.warn;
        // We don't want to dedupe across requests.
        // The developer might've just attempted to fix the warning so we should warn again if it still happens.
        const flushCurrentErrorIfNew = cache(key => {
          try {
            logErrorOrWarn(errorRef.current);
          } finally {
            errorRef.current = null;
          }
        });
        function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
          return function logDedupedError(...args) {
            const message = getMessage(...args);
            if (('TURBOPACK compile-time truthy', 1)) {
              var _stack;
              const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
              if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
              } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
              }
            } else {
              ('TURBOPACK unreachable');
            }
          };
        } //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            atLeastOneTask: null,
            scheduleImmediate: null,
            scheduleOnNextTick: null,
            waitAtLeastOneReactRenderTask: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          atLeastOneTask: function () {
            return atLeastOneTask;
          },
          scheduleImmediate: function () {
            return scheduleImmediate;
          },
          scheduleOnNextTick: function () {
            return scheduleOnNextTick;
          },
          waitAtLeastOneReactRenderTask: function () {
            return waitAtLeastOneReactRenderTask;
          },
        });
        const scheduleOnNextTick = cb => {
          // We use Promise.resolve().then() here so that the operation is scheduled at
          // the end of the promise job queue, we then add it to the next process tick
          // to ensure it's evaluated afterwards.
          //
          // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
          //
          Promise.resolve().then(() => {
            if (('TURBOPACK compile-time falsy', 0)) {
              ('TURBOPACK unreachable');
            } else {
              process.nextTick(cb);
            }
          });
        };
        const scheduleImmediate = cb => {
          if (('TURBOPACK compile-time falsy', 0)) {
            ('TURBOPACK unreachable');
          } else {
            setImmediate(cb);
          }
        };
        function atLeastOneTask() {
          return new Promise(resolve => scheduleImmediate(resolve));
        }
        function waitAtLeastOneReactRenderTask() {
          if (('TURBOPACK compile-time falsy', 0)) {
            ('TURBOPACK unreachable');
          } else {
            return new Promise(r => setImmediate(r));
          }
        } //# sourceMappingURL=scheduler.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            describeHasCheckingStringProperty: null,
            describeStringPropertyAccess: null,
            isRequestAPICallableInsideAfter: null,
            throwWithStaticGenerationBailoutError: null,
            throwWithStaticGenerationBailoutErrorWithDynamicError: null,
            wellKnownProperties: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          describeHasCheckingStringProperty: function () {
            return describeHasCheckingStringProperty;
          },
          describeStringPropertyAccess: function () {
            return describeStringPropertyAccess;
          },
          isRequestAPICallableInsideAfter: function () {
            return isRequestAPICallableInsideAfter;
          },
          throwWithStaticGenerationBailoutError: function () {
            return throwWithStaticGenerationBailoutError;
          },
          throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
            return throwWithStaticGenerationBailoutErrorWithDynamicError;
          },
          wellKnownProperties: function () {
            return wellKnownProperties;
          },
        });
        const _staticgenerationbailout = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)',
        );
        const _aftertaskasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)',
        );
        // This regex will have fast negatives meaning valid identifiers may not pass
        // this test. However this is only used during static generation to provide hints
        // about why a page bailed out of some or all prerendering and we can use bracket notation
        // for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
        // even if this would have been fine too `searchParams.ಠ_ಠ`
        const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
        function describeStringPropertyAccess(target, prop) {
          if (isDefinitelyAValidIdentifier.test(prop)) {
            return `\`${target}.${prop}\``;
          }
          return `\`${target}[${JSON.stringify(prop)}]\``;
        }
        function describeHasCheckingStringProperty(target, prop) {
          const stringifiedProp = JSON.stringify(prop);
          return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
        }
        function throwWithStaticGenerationBailoutError(route, expression) {
          throw new _staticgenerationbailout.StaticGenBailoutError(
            `Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
          );
        }
        function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
          throw new _staticgenerationbailout.StaticGenBailoutError(
            `Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
          );
        }
        function isRequestAPICallableInsideAfter() {
          const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
          return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
        }
        const wellKnownProperties = new Set([
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toString',
          'valueOf',
          'toLocaleString',
          // Promise prototype
          // fallthrough
          'then',
          'catch',
          'finally',
          // React Promise extension
          // fallthrough
          'status',
          // React introspection
          'displayName',
          // Common tested properties
          // fallthrough
          'toJSON',
          '$$typeof',
          '__esModule',
        ]); //# sourceMappingURL=utils.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'cookies', {
          enumerable: true,
          get: function () {
            return cookies;
          },
        });
        const _requestcookies = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)',
        );
        const _cookies = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)',
        );
        const _workasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
        );
        const _workunitasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
        );
        const _dynamicrendering = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)',
        );
        const _staticgenerationbailout = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)',
        );
        const _dynamicrenderingutils = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)',
        );
        const _creatededupedbycallsiteservererrorlogger = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)',
        );
        const _scheduler = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)',
        );
        const _utils = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)',
        );
        function cookies() {
          const callingExpression = 'cookies';
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workStore) {
            if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
              throw new Error(
                `Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`,
              );
            }
            if (workStore.forceStatic) {
              // When using forceStatic we override all other logic and always just return an empty
              // cookies object without tracking
              const underlyingCookies = createEmptyCookies();
              return makeUntrackedExoticCookies(underlyingCookies);
            }
            if (workUnitStore) {
              if (workUnitStore.type === 'cache') {
                throw new Error(
                  `Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`,
                );
              } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(
                  `Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`,
                );
              }
            }
            if (workStore.dynamicShouldError) {
              throw new _staticgenerationbailout.StaticGenBailoutError(
                `Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
              );
            }
            if (workUnitStore) {
              if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the cookies object.
                return makeDynamicallyTrackedExoticCookies(workStore.route, workUnitStore);
              } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how cookies has worked in PPR without dynamicIO.
                (0, _dynamicrendering.postponeWithTracking)(
                  workStore.route,
                  callingExpression,
                  workUnitStore.dynamicTracking,
                );
              } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We track dynamic access here so we don't need to wrap the cookies in
                // individual property access tracking.
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
              }
            }
            // We fall through to the dynamic context below but we still track dynamic access
            // because in dev we can still error for things like using cookies inside a cache context
            (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
          }
          // cookies is being called in a dynamic context
          const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
          let underlyingCookies;
          if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(requestStore)) {
            // We can't conditionally return different types here based on the context.
            // To avoid confusion, we always return the readonly type here.
            underlyingCookies = requestStore.userspaceMutableCookies;
          } else {
            underlyingCookies = requestStore.cookies;
          }
          if (
            ('TURBOPACK compile-time value', 'development') === 'development' &&
            !(workStore == null ? void 0 : workStore.isPrefetchRequest)
          ) {
            return makeUntrackedExoticCookiesWithDevWarnings(
              underlyingCookies,
              workStore == null ? void 0 : workStore.route,
            );
          } else {
            return makeUntrackedExoticCookies(underlyingCookies);
          }
        }
        function createEmptyCookies() {
          return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
        }
        const CachedCookies = new WeakMap();
        function makeDynamicallyTrackedExoticCookies(route, prerenderStore) {
          const cachedPromise = CachedCookies.get(prerenderStore);
          if (cachedPromise) {
            return cachedPromise;
          }
          const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`cookies()`');
          CachedCookies.set(prerenderStore, promise);
          Object.defineProperties(promise, {
            [Symbol.iterator]: {
              value: function () {
                const expression = '`cookies()[Symbol.iterator]()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            size: {
              get() {
                const expression = '`cookies().size`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            get: {
              value: function get() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().get()`';
                } else {
                  expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            getAll: {
              value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().getAll()`';
                } else {
                  expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            has: {
              value: function has() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().has()`';
                } else {
                  expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            set: {
              value: function set() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().set()`';
                } else {
                  const arg = arguments[0];
                  if (arg) {
                    expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                  } else {
                    expression = '`cookies().set(...)`';
                  }
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            delete: {
              value: function () {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                  expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                  expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            clear: {
              value: function clear() {
                const expression = '`cookies().clear()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            toString: {
              value: function toString() {
                const expression = '`cookies().toString()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
          });
          return promise;
        }
        function makeUntrackedExoticCookies(underlyingCookies) {
          const cachedCookies = CachedCookies.get(underlyingCookies);
          if (cachedCookies) {
            return cachedCookies;
          }
          const promise = Promise.resolve(underlyingCookies);
          CachedCookies.set(underlyingCookies, promise);
          Object.defineProperties(promise, {
            [Symbol.iterator]: {
              value: underlyingCookies[Symbol.iterator]
                ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                : // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                  // has extra properties not available on RequestCookie instances.
                  polyfilledResponseCookiesIterator.bind(underlyingCookies),
            },
            size: {
              get() {
                return underlyingCookies.size;
              },
            },
            get: {
              value: underlyingCookies.get.bind(underlyingCookies),
            },
            getAll: {
              value: underlyingCookies.getAll.bind(underlyingCookies),
            },
            has: {
              value: underlyingCookies.has.bind(underlyingCookies),
            },
            set: {
              value: underlyingCookies.set.bind(underlyingCookies),
            },
            delete: {
              value: underlyingCookies.delete.bind(underlyingCookies),
            },
            clear: {
              value:
                typeof underlyingCookies.clear === 'function'
                  ? underlyingCookies.clear.bind(underlyingCookies) // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                  : // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                    // has extra properties not available on RequestCookie instances.
                    polyfilledResponseCookiesClear.bind(underlyingCookies, promise),
            },
            toString: {
              value: underlyingCookies.toString.bind(underlyingCookies),
            },
          });
          return promise;
        }
        function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
          const cachedCookies = CachedCookies.get(underlyingCookies);
          if (cachedCookies) {
            return cachedCookies;
          }
          const promise = new Promise(resolve => (0, _scheduler.scheduleImmediate)(() => resolve(underlyingCookies)));
          CachedCookies.set(underlyingCookies, promise);
          Object.defineProperties(promise, {
            [Symbol.iterator]: {
              value: function () {
                const expression = '`...cookies()` or similar iteration';
                syncIODev(route, expression);
                return underlyingCookies[Symbol.iterator]
                  ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                  : // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                    // has extra properties not available on RequestCookie instances.
                    polyfilledResponseCookiesIterator.call(underlyingCookies);
              },
              writable: false,
            },
            size: {
              get() {
                const expression = '`cookies().size`';
                syncIODev(route, expression);
                return underlyingCookies.size;
              },
            },
            get: {
              value: function get() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().get()`';
                } else {
                  expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.get.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
            getAll: {
              value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().getAll()`';
                } else {
                  expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.getAll.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
            has: {
              value: function get() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().has()`';
                } else {
                  expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.has.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
            set: {
              value: function set() {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().set()`';
                } else {
                  const arg = arguments[0];
                  if (arg) {
                    expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                  } else {
                    expression = '`cookies().set(...)`';
                  }
                }
                syncIODev(route, expression);
                return underlyingCookies.set.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
            delete: {
              value: function () {
                let expression;
                if (arguments.length === 0) {
                  expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                  expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                  expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.delete.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
            clear: {
              value: function clear() {
                const expression = '`cookies().clear()`';
                syncIODev(route, expression);
                // @ts-ignore clear is defined in RequestCookies implementation but not in the type
                return typeof underlyingCookies.clear === 'function'
                  ? underlyingCookies.clear.apply(underlyingCookies, arguments) // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                  : // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                    // has extra properties not available on RequestCookie instances.
                    polyfilledResponseCookiesClear.call(underlyingCookies, promise);
              },
              writable: false,
            },
            toString: {
              value: function toString() {
                const expression = '`cookies().toString()` or implicit casting';
                syncIODev(route, expression);
                return underlyingCookies.toString.apply(underlyingCookies, arguments);
              },
              writable: false,
            },
          });
          return promise;
        }
        function describeNameArg(arg) {
          return typeof arg === 'object' && arg !== null && typeof arg.name === 'string'
            ? `'${arg.name}'`
            : typeof arg === 'string'
              ? `'${arg}'`
              : '...';
        }
        function syncIODev(route, expression) {
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
            // When we're rendering dynamically in dev we need to advance out of the
            // Prerender environment when we read Request data synchronously
            const requestStore = workUnitStore;
            (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
          }
          // In all cases we warn normally
          warnForSyncAccess(route, expression);
        }
        const noop = () => {};
        const warnForSyncAccess = ('TURBOPACK compile-time falsy', 0)
          ? ('TURBOPACK unreachable', undefined)
          : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(
              createCookiesAccessError,
            );
        function createCookiesAccessError(route, expression) {
          const prefix = route ? `Route "${route}" ` : 'This route ';
          return new Error(
            `${prefix}used ${expression}. ` +
              `\`cookies()\` should be awaited before using its value. ` +
              `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
          );
        }
        function polyfilledResponseCookiesIterator() {
          return this.getAll()
            .map(c => [c.name, c])
            .values();
        }
        function polyfilledResponseCookiesClear(returnable) {
          for (const cookie of this.getAll()) {
            this.delete(cookie.name);
          }
          return returnable;
        } //# sourceMappingURL=cookies.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            HeadersAdapter: null,
            ReadonlyHeadersError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          HeadersAdapter: function () {
            return HeadersAdapter;
          },
          ReadonlyHeadersError: function () {
            return ReadonlyHeadersError;
          },
        });
        const _reflect = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)',
        );
        class ReadonlyHeadersError extends Error {
          constructor() {
            super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
          }
          static callable() {
            throw new ReadonlyHeadersError();
          }
        }
        class HeadersAdapter extends Headers {
          constructor(headers) {
            // We've already overridden the methods that would be called, so we're just
            // calling the super constructor to ensure that the instanceof check works.
            super();
            this.headers = new Proxy(headers, {
              get(target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                  return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find(o => o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
              },
              set(target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                  return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find(o => o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
              },
              has(target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find(o => o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
              },
              deleteProperty(target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find(o => o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
              },
            });
          }
          /**
           * Seals a Headers instance to prevent modification by throwing an error when
           * any mutating method is called.
           */ static seal(headers) {
            return new Proxy(headers, {
              get(target, prop, receiver) {
                switch (prop) {
                  case 'append':
                  case 'delete':
                  case 'set':
                    return ReadonlyHeadersError.callable;
                  default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
              },
            });
          }
          /**
           * Merges a header value into a string. This stores multiple values as an
           * array, so we need to merge them into a string.
           *
           * @param value a header value
           * @returns a merged header value (a string)
           */ merge(value) {
            if (Array.isArray(value)) return value.join(', ');
            return value;
          }
          /**
           * Creates a Headers instance from a plain object or a Headers instance.
           *
           * @param headers a plain object or a Headers instance
           * @returns a headers instance
           */ static from(headers) {
            if (headers instanceof Headers) return headers;
            return new HeadersAdapter(headers);
          }
          append(name, value) {
            const existing = this.headers[name];
            if (typeof existing === 'string') {
              this.headers[name] = [existing, value];
            } else if (Array.isArray(existing)) {
              existing.push(value);
            } else {
              this.headers[name] = value;
            }
          }
          delete(name) {
            delete this.headers[name];
          }
          get(name) {
            const value = this.headers[name];
            if (typeof value !== 'undefined') return this.merge(value);
            return null;
          }
          has(name) {
            return typeof this.headers[name] !== 'undefined';
          }
          set(name, value) {
            this.headers[name] = value;
          }
          forEach(callbackfn, thisArg) {
            for (const [name, value] of this.entries()) {
              callbackfn.call(thisArg, value, name, this);
            }
          }
          *entries() {
            for (const key of Object.keys(this.headers)) {
              const name = key.toLowerCase();
              // We assert here that this is a string because we got it from the
              // Object.keys() call above.
              const value = this.get(name);
              yield [name, value];
            }
          }
          *keys() {
            for (const key of Object.keys(this.headers)) {
              const name = key.toLowerCase();
              yield name;
            }
          }
          *values() {
            for (const key of Object.keys(this.headers)) {
              // We assert here that this is a string because we got it from the
              // Object.keys() call above.
              const value = this.get(key);
              yield value;
            }
          }
          [Symbol.iterator]() {
            return this.entries();
          }
        } //# sourceMappingURL=headers.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'headers', {
          enumerable: true,
          get: function () {
            return headers;
          },
        });
        const _headers = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)',
        );
        const _workasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
        );
        const _workunitasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
        );
        const _dynamicrendering = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)',
        );
        const _staticgenerationbailout = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)',
        );
        const _dynamicrenderingutils = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)',
        );
        const _creatededupedbycallsiteservererrorlogger = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)',
        );
        const _scheduler = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)',
        );
        const _utils = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)',
        );
        function headers() {
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workStore) {
            if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
              throw new Error(
                `Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`,
              );
            }
            if (workStore.forceStatic) {
              // When using forceStatic we override all other logic and always just return an empty
              // headers object without tracking
              const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
              return makeUntrackedExoticHeaders(underlyingHeaders);
            }
            if (workUnitStore) {
              if (workUnitStore.type === 'cache') {
                throw new Error(
                  `Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`,
                );
              } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(
                  `Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`,
                );
              }
            }
            if (workStore.dynamicShouldError) {
              throw new _staticgenerationbailout.StaticGenBailoutError(
                `Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
              );
            }
            if (workUnitStore) {
              if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the headers object.
                return makeDynamicallyTrackedExoticHeaders(workStore.route, workUnitStore);
              } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how headers has worked in PPR without dynamicIO.
                // TODO consider switching the semantic to throw on property access instead
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, 'headers', workUnitStore.dynamicTracking);
              } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We are in a legacy static generation mode while prerendering
                // We track dynamic access here so we don't need to wrap the headers in
                // individual property access tracking.
                (0, _dynamicrendering.throwToInterruptStaticGeneration)('headers', workStore, workUnitStore);
              }
            }
            // We fall through to the dynamic context below but we still track dynamic access
            // because in dev we can still error for things like using headers inside a cache context
            (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
          }
          const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)('headers');
          if (
            ('TURBOPACK compile-time value', 'development') === 'development' &&
            !(workStore == null ? void 0 : workStore.isPrefetchRequest)
          ) {
            return makeUntrackedExoticHeadersWithDevWarnings(
              requestStore.headers,
              workStore == null ? void 0 : workStore.route,
            );
          } else {
            return makeUntrackedExoticHeaders(requestStore.headers);
          }
        }
        const CachedHeaders = new WeakMap();
        function makeDynamicallyTrackedExoticHeaders(route, prerenderStore) {
          const cachedHeaders = CachedHeaders.get(prerenderStore);
          if (cachedHeaders) {
            return cachedHeaders;
          }
          const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`headers()`');
          CachedHeaders.set(prerenderStore, promise);
          Object.defineProperties(promise, {
            append: {
              value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            delete: {
              value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            get: {
              value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            has: {
              value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            set: {
              value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            getSetCookie: {
              value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            forEach: {
              value: function forEach() {
                const expression = '`headers().forEach(...)`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            keys: {
              value: function keys() {
                const expression = '`headers().keys()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            values: {
              value: function values() {
                const expression = '`headers().values()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            entries: {
              value: function entries() {
                const expression = '`headers().entries()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
            [Symbol.iterator]: {
              value: function () {
                const expression = '`headers()[Symbol.iterator]()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  route,
                  expression,
                  error,
                  prerenderStore,
                );
              },
            },
          });
          return promise;
        }
        function makeUntrackedExoticHeaders(underlyingHeaders) {
          const cachedHeaders = CachedHeaders.get(underlyingHeaders);
          if (cachedHeaders) {
            return cachedHeaders;
          }
          const promise = Promise.resolve(underlyingHeaders);
          CachedHeaders.set(underlyingHeaders, promise);
          Object.defineProperties(promise, {
            append: {
              value: underlyingHeaders.append.bind(underlyingHeaders),
            },
            delete: {
              value: underlyingHeaders.delete.bind(underlyingHeaders),
            },
            get: {
              value: underlyingHeaders.get.bind(underlyingHeaders),
            },
            has: {
              value: underlyingHeaders.has.bind(underlyingHeaders),
            },
            set: {
              value: underlyingHeaders.set.bind(underlyingHeaders),
            },
            getSetCookie: {
              value: underlyingHeaders.getSetCookie.bind(underlyingHeaders),
            },
            forEach: {
              value: underlyingHeaders.forEach.bind(underlyingHeaders),
            },
            keys: {
              value: underlyingHeaders.keys.bind(underlyingHeaders),
            },
            values: {
              value: underlyingHeaders.values.bind(underlyingHeaders),
            },
            entries: {
              value: underlyingHeaders.entries.bind(underlyingHeaders),
            },
            [Symbol.iterator]: {
              value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders),
            },
          });
          return promise;
        }
        function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
          const cachedHeaders = CachedHeaders.get(underlyingHeaders);
          if (cachedHeaders) {
            return cachedHeaders;
          }
          const promise = new Promise(resolve => (0, _scheduler.scheduleImmediate)(() => resolve(underlyingHeaders)));
          CachedHeaders.set(underlyingHeaders, promise);
          Object.defineProperties(promise, {
            append: {
              value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.append.apply(underlyingHeaders, arguments);
              },
            },
            delete: {
              value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
              },
            },
            get: {
              value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.get.apply(underlyingHeaders, arguments);
              },
            },
            has: {
              value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.has.apply(underlyingHeaders, arguments);
              },
            },
            set: {
              value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.set.apply(underlyingHeaders, arguments);
              },
            },
            getSetCookie: {
              value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                syncIODev(route, expression);
                return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
              },
            },
            forEach: {
              value: function forEach() {
                const expression = '`headers().forEach(...)`';
                syncIODev(route, expression);
                return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
              },
            },
            keys: {
              value: function keys() {
                const expression = '`headers().keys()`';
                syncIODev(route, expression);
                return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
              },
            },
            values: {
              value: function values() {
                const expression = '`headers().values()`';
                syncIODev(route, expression);
                return underlyingHeaders.values.apply(underlyingHeaders, arguments);
              },
            },
            entries: {
              value: function entries() {
                const expression = '`headers().entries()`';
                syncIODev(route, expression);
                return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
              },
            },
            [Symbol.iterator]: {
              value: function () {
                const expression = '`...headers()` or similar iteration';
                syncIODev(route, expression);
                return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
              },
            },
          });
          return promise;
        }
        function describeNameArg(arg) {
          return typeof arg === 'string' ? `'${arg}'` : '...';
        }
        function syncIODev(route, expression) {
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
            // When we're rendering dynamically in dev we need to advance out of the
            // Prerender environment when we read Request data synchronously
            const requestStore = workUnitStore;
            (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
          }
          // In all cases we warn normally
          warnForSyncAccess(route, expression);
        }
        const noop = () => {};
        const warnForSyncAccess = ('TURBOPACK compile-time falsy', 0)
          ? ('TURBOPACK unreachable', undefined)
          : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(
              createHeadersAccessError,
            );
        function createHeadersAccessError(route, expression) {
          const prefix = route ? `Route "${route}" ` : 'This route ';
          return new Error(
            `${prefix}used ${expression}. ` +
              `\`headers()\` should be awaited before using its value. ` +
              `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
          );
        } //# sourceMappingURL=headers.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'draftMode', {
          enumerable: true,
          get: function () {
            return draftMode;
          },
        });
        const _workunitasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
        );
        const _workasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
        );
        const _dynamicrendering = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)',
        );
        const _creatededupedbycallsiteservererrorlogger = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)',
        );
        const _staticgenerationbailout = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)',
        );
        const _hooksservercontext = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)',
        );
        function draftMode() {
          const callingExpression = 'draftMode';
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workUnitStore) {
            if (
              workUnitStore.type === 'cache' ||
              workUnitStore.type === 'unstable-cache' ||
              workUnitStore.type === 'prerender' ||
              workUnitStore.type === 'prerender-ppr' ||
              workUnitStore.type === 'prerender-legacy'
            ) {
              // Return empty draft mode
              if (
                ('TURBOPACK compile-time value', 'development') === 'development' &&
                !(workStore == null ? void 0 : workStore.isPrefetchRequest)
              ) {
                const route = workStore == null ? void 0 : workStore.route;
                return createExoticDraftModeWithDevWarnings(null, route);
              } else {
                return createExoticDraftMode(null);
              }
            }
          }
          const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
          const cachedDraftMode = CachedDraftModes.get(requestStore.draftMode);
          if (cachedDraftMode) {
            return cachedDraftMode;
          }
          let promise;
          if (
            ('TURBOPACK compile-time value', 'development') === 'development' &&
            !(workStore == null ? void 0 : workStore.isPrefetchRequest)
          ) {
            const route = workStore == null ? void 0 : workStore.route;
            promise = createExoticDraftModeWithDevWarnings(requestStore.draftMode, route);
          } else {
            promise = createExoticDraftMode(requestStore.draftMode);
          }
          CachedDraftModes.set(requestStore.draftMode, promise);
          return promise;
        }
        const CachedDraftModes = new WeakMap();
        function createExoticDraftMode(underlyingProvider) {
          const instance = new DraftMode(underlyingProvider);
          const promise = Promise.resolve(instance);
          Object.defineProperty(promise, 'isEnabled', {
            get() {
              return instance.isEnabled;
            },
            set(newValue) {
              Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true,
              });
            },
            enumerable: true,
            configurable: true,
          });
          promise.enable = instance.enable.bind(instance);
          promise.disable = instance.disable.bind(instance);
          return promise;
        }
        function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
          const instance = new DraftMode(underlyingProvider);
          const promise = Promise.resolve(instance);
          Object.defineProperty(promise, 'isEnabled', {
            get() {
              const expression = '`draftMode().isEnabled`';
              syncIODev(route, expression);
              return instance.isEnabled;
            },
            set(newValue) {
              Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true,
              });
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(promise, 'enable', {
            value: function get() {
              const expression = '`draftMode().enable()`';
              syncIODev(route, expression);
              return instance.enable.apply(instance, arguments);
            },
          });
          Object.defineProperty(promise, 'disable', {
            value: function get() {
              const expression = '`draftMode().disable()`';
              syncIODev(route, expression);
              return instance.disable.apply(instance, arguments);
            },
          });
          return promise;
        }
        class DraftMode {
          constructor(provider) {
            this._provider = provider;
          }
          get isEnabled() {
            if (this._provider !== null) {
              return this._provider.isEnabled;
            }
            return false;
          }
          enable() {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            trackDynamicDraftMode('draftMode().enable()');
            if (this._provider !== null) {
              this._provider.enable();
            }
          }
          disable() {
            trackDynamicDraftMode('draftMode().disable()');
            if (this._provider !== null) {
              this._provider.disable();
            }
          }
        }
        function syncIODev(route, expression) {
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
            // When we're rendering dynamically in dev we need to advance out of the
            // Prerender environment when we read Request data synchronously
            const requestStore = workUnitStore;
            (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
          }
          // In all cases we warn normally
          warnForSyncAccess(route, expression);
        }
        const noop = () => {};
        const warnForSyncAccess = ('TURBOPACK compile-time falsy', 0)
          ? ('TURBOPACK unreachable', undefined)
          : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(
              createDraftModeAccessError,
            );
        function createDraftModeAccessError(route, expression) {
          const prefix = route ? `Route "${route}" ` : 'This route ';
          return new Error(
            `${prefix}used ${expression}. ` +
              `\`draftMode()\` should be awaited before using its value. ` +
              `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
          );
        }
        function trackDynamicDraftMode(expression) {
          const store = _workasyncstorageexternal.workAsyncStorage.getStore();
          const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
          if (store) {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            if (workUnitStore) {
              if (workUnitStore.type === 'cache') {
                throw new Error(
                  `Route ${store.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`,
                );
              } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(
                  `Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`,
                );
              } else if (workUnitStore.phase === 'after') {
                throw new Error(
                  `Route ${store.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`,
                );
              }
            }
            if (store.dynamicShouldError) {
              throw new _staticgenerationbailout.StaticGenBailoutError(
                `Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
              );
            }
            if (workUnitStore) {
              if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                const error = new Error(
                  `Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`,
                );
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(
                  store.route,
                  expression,
                  error,
                  workUnitStore,
                );
              } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender
                (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
              } else if (workUnitStore.type === 'prerender-legacy') {
                // legacy Prerender
                workUnitStore.revalidate = 0;
                const err = new _hooksservercontext.DynamicServerError(
                  `Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
                );
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
              } else if (
                ('TURBOPACK compile-time value', 'development') === 'development' &&
                workUnitStore &&
                workUnitStore.type === 'request'
              ) {
                workUnitStore.usedDynamic = true;
              }
            }
          }
        } //# sourceMappingURL=draft-mode.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/headers.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        module.exports.cookies = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)',
        ).cookies;
        module.exports.headers = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)',
        ).headers;
        module.exports.draftMode = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)',
        ).draftMode;
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          VERSION: () => VERSION,
        });
        const VERSION = '0.5.2'; //# sourceMappingURL=version.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          isBrowser: () => isBrowser,
          parse: () => parse,
          parseCookieHeader: () => parseCookieHeader,
          serialize: () => serialize,
          serializeCookieHeader: () => serializeCookieHeader,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/cookie@0.7.2/node_modules/cookie/index.js [app-rsc] (ecmascript)',
          );
        const parse =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'parse'
          ];
        const serialize =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'serialize'
          ];
        function parseCookieHeader(header) {
          const parsed = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'parse'
          ])(header);
          return Object.keys(parsed ?? {}).map(name => ({
            name,
            value: parsed[name],
          }));
        }
        function serializeCookieHeader(name, value, options) {
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'serialize'
          ])(name, value, options);
        }
        function isBrowser() {
          return 'undefined' !== 'undefined' && typeof window.document !== 'undefined';
        } //# sourceMappingURL=helpers.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          DEFAULT_COOKIE_OPTIONS: () => DEFAULT_COOKIE_OPTIONS,
        });
        const DEFAULT_COOKIE_OPTIONS = {
          path: '/',
          sameSite: 'lax',
          httpOnly: false,
          // https://developer.chrome.com/blog/cookie-max-age-expires
          // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
          maxAge: 400 * 24 * 60 * 60,
        }; //# sourceMappingURL=constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          MAX_CHUNK_SIZE: () => MAX_CHUNK_SIZE,
          combineChunks: () => combineChunks,
          createChunks: () => createChunks,
          deleteChunks: () => deleteChunks,
          isChunkLike: () => isChunkLike,
        });
        const MAX_CHUNK_SIZE = 3180;
        const CHUNK_LIKE_REGEX = /^(.*)[.](0|[1-9][0-9]*)$/;
        function isChunkLike(cookieName, key) {
          if (cookieName === key) {
            return true;
          }
          const chunkLike = cookieName.match(CHUNK_LIKE_REGEX);
          if (chunkLike && chunkLike[1] === key) {
            return true;
          }
          return false;
        }
        function createChunks(key, value, chunkSize) {
          const resolvedChunkSize = chunkSize ?? MAX_CHUNK_SIZE;
          let encodedValue = encodeURIComponent(value);
          if (encodedValue.length <= resolvedChunkSize) {
            return [
              {
                name: key,
                value,
              },
            ];
          }
          const chunks = [];
          while (encodedValue.length > 0) {
            let encodedChunkHead = encodedValue.slice(0, resolvedChunkSize);
            const lastEscapePos = encodedChunkHead.lastIndexOf('%');
            // Check if the last escaped character is truncated.
            if (lastEscapePos > resolvedChunkSize - 3) {
              // If so, reslice the string to exclude the whole escape sequence.
              // We only reduce the size of the string as the chunk must
              // be smaller than the chunk size.
              encodedChunkHead = encodedChunkHead.slice(0, lastEscapePos);
            }
            let valueHead = '';
            // Check if the chunk was split along a valid unicode boundary.
            while (encodedChunkHead.length > 0) {
              try {
                // Try to decode the chunk back and see if it is valid.
                // Stop when the chunk is valid.
                valueHead = decodeURIComponent(encodedChunkHead);
                break;
              } catch (error) {
                if (error instanceof URIError && encodedChunkHead.at(-3) === '%' && encodedChunkHead.length > 3) {
                  encodedChunkHead = encodedChunkHead.slice(0, encodedChunkHead.length - 3);
                } else {
                  throw error;
                }
              }
            }
            chunks.push(valueHead);
            encodedValue = encodedValue.slice(encodedChunkHead.length);
          }
          return chunks.map((value, i) => ({
            name: `${key}.${i}`,
            value,
          }));
        }
        async function combineChunks(key, retrieveChunk) {
          const value = await retrieveChunk(key);
          if (value) {
            return value;
          }
          let values = [];
          for (let i = 0; ; i++) {
            const chunkName = `${key}.${i}`;
            const chunk = await retrieveChunk(chunkName);
            if (!chunk) {
              break;
            }
            values.push(chunk);
          }
          if (values.length > 0) {
            return values.join('');
          }
          return null;
        }
        async function deleteChunks(key, retrieveChunk, removeChunk) {
          const value = await retrieveChunk(key);
          if (value) {
            await removeChunk(key);
          }
          for (let i = 0; ; i++) {
            const chunkName = `${key}.${i}`;
            const chunk = await retrieveChunk(chunkName);
            if (!chunk) {
              break;
            }
            await removeChunk(chunkName);
          }
        } //# sourceMappingURL=chunker.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        /**
         * Avoid modifying this file. It's part of
         * https://github.com/supabase-community/base64url-js.  Submit all fixes on
         * that repo!
         */ /**
         * An array of characters that encode 6 bits into a Base64-URL alphabet
         * character.
         */ __turbopack_esm__({
          codepointToUTF8: () => codepointToUTF8,
          stringFromBase64URL: () => stringFromBase64URL,
          stringFromUTF8: () => stringFromUTF8,
          stringToBase64URL: () => stringToBase64URL,
          stringToUTF8: () => stringToUTF8,
        });
        const TO_BASE64URL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split('');
        /**
         * An array of characters that can appear in a Base64-URL encoded string but
         * should be ignored.
         */ const IGNORE_BASE64URL = ' \t\n\r='.split('');
        /**
         * An array of 128 numbers that map a Base64-URL character to 6 bits, or if -2
         * used to skip the character, or if -1 used to error out.
         */ const FROM_BASE64URL = (() => {
          const charMap = new Array(128);
          for (let i = 0; i < charMap.length; i += 1) {
            charMap[i] = -1;
          }
          for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
            charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
          }
          for (let i = 0; i < TO_BASE64URL.length; i += 1) {
            charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
          }
          return charMap;
        })();
        function stringToBase64URL(str) {
          const base64 = [];
          let queue = 0;
          let queuedBits = 0;
          const emitter = byte => {
            queue = (queue << 8) | byte;
            queuedBits += 8;
            while (queuedBits >= 6) {
              const pos = (queue >> (queuedBits - 6)) & 63;
              base64.push(TO_BASE64URL[pos]);
              queuedBits -= 6;
            }
          };
          stringToUTF8(str, emitter);
          if (queuedBits > 0) {
            queue = queue << (6 - queuedBits);
            queuedBits = 6;
            while (queuedBits >= 6) {
              const pos = (queue >> (queuedBits - 6)) & 63;
              base64.push(TO_BASE64URL[pos]);
              queuedBits -= 6;
            }
          }
          return base64.join('');
        }
        function stringFromBase64URL(str) {
          const conv = [];
          const emit = codepoint => {
            conv.push(String.fromCodePoint(codepoint));
          };
          const state = {
            utf8seq: 0,
            codepoint: 0,
          };
          let queue = 0;
          let queuedBits = 0;
          for (let i = 0; i < str.length; i += 1) {
            const codepoint = str.charCodeAt(i);
            const bits = FROM_BASE64URL[codepoint];
            if (bits > -1) {
              // valid Base64-URL character
              queue = (queue << 6) | bits;
              queuedBits += 6;
              while (queuedBits >= 8) {
                stringFromUTF8((queue >> (queuedBits - 8)) & 0xff, state, emit);
                queuedBits -= 8;
              }
            } else if (bits === -2) {
              continue;
            } else {
              throw new Error(`Invalid Base64-URL character "${str.at(i)}" at position ${i}`);
            }
          }
          return conv.join('');
        }
        function codepointToUTF8(codepoint, emit) {
          if (codepoint <= 0x7f) {
            emit(codepoint);
            return;
          } else if (codepoint <= 0x7ff) {
            emit(0xc0 | (codepoint >> 6));
            emit(0x80 | (codepoint & 0x3f));
            return;
          } else if (codepoint <= 0xffff) {
            emit(0xe0 | (codepoint >> 12));
            emit(0x80 | ((codepoint >> 6) & 0x3f));
            emit(0x80 | (codepoint & 0x3f));
            return;
          } else if (codepoint <= 0x10ffff) {
            emit(0xf0 | (codepoint >> 18));
            emit(0x80 | ((codepoint >> 12) & 0x3f));
            emit(0x80 | ((codepoint >> 6) & 0x3f));
            emit(0x80 | (codepoint & 0x3f));
            return;
          }
          throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
        }
        function stringToUTF8(str, emit) {
          for (let i = 0; i < str.length; i += 1) {
            let codepoint = str.charCodeAt(i);
            if (codepoint > 0xd7ff && codepoint <= 0xdbff) {
              // most UTF-16 codepoints are Unicode codepoints, except values in this
              // range where the next UTF-16 codepoint needs to be combined with the
              // current one to get the Unicode codepoint
              const highSurrogate = ((codepoint - 0xd800) * 0x400) & 0xffff;
              const lowSurrogate = (str.charCodeAt(i + 1) - 0xdc00) & 0xffff;
              codepoint = (lowSurrogate | highSurrogate) + 0x10000;
              i += 1;
            }
            codepointToUTF8(codepoint, emit);
          }
        }
        function stringFromUTF8(byte, state, emit) {
          if (state.utf8seq === 0) {
            if (byte <= 0x7f) {
              emit(byte);
              return;
            }
            // count the number of 1 leading bits until you reach 0
            for (let leadingBit = 1; leadingBit < 6; leadingBit += 1) {
              if (((byte >> (7 - leadingBit)) & 1) === 0) {
                state.utf8seq = leadingBit;
                break;
              }
            }
            if (state.utf8seq === 2) {
              state.codepoint = byte & 31;
            } else if (state.utf8seq === 3) {
              state.codepoint = byte & 15;
            } else if (state.utf8seq === 4) {
              state.codepoint = byte & 7;
            } else {
              throw new Error('Invalid UTF-8 sequence');
            }
            state.utf8seq -= 1;
          } else if (state.utf8seq > 0) {
            if (byte <= 0x7f) {
              throw new Error('Invalid UTF-8 sequence');
            }
            state.codepoint = (state.codepoint << 6) | (byte & 63);
            state.utf8seq -= 1;
            if (state.utf8seq === 0) {
              emit(state.codepoint);
            }
          }
        } //# sourceMappingURL=base64url.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          applyServerStorage: () => applyServerStorage,
          createStorageFromOptions: () => createStorageFromOptions,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/cookie@0.7.2/node_modules/cookie/index.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)',
          );
        const BASE64_PREFIX = 'base64-';
        function createStorageFromOptions(options, isServerClient) {
          const cookies = options.cookies ?? null;
          const cookieEncoding = options.cookieEncoding;
          const setItems = {};
          const removedItems = {};
          let getAll;
          let setAll;
          if (cookies) {
            if ('get' in cookies) {
              // Just get is not enough, because the client needs to see what cookies
              // are already set and unset them if necessary. To attempt to fix this
              // behavior for most use cases, we pass "hints" which is the keys of the
              // storage items. They are then converted to their corresponding cookie
              // chunk names and are fetched with get. Only 5 chunks are fetched, which
              // should be enough for the majority of use cases, but does not solve
              // those with very large sessions.
              const getWithHints = async keyHints => {
                // optimistically find the first 5 potential chunks for the specified key
                const chunkNames = keyHints.flatMap(keyHint => [
                  keyHint,
                  ...Array.from({
                    length: 5,
                  }).map((_, i) => `${keyHint}.${i}`),
                ]);
                const chunks = [];
                for (let i = 0; i < chunkNames.length; i += 1) {
                  const value = await cookies.get(chunkNames[i]);
                  if (!value && typeof value !== 'string') {
                    continue;
                  }
                  chunks.push({
                    name: chunkNames[i],
                    value,
                  });
                }
                // TODO: detect and log stale chunks error
                return chunks;
              };
              getAll = async keyHints => await getWithHints(keyHints);
              if ('set' in cookies && 'remove' in cookies) {
                setAll = async setCookies => {
                  for (let i = 0; i < setCookies.length; i += 1) {
                    const { name, value, options } = setCookies[i];
                    if (value) {
                      await cookies.set(name, value, options);
                    } else {
                      await cookies.remove(name, options);
                    }
                  }
                };
              } else if (isServerClient) {
                setAll = async () => {
                  console.warn(
                    '@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.',
                  );
                };
              } else {
                throw new Error(
                  '@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)',
                );
              }
            } else if ('getAll' in cookies) {
              getAll = async () => await cookies.getAll();
              if ('setAll' in cookies) {
                setAll = cookies.setAll;
              } else if (isServerClient) {
                setAll = async () => {
                  console.warn(
                    '@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.',
                  );
                };
              } else {
                throw new Error(
                  '@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)',
                );
              }
            } else {
              // neither get nor getAll is present on cookies, only will occur if pure JavaScript is used, but cookies is an object
              throw new Error(
                `@supabase/ssr: ${isServerClient ? 'createServerClient' : 'createBrowserClient'} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['isBrowser'])() ? ' As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically.' : ''}`,
              );
            }
          } else if (
            !isServerClient &&
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isBrowser'
            ])()
          ) {
            // The environment is browser, so use the document.cookie API to implement getAll and setAll.
            const noHintGetAll = () => {
              const parsed = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'parse'
              ])(document.cookie);
              return Object.keys(parsed).map(name => ({
                name,
                value: parsed[name],
              }));
            };
            getAll = () => noHintGetAll();
            setAll = setCookies => {
              setCookies.forEach(({ name, value, options }) => {
                document.cookie = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$7$2e$2$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'serialize'
                ])(name, value, options);
              });
            };
          } else if (isServerClient) {
            throw new Error(
              '@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)',
            );
          } else {
            // getting cookies when there's no window but we're in browser mode can be OK, because the developer probably is not using auth functions
            getAll = () => {
              return [];
            };
            // this is NOT OK because the developer is using auth functions that require setting some state, so that must error out
            setAll = () => {
              throw new Error(
                '@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed',
              );
            };
          }
          if (!isServerClient) {
            // This is the storage client to be used in browsers. It only
            // works on the cookies abstraction, unlike the server client
            // which only uses cookies to read the initial state. When an
            // item is set, cookies are both cleared and set to values so
            // that stale chunks are not left remaining.
            return {
              getAll,
              setAll,
              setItems,
              removedItems,
              storage: {
                isServer: false,
                getItem: async key => {
                  const allCookies = await getAll([key]);
                  const chunkedCookie = await (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'combineChunks'
                  ])(key, async chunkName => {
                    const cookie = allCookies?.find(({ name }) => name === chunkName) || null;
                    if (!cookie) {
                      return null;
                    }
                    return cookie.value;
                  });
                  if (!chunkedCookie) {
                    return null;
                  }
                  let decoded = chunkedCookie;
                  if (chunkedCookie.startsWith(BASE64_PREFIX)) {
                    decoded = (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'stringFromBase64URL'
                    ])(chunkedCookie.substring(BASE64_PREFIX.length));
                  }
                  return decoded;
                },
                setItem: async (key, value) => {
                  const allCookies = await getAll([key]);
                  const cookieNames = allCookies?.map(({ name }) => name) || [];
                  const removeCookies = new Set(
                    cookieNames.filter(name =>
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'isChunkLike'
                      ])(name, key),
                    ),
                  );
                  let encoded = value;
                  if (cookieEncoding === 'base64url') {
                    encoded =
                      BASE64_PREFIX +
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'stringToBase64URL'
                      ])(value);
                  }
                  const setCookies = (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'createChunks'
                  ])(key, encoded);
                  setCookies.forEach(({ name }) => {
                    removeCookies.delete(name);
                  });
                  const removeCookieOptions = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'DEFAULT_COOKIE_OPTIONS'
                    ],
                    ...options?.cookieOptions,
                    maxAge: 0,
                  };
                  const setCookieOptions = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'DEFAULT_COOKIE_OPTIONS'
                    ],
                    ...options?.cookieOptions,
                    maxAge:
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'DEFAULT_COOKIE_OPTIONS'
                      ].maxAge,
                  };
                  // the NextJS cookieStore API can get confused if the `name` from
                  // options.cookieOptions leaks
                  delete removeCookieOptions.name;
                  delete setCookieOptions.name;
                  const allToSet = [
                    ...[...removeCookies].map(name => ({
                      name,
                      value: '',
                      options: removeCookieOptions,
                    })),
                    ...setCookies.map(({ name, value }) => ({
                      name,
                      value,
                      options: setCookieOptions,
                    })),
                  ];
                  if (allToSet.length > 0) {
                    await setAll(allToSet);
                  }
                },
                removeItem: async key => {
                  const allCookies = await getAll([key]);
                  const cookieNames = allCookies?.map(({ name }) => name) || [];
                  const removeCookies = cookieNames.filter(name =>
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'isChunkLike'
                    ])(name, key),
                  );
                  const removeCookieOptions = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'DEFAULT_COOKIE_OPTIONS'
                    ],
                    ...options?.cookieOptions,
                    maxAge: 0,
                  };
                  // the NextJS cookieStore API can get confused if the `name` from
                  // options.cookieOptions leaks
                  delete removeCookieOptions.name;
                  if (removeCookies.length > 0) {
                    await setAll(
                      removeCookies.map(name => ({
                        name,
                        value: '',
                        options: removeCookieOptions,
                      })),
                    );
                  }
                },
              },
            };
          }
          // This is the server client. It only uses getAll to read the initial
          // state. Any subsequent changes to the items is persisted in the
          // setItems and removedItems objects. createServerClient *must* use
          // getAll, setAll and the values in setItems and removedItems to
          // persist the changes *at once* when appropriate (usually only when
          // the TOKEN_REFRESHED, USER_UPDATED or SIGNED_OUT events are fired by
          // the Supabase Auth client).
          return {
            getAll,
            setAll,
            setItems,
            removedItems,
            storage: {
              // to signal to the libraries that these cookies are
              // coming from a server environment and their value
              // should not be trusted
              isServer: true,
              getItem: async key => {
                if (typeof setItems[key] === 'string') {
                  return setItems[key];
                }
                if (removedItems[key]) {
                  return null;
                }
                const allCookies = await getAll([key]);
                const chunkedCookie = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'combineChunks'
                ])(key, async chunkName => {
                  const cookie = allCookies?.find(({ name }) => name === chunkName) || null;
                  if (!cookie) {
                    return null;
                  }
                  return cookie.value;
                });
                if (!chunkedCookie) {
                  return null;
                }
                let decoded = chunkedCookie;
                if (typeof chunkedCookie === 'string' && chunkedCookie.startsWith(BASE64_PREFIX)) {
                  decoded = (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'stringFromBase64URL'
                  ])(chunkedCookie.substring(BASE64_PREFIX.length));
                }
                return decoded;
              },
              setItem: async (key, value) => {
                // We don't have an `onAuthStateChange` event that can let us know that
                // the PKCE code verifier is being set. Therefore, if we see it being
                // set, we need to apply the storage (call `setAll` so the cookie is
                // set properly).
                if (key.endsWith('-code-verifier')) {
                  await applyServerStorage(
                    {
                      getAll,
                      setAll,
                      // pretend only that the code verifier was set
                      setItems: {
                        [key]: value,
                      },
                      // pretend that nothing was removed
                      removedItems: {},
                    },
                    {
                      cookieOptions: options?.cookieOptions ?? null,
                      cookieEncoding,
                    },
                  );
                }
                setItems[key] = value;
                delete removedItems[key];
              },
              removeItem: async key => {
                // Intentionally not applying the storage when the key is the PKCE code
                // verifier, as usually right after it's removed other items are set,
                // so application of the storage will be handled by the
                // `onAuthStateChange` callback that follows removal -- usually as part
                // of the `exchangeCodeForSession` call.
                delete setItems[key];
                removedItems[key] = true;
              },
            },
          };
        }
        async function applyServerStorage({ getAll, setAll, setItems, removedItems }, options) {
          const cookieEncoding = options.cookieEncoding;
          const cookieOptions = options.cookieOptions ?? null;
          const allCookies = await getAll([
            ...(setItems ? Object.keys(setItems) : []),
            ...(removedItems ? Object.keys(removedItems) : []),
          ]);
          const cookieNames = allCookies?.map(({ name }) => name) || [];
          const removeCookies = Object.keys(removedItems).flatMap(itemName => {
            return cookieNames.filter(name =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isChunkLike'
              ])(name, itemName),
            );
          });
          const setCookies = Object.keys(setItems).flatMap(itemName => {
            const removeExistingCookiesForItem = new Set(
              cookieNames.filter(name =>
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isChunkLike'
                ])(name, itemName),
              ),
            );
            let encoded = setItems[itemName];
            if (cookieEncoding === 'base64url') {
              encoded =
                BASE64_PREFIX +
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'stringToBase64URL'
                ])(encoded);
            }
            const chunks = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'createChunks'
            ])(itemName, encoded);
            chunks.forEach(chunk => {
              removeExistingCookiesForItem.delete(chunk.name);
            });
            removeCookies.push(...removeExistingCookiesForItem);
            return chunks;
          });
          const removeCookieOptions = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'DEFAULT_COOKIE_OPTIONS'
            ],
            ...cookieOptions,
            maxAge: 0,
          };
          const setCookieOptions = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'DEFAULT_COOKIE_OPTIONS'
            ],
            ...cookieOptions,
            maxAge:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'DEFAULT_COOKIE_OPTIONS'
              ].maxAge,
          };
          // the NextJS cookieStore API can get confused if the `name` from
          // options.cookieOptions leaks
          delete removeCookieOptions.name;
          delete setCookieOptions.name;
          await setAll([
            ...removeCookies.map(name => ({
              name,
              value: '',
              options: removeCookieOptions,
            })),
            ...setCookies.map(({ name, value }) => ({
              name,
              value,
              options: setCookieOptions,
            })),
          ]);
        } //# sourceMappingURL=cookies.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          createBrowserClient: () => createBrowserClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>',
          );
        let cachedBrowserClient;
        function createBrowserClient(supabaseUrl, supabaseKey, options) {
          // singleton client is created only if isSingleton is set to true, or if isSingleton is not defined and we detect a browser
          const shouldUseSingleton =
            options?.isSingleton === true ||
            ((!options || !('isSingleton' in options)) &&
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isBrowser'
              ])());
          if (shouldUseSingleton && cachedBrowserClient) {
            return cachedBrowserClient;
          }
          if (!supabaseUrl || !supabaseKey) {
            throw new Error(
              `@supabase/ssr: Your project's URL and API key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`,
            );
          }
          const { storage } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'createStorageFromOptions'
          ])(
            {
              ...options,
              cookieEncoding: options?.cookieEncoding ?? 'base64url',
            },
            false,
          );
          const client = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'createClient'
          ])(supabaseUrl, supabaseKey, {
            ...options,
            global: {
              ...options?.global,
              headers: {
                ...options?.global?.headers,
                'X-Client-Info': `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['VERSION']}`,
              },
            },
            auth: {
              ...options?.auth,
              ...(options?.cookieOptions?.name
                ? {
                    storageKey: options.cookieOptions.name,
                  }
                : null),
              flowType: 'pkce',
              autoRefreshToken: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isBrowser'
              ])(),
              detectSessionInUrl: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isBrowser'
              ])(),
              persistSession: true,
              storage,
            },
          });
          if (shouldUseSingleton) {
            cachedBrowserClient = client;
          }
          return client;
        } //# sourceMappingURL=createBrowserClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          createServerClient: () => createServerClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>',
          );
        function createServerClient(supabaseUrl, supabaseKey, options) {
          if (!supabaseUrl || !supabaseKey) {
            throw new Error(
              `Your project's URL and Key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`,
            );
          }
          const { storage, getAll, setAll, setItems, removedItems } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'createStorageFromOptions'
          ])(
            {
              ...options,
              cookieEncoding: options?.cookieEncoding ?? 'base64url',
            },
            true,
          );
          const client = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'createClient'
          ])(supabaseUrl, supabaseKey, {
            ...options,
            global: {
              ...options?.global,
              headers: {
                ...options?.global?.headers,
                'X-Client-Info': `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['VERSION']}`,
              },
            },
            auth: {
              ...(options?.cookieOptions?.name
                ? {
                    storageKey: options.cookieOptions.name,
                  }
                : null),
              ...options?.auth,
              flowType: 'pkce',
              autoRefreshToken: false,
              detectSessionInUrl: false,
              persistSession: true,
              storage,
            },
          });
          client.auth.onAuthStateChange(async event => {
            // The SIGNED_IN event is fired very often, but we don't need to
            // apply the storage each time it fires, only if there are changes
            // that need to be set -- which is if setItems / removeItems have
            // data.
            const hasStorageChanges = Object.keys(setItems).length > 0 || Object.keys(removedItems).length > 0;
            if (
              hasStorageChanges &&
              (event === 'SIGNED_IN' ||
                event === 'TOKEN_REFRESHED' ||
                event === 'USER_UPDATED' ||
                event === 'PASSWORD_RECOVERY' ||
                event === 'SIGNED_OUT' ||
                event === 'MFA_CHALLENGE_VERIFIED')
            ) {
              await (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'applyServerStorage'
              ])(
                {
                  getAll,
                  setAll,
                  setItems,
                  removedItems,
                },
                {
                  cookieOptions: options?.cookieOptions ?? null,
                  cookieEncoding: options?.cookieEncoding ?? 'base64url',
                },
              );
            }
          });
          return client;
        } //# sourceMappingURL=createServerClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/types.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        //# sourceMappingURL=types.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/cookie@0.7.2/node_modules/cookie/index.js [app-rsc] (ecmascript)': function (
    __turbopack_context__,
  ) {
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
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      m: module,
      e: exports,
      t: __turbopack_require_real__,
    } = __turbopack_context__;
    {
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ ('use strict');
      /**
       * Module exports.
       * @public
       */ exports.parse = parse;
      exports.serialize = serialize;
      /**
       * Module variables.
       * @private
       */ var __toString = Object.prototype.toString;
      var __hasOwnProperty = Object.prototype.hasOwnProperty;
      /**
       * RegExp to match cookie-name in RFC 6265 sec 4.1.1
       * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
       * which has been replaced by the token definition in RFC 7230 appendix B.
       *
       * cookie-name       = token
       * token             = 1*tchar
       * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
       *                     "*" / "+" / "-" / "." / "^" / "_" /
       *                     "`" / "|" / "~" / DIGIT / ALPHA
       */ var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
      /**
       * RegExp to match cookie-value in RFC 6265 sec 4.1.1
       *
       * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
       * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
       *                     ; US-ASCII characters excluding CTLs,
       *                     ; whitespace DQUOTE, comma, semicolon,
       *                     ; and backslash
       */ var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
      /**
       * RegExp to match domain-value in RFC 6265 sec 4.1.1
       *
       * domain-value      = <subdomain>
       *                     ; defined in [RFC1034], Section 3.5, as
       *                     ; enhanced by [RFC1123], Section 2.1
       * <subdomain>       = <label> | <subdomain> "." <label>
       * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
       *                     Labels must be 63 characters or less.
       *                     'let-dig' not 'letter' in the first char, per RFC1123
       * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
       * <let-dig-hyp>     = <let-dig> | "-"
       * <let-dig>         = <letter> | <digit>
       * <letter>          = any one of the 52 alphabetic characters A through Z in
       *                     upper case and a through z in lower case
       * <digit>           = any one of the ten digits 0 through 9
       *
       * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
       *
       * > (Note that a leading %x2E ("."), if present, is ignored even though that
       * character is not permitted, but a trailing %x2E ("."), if present, will
       * cause the user agent to ignore the attribute.)
       */ var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
      /**
       * RegExp to match path-value in RFC 6265 sec 4.1.1
       *
       * path-value        = <any CHAR except CTLs or ";">
       * CHAR              = %x01-7F
       *                     ; defined in RFC 5234 appendix B.1
       */ var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
      /**
       * Parse a cookie header.
       *
       * Parse the given cookie header string into an object
       * The object has the various cookies as keys(names) => values
       *
       * @param {string} str
       * @param {object} [opt]
       * @return {object}
       * @public
       */ function parse(str, opt) {
        if (typeof str !== 'string') {
          throw new TypeError('argument str must be a string');
        }
        var obj = {};
        var len = str.length;
        // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
        if (len < 2) return obj;
        var dec = (opt && opt.decode) || decode;
        var index = 0;
        var eqIdx = 0;
        var endIdx = 0;
        do {
          eqIdx = str.indexOf('=', index);
          if (eqIdx === -1) break; // No more cookie pairs.
          endIdx = str.indexOf(';', index);
          if (endIdx === -1) {
            endIdx = len;
          } else if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(';', eqIdx - 1) + 1;
            continue;
          }
          var keyStartIdx = startIndex(str, index, eqIdx);
          var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
          var key = str.slice(keyStartIdx, keyEndIdx);
          // only assign once
          if (!__hasOwnProperty.call(obj, key)) {
            var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            var valEndIdx = endIndex(str, endIdx, valStartIdx);
            if (str.charCodeAt(valStartIdx) === 0x22 /* " */ && str.charCodeAt(valEndIdx - 1) === 0x22 /* " */) {
              valStartIdx++;
              valEndIdx--;
            }
            var val = str.slice(valStartIdx, valEndIdx);
            obj[key] = tryDecode(val, dec);
          }
          index = endIdx + 1;
        } while (index < len);
        return obj;
      }
      function startIndex(str, index, max) {
        do {
          var code = str.charCodeAt(index);
          if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index;
        } while (++index < max);
        return max;
      }
      function endIndex(str, index, min) {
        while (index > min) {
          var code = str.charCodeAt(--index);
          if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index + 1;
        }
        return min;
      }
      /**
       * Serialize data into a cookie header.
       *
       * Serialize a name value pair into a cookie string suitable for
       * http headers. An optional options object specifies cookie parameters.
       *
       * serialize('foo', 'bar', { httpOnly: true })
       *   => "foo=bar; httpOnly"
       *
       * @param {string} name
       * @param {string} val
       * @param {object} [opt]
       * @return {string}
       * @public
       */ function serialize(name, val, opt) {
        var enc = (opt && opt.encode) || encodeURIComponent;
        if (typeof enc !== 'function') {
          throw new TypeError('option encode is invalid');
        }
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError('argument name is invalid');
        }
        var value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError('argument val is invalid');
        }
        var str = name + '=' + value;
        if (!opt) return str;
        if (null != opt.maxAge) {
          var maxAge = Math.floor(opt.maxAge);
          if (!isFinite(maxAge)) {
            throw new TypeError('option maxAge is invalid');
          }
          str += '; Max-Age=' + maxAge;
        }
        if (opt.domain) {
          if (!domainValueRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
          }
          str += '; Domain=' + opt.domain;
        }
        if (opt.path) {
          if (!pathValueRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
          }
          str += '; Path=' + opt.path;
        }
        if (opt.expires) {
          var expires = opt.expires;
          if (!isDate(expires) || isNaN(expires.valueOf())) {
            throw new TypeError('option expires is invalid');
          }
          str += '; Expires=' + expires.toUTCString();
        }
        if (opt.httpOnly) {
          str += '; HttpOnly';
        }
        if (opt.secure) {
          str += '; Secure';
        }
        if (opt.partitioned) {
          str += '; Partitioned';
        }
        if (opt.priority) {
          var priority = typeof opt.priority === 'string' ? opt.priority.toLowerCase() : opt.priority;
          switch (priority) {
            case 'low':
              str += '; Priority=Low';
              break;
            case 'medium':
              str += '; Priority=Medium';
              break;
            case 'high':
              str += '; Priority=High';
              break;
            default:
              throw new TypeError('option priority is invalid');
          }
        }
        if (opt.sameSite) {
          var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
          switch (sameSite) {
            case true:
              str += '; SameSite=Strict';
              break;
            case 'lax':
              str += '; SameSite=Lax';
              break;
            case 'strict':
              str += '; SameSite=Strict';
              break;
            case 'none':
              str += '; SameSite=None';
              break;
            default:
              throw new TypeError('option sameSite is invalid');
          }
        }
        return str;
      }
      /**
       * URL-decode string value. Optimized to skip native call when no %.
       *
       * @param {string} str
       * @returns {string}
       */ function decode(str) {
        return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
      }
      /**
       * Determine if value is a Date.
       *
       * @param {*} val
       * @private
       */ function isDate(val) {
        return __toString.call(val) === '[object Date]';
      }
      /**
       * Try decoding a string using a decoding function.
       *
       * @param {string} str
       * @param {function} decode
       * @private
       */ function tryDecode(str, decode) {
        try {
          return decode(str);
        } catch (e) {
          return str;
        }
      }
    }
  },
  '[project]/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var conversions = {};
        module.exports = conversions;
        function sign(x) {
          return x < 0 ? -1 : 1;
        }
        function evenRound(x) {
          // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
          if (x % 1 === 0.5 && (x & 1) === 0) {
            return Math.floor(x);
          } else {
            return Math.round(x);
          }
        }
        function createNumberConversion(bitLength, typeOpts) {
          if (!typeOpts.unsigned) {
            --bitLength;
          }
          const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
          const upperBound = Math.pow(2, bitLength) - 1;
          const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
          const moduloBound = typeOpts.moduloBitLength
            ? Math.pow(2, typeOpts.moduloBitLength - 1)
            : Math.pow(2, bitLength - 1);
          return function (V, opts) {
            if (!opts) opts = {};
            let x = +V;
            if (opts.enforceRange) {
              if (!Number.isFinite(x)) {
                throw new TypeError('Argument is not a finite number');
              }
              x = sign(x) * Math.floor(Math.abs(x));
              if (x < lowerBound || x > upperBound) {
                throw new TypeError('Argument is not in byte range');
              }
              return x;
            }
            if (!isNaN(x) && opts.clamp) {
              x = evenRound(x);
              if (x < lowerBound) x = lowerBound;
              if (x > upperBound) x = upperBound;
              return x;
            }
            if (!Number.isFinite(x) || x === 0) {
              return 0;
            }
            x = sign(x) * Math.floor(Math.abs(x));
            x = x % moduloVal;
            if (!typeOpts.unsigned && x >= moduloBound) {
              return x - moduloVal;
            } else if (typeOpts.unsigned) {
              if (x < 0) {
                x += moduloVal;
              } else if (x === -0) {
                return 0;
              }
            }
            return x;
          };
        }
        conversions['void'] = function () {
          return undefined;
        };
        conversions['boolean'] = function (val) {
          return !!val;
        };
        conversions['byte'] = createNumberConversion(8, {
          unsigned: false,
        });
        conversions['octet'] = createNumberConversion(8, {
          unsigned: true,
        });
        conversions['short'] = createNumberConversion(16, {
          unsigned: false,
        });
        conversions['unsigned short'] = createNumberConversion(16, {
          unsigned: true,
        });
        conversions['long'] = createNumberConversion(32, {
          unsigned: false,
        });
        conversions['unsigned long'] = createNumberConversion(32, {
          unsigned: true,
        });
        conversions['long long'] = createNumberConversion(32, {
          unsigned: false,
          moduloBitLength: 64,
        });
        conversions['unsigned long long'] = createNumberConversion(32, {
          unsigned: true,
          moduloBitLength: 64,
        });
        conversions['double'] = function (V) {
          const x = +V;
          if (!Number.isFinite(x)) {
            throw new TypeError('Argument is not a finite floating-point value');
          }
          return x;
        };
        conversions['unrestricted double'] = function (V) {
          const x = +V;
          if (isNaN(x)) {
            throw new TypeError('Argument is NaN');
          }
          return x;
        };
        // not quite valid, but good enough for JS
        conversions['float'] = conversions['double'];
        conversions['unrestricted float'] = conversions['unrestricted double'];
        conversions['DOMString'] = function (V, opts) {
          if (!opts) opts = {};
          if (opts.treatNullAsEmptyString && V === null) {
            return '';
          }
          return String(V);
        };
        conversions['ByteString'] = function (V, opts) {
          const x = String(V);
          let c = undefined;
          for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
            if (c > 255) {
              throw new TypeError('Argument is not a valid bytestring');
            }
          }
          return x;
        };
        conversions['USVString'] = function (V) {
          const S = String(V);
          const n = S.length;
          const U = [];
          for (let i = 0; i < n; ++i) {
            const c = S.charCodeAt(i);
            if (c < 0xd800 || c > 0xdfff) {
              U.push(String.fromCodePoint(c));
            } else if (0xdc00 <= c && c <= 0xdfff) {
              U.push(String.fromCodePoint(0xfffd));
            } else {
              if (i === n - 1) {
                U.push(String.fromCodePoint(0xfffd));
              } else {
                const d = S.charCodeAt(i + 1);
                if (0xdc00 <= d && d <= 0xdfff) {
                  const a = c & 0x3ff;
                  const b = d & 0x3ff;
                  U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                  ++i;
                } else {
                  U.push(String.fromCodePoint(0xfffd));
                }
              }
            }
          }
          return U.join('');
        };
        conversions['Date'] = function (V, opts) {
          if (!(V instanceof Date)) {
            throw new TypeError('Argument is not a Date object');
          }
          if (isNaN(V)) {
            return undefined;
          }
          return V;
        };
        conversions['RegExp'] = function (V, opts) {
          if (!(V instanceof RegExp)) {
            V = new RegExp(V);
          }
          return V;
        };
      }
    },
  '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        module.exports.mixin = function mixin(target, source) {
          const keys = Object.getOwnPropertyNames(source);
          for (let i = 0; i < keys.length; ++i) {
            Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
          }
        };
        module.exports.wrapperSymbol = Symbol('wrapper');
        module.exports.implSymbol = Symbol('impl');
        module.exports.wrapperForImpl = function (impl) {
          return impl[module.exports.wrapperSymbol];
        };
        module.exports.implForWrapper = function (wrapper) {
          return wrapper[module.exports.implSymbol];
        };
      }
    },
  '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        const punycode = __turbopack_require__('[externals]/punycode [external] (punycode, cjs)');
        const tr46 = __turbopack_require__(
          '[project]/node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/index.js [app-rsc] (ecmascript)',
        );
        const specialSchemes = {
          ftp: 21,
          file: null,
          gopher: 70,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443,
        };
        const failure = Symbol('failure');
        function countSymbols(str) {
          return punycode.ucs2.decode(str).length;
        }
        function at(input, idx) {
          const c = input[idx];
          return isNaN(c) ? undefined : String.fromCodePoint(c);
        }
        function isASCIIDigit(c) {
          return c >= 0x30 && c <= 0x39;
        }
        function isASCIIAlpha(c) {
          return (c >= 0x41 && c <= 0x5a) || (c >= 0x61 && c <= 0x7a);
        }
        function isASCIIAlphanumeric(c) {
          return isASCIIAlpha(c) || isASCIIDigit(c);
        }
        function isASCIIHex(c) {
          return isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66);
        }
        function isSingleDot(buffer) {
          return buffer === '.' || buffer.toLowerCase() === '%2e';
        }
        function isDoubleDot(buffer) {
          buffer = buffer.toLowerCase();
          return buffer === '..' || buffer === '%2e.' || buffer === '.%2e' || buffer === '%2e%2e';
        }
        function isWindowsDriveLetterCodePoints(cp1, cp2) {
          return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
        }
        function isWindowsDriveLetterString(string) {
          return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ':' || string[1] === '|');
        }
        function isNormalizedWindowsDriveLetterString(string) {
          return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ':';
        }
        function containsForbiddenHostCodePoint(string) {
          return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
        }
        function containsForbiddenHostCodePointExcludingPercent(string) {
          return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
        }
        function isSpecialScheme(scheme) {
          return specialSchemes[scheme] !== undefined;
        }
        function isSpecial(url) {
          return isSpecialScheme(url.scheme);
        }
        function defaultPort(scheme) {
          return specialSchemes[scheme];
        }
        function percentEncode(c) {
          let hex = c.toString(16).toUpperCase();
          if (hex.length === 1) {
            hex = '0' + hex;
          }
          return '%' + hex;
        }
        function utf8PercentEncode(c) {
          const buf = new Buffer(c);
          let str = '';
          for (let i = 0; i < buf.length; ++i) {
            str += percentEncode(buf[i]);
          }
          return str;
        }
        function utf8PercentDecode(str) {
          const input = new Buffer(str);
          const output = [];
          for (let i = 0; i < input.length; ++i) {
            if (input[i] !== 37) {
              output.push(input[i]);
            } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
              output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
              i += 2;
            } else {
              output.push(input[i]);
            }
          }
          return new Buffer(output).toString();
        }
        function isC0ControlPercentEncode(c) {
          return c <= 0x1f || c > 0x7e;
        }
        const extraPathPercentEncodeSet = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
        function isPathPercentEncode(c) {
          return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
        }
        const extraUserinfoPercentEncodeSet = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
        function isUserinfoPercentEncode(c) {
          return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
        }
        function percentEncodeChar(c, encodeSetPredicate) {
          const cStr = String.fromCodePoint(c);
          if (encodeSetPredicate(c)) {
            return utf8PercentEncode(cStr);
          }
          return cStr;
        }
        function parseIPv4Number(input) {
          let R = 10;
          if (input.length >= 2 && input.charAt(0) === '0' && input.charAt(1).toLowerCase() === 'x') {
            input = input.substring(2);
            R = 16;
          } else if (input.length >= 2 && input.charAt(0) === '0') {
            input = input.substring(1);
            R = 8;
          }
          if (input === '') {
            return 0;
          }
          const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
          if (regex.test(input)) {
            return failure;
          }
          return parseInt(input, R);
        }
        function parseIPv4(input) {
          const parts = input.split('.');
          if (parts[parts.length - 1] === '') {
            if (parts.length > 1) {
              parts.pop();
            }
          }
          if (parts.length > 4) {
            return input;
          }
          const numbers = [];
          for (const part of parts) {
            if (part === '') {
              return input;
            }
            const n = parseIPv4Number(part);
            if (n === failure) {
              return input;
            }
            numbers.push(n);
          }
          for (let i = 0; i < numbers.length - 1; ++i) {
            if (numbers[i] > 255) {
              return failure;
            }
          }
          if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
            return failure;
          }
          let ipv4 = numbers.pop();
          let counter = 0;
          for (const n of numbers) {
            ipv4 += n * Math.pow(256, 3 - counter);
            ++counter;
          }
          return ipv4;
        }
        function serializeIPv4(address) {
          let output = '';
          let n = address;
          for (let i = 1; i <= 4; ++i) {
            output = String(n % 256) + output;
            if (i !== 4) {
              output = '.' + output;
            }
            n = Math.floor(n / 256);
          }
          return output;
        }
        function parseIPv6(input) {
          const address = [0, 0, 0, 0, 0, 0, 0, 0];
          let pieceIndex = 0;
          let compress = null;
          let pointer = 0;
          input = punycode.ucs2.decode(input);
          if (input[pointer] === 58) {
            if (input[pointer + 1] !== 58) {
              return failure;
            }
            pointer += 2;
            ++pieceIndex;
            compress = pieceIndex;
          }
          while (pointer < input.length) {
            if (pieceIndex === 8) {
              return failure;
            }
            if (input[pointer] === 58) {
              if (compress !== null) {
                return failure;
              }
              ++pointer;
              ++pieceIndex;
              compress = pieceIndex;
              continue;
            }
            let value = 0;
            let length = 0;
            while (length < 4 && isASCIIHex(input[pointer])) {
              value = value * 0x10 + parseInt(at(input, pointer), 16);
              ++pointer;
              ++length;
            }
            if (input[pointer] === 46) {
              if (length === 0) {
                return failure;
              }
              pointer -= length;
              if (pieceIndex > 6) {
                return failure;
              }
              let numbersSeen = 0;
              while (input[pointer] !== undefined) {
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                  if (input[pointer] === 46 && numbersSeen < 4) {
                    ++pointer;
                  } else {
                    return failure;
                  }
                }
                if (!isASCIIDigit(input[pointer])) {
                  return failure;
                }
                while (isASCIIDigit(input[pointer])) {
                  const number = parseInt(at(input, pointer));
                  if (ipv4Piece === null) {
                    ipv4Piece = number;
                  } else if (ipv4Piece === 0) {
                    return failure;
                  } else {
                    ipv4Piece = ipv4Piece * 10 + number;
                  }
                  if (ipv4Piece > 255) {
                    return failure;
                  }
                  ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                  ++pieceIndex;
                }
              }
              if (numbersSeen !== 4) {
                return failure;
              }
              break;
            } else if (input[pointer] === 58) {
              ++pointer;
              if (input[pointer] === undefined) {
                return failure;
              }
            } else if (input[pointer] !== undefined) {
              return failure;
            }
            address[pieceIndex] = value;
            ++pieceIndex;
          }
          if (compress !== null) {
            let swaps = pieceIndex - compress;
            pieceIndex = 7;
            while (pieceIndex !== 0 && swaps > 0) {
              const temp = address[compress + swaps - 1];
              address[compress + swaps - 1] = address[pieceIndex];
              address[pieceIndex] = temp;
              --pieceIndex;
              --swaps;
            }
          } else if (compress === null && pieceIndex !== 8) {
            return failure;
          }
          return address;
        }
        function serializeIPv6(address) {
          let output = '';
          const seqResult = findLongestZeroSequence(address);
          const compress = seqResult.idx;
          let ignore0 = false;
          for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
            if (ignore0 && address[pieceIndex] === 0) {
              continue;
            } else if (ignore0) {
              ignore0 = false;
            }
            if (compress === pieceIndex) {
              const separator = pieceIndex === 0 ? '::' : ':';
              output += separator;
              ignore0 = true;
              continue;
            }
            output += address[pieceIndex].toString(16);
            if (pieceIndex !== 7) {
              output += ':';
            }
          }
          return output;
        }
        function parseHost(input, isSpecialArg) {
          if (input[0] === '[') {
            if (input[input.length - 1] !== ']') {
              return failure;
            }
            return parseIPv6(input.substring(1, input.length - 1));
          }
          if (!isSpecialArg) {
            return parseOpaqueHost(input);
          }
          const domain = utf8PercentDecode(input);
          const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
          if (asciiDomain === null) {
            return failure;
          }
          if (containsForbiddenHostCodePoint(asciiDomain)) {
            return failure;
          }
          const ipv4Host = parseIPv4(asciiDomain);
          if (typeof ipv4Host === 'number' || ipv4Host === failure) {
            return ipv4Host;
          }
          return asciiDomain;
        }
        function parseOpaqueHost(input) {
          if (containsForbiddenHostCodePointExcludingPercent(input)) {
            return failure;
          }
          let output = '';
          const decoded = punycode.ucs2.decode(input);
          for (let i = 0; i < decoded.length; ++i) {
            output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
          }
          return output;
        }
        function findLongestZeroSequence(arr) {
          let maxIdx = null;
          let maxLen = 1; // only find elements > 1
          let currStart = null;
          let currLen = 0;
          for (let i = 0; i < arr.length; ++i) {
            if (arr[i] !== 0) {
              if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
              }
              currStart = null;
              currLen = 0;
            } else {
              if (currStart === null) {
                currStart = i;
              }
              ++currLen;
            }
          }
          // if trailing zeros
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          return {
            idx: maxIdx,
            len: maxLen,
          };
        }
        function serializeHost(host) {
          if (typeof host === 'number') {
            return serializeIPv4(host);
          }
          // IPv6 serializer
          if (host instanceof Array) {
            return '[' + serializeIPv6(host) + ']';
          }
          return host;
        }
        function trimControlChars(url) {
          return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, '');
        }
        function trimTabAndNewline(url) {
          return url.replace(/\u0009|\u000A|\u000D/g, '');
        }
        function shortenPath(url) {
          const path = url.path;
          if (path.length === 0) {
            return;
          }
          if (url.scheme === 'file' && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
            return;
          }
          path.pop();
        }
        function includesCredentials(url) {
          return url.username !== '' || url.password !== '';
        }
        function cannotHaveAUsernamePasswordPort(url) {
          return url.host === null || url.host === '' || url.cannotBeABaseURL || url.scheme === 'file';
        }
        function isNormalizedWindowsDriveLetter(string) {
          return /^[A-Za-z]:$/.test(string);
        }
        function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
          this.pointer = 0;
          this.input = input;
          this.base = base || null;
          this.encodingOverride = encodingOverride || 'utf-8';
          this.stateOverride = stateOverride;
          this.url = url;
          this.failure = false;
          this.parseError = false;
          if (!this.url) {
            this.url = {
              scheme: '',
              username: '',
              password: '',
              host: null,
              port: null,
              path: [],
              query: null,
              fragment: null,
              cannotBeABaseURL: false,
            };
            const res = trimControlChars(this.input);
            if (res !== this.input) {
              this.parseError = true;
            }
            this.input = res;
          }
          const res = trimTabAndNewline(this.input);
          if (res !== this.input) {
            this.parseError = true;
          }
          this.input = res;
          this.state = stateOverride || 'scheme start';
          this.buffer = '';
          this.atFlag = false;
          this.arrFlag = false;
          this.passwordTokenSeenFlag = false;
          this.input = punycode.ucs2.decode(this.input);
          for (; this.pointer <= this.input.length; ++this.pointer) {
            const c = this.input[this.pointer];
            const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
            // exec state machine
            const ret = this['parse ' + this.state](c, cStr);
            if (!ret) {
              break; // terminate algorithm
            } else if (ret === failure) {
              this.failure = true;
              break;
            }
          }
        }
        URLStateMachine.prototype['parse scheme start'] = function parseSchemeStart(c, cStr) {
          if (isASCIIAlpha(c)) {
            this.buffer += cStr.toLowerCase();
            this.state = 'scheme';
          } else if (!this.stateOverride) {
            this.state = 'no scheme';
            --this.pointer;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        URLStateMachine.prototype['parse scheme'] = function parseScheme(c, cStr) {
          if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
            this.buffer += cStr.toLowerCase();
          } else if (c === 58) {
            if (this.stateOverride) {
              if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
              }
              if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
              }
              if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === 'file') {
                return false;
              }
              if (this.url.scheme === 'file' && (this.url.host === '' || this.url.host === null)) {
                return false;
              }
            }
            this.url.scheme = this.buffer;
            this.buffer = '';
            if (this.stateOverride) {
              return false;
            }
            if (this.url.scheme === 'file') {
              if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
              }
              this.state = 'file';
            } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
              this.state = 'special relative or authority';
            } else if (isSpecial(this.url)) {
              this.state = 'special authority slashes';
            } else if (this.input[this.pointer + 1] === 47) {
              this.state = 'path or authority';
              ++this.pointer;
            } else {
              this.url.cannotBeABaseURL = true;
              this.url.path.push('');
              this.state = 'cannot-be-a-base-URL path';
            }
          } else if (!this.stateOverride) {
            this.buffer = '';
            this.state = 'no scheme';
            this.pointer = -1;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        URLStateMachine.prototype['parse no scheme'] = function parseNoScheme(c) {
          if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
            return failure;
          } else if (this.base.cannotBeABaseURL && c === 35) {
            this.url.scheme = this.base.scheme;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = '';
            this.url.cannotBeABaseURL = true;
            this.state = 'fragment';
          } else if (this.base.scheme === 'file') {
            this.state = 'file';
            --this.pointer;
          } else {
            this.state = 'relative';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse special relative or authority'] = function parseSpecialRelativeOrAuthority(c) {
          if (c === 47 && this.input[this.pointer + 1] === 47) {
            this.state = 'special authority ignore slashes';
            ++this.pointer;
          } else {
            this.parseError = true;
            this.state = 'relative';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse path or authority'] = function parsePathOrAuthority(c) {
          if (c === 47) {
            this.state = 'authority';
          } else {
            this.state = 'path';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse relative'] = function parseRelative(c) {
          this.url.scheme = this.base.scheme;
          if (isNaN(c)) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
          } else if (c === 47) {
            this.state = 'relative slash';
          } else if (c === 63) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = '';
            this.state = 'query';
          } else if (c === 35) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = '';
            this.state = 'fragment';
          } else if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
            this.state = 'relative slash';
          } else {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice(0, this.base.path.length - 1);
            this.state = 'path';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse relative slash'] = function parseRelativeSlash(c) {
          if (isSpecial(this.url) && (c === 47 || c === 92)) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = 'special authority ignore slashes';
          } else if (c === 47) {
            this.state = 'authority';
          } else {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.state = 'path';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse special authority slashes'] = function parseSpecialAuthoritySlashes(c) {
          if (c === 47 && this.input[this.pointer + 1] === 47) {
            this.state = 'special authority ignore slashes';
            ++this.pointer;
          } else {
            this.parseError = true;
            this.state = 'special authority ignore slashes';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse special authority ignore slashes'] =
          function parseSpecialAuthorityIgnoreSlashes(c) {
            if (c !== 47 && c !== 92) {
              this.state = 'authority';
              --this.pointer;
            } else {
              this.parseError = true;
            }
            return true;
          };
        URLStateMachine.prototype['parse authority'] = function parseAuthority(c, cStr) {
          if (c === 64) {
            this.parseError = true;
            if (this.atFlag) {
              this.buffer = '%40' + this.buffer;
            }
            this.atFlag = true;
            // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
            const len = countSymbols(this.buffer);
            for (let pointer = 0; pointer < len; ++pointer) {
              const codePoint = this.buffer.codePointAt(pointer);
              if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
              }
              const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
              if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
              } else {
                this.url.username += encodedCodePoints;
              }
            }
            this.buffer = '';
          } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || (isSpecial(this.url) && c === 92)) {
            if (this.atFlag && this.buffer === '') {
              this.parseError = true;
              return failure;
            }
            this.pointer -= countSymbols(this.buffer) + 1;
            this.buffer = '';
            this.state = 'host';
          } else {
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype['parse hostname'] = URLStateMachine.prototype['parse host'] = function parseHostName(
          c,
          cStr,
        ) {
          if (this.stateOverride && this.url.scheme === 'file') {
            --this.pointer;
            this.state = 'file host';
          } else if (c === 58 && !this.arrFlag) {
            if (this.buffer === '') {
              this.parseError = true;
              return failure;
            }
            const host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
              return failure;
            }
            this.url.host = host;
            this.buffer = '';
            this.state = 'port';
            if (this.stateOverride === 'hostname') {
              return false;
            }
          } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || (isSpecial(this.url) && c === 92)) {
            --this.pointer;
            if (isSpecial(this.url) && this.buffer === '') {
              this.parseError = true;
              return failure;
            } else if (
              this.stateOverride &&
              this.buffer === '' &&
              (includesCredentials(this.url) || this.url.port !== null)
            ) {
              this.parseError = true;
              return false;
            }
            const host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
              return failure;
            }
            this.url.host = host;
            this.buffer = '';
            this.state = 'path start';
            if (this.stateOverride) {
              return false;
            }
          } else {
            if (c === 91) {
              this.arrFlag = true;
            } else if (c === 93) {
              this.arrFlag = false;
            }
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype['parse port'] = function parsePort(c, cStr) {
          if (isASCIIDigit(c)) {
            this.buffer += cStr;
          } else if (
            isNaN(c) ||
            c === 47 ||
            c === 63 ||
            c === 35 ||
            (isSpecial(this.url) && c === 92) ||
            this.stateOverride
          ) {
            if (this.buffer !== '') {
              const port = parseInt(this.buffer);
              if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
              }
              this.url.port = port === defaultPort(this.url.scheme) ? null : port;
              this.buffer = '';
            }
            if (this.stateOverride) {
              return false;
            }
            this.state = 'path start';
            --this.pointer;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        const fileOtherwiseCodePoints = new Set([47, 92, 63, 35]);
        URLStateMachine.prototype['parse file'] = function parseFile(c) {
          this.url.scheme = 'file';
          if (c === 47 || c === 92) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = 'file slash';
          } else if (this.base !== null && this.base.scheme === 'file') {
            if (isNaN(c)) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = this.base.query;
            } else if (c === 63) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = '';
              this.state = 'query';
            } else if (c === 35) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = this.base.query;
              this.url.fragment = '';
              this.state = 'fragment';
            } else {
              if (
                this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
                !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
                (this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
                  !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))
              ) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
              } else {
                this.parseError = true;
              }
              this.state = 'path';
              --this.pointer;
            }
          } else {
            this.state = 'path';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse file slash'] = function parseFileSlash(c) {
          if (c === 47 || c === 92) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = 'file host';
          } else {
            if (this.base !== null && this.base.scheme === 'file') {
              if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
              } else {
                this.url.host = this.base.host;
              }
            }
            this.state = 'path';
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype['parse file host'] = function parseFileHost(c, cStr) {
          if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
            --this.pointer;
            if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
              this.parseError = true;
              this.state = 'path';
            } else if (this.buffer === '') {
              this.url.host = '';
              if (this.stateOverride) {
                return false;
              }
              this.state = 'path start';
            } else {
              let host = parseHost(this.buffer, isSpecial(this.url));
              if (host === failure) {
                return failure;
              }
              if (host === 'localhost') {
                host = '';
              }
              this.url.host = host;
              if (this.stateOverride) {
                return false;
              }
              this.buffer = '';
              this.state = 'path start';
            }
          } else {
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype['parse path start'] = function parsePathStart(c) {
          if (isSpecial(this.url)) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = 'path';
            if (c !== 47 && c !== 92) {
              --this.pointer;
            }
          } else if (!this.stateOverride && c === 63) {
            this.url.query = '';
            this.state = 'query';
          } else if (!this.stateOverride && c === 35) {
            this.url.fragment = '';
            this.state = 'fragment';
          } else if (c !== undefined) {
            this.state = 'path';
            if (c !== 47) {
              --this.pointer;
            }
          }
          return true;
        };
        URLStateMachine.prototype['parse path'] = function parsePath(c) {
          if (
            isNaN(c) ||
            c === 47 ||
            (isSpecial(this.url) && c === 92) ||
            (!this.stateOverride && (c === 63 || c === 35))
          ) {
            if (isSpecial(this.url) && c === 92) {
              this.parseError = true;
            }
            if (isDoubleDot(this.buffer)) {
              shortenPath(this.url);
              if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push('');
              }
            } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
              this.url.path.push('');
            } else if (!isSingleDot(this.buffer)) {
              if (this.url.scheme === 'file' && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== '' && this.url.host !== null) {
                  this.parseError = true;
                  this.url.host = '';
                }
                this.buffer = this.buffer[0] + ':';
              }
              this.url.path.push(this.buffer);
            }
            this.buffer = '';
            if (this.url.scheme === 'file' && (c === undefined || c === 63 || c === 35)) {
              while (this.url.path.length > 1 && this.url.path[0] === '') {
                this.parseError = true;
                this.url.path.shift();
              }
            }
            if (c === 63) {
              this.url.query = '';
              this.state = 'query';
            }
            if (c === 35) {
              this.url.fragment = '';
              this.state = 'fragment';
            }
          } else {
            // TODO: If c is not a URL code point and not "%", parse error.
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.buffer += percentEncodeChar(c, isPathPercentEncode);
          }
          return true;
        };
        URLStateMachine.prototype['parse cannot-be-a-base-URL path'] = function parseCannotBeABaseURLPath(c) {
          if (c === 63) {
            this.url.query = '';
            this.state = 'query';
          } else if (c === 35) {
            this.url.fragment = '';
            this.state = 'fragment';
          } else {
            // TODO: Add: not a URL code point
            if (!isNaN(c) && c !== 37) {
              this.parseError = true;
            }
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            if (!isNaN(c)) {
              this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
            }
          }
          return true;
        };
        URLStateMachine.prototype['parse query'] = function parseQuery(c, cStr) {
          if (isNaN(c) || (!this.stateOverride && c === 35)) {
            if (!isSpecial(this.url) || this.url.scheme === 'ws' || this.url.scheme === 'wss') {
              this.encodingOverride = 'utf-8';
            }
            const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
            for (let i = 0; i < buffer.length; ++i) {
              if (
                buffer[i] < 0x21 ||
                buffer[i] > 0x7e ||
                buffer[i] === 0x22 ||
                buffer[i] === 0x23 ||
                buffer[i] === 0x3c ||
                buffer[i] === 0x3e
              ) {
                this.url.query += percentEncode(buffer[i]);
              } else {
                this.url.query += String.fromCodePoint(buffer[i]);
              }
            }
            this.buffer = '';
            if (c === 35) {
              this.url.fragment = '';
              this.state = 'fragment';
            }
          } else {
            // TODO: If c is not a URL code point and not "%", parse error.
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype['parse fragment'] = function parseFragment(c) {
          if (isNaN(c)) {
          } else if (c === 0x0) {
            this.parseError = true;
          } else {
            // TODO: If c is not a URL code point and not "%", parse error.
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
          }
          return true;
        };
        function serializeURL(url, excludeFragment) {
          let output = url.scheme + ':';
          if (url.host !== null) {
            output += '//';
            if (url.username !== '' || url.password !== '') {
              output += url.username;
              if (url.password !== '') {
                output += ':' + url.password;
              }
              output += '@';
            }
            output += serializeHost(url.host);
            if (url.port !== null) {
              output += ':' + url.port;
            }
          } else if (url.host === null && url.scheme === 'file') {
            output += '//';
          }
          if (url.cannotBeABaseURL) {
            output += url.path[0];
          } else {
            for (const string of url.path) {
              output += '/' + string;
            }
          }
          if (url.query !== null) {
            output += '?' + url.query;
          }
          if (!excludeFragment && url.fragment !== null) {
            output += '#' + url.fragment;
          }
          return output;
        }
        function serializeOrigin(tuple) {
          let result = tuple.scheme + '://';
          result += serializeHost(tuple.host);
          if (tuple.port !== null) {
            result += ':' + tuple.port;
          }
          return result;
        }
        module.exports.serializeURL = serializeURL;
        module.exports.serializeURLOrigin = function (url) {
          // https://url.spec.whatwg.org/#concept-url-origin
          switch (url.scheme) {
            case 'blob':
              try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
              } catch (e) {
                // serializing an opaque origin returns "null"
                return 'null';
              }
            case 'ftp':
            case 'gopher':
            case 'http':
            case 'https':
            case 'ws':
            case 'wss':
              return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port,
              });
            case 'file':
              // spec says "exercise to the reader", chrome says "file://"
              return 'file://';
            default:
              // serializing an opaque origin returns "null"
              return 'null';
          }
        };
        module.exports.basicURLParse = function (input, options) {
          if (options === undefined) {
            options = {};
          }
          const usm = new URLStateMachine(
            input,
            options.baseURL,
            options.encodingOverride,
            options.url,
            options.stateOverride,
          );
          if (usm.failure) {
            return 'failure';
          }
          return usm.url;
        };
        module.exports.setTheUsername = function (url, username) {
          url.username = '';
          const decoded = punycode.ucs2.decode(username);
          for (let i = 0; i < decoded.length; ++i) {
            url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
          }
        };
        module.exports.setThePassword = function (url, password) {
          url.password = '';
          const decoded = punycode.ucs2.decode(password);
          for (let i = 0; i < decoded.length; ++i) {
            url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
          }
        };
        module.exports.serializeHost = serializeHost;
        module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
        module.exports.serializeInteger = function (integer) {
          return String(integer);
        };
        module.exports.parseURL = function (input, options) {
          if (options === undefined) {
            options = {};
          }
          // We don't handle blobs, so this just delegates:
          return module.exports.basicURLParse(input, {
            baseURL: options.baseURL,
            encodingOverride: options.encodingOverride,
          });
        };
      }
    },
  '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        const usm = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        );
        exports.implementation = class URLImpl {
          constructor(constructorArgs) {
            const url = constructorArgs[0];
            const base = constructorArgs[1];
            let parsedBase = null;
            if (base !== undefined) {
              parsedBase = usm.basicURLParse(base);
              if (parsedBase === 'failure') {
                throw new TypeError('Invalid base URL');
              }
            }
            const parsedURL = usm.basicURLParse(url, {
              baseURL: parsedBase,
            });
            if (parsedURL === 'failure') {
              throw new TypeError('Invalid URL');
            }
            this._url = parsedURL;
            // TODO: query stuff
          }
          get href() {
            return usm.serializeURL(this._url);
          }
          set href(v) {
            const parsedURL = usm.basicURLParse(v);
            if (parsedURL === 'failure') {
              throw new TypeError('Invalid URL');
            }
            this._url = parsedURL;
          }
          get origin() {
            return usm.serializeURLOrigin(this._url);
          }
          get protocol() {
            return this._url.scheme + ':';
          }
          set protocol(v) {
            usm.basicURLParse(v + ':', {
              url: this._url,
              stateOverride: 'scheme start',
            });
          }
          get username() {
            return this._url.username;
          }
          set username(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            usm.setTheUsername(this._url, v);
          }
          get password() {
            return this._url.password;
          }
          set password(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            usm.setThePassword(this._url, v);
          }
          get host() {
            const url = this._url;
            if (url.host === null) {
              return '';
            }
            if (url.port === null) {
              return usm.serializeHost(url.host);
            }
            return usm.serializeHost(url.host) + ':' + usm.serializeInteger(url.port);
          }
          set host(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            usm.basicURLParse(v, {
              url: this._url,
              stateOverride: 'host',
            });
          }
          get hostname() {
            if (this._url.host === null) {
              return '';
            }
            return usm.serializeHost(this._url.host);
          }
          set hostname(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            usm.basicURLParse(v, {
              url: this._url,
              stateOverride: 'hostname',
            });
          }
          get port() {
            if (this._url.port === null) {
              return '';
            }
            return usm.serializeInteger(this._url.port);
          }
          set port(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            if (v === '') {
              this._url.port = null;
            } else {
              usm.basicURLParse(v, {
                url: this._url,
                stateOverride: 'port',
              });
            }
          }
          get pathname() {
            if (this._url.cannotBeABaseURL) {
              return this._url.path[0];
            }
            if (this._url.path.length === 0) {
              return '';
            }
            return '/' + this._url.path.join('/');
          }
          set pathname(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            this._url.path = [];
            usm.basicURLParse(v, {
              url: this._url,
              stateOverride: 'path start',
            });
          }
          get search() {
            if (this._url.query === null || this._url.query === '') {
              return '';
            }
            return '?' + this._url.query;
          }
          set search(v) {
            // TODO: query stuff
            const url = this._url;
            if (v === '') {
              url.query = null;
              return;
            }
            const input = v[0] === '?' ? v.substring(1) : v;
            url.query = '';
            usm.basicURLParse(input, {
              url,
              stateOverride: 'query',
            });
          }
          get hash() {
            if (this._url.fragment === null || this._url.fragment === '') {
              return '';
            }
            return '#' + this._url.fragment;
          }
          set hash(v) {
            if (v === '') {
              this._url.fragment = null;
              return;
            }
            const input = v[0] === '#' ? v.substring(1) : v;
            this._url.fragment = '';
            usm.basicURLParse(input, {
              url: this._url,
              stateOverride: 'fragment',
            });
          }
          toJSON() {
            return this.href;
          }
        };
      }
    },
  '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)': function (
    __turbopack_context__,
  ) {
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
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      m: module,
      e: exports,
      t: __turbopack_require_real__,
    } = __turbopack_context__;
    {
      ('use strict');
      const conversions = __turbopack_require__(
        '[project]/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)',
      );
      const utils = __turbopack_require__(
        '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)',
      );
      const Impl = __turbopack_require__(
        '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)',
      );
      const impl = utils.implSymbol;
      function URL(url) {
        if (!this || this[impl] || !(this instanceof URL)) {
          throw new TypeError(
            "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.",
          );
        }
        if (arguments.length < 1) {
          throw new TypeError(
            "Failed to construct 'URL': 1 argument required, but only " + arguments.length + ' present.',
          );
        }
        const args = [];
        for (let i = 0; i < arguments.length && i < 2; ++i) {
          args[i] = arguments[i];
        }
        args[0] = conversions['USVString'](args[0]);
        if (args[1] !== undefined) {
          args[1] = conversions['USVString'](args[1]);
        }
        module.exports.setup(this, args);
      }
      URL.prototype.toJSON = function toJSON() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError('Illegal invocation');
        }
        const args = [];
        for (let i = 0; i < arguments.length && i < 0; ++i) {
          args[i] = arguments[i];
        }
        return this[impl].toJSON.apply(this[impl], args);
      };
      Object.defineProperty(URL.prototype, 'href', {
        get() {
          return this[impl].href;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].href = V;
        },
        enumerable: true,
        configurable: true,
      });
      URL.prototype.toString = function () {
        if (!this || !module.exports.is(this)) {
          throw new TypeError('Illegal invocation');
        }
        return this.href;
      };
      Object.defineProperty(URL.prototype, 'origin', {
        get() {
          return this[impl].origin;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'protocol', {
        get() {
          return this[impl].protocol;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].protocol = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'username', {
        get() {
          return this[impl].username;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].username = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'password', {
        get() {
          return this[impl].password;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].password = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'host', {
        get() {
          return this[impl].host;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].host = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'hostname', {
        get() {
          return this[impl].hostname;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].hostname = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'port', {
        get() {
          return this[impl].port;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].port = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'pathname', {
        get() {
          return this[impl].pathname;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].pathname = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'search', {
        get() {
          return this[impl].search;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].search = V;
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(URL.prototype, 'hash', {
        get() {
          return this[impl].hash;
        },
        set(V) {
          V = conversions['USVString'](V);
          this[impl].hash = V;
        },
        enumerable: true,
        configurable: true,
      });
      module.exports = {
        is(obj) {
          return !!obj && obj[impl] instanceof Impl.implementation;
        },
        create(constructorArgs, privateData) {
          let obj = Object.create(URL.prototype);
          this.setup(obj, constructorArgs, privateData);
          return obj;
        },
        setup(obj, constructorArgs, privateData) {
          if (!privateData) privateData = {};
          privateData.wrapper = obj;
          obj[impl] = new Impl.implementation(constructorArgs, privateData);
          obj[impl][utils.wrapperSymbol] = obj;
        },
        interface: URL,
        expose: {
          Window: {
            URL: URL,
          },
          Worker: {
            URL: URL,
          },
        },
      };
    }
  },
  '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        exports.URL = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)',
        ).interface;
        exports.serializeURL = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).serializeURL;
        exports.serializeURLOrigin = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).serializeURLOrigin;
        exports.basicURLParse = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).basicURLParse;
        exports.setTheUsername = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).setTheUsername;
        exports.setThePassword = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).setThePassword;
        exports.serializeHost = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).serializeHost;
        exports.serializeInteger = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).serializeInteger;
        exports.parseURL = __turbopack_require__(
          '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)',
        ).parseURL;
      }
    },
  '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }
        var Stream = _interopDefault(__turbopack_require__('[externals]/stream [external] (stream, cjs)'));
        var http = _interopDefault(__turbopack_require__('[externals]/http [external] (http, cjs)'));
        var Url = _interopDefault(__turbopack_require__('[externals]/url [external] (url, cjs)'));
        var whatwgUrl = _interopDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)',
          ),
        );
        var https = _interopDefault(__turbopack_require__('[externals]/https [external] (https, cjs)'));
        var zlib = _interopDefault(__turbopack_require__('[externals]/zlib [external] (zlib, cjs)'));
        // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
        // fix for "Readable" isn't a named export issue
        const Readable = Stream.Readable;
        const BUFFER = Symbol('buffer');
        const TYPE = Symbol('type');
        class Blob {
          constructor() {
            this[TYPE] = '';
            const blobParts = arguments[0];
            const options = arguments[1];
            const buffers = [];
            let size = 0;
            if (blobParts) {
              const a = blobParts;
              const length = Number(a.length);
              for (let i = 0; i < length; i++) {
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                  buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                  buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                  buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                  buffer = element[BUFFER];
                } else {
                  buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
              }
            }
            this[BUFFER] = Buffer.concat(buffers);
            let type = options && options.type !== undefined && String(options.type).toLowerCase();
            if (type && !/[^\u0020-\u007E]/.test(type)) {
              this[TYPE] = type;
            }
          }
          get size() {
            return this[BUFFER].length;
          }
          get type() {
            return this[TYPE];
          }
          text() {
            return Promise.resolve(this[BUFFER].toString());
          }
          arrayBuffer() {
            const buf = this[BUFFER];
            const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
            return Promise.resolve(ab);
          }
          stream() {
            const readable = new Readable();
            readable._read = function () {};
            readable.push(this[BUFFER]);
            readable.push(null);
            return readable;
          }
          toString() {
            return '[object Blob]';
          }
          slice() {
            const size = this.size;
            const start = arguments[0];
            const end = arguments[1];
            let relativeStart, relativeEnd;
            if (start === undefined) {
              relativeStart = 0;
            } else if (start < 0) {
              relativeStart = Math.max(size + start, 0);
            } else {
              relativeStart = Math.min(start, size);
            }
            if (end === undefined) {
              relativeEnd = size;
            } else if (end < 0) {
              relativeEnd = Math.max(size + end, 0);
            } else {
              relativeEnd = Math.min(end, size);
            }
            const span = Math.max(relativeEnd - relativeStart, 0);
            const buffer = this[BUFFER];
            const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
            const blob = new Blob([], {
              type: arguments[2],
            });
            blob[BUFFER] = slicedBuffer;
            return blob;
          }
        }
        Object.defineProperties(Blob.prototype, {
          size: {
            enumerable: true,
          },
          type: {
            enumerable: true,
          },
          slice: {
            enumerable: true,
          },
        });
        Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
          value: 'Blob',
          writable: false,
          enumerable: false,
          configurable: true,
        });
        /**
         * fetch-error.js
         *
         * FetchError interface for operational errors
         */ /**
         * Create FetchError instance
         *
         * @param   String      message      Error message for human
         * @param   String      type         Error type for machine
         * @param   String      systemError  For Node.js system error
         * @return  FetchError
         */ function FetchError(message, type, systemError) {
          Error.call(this, message);
          this.message = message;
          this.type = type;
          // when err.type is `system`, err.code contains system error code
          if (systemError) {
            this.code = this.errno = systemError.code;
          }
          // hide custom error implementation details from end-users
          Error.captureStackTrace(this, this.constructor);
        }
        FetchError.prototype = Object.create(Error.prototype);
        FetchError.prototype.constructor = FetchError;
        FetchError.prototype.name = 'FetchError';
        let convert;
        const INTERNALS = Symbol('Body internals');
        // fix an issue where "PassThrough" isn't a named export for node <10
        const PassThrough = Stream.PassThrough;
        /**
         * Body mixin
         *
         * Ref: https://fetch.spec.whatwg.org/#body
         *
         * @param   Stream  body  Readable stream
         * @param   Object  opts  Response options
         * @return  Void
         */ function Body(body) {
          var _this = this;
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$size = _ref.size;
          let size = _ref$size === undefined ? 0 : _ref$size;
          var _ref$timeout = _ref.timeout;
          let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
          if (body == null) {
            // body is undefined or null
            body = null;
          } else if (isURLSearchParams(body)) {
            // body is a URLSearchParams
            body = Buffer.from(body.toString());
          } else if (isBlob(body));
          else if (Buffer.isBuffer(body));
          else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
            // body is ArrayBuffer
            body = Buffer.from(body);
          } else if (ArrayBuffer.isView(body)) {
            // body is ArrayBufferView
            body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
          } else if (body instanceof Stream);
          else {
            // none of the above
            // coerce to string then buffer
            body = Buffer.from(String(body));
          }
          this[INTERNALS] = {
            body,
            disturbed: false,
            error: null,
          };
          this.size = size;
          this.timeout = timeout;
          if (body instanceof Stream) {
            body.on('error', function (err) {
              const error =
                err.name === 'AbortError'
                  ? err
                  : new FetchError(
                      `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                      'system',
                      err,
                    );
              _this[INTERNALS].error = error;
            });
          }
        }
        Body.prototype = {
          get body() {
            return this[INTERNALS].body;
          },
          get bodyUsed() {
            return this[INTERNALS].disturbed;
          },
          /**
           * Decode response as ArrayBuffer
           *
           * @return  Promise
           */ arrayBuffer() {
            return consumeBody.call(this).then(function (buf) {
              return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
            });
          },
          /**
           * Return raw response as Blob
           *
           * @return Promise
           */ blob() {
            let ct = (this.headers && this.headers.get('content-type')) || '';
            return consumeBody.call(this).then(function (buf) {
              return Object.assign(
                // Prevent copying
                new Blob([], {
                  type: ct.toLowerCase(),
                }),
                {
                  [BUFFER]: buf,
                },
              );
            });
          },
          /**
           * Decode response as json
           *
           * @return  Promise
           */ json() {
            var _this2 = this;
            return consumeBody.call(this).then(function (buffer) {
              try {
                return JSON.parse(buffer.toString());
              } catch (err) {
                return Body.Promise.reject(
                  new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'),
                );
              }
            });
          },
          /**
           * Decode response as text
           *
           * @return  Promise
           */ text() {
            return consumeBody.call(this).then(function (buffer) {
              return buffer.toString();
            });
          },
          /**
           * Decode response as buffer (non-spec api)
           *
           * @return  Promise
           */ buffer() {
            return consumeBody.call(this);
          },
          /**
           * Decode response as text, while automatically detecting the encoding and
           * trying to decode to UTF-8 (non-spec api)
           *
           * @return  Promise
           */ textConverted() {
            var _this3 = this;
            return consumeBody.call(this).then(function (buffer) {
              return convertBody(buffer, _this3.headers);
            });
          },
        };
        // In browsers, all properties are enumerable.
        Object.defineProperties(Body.prototype, {
          body: {
            enumerable: true,
          },
          bodyUsed: {
            enumerable: true,
          },
          arrayBuffer: {
            enumerable: true,
          },
          blob: {
            enumerable: true,
          },
          json: {
            enumerable: true,
          },
          text: {
            enumerable: true,
          },
        });
        Body.mixIn = function (proto) {
          for (const name of Object.getOwnPropertyNames(Body.prototype)) {
            // istanbul ignore else: future proof
            if (!(name in proto)) {
              const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
              Object.defineProperty(proto, name, desc);
            }
          }
        };
        /**
         * Consume and convert an entire Body to a Buffer.
         *
         * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
         *
         * @return  Promise
         */ function consumeBody() {
          var _this4 = this;
          if (this[INTERNALS].disturbed) {
            return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
          }
          this[INTERNALS].disturbed = true;
          if (this[INTERNALS].error) {
            return Body.Promise.reject(this[INTERNALS].error);
          }
          let body = this.body;
          // body is null
          if (body === null) {
            return Body.Promise.resolve(Buffer.alloc(0));
          }
          // body is blob
          if (isBlob(body)) {
            body = body.stream();
          }
          // body is buffer
          if (Buffer.isBuffer(body)) {
            return Body.Promise.resolve(body);
          }
          // istanbul ignore if: should never happen
          if (!(body instanceof Stream)) {
            return Body.Promise.resolve(Buffer.alloc(0));
          }
          // body is stream
          // get ready to actually consume the body
          let accum = [];
          let accumBytes = 0;
          let abort = false;
          return new Body.Promise(function (resolve, reject) {
            let resTimeout;
            // allow timeout on slow response body
            if (_this4.timeout) {
              resTimeout = setTimeout(function () {
                abort = true;
                reject(
                  new FetchError(
                    `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                    'body-timeout',
                  ),
                );
              }, _this4.timeout);
            }
            // handle stream errors
            body.on('error', function (err) {
              if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
              } else {
                // other errors, such as incorrect content-encoding
                reject(
                  new FetchError(
                    `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                    'system',
                    err,
                  ),
                );
              }
            });
            body.on('data', function (chunk) {
              if (abort || chunk === null) {
                return;
              }
              if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
              }
              accumBytes += chunk.length;
              accum.push(chunk);
            });
            body.on('end', function () {
              if (abort) {
                return;
              }
              clearTimeout(resTimeout);
              try {
                resolve(Buffer.concat(accum, accumBytes));
              } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(
                  new FetchError(
                    `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                    'system',
                    err,
                  ),
                );
              }
            });
          });
        }
        /**
         * Detect buffer encoding and convert to target encoding
         * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
         *
         * @param   Buffer  buffer    Incoming buffer
         * @param   String  encoding  Target encoding
         * @return  String
         */ function convertBody(buffer, headers) {
          {
            throw new Error('The package `encoding` must be installed to use the textConverted() function');
          }
          const ct = headers.get('content-type');
          let charset = 'utf-8';
          let res, str;
          // header
          if (ct) {
            res = /charset=([^;]*)/i.exec(ct);
          }
          // no charset in content type, peek at response body for at most 1024 bytes
          str = buffer.slice(0, 1024).toString();
          // html5
          if (!res && str) {
            res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
          }
          // html4
          if (!res && str) {
            res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
            if (!res) {
              res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
              if (res) {
                res.pop(); // drop last quote
              }
            }
            if (res) {
              res = /charset=(.*)/i.exec(res.pop());
            }
          }
          // xml
          if (!res && str) {
            res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
          }
          // found charset
          if (res) {
            charset = res.pop();
            // prevent decode issues when sites use incorrect encoding
            // ref: https://hsivonen.fi/encoding-menu/
            if (charset === 'gb2312' || charset === 'gbk') {
              charset = 'gb18030';
            }
          }
          // turn raw buffers into a single utf-8 buffer
          return convert(buffer, 'UTF-8', charset).toString();
        }
        /**
         * Detect a URLSearchParams object
         * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
         *
         * @param   Object  obj     Object to detect by type or brand
         * @return  String
         */ function isURLSearchParams(obj) {
          // Duck-typing as a necessary condition.
          if (
            typeof obj !== 'object' ||
            typeof obj.append !== 'function' ||
            typeof obj.delete !== 'function' ||
            typeof obj.get !== 'function' ||
            typeof obj.getAll !== 'function' ||
            typeof obj.has !== 'function' ||
            typeof obj.set !== 'function'
          ) {
            return false;
          }
          // Brand-checking and more duck-typing as optional condition.
          return (
            obj.constructor.name === 'URLSearchParams' ||
            Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
            typeof obj.sort === 'function'
          );
        }
        /**
         * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
         * @param  {*} obj
         * @return {boolean}
         */ function isBlob(obj) {
          return (
            typeof obj === 'object' &&
            typeof obj.arrayBuffer === 'function' &&
            typeof obj.type === 'string' &&
            typeof obj.stream === 'function' &&
            typeof obj.constructor === 'function' &&
            typeof obj.constructor.name === 'string' &&
            /^(Blob|File)$/.test(obj.constructor.name) &&
            /^(Blob|File)$/.test(obj[Symbol.toStringTag])
          );
        }
        /**
         * Clone body given Res/Req instance
         *
         * @param   Mixed  instance  Response or Request instance
         * @return  Mixed
         */ function clone(instance) {
          let p1, p2;
          let body = instance.body;
          // don't allow cloning a used body
          if (instance.bodyUsed) {
            throw new Error('cannot clone body after it is used');
          }
          // check that body is a stream and not form-data object
          // note: we can't clone the form-data object without having it as a dependency
          if (body instanceof Stream && typeof body.getBoundary !== 'function') {
            // tee instance body
            p1 = new PassThrough();
            p2 = new PassThrough();
            body.pipe(p1);
            body.pipe(p2);
            // set instance body to teed body and return the other teed body
            instance[INTERNALS].body = p1;
            body = p2;
          }
          return body;
        }
        /**
         * Performs the operation "extract a `Content-Type` value from |object|" as
         * specified in the specification:
         * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
         *
         * This function assumes that instance.body is present.
         *
         * @param   Mixed  instance  Any options.body input
         */ function extractContentType(body) {
          if (body === null) {
            // body is null
            return null;
          } else if (typeof body === 'string') {
            // body is string
            return 'text/plain;charset=UTF-8';
          } else if (isURLSearchParams(body)) {
            // body is a URLSearchParams
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } else if (isBlob(body)) {
            // body is blob
            return body.type || null;
          } else if (Buffer.isBuffer(body)) {
            // body is buffer
            return null;
          } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
            // body is ArrayBuffer
            return null;
          } else if (ArrayBuffer.isView(body)) {
            // body is ArrayBufferView
            return null;
          } else if (typeof body.getBoundary === 'function') {
            // detect form data input from form-data module
            return `multipart/form-data;boundary=${body.getBoundary()}`;
          } else if (body instanceof Stream) {
            // body is stream
            // can't really do much about this
            return null;
          } else {
            // Body constructor defaults other things to string
            return 'text/plain;charset=UTF-8';
          }
        }
        /**
         * The Fetch Standard treats this as if "total bytes" is a property on the body.
         * For us, we have to explicitly get it with a function.
         *
         * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
         *
         * @param   Body    instance   Instance of Body
         * @return  Number?            Number of bytes, or null if not possible
         */ function getTotalBytes(instance) {
          const body = instance.body;
          if (body === null) {
            // body is null
            return 0;
          } else if (isBlob(body)) {
            return body.size;
          } else if (Buffer.isBuffer(body)) {
            // body is buffer
            return body.length;
          } else if (body && typeof body.getLengthSync === 'function') {
            // detect form data input from form-data module
            if (
              (body._lengthRetrievers && body._lengthRetrievers.length == 0) || // 1.x
              (body.hasKnownLength && body.hasKnownLength())
            ) {
              // 2.x
              return body.getLengthSync();
            }
            return null;
          } else {
            // body is stream
            return null;
          }
        }
        /**
         * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
         *
         * @param   Body    instance   Instance of Body
         * @return  Void
         */ function writeToStream(dest, instance) {
          const body = instance.body;
          if (body === null) {
            // body is null
            dest.end();
          } else if (isBlob(body)) {
            body.stream().pipe(dest);
          } else if (Buffer.isBuffer(body)) {
            // body is buffer
            dest.write(body);
            dest.end();
          } else {
            // body is stream
            body.pipe(dest);
          }
        }
        // expose Promise
        Body.Promise = global.Promise;
        /**
         * headers.js
         *
         * Headers class offers convenient helpers
         */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
        const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
        function validateName(name) {
          name = `${name}`;
          if (invalidTokenRegex.test(name) || name === '') {
            throw new TypeError(`${name} is not a legal HTTP header name`);
          }
        }
        function validateValue(value) {
          value = `${value}`;
          if (invalidHeaderCharRegex.test(value)) {
            throw new TypeError(`${value} is not a legal HTTP header value`);
          }
        }
        /**
         * Find the key in the map object given a header name.
         *
         * Returns undefined if not found.
         *
         * @param   String  name  Header name
         * @return  String|Undefined
         */ function find(map, name) {
          name = name.toLowerCase();
          for (const key in map) {
            if (key.toLowerCase() === name) {
              return key;
            }
          }
          return undefined;
        }
        const MAP = Symbol('map');
        class Headers {
          /**
           * Headers class
           *
           * @param   Object  headers  Response headers
           * @return  Void
           */ constructor() {
            let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this[MAP] = Object.create(null);
            if (init instanceof Headers) {
              const rawHeaders = init.raw();
              const headerNames = Object.keys(rawHeaders);
              for (const headerName of headerNames) {
                for (const value of rawHeaders[headerName]) {
                  this.append(headerName, value);
                }
              }
              return;
            }
            // We don't worry about converting prop to ByteString here as append()
            // will handle it.
            if (init == null);
            else if (typeof init === 'object') {
              const method = init[Symbol.iterator];
              if (method != null) {
                if (typeof method !== 'function') {
                  throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init) {
                  if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                    throw new TypeError('Each header pair must be iterable');
                  }
                  pairs.push(Array.from(pair));
                }
                for (const pair of pairs) {
                  if (pair.length !== 2) {
                    throw new TypeError('Each header pair must be a name/value tuple');
                  }
                  this.append(pair[0], pair[1]);
                }
              } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)) {
                  const value = init[key];
                  this.append(key, value);
                }
              }
            } else {
              throw new TypeError('Provided initializer must be an object');
            }
          }
          /**
           * Return combined header value given name
           *
           * @param   String  name  Header name
           * @return  Mixed
           */ get(name) {
            name = `${name}`;
            validateName(name);
            const key = find(this[MAP], name);
            if (key === undefined) {
              return null;
            }
            return this[MAP][key].join(', ');
          }
          /**
           * Iterate over all headers
           *
           * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
           * @param   Boolean   thisArg   `this` context for callback function
           * @return  Void
           */ forEach(callback) {
            let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            let pairs = getHeaders(this);
            let i = 0;
            while (i < pairs.length) {
              var _pairs$i = pairs[i];
              const name = _pairs$i[0],
                value = _pairs$i[1];
              callback.call(thisArg, value, name, this);
              pairs = getHeaders(this);
              i++;
            }
          }
          /**
           * Overwrite header values given name
           *
           * @param   String  name   Header name
           * @param   String  value  Header value
           * @return  Void
           */ set(name, value) {
            name = `${name}`;
            value = `${value}`;
            validateName(name);
            validateValue(value);
            const key = find(this[MAP], name);
            this[MAP][key !== undefined ? key : name] = [value];
          }
          /**
           * Append a value onto existing header
           *
           * @param   String  name   Header name
           * @param   String  value  Header value
           * @return  Void
           */ append(name, value) {
            name = `${name}`;
            value = `${value}`;
            validateName(name);
            validateValue(value);
            const key = find(this[MAP], name);
            if (key !== undefined) {
              this[MAP][key].push(value);
            } else {
              this[MAP][name] = [value];
            }
          }
          /**
           * Check for header name existence
           *
           * @param   String   name  Header name
           * @return  Boolean
           */ has(name) {
            name = `${name}`;
            validateName(name);
            return find(this[MAP], name) !== undefined;
          }
          /**
           * Delete all header values given name
           *
           * @param   String  name  Header name
           * @return  Void
           */ delete(name) {
            name = `${name}`;
            validateName(name);
            const key = find(this[MAP], name);
            if (key !== undefined) {
              delete this[MAP][key];
            }
          }
          /**
           * Return raw headers (non-spec api)
           *
           * @return  Object
           */ raw() {
            return this[MAP];
          }
          /**
           * Get an iterator on keys.
           *
           * @return  Iterator
           */ keys() {
            return createHeadersIterator(this, 'key');
          }
          /**
           * Get an iterator on values.
           *
           * @return  Iterator
           */ values() {
            return createHeadersIterator(this, 'value');
          }
          /**
           * Get an iterator on entries.
           *
           * This is the default iterator of the Headers object.
           *
           * @return  Iterator
           */ [Symbol.iterator]() {
            return createHeadersIterator(this, 'key+value');
          }
        }
        Headers.prototype.entries = Headers.prototype[Symbol.iterator];
        Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
          value: 'Headers',
          writable: false,
          enumerable: false,
          configurable: true,
        });
        Object.defineProperties(Headers.prototype, {
          get: {
            enumerable: true,
          },
          forEach: {
            enumerable: true,
          },
          set: {
            enumerable: true,
          },
          append: {
            enumerable: true,
          },
          has: {
            enumerable: true,
          },
          delete: {
            enumerable: true,
          },
          keys: {
            enumerable: true,
          },
          values: {
            enumerable: true,
          },
          entries: {
            enumerable: true,
          },
        });
        function getHeaders(headers) {
          let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
          const keys = Object.keys(headers[MAP]).sort();
          return keys.map(
            kind === 'key'
              ? function (k) {
                  return k.toLowerCase();
                }
              : kind === 'value'
                ? function (k) {
                    return headers[MAP][k].join(', ');
                  }
                : function (k) {
                    return [k.toLowerCase(), headers[MAP][k].join(', ')];
                  },
          );
        }
        const INTERNAL = Symbol('internal');
        function createHeadersIterator(target, kind) {
          const iterator = Object.create(HeadersIteratorPrototype);
          iterator[INTERNAL] = {
            target,
            kind,
            index: 0,
          };
          return iterator;
        }
        const HeadersIteratorPrototype = Object.setPrototypeOf(
          {
            next() {
              // istanbul ignore if
              if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
                throw new TypeError('Value of `this` is not a HeadersIterator');
              }
              var _INTERNAL = this[INTERNAL];
              const target = _INTERNAL.target,
                kind = _INTERNAL.kind,
                index = _INTERNAL.index;
              const values = getHeaders(target, kind);
              const len = values.length;
              if (index >= len) {
                return {
                  value: undefined,
                  done: true,
                };
              }
              this[INTERNAL].index = index + 1;
              return {
                value: values[index],
                done: false,
              };
            },
          },
          Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
        );
        Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
          value: 'HeadersIterator',
          writable: false,
          enumerable: false,
          configurable: true,
        });
        /**
         * Export the Headers object in a form that Node.js can consume.
         *
         * @param   Headers  headers
         * @return  Object
         */ function exportNodeCompatibleHeaders(headers) {
          const obj = Object.assign(
            {
              __proto__: null,
            },
            headers[MAP],
          );
          // http.request() only supports string as Host header. This hack makes
          // specifying custom Host header possible.
          const hostHeaderKey = find(headers[MAP], 'Host');
          if (hostHeaderKey !== undefined) {
            obj[hostHeaderKey] = obj[hostHeaderKey][0];
          }
          return obj;
        }
        /**
         * Create a Headers object from an object of headers, ignoring those that do
         * not conform to HTTP grammar productions.
         *
         * @param   Object  obj  Object of headers
         * @return  Headers
         */ function createHeadersLenient(obj) {
          const headers = new Headers();
          for (const name of Object.keys(obj)) {
            if (invalidTokenRegex.test(name)) {
              continue;
            }
            if (Array.isArray(obj[name])) {
              for (const val of obj[name]) {
                if (invalidHeaderCharRegex.test(val)) {
                  continue;
                }
                if (headers[MAP][name] === undefined) {
                  headers[MAP][name] = [val];
                } else {
                  headers[MAP][name].push(val);
                }
              }
            } else if (!invalidHeaderCharRegex.test(obj[name])) {
              headers[MAP][name] = [obj[name]];
            }
          }
          return headers;
        }
        const INTERNALS$1 = Symbol('Response internals');
        // fix an issue where "STATUS_CODES" aren't a named export for node <10
        const STATUS_CODES = http.STATUS_CODES;
        /**
         * Response class
         *
         * @param   Stream  body  Readable stream
         * @param   Object  opts  Response options
         * @return  Void
         */ class Response {
          constructor() {
            let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            Body.call(this, body, opts);
            const status = opts.status || 200;
            const headers = new Headers(opts.headers);
            if (body != null && !headers.has('Content-Type')) {
              const contentType = extractContentType(body);
              if (contentType) {
                headers.append('Content-Type', contentType);
              }
            }
            this[INTERNALS$1] = {
              url: opts.url,
              status,
              statusText: opts.statusText || STATUS_CODES[status],
              headers,
              counter: opts.counter,
            };
          }
          get url() {
            return this[INTERNALS$1].url || '';
          }
          get status() {
            return this[INTERNALS$1].status;
          }
          /**
           * Convenience property representing if the request ended normally
           */ get ok() {
            return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
          }
          get redirected() {
            return this[INTERNALS$1].counter > 0;
          }
          get statusText() {
            return this[INTERNALS$1].statusText;
          }
          get headers() {
            return this[INTERNALS$1].headers;
          }
          /**
           * Clone this response
           *
           * @return  Response
           */ clone() {
            return new Response(clone(this), {
              url: this.url,
              status: this.status,
              statusText: this.statusText,
              headers: this.headers,
              ok: this.ok,
              redirected: this.redirected,
            });
          }
        }
        Body.mixIn(Response.prototype);
        Object.defineProperties(Response.prototype, {
          url: {
            enumerable: true,
          },
          status: {
            enumerable: true,
          },
          ok: {
            enumerable: true,
          },
          redirected: {
            enumerable: true,
          },
          statusText: {
            enumerable: true,
          },
          headers: {
            enumerable: true,
          },
          clone: {
            enumerable: true,
          },
        });
        Object.defineProperty(Response.prototype, Symbol.toStringTag, {
          value: 'Response',
          writable: false,
          enumerable: false,
          configurable: true,
        });
        const INTERNALS$2 = Symbol('Request internals');
        const URL = Url.URL || whatwgUrl.URL;
        // fix an issue where "format", "parse" aren't a named export for node <10
        const parse_url = Url.parse;
        const format_url = Url.format;
        /**
         * Wrapper around `new URL` to handle arbitrary URLs
         *
         * @param  {string} urlStr
         * @return {void}
         */ function parseURL(urlStr) {
          /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
            urlStr = new URL(urlStr).toString();
          }
          // Fallback to old implementation for arbitrary URLs
          return parse_url(urlStr);
        }
        const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;
        /**
         * Check if a value is an instance of Request.
         *
         * @param   Mixed   input
         * @return  Boolean
         */ function isRequest(input) {
          return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
        }
        function isAbortSignal(signal) {
          const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
          return !!(proto && proto.constructor.name === 'AbortSignal');
        }
        /**
         * Request class
         *
         * @param   Mixed   input  Url or Request instance
         * @param   Object  init   Custom options
         * @return  Void
         */ class Request {
          constructor(input) {
            let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let parsedURL;
            // normalize input
            if (!isRequest(input)) {
              if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
              } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
              }
              input = {};
            } else {
              parsedURL = parseURL(input.url);
            }
            let method = init.method || input.method || 'GET';
            method = method.toUpperCase();
            if (
              (init.body != null || (isRequest(input) && input.body !== null)) &&
              (method === 'GET' || method === 'HEAD')
            ) {
              throw new TypeError('Request with GET/HEAD method cannot have body');
            }
            let inputBody =
              init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
            Body.call(this, inputBody, {
              timeout: init.timeout || input.timeout || 0,
              size: init.size || input.size || 0,
            });
            const headers = new Headers(init.headers || input.headers || {});
            if (inputBody != null && !headers.has('Content-Type')) {
              const contentType = extractContentType(inputBody);
              if (contentType) {
                headers.append('Content-Type', contentType);
              }
            }
            let signal = isRequest(input) ? input.signal : null;
            if ('signal' in init) signal = init.signal;
            if (signal != null && !isAbortSignal(signal)) {
              throw new TypeError('Expected signal to be an instanceof AbortSignal');
            }
            this[INTERNALS$2] = {
              method,
              redirect: init.redirect || input.redirect || 'follow',
              headers,
              parsedURL,
              signal,
            };
            // node-fetch-only options
            this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
            this.compress =
              init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
            this.counter = init.counter || input.counter || 0;
            this.agent = init.agent || input.agent;
          }
          get method() {
            return this[INTERNALS$2].method;
          }
          get url() {
            return format_url(this[INTERNALS$2].parsedURL);
          }
          get headers() {
            return this[INTERNALS$2].headers;
          }
          get redirect() {
            return this[INTERNALS$2].redirect;
          }
          get signal() {
            return this[INTERNALS$2].signal;
          }
          /**
           * Clone this request
           *
           * @return  Request
           */ clone() {
            return new Request(this);
          }
        }
        Body.mixIn(Request.prototype);
        Object.defineProperty(Request.prototype, Symbol.toStringTag, {
          value: 'Request',
          writable: false,
          enumerable: false,
          configurable: true,
        });
        Object.defineProperties(Request.prototype, {
          method: {
            enumerable: true,
          },
          url: {
            enumerable: true,
          },
          headers: {
            enumerable: true,
          },
          redirect: {
            enumerable: true,
          },
          clone: {
            enumerable: true,
          },
          signal: {
            enumerable: true,
          },
        });
        /**
         * Convert a Request to Node.js http request options.
         *
         * @param   Request  A Request instance
         * @return  Object   The options object to be passed to http.request
         */ function getNodeRequestOptions(request) {
          const parsedURL = request[INTERNALS$2].parsedURL;
          const headers = new Headers(request[INTERNALS$2].headers);
          // fetch step 1.3
          if (!headers.has('Accept')) {
            headers.set('Accept', '*/*');
          }
          // Basic fetch
          if (!parsedURL.protocol || !parsedURL.hostname) {
            throw new TypeError('Only absolute URLs are supported');
          }
          if (!/^https?:$/.test(parsedURL.protocol)) {
            throw new TypeError('Only HTTP(S) protocols are supported');
          }
          if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
            throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
          }
          // HTTP-network-or-cache fetch steps 2.4-2.7
          let contentLengthValue = null;
          if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
            contentLengthValue = '0';
          }
          if (request.body != null) {
            const totalBytes = getTotalBytes(request);
            if (typeof totalBytes === 'number') {
              contentLengthValue = String(totalBytes);
            }
          }
          if (contentLengthValue) {
            headers.set('Content-Length', contentLengthValue);
          }
          // HTTP-network-or-cache fetch step 2.11
          if (!headers.has('User-Agent')) {
            headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
          }
          // HTTP-network-or-cache fetch step 2.15
          if (request.compress && !headers.has('Accept-Encoding')) {
            headers.set('Accept-Encoding', 'gzip,deflate');
          }
          let agent = request.agent;
          if (typeof agent === 'function') {
            agent = agent(parsedURL);
          }
          if (!headers.has('Connection') && !agent) {
            headers.set('Connection', 'close');
          }
          // HTTP-network fetch step 4.2
          // chunked encoding is handled by Node.js
          return Object.assign({}, parsedURL, {
            method: request.method,
            headers: exportNodeCompatibleHeaders(headers),
            agent,
          });
        }
        /**
         * abort-error.js
         *
         * AbortError interface for cancelled requests
         */ /**
         * Create AbortError instance
         *
         * @param   String      message      Error message for human
         * @return  AbortError
         */ function AbortError(message) {
          Error.call(this, message);
          this.type = 'aborted';
          this.message = message;
          // hide custom error implementation details from end-users
          Error.captureStackTrace(this, this.constructor);
        }
        AbortError.prototype = Object.create(Error.prototype);
        AbortError.prototype.constructor = AbortError;
        AbortError.prototype.name = 'AbortError';
        const URL$1 = Url.URL || whatwgUrl.URL;
        // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
        const PassThrough$1 = Stream.PassThrough;
        const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
          const orig = new URL$1(original).hostname;
          const dest = new URL$1(destination).hostname;
          return orig === dest || (orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest));
        };
        /**
         * isSameProtocol reports whether the two provided URLs use the same protocol.
         *
         * Both domains must already be in canonical form.
         * @param {string|URL} original
         * @param {string|URL} destination
         */ const isSameProtocol = function isSameProtocol(destination, original) {
          const orig = new URL$1(original).protocol;
          const dest = new URL$1(destination).protocol;
          return orig === dest;
        };
        /**
         * Fetch function
         *
         * @param   Mixed    url   Absolute url or Request instance
         * @param   Object   opts  Fetch options
         * @return  Promise
         */ function fetch(url, opts) {
          // allow custom promise
          if (!fetch.Promise) {
            throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
          }
          Body.Promise = fetch.Promise;
          // wrap http.request into fetch
          return new fetch.Promise(function (resolve, reject) {
            // build request object
            const request = new Request(url, opts);
            const options = getNodeRequestOptions(request);
            const send = (options.protocol === 'https:' ? https : http).request;
            const signal = request.signal;
            let response = null;
            const abort = function abort() {
              let error = new AbortError('The user aborted a request.');
              reject(error);
              if (request.body && request.body instanceof Stream.Readable) {
                destroyStream(request.body, error);
              }
              if (!response || !response.body) return;
              response.body.emit('error', error);
            };
            if (signal && signal.aborted) {
              abort();
              return;
            }
            const abortAndFinalize = function abortAndFinalize() {
              abort();
              finalize();
            };
            // send request
            const req = send(options);
            let reqTimeout;
            if (signal) {
              signal.addEventListener('abort', abortAndFinalize);
            }
            function finalize() {
              req.abort();
              if (signal) signal.removeEventListener('abort', abortAndFinalize);
              clearTimeout(reqTimeout);
            }
            if (request.timeout) {
              req.once('socket', function (socket) {
                reqTimeout = setTimeout(function () {
                  reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                  finalize();
                }, request.timeout);
              });
            }
            req.on('error', function (err) {
              reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
              if (response && response.body) {
                destroyStream(response.body, err);
              }
              finalize();
            });
            fixResponseChunkedTransferBadEnding(req, function (err) {
              if (signal && signal.aborted) {
                return;
              }
              if (response && response.body) {
                destroyStream(response.body, err);
              }
            });
            /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
              // Before Node.js 14, pipeline() does not fully support async iterators and does not always
              // properly handle when the socket close/end events are out of order.
              req.on('socket', function (s) {
                s.addListener('close', function (hadError) {
                  // if a data listener is still present we didn't end cleanly
                  const hasDataListener = s.listenerCount('data') > 0;
                  // if end happened before close but the socket didn't emit an error, do it now
                  if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    response.body.emit('error', err);
                  }
                });
              });
            }
            req.on('response', function (res) {
              clearTimeout(reqTimeout);
              const headers = createHeadersLenient(res.headers);
              // HTTP fetch step 5
              if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                  locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                  // error here can only be invalid URL in Location: header
                  // do not throw when options.redirect == manual
                  // let the user extract the errorneous redirect URL
                  if (request.redirect !== 'manual') {
                    reject(
                      new FetchError(
                        `uri requested responds with an invalid redirect URL: ${location}`,
                        'invalid-redirect',
                      ),
                    );
                    finalize();
                    return;
                  }
                }
                // HTTP fetch step 5.5
                switch (request.redirect) {
                  case 'error':
                    reject(
                      new FetchError(
                        `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                        'no-redirect',
                      ),
                    );
                    finalize();
                    return;
                  case 'manual':
                    // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                    if (locationURL !== null) {
                      // handle corrupted header
                      try {
                        headers.set('Location', locationURL);
                      } catch (err) {
                        // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                        reject(err);
                      }
                    }
                    break;
                  case 'follow':
                    // HTTP-redirect fetch step 2
                    if (locationURL === null) {
                      break;
                    }
                    // HTTP-redirect fetch step 5
                    if (request.counter >= request.follow) {
                      reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                      finalize();
                      return;
                    }
                    // HTTP-redirect fetch step 6 (counter increment)
                    // Create a new Request object.
                    const requestOpts = {
                      headers: new Headers(request.headers),
                      follow: request.follow,
                      counter: request.counter + 1,
                      agent: request.agent,
                      compress: request.compress,
                      method: request.method,
                      body: request.body,
                      signal: request.signal,
                      timeout: request.timeout,
                      size: request.size,
                    };
                    if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                      for (const name of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
                        requestOpts.headers.delete(name);
                      }
                    }
                    // HTTP-redirect fetch step 9
                    if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                      reject(
                        new FetchError(
                          'Cannot follow redirect with body being a readable stream',
                          'unsupported-redirect',
                        ),
                      );
                      finalize();
                      return;
                    }
                    // HTTP-redirect fetch step 11
                    if (
                      res.statusCode === 303 ||
                      ((res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST')
                    ) {
                      requestOpts.method = 'GET';
                      requestOpts.body = undefined;
                      requestOpts.headers.delete('content-length');
                    }
                    // HTTP-redirect fetch step 15
                    resolve(fetch(new Request(locationURL, requestOpts)));
                    finalize();
                    return;
                }
              }
              // prepare response
              res.once('end', function () {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
              });
              let body = res.pipe(new PassThrough$1());
              const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter,
              };
              // HTTP-network fetch step 12.1.1.3
              const codings = headers.get('Content-Encoding');
              // HTTP-network fetch step 12.1.1.4: handle content codings
              // in following scenarios we ignore compression support
              // 1. compression support is disabled
              // 2. HEAD request
              // 3. no Content-Encoding header
              // 4. no content response (204)
              // 5. content not modified response (304)
              if (
                !request.compress ||
                request.method === 'HEAD' ||
                codings === null ||
                res.statusCode === 204 ||
                res.statusCode === 304
              ) {
                response = new Response(body, response_options);
                resolve(response);
                return;
              }
              // For Node v6+
              // Be less strict when decoding compressed responses, since sometimes
              // servers send slightly invalid responses that are still accepted
              // by common browsers.
              // Always using Z_SYNC_FLUSH is what cURL does.
              const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH,
              };
              // for gzip
              if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(zlib.createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
              }
              // for deflate
              if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function (chunk) {
                  // see http://stackoverflow.com/questions/37519828
                  if ((chunk[0] & 0x0f) === 0x08) {
                    body = body.pipe(zlib.createInflate());
                  } else {
                    body = body.pipe(zlib.createInflateRaw());
                  }
                  response = new Response(body, response_options);
                  resolve(response);
                });
                raw.on('end', function () {
                  // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                  if (!response) {
                    response = new Response(body, response_options);
                    resolve(response);
                  }
                });
                return;
              }
              // for br
              if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
                body = body.pipe(zlib.createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
              }
              // otherwise, use response as-is
              response = new Response(body, response_options);
              resolve(response);
            });
            writeToStream(req, request);
          });
        }
        function fixResponseChunkedTransferBadEnding(request, errorCallback) {
          let socket;
          request.on('socket', function (s) {
            socket = s;
          });
          request.on('response', function (response) {
            const headers = response.headers;
            if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
              response.once('close', function (hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                  const err = new Error('Premature close');
                  err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                  errorCallback(err);
                }
              });
            }
          });
        }
        function destroyStream(stream, err) {
          if (stream.destroy) {
            stream.destroy(err);
          } else {
            // node < 8
            stream.emit('error', err);
            stream.end();
          }
        }
        /**
         * Redirect code matching
         *
         * @param   Number   code  Status code
         * @return  Boolean
         */ fetch.isRedirect = function (code) {
          return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
        };
        // expose Promise
        fetch.Promise = global.Promise;
        module.exports = exports = fetch;
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = exports;
        exports.Headers = Headers;
        exports.Request = Request;
        exports.Response = Response;
        exports.FetchError = FetchError;
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        /**
         * Error format
         *
         * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
         */ class PostgrestError extends Error {
          constructor(context) {
            super(context.message);
            this.name = 'PostgrestError';
            this.details = context.details;
            this.hint = context.hint;
            this.code = context.code;
          }
        }
        exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        // @ts-ignore
        const node_fetch_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)',
          ),
        );
        const PostgrestError_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)',
          ),
        );
        class PostgrestBuilder {
          constructor(builder) {
            this.shouldThrowOnError = false;
            this.method = builder.method;
            this.url = builder.url;
            this.headers = builder.headers;
            this.schema = builder.schema;
            this.body = builder.body;
            this.shouldThrowOnError = builder.shouldThrowOnError;
            this.signal = builder.signal;
            this.isMaybeSingle = builder.isMaybeSingle;
            if (builder.fetch) {
              this.fetch = builder.fetch;
            } else if (typeof fetch === 'undefined') {
              this.fetch = node_fetch_1.default;
            } else {
              this.fetch = fetch;
            }
          }
          /**
           * If there's an error with the query, throwOnError will reject the promise by
           * throwing the error instead of returning it as part of a successful response.
           *
           * {@link https://github.com/supabase/supabase-js/issues/92}
           */ throwOnError() {
            this.shouldThrowOnError = true;
            return this;
          }
          /**
           * Set an HTTP header for the request.
           */ setHeader(name, value) {
            this.headers = Object.assign({}, this.headers);
            this.headers[name] = value;
            return this;
          }
          then(onfulfilled, onrejected) {
            // https://postgrest.org/en/stable/api.html#switching-schemas
            if (this.schema === undefined) {
              // skip
            } else if (['GET', 'HEAD'].includes(this.method)) {
              this.headers['Accept-Profile'] = this.schema;
            } else {
              this.headers['Content-Profile'] = this.schema;
            }
            if (this.method !== 'GET' && this.method !== 'HEAD') {
              this.headers['Content-Type'] = 'application/json';
            }
            // NOTE: Invoke w/o `this` to avoid illegal invocation error.
            // https://github.com/supabase/postgrest-js/pull/247
            const _fetch = this.fetch;
            let res = _fetch(this.url.toString(), {
              method: this.method,
              headers: this.headers,
              body: JSON.stringify(this.body),
              signal: this.signal,
            }).then(async res => {
              var _a, _b, _c;
              let error = null;
              let data = null;
              let count = null;
              let status = res.status;
              let statusText = res.statusText;
              if (res.ok) {
                if (this.method !== 'HEAD') {
                  const body = await res.text();
                  if (body === '') {
                    // Prefer: return=minimal
                  } else if (this.headers['Accept'] === 'text/csv') {
                    data = body;
                  } else if (
                    this.headers['Accept'] &&
                    this.headers['Accept'].includes('application/vnd.pgrst.plan+text')
                  ) {
                    data = body;
                  } else {
                    data = JSON.parse(body);
                  }
                }
                const countHeader =
                  (_a = this.headers['Prefer']) === null || _a === void 0
                    ? void 0
                    : _a.match(/count=(exact|planned|estimated)/);
                const contentRange =
                  (_b = res.headers.get('content-range')) === null || _b === void 0 ? void 0 : _b.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                  count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                  if (data.length > 1) {
                    error = {
                      // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                      code: 'PGRST116',
                      details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                      hint: null,
                      message: 'JSON object requested, multiple (or no) rows returned',
                    };
                    data = null;
                    count = null;
                    status = 406;
                    statusText = 'Not Acceptable';
                  } else if (data.length === 1) {
                    data = data[0];
                  } else {
                    data = null;
                  }
                }
              } else {
                const body = await res.text();
                try {
                  error = JSON.parse(body);
                  // Workaround for https://github.com/supabase/postgrest-js/issues/295
                  if (Array.isArray(error) && res.status === 404) {
                    data = [];
                    error = null;
                    status = 200;
                    statusText = 'OK';
                  }
                } catch (_d) {
                  // Workaround for https://github.com/supabase/postgrest-js/issues/295
                  if (res.status === 404 && body === '') {
                    status = 204;
                    statusText = 'No Content';
                  } else {
                    error = {
                      message: body,
                    };
                  }
                }
                if (
                  error &&
                  this.isMaybeSingle &&
                  ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0
                    ? void 0
                    : _c.includes('0 rows'))
                ) {
                  error = null;
                  status = 200;
                  statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                  throw new PostgrestError_1.default(error);
                }
              }
              const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText,
              };
              return postgrestResponse;
            });
            if (!this.shouldThrowOnError) {
              res = res.catch(fetchError => {
                var _a, _b, _c;
                return {
                  error: {
                    message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                    details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                    hint: '',
                    code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: '',
                };
              });
            }
            return res.then(onfulfilled, onrejected);
          }
        }
        exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        const PostgrestBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
          /**
           * Perform a SELECT on the query result.
           *
           * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
           * return modified rows. By calling this method, modified rows are returned in
           * `data`.
           *
           * @param columns - The columns to retrieve, separated by commas
           */ select(columns) {
            // Remove whitespaces except when quoted
            let quoted = false;
            const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*')
              .split('')
              .map(c => {
                if (/\s/.test(c) && !quoted) {
                  return '';
                }
                if (c === '"') {
                  quoted = !quoted;
                }
                return c;
              })
              .join('');
            this.url.searchParams.set('select', cleanedColumns);
            if (this.headers['Prefer']) {
              this.headers['Prefer'] += ',';
            }
            this.headers['Prefer'] += 'return=representation';
            return this;
          }
          /**
           * Order the query result by `column`.
           *
           * You can call this method multiple times to order by multiple columns.
           *
           * You can order referenced tables, but it only affects the ordering of the
           * parent table if you use `!inner` in the query.
           *
           * @param column - The column to order by
           * @param options - Named parameters
           * @param options.ascending - If `true`, the result will be in ascending order
           * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
           * `null`s appear last.
           * @param options.referencedTable - Set this to order a referenced table by
           * its columns
           * @param options.foreignTable - Deprecated, use `options.referencedTable`
           * instead
           */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
            const key = referencedTable ? `${referencedTable}.order` : 'order';
            const existingOrder = this.url.searchParams.get(key);
            this.url.searchParams.set(
              key,
              `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`,
            );
            return this;
          }
          /**
           * Limit the query result by `count`.
           *
           * @param count - The maximum number of rows to return
           * @param options - Named parameters
           * @param options.referencedTable - Set this to limit rows of referenced
           * tables instead of the parent table
           * @param options.foreignTable - Deprecated, use `options.referencedTable`
           * instead
           */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
            const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
            this.url.searchParams.set(key, `${count}`);
            return this;
          }
          /**
           * Limit the query result by starting at an offset `from` and ending at the offset `to`.
           * Only records within this range are returned.
           * This respects the query order and if there is no order clause the range could behave unexpectedly.
           * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
           * and fourth rows of the query.
           *
           * @param from - The starting index from which to limit the result
           * @param to - The last index to which to limit the result
           * @param options - Named parameters
           * @param options.referencedTable - Set this to limit rows of referenced
           * tables instead of the parent table
           * @param options.foreignTable - Deprecated, use `options.referencedTable`
           * instead
           */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
            const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
            const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
            this.url.searchParams.set(keyOffset, `${from}`);
            // Range is inclusive, so add 1
            this.url.searchParams.set(keyLimit, `${to - from + 1}`);
            return this;
          }
          /**
           * Set the AbortSignal for the fetch request.
           *
           * @param signal - The AbortSignal to use for the fetch request
           */ abortSignal(signal) {
            this.signal = signal;
            return this;
          }
          /**
           * Return `data` as a single object instead of an array of objects.
           *
           * Query result must be one row (e.g. using `.limit(1)`), otherwise this
           * returns an error.
           */ single() {
            this.headers['Accept'] = 'application/vnd.pgrst.object+json';
            return this;
          }
          /**
           * Return `data` as a single object instead of an array of objects.
           *
           * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
           * this returns an error.
           */ maybeSingle() {
            // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
            // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
            if (this.method === 'GET') {
              this.headers['Accept'] = 'application/json';
            } else {
              this.headers['Accept'] = 'application/vnd.pgrst.object+json';
            }
            this.isMaybeSingle = true;
            return this;
          }
          /**
           * Return `data` as a string in CSV format.
           */ csv() {
            this.headers['Accept'] = 'text/csv';
            return this;
          }
          /**
           * Return `data` as an object in [GeoJSON](https://geojson.org) format.
           */ geojson() {
            this.headers['Accept'] = 'application/geo+json';
            return this;
          }
          /**
           * Return `data` as the EXPLAIN plan for the query.
           *
           * You need to enable the
           * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
           * setting before using this method.
           *
           * @param options - Named parameters
           *
           * @param options.analyze - If `true`, the query will be executed and the
           * actual run time will be returned
           *
           * @param options.verbose - If `true`, the query identifier will be returned
           * and `data` will include the output columns of the query
           *
           * @param options.settings - If `true`, include information on configuration
           * parameters that affect query planning
           *
           * @param options.buffers - If `true`, include information on buffer usage
           *
           * @param options.wal - If `true`, include information on WAL record generation
           *
           * @param options.format - The format of the output, can be `"text"` (default)
           * or `"json"`
           */ explain({
            analyze = false,
            verbose = false,
            settings = false,
            buffers = false,
            wal = false,
            format = 'text',
          } = {}) {
            var _a;
            const options = [
              analyze ? 'analyze' : null,
              verbose ? 'verbose' : null,
              settings ? 'settings' : null,
              buffers ? 'buffers' : null,
              wal ? 'wal' : null,
            ]
              .filter(Boolean)
              .join('|');
            // An Accept header can carry multiple media types but postgrest-js always sends one
            const forMediatype = (_a = this.headers['Accept']) !== null && _a !== void 0 ? _a : 'application/json';
            this.headers['Accept'] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
            if (format === 'json') return this;
            else return this;
          }
          /**
           * Rollback the query.
           *
           * `data` will still be returned, but the query is not committed.
           */ rollback() {
            var _a;
            if (((_a = this.headers['Prefer']) !== null && _a !== void 0 ? _a : '').trim().length > 0) {
              this.headers['Prefer'] += ',tx=rollback';
            } else {
              this.headers['Prefer'] = 'tx=rollback';
            }
            return this;
          }
          /**
           * Override the type of the returned `data`.
           *
           * @typeParam NewResult - The new result type to override with
           */ returns() {
            return this;
          }
        }
        exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        const PostgrestTransformBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
          /**
           * Match only rows where `column` is equal to `value`.
           *
           * To check if the value of `column` is NULL, you should use `.is()` instead.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ eq(column, value) {
            this.url.searchParams.append(column, `eq.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is not equal to `value`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ neq(column, value) {
            this.url.searchParams.append(column, `neq.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is greater than `value`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ gt(column, value) {
            this.url.searchParams.append(column, `gt.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is greater than or equal to `value`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ gte(column, value) {
            this.url.searchParams.append(column, `gte.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is less than `value`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ lt(column, value) {
            this.url.searchParams.append(column, `lt.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is less than or equal to `value`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ lte(column, value) {
            this.url.searchParams.append(column, `lte.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` matches `pattern` case-sensitively.
           *
           * @param column - The column to filter on
           * @param pattern - The pattern to match with
           */ like(column, pattern) {
            this.url.searchParams.append(column, `like.${pattern}`);
            return this;
          }
          /**
           * Match only rows where `column` matches all of `patterns` case-sensitively.
           *
           * @param column - The column to filter on
           * @param patterns - The patterns to match with
           */ likeAllOf(column, patterns) {
            this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
            return this;
          }
          /**
           * Match only rows where `column` matches any of `patterns` case-sensitively.
           *
           * @param column - The column to filter on
           * @param patterns - The patterns to match with
           */ likeAnyOf(column, patterns) {
            this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
            return this;
          }
          /**
           * Match only rows where `column` matches `pattern` case-insensitively.
           *
           * @param column - The column to filter on
           * @param pattern - The pattern to match with
           */ ilike(column, pattern) {
            this.url.searchParams.append(column, `ilike.${pattern}`);
            return this;
          }
          /**
           * Match only rows where `column` matches all of `patterns` case-insensitively.
           *
           * @param column - The column to filter on
           * @param patterns - The patterns to match with
           */ ilikeAllOf(column, patterns) {
            this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
            return this;
          }
          /**
           * Match only rows where `column` matches any of `patterns` case-insensitively.
           *
           * @param column - The column to filter on
           * @param patterns - The patterns to match with
           */ ilikeAnyOf(column, patterns) {
            this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
            return this;
          }
          /**
           * Match only rows where `column` IS `value`.
           *
           * For non-boolean columns, this is only relevant for checking if the value of
           * `column` is NULL by setting `value` to `null`.
           *
           * For boolean columns, you can also set `value` to `true` or `false` and it
           * will behave the same way as `.eq()`.
           *
           * @param column - The column to filter on
           * @param value - The value to filter with
           */ is(column, value) {
            this.url.searchParams.append(column, `is.${value}`);
            return this;
          }
          /**
           * Match only rows where `column` is included in the `values` array.
           *
           * @param column - The column to filter on
           * @param values - The values array to filter with
           */ in(column, values) {
            const cleanedValues = Array.from(new Set(values))
              .map(s => {
                // handle postgrest reserved characters
                // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
                if (typeof s === 'string' && new RegExp('[,()]').test(s)) return `"${s}"`;
                else return `${s}`;
              })
              .join(',');
            this.url.searchParams.append(column, `in.(${cleanedValues})`);
            return this;
          }
          /**
           * Only relevant for jsonb, array, and range columns. Match only rows where
           * `column` contains every element appearing in `value`.
           *
           * @param column - The jsonb, array, or range column to filter on
           * @param value - The jsonb, array, or range value to filter with
           */ contains(column, value) {
            if (typeof value === 'string') {
              // range types can be inclusive '[', ']' or exclusive '(', ')' so just
              // keep it simple and accept a string
              this.url.searchParams.append(column, `cs.${value}`);
            } else if (Array.isArray(value)) {
              // array
              this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
            } else {
              // json
              this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
            }
            return this;
          }
          /**
           * Only relevant for jsonb, array, and range columns. Match only rows where
           * every element appearing in `column` is contained by `value`.
           *
           * @param column - The jsonb, array, or range column to filter on
           * @param value - The jsonb, array, or range value to filter with
           */ containedBy(column, value) {
            if (typeof value === 'string') {
              // range
              this.url.searchParams.append(column, `cd.${value}`);
            } else if (Array.isArray(value)) {
              // array
              this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
            } else {
              // json
              this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
            }
            return this;
          }
          /**
           * Only relevant for range columns. Match only rows where every element in
           * `column` is greater than any element in `range`.
           *
           * @param column - The range column to filter on
           * @param range - The range to filter with
           */ rangeGt(column, range) {
            this.url.searchParams.append(column, `sr.${range}`);
            return this;
          }
          /**
           * Only relevant for range columns. Match only rows where every element in
           * `column` is either contained in `range` or greater than any element in
           * `range`.
           *
           * @param column - The range column to filter on
           * @param range - The range to filter with
           */ rangeGte(column, range) {
            this.url.searchParams.append(column, `nxl.${range}`);
            return this;
          }
          /**
           * Only relevant for range columns. Match only rows where every element in
           * `column` is less than any element in `range`.
           *
           * @param column - The range column to filter on
           * @param range - The range to filter with
           */ rangeLt(column, range) {
            this.url.searchParams.append(column, `sl.${range}`);
            return this;
          }
          /**
           * Only relevant for range columns. Match only rows where every element in
           * `column` is either contained in `range` or less than any element in
           * `range`.
           *
           * @param column - The range column to filter on
           * @param range - The range to filter with
           */ rangeLte(column, range) {
            this.url.searchParams.append(column, `nxr.${range}`);
            return this;
          }
          /**
           * Only relevant for range columns. Match only rows where `column` is
           * mutually exclusive to `range` and there can be no element between the two
           * ranges.
           *
           * @param column - The range column to filter on
           * @param range - The range to filter with
           */ rangeAdjacent(column, range) {
            this.url.searchParams.append(column, `adj.${range}`);
            return this;
          }
          /**
           * Only relevant for array and range columns. Match only rows where
           * `column` and `value` have an element in common.
           *
           * @param column - The array or range column to filter on
           * @param value - The array or range value to filter with
           */ overlaps(column, value) {
            if (typeof value === 'string') {
              // range
              this.url.searchParams.append(column, `ov.${value}`);
            } else {
              // array
              this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
            }
            return this;
          }
          /**
           * Only relevant for text and tsvector columns. Match only rows where
           * `column` matches the query string in `query`.
           *
           * @param column - The text or tsvector column to filter on
           * @param query - The query text to match with
           * @param options - Named parameters
           * @param options.config - The text search configuration to use
           * @param options.type - Change how the `query` text is interpreted
           */ textSearch(column, query, { config, type } = {}) {
            let typePart = '';
            if (type === 'plain') {
              typePart = 'pl';
            } else if (type === 'phrase') {
              typePart = 'ph';
            } else if (type === 'websearch') {
              typePart = 'w';
            }
            const configPart = config === undefined ? '' : `(${config})`;
            this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
            return this;
          }
          /**
           * Match only rows where each column in `query` keys is equal to its
           * associated value. Shorthand for multiple `.eq()`s.
           *
           * @param query - The object to filter with, with column names as keys mapped
           * to their filter values
           */ match(query) {
            Object.entries(query).forEach(([column, value]) => {
              this.url.searchParams.append(column, `eq.${value}`);
            });
            return this;
          }
          /**
           * Match only rows which doesn't satisfy the filter.
           *
           * Unlike most filters, `opearator` and `value` are used as-is and need to
           * follow [PostgREST
           * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
           * to make sure they are properly sanitized.
           *
           * @param column - The column to filter on
           * @param operator - The operator to be negated to filter with, following
           * PostgREST syntax
           * @param value - The value to filter with, following PostgREST syntax
           */ not(column, operator, value) {
            this.url.searchParams.append(column, `not.${operator}.${value}`);
            return this;
          }
          /**
           * Match only rows which satisfy at least one of the filters.
           *
           * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
           * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
           * to make sure it's properly sanitized.
           *
           * It's currently not possible to do an `.or()` filter across multiple tables.
           *
           * @param filters - The filters to use, following PostgREST syntax
           * @param options - Named parameters
           * @param options.referencedTable - Set this to filter on referenced tables
           * instead of the parent table
           * @param options.foreignTable - Deprecated, use `referencedTable` instead
           */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
            const key = referencedTable ? `${referencedTable}.or` : 'or';
            this.url.searchParams.append(key, `(${filters})`);
            return this;
          }
          /**
           * Match only rows which satisfy the filter. This is an escape hatch - you
           * should use the specific filter methods wherever possible.
           *
           * Unlike most filters, `opearator` and `value` are used as-is and need to
           * follow [PostgREST
           * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
           * to make sure they are properly sanitized.
           *
           * @param column - The column to filter on
           * @param operator - The operator to filter with, following PostgREST syntax
           * @param value - The value to filter with, following PostgREST syntax
           */ filter(column, operator, value) {
            this.url.searchParams.append(column, `${operator}.${value}`);
            return this;
          }
        }
        exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        const PostgrestFilterBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        class PostgrestQueryBuilder {
          constructor(url, { headers = {}, schema, fetch }) {
            this.url = url;
            this.headers = headers;
            this.schema = schema;
            this.fetch = fetch;
          }
          /**
           * Perform a SELECT query on the table or view.
           *
           * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
           *
           * @param options - Named parameters
           *
           * @param options.head - When set to `true`, `data` will not be returned.
           * Useful if you only need the count.
           *
           * @param options.count - Count algorithm to use to count rows in the table or view.
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           */ select(columns, { head = false, count } = {}) {
            const method = head ? 'HEAD' : 'GET';
            // Remove whitespaces except when quoted
            let quoted = false;
            const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*')
              .split('')
              .map(c => {
                if (/\s/.test(c) && !quoted) {
                  return '';
                }
                if (c === '"') {
                  quoted = !quoted;
                }
                return c;
              })
              .join('');
            this.url.searchParams.set('select', cleanedColumns);
            if (count) {
              this.headers['Prefer'] = `count=${count}`;
            }
            return new PostgrestFilterBuilder_1.default({
              method,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
          /**
           * Perform an INSERT into the table or view.
           *
           * By default, inserted rows are not returned. To return it, chain the call
           * with `.select()`.
           *
           * @param values - The values to insert. Pass an object to insert a single row
           * or an array to insert multiple rows.
           *
           * @param options - Named parameters
           *
           * @param options.count - Count algorithm to use to count inserted rows.
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           *
           * @param options.defaultToNull - Make missing fields default to `null`.
           * Otherwise, use the default value for the column. Only applies for bulk
           * inserts.
           */ insert(values, { count, defaultToNull = true } = {}) {
            const method = 'POST';
            const prefersHeaders = [];
            if (this.headers['Prefer']) {
              prefersHeaders.push(this.headers['Prefer']);
            }
            if (count) {
              prefersHeaders.push(`count=${count}`);
            }
            if (!defaultToNull) {
              prefersHeaders.push('missing=default');
            }
            this.headers['Prefer'] = prefersHeaders.join(',');
            if (Array.isArray(values)) {
              const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
              if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)].map(column => `"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
              }
            }
            return new PostgrestFilterBuilder_1.default({
              method,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: values,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
          /**
           * Perform an UPSERT on the table or view. Depending on the column(s) passed
           * to `onConflict`, `.upsert()` allows you to perform the equivalent of
           * `.insert()` if a row with the corresponding `onConflict` columns doesn't
           * exist, or if it does exist, perform an alternative action depending on
           * `ignoreDuplicates`.
           *
           * By default, upserted rows are not returned. To return it, chain the call
           * with `.select()`.
           *
           * @param values - The values to upsert with. Pass an object to upsert a
           * single row or an array to upsert multiple rows.
           *
           * @param options - Named parameters
           *
           * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
           * duplicate rows are determined. Two rows are duplicates if all the
           * `onConflict` columns are equal.
           *
           * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
           * `false`, duplicate rows are merged with existing rows.
           *
           * @param options.count - Count algorithm to use to count upserted rows.
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           *
           * @param options.defaultToNull - Make missing fields default to `null`.
           * Otherwise, use the default value for the column. This only applies when
           * inserting new rows, not when merging with existing rows under
           * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
           */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
            const method = 'POST';
            const prefersHeaders = [`resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`];
            if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
            if (this.headers['Prefer']) {
              prefersHeaders.push(this.headers['Prefer']);
            }
            if (count) {
              prefersHeaders.push(`count=${count}`);
            }
            if (!defaultToNull) {
              prefersHeaders.push('missing=default');
            }
            this.headers['Prefer'] = prefersHeaders.join(',');
            if (Array.isArray(values)) {
              const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
              if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)].map(column => `"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
              }
            }
            return new PostgrestFilterBuilder_1.default({
              method,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: values,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
          /**
           * Perform an UPDATE on the table or view.
           *
           * By default, updated rows are not returned. To return it, chain the call
           * with `.select()` after filters.
           *
           * @param values - The values to update with
           *
           * @param options - Named parameters
           *
           * @param options.count - Count algorithm to use to count updated rows.
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           */ update(values, { count } = {}) {
            const method = 'PATCH';
            const prefersHeaders = [];
            if (this.headers['Prefer']) {
              prefersHeaders.push(this.headers['Prefer']);
            }
            if (count) {
              prefersHeaders.push(`count=${count}`);
            }
            this.headers['Prefer'] = prefersHeaders.join(',');
            return new PostgrestFilterBuilder_1.default({
              method,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: values,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
          /**
           * Perform a DELETE on the table or view.
           *
           * By default, deleted rows are not returned. To return it, chain the call
           * with `.select()` after filters.
           *
           * @param options - Named parameters
           *
           * @param options.count - Count algorithm to use to count deleted rows.
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           */ delete({ count } = {}) {
            const method = 'DELETE';
            const prefersHeaders = [];
            if (count) {
              prefersHeaders.push(`count=${count}`);
            }
            if (this.headers['Prefer']) {
              prefersHeaders.unshift(this.headers['Prefer']);
            }
            this.headers['Prefer'] = prefersHeaders.join(',');
            return new PostgrestFilterBuilder_1.default({
              method,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
        }
        exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/version.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.version = void 0;
        exports.version = '0.0.0-automated'; //# sourceMappingURL=version.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/constants.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.DEFAULT_HEADERS = void 0;
        const version_1 = __turbopack_require__(
          '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/version.js [app-rsc] (ecmascript)',
        );
        exports.DEFAULT_HEADERS = {
          'X-Client-Info': `postgrest-js/${version_1.version}`,
        }; //# sourceMappingURL=constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        const PostgrestQueryBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        const PostgrestFilterBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        const constants_1 = __turbopack_require__(
          '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/constants.js [app-rsc] (ecmascript)',
        );
        /**
         * PostgREST client.
         *
         * @typeParam Database - Types for the schema from the [type
         * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
         *
         * @typeParam SchemaName - Postgres schema to switch to. Must be a string
         * literal, the same one passed to the constructor. If the schema is not
         * `"public"`, this must be supplied manually.
         */ class PostgrestClient {
          // TODO: Add back shouldThrowOnError once we figure out the typings
          /**
           * Creates a PostgREST client.
           *
           * @param url - URL of the PostgREST endpoint
           * @param options - Named parameters
           * @param options.headers - Custom headers
           * @param options.schema - Postgres schema to switch to
           * @param options.fetch - Custom fetch
           */ constructor(url, { headers = {}, schema, fetch } = {}) {
            this.url = url;
            this.headers = Object.assign(Object.assign({}, constants_1.DEFAULT_HEADERS), headers);
            this.schemaName = schema;
            this.fetch = fetch;
          }
          /**
           * Perform a query on a table or a view.
           *
           * @param relation - The table or view name to query
           */ from(relation) {
            const url = new URL(`${this.url}/${relation}`);
            return new PostgrestQueryBuilder_1.default(url, {
              headers: Object.assign({}, this.headers),
              schema: this.schemaName,
              fetch: this.fetch,
            });
          }
          /**
           * Select a schema to query or perform an function (rpc) call.
           *
           * The schema needs to be on the list of exposed schemas inside Supabase.
           *
           * @param schema - The schema to query
           */ schema(schema) {
            return new PostgrestClient(this.url, {
              headers: this.headers,
              schema,
              fetch: this.fetch,
            });
          }
          /**
           * Perform a function call.
           *
           * @param fn - The function name to call
           * @param args - The arguments to pass to the function call
           * @param options - Named parameters
           * @param options.head - When set to `true`, `data` will not be returned.
           * Useful if you only need the count.
           * @param options.get - When set to `true`, the function will be called with
           * read-only access mode.
           * @param options.count - Count algorithm to use to count rows returned by the
           * function. Only applicable for [set-returning
           * functions](https://www.postgresql.org/docs/current/functions-srf.html).
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
            let method;
            const url = new URL(`${this.url}/rpc/${fn}`);
            let body;
            if (head || get) {
              method = head ? 'HEAD' : 'GET';
              Object.entries(args) // params with undefined value needs to be filtered out, otherwise it'll
                // show up as `?param=undefined`
                .filter(([_, value]) => value !== undefined) // array values need special syntax
                .map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(',')}}` : `${value}`])
                .forEach(([name, value]) => {
                  url.searchParams.append(name, value);
                });
            } else {
              method = 'POST';
              body = args;
            }
            const headers = Object.assign({}, this.headers);
            if (count) {
              headers['Prefer'] = `count=${count}`;
            }
            return new PostgrestFilterBuilder_1.default({
              method,
              url,
              headers,
              schema: this.schemaName,
              body,
              fetch: this.fetch,
              allowEmpty: false,
            });
          }
        }
        exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)':
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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        ('use strict');
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.PostgrestError =
          exports.PostgrestBuilder =
          exports.PostgrestTransformBuilder =
          exports.PostgrestFilterBuilder =
          exports.PostgrestQueryBuilder =
          exports.PostgrestClient =
            void 0;
        // Always update wrapper.mjs when updating this file.
        const PostgrestClient_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestClient = PostgrestClient_1.default;
        const PostgrestQueryBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
        const PostgrestFilterBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
        const PostgrestTransformBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
        const PostgrestBuilder_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestBuilder = PostgrestBuilder_1.default;
        const PostgrestError_1 = __importDefault(
          __turbopack_require__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)',
          ),
        );
        exports.PostgrestError = PostgrestError_1.default;
        exports.default = {
          PostgrestClient: PostgrestClient_1.default,
          PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
          PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
          PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
          PostgrestBuilder: PostgrestBuilder_1.default,
          PostgrestError: PostgrestError_1.default,
        }; //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          PostgrestBuilder: () => PostgrestBuilder,
          PostgrestClient: () => PostgrestClient,
          PostgrestError: () => PostgrestError,
          PostgrestFilterBuilder: () => PostgrestFilterBuilder,
          PostgrestQueryBuilder: () => PostgrestQueryBuilder,
          PostgrestTransformBuilder: () => PostgrestTransformBuilder,
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)',
          );
        const {
          PostgrestClient,
          PostgrestQueryBuilder,
          PostgrestFilterBuilder,
          PostgrestTransformBuilder,
          PostgrestBuilder,
          PostgrestError,
        } =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ];
        const __TURBOPACK__default__export__ = {
          PostgrestClient,
          PostgrestQueryBuilder,
          PostgrestFilterBuilder,
          PostgrestTransformBuilder,
          PostgrestBuilder,
          PostgrestError,
        };
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          version: () => version,
        });
        const version = '2.11.2'; //# sourceMappingURL=version.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          CHANNEL_EVENTS: () => CHANNEL_EVENTS,
          CHANNEL_STATES: () => CHANNEL_STATES,
          CONNECTION_STATE: () => CONNECTION_STATE,
          DEFAULT_HEADERS: () => DEFAULT_HEADERS,
          DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
          SOCKET_STATES: () => SOCKET_STATES,
          TRANSPORTS: () => TRANSPORTS,
          VSN: () => VSN,
          WS_CLOSE_NORMAL: () => WS_CLOSE_NORMAL,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-rsc] (ecmascript)',
          );
        const DEFAULT_HEADERS = {
          'X-Client-Info': `realtime-js/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['version']}`,
        };
        const VSN = '1.0.0';
        const DEFAULT_TIMEOUT = 10000;
        const WS_CLOSE_NORMAL = 1000;
        var SOCKET_STATES;
        (function (SOCKET_STATES) {
          SOCKET_STATES[(SOCKET_STATES['connecting'] = 0)] = 'connecting';
          SOCKET_STATES[(SOCKET_STATES['open'] = 1)] = 'open';
          SOCKET_STATES[(SOCKET_STATES['closing'] = 2)] = 'closing';
          SOCKET_STATES[(SOCKET_STATES['closed'] = 3)] = 'closed';
        })(SOCKET_STATES || (SOCKET_STATES = {}));
        var CHANNEL_STATES;
        (function (CHANNEL_STATES) {
          CHANNEL_STATES['closed'] = 'closed';
          CHANNEL_STATES['errored'] = 'errored';
          CHANNEL_STATES['joined'] = 'joined';
          CHANNEL_STATES['joining'] = 'joining';
          CHANNEL_STATES['leaving'] = 'leaving';
        })(CHANNEL_STATES || (CHANNEL_STATES = {}));
        var CHANNEL_EVENTS;
        (function (CHANNEL_EVENTS) {
          CHANNEL_EVENTS['close'] = 'phx_close';
          CHANNEL_EVENTS['error'] = 'phx_error';
          CHANNEL_EVENTS['join'] = 'phx_join';
          CHANNEL_EVENTS['reply'] = 'phx_reply';
          CHANNEL_EVENTS['leave'] = 'phx_leave';
          CHANNEL_EVENTS['access_token'] = 'access_token';
        })(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
        var TRANSPORTS;
        (function (TRANSPORTS) {
          TRANSPORTS['websocket'] = 'websocket';
        })(TRANSPORTS || (TRANSPORTS = {}));
        var CONNECTION_STATE;
        (function (CONNECTION_STATE) {
          CONNECTION_STATE['Connecting'] = 'connecting';
          CONNECTION_STATE['Open'] = 'open';
          CONNECTION_STATE['Closing'] = 'closing';
          CONNECTION_STATE['Closed'] = 'closed';
        })(CONNECTION_STATE || (CONNECTION_STATE = {})); //# sourceMappingURL=constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
        // License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
        __turbopack_esm__({
          default: () => Serializer,
        });
        class Serializer {
          constructor() {
            this.HEADER_LENGTH = 1;
          }
          decode(rawPayload, callback) {
            if (rawPayload.constructor === ArrayBuffer) {
              return callback(this._binaryDecode(rawPayload));
            }
            if (typeof rawPayload === 'string') {
              return callback(JSON.parse(rawPayload));
            }
            return callback({});
          }
          _binaryDecode(buffer) {
            const view = new DataView(buffer);
            const decoder = new TextDecoder();
            return this._decodeBroadcast(buffer, view, decoder);
          }
          _decodeBroadcast(buffer, view, decoder) {
            const topicSize = view.getUint8(1);
            const eventSize = view.getUint8(2);
            let offset = this.HEADER_LENGTH + 2;
            const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
            offset = offset + topicSize;
            const event = decoder.decode(buffer.slice(offset, offset + eventSize));
            offset = offset + eventSize;
            const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
            return {
              ref: null,
              topic: topic,
              event: event,
              payload: data,
            };
          }
        } //# sourceMappingURL=serializer.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        /**
         * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
         *
         * @example
         *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
         *      return [1000, 5000, 10000][tries - 1] || 10000
         *    })
         *    reconnectTimer.scheduleTimeout() // fires after 1000
         *    reconnectTimer.scheduleTimeout() // fires after 5000
         *    reconnectTimer.reset()
         *    reconnectTimer.scheduleTimeout() // fires after 1000
         */ __turbopack_esm__({
          default: () => Timer,
        });
        class Timer {
          constructor(callback, timerCalc) {
            this.callback = callback;
            this.timerCalc = timerCalc;
            this.timer = undefined;
            this.tries = 0;
            this.callback = callback;
            this.timerCalc = timerCalc;
          }
          reset() {
            this.tries = 0;
            clearTimeout(this.timer);
          }
          // Cancels any previous scheduleTimeout and schedules callback
          scheduleTimeout() {
            clearTimeout(this.timer);
            this.timer = setTimeout(
              () => {
                this.tries = this.tries + 1;
                this.callback();
              },
              this.timerCalc(this.tries + 1),
            );
          }
        } //# sourceMappingURL=timer.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        /**
         * Helpers to convert the change Payload into native JS types.
         */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
        // 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
        __turbopack_esm__({
          PostgresTypes: () => PostgresTypes,
          convertCell: () => convertCell,
          convertChangeData: () => convertChangeData,
          convertColumn: () => convertColumn,
          httpEndpointURL: () => httpEndpointURL,
          toArray: () => toArray,
          toBoolean: () => toBoolean,
          toJson: () => toJson,
          toNumber: () => toNumber,
          toTimestampString: () => toTimestampString,
        });
        var PostgresTypes;
        (function (PostgresTypes) {
          PostgresTypes['abstime'] = 'abstime';
          PostgresTypes['bool'] = 'bool';
          PostgresTypes['date'] = 'date';
          PostgresTypes['daterange'] = 'daterange';
          PostgresTypes['float4'] = 'float4';
          PostgresTypes['float8'] = 'float8';
          PostgresTypes['int2'] = 'int2';
          PostgresTypes['int4'] = 'int4';
          PostgresTypes['int4range'] = 'int4range';
          PostgresTypes['int8'] = 'int8';
          PostgresTypes['int8range'] = 'int8range';
          PostgresTypes['json'] = 'json';
          PostgresTypes['jsonb'] = 'jsonb';
          PostgresTypes['money'] = 'money';
          PostgresTypes['numeric'] = 'numeric';
          PostgresTypes['oid'] = 'oid';
          PostgresTypes['reltime'] = 'reltime';
          PostgresTypes['text'] = 'text';
          PostgresTypes['time'] = 'time';
          PostgresTypes['timestamp'] = 'timestamp';
          PostgresTypes['timestamptz'] = 'timestamptz';
          PostgresTypes['timetz'] = 'timetz';
          PostgresTypes['tsrange'] = 'tsrange';
          PostgresTypes['tstzrange'] = 'tstzrange';
        })(PostgresTypes || (PostgresTypes = {}));
        const convertChangeData = (columns, record, options = {}) => {
          var _a;
          const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
          return Object.keys(record).reduce((acc, rec_key) => {
            acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
            return acc;
          }, {});
        };
        const convertColumn = (columnName, columns, record, skipTypes) => {
          const column = columns.find(x => x.name === columnName);
          const colType = column === null || column === void 0 ? void 0 : column.type;
          const value = record[columnName];
          if (colType && !skipTypes.includes(colType)) {
            return convertCell(colType, value);
          }
          return noop(value);
        };
        const convertCell = (type, value) => {
          // if data type is an array
          if (type.charAt(0) === '_') {
            const dataType = type.slice(1, type.length);
            return toArray(value, dataType);
          }
          // If not null, convert to correct type.
          switch (type) {
            case PostgresTypes.bool:
              return toBoolean(value);
            case PostgresTypes.float4:
            case PostgresTypes.float8:
            case PostgresTypes.int2:
            case PostgresTypes.int4:
            case PostgresTypes.int8:
            case PostgresTypes.numeric:
            case PostgresTypes.oid:
              return toNumber(value);
            case PostgresTypes.json:
            case PostgresTypes.jsonb:
              return toJson(value);
            case PostgresTypes.timestamp:
              return toTimestampString(value); // Format to be consistent with PostgREST
            case PostgresTypes.abstime:
            case PostgresTypes.date:
            case PostgresTypes.daterange:
            case PostgresTypes.int4range:
            case PostgresTypes.int8range:
            case PostgresTypes.money:
            case PostgresTypes.reltime:
            case PostgresTypes.text:
            case PostgresTypes.time:
            case PostgresTypes.timestamptz:
            case PostgresTypes.timetz:
            case PostgresTypes.tsrange:
            case PostgresTypes.tstzrange:
              return noop(value);
            default:
              // Return the value for remaining types
              return noop(value);
          }
        };
        const noop = value => {
          return value;
        };
        const toBoolean = value => {
          switch (value) {
            case 't':
              return true;
            case 'f':
              return false;
            default:
              return value;
          }
        };
        const toNumber = value => {
          if (typeof value === 'string') {
            const parsedValue = parseFloat(value);
            if (!Number.isNaN(parsedValue)) {
              return parsedValue;
            }
          }
          return value;
        };
        const toJson = value => {
          if (typeof value === 'string') {
            try {
              return JSON.parse(value);
            } catch (error) {
              console.log(`JSON parse error: ${error}`);
              return value;
            }
          }
          return value;
        };
        const toArray = (value, type) => {
          if (typeof value !== 'string') {
            return value;
          }
          const lastIdx = value.length - 1;
          const closeBrace = value[lastIdx];
          const openBrace = value[0];
          // Confirm value is a Postgres array by checking curly brackets
          if (openBrace === '{' && closeBrace === '}') {
            let arr;
            const valTrim = value.slice(1, lastIdx);
            // TODO: find a better solution to separate Postgres array data
            try {
              arr = JSON.parse('[' + valTrim + ']');
            } catch (_) {
              // WARNING: splitting on comma does not cover all edge cases
              arr = valTrim ? valTrim.split(',') : [];
            }
            return arr.map(val => convertCell(type, val));
          }
          return value;
        };
        const toTimestampString = value => {
          if (typeof value === 'string') {
            return value.replace(' ', 'T');
          }
          return value;
        };
        const httpEndpointURL = socketUrl => {
          let url = socketUrl;
          url = url.replace(/^ws/i, 'http');
          url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '');
          return url.replace(/\/+$/, '');
        }; //# sourceMappingURL=transformers.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => Push,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)',
          );
        class Push {
          /**
           * Initializes the Push
           *
           * @param channel The Channel
           * @param event The event, for example `"phx_join"`
           * @param payload The payload, for example `{user_id: 123}`
           * @param timeout The push timeout in milliseconds
           */ constructor(
            channel,
            event,
            payload = {},
            timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'DEFAULT_TIMEOUT'
            ],
          ) {
            this.channel = channel;
            this.event = event;
            this.payload = payload;
            this.timeout = timeout;
            this.sent = false;
            this.timeoutTimer = undefined;
            this.ref = '';
            this.receivedResp = null;
            this.recHooks = [];
            this.refEvent = null;
          }
          resend(timeout) {
            this.timeout = timeout;
            this._cancelRefEvent();
            this.ref = '';
            this.refEvent = null;
            this.receivedResp = null;
            this.sent = false;
            this.send();
          }
          send() {
            if (this._hasReceived('timeout')) {
              return;
            }
            this.startTimeout();
            this.sent = true;
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            });
          }
          updatePayload(payload) {
            this.payload = Object.assign(Object.assign({}, this.payload), payload);
          }
          receive(status, callback) {
            var _a;
            if (this._hasReceived(status)) {
              callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
            }
            this.recHooks.push({
              status,
              callback,
            });
            return this;
          }
          startTimeout() {
            if (this.timeoutTimer) {
              return;
            }
            this.ref = this.channel.socket._makeRef();
            this.refEvent = this.channel._replyEventName(this.ref);
            const callback = payload => {
              this._cancelRefEvent();
              this._cancelTimeout();
              this.receivedResp = payload;
              this._matchReceive(payload);
            };
            this.channel._on(this.refEvent, {}, callback);
            this.timeoutTimer = setTimeout(() => {
              this.trigger('timeout', {});
            }, this.timeout);
          }
          trigger(status, response) {
            if (this.refEvent)
              this.channel._trigger(this.refEvent, {
                status,
                response,
              });
          }
          destroy() {
            this._cancelRefEvent();
            this._cancelTimeout();
          }
          _cancelRefEvent() {
            if (!this.refEvent) {
              return;
            }
            this.channel._off(this.refEvent, {});
          }
          _cancelTimeout() {
            clearTimeout(this.timeoutTimer);
            this.timeoutTimer = undefined;
          }
          _matchReceive({ status, response }) {
            this.recHooks.filter(h => h.status === status).forEach(h => h.callback(response));
          }
          _hasReceived(status) {
            return this.receivedResp && this.receivedResp.status === status;
          }
        } //# sourceMappingURL=push.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        /*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ __turbopack_esm__({
          REALTIME_PRESENCE_LISTEN_EVENTS: () => REALTIME_PRESENCE_LISTEN_EVENTS,
          default: () => RealtimePresence,
        });
        var REALTIME_PRESENCE_LISTEN_EVENTS;
        (function (REALTIME_PRESENCE_LISTEN_EVENTS) {
          REALTIME_PRESENCE_LISTEN_EVENTS['SYNC'] = 'sync';
          REALTIME_PRESENCE_LISTEN_EVENTS['JOIN'] = 'join';
          REALTIME_PRESENCE_LISTEN_EVENTS['LEAVE'] = 'leave';
        })(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
        class RealtimePresence {
          /**
           * Initializes the Presence.
           *
           * @param channel - The RealtimeChannel
           * @param opts - The options,
           *        for example `{events: {state: 'state', diff: 'diff'}}`
           */ constructor(channel, opts) {
            this.channel = channel;
            this.state = {};
            this.pendingDiffs = [];
            this.joinRef = null;
            this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            };
            const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
              state: 'presence_state',
              diff: 'presence_diff',
            };
            this.channel._on(events.state, {}, newState => {
              const { onJoin, onLeave, onSync } = this.caller;
              this.joinRef = this.channel._joinRef();
              this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
              this.pendingDiffs.forEach(diff => {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
              });
              this.pendingDiffs = [];
              onSync();
            });
            this.channel._on(events.diff, {}, diff => {
              const { onJoin, onLeave, onSync } = this.caller;
              if (this.inPendingSyncState()) {
                this.pendingDiffs.push(diff);
              } else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
              }
            });
            this.onJoin((key, currentPresences, newPresences) => {
              this.channel._trigger('presence', {
                event: 'join',
                key,
                currentPresences,
                newPresences,
              });
            });
            this.onLeave((key, currentPresences, leftPresences) => {
              this.channel._trigger('presence', {
                event: 'leave',
                key,
                currentPresences,
                leftPresences,
              });
            });
            this.onSync(() => {
              this.channel._trigger('presence', {
                event: 'sync',
              });
            });
          }
          /**
           * Used to sync the list of presences on the server with the
           * client's state.
           *
           * An optional `onJoin` and `onLeave` callback can be provided to
           * react to changes in the client's local presences across
           * disconnects and reconnects with the server.
           *
           * @internal
           */ static syncState(currentState, newState, onJoin, onLeave) {
            const state = this.cloneDeep(currentState);
            const transformedState = this.transformState(newState);
            const joins = {};
            const leaves = {};
            this.map(state, (key, presences) => {
              if (!transformedState[key]) {
                leaves[key] = presences;
              }
            });
            this.map(transformedState, (key, newPresences) => {
              const currentPresences = state[key];
              if (currentPresences) {
                const newPresenceRefs = newPresences.map(m => m.presence_ref);
                const curPresenceRefs = currentPresences.map(m => m.presence_ref);
                const joinedPresences = newPresences.filter(m => curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter(m => newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) {
                  joins[key] = joinedPresences;
                }
                if (leftPresences.length > 0) {
                  leaves[key] = leftPresences;
                }
              } else {
                joins[key] = newPresences;
              }
            });
            return this.syncDiff(
              state,
              {
                joins,
                leaves,
              },
              onJoin,
              onLeave,
            );
          }
          /**
           * Used to sync a diff of presence join and leave events from the
           * server, as they happen.
           *
           * Like `syncState`, `syncDiff` accepts optional `onJoin` and
           * `onLeave` callbacks to react to a user joining or leaving from a
           * device.
           *
           * @internal
           */ static syncDiff(state, diff, onJoin, onLeave) {
            const { joins, leaves } = {
              joins: this.transformState(diff.joins),
              leaves: this.transformState(diff.leaves),
            };
            if (!onJoin) {
              onJoin = () => {};
            }
            if (!onLeave) {
              onLeave = () => {};
            }
            this.map(joins, (key, newPresences) => {
              var _a;
              const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
              state[key] = this.cloneDeep(newPresences);
              if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map(m => m.presence_ref);
                const curPresences = currentPresences.filter(m => joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
              }
              onJoin(key, currentPresences, newPresences);
            });
            this.map(leaves, (key, leftPresences) => {
              let currentPresences = state[key];
              if (!currentPresences) return;
              const presenceRefsToRemove = leftPresences.map(m => m.presence_ref);
              currentPresences = currentPresences.filter(m => presenceRefsToRemove.indexOf(m.presence_ref) < 0);
              state[key] = currentPresences;
              onLeave(key, currentPresences, leftPresences);
              if (currentPresences.length === 0) delete state[key];
            });
            return state;
          }
          /** @internal */ static map(obj, func) {
            return Object.getOwnPropertyNames(obj).map(key => func(key, obj[key]));
          }
          /**
           * Remove 'metas' key
           * Change 'phx_ref' to 'presence_ref'
           * Remove 'phx_ref' and 'phx_ref_prev'
           *
           * @example
           * // returns {
           *  abc123: [
           *    { presence_ref: '2', user_id: 1 },
           *    { presence_ref: '3', user_id: 2 }
           *  ]
           * }
           * RealtimePresence.transformState({
           *  abc123: {
           *    metas: [
           *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
           *      { phx_ref: '3', user_id: 2 }
           *    ]
           *  }
           * })
           *
           * @internal
           */ static transformState(state) {
            state = this.cloneDeep(state);
            return Object.getOwnPropertyNames(state).reduce((newState, key) => {
              const presences = state[key];
              if ('metas' in presences) {
                newState[key] = presences.metas.map(presence => {
                  presence['presence_ref'] = presence['phx_ref'];
                  delete presence['phx_ref'];
                  delete presence['phx_ref_prev'];
                  return presence;
                });
              } else {
                newState[key] = presences;
              }
              return newState;
            }, {});
          }
          /** @internal */ static cloneDeep(obj) {
            return JSON.parse(JSON.stringify(obj));
          }
          /** @internal */ onJoin(callback) {
            this.caller.onJoin = callback;
          }
          /** @internal */ onLeave(callback) {
            this.caller.onLeave = callback;
          }
          /** @internal */ onSync(callback) {
            this.caller.onSync = callback;
          }
          /** @internal */ inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel._joinRef();
          }
        } //# sourceMappingURL=RealtimePresence.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          REALTIME_CHANNEL_STATES: () => REALTIME_CHANNEL_STATES,
          REALTIME_LISTEN_TYPES: () => REALTIME_LISTEN_TYPES,
          REALTIME_POSTGRES_CHANGES_LISTEN_EVENT: () => REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
          REALTIME_SUBSCRIBE_STATES: () => REALTIME_SUBSCRIBE_STATES,
          default: () => RealtimeChannel,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)',
          );
        var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
        (function (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
          REALTIME_POSTGRES_CHANGES_LISTEN_EVENT['ALL'] = '*';
          REALTIME_POSTGRES_CHANGES_LISTEN_EVENT['INSERT'] = 'INSERT';
          REALTIME_POSTGRES_CHANGES_LISTEN_EVENT['UPDATE'] = 'UPDATE';
          REALTIME_POSTGRES_CHANGES_LISTEN_EVENT['DELETE'] = 'DELETE';
        })(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
        var REALTIME_LISTEN_TYPES;
        (function (REALTIME_LISTEN_TYPES) {
          REALTIME_LISTEN_TYPES['BROADCAST'] = 'broadcast';
          REALTIME_LISTEN_TYPES['PRESENCE'] = 'presence';
          REALTIME_LISTEN_TYPES['POSTGRES_CHANGES'] = 'postgres_changes';
          REALTIME_LISTEN_TYPES['SYSTEM'] = 'system';
        })(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
        var REALTIME_SUBSCRIBE_STATES;
        (function (REALTIME_SUBSCRIBE_STATES) {
          REALTIME_SUBSCRIBE_STATES['SUBSCRIBED'] = 'SUBSCRIBED';
          REALTIME_SUBSCRIBE_STATES['TIMED_OUT'] = 'TIMED_OUT';
          REALTIME_SUBSCRIBE_STATES['CLOSED'] = 'CLOSED';
          REALTIME_SUBSCRIBE_STATES['CHANNEL_ERROR'] = 'CHANNEL_ERROR';
        })(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
        const REALTIME_CHANNEL_STATES =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'CHANNEL_STATES'
          ];
        class RealtimeChannel {
          constructor(
            /** Topic name can be any string. */ topic,
            params = {
              config: {},
            },
            socket,
          ) {
            this.topic = topic;
            this.params = params;
            this.socket = socket;
            this.bindings = {};
            this.state =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].closed;
            this.joinedOnce = false;
            this.pushBuffer = [];
            this.subTopic = topic.replace(/^realtime:/i, '');
            this.params.config = Object.assign(
              {
                broadcast: {
                  ack: false,
                  self: false,
                },
                presence: {
                  key: '',
                },
                private: false,
              },
              params.config,
            );
            this.timeout = this.socket.timeout;
            this.joinPush =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](
                this,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_EVENTS'
                ].join,
                this.params,
                this.timeout,
              );
            this.rejoinTimer =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
            this.joinPush.receive('ok', () => {
              this.state =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_STATES'
                ].joined;
              this.rejoinTimer.reset();
              this.pushBuffer.forEach(pushEvent => pushEvent.send());
              this.pushBuffer = [];
            });
            this._onClose(() => {
              this.rejoinTimer.reset();
              this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`);
              this.state =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_STATES'
                ].closed;
              this.socket._remove(this);
            });
            this._onError(reason => {
              if (this._isLeaving() || this._isClosed()) {
                return;
              }
              this.socket.log('channel', `error ${this.topic}`, reason);
              this.state =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_STATES'
                ].errored;
              this.rejoinTimer.scheduleTimeout();
            });
            this.joinPush.receive('timeout', () => {
              if (!this._isJoining()) {
                return;
              }
              this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
              this.state =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_STATES'
                ].errored;
              this.rejoinTimer.scheduleTimeout();
            });
            this._on(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_EVENTS'
              ].reply,
              {},
              (payload, ref) => {
                this._trigger(this._replyEventName(ref), payload);
              },
            );
            this.presence =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](this);
            this.broadcastEndpointURL =
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'httpEndpointURL'
              ])(this.socket.endPoint) + '/api/broadcast';
            this.private = this.params.config.private || false;
          }
          /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
            var _a, _b;
            if (!this.socket.isConnected()) {
              this.socket.connect();
            }
            if (this.joinedOnce) {
              throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
            } else {
              const {
                config: { broadcast, presence, private: isPrivate },
              } = this.params;
              this._onError(e =>
                callback === null || callback === void 0
                  ? void 0
                  : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e),
              );
              this._onClose(() =>
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED),
              );
              const accessTokenPayload = {};
              const config = {
                broadcast,
                presence,
                postgres_changes:
                  (_b =
                    (_a = this.bindings.postgres_changes) === null || _a === void 0
                      ? void 0
                      : _a.map(r => r.filter)) !== null && _b !== void 0
                    ? _b
                    : [],
                private: isPrivate,
              };
              if (this.socket.accessTokenValue) {
                accessTokenPayload.access_token = this.socket.accessTokenValue;
              }
              this.updateJoinPayload(
                Object.assign(
                  {
                    config,
                  },
                  accessTokenPayload,
                ),
              );
              this.joinedOnce = true;
              this._rejoin(timeout);
              this.joinPush
                .receive('ok', async ({ postgres_changes }) => {
                  var _a;
                  this.socket.setAuth();
                  if (postgres_changes === undefined) {
                    callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                  } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen =
                      (_a =
                        clientPostgresBindings === null || clientPostgresBindings === void 0
                          ? void 0
                          : clientPostgresBindings.length) !== null && _a !== void 0
                        ? _a
                        : 0;
                    const newPostgresBindings = [];
                    for (let i = 0; i < bindingsLen; i++) {
                      const clientPostgresBinding = clientPostgresBindings[i];
                      const {
                        filter: { event, schema, table, filter },
                      } = clientPostgresBinding;
                      const serverPostgresFilter = postgres_changes && postgres_changes[i];
                      if (
                        serverPostgresFilter &&
                        serverPostgresFilter.event === event &&
                        serverPostgresFilter.schema === schema &&
                        serverPostgresFilter.table === table &&
                        serverPostgresFilter.filter === filter
                      ) {
                        newPostgresBindings.push(
                          Object.assign(Object.assign({}, clientPostgresBinding), {
                            id: serverPostgresFilter.id,
                          }),
                        );
                      } else {
                        this.unsubscribe();
                        callback === null || callback === void 0
                          ? void 0
                          : callback(
                              REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR,
                              new Error('mismatch between server and client bindings for postgres changes'),
                            );
                        return;
                      }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                  }
                })
                .receive('error', error => {
                  callback === null || callback === void 0
                    ? void 0
                    : callback(
                        REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR,
                        new Error(JSON.stringify(Object.values(error).join(', ') || 'error')),
                      );
                  return;
                })
                .receive('timeout', () => {
                  callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
                  return;
                });
            }
            return this;
          }
          presenceState() {
            return this.presence.state;
          }
          async track(payload, opts = {}) {
            return await this.send(
              {
                type: 'presence',
                event: 'track',
                payload,
              },
              opts.timeout || this.timeout,
            );
          }
          async untrack(opts = {}) {
            return await this.send(
              {
                type: 'presence',
                event: 'untrack',
              },
              opts,
            );
          }
          on(type, filter, callback) {
            return this._on(type, filter, callback);
          }
          /**
           * Sends a message into the channel.
           *
           * @param args Arguments to send to channel
           * @param args.type The type of event to send
           * @param args.event The name of the event being sent
           * @param args.payload Payload to be sent
           * @param opts Options to be used during the send process
           */ async send(args, opts = {}) {
            var _a, _b;
            if (!this._canPush() && args.type === 'broadcast') {
              const { event, payload: endpoint_payload } = args;
              const authorization = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : '';
              const options = {
                method: 'POST',
                headers: {
                  Authorization: authorization,
                  apikey: this.socket.apiKey ? this.socket.apiKey : '',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  messages: [
                    {
                      topic: this.subTopic,
                      event,
                      payload: endpoint_payload,
                      private: this.private,
                    },
                  ],
                }),
              };
              try {
                const response = await this._fetchWithTimeout(
                  this.broadcastEndpointURL,
                  options,
                  (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout,
                );
                await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
                return response.ok ? 'ok' : 'error';
              } catch (error) {
                if (error.name === 'AbortError') {
                  return 'timed out';
                } else {
                  return 'error';
                }
              }
            } else {
              return new Promise(resolve => {
                var _a, _b, _c;
                const push = this._push(args.type, args, opts.timeout || this.timeout);
                if (
                  args.type === 'broadcast' &&
                  !((_c =
                    (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0
                      ? void 0
                      : _b.broadcast) === null || _c === void 0
                    ? void 0
                    : _c.ack)
                ) {
                  resolve('ok');
                }
                push.receive('ok', () => resolve('ok'));
                push.receive('error', () => resolve('error'));
                push.receive('timeout', () => resolve('timed out'));
              });
            }
          }
          updateJoinPayload(payload) {
            this.joinPush.updatePayload(payload);
          }
          /**
           * Leaves the channel.
           *
           * Unsubscribes from server events, and instructs channel to terminate on server.
           * Triggers onClose() hooks.
           *
           * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
           * channel.unsubscribe().receive("ok", () => alert("left!") )
           */ unsubscribe(timeout = this.timeout) {
            this.state =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].leaving;
            const onClose = () => {
              this.socket.log('channel', `leave ${this.topic}`);
              this._trigger(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_EVENTS'
                ].close,
                'leave',
                this._joinRef(),
              );
            };
            this.rejoinTimer.reset();
            // Destroy joinPush to avoid connection timeouts during unscription phase
            this.joinPush.destroy();
            return new Promise(resolve => {
              const leavePush =
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'default'
                ](
                  this,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'CHANNEL_EVENTS'
                  ].leave,
                  {},
                  timeout,
                );
              leavePush
                .receive('ok', () => {
                  onClose();
                  resolve('ok');
                })
                .receive('timeout', () => {
                  onClose();
                  resolve('timed out');
                })
                .receive('error', () => {
                  resolve('error');
                });
              leavePush.send();
              if (!this._canPush()) {
                leavePush.trigger('ok', {});
              }
            });
          }
          /** @internal */ async _fetchWithTimeout(url, options, timeout) {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            const response = await this.socket.fetch(
              url,
              Object.assign(Object.assign({}, options), {
                signal: controller.signal,
              }),
            );
            clearTimeout(id);
            return response;
          }
          /** @internal */ _push(event, payload, timeout = this.timeout) {
            if (!this.joinedOnce) {
              throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
            }
            let pushEvent =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](this, event, payload, timeout);
            if (this._canPush()) {
              pushEvent.send();
            } else {
              pushEvent.startTimeout();
              this.pushBuffer.push(pushEvent);
            }
            return pushEvent;
          }
          /**
           * Overridable message hook
           *
           * Receives all events for specialized message handling before dispatching to the channel callbacks.
           * Must return the payload, modified or unmodified.
           *
           * @internal
           */ _onMessage(_event, payload, _ref) {
            return payload;
          }
          /** @internal */ _isMember(topic) {
            return this.topic === topic;
          }
          /** @internal */ _joinRef() {
            return this.joinPush.ref;
          }
          /** @internal */ _trigger(type, payload, ref) {
            var _a, _b;
            const typeLower = type.toLocaleLowerCase();
            const { close, error, leave, join } =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_EVENTS'
              ];
            const events = [close, error, leave, join];
            if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
              return;
            }
            let handledPayload = this._onMessage(typeLower, payload, ref);
            if (payload && !handledPayload) {
              throw 'channel onMessage callbacks must return the payload, modified or unmodified';
            }
            if (['insert', 'update', 'delete'].includes(typeLower)) {
              (_a = this.bindings.postgres_changes) === null || _a === void 0
                ? void 0
                : _a
                    .filter(bind => {
                      var _a, _b, _c;
                      return (
                        ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' ||
                        ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null ||
                        _c === void 0
                          ? void 0
                          : _c.toLocaleLowerCase()) === typeLower
                      );
                    })
                    .map(bind => bind.callback(handledPayload, ref));
            } else {
              (_b = this.bindings[typeLower]) === null || _b === void 0
                ? void 0
                : _b
                    .filter(bind => {
                      var _a, _b, _c, _d, _e, _f;
                      if (['broadcast', 'presence', 'postgres_changes'].includes(typeLower)) {
                        if ('id' in bind) {
                          const bindId = bind.id;
                          const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                          return (
                            bindId &&
                            ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) &&
                            (bindEvent === '*' ||
                              (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) ===
                                ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()))
                          );
                        } else {
                          const bindEvent =
                            (_e =
                              (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0
                                ? void 0
                                : _d.event) === null || _e === void 0
                              ? void 0
                              : _e.toLocaleLowerCase();
                          return (
                            bindEvent === '*' ||
                            bindEvent ===
                              ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null ||
                              _f === void 0
                                ? void 0
                                : _f.toLocaleLowerCase())
                          );
                        }
                      } else {
                        return bind.type.toLocaleLowerCase() === typeLower;
                      }
                    })
                    .map(bind => {
                      if (typeof handledPayload === 'object' && 'ids' in handledPayload) {
                        const postgresChanges = handledPayload.data;
                        const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                        const enrichedPayload = {
                          schema: schema,
                          table: table,
                          commit_timestamp: commit_timestamp,
                          eventType: type,
                          new: {},
                          old: {},
                          errors: errors,
                        };
                        handledPayload = Object.assign(
                          Object.assign({}, enrichedPayload),
                          this._getPayloadRecords(postgresChanges),
                        );
                      }
                      bind.callback(handledPayload, ref);
                    });
            }
          }
          /** @internal */ _isClosed() {
            return (
              this.state ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].closed
            );
          }
          /** @internal */ _isJoined() {
            return (
              this.state ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].joined
            );
          }
          /** @internal */ _isJoining() {
            return (
              this.state ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].joining
            );
          }
          /** @internal */ _isLeaving() {
            return (
              this.state ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].leaving
            );
          }
          /** @internal */ _replyEventName(ref) {
            return `chan_reply_${ref}`;
          }
          /** @internal */ _on(type, filter, callback) {
            const typeLower = type.toLocaleLowerCase();
            const binding = {
              type: typeLower,
              filter: filter,
              callback: callback,
            };
            if (this.bindings[typeLower]) {
              this.bindings[typeLower].push(binding);
            } else {
              this.bindings[typeLower] = [binding];
            }
            return this;
          }
          /** @internal */ _off(type, filter) {
            const typeLower = type.toLocaleLowerCase();
            this.bindings[typeLower] = this.bindings[typeLower].filter(bind => {
              var _a;
              return !(
                ((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower &&
                RealtimeChannel.isEqual(bind.filter, filter)
              );
            });
            return this;
          }
          /** @internal */ static isEqual(obj1, obj2) {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
              return false;
            }
            for (const k in obj1) {
              if (obj1[k] !== obj2[k]) {
                return false;
              }
            }
            return true;
          }
          /** @internal */ _rejoinUntilConnected() {
            this.rejoinTimer.scheduleTimeout();
            if (this.socket.isConnected()) {
              this._rejoin();
            }
          }
          /**
           * Registers a callback that will be executed when the channel closes.
           *
           * @internal
           */ _onClose(callback) {
            this._on(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_EVENTS'
              ].close,
              {},
              callback,
            );
          }
          /**
           * Registers a callback that will be executed when the channel encounteres an error.
           *
           * @internal
           */ _onError(callback) {
            this._on(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_EVENTS'
              ].error,
              {},
              reason => callback(reason),
            );
          }
          /**
           * Returns `true` if the socket is connected and the channel has been joined.
           *
           * @internal
           */ _canPush() {
            return this.socket.isConnected() && this._isJoined();
          }
          /** @internal */ _rejoin(timeout = this.timeout) {
            if (this._isLeaving()) {
              return;
            }
            this.socket._leaveOpenTopic(this.topic);
            this.state =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CHANNEL_STATES'
              ].joining;
            this.joinPush.resend(timeout);
          }
          /** @internal */ _getPayloadRecords(payload) {
            const records = {
              new: {},
              old: {},
            };
            if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
              records.new =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.convertChangeData(
                  payload.columns,
                  payload.record,
                );
            }
            if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
              records.old =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.convertChangeData(
                  payload.columns,
                  payload.old_record,
                );
            }
            return records;
          }
        } //# sourceMappingURL=RealtimeChannel.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => RealtimeClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)',
          );
        const noop = () => {};
        const NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== 'undefined';
        const WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
        class RealtimeClient {
          /**
           * Initializes the Socket.
           *
           * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
           * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
           * @param options.transport The Websocket Transport, for example WebSocket.
           * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
           * @param options.params The optional params to pass when connecting.
           * @param options.headers The optional headers to pass when connecting.
           * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
           * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
           * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
           * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
           * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
           * @param options.worker Use Web Worker to set a side flow. Defaults to false.
           * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
           */ constructor(endPoint, options) {
            var _a;
            this.accessTokenValue = null;
            this.apiKey = null;
            this.channels = [];
            this.endPoint = '';
            this.httpEndpoint = '';
            this.headers =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'DEFAULT_HEADERS'
              ];
            this.params = {};
            this.timeout =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'DEFAULT_TIMEOUT'
              ];
            this.heartbeatIntervalMs = 30000;
            this.heartbeatTimer = undefined;
            this.pendingHeartbeatRef = null;
            this.ref = 0;
            this.logger = noop;
            this.conn = null;
            this.sendBuffer = [];
            this.serializer =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ]();
            this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            };
            this.accessToken = null;
            /**
             * Use either custom fetch, if provided, or default fetch to make HTTP requests
             *
             * @internal
             */ this._resolveFetch = customFetch => {
              let _fetch;
              if (customFetch) {
                _fetch = customFetch;
              } else if (typeof fetch === 'undefined') {
                _fetch = (...args) =>
                  __turbopack_require__(
                    '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)',
                  )(__turbopack_import__).then(({ default: fetch1 }) => fetch1(...args));
              } else {
                _fetch = fetch;
              }
              return (...args) => _fetch(...args);
            };
            this.endPoint = `${endPoint}/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['TRANSPORTS'].websocket}`;
            this.httpEndpoint = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'httpEndpointURL'
            ])(endPoint);
            if (options === null || options === void 0 ? void 0 : options.transport) {
              this.transport = options.transport;
            } else {
              this.transport = null;
            }
            if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
            if (options === null || options === void 0 ? void 0 : options.headers)
              this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
            if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
            if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
            if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
              this.heartbeatIntervalMs = options.heartbeatIntervalMs;
            const accessTokenValue =
              (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0
                ? void 0
                : _a.apikey;
            if (accessTokenValue) {
              this.accessTokenValue = accessTokenValue;
              this.apiKey = accessTokenValue;
            }
            this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs)
              ? options.reconnectAfterMs
              : tries => {
                  return [1000, 2000, 5000, 10000][tries - 1] || 10000;
                };
            this.encode = (options === null || options === void 0 ? void 0 : options.encode)
              ? options.encode
              : (payload, callback) => {
                  return callback(JSON.stringify(payload));
                };
            this.decode = (options === null || options === void 0 ? void 0 : options.decode)
              ? options.decode
              : this.serializer.decode.bind(this.serializer);
            this.reconnectTimer =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](async () => {
                this.disconnect();
                this.connect();
              }, this.reconnectAfterMs);
            this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
            if (options === null || options === void 0 ? void 0 : options.worker) {
              if (('TURBOPACK compile-time falsy', 0)) {
                ('TURBOPACK unreachable');
              }
              this.worker = (options === null || options === void 0 ? void 0 : options.worker) || false;
              this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
            }
            this.accessToken = (options === null || options === void 0 ? void 0 : options.accessToken) || null;
          }
          /**
           * Connects the socket, unless already connected.
           */ connect() {
            if (this.conn) {
              return;
            }
            if (this.transport) {
              this.conn = new this.transport(this.endpointURL(), undefined, {
                headers: this.headers,
              });
              return;
            }
            if (NATIVE_WEBSOCKET_AVAILABLE) {
              this.conn = new WebSocket(this.endpointURL());
              this.setupConnection();
              return;
            }
            this.conn = new WSWebSocketDummy(this.endpointURL(), undefined, {
              close: () => {
                this.conn = null;
              },
            });
            __turbopack_require__(
              '[project]/node_modules/.pnpm/ws@8.18.0/node_modules/ws/wrapper.mjs [app-rsc] (ecmascript, async loader)',
            )(__turbopack_import__).then(({ default: WS }) => {
              this.conn = new WS(this.endpointURL(), undefined, {
                headers: this.headers,
              });
              this.setupConnection();
            });
          }
          /**
           * Returns the URL of the websocket.
           * @returns string The URL of the websocket.
           */ endpointURL() {
            return this._appendParams(
              this.endPoint,
              Object.assign({}, this.params, {
                vsn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'VSN'
                ],
              }),
            );
          }
          /**
           * Disconnects the socket.
           *
           * @param code A numeric status code to send on disconnect.
           * @param reason A custom reason for the disconnect.
           */ disconnect(code, reason) {
            if (this.conn) {
              this.conn.onclose = function () {}; // noop
              if (code) {
                this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
              } else {
                this.conn.close();
              }
              this.conn = null;
              // remove open handles
              this.heartbeatTimer && clearInterval(this.heartbeatTimer);
              this.reconnectTimer.reset();
            }
          }
          /**
           * Returns all created channels
           */ getChannels() {
            return this.channels;
          }
          /**
           * Unsubscribes and removes a single channel
           * @param channel A RealtimeChannel instance
           */ async removeChannel(channel) {
            const status = await channel.unsubscribe();
            if (this.channels.length === 0) {
              this.disconnect();
            }
            return status;
          }
          /**
           * Unsubscribes and removes all channels
           */ async removeAllChannels() {
            const values_1 = await Promise.all(this.channels.map(channel => channel.unsubscribe()));
            this.disconnect();
            return values_1;
          }
          /**
           * Logs the message.
           *
           * For customized logging, `this.logger` can be overridden.
           */ log(kind, msg, data) {
            this.logger(kind, msg, data);
          }
          /**
           * Returns the current state of the socket.
           */ connectionState() {
            switch (this.conn && this.conn.readyState) {
              case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'SOCKET_STATES'
              ].connecting:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CONNECTION_STATE'
                ].Connecting;
              case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'SOCKET_STATES'
              ].open:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CONNECTION_STATE'
                ].Open;
              case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'SOCKET_STATES'
              ].closing:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CONNECTION_STATE'
                ].Closing;
              default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CONNECTION_STATE'
                ].Closed;
            }
          }
          /**
           * Returns `true` is the connection is open.
           */ isConnected() {
            return (
              this.connectionState() ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CONNECTION_STATE'
              ].Open
            );
          }
          channel(
            topic,
            params = {
              config: {},
            },
          ) {
            const chan =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ](`realtime:${topic}`, params, this);
            this.channels.push(chan);
            return chan;
          }
          /**
           * Push out a message if the socket is connected.
           *
           * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
           */ push(data) {
            const { topic, event, payload, ref } = data;
            const callback = () => {
              this.encode(data, result => {
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
              });
            };
            this.log('push', `${topic} ${event} (${ref})`, payload);
            if (this.isConnected()) {
              callback();
            } else {
              this.sendBuffer.push(callback);
            }
          }
          /**
           * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
           *
           * If param is null it will use the `accessToken` callback function or the token set on the client.
           *
           * On callback used, it will set the value of the token internal to the client.
           *
           * @param token A JWT string to override the token set on the client.
           */ async setAuth(token = null) {
            let tokenToSend = token || (this.accessToken && (await this.accessToken())) || this.accessTokenValue;
            if (tokenToSend) {
              let parsed = null;
              try {
                parsed = JSON.parse(atob(tokenToSend.split('.')[1]));
              } catch (_error) {}
              if (parsed && parsed.exp) {
                let now = Math.floor(Date.now() / 1000);
                let valid = now - parsed.exp < 0;
                if (!valid) {
                  this.log('auth', `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${parsed.exp}`);
                  return Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${parsed.exp}`);
                }
              }
              this.accessTokenValue = tokenToSend;
              this.channels.forEach(channel => {
                tokenToSend &&
                  channel.updateJoinPayload({
                    access_token: tokenToSend,
                  });
                if (channel.joinedOnce && channel._isJoined()) {
                  channel._push(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'CHANNEL_EVENTS'
                    ].access_token,
                    {
                      access_token: tokenToSend,
                    },
                  );
                }
              });
            }
          }
          /**
           * Sends a heartbeat message if the socket is connected.
           */ async sendHeartbeat() {
            var _a;
            if (!this.isConnected()) {
              return;
            }
            if (this.pendingHeartbeatRef) {
              this.pendingHeartbeatRef = null;
              this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
              (_a = this.conn) === null || _a === void 0
                ? void 0
                : _a.close(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'WS_CLOSE_NORMAL'
                    ],
                    'hearbeat timeout',
                  );
              return;
            }
            this.pendingHeartbeatRef = this._makeRef();
            this.push({
              topic: 'phoenix',
              event: 'heartbeat',
              payload: {},
              ref: this.pendingHeartbeatRef,
            });
            this.setAuth();
          }
          /**
           * Flushes send buffer
           */ flushSendBuffer() {
            if (this.isConnected() && this.sendBuffer.length > 0) {
              this.sendBuffer.forEach(callback => callback());
              this.sendBuffer = [];
            }
          }
          /**
           * Return the next message ref, accounting for overflows
           *
           * @internal
           */ _makeRef() {
            let newRef = this.ref + 1;
            if (newRef === this.ref) {
              this.ref = 0;
            } else {
              this.ref = newRef;
            }
            return this.ref.toString();
          }
          /**
           * Unsubscribe from channels with the specified topic.
           *
           * @internal
           */ _leaveOpenTopic(topic) {
            let dupChannel = this.channels.find(c => c.topic === topic && (c._isJoined() || c._isJoining()));
            if (dupChannel) {
              this.log('transport', `leaving duplicate topic "${topic}"`);
              dupChannel.unsubscribe();
            }
          }
          /**
           * Removes a subscription from the socket.
           *
           * @param channel An open subscription.
           *
           * @internal
           */ _remove(channel) {
            this.channels = this.channels.filter(c => c._joinRef() !== channel._joinRef());
          }
          /**
           * Sets up connection handlers.
           *
           * @internal
           */ setupConnection() {
            if (this.conn) {
              this.conn.binaryType = 'arraybuffer';
              this.conn.onopen = () => this._onConnOpen();
              this.conn.onerror = error => this._onConnError(error);
              this.conn.onmessage = event => this._onConnMessage(event);
              this.conn.onclose = event => this._onConnClose(event);
            }
          }
          /** @internal */ _onConnMessage(rawMessage) {
            this.decode(rawMessage.data, msg => {
              let { topic, event, payload, ref } = msg;
              if (ref && ref === this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null;
              }
              this.log(
                'receive',
                `${payload.status || ''} ${topic} ${event} ${(ref && '(' + ref + ')') || ''}`,
                payload,
              );
              this.channels
                .filter(channel => channel._isMember(topic))
                .forEach(channel => channel._trigger(event, payload, ref));
              this.stateChangeCallbacks.message.forEach(callback => callback(msg));
            });
          }
          /** @internal */ async _onConnOpen() {
            this.log('transport', `connected to ${this.endpointURL()}`);
            this.flushSendBuffer();
            this.reconnectTimer.reset();
            if (!this.worker) {
              this.heartbeatTimer && clearInterval(this.heartbeatTimer);
              this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
            } else {
              if (this.workerUrl) {
                this.log('worker', `starting worker for from ${this.workerUrl}`);
              } else {
                this.log('worker', `starting default worker`);
              }
              const objectUrl = this._workerObjectUrl(this.workerUrl);
              this.workerRef = new Worker(objectUrl);
              this.workerRef.onerror = error => {
                this.log('worker', 'worker error', error.message);
                this.workerRef.terminate();
              };
              this.workerRef.onmessage = event => {
                if (event.data.event === 'keepAlive') {
                  this.sendHeartbeat();
                }
              };
              this.workerRef.postMessage({
                event: 'start',
                interval: this.heartbeatIntervalMs,
              });
            }
            this.stateChangeCallbacks.open.forEach(callback => callback());
          }
          /** @internal */ _onConnClose(event) {
            this.log('transport', 'close', event);
            this._triggerChanError();
            this.heartbeatTimer && clearInterval(this.heartbeatTimer);
            this.reconnectTimer.scheduleTimeout();
            this.stateChangeCallbacks.close.forEach(callback => callback(event));
          }
          /** @internal */ _onConnError(error) {
            this.log('transport', error.message);
            this._triggerChanError();
            this.stateChangeCallbacks.error.forEach(callback => callback(error));
          }
          /** @internal */ _triggerChanError() {
            this.channels.forEach(channel =>
              channel._trigger(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CHANNEL_EVENTS'
                ].error,
              ),
            );
          }
          /** @internal */ _appendParams(url, params) {
            if (Object.keys(params).length === 0) {
              return url;
            }
            const prefix = url.match(/\?/) ? '&' : '?';
            const query = new URLSearchParams(params);
            return `${url}${prefix}${query}`;
          }
          _workerObjectUrl(url) {
            let result_url;
            if (url) {
              result_url = url;
            } else {
              const blob = new Blob([WORKER_SCRIPT], {
                type: 'application/javascript',
              });
              result_url = URL.createObjectURL(blob);
            }
            return result_url;
          }
        }
        class WSWebSocketDummy {
          constructor(address, _protocols, options) {
            this.binaryType = 'arraybuffer';
            this.onclose = () => {};
            this.onerror = () => {};
            this.onmessage = () => {};
            this.onopen = () => {};
            this.readyState =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'SOCKET_STATES'
              ].connecting;
            this.send = () => {};
            this.url = null;
            this.url = address;
            this.close = options.close;
          }
        } //# sourceMappingURL=RealtimeClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <locals>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({});
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript) <export default as RealtimeClient>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          RealtimeClient: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)',
          );
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          applySettingDefaults: () => applySettingDefaults,
          isBrowser: () => isBrowser,
          stripTrailingSlash: () => stripTrailingSlash,
          uuid: () => uuid,
        });
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        function uuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });
        }
        function stripTrailingSlash(url) {
          return url.replace(/\/$/, '');
        }
        const isBrowser = () => 'undefined' !== 'undefined';
        function applySettingDefaults(options, defaults) {
          const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
          const {
            db: DEFAULT_DB_OPTIONS,
            auth: DEFAULT_AUTH_OPTIONS,
            realtime: DEFAULT_REALTIME_OPTIONS,
            global: DEFAULT_GLOBAL_OPTIONS,
          } = defaults;
          const result = {
            db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
            auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
            realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
            global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions),
            accessToken: () =>
              __awaiter(this, void 0, void 0, function* () {
                return '';
              }),
          };
          if (options.accessToken) {
            result.accessToken = options.accessToken;
          } else {
            // hack around Required<>
            delete result.accessToken;
          }
          return result;
        } //# sourceMappingURL=helpers.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          version: () => version,
        });
        const version = '2.48.1'; //# sourceMappingURL=version.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          DEFAULT_AUTH_OPTIONS: () => DEFAULT_AUTH_OPTIONS,
          DEFAULT_DB_OPTIONS: () => DEFAULT_DB_OPTIONS,
          DEFAULT_GLOBAL_OPTIONS: () => DEFAULT_GLOBAL_OPTIONS,
          DEFAULT_HEADERS: () => DEFAULT_HEADERS,
          DEFAULT_REALTIME_OPTIONS: () => DEFAULT_REALTIME_OPTIONS,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-rsc] (ecmascript)',
          );
        let JS_ENV = '';
        // @ts-ignore
        if (typeof Deno !== 'undefined') {
          JS_ENV = 'deno';
        } else if (typeof document !== 'undefined') {
          JS_ENV = 'web';
        } else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          JS_ENV = 'react-native';
        } else {
          JS_ENV = 'node';
        }
        const DEFAULT_HEADERS = {
          'X-Client-Info': `supabase-js-${JS_ENV}/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['version']}`,
        };
        const DEFAULT_GLOBAL_OPTIONS = {
          headers: DEFAULT_HEADERS,
        };
        const DEFAULT_DB_OPTIONS = {
          schema: 'public',
        };
        const DEFAULT_AUTH_OPTIONS = {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
          flowType: 'implicit',
        };
        const DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          fetchWithAuth: () => fetchWithAuth,
          resolveFetch: () => resolveFetch,
          resolveHeadersConstructor: () => resolveHeadersConstructor,
        });
        // @ts-ignore
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        const resolveFetch = customFetch => {
          let _fetch;
          if (customFetch) {
            _fetch = customFetch;
          } else if (typeof fetch === 'undefined') {
            _fetch =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ];
          } else {
            _fetch = fetch;
          }
          return (...args) => _fetch(...args);
        };
        const resolveHeadersConstructor = () => {
          if (typeof Headers === 'undefined') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'Headers'
            ];
          }
          return Headers;
        };
        const fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
          const fetch1 = resolveFetch(customFetch);
          const HeadersConstructor = resolveHeadersConstructor();
          return (input, init) =>
            __awaiter(void 0, void 0, void 0, function* () {
              var _a;
              const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
              let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
              if (!headers.has('apikey')) {
                headers.set('apikey', supabaseKey);
              }
              if (!headers.has('Authorization')) {
                headers.set('Authorization', `Bearer ${accessToken}`);
              }
              return fetch1(
                input,
                Object.assign(Object.assign({}, init), {
                  headers,
                }),
              );
            });
        }; //# sourceMappingURL=fetch.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          SupabaseAuthClient: () => SupabaseAuthClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$67$2e$3$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+auth-js@2.67.3/node_modules/@supabase/auth-js/dist/module/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$67$2e$3$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+auth-js@2.67.3/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-rsc] (ecmascript) <export default as AuthClient>',
          );
        class SupabaseAuthClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$67$2e$3$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__[
          'AuthClient'
        ] {
          constructor(options) {
            super(options);
          }
        } //# sourceMappingURL=SupabaseAuthClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => SupabaseClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+postgrest-js@1.18.1/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript) <export default as RealtimeClient>',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        class SupabaseClient {
          /**
           * Create a new client for use in the browser.
           * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
           * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
           * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
           * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
           * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
           * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
           * @param options.realtime Options passed along to realtime-js constructor.
           * @param options.global.fetch A custom fetch implementation.
           * @param options.global.headers Any additional headers to send with each network request.
           */ constructor(supabaseUrl, supabaseKey, options) {
            var _a, _b, _c;
            this.supabaseUrl = supabaseUrl;
            this.supabaseKey = supabaseKey;
            if (!supabaseUrl) throw new Error('supabaseUrl is required.');
            if (!supabaseKey) throw new Error('supabaseKey is required.');
            const _supabaseUrl = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'stripTrailingSlash'
            ])(supabaseUrl);
            this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, 'ws');
            this.authUrl = `${_supabaseUrl}/auth/v1`;
            this.storageUrl = `${_supabaseUrl}/storage/v1`;
            this.functionsUrl = `${_supabaseUrl}/functions/v1`;
            // default storage key uses the supabase project ref as a namespace
            const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`;
            const DEFAULTS = {
              db: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'DEFAULT_DB_OPTIONS'
              ],
              realtime:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'DEFAULT_REALTIME_OPTIONS'
                ],
              auth: Object.assign(
                Object.assign(
                  {},
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'DEFAULT_AUTH_OPTIONS'
                  ],
                ),
                {
                  storageKey: defaultStorageKey,
                },
              ),
              global:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'DEFAULT_GLOBAL_OPTIONS'
                ],
            };
            const settings = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'applySettingDefaults'
            ])(options !== null && options !== void 0 ? options : {}, DEFAULTS);
            this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
            this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
            if (!settings.accessToken) {
              this.auth = this._initSupabaseAuthClient(
                (_c = settings.auth) !== null && _c !== void 0 ? _c : {},
                this.headers,
                settings.global.fetch,
              );
            } else {
              this.accessToken = settings.accessToken;
              this.auth = new Proxy(
                {},
                {
                  get: (_, prop) => {
                    throw new Error(
                      `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`,
                    );
                  },
                },
              );
            }
            this.fetch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'fetchWithAuth'
            ])(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
            this.realtime = this._initRealtimeClient(
              Object.assign(
                {
                  headers: this.headers,
                  accessToken: this._getAccessToken.bind(this),
                },
                settings.realtime,
              ),
            );
            this.rest =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'PostgrestClient'
              ](`${_supabaseUrl}/rest/v1`, {
                headers: this.headers,
                schema: settings.db.schema,
                fetch: this.fetch,
              });
            if (!settings.accessToken) {
              this._listenForAuthEvents();
            }
          }
          /**
           * Supabase Functions allows you to deploy and invoke edge functions.
           */ get functions() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'FunctionsClient'
            ](this.functionsUrl, {
              headers: this.headers,
              customFetch: this.fetch,
            });
          }
          /**
           * Supabase Storage allows you to manage user-generated content, such as photos or videos.
           */ get storage() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'StorageClient'
            ](this.storageUrl, this.headers, this.fetch);
          }
          /**
           * Perform a query on a table or a view.
           *
           * @param relation - The table or view name to query
           */ from(relation) {
            return this.rest.from(relation);
          }
          // NOTE: signatures must be kept in sync with PostgrestClient.schema
          /**
           * Select a schema to query or perform an function (rpc) call.
           *
           * The schema needs to be on the list of exposed schemas inside Supabase.
           *
           * @param schema - The schema to query
           */ schema(schema) {
            return this.rest.schema(schema);
          }
          // NOTE: signatures must be kept in sync with PostgrestClient.rpc
          /**
           * Perform a function call.
           *
           * @param fn - The function name to call
           * @param args - The arguments to pass to the function call
           * @param options - Named parameters
           * @param options.head - When set to `true`, `data` will not be returned.
           * Useful if you only need the count.
           * @param options.get - When set to `true`, the function will be called with
           * read-only access mode.
           * @param options.count - Count algorithm to use to count rows returned by the
           * function. Only applicable for [set-returning
           * functions](https://www.postgresql.org/docs/current/functions-srf.html).
           *
           * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
           * hood.
           *
           * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
           * statistics under the hood.
           *
           * `"estimated"`: Uses exact count for low numbers and planned count for high
           * numbers.
           */ rpc(fn, args = {}, options = {}) {
            return this.rest.rpc(fn, args, options);
          }
          /**
           * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
           *
           * @param {string} name - The name of the Realtime channel.
           * @param {Object} opts - The options to pass to the Realtime channel.
           *
           */ channel(
            name,
            opts = {
              config: {},
            },
          ) {
            return this.realtime.channel(name, opts);
          }
          /**
           * Returns all Realtime channels.
           */ getChannels() {
            return this.realtime.getChannels();
          }
          /**
           * Unsubscribes and removes Realtime channel from Realtime client.
           *
           * @param {RealtimeChannel} channel - The name of the Realtime channel.
           *
           */ removeChannel(channel) {
            return this.realtime.removeChannel(channel);
          }
          /**
           * Unsubscribes and removes all Realtime channels from Realtime client.
           */ removeAllChannels() {
            return this.realtime.removeAllChannels();
          }
          _getAccessToken() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function* () {
              if (this.accessToken) {
                return yield this.accessToken();
              }
              const { data } = yield this.auth.getSession();
              return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null &&
                _b !== void 0
                ? _b
                : null;
            });
          }
          _initSupabaseAuthClient(
            { autoRefreshToken, persistSession, detectSessionInUrl, storage, storageKey, flowType, lock, debug },
            headers,
            fetch,
          ) {
            const authHeaders = {
              Authorization: `Bearer ${this.supabaseKey}`,
              apikey: `${this.supabaseKey}`,
            };
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'SupabaseAuthClient'
            ]({
              url: this.authUrl,
              headers: Object.assign(Object.assign({}, authHeaders), headers),
              storageKey: storageKey,
              autoRefreshToken,
              persistSession,
              detectSessionInUrl,
              storage,
              flowType,
              lock,
              debug,
              fetch,
              // auth checks if there is a custom authorizaiton header using this flag
              // so it knows whether to return an error when getUser is called with no session
              hasCustomAuthorizationHeader: 'Authorization' in this.headers,
            });
          }
          _initRealtimeClient(options) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__[
              'RealtimeClient'
            ](
              this.realtimeUrl,
              Object.assign(Object.assign({}, options), {
                params: Object.assign(
                  {
                    apikey: this.supabaseKey,
                  },
                  options === null || options === void 0 ? void 0 : options.params,
                ),
              }),
            );
          }
          _listenForAuthEvents() {
            let data = this.auth.onAuthStateChange((event, session) => {
              this._handleTokenChanged(
                event,
                'CLIENT',
                session === null || session === void 0 ? void 0 : session.access_token,
              );
            });
            return data;
          }
          _handleTokenChanged(event, source, token) {
            if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
              this.changedAccessToken = token;
            } else if (event === 'SIGNED_OUT') {
              this.realtime.setAuth();
              if (source == 'STORAGE') this.auth.signOut();
              this.changedAccessToken = undefined;
            }
          }
        } //# sourceMappingURL=SupabaseClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          createClient: () => createClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+supabase-js@2.48.1/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-rsc] (ecmascript)',
          );
        const createClient = (supabaseUrl, supabaseKey, options) => {
          return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ](supabaseUrl, supabaseKey, options);
        }; //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/types.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          FunctionRegion: () => FunctionRegion,
          FunctionsError: () => FunctionsError,
          FunctionsFetchError: () => FunctionsFetchError,
          FunctionsHttpError: () => FunctionsHttpError,
          FunctionsRelayError: () => FunctionsRelayError,
        });
        class FunctionsError extends Error {
          constructor(message, name = 'FunctionsError', context) {
            super(message);
            this.name = name;
            this.context = context;
          }
        }
        class FunctionsFetchError extends FunctionsError {
          constructor(context) {
            super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
          }
        }
        class FunctionsRelayError extends FunctionsError {
          constructor(context) {
            super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
          }
        }
        class FunctionsHttpError extends FunctionsError {
          constructor(context) {
            super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
          }
        }
        var FunctionRegion;
        (function (FunctionRegion) {
          FunctionRegion['Any'] = 'any';
          FunctionRegion['ApNortheast1'] = 'ap-northeast-1';
          FunctionRegion['ApNortheast2'] = 'ap-northeast-2';
          FunctionRegion['ApSouth1'] = 'ap-south-1';
          FunctionRegion['ApSoutheast1'] = 'ap-southeast-1';
          FunctionRegion['ApSoutheast2'] = 'ap-southeast-2';
          FunctionRegion['CaCentral1'] = 'ca-central-1';
          FunctionRegion['EuCentral1'] = 'eu-central-1';
          FunctionRegion['EuWest1'] = 'eu-west-1';
          FunctionRegion['EuWest2'] = 'eu-west-2';
          FunctionRegion['EuWest3'] = 'eu-west-3';
          FunctionRegion['SaEast1'] = 'sa-east-1';
          FunctionRegion['UsEast1'] = 'us-east-1';
          FunctionRegion['UsWest1'] = 'us-west-1';
          FunctionRegion['UsWest2'] = 'us-west-2';
        })(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/helper.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          resolveFetch: () => resolveFetch,
        });
        const resolveFetch = customFetch => {
          let _fetch;
          if (customFetch) {
            _fetch = customFetch;
          } else if (typeof fetch === 'undefined') {
            _fetch = (...args) =>
              __turbopack_require__(
                '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)',
              )(__turbopack_import__).then(({ default: fetch1 }) => fetch1(...args));
          } else {
            _fetch = fetch;
          }
          return (...args) => _fetch(...args);
        }; //# sourceMappingURL=helper.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          FunctionsClient: () => FunctionsClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+functions-js@2.4.4/node_modules/@supabase/functions-js/dist/module/helper.js [app-rsc] (ecmascript)',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        class FunctionsClient {
          constructor(
            url,
            {
              headers = {},
              customFetch,
              region = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'FunctionRegion'
              ].Any,
            } = {},
          ) {
            this.url = url;
            this.headers = headers;
            this.region = region;
            this.fetch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'resolveFetch'
            ])(customFetch);
          }
          /**
           * Updates the authorization header
           * @param token - the new jwt token sent in the authorisation header
           */ setAuth(token) {
            this.headers.Authorization = `Bearer ${token}`;
          }
          /**
           * Invokes a function
           * @param functionName - The name of the Function to invoke.
           * @param options - Options for invoking the Function.
           */ invoke(functionName, options = {}) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const { headers, method, body: functionArgs } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                  region = this.region;
                }
                if (region && region !== 'any') {
                  _headers['x-region'] = region;
                }
                let body;
                if (
                  functionArgs &&
                  ((headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) || !headers)
                ) {
                  if (
                    (typeof Blob !== 'undefined' && functionArgs instanceof Blob) ||
                    functionArgs instanceof ArrayBuffer
                  ) {
                    // will work for File as File inherits Blob
                    // also works for ArrayBuffer as it is the same underlying structure as a Blob
                    _headers['Content-Type'] = 'application/octet-stream';
                    body = functionArgs;
                  } else if (typeof functionArgs === 'string') {
                    // plain string
                    _headers['Content-Type'] = 'text/plain';
                    body = functionArgs;
                  } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                    // don't set content-type headers
                    // Request will automatically add the right boundary value
                    body = functionArgs;
                  } else {
                    // default, assume this is JSON
                    _headers['Content-Type'] = 'application/json';
                    body = JSON.stringify(functionArgs);
                  }
                }
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                  method: method || 'POST',
                  // headers priority is (high to low):
                  // 1. invoke-level headers
                  // 2. client-level headers
                  // 3. default Content-Type header
                  headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                  body,
                }).catch(fetchError => {
                  throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'FunctionsFetchError'
                  ](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                  throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'FunctionsRelayError'
                  ](response);
                }
                if (!response.ok) {
                  throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$4$2e$4$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'FunctionsHttpError'
                  ](response);
                }
                let responseType = (
                  (_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain'
                )
                  .split(';')[0]
                  .trim();
                let data;
                if (responseType === 'application/json') {
                  data = yield response.json();
                } else if (responseType === 'application/octet-stream') {
                  data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                  data = response;
                } else if (responseType === 'multipart/form-data') {
                  data = yield response.formData();
                } else {
                  // default to text
                  data = yield response.text();
                }
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                return {
                  data: null,
                  error,
                };
              }
            });
          }
        } //# sourceMappingURL=FunctionsClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          recursiveToCamel: () => recursiveToCamel,
          resolveFetch: () => resolveFetch,
          resolveResponse: () => resolveResponse,
        });
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        const resolveFetch = customFetch => {
          let _fetch;
          if (customFetch) {
            _fetch = customFetch;
          } else if (typeof fetch === 'undefined') {
            _fetch = (...args) =>
              __turbopack_require__(
                '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)',
              )(__turbopack_import__).then(({ default: fetch1 }) => fetch1(...args));
          } else {
            _fetch = fetch;
          }
          return (...args) => _fetch(...args);
        };
        const resolveResponse = () =>
          __awaiter(void 0, void 0, void 0, function* () {
            if (typeof Response === 'undefined') {
              // @ts-ignore
              return (yield __turbopack_require__(
                '[project]/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)',
              )(__turbopack_import__)).Response;
            }
            return Response;
          });
        const recursiveToCamel = item => {
          if (Array.isArray(item)) {
            return item.map(el => recursiveToCamel(el));
          } else if (typeof item === 'function' || item !== Object(item)) {
            return item;
          }
          const result = {};
          Object.entries(item).forEach(([key, value]) => {
            const newKey = key.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, ''));
            result[newKey] = recursiveToCamel(value);
          });
          return result;
        }; //# sourceMappingURL=helpers.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          StorageApiError: () => StorageApiError,
          StorageError: () => StorageError,
          StorageUnknownError: () => StorageUnknownError,
          isStorageError: () => isStorageError,
        });
        class StorageError extends Error {
          constructor(message) {
            super(message);
            this.__isStorageError = true;
            this.name = 'StorageError';
          }
        }
        function isStorageError(error) {
          return typeof error === 'object' && error !== null && '__isStorageError' in error;
        }
        class StorageApiError extends StorageError {
          constructor(message, status) {
            super(message);
            this.name = 'StorageApiError';
            this.status = status;
          }
          toJSON() {
            return {
              name: this.name,
              message: this.message,
              status: this.status,
            };
          }
        }
        class StorageUnknownError extends StorageError {
          constructor(message, originalError) {
            super(message);
            this.name = 'StorageUnknownError';
            this.originalError = originalError;
          }
        } //# sourceMappingURL=errors.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          get: () => get,
          head: () => head,
          post: () => post,
          put: () => put,
          remove: () => remove,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        const _getErrorMessage = err =>
          err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
        const handleError = (error, reject, options) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const Res = yield (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'resolveResponse'
            ])();
            if (error instanceof Res && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
              error
                .json()
                .then(err => {
                  reject(
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'StorageApiError'
                    ](_getErrorMessage(err), error.status || 500),
                  );
                })
                .catch(err => {
                  reject(
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'StorageUnknownError'
                    ](_getErrorMessage(err), err),
                  );
                });
            } else {
              reject(
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'StorageUnknownError'
                ](_getErrorMessage(error), error),
              );
            }
          });
        const _getRequestParams = (method, options, parameters, body) => {
          const params = {
            method,
            headers: (options === null || options === void 0 ? void 0 : options.headers) || {},
          };
          if (method === 'GET') {
            return params;
          }
          params.headers = Object.assign(
            {
              'Content-Type': 'application/json',
            },
            options === null || options === void 0 ? void 0 : options.headers,
          );
          if (body) {
            params.body = JSON.stringify(body);
          }
          return Object.assign(Object.assign({}, params), parameters);
        };
        function _handleRequest(fetcher, method, url, options, parameters, body) {
          return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
              fetcher(url, _getRequestParams(method, options, parameters, body))
                .then(result => {
                  if (!result.ok) throw result;
                  if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                  return result.json();
                })
                .then(data => resolve(data))
                .catch(error => handleError(error, reject, options));
            });
          });
        }
        function get(fetcher, url, options, parameters) {
          return __awaiter(this, void 0, void 0, function* () {
            return _handleRequest(fetcher, 'GET', url, options, parameters);
          });
        }
        function post(fetcher, url, body, options, parameters) {
          return __awaiter(this, void 0, void 0, function* () {
            return _handleRequest(fetcher, 'POST', url, options, parameters, body);
          });
        }
        function put(fetcher, url, body, options, parameters) {
          return __awaiter(this, void 0, void 0, function* () {
            return _handleRequest(fetcher, 'PUT', url, options, parameters, body);
          });
        }
        function head(fetcher, url, options, parameters) {
          return __awaiter(this, void 0, void 0, function* () {
            return _handleRequest(
              fetcher,
              'HEAD',
              url,
              Object.assign(Object.assign({}, options), {
                noResolveJson: true,
              }),
              parameters,
            );
          });
        }
        function remove(fetcher, url, body, options, parameters) {
          return __awaiter(this, void 0, void 0, function* () {
            return _handleRequest(fetcher, 'DELETE', url, options, parameters, body);
          });
        } //# sourceMappingURL=fetch.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => StorageFileApi,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        const DEFAULT_SEARCH_OPTIONS = {
          limit: 100,
          offset: 0,
          sortBy: {
            column: 'name',
            order: 'asc',
          },
        };
        const DEFAULT_FILE_OPTIONS = {
          cacheControl: '3600',
          contentType: 'text/plain;charset=UTF-8',
          upsert: false,
        };
        class StorageFileApi {
          constructor(url, headers = {}, bucketId, fetch) {
            this.url = url;
            this.headers = headers;
            this.bucketId = bucketId;
            this.fetch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'resolveFetch'
            ])(fetch);
          }
          /**
           * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
           *
           * @param method HTTP method.
           * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
           * @param fileBody The body of the file to be stored in the bucket.
           */ uploadOrUpdate(method, path, fileBody, fileOptions) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                let headers = Object.assign(
                  Object.assign({}, this.headers),
                  method === 'POST' && {
                    'x-upsert': String(options.upsert),
                  },
                );
                const metadata = options.metadata;
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                  body = new FormData();
                  body.append('cacheControl', options.cacheControl);
                  if (metadata) {
                    body.append('metadata', this.encodeMetadata(metadata));
                  }
                  body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                  body = fileBody;
                  body.append('cacheControl', options.cacheControl);
                  if (metadata) {
                    body.append('metadata', this.encodeMetadata(metadata));
                  }
                } else {
                  body = fileBody;
                  headers['cache-control'] = `max-age=${options.cacheControl}`;
                  headers['content-type'] = options.contentType;
                  if (metadata) {
                    headers['x-metadata'] = this.toBase64(this.encodeMetadata(metadata));
                  }
                }
                if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) {
                  headers = Object.assign(Object.assign({}, headers), fileOptions.headers);
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(
                  `${this.url}/object/${_path}`,
                  Object.assign(
                    {
                      method,
                      body: body,
                      headers,
                    },
                    (options === null || options === void 0 ? void 0 : options.duplex)
                      ? {
                          duplex: options.duplex,
                        }
                      : {},
                  ),
                );
                const data = yield res.json();
                if (res.ok) {
                  return {
                    data: {
                      path: cleanPath,
                      id: data.Id,
                      fullPath: data.Key,
                    },
                    error: null,
                  };
                } else {
                  const error = data;
                  return {
                    data: null,
                    error,
                  };
                }
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Uploads a file to an existing bucket.
           *
           * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
           * @param fileBody The body of the file to be stored in the bucket.
           */ upload(path, fileBody, fileOptions) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.uploadOrUpdate('POST', path, fileBody, fileOptions);
            });
          }
          /**
           * Upload a file with a token generated from `createSignedUploadUrl`.
           * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
           * @param token The token generated from `createSignedUploadUrl`
           * @param fileBody The body of the file to be stored in the bucket.
           */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
            return __awaiter(this, void 0, void 0, function* () {
              const cleanPath = this._removeEmptyFolders(path);
              const _path = this._getFinalPath(cleanPath);
              const url = new URL(this.url + `/object/upload/sign/${_path}`);
              url.searchParams.set('token', token);
              try {
                let body;
                const options = Object.assign(
                  {
                    upsert: DEFAULT_FILE_OPTIONS.upsert,
                  },
                  fileOptions,
                );
                const headers = Object.assign(Object.assign({}, this.headers), {
                  'x-upsert': String(options.upsert),
                });
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                  body = new FormData();
                  body.append('cacheControl', options.cacheControl);
                  body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                  body = fileBody;
                  body.append('cacheControl', options.cacheControl);
                } else {
                  body = fileBody;
                  headers['cache-control'] = `max-age=${options.cacheControl}`;
                  headers['content-type'] = options.contentType;
                }
                const res = yield this.fetch(url.toString(), {
                  method: 'PUT',
                  body: body,
                  headers,
                });
                const data = yield res.json();
                if (res.ok) {
                  return {
                    data: {
                      path: cleanPath,
                      fullPath: data.Key,
                    },
                    error: null,
                  };
                } else {
                  const error = data;
                  return {
                    data: null,
                    error,
                  };
                }
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Creates a signed upload URL.
           * Signed upload URLs can be used to upload files to the bucket without further authentication.
           * They are valid for 2 hours.
           * @param path The file path, including the current file name. For example `folder/image.png`.
           * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
           */ createSignedUploadUrl(path, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                let _path = this._getFinalPath(path);
                const headers = Object.assign({}, this.headers);
                if (options === null || options === void 0 ? void 0 : options.upsert) {
                  headers['x-upsert'] = 'true';
                }
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/upload/sign/${_path}`,
                  {},
                  {
                    headers,
                  },
                );
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get('token');
                if (!token) {
                  throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'StorageError'
                  ]('No token returned by API');
                }
                return {
                  data: {
                    signedUrl: url.toString(),
                    path,
                    token,
                  },
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Replaces an existing file at the specified path with a new one.
           *
           * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
           * @param fileBody The body of the file to be stored in the bucket.
           */ update(path, fileBody, fileOptions) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.uploadOrUpdate('PUT', path, fileBody, fileOptions);
            });
          }
          /**
           * Moves an existing file to a new path in the same bucket.
           *
           * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
           * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
           * @param options The destination options.
           */ move(fromPath, toPath, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/move`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket,
                  },
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Copies an existing file to a new path in the same bucket.
           *
           * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
           * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
           * @param options The destination options.
           */ copy(fromPath, toPath, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/copy`,
                  {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket,
                  },
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data: {
                    path: data.Key,
                  },
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
           *
           * @param path The file path, including the current file name. For example `folder/image.png`.
           * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
           * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
           * @param options.transform Transform the asset before serving it to the client.
           */ createSignedUrl(path, expiresIn, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                let _path = this._getFinalPath(path);
                let data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/sign/${_path}`,
                  Object.assign(
                    {
                      expiresIn,
                    },
                    (options === null || options === void 0 ? void 0 : options.transform)
                      ? {
                          transform: options.transform,
                        }
                      : {},
                  ),
                  {
                    headers: this.headers,
                  },
                );
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
                  ? `&download=${options.download === true ? '' : options.download}`
                  : '';
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                  signedUrl,
                };
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
           *
           * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
           * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
           * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
           */ createSignedUrls(paths, expiresIn, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  {
                    expiresIn,
                    paths,
                  },
                  {
                    headers: this.headers,
                  },
                );
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
                  ? `&download=${options.download === true ? '' : options.download}`
                  : '';
                return {
                  data: data.map(datum =>
                    Object.assign(Object.assign({}, datum), {
                      signedUrl: datum.signedURL
                        ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`)
                        : null,
                    }),
                  ),
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
           *
           * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
           * @param options.transform Transform the asset before serving it to the client.
           */ download(path, options) {
            return __awaiter(this, void 0, void 0, function* () {
              const wantsTransformation =
                typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
              const renderPath = wantsTransformation ? 'render/image/authenticated' : 'object';
              const transformationQuery = this.transformOptsToQueryString(
                (options === null || options === void 0 ? void 0 : options.transform) || {},
              );
              const queryString = transformationQuery ? `?${transformationQuery}` : '';
              try {
                const _path = this._getFinalPath(path);
                const res = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'get'
                ])(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                  headers: this.headers,
                  noResolveJson: true,
                });
                const data = yield res.blob();
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Retrieves the details of an existing file.
           * @param path
           */ info(path) {
            return __awaiter(this, void 0, void 0, function* () {
              const _path = this._getFinalPath(path);
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'get'
                ])(this.fetch, `${this.url}/object/info/${_path}`, {
                  headers: this.headers,
                });
                return {
                  data: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'recursiveToCamel'
                  ])(data),
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Checks the existence of a file.
           * @param path
           */ exists(path) {
            return __awaiter(this, void 0, void 0, function* () {
              const _path = this._getFinalPath(path);
              try {
                yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'head'
                ])(this.fetch, `${this.url}/object/${_path}`, {
                  headers: this.headers,
                });
                return {
                  data: true,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error) &&
                  error instanceof
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'StorageUnknownError'
                    ]
                ) {
                  const originalError = error.originalError;
                  if (
                    [400, 404].includes(
                      originalError === null || originalError === void 0 ? void 0 : originalError.status,
                    )
                  ) {
                    return {
                      data: false,
                      error,
                    };
                  }
                }
                throw error;
              }
            });
          }
          /**
           * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
           * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
           *
           * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
           * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
           * @param options.transform Transform the asset before serving it to the client.
           */ getPublicUrl(path, options) {
            const _path = this._getFinalPath(path);
            const _queryString = [];
            const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
              ? `download=${options.download === true ? '' : options.download}`
              : '';
            if (downloadQueryParam !== '') {
              _queryString.push(downloadQueryParam);
            }
            const wantsTransformation =
              typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
            const renderPath = wantsTransformation ? 'render/image' : 'object';
            const transformationQuery = this.transformOptsToQueryString(
              (options === null || options === void 0 ? void 0 : options.transform) || {},
            );
            if (transformationQuery !== '') {
              _queryString.push(transformationQuery);
            }
            let queryString = _queryString.join('&');
            if (queryString !== '') {
              queryString = `?${queryString}`;
            }
            return {
              data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`),
              },
            };
          }
          /**
           * Deletes files within the same bucket
           *
           * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
           */ remove(paths) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'remove'
                ])(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  {
                    prefixes: paths,
                  },
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Get file metadata
           * @param id the file id to retrieve metadata
           */ // async getMetadata(
          //   id: string
          // ): Promise<
          //   | {
          //       data: Metadata
          //       error: null
          //     }
          //   | {
          //       data: null
          //       error: StorageError
          //     }
          // > {
          //   try {
          //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
          //     return { data, error: null }
          //   } catch (error) {
          //     if (isStorageError(error)) {
          //       return { data: null, error }
          //     }
          //     throw error
          //   }
          // }
          /**
           * Update file metadata
           * @param id the file id to update metadata
           * @param meta the new file metadata
           */ // async updateMetadata(
          //   id: string,
          //   meta: Metadata
          // ): Promise<
          //   | {
          //       data: Metadata
          //       error: null
          //     }
          //   | {
          //       data: null
          //       error: StorageError
          //     }
          // > {
          //   try {
          //     const data = await post(
          //       this.fetch,
          //       `${this.url}/metadata/${id}`,
          //       { ...meta },
          //       { headers: this.headers }
          //     )
          //     return { data, error: null }
          //   } catch (error) {
          //     if (isStorageError(error)) {
          //       return { data: null, error }
          //     }
          //     throw error
          //   }
          // }
          /**
           * Lists all the files within a bucket.
           * @param path The folder path.
           */ list(path, options, parameters) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                  prefix: path || '',
                });
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  body,
                  {
                    headers: this.headers,
                  },
                  parameters,
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          encodeMetadata(metadata) {
            return JSON.stringify(metadata);
          }
          toBase64(data) {
            if (typeof Buffer !== 'undefined') {
              return Buffer.from(data).toString('base64');
            }
            return btoa(data);
          }
          _getFinalPath(path) {
            return `${this.bucketId}/${path}`;
          }
          _removeEmptyFolders(path) {
            return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
          }
          transformOptsToQueryString(transform) {
            const params = [];
            if (transform.width) {
              params.push(`width=${transform.width}`);
            }
            if (transform.height) {
              params.push(`height=${transform.height}`);
            }
            if (transform.resize) {
              params.push(`resize=${transform.resize}`);
            }
            if (transform.format) {
              params.push(`format=${transform.format}`);
            }
            if (transform.quality) {
              params.push(`quality=${transform.quality}`);
            }
            return params.join('&');
          }
        } //# sourceMappingURL=StorageFileApi.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // generated by genversion
        __turbopack_esm__({
          version: () => version,
        });
        const version = '2.7.1'; //# sourceMappingURL=version.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          DEFAULT_HEADERS: () => DEFAULT_HEADERS,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-rsc] (ecmascript)',
          );
        const DEFAULT_HEADERS = {
          'X-Client-Info': `storage-js/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['version']}`,
        }; //# sourceMappingURL=constants.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => StorageBucketApi,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)',
          );
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          };
        class StorageBucketApi {
          constructor(url, headers = {}, fetch) {
            this.url = url;
            this.headers = Object.assign(
              Object.assign(
                {},
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'DEFAULT_HEADERS'
                ],
              ),
              headers,
            );
            this.fetch = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'resolveFetch'
            ])(fetch);
          }
          /**
           * Retrieves the details of all Storage buckets within an existing project.
           */ listBuckets() {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'get'
                ])(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                });
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Retrieves the details of an existing Storage bucket.
           *
           * @param id The unique identifier of the bucket you would like to retrieve.
           */ getBucket(id) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'get'
                ])(this.fetch, `${this.url}/bucket/${id}`, {
                  headers: this.headers,
                });
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Creates a new Storage bucket
           *
           * @param id A unique identifier for the bucket you are creating.
           * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
           * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
           * The global file size limit takes precedence over this value.
           * The default value is null, which doesn't set a per bucket file size limit.
           * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
           * The default value is null, which allows files with all mime types to be uploaded.
           * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
           * @returns newly created bucket id
           */ createBucket(
            id,
            options = {
              public: false,
            },
          ) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes,
                  },
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Updates a Storage bucket
           *
           * @param id A unique identifier for the bucket you are updating.
           * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
           * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
           * The global file size limit takes precedence over this value.
           * The default value is null, which doesn't set a per bucket file size limit.
           * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
           * The default value is null, which allows files with all mime types to be uploaded.
           * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
           */ updateBucket(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'put'
                ])(
                  this.fetch,
                  `${this.url}/bucket/${id}`,
                  {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes,
                  },
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Removes all objects inside a single bucket.
           *
           * @param id The unique identifier of the bucket you would like to empty.
           */ emptyBucket(id) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'post'
                ])(
                  this.fetch,
                  `${this.url}/bucket/${id}/empty`,
                  {},
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
          /**
           * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
           * You must first `empty()` the bucket.
           *
           * @param id The unique identifier of the bucket you would like to delete.
           */ deleteBucket(id) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const data = yield (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'remove'
                ])(
                  this.fetch,
                  `${this.url}/bucket/${id}`,
                  {},
                  {
                    headers: this.headers,
                  },
                );
                return {
                  data,
                  error: null,
                };
              } catch (error) {
                if (
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isStorageError'
                  ])(error)
                ) {
                  return {
                    data: null,
                    error,
                  };
                }
                throw error;
              }
            });
          }
        } //# sourceMappingURL=StorageBucketApi.js.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          StorageClient: () => StorageClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+storage-js@2.7.1/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-rsc] (ecmascript)',
          );
        class StorageClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ] {
          constructor(url, headers = {}, fetch) {
            super(url, headers, fetch);
          }
          /**
           * Perform file operation in a bucket.
           *
           * @param id The bucket id to operate on.
           */ from(id) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$7$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ](this.url, this.headers, id, this.fetch);
          }
        } //# sourceMappingURL=StorageClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          getType: () => getType,
          isAnyObject: () => isAnyObject,
          isArray: () => isArray,
          isBlob: () => isBlob,
          isBoolean: () => isBoolean,
          isDate: () => isDate,
          isEmptyArray: () => isEmptyArray,
          isEmptyObject: () => isEmptyObject,
          isEmptyString: () => isEmptyString,
          isError: () => isError,
          isFile: () => isFile,
          isFullArray: () => isFullArray,
          isFullObject: () => isFullObject,
          isFullString: () => isFullString,
          isFunction: () => isFunction,
          isInstanceOf: () => isInstanceOf,
          isMap: () => isMap,
          isNaNValue: () => isNaNValue,
          isNegativeNumber: () => isNegativeNumber,
          isNull: () => isNull,
          isNullOrUndefined: () => isNullOrUndefined,
          isNumber: () => isNumber,
          isObject: () => isObject,
          isObjectLike: () => isObjectLike,
          isOneOf: () => isOneOf,
          isPlainObject: () => isPlainObject,
          isPositiveNumber: () => isPositiveNumber,
          isPrimitive: () => isPrimitive,
          isPromise: () => isPromise,
          isRegExp: () => isRegExp,
          isSet: () => isSet,
          isString: () => isString,
          isSymbol: () => isSymbol,
          isType: () => isType,
          isUndefined: () => isUndefined,
          isWeakMap: () => isWeakMap,
          isWeakSet: () => isWeakSet,
        });
        function getType(payload) {
          return Object.prototype.toString.call(payload).slice(8, -1);
        }
        function isAnyObject(payload) {
          return getType(payload) === 'Object';
        }
        function isArray(payload) {
          return getType(payload) === 'Array';
        }
        function isBlob(payload) {
          return getType(payload) === 'Blob';
        }
        function isBoolean(payload) {
          return getType(payload) === 'Boolean';
        }
        function isDate(payload) {
          return getType(payload) === 'Date' && !isNaN(payload);
        }
        function isEmptyArray(payload) {
          return isArray(payload) && payload.length === 0;
        }
        function isPlainObject(payload) {
          if (getType(payload) !== 'Object') return false;
          const prototype = Object.getPrototypeOf(payload);
          return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
        }
        function isEmptyObject(payload) {
          return isPlainObject(payload) && Object.keys(payload).length === 0;
        }
        function isEmptyString(payload) {
          return payload === '';
        }
        function isError(payload) {
          return getType(payload) === 'Error' || payload instanceof Error;
        }
        function isFile(payload) {
          return getType(payload) === 'File';
        }
        function isFullArray(payload) {
          return isArray(payload) && payload.length > 0;
        }
        function isFullObject(payload) {
          return isPlainObject(payload) && Object.keys(payload).length > 0;
        }
        function isString(payload) {
          return getType(payload) === 'String';
        }
        function isFullString(payload) {
          return isString(payload) && payload !== '';
        }
        function isFunction(payload) {
          return typeof payload === 'function';
        }
        function isType(payload, type) {
          if (!(type instanceof Function)) {
            throw new TypeError('Type must be a function');
          }
          if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
            throw new TypeError('Type is not a class');
          }
          const name = type.name;
          return getType(payload) === name || Boolean(payload && payload.constructor === type);
        }
        function isInstanceOf(value, classOrClassName) {
          if (typeof classOrClassName === 'function') {
            for (let p = value; p; p = Object.getPrototypeOf(p)) {
              if (isType(p, classOrClassName)) {
                return true;
              }
            }
            return false;
          } else {
            for (let p = value; p; p = Object.getPrototypeOf(p)) {
              if (getType(p) === classOrClassName) {
                return true;
              }
            }
            return false;
          }
        }
        function isMap(payload) {
          return getType(payload) === 'Map';
        }
        function isNaNValue(payload) {
          return getType(payload) === 'Number' && isNaN(payload);
        }
        function isNumber(payload) {
          return getType(payload) === 'Number' && !isNaN(payload);
        }
        function isNegativeNumber(payload) {
          return isNumber(payload) && payload < 0;
        }
        function isNull(payload) {
          return getType(payload) === 'Null';
        }
        function isOneOf(a, b, c, d, e) {
          return value => a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
        }
        function isUndefined(payload) {
          return getType(payload) === 'Undefined';
        }
        const isNullOrUndefined = isOneOf(isNull, isUndefined);
        function isObject(payload) {
          return isPlainObject(payload);
        }
        function isObjectLike(payload) {
          return isAnyObject(payload);
        }
        function isPositiveNumber(payload) {
          return isNumber(payload) && payload > 0;
        }
        function isSymbol(payload) {
          return getType(payload) === 'Symbol';
        }
        function isPrimitive(payload) {
          return (
            isBoolean(payload) ||
            isNull(payload) ||
            isUndefined(payload) ||
            isNumber(payload) ||
            isString(payload) ||
            isSymbol(payload)
          );
        }
        function isPromise(payload) {
          return getType(payload) === 'Promise';
        }
        function isRegExp(payload) {
          return getType(payload) === 'RegExp';
        }
        function isSet(payload) {
          return getType(payload) === 'Set';
        }
        function isWeakMap(payload) {
          return getType(payload) === 'WeakMap';
        }
        function isWeakSet(payload) {
          return getType(payload) === 'WeakSet';
        }
      }
    },
  '[project]/node_modules/.pnpm/merge-anything@5.1.7/node_modules/merge-anything/dist/index.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          concatArrays: () => concatArrays,
          merge: () => merge,
          mergeAndCompare: () => mergeAndCompare,
          mergeAndConcat: () => mergeAndConcat,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js [app-rsc] (ecmascript)',
          );
        function concatArrays(originVal, newVal) {
          if (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isArray'
            ])(originVal) &&
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isArray'
            ])(newVal)
          ) {
            return originVal.concat(newVal);
          }
          return newVal;
        }
        function assignProp(carry, key, newVal, originalObject) {
          const propType = {}.propertyIsEnumerable.call(originalObject, key) ? 'enumerable' : 'nonenumerable';
          if (propType === 'enumerable') carry[key] = newVal;
          if (propType === 'nonenumerable') {
            Object.defineProperty(carry, key, {
              value: newVal,
              enumerable: false,
              writable: true,
              configurable: true,
            });
          }
        }
        function mergeRecursively(origin, newComer, compareFn) {
          if (
            !(0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isPlainObject'
            ])(newComer)
          )
            return newComer;
          let newObject = {};
          if (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isPlainObject'
            ])(origin)
          ) {
            const props2 = Object.getOwnPropertyNames(origin);
            const symbols2 = Object.getOwnPropertySymbols(origin);
            newObject = [...props2, ...symbols2].reduce((carry, key) => {
              const targetVal = origin[key];
              if (
                (!(0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isSymbol'
                ])(key) &&
                  !Object.getOwnPropertyNames(newComer).includes(key)) ||
                ((0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isSymbol'
                ])(key) &&
                  !Object.getOwnPropertySymbols(newComer).includes(key))
              ) {
                assignProp(carry, key, targetVal, origin);
              }
              return carry;
            }, {});
          }
          const props = Object.getOwnPropertyNames(newComer);
          const symbols = Object.getOwnPropertySymbols(newComer);
          const result = [...props, ...symbols].reduce((carry, key) => {
            let newVal = newComer[key];
            const targetVal = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isPlainObject'
            ])(origin)
              ? origin[key]
              : void 0;
            if (
              targetVal !== void 0 &&
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPlainObject'
              ])(newVal)
            ) {
              newVal = mergeRecursively(targetVal, newVal, compareFn);
            }
            const propToAssign = compareFn ? compareFn(targetVal, newVal, key) : newVal;
            assignProp(carry, key, propToAssign, newComer);
            return carry;
          }, newObject);
          return result;
        }
        function merge(object, ...otherObjects) {
          return otherObjects.reduce((result, newComer) => {
            return mergeRecursively(result, newComer);
          }, object);
        }
        function mergeAndCompare(compareFn, object, ...otherObjects) {
          return otherObjects.reduce((result, newComer) => {
            return mergeRecursively(result, newComer, compareFn);
          }, object);
        }
        function mergeAndConcat(object, ...otherObjects) {
          return otherObjects.reduce((result, newComer) => {
            return mergeRecursively(result, newComer, concatArrays);
          }, object);
        }
      }
    },
  '[project]/node_modules/.pnpm/flat@6.0.1/node_modules/flat/index.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          flatten: () => flatten,
          unflatten: () => unflatten,
        });
        function isBuffer(obj) {
          return (
            obj && obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
          );
        }
        function keyIdentity(key) {
          return key;
        }
        function flatten(target, opts) {
          opts = opts || {};
          const delimiter = opts.delimiter || '.';
          const maxDepth = opts.maxDepth;
          const transformKey = opts.transformKey || keyIdentity;
          const output = {};
          function step(object, prev, currentDepth) {
            currentDepth = currentDepth || 1;
            Object.keys(object).forEach(function (key) {
              const value = object[key];
              const isarray = opts.safe && Array.isArray(value);
              const type = Object.prototype.toString.call(value);
              const isbuffer = isBuffer(value);
              const isobject = type === '[object Object]' || type === '[object Array]';
              const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
              if (
                !isarray &&
                !isbuffer &&
                isobject &&
                Object.keys(value).length &&
                (!opts.maxDepth || currentDepth < maxDepth)
              ) {
                return step(value, newKey, currentDepth + 1);
              }
              output[newKey] = value;
            });
          }
          step(target);
          return output;
        }
        function unflatten(target, opts) {
          opts = opts || {};
          const delimiter = opts.delimiter || '.';
          const overwrite = opts.overwrite || false;
          const transformKey = opts.transformKey || keyIdentity;
          const result = {};
          const isbuffer = isBuffer(target);
          if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
            return target;
          }
          // safely ensure that the key is
          // an integer.
          function getkey(key) {
            const parsedKey = Number(key);
            return isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object ? key : parsedKey;
          }
          function addKeys(keyPrefix, recipient, target) {
            return Object.keys(target).reduce(function (result, key) {
              result[keyPrefix + delimiter + key] = target[key];
              return result;
            }, recipient);
          }
          function isEmpty(val) {
            const type = Object.prototype.toString.call(val);
            const isArray = type === '[object Array]';
            const isObject = type === '[object Object]';
            if (!val) {
              return true;
            } else if (isArray) {
              return !val.length;
            } else if (isObject) {
              return !Object.keys(val).length;
            }
          }
          target = Object.keys(target).reduce(function (result, key) {
            const type = Object.prototype.toString.call(target[key]);
            const isObject = type === '[object Object]' || type === '[object Array]';
            if (!isObject || isEmpty(target[key])) {
              result[key] = target[key];
              return result;
            } else {
              return addKeys(key, result, flatten(target[key], opts));
            }
          }, {});
          Object.keys(target).forEach(function (key) {
            const split = key.split(delimiter).map(transformKey);
            let key1 = getkey(split.shift());
            let key2 = getkey(split[0]);
            let recipient = result;
            while (key2 !== undefined) {
              if (key1 === '__proto__') {
                return;
              }
              const type = Object.prototype.toString.call(recipient[key1]);
              const isobject = type === '[object Object]' || type === '[object Array]';
              // do not write over falsey, non-undefined values if overwrite is false
              if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
                return;
              }
              if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
                recipient[key1] = typeof key2 === 'number' && !opts.object ? [] : {};
              }
              recipient = recipient[key1];
              if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
              }
            }
            // unflatten again for 'messy objects'
            recipient[key1] = unflatten(target[key], opts);
          });
          return result;
        }
      }
    },
  '[project]/node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/dist/esm/index.mjs [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          circularDeepEqual: () => circularDeepEqual,
          circularShallowEqual: () => circularShallowEqual,
          createCustomEqual: () => createCustomEqual,
          deepEqual: () => deepEqual,
          sameValueZeroEqual: () => sameValueZeroEqual,
          shallowEqual: () => shallowEqual,
          strictCircularDeepEqual: () => strictCircularDeepEqual,
          strictCircularShallowEqual: () => strictCircularShallowEqual,
          strictDeepEqual: () => strictDeepEqual,
          strictShallowEqual: () => strictShallowEqual,
        });
        var getOwnPropertyNames = Object.getOwnPropertyNames,
          getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        /**
         * Combine two comparators into a single comparators.
         */ function combineComparators(comparatorA, comparatorB) {
          return function isEqual(a, b, state) {
            return comparatorA(a, b, state) && comparatorB(a, b, state);
          };
        }
        /**
         * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
         * for circular references to be safely included in the comparison without creating
         * stack overflows.
         */ function createIsCircular(areItemsEqual) {
          return function isCircular(a, b, state) {
            if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
              return areItemsEqual(a, b, state);
            }
            var cache = state.cache;
            var cachedA = cache.get(a);
            var cachedB = cache.get(b);
            if (cachedA && cachedB) {
              return cachedA === b && cachedB === a;
            }
            cache.set(a, b);
            cache.set(b, a);
            var result = areItemsEqual(a, b, state);
            cache.delete(a);
            cache.delete(b);
            return result;
          };
        }
        /**
         * Get the properties to strictly examine, which include both own properties that are
         * not enumerable and symbol properties.
         */ function getStrictProperties(object) {
          return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
        }
        /**
         * Whether the object contains the property passed as an own property.
         */ var hasOwn =
          Object.hasOwn ||
          function (object, property) {
            return hasOwnProperty.call(object, property);
          };
        /**
         * Whether the values passed are strictly equal or both NaN.
         */ function sameValueZeroEqual(a, b) {
          return a || b ? a === b : a === b || (a !== a && b !== b);
        }
        var OWNER = '_owner';
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
          keys = Object.keys;
        /**
         * Whether the arrays are equal in value.
         */ function areArraysEqual(a, b, state) {
          var index = a.length;
          if (b.length !== index) {
            return false;
          }
          while (index-- > 0) {
            if (!state.equals(a[index], b[index], index, index, a, b, state)) {
              return false;
            }
          }
          return true;
        }
        /**
         * Whether the dates passed are equal in value.
         */ function areDatesEqual(a, b) {
          return sameValueZeroEqual(a.getTime(), b.getTime());
        }
        /**
         * Whether the `Map`s are equal in value.
         */ function areMapsEqual(a, b, state) {
          if (a.size !== b.size) {
            return false;
          }
          var matchedIndices = {};
          var aIterable = a.entries();
          var index = 0;
          var aResult;
          var bResult;
          while ((aResult = aIterable.next())) {
            if (aResult.done) {
              break;
            }
            var bIterable = b.entries();
            var hasMatch = false;
            var matchIndex = 0;
            while ((bResult = bIterable.next())) {
              if (bResult.done) {
                break;
              }
              var _a = aResult.value,
                aKey = _a[0],
                aValue = _a[1];
              var _b = bResult.value,
                bKey = _b[0],
                bValue = _b[1];
              if (
                !hasMatch &&
                !matchedIndices[matchIndex] &&
                (hasMatch =
                  state.equals(aKey, bKey, index, matchIndex, a, b, state) &&
                  state.equals(aValue, bValue, aKey, bKey, a, b, state))
              ) {
                matchedIndices[matchIndex] = true;
              }
              matchIndex++;
            }
            if (!hasMatch) {
              return false;
            }
            index++;
          }
          return true;
        }
        /**
         * Whether the objects are equal in value.
         */ function areObjectsEqual(a, b, state) {
          var properties = keys(a);
          var index = properties.length;
          if (keys(b).length !== index) {
            return false;
          }
          var property;
          // Decrementing `while` showed faster results than either incrementing or
          // decrementing `for` loop and than an incrementing `while` loop. Declarative
          // methods like `some` / `every` were not used to avoid incurring the garbage
          // cost of anonymous callbacks.
          while (index-- > 0) {
            property = properties[index];
            if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
              return false;
            }
            if (!hasOwn(b, property) || !state.equals(a[property], b[property], property, property, a, b, state)) {
              return false;
            }
          }
          return true;
        }
        /**
         * Whether the objects are equal in value with strict property checking.
         */ function areObjectsEqualStrict(a, b, state) {
          var properties = getStrictProperties(a);
          var index = properties.length;
          if (getStrictProperties(b).length !== index) {
            return false;
          }
          var property;
          var descriptorA;
          var descriptorB;
          // Decrementing `while` showed faster results than either incrementing or
          // decrementing `for` loop and than an incrementing `while` loop. Declarative
          // methods like `some` / `every` were not used to avoid incurring the garbage
          // cost of anonymous callbacks.
          while (index-- > 0) {
            property = properties[index];
            if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
              return false;
            }
            if (!hasOwn(b, property)) {
              return false;
            }
            if (!state.equals(a[property], b[property], property, property, a, b, state)) {
              return false;
            }
            descriptorA = getOwnPropertyDescriptor(a, property);
            descriptorB = getOwnPropertyDescriptor(b, property);
            if (
              (descriptorA || descriptorB) &&
              (!descriptorA ||
                !descriptorB ||
                descriptorA.configurable !== descriptorB.configurable ||
                descriptorA.enumerable !== descriptorB.enumerable ||
                descriptorA.writable !== descriptorB.writable)
            ) {
              return false;
            }
          }
          return true;
        }
        /**
         * Whether the primitive wrappers passed are equal in value.
         */ function arePrimitiveWrappersEqual(a, b) {
          return sameValueZeroEqual(a.valueOf(), b.valueOf());
        }
        /**
         * Whether the regexps passed are equal in value.
         */ function areRegExpsEqual(a, b) {
          return a.source === b.source && a.flags === b.flags;
        }
        /**
         * Whether the `Set`s are equal in value.
         */ function areSetsEqual(a, b, state) {
          if (a.size !== b.size) {
            return false;
          }
          var matchedIndices = {};
          var aIterable = a.values();
          var aResult;
          var bResult;
          while ((aResult = aIterable.next())) {
            if (aResult.done) {
              break;
            }
            var bIterable = b.values();
            var hasMatch = false;
            var matchIndex = 0;
            while ((bResult = bIterable.next())) {
              if (bResult.done) {
                break;
              }
              if (
                !hasMatch &&
                !matchedIndices[matchIndex] &&
                (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state))
              ) {
                matchedIndices[matchIndex] = true;
              }
              matchIndex++;
            }
            if (!hasMatch) {
              return false;
            }
          }
          return true;
        }
        /**
         * Whether the TypedArray instances are equal in value.
         */ function areTypedArraysEqual(a, b) {
          var index = a.length;
          if (b.length !== index) {
            return false;
          }
          while (index-- > 0) {
            if (a[index] !== b[index]) {
              return false;
            }
          }
          return true;
        }
        var ARGUMENTS_TAG = '[object Arguments]';
        var BOOLEAN_TAG = '[object Boolean]';
        var DATE_TAG = '[object Date]';
        var MAP_TAG = '[object Map]';
        var NUMBER_TAG = '[object Number]';
        var OBJECT_TAG = '[object Object]';
        var REG_EXP_TAG = '[object RegExp]';
        var SET_TAG = '[object Set]';
        var STRING_TAG = '[object String]';
        var isArray = Array.isArray;
        var isTypedArray = typeof ArrayBuffer === 'function' && ArrayBuffer.isView ? ArrayBuffer.isView : null;
        var assign = Object.assign;
        var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
        /**
         * Create a comparator method based on the type-specific equality comparators passed.
         */ function createEqualityComparator(_a) {
          var areArraysEqual = _a.areArraysEqual,
            areDatesEqual = _a.areDatesEqual,
            areMapsEqual = _a.areMapsEqual,
            areObjectsEqual = _a.areObjectsEqual,
            arePrimitiveWrappersEqual = _a.arePrimitiveWrappersEqual,
            areRegExpsEqual = _a.areRegExpsEqual,
            areSetsEqual = _a.areSetsEqual,
            areTypedArraysEqual = _a.areTypedArraysEqual;
          /**
           * compare the value of the two objects and return true if they are equivalent in values
           */ return function comparator(a, b, state) {
            // If the items are strictly equal, no need to do a value comparison.
            if (a === b) {
              return true;
            }
            // If the items are not non-nullish objects, then the only possibility
            // of them being equal but not strictly is if they are both `NaN`. Since
            // `NaN` is uniquely not equal to itself, we can use self-comparison of
            // both objects, which is faster than `isNaN()`.
            if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
              return a !== a && b !== b;
            }
            var constructor = a.constructor;
            // Checks are listed in order of commonality of use-case:
            //   1. Common complex object types (plain object, array)
            //   2. Common data values (date, regexp)
            //   3. Less-common complex object types (map, set)
            //   4. Less-common data values (promise, primitive wrappers)
            // Inherently this is both subjective and assumptive, however
            // when reviewing comparable libraries in the wild this order
            // appears to be generally consistent.
            // Constructors should match, otherwise there is potential for false positives
            // between class and subclass or custom object and POJO.
            if (constructor !== b.constructor) {
              return false;
            }
            // `isPlainObject` only checks against the object's own realm. Cross-realm
            // comparisons are rare, and will be handled in the ultimate fallback, so
            // we can avoid capturing the string tag.
            if (constructor === Object) {
              return areObjectsEqual(a, b, state);
            }
            // `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
            // the string tag or doing an `instanceof` check.
            if (isArray(a)) {
              return areArraysEqual(a, b, state);
            }
            // `isTypedArray()` works on all possible TypedArray classes, so we can avoid
            // capturing the string tag or comparing against all possible constructors.
            if (isTypedArray != null && isTypedArray(a)) {
              return areTypedArraysEqual(a, b, state);
            }
            // Try to fast-path equality checks for other complex object types in the
            // same realm to avoid capturing the string tag. Strict equality is used
            // instead of `instanceof` because it is more performant for the common
            // use-case. If someone is subclassing a native class, it will be handled
            // with the string tag comparison.
            if (constructor === Date) {
              return areDatesEqual(a, b, state);
            }
            if (constructor === RegExp) {
              return areRegExpsEqual(a, b, state);
            }
            if (constructor === Map) {
              return areMapsEqual(a, b, state);
            }
            if (constructor === Set) {
              return areSetsEqual(a, b, state);
            }
            // Since this is a custom object, capture the string tag to determing its type.
            // This is reasonably performant in modern environments like v8 and SpiderMonkey.
            var tag = getTag(a);
            if (tag === DATE_TAG) {
              return areDatesEqual(a, b, state);
            }
            if (tag === REG_EXP_TAG) {
              return areRegExpsEqual(a, b, state);
            }
            if (tag === MAP_TAG) {
              return areMapsEqual(a, b, state);
            }
            if (tag === SET_TAG) {
              return areSetsEqual(a, b, state);
            }
            if (tag === OBJECT_TAG) {
              // The exception for value comparison is custom `Promise`-like class instances. These should
              // be treated the same as standard `Promise` objects, which means strict equality, and if
              // it reaches this point then that strict equality comparison has already failed.
              return typeof a.then !== 'function' && typeof b.then !== 'function' && areObjectsEqual(a, b, state);
            }
            // If an arguments tag, it should be treated as a standard object.
            if (tag === ARGUMENTS_TAG) {
              return areObjectsEqual(a, b, state);
            }
            // As the penultimate fallback, check if the values passed are primitive wrappers. This
            // is very rare in modern JS, which is why it is deprioritized compared to all other object
            // types.
            if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
              return arePrimitiveWrappersEqual(a, b, state);
            }
            // If not matching any tags that require a specific type of comparison, then we hard-code false because
            // the only thing remaining is strict equality, which has already been compared. This is for a few reasons:
            //   - Certain types that cannot be introspected (e.g., `WeakMap`). For these types, this is the only
            //     comparison that can be made.
            //   - For types that can be introspected, but rarely have requirements to be compared
            //     (`ArrayBuffer`, `DataView`, etc.), the cost is avoided to prioritize the common
            //     use-cases (may be included in a future release, if requested enough).
            //   - For types that can be introspected but do not have an objective definition of what
            //     equality is (`Error`, etc.), the subjective decision is to be conservative and strictly compare.
            // In all cases, these decisions should be reevaluated based on changes to the language and
            // common development practices.
            return false;
          };
        }
        /**
         * Create the configuration object used for building comparators.
         */ function createEqualityComparatorConfig(_a) {
          var circular = _a.circular,
            createCustomConfig = _a.createCustomConfig,
            strict = _a.strict;
          var config = {
            areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
            areDatesEqual: areDatesEqual,
            areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
            areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
            arePrimitiveWrappersEqual: arePrimitiveWrappersEqual,
            areRegExpsEqual: areRegExpsEqual,
            areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
            areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual,
          };
          if (createCustomConfig) {
            config = assign({}, config, createCustomConfig(config));
          }
          if (circular) {
            var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
            var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
            var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
            var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
            config = assign({}, config, {
              areArraysEqual: areArraysEqual$1,
              areMapsEqual: areMapsEqual$1,
              areObjectsEqual: areObjectsEqual$1,
              areSetsEqual: areSetsEqual$1,
            });
          }
          return config;
        }
        /**
         * Default equality comparator pass-through, used as the standard `isEqual` creator for
         * use inside the built comparator.
         */ function createInternalEqualityComparator(compare) {
          return function (a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
            return compare(a, b, state);
          };
        }
        /**
         * Create the `isEqual` function used by the consuming application.
         */ function createIsEqual(_a) {
          var circular = _a.circular,
            comparator = _a.comparator,
            createState = _a.createState,
            equals = _a.equals,
            strict = _a.strict;
          if (createState) {
            return function isEqual(a, b) {
              var _a = createState(),
                _b = _a.cache,
                cache = _b === void 0 ? (circular ? new WeakMap() : undefined) : _b,
                meta = _a.meta;
              return comparator(a, b, {
                cache: cache,
                equals: equals,
                meta: meta,
                strict: strict,
              });
            };
          }
          if (circular) {
            return function isEqual(a, b) {
              return comparator(a, b, {
                cache: new WeakMap(),
                equals: equals,
                meta: undefined,
                strict: strict,
              });
            };
          }
          var state = {
            cache: undefined,
            equals: equals,
            meta: undefined,
            strict: strict,
          };
          return function isEqual(a, b) {
            return comparator(a, b, state);
          };
        }
        /**
         * Whether the items passed are deeply-equal in value.
         */ var deepEqual = createCustomEqual();
        /**
         * Whether the items passed are deeply-equal in value based on strict comparison.
         */ var strictDeepEqual = createCustomEqual({
          strict: true,
        });
        /**
         * Whether the items passed are deeply-equal in value, including circular references.
         */ var circularDeepEqual = createCustomEqual({
          circular: true,
        });
        /**
         * Whether the items passed are deeply-equal in value, including circular references,
         * based on strict comparison.
         */ var strictCircularDeepEqual = createCustomEqual({
          circular: true,
          strict: true,
        });
        /**
         * Whether the items passed are shallowly-equal in value.
         */ var shallowEqual = createCustomEqual({
          createInternalComparator: function () {
            return sameValueZeroEqual;
          },
        });
        /**
         * Whether the items passed are shallowly-equal in value based on strict comparison
         */ var strictShallowEqual = createCustomEqual({
          strict: true,
          createInternalComparator: function () {
            return sameValueZeroEqual;
          },
        });
        /**
         * Whether the items passed are shallowly-equal in value, including circular references.
         */ var circularShallowEqual = createCustomEqual({
          circular: true,
          createInternalComparator: function () {
            return sameValueZeroEqual;
          },
        });
        /**
         * Whether the items passed are shallowly-equal in value, including circular references,
         * based on strict comparison.
         */ var strictCircularShallowEqual = createCustomEqual({
          circular: true,
          createInternalComparator: function () {
            return sameValueZeroEqual;
          },
          strict: true,
        });
        /**
         * Create a custom equality comparison method.
         *
         * This can be done to create very targeted comparisons in extreme hot-path scenarios
         * where the standard methods are not performant enough, but can also be used to provide
         * support for legacy environments that do not support expected features like
         * `RegExp.prototype.flags` out of the box.
         */ function createCustomEqual(options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.circular,
            circular = _a === void 0 ? false : _a,
            createCustomInternalComparator = options.createInternalComparator,
            createState = options.createState,
            _b = options.strict,
            strict = _b === void 0 ? false : _b;
          var config = createEqualityComparatorConfig(options);
          var comparator = createEqualityComparator(config);
          var equals = createCustomInternalComparator
            ? createCustomInternalComparator(comparator)
            : createInternalEqualityComparator(comparator);
          return createIsEqual({
            circular: circular,
            comparator: comparator,
            createState: createState,
            equals: equals,
            strict: strict,
          });
        }
        //# sourceMappingURL=index.mjs.map
      }
    },
  '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-core@0.9.0_@supabase+postgrest-js@1.18.1_@supabase+supabase-js@2.48.1/node_modules/@supabase-cache-helpers/postgrest-core/dist/index.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          PostgrestFilter: () => PostgrestFilter,
          PostgrestParser: () => PostgrestParser,
          PostgrestQueryParser: () => PostgrestQueryParser,
          SUPPORTED_OPERATORS: () => SUPPORTED_OPERATORS,
          buildDeleteFetcher: () => buildDeleteFetcher,
          buildInsertFetcher: () => buildInsertFetcher,
          buildMutationFetcherResponse: () => buildMutationFetcherResponse,
          buildNormalizedQuery: () => buildNormalizedQuery,
          buildUpdateFetcher: () => buildUpdateFetcher,
          buildUpsertFetcher: () => buildUpsertFetcher,
          createCursorPaginationFetcher: () => createCursorPaginationFetcher,
          createOffsetPaginationFetcher: () => createOffsetPaginationFetcher,
          createOffsetPaginationHasMoreFetcher: () => createOffsetPaginationHasMoreFetcher,
          deleteItem: () => deleteItem,
          encodeObject: () => encodeObject,
          fetcher: () => fetcher,
          findFilters: () => findFilters,
          get: () => get,
          getTable: () => getTable,
          isAndFilter: () => isAndFilter,
          isAnyPostgrestResponse: () => isAnyPostgrestResponse,
          isFilterDefinition: () => isFilterDefinition,
          isOrFilter: () => isOrFilter,
          isPostgrestBuilder: () => isPostgrestBuilder,
          isPostgrestHasMorePaginationCacheData: () => isPostgrestHasMorePaginationCacheData,
          isPostgrestHasMorePaginationResponse: () => isPostgrestHasMorePaginationResponse,
          isPostgrestPaginationCacheData: () => isPostgrestPaginationCacheData,
          isPostgrestPaginationResponse: () => isPostgrestPaginationResponse,
          isPostgrestTransformBuilder: () => isPostgrestTransformBuilder,
          mutateItem: () => mutateItem,
          mutateOperation: () => mutateOperation,
          normalizeResponse: () => normalizeResponse,
          offsetPaginationFetcher: () => offsetPaginationFetcher,
          offsetPaginationHasMoreFetcher: () => offsetPaginationHasMoreFetcher,
          parseOrderByKey: () => parseOrderByKey,
          parseValue: () => parseValue,
          setFilterValue: () => setFilterValue,
          upsert: () => upsert,
          upsertItem: () => upsertItem,
        });
        // src/lib/parse-select-param.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xregexp$40$5$2e$1$2e$1$2f$node_modules$2f$xregexp$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/xregexp@5.1.1/node_modules/xregexp/src/index.js [app-rsc] (ecmascript)',
          );
        // src/upsert-item.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$merge$2d$anything$40$5$2e$1$2e$7$2f$node_modules$2f$merge$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/merge-anything@5.1.7/node_modules/merge-anything/dist/index.js [app-rsc] (ecmascript)',
          );
        // src/fetch/build-mutation-fetcher-response.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/flat@6.0.1/node_modules/flat/index.js [app-rsc] (ecmascript)',
          );
        // src/lib/operators.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fast$2d$equals$40$5$2e$0$2e$1$2f$node_modules$2f$fast$2d$equals$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/dist/esm/index.mjs [app-rsc] (ecmascript)',
          );
        var __defProp = Object.defineProperty;
        var __defProps = Object.defineProperties;
        var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = (obj, key, value) =>
          key in obj
            ? __defProp(obj, key, {
                enumerable: true,
                configurable: true,
                writable: true,
                value,
              })
            : (obj[key] = value);
        var __spreadValues = (a, b) => {
          for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b)) {
              if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            }
          return a;
        };
        var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
        var __objRest = (source, exclude) => {
          var target = {};
          for (var prop in source)
            if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
          if (source != null && __getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(source)) {
              if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
            }
          return target;
        };
        var __async = (__this, __arguments, generator) => {
          return new Promise((resolve, reject) => {
            var fulfilled = value => {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = value => {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = x => (x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected));
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        // src/lib/query-types.ts
        var isAndFilter = f => Array.isArray(f.and);
        var isOrFilter = f => Array.isArray(f.or);
        var isFilterDefinition = f => !isAndFilter(f) && !isOrFilter(f);
        // src/lib/extract-paths-from-filter.ts
        var extractPathsFromFilters = (f, p) => {
          return f.reduce((prev, filter) => {
            var _a;
            if (isAndFilter(filter)) {
              prev.push(...extractPathsFromFilters(filter.and, p));
            } else if (isOrFilter(filter)) {
              prev.push(...extractPathsFromFilters(filter.or, p));
            } else if (isFilterDefinition(filter)) {
              const relatedPath = p.find(p2 => p2.path === filter.path);
              const pathElements = filter.path.split('.');
              const aliasElements = (_a = filter.alias) == null ? void 0 : _a.split('.');
              const declaration = pathElements
                .map((el, idx) => `${aliasElements && aliasElements[idx] !== el ? `${aliasElements[idx]}:` : ''}${el}`)
                .join('.');
              prev.push({
                path: filter.path,
                alias: filter.alias,
                declaration: relatedPath ? relatedPath.declaration : declaration,
              });
            }
            return prev;
          }, []);
        };
        // src/lib/remove-first-path-element.ts
        var removeFirstPathElement = p => {
          const aliasWithoutFirstElement = p.alias ? p.alias.split('.').slice(1).join('.') : void 0;
          const pathWithoutFirstEelment = p.path.split('.').slice(1).join('.');
          return {
            declaration: p.declaration.split('.').slice(1).join('.'),
            path: pathWithoutFirstEelment,
            alias:
              aliasWithoutFirstElement &&
              (aliasWithoutFirstElement.split('.').length > 1 || aliasWithoutFirstElement !== pathWithoutFirstEelment)
                ? aliasWithoutFirstElement
                : void 0,
          };
        };
        // src/lib/group-paths-recursive.ts
        var isNestedPath = p => Array.isArray(p.paths);
        var groupPathsRecursive = paths => {
          const grouped = paths.reduce((prev, curr) => {
            const levels = curr.path.split('.').length;
            if (levels === 1) {
              prev.push(curr);
              return prev;
            }
            const firstLevelDeclaration = curr.declaration.split('.')[0];
            const indexOfNested = prev.findIndex(p => isNestedPath(p) && p.declaration === firstLevelDeclaration);
            const pathWithoutCurrentLevel = removeFirstPathElement(curr);
            if (indexOfNested !== -1) {
              prev[indexOfNested].paths.push(pathWithoutCurrentLevel);
              return prev;
            }
            prev.push(
              __spreadValues(
                {
                  declaration: firstLevelDeclaration,
                  path: curr.path.split('.')[0],
                  paths: [pathWithoutCurrentLevel],
                },
                curr.alias
                  ? {
                      alias: curr.alias.split('.')[0],
                    }
                  : {},
              ),
            );
            return prev;
          }, []);
          return grouped.map(p =>
            isNestedPath(p)
              ? __spreadProps(__spreadValues({}, p), {
                  paths: groupPathsRecursive(p.paths),
                })
              : p,
          );
        };
        var parseSelectParam = (s, currentPath) => {
          s = s.replace(/\s/g, '');
          let result;
          try {
            result =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xregexp$40$5$2e$1$2e$1$2f$node_modules$2f$xregexp$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ]
                .matchRecursive(`,${s}`, '([^,\\(]+)\\(', '\\)', 'g', {
                  valueNames: {
                    0: null,
                    1: 'tableName',
                    2: 'selectedColumns',
                    3: null,
                  },
                })
                .map(item => {
                  if (item.name === 'tableName' && item.value && !item.value.startsWith(',')) {
                    item.value = ',' + item.value;
                  }
                  return item;
                });
          } catch (e) {
            const path = (currentPath == null ? void 0 : currentPath.path)
              ? `${currentPath == null ? void 0 : currentPath.declaration} with alias ${currentPath == null ? void 0 : currentPath.alias} at path ${currentPath == null ? void 0 : currentPath.path}`
              : 'root';
            throw new Error(`Unable to parse ${s} at ${path}`, {
              cause: e,
            });
          }
          const foreignTables = result.reduce((prev, curr, idx, matches) => {
            if (curr.name === 'selectedColumns' && curr.value.length > 0) {
              const name = matches[idx - 1].value.slice(1, -1);
              prev = __spreadProps(__spreadValues({}, prev), {
                [name]: curr.value,
              });
            }
            return prev;
          }, {});
          const columns = s
            .replace(
              new RegExp(
                `${Object.entries(foreignTables)
                  .map(([table, selectedColumns]) =>
                    `${table}(${selectedColumns})`.replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\*/g, '\\*'),
                  )
                  .join('|')}`,
                'g',
              ),
              '',
            )
            .replace(/(,)\1+/g, ',')
            .split(',')
            .filter(c => c.length > 0)
            .map(c => {
              var _a;
              const split = c.split(':');
              const hasAlias = split.length > 1;
              const aggregateSplit = split[hasAlias ? 1 : 0].split('.');
              const hasAggregate = aggregateSplit.length > 1 && aggregateSplit[1].endsWith('()');
              return __spreadValues(
                {
                  declaration: [currentPath == null ? void 0 : currentPath.declaration, c].filter(Boolean).join('.'),
                  alias:
                    hasAlias || (currentPath == null ? void 0 : currentPath.alias)
                      ? [
                          (_a = currentPath == null ? void 0 : currentPath.alias) != null
                            ? _a
                            : currentPath == null
                              ? void 0
                              : currentPath.path,
                          split[0],
                        ]
                          .filter(Boolean)
                          .join('.')
                      : void 0,
                  path: [
                    currentPath == null ? void 0 : currentPath.path,
                    hasAggregate ? aggregateSplit[0] : split[hasAlias ? 1 : 0],
                  ]
                    .filter(Boolean)
                    .join('.'),
                },
                hasAggregate
                  ? {
                      aggregate: aggregateSplit[1].slice(0, -2),
                    }
                  : {},
              );
            });
          return [
            ...columns,
            ...Object.entries(foreignTables).flatMap(([currentDeclaration, selectedColumns]) => {
              var _a;
              const aliasSplit = currentDeclaration.split(':');
              const currentAliasElem = aliasSplit.length > 1 ? aliasSplit[0] : void 0;
              const currentPathDeclaration = aliasSplit[aliasSplit.length - 1];
              const currentPathElem = currentPathDeclaration.split('!')[0];
              const path = [currentPath == null ? void 0 : currentPath.path, currentPathElem].filter(Boolean).join('.');
              const alias = [
                (_a = currentPath == null ? void 0 : currentPath.alias) != null
                  ? _a
                  : currentPath == null
                    ? void 0
                    : currentPath.path,
                currentAliasElem != null ? currentAliasElem : currentPathElem,
              ]
                .filter(Boolean)
                .join('.');
              const declaration = [currentPath == null ? void 0 : currentPath.declaration, currentDeclaration]
                .filter(Boolean)
                .join('.');
              return parseSelectParam(`${selectedColumns}`, {
                path,
                alias: (currentPath == null ? void 0 : currentPath.alias) || currentAliasElem ? alias : void 0,
                declaration,
              });
            }),
          ];
        };
        // src/lib/remove-alias-from-declaration.ts
        var removeAliasFromDeclaration = d =>
          d
            .split('.')
            .map(el => el.split(':').pop())
            .join('.');
        // src/fetch/build-select-statement.ts
        var buildSelectStatement = paths => {
          return buildSelectStatementFromGroupedPaths(groupPathsRecursive(paths));
        };
        var buildSelectStatementFromGroupedPaths = paths =>
          paths
            .map(i => {
              if (isNestedPath(i)) {
                return `${i.declaration}(${buildSelectStatement(i.paths)})`;
              }
              return `${i.alias ? `${i.alias}:` : ''}${i.path}`;
            })
            .join(',');
        // src/fetch/dedupe.ts
        var DEDUPE_ALIAS_PREFIX = 'd';
        var dedupeGroupedPathsRecursive = grouped => {
          const dedupeCounters = /* @__PURE__ */ new Map();
          return grouped.map((p, idx, a) => {
            if (!isNestedPath(p)) return p;
            if (a.some((i, itemIdx) => i.path === p.path && idx !== itemIdx)) {
              const counter = dedupeCounters.get(p.path) || 0;
              dedupeCounters.set(p.path, counter + 1);
              const alias = [DEDUPE_ALIAS_PREFIX, counter, p.path].join('_');
              return __spreadProps(__spreadValues({}, p), {
                alias,
                declaration: `${alias}:${p.declaration}`,
                paths: dedupeGroupedPathsRecursive(p.paths),
              });
            }
            return __spreadProps(__spreadValues({}, p), {
              paths: dedupeGroupedPathsRecursive(p.paths),
            });
          });
        };
        // src/fetch/build-normalized-query.ts
        var buildNormalizedQuery = ({ query, disabled, queriesForTable }) => {
          var _a;
          const userQueryPaths = query ? parseSelectParam(query) : null;
          const paths = userQueryPaths
            ? userQueryPaths.map(q => ({
                declaration: removeAliasFromDeclaration(q.declaration),
                path: q.path,
              }))
            : [];
          if (!disabled) {
            for (const tableQuery of queriesForTable()) {
              for (const filterPath of extractPathsFromFilters(tableQuery.filters, tableQuery.paths)) {
                const path =
                  (_a = tableQuery.paths.find(p => p.path === filterPath.path && p.alias === filterPath.alias)) != null
                    ? _a
                    : {
                        path: filterPath.path,
                        declaration: filterPath.path,
                      };
                if (
                  paths.every(
                    p => removeAliasFromDeclaration(p.declaration) !== removeAliasFromDeclaration(path.declaration),
                  )
                ) {
                  paths.push({
                    path: path.path,
                    declaration: removeAliasFromDeclaration(path.declaration),
                  });
                }
              }
              for (const path of tableQuery.paths) {
                if (
                  paths.every(
                    p => removeAliasFromDeclaration(p.declaration) !== removeAliasFromDeclaration(path.declaration),
                  ) && // do not add agg functions
                  !path.declaration.endsWith('.count') && // do not add wildcard queries
                  !path.declaration.endsWith('*')
                ) {
                  paths.push({
                    path: path.path,
                    declaration: removeAliasFromDeclaration(path.declaration),
                  });
                }
              }
            }
          }
          const groupedPaths = groupPathsRecursive(paths);
          const groupedDedupedPaths = dedupeGroupedPathsRecursive(groupedPaths);
          const selectQuery = buildSelectStatementFromGroupedPaths(groupedDedupedPaths);
          if (selectQuery.length === 0) return null;
          return {
            selectQuery,
            groupedUserQueryPaths: userQueryPaths ? groupPathsRecursive(userQueryPaths) : null,
            groupedPaths: groupedDedupedPaths,
          };
        };
        // src/lib/get.ts
        var get = (obj, path, defaultValue = void 0) => {
          const split = path.split(/((?:\.|,|\[|\]|->>|->)+)/g);
          let result = obj;
          for (let i = -1; i < split.length; i += 2) {
            const separator = split[i];
            let key = split[i + 1];
            if (!key) {
              continue;
            }
            if (
              (separator == null ? void 0 : separator.endsWith('->')) ||
              (separator == null ? void 0 : separator.endsWith('->>'))
            ) {
              if (/^\d+$/.test(key)) {
                key = Number.parseInt(key, 10);
              }
            }
            if (separator == null ? void 0 : separator.endsWith('->>')) {
              result = `${result ? result[key] : result}`;
            } else {
              result = result ? result[key] : result;
            }
          }
          return result === void 0 || result === obj ? defaultValue : result;
        };
        // src/lib/is-plain-object.ts
        function isPlainObject(value) {
          return Object.prototype.toString.call(value) === '[object Object]';
        }
        // src/fetch/build-mutation-fetcher-response.ts
        var buildMutationFetcherResponse = (input, { groupedPaths, groupedUserQueryPaths }) => {
          return {
            normalizedData: normalizeResponse(groupedPaths, input),
            userQueryData: groupedUserQueryPaths
              ? buildUserQueryData(groupedUserQueryPaths, groupedPaths, input)
              : void 0,
          };
        };
        var normalizeResponse = (groups, obj) => {
          if (groups.some(p => p.path === '*')) {
            Object.entries(obj).forEach(([k, v]) => {
              if (typeof v === 'object' || Array.isArray(v)) {
                if (!groups.some(g => isNestedPath(g) && g.path === k)) {
                  groups.push({
                    path: k,
                    declaration: k,
                  });
                }
              } else if (!groups.some(g => g.path === k)) {
                groups.push({
                  path: k,
                  declaration: k,
                });
              }
            });
          }
          return groups.reduce((prev, curr) => {
            var _a;
            const value = get(obj, curr.alias || curr.path);
            if (typeof value === 'undefined') return prev;
            if (value === null) {
              return __spreadProps(__spreadValues({}, prev), {
                [curr.path]: value,
              });
            }
            if (!isNestedPath(curr)) {
              return __spreadValues(
                __spreadValues({}, prev),
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'flatten'
                ])({
                  [curr.path]:
                    value !== null && (isPlainObject(value) || (Array.isArray(value) && value.length > 0))
                      ? (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'flatten'
                        ])(value)
                      : value,
                }),
              );
            }
            if (Array.isArray(value)) {
              return __spreadValues(
                __spreadValues({}, prev),
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'flatten'
                ])({
                  [curr.path]: value.map(v => normalizeResponse(curr.paths, v)),
                }),
              );
            }
            return __spreadValues(
              __spreadValues({}, prev),
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'flatten'
              ])({
                // add hint to path if it has dedupe alias
                // can happen if the same relation is queried multiple times via different fkeys
                [`${curr.path}${((_a = curr.alias) == null ? void 0 : _a.startsWith('d_')) && curr.declaration.split('!').length > 1 ? `!${curr.declaration.split('!')[1]}` : ''}`]:
                  normalizeResponse(curr.paths, value),
              }),
            );
          }, {});
        };
        var buildUserQueryData = (userQueryGroups, pathGroups, obj) => {
          if (pathGroups.some(p => p.path === '*')) {
            Object.entries(obj).forEach(([k, v]) => {
              if (typeof v === 'object' || Array.isArray(v)) {
                if (!pathGroups.some(g => isNestedPath(g) && g.path === k)) {
                  pathGroups.push({
                    path: k,
                    declaration: k,
                  });
                }
              } else if (!pathGroups.some(g => g.path === k)) {
                pathGroups.push({
                  path: k,
                  declaration: k,
                });
              }
            });
          }
          if (userQueryGroups.some(p => p.path === '*')) {
            Object.entries(obj).forEach(([k, v]) => {
              if (typeof v === 'object' || Array.isArray(v)) {
                if (!pathGroups.some(g => isNestedPath(g) && g.path === k)) {
                  userQueryGroups.push({
                    path: k,
                    declaration: k,
                  });
                }
              } else if (!userQueryGroups.some(g => g.path === k)) {
                userQueryGroups.push({
                  path: k,
                  declaration: k,
                });
              }
            });
          }
          return userQueryGroups.reduce((prev, curr) => {
            if (curr.path === '*') return prev;
            const inputPath = pathGroups.find(p => p.path === curr.path && isNestedPath(p) === isNestedPath(curr));
            if (!inputPath) {
              throw new Error(`Path ${curr.path} not found in response paths`);
            }
            const value = get(obj, inputPath.alias || inputPath.path);
            if (typeof value === 'undefined') return prev;
            if (value === null || !isNestedPath(curr) || !isNestedPath(inputPath)) {
              prev[curr.alias ? curr.alias : curr.path] = value;
            } else if (Array.isArray(value)) {
              prev[curr.alias ? curr.alias : curr.path] = value.map(v =>
                buildUserQueryData(curr.paths, inputPath.paths, v),
              );
            } else {
              prev[curr.alias ? curr.alias : curr.path] = buildUserQueryData(curr.paths, inputPath.paths, value);
            }
            return prev;
          }, {});
        };
        // src/lib/get-table-from-url.ts
        var getTableFromUrl = url => {
          var _a;
          const split = url.toString().split('/');
          const table = (_a = split.pop()) == null ? void 0 : _a.split('?').shift();
          const maybeRpc = split.pop();
          return [maybeRpc === 'rpc' ? maybeRpc : null, table].filter(Boolean).join('/');
        };
        // src/lib/get-table.ts
        var getTable = query => getTableFromUrl(query['url'].pathname);
        // src/lib/cache-data-types.ts
        var isPostgrestPaginationCacheData = q => {
          if (!Array.isArray(q)) return false;
          return q.length === 0 || Array.isArray(q[0]);
        };
        var isPostgrestHasMorePaginationCacheData = q => {
          if (!Array.isArray(q)) return false;
          if (q.length === 0) return true;
          const firstPage = q[0];
          return Array.isArray(firstPage.data) && typeof firstPage.hasMore === 'boolean';
        };
        // src/lib/response-types.ts
        var isAnyPostgrestResponse = q => {
          if (!q) return false;
          return typeof q.data === 'object' || Array.isArray(q.data);
        };
        var isPostgrestPaginationResponse = q => {
          return Array.isArray(q);
        };
        var isPostgrestHasMorePaginationResponse = q => {
          if (!q) return false;
          return Array.isArray(q.data) && typeof q.hasMore === 'boolean';
        };
        // src/lib/sort-search-param.ts
        var sortSearchParams = params =>
          new URLSearchParams(
            Array.from(params.entries()).sort((a, b) => {
              const x = `${a[0]}${a[1]}`;
              const y = `${b[0]}${b[1]}`;
              return x > y ? 1 : -1;
            }),
          );
        // src/lib/encode-object.ts
        var encodeObject = obj => {
          const sortedEntries = Object.entries(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'flatten'
            ])(obj),
          ).sort(([a], [b]) => a.length - b.length);
          const bodyParams = new URLSearchParams();
          sortedEntries.forEach(([key, value]) => {
            bodyParams.append(key, String(value));
          });
          return sortSearchParams(bodyParams).toString();
        };
        // src/lib/is-postgrest-builder.ts
        var isPostgrestBuilder = q => {
          return typeof q.throwOnError === 'function';
        };
        // src/lib/is-postgrest-transform-builder.ts
        var isPostgrestTransformBuilder = q => {
          return typeof q.abortSignal === 'function';
        };
        // src/lib/set-filter-value.ts
        var setFilterValue = (searchParams, path, op, value) => {
          const filters = searchParams.getAll(path);
          searchParams.delete(path);
          for (const f of filters) {
            if (f.startsWith(`${op}.`)) {
              continue;
            }
            searchParams.append(path, f);
          }
          searchParams.append(path, `${op}.${value}`);
        };
        // src/lib/is-iso-date-string.ts
        var isISODateString = v =>
          typeof v === 'string' &&
          /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(
            v,
          );
        // src/lib/parse-value.ts
        var parseValue = v => {
          if (isISODateString(v)) return new Date(v);
          try {
            return JSON.parse(v);
          } catch (e) {
            return v;
          }
        };
        // src/lib/parse-order-by-key.ts
        var parseOrderByKey = v => {
          return v.split('|').map(orderBy => {
            const [tableDef, orderDef] = orderBy.split(':');
            const [foreignTableOrCol, maybeCol] = tableDef.split('.');
            const [dir, nulls] = orderDef.split('.');
            return {
              ascending: dir === 'asc',
              nullsFirst: nulls === 'nullsFirst',
              foreignTable: maybeCol ? foreignTableOrCol : void 0,
              column: maybeCol ? maybeCol : foreignTableOrCol,
            };
          });
        };
        // src/lib/find-filters.ts
        var findFilters = (f, by) => {
          const filters = [];
          f.forEach(filter => {
            if (isAndFilter(filter)) {
              filters.push(...findFilters(filter.and, by));
            }
            if (isOrFilter(filter)) {
              filters.push(...findFilters(filter.or, by));
            }
            if (isFilterDefinition(filter)) {
              if (
                (typeof by.path === 'undefined' || filter.path === by.path) &&
                (typeof by.alias === 'undefined' || filter.alias === by.alias) &&
                (typeof by.value === 'undefined' || filter.value === by.value) &&
                (typeof by.negate === 'undefined' || filter.negate === by.negate) &&
                (typeof by.operator === 'undefined' || filter.operator === by.operator)
              ) {
                filters.push(filter);
              }
            }
          });
          return filters;
        };
        // src/cursor-pagination-fetcher.ts
        var createCursorPaginationFetcher = (query, decode) => {
          if (!query) return null;
          return args =>
            __async(void 0, null, function* () {
              const { cursor, order } = decode(args);
              if (cursor) {
                setFilterValue(
                  query['url'].searchParams,
                  `${order.foreignTable ? `${order.foreignTable}.` : ''}${order.column}`,
                  order.ascending ? 'gt' : 'lt',
                  cursor,
                );
              }
              const { data } = yield query.throwOnError();
              return data;
            });
        };
        // src/delete-fetcher.ts
        var buildDeleteFetcher = (qb, primaryKeys, opts) => input =>
          __async(void 0, null, function* () {
            let filterBuilder = qb.delete(opts);
            if (primaryKeys.length === 1) {
              const primaryKey = primaryKeys[0];
              filterBuilder.in(
                primaryKey,
                input.map(i => {
                  const v = i[primaryKey];
                  if (!v) {
                    throw new Error(`Missing value for primary key ${primaryKey}`);
                  }
                  return v;
                }),
              );
            } else {
              filterBuilder = filterBuilder.or(
                input
                  .map(
                    i =>
                      `and(${primaryKeys.map(c => {
                        const v = i[c];
                        if (!v) {
                          throw new Error(`Missing value for primary key ${c}`);
                        }
                        return `${c}.eq.${v}`;
                      })})`,
                  )
                  .join(','),
              );
            }
            const primaryKeysData = input.map(i =>
              primaryKeys.reduce((prev, key) => {
                return __spreadProps(__spreadValues({}, prev), {
                  [key]: i[key],
                });
              }, {}),
            );
            const query = buildNormalizedQuery(opts);
            if (query) {
              const { selectQuery, groupedUserQueryPaths, groupedPaths } = query;
              const groupedPathsWithPrimaryKeys = groupedPaths;
              const addKeys = [];
              primaryKeys.forEach(key => {
                if (!groupedPathsWithPrimaryKeys.find(p => p.path === key)) {
                  groupedPathsWithPrimaryKeys.push({
                    declaration: key,
                    path: key,
                  });
                  addKeys.push(key);
                }
              });
              const { data } = yield filterBuilder.select([selectQuery, ...addKeys].join(',')).throwOnError();
              return data.map(d =>
                buildMutationFetcherResponse(d, {
                  groupedPaths: groupedPathsWithPrimaryKeys,
                  groupedUserQueryPaths,
                }),
              );
            }
            yield filterBuilder.throwOnError();
            if (opts.queriesForTable().length > 0) {
              return primaryKeysData.map(pk => ({
                normalizedData: pk,
              }));
            }
            return null;
          });
        // src/mutate/should-revalidate-relation.ts
        var shouldRevalidateRelation = (
          relations,
          { input, getPostgrestFilter, decodedKey: { schema, table, queryKey } },
        ) =>
          Boolean(
            relations.find(
              r =>
                (!r.schema || r.schema === schema) &&
                r.relation === table &&
                typeof input[r.fKeyColumn] !== 'undefined' &&
                getPostgrestFilter(queryKey, {
                  exclusivePaths: [r.relationIdColumn],
                }).applyFilters({
                  [r.relationIdColumn]: input[r.fKeyColumn],
                }),
            ),
          );
        // src/mutate/should-revalidate-table.ts
        var shouldRevalidateTable = (tables, { decodedKey: { schema, table } }) =>
          Boolean(tables.find(t => (!t.schema || t.schema === schema) && t.table === table));
        // src/mutate/transformers.ts
        var toHasMorePaginationCacheData = (a, currentData, chunkSize) => {
          const hasMoreCache = currentData.map(p => p.hasMore);
          return a.reduce((resultArray, item, index) => {
            var _a, _b;
            const chunkIndex = Math.floor(index / chunkSize);
            if (!resultArray[chunkIndex]) {
              let hasMore = hasMoreCache[chunkIndex];
              if (!hasMore) {
                hasMore = hasMoreCache[hasMoreCache.length - 1];
              }
              if (chunkIndex > 0) {
                resultArray[chunkIndex - 1].hasMore = true;
              }
              resultArray[chunkIndex] = {
                data: [],
                hasMore:
                  (_b = (_a = hasMoreCache[chunkIndex]) != null ? _a : hasMoreCache[hasMoreCache.length - 1]) != null
                    ? _b
                    : false,
              };
            }
            resultArray[chunkIndex].data.push(item);
            return resultArray;
          }, []);
        };
        var toPaginationCacheData = (a, chunkSize) => {
          return a.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize);
            if (!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [];
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
          }, []);
        };
        // src/delete-item.ts
        var filterByPks = (input, currentData, primaryKeys) => {
          return currentData.filter(i => primaryKeys.some(pk => i[pk] !== input[pk]));
        };
        var deleteItem = (op, cache) =>
          __async(void 0, null, function* () {
            var _a;
            const {
              revalidateRelations: revalidateRelationsOpt,
              revalidateTables: revalidateTablesOpt,
              schema,
              table,
            } = op;
            const { cacheKeys, decode, getPostgrestFilter, mutate, revalidate } = cache;
            const mutations = [];
            for (const k of cacheKeys) {
              const key = decode(k);
              if (!key) continue;
              const filter = getPostgrestFilter(key.queryKey);
              if (key.schema === schema && key.table === table) {
                if (key.isHead === true) {
                  mutations.push(revalidate(k));
                } else {
                  const transformedInput = filter.denormalize(op.input);
                  if (
                    // For delete, the input has to have a value for all primary keys
                    op.primaryKeys.every(pk => typeof transformedInput[pk] !== 'undefined')
                  ) {
                    const limit = (_a = key.limit) != null ? _a : 1e3;
                    mutations.push(
                      mutate(k, currentData => {
                        if (!currentData) return currentData;
                        if (isPostgrestHasMorePaginationCacheData(currentData)) {
                          return toHasMorePaginationCacheData(
                            filterByPks(
                              transformedInput,
                              currentData.flatMap(p => p.data),
                              op.primaryKeys,
                            ),
                            currentData,
                            limit,
                          );
                        } else if (isPostgrestPaginationCacheData(currentData)) {
                          return toPaginationCacheData(
                            filterByPks(transformedInput, currentData.flat(), op.primaryKeys),
                            limit,
                          );
                        } else if (isAnyPostgrestResponse(currentData)) {
                          const { data } = currentData;
                          if (!Array.isArray(data)) {
                            if (data && op.primaryKeys.some(pk => transformedInput[pk] !== data[pk])) {
                              return currentData;
                            } else {
                              return {
                                data: null,
                              };
                            }
                          }
                          const newData = filterByPks(transformedInput, data, op.primaryKeys);
                          return {
                            data: newData,
                            count: newData.length,
                          };
                        }
                      }),
                    );
                  }
                }
              }
              if (
                revalidateTablesOpt &&
                shouldRevalidateTable(revalidateTablesOpt, {
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
              if (
                revalidateRelationsOpt &&
                shouldRevalidateRelation(revalidateRelationsOpt, {
                  input: op.input,
                  getPostgrestFilter,
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
            }
            yield Promise.all(mutations);
          });
        // src/fetcher.ts
        var fetcher = q =>
          __async(void 0, null, function* () {
            if (isPostgrestBuilder(q)) {
              q = q.throwOnError();
            }
            return yield q;
          });
        // src/insert-fetcher.ts
        function buildInsertFetcher(qb, opts) {
          return input =>
            __async(this, null, function* () {
              const query = buildNormalizedQuery(opts);
              if (query) {
                const { selectQuery, groupedUserQueryPaths, groupedPaths } = query;
                const { data } = yield qb.insert(input, opts).select(selectQuery).throwOnError();
                return data.map(d =>
                  buildMutationFetcherResponse(d, {
                    groupedUserQueryPaths,
                    groupedPaths,
                  }),
                );
              }
              yield qb.insert(input).throwOnError();
              return input.map(d => ({
                normalizedData: d,
              }));
            });
        }
        // src/lib/binary-search.ts
        function binarySearch(arr, el, compare) {
          let m = 0;
          let n = arr.length - 1;
          while (m <= n) {
            const k = (n + m) >> 1;
            const cmp = compare(el, arr[k]);
            if (cmp > 0) {
              m = k + 1;
            } else if (cmp < 0) {
              n = k - 1;
            } else {
              return k;
            }
          }
          return m;
        }
        // src/lib/if-date-get-time.ts
        var ifDateGetTime = v => {
          if (v instanceof Date) return v.getTime();
          if (typeof v === 'string') {
            const t = new Date(v).getTime();
            if (!isNaN(t)) return t;
          }
          return v;
        };
        // src/lib/sorted-comparator.ts
        var buildSortedComparator = orderBy => {
          return (a, b) => {
            for (const { column, ascending, nullsFirst, foreignTable } of orderBy) {
              const aValue = ifDateGetTime(get(a, `${foreignTable ? `${foreignTable}.` : ''}${column}`, null));
              const bValue = ifDateGetTime(get(b, `${foreignTable ? `${foreignTable}.` : ''}${column}`, null));
              if (aValue === bValue) continue;
              if (aValue === null || aValue === void 0) {
                return nullsFirst ? -1 : 1;
              }
              if (bValue === null || bValue === void 0) {
                return nullsFirst ? 1 : -1;
              }
              if (ascending) {
                return aValue < bValue ? -1 : 1;
              }
              return aValue < bValue ? 1 : -1;
            }
            return 0;
          };
        };
        // src/lib/find-index-ordered.ts
        var findIndexOrdered = (input, currentData, orderBy) =>
          binarySearch(currentData, input, buildSortedComparator(orderBy));
        // src/mutate-item.ts
        var mutateOperation = (input, mutate, currentData, primaryKeys, filter, orderBy) => {
          const itemIdx = currentData.findIndex(oldItem => primaryKeys.every(pk => oldItem[pk] === input[pk]));
          if (itemIdx === -1) {
            return currentData;
          }
          let newItemIdx = itemIdx;
          const newItem = mutate(currentData[newItemIdx]);
          currentData.splice(itemIdx, 1);
          if (orderBy && Array.isArray(orderBy) && orderBy.length > 0) {
            newItemIdx = findIndexOrdered(newItem, currentData, orderBy);
          }
          if (newItemIdx === -1) {
            newItemIdx = 0;
          }
          if (filter.apply(newItem)) {
            currentData.splice(newItemIdx, 0, newItem);
          }
          return currentData;
        };
        var mutateItem = (op, cache) =>
          __async(void 0, null, function* () {
            var _a;
            const {
              mutate: mutateInput,
              revalidateRelations: revalidateRelationsOpt,
              revalidateTables: revalidateTablesOpt,
              schema,
              table,
              primaryKeys,
            } = op;
            const { cacheKeys, decode, getPostgrestFilter, mutate, revalidate } = cache;
            const mutations = [];
            for (const k of cacheKeys) {
              const key = decode(k);
              if (!key) continue;
              const filter = getPostgrestFilter(key.queryKey);
              if (key.schema === schema && key.table === table) {
                const transformedInput = filter.denormalize(op.input);
                if (
                  // For mutate, the input has to have a value for all primary keys
                  op.primaryKeys.every(pk => typeof transformedInput[pk] !== 'undefined') && // allow mutate if either the filter does not apply eq filters on any pk
                  (!filter.hasFiltersOnPaths(op.primaryKeys) || // or input matches all pk filters
                    filter.applyFiltersOnPaths(transformedInput, op.primaryKeys))
                ) {
                  const limit = (_a = key.limit) != null ? _a : 1e3;
                  const orderBy = key.orderByKey ? parseOrderByKey(key.orderByKey) : void 0;
                  if (key.isHead === true || filter.hasWildcardPath || filter.hasAggregatePath) {
                    mutations.push(revalidate(k));
                  } else {
                    mutations.push(
                      mutate(k, currentData => {
                        if (!currentData) return currentData;
                        if (isPostgrestHasMorePaginationCacheData(currentData)) {
                          return toHasMorePaginationCacheData(
                            mutateOperation(
                              transformedInput,
                              mutateInput,
                              currentData.flatMap(p => p.data),
                              primaryKeys,
                              filter,
                              orderBy,
                            ),
                            currentData,
                            limit,
                          );
                        } else if (isPostgrestPaginationCacheData(currentData)) {
                          return toPaginationCacheData(
                            mutateOperation(
                              transformedInput,
                              mutateInput,
                              currentData.flat(),
                              primaryKeys,
                              filter,
                              orderBy,
                            ),
                            limit,
                          );
                        } else if (isAnyPostgrestResponse(currentData)) {
                          const { data } = currentData;
                          if (!Array.isArray(data)) {
                            if (data === null) {
                              return {
                                data,
                                count: currentData.count,
                              };
                            }
                            const newData2 = mutateInput(data);
                            return {
                              // Check if the new data is still valid given the key
                              data: filter.apply(newData2) ? newData2 : null,
                              count: currentData.count,
                            };
                          }
                          const newData = mutateOperation(
                            transformedInput,
                            mutateInput, // deep copy data to avoid mutating the original
                            JSON.parse(JSON.stringify(data)),
                            primaryKeys,
                            filter,
                            orderBy,
                          );
                          return {
                            data: newData,
                            count: newData.length,
                          };
                        }
                        return currentData;
                      }),
                    );
                  }
                }
              }
              if (
                revalidateTablesOpt &&
                shouldRevalidateTable(revalidateTablesOpt, {
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
              if (
                revalidateRelationsOpt &&
                shouldRevalidateRelation(revalidateRelationsOpt, {
                  input: op.input,
                  getPostgrestFilter,
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
            }
            yield Promise.all(mutations);
          });
        // src/offset-pagination-fetcher.ts
        var createOffsetPaginationFetcher = (query, decode, pageSize) => {
          if (!query) return null;
          return args =>
            __async(void 0, null, function* () {
              var _a;
              const decodedKey = decode(args);
              const limit = (decodedKey.limit ? decodedKey.limit - 1 : pageSize) - 1;
              const offset = (_a = decodedKey.offset) != null ? _a : 0;
              return yield offsetPaginationFetcher(query, {
                limit,
                offset,
              });
            });
        };
        var offsetPaginationFetcher = (_0, _1) =>
          __async(void 0, [_0, _1], function* (query, { limit, offset }) {
            const { data } = yield query.range(offset, offset + limit).throwOnError();
            return data;
          });
        var createOffsetPaginationHasMoreFetcher = (query, decode, pageSize) => {
          if (!query) return null;
          return args =>
            __async(void 0, null, function* () {
              var _a;
              const decodedKey = decode(args);
              const limit = decodedKey.limit ? decodedKey.limit - 1 : pageSize;
              const offset = (_a = decodedKey.offset) != null ? _a : 0;
              return yield offsetPaginationHasMoreFetcher(query, {
                limit,
                offset,
                pageSize,
              });
            });
        };
        var offsetPaginationHasMoreFetcher = (_0, _1) =>
          __async(void 0, [_0, _1], function* (query, { limit, offset, pageSize }) {
            const { data } = yield query.range(offset, offset + limit).throwOnError();
            let hasMore = false;
            if (data && data.length === pageSize + 1) {
              hasMore = true;
              data.pop();
            }
            return {
              // cannot be null because of .throwOnError()
              data,
              hasMore,
            };
          });
        var denormalize = (paths, obj) => {
          const groups = groupPathsRecursive(paths);
          if (groups.some(g => g.path === '*')) {
            Object.keys(obj).forEach(k => {
              const keyParts = k.split('.');
              if (keyParts.length > 1 && groups.some(g => isNestedPath(g) && g.path === keyParts[0])) {
                return;
              }
              if (groups.some(g => g.path === keyParts[0])) {
                return;
              }
              groups.push({
                declaration: keyParts[0],
                path: keyParts[0],
              });
            });
          }
          return groups.reduce((prev, curr) => {
            if (curr.path === '*') return prev;
            let value = obj[curr.path];
            if (!isNestedPath(curr)) {
              if (typeof value === 'undefined') {
                const array = Object.entries(obj).reduce((prev2, [k, v]) => {
                  if (new RegExp(`^${curr.path}.\\d+$`).test(k)) {
                    prev2.push(v);
                  }
                  return prev2;
                }, []);
                if (array.length > 0) {
                  value = array;
                }
              }
              if (typeof value === 'undefined') {
                let isArray2 = false;
                const jsonValue = Object.entries(obj).reduce((prev2, [k, v]) => {
                  if (k.startsWith(`${curr.path}.`)) {
                    const key = k.slice(curr.path.length + 1);
                    const maybeIdx = key.match(/^\b\d+\b/);
                    if (maybeIdx && isFlatNestedArray(prev2)) {
                      isArray2 = true;
                      prev2 = __spreadProps(__spreadValues({}, prev2), {
                        [maybeIdx[0]]: __spreadProps(__spreadValues({}, prev2[maybeIdx[0]] ? prev2[maybeIdx[0]] : {}), {
                          [key.slice(maybeIdx[0].length + 1)]: v,
                        }),
                      });
                    } else {
                      prev2[maybeIdx ? maybeIdx[0] : key] = v;
                    }
                  }
                  return prev2;
                }, {});
                if (Object.keys(jsonValue).length > 0) {
                  if (isArray2) {
                    value = Object.values(jsonValue).map(v =>
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'unflatten'
                      ])(v),
                    );
                  } else {
                    value = (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'unflatten'
                    ])(jsonValue);
                  }
                }
              }
              if (typeof value === 'undefined') {
                return prev;
              }
              return __spreadProps(__spreadValues({}, prev), {
                [curr.alias || curr.path]: value,
              });
            }
            if (value === null || (Array.isArray(value) && value.length === 0)) {
              return __spreadProps(__spreadValues({}, prev), {
                [curr.alias || curr.path]: value,
              });
            }
            let isArray = false;
            const flatNestedObjectOrArray = Object.entries(obj).reduce((prev2, [k, v]) => {
              const isNested =
                k.startsWith(`${curr.path}.`) ||
                (k.includes('!') && k.startsWith(`${removeFirstAlias(curr.declaration)}.`));
              if (!isNested) return prev2;
              const flatKey = k.slice((k.includes('!') ? removeFirstAlias(curr.declaration) : curr.path).length + 1);
              const maybeIdx = flatKey.match(/^\b\d+\b/);
              if (maybeIdx && isFlatNestedArray(prev2)) {
                isArray = true;
                const key = flatKey.slice(maybeIdx[0].length + 1);
                return __spreadProps(__spreadValues({}, prev2), {
                  [maybeIdx[0]]: __spreadProps(__spreadValues({}, prev2[maybeIdx[0]] ? prev2[maybeIdx[0]] : {}), {
                    [key]: v,
                  }),
                });
              }
              return __spreadProps(__spreadValues({}, prev2), {
                [flatKey]: v,
              });
            }, {});
            if (Object.keys(flatNestedObjectOrArray).length === 0) return prev;
            if (isArray && isFlatNestedArray(flatNestedObjectOrArray)) {
              return __spreadProps(__spreadValues({}, prev), {
                [curr.alias || curr.path]: Object.values(flatNestedObjectOrArray).map(v => denormalize(curr.paths, v)),
              });
            }
            return __spreadProps(__spreadValues({}, prev), {
              [curr.alias || curr.path]: denormalize(curr.paths, flatNestedObjectOrArray),
            });
          }, {});
        };
        var isFlatNestedArray = obj => true;
        var removeFirstAlias = key => {
          const split = key.split(':');
          if (split.length === 1) return key;
          split.shift();
          return split.join(':');
        };
        // src/lib/filter-filter-definitions-by-paths.ts
        var filterFilterDefinitionsByPaths = (f, paths) => {
          return f.reduce((prev, filter) => {
            if (isAndFilter(filter)) {
              const filters = filterFilterDefinitionsByPaths(filter.and, paths);
              if (filters.length > 0) {
                prev.push({
                  and: filters,
                });
              }
            } else if (isOrFilter(filter)) {
              const filters = filterFilterDefinitionsByPaths(filter.or, paths);
              if (filters.length > 0) {
                prev.push({
                  or: filters,
                });
              }
            } else if (isFilterDefinition(filter) && paths.includes(filter.path)) {
              prev.push(filter);
            }
            return prev;
          }, []);
        };
        // src/lib/is-object.ts
        var isObject = v => typeof v === 'object' && !Array.isArray(v) && v !== null;
        var buildLikeRegex = search => new RegExp(`^${search.replace(/%/g, '.*')}$`);
        var textSearch = (c, v) => {
          const regExp = `^${v
            .split('&')
            .map(v2 => v2.trim().toLowerCase())
            .join('|')
            .replace(/:\*/g, '.*')}$`;
          const tokens = c.match(/'(.*?)'/g).map(t => t.replace(/'/g, '').toLowerCase());
          return tokens.some(t => new RegExp(regExp).test(t));
        };
        var ifDateGetTime2 = v => (v instanceof Date ? v.getTime() : v);
        var enclose = (v, char) => {
          if (!v.startsWith(char)) v = `${char}${v}`;
          if (!v.endsWith(char)) v = `${v}${char}`;
          return v;
        };
        var OPERATOR_MAP = {
          eq: (c, v) => ifDateGetTime2(c) === ifDateGetTime2(v),
          neq: (c, v) => ifDateGetTime2(c) !== ifDateGetTime2(v),
          gt: (c, v) => c > v,
          gte: (c, v) => c >= v,
          lt: (c, v) => c < v,
          lte: (c, v) => c <= v,
          like: (c, v) => buildLikeRegex(v).test(c.toString()),
          ilike: (c, v) => buildLikeRegex(v.toLowerCase()).test(c.toString().toLowerCase()),
          is: (c, v) => c === v,
          in: (c, v) => {
            const parsedValue = v.slice(1, -1).split(',');
            return parsedValue.some(i => i === c);
          },
          // contains
          cs: (c, v) => {
            if (!Array.isArray(c)) return false;
            if (!Array.isArray(v)) v = v.slice(1, -1).split(',');
            return v.every(i =>
              c.some(colVal =>
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fast$2d$equals$40$5$2e$0$2e$1$2f$node_modules$2f$fast$2d$equals$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'deepEqual'
                ])(colVal, i),
              ),
            );
          },
          // containedBy
          cd: (c, v) => {
            if (!Array.isArray(c)) return false;
            if (!Array.isArray(v)) v = v.slice(1, -1).split(',');
            return c.every(i =>
              v.some(cmpVal =>
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fast$2d$equals$40$5$2e$0$2e$1$2f$node_modules$2f$fast$2d$equals$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'deepEqual'
                ])(cmpVal, i),
              ),
            );
          },
          fts: textSearch,
          plfts: (c, v) => buildLikeRegex(enclose(v.toLowerCase(), '%')).test(c.toString().toLowerCase()),
        };
        // src/lib/find-last-index.ts
        function findLastIndex(array, predicate) {
          let l = array.length;
          while (l--) {
            if (predicate(array[l], l, array)) return l;
          }
          return -1;
        }
        // src/lib/is-not-null.ts
        var isNotNull = i => i !== null;
        // src/postgrest-query-parser.ts
        var SUPPORTED_OPERATORS = ['or', ...Object.keys(OPERATOR_MAP)];
        var PostgrestQueryParser = class {
          constructor(query, opts) {
            this.opts = opts;
            this._params = new URLSearchParams(query);
          }
          /**
           * Getter that returns the paths and their aliases that the query selects. Will do the computation only once.
           *
           * ```js
           * const p = new PostgrestParser(
           * supabaseClient.from("test")
           *    .select(
           *      `name,
           *       city:cities (
           *        test:name
           *      ),
           *      countries (
           *        capital,
           *        population,
           *        some_ref (
           *          test:first,
           *          second
           *        )
           *      )`
           *    );
           * console.log(p.paths);
           * //  [
           * //    { alias: undefined, path: "name" },
           * //    { alias: "city.test", path: "cities.name" },
           * //    { alias: undefined, path: "countries.capital" },
           * //    { alias: undefined, path: "countries.population" },
           * //    {
           * //      alias: "countries.some_ref.test",
           * //      path: "countries.some_ref.first",
           * //    },
           * //    { alias: undefined, path: "countries.some_ref.second" },
           * //  ];
           * ```
           *
           * @returns an array of paths that the query selects, containing the columns and aliases
           */ get paths() {
            if (!this._paths) {
              const select = this._params.get('select');
              this._paths = select ? parseSelectParam(select) : [];
            }
            return this._paths;
          }
          /**
           * Getter that returns the filters that this query applies in a json object.
           *
           * ```js
           * const p = new PostgrestParser(
           * supabaseClient.from("test").select('*')
           *  .or("full_name.eq.20,test.neq.true,and(full_name.eq.Test Name,email.eq.test@mail.com)")
           *  .eq("id", "123")
           *  .contains("id", "456")
           * );
           *
           * console.log(p.filters);
           *
           * // [
           * //   {
           * //     or: [
           * //       {
           * //         path: "full_name",
           * //         negate: false,
           * //         operator: "eq",
           * //         value: 20,
           * //       },
           * //       {
           * //         path: "test",
           * //         negate: false,
           * //         operator: "neq",
           * //         value: true,
           * //       },
           * //       {
           * //         and: [
           * //           {
           * //             path: "full_name",
           * //             negate: false,
           * //             operator: "eq",
           * //             value: "Test Name",
           * //           },
           * //           {
           * //             path: "email",
           * //             negate: false,
           * //             operator: "eq",
           * //             value: "test@mail.com",
           * //           },
           * //         ],
           * //       },
           * //     ],
           * //   },
           * //   {
           * //     path: "id",
           * //     negate: false,
           * //     operator: "eq",
           * //     value: 123,
           * //   },
           * //   {
           * //     path: "id",
           * //     negate: false,
           * //     operator: "cs",
           * //     value: 456,
           * //   },
           * // ];
           * ```
           *
           * @returns a FilterDefinitions object
           */ get filters() {
            if (!this._filters) {
              const filters = [];
              this._params.forEach((value, key) => {
                if (SUPPORTED_OPERATORS.some(f => key === f || value.split('.').includes(f))) {
                  const filter = this.parseFilterString(`${key}.${value}`, void 0);
                  if (filter !== null) filters.push(filter);
                }
              });
              this._filters = filters;
            }
            return this._filters;
          }
          parseFilterString(filter, prefix) {
            if (filter.startsWith('and(') && filter.endsWith(')')) {
              const andFilters = filter
                .slice(4, -1)
                .split(',')
                .map(s => this.parseFilterString(s, prefix))
                .filter(isNotNull);
              if (andFilters.length === 0) return null;
              else
                return {
                  and: andFilters,
                };
            }
            const split = filter.split('.');
            if ([split[0], split[1]].includes('or')) {
              let foreignTable;
              if (split[1] === 'or') {
                foreignTable = split[0];
              }
              const orFilters = filter
                .slice(4 + (foreignTable ? foreignTable.length + 1 : 0), -1)
                .split(',')
                .reduce((prev, curr, idx, filters) => {
                  if (curr.startsWith('and(')) {
                    prev = [...prev, [curr, filters[idx + 1]].join()];
                  } else if (!curr.endsWith(')')) {
                    prev = [...prev, curr];
                  }
                  return prev;
                }, [])
                .map(s => this.parseFilterString(s, foreignTable))
                .filter(isNotNull);
              if (orFilters.length === 0) return null;
              else
                return {
                  or: orFilters,
                };
            }
            const operatorIdx = findLastIndex(split, s => SUPPORTED_OPERATORS.includes(s));
            if (operatorIdx === -1)
              throw new Error(
                `Could not find a valid operator in ${split.join('.')}. Supported are ${SUPPORTED_OPERATORS.join(',')}.`,
              );
            const negate = split[operatorIdx - 1] === 'not';
            const pathOrAlias = [prefix, ...split.slice(0, negate ? operatorIdx - 1 : operatorIdx)]
              .filter(Boolean)
              .join('.')
              .replace(/\s/g, '');
            let path = pathOrAlias;
            let alias;
            for (const p of this.paths) {
              if (p.path === pathOrAlias) {
                alias = p.alias;
                break;
              }
              if (p.alias === pathOrAlias) {
                path = p.path;
                alias = p.alias;
                break;
              }
            }
            if (this.opts && Array.isArray(this.opts.exclusivePaths) && !this.opts.exclusivePaths.includes(path)) {
              return null;
            }
            const operator = split[operatorIdx];
            const value = split.slice(operatorIdx + 1).join('.');
            return {
              path,
              alias,
              negate,
              operator,
              value: parseValue(value),
            };
          }
        };
        // src/postgrest-filter.ts
        var PostgrestFilter = class _PostgrestFilter {
          constructor(params) {
            this.params = params;
            this._filterPaths = extractPathsFromFilters(this.params.filters, this.params.paths);
            this.hasWildcardPath = this.params.paths.some(p => p.declaration.endsWith('*'));
            this.hasAggregatePath = this.params.paths.some(p => Boolean(p.aggregate));
          }
          static fromQuery(query, opts) {
            const parser = new PostgrestQueryParser(query, opts);
            return new _PostgrestFilter({
              filters: parser.filters,
              paths: parser.paths,
            });
          }
          static fromBuilder(fb, opts) {
            const parser = new PostgrestQueryParser(fb['url'].searchParams.toString(), opts);
            return new _PostgrestFilter({
              filters: parser.filters,
              paths: parser.paths,
            });
          }
          denormalize(obj) {
            return denormalize([...this.params.paths, ...this._filterPaths], obj);
          }
          apply(obj) {
            if (!this._fn) {
              this._fn = obj2 => this.applyFilters(obj2) && this.hasPaths(obj2);
            }
            return this._fn(obj);
          }
          applyFilters(obj) {
            if (!this._filtersFn) {
              const filterFns = this.params.filters.map(d => this.buildFilterFn(d));
              this._filtersFn = obj2 => filterFns.every(fn => isObject(obj2) && fn(obj2));
            }
            return this._filtersFn(obj);
          }
          hasFiltersOnPaths(paths) {
            return filterFilterDefinitionsByPaths(this.params.filters, paths).length > 0;
          }
          applyFiltersOnPaths(obj, paths) {
            const filterFns = filterFilterDefinitionsByPaths(this.params.filters, paths).map(d =>
              this.buildFilterFn(d),
            );
            const filtersFn = obj2 => filterFns.every(fn => isObject(obj2) && fn(obj2));
            return filtersFn(obj);
          }
          hasPaths(obj) {
            if (!this._selectFn) {
              this._selectFn = obj2 =>
                this.params.paths.every(p => {
                  var _a;
                  return this.hasPathRecursive(obj2, (_a = p.alias) != null ? _a : p.path);
                });
            }
            return this._selectFn(obj);
          }
          hasPathRecursive(obj, basePath, objectPath) {
            const v = get(obj, basePath);
            if (!objectPath && typeof v !== 'undefined') return true;
            if (objectPath && Array.isArray(v)) {
              return v.every(i => typeof get(i, objectPath) !== 'undefined');
            }
            const pathElements = basePath.replace(/->>|->/g, '.').split('.');
            const currentPathElement = pathElements.pop();
            if (pathElements.length === 0) return v === null;
            return this.hasPathRecursive(
              obj,
              pathElements.join('.'),
              [currentPathElement, objectPath].filter(Boolean).join('.'),
            );
          }
          applyFilterFn(obj, path, { filterFn, value, negate }) {
            const pathElements = path.replace(/->>|->/g, '.').split('.');
            const v = get(obj, pathElements[0]);
            if (typeof v === 'undefined') {
              if (Array.isArray(obj)) {
                return obj.every(o =>
                  this.applyFilterFn(o, path, {
                    filterFn,
                    value,
                    negate,
                  }),
                );
              }
              return false;
            }
            if (pathElements.length > 1) {
              return this.applyFilterFn(v, pathElements.slice(1).join('.'), {
                filterFn,
                value,
                negate,
              });
            }
            const res = filterFn(parseValue(v), value);
            if (negate) return !res;
            return res;
          }
          buildFilterFn(def) {
            if ('or' in def) {
              return obj => def.or.some(d => this.buildFilterFn(d)(obj));
            }
            if ('and' in def) {
              return obj => def.and.every(d => this.buildFilterFn(d)(obj));
            }
            const { operator, path, value, negate, alias } = def;
            const filterFn = OPERATOR_MAP[operator];
            if (!filterFn)
              throw new Error(
                `Unable to build filter function for ${JSON.stringify(def)}. Operator ${operator} is not supported.`,
              );
            return obj =>
              this.applyFilterFn(obj, alias != null ? alias : path, {
                filterFn,
                value,
                negate,
              });
          }
        };
        // src/postgrest-parser.ts
        var PostgrestParser = class extends PostgrestQueryParser {
          constructor(fb, opts) {
            var _a, _b;
            super(new URL(fb['url']).searchParams.toString(), opts);
            this.opts = opts;
            this.orderBy = [];
            this._url = new URL(fb['url']);
            this._headers = __spreadValues({}, fb['headers']);
            this._body = isObject(fb['body']) ? __spreadValues({}, fb['body']) : void 0;
            this._method = fb['method'];
            this.queryKey = sortSearchParams(this._url.searchParams).toString();
            this.table = getTableFromUrl(this._url.toString());
            if (this._body) {
              this.bodyKey = encodeObject(this._body);
            }
            const preferHeaders = ((_a = this._headers['Prefer']) != null ? _a : '').split(',').reduce((prev, curr) => {
              const s = curr.split('=');
              return __spreadProps(__spreadValues({}, prev), {
                [s[0]]: s[1],
              });
            }, {});
            this.count = (_b = preferHeaders['count']) != null ? _b : null;
            this.schema = fb['schema'];
            this.isHead = this._method === 'HEAD';
            const limit = this._url.searchParams.get('limit');
            this.limit = limit ? Number(limit) : void 0;
            const offset = this._url.searchParams.get('offset');
            this.offset = offset ? Number(offset) : void 0;
            this._url.searchParams.forEach((value, key) => {
              const split = key.split('.');
              if (split[split.length === 2 ? 1 : 0] === 'order') {
                const orderByDefs = value.split(',');
                orderByDefs.forEach(def => {
                  const [column, ascending, nullsFirst] = def.split('.');
                  this.orderBy.push({
                    ascending: ascending === 'asc',
                    column,
                    nullsFirst: nullsFirst === 'nullsfirst',
                    foreignTable: split.length === 2 ? split[0] : void 0,
                  });
                });
              }
            });
            this.orderByKey = this.orderBy
              .map(
                ({ column, ascending, nullsFirst, foreignTable }) =>
                  `${foreignTable ? `${foreignTable}.` : ''}${column}:${ascending ? 'asc' : 'desc'}.${nullsFirst ? 'nullsFirst' : 'nullsLast'}`,
              )
              .join('|');
          }
        };
        // src/update-fetcher.ts
        var buildUpdateFetcher = (qb, primaryKeys, _a) => {
          var _b = _a,
            { stripPrimaryKeys = true } = _b,
            opts = __objRest(_b, ['stripPrimaryKeys']);
          return input =>
            __async(void 0, null, function* () {
              const payload = stripPrimaryKeys
                ? primaryKeys.reduce(
                    (acc, key) => {
                      delete acc[key];
                      return acc;
                    },
                    __spreadValues({}, input),
                  )
                : input;
              let filterBuilder = qb.update(payload, opts);
              for (const key of primaryKeys) {
                const value = input[key];
                if (value === null || value === void 0) throw new Error(`Missing value for primary key ${String(key)}`);
                filterBuilder = filterBuilder.eq(key, value);
              }
              const query = buildNormalizedQuery(opts);
              if (query) {
                const { selectQuery, groupedUserQueryPaths, groupedPaths } = query;
                const { data } = yield filterBuilder.select(selectQuery).throwOnError().single();
                return buildMutationFetcherResponse(data, {
                  groupedPaths,
                  groupedUserQueryPaths,
                });
              }
              yield filterBuilder.throwOnError().single();
              return {
                normalizedData: input,
              };
            });
        };
        // src/upsert-fetcher.ts
        var buildUpsertFetcher = (qb, opts) => input =>
          __async(void 0, null, function* () {
            const query = buildNormalizedQuery(opts);
            if (query) {
              const { selectQuery, groupedUserQueryPaths, groupedPaths } = query;
              const { data } = yield qb.upsert(input, opts).throwOnError().select(selectQuery);
              return data.map(d =>
                buildMutationFetcherResponse(d, {
                  groupedPaths,
                  groupedUserQueryPaths,
                }),
              );
            }
            yield qb.upsert(input).throwOnError();
            return input.map(d => ({
              normalizedData: d,
            }));
          });
        var upsert = (input, currentData, primaryKeys, filter, mergeFn, orderBy) => {
          const merge =
            mergeFn != null
              ? mergeFn
              : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$merge$2d$anything$40$5$2e$1$2e$7$2f$node_modules$2f$merge$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'merge'
                ];
          const itemIdx = currentData.findIndex(oldItem => primaryKeys.every(pk => oldItem[pk] === input[pk]));
          let newItem = input;
          let newItemIdx = itemIdx;
          if (itemIdx !== -1) {
            newItem = merge(currentData[itemIdx], input);
            currentData.splice(itemIdx, 1);
          }
          if (orderBy && Array.isArray(orderBy) && orderBy.length > 0) {
            newItemIdx = findIndexOrdered(newItem, currentData, orderBy);
          }
          if (newItemIdx === -1) {
            newItemIdx = 0;
          }
          if (filter.apply(newItem)) {
            currentData.splice(newItemIdx, 0, newItem);
          }
          return currentData;
        };
        var upsertItem = (op, cache) =>
          __async(void 0, null, function* () {
            var _a, _b;
            const {
              revalidateRelations: revalidateRelationsOpt,
              revalidateTables: revalidateTablesOpt,
              schema,
              table,
              primaryKeys,
            } = op;
            const { cacheKeys, decode, getPostgrestFilter, mutate, revalidate } = cache;
            const mutations = [];
            for (const k of cacheKeys) {
              const key = decode(k);
              if (!key) continue;
              const filter = getPostgrestFilter(key.queryKey);
              if (key.schema === schema && key.table === table) {
                const transformedInput = filter.denormalize(op.input);
                if (
                  filter.applyFilters(transformedInput) || // also allow upsert if either the filter does not apply eq filters on any pk
                  !filter.hasFiltersOnPaths(op.primaryKeys) || // or input matches all pk filters
                  filter.applyFiltersOnPaths(transformedInput, op.primaryKeys)
                ) {
                  const merge =
                    (_a = op.merge) != null
                      ? _a
                      : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$merge$2d$anything$40$5$2e$1$2e$7$2f$node_modules$2f$merge$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'merge'
                        ];
                  const limit = (_b = key.limit) != null ? _b : 1e3;
                  const orderBy = key.orderByKey ? parseOrderByKey(key.orderByKey) : void 0;
                  if (key.isHead === true || filter.hasWildcardPath || filter.hasAggregatePath) {
                    mutations.push(revalidate(k));
                  } else {
                    mutations.push(
                      mutate(k, currentData => {
                        if (!currentData) return currentData;
                        if (isPostgrestHasMorePaginationCacheData(currentData)) {
                          return toHasMorePaginationCacheData(
                            upsert(
                              transformedInput,
                              currentData.flatMap(p => p.data),
                              primaryKeys,
                              filter,
                              merge,
                              orderBy,
                            ),
                            currentData,
                            limit,
                          );
                        } else if (isPostgrestPaginationCacheData(currentData)) {
                          return toPaginationCacheData(
                            upsert(transformedInput, currentData.flat(), primaryKeys, filter, merge, orderBy),
                            limit,
                          );
                        } else if (isAnyPostgrestResponse(currentData)) {
                          const { data } = currentData;
                          if (!Array.isArray(data)) {
                            if (data === null) {
                              return {
                                data,
                                count: currentData.count,
                              };
                            }
                            const newData2 = merge(data, transformedInput);
                            return {
                              // Check if the new data is still valid given the key
                              data: filter.apply(newData2) ? newData2 : null,
                              count: currentData.count,
                            };
                          }
                          const newData = upsert(
                            transformedInput, // deep copy data to avoid mutating the original
                            JSON.parse(JSON.stringify(data)),
                            primaryKeys,
                            filter,
                            merge,
                            orderBy,
                          );
                          return {
                            data: newData,
                            count: newData.length,
                          };
                        }
                        return currentData;
                      }),
                    );
                  }
                }
              }
              if (
                revalidateTablesOpt &&
                shouldRevalidateTable(revalidateTablesOpt, {
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
              if (
                revalidateRelationsOpt &&
                shouldRevalidateRelation(revalidateRelationsOpt, {
                  input: op.input,
                  getPostgrestFilter,
                  decodedKey: key,
                })
              ) {
                mutations.push(revalidate(k));
              }
            }
            yield Promise.all(mutations);
          });
        //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js (client proxy) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          QueryClientContext: () => QueryClientContext,
          QueryClientProvider: () => QueryClientProvider,
          useQueryClient: () => useQueryClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const QueryClientContext = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call QueryClientContext() from the server but QueryClientContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js <module evaluation>',
          'QueryClientContext',
        );
        const QueryClientProvider = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call QueryClientProvider() from the server but QueryClientProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js <module evaluation>',
          'QueryClientProvider',
        );
        const useQueryClient = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useQueryClient() from the server but useQueryClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js <module evaluation>',
          'useQueryClient',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js (client proxy)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          QueryClientContext: () => QueryClientContext,
          QueryClientProvider: () => QueryClientProvider,
          useQueryClient: () => useQueryClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const QueryClientContext = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call QueryClientContext() from the server but QueryClientContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js',
          'QueryClientContext',
        );
        const QueryClientProvider = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call QueryClientProvider() from the server but QueryClientProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js',
          'QueryClientProvider',
        );
        const useQueryClient = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useQueryClient() from the server but useQueryClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js',
          'useQueryClient',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js (client proxy) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          useMutation: () => useMutation,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const useMutation = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useMutation() from the server but useMutation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js <module evaluation>',
          'useMutation',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js (client proxy)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          useMutation: () => useMutation,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const useMutation = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useMutation() from the server but useMutation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js',
          'useMutation',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js (client proxy) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          useQuery: () => useQuery,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const useQuery = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useQuery() from the server but useQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js <module evaluation>',
          'useQuery',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js (client proxy)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          useQuery: () => useQuery,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const useQuery = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call useQuery() from the server but useQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js',
          'useQuery',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy) <module evaluation>':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          HydrationBoundary: () => HydrationBoundary,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const HydrationBoundary = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js <module evaluation>',
          'HydrationBoundary',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          HydrationBoundary: () => HydrationBoundary,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const HydrationBoundary = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js',
          'HydrationBoundary',
        );
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-react-query@1.11.5_@supabase+postgrest-js@1.18.1_@supabase+_qe2ohay7gmnitdy3w3dgdcjl6q/node_modules/@supabase-cache-helpers/postgrest-react-query/dist/index.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          INFINITE_KEY_PREFIX: () => INFINITE_KEY_PREFIX,
          KEY_PREFIX: () => KEY_PREFIX,
          POSTGREST_FILTER_KEY_PREFIX: () => POSTGREST_FILTER_KEY_PREFIX,
          buildQueryOpts: () => buildQueryOpts,
          decode: () => decode,
          encode: () => encode,
          fetchQuery: () => fetchQuery,
          fetchQueryInitialData: () => fetchQueryInitialData,
          prefetchQuery: () => prefetchQuery,
          useDeleteItem: () => useDeleteItem,
          useDeleteManyMutation: () => useDeleteManyMutation,
          useDeleteMutation: () => useDeleteMutation,
          useInsertMutation: () => useInsertMutation,
          useMutateItem: () => useMutateItem,
          usePostgrestFilterCache: () => usePostgrestFilterCache,
          useQueriesForTableLoader: () => useQueriesForTableLoader,
          useQuery: () => useQuery,
          useSubscription: () => useSubscription,
          useSubscriptionQuery: () => useSubscriptionQuery,
          useUpdateMutation: () => useUpdateMutation,
          useUpsertItem: () => useUpsertItem,
          useUpsertMutation: () => useUpsertMutation,
        });
        // src/cache/use-delete-item.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-core@0.9.0_@supabase+postgrest-js@1.18.1_@supabase+supabase-js@2.48.1/node_modules/@supabase-cache-helpers/postgrest-core/dist/index.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/flat@6.0.1/node_modules/flat/index.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-rsc] (ecmascript)',
          );
        // src/query/use-query.ts
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+realtime-js@2.11.2/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)',
          );
        var __defProp = Object.defineProperty;
        var __defProps = Object.defineProperties;
        var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = (obj, key, value) =>
          key in obj
            ? __defProp(obj, key, {
                enumerable: true,
                configurable: true,
                writable: true,
                value,
              })
            : (obj[key] = value);
        var __spreadValues = (a, b) => {
          for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b)) {
              if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
            }
          return a;
        };
        var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
        var __async = (__this, __arguments, generator) => {
          return new Promise((resolve, reject) => {
            var fulfilled = value => {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = value => {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = x => (x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected));
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        var POSTGREST_FILTER_KEY_PREFIX = 'postgrest-filter';
        var usePostgrestFilterCache = () => {
          const queryClient = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQueryClient'
          ])();
          return (query, opts) => {
            const key = [
              POSTGREST_FILTER_KEY_PREFIX,
              query,
              opts
                ? (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'encodeObject'
                  ])(opts)
                : null,
            ];
            const cacheData = queryClient.getQueryData(key);
            if (
              cacheData instanceof
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'PostgrestFilter'
              ]
            ) {
              return cacheData;
            }
            const filter =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'PostgrestFilter'
              ].fromQuery(query, opts);
            queryClient.setQueryData(key, filter);
            return filter;
          };
        };
        var KEY_PREFIX = 'postgrest';
        var INFINITE_KEY_PREFIX = 'page';
        var encode = (key, isInfinite) => {
          var _a;
          if (
            !(0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isPostgrestBuilder'
            ])(key)
          ) {
            throw new Error('Key is not a PostgrestBuilder');
          }
          const parser =
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'PostgrestParser'
            ](key);
          return [
            KEY_PREFIX,
            isInfinite ? INFINITE_KEY_PREFIX : 'null',
            parser.schema,
            parser.table,
            parser.queryKey,
            (_a = parser.bodyKey) != null ? _a : 'null',
            `count=${parser.count}`,
            `head=${parser.isHead}`,
            parser.orderByKey,
          ];
        };
        var decode = key => {
          if (!Array.isArray(key)) return null;
          const [prefix, infinitePrefix, schema, table, queryKey, bodyKey, count, head, orderByKey] = key;
          if (prefix !== KEY_PREFIX) return null;
          const params = new URLSearchParams(queryKey);
          const limit = params.get('limit');
          const offset = params.get('offset');
          const countValue = count.replace('count=', '');
          return {
            limit: limit ? Number(limit) : void 0,
            offset: offset ? Number(offset) : void 0,
            bodyKey,
            count: countValue === 'null' ? null : countValue,
            isHead: head === 'head=true',
            isInfinite: infinitePrefix === INFINITE_KEY_PREFIX,
            key,
            queryKey,
            schema,
            table,
            orderByKey,
          };
        };
        var useQueriesForTableLoader = table => {
          const queryClient = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQueryClient'
          ])();
          const getPostgrestFilter = usePostgrestFilterCache();
          return () =>
            queryClient
              .getQueryCache()
              .getAll()
              .map(c => c.queryKey)
              .reduce((prev, curr) => {
                const decodedKey = decode(curr);
                if ((decodedKey == null ? void 0 : decodedKey.table) === table) {
                  prev.push(getPostgrestFilter(decodedKey.queryKey).params);
                }
                return prev;
              }, []);
        };
        // src/cache/use-delete-item.ts
        function useDeleteItem(opts) {
          const queryClient = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQueryClient'
          ])();
          const getPostgrestFilter = usePostgrestFilterCache();
          return input =>
            __async(this, null, function* () {
              return yield (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'deleteItem'
              ])(
                __spreadValues(
                  {
                    input: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'flatten'
                    ])(input),
                  },
                  opts,
                ),
                {
                  cacheKeys: queryClient
                    .getQueryCache()
                    .getAll()
                    .map(c => c.queryKey),
                  getPostgrestFilter,
                  revalidate: key =>
                    queryClient.invalidateQueries({
                      queryKey: key,
                    }),
                  mutate: (key, fn) => {
                    queryClient.setQueriesData(
                      {
                        queryKey: key,
                      },
                      fn,
                    );
                  },
                  decode,
                },
              );
            });
        }
        function useMutateItem(opts) {
          const queryClient = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQueryClient'
          ])();
          const getPostgrestFilter = usePostgrestFilterCache();
          return (input, mutateFn) =>
            __async(this, null, function* () {
              return yield (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'mutateItem'
              ])(
                __spreadValues(
                  {
                    input: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'flatten'
                    ])(input),
                    mutate: mutateFn,
                  },
                  opts,
                ),
                {
                  cacheKeys: queryClient
                    .getQueryCache()
                    .getAll()
                    .map(c => c.queryKey),
                  getPostgrestFilter,
                  revalidate: key =>
                    queryClient.invalidateQueries({
                      queryKey: key,
                    }),
                  mutate: (key, fn) => {
                    queryClient.setQueriesData(
                      {
                        queryKey: key,
                      },
                      fn,
                    );
                  },
                  decode,
                },
              );
            });
        }
        function useUpsertItem(opts) {
          const queryClient = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQueryClient'
          ])();
          const getPostgrestFilter = usePostgrestFilterCache();
          return input =>
            __async(this, null, function* () {
              return yield (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'upsertItem'
              ])(
                __spreadValues(
                  {
                    input: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$flat$40$6$2e$0$2e$1$2f$node_modules$2f$flat$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'flatten'
                    ])(input),
                  },
                  opts,
                ),
                {
                  cacheKeys: queryClient
                    .getQueryCache()
                    .getAll()
                    .map(c => c.queryKey),
                  getPostgrestFilter,
                  revalidate: key =>
                    queryClient.invalidateQueries({
                      queryKey: key,
                    }),
                  mutate: (key, fn) => {
                    queryClient.setQueriesData(
                      {
                        queryKey: key,
                      },
                      fn,
                    );
                  },
                  decode,
                },
              );
            });
        }
        function useDeleteManyMutation(qb, primaryKeys, query, opts) {
          const queriesForTable = useQueriesForTableLoader(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getTable'
            ])(qb),
          );
          const deleteItem2 = useDeleteItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getTable'
              ])(qb),
              schema: qb.schema,
            }),
          );
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useMutation'
          ])(
            __spreadValues(
              {
                mutationFn: input =>
                  __async(this, null, function* () {
                    const result = yield (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildDeleteFetcher'
                    ])(
                      qb,
                      primaryKeys,
                      __spreadValues(
                        {
                          query: query != null ? query : void 0,
                          queriesForTable,
                          disabled: opts == null ? void 0 : opts.disableAutoQuery,
                        },
                        opts,
                      ),
                    )(input);
                    if (result) {
                      for (const r of result) {
                        deleteItem2(r.normalizedData);
                      }
                    }
                    if (!result || result.every(r => !r.userQueryData)) return null;
                    return result.map(r => r.userQueryData);
                  }),
              },
              opts,
            ),
          );
        }
        function useDeleteMutation(qb, primaryKeys, query, opts) {
          const queriesForTable = useQueriesForTableLoader(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getTable'
            ])(qb),
          );
          const deleteItem2 = useDeleteItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getTable'
              ])(qb),
              schema: qb.schema,
            }),
          );
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useMutation'
          ])(
            __spreadValues(
              {
                mutationFn: input =>
                  __async(this, null, function* () {
                    var _a;
                    const r = yield (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildDeleteFetcher'
                    ])(
                      qb,
                      primaryKeys,
                      __spreadValues(
                        {
                          query: query != null ? query : void 0,
                          queriesForTable,
                          disabled: opts == null ? void 0 : opts.disableAutoQuery,
                        },
                        opts,
                      ),
                    )([input]);
                    if (!r) return null;
                    const result = r[0];
                    if (result) {
                      yield deleteItem2(result.normalizedData);
                    }
                    return (_a = result == null ? void 0 : result.userQueryData) != null ? _a : null;
                  }),
              },
              opts,
            ),
          );
        }
        // src/mutate/get-user-response.ts
        function truthy(value) {
          return !!value;
        }
        var getUserResponse = d => {
          if (!d) return d;
          return d.map(r => r.userQueryData).filter(truthy);
        };
        // src/mutate/use-insert-mutation.ts
        function useInsertMutation(qb, primaryKeys, query, opts) {
          const queriesForTable = useQueriesForTableLoader(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getTable'
            ])(qb),
          );
          const upsertItem2 = useUpsertItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getTable'
              ])(qb),
              schema: qb.schema,
            }),
          );
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useMutation'
          ])(
            __spreadValues(
              {
                mutationFn: input =>
                  __async(this, null, function* () {
                    var _a;
                    const result = yield (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildInsertFetcher'
                    ])(
                      qb,
                      __spreadValues(
                        {
                          query: query != null ? query : void 0,
                          queriesForTable,
                          disabled: opts == null ? void 0 : opts.disableAutoQuery,
                        },
                        opts,
                      ),
                    )(input);
                    if (result) {
                      yield Promise.all(
                        result.map(d =>
                          __async(this, null, function* () {
                            return yield upsertItem2(d.normalizedData);
                          }),
                        ),
                      );
                    }
                    return (_a = getUserResponse(result)) != null ? _a : null;
                  }),
              },
              opts,
            ),
          );
        }
        function useUpdateMutation(qb, primaryKeys, query, opts) {
          const queriesForTable = useQueriesForTableLoader(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getTable'
            ])(qb),
          );
          const upsertItem2 = useUpsertItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getTable'
              ])(qb),
              schema: qb.schema,
            }),
          );
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useMutation'
          ])(
            __spreadValues(
              {
                mutationFn: input =>
                  __async(this, null, function* () {
                    var _a;
                    const result = yield (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildUpdateFetcher'
                    ])(
                      qb,
                      primaryKeys,
                      __spreadValues(
                        {
                          query: query != null ? query : void 0,
                          queriesForTable,
                          disabled: opts == null ? void 0 : opts.disableAutoQuery,
                        },
                        opts,
                      ),
                    )(input);
                    if (result) {
                      yield upsertItem2(result.normalizedData);
                    }
                    return (_a = result == null ? void 0 : result.userQueryData) != null ? _a : null;
                  }),
              },
              opts,
            ),
          );
        }
        function useUpsertMutation(qb, primaryKeys, query, opts) {
          const queriesForTable = useQueriesForTableLoader(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getTable'
            ])(qb),
          );
          const upsertItem2 = useUpsertItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getTable'
              ])(qb),
              schema: qb.schema,
            }),
          );
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useMutation'
          ])(
            __spreadValues(
              {
                mutationFn: input =>
                  __async(this, null, function* () {
                    var _a;
                    const data = yield (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildUpsertFetcher'
                    ])(
                      qb,
                      __spreadValues(
                        {
                          query: query != null ? query : void 0,
                          queriesForTable,
                          disabled: opts == null ? void 0 : opts.disableAutoQuery,
                        },
                        opts,
                      ),
                    )(input);
                    if (data) {
                      yield Promise.all(
                        data.map(d =>
                          __async(this, null, function* () {
                            return yield upsertItem2(d.normalizedData);
                          }),
                        ),
                      );
                    }
                    return (_a = getUserResponse(data)) != null ? _a : null;
                  }),
              },
              opts,
            ),
          );
        }
        function buildQueryOpts(query, config) {
          return __spreadValues(
            {
              queryKey: encode(query, false),
              queryFn: _0 =>
                __async(this, [_0], function* ({ signal }) {
                  if (
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'isPostgrestTransformBuilder'
                    ])(query)
                  ) {
                    query = query.abortSignal(signal);
                  }
                  if (
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'isPostgrestBuilder'
                    ])(query)
                  ) {
                    query = query.throwOnError();
                  }
                  return yield query;
                }),
            },
            config,
          );
        }
        // src/query/fetch.ts
        function fetchQuery(queryClient, query, config) {
          return __async(this, null, function* () {
            return yield queryClient.fetchQuery(buildQueryOpts(query, config));
          });
        }
        function prefetchQuery(queryClient, query, config) {
          return __async(this, null, function* () {
            yield queryClient.prefetchQuery(buildQueryOpts(query, config));
          });
        }
        function fetchQueryInitialData(query) {
          return __async(this, null, function* () {
            if (
              !(0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPostgrestBuilder'
              ])(query)
            ) {
              throw new Error('Query is not a PostgrestBuilder');
            }
            return [encode(query, false), yield query.throwOnError()];
          });
        }
        function useQuery(query, config) {
          var _a, _b;
          const result = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useQuery'
          ])(buildQueryOpts(query, config));
          if (result.isPending || result.isLoadingError) {
            return __spreadProps(__spreadValues({}, result), {
              data: void 0,
              count: null,
            });
          }
          return __spreadProps(__spreadValues({}, result), {
            data: (_a = result.data) == null ? void 0 : _a.data,
            count: (_b = result.data) == null ? void 0 : _b.count,
          });
        }
        function useSubscriptionQuery(client, channelName, filter, primaryKeys, query, opts) {
          const [status, setStatus] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useState'
          ])();
          const [channel, setChannel] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useState'
          ])();
          const queriesForTable = useQueriesForTableLoader(filter.table);
          const deleteItem2 = useDeleteItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: filter.table,
              schema: filter.schema,
            }),
          );
          const upsertItem2 = useUpsertItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: filter.table,
              schema: filter.schema,
            }),
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            if (!client) return;
            const c = client
              .channel(channelName)
              .on(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'REALTIME_LISTEN_TYPES'
                ].POSTGRES_CHANGES,
                filter,
                payload =>
                  __async(this, null, function* () {
                    var _a;
                    let data = (_a = payload.new) != null ? _a : payload.old;
                    const selectQuery = (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'buildNormalizedQuery'
                    ])({
                      queriesForTable,
                      query,
                    });
                    if (
                      payload.eventType !==
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                        ].DELETE &&
                      selectQuery
                    ) {
                      const qb = client.from(payload.table).select(selectQuery.selectQuery);
                      for (const pk of primaryKeys) {
                        qb.eq(pk.toString(), data[pk]);
                      }
                      const res = yield qb.single();
                      if (res.data) {
                        data = (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$core$40$0$2e$9$2e$0_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'normalizeResponse'
                        ])(selectQuery.groupedPaths, res.data);
                      }
                    }
                    if (
                      payload.eventType ===
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                        ].INSERT ||
                      payload.eventType ===
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                        ].UPDATE
                    ) {
                      yield upsertItem2(data);
                    } else if (
                      payload.eventType ===
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                      ].DELETE
                    ) {
                      yield deleteItem2(payload.old);
                    }
                    if (opts == null ? void 0 : opts.callback) {
                      opts.callback(
                        __spreadProps(__spreadValues({}, payload), {
                          data,
                        }),
                      );
                    }
                  }),
              )
              .subscribe(status2 => setStatus(status2));
            setChannel(c);
            return () => {
              if (c) c.unsubscribe();
            };
          }, []);
          return {
            channel,
            status,
          };
        }
        function useSubscription(client, channelName, filter, primaryKeys, opts) {
          const [status, setStatus] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useState'
          ])();
          const deleteItem2 = useDeleteItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: filter.table,
              schema: filter.schema,
            }),
          );
          const upsertItem2 = useUpsertItem(
            __spreadProps(__spreadValues({}, opts), {
              primaryKeys,
              table: filter.table,
              schema: filter.schema,
            }),
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            if (!client) return;
            const c = client
              .channel(channelName)
              .on(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'REALTIME_LISTEN_TYPES'
                ].POSTGRES_CHANGES,
                filter,
                payload =>
                  __async(this, null, function* () {
                    if (
                      payload.eventType ===
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                        ].INSERT ||
                      payload.eventType ===
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                        ].UPDATE
                    ) {
                      yield upsertItem2(payload.new);
                    } else if (
                      payload.eventType ===
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$11$2e$2$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'REALTIME_POSTGRES_CHANGES_LISTEN_EVENT'
                      ].DELETE
                    ) {
                      yield deleteItem2(payload.old);
                    }
                    if (opts == null ? void 0 : opts.callback) {
                      opts.callback(__spreadValues({}, payload));
                    }
                  }),
              )
              .subscribe(status2 => setStatus(status2));
            return () => {
              if (c) c.unsubscribe();
            };
          }, []);
          return {
            status,
          };
        }
        //# sourceMappingURL=index.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/utils.ts
        __turbopack_esm__({
          addToEnd: () => addToEnd,
          addToStart: () => addToStart,
          ensureQueryFn: () => ensureQueryFn,
          functionalUpdate: () => functionalUpdate,
          hashKey: () => hashKey,
          hashQueryKeyByOptions: () => hashQueryKeyByOptions,
          isPlainArray: () => isPlainArray,
          isPlainObject: () => isPlainObject,
          isServer: () => isServer,
          isValidTimeout: () => isValidTimeout,
          keepPreviousData: () => keepPreviousData,
          matchMutation: () => matchMutation,
          matchQuery: () => matchQuery,
          noop: () => noop,
          partialMatchKey: () => partialMatchKey,
          replaceData: () => replaceData,
          replaceEqualDeep: () => replaceEqualDeep,
          resolveEnabled: () => resolveEnabled,
          resolveStaleTime: () => resolveStaleTime,
          shallowEqualObjects: () => shallowEqualObjects,
          skipToken: () => skipToken,
          sleep: () => sleep,
          timeUntilStale: () => timeUntilStale,
        });
        var isServer = 'undefined' === 'undefined' || 'Deno' in globalThis;
        function noop() {}
        function functionalUpdate(updater, input) {
          return typeof updater === 'function' ? updater(input) : updater;
        }
        function isValidTimeout(value) {
          return typeof value === 'number' && value >= 0 && value !== Infinity;
        }
        function timeUntilStale(updatedAt, staleTime) {
          return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
        }
        function resolveStaleTime(staleTime, query) {
          return typeof staleTime === 'function' ? staleTime(query) : staleTime;
        }
        function resolveEnabled(enabled, query) {
          return typeof enabled === 'function' ? enabled(query) : enabled;
        }
        function matchQuery(filters, query) {
          const { type = 'all', exact, fetchStatus, predicate, queryKey, stale } = filters;
          if (queryKey) {
            if (exact) {
              if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
              }
            } else if (!partialMatchKey(query.queryKey, queryKey)) {
              return false;
            }
          }
          if (type !== 'all') {
            const isActive = query.isActive();
            if (type === 'active' && !isActive) {
              return false;
            }
            if (type === 'inactive' && isActive) {
              return false;
            }
          }
          if (typeof stale === 'boolean' && query.isStale() !== stale) {
            return false;
          }
          if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
            return false;
          }
          if (predicate && !predicate(query)) {
            return false;
          }
          return true;
        }
        function matchMutation(filters, mutation) {
          const { exact, status, predicate, mutationKey } = filters;
          if (mutationKey) {
            if (!mutation.options.mutationKey) {
              return false;
            }
            if (exact) {
              if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
              }
            } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
              return false;
            }
          }
          if (status && mutation.state.status !== status) {
            return false;
          }
          if (predicate && !predicate(mutation)) {
            return false;
          }
          return true;
        }
        function hashQueryKeyByOptions(queryKey, options) {
          const hashFn = options?.queryKeyHashFn || hashKey;
          return hashFn(queryKey);
        }
        function hashKey(queryKey) {
          return JSON.stringify(queryKey, (_, val) =>
            isPlainObject(val)
              ? Object.keys(val)
                  .sort()
                  .reduce((result, key) => {
                    result[key] = val[key];
                    return result;
                  }, {})
              : val,
          );
        }
        function partialMatchKey(a, b) {
          if (a === b) {
            return true;
          }
          if (typeof a !== typeof b) {
            return false;
          }
          if (a && b && typeof a === 'object' && typeof b === 'object') {
            return !Object.keys(b).some(key => !partialMatchKey(a[key], b[key]));
          }
          return false;
        }
        function replaceEqualDeep(a, b) {
          if (a === b) {
            return a;
          }
          const array = isPlainArray(a) && isPlainArray(b);
          if (array || (isPlainObject(a) && isPlainObject(b))) {
            const aItems = array ? a : Object.keys(a);
            const aSize = aItems.length;
            const bItems = array ? b : Object.keys(b);
            const bSize = bItems.length;
            const copy = array ? [] : {};
            let equalItems = 0;
            for (let i = 0; i < bSize; i++) {
              const key = array ? i : bItems[i];
              if (((!array && aItems.includes(key)) || array) && a[key] === void 0 && b[key] === void 0) {
                copy[key] = void 0;
                equalItems++;
              } else {
                copy[key] = replaceEqualDeep(a[key], b[key]);
                if (copy[key] === a[key] && a[key] !== void 0) {
                  equalItems++;
                }
              }
            }
            return aSize === bSize && equalItems === aSize ? a : copy;
          }
          return b;
        }
        function shallowEqualObjects(a, b) {
          if (!b || Object.keys(a).length !== Object.keys(b).length) {
            return false;
          }
          for (const key in a) {
            if (a[key] !== b[key]) {
              return false;
            }
          }
          return true;
        }
        function isPlainArray(value) {
          return Array.isArray(value) && value.length === Object.keys(value).length;
        }
        function isPlainObject(o) {
          if (!hasObjectPrototype(o)) {
            return false;
          }
          const ctor = o.constructor;
          if (ctor === void 0) {
            return true;
          }
          const prot = ctor.prototype;
          if (!hasObjectPrototype(prot)) {
            return false;
          }
          if (!prot.hasOwnProperty('isPrototypeOf')) {
            return false;
          }
          if (Object.getPrototypeOf(o) !== Object.prototype) {
            return false;
          }
          return true;
        }
        function hasObjectPrototype(o) {
          return Object.prototype.toString.call(o) === '[object Object]';
        }
        function sleep(timeout) {
          return new Promise(resolve => {
            setTimeout(resolve, timeout);
          });
        }
        function replaceData(prevData, data, options) {
          if (typeof options.structuralSharing === 'function') {
            return options.structuralSharing(prevData, data);
          } else if (options.structuralSharing !== false) {
            if (('TURBOPACK compile-time truthy', 1)) {
              try {
                return replaceEqualDeep(prevData, data);
              } catch (error) {
                console.error(
                  `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`,
                );
              }
            }
            return replaceEqualDeep(prevData, data);
          }
          return data;
        }
        function keepPreviousData(previousData) {
          return previousData;
        }
        function addToEnd(items, item, max = 0) {
          const newItems = [...items, item];
          return max && newItems.length > max ? newItems.slice(1) : newItems;
        }
        function addToStart(items, item, max = 0) {
          const newItems = [item, ...items];
          return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
        }
        var skipToken = Symbol();
        function ensureQueryFn(options, fetchOptions) {
          if (('TURBOPACK compile-time truthy', 1)) {
            if (options.queryFn === skipToken) {
              console.error(
                `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`,
              );
            }
          }
          if (!options.queryFn && fetchOptions?.initialPromise) {
            return () => fetchOptions.initialPromise;
          }
          if (!options.queryFn || options.queryFn === skipToken) {
            return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
          }
          return options.queryFn;
        }
        //# sourceMappingURL=utils.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/subscribable.ts
        __turbopack_esm__({
          Subscribable: () => Subscribable,
        });
        var Subscribable = class {
          constructor() {
            this.listeners = /* @__PURE__ */ new Set();
            this.subscribe = this.subscribe.bind(this);
          }
          subscribe(listener) {
            this.listeners.add(listener);
            this.onSubscribe();
            return () => {
              this.listeners.delete(listener);
              this.onUnsubscribe();
            };
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        };
        //# sourceMappingURL=subscribable.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/onlineManager.ts
        __turbopack_esm__({
          OnlineManager: () => OnlineManager,
          onlineManager: () => onlineManager,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)',
          );
        var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Subscribable'
        ] {
          #online = true;
          #cleanup;
          #setup;
          constructor() {
            super();
            this.#setup = onOnline => {
              if (
                !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isServer'
                ] &&
                window.addEventListener
              ) {
                const onlineListener = () => onOnline(true);
                const offlineListener = () => onOnline(false);
                window.addEventListener('online', onlineListener, false);
                window.addEventListener('offline', offlineListener, false);
                return () => {
                  window.removeEventListener('online', onlineListener);
                  window.removeEventListener('offline', offlineListener);
                };
              }
              return;
            };
          }
          onSubscribe() {
            if (!this.#cleanup) {
              this.setEventListener(this.#setup);
            }
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              this.#cleanup?.();
              this.#cleanup = void 0;
            }
          }
          setEventListener(setup) {
            this.#setup = setup;
            this.#cleanup?.();
            this.#cleanup = setup(this.setOnline.bind(this));
          }
          setOnline(online) {
            const changed = this.#online !== online;
            if (changed) {
              this.#online = online;
              this.listeners.forEach(listener => {
                listener(online);
              });
            }
          }
          isOnline() {
            return this.#online;
          }
        };
        var onlineManager = new OnlineManager();
        //# sourceMappingURL=onlineManager.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/thenable.ts
        __turbopack_esm__({
          pendingThenable: () => pendingThenable,
        });
        function pendingThenable() {
          let resolve;
          let reject;
          const thenable = new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
          });
          thenable.status = 'pending';
          thenable.catch(() => {});
          function finalize(data) {
            Object.assign(thenable, data);
            delete thenable.resolve;
            delete thenable.reject;
          }
          thenable.resolve = value => {
            finalize({
              status: 'fulfilled',
              value,
            });
            resolve(value);
          };
          thenable.reject = reason => {
            finalize({
              status: 'rejected',
              reason,
            });
            reject(reason);
          };
          return thenable;
        }
        //# sourceMappingURL=thenable.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/focusManager.ts
        __turbopack_esm__({
          FocusManager: () => FocusManager,
          focusManager: () => focusManager,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)',
          );
        var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Subscribable'
        ] {
          #focused;
          #cleanup;
          #setup;
          constructor() {
            super();
            this.#setup = onFocus => {
              if (
                !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isServer'
                ] &&
                window.addEventListener
              ) {
                const listener = () => onFocus();
                window.addEventListener('visibilitychange', listener, false);
                return () => {
                  window.removeEventListener('visibilitychange', listener);
                };
              }
              return;
            };
          }
          onSubscribe() {
            if (!this.#cleanup) {
              this.setEventListener(this.#setup);
            }
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              this.#cleanup?.();
              this.#cleanup = void 0;
            }
          }
          setEventListener(setup) {
            this.#setup = setup;
            this.#cleanup?.();
            this.#cleanup = setup(focused => {
              if (typeof focused === 'boolean') {
                this.setFocused(focused);
              } else {
                this.onFocus();
              }
            });
          }
          setFocused(focused) {
            const changed = this.#focused !== focused;
            if (changed) {
              this.#focused = focused;
              this.onFocus();
            }
          }
          onFocus() {
            const isFocused = this.isFocused();
            this.listeners.forEach(listener => {
              listener(isFocused);
            });
          }
          isFocused() {
            if (typeof this.#focused === 'boolean') {
              return this.#focused;
            }
            return globalThis.document?.visibilityState !== 'hidden';
          }
        };
        var focusManager = new FocusManager();
        //# sourceMappingURL=focusManager.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/retryer.ts
        __turbopack_esm__({
          CancelledError: () => CancelledError,
          canFetch: () => canFetch,
          createRetryer: () => createRetryer,
          isCancelledError: () => isCancelledError,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        function defaultRetryDelay(failureCount) {
          return Math.min(1e3 * 2 ** failureCount, 3e4);
        }
        function canFetch(networkMode) {
          return (networkMode ?? 'online') === 'online'
            ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'onlineManager'
              ].isOnline()
            : true;
        }
        var CancelledError = class extends Error {
          constructor(options) {
            super('CancelledError');
            this.revert = options?.revert;
            this.silent = options?.silent;
          }
        };
        function isCancelledError(value) {
          return value instanceof CancelledError;
        }
        function createRetryer(config) {
          let isRetryCancelled = false;
          let failureCount = 0;
          let isResolved = false;
          let continueFn;
          const thenable = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'pendingThenable'
          ])();
          const cancel = cancelOptions => {
            if (!isResolved) {
              reject(new CancelledError(cancelOptions));
              config.abort?.();
            }
          };
          const cancelRetry = () => {
            isRetryCancelled = true;
          };
          const continueRetry = () => {
            isRetryCancelled = false;
          };
          const canContinue = () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'focusManager'
            ].isFocused() &&
            (config.networkMode === 'always' ||
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'onlineManager'
              ].isOnline()) &&
            config.canRun();
          const canStart = () => canFetch(config.networkMode) && config.canRun();
          const resolve = value => {
            if (!isResolved) {
              isResolved = true;
              config.onSuccess?.(value);
              continueFn?.();
              thenable.resolve(value);
            }
          };
          const reject = value => {
            if (!isResolved) {
              isResolved = true;
              config.onError?.(value);
              continueFn?.();
              thenable.reject(value);
            }
          };
          const pause = () => {
            return new Promise(continueResolve => {
              continueFn = value => {
                if (isResolved || canContinue()) {
                  continueResolve(value);
                }
              };
              config.onPause?.();
            }).then(() => {
              continueFn = void 0;
              if (!isResolved) {
                config.onContinue?.();
              }
            });
          };
          const run = () => {
            if (isResolved) {
              return;
            }
            let promiseOrValue;
            const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
            try {
              promiseOrValue = initialPromise ?? config.fn();
            } catch (error) {
              promiseOrValue = Promise.reject(error);
            }
            Promise.resolve(promiseOrValue)
              .then(resolve)
              .catch(error => {
                if (isResolved) {
                  return;
                }
                const retry =
                  config.retry ??
                  (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isServer'
                  ]
                    ? 0
                    : 3);
                const retryDelay = config.retryDelay ?? defaultRetryDelay;
                const delay = typeof retryDelay === 'function' ? retryDelay(failureCount, error) : retryDelay;
                const shouldRetry =
                  retry === true ||
                  (typeof retry === 'number' && failureCount < retry) ||
                  (typeof retry === 'function' && retry(failureCount, error));
                if (isRetryCancelled || !shouldRetry) {
                  reject(error);
                  return;
                }
                failureCount++;
                config.onFail?.(failureCount, error);
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'sleep'
                ])(delay)
                  .then(() => {
                    return canContinue() ? void 0 : pause();
                  })
                  .then(() => {
                    if (isRetryCancelled) {
                      reject(error);
                    } else {
                      run();
                    }
                  });
              });
          };
          return {
            promise: thenable,
            cancel,
            continue: () => {
              continueFn?.();
              return thenable;
            },
            cancelRetry,
            continueRetry,
            canStart,
            start: () => {
              if (canStart()) {
                run();
              } else {
                pause().then(run);
              }
              return thenable;
            },
          };
        }
        //# sourceMappingURL=retryer.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/notifyManager.ts
        __turbopack_esm__({
          createNotifyManager: () => createNotifyManager,
          notifyManager: () => notifyManager,
        });
        function createNotifyManager() {
          let queue = [];
          let transactions = 0;
          let notifyFn = callback => {
            callback();
          };
          let batchNotifyFn = callback => {
            callback();
          };
          let scheduleFn = cb => setTimeout(cb, 0);
          const schedule = callback => {
            if (transactions) {
              queue.push(callback);
            } else {
              scheduleFn(() => {
                notifyFn(callback);
              });
            }
          };
          const flush = () => {
            const originalQueue = queue;
            queue = [];
            if (originalQueue.length) {
              scheduleFn(() => {
                batchNotifyFn(() => {
                  originalQueue.forEach(callback => {
                    notifyFn(callback);
                  });
                });
              });
            }
          };
          return {
            batch: callback => {
              let result;
              transactions++;
              try {
                result = callback();
              } finally {
                transactions--;
                if (!transactions) {
                  flush();
                }
              }
              return result;
            },
            /**
             * All calls to the wrapped function will be batched.
             */ batchCalls: callback => {
              return (...args) => {
                schedule(() => {
                  callback(...args);
                });
              };
            },
            schedule,
            /**
             * Use this method to set a custom notify function.
             * This can be used to for example wrap notifications with `React.act` while running tests.
             */ setNotifyFunction: fn => {
              notifyFn = fn;
            },
            /**
             * Use this method to set a custom function to batch notifications together into a single tick.
             * By default React Query will use the batch function provided by ReactDOM or React Native.
             */ setBatchNotifyFunction: fn => {
              batchNotifyFn = fn;
            },
            setScheduler: fn => {
              scheduleFn = fn;
            },
          };
        }
        var notifyManager = createNotifyManager();
        //# sourceMappingURL=notifyManager.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/removable.ts
        __turbopack_esm__({
          Removable: () => Removable,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var Removable = class {
          #gcTimeout;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout();
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isValidTimeout'
              ])(this.gcTime)
            ) {
              this.#gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime);
            }
          }
          updateGcTime(newGcTime) {
            this.gcTime = Math.max(
              this.gcTime || 0,
              newGcTime ??
                (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isServer'
                ]
                  ? Infinity
                  : 5 * 60 * 1e3),
            );
          }
          clearGcTimeout() {
            if (this.#gcTimeout) {
              clearTimeout(this.#gcTimeout);
              this.#gcTimeout = void 0;
            }
          }
        };
        //# sourceMappingURL=removable.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/query.ts
        __turbopack_esm__({
          Query: () => Query,
          fetchState: () => fetchState,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)',
          );
        var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Removable'
        ] {
          #initialState;
          #revertState;
          #cache;
          #client;
          #retryer;
          #defaultOptions;
          #abortSignalConsumed;
          constructor(config) {
            super();
            this.#abortSignalConsumed = false;
            this.#defaultOptions = config.defaultOptions;
            this.setOptions(config.options);
            this.observers = [];
            this.#client = config.client;
            this.#cache = this.#client.getQueryCache();
            this.queryKey = config.queryKey;
            this.queryHash = config.queryHash;
            this.#initialState = getDefaultState(this.options);
            this.state = config.state ?? this.#initialState;
            this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#retryer?.promise;
          }
          setOptions(options) {
            this.options = {
              ...this.#defaultOptions,
              ...options,
            };
            this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            if (!this.observers.length && this.state.fetchStatus === 'idle') {
              this.#cache.remove(this);
            }
          }
          setData(newData, options) {
            const data = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'replaceData'
            ])(this.state.data, newData, this.options);
            this.#dispatch({
              data,
              type: 'success',
              dataUpdatedAt: options?.updatedAt,
              manual: options?.manual,
            });
            return data;
          }
          setState(state, setStateOptions) {
            this.#dispatch({
              type: 'setState',
              state,
              setStateOptions,
            });
          }
          cancel(options) {
            const promise = this.#retryer?.promise;
            this.#retryer?.cancel(options);
            return promise
              ? promise
                  .then(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'noop'
                    ],
                  )
                  .catch(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'noop'
                    ],
                  )
              : Promise.resolve();
          }
          destroy() {
            super.destroy();
            this.cancel({
              silent: true,
            });
          }
          reset() {
            this.destroy();
            this.setState(this.#initialState);
          }
          isActive() {
            return this.observers.some(
              observer =>
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'resolveEnabled'
                ])(observer.options.enabled, this) !== false,
            );
          }
          isDisabled() {
            if (this.getObserversCount() > 0) {
              return !this.isActive();
            }
            return (
              this.options.queryFn ===
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'skipToken'
                ] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
            );
          }
          isStale() {
            if (this.state.isInvalidated) {
              return true;
            }
            if (this.getObserversCount() > 0) {
              return this.observers.some(observer => observer.getCurrentResult().isStale);
            }
            return this.state.data === void 0;
          }
          isStaleByTime(staleTime = 0) {
            return (
              this.state.isInvalidated ||
              this.state.data === void 0 ||
              !(0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'timeUntilStale'
              ])(this.state.dataUpdatedAt, staleTime)
            );
          }
          onFocus() {
            const observer = this.observers.find(x => x.shouldFetchOnWindowFocus());
            observer?.refetch({
              cancelRefetch: false,
            });
            this.#retryer?.continue();
          }
          onOnline() {
            const observer = this.observers.find(x => x.shouldFetchOnReconnect());
            observer?.refetch({
              cancelRefetch: false,
            });
            this.#retryer?.continue();
          }
          addObserver(observer) {
            if (!this.observers.includes(observer)) {
              this.observers.push(observer);
              this.clearGcTimeout();
              this.#cache.notify({
                type: 'observerAdded',
                query: this,
                observer,
              });
            }
          }
          removeObserver(observer) {
            if (this.observers.includes(observer)) {
              this.observers = this.observers.filter(x => x !== observer);
              if (!this.observers.length) {
                if (this.#retryer) {
                  if (this.#abortSignalConsumed) {
                    this.#retryer.cancel({
                      revert: true,
                    });
                  } else {
                    this.#retryer.cancelRetry();
                  }
                }
                this.scheduleGc();
              }
              this.#cache.notify({
                type: 'observerRemoved',
                query: this,
                observer,
              });
            }
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            if (!this.state.isInvalidated) {
              this.#dispatch({
                type: 'invalidate',
              });
            }
          }
          fetch(options, fetchOptions) {
            if (this.state.fetchStatus !== 'idle') {
              if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                  silent: true,
                });
              } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
              }
            }
            if (options) {
              this.setOptions(options);
            }
            if (!this.options.queryFn) {
              const observer = this.observers.find(x => x.options.queryFn);
              if (observer) {
                this.setOptions(observer.options);
              }
            }
            if (('TURBOPACK compile-time truthy', 1)) {
              if (!Array.isArray(this.options.queryKey)) {
                console.error(
                  `As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`,
                );
              }
            }
            const abortController = new AbortController();
            const addSignalProperty = object => {
              Object.defineProperty(object, 'signal', {
                enumerable: true,
                get: () => {
                  this.#abortSignalConsumed = true;
                  return abortController.signal;
                },
              });
            };
            const fetchFn = () => {
              const queryFn = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ensureQueryFn'
              ])(this.options, fetchOptions);
              const queryFnContext = {
                client: this.#client,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              addSignalProperty(queryFnContext);
              this.#abortSignalConsumed = false;
              if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
              }
              return queryFn(queryFnContext);
            };
            const context = {
              fetchOptions,
              options: this.options,
              queryKey: this.queryKey,
              client: this.#client,
              state: this.state,
              fetchFn,
            };
            addSignalProperty(context);
            this.options.behavior?.onFetch(context, this);
            this.#revertState = this.state;
            if (this.state.fetchStatus === 'idle' || this.state.fetchMeta !== context.fetchOptions?.meta) {
              this.#dispatch({
                type: 'fetch',
                meta: context.fetchOptions?.meta,
              });
            }
            const onError = error => {
              if (
                !(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'isCancelledError'
                  ])(error) && error.silent
                )
              ) {
                this.#dispatch({
                  type: 'error',
                  error,
                });
              }
              if (
                !(0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isCancelledError'
                ])(error)
              ) {
                this.#cache.config.onError?.(error, this);
                this.#cache.config.onSettled?.(this.state.data, error, this);
              }
              this.scheduleGc();
            };
            this.#retryer = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'createRetryer'
            ])({
              initialPromise: fetchOptions?.initialPromise,
              fn: context.fetchFn,
              abort: abortController.abort.bind(abortController),
              onSuccess: data => {
                if (data === void 0) {
                  if (('TURBOPACK compile-time truthy', 1)) {
                    console.error(
                      `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`,
                    );
                  }
                  onError(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(data);
                } catch (error) {
                  onError(error);
                  return;
                }
                this.#cache.config.onSuccess?.(data, this);
                this.#cache.config.onSettled?.(data, this.state.error, this);
                this.scheduleGc();
              },
              onError,
              onFail: (failureCount, error) => {
                this.#dispatch({
                  type: 'failed',
                  failureCount,
                  error,
                });
              },
              onPause: () => {
                this.#dispatch({
                  type: 'pause',
                });
              },
              onContinue: () => {
                this.#dispatch({
                  type: 'continue',
                });
              },
              retry: context.options.retry,
              retryDelay: context.options.retryDelay,
              networkMode: context.options.networkMode,
              canRun: () => true,
            });
            return this.#retryer.start();
          }
          #dispatch(action) {
            const reducer = state => {
              switch (action.type) {
                case 'failed':
                  return {
                    ...state,
                    fetchFailureCount: action.failureCount,
                    fetchFailureReason: action.error,
                  };
                case 'pause':
                  return {
                    ...state,
                    fetchStatus: 'paused',
                  };
                case 'continue':
                  return {
                    ...state,
                    fetchStatus: 'fetching',
                  };
                case 'fetch':
                  return {
                    ...state,
                    ...fetchState(state.data, this.options),
                    fetchMeta: action.meta ?? null,
                  };
                case 'success':
                  return {
                    ...state,
                    data: action.data,
                    dataUpdateCount: state.dataUpdateCount + 1,
                    dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: false,
                    status: 'success',
                    ...(!action.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  const error = action.error;
                  if (
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'isCancelledError'
                    ])(error) &&
                    error.revert &&
                    this.#revertState
                  ) {
                    return {
                      ...this.#revertState,
                      fetchStatus: 'idle',
                    };
                  }
                  return {
                    ...state,
                    error,
                    errorUpdateCount: state.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: state.fetchFailureCount + 1,
                    fetchFailureReason: error,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return {
                    ...state,
                    isInvalidated: true,
                  };
                case 'setState':
                  return {
                    ...state,
                    ...action.state,
                  };
              }
            };
            this.state = reducer(this.state);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.observers.forEach(observer => {
                observer.onQueryUpdate();
              });
              this.#cache.notify({
                query: this,
                type: 'updated',
                action,
              });
            });
          }
        };
        function fetchState(data, options) {
          return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'canFetch'
            ])(options.networkMode)
              ? 'fetching'
              : 'paused',
            ...(data === void 0 && {
              error: null,
              status: 'pending',
            }),
          };
        }
        function getDefaultState(options) {
          const data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
          const hasData = data !== void 0;
          const initialDataUpdatedAt = hasData
            ? typeof options.initialDataUpdatedAt === 'function'
              ? options.initialDataUpdatedAt()
              : options.initialDataUpdatedAt
            : 0;
          return {
            data,
            dataUpdateCount: 0,
            dataUpdatedAt: hasData ? (initialDataUpdatedAt ?? Date.now()) : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: false,
            status: hasData ? 'success' : 'pending',
            fetchStatus: 'idle',
          };
        }
        //# sourceMappingURL=query.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/queryCache.ts
        __turbopack_esm__({
          QueryCache: () => QueryCache,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)',
          );
        var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Subscribable'
        ] {
          constructor(config = {}) {
            super();
            this.config = config;
            this.#queries = /* @__PURE__ */ new Map();
          }
          #queries;
          build(client, options, state) {
            const queryKey = options.queryKey;
            const queryHash =
              options.queryHash ??
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'hashQueryKeyByOptions'
              ])(queryKey, options);
            let query = this.get(queryHash);
            if (!query) {
              query =
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'Query'
                ]({
                  client,
                  queryKey,
                  queryHash,
                  options: client.defaultQueryOptions(options),
                  state,
                  defaultOptions: client.getQueryDefaults(queryKey),
                });
              this.add(query);
            }
            return query;
          }
          add(query) {
            if (!this.#queries.has(query.queryHash)) {
              this.#queries.set(query.queryHash, query);
              this.notify({
                type: 'added',
                query,
              });
            }
          }
          remove(query) {
            const queryInMap = this.#queries.get(query.queryHash);
            if (queryInMap) {
              query.destroy();
              if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
              }
              this.notify({
                type: 'removed',
                query,
              });
            }
          }
          clear() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.getAll().forEach(query => {
                this.remove(query);
              });
            });
          }
          get(queryHash) {
            return this.#queries.get(queryHash);
          }
          getAll() {
            return [...this.#queries.values()];
          }
          find(filters) {
            const defaultedFilters = {
              exact: true,
              ...filters,
            };
            return this.getAll().find(query =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'matchQuery'
              ])(defaultedFilters, query),
            );
          }
          findAll(filters = {}) {
            const queries = this.getAll();
            return Object.keys(filters).length > 0
              ? queries.filter(query =>
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'matchQuery'
                  ])(filters, query),
                )
              : queries;
          }
          notify(event) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.listeners.forEach(listener => {
                listener(event);
              });
            });
          }
          onFocus() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.getAll().forEach(query => {
                query.onFocus();
              });
            });
          }
          onOnline() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.getAll().forEach(query => {
                query.onOnline();
              });
            });
          }
        };
        //# sourceMappingURL=queryCache.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/mutation.ts
        __turbopack_esm__({
          Mutation: () => Mutation,
          getDefaultState: () => getDefaultState,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)',
          );
        var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Removable'
        ] {
          #observers;
          #mutationCache;
          #retryer;
          constructor(config) {
            super();
            this.mutationId = config.mutationId;
            this.#mutationCache = config.mutationCache;
            this.#observers = [];
            this.state = config.state || getDefaultState();
            this.setOptions(config.options);
            this.scheduleGc();
          }
          setOptions(options) {
            this.options = options;
            this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(observer) {
            if (!this.#observers.includes(observer)) {
              this.#observers.push(observer);
              this.clearGcTimeout();
              this.#mutationCache.notify({
                type: 'observerAdded',
                mutation: this,
                observer,
              });
            }
          }
          removeObserver(observer) {
            this.#observers = this.#observers.filter(x => x !== observer);
            this.scheduleGc();
            this.#mutationCache.notify({
              type: 'observerRemoved',
              mutation: this,
              observer,
            });
          }
          optionalRemove() {
            if (!this.#observers.length) {
              if (this.state.status === 'pending') {
                this.scheduleGc();
              } else {
                this.#mutationCache.remove(this);
              }
            }
          }
          continue() {
            return (
              this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
              this.execute(this.state.variables)
            );
          }
          async execute(variables) {
            this.#retryer = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'createRetryer'
            ])({
              fn: () => {
                if (!this.options.mutationFn) {
                  return Promise.reject(new Error('No mutationFn found'));
                }
                return this.options.mutationFn(variables);
              },
              onFail: (failureCount, error) => {
                this.#dispatch({
                  type: 'failed',
                  failureCount,
                  error,
                });
              },
              onPause: () => {
                this.#dispatch({
                  type: 'pause',
                });
              },
              onContinue: () => {
                this.#dispatch({
                  type: 'continue',
                });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#mutationCache.canRun(this),
            });
            const restored = this.state.status === 'pending';
            const isPaused = !this.#retryer.canStart();
            try {
              if (!restored) {
                this.#dispatch({
                  type: 'pending',
                  variables,
                  isPaused,
                });
                await this.#mutationCache.config.onMutate?.(variables, this);
                const context = await this.options.onMutate?.(variables);
                if (context !== this.state.context) {
                  this.#dispatch({
                    type: 'pending',
                    context,
                    variables,
                    isPaused,
                  });
                }
              }
              const data = await this.#retryer.start();
              await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this);
              await this.options.onSuccess?.(data, variables, this.state.context);
              await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this);
              await this.options.onSettled?.(data, null, variables, this.state.context);
              this.#dispatch({
                type: 'success',
                data,
              });
              return data;
            } catch (error) {
              try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this);
                await this.options.onError?.(error, variables, this.state.context);
                await this.#mutationCache.config.onSettled?.(
                  void 0,
                  error,
                  this.state.variables,
                  this.state.context,
                  this,
                );
                await this.options.onSettled?.(void 0, error, variables, this.state.context);
                throw error;
              } finally {
                this.#dispatch({
                  type: 'error',
                  error,
                });
              }
            } finally {
              this.#mutationCache.runNext(this);
            }
          }
          #dispatch(action) {
            const reducer = state => {
              switch (action.type) {
                case 'failed':
                  return {
                    ...state,
                    failureCount: action.failureCount,
                    failureReason: action.error,
                  };
                case 'pause':
                  return {
                    ...state,
                    isPaused: true,
                  };
                case 'continue':
                  return {
                    ...state,
                    isPaused: false,
                  };
                case 'pending':
                  return {
                    ...state,
                    context: action.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: action.isPaused,
                    status: 'pending',
                    variables: action.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...state,
                    data: action.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: false,
                  };
                case 'error':
                  return {
                    ...state,
                    data: void 0,
                    error: action.error,
                    failureCount: state.failureCount + 1,
                    failureReason: action.error,
                    isPaused: false,
                    status: 'error',
                  };
              }
            };
            this.state = reducer(this.state);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.#observers.forEach(observer => {
                observer.onMutationUpdate(action);
              });
              this.#mutationCache.notify({
                mutation: this,
                type: 'updated',
                action,
              });
            });
          }
        };
        function getDefaultState() {
          return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: false,
            status: 'idle',
            variables: void 0,
            submittedAt: 0,
          };
        }
        //# sourceMappingURL=mutation.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/mutationCache.ts
        __turbopack_esm__({
          MutationCache: () => MutationCache,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)',
          );
        var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'Subscribable'
        ] {
          constructor(config = {}) {
            super();
            this.config = config;
            this.#mutations = /* @__PURE__ */ new Set();
            this.#scopes = /* @__PURE__ */ new Map();
            this.#mutationId = 0;
          }
          #mutations;
          #scopes;
          #mutationId;
          build(client, options, state) {
            const mutation =
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'Mutation'
              ]({
                mutationCache: this,
                mutationId: ++this.#mutationId,
                options: client.defaultMutationOptions(options),
                state,
              });
            this.add(mutation);
            return mutation;
          }
          add(mutation) {
            this.#mutations.add(mutation);
            const scope = scopeFor(mutation);
            if (typeof scope === 'string') {
              const scopedMutations = this.#scopes.get(scope);
              if (scopedMutations) {
                scopedMutations.push(mutation);
              } else {
                this.#scopes.set(scope, [mutation]);
              }
            }
            this.notify({
              type: 'added',
              mutation,
            });
          }
          remove(mutation) {
            if (this.#mutations.delete(mutation)) {
              const scope = scopeFor(mutation);
              if (typeof scope === 'string') {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                  if (scopedMutations.length > 1) {
                    const index = scopedMutations.indexOf(mutation);
                    if (index !== -1) {
                      scopedMutations.splice(index, 1);
                    }
                  } else if (scopedMutations[0] === mutation) {
                    this.#scopes.delete(scope);
                  }
                }
              }
            }
            this.notify({
              type: 'removed',
              mutation,
            });
          }
          canRun(mutation) {
            const scope = scopeFor(mutation);
            if (typeof scope === 'string') {
              const mutationsWithSameScope = this.#scopes.get(scope);
              const firstPendingMutation = mutationsWithSameScope?.find(m => m.state.status === 'pending');
              return !firstPendingMutation || firstPendingMutation === mutation;
            } else {
              return true;
            }
          }
          runNext(mutation) {
            const scope = scopeFor(mutation);
            if (typeof scope === 'string') {
              const foundMutation = this.#scopes.get(scope)?.find(m => m !== mutation && m.state.isPaused);
              return foundMutation?.continue() ?? Promise.resolve();
            } else {
              return Promise.resolve();
            }
          }
          clear() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.#mutations.forEach(mutation => {
                this.notify({
                  type: 'removed',
                  mutation,
                });
              });
              this.#mutations.clear();
              this.#scopes.clear();
            });
          }
          getAll() {
            return Array.from(this.#mutations);
          }
          find(filters) {
            const defaultedFilters = {
              exact: true,
              ...filters,
            };
            return this.getAll().find(mutation =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'matchMutation'
              ])(defaultedFilters, mutation),
            );
          }
          findAll(filters = {}) {
            return this.getAll().filter(mutation =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'matchMutation'
              ])(filters, mutation),
            );
          }
          notify(event) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.listeners.forEach(listener => {
                listener(event);
              });
            });
          }
          resumePausedMutations() {
            const pausedMutations = this.getAll().filter(x => x.state.isPaused);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() =>
              Promise.all(
                pausedMutations.map(mutation =>
                  mutation
                    .continue()
                    .catch(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'noop'
                      ],
                    ),
                ),
              ),
            );
          }
        };
        function scopeFor(mutation) {
          return mutation.options.scope?.id;
        }
        //# sourceMappingURL=mutationCache.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/infiniteQueryBehavior.ts
        __turbopack_esm__({
          hasNextPage: () => hasNextPage,
          hasPreviousPage: () => hasPreviousPage,
          infiniteQueryBehavior: () => infiniteQueryBehavior,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        function infiniteQueryBehavior(pages) {
          return {
            onFetch: (context, query) => {
              const options = context.options;
              const direction = context.fetchOptions?.meta?.fetchMore?.direction;
              const oldPages = context.state.data?.pages || [];
              const oldPageParams = context.state.data?.pageParams || [];
              let result = {
                pages: [],
                pageParams: [],
              };
              let currentPage = 0;
              const fetchFn = async () => {
                let cancelled = false;
                const addSignalProperty = object => {
                  Object.defineProperty(object, 'signal', {
                    enumerable: true,
                    get: () => {
                      if (context.signal.aborted) {
                        cancelled = true;
                      } else {
                        context.signal.addEventListener('abort', () => {
                          cancelled = true;
                        });
                      }
                      return context.signal;
                    },
                  });
                };
                const queryFn = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ensureQueryFn'
                ])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous) => {
                  if (cancelled) {
                    return Promise.reject();
                  }
                  if (param == null && data.pages.length) {
                    return Promise.resolve(data);
                  }
                  const queryFnContext = {
                    client: context.client,
                    queryKey: context.queryKey,
                    pageParam: param,
                    direction: previous ? 'backward' : 'forward',
                    meta: context.options.meta,
                  };
                  addSignalProperty(queryFnContext);
                  const page = await queryFn(queryFnContext);
                  const { maxPages } = context.options;
                  const addTo = previous
                    ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'addToStart'
                      ]
                    : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'addToEnd'
                      ];
                  return {
                    pages: addTo(data.pages, page, maxPages),
                    pageParams: addTo(data.pageParams, param, maxPages),
                  };
                };
                if (direction && oldPages.length) {
                  const previous = direction === 'backward';
                  const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                  const oldData = {
                    pages: oldPages,
                    pageParams: oldPageParams,
                  };
                  const param = pageParamFn(options, oldData);
                  result = await fetchPage(oldData, param, previous);
                } else {
                  const remainingPages = pages ?? oldPages.length;
                  do {
                    const param =
                      currentPage === 0
                        ? (oldPageParams[0] ?? options.initialPageParam)
                        : getNextPageParam(options, result);
                    if (currentPage > 0 && param == null) {
                      break;
                    }
                    result = await fetchPage(result, param);
                    currentPage++;
                  } while (currentPage < remainingPages);
                }
                return result;
              };
              if (context.options.persister) {
                context.fetchFn = () => {
                  return context.options.persister?.(
                    fetchFn,
                    {
                      client: context.client,
                      queryKey: context.queryKey,
                      meta: context.options.meta,
                      signal: context.signal,
                    },
                    query,
                  );
                };
              } else {
                context.fetchFn = fetchFn;
              }
            },
          };
        }
        function getNextPageParam(options, { pages, pageParams }) {
          const lastIndex = pages.length - 1;
          return pages.length > 0
            ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams)
            : void 0;
        }
        function getPreviousPageParam(options, { pages, pageParams }) {
          return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
        }
        function hasNextPage(options, data) {
          if (!data) return false;
          return getNextPageParam(options, data) != null;
        }
        function hasPreviousPage(options, data) {
          if (!data || !options.getPreviousPageParam) return false;
          return getPreviousPageParam(options, data) != null;
        }
        //# sourceMappingURL=infiniteQueryBehavior.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/queryClient.ts
        __turbopack_esm__({
          QueryClient: () => QueryClient,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)',
          );
        var QueryClient = class {
          #queryCache;
          #mutationCache;
          #defaultOptions;
          #queryDefaults;
          #mutationDefaults;
          #mountCount;
          #unsubscribeFocus;
          #unsubscribeOnline;
          constructor(config = {}) {
            this.#queryCache =
              config.queryCache ||
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'QueryCache'
              ]();
            this.#mutationCache =
              config.mutationCache ||
              new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'MutationCache'
              ]();
            this.#defaultOptions = config.defaultOptions || {};
            this.#queryDefaults = /* @__PURE__ */ new Map();
            this.#mutationDefaults = /* @__PURE__ */ new Map();
            this.#mountCount = 0;
          }
          mount() {
            this.#mountCount++;
            if (this.#mountCount !== 1) return;
            this.#unsubscribeFocus =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'focusManager'
              ].subscribe(async focused => {
                if (focused) {
                  await this.resumePausedMutations();
                  this.#queryCache.onFocus();
                }
              });
            this.#unsubscribeOnline =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'onlineManager'
              ].subscribe(async online => {
                if (online) {
                  await this.resumePausedMutations();
                  this.#queryCache.onOnline();
                }
              });
          }
          unmount() {
            this.#mountCount--;
            if (this.#mountCount !== 0) return;
            this.#unsubscribeFocus?.();
            this.#unsubscribeFocus = void 0;
            this.#unsubscribeOnline?.();
            this.#unsubscribeOnline = void 0;
          }
          isFetching(filters) {
            return this.#queryCache.findAll({
              ...filters,
              fetchStatus: 'fetching',
            }).length;
          }
          isMutating(filters) {
            return this.#mutationCache.findAll({
              ...filters,
              status: 'pending',
            }).length;
          }
          getQueryData(queryKey) {
            const options = this.defaultQueryOptions({
              queryKey,
            });
            return this.#queryCache.get(options.queryHash)?.state.data;
          }
          ensureQueryData(options) {
            const defaultedOptions = this.defaultQueryOptions(options);
            const query = this.#queryCache.build(this, defaultedOptions);
            const cachedData = query.state.data;
            if (cachedData === void 0) {
              return this.fetchQuery(options);
            }
            if (
              options.revalidateIfStale &&
              query.isStaleByTime(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'resolveStaleTime'
                ])(defaultedOptions.staleTime, query),
              )
            ) {
              void this.prefetchQuery(defaultedOptions);
            }
            return Promise.resolve(cachedData);
          }
          getQueriesData(filters) {
            return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
              const data = state.data;
              return [queryKey, data];
            });
          }
          setQueryData(queryKey, updater, options) {
            const defaultedOptions = this.defaultQueryOptions({
              queryKey,
            });
            const query = this.#queryCache.get(defaultedOptions.queryHash);
            const prevData = query?.state.data;
            const data = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'functionalUpdate'
            ])(updater, prevData);
            if (data === void 0) {
              return void 0;
            }
            return this.#queryCache.build(this, defaultedOptions).setData(data, {
              ...options,
              manual: true,
            });
          }
          setQueriesData(filters, updater, options) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() =>
              this.#queryCache
                .findAll(filters)
                .map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]),
            );
          }
          getQueryState(queryKey) {
            const options = this.defaultQueryOptions({
              queryKey,
            });
            return this.#queryCache.get(options.queryHash)?.state;
          }
          removeQueries(filters) {
            const queryCache = this.#queryCache;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              queryCache.findAll(filters).forEach(query => {
                queryCache.remove(query);
              });
            });
          }
          resetQueries(filters, options) {
            const queryCache = this.#queryCache;
            const refetchFilters = {
              type: 'active',
              ...filters,
            };
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              queryCache.findAll(filters).forEach(query => {
                query.reset();
              });
              return this.refetchQueries(refetchFilters, options);
            });
          }
          cancelQueries(filters, cancelOptions = {}) {
            const defaultedCancelOptions = {
              revert: true,
              ...cancelOptions,
            };
            const promises =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'notifyManager'
              ].batch(() => this.#queryCache.findAll(filters).map(query => query.cancel(defaultedCancelOptions)));
            return Promise.all(promises)
              .then(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              )
              .catch(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              );
          }
          invalidateQueries(filters, options = {}) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'notifyManager'
            ].batch(() => {
              this.#queryCache.findAll(filters).forEach(query => {
                query.invalidate();
              });
              if (filters?.refetchType === 'none') {
                return Promise.resolve();
              }
              const refetchFilters = {
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? 'active',
              };
              return this.refetchQueries(refetchFilters, options);
            });
          }
          refetchQueries(filters, options = {}) {
            const fetchOptions = {
              ...options,
              cancelRefetch: options.cancelRefetch ?? true,
            };
            const promises =
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'notifyManager'
              ].batch(() =>
                this.#queryCache
                  .findAll(filters)
                  .filter(query => !query.isDisabled())
                  .map(query => {
                    let promise = query.fetch(void 0, fetchOptions);
                    if (!fetchOptions.throwOnError) {
                      promise = promise.catch(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'noop'
                        ],
                      );
                    }
                    return query.state.fetchStatus === 'paused' ? Promise.resolve() : promise;
                  }),
              );
            return Promise.all(promises).then(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'noop'
              ],
            );
          }
          fetchQuery(options) {
            const defaultedOptions = this.defaultQueryOptions(options);
            if (defaultedOptions.retry === void 0) {
              defaultedOptions.retry = false;
            }
            const query = this.#queryCache.build(this, defaultedOptions);
            return query.isStaleByTime(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'resolveStaleTime'
              ])(defaultedOptions.staleTime, query),
            )
              ? query.fetch(defaultedOptions)
              : Promise.resolve(query.state.data);
          }
          prefetchQuery(options) {
            return this.fetchQuery(options)
              .then(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              )
              .catch(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              );
          }
          fetchInfiniteQuery(options) {
            options.behavior = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'infiniteQueryBehavior'
            ])(options.pages);
            return this.fetchQuery(options);
          }
          prefetchInfiniteQuery(options) {
            return this.fetchInfiniteQuery(options)
              .then(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              )
              .catch(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'noop'
                ],
              );
          }
          ensureInfiniteQueryData(options) {
            options.behavior = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'infiniteQueryBehavior'
            ])(options.pages);
            return this.ensureQueryData(options);
          }
          resumePausedMutations() {
            if (
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'onlineManager'
              ].isOnline()
            ) {
              return this.#mutationCache.resumePausedMutations();
            }
            return Promise.resolve();
          }
          getQueryCache() {
            return this.#queryCache;
          }
          getMutationCache() {
            return this.#mutationCache;
          }
          getDefaultOptions() {
            return this.#defaultOptions;
          }
          setDefaultOptions(options) {
            this.#defaultOptions = options;
          }
          setQueryDefaults(queryKey, options) {
            this.#queryDefaults.set(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'hashKey'
              ])(queryKey),
              {
                queryKey,
                defaultOptions: options,
              },
            );
          }
          getQueryDefaults(queryKey) {
            const defaults = [...this.#queryDefaults.values()];
            const result = {};
            defaults.forEach(queryDefault => {
              if (
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'partialMatchKey'
                ])(queryKey, queryDefault.queryKey)
              ) {
                Object.assign(result, queryDefault.defaultOptions);
              }
            });
            return result;
          }
          setMutationDefaults(mutationKey, options) {
            this.#mutationDefaults.set(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'hashKey'
              ])(mutationKey),
              {
                mutationKey,
                defaultOptions: options,
              },
            );
          }
          getMutationDefaults(mutationKey) {
            const defaults = [...this.#mutationDefaults.values()];
            let result = {};
            defaults.forEach(queryDefault => {
              if (
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'partialMatchKey'
                ])(mutationKey, queryDefault.mutationKey)
              ) {
                result = {
                  ...result,
                  ...queryDefault.defaultOptions,
                };
              }
            });
            return result;
          }
          defaultQueryOptions(options) {
            if (options._defaulted) {
              return options;
            }
            const defaultedOptions = {
              ...this.#defaultOptions.queries,
              ...this.getQueryDefaults(options.queryKey),
              ...options,
              _defaulted: true,
            };
            if (!defaultedOptions.queryHash) {
              defaultedOptions.queryHash = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'hashQueryKeyByOptions'
              ])(defaultedOptions.queryKey, defaultedOptions);
            }
            if (defaultedOptions.refetchOnReconnect === void 0) {
              defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== 'always';
            }
            if (defaultedOptions.throwOnError === void 0) {
              defaultedOptions.throwOnError = !!defaultedOptions.suspense;
            }
            if (!defaultedOptions.networkMode && defaultedOptions.persister) {
              defaultedOptions.networkMode = 'offlineFirst';
            }
            if (
              defaultedOptions.queryFn ===
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'skipToken'
              ]
            ) {
              defaultedOptions.enabled = false;
            }
            return defaultedOptions;
          }
          defaultMutationOptions(options) {
            if (options?._defaulted) {
              return options;
            }
            return {
              ...this.#defaultOptions.mutations,
              ...(options?.mutationKey && this.getMutationDefaults(options.mutationKey)),
              ...options,
              _defaulted: true,
            };
          }
          clear() {
            this.#queryCache.clear();
            this.#mutationCache.clear();
          }
        };
        //# sourceMappingURL=queryClient.js.map
      }
    },
  '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)':
    __turbopack_context__ => {
      'use strict';

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
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        // src/hydration.ts
        __turbopack_esm__({
          defaultShouldDehydrateMutation: () => defaultShouldDehydrateMutation,
          defaultShouldDehydrateQuery: () => defaultShouldDehydrateQuery,
          defaultshouldRedactErrors: () => defaultshouldRedactErrors,
          dehydrate: () => dehydrate,
          hydrate: () => hydrate,
        });
        function defaultTransformerFn(data) {
          return data;
        }
        function dehydrateMutation(mutation) {
          return {
            mutationKey: mutation.options.mutationKey,
            state: mutation.state,
            ...(mutation.options.scope && {
              scope: mutation.options.scope,
            }),
            ...(mutation.meta && {
              meta: mutation.meta,
            }),
          };
        }
        function dehydrateQuery(query, serializeData, shouldRedactErrors) {
          return {
            state: {
              ...query.state,
              ...(query.state.data !== void 0 && {
                data: serializeData(query.state.data),
              }),
            },
            queryKey: query.queryKey,
            queryHash: query.queryHash,
            ...(query.state.status === 'pending' && {
              promise: query.promise?.then(serializeData).catch(error => {
                if (!shouldRedactErrors(error)) {
                  return Promise.reject(error);
                }
                if (('TURBOPACK compile-time truthy', 1)) {
                  console.error(
                    `A query that was dehydrated as pending ended up rejecting. [${query.queryHash}]: ${error}; The error will be redacted in production builds`,
                  );
                }
                return Promise.reject(new Error('redacted'));
              }),
            }),
            ...(query.meta && {
              meta: query.meta,
            }),
          };
        }
        function defaultShouldDehydrateMutation(mutation) {
          return mutation.state.isPaused;
        }
        function defaultShouldDehydrateQuery(query) {
          return query.state.status === 'success';
        }
        function defaultshouldRedactErrors(_) {
          return true;
        }
        function dehydrate(client, options = {}) {
          const filterMutation =
            options.shouldDehydrateMutation ??
            client.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
            defaultShouldDehydrateMutation;
          const mutations = client
            .getMutationCache()
            .getAll()
            .flatMap(mutation => (filterMutation(mutation) ? [dehydrateMutation(mutation)] : []));
          const filterQuery =
            options.shouldDehydrateQuery ??
            client.getDefaultOptions().dehydrate?.shouldDehydrateQuery ??
            defaultShouldDehydrateQuery;
          const shouldRedactErrors =
            options.shouldRedactErrors ??
            client.getDefaultOptions().dehydrate?.shouldRedactErrors ??
            defaultshouldRedactErrors;
          const serializeData =
            options.serializeData ?? client.getDefaultOptions().dehydrate?.serializeData ?? defaultTransformerFn;
          const queries = client
            .getQueryCache()
            .getAll()
            .flatMap(query => (filterQuery(query) ? [dehydrateQuery(query, serializeData, shouldRedactErrors)] : []));
          return {
            mutations,
            queries,
          };
        }
        function hydrate(client, dehydratedState, options) {
          if (typeof dehydratedState !== 'object' || dehydratedState === null) {
            return;
          }
          const mutationCache = client.getMutationCache();
          const queryCache = client.getQueryCache();
          const deserializeData =
            options?.defaultOptions?.deserializeData ??
            client.getDefaultOptions().hydrate?.deserializeData ??
            defaultTransformerFn;
          const mutations = dehydratedState.mutations || [];
          const queries = dehydratedState.queries || [];
          mutations.forEach(({ state, ...mutationOptions }) => {
            mutationCache.build(
              client,
              {
                ...client.getDefaultOptions().hydrate?.mutations,
                ...options?.defaultOptions?.mutations,
                ...mutationOptions,
              },
              state,
            );
          });
          queries.forEach(({ queryKey, state, queryHash, meta, promise }) => {
            let query = queryCache.get(queryHash);
            const data = state.data === void 0 ? state.data : deserializeData(state.data);
            if (query) {
              if (query.state.dataUpdatedAt < state.dataUpdatedAt) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                  ...serializedState,
                  data,
                });
              }
            } else {
              query = queryCache.build(
                client,
                {
                  ...client.getDefaultOptions().hydrate?.queries,
                  ...options?.defaultOptions?.queries,
                  queryKey,
                  queryHash,
                  meta,
                }, // Reset fetch status to idle to avoid
                // query being stuck in fetching state upon hydration
                {
                  ...state,
                  data,
                  fetchStatus: 'idle',
                },
              );
            }
            if (promise) {
              const initialPromise = Promise.resolve(promise).then(deserializeData);
              void query.fetch(void 0, {
                initialPromise,
              });
            }
          });
        }
        //# sourceMappingURL=hydration.js.map
      }
    },
};

//# sourceMappingURL=08b5e__pnpm_5935ab._.js.map
