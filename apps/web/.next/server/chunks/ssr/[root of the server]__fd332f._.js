module.exports = {
  '[project]/apps/web/src/components/GridViewer/GridViewer.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        GridViewer: () => GridViewer,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      function GridViewer({
        children,
        columns = {
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        },
        gap = '4',
        className = '',
      }) {
        const gridClasses = `grid gap-${gap} ${className}
    grid-cols-1
    ${columns.sm ? `sm:grid-cols-${columns.sm}` : ''}
    ${columns.md ? `md:grid-cols-${columns.md}` : ''}
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ''}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}
  `;
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: gridClasses,
            children: children,
          },
          void 0,
          false,
          {
            fileName: '[project]/apps/web/src/components/GridViewer/GridViewer.tsx',
            lineNumber: 29,
            columnNumber: 10,
          },
          this,
        );
      }
    }
  },
  '[project]/apps/web/src/hooks/useUpdate.ts [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        default: () => useUpdate,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      function useUpdate({ resetDelay = 1000 }) {
        const [updateStatus, setUpdateStatus] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])('ready');
        const update = async updateFn => {
          setUpdateStatus('loading');
          return updateFn()
            .then(res => {
              setUpdateStatus('success');
              setTimeout(() => {
                setUpdateStatus('ready');
              }, resetDelay);
              return res;
            })
            .catch(err => {
              setUpdateStatus('error');
              throw err;
            });
        };
        return [updateStatus, update];
      }
    }
  },
  '[project]/apps/web/src/components/CopyButton/CopyButton.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUpdate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/hooks/useUpdate.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>',
        );
      /**
       * Button that handle to clipboard
       */ const CopyButton = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ copyValue, onClick, children, ...rest }, ref) => {
        const [copyStatus, handleStatus] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUpdate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ])({});
        const handleCopy = e => {
          try {
            handleStatus(() => navigator.clipboard.writeText(copyValue));
            if (onClick) onClick(e);
          } catch (error) {
            console.error('Failed to copy:', error);
          }
        };
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Button'
          ],
          {
            ref: ref,
            status: copyStatus,
            onClick: handleCopy,
            size: 'smIcon',
            variant: 'outline',
            ...rest,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__[
                  'Copy'
                ],
                {
                  className: '!size-3',
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/CopyButton/CopyButton.tsx',
                  lineNumber: 35,
                  columnNumber: 9,
                },
                this,
              ),
              children,
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/apps/web/src/components/CopyButton/CopyButton.tsx',
            lineNumber: 27,
            columnNumber: 7,
          },
          this,
        );
      });
      const __TURBOPACK__default__export__ = CopyButton;
    }
  },
  '[project]/apps/web/src/util/helpers/url.ts [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        splitURL: () => splitURL,
      });
      const splitURL = url => {
        const cleanUrl = url.replace(/^https?:\/\/(www\.)?/, '');
        const [domain, ...rest] = cleanUrl.split('/');
        const path = rest.join('/');
        const [basePath, queryString] = path.split('?');
        const queryParams = queryString
          ? queryString.split('&').map(param => {
              const [key, value] = param.split('=');
              return {
                key,
                value,
              };
            })
          : [];
        return {
          domain,
          basePath,
          queryParams,
        };
      };
    }
  },
  '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        URLFormatter: () => URLFormatter,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CopyButton$2f$CopyButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/CopyButton/CopyButton.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$helpers$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/util/helpers/url.ts [app-ssr] (ecmascript)');
      ('use client');
      function URLFormatter({ url, showQuery, showDomain, showBasePath }) {
        const formattedURL = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$helpers$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'splitURL'
        ])(url);
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'group h-[100px] max-w-full break-all font-mono',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'flex items-center justify-between',
                  children: [
                    showDomain &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: url,
                          target: '_blank',
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'cn'
                          ])(['text-primary text-md', 'group-hover:underline']),
                          children: formattedURL.domain,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                          lineNumber: 28,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'Tooltip'
                          ],
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'TooltipContent'
                                ],
                                {
                                  children: 'Copy URL',
                                },
                                void 0,
                                false,
                                {
                                  fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                  lineNumber: 38,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'TooltipTrigger'
                                ],
                                {
                                  asChild: true,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CopyButton$2f$CopyButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'default'
                                    ],
                                    {
                                      copyValue: url,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                      lineNumber: 40,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                  lineNumber: 39,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                            lineNumber: 37,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                        lineNumber: 36,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                  lineNumber: 26,
                  columnNumber: 7,
                },
                this,
              ),
              formattedURL.basePath &&
                showBasePath &&
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {
                    href: url,
                    target: '_blank',
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'cn'
                    ])([
                      'w-[200px] text-sm overflow-hidden whitespace-nowrap text-ellipsis inline-block m-w-full',
                      'group-hover:underline',
                    ]),
                    children: ['/', formattedURL.basePath],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  this,
                ),
              formattedURL.queryParams.length > 0 &&
                showQuery &&
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'span',
                  {
                    className: 'text-xs text-muted-foreground',
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className: 'm-w-full inline-block w-[200px] truncate',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'span',
                            {
                              children: '?',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                              lineNumber: 60,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          formattedURL.queryParams.map((param, index) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'span',
                              {
                                children: [
                                  index > 0 &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'span',
                                      {
                                        className: 'text-muted-foreground',
                                        children: '&',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                        lineNumber: 63,
                                        columnNumber: 31,
                                      },
                                      this,
                                    ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'span',
                                    {
                                      className: 'text-muted-foreground',
                                      children: [param.key, '='],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                      lineNumber: 64,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'span',
                                    {
                                      className: 'text-muted-foreground',
                                      children: decodeURIComponent(param.value),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                      lineNumber: 65,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              index,
                              true,
                              {
                                fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                                lineNumber: 62,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                        lineNumber: 59,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
                    lineNumber: 58,
                    columnNumber: 9,
                  },
                  this,
                ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx',
            lineNumber: 25,
            columnNumber: 5,
          },
          this,
        );
      }
    }
  },
  '[project]/apps/web/src/queries/util/pagination.ts [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        getPagination: () => getPagination,
      });
      const getPagination = (page, size) => {
        const from = page * size;
        const to = from + size - 1;
        return {
          from,
          to,
        };
      };
    }
  },
  '[project]/apps/web/src/queries/projects.ts [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        getProjects: () => getProjects,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$util$2f$pagination$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/queries/util/pagination.ts [app-ssr] (ecmascript)');
      const getProjects = (client, options = {}) => {
        const query = client
          .from('projects')
          .select(`id, domain, created_at, teams(name, theme, logo)`)
          .order('created_at', {
            ascending: false,
          });
        if (options.search && options.search.value.length > 0) {
          query.ilike('domain', `%${options.search.value}%`);
        }
        if (options.pagination) {
          const { page, size } = options.pagination;
          const { from, to } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$util$2f$pagination$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'getPagination'
          ])(page, size);
          query.range(from, to);
        }
        return query.throwOnError();
      };
    }
  },
  '[project]/apps/web/src/components/SearchBar/SearchBar.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>',
        );
      const SearchBar = ({ placeholder = 'Search...', className, ...rest }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(['relative w-full max-w-sm', className]),
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'label',
                {
                  htmlFor: 'search-input',
                  className: 'sr-only',
                  children: 'Search',
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
                  lineNumber: 15,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'relative',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                            'Search'
                          ],
                          {
                            className: 'h-4 w-4',
                            'aria-hidden': 'true',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
                            lineNumber: 21,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
                        lineNumber: 20,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'Input'
                      ],
                      {
                        id: 'search-input',
                        type: 'search',
                        placeholder: placeholder,
                        className: 'w-full pl-10 pr-4',
                        role: 'searchbox',
                        'aria-label': 'Search input',
                        ...rest,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
                        lineNumber: 24,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
                  lineNumber: 19,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/apps/web/src/components/SearchBar/SearchBar.tsx',
            lineNumber: 14,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = SearchBar;
    }
  },
  '[project]/apps/web/src/components/InfiniteScroll/InfiniteScroll.tsx [app-ssr] (ecmascript)':
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/loader.tsx [app-ssr] (ecmascript)');
        ('use client');
        function InfiniteScroll(props) {
          const observerElement = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useRef'
          ])(null);
          const { isLoadingIntial, isLoadingMore, children, loadMore } = props;
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            // is element in view?
            function handleIntersection(entries) {
              entries.forEach(entry => {
                if (entry.isIntersecting && (!isLoadingMore || !isLoadingIntial)) {
                  loadMore();
                }
              });
            }
            // create observer instance
            const observer = new IntersectionObserver(handleIntersection, {
              root: null,
              rootMargin: '100px',
              threshold: 0,
            });
            if (observerElement.current) {
              observer.observe(observerElement.current);
            }
            // cleanup function
            return () => observer.disconnect();
          }, [isLoadingMore, isLoadingIntial, loadMore]);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Fragment'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'Fragment'
                  ],
                  {
                    children: children,
                  },
                  void 0,
                  false,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    ref: observerElement,
                    id: 'obs',
                    children:
                      isLoadingMore &&
                      !isLoadingIntial &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'wrapper flex justify-center items-center h-20',
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'Loader'
                            ],
                            {
                              size: 'sm',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/InfiniteScroll/InfiniteScroll.tsx',
                              lineNumber: 49,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/InfiniteScroll/InfiniteScroll.tsx',
                          lineNumber: 48,
                          columnNumber: 11,
                        },
                        this,
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/InfiniteScroll/InfiniteScroll.tsx',
                    lineNumber: 46,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
          );
        }
        const __TURBOPACK__default__export__ = InfiniteScroll;
      }
    },
  '[project]/apps/web/src/components/ui/tabs.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        Tabs: () => Tabs,
        TabsContent: () => TabsContent,
        TabsList: () => TabsList,
        TabsTrigger: () => TabsTrigger,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/@radix-ui+react-tabs@1.1.3_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19.0.10_zw2jd7lnncg2lbtqb4feedrihy/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)',
        );
      ('use client');
      const Tabs =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
      const TabsList =
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(
          ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.List,
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'border-b inline-flex h-7 items-center justify-center rounded-sm  p-1 text-accent-foreground',
                  className,
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/ui/tabs.tsx',
                lineNumber: 14,
                columnNumber: 3,
              },
              this,
            ),
        );
      TabsList.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.List.displayName;
      const TabsTrigger =
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(
          ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger,
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'inline-flex items-center justify-center whitespace-nowrap px-3 py-1 hover:bg-accent/90 text-xs ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b border-primary data-[state=active]:text-foreground data-[state=active]:shadow',
                  className,
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/ui/tabs.tsx',
                lineNumber: 29,
                columnNumber: 3,
              },
              this,
            ),
        );
      TabsTrigger.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger.displayName;
      const TabsContent =
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(
          ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content,
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  className,
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/ui/tabs.tsx',
                lineNumber: 44,
                columnNumber: 3,
              },
              this,
            ),
        );
      TabsContent.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$10_zw2jd7lnncg2lbtqb4feedrihy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
    }
  },
  '[project]/apps/web/src/app/~/settings/layout-ui.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        Container: () => Container,
        Header: () => Header,
        Subheader: () => Subheader,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)');
      const Header = ({ children, title, description, ...rest }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          Container,
          {
            className: 'flex items-end justify-between',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'h1',
                      {
                        className: 'text-3xl',
                        children: title,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                        lineNumber: 18,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    description &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'text-xs text-muted-foreground',
                          children: description,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        this,
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                  lineNumber: 17,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  children: children,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                  lineNumber: 23,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
            lineNumber: 16,
            columnNumber: 5,
          },
          this,
        );
      };
      const Subheader = ({ title, description, className, ...rest }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Fragment'
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(['mt-5 p-2 mb-2', className]),
                ...rest,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'h2',
                    {
                      className: 'text-xl',
                      children: title,
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                      lineNumber: 42,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  description &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'p',
                      {
                        className: 'text-xs text-muted-foreground',
                        children: description,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                        lineNumber: 44,
                        columnNumber: 11,
                      },
                      this,
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
                lineNumber: 41,
                columnNumber: 7,
              },
              this,
            ),
          },
          void 0,
          false,
        );
      };
      const Container = ({ children, ...rest }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(['w-[40%] mx-auto my-10', rest.className]),
            children: children,
          },
          void 0,
          false,
          {
            fileName: '[project]/apps/web/src/app/~/settings/layout-ui.tsx',
            lineNumber: 55,
            columnNumber: 5,
          },
          this,
        );
      };
    }
  },
  '[externals]/node:process [external] (node:process, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('node:process', () => require('node:process'));

      module.exports = mod;
    }
  },
  '[externals]/node:process [external] (node:process, cjs) <export default as minproc>': __turbopack_context__ => {
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
        minproc: () =>
          __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__[
            'default'
          ],
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ =
        __turbopack_import__('[externals]/node:process [external] (node:process, cjs)');
    }
  },
  '[externals]/node:path [external] (node:path, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('node:path', () => require('node:path'));

      module.exports = mod;
    }
  },
  '[externals]/node:path [external] (node:path, cjs) <export default as minpath>': __turbopack_context__ => {
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
        minpath: () =>
          __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__[
            'default'
          ],
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ =
        __turbopack_import__('[externals]/node:path [external] (node:path, cjs)');
    }
  },
  '[externals]/node:url [external] (node:url, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('node:url', () => require('node:url'));

      module.exports = mod;
    }
  },
  '[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>': __turbopack_context__ => {
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
        urlToPath: () =>
          __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__[
            'fileURLToPath'
          ],
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ =
        __turbopack_import__('[externals]/node:url [external] (node:url, cjs)');
    }
  },
  '[externals]/tty [external] (tty, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('tty', () => require('tty'));

      module.exports = mod;
    }
  },
  '[externals]/util [external] (util, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('util', () => require('util'));

      module.exports = mod;
    }
  },
  '[externals]/os [external] (os, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
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
      const mod = __turbopack_external_require__('os', () => require('os'));

      module.exports = mod;
    }
  },
  '[project]/apps/web/src/app/~/page.tsx [app-ssr] (ecmascript)': __turbopack_context__ => {
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
        default: () => Dashboard,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/util/supabase/client.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GridViewer$2f$GridViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/GridViewer/GridViewer.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$URLFormatter$2f$URLFormatter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/URLFormatter/URLFormatter.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/queries/projects.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/SearchBar/SearchBar.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uidotdev$2b$usehooks$40$2$2e$4$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$uidotdev$2f$usehooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/@uidotdev+usehooks@2.4.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@uidotdev/usehooks/index.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$InfiniteScroll$2f$InfiniteScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/apps/web/src/components/InfiniteScroll/InfiniteScroll.tsx [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/ui/tabs.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f7e2f$settings$2f$layout$2d$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/app/~/settings/layout-ui.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-react-query@1.11.5_@supabase+postgrest-js@1.18.1_@supabase+_qe2ohay7gmnitdy3w3dgdcjl6q/node_modules/@supabase-cache-helpers/postgrest-react-query/dist/index.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/queries/members.ts [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/ui/loader.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/apps/web/src/components/IconPicker/IconAvatar.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$0_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/nuqs@2.4.0_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/nuqs/dist/index.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-ssr] (ecmascript) <export default as ListTodo>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$9$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/react-markdown@9.0.3_@types+react@19.0.10_react@19.0.0/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/formatDistanceToNow.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Tabs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Tabs.mjs [app-ssr] (ecmascript)',
        );
      ('use client');
      function Dashboard() {
        const [_, setSearchValue] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$0_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useQueryState'
        ])('search');
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Fragment'
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'Tabs'
              ],
              {
                defaultValue: 'projects',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'flex flex-col justify-between',
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'default'
                          ],
                          {
                            className: 'my-5 w-full max-w-full md:my-0 md:max-w-sm',
                            placeholder: 'Search Projects...',
                            onChange: e => {
                              setSearchValue(e.target.value);
                            },
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/app/~/page.tsx',
                            lineNumber: 30,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'TabsList'
                          ],
                          {
                            className: 'my-5',
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'TabsTrigger'
                                ],
                                {
                                  value: 'projects',
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__[
                                        'Building'
                                      ],
                                      {
                                        className: 'size-5 pr-1',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/app/~/page.tsx',
                                        lineNumber: 39,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    ' Projects',
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/apps/web/src/app/~/page.tsx',
                                  lineNumber: 38,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'TabsTrigger'
                                ],
                                {
                                  value: 'invites',
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__[
                                        'ListTodo'
                                      ],
                                      {
                                        className: 'size-5 pr-1',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/app/~/page.tsx',
                                        lineNumber: 42,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    'On Boarding',
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/apps/web/src/app/~/page.tsx',
                                  lineNumber: 41,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: '[project]/apps/web/src/app/~/page.tsx',
                            lineNumber: 37,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/apps/web/src/app/~/page.tsx',
                      lineNumber: 29,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'TabsContent'
                    ],
                    {
                      value: 'projects',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        ProjectsGrid,
                        {},
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/app/~/page.tsx',
                          lineNumber: 48,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/app/~/page.tsx',
                      lineNumber: 47,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'TabsContent'
                    ],
                    {
                      value: 'invites',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f7e2f$settings$2f$layout$2d$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'Container'
                        ],
                        {
                          className: 'rounded-sm border bg-muted',
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$9$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__[
                              'default'
                            ],
                            {
                              className: 'p-5',
                              children: md,
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/app/~/page.tsx',
                              lineNumber: 52,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/app/~/page.tsx',
                          lineNumber: 51,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/app/~/page.tsx',
                      lineNumber: 50,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/apps/web/src/app/~/page.tsx',
                lineNumber: 28,
                columnNumber: 7,
              },
              this,
            ),
          },
          void 0,
          false,
        );
      }
      const ProjectsGrid = () => {
        const [searchValue, _] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$0_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useQueryState'
        ])('search');
        const debouncedSearchValue = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$uidotdev$2b$usehooks$40$2$2e$4$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$uidotdev$2f$usehooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useDebounce'
        ])(searchValue, 300);
        const supabase = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ])();
        const { data: user } = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useQuery'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'getCurrentMemberWithMetadata'
          ])(supabase),
        );
        const {
          data: projectsResponse,
          isLoading,
          isError,
          error,
          fetchNextPage,
          hasNextPage,
          isFetchingNextPage,
        } = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useInfiniteQuery'
        ])({
          queryFn: async ({ pageParam }) => {
            const res = await (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'getProjects'
            ])(supabase, {
              pagination: {
                size: 20,
                page: pageParam,
              },
              search: {
                value: debouncedSearchValue ?? '',
              },
            }).eq('team_id', user?.selected_team_id ?? 0);
            return res;
          },
          queryKey: ['projects', user?.selected_team_id, debouncedSearchValue, supabase],
          initialPageParam: 0,
          getNextPageParam: (lastPage, _, lastPageParam, __) => {
            if (!lastPage.count) return null;
            const totalPages = Math.ceil(lastPage.count / 20);
            return totalPages === lastPageParam + 1 ? null : lastPageParam + 1;
          },
          enabled: !!user?.selected_team_id,
        });
        const projects = projectsResponse?.pages
          .flat()
          .map(res => res.data)
          .flat()
          .filter(item => item != null);
        console.log(error);
        if (isError)
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Fragment'
            ],
            {
              children: JSON.stringify(error.message),
            },
            void 0,
            false,
          );
        if (isLoading)
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Loader'
            ],
            {},
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/app/~/page.tsx',
              lineNumber: 107,
              columnNumber: 25,
            },
            this,
          );
        if (!projects?.length)
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: 'flex h-full flex-col items-center justify-center',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Tabs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'Tabs'
                      ],
                      {
                        size: 300,
                        strokeWidth: 0.5,
                        strokeOpacity: 0.5,
                        weight: 'thin',
                        className:
                          '[&>:last-child]:[stroke:#fff] [&>path]:[fill:none] [&>path]:[stroke-width:2px] [&>path]:[stroke:currentColor]',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/app/~/page.tsx',
                        lineNumber: 113,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/app/~/page.tsx',
                    lineNumber: 112,
                    columnNumber: 9,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className: '-mt-10 flex w-full flex-col justify-center text-center text-2xl font-thin',
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className: 'mt-1',
                        children: 'No Projects',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/app/~/page.tsx',
                        lineNumber: 122,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/app/~/page.tsx',
                    lineNumber: 121,
                    columnNumber: 9,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'p',
                  {
                    className: 'text-sm font-light italic text-muted-foreground',
                    children:
                      'Start by visiting the website you want to collaborate on, and click on the extension icon.',
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/app/~/page.tsx',
                    lineNumber: 124,
                    columnNumber: 9,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'span',
                  {
                    className: 'mt-5 flex w-full items-center justify-center space-x-2 text-sm',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          className: 'mr-3 size-6',
                          name: user?.teams?.logo,
                          theme: user?.teams?.theme,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/app/~/page.tsx',
                          lineNumber: 129,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      user?.teams?.name,
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/app/~/page.tsx',
                    lineNumber: 128,
                    columnNumber: 9,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/app/~/page.tsx',
              lineNumber: 111,
              columnNumber: 7,
            },
            this,
          );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$InfiniteScroll$2f$InfiniteScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                isLoadingIntial: isLoading,
                isLoadingMore: isFetchingNextPage,
                loadMore: () => hasNextPage && fetchNextPage(),
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GridViewer$2f$GridViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'GridViewer'
                  ],
                  {
                    children:
                      projects &&
                      projects.map(item =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'div',
                          {
                            className: 'w-full overflow-hidden rounded-sm border bg-card shadow-md',
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'p-4',
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'div',
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$URLFormatter$2f$URLFormatter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'URLFormatter'
                                        ],
                                        {
                                          showDomain: true,
                                          url: item.domain,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: '[project]/apps/web/src/app/~/page.tsx',
                                          lineNumber: 155,
                                          columnNumber: 21,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: '[project]/apps/web/src/app/~/page.tsx',
                                      lineNumber: 154,
                                      columnNumber: 19,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'div',
                                    {
                                      className: 'flex items-end justify-between',
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          'div',
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              'p',
                                              {
                                                className: 'text-xs',
                                                children: (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  'formatDistanceToNow'
                                                ])(item?.created_at, {
                                                  addSuffix: true,
                                                }),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: '[project]/apps/web/src/app/~/page.tsx',
                                                lineNumber: 159,
                                                columnNumber: 23,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: '[project]/apps/web/src/app/~/page.tsx',
                                            lineNumber: 158,
                                            columnNumber: 21,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'default'
                                          ],
                                          {
                                            href: `~/project/${item.id}`,
                                            className: 'flex items-start text-sm hover:underline',
                                            children: ['Show Threads', ' '],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: '[project]/apps/web/src/app/~/page.tsx',
                                            lineNumber: 165,
                                            columnNumber: 21,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: '[project]/apps/web/src/app/~/page.tsx',
                                      lineNumber: 157,
                                      columnNumber: 19,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: '[project]/apps/web/src/app/~/page.tsx',
                                lineNumber: 153,
                                columnNumber: 17,
                              },
                              this,
                            ),
                          },
                          item.id,
                          false,
                          {
                            fileName: '[project]/apps/web/src/app/~/page.tsx',
                            lineNumber: 149,
                            columnNumber: 15,
                          },
                          this,
                        ),
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/app/~/page.tsx',
                    lineNumber: 146,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/app/~/page.tsx',
                lineNumber: 141,
                columnNumber: 7,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/apps/web/src/app/~/page.tsx',
            lineNumber: 140,
            columnNumber: 5,
          },
          this,
        );
      };
      const md = `
# Setting Up Your Extension Monitoring

For any questions or issues, feel free to reach out to us at **support@yourtool.dev** (yes, we actually check it) or join our thriving Discord community at **yourtool.dev/chat** (where everyone is somehow an expert).

---


## 1. Install the Extension

Before anything else, install the extension. Currently, it’s available only on **Chrome** (because Firefox can wait, apparently).

1. Go to the [Chrome Web Store](https://chrome.google.com/webstore) and search for **"YourTool"** (or just click the link—we know you’re going to).
2. Click the **"Add to Chrome"** button.
3. Accept the permissions (it’s fine, we’re not stealing your data… probably).

---

## 2. Open the Extension
After installation, click the little puzzle piece icon in the top-right corner of your browser (yes, it’s hidden—blame Chrome).

1. Pin the extension for easy access (if you can figure out how).
2. Click the extension whenever you want to:
- Add a comment.
- View threads.
- Marvel at how much better your app is than everyone else’s.

---

## 3. Add Your API Key (Don’t Worry, It’s Safe)
To use the extension, you’ll need an API key. Think of it as your VIP pass to the tool.

1. Open the extension.
2. Paste your API key into the setup box (because typing it out is too much work).
3. Click **Save** (and watch the magic happen).

If you don’t have an API key yet, generate one from your account dashboard at **yourtool.dev/dashboard**.

---


## 4. Start Using the Extension
That’s it! You’re all set up. To:
- **Add a Comment:** Highlight any text, click the extension, and write your masterpiece.
- **View Threads:** Click the extension, navigate through the threads, and enjoy the drama.

---

## Pro Tips
- **Stay Updated:** We’re constantly improving, so keep an eye out for extension updates (or don’t and miss all the cool stuff).
- **Report Bugs:** If something doesn’t work, it’s not your fault (probably). Let us know!

---

Happy commenting! 🚀


`;
    }
  },
  '[project]/apps/web/src/app/~/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)':
    __turbopack_context__ => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
      }
    },
};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__fd332f._.js.map
