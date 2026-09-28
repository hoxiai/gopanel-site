import { B as useRoute, z as useLocaleRouter, bg as useLocalizedProduct, P as useLocaleCurrency, w as useFetch, bh as usePageResourceState, bi as useProductJsonLd, bf as useSeoMeta, b4 as PageRequestError, I as __nuxt_component_3$1, _ as _sfc_main$I, k as _sfc_main$z, bj as __nuxt_component_4$1, i as _sfc_main$D } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { getLocalizedProduct } = useLocalizedProduct();
    const { convertAmount, formatAmount } = useLocaleCurrency();
    const slugParam = route.params.slug;
    const slug = Array.isArray(slugParam) ? String(slugParam[1] || slugParam[0] || "") : String(slugParam || "");
    const { data, status, error, refresh } = useFetch(
      `/api/products/${slug}`,
      "$Ato-NJksPI"
      /* nuxt-injected */
    );
    const { pending, requestFailed } = usePageResourceState(data, status, error);
    const product = computed(() => getLocalizedProduct(data.value));
    useProductJsonLd("panel-product", product);
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
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = product.value) == null ? void 0 : _a.name) ? `${product.value.name} - GoPanel` : "GoPanel";
      },
      description: () => {
        var _a;
        return String(((_a = product.value) == null ? void 0 : _a.description) || "");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_PageRequestError = PageRequestError;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$I;
      const _component_UBadge = _sfc_main$z;
      const _component_PaymentModal = __nuxt_component_4$1;
      const _component_UButton = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-16 relative" }, _attrs))}><div class="max-w-6xl mx-auto px-6">`);
      if (unref(pending)) {
        _push(`<div class="animate-pulse flex flex-col lg:flex-row gap-8"><div class="lg:col-span-2 flex-1 space-y-6"><div class="h-8 w-32 bg-gray-200 rounded"></div><div class="h-64 bg-white rounded-3xl border border-gray-100"></div><div class="h-48 bg-white rounded-3xl border border-gray-100"></div></div><div class="lg:col-span-1 w-full lg:w-96 shrink-0 h-96 bg-white rounded-3xl border border-gray-100"></div></div>`);
      } else if (unref(requestFailed)) {
        _push(ssrRenderComponent(_component_PageRequestError, { retry: unref(refresh) }, null, _parent));
      } else if (unref(product)) {
        _push(`<div class="flex flex-col lg:flex-row gap-10"><div class="flex-1 space-y-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/products"),
          class: "inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` \u8FD4\u56DE\u4EA7\u54C1\u5217\u8868 `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left-bold",
                  class: "w-4 h-4"
                }),
                createTextVNode(" \u8FD4\u56DE\u4EA7\u54C1\u5217\u8868 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><div class="flex items-start justify-between gap-4"><h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">${ssrInterpolate(unref(product).name)}</h1><div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: getProductIcon(unref(product).type),
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</div></div><div class="mt-6 flex gap-3">`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: getProductBadgeColor(unref(product).type),
          variant: "subtle",
          size: "md",
          class: "uppercase tracking-widest font-bold px-3 py-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(product).type.replace("_", " "))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(product).type.replace("_", " ")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        if ((_b = (_a = unref(product).metaData) == null ? void 0 : _a.plan_features) == null ? void 0 : _b.length) {
          _push(`<div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"><h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:list-checks-duotone",
            class: "w-6 h-6 text-blue-500"
          }, null, _parent));
          _push(` \u529F\u80FD\u7279\u6027 </h2><ul class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
          ssrRenderList(unref(product).metaData.plan_features, (feature, index) => {
            _push(`<li class="flex items-start gap-3">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: feature.included ? "ph:check-circle-fill" : "ph:x-circle-fill",
              class: ["w-5 h-5 shrink-0", feature.included ? "text-blue-500" : "text-gray-300"]
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([feature.included ? "text-gray-700 font-medium" : "text-gray-400 line-through", "text-sm"])}">${ssrInterpolate(feature.name)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).content) {
          _push(`<div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"><h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:info-duotone",
            class: "w-6 h-6 text-blue-500"
          }, null, _parent));
          _push(` \u8BE6\u60C5\u4ECB\u7ECD </h2><div class="text-gray-600 leading-relaxed whitespace-pre-wrap prose prose-blue max-w-none">${ssrInterpolate(unref(product).content)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full lg:w-96 shrink-0"><div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl shadow-gray-200/50 sticky top-24"><div class="text-center mb-8"><p class="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">\u4EF7\u683C</p><div class="flex items-baseline justify-center gap-1"><span class="text-5xl font-extrabold text-gray-900">${ssrInterpolate(unref(formatAmount)(unref(product).price))}</span></div>`);
        if (unref(product).type === "subscription") {
          _push(`<p class="text-xs text-gray-500 mt-3 font-medium">${ssrInterpolate(((_c = unref(product).metaData) == null ? void 0 : _c.interval) === "year" ? "\u6309\u5E74\u8BA1\u8D39" : "\u6309\u6708\u8BA1\u8D39")}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-4 mb-8 pt-6 border-t border-gray-100"><div class="flex items-center gap-3 text-sm font-medium text-gray-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lightning-duotone",
          class: "w-5 h-5 text-blue-500"
        }, null, _parent));
        _push(` \u5373\u65F6\u5F00\u901A </div><div class="flex items-center gap-3 text-sm font-medium text-gray-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:shield-check-duotone",
          class: "w-5 h-5 text-emerald-500"
        }, null, _parent));
        _push(` \u5B89\u5168\u652F\u4ED8 </div></div>`);
        _push(ssrRenderComponent(_component_PaymentModal, {
          "product-id": unref(product).id,
          quantity: 1,
          amount: unref(convertAmount)(unref(product).price)
        }, {
          trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                onClick: open,
                loading,
                block: "",
                size: "xl",
                class: "rounded-xl font-bold text-lg py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7ACB\u5373\u8D2D\u4E70 `);
                  } else {
                    return [
                      createTextVNode(" \u7ACB\u5373\u8D2D\u4E70 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  onClick: open,
                  loading,
                  block: "",
                  size: "xl",
                  class: "rounded-xl font-bold text-lg py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u7ACB\u5373\u8D2D\u4E70 ")
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1 font-medium">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lock-key-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` SSL \u52A0\u5BC6\u7ED3\u7B97 </p></div></div></div>`);
      } else {
        _push(`<div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:magnifying-glass-duotone",
          class: "w-16 h-16 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl font-bold text-gray-900 mb-2">\u672A\u627E\u5230\u8BE5\u4EA7\u54C1</h3><p class="text-gray-500 mb-6">\u8BF7\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868\u67E5\u770B\u5176\u4ED6\u5185\u5BB9\u3002</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/products"),
          variant: "soft"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868`);
            } else {
              return [
                createTextVNode("\u8FD4\u56DE\u4EA7\u54C1\u5217\u8868")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
