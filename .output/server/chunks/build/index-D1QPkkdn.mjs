import { D as useLocaleRouter, bc as useSeoMeta, bd as useLocalizedProduct, z as useFetch, bg as useCollectionPageJsonLd, l as _sfc_main$B, a as __nuxt_component_3$2, b as _sfc_main$G, o as _sfc_main$x } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    useSeoMeta({
      title: "\u4EA7\u54C1\u5217\u8868 - GoPanel",
      description: "GoPanel \u4EA7\u54C1\u5217\u8868\uFF0C\u6B22\u8FCE\u60A8\u8BA2\u9605\u6211\u4EEC\u7684\u4EA7\u54C1\uFF0C\u6211\u4EEC\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4F18\u8D28\u7684\u670D\u52A1\u3002"
    });
    const { getLocalizedProduct } = useLocalizedProduct();
    const { data, status } = useFetch(
      "/api/products?page=1&pageSize=30",
      "$loMfbj-9YG"
      /* nuxt-injected */
    );
    const pending = computed(() => status.value === "pending");
    const products = computed(() => {
      var _a;
      if (!((_a = data.value) == null ? void 0 : _a.data)) return [];
      return data.value.data.map(getLocalizedProduct);
    });
    useCollectionPageJsonLd("panel-products-list", {
      path: "/products",
      name: () => "\u4EA7\u54C1\u5217\u8868 - GoPanel",
      description: () => "GoPanel \u4EA7\u54C1\u5217\u8868\uFF0C\u6B22\u8FCE\u60A8\u8BA2\u9605\u6211\u4EEC\u7684\u4EA7\u54C1\uFF0C\u6211\u4EEC\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4F18\u8D28\u7684\u670D\u52A1\u3002",
      items: products
    });
    const getProductIcon = (type) => {
      switch (type) {
        case "subscription":
          return "ph:infinity-duotone";
        case "key":
          return "ph:key-duotone";
        case "service":
          return "ph:headset-duotone";
        default:
          return "ph:cube-duotone";
      }
    };
    const getProductBadgeColor = (type) => {
      switch (type) {
        case "subscription":
          return "primary";
        case "key":
          return "warning";
        default:
          return "info";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_NuxtLink = __nuxt_component_3$2;
      const _component_UIcon = _sfc_main$G;
      const _component_UBadge = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-16 relative overflow-hidden" }, _attrs))}><div class="max-w-7xl mx-auto px-6 relative z-10"><div class="mb-12 text-center"><h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"> \u4EA7\u54C1\u4E0E\u6388\u6743 </h1><p class="text-gray-600 text-lg max-w-2xl mx-auto"> \u9009\u62E9\u9002\u5408\u4F60\u7684\u7248\u672C\uFF0C\u4E00\u952E\u8D2D\u4E70\u540E\u5373\u53EF\u5FEB\u901F\u5B89\u88C5\u90E8\u7F72\u3002 </p><div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/licenses"),
        size: "lg",
        class: "rounded-full px-7 py-3 border border-blue-600 hover:bg-blue-700 text-blue-600 bg-white hover:text-white transition-all font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6388\u6743\u67E5\u8BE2 `);
          } else {
            return [
              createTextVNode(" \u6388\u6743\u67E5\u8BE2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(pending)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="h-80 rounded-3xl bg-white shadow-sm border border-gray-100 animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(products).length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(unref(products), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.id,
            to: unref(localePath)(`/products/${item.slug}`),
            class: "group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:ring-1 hover:ring-blue-500/20 transition-all flex flex-col relative overflow-hidden"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d;
              if (_push2) {
                _push2(`<div class="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"${_scopeId}></div><div class="flex items-center justify-between mb-6 relative z-10"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: getProductIcon(item.type),
                  class: "w-6 h-6"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: getProductBadgeColor(item.type),
                  variant: "subtle",
                  size: "sm",
                  class: "uppercase tracking-wider font-bold"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.type.replace("_", " "))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.type.replace("_", " ")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex-1 relative z-10"${_scopeId}><h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-6"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
                if ((_b = (_a = item.metaData) == null ? void 0 : _a.plan_features) == null ? void 0 : _b.length) {
                  _push2(`<ul class="space-y-3"${_scopeId}><!--[-->`);
                  ssrRenderList(item.metaData.plan_features.slice(0, 4), (feature, fIdx) => {
                    _push2(`<li class="flex items-start gap-2 text-sm text-gray-600"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: feature.included ? "ph:check-circle-fill" : "ph:x-circle-fill",
                      class: ["w-5 h-5 shrink-0", feature.included ? "text-blue-500" : "text-gray-300"]
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="${ssrRenderClass(feature.included ? "" : "text-gray-400 line-through")}"${_scopeId}>${ssrInterpolate(feature.name)}</span></li>`);
                  });
                  _push2(`<!--]--></ul>`);
                } else {
                  _push2(`<ul class="space-y-3"${_scopeId}><li class="flex items-start gap-2 text-sm text-gray-600"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-circle-fill",
                    class: "w-5 h-5 text-blue-500 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>\u8D2D\u4E70\u540E\u7ACB\u5373\u5F00\u901A</span></li></ul>`);
                }
                _push2(`</div><div class="mt-8 pt-6 border-t border-gray-100 flex items-end justify-between relative z-10"${_scopeId}><div${_scopeId}><p class="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1"${_scopeId}>\u4EF7\u683C</p><div class="flex items-baseline gap-1"${_scopeId}><span class="text-lg font-bold text-gray-400"${_scopeId}>$</span><span class="text-4xl font-extrabold text-gray-900"${_scopeId}>${ssrInterpolate(item.price)}</span></div></div><div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" }),
                  createVNode("div", { class: "flex items-center justify-between mb-6 relative z-10" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform" }, [
                      createVNode(_component_UIcon, {
                        name: getProductIcon(item.type),
                        class: "w-6 h-6"
                      }, null, 8, ["name"])
                    ]),
                    createVNode(_component_UBadge, {
                      color: getProductBadgeColor(item.type),
                      variant: "subtle",
                      size: "sm",
                      class: "uppercase tracking-wider font-bold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.type.replace("_", " ")), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  createVNode("div", { class: "flex-1 relative z-10" }, [
                    createVNode("h3", { class: "text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" }, toDisplayString(item.name), 1),
                    createVNode("p", { class: "text-gray-600 text-sm leading-relaxed line-clamp-2 mb-6" }, toDisplayString(item.description), 1),
                    ((_d = (_c = item.metaData) == null ? void 0 : _c.plan_features) == null ? void 0 : _d.length) ? (openBlock(), createBlock("ul", {
                      key: 0,
                      class: "space-y-3"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.metaData.plan_features.slice(0, 4), (feature, fIdx) => {
                        return openBlock(), createBlock("li", {
                          key: fIdx,
                          class: "flex items-start gap-2 text-sm text-gray-600"
                        }, [
                          createVNode(_component_UIcon, {
                            name: feature.included ? "ph:check-circle-fill" : "ph:x-circle-fill",
                            class: ["w-5 h-5 shrink-0", feature.included ? "text-blue-500" : "text-gray-300"]
                          }, null, 8, ["name", "class"]),
                          createVNode("span", {
                            class: feature.included ? "" : "text-gray-400 line-through"
                          }, toDisplayString(feature.name), 3)
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("ul", {
                      key: 1,
                      class: "space-y-3"
                    }, [
                      createVNode("li", { class: "flex items-start gap-2 text-sm text-gray-600" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:check-circle-fill",
                          class: "w-5 h-5 text-blue-500 shrink-0"
                        }),
                        createVNode("span", null, "\u8D2D\u4E70\u540E\u7ACB\u5373\u5F00\u901A")
                      ])
                    ]))
                  ]),
                  createVNode("div", { class: "mt-8 pt-6 border-t border-gray-100 flex items-end justify-between relative z-10" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs text-gray-500 font-medium uppercase tracking-wider mb-1" }, "\u4EF7\u683C"),
                      createVNode("div", { class: "flex items-baseline gap-1" }, [
                        createVNode("span", { class: "text-lg font-bold text-gray-400" }, "$"),
                        createVNode("span", { class: "text-4xl font-extrabold text-gray-900" }, toDisplayString(item.price), 1)
                      ])
                    ]),
                    createVNode("div", { class: "w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "w-5 h-5"
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:package-duotone",
          class: "w-16 h-16 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl font-bold text-gray-900 mb-2">\u6682\u65E0\u53EF\u7528\u4EA7\u54C1</h3><p class="text-gray-500">\u7A0D\u540E\u518D\u6765\u770B\u770B\uFF0C\u6211\u4EEC\u4F1A\u6301\u7EED\u4E0A\u65B0\u3002</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
