module.exports = {
  '[project]/apps/web/.next-internal/server/app/api/auth/route/actions.js [app-rsc] (ecmascript)': function (
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
    }
  },
  '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => "[project]/apps/web/src/app/api/auth/route.ts [app-route] (ecmascript)" } [app-route] (ecmascript)':
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
          patchFetch: () => patchFetch,
          routeModule: () => routeModule,
          serverHooks: () => serverHooks,
          workAsyncStorage: () => workAsyncStorage,
          workUnitAsyncStorage: () => workUnitAsyncStorage,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/esm/server/route-modules/app-route/module.compiled.js [app-route] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/esm/server/route-kind.js [app-route] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-route] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$api$2f$auth$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/app/api/auth/route.ts [app-route] (ecmascript)');
        // We inject the nextConfigOutput here so that we can use them in the route
        // module.
        const nextConfigOutput = '';
        const routeModule =
          new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            'AppRouteRouteModule'
          ]({
            definition: {
              kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
                'RouteKind'
              ].APP_ROUTE,
              page: '/api/auth/route',
              pathname: '/api/auth',
              filename: 'route',
              bundlePath: '',
            },
            resolvedPagePath: '[project]/apps/web/src/app/api/auth/route.ts',
            nextConfigOutput,
            userland:
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$api$2f$auth$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
          });
        // Pull out the exports that we need to expose from the module. This should
        // be eliminated when we've moved the other routes to the new format. These
        // are used to hook into the route.
        const { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;
        function patchFetch() {
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            'patchFetch'
          ])({
            workAsyncStorage,
            workUnitAsyncStorage,
          });
        }
        //# sourceMappingURL=app-route.js.map
      }
    },
};

//# sourceMappingURL=%5Bproject%5D__f5b518._.js.map
