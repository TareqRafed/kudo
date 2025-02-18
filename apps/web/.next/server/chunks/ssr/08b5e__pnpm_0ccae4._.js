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
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'RedirectStatusCode', {
          enumerable: true,
          get: function () {
            return RedirectStatusCode;
          },
        });
        var RedirectStatusCode = /*#__PURE__*/ (function (RedirectStatusCode) {
          RedirectStatusCode[(RedirectStatusCode['SeeOther'] = 303)] = 'SeeOther';
          RedirectStatusCode[(RedirectStatusCode['TemporaryRedirect'] = 307)] = 'TemporaryRedirect';
          RedirectStatusCode[(RedirectStatusCode['PermanentRedirect'] = 308)] = 'PermanentRedirect';
          return RedirectStatusCode;
        })({});
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
        } //# sourceMappingURL=redirect-status-code.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
            REDIRECT_ERROR_CODE: null,
            RedirectType: null,
            isRedirectError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          REDIRECT_ERROR_CODE: function () {
            return REDIRECT_ERROR_CODE;
          },
          RedirectType: function () {
            return RedirectType;
          },
          isRedirectError: function () {
            return isRedirectError;
          },
        });
        const _redirectstatuscode = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)',
        );
        const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
        var RedirectType = /*#__PURE__*/ (function (RedirectType) {
          RedirectType['push'] = 'push';
          RedirectType['replace'] = 'replace';
          return RedirectType;
        })({});
        function isRedirectError(error) {
          if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
            return false;
          }
          const digest = error.digest.split(';');
          const [errorCode, type] = digest;
          const destination = digest.slice(2, -2).join(';');
          const status = digest.at(-2);
          const statusCode = Number(status);
          return (
            errorCode === REDIRECT_ERROR_CODE &&
            (type === 'replace' || type === 'push') &&
            typeof destination === 'string' &&
            !isNaN(statusCode) &&
            statusCode in _redirectstatuscode.RedirectStatusCode
          );
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
        } //# sourceMappingURL=redirect-error.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
            getRedirectError: null,
            getRedirectStatusCodeFromError: null,
            getRedirectTypeFromError: null,
            getURLFromRedirectError: null,
            permanentRedirect: null,
            redirect: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          getRedirectError: function () {
            return getRedirectError;
          },
          getRedirectStatusCodeFromError: function () {
            return getRedirectStatusCodeFromError;
          },
          getRedirectTypeFromError: function () {
            return getRedirectTypeFromError;
          },
          getURLFromRedirectError: function () {
            return getURLFromRedirectError;
          },
          permanentRedirect: function () {
            return permanentRedirect;
          },
          redirect: function () {
            return redirect;
          },
        });
        const _actionasyncstorageexternal = __turbopack_require__(
          '[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)',
        );
        const _redirectstatuscode = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)',
        );
        const _redirecterror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)',
        );
        function getRedirectError(url, type, statusCode) {
          if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
          const error = new Error(_redirecterror.REDIRECT_ERROR_CODE);
          error.digest = _redirecterror.REDIRECT_ERROR_CODE + ';' + type + ';' + url + ';' + statusCode + ';';
          return error;
        }
        function redirect(/** The URL to redirect to */ url, type) {
          const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
          const redirectType =
            type ||
            ((actionStore == null ? void 0 : actionStore.isAction)
              ? _redirecterror.RedirectType.push
              : _redirecterror.RedirectType.replace);
          throw getRedirectError(url, redirectType, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
        }
        function permanentRedirect(/** The URL to redirect to */ url, type) {
          if (type === void 0) type = _redirecterror.RedirectType.replace;
          throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
        }
        function getURLFromRedirectError(error) {
          if (!(0, _redirecterror.isRedirectError)(error)) return null;
          // Slices off the beginning of the digest that contains the code and the
          // separating ';'.
          return error.digest.split(';').slice(2, -2).join(';');
        }
        function getRedirectTypeFromError(error) {
          if (!(0, _redirecterror.isRedirectError)(error)) {
            throw new Error('Not a redirect error');
          }
          return error.digest.split(';', 2)[1];
        }
        function getRedirectStatusCodeFromError(error) {
          if (!(0, _redirecterror.isRedirectError)(error)) {
            throw new Error('Not a redirect error');
          }
          return Number(error.digest.split(';').at(-2));
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
        } //# sourceMappingURL=redirect.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
            HTTPAccessErrorStatus: null,
            HTTP_ERROR_FALLBACK_ERROR_CODE: null,
            getAccessFallbackErrorTypeByStatus: null,
            getAccessFallbackHTTPStatus: null,
            isHTTPAccessFallbackError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          HTTPAccessErrorStatus: function () {
            return HTTPAccessErrorStatus;
          },
          HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
            return HTTP_ERROR_FALLBACK_ERROR_CODE;
          },
          getAccessFallbackErrorTypeByStatus: function () {
            return getAccessFallbackErrorTypeByStatus;
          },
          getAccessFallbackHTTPStatus: function () {
            return getAccessFallbackHTTPStatus;
          },
          isHTTPAccessFallbackError: function () {
            return isHTTPAccessFallbackError;
          },
        });
        const HTTPAccessErrorStatus = {
          NOT_FOUND: 404,
          FORBIDDEN: 403,
          UNAUTHORIZED: 401,
        };
        const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
        const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
        function isHTTPAccessFallbackError(error) {
          if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
            return false;
          }
          const [prefix, httpStatus] = error.digest.split(';');
          return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
        }
        function getAccessFallbackHTTPStatus(error) {
          const httpStatus = error.digest.split(';')[1];
          return Number(httpStatus);
        }
        function getAccessFallbackErrorTypeByStatus(status) {
          switch (status) {
            case 401:
              return 'unauthorized';
            case 403:
              return 'forbidden';
            case 404:
              return 'not-found';
            default:
              return;
          }
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
        } //# sourceMappingURL=http-access-fallback.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'notFound', {
          enumerable: true,
          get: function () {
            return notFound;
          },
        });
        const _httpaccessfallback = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)',
        );
        /**
         * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
         * within a route segment as well as inject a tag.
         *
         * `notFound()` can be used in
         * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
         * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
         * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
         *
         * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
         * - In a Route Handler or Server Action, it will serve a 404 to the caller.
         *
         * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
         */ const DIGEST = '' + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ';404';
        function notFound() {
          // eslint-disable-next-line no-throw-literal
          const error = new Error(DIGEST);
          error.digest = DIGEST;
          throw error;
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
        } //# sourceMappingURL=not-found.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'forbidden', {
          enumerable: true,
          get: function () {
            return forbidden;
          },
        });
        const _httpaccessfallback = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)',
        );
        // TODO: Add `forbidden` docs
        /**
         * @experimental
         * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
         * within a route segment as well as inject a tag.
         *
         * `forbidden()` can be used in
         * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
         * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
         * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
         *
         * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
         */ const DIGEST = '' + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ';403';
        function forbidden() {
          if (('TURBOPACK compile-time truthy', 1)) {
            throw new Error(
              '`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.',
            );
          }
          // eslint-disable-next-line no-throw-literal
          const error = new Error(DIGEST);
          error.digest = DIGEST;
          throw error;
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
        } //# sourceMappingURL=forbidden.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'unauthorized', {
          enumerable: true,
          get: function () {
            return unauthorized;
          },
        });
        const _httpaccessfallback = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)',
        );
        // TODO: Add `unauthorized` docs
        /**
         * @experimental
         * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
         * within a route segment as well as inject a tag.
         *
         * `unauthorized()` can be used in
         * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
         * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
         * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
         *
         *
         * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
         */ const DIGEST = '' + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ';401';
        function unauthorized() {
          if (('TURBOPACK compile-time truthy', 1)) {
            throw new Error(
              '`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.',
            );
          }
          // eslint-disable-next-line no-throw-literal
          const error = new Error(DIGEST);
          error.digest = DIGEST;
          throw error;
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
        } //# sourceMappingURL=unauthorized.js.map
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
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        // This has to be a shared module which is shared between client component error boundary and dynamic component
        ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            BailoutToCSRError: null,
            isBailoutToCSRError: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          BailoutToCSRError: function () {
            return BailoutToCSRError;
          },
          isBailoutToCSRError: function () {
            return isBailoutToCSRError;
          },
        });
        const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
        class BailoutToCSRError extends Error {
          constructor(reason) {
            super('Bail out to client-side rendering: ' + reason),
              (this.reason = reason),
              (this.digest = BAILOUT_TO_CSR);
          }
        }
        function isBailoutToCSRError(err) {
          if (typeof err !== 'object' || err === null || !('digest' in err)) {
            return false;
          }
          return err.digest === BAILOUT_TO_CSR;
        } //# sourceMappingURL=bailout-to-csr.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'isNextRouterError', {
          enumerable: true,
          get: function () {
            return isNextRouterError;
          },
        });
        const _httpaccessfallback = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)',
        );
        const _redirecterror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)',
        );
        function isNextRouterError(error) {
          return (
            (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error)
          );
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
        } //# sourceMappingURL=is-next-router-error.js.map
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
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/export/helpers/is-dynamic-usage-error.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'isDynamicUsageError', {
          enumerable: true,
          get: function () {
            return isDynamicUsageError;
          },
        });
        const _hooksservercontext = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)',
        );
        const _bailouttocsr = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)',
        );
        const _isnextroutererror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)',
        );
        const _dynamicrendering = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)',
        );
        const isDynamicUsageError = err =>
          (0, _hooksservercontext.isDynamicServerError)(err) ||
          (0, _bailouttocsr.isBailoutToCSRError)(err) ||
          (0, _isnextroutererror.isNextRouterError)(err) ||
          (0, _dynamicrendering.isDynamicPostpone)(err); //# sourceMappingURL=is-dynamic-usage-error.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'isPostpone', {
          enumerable: true,
          get: function () {
            return isPostpone;
          },
        });
        const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
        function isPostpone(error) {
          return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
        } //# sourceMappingURL=is-postpone.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        Object.defineProperty(exports, 'unstable_rethrow', {
          enumerable: true,
          get: function () {
            return unstable_rethrow;
          },
        });
        const _isdynamicusageerror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/export/helpers/is-dynamic-usage-error.js [app-rsc] (ecmascript)',
        );
        const _ispostpone = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)',
        );
        const _bailouttocsr = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)',
        );
        const _isnextroutererror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)',
        );
        function unstable_rethrow(error) {
          if (
            (0, _isnextroutererror.isNextRouterError)(error) ||
            (0, _bailouttocsr.isBailoutToCSRError)(error) ||
            (0, _isdynamicusageerror.isDynamicUsageError)(error) ||
            (0, _ispostpone.isPostpone)(error)
          ) {
            throw error;
          }
          if (error instanceof Error && 'cause' in error) {
            unstable_rethrow(error.cause);
          }
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
        } //# sourceMappingURL=unstable-rethrow.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        /** @internal */ ('use strict');
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        0 &&
          (module.exports = {
            ReadonlyURLSearchParams: null,
            RedirectType: null,
            forbidden: null,
            notFound: null,
            permanentRedirect: null,
            redirect: null,
            unauthorized: null,
            unstable_rethrow: null,
          });
        function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: true,
              get: all[name],
            });
        }
        _export(exports, {
          ReadonlyURLSearchParams: function () {
            return ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return _redirecterror.RedirectType;
          },
          forbidden: function () {
            return _forbidden.forbidden;
          },
          notFound: function () {
            return _notfound.notFound;
          },
          permanentRedirect: function () {
            return _redirect.permanentRedirect;
          },
          redirect: function () {
            return _redirect.redirect;
          },
          unauthorized: function () {
            return _unauthorized.unauthorized;
          },
          unstable_rethrow: function () {
            return _unstablerethrow.unstable_rethrow;
          },
        });
        const _redirect = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)',
        );
        const _redirecterror = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)',
        );
        const _notfound = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)',
        );
        const _forbidden = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)',
        );
        const _unauthorized = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)',
        );
        const _unstablerethrow = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)',
        );
        class ReadonlyURLSearchParamsError extends Error {
          constructor() {
            super(
              'Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams',
            );
          }
        }
        class ReadonlyURLSearchParams extends URLSearchParams {
          /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
            throw new ReadonlyURLSearchParamsError();
          }
          /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
            throw new ReadonlyURLSearchParamsError();
          }
          /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
            throw new ReadonlyURLSearchParamsError();
          }
          /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
            throw new ReadonlyURLSearchParamsError();
          }
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
        } //# sourceMappingURL=navigation.react-server.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>':
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
        //# sourceMappingURL=navigation.react-server.js.map
      }
    },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/development/routing/defineRouting.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        function defineRouting(config) {
          return config;
        }
        exports.default = defineRouting;
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/development/routing.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        var defineRouting = __turbopack_require__(
          '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/development/routing/defineRouting.js [app-rsc] (ecmascript)',
        );
        exports.defineRouting = defineRouting.default;
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/routing.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        if (('TURBOPACK compile-time falsy', 0)) {
          ('TURBOPACK unreachable');
        } else {
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/development/routing.js [app-rsc] (ecmascript)',
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/routing/config.js [app-rsc] (ecmascript)':
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
          receiveLocaleCookie: () => o,
          receiveLocalePrefixConfig: () => l,
          receiveRoutingConfig: () => e,
        });
        function e(e) {
          var t, n;
          return {
            ...e,
            localePrefix: l(e.localePrefix),
            localeCookie: o(e.localeCookie),
            localeDetection: null === (t = e.localeDetection) || void 0 === t || t,
            alternateLinks: null === (n = e.alternateLinks) || void 0 === n || n,
          };
        }
        function o(e) {
          return (
            !(null != e && !e) && {
              name: 'NEXT_LOCALE',
              maxAge: 31536e3,
              sameSite: 'lax',
              ...('object' == typeof e && e),
            }
          );
        }
        function l(e) {
          return 'object' == typeof e
            ? e
            : {
                mode: e || 'always',
              };
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/utils.js [app-rsc] (ecmascript)':
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
          getLocaleAsPrefix: () => l,
          getLocalePrefix: () => f,
          getSortedPathnames: () => d,
          hasPathnamePrefixed: () => i,
          isLocalizableHref: () => n,
          localizeHref: () => t,
          matchesPathname: () => o,
          normalizeTrailingSlash: () => c,
          prefixHref: () => e,
          prefixPathname: () => u,
          templateToRegex: () => s,
          unprefixPathname: () => r,
        });
        function n(n) {
          return (
            (function (n) {
              return 'object' == typeof n ? null == n.host && null == n.hostname : !/^[a-z]+:/i.test(n);
            })(n) &&
            !(function (n) {
              const t = 'object' == typeof n ? n.pathname : n;
              return null != t && !t.startsWith('/');
            })(n)
          );
        }
        function t(t, r) {
          let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
            c = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0;
          if (!n(t)) return t;
          const f = r !== u,
            l = i(o, c);
          return (f || l) && null != o ? e(t, o) : t;
        }
        function e(n, t) {
          let e;
          return (
            'string' == typeof n
              ? (e = u(t, n))
              : ((e = {
                  ...n,
                }),
                n.pathname && (e.pathname = u(t, n.pathname))),
            e
          );
        }
        function r(n, t) {
          return n.replace(new RegExp('^'.concat(t)), '') || '/';
        }
        function u(n, t) {
          let e = n;
          return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (e += t), e;
        }
        function i(n, t) {
          return t === n || t.startsWith(''.concat(n, '/'));
        }
        function c(n) {
          const t = (function () {
            try {
              return 'true' === process.env._next_intl_trailing_slash;
            } catch (n) {
              return !1;
            }
          })();
          if ('/' !== n) {
            const e = n.endsWith('/');
            t && !e ? (n += '/') : !t && e && (n = n.slice(0, -1));
          }
          return n;
        }
        function o(n, t) {
          const e = c(n),
            r = c(t);
          return s(e).test(r);
        }
        function f(n, t) {
          var e;
          return ('never' !== t.mode && (null === (e = t.prefixes) || void 0 === e ? void 0 : e[n])) || l(n);
        }
        function l(n) {
          return '/' + n;
        }
        function s(n) {
          const t = n
            .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, '?(.*)')
            .replace(/\[(\.\.\.[^\]]+)\]/g, '(.+)')
            .replace(/\[([^\]]+)\]/g, '([^/]+)');
          return new RegExp('^'.concat(t, '$'));
        }
        function a(n) {
          return n.includes('[[...');
        }
        function p(n) {
          return n.includes('[...');
        }
        function h(n) {
          return n.includes('[');
        }
        function g(n, t) {
          const e = n.split('/'),
            r = t.split('/'),
            u = Math.max(e.length, r.length);
          for (let n = 0; n < u; n++) {
            const t = e[n],
              u = r[n];
            if (!t && u) return -1;
            if (t && !u) return 1;
            if (t || u) {
              if (!h(t) && h(u)) return -1;
              if (h(t) && !h(u)) return 1;
              if (!p(t) && p(u)) return -1;
              if (p(t) && !p(u)) return 1;
              if (!a(t) && a(u)) return -1;
              if (a(t) && !a(u)) return 1;
            }
          }
          return 0;
        }
        function d(n) {
          return n.sort(g);
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/utils.js [app-rsc] (ecmascript)':
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
          applyPathnamePrefix: () => d,
          compileLocalizedPathname: () => f,
          getBasePath: () => l,
          getRoute: () => s,
          normalizeNameOrNameWithParams: () => i,
          serializeSearchParams: () => c,
          validateReceivedConfig: () => u,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/utils.js [app-rsc] (ecmascript)',
          );
        function i(e) {
          return 'string' == typeof e
            ? {
                pathname: e,
              }
            : e;
        }
        function c(e) {
          function n(e) {
            return String(e);
          }
          const t = new URLSearchParams();
          for (const [r, o] of Object.entries(e))
            Array.isArray(o)
              ? o.forEach(e => {
                  t.append(r, n(e));
                })
              : t.set(r, n(o));
          return '?' + t.toString();
        }
        function f(e) {
          let { pathname: n, locale: t, params: r, pathnames: o, query: i } = e;
          function f(e) {
            let n = o[e];
            return n || (n = e), n;
          }
          function s(e) {
            const n = 'string' == typeof e ? e : e[t];
            let o = n;
            if (
              (r &&
                Object.entries(r).forEach(e => {
                  let n,
                    t,
                    [r, a] = e;
                  Array.isArray(a)
                    ? ((n = '(\\[)?\\[...'.concat(r, '\\](\\])?')), (t = a.map(e => String(e)).join('/')))
                    : ((n = '\\['.concat(r, '\\]')), (t = String(a))),
                    (o = o.replace(new RegExp(n, 'g'), t));
                }),
              (o = o.replace(/\[\[\.\.\..+\]\]/g, '')),
              (o = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'normalizeTrailingSlash'
              ])(o)),
              o.includes('['))
            )
              throw new Error(
                'Insufficient params provided for localized pathname.\nTemplate: '
                  .concat(n, '\nParams: ')
                  .concat(JSON.stringify(r)),
              );
            return i && (o += c(i)), o;
          }
          if ('string' == typeof n) {
            return s(f(n));
          }
          {
            const { pathname: e, ...t } = n;
            return {
              ...t,
              pathname: s(f(e)),
            };
          }
        }
        function s(t, r, o) {
          const a = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getSortedPathnames'
            ])(Object.keys(o)),
            i = decodeURI(r);
          for (const e of a) {
            const r = o[e];
            if ('string' == typeof r) {
              if (
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'matchesPathname'
                ])(r, i)
              )
                return e;
            } else if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'matchesPathname'
              ])(r[t], i)
            )
              return e;
          }
          return r;
        }
        function l(e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
          return '/' === e ? n : n.replace(e, '');
        }
        function d(e, n, a, i, c) {
          const { mode: f } = a.localePrefix;
          let s;
          if (void 0 !== c) s = c;
          else if (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isLocalizableHref'
            ])(e)
          ) {
            if ('always' === f) s = !0;
            else if ('as-needed' === f) {
              let e = a.defaultLocale;
              if (a.domains) {
                const n = a.domains.find(e => e.domain === i);
                n
                  ? (e = n.defaultLocale)
                  : i ||
                    console.error(
                      "You're using a routing configuration with `localePrefix: 'as-needed'` in combination with `domains`. In order to compute a correct pathname, you need to provide a `domain` parameter.\n\nSee: https://next-intl.dev/docs/routing#domains-localeprefix-asneeded",
                    );
              }
              s = e !== n;
            }
          }
          return s
            ? (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'prefixPathname'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'getLocalePrefix'
                ])(n, a.localePrefix),
                e,
              )
            : e;
        }
        function u(e) {
          var n;
          if (
            'as-needed' === (null === (n = e.localePrefix) || void 0 === n ? void 0 : n.mode) &&
            !('defaultLocale' in e)
          )
            throw new Error("`localePrefix: 'as-needed' requires a `defaultLocale`.");
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js (client proxy) <module evaluation>':
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
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const __TURBOPACK__default__export__ = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js <module evaluation>',
          'default',
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js (client proxy)':
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
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const __TURBOPACK__default__export__ = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js',
          'default',
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js [app-rsc] (ecmascript)':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$BaseLink$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$BaseLink$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$BaseLink$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/_virtual/_rollupPluginBabelHelpers.js [app-rsc] (ecmascript)':
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
          extends: () => n,
        });
        function n() {
          return (
            (n = ('TURBOPACK compile-time truthy', 1) ? Object.assign.bind() : ('TURBOPACK unreachable', undefined)),
            n.apply(null, arguments)
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/createSharedNavigationFns.js [app-rsc] (ecmascript)':
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
          default: () => d,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$routing$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/routing/config.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/utils.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$BaseLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/BaseLink.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/_virtual/_rollupPluginBabelHelpers.js [app-rsc] (ecmascript)',
          );
        function d(d, h) {
          const j = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$routing$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'receiveRoutingConfig'
          ])(h || {});
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'validateReceivedConfig'
          ])(j);
          const g = j.pathnames,
            v = ('as-needed' === j.localePrefix.mode && j.domains) || void 0;
          function y(o, a) {
            let n,
              l,
              { href: c, locale: f, ...s } = o;
            'object' == typeof c ? ((n = c.pathname), (l = c.params)) : (n = c);
            const u = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isLocalizableHref'
              ])(c),
              p = d(),
              h =
                p instanceof Promise
                  ? (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'use'
                    ])(p)
                  : p,
              y = u
                ? L(
                    {
                      locale: f || h,
                      href:
                        null == g
                          ? n
                          : {
                              pathname: n,
                              params: l,
                            },
                    },
                    null != f || v || void 0,
                  )
                : n;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ].createElement(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$BaseLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ],
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'extends'
              ])(
                {
                  ref: a,
                  defaultLocale: j.defaultLocale,
                  href:
                    'object' == typeof c
                      ? {
                          ...c,
                          pathname: y,
                        }
                      : y,
                  locale: f,
                  localeCookie: j.localeCookie,
                  unprefixed:
                    v && u
                      ? {
                          domains: j.domains.reduce((e, o) => ((e[o.domain] = o.defaultLocale), e), {}),
                          pathname: L(
                            {
                              locale: h,
                              href:
                                null == g
                                  ? n
                                  : {
                                      pathname: n,
                                      params: l,
                                    },
                            },
                            !1,
                          ),
                        }
                      : void 0,
                },
                s,
              ),
            );
          }
          const x = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'forwardRef'
          ])(y);
          function L(e, o) {
            const { href: a, locale: t } = e;
            let n;
            return (
              null == g
                ? 'object' == typeof a
                  ? ((n = a.pathname),
                    a.query &&
                      (n += (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'serializeSearchParams'
                      ])(a.query)))
                  : (n = a)
                : (n = (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'compileLocalizedPathname'
                  ])({
                    locale: t,
                    ...(0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'normalizeNameOrNameWithParams'
                    ])(a),
                    pathnames: j.pathnames,
                  })),
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'applyPathnamePrefix'
              ])(n, t, j, e.domain, o)
            );
          }
          function b(e) {
            return function (o) {
              for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
                t[n - 1] = arguments[n];
              return e(L(o, o.domain ? void 0 : v), ...t);
            };
          }
          const k = b(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'redirect'
              ],
            ),
            P = b(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'permanentRedirect'
              ],
            );
          return {
            config: j,
            Link: x,
            redirect: k,
            permanentRedirect: P,
            getPathname: L,
          };
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getRequestConfig.js [app-rsc] (ecmascript)':
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
          default: () => t,
        });
        function t(t) {
          return t;
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>':
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
          getRequestConfig: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getRequestConfig.js [app-rsc] (ecmascript)',
          );
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
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/constants.js [app-rsc] (ecmascript)':
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
          HEADER_LOCALE_NAME: () => o,
          LOCALE_SEGMENT_NAME: () => L,
        });
        const o = 'X-NEXT-INTL-LOCALE',
          L = 'locale';
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript)':
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
          getCachedRequestLocale: () => t,
          setCachedRequestLocale: () => c,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        const n = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(function () {
          return {
            locale: void 0,
          };
        });
        function t() {
          return n().locale;
        }
        function c(o) {
          n().locale = o;
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocaleLegacy.js [app-rsc] (ecmascript)':
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
          getRequestLocale: () => s,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/headers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript)',
          );
        const i = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(function () {
          let n;
          try {
            n = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'headers'
            ])().get(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'HEADER_LOCALE_NAME'
              ],
            );
          } catch (e) {
            throw e instanceof Error && 'DYNAMIC_SERVER_USAGE' === e.digest
              ? new Error(
                  'Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, you can use the `setRequestLocale` API to enable static rendering, see https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering',
                  {
                    cause: e,
                  },
                )
              : e;
          }
          return (
            n ||
              (console.error(
                "\nUnable to find `next-intl` locale because the middleware didn't run on this request. See https://next-intl.dev/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result.\n",
              ),
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'notFound'
              ])()),
            n
          );
        });
        function s() {
          return (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getCachedRequestLocale'
            ])() || i()
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocale.js [app-rsc] (ecmascript)':
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
          getRequestLocale: () => s,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/headers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/constants.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript)',
          );
        const o = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function () {
          const e = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'headers'
          ])();
          return e instanceof Promise ? await e : e;
        });
        const i = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function () {
          let t;
          try {
            t =
              (await o()).get(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'HEADER_LOCALE_NAME'
                ],
              ) || void 0;
          } catch (t) {
            if (t instanceof Error && 'DYNAMIC_SERVER_USAGE' === t.digest) {
              const e = new Error(
                'Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, you can use the `setRequestLocale` API to enable static rendering, see https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering',
                {
                  cause: t,
                },
              );
              throw ((e.digest = t.digest), e);
            }
            throw t;
          }
          return t;
        });
        async function s() {
          return (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getCachedRequestLocale'
            ])() || (await i())
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+fast-memoize@2.2.6/node_modules/@formatjs/fast-memoize/lib/index.js [app-rsc] (ecmascript)':
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
        //
        // Main
        //
        __turbopack_esm__({
          memoize: () => memoize,
          strategies: () => strategies,
        });
        function memoize(fn, options) {
          var cache = options && options.cache ? options.cache : cacheDefault;
          var serializer = options && options.serializer ? options.serializer : serializerDefault;
          var strategy = options && options.strategy ? options.strategy : strategyDefault;
          return strategy(fn, {
            cache: cache,
            serializer: serializer,
          });
        }
        //
        // Strategy
        //
        function isPrimitive(value) {
          return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
        }
        function monadic(fn, cache, serializer, arg) {
          var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
          var computedValue = cache.get(cacheKey);
          if (typeof computedValue === 'undefined') {
            computedValue = fn.call(this, arg);
            cache.set(cacheKey, computedValue);
          }
          return computedValue;
        }
        function variadic(fn, cache, serializer) {
          var args = Array.prototype.slice.call(arguments, 3);
          var cacheKey = serializer(args);
          var computedValue = cache.get(cacheKey);
          if (typeof computedValue === 'undefined') {
            computedValue = fn.apply(this, args);
            cache.set(cacheKey, computedValue);
          }
          return computedValue;
        }
        function assemble(fn, context, strategy, cache, serialize) {
          return strategy.bind(context, fn, cache, serialize);
        }
        function strategyDefault(fn, options) {
          var strategy = fn.length === 1 ? monadic : variadic;
          return assemble(fn, this, strategy, options.cache.create(), options.serializer);
        }
        function strategyVariadic(fn, options) {
          return assemble(fn, this, variadic, options.cache.create(), options.serializer);
        }
        function strategyMonadic(fn, options) {
          return assemble(fn, this, monadic, options.cache.create(), options.serializer);
        }
        //
        // Serializer
        //
        var serializerDefault = function () {
          return JSON.stringify(arguments);
        };
        //
        // Cache
        //
        var ObjectWithoutPrototypeCache = (function () {
          function ObjectWithoutPrototypeCache() {
            this.cache = Object.create(null);
          }
          ObjectWithoutPrototypeCache.prototype.get = function (key) {
            return this.cache[key];
          };
          ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
            this.cache[key] = value;
          };
          return ObjectWithoutPrototypeCache;
        })();
        var cacheDefault = {
          create: function create() {
            return new ObjectWithoutPrototypeCache();
          },
        };
        var strategies = {
          variadic: strategyVariadic,
          monadic: strategyMonadic,
        };
      }
    },
  '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/initializeConfig-BhfMSHP7.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        var fastMemoize = __turbopack_require__(
          '[project]/node_modules/.pnpm/@formatjs+fast-memoize@2.2.6/node_modules/@formatjs/fast-memoize/lib/index.js [app-rsc] (ecmascript)',
        );
        function _defineProperty(e, r, t) {
          return (
            (r = _toPropertyKey(r)) in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }
        function _toPrimitive(t, r) {
          if ('object' != typeof t || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || 'default');
            if ('object' != typeof i) return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === r ? String : Number)(t);
        }
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, 'string');
          return 'symbol' == typeof i ? i : i + '';
        }
        let IntlErrorCode = /*#__PURE__*/ (function (IntlErrorCode) {
          IntlErrorCode['MISSING_MESSAGE'] = 'MISSING_MESSAGE';
          IntlErrorCode['MISSING_FORMAT'] = 'MISSING_FORMAT';
          IntlErrorCode['ENVIRONMENT_FALLBACK'] = 'ENVIRONMENT_FALLBACK';
          IntlErrorCode['INSUFFICIENT_PATH'] = 'INSUFFICIENT_PATH';
          IntlErrorCode['INVALID_MESSAGE'] = 'INVALID_MESSAGE';
          IntlErrorCode['INVALID_KEY'] = 'INVALID_KEY';
          IntlErrorCode['FORMATTING_ERROR'] = 'FORMATTING_ERROR';
          return IntlErrorCode;
        })({});
        class IntlError extends Error {
          constructor(code, originalMessage) {
            let message = code;
            if (originalMessage) {
              message += ': ' + originalMessage;
            }
            super(message);
            _defineProperty(this, 'code', void 0);
            _defineProperty(this, 'originalMessage', void 0);
            this.code = code;
            if (originalMessage) {
              this.originalMessage = originalMessage;
            }
          }
        }
        function joinPath() {
          for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
            parts[_key] = arguments[_key];
          }
          return parts.filter(Boolean).join('.');
        }
        /**
         * Contains defaults that are used for all entry points into the core.
         * See also `InitializedIntlConfiguration`.
         */ function defaultGetMessageFallback(props) {
          return joinPath(props.namespace, props.key);
        }
        function defaultOnError(error) {
          console.error(error);
        }
        function createCache() {
          return {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {},
          };
        }
        function createMemoCache(store) {
          return {
            create() {
              return {
                get(key) {
                  return store[key];
                },
                set(key, value) {
                  store[key] = value;
                },
              };
            },
          };
        }
        function memoFn(fn, cache) {
          return fastMemoize.memoize(fn, {
            cache: createMemoCache(cache),
            strategy: fastMemoize.strategies.variadic,
          });
        }
        function memoConstructor(ConstructorFn, cache) {
          return memoFn(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return new ConstructorFn(...args);
          }, cache);
        }
        function createIntlFormatters(cache) {
          const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
          const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
          const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
          const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
          const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
          const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
          return {
            getDateTimeFormat,
            getNumberFormat,
            getPluralRules,
            getRelativeTimeFormat,
            getListFormat,
            getDisplayNames,
          };
        }
        function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
          Object.entries(messages).forEach(_ref => {
            let [key, messageOrMessages] = _ref;
            if (key.includes('.')) {
              let keyLabel = key;
              if (parentPath) keyLabel += ' (at '.concat(parentPath, ')');
              invalidKeyLabels.push(keyLabel);
            }
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (messageOrMessages != null && typeof messageOrMessages === 'object') {
              validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
            }
          });
        }
        function validateMessages(messages, onError) {
          const invalidKeyLabels = [];
          validateMessagesSegment(messages, invalidKeyLabels);
          if (invalidKeyLabels.length > 0) {
            onError(
              new IntlError(
                IntlErrorCode.INVALID_KEY,
                'Namespace keys can not contain the character "." as this is used to express nesting. Please remove it or replace it with another character.\n\nInvalid '
                  .concat(invalidKeyLabels.length === 1 ? 'key' : 'keys', ': ')
                  .concat(
                    invalidKeyLabels.join(', '),
                    '\n\nIf you\'re migrating from a flat structure, you can convert your messages as follows:\n\nimport {set} from "lodash";\n\nconst input = {\n  "one.one": "1.1",\n  "one.two": "1.2",\n  "two.one.one": "2.1.1"\n};\n\nconst output = Object.entries(input).reduce(\n  (acc, [key, value]) => set(acc, key, value),\n  {}\n);\n\n// Output:\n//\n// {\n//   "one": {\n//     "one": "1.1",\n//     "two": "1.2"\n//   },\n//   "two": {\n//     "one": {\n//       "one": "2.1.1"\n//     }\n//   }\n// }\n',
                  ),
              ),
            );
          }
        }
        /**
         * Enhances the incoming props with defaults.
         */ function initializeConfig(_ref) {
          let { getMessageFallback, messages, onError, ...rest } = _ref;
          const finalOnError = onError || defaultOnError;
          const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
          {
            if (messages) {
              validateMessages(messages, finalOnError);
            }
          }
          return {
            ...rest,
            messages,
            onError: finalOnError,
            getMessageFallback: finalGetMessageFallback,
          };
        }
        exports.IntlError = IntlError;
        exports.IntlErrorCode = IntlErrorCode;
        exports.createCache = createCache;
        exports.createIntlFormatters = createIntlFormatters;
        exports.defaultGetMessageFallback = defaultGetMessageFallback;
        exports.defaultOnError = defaultOnError;
        exports.initializeConfig = initializeConfig;
        exports.joinPath = joinPath;
        exports.memoFn = memoFn;
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-rsc] (ecmascript)':
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
          ErrorKind: () => ErrorKind,
        });
        var ErrorKind;
        (function (ErrorKind) {
          /** Argument is unclosed (e.g. `{0`) */ ErrorKind[(ErrorKind['EXPECT_ARGUMENT_CLOSING_BRACE'] = 1)] =
            'EXPECT_ARGUMENT_CLOSING_BRACE';
          /** Argument is empty (e.g. `{}`). */ ErrorKind[(ErrorKind['EMPTY_ARGUMENT'] = 2)] = 'EMPTY_ARGUMENT';
          /** Argument is malformed (e.g. `{foo!}``) */ ErrorKind[(ErrorKind['MALFORMED_ARGUMENT'] = 3)] =
            'MALFORMED_ARGUMENT';
          /** Expect an argument type (e.g. `{foo,}`) */ ErrorKind[(ErrorKind['EXPECT_ARGUMENT_TYPE'] = 4)] =
            'EXPECT_ARGUMENT_TYPE';
          /** Unsupported argument type (e.g. `{foo,foo}`) */ ErrorKind[(ErrorKind['INVALID_ARGUMENT_TYPE'] = 5)] =
            'INVALID_ARGUMENT_TYPE';
          /** Expect an argument style (e.g. `{foo, number, }`) */ ErrorKind[(ErrorKind['EXPECT_ARGUMENT_STYLE'] = 6)] =
            'EXPECT_ARGUMENT_STYLE';
          /** The number skeleton is invalid. */ ErrorKind[(ErrorKind['INVALID_NUMBER_SKELETON'] = 7)] =
            'INVALID_NUMBER_SKELETON';
          /** The date time skeleton is invalid. */ ErrorKind[(ErrorKind['INVALID_DATE_TIME_SKELETON'] = 8)] =
            'INVALID_DATE_TIME_SKELETON';
          /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */ ErrorKind[
            (ErrorKind['EXPECT_NUMBER_SKELETON'] = 9)
          ] = 'EXPECT_NUMBER_SKELETON';
          /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */ ErrorKind[
            (ErrorKind['EXPECT_DATE_TIME_SKELETON'] = 10)
          ] = 'EXPECT_DATE_TIME_SKELETON';
          /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */ ErrorKind[
            (ErrorKind['UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'] = 11)
          ] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE';
          /** Missing select argument options (e.g. `{foo, select}`) */ ErrorKind[
            (ErrorKind['EXPECT_SELECT_ARGUMENT_OPTIONS'] = 12)
          ] = 'EXPECT_SELECT_ARGUMENT_OPTIONS';
          /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */ ErrorKind[
            (ErrorKind['EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'] = 13)
          ] = 'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE';
          /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */ ErrorKind[
            (ErrorKind['INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'] = 14)
          ] = 'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE';
          /** Expecting a selector in `select` argument (e.g `{foo, select}`) */ ErrorKind[
            (ErrorKind['EXPECT_SELECT_ARGUMENT_SELECTOR'] = 15)
          ] = 'EXPECT_SELECT_ARGUMENT_SELECTOR';
          /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */ ErrorKind[
            (ErrorKind['EXPECT_PLURAL_ARGUMENT_SELECTOR'] = 16)
          ] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR';
          /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */ ErrorKind[
            (ErrorKind['EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'] = 17)
          ] = 'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT';
          /**
           * Expecting a message fragment after the `plural` or `selectordinal` selector
           * (e.g. `{foo, plural, one}`)
           */ ErrorKind[(ErrorKind['EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'] = 18)] =
            'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT';
          /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */ ErrorKind[
            (ErrorKind['INVALID_PLURAL_ARGUMENT_SELECTOR'] = 19)
          ] = 'INVALID_PLURAL_ARGUMENT_SELECTOR';
          /**
           * Duplicate selectors in `plural` or `selectordinal` argument.
           * (e.g. {foo, plural, one {#} one {#}})
           */ ErrorKind[(ErrorKind['DUPLICATE_PLURAL_ARGUMENT_SELECTOR'] = 20)] = 'DUPLICATE_PLURAL_ARGUMENT_SELECTOR';
          /** Duplicate selectors in `select` argument.
           * (e.g. {foo, select, apple {apple} apple {apple}})
           */ ErrorKind[(ErrorKind['DUPLICATE_SELECT_ARGUMENT_SELECTOR'] = 21)] = 'DUPLICATE_SELECT_ARGUMENT_SELECTOR';
          /** Plural or select argument option must have `other` clause. */ ErrorKind[
            (ErrorKind['MISSING_OTHER_CLAUSE'] = 22)
          ] = 'MISSING_OTHER_CLAUSE';
          /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */ ErrorKind[(ErrorKind['INVALID_TAG'] = 23)] =
            'INVALID_TAG';
          /** The tag name is invalid. (e.g. `<123>foo</123>`) */ ErrorKind[(ErrorKind['INVALID_TAG_NAME'] = 25)] =
            'INVALID_TAG_NAME';
          /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */ ErrorKind[
            (ErrorKind['UNMATCHED_CLOSING_TAG'] = 26)
          ] = 'UNMATCHED_CLOSING_TAG';
          /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */ ErrorKind[
            (ErrorKind['UNCLOSED_TAG'] = 27)
          ] = 'UNCLOSED_TAG';
        })(ErrorKind || (ErrorKind = {}));
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)':
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
          SKELETON_TYPE: () => SKELETON_TYPE,
          TYPE: () => TYPE,
          createLiteralElement: () => createLiteralElement,
          createNumberElement: () => createNumberElement,
          isArgumentElement: () => isArgumentElement,
          isDateElement: () => isDateElement,
          isDateTimeSkeleton: () => isDateTimeSkeleton,
          isLiteralElement: () => isLiteralElement,
          isNumberElement: () => isNumberElement,
          isNumberSkeleton: () => isNumberSkeleton,
          isPluralElement: () => isPluralElement,
          isPoundElement: () => isPoundElement,
          isSelectElement: () => isSelectElement,
          isTagElement: () => isTagElement,
          isTimeElement: () => isTimeElement,
        });
        var TYPE;
        (function (TYPE) {
          /**
           * Raw text
           */ TYPE[(TYPE['literal'] = 0)] = 'literal';
          /**
           * Variable w/o any format, e.g `var` in `this is a {var}`
           */ TYPE[(TYPE['argument'] = 1)] = 'argument';
          /**
           * Variable w/ number format
           */ TYPE[(TYPE['number'] = 2)] = 'number';
          /**
           * Variable w/ date format
           */ TYPE[(TYPE['date'] = 3)] = 'date';
          /**
           * Variable w/ time format
           */ TYPE[(TYPE['time'] = 4)] = 'time';
          /**
           * Variable w/ select format
           */ TYPE[(TYPE['select'] = 5)] = 'select';
          /**
           * Variable w/ plural format
           */ TYPE[(TYPE['plural'] = 6)] = 'plural';
          /**
           * Only possible within plural argument.
           * This is the `#` symbol that will be substituted with the count.
           */ TYPE[(TYPE['pound'] = 7)] = 'pound';
          /**
           * XML-like tag
           */ TYPE[(TYPE['tag'] = 8)] = 'tag';
        })(TYPE || (TYPE = {}));
        var SKELETON_TYPE;
        (function (SKELETON_TYPE) {
          SKELETON_TYPE[(SKELETON_TYPE['number'] = 0)] = 'number';
          SKELETON_TYPE[(SKELETON_TYPE['dateTime'] = 1)] = 'dateTime';
        })(SKELETON_TYPE || (SKELETON_TYPE = {}));
        function isLiteralElement(el) {
          return el.type === TYPE.literal;
        }
        function isArgumentElement(el) {
          return el.type === TYPE.argument;
        }
        function isNumberElement(el) {
          return el.type === TYPE.number;
        }
        function isDateElement(el) {
          return el.type === TYPE.date;
        }
        function isTimeElement(el) {
          return el.type === TYPE.time;
        }
        function isSelectElement(el) {
          return el.type === TYPE.select;
        }
        function isPluralElement(el) {
          return el.type === TYPE.plural;
        }
        function isPoundElement(el) {
          return el.type === TYPE.pound;
        }
        function isTagElement(el) {
          return el.type === TYPE.tag;
        }
        function isNumberSkeleton(el) {
          return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
        }
        function isDateTimeSkeleton(el) {
          return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
        }
        function createLiteralElement(value) {
          return {
            type: TYPE.literal,
            value: value,
          };
        }
        function createNumberElement(value, style) {
          return {
            type: TYPE.number,
            value: value,
            style: style,
          };
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js [app-rsc] (ecmascript)':
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
        // @generated from regex-gen.ts
        __turbopack_esm__({
          SPACE_SEPARATOR_REGEX: () => SPACE_SEPARATOR_REGEX,
          WHITE_SPACE_REGEX: () => WHITE_SPACE_REGEX,
        });
        var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
        var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-rsc] (ecmascript)':
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
         * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
         * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
         * with some tweaks
         */ __turbopack_esm__({
          parseDateTimeSkeleton: () => parseDateTimeSkeleton,
        });
        var DATE_TIME_REGEX =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
        function parseDateTimeSkeleton(skeleton) {
          var result = {};
          skeleton.replace(DATE_TIME_REGEX, function (match) {
            var len = match.length;
            switch (match[0]) {
              // Era
              case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
              // Year
              case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
              case 'Y':
              case 'u':
              case 'U':
              case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
              // Quarter
              case 'q':
              case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
              // Month
              case 'M':
              case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
              // Week
              case 'w':
              case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
              case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
              case 'D':
              case 'F':
              case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
              // Weekday
              case 'E':
                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
              case 'e':
                if (len < 4) {
                  throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
              case 'c':
                if (len < 4) {
                  throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
              // Period
              case 'a':
                result.hour12 = true;
                break;
              case 'b':
              case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
              // Hour
              case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
              case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
              case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
              case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
              case 'j':
              case 'J':
              case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
              // Minute
              case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
              // Second
              case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
              case 'S':
              case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
              // Zone
              case 'z':
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
              case 'Z':
              case 'O':
              case 'v':
              case 'V':
              case 'X':
              case 'x':
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
            }
            return '';
          });
          return result;
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [app-rsc] (ecmascript)':
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
        // @generated from regex-gen.ts
        __turbopack_esm__({
          WHITE_SPACE_REGEX: () => WHITE_SPACE_REGEX,
        });
        var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      }
    },
  '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)':
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
        /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_esm__(
          {
            __addDisposableResource: () => __addDisposableResource,
            __assign: () => __assign,
            __asyncDelegator: () => __asyncDelegator,
            __asyncGenerator: () => __asyncGenerator,
            __asyncValues: () => __asyncValues,
            __await: () => __await,
            __awaiter: () => __awaiter,
            __classPrivateFieldGet: () => __classPrivateFieldGet,
            __classPrivateFieldIn: () => __classPrivateFieldIn,
            __classPrivateFieldSet: () => __classPrivateFieldSet,
            __createBinding: () => __createBinding,
            __decorate: () => __decorate,
            __disposeResources: () => __disposeResources,
            __esDecorate: () => __esDecorate,
            __exportStar: () => __exportStar,
            __extends: () => __extends,
            __generator: () => __generator,
            __importDefault: () => __importDefault,
            __importStar: () => __importStar,
            __makeTemplateObject: () => __makeTemplateObject,
            __metadata: () => __metadata,
            __param: () => __param,
            __propKey: () => __propKey,
            __read: () => __read,
            __rest: () => __rest,
            __runInitializers: () => __runInitializers,
            __setFunctionName: () => __setFunctionName,
            __spread: () => __spread,
            __spreadArray: () => __spreadArray,
            __spreadArrays: () => __spreadArrays,
            __values: () => __values,
            default: () => __TURBOPACK__default__export__,
          },
        );
        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== 'function' && b !== null)
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        }
        var __assign = function () {
          __assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
          var t = {};
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
          return t;
        }
        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
            d;
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        }
        function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
          function accept(f) {
            if (f !== void 0 && typeof f !== 'function') throw new TypeError('Function expected');
            return f;
          }
          var kind = contextIn.kind,
            key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
          var target = !descriptorIn && ctor ? (contextIn['static'] ? ctor : ctor.prototype) : null;
          var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
          var _,
            done = false;
          for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === 'access' ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) {
              if (done) throw new TypeError('Cannot add initializers after decoration has completed');
              extraInitializers.push(accept(f || null));
            };
            var result = (0, decorators[i])(
              kind === 'accessor'
                ? {
                    get: descriptor.get,
                    set: descriptor.set,
                  }
                : descriptor[key],
              context,
            );
            if (kind === 'accessor') {
              if (result === void 0) continue;
              if (result === null || typeof result !== 'object') throw new TypeError('Object expected');
              if ((_ = accept(result.get))) descriptor.get = _;
              if ((_ = accept(result.set))) descriptor.set = _;
              if ((_ = accept(result.init))) initializers.unshift(_);
            } else if ((_ = accept(result))) {
              if (kind === 'field') initializers.unshift(_);
              else descriptor[key] = _;
            }
          }
          if (target) Object.defineProperty(target, contextIn.name, descriptor);
          done = true;
        }
        function __runInitializers(thisArg, initializers, value) {
          var useValue = arguments.length > 2;
          for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
          }
          return useValue ? value : void 0;
        }
        function __propKey(x) {
          return typeof x === 'symbol' ? x : ''.concat(x);
        }
        function __setFunctionName(f, name, prefix) {
          if (typeof name === 'symbol') name = name.description ? '['.concat(name.description, ']') : '';
          return Object.defineProperty(f, 'name', {
            configurable: true,
            value: prefix ? ''.concat(prefix, ' ', name) : name,
          });
        }
        function __metadata(metadataKey, metadataValue) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
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
        }
        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f,
            y,
            t,
            g = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype);
          return (
            (g.next = verb(0)),
            (g['throw'] = verb(1)),
            (g['return'] = verb(2)),
            typeof Symbol === 'function' &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          ('TURBOPACK unreachable');
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return {
                      value: op[1],
                      done: false,
                    };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true,
            };
          }
        }
        var __createBinding = Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                  enumerable: true,
                  get: function () {
                    return m[k];
                  },
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            };
        function __exportStar(m, o) {
          for (var p in m) if (p !== 'default' && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
        function __values(o) {
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return {
                  value: o && o[i++],
                  done: !o,
                };
              },
            };
          throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        }
        function __read(o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
          } catch (error) {
            e = {
              error: error,
            };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        }
        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
          return ar;
        }
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
          return r;
        }
        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        }
        function __await(v) {
          return this instanceof __await ? ((this.v = v), this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = Object.create((typeof AsyncIterator === 'function' ? AsyncIterator : Object).prototype)),
            verb('next'),
            verb('throw'),
            verb('return', awaitReturn),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i
          );
          ('TURBOPACK unreachable');
          function awaitReturn(f) {
            return function (v) {
              return Promise.resolve(v).then(f, reject);
            };
          }
          function verb(n, f) {
            if (g[n]) {
              i[n] = function (v) {
                return new Promise(function (a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
              if (f) i[n] = f(i[n]);
            }
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume('next', value);
          }
          function reject(value) {
            resume('throw', value);
          }
          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }
        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb('next'),
            verb('throw', function (e) {
              throw e;
            }),
            verb('return'),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );
          ('TURBOPACK unreachable');
          function verb(n, f) {
            i[n] = o[n]
              ? function (v) {
                  return (p = !p)
                    ? {
                        value: __await(o[n](v)),
                        done: false,
                      }
                    : f
                      ? f(v)
                      : v;
                }
              : f;
          }
        }
        function __asyncValues(o) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
              (i = {}),
              verb('next'),
              verb('throw'),
              verb('return'),
              (i[Symbol.asyncIterator] = function () {
                return this;
              }),
              i);
          ('TURBOPACK unreachable');
          function verb(n) {
            i[n] =
              o[n] &&
              function (v) {
                return new Promise(function (resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
              resolve({
                value: v,
                done: d,
              });
            }, reject);
          }
        }
        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', {
              value: raw,
            });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        }
        var __setModuleDefault = Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o['default'] = v;
            };
        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        }
        function __importDefault(mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        }
        function __classPrivateFieldGet(receiver, state, kind, f) {
          if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
          if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError('Cannot read private member from an object whose class did not declare it');
          return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
        }
        function __classPrivateFieldSet(receiver, state, value, kind, f) {
          if (kind === 'm') throw new TypeError('Private method is not writable');
          if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter');
          if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError('Cannot write private member to an object whose class did not declare it');
          return kind === 'a' ? f.call(receiver, value) : f ? (f.value = value) : state.set(receiver, value), value;
        }
        function __classPrivateFieldIn(state, receiver) {
          if (receiver === null || (typeof receiver !== 'object' && typeof receiver !== 'function'))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === 'function' ? receiver === state : state.has(receiver);
        }
        function __addDisposableResource(env, value, async) {
          if (value !== null && value !== void 0) {
            if (typeof value !== 'object' && typeof value !== 'function') throw new TypeError('Object expected.');
            var dispose, inner;
            if (async) {
              if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
              dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
              if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
              dispose = value[Symbol.dispose];
              if (async) inner = dispose;
            }
            if (typeof dispose !== 'function') throw new TypeError('Object not disposable.');
            if (inner)
              dispose = function () {
                try {
                  inner.call(this);
                } catch (e) {
                  return Promise.reject(e);
                }
              };
            env.stack.push({
              value: value,
              dispose: dispose,
              async: async,
            });
          } else if (async) {
            env.stack.push({
              async: true,
            });
          }
          return value;
        }
        var _SuppressedError =
          typeof SuppressedError === 'function'
            ? SuppressedError
            : function (error, suppressed, message) {
                var e = new Error(message);
                return (e.name = 'SuppressedError'), (e.error = error), (e.suppressed = suppressed), e;
              };
        function __disposeResources(env) {
          function fail(e) {
            env.error = env.hasError
              ? new _SuppressedError(e, env.error, 'An error was suppressed during disposal.')
              : e;
            env.hasError = true;
          }
          var r,
            s = 0;
          function next() {
            while ((r = env.stack.pop())) {
              try {
                if (!r.async && s === 1) return (s = 0), env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                  var result = r.dispose.call(r.value);
                  if (r.async)
                    return (
                      (s |= 2),
                      Promise.resolve(result).then(next, function (e) {
                        fail(e);
                        return next();
                      })
                    );
                } else s |= 1;
              } catch (e) {
                fail(e);
              }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
          }
          return next();
        }
        const __TURBOPACK__default__export__ = {
          __extends,
          __assign,
          __rest,
          __decorate,
          __param,
          __metadata,
          __awaiter,
          __generator,
          __createBinding,
          __exportStar,
          __values,
          __read,
          __spread,
          __spreadArrays,
          __spreadArray,
          __await,
          __asyncGenerator,
          __asyncDelegator,
          __asyncValues,
          __makeTemplateObject,
          __importStar,
          __importDefault,
          __classPrivateFieldGet,
          __classPrivateFieldSet,
          __classPrivateFieldIn,
          __addDisposableResource,
          __disposeResources,
        };
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-rsc] (ecmascript)':
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
          parseNumberSkeleton: () => parseNumberSkeleton,
          parseNumberSkeletonFromString: () => parseNumberSkeletonFromString,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        function parseNumberSkeletonFromString(skeleton) {
          if (skeleton.length === 0) {
            throw new Error('Number skeleton cannot be empty');
          }
          // Parse the skeleton
          var stringTokens = skeleton
            .split(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'WHITE_SPACE_REGEX'
              ],
            )
            .filter(function (x) {
              return x.length > 0;
            });
          var tokens = [];
          for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
            var stringToken = stringTokens_1[_i];
            var stemAndOptions = stringToken.split('/');
            if (stemAndOptions.length === 0) {
              throw new Error('Invalid number skeleton');
            }
            var stem = stemAndOptions[0],
              options = stemAndOptions.slice(1);
            for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
              var option = options_1[_a];
              if (option.length === 0) {
                throw new Error('Invalid number skeleton');
              }
            }
            tokens.push({
              stem: stem,
              options: options,
            });
          }
          return tokens;
        }
        function icuUnitToEcma(unit) {
          return unit.replace(/^(.*?)-/, '');
        }
        var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
        var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
        var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
        var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
        function parseSignificantPrecision(str) {
          var result = {};
          if (str[str.length - 1] === 'r') {
            result.roundingPriority = 'morePrecision';
          } else if (str[str.length - 1] === 's') {
            result.roundingPriority = 'lessPrecision';
          }
          str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
            // @@@ case
            if (typeof g2 !== 'string') {
              result.minimumSignificantDigits = g1.length;
              result.maximumSignificantDigits = g1.length;
            } else if (g2 === '+') {
              result.minimumSignificantDigits = g1.length;
            } else if (g1[0] === '#') {
              result.maximumSignificantDigits = g1.length;
            } else {
              result.minimumSignificantDigits = g1.length;
              result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
            }
            return '';
          });
          return result;
        }
        function parseSign(str) {
          switch (str) {
            case 'sign-auto':
              return {
                signDisplay: 'auto',
              };
            case 'sign-accounting':
            case '()':
              return {
                currencySign: 'accounting',
              };
            case 'sign-always':
            case '+!':
              return {
                signDisplay: 'always',
              };
            case 'sign-accounting-always':
            case '()!':
              return {
                signDisplay: 'always',
                currencySign: 'accounting',
              };
            case 'sign-except-zero':
            case '+?':
              return {
                signDisplay: 'exceptZero',
              };
            case 'sign-accounting-except-zero':
            case '()?':
              return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
              };
            case 'sign-never':
            case '+_':
              return {
                signDisplay: 'never',
              };
          }
        }
        function parseConciseScientificAndEngineeringStem(stem) {
          // Engineering
          var result;
          if (stem[0] === 'E' && stem[1] === 'E') {
            result = {
              notation: 'engineering',
            };
            stem = stem.slice(2);
          } else if (stem[0] === 'E') {
            result = {
              notation: 'scientific',
            };
            stem = stem.slice(1);
          }
          if (result) {
            var signDisplay = stem.slice(0, 2);
            if (signDisplay === '+!') {
              result.signDisplay = 'always';
              stem = stem.slice(2);
            } else if (signDisplay === '+?') {
              result.signDisplay = 'exceptZero';
              stem = stem.slice(2);
            }
            if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
              throw new Error('Malformed concise eng/scientific notation');
            }
            result.minimumIntegerDigits = stem.length;
          }
          return result;
        }
        function parseNotationOptions(opt) {
          var result = {};
          var signOpts = parseSign(opt);
          if (signOpts) {
            return signOpts;
          }
          return result;
        }
        function parseNumberSkeleton(tokens) {
          var result = {};
          for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            switch (token.stem) {
              case 'percent':
              case '%':
                result.style = 'percent';
                continue;
              case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
              case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
              case 'group-off':
              case ',_':
                result.useGrouping = false;
                continue;
              case 'precision-integer':
              case '.':
                result.maximumFractionDigits = 0;
                continue;
              case 'measure-unit':
              case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
              case 'compact-short':
              case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
              case 'compact-long':
              case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
              case 'scientific':
                result = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__assign'
                  ])(
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      '__assign'
                    ])({}, result),
                    {
                      notation: 'scientific',
                    },
                  ),
                  token.options.reduce(function (all, opt) {
                    return (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      '__assign'
                    ])(
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        '__assign'
                      ])({}, all),
                      parseNotationOptions(opt),
                    );
                  }, {}),
                );
                continue;
              case 'engineering':
                result = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__assign'
                  ])(
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      '__assign'
                    ])({}, result),
                    {
                      notation: 'engineering',
                    },
                  ),
                  token.options.reduce(function (all, opt) {
                    return (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      '__assign'
                    ])(
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        '__assign'
                      ])({}, all),
                      parseNotationOptions(opt),
                    );
                  }, {}),
                );
                continue;
              case 'notation-simple':
                result.notation = 'standard';
                continue;
              // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
              case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
              case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
              case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
              case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
              case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
              case 'rounding-mode-floor':
                result.roundingMode = 'floor';
                continue;
              case 'rounding-mode-ceiling':
                result.roundingMode = 'ceil';
                continue;
              case 'rounding-mode-down':
                result.roundingMode = 'trunc';
                continue;
              case 'rounding-mode-up':
                result.roundingMode = 'expand';
                continue;
              case 'rounding-mode-half-even':
                result.roundingMode = 'halfEven';
                continue;
              case 'rounding-mode-half-down':
                result.roundingMode = 'halfTrunc';
                continue;
              case 'rounding-mode-half-up':
                result.roundingMode = 'halfExpand';
                continue;
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
              case 'integer-width':
                if (token.options.length > 1) {
                  throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                  if (g1) {
                    result.minimumIntegerDigits = g2.length;
                  } else if (g3 && g4) {
                    throw new Error('We currently do not support maximum integer digits');
                  } else if (g5) {
                    throw new Error('We currently do not support exact integer digits');
                  }
                  return '';
                });
                continue;
            }
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
              result.minimumIntegerDigits = token.stem.length;
              continue;
            }
            if (FRACTION_PRECISION_REGEX.test(token.stem)) {
              // Precision
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
              // precision-integer case
              if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
              }
              token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                  result.minimumFractionDigits = g1.length;
                } else if (g3 && g3[0] === '#') {
                  result.maximumFractionDigits = g3.length;
                } else if (g4 && g5) {
                  result.minimumFractionDigits = g4.length;
                  result.maximumFractionDigits = g4.length + g5.length;
                } else {
                  result.minimumFractionDigits = g1.length;
                  result.maximumFractionDigits = g1.length;
                }
                return '';
              });
              var opt = token.options[0];
              // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
              if (opt === 'w') {
                result = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__assign'
                  ])({}, result),
                  {
                    trailingZeroDisplay: 'stripIfInteger',
                  },
                );
              } else if (opt) {
                result = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__assign'
                  ])({}, result),
                  parseSignificantPrecision(opt),
                );
              }
              continue;
            }
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
            if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
              result = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__assign'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])({}, result),
                parseSignificantPrecision(token.stem),
              );
              continue;
            }
            var signOpts = parseSign(token.stem);
            if (signOpts) {
              result = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__assign'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])({}, result),
                signOpts,
              );
            }
            var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
            if (conciseScientificAndEngineeringOpts) {
              result = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__assign'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])({}, result),
                conciseScientificAndEngineeringOpts,
              );
            }
          }
          return result;
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-rsc] (ecmascript) <locals>':
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
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-rsc] (ecmascript) <module evaluation>':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js [app-rsc] (ecmascript)':
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
        // @generated from time-data-gen.ts
        // prettier-ignore
        __turbopack_esm__({
    "timeData": (()=>timeData)
});
        var timeData = {
          '001': ['H', 'h'],
          419: ['h', 'H', 'hB', 'hb'],
          AC: ['H', 'h', 'hb', 'hB'],
          AD: ['H', 'hB'],
          AE: ['h', 'hB', 'hb', 'H'],
          AF: ['H', 'hb', 'hB', 'h'],
          AG: ['h', 'hb', 'H', 'hB'],
          AI: ['H', 'h', 'hb', 'hB'],
          AL: ['h', 'H', 'hB'],
          AM: ['H', 'hB'],
          AO: ['H', 'hB'],
          AR: ['h', 'H', 'hB', 'hb'],
          AS: ['h', 'H'],
          AT: ['H', 'hB'],
          AU: ['h', 'hb', 'H', 'hB'],
          AW: ['H', 'hB'],
          AX: ['H'],
          AZ: ['H', 'hB', 'h'],
          BA: ['H', 'hB', 'h'],
          BB: ['h', 'hb', 'H', 'hB'],
          BD: ['h', 'hB', 'H'],
          BE: ['H', 'hB'],
          BF: ['H', 'hB'],
          BG: ['H', 'hB', 'h'],
          BH: ['h', 'hB', 'hb', 'H'],
          BI: ['H', 'h'],
          BJ: ['H', 'hB'],
          BL: ['H', 'hB'],
          BM: ['h', 'hb', 'H', 'hB'],
          BN: ['hb', 'hB', 'h', 'H'],
          BO: ['h', 'H', 'hB', 'hb'],
          BQ: ['H'],
          BR: ['H', 'hB'],
          BS: ['h', 'hb', 'H', 'hB'],
          BT: ['h', 'H'],
          BW: ['H', 'h', 'hb', 'hB'],
          BY: ['H', 'h'],
          BZ: ['H', 'h', 'hb', 'hB'],
          CA: ['h', 'hb', 'H', 'hB'],
          CC: ['H', 'h', 'hb', 'hB'],
          CD: ['hB', 'H'],
          CF: ['H', 'h', 'hB'],
          CG: ['H', 'hB'],
          CH: ['H', 'hB', 'h'],
          CI: ['H', 'hB'],
          CK: ['H', 'h', 'hb', 'hB'],
          CL: ['h', 'H', 'hB', 'hb'],
          CM: ['H', 'h', 'hB'],
          CN: ['H', 'hB', 'hb', 'h'],
          CO: ['h', 'H', 'hB', 'hb'],
          CP: ['H'],
          CR: ['h', 'H', 'hB', 'hb'],
          CU: ['h', 'H', 'hB', 'hb'],
          CV: ['H', 'hB'],
          CW: ['H', 'hB'],
          CX: ['H', 'h', 'hb', 'hB'],
          CY: ['h', 'H', 'hb', 'hB'],
          CZ: ['H'],
          DE: ['H', 'hB'],
          DG: ['H', 'h', 'hb', 'hB'],
          DJ: ['h', 'H'],
          DK: ['H'],
          DM: ['h', 'hb', 'H', 'hB'],
          DO: ['h', 'H', 'hB', 'hb'],
          DZ: ['h', 'hB', 'hb', 'H'],
          EA: ['H', 'h', 'hB', 'hb'],
          EC: ['h', 'H', 'hB', 'hb'],
          EE: ['H', 'hB'],
          EG: ['h', 'hB', 'hb', 'H'],
          EH: ['h', 'hB', 'hb', 'H'],
          ER: ['h', 'H'],
          ES: ['H', 'hB', 'h', 'hb'],
          ET: ['hB', 'hb', 'h', 'H'],
          FI: ['H'],
          FJ: ['h', 'hb', 'H', 'hB'],
          FK: ['H', 'h', 'hb', 'hB'],
          FM: ['h', 'hb', 'H', 'hB'],
          FO: ['H', 'h'],
          FR: ['H', 'hB'],
          GA: ['H', 'hB'],
          GB: ['H', 'h', 'hb', 'hB'],
          GD: ['h', 'hb', 'H', 'hB'],
          GE: ['H', 'hB', 'h'],
          GF: ['H', 'hB'],
          GG: ['H', 'h', 'hb', 'hB'],
          GH: ['h', 'H'],
          GI: ['H', 'h', 'hb', 'hB'],
          GL: ['H', 'h'],
          GM: ['h', 'hb', 'H', 'hB'],
          GN: ['H', 'hB'],
          GP: ['H', 'hB'],
          GQ: ['H', 'hB', 'h', 'hb'],
          GR: ['h', 'H', 'hb', 'hB'],
          GT: ['h', 'H', 'hB', 'hb'],
          GU: ['h', 'hb', 'H', 'hB'],
          GW: ['H', 'hB'],
          GY: ['h', 'hb', 'H', 'hB'],
          HK: ['h', 'hB', 'hb', 'H'],
          HN: ['h', 'H', 'hB', 'hb'],
          HR: ['H', 'hB'],
          HU: ['H', 'h'],
          IC: ['H', 'h', 'hB', 'hb'],
          ID: ['H'],
          IE: ['H', 'h', 'hb', 'hB'],
          IL: ['H', 'hB'],
          IM: ['H', 'h', 'hb', 'hB'],
          IN: ['h', 'H'],
          IO: ['H', 'h', 'hb', 'hB'],
          IQ: ['h', 'hB', 'hb', 'H'],
          IR: ['hB', 'H'],
          IS: ['H'],
          IT: ['H', 'hB'],
          JE: ['H', 'h', 'hb', 'hB'],
          JM: ['h', 'hb', 'H', 'hB'],
          JO: ['h', 'hB', 'hb', 'H'],
          JP: ['H', 'K', 'h'],
          KE: ['hB', 'hb', 'H', 'h'],
          KG: ['H', 'h', 'hB', 'hb'],
          KH: ['hB', 'h', 'H', 'hb'],
          KI: ['h', 'hb', 'H', 'hB'],
          KM: ['H', 'h', 'hB', 'hb'],
          KN: ['h', 'hb', 'H', 'hB'],
          KP: ['h', 'H', 'hB', 'hb'],
          KR: ['h', 'H', 'hB', 'hb'],
          KW: ['h', 'hB', 'hb', 'H'],
          KY: ['h', 'hb', 'H', 'hB'],
          KZ: ['H', 'hB'],
          LA: ['H', 'hb', 'hB', 'h'],
          LB: ['h', 'hB', 'hb', 'H'],
          LC: ['h', 'hb', 'H', 'hB'],
          LI: ['H', 'hB', 'h'],
          LK: ['H', 'h', 'hB', 'hb'],
          LR: ['h', 'hb', 'H', 'hB'],
          LS: ['h', 'H'],
          LT: ['H', 'h', 'hb', 'hB'],
          LU: ['H', 'h', 'hB'],
          LV: ['H', 'hB', 'hb', 'h'],
          LY: ['h', 'hB', 'hb', 'H'],
          MA: ['H', 'h', 'hB', 'hb'],
          MC: ['H', 'hB'],
          MD: ['H', 'hB'],
          ME: ['H', 'hB', 'h'],
          MF: ['H', 'hB'],
          MG: ['H', 'h'],
          MH: ['h', 'hb', 'H', 'hB'],
          MK: ['H', 'h', 'hb', 'hB'],
          ML: ['H'],
          MM: ['hB', 'hb', 'H', 'h'],
          MN: ['H', 'h', 'hb', 'hB'],
          MO: ['h', 'hB', 'hb', 'H'],
          MP: ['h', 'hb', 'H', 'hB'],
          MQ: ['H', 'hB'],
          MR: ['h', 'hB', 'hb', 'H'],
          MS: ['H', 'h', 'hb', 'hB'],
          MT: ['H', 'h'],
          MU: ['H', 'h'],
          MV: ['H', 'h'],
          MW: ['h', 'hb', 'H', 'hB'],
          MX: ['h', 'H', 'hB', 'hb'],
          MY: ['hb', 'hB', 'h', 'H'],
          MZ: ['H', 'hB'],
          NA: ['h', 'H', 'hB', 'hb'],
          NC: ['H', 'hB'],
          NE: ['H'],
          NF: ['H', 'h', 'hb', 'hB'],
          NG: ['H', 'h', 'hb', 'hB'],
          NI: ['h', 'H', 'hB', 'hb'],
          NL: ['H', 'hB'],
          NO: ['H', 'h'],
          NP: ['H', 'h', 'hB'],
          NR: ['H', 'h', 'hb', 'hB'],
          NU: ['H', 'h', 'hb', 'hB'],
          NZ: ['h', 'hb', 'H', 'hB'],
          OM: ['h', 'hB', 'hb', 'H'],
          PA: ['h', 'H', 'hB', 'hb'],
          PE: ['h', 'H', 'hB', 'hb'],
          PF: ['H', 'h', 'hB'],
          PG: ['h', 'H'],
          PH: ['h', 'hB', 'hb', 'H'],
          PK: ['h', 'hB', 'H'],
          PL: ['H', 'h'],
          PM: ['H', 'hB'],
          PN: ['H', 'h', 'hb', 'hB'],
          PR: ['h', 'H', 'hB', 'hb'],
          PS: ['h', 'hB', 'hb', 'H'],
          PT: ['H', 'hB'],
          PW: ['h', 'H'],
          PY: ['h', 'H', 'hB', 'hb'],
          QA: ['h', 'hB', 'hb', 'H'],
          RE: ['H', 'hB'],
          RO: ['H', 'hB'],
          RS: ['H', 'hB', 'h'],
          RU: ['H'],
          RW: ['H', 'h'],
          SA: ['h', 'hB', 'hb', 'H'],
          SB: ['h', 'hb', 'H', 'hB'],
          SC: ['H', 'h', 'hB'],
          SD: ['h', 'hB', 'hb', 'H'],
          SE: ['H'],
          SG: ['h', 'hb', 'H', 'hB'],
          SH: ['H', 'h', 'hb', 'hB'],
          SI: ['H', 'hB'],
          SJ: ['H'],
          SK: ['H'],
          SL: ['h', 'hb', 'H', 'hB'],
          SM: ['H', 'h', 'hB'],
          SN: ['H', 'h', 'hB'],
          SO: ['h', 'H'],
          SR: ['H', 'hB'],
          SS: ['h', 'hb', 'H', 'hB'],
          ST: ['H', 'hB'],
          SV: ['h', 'H', 'hB', 'hb'],
          SX: ['H', 'h', 'hb', 'hB'],
          SY: ['h', 'hB', 'hb', 'H'],
          SZ: ['h', 'hb', 'H', 'hB'],
          TA: ['H', 'h', 'hb', 'hB'],
          TC: ['h', 'hb', 'H', 'hB'],
          TD: ['h', 'H', 'hB'],
          TF: ['H', 'h', 'hB'],
          TG: ['H', 'hB'],
          TH: ['H', 'h'],
          TJ: ['H', 'h'],
          TL: ['H', 'hB', 'hb', 'h'],
          TM: ['H', 'h'],
          TN: ['h', 'hB', 'hb', 'H'],
          TO: ['h', 'H'],
          TR: ['H', 'hB'],
          TT: ['h', 'hb', 'H', 'hB'],
          TW: ['hB', 'hb', 'h', 'H'],
          TZ: ['hB', 'hb', 'H', 'h'],
          UA: ['H', 'hB', 'h'],
          UG: ['hB', 'hb', 'H', 'h'],
          UM: ['h', 'hb', 'H', 'hB'],
          US: ['h', 'hb', 'H', 'hB'],
          UY: ['h', 'H', 'hB', 'hb'],
          UZ: ['H', 'hB', 'h'],
          VA: ['H', 'h', 'hB'],
          VC: ['h', 'hb', 'H', 'hB'],
          VE: ['h', 'H', 'hB', 'hb'],
          VG: ['h', 'hb', 'H', 'hB'],
          VI: ['h', 'hb', 'H', 'hB'],
          VN: ['H', 'h'],
          VU: ['h', 'H'],
          WF: ['H', 'hB'],
          WS: ['h', 'H'],
          XK: ['H', 'hB', 'h'],
          YE: ['h', 'hB', 'hb', 'H'],
          YT: ['H', 'hB'],
          ZA: ['H', 'h', 'hb', 'hB'],
          ZM: ['h', 'hb', 'H', 'hB'],
          ZW: ['H', 'h'],
          'af-ZA': ['H', 'h', 'hB', 'hb'],
          'ar-001': ['h', 'hB', 'hb', 'H'],
          'ca-ES': ['H', 'h', 'hB'],
          'en-001': ['h', 'hb', 'H', 'hB'],
          'en-HK': ['h', 'hb', 'H', 'hB'],
          'en-IL': ['H', 'h', 'hb', 'hB'],
          'en-MY': ['h', 'hb', 'H', 'hB'],
          'es-BR': ['H', 'h', 'hB', 'hb'],
          'es-ES': ['H', 'h', 'hB', 'hb'],
          'es-GQ': ['H', 'h', 'hB', 'hb'],
          'fr-CA': ['H', 'h', 'hB'],
          'gl-ES': ['H', 'h', 'hB'],
          'gu-IN': ['hB', 'hb', 'h', 'H'],
          'hi-IN': ['hB', 'h', 'H'],
          'it-CH': ['H', 'h', 'hB'],
          'it-IT': ['H', 'h', 'hB'],
          'kn-IN': ['hB', 'h', 'H'],
          'ml-IN': ['hB', 'h', 'H'],
          'mr-IN': ['hB', 'hb', 'h', 'H'],
          'pa-IN': ['hB', 'hb', 'h', 'H'],
          'ta-IN': ['hB', 'h', 'hb', 'H'],
          'te-IN': ['hB', 'h', 'H'],
          'zu-ZA': ['H', 'hB', 'hb', 'h'],
        };
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js [app-rsc] (ecmascript)':
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
          getBestPattern: () => getBestPattern,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js [app-rsc] (ecmascript)',
          );
        function getBestPattern(skeleton, locale) {
          var skeletonCopy = '';
          for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
            var patternChar = skeleton.charAt(patternPos);
            if (patternChar === 'j') {
              var extraLength = 0;
              while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
              }
              var hourLen = 1 + (extraLength & 1);
              var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
              var dayPeriodChar = 'a';
              var hourChar = getDefaultHourSymbolFromLocale(locale);
              if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
              }
              while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
              }
              while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
              }
            } else if (patternChar === 'J') {
              skeletonCopy += 'H';
            } else {
              skeletonCopy += patternChar;
            }
          }
          return skeletonCopy;
        }
        /**
         * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
         * of the given `locale` to the corresponding time pattern.
         * @param locale
         */ function getDefaultHourSymbolFromLocale(locale) {
          var hourCycle = locale.hourCycle;
          if (
            hourCycle === undefined && // @ts-ignore hourCycle(s) is not identified yet
            locale.hourCycles && // @ts-ignore
            locale.hourCycles.length
          ) {
            // @ts-ignore
            hourCycle = locale.hourCycles[0];
          }
          if (hourCycle) {
            switch (hourCycle) {
              case 'h24':
                return 'k';
              case 'h23':
                return 'H';
              case 'h12':
                return 'h';
              case 'h11':
                return 'K';
              default:
                throw new Error('Invalid hourCycle');
            }
          }
          // TODO: Once hourCycle is fully supported remove the following with data generation
          var languageTag = locale.language;
          var regionTag;
          if (languageTag !== 'root') {
            regionTag = locale.maximize().region;
          }
          var hourCycles =
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'timeData'
            ][regionTag || ''] ||
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'timeData'
            ][languageTag || ''] ||
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'timeData'
            ][''.concat(languageTag, '-001')] ||
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$time$2d$data$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'timeData'
            ]['001'];
          return hourCycles[0];
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-rsc] (ecmascript)':
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
          Parser: () => Parser,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$date$2d$time$2d$pattern$2d$generator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.13/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [app-rsc] (ecmascript)',
          );
        var _a;
        var SPACE_SEPARATOR_START_REGEX = new RegExp(
          '^'.concat(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'SPACE_SEPARATOR_REGEX'
            ].source,
            '*',
          ),
        );
        var SPACE_SEPARATOR_END_REGEX = new RegExp(
          ''.concat(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'SPACE_SEPARATOR_REGEX'
            ].source,
            '*$',
          ),
        );
        function createLocation(start, end) {
          return {
            start: start,
            end: end,
          };
        }
        // #region Ponyfills
        // Consolidate these variables up top for easier toggling during debugging
        var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
        var hasNativeFromCodePoint = !!String.fromCodePoint;
        var hasNativeFromEntries = !!Object.fromEntries;
        var hasNativeCodePointAt = !!String.prototype.codePointAt;
        var hasTrimStart = !!String.prototype.trimStart;
        var hasTrimEnd = !!String.prototype.trimEnd;
        var hasNativeIsSafeInteger = !!Number.isSafeInteger;
        var isSafeInteger = hasNativeIsSafeInteger
          ? Number.isSafeInteger
          : function (n) {
              return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
            };
        // IE11 does not support y and u.
        var REGEX_SUPPORTS_U_AND_Y = true;
        try {
          var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
          /**
           * legacy Edge or Xbox One browser
           * Unicode flag support: supported
           * Pattern_Syntax support: not supported
           * See https://github.com/formatjs/formatjs/issues/2822
           */ REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
        } catch (_) {
          REGEX_SUPPORTS_U_AND_Y = false;
        }
        var startsWith = hasNativeStartsWith
          ? function startsWith(s, search, position) {
              return s.startsWith(search, position);
            }
          : function startsWith(s, search, position) {
              return s.slice(position, position + search.length) === search;
            };
        var fromCodePoint = hasNativeFromCodePoint
          ? String.fromCodePoint
          : function fromCodePoint() {
              var codePoints = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
              }
              var elements = '';
              var length = codePoints.length;
              var i = 0;
              var code;
              while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
                elements +=
                  code < 0x10000
                    ? String.fromCharCode(code)
                    : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
              }
              return elements;
            };
        var fromEntries = // native
          hasNativeFromEntries
            ? Object.fromEntries
            : function fromEntries(entries) {
                var obj = {};
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                  var _a = entries_1[_i],
                    k = _a[0],
                    v = _a[1];
                  obj[k] = v;
                }
                return obj;
              };
        var codePointAt = hasNativeCodePointAt
          ? function codePointAt(s, index) {
              return s.codePointAt(index);
            }
          : function codePointAt(s, index) {
              var size = s.length;
              if (index < 0 || index >= size) {
                return undefined;
              }
              var first = s.charCodeAt(index);
              var second;
              return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
            };
        var trimStart = hasTrimStart
          ? function trimStart(s) {
              return s.trimStart();
            }
          : function trimStart(s) {
              return s.replace(SPACE_SEPARATOR_START_REGEX, '');
            };
        var trimEnd = hasTrimEnd
          ? function trimEnd(s) {
              return s.trimEnd();
            }
          : function trimEnd(s) {
              return s.replace(SPACE_SEPARATOR_END_REGEX, '');
            };
        // Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
        function RE(s, flag) {
          return new RegExp(s, flag);
        }
        // #endregion
        var matchIdentifierAtIndex;
        if (REGEX_SUPPORTS_U_AND_Y) {
          // Native
          var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
          matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
            var _a;
            IDENTIFIER_PREFIX_RE_1.lastIndex = index;
            var match = IDENTIFIER_PREFIX_RE_1.exec(s);
            return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
          };
        } else {
          // IE11
          matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
            var match = [];
            while (true) {
              var c = codePointAt(s, index);
              if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
              }
              match.push(c);
              index += c >= 0x10000 ? 2 : 1;
            }
            return fromCodePoint.apply(void 0, match);
          };
        }
        var Parser = (function () {
          function Parser(message, options) {
            if (options === void 0) {
              options = {};
            }
            this.message = message;
            this.position = {
              offset: 0,
              line: 1,
              column: 1,
            };
            this.ignoreTag = !!options.ignoreTag;
            this.locale = options.locale;
            this.requiresOtherClause = !!options.requiresOtherClause;
            this.shouldParseSkeletons = !!options.shouldParseSkeletons;
          }
          Parser.prototype.parse = function () {
            if (this.offset() !== 0) {
              throw Error('parser can only be used once');
            }
            return this.parseMessage(0, '', false);
          };
          Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
            var elements = [];
            while (!this.isEOF()) {
              var char = this.char();
              if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                  return result;
                }
                elements.push(result.val);
              } else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
              } else if (char === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                  type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'TYPE'
                  ].pound,
                  location: createLocation(position, this.clonePosition()),
                });
              } else if (
                char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
              ) {
                if (expectingCloseTag) {
                  break;
                } else {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].UNMATCHED_CLOSING_TAG,
                    createLocation(this.clonePosition(), this.clonePosition()),
                  );
                }
              } else if (char === 60 /* `<` */ && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                  return result;
                }
                elements.push(result.val);
              } else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                  return result;
                }
                elements.push(result.val);
              }
            }
            return {
              val: elements,
              err: null,
            };
          };
          /**
           * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
           * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
           * are accepted:
           *
           * ```
           * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
           * tagName ::= [a-z] (PENChar)*
           * PENChar ::=
           *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
           *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
           *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
           * ```
           *
           * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
           * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
           * since other tag-based engines like React allow it
           */ Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
            var startPosition = this.clonePosition();
            this.bump(); // `<`
            var tagName = this.parseTagName();
            this.bumpSpace();
            if (this.bumpIf('/>')) {
              // Self closing tag
              return {
                val: {
                  type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'TYPE'
                  ].literal,
                  value: '<'.concat(tagName, '/>'),
                  location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
              };
            } else if (this.bumpIf('>')) {
              var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
              if (childrenResult.err) {
                return childrenResult;
              }
              var children = childrenResult.val;
              // Expecting a close tag
              var endTagStartPosition = this.clonePosition();
              if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].INVALID_TAG,
                    createLocation(endTagStartPosition, this.clonePosition()),
                  );
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].UNMATCHED_CLOSING_TAG,
                    createLocation(closingTagNameStartPosition, this.clonePosition()),
                  );
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].INVALID_TAG,
                    createLocation(endTagStartPosition, this.clonePosition()),
                  );
                }
                return {
                  val: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'TYPE'
                    ].tag,
                    value: tagName,
                    children: children,
                    location: createLocation(startPosition, this.clonePosition()),
                  },
                  err: null,
                };
              } else {
                return this.error(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'ErrorKind'
                  ].UNCLOSED_TAG,
                  createLocation(startPosition, this.clonePosition()),
                );
              }
            } else {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].INVALID_TAG,
                createLocation(startPosition, this.clonePosition()),
              );
            }
          };
          /**
           * This method assumes that the caller has peeked ahead for the first tag character.
           */ Parser.prototype.parseTagName = function () {
            var startOffset = this.offset();
            this.bump(); // the first tag name character
            while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
              this.bump();
            }
            return this.message.slice(startOffset, this.offset());
          };
          Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
            var start = this.clonePosition();
            var value = '';
            while (true) {
              var parseQuoteResult = this.tryParseQuote(parentArgType);
              if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
              }
              var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
              if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
              }
              var parseLeftAngleResult = this.tryParseLeftAngleBracket();
              if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
              }
              break;
            }
            var location = createLocation(start, this.clonePosition());
            return {
              val: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'TYPE'
                ].literal,
                value: value,
                location: location,
              },
              err: null,
            };
          };
          Parser.prototype.tryParseLeftAngleBracket = function () {
            if (
              !this.isEOF() &&
              this.char() === 60 /* `<` */ &&
              (this.ignoreTag || // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))
            ) {
              this.bump(); // `<`
              return '<';
            }
            return null;
          };
          /**
           * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
           * a character that requires quoting (that is, "only where needed"), and works the same in
           * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
           */ Parser.prototype.tryParseQuote = function (parentArgType) {
            if (this.isEOF() || this.char() !== 39 /* `'` */) {
              return null;
            }
            // Parse escaped char following the apostrophe, or early return if there is no escaped char.
            // Check if is valid escaped character
            switch (this.peek()) {
              case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
              // '{', '<', '>', '}'
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                  break;
                }
                return null;
              default:
                return null;
            }
            this.bump(); // apostrophe
            var codePoints = [this.char()]; // escaped char
            this.bump();
            // read chars until the optional closing apostrophe is found
            while (!this.isEOF()) {
              var ch = this.char();
              if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                  codePoints.push(39);
                  // Bump one more time because we need to skip 2 characters.
                  this.bump();
                } else {
                  // Optional closing apostrophe.
                  this.bump();
                  break;
                }
              } else {
                codePoints.push(ch);
              }
              this.bump();
            }
            return fromCodePoint.apply(void 0, codePoints);
          };
          Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
            if (this.isEOF()) {
              return null;
            }
            var ch = this.char();
            if (
              ch === 60 /* `<` */ ||
              ch === 123 /* `{` */ ||
              (ch === 35 /* `#` */ && (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
              (ch === 125 /* `}` */ && nestingLevel > 0)
            ) {
              return null;
            } else {
              this.bump();
              return fromCodePoint(ch);
            }
          };
          Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
            var openingBracePosition = this.clonePosition();
            this.bump(); // `{`
            this.bumpSpace();
            if (this.isEOF()) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].EXPECT_ARGUMENT_CLOSING_BRACE,
                createLocation(openingBracePosition, this.clonePosition()),
              );
            }
            if (this.char() === 125 /* `}` */) {
              this.bump();
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].EMPTY_ARGUMENT,
                createLocation(openingBracePosition, this.clonePosition()),
              );
            }
            // argument name
            var value = this.parseIdentifierIfPossible().value;
            if (!value) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].MALFORMED_ARGUMENT,
                createLocation(openingBracePosition, this.clonePosition()),
              );
            }
            this.bumpSpace();
            if (this.isEOF()) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].EXPECT_ARGUMENT_CLOSING_BRACE,
                createLocation(openingBracePosition, this.clonePosition()),
              );
            }
            switch (this.char()) {
              // Simple argument: `{name}`
              case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                  val: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'TYPE'
                    ].argument,
                    // value does not include the opening and closing braces.
                    value: value,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                  },
                  err: null,
                };
              }
              // Argument with options: `{name, format, ...}`
              case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_ARGUMENT_CLOSING_BRACE,
                    createLocation(openingBracePosition, this.clonePosition()),
                  );
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
              }
              default:
                return this.error(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'ErrorKind'
                  ].MALFORMED_ARGUMENT,
                  createLocation(openingBracePosition, this.clonePosition()),
                );
            }
          };
          /**
           * Advance the parser until the end of the identifier, if it is currently on
           * an identifier character. Return an empty string otherwise.
           */ Parser.prototype.parseIdentifierIfPossible = function () {
            var startingPosition = this.clonePosition();
            var startOffset = this.offset();
            var value = matchIdentifierAtIndex(this.message, startOffset);
            var endOffset = startOffset + value.length;
            this.bumpTo(endOffset);
            var endPosition = this.clonePosition();
            var location = createLocation(startingPosition, endPosition);
            return {
              value: value,
              location: location,
            };
          };
          Parser.prototype.parseArgumentOptions = function (
            nestingLevel,
            expectingCloseTag,
            value,
            openingBracePosition,
          ) {
            var _a;
            // Parse this range:
            // {name, type, style}
            //        ^---^
            var typeStartPosition = this.clonePosition();
            var argType = this.parseIdentifierIfPossible().value;
            var typeEndPosition = this.clonePosition();
            switch (argType) {
              case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'ErrorKind'
                  ].EXPECT_ARGUMENT_TYPE,
                  createLocation(typeStartPosition, typeEndPosition),
                );
              case 'number':
              case 'date':
              case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                  this.bumpSpace();
                  var styleStartPosition = this.clonePosition();
                  var result = this.parseSimpleArgStyleIfPossible();
                  if (result.err) {
                    return result;
                  }
                  var style = trimEnd(result.val);
                  if (style.length === 0) {
                    return this.error(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].EXPECT_ARGUMENT_STYLE,
                      createLocation(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                  styleAndLocation = {
                    style: style,
                    styleLocation: styleLocation,
                  };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                  return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (
                  styleAndLocation &&
                  startsWith(
                    styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style,
                    '::',
                    0,
                  )
                ) {
                  // Skeleton starts with `::`.
                  var skeleton = trimStart(styleAndLocation.style.slice(2));
                  if (argType === 'number') {
                    var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                    if (result.err) {
                      return result;
                    }
                    return {
                      val: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'TYPE'
                        ].number,
                        value: value,
                        location: location_1,
                        style: result.val,
                      },
                      err: null,
                    };
                  } else {
                    if (skeleton.length === 0) {
                      return this.error(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'ErrorKind'
                        ].EXPECT_DATE_TIME_SKELETON,
                        location_1,
                      );
                    }
                    var dateTimePattern = skeleton;
                    // Get "best match" pattern only if locale is passed, if not, let it
                    // pass as-is where `parseDateTimeSkeleton()` will throw an error
                    // for unsupported patterns.
                    if (this.locale) {
                      dateTimePattern = (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$date$2d$time$2d$pattern$2d$generator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'getBestPattern'
                      ])(skeleton, this.locale);
                    }
                    var style = {
                      type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'SKELETON_TYPE'
                      ].dateTime,
                      pattern: dateTimePattern,
                      location: styleAndLocation.styleLocation,
                      parsedOptions: this.shouldParseSkeletons
                        ? (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            'parseDateTimeSkeleton'
                          ])(dateTimePattern)
                        : {},
                    };
                    var type =
                      argType === 'date'
                        ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            'TYPE'
                          ].date
                        : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            'TYPE'
                          ].time;
                    return {
                      val: {
                        type: type,
                        value: value,
                        location: location_1,
                        style: style,
                      },
                      err: null,
                    };
                  }
                }
                // Regular style or no style.
                return {
                  val: {
                    type:
                      argType === 'number'
                        ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            'TYPE'
                          ].number
                        : argType === 'date'
                          ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'TYPE'
                            ].date
                          : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'TYPE'
                            ].time,
                    value: value,
                    location: location_1,
                    style:
                      (_a =
                        styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !==
                        null && _a !== void 0
                        ? _a
                        : null,
                  },
                  err: null,
                };
              }
              case 'plural':
              case 'selectordinal':
              case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                  return this.error(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_SELECT_ARGUMENT_OPTIONS,
                    createLocation(
                      typeEndPosition_1,
                      (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        '__assign'
                      ])({}, typeEndPosition_1),
                    ),
                  );
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                  if (!this.bumpIf(':')) {
                    return this.error(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      createLocation(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  this.bumpSpace();
                  var result = this.tryParseDecimalInteger(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                  );
                  if (result.err) {
                    return result;
                  }
                  // Parse another identifier for option parsing
                  this.bumpSpace();
                  identifierAndLocation = this.parseIdentifierIfPossible();
                  pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(
                  nestingLevel,
                  argType,
                  expectingCloseTag,
                  identifierAndLocation,
                );
                if (optionsResult.err) {
                  return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                  return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                  return {
                    val: {
                      type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'TYPE'
                      ].select,
                      value: value,
                      options: fromEntries(optionsResult.val),
                      location: location_2,
                    },
                    err: null,
                  };
                } else {
                  return {
                    val: {
                      type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'TYPE'
                      ].plural,
                      value: value,
                      options: fromEntries(optionsResult.val),
                      offset: pluralOffset,
                      pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                      location: location_2,
                    },
                    err: null,
                  };
                }
              }
              default:
                return this.error(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'ErrorKind'
                  ].INVALID_ARGUMENT_TYPE,
                  createLocation(typeStartPosition, typeEndPosition),
                );
            }
          };
          Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
            // Parse: {value, number, ::currency/GBP }
            //
            if (this.isEOF() || this.char() !== 125 /* `}` */) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].EXPECT_ARGUMENT_CLOSING_BRACE,
                createLocation(openingBracePosition, this.clonePosition()),
              );
            }
            this.bump(); // `}`
            return {
              val: true,
              err: null,
            };
          };
          /**
           * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
           */ Parser.prototype.parseSimpleArgStyleIfPossible = function () {
            var nestedBraces = 0;
            var startPosition = this.clonePosition();
            while (!this.isEOF()) {
              var ch = this.char();
              switch (ch) {
                case 39 /* `'` */: {
                  // Treat apostrophe as quoting but include it in the style part.
                  // Find the end of the quoted literal text.
                  this.bump();
                  var apostrophePosition = this.clonePosition();
                  if (!this.bumpUntil("'")) {
                    return this.error(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      createLocation(apostrophePosition, this.clonePosition()),
                    );
                  }
                  this.bump();
                  break;
                }
                case 123 /* `{` */: {
                  nestedBraces += 1;
                  this.bump();
                  break;
                }
                case 125 /* `}` */: {
                  if (nestedBraces > 0) {
                    nestedBraces -= 1;
                  } else {
                    return {
                      val: this.message.slice(startPosition.offset, this.offset()),
                      err: null,
                    };
                  }
                  break;
                }
                default:
                  this.bump();
                  break;
              }
            }
            return {
              val: this.message.slice(startPosition.offset, this.offset()),
              err: null,
            };
          };
          Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
            var tokens = [];
            try {
              tokens = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'parseNumberSkeletonFromString'
              ])(skeleton);
            } catch (e) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].INVALID_NUMBER_SKELETON,
                location,
              );
            }
            return {
              val: {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'SKELETON_TYPE'
                ].number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                  ? (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$13$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'parseNumberSkeleton'
                    ])(tokens)
                  : {},
              },
              err: null,
            };
          };
          /**
           * @param nesting_level The current nesting level of messages.
           *     This can be positive when parsing message fragment in select or plural argument options.
           * @param parent_arg_type The parent argument's type.
           * @param parsed_first_identifier If provided, this is the first identifier-like selector of
           *     the argument. It is a by-product of a previous parsing attempt.
           * @param expecting_close_tag If true, this message is directly or indirectly nested inside
           *     between a pair of opening and closing tags. The nested message will not parse beyond
           *     the closing tag boundary.
           */ Parser.prototype.tryParsePluralOrSelectOptions = function (
            nestingLevel,
            parentArgType,
            expectCloseTag,
            parsedFirstIdentifier,
          ) {
            var _a;
            var hasOtherClause = false;
            var options = [];
            var parsedSelectors = new Set();
            var selector = parsedFirstIdentifier.value,
              selectorLocation = parsedFirstIdentifier.location;
            // Parse:
            // one {one apple}
            // ^--^
            while (true) {
              if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                  // Try parse `={number}` selector
                  var result = this.tryParseDecimalInteger(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].INVALID_PLURAL_ARGUMENT_SELECTOR,
                  );
                  if (result.err) {
                    return result;
                  }
                  selectorLocation = createLocation(startPosition, this.clonePosition());
                  selector = this.message.slice(startPosition.offset, this.offset());
                } else {
                  break;
                }
              }
              // Duplicate selector clauses
              if (parsedSelectors.has(selector)) {
                return this.error(
                  parentArgType === 'select'
                    ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  selectorLocation,
                );
              }
              if (selector === 'other') {
                hasOtherClause = true;
              }
              // Parse:
              // one {one apple}
              //     ^----------^
              this.bumpSpace();
              var openingBracePosition = this.clonePosition();
              if (!this.bumpIf('{')) {
                return this.error(
                  parentArgType === 'select'
                    ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'ErrorKind'
                      ].EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  createLocation(this.clonePosition(), this.clonePosition()),
                );
              }
              var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
              if (fragmentResult.err) {
                return fragmentResult;
              }
              var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
              if (argCloseResult.err) {
                return argCloseResult;
              }
              options.push([
                selector,
                {
                  value: fragmentResult.val,
                  location: createLocation(openingBracePosition, this.clonePosition()),
                },
              ]);
              // Keep track of the existing selectors
              parsedSelectors.add(selector);
              // Prep next selector clause.
              this.bumpSpace();
              (_a = this.parseIdentifierIfPossible()), (selector = _a.value), (selectorLocation = _a.location);
            }
            if (options.length === 0) {
              return this.error(
                parentArgType === 'select'
                  ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_SELECT_ARGUMENT_SELECTOR
                  : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorKind'
                    ].EXPECT_PLURAL_ARGUMENT_SELECTOR,
                createLocation(this.clonePosition(), this.clonePosition()),
              );
            }
            if (this.requiresOtherClause && !hasOtherClause) {
              return this.error(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ErrorKind'
                ].MISSING_OTHER_CLAUSE,
                createLocation(this.clonePosition(), this.clonePosition()),
              );
            }
            return {
              val: options,
              err: null,
            };
          };
          Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
            var sign = 1;
            var startingPosition = this.clonePosition();
            if (this.bumpIf('+')) {
            } else if (this.bumpIf('-')) {
              sign = -1;
            }
            var hasDigits = false;
            var decimal = 0;
            while (!this.isEOF()) {
              var ch = this.char();
              if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
              } else {
                break;
              }
            }
            var location = createLocation(startingPosition, this.clonePosition());
            if (!hasDigits) {
              return this.error(expectNumberError, location);
            }
            decimal *= sign;
            if (!isSafeInteger(decimal)) {
              return this.error(invalidNumberError, location);
            }
            return {
              val: decimal,
              err: null,
            };
          };
          Parser.prototype.offset = function () {
            return this.position.offset;
          };
          Parser.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          };
          Parser.prototype.clonePosition = function () {
            // This is much faster than `Object.assign` or spread.
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          };
          /**
           * Return the code point at the current position of the parser.
           * Throws if the index is out of bound.
           */ Parser.prototype.char = function () {
            var offset = this.position.offset;
            if (offset >= this.message.length) {
              throw Error('out of bound');
            }
            var code = codePointAt(this.message, offset);
            if (code === undefined) {
              throw Error('Offset '.concat(offset, ' is at invalid UTF-16 code unit boundary'));
            }
            return code;
          };
          Parser.prototype.error = function (kind, location) {
            return {
              val: null,
              err: {
                kind: kind,
                message: this.message,
                location: location,
              },
            };
          };
          /** Bump the parser to the next UTF-16 code unit. */ Parser.prototype.bump = function () {
            if (this.isEOF()) {
              return;
            }
            var code = this.char();
            if (code === 10 /* '\n' */) {
              this.position.line += 1;
              this.position.column = 1;
              this.position.offset += 1;
            } else {
              this.position.column += 1;
              // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
              this.position.offset += code < 0x10000 ? 1 : 2;
            }
          };
          /**
           * If the substring starting at the current position of the parser has
           * the given prefix, then bump the parser to the character immediately
           * following the prefix and return true. Otherwise, don't bump the parser
           * and return false.
           */ Parser.prototype.bumpIf = function (prefix) {
            if (startsWith(this.message, prefix, this.offset())) {
              for (var i = 0; i < prefix.length; i++) {
                this.bump();
              }
              return true;
            }
            return false;
          };
          /**
           * Bump the parser until the pattern character is found and return `true`.
           * Otherwise bump to the end of the file and return `false`.
           */ Parser.prototype.bumpUntil = function (pattern) {
            var currentOffset = this.offset();
            var index = this.message.indexOf(pattern, currentOffset);
            if (index >= 0) {
              this.bumpTo(index);
              return true;
            } else {
              this.bumpTo(this.message.length);
              return false;
            }
          };
          /**
           * Bump the parser to the target offset.
           * If target offset is beyond the end of the input, bump the parser to the end of the input.
           */ Parser.prototype.bumpTo = function (targetOffset) {
            if (this.offset() > targetOffset) {
              throw Error(
                'targetOffset '
                  .concat(targetOffset, ' must be greater than or equal to the current offset ')
                  .concat(this.offset()),
              );
            }
            targetOffset = Math.min(targetOffset, this.message.length);
            while (true) {
              var offset = this.offset();
              if (offset === targetOffset) {
                break;
              }
              if (offset > targetOffset) {
                throw Error('targetOffset '.concat(targetOffset, ' is at invalid UTF-16 code unit boundary'));
              }
              this.bump();
              if (this.isEOF()) {
                break;
              }
            }
          };
          /** advance the parser through all whitespace to the next non-whitespace code unit. */ Parser.prototype.bumpSpace =
            function () {
              while (!this.isEOF() && _isWhiteSpace(this.char())) {
                this.bump();
              }
            };
          /**
           * Peek at the *next* Unicode codepoint in the input without advancing the parser.
           * If the input has been exhausted, then this returns null.
           */ Parser.prototype.peek = function () {
            if (this.isEOF()) {
              return null;
            }
            var code = this.char();
            var offset = this.offset();
            var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
            return nextCode !== null && nextCode !== void 0 ? nextCode : null;
          };
          return Parser;
        })();
        /**
         * This check if codepoint is alphabet (lower & uppercase)
         * @param codepoint
         * @returns
         */ function _isAlpha(codepoint) {
          return (codepoint >= 97 && codepoint <= 122) || (codepoint >= 65 && codepoint <= 90);
        }
        function _isAlphaOrSlash(codepoint) {
          return _isAlpha(codepoint) || codepoint === 47; /* '/' */
        }
        /** See `parseTag` function docs. */ function _isPotentialElementNameChar(c) {
          return (
            c === 45 /* '-' */ ||
            c === 46 /* '.' */ ||
            (c >= 48 && c <= 57) ||
            c === 95 /* '_' */ ||
            (c >= 97 && c <= 122) ||
            (c >= 65 && c <= 90) ||
            c == 0xb7 ||
            (c >= 0xc0 && c <= 0xd6) ||
            (c >= 0xd8 && c <= 0xf6) ||
            (c >= 0xf8 && c <= 0x37d) ||
            (c >= 0x37f && c <= 0x1fff) ||
            (c >= 0x200c && c <= 0x200d) ||
            (c >= 0x203f && c <= 0x2040) ||
            (c >= 0x2070 && c <= 0x218f) ||
            (c >= 0x2c00 && c <= 0x2fef) ||
            (c >= 0x3001 && c <= 0xd7ff) ||
            (c >= 0xf900 && c <= 0xfdcf) ||
            (c >= 0xfdf0 && c <= 0xfffd) ||
            (c >= 0x10000 && c <= 0xeffff)
          );
        }
        /**
         * Code point equivalent of regex `\p{White_Space}`.
         * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
         */ function _isWhiteSpace(c) {
          return (
            (c >= 0x0009 && c <= 0x000d) ||
            c === 0x0020 ||
            c === 0x0085 ||
            (c >= 0x200e && c <= 0x200f) ||
            c === 0x2028 ||
            c === 0x2029
          );
        }
        /**
         * Code point equivalent of regex `\p{Pattern_Syntax}`.
         * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
         */ function _isPatternSyntax(c) {
          return (
            (c >= 0x0021 && c <= 0x0023) ||
            c === 0x0024 ||
            (c >= 0x0025 && c <= 0x0027) ||
            c === 0x0028 ||
            c === 0x0029 ||
            c === 0x002a ||
            c === 0x002b ||
            c === 0x002c ||
            c === 0x002d ||
            (c >= 0x002e && c <= 0x002f) ||
            (c >= 0x003a && c <= 0x003b) ||
            (c >= 0x003c && c <= 0x003e) ||
            (c >= 0x003f && c <= 0x0040) ||
            c === 0x005b ||
            c === 0x005c ||
            c === 0x005d ||
            c === 0x005e ||
            c === 0x0060 ||
            c === 0x007b ||
            c === 0x007c ||
            c === 0x007d ||
            c === 0x007e ||
            c === 0x00a1 ||
            (c >= 0x00a2 && c <= 0x00a5) ||
            c === 0x00a6 ||
            c === 0x00a7 ||
            c === 0x00a9 ||
            c === 0x00ab ||
            c === 0x00ac ||
            c === 0x00ae ||
            c === 0x00b0 ||
            c === 0x00b1 ||
            c === 0x00b6 ||
            c === 0x00bb ||
            c === 0x00bf ||
            c === 0x00d7 ||
            c === 0x00f7 ||
            (c >= 0x2010 && c <= 0x2015) ||
            (c >= 0x2016 && c <= 0x2017) ||
            c === 0x2018 ||
            c === 0x2019 ||
            c === 0x201a ||
            (c >= 0x201b && c <= 0x201c) ||
            c === 0x201d ||
            c === 0x201e ||
            c === 0x201f ||
            (c >= 0x2020 && c <= 0x2027) ||
            (c >= 0x2030 && c <= 0x2038) ||
            c === 0x2039 ||
            c === 0x203a ||
            (c >= 0x203b && c <= 0x203e) ||
            (c >= 0x2041 && c <= 0x2043) ||
            c === 0x2044 ||
            c === 0x2045 ||
            c === 0x2046 ||
            (c >= 0x2047 && c <= 0x2051) ||
            c === 0x2052 ||
            c === 0x2053 ||
            (c >= 0x2055 && c <= 0x205e) ||
            (c >= 0x2190 && c <= 0x2194) ||
            (c >= 0x2195 && c <= 0x2199) ||
            (c >= 0x219a && c <= 0x219b) ||
            (c >= 0x219c && c <= 0x219f) ||
            c === 0x21a0 ||
            (c >= 0x21a1 && c <= 0x21a2) ||
            c === 0x21a3 ||
            (c >= 0x21a4 && c <= 0x21a5) ||
            c === 0x21a6 ||
            (c >= 0x21a7 && c <= 0x21ad) ||
            c === 0x21ae ||
            (c >= 0x21af && c <= 0x21cd) ||
            (c >= 0x21ce && c <= 0x21cf) ||
            (c >= 0x21d0 && c <= 0x21d1) ||
            c === 0x21d2 ||
            c === 0x21d3 ||
            c === 0x21d4 ||
            (c >= 0x21d5 && c <= 0x21f3) ||
            (c >= 0x21f4 && c <= 0x22ff) ||
            (c >= 0x2300 && c <= 0x2307) ||
            c === 0x2308 ||
            c === 0x2309 ||
            c === 0x230a ||
            c === 0x230b ||
            (c >= 0x230c && c <= 0x231f) ||
            (c >= 0x2320 && c <= 0x2321) ||
            (c >= 0x2322 && c <= 0x2328) ||
            c === 0x2329 ||
            c === 0x232a ||
            (c >= 0x232b && c <= 0x237b) ||
            c === 0x237c ||
            (c >= 0x237d && c <= 0x239a) ||
            (c >= 0x239b && c <= 0x23b3) ||
            (c >= 0x23b4 && c <= 0x23db) ||
            (c >= 0x23dc && c <= 0x23e1) ||
            (c >= 0x23e2 && c <= 0x2426) ||
            (c >= 0x2427 && c <= 0x243f) ||
            (c >= 0x2440 && c <= 0x244a) ||
            (c >= 0x244b && c <= 0x245f) ||
            (c >= 0x2500 && c <= 0x25b6) ||
            c === 0x25b7 ||
            (c >= 0x25b8 && c <= 0x25c0) ||
            c === 0x25c1 ||
            (c >= 0x25c2 && c <= 0x25f7) ||
            (c >= 0x25f8 && c <= 0x25ff) ||
            (c >= 0x2600 && c <= 0x266e) ||
            c === 0x266f ||
            (c >= 0x2670 && c <= 0x2767) ||
            c === 0x2768 ||
            c === 0x2769 ||
            c === 0x276a ||
            c === 0x276b ||
            c === 0x276c ||
            c === 0x276d ||
            c === 0x276e ||
            c === 0x276f ||
            c === 0x2770 ||
            c === 0x2771 ||
            c === 0x2772 ||
            c === 0x2773 ||
            c === 0x2774 ||
            c === 0x2775 ||
            (c >= 0x2794 && c <= 0x27bf) ||
            (c >= 0x27c0 && c <= 0x27c4) ||
            c === 0x27c5 ||
            c === 0x27c6 ||
            (c >= 0x27c7 && c <= 0x27e5) ||
            c === 0x27e6 ||
            c === 0x27e7 ||
            c === 0x27e8 ||
            c === 0x27e9 ||
            c === 0x27ea ||
            c === 0x27eb ||
            c === 0x27ec ||
            c === 0x27ed ||
            c === 0x27ee ||
            c === 0x27ef ||
            (c >= 0x27f0 && c <= 0x27ff) ||
            (c >= 0x2800 && c <= 0x28ff) ||
            (c >= 0x2900 && c <= 0x2982) ||
            c === 0x2983 ||
            c === 0x2984 ||
            c === 0x2985 ||
            c === 0x2986 ||
            c === 0x2987 ||
            c === 0x2988 ||
            c === 0x2989 ||
            c === 0x298a ||
            c === 0x298b ||
            c === 0x298c ||
            c === 0x298d ||
            c === 0x298e ||
            c === 0x298f ||
            c === 0x2990 ||
            c === 0x2991 ||
            c === 0x2992 ||
            c === 0x2993 ||
            c === 0x2994 ||
            c === 0x2995 ||
            c === 0x2996 ||
            c === 0x2997 ||
            c === 0x2998 ||
            (c >= 0x2999 && c <= 0x29d7) ||
            c === 0x29d8 ||
            c === 0x29d9 ||
            c === 0x29da ||
            c === 0x29db ||
            (c >= 0x29dc && c <= 0x29fb) ||
            c === 0x29fc ||
            c === 0x29fd ||
            (c >= 0x29fe && c <= 0x2aff) ||
            (c >= 0x2b00 && c <= 0x2b2f) ||
            (c >= 0x2b30 && c <= 0x2b44) ||
            (c >= 0x2b45 && c <= 0x2b46) ||
            (c >= 0x2b47 && c <= 0x2b4c) ||
            (c >= 0x2b4d && c <= 0x2b73) ||
            (c >= 0x2b74 && c <= 0x2b75) ||
            (c >= 0x2b76 && c <= 0x2b95) ||
            c === 0x2b96 ||
            (c >= 0x2b97 && c <= 0x2bff) ||
            (c >= 0x2e00 && c <= 0x2e01) ||
            c === 0x2e02 ||
            c === 0x2e03 ||
            c === 0x2e04 ||
            c === 0x2e05 ||
            (c >= 0x2e06 && c <= 0x2e08) ||
            c === 0x2e09 ||
            c === 0x2e0a ||
            c === 0x2e0b ||
            c === 0x2e0c ||
            c === 0x2e0d ||
            (c >= 0x2e0e && c <= 0x2e16) ||
            c === 0x2e17 ||
            (c >= 0x2e18 && c <= 0x2e19) ||
            c === 0x2e1a ||
            c === 0x2e1b ||
            c === 0x2e1c ||
            c === 0x2e1d ||
            (c >= 0x2e1e && c <= 0x2e1f) ||
            c === 0x2e20 ||
            c === 0x2e21 ||
            c === 0x2e22 ||
            c === 0x2e23 ||
            c === 0x2e24 ||
            c === 0x2e25 ||
            c === 0x2e26 ||
            c === 0x2e27 ||
            c === 0x2e28 ||
            c === 0x2e29 ||
            (c >= 0x2e2a && c <= 0x2e2e) ||
            c === 0x2e2f ||
            (c >= 0x2e30 && c <= 0x2e39) ||
            (c >= 0x2e3a && c <= 0x2e3b) ||
            (c >= 0x2e3c && c <= 0x2e3f) ||
            c === 0x2e40 ||
            c === 0x2e41 ||
            c === 0x2e42 ||
            (c >= 0x2e43 && c <= 0x2e4f) ||
            (c >= 0x2e50 && c <= 0x2e51) ||
            c === 0x2e52 ||
            (c >= 0x2e53 && c <= 0x2e7f) ||
            (c >= 0x3001 && c <= 0x3003) ||
            c === 0x3008 ||
            c === 0x3009 ||
            c === 0x300a ||
            c === 0x300b ||
            c === 0x300c ||
            c === 0x300d ||
            c === 0x300e ||
            c === 0x300f ||
            c === 0x3010 ||
            c === 0x3011 ||
            (c >= 0x3012 && c <= 0x3013) ||
            c === 0x3014 ||
            c === 0x3015 ||
            c === 0x3016 ||
            c === 0x3017 ||
            c === 0x3018 ||
            c === 0x3019 ||
            c === 0x301a ||
            c === 0x301b ||
            c === 0x301c ||
            c === 0x301d ||
            (c >= 0x301e && c <= 0x301f) ||
            c === 0x3020 ||
            c === 0x3030 ||
            c === 0xfd3e ||
            c === 0xfd3f ||
            (c >= 0xfe45 && c <= 0xfe46)
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/manipulator.js [app-rsc] (ecmascript)':
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
          hoistSelectors: () => hoistSelectors,
          isStructurallySame: () => isStructurallySame,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        function cloneDeep(obj) {
          if (Array.isArray(obj)) {
            // @ts-expect-error meh
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              '__spreadArray'
            ])([], obj.map(cloneDeep), true);
          }
          if (obj !== null && typeof obj === 'object') {
            // @ts-expect-error meh
            return Object.keys(obj).reduce(function (cloned, k) {
              // @ts-expect-error meh
              cloned[k] = cloneDeep(obj[k]);
              return cloned;
            }, {});
          }
          return obj;
        }
        function hoistPluralOrSelectElement(ast, el, positionToInject) {
          // pull this out of the ast and move it to the top
          var cloned = cloneDeep(el);
          var options = cloned.options;
          cloned.options = Object.keys(options).reduce(function (all, k) {
            var newValue = hoistSelectors(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__spreadArray'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__spreadArray'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])([], ast.slice(0, positionToInject), true),
                  options[k].value,
                  true,
                ),
                ast.slice(positionToInject + 1),
                true,
              ),
            );
            all[k] = {
              value: newValue,
            };
            return all;
          }, {});
          return cloned;
        }
        function isPluralOrSelectElement(el) {
          return (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isPluralElement'
            ])(el) ||
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isSelectElement'
            ])(el)
          );
        }
        function findPluralOrSelectElement(ast) {
          return !!ast.find(function (el) {
            if (isPluralOrSelectElement(el)) {
              return true;
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTagElement'
              ])(el)
            ) {
              return findPluralOrSelectElement(el.children);
            }
            return false;
          });
        }
        function hoistSelectors(ast) {
          for (var i = 0; i < ast.length; i++) {
            var el = ast[i];
            if (isPluralOrSelectElement(el)) {
              return [hoistPluralOrSelectElement(ast, el, i)];
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTagElement'
              ])(el) &&
              findPluralOrSelectElement([el])
            ) {
              throw new Error(
                'Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option',
              );
            }
          }
          return ast;
        }
        /**
         * Collect all variables in an AST to Record<string, TYPE>
         * @param ast AST to collect variables from
         * @param vars Record of variable name to variable type
         */ function collectVariables(ast, vars) {
          if (vars === void 0) {
            vars = new Map();
          }
          ast.forEach(function (el) {
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isArgumentElement'
              ])(el) ||
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isDateElement'
              ])(el) ||
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTimeElement'
              ])(el) ||
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isNumberElement'
              ])(el)
            ) {
              if (el.value in vars && vars.get(el.value) !== el.type) {
                throw new Error('Variable '.concat(el.value, ' has conflicting types'));
              }
              vars.set(el.value, el.type);
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPluralElement'
              ])(el) ||
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isSelectElement'
              ])(el)
            ) {
              vars.set(el.value, el.type);
              Object.keys(el.options).forEach(function (k) {
                collectVariables(el.options[k].value, vars);
              });
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTagElement'
              ])(el)
            ) {
              vars.set(el.value, el.type);
              collectVariables(el.children, vars);
            }
          });
        }
        function isStructurallySame(a, b) {
          var aVars = new Map();
          var bVars = new Map();
          collectVariables(a, aVars);
          collectVariables(b, bVars);
          if (aVars.size !== bVars.size) {
            return {
              success: false,
              error: new Error(
                'Different number of variables: ['
                  .concat(Array.from(aVars.keys()).join(', '), '] vs [')
                  .concat(Array.from(bVars.keys()).join(', '), ']'),
              ),
            };
          }
          return Array.from(aVars.entries()).reduce(
            function (result, _a) {
              var key = _a[0],
                type = _a[1];
              if (!result.success) {
                return result;
              }
              var bType = bVars.get(key);
              if (bType == null) {
                return {
                  success: false,
                  error: new Error('Missing variable '.concat(key, ' in message')),
                };
              }
              if (bType !== type) {
                return {
                  success: false,
                  error: new Error(
                    'Variable '
                      .concat(key, ' has conflicting types: ')
                      .concat(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'TYPE'
                        ][type],
                        ' vs ',
                      )
                      .concat(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'TYPE'
                        ][bType],
                      ),
                  ),
                };
              }
              return result;
            },
            {
              success: true,
            },
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <locals>':
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
          _Parser: () => _Parser,
          parse: () => parse,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-rsc] (ecmascript)',
          );
        function pruneLocation(els) {
          els.forEach(function (el) {
            delete el.location;
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isSelectElement'
              ])(el) ||
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPluralElement'
              ])(el)
            ) {
              for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
              }
            } else if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isNumberElement'
              ])(el) &&
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isNumberSkeleton'
              ])(el.style)
            ) {
              delete el.style.location;
            } else if (
              ((0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isDateElement'
              ])(el) ||
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'isTimeElement'
                ])(el)) &&
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isDateTimeSkeleton'
              ])(el.style)
            ) {
              delete el.style.location;
            } else if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTagElement'
              ])(el)
            ) {
              pruneLocation(el.children);
            }
          });
        }
        function parse(message, opts) {
          if (opts === void 0) {
            opts = {};
          }
          opts = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__assign'
          ])(
            {
              shouldParseSkeletons: true,
              requiresOtherClause: true,
            },
            opts,
          );
          var result =
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'Parser'
            ](message, opts).parse();
          if (result.err) {
            var error = SyntaxError(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ErrorKind'
              ][result.err.kind],
            );
            // @ts-expect-error Assign to error object
            error.location = result.err.location;
            // @ts-expect-error Assign to error object
            error.originalMessage = result.err.message;
            throw error;
          }
          if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
            pruneLocation(result.val);
          }
          return result.val;
        }
        var _Parser =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'Parser'
          ];
      }
    },
  '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <module evaluation>':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/error.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$manipulator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/manipulator.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/error.js [app-rsc] (ecmascript)':
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
          ErrorCode: () => ErrorCode,
          FormatError: () => FormatError,
          InvalidValueError: () => InvalidValueError,
          InvalidValueTypeError: () => InvalidValueTypeError,
          MissingValueError: () => MissingValueError,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        var ErrorCode;
        (function (ErrorCode) {
          // When we have a placeholder but no value to format
          ErrorCode['MISSING_VALUE'] = 'MISSING_VALUE';
          // When value supplied is invalid
          ErrorCode['INVALID_VALUE'] = 'INVALID_VALUE';
          // When we need specific Intl API but it's not available
          ErrorCode['MISSING_INTL_API'] = 'MISSING_INTL_API';
        })(ErrorCode || (ErrorCode = {}));
        var FormatError = (function (_super) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__extends'
          ])(FormatError, _super);
          function FormatError(msg, code, originalMessage) {
            var _this = _super.call(this, msg) || this;
            _this.code = code;
            _this.originalMessage = originalMessage;
            return _this;
          }
          FormatError.prototype.toString = function () {
            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
          };
          return FormatError;
        })(Error);
        var InvalidValueError = (function (_super) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__extends'
          ])(InvalidValueError, _super);
          function InvalidValueError(variableId, value, options, originalMessage) {
            return (
              _super.call(
                this,
                'Invalid values for "'
                  .concat(variableId, '": "')
                  .concat(value, '". Options are "')
                  .concat(Object.keys(options).join('", "'), '"'),
                ErrorCode.INVALID_VALUE,
                originalMessage,
              ) || this
            );
          }
          return InvalidValueError;
        })(FormatError);
        var InvalidValueTypeError = (function (_super) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__extends'
          ])(InvalidValueTypeError, _super);
          function InvalidValueTypeError(value, type, originalMessage) {
            return (
              _super.call(
                this,
                'Value for "'.concat(value, '" must be of type ').concat(type),
                ErrorCode.INVALID_VALUE,
                originalMessage,
              ) || this
            );
          }
          return InvalidValueTypeError;
        })(FormatError);
        var MissingValueError = (function (_super) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__extends'
          ])(MissingValueError, _super);
          function MissingValueError(variableId, originalMessage) {
            return (
              _super.call(
                this,
                'The intl string context variable "'
                  .concat(variableId, '" was not provided to the string "')
                  .concat(originalMessage, '"'),
                ErrorCode.MISSING_VALUE,
                originalMessage,
              ) || this
            );
          }
          return MissingValueError;
        })(FormatError);
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/formatters.js [app-rsc] (ecmascript)':
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
          PART_TYPE: () => PART_TYPE,
          formatToParts: () => formatToParts,
          isFormatXMLElementFn: () => isFormatXMLElementFn,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/error.js [app-rsc] (ecmascript)',
          );
        var PART_TYPE;
        (function (PART_TYPE) {
          PART_TYPE[(PART_TYPE['literal'] = 0)] = 'literal';
          PART_TYPE[(PART_TYPE['object'] = 1)] = 'object';
        })(PART_TYPE || (PART_TYPE = {}));
        function mergeLiteral(parts) {
          if (parts.length < 2) {
            return parts;
          }
          return parts.reduce(function (all, part) {
            var lastPart = all[all.length - 1];
            if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
              all.push(part);
            } else {
              lastPart.value += part.value;
            }
            return all;
          }, []);
        }
        function isFormatXMLElementFn(el) {
          return typeof el === 'function';
        }
        function formatToParts(
          els,
          locales,
          formatters,
          formats,
          values,
          currentPluralValue, // For debugging
          originalMessage,
        ) {
          // Hot path for straight simple msg translations
          if (
            els.length === 1 &&
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isLiteralElement'
            ])(els[0])
          ) {
            return [
              {
                type: PART_TYPE.literal,
                value: els[0].value,
              },
            ];
          }
          var result = [];
          for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
            var el = els_1[_i];
            // Exit early for string parts.
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isLiteralElement'
              ])(el)
            ) {
              result.push({
                type: PART_TYPE.literal,
                value: el.value,
              });
              continue;
            }
            // TODO: should this part be literal type?
            // Replace `#` in plural rules with the actual numeric value.
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPoundElement'
              ])(el)
            ) {
              if (typeof currentPluralValue === 'number') {
                result.push({
                  type: PART_TYPE.literal,
                  value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
              }
              continue;
            }
            var varName = el.value;
            // Enforce that all required values are provided by the caller.
            if (!(values && varName in values)) {
              throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'MissingValueError'
              ](varName, originalMessage);
            }
            var value = values[varName];
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isArgumentElement'
              ])(el)
            ) {
              if (!value || typeof value === 'string' || typeof value === 'number') {
                value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
              }
              result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
              });
              continue;
            }
            // Recursively format plural and select parts' option — which can be a
            // nested pattern structure. The choosing of the option to use is
            // abstracted-by and delegated-to the part helper object.
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isDateElement'
              ])(el)
            ) {
              var style =
                typeof el.style === 'string'
                  ? formats.date[el.style]
                  : (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'isDateTimeSkeleton'
                      ])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
              result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value),
              });
              continue;
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTimeElement'
              ])(el)
            ) {
              var style =
                typeof el.style === 'string'
                  ? formats.time[el.style]
                  : (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'isDateTimeSkeleton'
                      ])(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
              result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value),
              });
              continue;
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isNumberElement'
              ])(el)
            ) {
              var style =
                typeof el.style === 'string'
                  ? formats.number[el.style]
                  : (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'isNumberSkeleton'
                      ])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
              if (style && style.scale) {
                value = value * (style.scale || 1);
              }
              result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value),
              });
              continue;
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isTagElement'
              ])(el)
            ) {
              var children = el.children,
                value_1 = el.value;
              var formatFn = values[value_1];
              if (!isFormatXMLElementFn(formatFn)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'InvalidValueTypeError'
                ](value_1, 'function', originalMessage);
              }
              var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
              var chunks = formatFn(
                parts.map(function (p) {
                  return p.value;
                }),
              );
              if (!Array.isArray(chunks)) {
                chunks = [chunks];
              }
              result.push.apply(
                result,
                chunks.map(function (c) {
                  return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                  };
                }),
              );
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isSelectElement'
              ])(el)
            ) {
              var opt = el.options[value] || el.options.other;
              if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'InvalidValueError'
                ](el.value, value, Object.keys(el.options), originalMessage);
              }
              result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
              continue;
            }
            if (
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'isPluralElement'
              ])(el)
            ) {
              var opt = el.options['='.concat(value)];
              if (!opt) {
                if (!Intl.PluralRules) {
                  throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'FormatError'
                  ](
                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ErrorCode'
                    ].MISSING_INTL_API,
                    originalMessage,
                  );
                }
                var rule = formatters
                  .getPluralRules(locales, {
                    type: el.pluralType,
                  })
                  .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
              }
              if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'InvalidValueError'
                ](el.value, value, Object.keys(el.options), originalMessage);
              }
              result.push.apply(
                result,
                formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)),
              );
              continue;
            }
          }
          return mergeLiteral(result);
        }
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/core.js [app-rsc] (ecmascript)':
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
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_esm__({
          IntlMessageFormat: () => IntlMessageFormat,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+fast-memoize@2.2.6/node_modules/@formatjs/fast-memoize/lib/index.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.1/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [app-rsc] (ecmascript) <locals>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/formatters.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [app-rsc] (ecmascript)',
          );
        // -- MessageFormat --------------------------------------------------------
        function mergeConfig(c1, c2) {
          if (!c2) {
            return c1;
          }
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            '__assign'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              '__assign'
            ])(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__assign'
              ])({}, c1 || {}),
              c2 || {},
            ),
            Object.keys(c1).reduce(function (all, k) {
              all[k] = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                '__assign'
              ])(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])({}, c1[k]),
                c2[k] || {},
              );
              return all;
            }, {}),
          );
        }
        function mergeConfigs(defaultConfig, configs) {
          if (!configs) {
            return defaultConfig;
          }
          return Object.keys(defaultConfig).reduce(
            function (all, k) {
              all[k] = mergeConfig(defaultConfig[k], configs[k]);
              return all;
            },
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              '__assign'
            ])({}, defaultConfig),
          );
        }
        function createFastMemoizeCache(store) {
          return {
            create: function () {
              return {
                get: function (key) {
                  return store[key];
                },
                set: function (key, value) {
                  store[key] = value;
                },
              };
            },
          };
        }
        function createDefaultFormatters(cache) {
          if (cache === void 0) {
            cache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            };
          }
          return {
            getNumberFormat: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'memoize'
            ])(
              function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                return new ((_a = Intl.NumberFormat).bind.apply(
                  _a,
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])([void 0], args, false),
                ))();
              },
              {
                cache: createFastMemoizeCache(cache.number),
                strategy:
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'strategies'
                  ].variadic,
              },
            ),
            getDateTimeFormat: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'memoize'
            ])(
              function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                return new ((_a = Intl.DateTimeFormat).bind.apply(
                  _a,
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])([void 0], args, false),
                ))();
              },
              {
                cache: createFastMemoizeCache(cache.dateTime),
                strategy:
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'strategies'
                  ].variadic,
              },
            ),
            getPluralRules: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'memoize'
            ])(
              function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                return new ((_a = Intl.PluralRules).bind.apply(
                  _a,
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])([void 0], args, false),
                ))();
              },
              {
                cache: createFastMemoizeCache(cache.pluralRules),
                strategy:
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$6$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'strategies'
                  ].variadic,
              },
            ),
          };
        }
        var IntlMessageFormat = (function () {
          function IntlMessageFormat(message, locales, overrideFormats, opts) {
            if (locales === void 0) {
              locales = IntlMessageFormat.defaultLocale;
            }
            var _this = this;
            this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            };
            this.format = function (values) {
              var parts = _this.formatToParts(values);
              // Hot path for straight simple msg translations
              if (parts.length === 1) {
                return parts[0].value;
              }
              var result = parts.reduce(function (all, part) {
                if (
                  !all.length ||
                  part.type !==
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'PART_TYPE'
                    ].literal ||
                  typeof all[all.length - 1] !== 'string'
                ) {
                  all.push(part.value);
                } else {
                  all[all.length - 1] += part.value;
                }
                return all;
              }, []);
              if (result.length <= 1) {
                return result[0] || '';
              }
              return result;
            };
            this.formatToParts = function (values) {
              return (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'formatToParts'
              ])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
            };
            this.resolvedOptions = function () {
              var _a;
              return {
                locale:
                  ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) ||
                  Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
              };
            };
            this.getAst = function () {
              return _this.ast;
            };
            // Defined first because it's used to build the format pattern.
            this.locales = locales;
            this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
            if (typeof message === 'string') {
              this.message = message;
              if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
              }
              var _a = opts || {},
                formatters = _a.formatters,
                parseOpts = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__rest'
                ])(_a, ['formatters']);
              // Parse string messages into an AST.
              this.ast = IntlMessageFormat.__parse(
                message,
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  '__assign'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    '__assign'
                  ])({}, parseOpts),
                  {
                    locale: this.resolvedLocale,
                  },
                ),
              );
            } else {
              this.ast = message;
            }
            if (!Array.isArray(this.ast)) {
              throw new TypeError('A message must be provided as a String or AST.');
            }
            // Creates a new object with the specified `formats` merged with the default
            // formats.
            this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
            this.formatters = (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
          }
          Object.defineProperty(IntlMessageFormat, 'defaultLocale', {
            get: function () {
              if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
              }
              return IntlMessageFormat.memoizedDefaultLocale;
            },
            enumerable: false,
            configurable: true,
          });
          IntlMessageFormat.memoizedDefaultLocale = null;
          IntlMessageFormat.resolveLocale = function (locales) {
            if (typeof Intl.Locale === 'undefined') {
              return;
            }
            var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
            if (supportedLocales.length > 0) {
              return new Intl.Locale(supportedLocales[0]);
            }
            return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
          };
          IntlMessageFormat.__parse =
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$1$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'parse'
            ];
          // Default format options used as the prototype of the `formats` provided to the
          // constructor. These are used when constructing the internal Intl.NumberFormat
          // and Intl.DateTimeFormat instances.
          IntlMessageFormat.formats = {
            number: {
              integer: {
                maximumFractionDigits: 0,
              },
              currency: {
                style: 'currency',
              },
              percent: {
                style: 'percent',
              },
            },
            date: {
              short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
              },
              medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              },
              long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              },
              full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              },
            },
            time: {
              short: {
                hour: 'numeric',
                minute: 'numeric',
              },
              medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              },
              long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
              },
              full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
              },
            },
          };
          return IntlMessageFormat;
        })();
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <locals>':
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
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/core.js [app-rsc] (ecmascript)',
          );
        const __TURBOPACK__default__export__ =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'IntlMessageFormat'
          ];
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <module evaluation>':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <exports>':
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
          ErrorCode: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ErrorCode'
            ],
          FormatError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'FormatError'
            ],
          IntlMessageFormat: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'IntlMessageFormat'
            ],
          InvalidValueError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'InvalidValueError'
            ],
          InvalidValueTypeError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'InvalidValueTypeError'
            ],
          MissingValueError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'MissingValueError'
            ],
          PART_TYPE: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'PART_TYPE'
            ],
          default: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'default'
            ],
          formatToParts: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'formatToParts'
            ],
          isFormatXMLElementFn: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isFormatXMLElementFn'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/core.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/error.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/src/formatters.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <locals>',
          );
      }
    },
  '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript)':
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
          ErrorCode: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'ErrorCode'
            ],
          FormatError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'FormatError'
            ],
          IntlMessageFormat: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'IntlMessageFormat'
            ],
          InvalidValueError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'InvalidValueError'
            ],
          InvalidValueTypeError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'InvalidValueTypeError'
            ],
          MissingValueError: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'MissingValueError'
            ],
          PART_TYPE: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'PART_TYPE'
            ],
          default: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'default'
            ],
          formatToParts: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'formatToParts'
            ],
          isFormatXMLElementFn: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
              'isFormatXMLElementFn'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$15$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript) <exports>',
          );
      }
    },
  '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/createFormatter-QqAaZwGD.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        var IntlMessageFormat = __turbopack_require__(
          '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript)',
        );
        var React = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
        );
        var initializeConfig = __turbopack_require__(
          '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/initializeConfig-BhfMSHP7.js [app-rsc] (ecmascript)',
        );
        function _interopDefault(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }
        var IntlMessageFormat__default = /*#__PURE__*/ _interopDefault(IntlMessageFormat);
        function setTimeZoneInFormats(formats, timeZone) {
          if (!formats) return formats;
          // The only way to set a time zone with `intl-messageformat` is to merge it into the formats
          // https://github.com/formatjs/formatjs/blob/8256c5271505cf2606e48e3c97ecdd16ede4f1b5/packages/intl/src/message.ts#L15
          return Object.keys(formats).reduce((acc, key) => {
            acc[key] = {
              timeZone,
              ...formats[key],
            };
            return acc;
          }, {});
        }
        /**
         * `intl-messageformat` uses separate keys for `date` and `time`, but there's
         * only one native API: `Intl.DateTimeFormat`. Additionally you might want to
         * include both a time and a date in a value, therefore the separation doesn't
         * seem so useful. We offer a single `dateTime` namespace instead, but we have
         * to convert the format before `intl-messageformat` can be used.
         */ function convertFormatsToIntlMessageFormat(formats, timeZone) {
          const formatsWithTimeZone = timeZone
            ? {
                ...formats,
                dateTime: setTimeZoneInFormats(formats.dateTime, timeZone),
              }
            : formats;
          const mfDateDefaults = IntlMessageFormat__default.default.formats.date;
          const defaultDateFormats = timeZone ? setTimeZoneInFormats(mfDateDefaults, timeZone) : mfDateDefaults;
          const mfTimeDefaults = IntlMessageFormat__default.default.formats.time;
          const defaultTimeFormats = timeZone ? setTimeZoneInFormats(mfTimeDefaults, timeZone) : mfTimeDefaults;
          return {
            ...formatsWithTimeZone,
            date: {
              ...defaultDateFormats,
              ...formatsWithTimeZone.dateTime,
            },
            time: {
              ...defaultTimeFormats,
              ...formatsWithTimeZone.dateTime,
            },
          };
        }
        // Placed here for improved tree shaking. Somehow when this is placed in
        // `formatters.tsx`, then it can't be shaken off from `next-intl`.
        function createMessageFormatter(cache, intlFormatters) {
          const getMessageFormat = initializeConfig.memoFn(function () {
            return new IntlMessageFormat__default.default(
              arguments.length <= 0 ? undefined : arguments[0],
              arguments.length <= 1 ? undefined : arguments[1],
              arguments.length <= 2 ? undefined : arguments[2],
              {
                formatters: intlFormatters,
                ...(arguments.length <= 3 ? undefined : arguments[3]),
              },
            );
          }, cache.message);
          return getMessageFormat;
        }
        function resolvePath(locale, messages, key, namespace) {
          const fullKey = initializeConfig.joinPath(namespace, key);
          if (!messages) {
            throw new Error('No messages available at `'.concat(namespace, '`.'));
          }
          let message = messages;
          key.split('.').forEach(part => {
            const next = message[part];
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (part == null || next == null) {
              throw new Error('Could not resolve `'.concat(fullKey, '` in messages for locale `').concat(locale, '`.'));
            }
            message = next;
          });
          return message;
        }
        function prepareTranslationValues(values) {
          if (Object.keys(values).length === 0) return undefined;
          // Workaround for https://github.com/formatjs/formatjs/issues/1467
          const transformedValues = {};
          Object.keys(values).forEach(key => {
            let index = 0;
            const value = values[key];
            let transformed;
            if (typeof value === 'function') {
              transformed = chunks => {
                const result = value(chunks);
                return /*#__PURE__*/ React.isValidElement(result)
                  ? /*#__PURE__*/ React.cloneElement(result, {
                      key: key + index++,
                    })
                  : result;
              };
            } else {
              transformed = value;
            }
            transformedValues[key] = transformed;
          });
          return transformedValues;
        }
        function getMessagesOrError(locale, messages, namespace) {
          let onError =
            arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : initializeConfig.defaultOnError;
          try {
            if (!messages) {
              throw new Error('No messages were configured on the provider.');
            }
            const retrievedMessages = namespace ? resolvePath(locale, messages, namespace) : messages;
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!retrievedMessages) {
              throw new Error('No messages for namespace `'.concat(namespace, '` found.'));
            }
            return retrievedMessages;
          } catch (error) {
            const intlError = new initializeConfig.IntlError(
              initializeConfig.IntlErrorCode.MISSING_MESSAGE,
              error.message,
            );
            onError(intlError);
            return intlError;
          }
        }
        function getPlainMessage(candidate, values) {
          if (values) return undefined;
          const unescapedMessage = candidate.replace(/'([{}])/gi, '$1');
          // Placeholders can be in the message if there are default values,
          // or if the user has forgotten to provide values. In the latter
          // case we need to compile the message to receive an error.
          const hasPlaceholders = /<|{/.test(unescapedMessage);
          if (!hasPlaceholders) {
            return unescapedMessage;
          }
          return undefined;
        }
        function createBaseTranslator(config) {
          const messagesOrError = getMessagesOrError(config.locale, config.messages, config.namespace, config.onError);
          return createBaseTranslatorImpl({
            ...config,
            messagesOrError,
          });
        }
        function createBaseTranslatorImpl(_ref) {
          let {
            cache,
            defaultTranslationValues,
            formats: globalFormats,
            formatters,
            getMessageFallback = initializeConfig.defaultGetMessageFallback,
            locale,
            messagesOrError,
            namespace,
            onError,
            timeZone,
          } = _ref;
          const hasMessagesError = messagesOrError instanceof initializeConfig.IntlError;
          function getFallbackFromErrorAndNotify(key, code, message) {
            const error = new initializeConfig.IntlError(code, message);
            onError(error);
            return getMessageFallback({
              error,
              key,
              namespace,
            });
          }
          function translateBaseFn(
            /** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key,
            /** Key value pairs for values to interpolate into the message. */ values,
            /** Provide custom formats for numbers, dates and times. */ formats,
          ) {
            if (hasMessagesError) {
              // We have already warned about this during render
              return getMessageFallback({
                error: messagesOrError,
                key,
                namespace,
              });
            }
            const messages = messagesOrError;
            let message;
            try {
              message = resolvePath(locale, messages, key, namespace);
            } catch (error) {
              return getFallbackFromErrorAndNotify(key, initializeConfig.IntlErrorCode.MISSING_MESSAGE, error.message);
            }
            if (typeof message === 'object') {
              let code, errorMessage;
              if (Array.isArray(message)) {
                code = initializeConfig.IntlErrorCode.INVALID_MESSAGE;
                {
                  errorMessage = 'Message at `'.concat(
                    initializeConfig.joinPath(namespace, key),
                    '` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/messages#arrays-of-messages',
                  );
                }
              } else {
                code = initializeConfig.IntlErrorCode.INSUFFICIENT_PATH;
                {
                  errorMessage = 'Message at `'.concat(
                    initializeConfig.joinPath(namespace, key),
                    '` resolved to an object, but only strings are supported. Use a `.` to retrieve nested messages. See https://next-intl.dev/docs/usage/messages#structuring-messages',
                  );
                }
              }
              return getFallbackFromErrorAndNotify(key, code, errorMessage);
            }
            let messageFormat;
            // Hot path that avoids creating an `IntlMessageFormat` instance
            const plainMessage = getPlainMessage(message, values);
            if (plainMessage) return plainMessage;
            // Lazy init the message formatter for better tree
            // shaking in case message formatting is not used.
            if (!formatters.getMessageFormat) {
              formatters.getMessageFormat = createMessageFormatter(cache, formatters);
            }
            try {
              messageFormat = formatters.getMessageFormat(
                message,
                locale,
                convertFormatsToIntlMessageFormat(
                  {
                    ...globalFormats,
                    ...formats,
                  },
                  timeZone,
                ),
                {
                  formatters: {
                    ...formatters,
                    getDateTimeFormat(locales, options) {
                      // Workaround for https://github.com/formatjs/formatjs/issues/4279
                      return formatters.getDateTimeFormat(locales, {
                        timeZone,
                        ...options,
                      });
                    },
                  },
                },
              );
            } catch (error) {
              const thrownError = error;
              return getFallbackFromErrorAndNotify(
                key,
                initializeConfig.IntlErrorCode.INVALID_MESSAGE,
                thrownError.message +
                  ('originalMessage' in thrownError ? ' ('.concat(thrownError.originalMessage, ')') : ''),
              );
            }
            try {
              const formattedMessage = messageFormat.format(
                // @ts-expect-error `intl-messageformat` expects a different format
                // for rich text elements since a recent minor update. This
                // needs to be evaluated in detail, possibly also in regards
                // to be able to format to parts.
                prepareTranslationValues({
                  ...defaultTranslationValues,
                  ...values,
                }),
              );
              if (formattedMessage == null) {
                throw new Error(
                  'Unable to format `'
                    .concat(key, '` in ')
                    .concat(namespace ? 'namespace `'.concat(namespace, '`') : 'messages'),
                );
              }
              // Limit the function signature to return strings or React elements
              return /*#__PURE__*/ React.isValidElement(formattedMessage) || // Arrays of React elements
                Array.isArray(formattedMessage) ||
                typeof formattedMessage === 'string'
                ? formattedMessage
                : String(formattedMessage);
            } catch (error) {
              return getFallbackFromErrorAndNotify(key, initializeConfig.IntlErrorCode.FORMATTING_ERROR, error.message);
            }
          }
          function translateFn(
            /** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key,
            /** Key value pairs for values to interpolate into the message. */ values,
            /** Provide custom formats for numbers, dates and times. */ formats,
          ) {
            const result = translateBaseFn(key, values, formats);
            if (typeof result !== 'string') {
              return getFallbackFromErrorAndNotify(
                key,
                initializeConfig.IntlErrorCode.INVALID_MESSAGE,
                'The message `'
                  .concat(key, '` in ')
                  .concat(
                    namespace ? 'namespace `'.concat(namespace, '`') : 'messages',
                    " didn't resolve to a string. If you want to format rich text, use `t.rich` instead.",
                  ),
              );
            }
            return result;
          }
          translateFn.rich = translateBaseFn;
          // Augment `translateBaseFn` to return plain strings
          translateFn.markup = (key, values, formats) => {
            const result = translateBaseFn(
              key, // @ts-expect-error -- `MarkupTranslationValues` is practically a sub type
              // of `RichTranslationValues` but TypeScript isn't smart enough here.
              values,
              formats,
            );
            // When only string chunks are provided to the parser, only
            // strings should be returned here. Note that we need a runtime
            // check for this since rich text values could be accidentally
            // inherited from `defaultTranslationValues`.
            if (typeof result !== 'string') {
              const error = new initializeConfig.IntlError(
                initializeConfig.IntlErrorCode.FORMATTING_ERROR,
                "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})",
              );
              onError(error);
              return getMessageFallback({
                error,
                key,
                namespace,
              });
            }
            return result;
          };
          translateFn.raw = key => {
            if (hasMessagesError) {
              // We have already warned about this during render
              return getMessageFallback({
                error: messagesOrError,
                key,
                namespace,
              });
            }
            const messages = messagesOrError;
            try {
              return resolvePath(locale, messages, key, namespace);
            } catch (error) {
              return getFallbackFromErrorAndNotify(key, initializeConfig.IntlErrorCode.MISSING_MESSAGE, error.message);
            }
          };
          translateFn.has = key => {
            if (hasMessagesError) {
              return false;
            }
            try {
              resolvePath(locale, messagesOrError, key, namespace);
              return true;
            } catch (_unused) {
              return false;
            }
          };
          return translateFn;
        }
        /**
         * For the strictly typed messages to work we have to wrap the namespace into
         * a mandatory prefix. See https://stackoverflow.com/a/71529575/343045
         */ function resolveNamespace(namespace, namespacePrefix) {
          return namespace === namespacePrefix ? undefined : namespace.slice((namespacePrefix + '.').length);
        }
        const SECOND = 1;
        const MINUTE = SECOND * 60;
        const HOUR = MINUTE * 60;
        const DAY = HOUR * 24;
        const WEEK = DAY * 7;
        const MONTH = DAY * (365 / 12); // Approximation
        const QUARTER = MONTH * 3;
        const YEAR = DAY * 365;
        const UNIT_SECONDS = {
          second: SECOND,
          seconds: SECOND,
          minute: MINUTE,
          minutes: MINUTE,
          hour: HOUR,
          hours: HOUR,
          day: DAY,
          days: DAY,
          week: WEEK,
          weeks: WEEK,
          month: MONTH,
          months: MONTH,
          quarter: QUARTER,
          quarters: QUARTER,
          year: YEAR,
          years: YEAR,
        };
        function resolveRelativeTimeUnit(seconds) {
          const absValue = Math.abs(seconds);
          if (absValue < MINUTE) {
            return 'second';
          } else if (absValue < HOUR) {
            return 'minute';
          } else if (absValue < DAY) {
            return 'hour';
          } else if (absValue < WEEK) {
            return 'day';
          } else if (absValue < MONTH) {
            return 'week';
          } else if (absValue < YEAR) {
            return 'month';
          }
          return 'year';
        }
        function calculateRelativeTimeValue(seconds, unit) {
          // We have to round the resulting values, as `Intl.RelativeTimeFormat`
          // will include fractions like '2.1 hours ago'.
          return Math.round(seconds / UNIT_SECONDS[unit]);
        }
        function createFormatter(_ref) {
          let {
            _cache: cache = initializeConfig.createCache(),
            _formatters: formatters = initializeConfig.createIntlFormatters(cache),
            formats,
            locale,
            now: globalNow,
            onError = initializeConfig.defaultOnError,
            timeZone: globalTimeZone,
          } = _ref;
          function applyTimeZone(options) {
            var _options;
            if (!((_options = options) !== null && _options !== void 0 && _options.timeZone)) {
              if (globalTimeZone) {
                options = {
                  ...options,
                  timeZone: globalTimeZone,
                };
              } else {
                onError(
                  new initializeConfig.IntlError(
                    initializeConfig.IntlErrorCode.ENVIRONMENT_FALLBACK,
                    "The `timeZone` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#time-zone",
                  ),
                );
              }
            }
            return options;
          }
          function resolveFormatOrOptions(typeFormats, formatOrOptions) {
            let options;
            if (typeof formatOrOptions === 'string') {
              const formatName = formatOrOptions;
              options = typeFormats === null || typeFormats === void 0 ? void 0 : typeFormats[formatName];
              if (!options) {
                const error = new initializeConfig.IntlError(
                  initializeConfig.IntlErrorCode.MISSING_FORMAT,
                  'Format `'.concat(
                    formatName,
                    '` is not available. You can configure it on the provider or provide custom options.',
                  ),
                );
                onError(error);
                throw error;
              }
            } else {
              options = formatOrOptions;
            }
            return options;
          }
          function getFormattedValue(formatOrOptions, typeFormats, formatter, getFallback) {
            let options;
            try {
              options = resolveFormatOrOptions(typeFormats, formatOrOptions);
            } catch (_unused) {
              return getFallback();
            }
            try {
              return formatter(options);
            } catch (error) {
              onError(new initializeConfig.IntlError(initializeConfig.IntlErrorCode.FORMATTING_ERROR, error.message));
              return getFallback();
            }
          }
          function dateTime(
            /** If a number is supplied, this is interpreted as a UTC timestamp. */ value,
            /** If a time zone is supplied, the `value` is converted to that time zone.
             * Otherwise the user time zone will be used. */ formatOrOptions,
          ) {
            return getFormattedValue(
              formatOrOptions,
              formats === null || formats === void 0 ? void 0 : formats.dateTime,
              options => {
                options = applyTimeZone(options);
                return formatters.getDateTimeFormat(locale, options).format(value);
              },
              () => String(value),
            );
          }
          function dateTimeRange(
            /** If a number is supplied, this is interpreted as a UTC timestamp. */ start,
            /** If a number is supplied, this is interpreted as a UTC timestamp. */ end,
            /** If a time zone is supplied, the values are converted to that time zone.
             * Otherwise the user time zone will be used. */ formatOrOptions,
          ) {
            return getFormattedValue(
              formatOrOptions,
              formats === null || formats === void 0 ? void 0 : formats.dateTime,
              options => {
                options = applyTimeZone(options);
                return formatters.getDateTimeFormat(locale, options).formatRange(start, end);
              },
              () => [dateTime(start), dateTime(end)].join(' – '),
            );
          }
          function number(value, formatOrOptions) {
            return getFormattedValue(
              formatOrOptions,
              formats === null || formats === void 0 ? void 0 : formats.number,
              options => formatters.getNumberFormat(locale, options).format(value),
              () => String(value),
            );
          }
          function getGlobalNow() {
            if (globalNow) {
              return globalNow;
            } else {
              onError(
                new initializeConfig.IntlError(
                  initializeConfig.IntlErrorCode.ENVIRONMENT_FALLBACK,
                  "The `now` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#now",
                ),
              );
              return new Date();
            }
          }
          function relativeTime(
            /** The date time that needs to be formatted. */ date,
            /** The reference point in time to which `date` will be formatted in relation to.  */ nowOrOptions,
          ) {
            try {
              let nowDate, unit;
              const opts = {};
              if (nowOrOptions instanceof Date || typeof nowOrOptions === 'number') {
                nowDate = new Date(nowOrOptions);
              } else if (nowOrOptions) {
                if (nowOrOptions.now != null) {
                  nowDate = new Date(nowOrOptions.now);
                } else {
                  nowDate = getGlobalNow();
                }
                unit = nowOrOptions.unit;
                opts.style = nowOrOptions.style;
                // @ts-expect-error -- Types are slightly outdated
                opts.numberingSystem = nowOrOptions.numberingSystem;
              }
              if (!nowDate) {
                nowDate = getGlobalNow();
              }
              const dateDate = new Date(date);
              const seconds = (dateDate.getTime() - nowDate.getTime()) / 1000;
              if (!unit) {
                unit = resolveRelativeTimeUnit(seconds);
              }
              // `numeric: 'auto'` can theoretically produce output like "yesterday",
              // but it only works with integers. E.g. -1 day will produce "yesterday",
              // but -1.1 days will produce "-1.1 days". Rounding before formatting is
              // not desired, as the given dates might cross a threshold were the
              // output isn't correct anymore. Example: 2024-01-08T23:00:00.000Z and
              // 2024-01-08T01:00:00.000Z would produce "yesterday", which is not the
              // case. By using `always` we can ensure correct output. The only exception
              // is the formatting of times <1 second as "now".
              opts.numeric = unit === 'second' ? 'auto' : 'always';
              const value = calculateRelativeTimeValue(seconds, unit);
              return formatters.getRelativeTimeFormat(locale, opts).format(value, unit);
            } catch (error) {
              onError(new initializeConfig.IntlError(initializeConfig.IntlErrorCode.FORMATTING_ERROR, error.message));
              return String(date);
            }
          }
          function list(value, formatOrOptions) {
            const serializedValue = [];
            const richValues = new Map();
            // `formatToParts` only accepts strings, therefore we have to temporarily
            // replace React elements with a placeholder ID that can be used to retrieve
            // the original value afterwards.
            let index = 0;
            for (const item of value) {
              let serializedItem;
              if (typeof item === 'object') {
                serializedItem = String(index);
                richValues.set(serializedItem, item);
              } else {
                serializedItem = String(item);
              }
              serializedValue.push(serializedItem);
              index++;
            }
            return getFormattedValue(
              formatOrOptions,
              formats === null || formats === void 0 ? void 0 : formats.list, // @ts-expect-error -- `richValues.size` is used to determine the return type, but TypeScript can't infer the meaning of this correctly
              options => {
                const result = formatters
                  .getListFormat(locale, options)
                  .formatToParts(serializedValue)
                  .map(part => (part.type === 'literal' ? part.value : richValues.get(part.value) || part.value));
                if (richValues.size > 0) {
                  return result;
                } else {
                  return result.join('');
                }
              },
              () => String(value),
            );
          }
          return {
            dateTime,
            number,
            relativeTime,
            list,
            dateTimeRange,
          };
        }
        exports.createBaseTranslator = createBaseTranslator;
        exports.createFormatter = createFormatter;
        exports.resolveNamespace = resolveNamespace;
      }
    },
  '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/core.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        var initializeConfig = __turbopack_require__(
          '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/initializeConfig-BhfMSHP7.js [app-rsc] (ecmascript)',
        );
        var createFormatter = __turbopack_require__(
          '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/createFormatter-QqAaZwGD.js [app-rsc] (ecmascript)',
        );
        __turbopack_require__(
          '[project]/node_modules/.pnpm/@formatjs+fast-memoize@2.2.6/node_modules/@formatjs/fast-memoize/lib/index.js [app-rsc] (ecmascript)',
        );
        __turbopack_require__(
          '[project]/node_modules/.pnpm/intl-messageformat@10.7.15/node_modules/intl-messageformat/lib/index.js [app-rsc] (ecmascript)',
        );
        __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
        );
        function createTranslatorImpl(_ref, namespacePrefix) {
          let { messages, namespace, ...rest } = _ref;
          // The `namespacePrefix` is part of the type system.
          // See the comment in the function invocation.
          messages = messages[namespacePrefix];
          namespace = createFormatter.resolveNamespace(namespace, namespacePrefix);
          return createFormatter.createBaseTranslator({
            ...rest,
            messages,
            namespace,
          });
        }
        /**
         * Translates messages from the given namespace by using the ICU syntax.
         * See https://formatjs.io/docs/core-concepts/icu-syntax.
         *
         * If no namespace is provided, all available messages are returned.
         * The namespace can also indicate nesting by using a dot
         * (e.g. `namespace.Component`).
         */ function createTranslator(_ref) {
          let {
            _cache = initializeConfig.createCache(),
            _formatters = initializeConfig.createIntlFormatters(_cache),
            getMessageFallback = initializeConfig.defaultGetMessageFallback,
            messages,
            namespace,
            onError = initializeConfig.defaultOnError,
            ...rest
          } = _ref;
          // We have to wrap the actual function so the type inference for the optional
          // namespace works correctly. See https://stackoverflow.com/a/71529575/343045
          // The prefix ("!") is arbitrary.
          return createTranslatorImpl(
            {
              ...rest,
              onError,
              cache: _cache,
              formatters: _formatters,
              getMessageFallback,
              // @ts-expect-error `messages` is allowed to be `undefined` here and will be handled internally
              messages: {
                '!': messages,
              },
              namespace: namespace ? '!.'.concat(namespace) : '!',
            },
            '!',
          );
        }
        exports.IntlError = initializeConfig.IntlError;
        exports.IntlErrorCode = initializeConfig.IntlErrorCode;
        exports._createCache = initializeConfig.createCache;
        exports._createIntlFormatters = initializeConfig.createIntlFormatters;
        exports.initializeConfig = initializeConfig.initializeConfig;
        exports.createFormatter = createFormatter.createFormatter;
        exports.createTranslator = createTranslator;
      }
    },
  '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/core.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        if (('TURBOPACK compile-time falsy', 0)) {
          ('TURBOPACK unreachable');
        } else {
          module.exports = __turbopack_require__(
            '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/development/core.js [app-rsc] (ecmascript)',
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)':
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
          default: () => p,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$request$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/i18n/request.ts [app-rsc] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleLegacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocaleLegacy.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/RequestLocale.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$3$2e$26$2e$3_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/use-intl@3.26.3_react@19.0.0/node_modules/use-intl/dist/core.js [app-rsc] (ecmascript)',
          );
        let s = !1,
          c = !1;
        const u = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(function () {
          return new Date();
        });
        const f = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        });
        const d = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'cache'
          ])(async function (t, n) {
            if ('function' != typeof t)
              throw new Error(
                "Invalid i18n request configuration detected.\n\nPlease verify that:\n1. In case you've specified a custom location in your Next.js config, make sure that the path is correct.\n2. You have a default export in your i18n request configuration file.\n\nSee also: https://next-intl.dev/docs/usage/configuration#i18n-request\n",
              );
            const o = {
              get locale() {
                return (
                  c ||
                    (console.warn(
                      '\nThe `locale` parameter in `getRequestConfig` is deprecated, please switch to `await requestLocale`. See https://next-intl.dev/blog/next-intl-3-22#await-request-locale\n',
                    ),
                    (c = !0)),
                  n ||
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocaleLegacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'getRequestLocale'
                    ])()
                );
              },
              get requestLocale() {
                return n
                  ? Promise.resolve(n)
                  : (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$RequestLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'getRequestLocale'
                    ])();
              },
            };
            let r = t(o);
            r instanceof Promise && (r = await r);
            let l = r.locale;
            return (
              l ||
                (s ||
                  (console.error(
                    '\nA `locale` is expected to be returned from `getRequestConfig`, but none was returned. This will be an error in the next major version of next-intl.\n\nSee: https://next-intl.dev/blog/next-intl-3-22#await-request-locale\n',
                  ),
                  (s = !0)),
                (l = await o.requestLocale),
                l ||
                  (console.error(
                    "\nUnable to find `next-intl` locale because the middleware didn't run on this request and no `locale` was returned in `getRequestConfig`. See https://next-intl.dev/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result.\n",
                  ),
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'notFound'
                  ])())),
              {
                ...r,
                locale: l,
                now: r.now || u(),
                timeZone: r.timeZone || f(),
              }
            );
          }),
          m = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'cache'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$3$2e$26$2e$3_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              '_createIntlFormatters'
            ],
          ),
          g = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'cache'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$3$2e$26$2e$3_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              '_createCache'
            ],
          );
        const p = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function (e) {
          const t = await d(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$request$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
            e,
          );
          return {
            ...(0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$3$2e$26$2e$3_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'initializeConfig'
            ])(t),
            _formatters: m(g()),
          };
        });
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/react-server/getServerLocale.js [app-rsc] (ecmascript)':
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
          default: () => r,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)',
          );
        async function r() {
          return (
            await (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ])()
          ).locale;
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/react-server/createNavigation.js [app-rsc] (ecmascript)':
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
          default: () => t,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$createSharedNavigationFns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/shared/createSharedNavigationFns.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$getServerLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/react-server/getServerLocale.js [app-rsc] (ecmascript)',
          );
        function t(t) {
          const { config: n, ...r } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$shared$2f$createSharedNavigationFns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ])(function () {
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$getServerLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ])();
          }, t);
          function u(e) {
            return () => {
              throw new Error(
                '`'.concat(
                  e,
                  '` is not supported in Server Components. You can use this hook if you convert the calling component to a Client Component.',
                ),
              );
            };
          }
          return {
            ...r,
            usePathname: u('usePathname'),
            useRouter: u('useRouter'),
          };
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/react-server/createNavigation.js [app-rsc] (ecmascript) <export default as createNavigation>':
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
          createNavigation: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/navigation/react-server/createNavigation.js [app-rsc] (ecmascript)',
          );
      }
    },
  '[project]/node_modules/.pnpm/rtl-detect@1.1.2/node_modules/rtl-detect/lib/rtl-detect.js [app-rsc] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */ ('use strict');
        var self;
        var RtlDetectLib = (self = {
          // Private vars - star
          _regexEscape: /([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g,
          _regexParseLocale: /^([a-zA-Z]*)([_\-a-zA-Z]*)$/,
          // Private vars - end
          // Private functions - star
          _escapeRegExpPattern: function (str) {
            if (typeof str !== 'string') {
              return str;
            }
            return str.replace(self._regexEscape, '\\$1');
          },
          _toLowerCase: function (str, reserveReturnValue) {
            if (typeof str !== 'string') {
              return reserveReturnValue && str;
            }
            return str.toLowerCase();
          },
          _toUpperCase: function (str, reserveReturnValue) {
            if (typeof str !== 'string') {
              return reserveReturnValue && str;
            }
            return str.toUpperCase();
          },
          _trim: function (str, delimiter, reserveReturnValue) {
            var patterns = [];
            var regexp;
            var addPatterns = function (pattern) {
              // Build trim RegExp pattern and push it to patterns array
              patterns.push('^' + pattern + '+|' + pattern + '+$');
            };
            // fix reserveReturnValue value
            if (typeof delimiter === 'boolean') {
              reserveReturnValue = delimiter;
              delimiter = null;
            }
            if (typeof str !== 'string') {
              return reserveReturnValue && str;
            }
            // Trim based on delimiter array values
            if (Array.isArray(delimiter)) {
              // Loop through delimiter array
              delimiter.map(function (item) {
                // Escape delimiter to be valid RegExp Pattern
                var pattern = self._escapeRegExpPattern(item);
                // Push pattern to patterns array
                addPatterns(pattern);
              });
            }
            // Trim based on delimiter string value
            if (typeof delimiter === 'string') {
              // Escape delimiter to be valid RegExp Pattern
              var patternDelimiter = self._escapeRegExpPattern(delimiter);
              // push pattern to patterns array
              addPatterns(patternDelimiter);
            }
            // If delimiter  is not defined, Trim white spaces
            if (!delimiter) {
              // Push white space pattern to patterns array
              addPatterns('\\s');
            }
            // Build RegExp pattern
            var pattern = '(' + patterns.join('|') + ')';
            // Build RegExp object
            regexp = new RegExp(pattern, 'g');
            // trim string for all patterns
            while (str.match(regexp)) {
              str = str.replace(regexp, '');
            }
            // Return trim string
            return str;
          },
          _parseLocale: function (strLocale) {
            var matches = self._regexParseLocale.exec(strLocale); // exec regex
            var parsedLocale;
            var lang;
            var countryCode;
            if (!strLocale || !matches) {
              return;
            }
            // fix countryCode string by trimming '-' and '_'
            matches[2] = self._trim(matches[2], ['-', '_']);
            lang = self._toLowerCase(matches[1]);
            countryCode = self._toUpperCase(matches[2]) || countryCode;
            // object with lang, countryCode properties
            parsedLocale = {
              lang: lang,
              countryCode: countryCode,
            };
            // return parsed locale object
            return parsedLocale;
          },
          // Private functions - End
          // Public functions - star
          isRtlLang: function (strLocale) {
            var objLocale = self._parseLocale(strLocale);
            if (!objLocale) {
              return;
            }
            // return true if the intel string lang exists in the BID RTL LANGS array else return false
            return self._BIDI_RTL_LANGS.indexOf(objLocale.lang) >= 0;
          },
          getLangDir: function (strLocale) {
            // return 'rtl' if the intel string lang exists in the BID RTL LANGS array else return 'ltr'
            return self.isRtlLang(strLocale) ? 'rtl' : 'ltr';
          },
        });
        // Const BIDI_RTL_LANGS Array
        // BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
        // Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
        Object.defineProperty(self, '_BIDI_RTL_LANGS', {
          value: [
            'ae',
            /* Avestan */ 'ar',
            /* 'العربية', Arabic */ 'arc',
            /* Aramaic */ 'bcc',
            /* 'بلوچی مکرانی', Southern Balochi */ 'bqi',
            /* 'بختياري', Bakthiari */ 'ckb',
            /* 'Soranî / کوردی', Sorani */ 'dv',
            /* Dhivehi */ 'fa',
            /* 'فارسی', Persian */ 'glk',
            /* 'گیلکی', Gilaki */ 'he',
            /* 'עברית', Hebrew */ 'ku',
            /* 'Kurdî / كوردی', Kurdish */ 'mzn',
            /* 'مازِرونی', Mazanderani */ 'nqo',
            /* N'Ko */ 'pnb',
            /* 'پنجابی', Western Punjabi */ 'prs',
            /* 'دری', Darī */ 'ps',
            /* 'پښتو', Pashto, */ 'sd',
            /* 'سنڌي', Sindhi */ 'ug',
            /* 'Uyghurche / ئۇيغۇرچە', Uyghur */ 'ur',
            /* 'اردو', Urdu */ 'yi' /* 'ייִדיש', Yiddish */,
          ],
          writable: false,
          enumerable: true,
          configurable: false,
        });
        module.exports = RtlDetectLib;
      }
    },
  '[project]/node_modules/.pnpm/rtl-detect@1.1.2/node_modules/rtl-detect/index.js [app-rsc] (ecmascript)': function (
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
      /**
       * Copyright 2015, Yahoo! Inc.
       * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
       */ ('use strict');
      var rtlDetect = __turbopack_require__(
        '[project]/node_modules/.pnpm/rtl-detect@1.1.2/node_modules/rtl-detect/lib/rtl-detect.js [app-rsc] (ecmascript)',
      );
      module.exports = {
        isRtlLang: rtlDetect.isRtlLang,
        getLangDir: rtlDetect.getLangDir,
      };
    }
  },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getMessages.js [app-rsc] (ecmascript)':
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
          default: () => r,
          getMessagesFromConfig: () => t,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)',
          );
        function t(e) {
          if (!e.messages)
            throw new Error(
              'No messages found. Have you configured them correctly? See https://next-intl.dev/docs/configuration#messages',
            );
          return e.messages;
        }
        const n = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function (e) {
          return t(
            await (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ])(e),
          );
        });
        async function r(e) {
          return n(null == e ? void 0 : e.locale);
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getMessages.js [app-rsc] (ecmascript) <export default as getMessages>':
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
          getMessages: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getMessages.js [app-rsc] (ecmascript)',
          );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js (client proxy) <module evaluation>':
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
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const __TURBOPACK__default__export__ = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js <module evaluation>',
          'default',
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js (client proxy)':
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
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)',
          );
        const __TURBOPACK__default__export__ = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js',
          'default',
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js [app-rsc] (ecmascript)':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$NextIntlClientProvider$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js (client proxy) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$NextIntlClientProvider$2e$js__$28$client__proxy$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js (client proxy)',
          );
        __turbopack_export_namespace__(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$NextIntlClientProvider$2e$js__$28$client__proxy$29$__,
        );
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getLocale.js [app-rsc] (ecmascript)':
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
          default: () => r,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)',
          );
        const r = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function () {
          const o = await (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ])();
          return Promise.resolve(o.locale);
        });
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getNow.js [app-rsc] (ecmascript)':
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
          default: () => r,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)',
          );
        const t = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function (n) {
          return (
            await (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ])(n)
          ).now;
        });
        async function r(n) {
          return t(null == n ? void 0 : n.locale);
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getTimeZone.js [app-rsc] (ecmascript)':
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
          default: () => r,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getConfig.js [app-rsc] (ecmascript)',
          );
        const o = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'cache'
        ])(async function (t) {
          return (
            await (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ])(t)
          ).timeZone;
        });
        async function r(t) {
          return o(null == t ? void 0 : t.locale);
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript)':
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
          default: () => i,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/_virtual/_rollupPluginBabelHelpers.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getLocale.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getNow$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getNow.js [app-rsc] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getTimeZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/server/react-server/getTimeZone.js [app-rsc] (ecmascript)',
          );
        async function i(i) {
          let { locale: n, now: s, timeZone: m, ...c } = i;
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ].createElement(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'extends'
            ])(
              {
                locale:
                  null != n
                    ? n
                    : await (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'default'
                      ])(),
                now:
                  null != s
                    ? s
                    : await (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getNow$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'default'
                      ])(),
                timeZone:
                  null != m
                    ? m
                    : await (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$server$2f$react$2d$server$2f$getTimeZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'default'
                      ])(),
              },
              c,
            ),
          );
        }
      }
    },
  '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>':
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
          NextIntlClientProvider: () =>
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'default'
            ],
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$3$2e$26$2e$3_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-intl@3.26.3_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/next-intl/dist/esm/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript)',
          );
      }
    },
};

//# sourceMappingURL=08b5e__pnpm_0ccae4._.js.map
