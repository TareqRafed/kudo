(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'static/chunks/src_bcbbbf._.js',
  {
    '[project]/apps/web/src/hooks/use-mobile.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          useIsMobile: () => useIsMobile,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        const MOBILE_BREAKPOINT = 768;
        function useIsMobile() {
          _s();
          const [isMobile, setIsMobile] =
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(
              undefined,
            );
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(
            {
              'useIsMobile.useEffect': () => {
                const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
                const onChange = {
                  'useIsMobile.useEffect.onChange': () => {
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                  },
                }['useIsMobile.useEffect.onChange'];
                mql.addEventListener('change', onChange);
                setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                return {
                  'useIsMobile.useEffect': () => mql.removeEventListener('change', onChange),
                }['useIsMobile.useEffect'];
              },
            }['useIsMobile.useEffect'],
            [],
          );
          return !!isMobile;
        }
        _s(useIsMobile, 'D6B2cPXNCaIbeOx+abFr1uxLRM0=');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          cn: () => cn,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)',
          );
        function cn(...inputs) {
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'twMerge'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'clsx'
            ])(inputs),
          );
        }
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/loader.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Loader: () => Loader,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/framer-motion@11.18.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)',
          );
        const containerVariants = {
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        };
        const dotVariants = {
          initial: {
            y: '0%',
          },
          animate: {
            y: '100%',
            transition: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.6,
              ease: 'easeInOut',
            },
          },
        };
        const loaderVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])('flex transform-gpu items-center justify-center', {
          variants: {
            variant: {
              dots: 'w-full space-x-2',
              spinner: '',
            },
            size: {
              default: '',
              sm: '',
            },
          },
          compoundVariants: [
            {
              variant: 'dots',
              size: 'default',
              className: '[&>div]:size-4',
            },
            {
              variant: 'dots',
              size: 'sm',
              className: '[&>div]:size-2',
            },
            {
              variant: 'spinner',
              size: 'default',
              className: 'size-8',
            },
            {
              variant: 'spinner',
              size: 'sm',
              className: 'size-4',
            },
          ],
          defaultVariants: {
            variant: 'dots',
            size: 'default',
          },
        });
        const Loader = ({ className, size, variant, ...rest }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'motion'
            ].div,
            {
              role: 'status',
              'aria-live': 'polite',
              'aria-label': 'Loading, please wait',
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])(
                loaderVariants({
                  variant,
                  size,
                  className,
                }),
              ),
              variants: variant === 'dots' ? containerVariants : undefined,
              initial: variant === 'dots' ? 'initial' : false,
              animate: variant === 'dots' ? 'animate' : false,
              ...rest,
              children:
                variant === 'dots'
                  ? [...Array(3)].map((_, index) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'motion'
                        ].div,
                        {
                          className: 'rounded-full bg-white',
                          variants: dotVariants,
                        },
                        index,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/loader.tsx',
                          lineNumber: 85,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    )
                  : /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'motion'
                      ].div,
                      {
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'cn'
                        ])(
                          'h-full w-full rounded-full border-white border-t-transparent',
                          size === 'default' ? 'border-2' : 'border',
                        ),
                        animate: {
                          rotate: 360,
                        },
                        transition: {
                          repeat: Infinity,
                          duration: 1,
                          ease: 'linear',
                        },
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/loader.tsx',
                        lineNumber: 92,
                        columnNumber: 9,
                      },
                      this,
                    ),
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/ui/loader.tsx',
              lineNumber: 73,
              columnNumber: 5,
            },
            this,
          );
        };
        _c = Loader;
        var _c;
        __turbopack_refresh__.register(_c, 'Loader');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Button: () => Button,
          buttonVariants: () => buttonVariants,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/loader.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.0.10_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>',
          );
        const buttonVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-normal transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4  [&_svg]:shrink-0',
          {
            variants: {
              variant: {
                default:
                  'transform-gpu bg-primary text-primary-foreground shadow ring-offset-current transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:ring-2 hover:ring-primary hover:ring-offset-1',
                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-9 px-4 py-2',
                xs: 'h-5 px-3 text-xs',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-10  px-8',
                icon: 'size-9 text-xs',
                textIcon: 'h-9 w-16 text-xs',
                smIcon: 'size-6 p-1 text-xs',
              },
            },
            defaultVariants: {
              variant: 'default',
              size: 'default',
            },
          },
        );
        const Button =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, children, status = 'ready', variant, size, asChild = false, ...props }, ref) => {
              const Comp = asChild
                ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Slot'
                  ]
                : 'button';
              const iconClass = 'absolute inset-1/2 -translate-x-1/2 -translate-y-1/2';
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Comp,
                {
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    buttonVariants({
                      variant,
                      size,
                      className,
                    }),
                  ),
                  'aria-disabled': status !== 'ready',
                  ref: ref,
                  ...props,
                  disabled: status !== 'ready' || props.disabled,
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'span',
                    {
                      className: 'inline-flex space-x-1',
                      children: [
                        status == 'loading' &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'Loader'
                            ],
                            {
                              variant: 'spinner',
                              size: 'sm',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/ui/button.tsx',
                              lineNumber: 75,
                              columnNumber: 35,
                            },
                            this,
                          ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'span',
                          {
                            children: children,
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/ui/button.tsx',
                            lineNumber: 76,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        status == 'success' &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                              'Check'
                            ],
                            {
                              className: iconClass,
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/ui/button.tsx',
                              lineNumber: 77,
                              columnNumber: 35,
                            },
                            this,
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/apps/web/src/components/ui/button.tsx',
                      lineNumber: 74,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/button.tsx',
                  lineNumber: 67,
                  columnNumber: 7,
                },
                this,
              );
            }),
          );
        _c1 = Button;
        Button.displayName = 'Button';
        var _c, _c1;
        __turbopack_refresh__.register(_c, 'Button$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'Button');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/input.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Input: () => Input,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        const Input =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, type, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'input',
                {
                  type: type,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    className,
                  ),
                  ref: ref,
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/input.tsx',
                  lineNumber: 8,
                  columnNumber: 7,
                },
                this,
              );
            }),
          );
        _c1 = Input;
        Input.displayName = 'Input';
        var _c, _c1;
        __turbopack_refresh__.register(_c, 'Input$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'Input');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/separator.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Separator: () => Separator,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$separator$40$1$2e$1$2e$2_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19_o5tvbeklo6l442ofaldaigks5i$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-separator@1.1.2_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19_o5tvbeklo6l442ofaldaigks5i/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)',
          );
        ('use client');
        const Separator =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$separator$40$1$2e$1$2e$2_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19_o5tvbeklo6l442ofaldaigks5i$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root,
                {
                  ref: ref,
                  decorative: decorative,
                  orientation: orientation,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'shrink-0 bg-border',
                    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/separator.tsx',
                  lineNumber: 16,
                  columnNumber: 5,
                },
                this,
              )),
          );
        _c1 = Separator;
        Separator.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$separator$40$1$2e$1$2e$2_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19_o5tvbeklo6l442ofaldaigks5i$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
        var _c, _c1;
        __turbopack_refresh__.register(_c, 'Separator$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'Separator');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/sheet.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Sheet: () => Sheet,
          SheetClose: () => SheetClose,
          SheetContent: () => SheetContent,
          SheetDescription: () => SheetDescription,
          SheetFooter: () => SheetFooter,
          SheetHeader: () => SheetHeader,
          SheetOverlay: () => SheetOverlay,
          SheetPortal: () => SheetPortal,
          SheetTitle: () => SheetTitle,
          SheetTrigger: () => SheetTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1.6_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19.0._hjv5xdlxm3zsqf3yg6gf36cppa/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>',
          );
        ('use client');
        const Sheet =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
        const SheetTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
        const SheetClose =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close;
        const SheetPortal =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
        const SheetOverlay =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay,
                {
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    className,
                  ),
                  ...props,
                  ref: ref,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                  lineNumber: 22,
                  columnNumber: 3,
                },
                this,
              ),
          );
        _c = SheetOverlay;
        SheetOverlay.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Overlay.displayName;
        const sheetVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])(
          'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
          {
            variants: {
              side: {
                top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                bottom:
                  'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
                right:
                  'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
              },
            },
            defaultVariants: {
              side: 'right',
            },
          },
        );
        const SheetContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c1 = ({ side = 'right', className, children, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                SheetPortal,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      SheetOverlay,
                      {},
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                        lineNumber: 61,
                        columnNumber: 5,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content,
                      {
                        ref: ref,
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'cn'
                        ])(
                          sheetVariants({
                            side,
                          }),
                          className,
                        ),
                        ...props,
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close,
                            {
                              className:
                                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                    'X'
                                  ],
                                  {
                                    className: 'h-4 w-4',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                                    lineNumber: 68,
                                    columnNumber: 9,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'span',
                                  {
                                    className: 'sr-only',
                                    children: 'Close',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                                    lineNumber: 69,
                                    columnNumber: 9,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                              lineNumber: 67,
                              columnNumber: 7,
                            },
                            this,
                          ),
                          children,
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                        lineNumber: 62,
                        columnNumber: 5,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                  lineNumber: 60,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c2 = SheetContent;
        SheetContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
        const SheetHeader = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])('flex flex-col space-y-2 text-center sm:text-left', className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
              lineNumber: 81,
              columnNumber: 3,
            },
            this,
          );
        _c3 = SheetHeader;
        SheetHeader.displayName = 'SheetHeader';
        const SheetFooter = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
              lineNumber: 95,
              columnNumber: 3,
            },
            this,
          );
        _c4 = SheetFooter;
        SheetFooter.displayName = 'SheetFooter';
        const SheetTitle =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c5 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('text-lg font-semibold text-foreground', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                  lineNumber: 109,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c6 = SheetTitle;
        SheetTitle.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
        const SheetDescription =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c7 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('text-sm text-muted-foreground', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sheet.tsx',
                  lineNumber: 121,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c8 = SheetDescription;
        SheetDescription.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_hjv5xdlxm3zsqf3yg6gf36cppa$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
        __turbopack_refresh__.register(_c, 'SheetOverlay');
        __turbopack_refresh__.register(_c1, 'SheetContent$React.forwardRef');
        __turbopack_refresh__.register(_c2, 'SheetContent');
        __turbopack_refresh__.register(_c3, 'SheetHeader');
        __turbopack_refresh__.register(_c4, 'SheetFooter');
        __turbopack_refresh__.register(_c5, 'SheetTitle$React.forwardRef');
        __turbopack_refresh__.register(_c6, 'SheetTitle');
        __turbopack_refresh__.register(_c7, 'SheetDescription$React.forwardRef');
        __turbopack_refresh__.register(_c8, 'SheetDescription');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Skeleton: () => Skeleton,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        function Skeleton({ className, ...props }) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])('animate-pulse rounded-md bg-accent/20', className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/ui/skeleton.tsx',
              lineNumber: 8,
              columnNumber: 5,
            },
            this,
          );
        }
        _c = Skeleton;
        var _c;
        __turbopack_refresh__.register(_c, 'Skeleton');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Tooltip: () => Tooltip,
          TooltipContent: () => TooltipContent,
          TooltipProvider: () => TooltipProvider,
          TooltipTrigger: () => TooltipTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-tooltip@1.1.8_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19.0_pl67xn6fl322p75p6sn3vj73rq/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)',
          );
        ('use client');
        const TooltipProvider =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Provider;
        const Tooltip =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
        const TooltipTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
        const TooltipContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, sideOffset = 4, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal,
                {
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content,
                    {
                      ref: ref,
                      sideOffset: sideOffset,
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'cn'
                      ])(
                        'z-50 overflow-hidden rounded bg-accent px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                        className,
                      ),
                      ...props,
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/ui/tooltip.tsx',
                      lineNumber: 19,
                      columnNumber: 5,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/tooltip.tsx',
                  lineNumber: 18,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c1 = TooltipContent;
        TooltipContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$1$2e$8_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0_pl67xn6fl322p75p6sn3vj73rq$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
        var _c, _c1;
        __turbopack_refresh__.register(_c, 'TooltipContent$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'TooltipContent');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Sidebar: () => Sidebar,
          SidebarContent: () => SidebarContent,
          SidebarFooter: () => SidebarFooter,
          SidebarGroup: () => SidebarGroup,
          SidebarGroupAction: () => SidebarGroupAction,
          SidebarGroupContent: () => SidebarGroupContent,
          SidebarGroupLabel: () => SidebarGroupLabel,
          SidebarHeader: () => SidebarHeader,
          SidebarInput: () => SidebarInput,
          SidebarInset: () => SidebarInset,
          SidebarMenu: () => SidebarMenu,
          SidebarMenuAction: () => SidebarMenuAction,
          SidebarMenuBadge: () => SidebarMenuBadge,
          SidebarMenuButton: () => SidebarMenuButton,
          SidebarMenuItem: () => SidebarMenuItem,
          SidebarMenuSkeleton: () => SidebarMenuSkeleton,
          SidebarMenuSub: () => SidebarMenuSub,
          SidebarMenuSubButton: () => SidebarMenuSubButton,
          SidebarMenuSubItem: () => SidebarMenuSubItem,
          SidebarProvider: () => SidebarProvider,
          SidebarRail: () => SidebarRail,
          SidebarSeparator: () => SidebarSeparator,
          SidebarTrigger: () => SidebarTrigger,
          useSidebar: () => useSidebar,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/hooks/use-mobile.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/input.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/separator.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/sheet.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.0.10_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature(),
          _s1 = __turbopack_refresh__.signature(),
          _s2 = __turbopack_refresh__.signature(),
          _s3 = __turbopack_refresh__.signature(),
          _s4 = __turbopack_refresh__.signature(),
          _s5 = __turbopack_refresh__.signature(),
          _s6 = __turbopack_refresh__.signature();
        ('use client');
        const SIDEBAR_COOKIE_NAME = 'sidebar:state';
        const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
        const SIDEBAR_WIDTH = '16rem';
        const SIDEBAR_WIDTH_MOBILE = '18rem';
        const SIDEBAR_WIDTH_ICON = '3rem';
        const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
        const SidebarContext =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(
            null,
          );
        function useSidebar() {
          _s();
          const context =
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(
              SidebarContext,
            );
          if (!context) {
            throw new Error('useSidebar must be used within a SidebarProvider.');
          }
          return context;
        }
        _s(useSidebar, 'b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=');
        const SidebarProvider = /*#__PURE__*/ _s1(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = _s1(
              (
                { defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props },
                ref,
              ) => {
                _s1();
                const isMobile = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useIsMobile'
                ])();
                const [openMobile, setOpenMobile] =
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(
                    false,
                  );
                // This is the internal state of the sidebar.
                // We use openProp and setOpenProp for control from outside the component.
                const [_open, _setOpen] =
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(
                    defaultOpen,
                  );
                const open = openProp ?? _open;
                const setOpen =
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(
                    {
                      'SidebarProvider.useCallback[setOpen]': value => {
                        const openState = typeof value === 'function' ? value(open) : value;
                        if (setOpenProp) {
                          setOpenProp(openState);
                        } else {
                          _setOpen(openState);
                        }
                        // This sets the cookie to keep the sidebar state.
                        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
                      },
                    }['SidebarProvider.useCallback[setOpen]'],
                    [setOpenProp, open],
                  );
                // Helper to toggle the sidebar.
                const toggleSidebar =
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(
                    {
                      'SidebarProvider.useCallback[toggleSidebar]': () => {
                        return isMobile
                          ? setOpenMobile(
                              {
                                'SidebarProvider.useCallback[toggleSidebar]': open => !open,
                              }['SidebarProvider.useCallback[toggleSidebar]'],
                            )
                          : setOpen(
                              {
                                'SidebarProvider.useCallback[toggleSidebar]': open => !open,
                              }['SidebarProvider.useCallback[toggleSidebar]'],
                            );
                      },
                    }['SidebarProvider.useCallback[toggleSidebar]'],
                    [isMobile, setOpen, setOpenMobile],
                  );
                // Adds a keyboard shortcut to toggle the sidebar.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(
                  {
                    'SidebarProvider.useEffect': () => {
                      const handleKeyDown = {
                        'SidebarProvider.useEffect.handleKeyDown': event => {
                          if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                            event.preventDefault();
                            toggleSidebar();
                          }
                        },
                      }['SidebarProvider.useEffect.handleKeyDown'];
                      window.addEventListener('keydown', handleKeyDown);
                      return {
                        'SidebarProvider.useEffect': () => window.removeEventListener('keydown', handleKeyDown),
                      }['SidebarProvider.useEffect'];
                    },
                  }['SidebarProvider.useEffect'],
                  [toggleSidebar],
                );
                // We add a state so that we can do data-state="expanded" or "collapsed".
                // This makes it easier to style the sidebar with Tailwind classes.
                const state = open ? 'expanded' : 'collapsed';
                const contextValue =
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(
                    {
                      'SidebarProvider.useMemo[contextValue]': () => ({
                        state,
                        open,
                        setOpen,
                        isMobile,
                        openMobile,
                        setOpenMobile,
                        toggleSidebar,
                      }),
                    }['SidebarProvider.useMemo[contextValue]'],
                    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
                  );
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  SidebarContext.Provider,
                  {
                    value: contextValue,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        style: {
                          '--sidebar-width': SIDEBAR_WIDTH,
                          '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                          ...style,
                        },
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'cn'
                        ])(
                          'group/sidebar-wrapper flex min-h-[96svh] w-full has-[[data-variant=inset]]:bg-sidebar',
                          className,
                        ),
                        ref: ref,
                        ...props,
                        children: children,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                        lineNumber: 133,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 132,
                    columnNumber: 7,
                  },
                  this,
                );
              },
              'QSOkjq1AvKFJW5+zwiK52jPX7zI=',
              false,
              function () {
                return [
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'useIsMobile'
                  ],
                ];
              },
            )),
          ),
          'QSOkjq1AvKFJW5+zwiK52jPX7zI=',
          false,
          function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useIsMobile'
              ],
            ];
          },
        );
        _c1 = SidebarProvider;
        SidebarProvider.displayName = 'SidebarProvider';
        const Sidebar = /*#__PURE__*/ _s2(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c2 = _s2(
              (
                { side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props },
                ref,
              ) => {
                _s2();
                const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
                if (collapsible === 'none') {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'cn'
                      ])('flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground', className),
                      ref: ref,
                      ...props,
                      children: children,
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                      lineNumber: 179,
                      columnNumber: 9,
                    },
                    this,
                  );
                }
                if (isMobile) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'Sheet'
                    ],
                    {
                      open: openMobile,
                      onOpenChange: setOpenMobile,
                      ...props,
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'SheetContent'
                        ],
                        {
                          'data-sidebar': 'sidebar',
                          'data-mobile': 'true',
                          className: 'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
                          style: {
                            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                          },
                          side: side,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              className: 'flex h-full w-full flex-col',
                              children: children,
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                              lineNumber: 206,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 195,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                      lineNumber: 194,
                      columnNumber: 9,
                    },
                    this,
                  );
                }
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    ref: ref,
                    className: 'group peer hidden md:block text-sidebar-foreground',
                    'data-state': state,
                    'data-collapsible': state === 'collapsed' ? collapsible : '',
                    'data-variant': variant,
                    'data-side': side,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'cn'
                          ])(
                            'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
                            'group-data-[collapsible=offcanvas]:w-0',
                            'group-data-[side=right]:rotate-180',
                            variant === 'floating' || variant === 'inset'
                              ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 222,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'cn'
                          ])(
                            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
                            side === 'left'
                              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]', // Adjust the padding for floating and inset variants.
                            variant === 'floating' || variant === 'inset'
                              ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
                            className,
                          ),
                          ...props,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              'data-sidebar': 'sidebar',
                              className:
                                'flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
                              children: children,
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                              lineNumber: 246,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 232,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 213,
                    columnNumber: 7,
                  },
                  this,
                );
              },
              'hAL3+uRFwO9tnbDK50BUE5wZ71s=',
              false,
              function () {
                return [useSidebar];
              },
            )),
          ),
          'hAL3+uRFwO9tnbDK50BUE5wZ71s=',
          false,
          function () {
            return [useSidebar];
          },
        );
        _c3 = Sidebar;
        Sidebar.displayName = 'Sidebar';
        const SidebarTrigger = /*#__PURE__*/ _s3(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c4 = _s3(
              ({ className, onClick, ...props }, ref) => {
                _s3();
                const { toggleSidebar } = useSidebar();
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Button'
                  ],
                  {
                    ref: ref,
                    'data-sidebar': 'trigger',
                    variant: 'ghost',
                    size: 'icon',
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'cn'
                    ])('h-7 w-7', className),
                    onClick: event => {
                      onClick?.(event);
                      toggleSidebar();
                    },
                    ...props,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__[
                          'PanelLeft'
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 278,
                          columnNumber: 7,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'span',
                        {
                          className: 'sr-only',
                          children: 'Toggle Sidebar',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 279,
                          columnNumber: 7,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 266,
                    columnNumber: 5,
                  },
                  this,
                );
              },
              'dRnjPhQbCChcVGr4xvQkpNxnqyg=',
              false,
              function () {
                return [useSidebar];
              },
            )),
          ),
          'dRnjPhQbCChcVGr4xvQkpNxnqyg=',
          false,
          function () {
            return [useSidebar];
          },
        );
        _c5 = SidebarTrigger;
        SidebarTrigger.displayName = 'SidebarTrigger';
        const SidebarRail = /*#__PURE__*/ _s4(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c6 = _s4(
              ({ className, ...props }, ref) => {
                _s4();
                const { toggleSidebar } = useSidebar();
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    ref: ref,
                    'data-sidebar': 'rail',
                    'aria-label': 'Toggle Sidebar',
                    tabIndex: -1,
                    onClick: toggleSidebar,
                    title: 'Toggle Sidebar',
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'cn'
                    ])(
                      'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
                      '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
                      '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
                      'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
                      '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
                      '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
                      className,
                    ),
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 292,
                    columnNumber: 5,
                  },
                  this,
                );
              },
              'dRnjPhQbCChcVGr4xvQkpNxnqyg=',
              false,
              function () {
                return [useSidebar];
              },
            )),
          ),
          'dRnjPhQbCChcVGr4xvQkpNxnqyg=',
          false,
          function () {
            return [useSidebar];
          },
        );
        _c7 = SidebarRail;
        SidebarRail.displayName = 'SidebarRail';
        const SidebarInset =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c8 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'main',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'relative flex min-h-svh flex-1 flex-col bg-background',
                    'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 319,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c9 = SidebarInset;
        SidebarInset.displayName = 'SidebarInset';
        const SidebarInput =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c10 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'Input'
                ],
                {
                  ref: ref,
                  'data-sidebar': 'input',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 337,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c11 = SidebarInput;
        SidebarInput.displayName = 'SidebarInput';
        const SidebarHeader =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c12 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'header',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex flex-col gap-2 p-2', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 355,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c13 = SidebarHeader;
        SidebarHeader.displayName = 'SidebarHeader';
        const SidebarFooter =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c14 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'footer',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex flex-col gap-2 p-2', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 370,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c15 = SidebarFooter;
        SidebarFooter.displayName = 'SidebarFooter';
        const SidebarSeparator =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c16 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'Separator'
                ],
                {
                  ref: ref,
                  'data-sidebar': 'separator',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('mx-2 w-auto bg-sidebar-border', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 385,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c17 = SidebarSeparator;
        SidebarSeparator.displayName = 'SidebarSeparator';
        const SidebarContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c18 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'content',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 400,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c19 = SidebarContent;
        SidebarContent.displayName = 'SidebarContent';
        const SidebarGroup =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c20 = ({ className, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'group',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('relative flex w-full min-w-0 flex-col p-2', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 418,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c21 = SidebarGroup;
        SidebarGroup.displayName = 'SidebarGroup';
        const SidebarGroupLabel =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c22 = ({ className, asChild = false, ...props }, ref) => {
              const Comp = asChild
                ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Slot'
                  ]
                : 'div';
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Comp,
                {
                  ref: ref,
                  'data-sidebar': 'group-label',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                    'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 435,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c23 = SidebarGroupLabel;
        SidebarGroupLabel.displayName = 'SidebarGroupLabel';
        const SidebarGroupAction =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c24 = ({ className, asChild = false, ...props }, ref) => {
              const Comp = asChild
                ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Slot'
                  ]
                : 'button';
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Comp,
                {
                  ref: ref,
                  'data-sidebar': 'group-action',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', // Increases the hit area of the button on mobile.
                    'after:absolute after:-inset-2 after:md:hidden',
                    'group-data-[collapsible=icon]:hidden',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 456,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c25 = SidebarGroupAction;
        SidebarGroupAction.displayName = 'SidebarGroupAction';
        const SidebarGroupContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c26 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'group-content',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('w-full text-sm', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 476,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c27 = SidebarGroupContent;
        SidebarGroupContent.displayName = 'SidebarGroupContent';
        const SidebarMenu =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c28 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'ul',
                {
                  ref: ref,
                  'data-sidebar': 'menu',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex w-full min-w-0 flex-col gap-1', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 489,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c29 = SidebarMenu;
        SidebarMenu.displayName = 'SidebarMenu';
        const SidebarMenuItem =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c30 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'li',
                {
                  ref: ref,
                  'data-sidebar': 'menu-item',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('group/menu-item relative', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 502,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c31 = SidebarMenuItem;
        SidebarMenuItem.displayName = 'SidebarMenuItem';
        const sidebarMenuButtonVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])(
          'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
          {
            variants: {
              variant: {
                default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                outline:
                  'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
              },
              size: {
                default: 'h-8 text-sm',
                sm: 'h-7 text-xs',
                lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
              },
            },
            defaultVariants: {
              variant: 'default',
              size: 'default',
            },
          },
        );
        const SidebarMenuButton = /*#__PURE__*/ _s5(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c32 = _s5(
              (
                {
                  asChild = false,
                  isActive = false,
                  variant = 'default',
                  size = 'default',
                  tooltip,
                  className,
                  ...props
                },
                ref,
              ) => {
                _s5();
                const Comp = asChild
                  ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'Slot'
                    ]
                  : 'button';
                const { isMobile, state } = useSidebar();
                const button = /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  Comp,
                  {
                    ref: ref,
                    'data-sidebar': 'menu-button',
                    'data-size': size,
                    'data-active': isActive,
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'cn'
                    ])(
                      sidebarMenuButtonVariants({
                        variant,
                        size,
                      }),
                      className,
                    ),
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 557,
                    columnNumber: 7,
                  },
                  this,
                );
                if (!tooltip) {
                  return button;
                }
                if (typeof tooltip === 'string') {
                  tooltip = {
                    children: tooltip,
                  };
                }
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Tooltip'
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'TooltipTrigger'
                        ],
                        {
                          asChild: true,
                          children: button,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 579,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'TooltipContent'
                        ],
                        {
                          side: 'right',
                          align: 'center',
                          hidden: state !== 'collapsed' || isMobile,
                          ...tooltip,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 580,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                    lineNumber: 578,
                    columnNumber: 7,
                  },
                  this,
                );
              },
              'DSCdbs8JtpmKVxCYgM7sPAZNgB0=',
              false,
              function () {
                return [useSidebar];
              },
            )),
          ),
          'DSCdbs8JtpmKVxCYgM7sPAZNgB0=',
          false,
          function () {
            return [useSidebar];
          },
        );
        _c33 = SidebarMenuButton;
        SidebarMenuButton.displayName = 'SidebarMenuButton';
        const SidebarMenuAction =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c34 = ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
              const Comp = asChild
                ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Slot'
                  ]
                : 'button';
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Comp,
                {
                  ref: ref,
                  'data-sidebar': 'menu-action',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0', // Increases the hit area of the button on mobile.
                    'after:absolute after:-inset-2 after:md:hidden',
                    'peer-data-[size=sm]/menu-button:top-1',
                    'peer-data-[size=default]/menu-button:top-1.5',
                    'peer-data-[size=lg]/menu-button:top-2.5',
                    'group-data-[collapsible=icon]:hidden',
                    showOnHover &&
                      'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 602,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c35 = SidebarMenuAction;
        SidebarMenuAction.displayName = 'SidebarMenuAction';
        const SidebarMenuBadge =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c36 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'menu-badge',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none',
                    'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
                    'peer-data-[size=sm]/menu-button:top-1',
                    'peer-data-[size=default]/menu-button:top-1.5',
                    'peer-data-[size=lg]/menu-button:top-2.5',
                    'group-data-[collapsible=icon]:hidden',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 627,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c37 = SidebarMenuBadge;
        SidebarMenuBadge.displayName = 'SidebarMenuBadge';
        const SidebarMenuSkeleton = /*#__PURE__*/ _s6(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c38 = _s6(({ className, showIcon = false, ...props }, ref) => {
              _s6();
              // Random width between 50 to 90%.
              const width =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(
                  {
                    'SidebarMenuSkeleton.useMemo[width]': () => {
                      return `${Math.floor(Math.random() * 40) + 50}%`;
                    },
                  }['SidebarMenuSkeleton.useMemo[width]'],
                  [],
                );
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  'data-sidebar': 'menu-skeleton',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('rounded-md h-8 flex gap-2 px-2 items-center', className),
                  ...props,
                  children: [
                    showIcon &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'Skeleton'
                        ],
                        {
                          className: 'size-4 rounded-md',
                          'data-sidebar': 'menu-skeleton-icon',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                          lineNumber: 663,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'Skeleton'
                      ],
                      {
                        className: 'h-4 flex-1 max-w-[--skeleton-width]',
                        'data-sidebar': 'menu-skeleton-text',
                        style: {
                          '--skeleton-width': width,
                        },
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                        lineNumber: 668,
                        columnNumber: 7,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 656,
                  columnNumber: 5,
                },
                this,
              );
            }, 'nKFjX4dxbYo91VAj5VdWQ1XUe3I=')),
          ),
          'nKFjX4dxbYo91VAj5VdWQ1XUe3I=',
        );
        _c39 = SidebarMenuSkeleton;
        SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton';
        const SidebarMenuSub =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c40 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'ul',
                {
                  ref: ref,
                  'data-sidebar': 'menu-sub',
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
                    'group-data-[collapsible=icon]:hidden',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 686,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c41 = SidebarMenuSub;
        SidebarMenuSub.displayName = 'SidebarMenuSub';
        const SidebarMenuSubItem =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c42 = ({ ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'li',
                {
                  ref: ref,
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 702,
                  columnNumber: 26,
                },
                this,
              )),
          );
        _c43 = SidebarMenuSubItem;
        SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';
        const SidebarMenuSubButton =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c44 = ({ asChild = false, size = 'md', isActive, className, ...props }, ref) => {
              const Comp = asChild
                ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'Slot'
                  ]
                : 'a';
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Comp,
                {
                  ref: ref,
                  'data-sidebar': 'menu-sub-button',
                  'data-size': size,
                  'data-active': isActive,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
                    'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
                    size === 'sm' && 'text-xs',
                    size === 'md' && 'text-sm',
                    'group-data-[collapsible=icon]:hidden',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/sidebar.tsx',
                  lineNumber: 716,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c45 = SidebarMenuSubButton;
        SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';
        var _c,
          _c1,
          _c2,
          _c3,
          _c4,
          _c5,
          _c6,
          _c7,
          _c8,
          _c9,
          _c10,
          _c11,
          _c12,
          _c13,
          _c14,
          _c15,
          _c16,
          _c17,
          _c18,
          _c19,
          _c20,
          _c21,
          _c22,
          _c23,
          _c24,
          _c25,
          _c26,
          _c27,
          _c28,
          _c29,
          _c30,
          _c31,
          _c32,
          _c33,
          _c34,
          _c35,
          _c36,
          _c37,
          _c38,
          _c39,
          _c40,
          _c41,
          _c42,
          _c43,
          _c44,
          _c45;
        __turbopack_refresh__.register(_c, 'SidebarProvider$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'SidebarProvider');
        __turbopack_refresh__.register(_c2, 'Sidebar$React.forwardRef');
        __turbopack_refresh__.register(_c3, 'Sidebar');
        __turbopack_refresh__.register(_c4, 'SidebarTrigger$React.forwardRef');
        __turbopack_refresh__.register(_c5, 'SidebarTrigger');
        __turbopack_refresh__.register(_c6, 'SidebarRail$React.forwardRef');
        __turbopack_refresh__.register(_c7, 'SidebarRail');
        __turbopack_refresh__.register(_c8, 'SidebarInset$React.forwardRef');
        __turbopack_refresh__.register(_c9, 'SidebarInset');
        __turbopack_refresh__.register(_c10, 'SidebarInput$React.forwardRef');
        __turbopack_refresh__.register(_c11, 'SidebarInput');
        __turbopack_refresh__.register(_c12, 'SidebarHeader$React.forwardRef');
        __turbopack_refresh__.register(_c13, 'SidebarHeader');
        __turbopack_refresh__.register(_c14, 'SidebarFooter$React.forwardRef');
        __turbopack_refresh__.register(_c15, 'SidebarFooter');
        __turbopack_refresh__.register(_c16, 'SidebarSeparator$React.forwardRef');
        __turbopack_refresh__.register(_c17, 'SidebarSeparator');
        __turbopack_refresh__.register(_c18, 'SidebarContent$React.forwardRef');
        __turbopack_refresh__.register(_c19, 'SidebarContent');
        __turbopack_refresh__.register(_c20, 'SidebarGroup$React.forwardRef');
        __turbopack_refresh__.register(_c21, 'SidebarGroup');
        __turbopack_refresh__.register(_c22, 'SidebarGroupLabel$React.forwardRef');
        __turbopack_refresh__.register(_c23, 'SidebarGroupLabel');
        __turbopack_refresh__.register(_c24, 'SidebarGroupAction$React.forwardRef');
        __turbopack_refresh__.register(_c25, 'SidebarGroupAction');
        __turbopack_refresh__.register(_c26, 'SidebarGroupContent$React.forwardRef');
        __turbopack_refresh__.register(_c27, 'SidebarGroupContent');
        __turbopack_refresh__.register(_c28, 'SidebarMenu$React.forwardRef');
        __turbopack_refresh__.register(_c29, 'SidebarMenu');
        __turbopack_refresh__.register(_c30, 'SidebarMenuItem$React.forwardRef');
        __turbopack_refresh__.register(_c31, 'SidebarMenuItem');
        __turbopack_refresh__.register(_c32, 'SidebarMenuButton$React.forwardRef');
        __turbopack_refresh__.register(_c33, 'SidebarMenuButton');
        __turbopack_refresh__.register(_c34, 'SidebarMenuAction$React.forwardRef');
        __turbopack_refresh__.register(_c35, 'SidebarMenuAction');
        __turbopack_refresh__.register(_c36, 'SidebarMenuBadge$React.forwardRef');
        __turbopack_refresh__.register(_c37, 'SidebarMenuBadge');
        __turbopack_refresh__.register(_c38, 'SidebarMenuSkeleton$React.forwardRef');
        __turbopack_refresh__.register(_c39, 'SidebarMenuSkeleton');
        __turbopack_refresh__.register(_c40, 'SidebarMenuSub$React.forwardRef');
        __turbopack_refresh__.register(_c41, 'SidebarMenuSub');
        __turbopack_refresh__.register(_c42, 'SidebarMenuSubItem$React.forwardRef');
        __turbopack_refresh__.register(_c43, 'SidebarMenuSubItem');
        __turbopack_refresh__.register(_c44, 'SidebarMenuSubButton$React.forwardRef');
        __turbopack_refresh__.register(_c45, 'SidebarMenuSubButton');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/KeyboardShortcut/KeybooardShortcut.tsx [app-client] (ecmascript)':
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
          k: __turbopack_refresh__,
          m: module,
          z: __turbopack_require_stub__,
        } = __turbopack_context__;
        {
          __turbopack_esm__({
            KeyboardShortcut: () => KeyboardShortcut,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
          const KeyboardShortcut = ({ children, className }) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'kbd',
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'border-b-2 inline-flex items-center justify-center rounded mx-1 px-2 py-[1px] py-[1px] text-xs font-medium text-gray-800 bg-gray-100 border-gray-200 shadow-sm',
                  'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
                  'transition-all duration-200 ease-in-out',
                  'hover:bg-gray-200 dark:hover:bg-gray-700',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
                  className,
                ),
                children: children,
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/KeyboardShortcut/KeybooardShortcut.tsx',
                lineNumber: 15,
                columnNumber: 5,
              },
              this,
            );
          };
          _c = KeyboardShortcut;
          var _c;
          __turbopack_refresh__.register(_c, 'KeyboardShortcut');
          if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
          }
        }
      },
    '[project]/apps/web/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          DropdownMenu: () => DropdownMenu,
          DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
          DropdownMenuContent: () => DropdownMenuContent,
          DropdownMenuGroup: () => DropdownMenuGroup,
          DropdownMenuItem: () => DropdownMenuItem,
          DropdownMenuLabel: () => DropdownMenuLabel,
          DropdownMenuPortal: () => DropdownMenuPortal,
          DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
          DropdownMenuRadioItem: () => DropdownMenuRadioItem,
          DropdownMenuSeparator: () => DropdownMenuSeparator,
          DropdownMenuShortcut: () => DropdownMenuShortcut,
          DropdownMenuSub: () => DropdownMenuSub,
          DropdownMenuSubContent: () => DropdownMenuSubContent,
          DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
          DropdownMenuTrigger: () => DropdownMenuTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$KeyboardShortcut$2f$KeybooardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/apps/web/src/components/KeyboardShortcut/KeybooardShortcut.tsx [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.6_@types+react-dom@19.0.4_@types+react@19.0.10__@types+reac_rufmv2o7xuuzxevguvlfncqo2m/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>',
          );
        ('use client');
        const DropdownMenu =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
        const DropdownMenuTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger;
        const DropdownMenuGroup =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group;
        const DropdownMenuPortal =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal;
        const DropdownMenuSub =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Sub;
        const DropdownMenuRadioGroup =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioGroup;
        const DropdownMenuSubTrigger =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, inset, children, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubTrigger,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                    inset && 'pl-8',
                    className,
                  ),
                  ...props,
                  children: [
                    children,
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                        'ChevronRight'
                      ],
                      {
                        className: 'ml-auto',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                        lineNumber: 38,
                        columnNumber: 5,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 28,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c1 = DropdownMenuSubTrigger;
        DropdownMenuSubTrigger.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubTrigger.displayName;
        const DropdownMenuSubContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c2 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubContent,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'z-50 min-w-[8rem] overflow-hidden rounded border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 48,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c3 = DropdownMenuSubContent;
        DropdownMenuSubContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SubContent.displayName;
        const DropdownMenuContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c4 = ({ className, sideOffset = 4, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Portal,
                {
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content,
                    {
                      ref: ref,
                      sideOffset: sideOffset,
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'cn'
                      ])(
                        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                        className,
                      ),
                      ...props,
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                      lineNumber: 65,
                      columnNumber: 5,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 64,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c5 = DropdownMenuContent;
        DropdownMenuContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
        const DropdownMenuItem =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c6 = ({ className, inset, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'font-light relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent cursor-pointer focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
                    inset && 'pl-8',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 85,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c7 = DropdownMenuItem;
        DropdownMenuItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item.displayName;
        const DropdownMenuCheckboxItem =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c8 = ({ className, children, checked, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CheckboxItem,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    className,
                  ),
                  checked: checked,
                  ...props,
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ItemIndicator,
                          {
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                                'Check'
                              ],
                              {
                                className: 'h-4 w-4',
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                                lineNumber: 112,
                                columnNumber: 9,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                            lineNumber: 111,
                            columnNumber: 7,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                        lineNumber: 110,
                        columnNumber: 5,
                      },
                      this,
                    ),
                    children,
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 101,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c9 = DropdownMenuCheckboxItem;
        DropdownMenuCheckboxItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CheckboxItem.displayName;
        const DropdownMenuRadioItem =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c10 = ({ className, children, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioItem,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    className,
                  ),
                  ...props,
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ItemIndicator,
                          {
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__[
                                'Circle'
                              ],
                              {
                                className: 'h-2 w-2 fill-current',
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                                lineNumber: 135,
                                columnNumber: 9,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                            lineNumber: 134,
                            columnNumber: 7,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                        lineNumber: 133,
                        columnNumber: 5,
                      },
                      this,
                    ),
                    children,
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 125,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c11 = DropdownMenuRadioItem;
        DropdownMenuRadioItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RadioItem.displayName;
        const DropdownMenuLabel =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c12 = ({ className, inset, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Label,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('px-2 py-1.5 text-sm font-thin', inset && 'pl-8', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 149,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c13 = DropdownMenuLabel;
        DropdownMenuLabel.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Label.displayName;
        const DropdownMenuSeparator =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c14 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Separator,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('-mx-1 my-1 h-px bg-muted', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
                  lineNumber: 161,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c15 = DropdownMenuSeparator;
        DropdownMenuSeparator.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$menu$40$2$2e$1$2e$6_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$reac_rufmv2o7xuuzxevguvlfncqo2m$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Separator.displayName;
        const DropdownMenuShortcut = ({ className, ...props }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$KeyboardShortcut$2f$KeybooardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'KeyboardShortcut'
            ],
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])(['ml-auto', className]),
              ...props,
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/ui/dropdown-menu.tsx',
              lineNumber: 173,
              columnNumber: 10,
            },
            this,
          );
        };
        _c16 = DropdownMenuShortcut;
        DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
        __turbopack_refresh__.register(_c, 'DropdownMenuSubTrigger$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'DropdownMenuSubTrigger');
        __turbopack_refresh__.register(_c2, 'DropdownMenuSubContent$React.forwardRef');
        __turbopack_refresh__.register(_c3, 'DropdownMenuSubContent');
        __turbopack_refresh__.register(_c4, 'DropdownMenuContent$React.forwardRef');
        __turbopack_refresh__.register(_c5, 'DropdownMenuContent');
        __turbopack_refresh__.register(_c6, 'DropdownMenuItem$React.forwardRef');
        __turbopack_refresh__.register(_c7, 'DropdownMenuItem');
        __turbopack_refresh__.register(_c8, 'DropdownMenuCheckboxItem$React.forwardRef');
        __turbopack_refresh__.register(_c9, 'DropdownMenuCheckboxItem');
        __turbopack_refresh__.register(_c10, 'DropdownMenuRadioItem$React.forwardRef');
        __turbopack_refresh__.register(_c11, 'DropdownMenuRadioItem');
        __turbopack_refresh__.register(_c12, 'DropdownMenuLabel$React.forwardRef');
        __turbopack_refresh__.register(_c13, 'DropdownMenuLabel');
        __turbopack_refresh__.register(_c14, 'DropdownMenuSeparator$React.forwardRef');
        __turbopack_refresh__.register(_c15, 'DropdownMenuSeparator');
        __turbopack_refresh__.register(_c16, 'DropdownMenuShortcut');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/avatar.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Avatar: () => Avatar,
          AvatarFallback: () => AvatarFallback,
          AvatarImage: () => AvatarImage,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-avatar@1.1.3_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19.0._sgvb2wfnjca6or6rwreuc2ojem/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)',
          );
        ('use client');
        const Avatar =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('relative flex shrink-0 overflow-hidden rounded-full', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/avatar.tsx',
                  lineNumber: 12,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c1 = Avatar;
        Avatar.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
        const AvatarImage =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c2 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Image,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('aspect-square h-full w-full', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/avatar.tsx',
                  lineNumber: 27,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c3 = AvatarImage;
        AvatarImage.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Image.displayName;
        const AvatarFallback =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c4 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fallback,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex h-full w-full items-center justify-center rounded-full bg-muted', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/avatar.tsx',
                  lineNumber: 39,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c5 = AvatarFallback;
        AvatarFallback.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$_sgvb2wfnjca6or6rwreuc2ojem$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fallback.displayName;
        var _c, _c1, _c2, _c3, _c4, _c5;
        __turbopack_refresh__.register(_c, 'Avatar$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'Avatar');
        __turbopack_refresh__.register(_c2, 'AvatarImage$React.forwardRef');
        __turbopack_refresh__.register(_c3, 'AvatarImage');
        __turbopack_refresh__.register(_c4, 'AvatarFallback$React.forwardRef');
        __turbopack_refresh__.register(_c5, 'AvatarFallback');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/Avatar/Avatar.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          UserAvatar: () => UserAvatar,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/avatar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        const userAvatarVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])('rounded-full border-2', {
          variants: {
            size: {
              default: 'size-7',
              sm: 'size-5',
              lg: 'size-9',
            },
          },
          defaultVariants: {
            size: 'default',
          },
        });
        const UserAvatar = ({ src, color, size, ...rest }) => {
          const safeColor = color ?? '#fff';
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'Avatar'
            ],
            {
              ...rest.avatarProps,
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'AvatarImage'
                  ],
                  {
                    ...rest.avatarImageProps,
                    style: {
                      borderColor: safeColor,
                    },
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'cn'
                    ])(
                      userAvatarVariants({
                        size,
                        className: rest.avatarImageProps?.className,
                      }),
                    ),
                    src: src,
                    alt: 'User profile picture',
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Avatar/Avatar.tsx',
                    lineNumber: 30,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'AvatarFallback'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        role: 'img',
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'cn'
                        ])([
                          userAvatarVariants({
                            size,
                            className: rest.avatarImageProps?.className,
                          }),
                        ]),
                        style: {
                          borderColor: safeColor,
                          background: `linear-gradient(135deg, ${color}, #000)`,
                        },
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/Avatar/Avatar.tsx',
                        lineNumber: 43,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Avatar/Avatar.tsx',
                    lineNumber: 42,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/components/Avatar/Avatar.tsx',
              lineNumber: 29,
              columnNumber: 5,
            },
            this,
          );
        };
        _c = UserAvatar;
        var _c;
        __turbopack_refresh__.register(_c, 'UserAvatar');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/util/supabase/client.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <module evaluation>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase+ssr@0.5.2_@supabase+supabase-js@2.48.1/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        let client;
        const getSupabaseBrowserClient = () => {
          if (client) {
            return client;
          }
          client = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$5$2e$2_$40$supabase$2b$supabase$2d$js$40$2$2e$48$2e$1$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'createBrowserClient'
          ])(
            ('TURBOPACK compile-time value', 'https://pfwrdyygogowjxyqcene.supabase.co'),
            ('TURBOPACK compile-time value',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmd3JkeXlnb2dvd2p4eXFjZW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0ODUwNDQsImV4cCI6MjA0ODA2MTA0NH0.gAsMmRrQCjnj25m4VJcYaRmwFDu_cjfiTaFv1_YMvFY'),
          );
          return client;
        };
        const useSupabaseBrowser = () => {
          _s();
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useMemo'
          ])(getSupabaseBrowserClient, []);
        };
        _s(useSupabaseBrowser, 'nwk+m61qLgjDVUp4IGV/072DDN4=');
        const __TURBOPACK__default__export__ = useSupabaseBrowser;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/queries/members.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          getCurrentMemberWithMetadata: () => getCurrentMemberWithMetadata,
          getMembersWithMetadata: () => getMembersWithMetadata,
        });
        const getMembersWithMetadata = (client, options) => {
          const query = client.from('members_with_metadata').select('*');
          if (options?.teamId) query.contains('teams', `[{ "id": ${options.teamId} }]`);
          return query.throwOnError();
        };
        const getCurrentMemberWithMetadata = client => {
          const query = client
            .rpc('get_current_member_with_metadata')
            .select(
              'id, display_name, teams!selected_team_id(name, logo, theme), selected_team_id, email, color, profile_picture',
            )
            .maybeSingle();
          return query.throwOnError();
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/queries/notifications.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          getNotifications: () => getNotifications,
        });
        const getNotifications = client => {
          return client.from('notifications').select('id, is_read, created_at, title, content, link').throwOnError();
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          NavUser: () => NavUser,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/Avatar/Avatar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/util/supabase/client.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-react-query@1.11.5_@supabase+postgrest-js@1.18.1_@supabase+_qe2ohay7gmnitdy3w3dgdcjl6q/node_modules/@supabase-cache-helpers/postgrest-react-query/dist/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/queries/members.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/navigation.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/queries/notifications.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/button.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>',
          );
        var _s = __turbopack_refresh__.signature(),
          _s1 = __turbopack_refresh__.signature();
        ('use client');
        function NavUser() {
          _s();
          const { isMobile } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSidebar'
          ])();
          const supabase = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'default'
          ])();
          const {
            data: user,
            isLoading,
            isError,
          } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useQuery'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'getCurrentMemberWithMetadata'
            ])(supabase),
          );
          const router = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useRouter'
          ])();
          if (!user)
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'redirect'
            ])('/');
          if (isLoading)
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Skeleton'
              ],
              {
                className: 'h-8 w-full',
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                lineNumber: 55,
                columnNumber: 25,
              },
              this,
            );
          const logOut = async () => {
            await supabase.auth.signOut();
            router.replace('/');
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'SidebarMenu'
            ],
            {
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'SidebarMenuItem'
                ],
                {
                  className: 'flex items-center justify-between',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'DropdownMenu'
                      ],
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'DropdownMenuTrigger'
                            ],
                            {
                              asChild: true,
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'SidebarMenuButton'
                                ],
                                {
                                  disabled: isError,
                                  size: 'sm',
                                  className:
                                    'm-0 flex w-fit max-w-[70%] items-center justify-start data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:max-w-full group-data-[collapsible=icon]:!p-1',
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'UserAvatar'
                                      ],
                                      {
                                        src: user.profile_picture ?? '',
                                        color: user.color,
                                        size: 'sm',
                                        avatarImageProps: {
                                          className: 'size-5 group-data-[collapsible=icon]:size-6',
                                        },
                                        avatarProps: {
                                          className: 'size-5 group-data-[collapsible=icon]:size-6',
                                        },
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 72,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className: 'flex max-w-24 text-left text-sm leading-tight',
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          'span',
                                          {
                                            className: 'truncate text-xs',
                                            children: user.display_name,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                            lineNumber: 84,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 83,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__[
                                        'ChevronsUpDown'
                                      ],
                                      {
                                        className: 'size-4',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 86,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                  lineNumber: 67,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                              lineNumber: 66,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'DropdownMenuContent'
                            ],
                            {
                              className: 'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                              side: isMobile ? 'bottom' : 'right',
                              align: 'end',
                              sideOffset: 4,
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuLabel'
                                  ],
                                  {
                                    className: 'p-0',
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className: 'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              'UserAvatar'
                                            ],
                                            {
                                              src: user.profile_picture ?? '',
                                              color: user.color,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                              lineNumber: 97,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'div',
                                            {
                                              className: 'grid flex-1 text-left text-sm leading-tight',
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  'jsxDEV'
                                                ])(
                                                  'span',
                                                  {
                                                    className: 'truncate',
                                                    children: user.display_name,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                                    lineNumber: 102,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  'jsxDEV'
                                                ])(
                                                  'span',
                                                  {
                                                    className: 'truncate text-xs font-light',
                                                    children: user.email,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                                    lineNumber: 103,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                              lineNumber: 101,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 96,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                    lineNumber: 95,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuSeparator'
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                    lineNumber: 109,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuItem'
                                  ],
                                  {
                                    className: 'text-destructive',
                                    onClick: logOut,
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__[
                                          'LogOut'
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                          lineNumber: 111,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      'Log out',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                    lineNumber: 110,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                              lineNumber: 89,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                        lineNumber: 65,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      NotificationsMenu,
                      {},
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                        lineNumber: 116,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                  lineNumber: 64,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
              lineNumber: 63,
              columnNumber: 5,
            },
            this,
          );
        }
        _s(NavUser, 'JZ4ix7Pm5UPV88ylIf/T5OPBmoU=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSidebar'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useQuery'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ],
          ];
        });
        _c = NavUser;
        const NotificationsMenu = () => {
          _s1();
          const { isMobile } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSidebar'
          ])();
          const supabase = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'default'
          ])();
          const {
            data: notificationsRes,
            isLoading: notificationsLoading,
            isError: notificationsError,
          } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useQuery'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'getNotifications'
            ])(supabase)
              .limit(5)
              .order('created_at', {
                ascending: false,
              }),
          );
          const { mutate } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useUpdateMutation'
          ])(supabase.from('notifications'), ['id'], 'is_read');
          const router = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useRouter'
          ])();
          const emptyNotifications = notificationsRes?.length === 0;
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'DropdownMenu'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'DropdownMenuTrigger'
                  ],
                  {
                    asChild: true,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'SidebarMenuButton'
                      ],
                      {
                        disabled: notificationsLoading || notificationsError,
                        size: 'sm',
                        className: 'relative ml-2 w-fit group-data-[collapsible=icon]:hidden',
                        children: [
                          !notificationsLoading && !emptyNotifications && !notificationsRes?.[0]?.is_read
                            ? /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'span',
                                {
                                  className: 'absolute right-1 top-1 flex size-2',
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'span',
                                      {
                                        className:
                                          'absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 157,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'span',
                                      {
                                        className: 'relative inline-flex size-2 rounded-full bg-destructive',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                        lineNumber: 158,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                  lineNumber: 156,
                                  columnNumber: 13,
                                },
                                this,
                              )
                            : null,
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__[
                              'Bell'
                            ],
                            {},
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                              lineNumber: 161,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                        lineNumber: 148,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                    lineNumber: 147,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'DropdownMenuContent'
                  ],
                  {
                    className: 'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                    side: isMobile ? 'bottom' : 'right',
                    align: 'end',
                    sideOffset: 4,
                    children: [
                      emptyNotifications &&
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'DropdownMenuItem'
                          ],
                          {
                            children: 'No Notifications',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                            lineNumber: 171,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      notificationsRes?.map((notification, i) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'Fragment'
                          ],
                          {
                            children: [
                              i !== 0 &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuSeparator'
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                    lineNumber: 175,
                                    columnNumber: 25,
                                  },
                                  this,
                                ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'DropdownMenuGroup'
                                ],
                                {
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'DropdownMenuItem'
                                    ],
                                    {
                                      className: (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'cn'
                                      ])([
                                        'flex flex-col justify-start items-start cursor-pointer',
                                        !notification.is_read && 'bg-accent/20',
                                      ]),
                                      onClick: () => {
                                        mutate({
                                          id: notification.id,
                                          is_read: true,
                                        });
                                        router.replace(notification.link);
                                      },
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'DropdownMenuLabel'
                                          ],
                                          {
                                            className: 'text-md m-0 p-0',
                                            children: notification.title,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                            lineNumber: 187,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          'span',
                                          {
                                            className: 'text-xs',
                                            children: notification.content,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                            lineNumber: 190,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'Button'
                                          ],
                                          {
                                            onClick: e => {
                                              e.stopPropagation();
                                              mutate({
                                                id: notification.id,
                                                is_read: !notification.is_read,
                                              });
                                            },
                                            variant: 'link',
                                            size: 'sm',
                                            className: 'm-0 h-auto p-0 text-xs',
                                            children: ['Mark as ', !notification.is_read ? 'Read' : 'Unread'],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                            lineNumber: 191,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                      lineNumber: 177,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                                  lineNumber: 176,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          notification.id,
                          true,
                          {
                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                            lineNumber: 174,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
                    lineNumber: 164,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/components/Sidebar/sidebarUser.tsx',
              lineNumber: 146,
              columnNumber: 5,
            },
            this,
          );
        };
        _s1(NotificationsMenu, 'lCUcVpV/L+DNFEONV/Mh0gsuyME=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSidebar'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useQuery'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useUpdateMutation'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ],
          ];
        });
        _c1 = NotificationsMenu;
        var _c, _c1;
        __turbopack_refresh__.register(_c, 'NavUser');
        __turbopack_refresh__.register(_c1, 'NotificationsMenu');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/queries/teams.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          getMemberTeams: () => getMemberTeams,
          getTeams: () => getTeams,
        });
        const getTeams = client => {
          return client.from('teams').select('id, name, logo, theme, tiers(name)').throwOnError();
        };
        const getMemberTeams = client => {
          return client
            .from('members_teams')
            .select(
              'members_with_metadata(email, first_name, last_name, selected_team_id, display_name, profile_picture, color), teams(id, name, logo, theme, tiers!teams_tier_id_fkey(name, max_users)), is_admin',
            )
            .throwOnError();
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/IconPicker/IconsColors.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          colors: () => colors,
          icons: () => icons,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ImageSquare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/ImageSquare.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/House.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$User$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/User.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Phone.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Calendar.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Clock.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Heart.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Star.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Video.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$File$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/File.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Folder.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Download.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Upload.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Share$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Share.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Link.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Globe.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Chat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Chat.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Bell.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Camera.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Coffee.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Desktop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Desktop.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GameController$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/GameController.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Lightning.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Moon.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Sun.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Cloud.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Airplane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Airplane.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Car.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Train$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Train.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bicycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Bicycle.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ShoppingCart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/ShoppingCart.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Bank.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CurrencyDollar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/CurrencyDollar.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/CreditCard.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Trophy.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Crown.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Diamond$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Diamond.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Fire$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Fire.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Leaf.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Palette.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Pi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Pi.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Axe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Axe.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@phosphor-icons/react/dist/csr/Bed.mjs [app-client] (ecmascript)',
          );
        const colors = [
          {
            color: '#125CBD',
            accentColor: '#071233',
          },
          {
            color: '#F94144',
            accentColor: '#330C0D',
          },
          {
            color: '#F3722C',
            accentColor: '#331309',
          },
          {
            color: '#F9C74F',
            accentColor: '#33270A',
          },
          {
            color: '#90BE6D',
            accentColor: '#142610',
          },
          {
            color: '#43AA8B',
            accentColor: '#0D1E1A',
          },
          {
            color: '#577590',
            accentColor: '#0C141B',
          },
          {
            color: '#F9844A',
            accentColor: '#331710',
          },
          {
            color: '#4D908E',
            accentColor: '#0C1A1A',
          },
          {
            color: '#F8961E',
            accentColor: '#331C0A',
          },
        ];
        const icons = [
          {
            name: 'Image',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ImageSquare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'ImageSquare'
              ],
          },
          {
            name: 'House',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'House'
              ],
          },
          {
            name: 'User',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$User$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'User'
              ],
          },
          {
            name: 'Phone',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Phone'
              ],
          },
          {
            name: 'Calendar',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Calendar'
              ],
          },
          {
            name: 'Clock',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Clock'
              ],
          },
          {
            name: 'Heart',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Heart'
              ],
          },
          {
            name: 'Star',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Star'
              ],
          },
          {
            name: 'Video',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Video'
              ],
          },
          {
            name: 'File',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$File$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'File'
              ],
          },
          {
            name: 'Folder',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Folder'
              ],
          },
          {
            name: 'Download',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Download'
              ],
          },
          {
            name: 'Upload',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Upload'
              ],
          },
          {
            name: 'Share',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Share$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Share'
              ],
          },
          {
            name: 'Link',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Link'
              ],
          },
          {
            name: 'Globe',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Globe'
              ],
          },
          {
            name: 'Chat',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Chat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Chat'
              ],
          },
          {
            name: 'Bell',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Bell'
              ],
          },
          {
            name: 'Camera',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Camera'
              ],
          },
          {
            name: 'Coffee',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Coffee'
              ],
          },
          {
            name: 'Desktop',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Desktop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Desktop'
              ],
          },
          {
            name: 'Game',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GameController$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'GameController'
              ],
          },
          {
            name: 'Lightning',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Lightning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Lightning'
              ],
          },
          {
            name: 'Moon',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Moon'
              ],
          },
          {
            name: 'Sun',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Sun'
              ],
          },
          {
            name: 'Cloud',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Cloud'
              ],
          },
          {
            name: 'Airplane',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Airplane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Airplane'
              ],
          },
          {
            name: 'Car',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Car'
              ],
          },
          {
            name: 'Train',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Train$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Train'
              ],
          },
          {
            name: 'Bicycle',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bicycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Bicycle'
              ],
          },
          {
            name: 'Cart',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ShoppingCart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'ShoppingCart'
              ],
          },
          {
            name: 'Bank',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Bank'
              ],
          },
          {
            name: 'Dollar',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CurrencyDollar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'CurrencyDollar'
              ],
          },
          {
            name: 'Card',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'CreditCard'
              ],
          },
          {
            name: 'Trophy',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Trophy'
              ],
          },
          {
            name: 'Crown',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Crown'
              ],
          },
          {
            name: 'Diamond',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Diamond$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Diamond'
              ],
          },
          {
            name: 'Fire',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Fire$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Fire'
              ],
          },
          {
            name: 'Leaf',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Leaf'
              ],
          },
          {
            name: 'Palette',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Palette'
              ],
          },
          {
            name: 'Pi',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Pi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Pi'
              ],
          },
          {
            name: 'Axe',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Axe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Axe'
              ],
          },
          {
            name: 'Bed',
            component:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Bed'
              ],
          },
        ];
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/IconPicker/IconAvatar.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconsColors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/apps/web/src/components/IconPicker/IconsColors.tsx [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        const IconAvatar = ({ name, theme, ...rest }) => {
          const Icon =
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconsColors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'icons'
            ].find(item => item.name === name)?.component ??
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconsColors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'icons'
            ][0].component;
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              role: 'img',
              'aria-label': `Team Icon in the shape of ${name}`,
              style: {
                background: `linear-gradient(135deg, ${theme ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconsColors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__['colors'][0].color}, #000)`,
                borderColor: `${theme ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconsColors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__['colors'][0].color}`,
              },
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'cn'
              ])('size-8 flex border justify-center items-center p-1 rounded', rest.className),
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                Icon,
                {
                  className: 'size-7',
                  weight: 'fill',
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/IconPicker/IconAvatar.tsx',
                  lineNumber: 27,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/IconPicker/IconAvatar.tsx',
              lineNumber: 15,
              columnNumber: 5,
            },
            this,
          );
        };
        _c = IconAvatar;
        const __TURBOPACK__default__export__ = IconAvatar;
        var _c;
        __turbopack_refresh__.register(_c, 'IconAvatar');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/hooks/use-toast.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          reducer: () => reducer,
          toast: () => toast,
          useToast: () => useToast,
        });
        // Inspired by react-hot-toast library
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        ('use client');
        const TOAST_LIMIT = 1;
        const TOAST_REMOVE_DELAY = 1000000;
        const actionTypes = {
          ADD_TOAST: 'ADD_TOAST',
          UPDATE_TOAST: 'UPDATE_TOAST',
          DISMISS_TOAST: 'DISMISS_TOAST',
          REMOVE_TOAST: 'REMOVE_TOAST',
        };
        let count = 0;
        function genId() {
          count = (count + 1) % Number.MAX_SAFE_INTEGER;
          return count.toString();
        }
        const toastTimeouts = new Map();
        const addToRemoveQueue = toastId => {
          if (toastTimeouts.has(toastId)) {
            return;
          }
          const timeout = setTimeout(() => {
            toastTimeouts.delete(toastId);
            dispatch({
              type: 'REMOVE_TOAST',
              toastId: toastId,
            });
          }, TOAST_REMOVE_DELAY);
          toastTimeouts.set(toastId, timeout);
        };
        const reducer = (state, action) => {
          switch (action.type) {
            case 'ADD_TOAST':
              return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
              };
            case 'UPDATE_TOAST':
              return {
                ...state,
                toasts: state.toasts.map(t =>
                  t.id === action.toast.id
                    ? {
                        ...t,
                        ...action.toast,
                      }
                    : t,
                ),
              };
            case 'DISMISS_TOAST': {
              const { toastId } = action;
              // ! Side effects ! - This could be extracted into a dismissToast() action,
              // but I'll keep it here for simplicity
              if (toastId) {
                addToRemoveQueue(toastId);
              } else {
                state.toasts.forEach(toast => {
                  addToRemoveQueue(toast.id);
                });
              }
              return {
                ...state,
                toasts: state.toasts.map(t =>
                  t.id === toastId || toastId === undefined
                    ? {
                        ...t,
                        open: false,
                      }
                    : t,
                ),
              };
            }
            case 'REMOVE_TOAST':
              if (action.toastId === undefined) {
                return {
                  ...state,
                  toasts: [],
                };
              }
              return {
                ...state,
                toasts: state.toasts.filter(t => t.id !== action.toastId),
              };
          }
        };
        const listeners = [];
        let memoryState = {
          toasts: [],
        };
        function dispatch(action) {
          memoryState = reducer(memoryState, action);
          listeners.forEach(listener => {
            listener(memoryState);
          });
        }
        function toast({ ...props }) {
          const id = genId();
          const update = props =>
            dispatch({
              type: 'UPDATE_TOAST',
              toast: {
                ...props,
                id,
              },
            });
          const dismiss = () =>
            dispatch({
              type: 'DISMISS_TOAST',
              toastId: id,
            });
          dispatch({
            type: 'ADD_TOAST',
            toast: {
              ...props,
              id,
              open: true,
              onOpenChange: open => {
                if (!open) dismiss();
              },
            },
          });
          return {
            id: id,
            dismiss,
            update,
          };
        }
        function useToast() {
          _s();
          const [state, setState] =
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(
              memoryState,
            );
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(
            {
              'useToast.useEffect': () => {
                listeners.push(setState);
                return {
                  'useToast.useEffect': () => {
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                      listeners.splice(index, 1);
                    }
                  },
                }['useToast.useEffect'];
              },
            }['useToast.useEffect'],
            [state],
          );
          return {
            ...state,
            toast,
            dismiss: toastId =>
              dispatch({
                type: 'DISMISS_TOAST',
                toastId,
              }),
          };
        }
        _s(useToast, 'SPWE98mLGnlsnNfIwu/IAKTSZtk=');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx [app-client] (ecmascript)':
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
          k: __turbopack_refresh__,
          m: module,
          z: __turbopack_require_stub__,
        } = __turbopack_context__;
        {
          __turbopack_esm__({
            TeamSwitcher: () => TeamSwitcher,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@supabase-cache-helpers+postgrest-react-query@1.11.5_@supabase+postgrest-js@1.18.1_@supabase+_qe2ohay7gmnitdy3w3dgdcjl6q/node_modules/@supabase-cache-helpers/postgrest-react-query/dist/index.js [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$teams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/queries/teams.ts [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/util/supabase/client.ts [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/apps/web/src/components/IconPicker/IconAvatar.tsx [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/navigation.js [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/hooks/use-toast.ts [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/components/ui/skeleton.tsx [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/queries/members.ts [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__('[project]/apps/web/src/components/ui/loader.tsx [app-client] (ecmascript)');
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>',
            );
          var _s = __turbopack_refresh__.signature();
          ('use client');
          function TeamSwitcher() {
            _s();
            const { isMobile } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSidebar'
            ])();
            const router = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ])();
            const supabase = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ])();
            const { data: user } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useQuery'
            ])(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$members$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'getCurrentMemberWithMetadata'
              ])(supabase),
            );
            const { data, isLoading, isError } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useQuery'
            ])(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$queries$2f$teams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'getMemberTeams'
              ])(supabase).eq('member_id', user?.id ?? ''),
              {
                enabled: !!user?.id,
              },
            );
            const { toast } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useToast'
            ])();
            const { mutate: updateMember, isPending: updateMemberPending } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useUpdateMutation'
            ])(supabase.from('members'), ['id'], 'selected_team_id', {
              revalidateTables: [
                {
                  table: 'members_teams',
                },
                {
                  table: 'projects',
                },
                {
                  table: 'members_with_metadata',
                },
                {
                  table: 'rpc/get_current_member_with_metadata',
                },
              ],
              onError: {
                'TeamSwitcher.useUpdateMutation': e => {
                  toast({
                    description: `Something went wrong ${e}`,
                    variant: 'destructive',
                  });
                },
              }['TeamSwitcher.useUpdateMutation'],
            });
            if (isError)
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    'mt-2 flex h-10 w-full items-center justify-center rounded bg-destructive p-1 text-xs group-data-[collapsible=icon]:hidden',
                  children: 'Failed to retrieve data, please refresh the page',
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                  lineNumber: 66,
                  columnNumber: 7,
                },
                this,
              );
            if (isLoading || updateMemberPending)
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'flex h-12 w-full space-x-1 pt-2',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flex h-10 w-14 items-center justify-center rounded',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'Loader'
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                            lineNumber: 74,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                        lineNumber: 73,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flex size-full flex-col space-y-2',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'Skeleton'
                            ],
                            {
                              className: 'h-3 w-3/4',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                              lineNumber: 77,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'Skeleton'
                            ],
                            {
                              className: 'h-2 w-1/2',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                              lineNumber: 78,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                        lineNumber: 76,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                  lineNumber: 72,
                  columnNumber: 7,
                },
                this,
              );
            const teams = data;
            const selectedTeam = teams?.find(
              ({ teams, members_with_metadata: members }) => teams?.id == members?.selected_team_id,
            )?.teams; // TODO: clean this
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'SidebarMenu'
              ],
              {
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarMenuItem'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'DropdownMenu'
                      ],
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'DropdownMenuTrigger'
                            ],
                            {
                              asChild: true,
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'SidebarMenuButton'
                                ],
                                {
                                  size: 'lg',
                                  className:
                                    'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'default'
                                      ],
                                      {
                                        theme: selectedTeam?.theme,
                                        name: selectedTeam?.logo,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                        lineNumber: 98,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className: 'grid flex-1 text-left text-sm leading-tight',
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {
                                              className: 'truncate font-semibold',
                                              children: selectedTeam?.name,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                              lineNumber: 103,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {
                                              className: 'truncate text-xs',
                                              children: selectedTeam?.tiers?.name,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                              lineNumber: 106,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                        lineNumber: 102,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__[
                                        'ChevronsUpDown'
                                      ],
                                      {
                                        className: 'ml-auto',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                        lineNumber: 110,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                  lineNumber: 94,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                              lineNumber: 93,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'DropdownMenuContent'
                            ],
                            {
                              className: 'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                              align: 'start',
                              side: isMobile ? 'bottom' : 'right',
                              sideOffset: 4,
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuLabel'
                                  ],
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: 'Teams',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                    lineNumber: 119,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                teams?.map(({ teams }, i) =>
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'DropdownMenuItem'
                                    ],
                                    {
                                      className: 'gap-2 p-2',
                                      onClick: () =>
                                        updateMember({
                                          id: user.id,
                                          selected_team_id: teams.id,
                                        }),
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          'div',
                                          {
                                            className: 'flex size-6 items-center justify-center',
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IconPicker$2f$IconAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                'default'
                                              ],
                                              {
                                                className: 'size-5',
                                                theme: teams?.theme,
                                                name: teams?.logo,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                                lineNumber: 131,
                                                columnNumber: 19,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                            lineNumber: 130,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        teams?.name,
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'DropdownMenuShortcut'
                                          ],
                                          {
                                            children: ['t + ', i + 1],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                            lineNumber: 138,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    teams?.name,
                                    true,
                                    {
                                      fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                      lineNumber: 123,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuSeparator'
                                  ],
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                    lineNumber: 141,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'DropdownMenuItem'
                                  ],
                                  {
                                    onClick: () => router.push('/~/settings/teams/new-team'),
                                    className: 'gap-2 p-2',
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'div',
                                        {
                                          className:
                                            'flex size-6 items-center justify-center rounded-md border bg-background',
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__[
                                              'Plus'
                                            ],
                                            {
                                              className: 'size-4',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                              lineNumber: 147,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                          lineNumber: 146,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'div',
                                        {
                                          className: 'text-muted-foreground',
                                          children: 'Add team',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                          lineNumber: 149,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                                    lineNumber: 142,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                              lineNumber: 113,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                        lineNumber: 92,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                    lineNumber: 91,
                    columnNumber: 7,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx',
                lineNumber: 90,
                columnNumber: 5,
              },
              this,
            );
          }
          _s(TeamSwitcher, 'KfgPjVUtdx8ety82L/v9lIwMNiM=', false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useSidebar'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useRouter'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'default'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useQuery'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useQuery'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useToast'
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2d$cache$2d$helpers$2b$postgrest$2d$react$2d$query$40$1$2e$11$2e$5_$40$supabase$2b$postgrest$2d$js$40$1$2e$18$2e$1_$40$supabase$2b$_qe2ohay7gmnitdy3w3dgdcjl6q$2f$node_modules$2f40$supabase$2d$cache$2d$helpers$2f$postgrest$2d$react$2d$query$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useUpdateMutation'
              ],
            ];
          });
          _c = TeamSwitcher;
          var _c;
          __turbopack_refresh__.register(_c, 'TeamSwitcher');
          if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
          }
        }
      },
    '[project]/apps/web/src/components/ui/collapsible.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Collapsible: () => Collapsible,
          CollapsibleContent: () => CollapsibleContent,
          CollapsibleTrigger: () => CollapsibleTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$_cvxgbxjlon5f6aopkxc2ga247y$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-collapsible@1.1.3_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@_cvxgbxjlon5f6aopkxc2ga247y/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)',
          );
        ('use client');
        const Collapsible =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$_cvxgbxjlon5f6aopkxc2ga247y$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root;
        const CollapsibleTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$_cvxgbxjlon5f6aopkxc2ga247y$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CollapsibleTrigger;
        const CollapsibleContent =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible$40$1$2e$1$2e$3_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$_cvxgbxjlon5f6aopkxc2ga247y$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CollapsibleContent;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          NavMain: () => NavMain,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/collapsible.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>',
          );
        ('use client');
        function NavMain({ items }) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'SidebarGroup'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarGroupLabel'
                  ],
                  {
                    children: 'Platform',
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                    lineNumber: 38,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarMenu'
                  ],
                  {
                    children: items.map(item =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'Collapsible'
                        ],
                        {
                          asChild: true,
                          defaultOpen: item.isActive,
                          className: 'group/collapsible',
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'SidebarMenuItem'
                            ],
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'CollapsibleTrigger'
                                  ],
                                  {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'SidebarMenuButton'
                                      ],
                                      {
                                        tooltip: item.title,
                                        children: [
                                          item.icon &&
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              item.icon,
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                                lineNumber: 50,
                                                columnNumber: 33,
                                              },
                                              this,
                                            ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {
                                              children: item.title,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                              lineNumber: 51,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                                              'ChevronRight'
                                            ],
                                            {
                                              className:
                                                'ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                              lineNumber: 52,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                        lineNumber: 49,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                    lineNumber: 48,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'CollapsibleContent'
                                  ],
                                  {
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'SidebarMenuSub'
                                      ],
                                      {
                                        children: item.items?.map(subItem =>
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              'SidebarMenuSubItem'
                                            ],
                                            {
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  'SidebarMenuSubButton'
                                                ],
                                                {
                                                  asChild: true,
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    'jsxDEV'
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      'default'
                                                    ],
                                                    {
                                                      href: subItem.url,
                                                      children: /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        'jsxDEV'
                                                      ])(
                                                        'span',
                                                        {
                                                          children: subItem.title,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                                          lineNumber: 61,
                                                          columnNumber: 27,
                                                        },
                                                        this,
                                                      ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                                      lineNumber: 60,
                                                      columnNumber: 25,
                                                    },
                                                    this,
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                                  lineNumber: 59,
                                                  columnNumber: 23,
                                                },
                                                this,
                                              ),
                                            },
                                            subItem.title,
                                            false,
                                            {
                                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                              lineNumber: 58,
                                              columnNumber: 21,
                                            },
                                            this,
                                          ),
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                        lineNumber: 56,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                                    lineNumber: 55,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                              lineNumber: 47,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        item.title,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                          lineNumber: 41,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
                    lineNumber: 39,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/components/Sidebar/sidebarMain.tsx',
              lineNumber: 37,
              columnNumber: 5,
            },
            this,
          );
        }
        _c = NavMain;
        var _c;
        __turbopack_refresh__.register(_c, 'NavMain');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/card.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Card: () => Card,
          CardContent: () => CardContent,
          CardDescription: () => CardDescription,
          CardFooter: () => CardFooter,
          CardHeader: () => CardHeader,
          CardTitle: () => CardTitle,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        const Card =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('rounded border bg-card text-card-foreground shadow', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 9,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c1 = Card;
        Card.displayName = 'Card';
        const CardHeader =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c2 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex flex-col space-y-1.5 p-6', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 24,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c3 = CardHeader;
        CardHeader.displayName = 'CardHeader';
        const CardTitle =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c4 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('leading-none tracking-tight', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 36,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c5 = CardTitle;
        CardTitle.displayName = 'CardTitle';
        const CardDescription =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c6 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('text-sm text-muted-foreground', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 48,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c7 = CardDescription;
        CardDescription.displayName = 'CardDescription';
        const CardContent =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c8 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('p-6 pt-0', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 60,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c9 = CardContent;
        CardContent.displayName = 'CardContent';
        const CardFooter =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c10 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('flex items-center p-6 pt-0', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/card.tsx',
                  lineNumber: 68,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c11 = CardFooter;
        CardFooter.displayName = 'CardFooter';
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
        __turbopack_refresh__.register(_c, 'Card$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'Card');
        __turbopack_refresh__.register(_c2, 'CardHeader$React.forwardRef');
        __turbopack_refresh__.register(_c3, 'CardHeader');
        __turbopack_refresh__.register(_c4, 'CardTitle$React.forwardRef');
        __turbopack_refresh__.register(_c5, 'CardTitle');
        __turbopack_refresh__.register(_c6, 'CardDescription$React.forwardRef');
        __turbopack_refresh__.register(_c7, 'CardDescription');
        __turbopack_refresh__.register(_c8, 'CardContent$React.forwardRef');
        __turbopack_refresh__.register(_c9, 'CardContent');
        __turbopack_refresh__.register(_c10, 'CardFooter$React.forwardRef');
        __turbopack_refresh__.register(_c11, 'CardFooter');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/assets/icons/chrome.svg [app-client] (static)': __turbopack_context__ => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
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
        __turbopack_export_value__('/_next/static/media/chrome.6e4aa942.svg');
      }
    },
    '[project]/apps/web/src/assets/icons/chrome.svg.mjs { IMAGE => "[project]/apps/web/src/assets/icons/chrome.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)':
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
          k: __turbopack_refresh__,
          m: module,
          z: __turbopack_require_stub__,
        } = __turbopack_context__;
        {
          __turbopack_esm__({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__ =
            __turbopack_import__('[project]/apps/web/src/assets/icons/chrome.svg [app-client] (static)');
          const __TURBOPACK__default__export__ = {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__[
              'default'
            ],
            width: 48,
            height: 48,
            blurDataURL: null,
            blurWidth: 0,
            blurHeight: 0,
          };
          if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
          }
        }
      },
    '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/card.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/image.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ =
          __turbopack_import__(
            '[project]/apps/web/src/assets/icons/chrome.svg.mjs { IMAGE => "[project]/apps/web/src/assets/icons/chrome.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)',
          );
        const SidebarBanner = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'SidebarMenu'
            ],
            {
              className: 'relative',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'SidebarMenuItem'
                ],
                {
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'Card'
                    ],
                    {
                      className: 'overflow-hidden shadow-none',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'SidebarMenuButton'
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'default'
                              ],
                              {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$src$2f$assets$2f$icons$2f$chrome$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__[
                                  'default'
                                ],
                                alt: 'Google Chrome Logo',
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                                lineNumber: 16,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'CardHeader'
                              ],
                              {
                                className: 'p-1 pb-0',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'CardTitle'
                                  ],
                                  {
                                    className: 'text-sm font-normal group-data-[collapsible=icon]:hidden',
                                    children: 'Install the Extension',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                                    lineNumber: 18,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                                lineNumber: 17,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                          lineNumber: 15,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                      lineNumber: 14,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
                  lineNumber: 13,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx',
              lineNumber: 12,
              columnNumber: 5,
            },
            this,
          );
        };
        _c = SidebarBanner;
        const __TURBOPACK__default__export__ = SidebarBanner;
        var _c;
        __turbopack_refresh__.register(_c, 'SidebarBanner');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/Sidebar/sidebar.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          AppSidebar: () => AppSidebar,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/sidebar.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/Sidebar/sidebarUser.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarTeamSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/apps/web/src/components/Sidebar/sidebarTeamSwitcher.tsx [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarMain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/Sidebar/sidebarMain.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/Sidebar/sidebarBanner.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frame$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/frame.js [app-client] (ecmascript) <export default as Frame>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>',
          );
        ('use client');
        const data = {
          navMain: [
            {
              title: 'Home',
              url: '/~',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__[
                'Home'
              ],
              isActive: true,
              items: [
                {
                  title: 'Projects',
                  url: '/~',
                },
              ],
            },
            {
              title: 'Integrations',
              url: '#',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__[
                'Bot'
              ],
              items: [
                {
                  title: 'Comming Soon',
                  url: '#',
                },
              ],
            },
            {
              title: 'Documentation',
              url: '#',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__[
                'BookOpen'
              ],
              items: [
                {
                  title: 'Introduction',
                  url: '#',
                },
                {
                  title: 'Get Started',
                  url: '#',
                },
                {
                  title: 'Tutorials',
                  url: '#',
                },
                {
                  title: 'Changelog',
                  url: '#',
                },
              ],
            },
            {
              title: 'Settings',
              url: '/~/settings',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__[
                'Settings2'
              ],
              items: [
                {
                  title: 'Teams',
                  url: '/~/settings/teams',
                },
                {
                  title: 'Account',
                  url: '/~/settings/account',
                },
                {
                  title: 'Invitations',
                  url: '/~/settings/invitations',
                },
              ],
            },
          ],
          projects: [
            {
              name: 'Design Engineering',
              url: '#',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frame$3e$__[
                'Frame'
              ],
            },
            {
              name: 'Sales & Marketing',
              url: '#',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__[
                'PieChart'
              ],
            },
            {
              name: 'Travel',
              url: '#',
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__[
                'Map'
              ],
            },
          ],
        };
        function AppSidebar() {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'Sidebar'
            ],
            {
              collapsible: 'icon',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarHeader'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'NavUser'
                      ],
                      {},
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                        lineNumber: 127,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                    lineNumber: 126,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarContent'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarMain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'NavMain'
                      ],
                      {
                        items: data.navMain,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                        lineNumber: 130,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                    lineNumber: 129,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarFooter'
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                          lineNumber: 133,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Sidebar$2f$sidebarTeamSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'TeamSwitcher'
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                          lineNumber: 134,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                    lineNumber: 132,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'SidebarRail'
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
                    lineNumber: 136,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/components/Sidebar/sidebar.tsx',
              lineNumber: 125,
              columnNumber: 5,
            },
            this,
          );
        }
        _c = AppSidebar;
        var _c;
        __turbopack_refresh__.register(_c, 'AppSidebar');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/toast.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Toast: () => Toast,
          ToastAction: () => ToastAction,
          ToastClose: () => ToastClose,
          ToastDescription: () => ToastDescription,
          ToastProvider: () => ToastProvider,
          ToastTitle: () => ToastTitle,
          ToastViewport: () => ToastViewport,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@radix-ui+react-toast@1.2.5_@types+react-dom@19.0.4_@types+react@19.0.10__@types+react@19.0.1_hupzfwtlpkwmuhmt5ax3zq5vwy/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/lucide-react@0.475.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>',
          );
        ('use client');
        const ToastProvider =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Provider;
        const ToastViewport =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 16,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c1 = ToastViewport;
        ToastViewport.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport.displayName;
        const toastVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'cva'
        ])(
          'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
          {
            variants: {
              variant: {
                default: 'border bg-gradient-to-r from-primary from-5% to-background to-95% text-foreground',
                destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
              },
            },
            defaultVariants: {
              variant: 'default',
            },
          },
        );
        const Toast =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c2 = ({ className, variant, ...props }, ref) => {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    toastVariants({
                      variant,
                    }),
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 50,
                  columnNumber: 5,
                },
                this,
              );
            }),
          );
        _c3 = Toast;
        Toast.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
        const ToastAction =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c4 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
                    className,
                  ),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 63,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c5 = ToastAction;
        ToastAction.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action.displayName;
        const ToastClose =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c6 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])(
                    'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
                    className,
                  ),
                  'toast-close': '',
                  ...props,
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$475$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                      'X'
                    ],
                    {
                      className: 'h-4 w-4',
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                      lineNumber: 87,
                      columnNumber: 5,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 78,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c7 = ToastClose;
        ToastClose.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close.displayName;
        const ToastTitle =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c8 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('text-sm font-semibold [&+div]:text-xs', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 96,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c9 = ToastTitle;
        ToastTitle.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
        const ToastDescription =
          /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(
            (_c10 = ({ className, ...props }, ref) =>
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description,
                {
                  ref: ref,
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'cn'
                  ])('text-sm opacity-90', className),
                  ...props,
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/components/ui/toast.tsx',
                  lineNumber: 108,
                  columnNumber: 3,
                },
                this,
              )),
          );
        _c11 = ToastDescription;
        ToastDescription.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$toast$40$1$2e$2$2e$5_$40$types$2b$react$2d$dom$40$19$2e$0$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_$5f40$types$2b$react$40$19$2e$0$2e$1_hupzfwtlpkwmuhmt5ax3zq5vwy$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
        __turbopack_refresh__.register(_c, 'ToastViewport$React.forwardRef');
        __turbopack_refresh__.register(_c1, 'ToastViewport');
        __turbopack_refresh__.register(_c2, 'Toast$React.forwardRef');
        __turbopack_refresh__.register(_c3, 'Toast');
        __turbopack_refresh__.register(_c4, 'ToastAction$React.forwardRef');
        __turbopack_refresh__.register(_c5, 'ToastAction');
        __turbopack_refresh__.register(_c6, 'ToastClose$React.forwardRef');
        __turbopack_refresh__.register(_c7, 'ToastClose');
        __turbopack_refresh__.register(_c8, 'ToastTitle$React.forwardRef');
        __turbopack_refresh__.register(_c9, 'ToastTitle');
        __turbopack_refresh__.register(_c10, 'ToastDescription$React.forwardRef');
        __turbopack_refresh__.register(_c11, 'ToastDescription');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/components/ui/toaster.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Toaster: () => Toaster,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/hooks/use-toast.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/toast.tsx [app-client] (ecmascript)');
        var _s = __turbopack_refresh__.signature();
        ('use client');
        function Toaster() {
          _s();
          const { toasts } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useToast'
          ])();
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'ToastProvider'
            ],
            {
              children: [
                toasts.map(function ({ id, title, description, action, ...props }) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'Toast'
                    ],
                    {
                      ...props,
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'div',
                          {
                            className: 'grid gap-1',
                            children: [
                              title &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'ToastTitle'
                                  ],
                                  {
                                    children: title,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                                    lineNumber: 22,
                                    columnNumber: 25,
                                  },
                                  this,
                                ),
                              description &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'ToastDescription'
                                  ],
                                  {
                                    children: description,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                                    lineNumber: 24,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                            lineNumber: 21,
                            columnNumber: 13,
                          },
                          this,
                        ),
                        action,
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'ToastClose'
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                            lineNumber: 28,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      ],
                    },
                    id,
                    true,
                    {
                      fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                      lineNumber: 20,
                      columnNumber: 11,
                    },
                    this,
                  );
                }),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'ToastViewport'
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
                    lineNumber: 32,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/apps/web/src/components/ui/toaster.tsx',
              lineNumber: 17,
              columnNumber: 5,
            },
            this,
          );
        }
        _s(Toaster, '1YTCnXrq2qRowe0H/LBWLjtXoYc=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useToast'
            ],
          ];
        });
        _c = Toaster;
        var _c;
        __turbopack_refresh__.register(_c, 'Toaster');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/hooks/useNotifyExtension.ts [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/util/supabase/client.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        const useNotifyExtension = () => {
          _s();
          const supabase = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'default'
          ])();
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'useNotifyExtension.useEffect': () => {
                const notifyExtension = {
                  'useNotifyExtension.useEffect.notifyExtension': async () => {
                    const editorExtensionId = 'hahbjmnjmbgijbfmeojncnkddjfeomec';
                    await supabase.auth.getUser();
                    const session = await supabase.auth.getSession();
                    if (chrome?.runtime?.sendMessage && session.data)
                      chrome.runtime.sendMessage(editorExtensionId, {
                        action: 'NEW_SESSION',
                        payload: session.data.session,
                      });
                  },
                }['useNotifyExtension.useEffect.notifyExtension'];
                notifyExtension();
              },
            }['useNotifyExtension.useEffect'],
            [],
          );
        };
        _s(useNotifyExtension, 'So4JriXEMCJJ8ypBQug6GU5EOTI=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$util$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
          ];
        });
        const __TURBOPACK__default__export__ = useNotifyExtension;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/app/~/clientProviders.tsx [app-client] (ecmascript)': __turbopack_context__ => {
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/toaster.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/components/ui/tooltip.tsx [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useNotifyExtension$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__('[project]/apps/web/src/hooks/useNotifyExtension.ts [app-client] (ecmascript)');
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next-themes@0.4.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/@tanstack+react-query@5.66.5_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$0_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$nuqs$2f$dist$2f$adapters$2f$next$2f$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/nuqs@2.4.0_next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.79.4__react@19.0.0/node_modules/nuqs/dist/adapters/next/app.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        ('use client');
        const queryClient =
          new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'QueryClient'
          ]();
        /**
         * Client side providers
         */ const ClientProviders = ({ children }) => {
          _s();
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useNotifyExtension$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'default'
          ])();
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$5_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'QueryClientProvider'
            ],
            {
              client: queryClient,
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'ThemeProvider'
                ],
                {
                  attribute: 'class',
                  defaultTheme: 'system',
                  enableSystem: true,
                  disableTransitionOnChange: true,
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'TooltipProvider'
                    ],
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'Toaster'
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/app/~/clientProviders.tsx',
                            lineNumber: 27,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nuqs$40$2$2e$4$2e$0_next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$79$2e$4_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$nuqs$2f$dist$2f$adapters$2f$next$2f$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'NuqsAdapter'
                          ],
                          {
                            children: children,
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/apps/web/src/app/~/clientProviders.tsx',
                            lineNumber: 28,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/apps/web/src/app/~/clientProviders.tsx',
                      lineNumber: 26,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/apps/web/src/app/~/clientProviders.tsx',
                  lineNumber: 20,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/apps/web/src/app/~/clientProviders.tsx',
              lineNumber: 19,
              columnNumber: 5,
            },
            this,
          );
        };
        _s(ClientProviders, 'm7OjlzGghXuLMcc55MoVD8XZLqg=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useNotifyExtension$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'default'
            ],
          ];
        });
        _c = ClientProviders;
        const __TURBOPACK__default__export__ = ClientProviders;
        var _c;
        __turbopack_refresh__.register(_c, 'ClientProviders');
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
          __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/apps/web/src/app/~/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)':
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
  },
]);

//# sourceMappingURL=src_bcbbbf._.js.map
