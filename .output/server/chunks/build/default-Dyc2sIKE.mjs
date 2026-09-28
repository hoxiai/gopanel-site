import { d8 as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './EmailVerificationBanner-CeVSh4Zc.mjs';
import { r as useSettings, z as useLocaleRouter, bl as useCustomerAuth, p as useRouter, I as __nuxt_component_3$1, _ as _sfc_main$I, bm as __nuxt_component_2$2 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("logo.amu2WdSZ.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const { session } = useCustomerAuth();
    useRouter();
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    computed(() => {
      var _a;
      return Boolean((_a = session.value) == null ? void 0 : _a.admin);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$I;
      const _component_ClientOnly = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-blue-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_EmailVerificationBanner, null, null, _parent));
      _push(`<div>${(_a = unref(getSetting)("site_notice")) != null ? _a : ""}</div><header class="${ssrRenderClass([{ "shadow-sm": unref(isScrolled) }, "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300"])}"><nav class="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-12 flex items-center justify-start"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="GoPanel Logo" class="h-full object-contain object-left"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "h-12 flex items-center justify-start" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "GoPanel Logo",
                  class: "h-full object-contain object-left"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-600">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "hover:text-blue-600 transition-colors py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9996\u9875`);
          } else {
            return [
              createTextVNode("\u9996\u9875")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/features"),
        class: "hover:text-blue-600 transition-colors py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6838\u5FC3\u4F18\u52BF`);
          } else {
            return [
              createTextVNode("\u6838\u5FC3\u4F18\u52BF")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/products"),
        class: "hover:text-blue-600 transition-colors py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4EA7\u54C1\u4E0E\u6388\u6743`);
          } else {
            return [
              createTextVNode("\u4EA7\u54C1\u4E0E\u6388\u6743")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/docs"),
        class: "hover:text-blue-600 transition-colors py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4F7F\u7528\u6587\u6863`);
          } else {
            return [
              createTextVNode("\u4F7F\u7528\u6587\u6863")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4"><a href="https://github.com/hoxiai/gopanel" target="_blank" class="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:github-logo-bold",
        class: "w-8 h-8"
      }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button class="lg:hidden p-2 text-gray-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(isMobileMenuOpen) ? "ph:x-bold" : "ph:list-bold",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div></nav><div class="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-6 shadow-xl absolute w-full z-50" style="${ssrRenderStyle(unref(isMobileMenuOpen) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "block font-medium text-lg text-gray-800",
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9996\u9875`);
          } else {
            return [
              createTextVNode("\u9996\u9875")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/features"),
        class: "block font-medium text-lg text-gray-800",
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u529F\u80FD`);
          } else {
            return [
              createTextVNode("\u529F\u80FD")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/products"),
        class: "block font-medium text-lg text-gray-800",
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4EA7\u54C1`);
          } else {
            return [
              createTextVNode("\u4EA7\u54C1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/docs"),
        class: "block font-medium text-lg text-gray-800",
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6587\u6863`);
          } else {
            return [
              createTextVNode("\u6587\u6863")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="flex-grow relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-gray-100 bg-white mt-auto pt-16 pb-8"><div class="max-w-[1400px] mx-auto px-6 lg:px-10"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="md:col-span-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center gap-3 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-8 flex items-center justify-start opacity-80"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="GoPanel" class="h-full object-contain object-left"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "h-8 flex items-center justify-start opacity-80" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "GoPanel",
                  class: "h-full object-contain object-left"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-500 text-sm leading-relaxed max-w-sm"> \u73B0\u4EE3\u5316\u3001\u5168\u5E73\u53F0\u7684 AI \u667A\u80FD\u8FD0\u7EF4\u4E0E\u7814\u53D1\u9762\u677F\u3002\u4E0D\u4EC5\u9650\u4E8E Linux\uFF0C\u66F4\u6DF1\u5EA6\u96C6\u6210\u81EA\u52A8\u5316 CI/CD \u6D41\u6C34\u7EBF\u4E0E\u56E2\u961F\u5F00\u53D1\u534F\u4F5C\uFF0C\u5E26\u7ED9\u60A8\u6781\u81F4\u7684\u7814\u53D1\u8FD0\u7EF4\u5168\u94FE\u8DEF\u4F53\u9A8C\u3002 </p></div><div><h3 class="font-bold text-gray-900 mb-4">\u4EA7\u54C1</h3><ul class="space-y-3 text-sm text-gray-500"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/licenses"),
        class: "hover:text-blue-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4E13\u4E1A\u7248\u6388\u6743`);
          } else {
            return [
              createTextVNode("\u4E13\u4E1A\u7248\u6388\u6743")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/products"),
        class: "hover:text-blue-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5E94\u7528\u5546\u5E97`);
          } else {
            return [
              createTextVNode("\u5E94\u7528\u5546\u5E97")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/changelog"),
        class: "hover:text-blue-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u66F4\u65B0\u65E5\u5FD7`);
          } else {
            return [
              createTextVNode("\u66F4\u65B0\u65E5\u5FD7")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="font-bold text-gray-900 mb-4">\u8D44\u6E90</h3><ul class="space-y-3 text-sm text-gray-500"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/docs"),
        class: "hover:text-blue-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5728\u7EBF\u6587\u6863`);
          } else {
            return [
              createTextVNode("\u5728\u7EBF\u6587\u6863")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="https://github.com/hoxiai/gopanel" class="hover:text-blue-600 transition">GitHub\u4ED3\u5E93</a></li><li><a href="https://github.com/hoxiai/gopanel/issues" class="hover:text-blue-600 transition">\u95EE\u9898\u53CD\u9988</a></li></ul></div></div><div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(getSetting)("site_name") || "APay ")}</p><div class="flex items-center gap-6"><a href="#" class="hover:text-gray-900 transition">\u9690\u79C1\u653F\u7B56</a><a href="#" class="hover:text-gray-900 transition">\u670D\u52A1\u6761\u6B3E</a></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
