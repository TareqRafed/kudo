(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'chunks/d0648_@formatjs_intl-localematcher_lib_8ac6ad._.js',
  {
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js [middleware] (ecmascript)':
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
           * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
           * @param locales
           */ __turbopack_esm__({
            CanonicalizeLocaleList: () => CanonicalizeLocaleList,
          });
          function CanonicalizeLocaleList(locales) {
            return Intl.getCanonicalLocales(locales);
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js [middleware] (ecmascript)':
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
            data: () => data,
          });
          var data = {
            supplemental: {
              languageMatching: {
                'written-new': [
                  {
                    paradigmLocales: {
                      _locales: 'en en_GB es es_419 pt_BR pt_PT',
                    },
                  },
                  {
                    $enUS: {
                      _value: 'AS+CA+GU+MH+MP+PH+PR+UM+US+VI',
                    },
                  },
                  {
                    $cnsar: {
                      _value: 'HK+MO',
                    },
                  },
                  {
                    $americas: {
                      _value: '019',
                    },
                  },
                  {
                    $maghreb: {
                      _value: 'MA+DZ+TN+LY+MR+EH',
                    },
                  },
                  {
                    no: {
                      _desired: 'nb',
                      _distance: '1',
                    },
                  },
                  {
                    bs: {
                      _desired: 'hr',
                      _distance: '4',
                    },
                  },
                  {
                    bs: {
                      _desired: 'sh',
                      _distance: '4',
                    },
                  },
                  {
                    hr: {
                      _desired: 'sh',
                      _distance: '4',
                    },
                  },
                  {
                    sr: {
                      _desired: 'sh',
                      _distance: '4',
                    },
                  },
                  {
                    aa: {
                      _desired: 'ssy',
                      _distance: '4',
                    },
                  },
                  {
                    de: {
                      _desired: 'gsw',
                      _distance: '4',
                      _oneway: 'true',
                    },
                  },
                  {
                    de: {
                      _desired: 'lb',
                      _distance: '4',
                      _oneway: 'true',
                    },
                  },
                  {
                    no: {
                      _desired: 'da',
                      _distance: '8',
                    },
                  },
                  {
                    nb: {
                      _desired: 'da',
                      _distance: '8',
                    },
                  },
                  {
                    ru: {
                      _desired: 'ab',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ach',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    nl: {
                      _desired: 'af',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ak',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'am',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'ay',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'az',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ur: {
                      _desired: 'bal',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'be',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'bem',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    hi: {
                      _desired: 'bh',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'bn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'bo',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'br',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'ca',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    fil: {
                      _desired: 'ceb',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'chr',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ckb',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'co',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'crs',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    sk: {
                      _desired: 'cs',
                      _distance: '20',
                    },
                  },
                  {
                    en: {
                      _desired: 'cy',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ee',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'eo',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'eu',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    da: {
                      _desired: 'fo',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    nl: {
                      _desired: 'fy',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ga',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'gaa',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'gd',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'gl',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'gn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    hi: {
                      _desired: 'gu',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ha',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'haw',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'ht',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'hy',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ia',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ig',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'is',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    id: {
                      _desired: 'jv',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ka',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'kg',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'kk',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'km',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'kn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'kri',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    tr: {
                      _desired: 'ku',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'ky',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    it: {
                      _desired: 'la',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'lg',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'ln',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'lo',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'loz',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'lua',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    hi: {
                      _desired: 'mai',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'mfe',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'mg',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'mi',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ml',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'mn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    hi: {
                      _desired: 'mr',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    id: {
                      _desired: 'ms',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'mt',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'my',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ne',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    nb: {
                      _desired: 'nn',
                      _distance: '20',
                    },
                  },
                  {
                    no: {
                      _desired: 'nn',
                      _distance: '20',
                    },
                  },
                  {
                    en: {
                      _desired: 'nso',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ny',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'nyn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'oc',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'om',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'or',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'pa',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'pcm',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ps',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    es: {
                      _desired: 'qu',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    de: {
                      _desired: 'rm',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'rn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'rw',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    hi: {
                      _desired: 'sa',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'sd',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'si',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'sn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'so',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'sq',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'st',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    id: {
                      _desired: 'su',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'sw',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ta',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'te',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'tg',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ti',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'tk',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'tlh',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'tn',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'to',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'tt',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'tum',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'ug',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'uk',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'ur',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ru: {
                      _desired: 'uz',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    fr: {
                      _desired: 'wo',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'xh',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'yi',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'yo',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'za',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    en: {
                      _desired: 'zu',
                      _distance: '30',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'aao',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'abh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'abv',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'acm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'acq',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'acw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'acx',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'acy',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'adf',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'aeb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'aec',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'afb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ajp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'apc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'apd',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'arq',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ars',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ary',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'arz',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'auz',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'avl',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ayh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ayl',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ayn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ayp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'bbz',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'pga',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'shu',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ar: {
                      _desired: 'ssh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    az: {
                      _desired: 'azb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    et: {
                      _desired: 'vro',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'ffm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fub',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fue',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fuf',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fuh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fui',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fuq',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ff: {
                      _desired: 'fuv',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    gn: {
                      _desired: 'gnw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    gn: {
                      _desired: 'gui',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    gn: {
                      _desired: 'gun',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    gn: {
                      _desired: 'nhd',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    iu: {
                      _desired: 'ikt',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'enb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'eyo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'niq',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'oki',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'pko',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'sgc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'tec',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kln: {
                      _desired: 'tuy',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kok: {
                      _desired: 'gom',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    kpe: {
                      _desired: 'gkp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'ida',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lkb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lko',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lks',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lri',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lrm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lsm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lto',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lts',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'lwg',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'nle',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'nyd',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    luy: {
                      _desired: 'rag',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    lv: {
                      _desired: 'ltg',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'bhr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'bjq',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'bmm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'bzc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'msh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'skg',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'tdx',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'tkg',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'txy',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'xmv',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mg: {
                      _desired: 'xmw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    mn: {
                      _desired: 'mvf',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'bjn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'btj',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'bve',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'bvu',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'coa',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'dup',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'hji',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'id',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'jak',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'jax',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'kvb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'kvr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'kxd',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'lce',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'lcf',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'liw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'max',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'meo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'mfa',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'mfb',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'min',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'mqg',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'msi',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'mui',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'orn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'ors',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'pel',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'pse',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'tmw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'urk',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'vkk',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'vkt',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'xmm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'zlm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ms: {
                      _desired: 'zmi',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ne: {
                      _desired: 'dty',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    om: {
                      _desired: 'gax',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    om: {
                      _desired: 'hae',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    om: {
                      _desired: 'orc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    or: {
                      _desired: 'spv',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ps: {
                      _desired: 'pbt',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    ps: {
                      _desired: 'pst',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qub',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qud',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'quf',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qug',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'quh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'quk',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qul',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qup',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qur',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qus',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'quw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qux',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'quy',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qva',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qve',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvi',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvj',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvl',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvm',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvs',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qvz',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qwa',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qwc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qwh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qws',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxa',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxl',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxt',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxu',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    qu: {
                      _desired: 'qxw',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sc: {
                      _desired: 'sdc',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sc: {
                      _desired: 'sdn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sc: {
                      _desired: 'sro',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sq: {
                      _desired: 'aae',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sq: {
                      _desired: 'aat',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    sq: {
                      _desired: 'aln',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    syr: {
                      _desired: 'aii',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    uz: {
                      _desired: 'uzs',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    yi: {
                      _desired: 'yih',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'cdo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'cjy',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'cpx',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'czh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'czo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'gan',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'hak',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'hsn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'lzh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'mnp',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'nan',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'wuu',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    zh: {
                      _desired: 'yue',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    '*': {
                      _desired: '*',
                      _distance: '80',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'am-Ethi',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ru-Cyrl': {
                      _desired: 'az-Latn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'bn-Beng',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'zh-Hans': {
                      _desired: 'bo-Tibt',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ru-Cyrl': {
                      _desired: 'hy-Armn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ka-Geor',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'km-Khmr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'kn-Knda',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'lo-Laoo',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ml-Mlym',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'my-Mymr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ne-Deva',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'or-Orya',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'pa-Guru',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ps-Arab',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'sd-Arab',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'si-Sinh',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ta-Taml',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'te-Telu',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ti-Ethi',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ru-Cyrl': {
                      _desired: 'tk-Latn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'ur-Arab',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ru-Cyrl': {
                      _desired: 'uz-Latn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'en-Latn': {
                      _desired: 'yi-Hebr',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'sr-Cyrl': {
                      _desired: 'sr-Latn',
                      _distance: '5',
                    },
                  },
                  {
                    'zh-Hans': {
                      _desired: 'za-Latn',
                      _distance: '10',
                      _oneway: 'true',
                    },
                  },
                  {
                    'zh-Hans': {
                      _desired: 'zh-Hani',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'zh-Hant': {
                      _desired: 'zh-Hani',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ar-Arab': {
                      _desired: 'ar-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'bn-Beng': {
                      _desired: 'bn-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'gu-Gujr': {
                      _desired: 'gu-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'hi-Deva': {
                      _desired: 'hi-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'kn-Knda': {
                      _desired: 'kn-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ml-Mlym': {
                      _desired: 'ml-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'mr-Deva': {
                      _desired: 'mr-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ta-Taml': {
                      _desired: 'ta-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'te-Telu': {
                      _desired: 'te-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'zh-Hans': {
                      _desired: 'zh-Latn',
                      _distance: '20',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Jpan': {
                      _desired: 'ja-Latn',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Jpan': {
                      _desired: 'ja-Hani',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Jpan': {
                      _desired: 'ja-Hira',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Jpan': {
                      _desired: 'ja-Kana',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Jpan': {
                      _desired: 'ja-Hrkt',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Hrkt': {
                      _desired: 'ja-Hira',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ja-Hrkt': {
                      _desired: 'ja-Kana',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ko-Kore': {
                      _desired: 'ko-Hani',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ko-Kore': {
                      _desired: 'ko-Hang',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ko-Kore': {
                      _desired: 'ko-Jamo',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    'ko-Hang': {
                      _desired: 'ko-Jamo',
                      _distance: '5',
                      _oneway: 'true',
                    },
                  },
                  {
                    '*-*': {
                      _desired: '*-*',
                      _distance: '50',
                    },
                  },
                  {
                    'ar-*-$maghreb': {
                      _desired: 'ar-*-$maghreb',
                      _distance: '4',
                    },
                  },
                  {
                    'ar-*-$!maghreb': {
                      _desired: 'ar-*-$!maghreb',
                      _distance: '4',
                    },
                  },
                  {
                    'ar-*-*': {
                      _desired: 'ar-*-*',
                      _distance: '5',
                    },
                  },
                  {
                    'en-*-$enUS': {
                      _desired: 'en-*-$enUS',
                      _distance: '4',
                    },
                  },
                  {
                    'en-*-GB': {
                      _desired: 'en-*-$!enUS',
                      _distance: '3',
                    },
                  },
                  {
                    'en-*-$!enUS': {
                      _desired: 'en-*-$!enUS',
                      _distance: '4',
                    },
                  },
                  {
                    'en-*-*': {
                      _desired: 'en-*-*',
                      _distance: '5',
                    },
                  },
                  {
                    'es-*-$americas': {
                      _desired: 'es-*-$americas',
                      _distance: '4',
                    },
                  },
                  {
                    'es-*-$!americas': {
                      _desired: 'es-*-$!americas',
                      _distance: '4',
                    },
                  },
                  {
                    'es-*-*': {
                      _desired: 'es-*-*',
                      _distance: '5',
                    },
                  },
                  {
                    'pt-*-$americas': {
                      _desired: 'pt-*-$americas',
                      _distance: '4',
                    },
                  },
                  {
                    'pt-*-$!americas': {
                      _desired: 'pt-*-$!americas',
                      _distance: '4',
                    },
                  },
                  {
                    'pt-*-*': {
                      _desired: 'pt-*-*',
                      _distance: '5',
                    },
                  },
                  {
                    'zh-Hant-$cnsar': {
                      _desired: 'zh-Hant-$cnsar',
                      _distance: '4',
                    },
                  },
                  {
                    'zh-Hant-$!cnsar': {
                      _desired: 'zh-Hant-$!cnsar',
                      _distance: '4',
                    },
                  },
                  {
                    'zh-Hant-*': {
                      _desired: 'zh-Hant-*',
                      _distance: '5',
                    },
                  },
                  {
                    '*-*-*': {
                      _desired: '*-*-*',
                      _distance: '4',
                    },
                  },
                ],
              },
            },
          };
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js [middleware] (ecmascript)':
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
          // This file is generated from regions-gen.ts
          __turbopack_esm__({
            regions: () => regions,
          });
          var regions = {
            '001': [
              '001',
              '001-status-grouping',
              '002',
              '005',
              '009',
              '011',
              '013',
              '014',
              '015',
              '017',
              '018',
              '019',
              '021',
              '029',
              '030',
              '034',
              '035',
              '039',
              '053',
              '054',
              '057',
              '061',
              '142',
              '143',
              '145',
              '150',
              '151',
              '154',
              '155',
              'AC',
              'AD',
              'AE',
              'AF',
              'AG',
              'AI',
              'AL',
              'AM',
              'AO',
              'AQ',
              'AR',
              'AS',
              'AT',
              'AU',
              'AW',
              'AX',
              'AZ',
              'BA',
              'BB',
              'BD',
              'BE',
              'BF',
              'BG',
              'BH',
              'BI',
              'BJ',
              'BL',
              'BM',
              'BN',
              'BO',
              'BQ',
              'BR',
              'BS',
              'BT',
              'BV',
              'BW',
              'BY',
              'BZ',
              'CA',
              'CC',
              'CD',
              'CF',
              'CG',
              'CH',
              'CI',
              'CK',
              'CL',
              'CM',
              'CN',
              'CO',
              'CP',
              'CQ',
              'CR',
              'CU',
              'CV',
              'CW',
              'CX',
              'CY',
              'CZ',
              'DE',
              'DG',
              'DJ',
              'DK',
              'DM',
              'DO',
              'DZ',
              'EA',
              'EC',
              'EE',
              'EG',
              'EH',
              'ER',
              'ES',
              'ET',
              'EU',
              'EZ',
              'FI',
              'FJ',
              'FK',
              'FM',
              'FO',
              'FR',
              'GA',
              'GB',
              'GD',
              'GE',
              'GF',
              'GG',
              'GH',
              'GI',
              'GL',
              'GM',
              'GN',
              'GP',
              'GQ',
              'GR',
              'GS',
              'GT',
              'GU',
              'GW',
              'GY',
              'HK',
              'HM',
              'HN',
              'HR',
              'HT',
              'HU',
              'IC',
              'ID',
              'IE',
              'IL',
              'IM',
              'IN',
              'IO',
              'IQ',
              'IR',
              'IS',
              'IT',
              'JE',
              'JM',
              'JO',
              'JP',
              'KE',
              'KG',
              'KH',
              'KI',
              'KM',
              'KN',
              'KP',
              'KR',
              'KW',
              'KY',
              'KZ',
              'LA',
              'LB',
              'LC',
              'LI',
              'LK',
              'LR',
              'LS',
              'LT',
              'LU',
              'LV',
              'LY',
              'MA',
              'MC',
              'MD',
              'ME',
              'MF',
              'MG',
              'MH',
              'MK',
              'ML',
              'MM',
              'MN',
              'MO',
              'MP',
              'MQ',
              'MR',
              'MS',
              'MT',
              'MU',
              'MV',
              'MW',
              'MX',
              'MY',
              'MZ',
              'NA',
              'NC',
              'NE',
              'NF',
              'NG',
              'NI',
              'NL',
              'NO',
              'NP',
              'NR',
              'NU',
              'NZ',
              'OM',
              'PA',
              'PE',
              'PF',
              'PG',
              'PH',
              'PK',
              'PL',
              'PM',
              'PN',
              'PR',
              'PS',
              'PT',
              'PW',
              'PY',
              'QA',
              'QO',
              'RE',
              'RO',
              'RS',
              'RU',
              'RW',
              'SA',
              'SB',
              'SC',
              'SD',
              'SE',
              'SG',
              'SH',
              'SI',
              'SJ',
              'SK',
              'SL',
              'SM',
              'SN',
              'SO',
              'SR',
              'SS',
              'ST',
              'SV',
              'SX',
              'SY',
              'SZ',
              'TA',
              'TC',
              'TD',
              'TF',
              'TG',
              'TH',
              'TJ',
              'TK',
              'TL',
              'TM',
              'TN',
              'TO',
              'TR',
              'TT',
              'TV',
              'TW',
              'TZ',
              'UA',
              'UG',
              'UM',
              'UN',
              'US',
              'UY',
              'UZ',
              'VA',
              'VC',
              'VE',
              'VG',
              'VI',
              'VN',
              'VU',
              'WF',
              'WS',
              'XK',
              'YE',
              'YT',
              'ZA',
              'ZM',
              'ZW',
            ],
            '002': [
              '002',
              '002-status-grouping',
              '011',
              '014',
              '015',
              '017',
              '018',
              '202',
              'AO',
              'BF',
              'BI',
              'BJ',
              'BW',
              'CD',
              'CF',
              'CG',
              'CI',
              'CM',
              'CV',
              'DJ',
              'DZ',
              'EA',
              'EG',
              'EH',
              'ER',
              'ET',
              'GA',
              'GH',
              'GM',
              'GN',
              'GQ',
              'GW',
              'IC',
              'IO',
              'KE',
              'KM',
              'LR',
              'LS',
              'LY',
              'MA',
              'MG',
              'ML',
              'MR',
              'MU',
              'MW',
              'MZ',
              'NA',
              'NE',
              'NG',
              'RE',
              'RW',
              'SC',
              'SD',
              'SH',
              'SL',
              'SN',
              'SO',
              'SS',
              'ST',
              'SZ',
              'TD',
              'TF',
              'TG',
              'TN',
              'TZ',
              'UG',
              'YT',
              'ZA',
              'ZM',
              'ZW',
            ],
            '003': [
              '003',
              '013',
              '021',
              '029',
              'AG',
              'AI',
              'AW',
              'BB',
              'BL',
              'BM',
              'BQ',
              'BS',
              'BZ',
              'CA',
              'CR',
              'CU',
              'CW',
              'DM',
              'DO',
              'GD',
              'GL',
              'GP',
              'GT',
              'HN',
              'HT',
              'JM',
              'KN',
              'KY',
              'LC',
              'MF',
              'MQ',
              'MS',
              'MX',
              'NI',
              'PA',
              'PM',
              'PR',
              'SV',
              'SX',
              'TC',
              'TT',
              'US',
              'VC',
              'VG',
              'VI',
            ],
            '005': [
              '005',
              'AR',
              'BO',
              'BR',
              'BV',
              'CL',
              'CO',
              'EC',
              'FK',
              'GF',
              'GS',
              'GY',
              'PE',
              'PY',
              'SR',
              'UY',
              'VE',
            ],
            '009': [
              '009',
              '053',
              '054',
              '057',
              '061',
              'AC',
              'AQ',
              'AS',
              'AU',
              'CC',
              'CK',
              'CP',
              'CX',
              'DG',
              'FJ',
              'FM',
              'GU',
              'HM',
              'KI',
              'MH',
              'MP',
              'NC',
              'NF',
              'NR',
              'NU',
              'NZ',
              'PF',
              'PG',
              'PN',
              'PW',
              'QO',
              'SB',
              'TA',
              'TK',
              'TO',
              'TV',
              'UM',
              'VU',
              'WF',
              'WS',
            ],
            '011': [
              '011',
              'BF',
              'BJ',
              'CI',
              'CV',
              'GH',
              'GM',
              'GN',
              'GW',
              'LR',
              'ML',
              'MR',
              'NE',
              'NG',
              'SH',
              'SL',
              'SN',
              'TG',
            ],
            '013': ['013', 'BZ', 'CR', 'GT', 'HN', 'MX', 'NI', 'PA', 'SV'],
            '014': [
              '014',
              'BI',
              'DJ',
              'ER',
              'ET',
              'IO',
              'KE',
              'KM',
              'MG',
              'MU',
              'MW',
              'MZ',
              'RE',
              'RW',
              'SC',
              'SO',
              'SS',
              'TF',
              'TZ',
              'UG',
              'YT',
              'ZM',
              'ZW',
            ],
            '015': ['015', 'DZ', 'EA', 'EG', 'EH', 'IC', 'LY', 'MA', 'SD', 'TN'],
            '017': ['017', 'AO', 'CD', 'CF', 'CG', 'CM', 'GA', 'GQ', 'ST', 'TD'],
            '018': ['018', 'BW', 'LS', 'NA', 'SZ', 'ZA'],
            '019': [
              '003',
              '005',
              '013',
              '019',
              '019-status-grouping',
              '021',
              '029',
              '419',
              'AG',
              'AI',
              'AR',
              'AW',
              'BB',
              'BL',
              'BM',
              'BO',
              'BQ',
              'BR',
              'BS',
              'BV',
              'BZ',
              'CA',
              'CL',
              'CO',
              'CR',
              'CU',
              'CW',
              'DM',
              'DO',
              'EC',
              'FK',
              'GD',
              'GF',
              'GL',
              'GP',
              'GS',
              'GT',
              'GY',
              'HN',
              'HT',
              'JM',
              'KN',
              'KY',
              'LC',
              'MF',
              'MQ',
              'MS',
              'MX',
              'NI',
              'PA',
              'PE',
              'PM',
              'PR',
              'PY',
              'SR',
              'SV',
              'SX',
              'TC',
              'TT',
              'US',
              'UY',
              'VC',
              'VE',
              'VG',
              'VI',
            ],
            '021': ['021', 'BM', 'CA', 'GL', 'PM', 'US'],
            '029': [
              '029',
              'AG',
              'AI',
              'AW',
              'BB',
              'BL',
              'BQ',
              'BS',
              'CU',
              'CW',
              'DM',
              'DO',
              'GD',
              'GP',
              'HT',
              'JM',
              'KN',
              'KY',
              'LC',
              'MF',
              'MQ',
              'MS',
              'PR',
              'SX',
              'TC',
              'TT',
              'VC',
              'VG',
              'VI',
            ],
            '030': ['030', 'CN', 'HK', 'JP', 'KP', 'KR', 'MN', 'MO', 'TW'],
            '034': ['034', 'AF', 'BD', 'BT', 'IN', 'IR', 'LK', 'MV', 'NP', 'PK'],
            '035': ['035', 'BN', 'ID', 'KH', 'LA', 'MM', 'MY', 'PH', 'SG', 'TH', 'TL', 'VN'],
            '039': [
              '039',
              'AD',
              'AL',
              'BA',
              'ES',
              'GI',
              'GR',
              'HR',
              'IT',
              'ME',
              'MK',
              'MT',
              'PT',
              'RS',
              'SI',
              'SM',
              'VA',
              'XK',
            ],
            '053': ['053', 'AU', 'CC', 'CX', 'HM', 'NF', 'NZ'],
            '054': ['054', 'FJ', 'NC', 'PG', 'SB', 'VU'],
            '057': ['057', 'FM', 'GU', 'KI', 'MH', 'MP', 'NR', 'PW', 'UM'],
            '061': ['061', 'AS', 'CK', 'NU', 'PF', 'PN', 'TK', 'TO', 'TV', 'WF', 'WS'],
            142: [
              '030',
              '034',
              '035',
              '142',
              '143',
              '145',
              'AE',
              'AF',
              'AM',
              'AZ',
              'BD',
              'BH',
              'BN',
              'BT',
              'CN',
              'CY',
              'GE',
              'HK',
              'ID',
              'IL',
              'IN',
              'IQ',
              'IR',
              'JO',
              'JP',
              'KG',
              'KH',
              'KP',
              'KR',
              'KW',
              'KZ',
              'LA',
              'LB',
              'LK',
              'MM',
              'MN',
              'MO',
              'MV',
              'MY',
              'NP',
              'OM',
              'PH',
              'PK',
              'PS',
              'QA',
              'SA',
              'SG',
              'SY',
              'TH',
              'TJ',
              'TL',
              'TM',
              'TR',
              'TW',
              'UZ',
              'VN',
              'YE',
            ],
            143: ['143', 'KG', 'KZ', 'TJ', 'TM', 'UZ'],
            145: [
              '145',
              'AE',
              'AM',
              'AZ',
              'BH',
              'CY',
              'GE',
              'IL',
              'IQ',
              'JO',
              'KW',
              'LB',
              'OM',
              'PS',
              'QA',
              'SA',
              'SY',
              'TR',
              'YE',
            ],
            150: [
              '039',
              '150',
              '151',
              '154',
              '155',
              'AD',
              'AL',
              'AT',
              'AX',
              'BA',
              'BE',
              'BG',
              'BY',
              'CH',
              'CQ',
              'CZ',
              'DE',
              'DK',
              'EE',
              'ES',
              'FI',
              'FO',
              'FR',
              'GB',
              'GG',
              'GI',
              'GR',
              'HR',
              'HU',
              'IE',
              'IM',
              'IS',
              'IT',
              'JE',
              'LI',
              'LT',
              'LU',
              'LV',
              'MC',
              'MD',
              'ME',
              'MK',
              'MT',
              'NL',
              'NO',
              'PL',
              'PT',
              'RO',
              'RS',
              'RU',
              'SE',
              'SI',
              'SJ',
              'SK',
              'SM',
              'UA',
              'VA',
              'XK',
            ],
            151: ['151', 'BG', 'BY', 'CZ', 'HU', 'MD', 'PL', 'RO', 'RU', 'SK', 'UA'],
            154: [
              '154',
              'AX',
              'CQ',
              'DK',
              'EE',
              'FI',
              'FO',
              'GB',
              'GG',
              'IE',
              'IM',
              'IS',
              'JE',
              'LT',
              'LV',
              'NO',
              'SE',
              'SJ',
            ],
            155: ['155', 'AT', 'BE', 'CH', 'DE', 'FR', 'LI', 'LU', 'MC', 'NL'],
            202: [
              '011',
              '014',
              '017',
              '018',
              '202',
              'AO',
              'BF',
              'BI',
              'BJ',
              'BW',
              'CD',
              'CF',
              'CG',
              'CI',
              'CM',
              'CV',
              'DJ',
              'ER',
              'ET',
              'GA',
              'GH',
              'GM',
              'GN',
              'GQ',
              'GW',
              'IO',
              'KE',
              'KM',
              'LR',
              'LS',
              'MG',
              'ML',
              'MR',
              'MU',
              'MW',
              'MZ',
              'NA',
              'NE',
              'NG',
              'RE',
              'RW',
              'SC',
              'SH',
              'SL',
              'SN',
              'SO',
              'SS',
              'ST',
              'SZ',
              'TD',
              'TF',
              'TG',
              'TZ',
              'UG',
              'YT',
              'ZA',
              'ZM',
              'ZW',
            ],
            419: [
              '005',
              '013',
              '029',
              '419',
              'AG',
              'AI',
              'AR',
              'AW',
              'BB',
              'BL',
              'BO',
              'BQ',
              'BR',
              'BS',
              'BV',
              'BZ',
              'CL',
              'CO',
              'CR',
              'CU',
              'CW',
              'DM',
              'DO',
              'EC',
              'FK',
              'GD',
              'GF',
              'GP',
              'GS',
              'GT',
              'GY',
              'HN',
              'HT',
              'JM',
              'KN',
              'KY',
              'LC',
              'MF',
              'MQ',
              'MS',
              'MX',
              'NI',
              'PA',
              'PE',
              'PR',
              'PY',
              'SR',
              'SV',
              'SX',
              'TC',
              'TT',
              'UY',
              'VC',
              'VE',
              'VG',
              'VI',
            ],
            EU: [
              'AT',
              'BE',
              'BG',
              'CY',
              'CZ',
              'DE',
              'DK',
              'EE',
              'ES',
              'EU',
              'FI',
              'FR',
              'GR',
              'HR',
              'HU',
              'IE',
              'IT',
              'LT',
              'LU',
              'LV',
              'MT',
              'NL',
              'PL',
              'PT',
              'RO',
              'SE',
              'SI',
              'SK',
            ],
            EZ: [
              'AT',
              'BE',
              'CY',
              'DE',
              'EE',
              'ES',
              'EZ',
              'FI',
              'FR',
              'GR',
              'IE',
              'IT',
              'LT',
              'LU',
              'LV',
              'MT',
              'NL',
              'PT',
              'SI',
              'SK',
            ],
            QO: ['AC', 'AQ', 'CP', 'DG', 'QO', 'TA'],
            UN: [
              'AD',
              'AE',
              'AF',
              'AG',
              'AL',
              'AM',
              'AO',
              'AR',
              'AT',
              'AU',
              'AZ',
              'BA',
              'BB',
              'BD',
              'BE',
              'BF',
              'BG',
              'BH',
              'BI',
              'BJ',
              'BN',
              'BO',
              'BR',
              'BS',
              'BT',
              'BW',
              'BY',
              'BZ',
              'CA',
              'CD',
              'CF',
              'CG',
              'CH',
              'CI',
              'CL',
              'CM',
              'CN',
              'CO',
              'CR',
              'CU',
              'CV',
              'CY',
              'CZ',
              'DE',
              'DJ',
              'DK',
              'DM',
              'DO',
              'DZ',
              'EC',
              'EE',
              'EG',
              'ER',
              'ES',
              'ET',
              'FI',
              'FJ',
              'FM',
              'FR',
              'GA',
              'GB',
              'GD',
              'GE',
              'GH',
              'GM',
              'GN',
              'GQ',
              'GR',
              'GT',
              'GW',
              'GY',
              'HN',
              'HR',
              'HT',
              'HU',
              'ID',
              'IE',
              'IL',
              'IN',
              'IQ',
              'IR',
              'IS',
              'IT',
              'JM',
              'JO',
              'JP',
              'KE',
              'KG',
              'KH',
              'KI',
              'KM',
              'KN',
              'KP',
              'KR',
              'KW',
              'KZ',
              'LA',
              'LB',
              'LC',
              'LI',
              'LK',
              'LR',
              'LS',
              'LT',
              'LU',
              'LV',
              'LY',
              'MA',
              'MC',
              'MD',
              'ME',
              'MG',
              'MH',
              'MK',
              'ML',
              'MM',
              'MN',
              'MR',
              'MT',
              'MU',
              'MV',
              'MW',
              'MX',
              'MY',
              'MZ',
              'NA',
              'NE',
              'NG',
              'NI',
              'NL',
              'NO',
              'NP',
              'NR',
              'NZ',
              'OM',
              'PA',
              'PE',
              'PG',
              'PH',
              'PK',
              'PL',
              'PT',
              'PW',
              'PY',
              'QA',
              'RO',
              'RS',
              'RU',
              'RW',
              'SA',
              'SB',
              'SC',
              'SD',
              'SE',
              'SG',
              'SI',
              'SK',
              'SL',
              'SM',
              'SN',
              'SO',
              'SR',
              'SS',
              'ST',
              'SV',
              'SY',
              'SZ',
              'TD',
              'TG',
              'TH',
              'TJ',
              'TL',
              'TM',
              'TN',
              'TO',
              'TR',
              'TT',
              'TV',
              'TZ',
              'UA',
              'UG',
              'UN',
              'US',
              'UY',
              'UZ',
              'VC',
              'VE',
              'VN',
              'VU',
              'WS',
              'YE',
              'ZA',
              'ZM',
              'ZW',
            ],
          };
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)':
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
            UNICODE_EXTENSION_SEQUENCE_REGEX: () => UNICODE_EXTENSION_SEQUENCE_REGEX,
            findBestMatch: () => findBestMatch,
            findMatchingDistance: () => findMatchingDistance,
            invariant: () => invariant,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$languageMatching$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$regions$2e$generated$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs [middleware] (ecmascript)',
            );
          var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
          function invariant(condition, message, Err) {
            if (Err === void 0) {
              Err = Error;
            }
            if (!condition) {
              throw new Err(message);
            }
          }
          // This is effectively 2 languages in 2 different regions in the same cluster
          var DEFAULT_MATCHING_THRESHOLD = 838;
          var PROCESSED_DATA;
          function processData() {
            var _a, _b;
            if (!PROCESSED_DATA) {
              var paradigmLocales =
                (_b =
                  (_a =
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$languageMatching$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                      'data'
                    ].supplemental.languageMatching['written-new'][0]) === null || _a === void 0
                    ? void 0
                    : _a.paradigmLocales) === null || _b === void 0
                  ? void 0
                  : _b._locales.split(' ');
              var matchVariables =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$languageMatching$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'data'
                ].supplemental.languageMatching['written-new'].slice(1, 5);
              var data =
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$languageMatching$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'data'
                ].supplemental.languageMatching['written-new'].slice(5);
              var matches = data.map(function (d) {
                var key = Object.keys(d)[0];
                var value = d[key];
                return {
                  supported: key,
                  desired: value._desired,
                  distance: +value._distance,
                  oneway: value.oneway === 'true' ? true : false,
                };
              }, {});
              PROCESSED_DATA = {
                matches: matches,
                matchVariables: matchVariables.reduce(function (all, d) {
                  var key = Object.keys(d)[0];
                  var value = d[key];
                  all[key.slice(1)] = value._value.split('+');
                  return all;
                }, {}),
                paradigmLocales: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__[
                  '__spreadArray'
                ])(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])([], paradigmLocales, true),
                  paradigmLocales.map(function (l) {
                    return new Intl.Locale(l.replace(/_/g, '-')).maximize().toString();
                  }),
                  true,
                ),
              };
            }
            return PROCESSED_DATA;
          }
          function isMatched(locale, languageMatchInfoLocale, matchVariables) {
            var _a = languageMatchInfoLocale.split('-'),
              language = _a[0],
              script = _a[1],
              region = _a[2];
            var matches = true;
            if (region && region[0] === '$') {
              var shouldInclude = region[1] !== '!';
              var matchRegions = shouldInclude ? matchVariables[region.slice(1)] : matchVariables[region.slice(2)];
              var expandedMatchedRegions = matchRegions
                .map(function (r) {
                  return (
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$regions$2e$generated$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                      'regions'
                    ][r] || [r]
                  );
                })
                .reduce(function (all, list) {
                  return (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__[
                    '__spreadArray'
                  ])(
                    (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$7$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__[
                      '__spreadArray'
                    ])([], all, true),
                    list,
                    true,
                  );
                }, []);
              matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || '') > 1 != shouldInclude));
            } else {
              matches && (matches = locale.region ? region === '*' || region === locale.region : true);
            }
            matches && (matches = locale.script ? script === '*' || script === locale.script : true);
            matches && (matches = locale.language ? language === '*' || language === locale.language : true);
            return matches;
          }
          function serializeLSR(lsr) {
            return [lsr.language, lsr.script, lsr.region].filter(Boolean).join('-');
          }
          function findMatchingDistanceForLSR(desired, supported, data) {
            for (var _i = 0, _a = data.matches; _i < _a.length; _i++) {
              var d = _a[_i];
              var matches =
                isMatched(desired, d.desired, data.matchVariables) &&
                isMatched(supported, d.supported, data.matchVariables);
              if (!d.oneway && !matches) {
                matches =
                  isMatched(desired, d.supported, data.matchVariables) &&
                  isMatched(supported, d.desired, data.matchVariables);
              }
              if (matches) {
                var distance = d.distance * 10;
                if (
                  data.paradigmLocales.indexOf(serializeLSR(desired)) > -1 !=
                  data.paradigmLocales.indexOf(serializeLSR(supported)) > -1
                ) {
                  return distance - 1;
                }
                return distance;
              }
            }
            throw new Error('No matching distance found');
          }
          function findMatchingDistance(desired, supported) {
            var desiredLocale = new Intl.Locale(desired).maximize();
            var supportedLocale = new Intl.Locale(supported).maximize();
            var desiredLSR = {
              language: desiredLocale.language,
              script: desiredLocale.script || '',
              region: desiredLocale.region || '',
            };
            var supportedLSR = {
              language: supportedLocale.language,
              script: supportedLocale.script || '',
              region: supportedLocale.region || '',
            };
            var matchingDistance = 0;
            var data = processData();
            if (desiredLSR.language !== supportedLSR.language) {
              matchingDistance += findMatchingDistanceForLSR(
                {
                  language: desiredLocale.language,
                  script: '',
                  region: '',
                },
                {
                  language: supportedLocale.language,
                  script: '',
                  region: '',
                },
                data,
              );
            }
            if (desiredLSR.script !== supportedLSR.script) {
              matchingDistance += findMatchingDistanceForLSR(
                {
                  language: desiredLocale.language,
                  script: desiredLSR.script,
                  region: '',
                },
                {
                  language: supportedLocale.language,
                  script: desiredLSR.script,
                  region: '',
                },
                data,
              );
            }
            if (desiredLSR.region !== supportedLSR.region) {
              matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data);
            }
            return matchingDistance;
          }
          function findBestMatch(requestedLocales, supportedLocales, threshold) {
            if (threshold === void 0) {
              threshold = DEFAULT_MATCHING_THRESHOLD;
            }
            var lowestDistance = Infinity;
            var result = {
              matchedDesiredLocale: '',
              distances: {},
            };
            requestedLocales.forEach(function (desired, i) {
              if (!result.distances[desired]) {
                result.distances[desired] = {};
              }
              supportedLocales.forEach(function (supported) {
                // Add some weight to the distance based on the order of the supported locales
                // Add penalty for the order of the requested locales, which currently is 0 since ECMA-402
                // doesn't really have room for weighted locales like `en; q=0.1`
                var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
                result.distances[desired][supported] = distance;
                if (distance < lowestDistance) {
                  lowestDistance = distance;
                  result.matchedDesiredLocale = desired;
                  result.matchedSupportedLocale = supported;
                }
              });
            });
            if (lowestDistance >= threshold) {
              result.matchedDesiredLocale = undefined;
              result.matchedSupportedLocale = undefined;
            }
            return result;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js [middleware] (ecmascript)':
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
            BestFitMatcher: () => BestFitMatcher,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
            var foundLocale;
            var extension;
            var noExtensionLocales = [];
            var noExtensionLocaleMap = requestedLocales.reduce(function (all, l) {
              var noExtensionLocale = l.replace(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'UNICODE_EXTENSION_SEQUENCE_REGEX'
                ],
                '',
              );
              noExtensionLocales.push(noExtensionLocale);
              all[noExtensionLocale] = l;
              return all;
            }, {});
            var result = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'findBestMatch'
            ])(noExtensionLocales, availableLocales);
            if (result.matchedSupportedLocale && result.matchedDesiredLocale) {
              foundLocale = result.matchedSupportedLocale;
              extension =
                noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) ||
                undefined;
            }
            if (!foundLocale) {
              return {
                locale: getDefaultLocale(),
              };
            }
            return {
              locale: foundLocale,
              extension: extension,
            };
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUValue.js [middleware] (ecmascript)':
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
            CanonicalizeUValue: () => CanonicalizeUValue,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function CanonicalizeUValue(ukey, uvalue) {
            // TODO: Implement algorithm for CanonicalizeUValue per https://tc39.es/ecma402/#sec-canonicalizeuvalue
            var lowerValue = uvalue.toLowerCase();
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'invariant'
            ])(ukey !== undefined, 'ukey must be defined');
            var canonicalized = lowerValue;
            return canonicalized;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUnicodeLocaleId.js [middleware] (ecmascript)':
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
            CanonicalizeUnicodeLocaleId: () => CanonicalizeUnicodeLocaleId,
          });
          function CanonicalizeUnicodeLocaleId(locale) {
            return Intl.getCanonicalLocales(locale)[0];
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/InsertUnicodeExtensionAndCanonicalize.js [middleware] (ecmascript)':
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
            InsertUnicodeExtensionAndCanonicalize: () => InsertUnicodeExtensionAndCanonicalize,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeUnicodeLocaleId$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUnicodeLocaleId.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'invariant'
            ])(locale.indexOf('-u-') === -1, 'Expected locale to not have a Unicode locale extension');
            var extension = '-u';
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
              var attr = attributes_1[_i];
              extension += '-'.concat(attr);
            }
            for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
              var kw = keywords_1[_a];
              var key = kw.key,
                value = kw.value;
              extension += '-'.concat(key);
              if (value !== '') {
                extension += '-'.concat(value);
              }
            }
            if (extension === '-u') {
              return (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeUnicodeLocaleId$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'CanonicalizeUnicodeLocaleId'
              ])(locale);
            }
            var privateIndex = locale.indexOf('-x-');
            var newLocale;
            if (privateIndex === -1) {
              newLocale = locale + extension;
            } else {
              var preExtension = locale.slice(0, privateIndex);
              var postExtension = locale.slice(privateIndex);
              newLocale = preExtension + extension + postExtension;
            }
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeUnicodeLocaleId$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'CanonicalizeUnicodeLocaleId'
            ])(newLocale);
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js [middleware] (ecmascript)':
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
           * https://tc39.es/ecma402/#sec-bestavailablelocale
           * @param availableLocales
           * @param locale
           */ __turbopack_esm__({
            BestAvailableLocale: () => BestAvailableLocale,
          });
          function BestAvailableLocale(availableLocales, locale) {
            var candidate = locale;
            while (true) {
              if (availableLocales.indexOf(candidate) > -1) {
                return candidate;
              }
              var pos = candidate.lastIndexOf('-');
              if (!~pos) {
                return undefined;
              }
              if (pos >= 2 && candidate[pos - 2] === '-') {
                pos -= 2;
              }
              candidate = candidate.slice(0, pos);
            }
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js [middleware] (ecmascript)':
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
            LookupMatcher: () => LookupMatcher,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestAvailableLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
            var result = {
              locale: '',
            };
            for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
              var locale = requestedLocales_1[_i];
              var noExtensionLocale = locale.replace(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'UNICODE_EXTENSION_SEQUENCE_REGEX'
                ],
                '',
              );
              var availableLocale = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestAvailableLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'BestAvailableLocale'
              ])(availableLocales, noExtensionLocale);
              if (availableLocale) {
                result.locale = availableLocale;
                if (locale !== noExtensionLocale) {
                  result.extension = locale.slice(noExtensionLocale.length, locale.length);
                }
                return result;
              }
            }
            result.locale = getDefaultLocale();
            return result;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionComponents.js [middleware] (ecmascript)':
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
            UnicodeExtensionComponents: () => UnicodeExtensionComponents,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function UnicodeExtensionComponents(extension) {
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'invariant'
            ])(extension === extension.toLowerCase(), 'Expected extension to be lowercase');
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'invariant'
            ])(extension.slice(0, 3) === '-u-', 'Expected extension to be a Unicode locale extension');
            var attributes = [];
            var keywords = [];
            var keyword;
            var size = extension.length;
            var k = 3;
            while (k < size) {
              var e = extension.indexOf('-', k);
              var len = void 0;
              if (e === -1) {
                len = size - k;
              } else {
                len = e - k;
              }
              var subtag = extension.slice(k, k + len);
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'invariant'
              ])(len >= 2, 'Expected a subtag to have at least 2 characters');
              if (keyword === undefined && len != 2) {
                if (attributes.indexOf(subtag) === -1) {
                  attributes.push(subtag);
                }
              } else if (len === 2) {
                keyword = {
                  key: subtag,
                  value: '',
                };
                if (
                  keywords.find(function (k) {
                    return k.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key);
                  }) === undefined
                ) {
                  keywords.push(keyword);
                }
              } else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === '') {
                keyword.value = subtag;
              } else {
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'invariant'
                ])(keyword !== undefined, 'Expected keyword to be defined');
                keyword.value += '-' + subtag;
              }
              k += len + 1;
            }
            return {
              attributes: attributes,
              keywords: keywords,
            };
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js [middleware] (ecmascript)':
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
            ResolveLocale: () => ResolveLocale,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestFitMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeUValue$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUValue.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$InsertUnicodeExtensionAndCanonicalize$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/InsertUnicodeExtensionAndCanonicalize.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$LookupMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$UnicodeExtensionComponents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionComponents.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function ResolveLocale(
            availableLocales,
            requestedLocales,
            options,
            relevantExtensionKeys,
            localeData,
            getDefaultLocale,
          ) {
            var _a;
            var matcher = options.localeMatcher;
            var r;
            if (matcher === 'lookup') {
              r = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$LookupMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'LookupMatcher'
              ])(Array.from(availableLocales), requestedLocales, getDefaultLocale);
            } else {
              r = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestFitMatcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'BestFitMatcher'
              ])(Array.from(availableLocales), requestedLocales, getDefaultLocale);
            }
            if (r == null) {
              r = {
                locale: getDefaultLocale(),
                extension: '',
              };
            }
            var foundLocale = r.locale;
            var foundLocaleData = localeData[foundLocale];
            // TODO: We can't really guarantee that the locale data is available
            // invariant(
            //   foundLocaleData !== undefined,
            //   `Missing locale data for ${foundLocale}`
            // )
            var result = {
              locale: 'en',
              dataLocale: foundLocale,
            };
            var components;
            var keywords;
            if (r.extension) {
              components = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$UnicodeExtensionComponents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'UnicodeExtensionComponents'
              ])(r.extension);
              keywords = components.keywords;
            } else {
              keywords = [];
            }
            var supportedKeywords = [];
            var _loop_1 = function (key) {
              // TODO: Shouldn't default to empty array, see TODO above
              var keyLocaleData =
                (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key]) !==
                  null && _a !== void 0
                  ? _a
                  : [];
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'invariant'
              ])(Array.isArray(keyLocaleData), 'keyLocaleData for '.concat(key, ' must be an array'));
              var value = keyLocaleData[0];
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'invariant'
              ])(value === undefined || typeof value === 'string', 'value must be a string or undefined');
              var supportedKeyword = void 0;
              var entry = keywords.find(function (k) {
                return k.key === key;
              });
              if (entry) {
                var requestedValue = entry.value;
                if (requestedValue !== '') {
                  if (keyLocaleData.indexOf(requestedValue) > -1) {
                    value = requestedValue;
                    supportedKeyword = {
                      key: key,
                      value: value,
                    };
                  }
                } else if (keyLocaleData.indexOf('true') > -1) {
                  value = 'true';
                  supportedKeyword = {
                    key: key,
                    value: value,
                  };
                }
              }
              var optionsValue = options[key];
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'invariant'
              ])(
                optionsValue == null || typeof optionsValue === 'string',
                'optionsValue must be a string or undefined',
              );
              if (typeof optionsValue === 'string') {
                var ukey = key.toLowerCase();
                optionsValue = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeUValue$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'CanonicalizeUValue'
                ])(ukey, optionsValue);
                if (optionsValue === '') {
                  optionsValue = 'true';
                }
              }
              if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
                value = optionsValue;
                supportedKeyword = undefined;
              }
              if (supportedKeyword) {
                supportedKeywords.push(supportedKeyword);
              }
              result[key] = value;
            };
            for (
              var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys;
              _i < relevantExtensionKeys_1.length;
              _i++
            ) {
              var key = relevantExtensionKeys_1[_i];
              _loop_1(key);
            }
            var supportedAttributes = [];
            if (supportedKeywords.length > 0) {
              supportedAttributes = [];
              foundLocale = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$InsertUnicodeExtensionAndCanonicalize$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'InsertUnicodeExtensionAndCanonicalize'
              ])(foundLocale, supportedAttributes, supportedKeywords);
            }
            result.locale = foundLocale;
            return result;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js [middleware] (ecmascript)':
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
            LookupSupportedLocales: () => LookupSupportedLocales,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestAvailableLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js [middleware] (ecmascript)',
            );
          function LookupSupportedLocales(availableLocales, requestedLocales) {
            var subset = [];
            for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
              var locale = requestedLocales_1[_i];
              var noExtensionLocale = locale.replace(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                  'UNICODE_EXTENSION_SEQUENCE_REGEX'
                ],
                '',
              );
              var availableLocale = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$BestAvailableLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'BestAvailableLocale'
              ])(availableLocales, noExtensionLocale);
              if (availableLocale) {
                subset.push(availableLocale);
              }
            }
            return subset;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <locals>':
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
            match: () => match,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$ResolveLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeLocaleList$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js [middleware] (ecmascript)',
            );
          function match(requestedLocales, availableLocales, defaultLocale, opts) {
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$ResolveLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
              'ResolveLocale'
            ])(
              availableLocales,
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeLocaleList$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'CanonicalizeLocaleList'
              ])(requestedLocales),
              {
                localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || 'best fit',
              },
              [],
              {},
              function () {
                return defaultLocale;
              },
            ).locale;
          }
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <module evaluation>':
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
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$CanonicalizeLocaleList$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$ResolveLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$LookupSupportedLocales$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <locals>',
            );
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <exports>':
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
            LookupSupportedLocales: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$LookupSupportedLocales$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'LookupSupportedLocales'
              ],
            ResolveLocale: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$ResolveLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__[
                'ResolveLocale'
              ],
            match: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                'match'
              ],
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$LookupSupportedLocales$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$abstract$2f$ResolveLocale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js [middleware] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <locals>',
            );
        }
      },
    '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript)':
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
            LookupSupportedLocales: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'LookupSupportedLocales'
              ],
            ResolveLocale: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'ResolveLocale'
              ],
            match: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'match'
              ],
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <module evaluation>',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$intl$2d$localematcher$40$0$2e$5$2e$10$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/@formatjs+intl-localematcher@0.5.10/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware] (ecmascript) <exports>',
            );
        }
      },
  },
]);

//# sourceMappingURL=d0648_%40formatjs_intl-localematcher_lib_8ac6ad._.js.map
