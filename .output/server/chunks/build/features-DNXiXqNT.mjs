import { D as useLocaleRouter, v as useSettings, bc as useSeoMeta, l as _sfc_main$B, b as _sfc_main$G } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    useSettings();
    useSeoMeta({
      title: `\u529F\u80FD\u7279\u6027 - GoPanel`,
      description: "GoPanel \u7684\u529F\u80FD\u7279\u6027\u4E0E\u6838\u5FC3\u4F18\u52BF\uFF0C\u8986\u76D6\u5168\u94FE\u8DEF\u7684\u80FD\u529B\u6808\u3002"
    });
    const capabilityCards = [
      {
        title: "\u4E00\u952E\u5E94\u7528\u4E0E\u5BB9\u5668\u7BA1\u7406",
        description: "\u7EDF\u4E00\u7BA1\u7406\u5E94\u7528\u3001\u955C\u50CF\u4E0E\u5BB9\u5668\u751F\u547D\u5468\u671F\uFF0C\u90E8\u7F72\u4E0E\u5347\u7EA7\u66F4\u53EF\u63A7\uFF0C\u652F\u6301\u5E38\u89C1\u670D\u52A1\u4E0E\u7EC4\u4EF6\u7684\u5FEB\u901F\u4EA4\u4ED8\u3002",
        icon: "ph:cube-duotone",
        iconClass: "text-indigo-600",
        tags: ["Docker", "\u955C\u50CF\u4ED3\u5E93", "\u7F16\u6392", "\u4E00\u952E\u90E8\u7F72"]
      },
      {
        title: "\u7F51\u7AD9\u4E0E\u7F51\u5173\u80FD\u529B",
        description: "\u7AD9\u70B9\u7BA1\u7406\u3001\u53CD\u5411\u4EE3\u7406\u3001HTTPS \u4E0E\u57FA\u7840\u5B89\u5168\u80FD\u529B\u4E00\u4F53\u5316\uFF0C\u9762\u5411\u751F\u4EA7\u73AF\u5883\u7684\u914D\u7F6E\u8DEF\u5F84\u66F4\u6E05\u6670\u3001\u66F4\u53EF\u9760\u3002",
        icon: "ph:globe-simple-duotone",
        iconClass: "text-blue-600",
        tags: ["\u53CD\u5411\u4EE3\u7406", "HTTPS", "\u57DF\u540D", "\u8BBF\u95EE\u63A7\u5236"]
      },
      {
        title: "\u8BC1\u4E66\u81EA\u52A8\u5316\u4E0E\u5B89\u5168\u57FA\u7EBF",
        description: "\u81EA\u52A8\u7B7E\u53D1\u4E0E\u7EED\u671F\u8BC1\u4E66\uFF0C\u7ED3\u5408\u5B89\u5168\u7B56\u7565\u4E0E\u5BA1\u8BA1\u80FD\u529B\uFF0C\u964D\u4F4E\u8BEF\u64CD\u4F5C\u4E0E\u5B89\u5168\u98CE\u9669\u3002",
        icon: "ph:shield-check-duotone",
        iconClass: "text-emerald-600",
        tags: ["\u81EA\u52A8\u8BC1\u4E66", "\u7EED\u671F", "\u5B89\u5168", "\u5BA1\u8BA1"]
      },
      {
        title: "\u6570\u636E\u5E93\u4E0E\u5907\u4EFD\u6062\u590D",
        description: "\u652F\u6301\u5E38\u89C1\u6570\u636E\u5E93\u5B9E\u4F8B\u7BA1\u7406\u3001\u7528\u6237\u6743\u9650\u4E0E\u5907\u4EFD\u7B56\u7565\uFF0C\u63D0\u4F9B\u53EF\u6062\u590D\u3001\u53EF\u9A8C\u8BC1\u7684\u4FDD\u5E95\u80FD\u529B\u3002",
        icon: "ph:database-duotone",
        iconClass: "text-purple-600",
        tags: ["MySQL", "PostgreSQL", "\u5907\u4EFD", "\u6062\u590D"]
      },
      {
        title: "\u6D41\u6C34\u7EBF\u4E0E\u53D1\u5E03",
        description: "\u628A\u6784\u5EFA\u3001\u6D4B\u8BD5\u4E0E\u90E8\u7F72\u4E32\u6210\u4E00\u6761\u53EF\u590D\u7528\u7684\u6D41\u7A0B\uFF0C\u9762\u5411\u56E2\u961F\u4EA4\u4ED8\u7A33\u5B9A\u4E00\u81F4\u7684\u53D1\u5E03\u4F53\u9A8C\u3002",
        icon: "ph:git-merge-duotone",
        iconClass: "text-amber-600",
        tags: ["CI/CD", "\u6784\u5EFA", "\u53D1\u5E03", "\u56DE\u6EDA"]
      },
      {
        title: "AI \u52A9\u624B\u4E0E\u8FD0\u7EF4\u81EA\u52A8\u5316",
        description: "\u628A\u77E5\u8BC6\u4E0E\u52A8\u4F5C\u5C01\u88C5\u6210\u53EF\u5BF9\u8BDD\u7684\u6D41\u7A0B\uFF1A\u4ECE\u8BCA\u65AD\u5230\u6267\u884C\uFF0C\u4ECE\u89E3\u91CA\u5230\u590D\u76D8\uFF0C\u8BA9\u590D\u6742\u8FD0\u7EF4\u66F4\u53EF\u63A7\u3002",
        icon: "ph:robot-duotone",
        iconClass: "text-rose-600",
        tags: ["\u5BF9\u8BDD\u5F0F\u64CD\u4F5C", "\u8BCA\u65AD", "\u5EFA\u8BAE", "\u81EA\u52A8\u5316"]
      }
    ];
    const handleToGithub = () => {
      (void 0).open("https://github.com/hoxiai/gopanel", "_blank");
    };
    const navigateToDemo = () => {
      (void 0).open("https://demo.gopanel.run", "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden selection:bg-blue-100" }, _attrs))}><div class="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#3b82f6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div></div><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 lg:pb-24"><div class="mx-auto max-w-5xl text-center"><div class="mb-10 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2 cursor-pointer"><span class="flex h-2 w-2 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> \u4E3A\u4EC0\u4E48\u9009\u62E9 GoPanel </div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-[1.1]"> \u9762\u5411\u73B0\u4EE3\u670D\u52A1\u5668\u4E0E\u7814\u53D1\u534F\u4F5C\u7684 <span class="text-blue-600">\u5168\u5E73\u53F0</span> \u9762\u677F </h1><p class="mt-6 text-xl leading-8 text-gray-500 mb-12 max-w-4xl mx-auto"> GoPanel\u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u7684\u670D\u52A1\u5668\u9762\u677F\uFF0C\u4E13\u6CE8\u201C\u5FEB\u901F\u90E8\u7F72\u3001\u6781\u7B80\u7BA1\u7406\u3001\u4F53\u9A8C\u6D41\u7545\u201D\u3002\u4E00\u5957\u754C\u9762\u8986\u76D6 Linux\u3001Windows\u3001macOS\uFF0C\u7EDF\u4E00\u7BA1\u7406\u7F51\u7AD9\u3001\u5BB9\u5668\u3001\u6570\u636E\u5E93\u3001\u8BC1\u4E66\u4E0E\u81EA\u52A8\u5316\u6D41\u6C34\u7EBF\uFF0C\u5E76\u7528 AI \u628A\u65E5\u5E38\u8FD0\u7EF4\u53D8\u6210\u53EF\u5BF9\u8BDD\u3001\u53EF\u590D\u7528\u7684\u6D41\u7A0B\u3002 </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/"),
        size: "xl",
        class: "w-full sm:w-auto rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7ACB\u5373\u5F00\u59CB `);
          } else {
            return [
              createTextVNode(" \u7ACB\u5373\u5F00\u59CB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: handleToGithub,
        variant: "outline",
        size: "xl",
        class: "w-full sm:w-auto text-gray-700 bg-white hover:bg-gray-50 ring-1 ring-gray-200 rounded-full px-10 py-4 font-semibold text-lg transition-all",
        icon: "ph:github-logo-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` GitHub `);
          } else {
            return [
              createTextVNode(" GitHub ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="bg-gray-50 py-20 sm:py-28 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">\u6838\u5FC3\u4F18\u52BF</h2><p class="text-lg text-gray-600">\u66F4\u5FEB\u4E0A\u624B\u3001\u66F4\u5C11\u5FC3\u667A\u8D1F\u62C5\u3001\u66F4\u5F3A\u534F\u4F5C\u80FD\u529B\uFF0C\u8BA9\u9762\u677F\u6210\u4E3A\u56E2\u961F\u7684\u7814\u53D1\u4E0E\u8FD0\u7EF4\u4E2D\u67A2\u3002</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-duotone",
        class: "w-6 h-6 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">\u8DE8\u5E73\u53F0\u4E00\u81F4\u4F53\u9A8C</div></div><div class="text-gray-600 leading-relaxed"> \u4E00\u5957\u9762\u677F\u8986\u76D6\u591A\u7CFB\u7EDF\u8282\u70B9\uFF0C\u7EDF\u4E00\u5165\u53E3\u3001\u7EDF\u4E00\u6743\u9650\u3001\u7EDF\u4E00\u5BA1\u8BA1\u3002\u65E0\u8BBA\u672C\u5730\u5F00\u53D1\u673A\u8FD8\u662F\u751F\u4EA7\u96C6\u7FA4\uFF0C\u64CD\u4F5C\u8DEF\u5F84\u4FDD\u6301\u4E00\u81F4\u3002 </div></div><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:rocket-launch-duotone",
        class: "w-6 h-6 text-emerald-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">\u5FEB\u901F\u90E8\u7F72\u4E0E\u8FC1\u79FB</div></div><div class="text-gray-600 leading-relaxed"> \u5E94\u7528\u4E00\u952E\u5B89\u88C5\u3001\u73AF\u5883\u4E00\u952E\u521D\u59CB\u5316\u3001\u914D\u7F6E\u53EF\u590D\u7528\u3002\u652F\u6301\u5E38\u89C1 Web \u670D\u52A1\u4E0E\u5BB9\u5668\u5316\u90E8\u7F72\uFF0C\u5FEB\u901F\u4ECE\u201C\u7A7A\u673A\u5668\u201D\u5230\u201C\u53EF\u7528\u670D\u52A1\u201D\u3002 </div></div><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "w-6 h-6 text-purple-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">\u56E2\u961F\u534F\u4F5C\u4E0E\u6743\u9650</div></div><div class="text-gray-600 leading-relaxed"> \u4E3A\u56E2\u961F\u800C\u751F\u7684\u6743\u9650\u4E0E\u534F\u4F5C\u80FD\u529B\uFF1A\u6700\u5C0F\u6743\u9650\u5206\u914D\u3001\u64CD\u4F5C\u8BB0\u5F55\u53EF\u8FFD\u6EAF\u3001\u5173\u952E\u914D\u7F6E\u53EF\u63A7\u53EF\u56DE\u6EDA\uFF0C\u964D\u4F4E\u591A\u4EBA\u534F\u4F5C\u7684\u98CE\u9669\u4E0E\u6210\u672C\u3002 </div></div></div></div></section><section class="py-24 sm:py-32 max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">\u8986\u76D6\u5168\u94FE\u8DEF\u7684\u80FD\u529B\u6808</h2><p class="text-lg text-gray-600">\u4ECE\u57FA\u7840\u8FD0\u7EF4\u5230\u5E94\u7528\u4EA4\u4ED8\uFF0C\u518D\u5230\u667A\u80FD\u5316\u534F\u4F5C\uFF0C\u8BA9\u6BCF\u4E00\u6B65\u90FD\u6709\u201C\u9762\u677F\u7EA7\u201D\u7684\u786E\u5B9A\u6027\u3002</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><!--[-->`);
      ssrRenderList(capabilityCards, (item) => {
        _push(`<div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: ["w-8 h-8", item.iconClass]
        }, null, _parent));
        _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(item.title)}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(item.description)}</p><div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(item.tags, (tag) => {
          _push(`<span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-gray-100 text-gray-600">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section><section class="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-gray-100"><div class="absolute -left-10 top-24 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div><div class="absolute -right-10 bottom-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl"></div><div class="relative max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"> \u628A\u201C\u90E8\u7F72\u3001\u8FD0\u7EF4\u3001\u534F\u4F5C\u201D\u53D8\u6210\u4E00\u4E2A\u5165\u53E3 </h2><p class="text-lg text-gray-600 mb-12"> \u4ECE\u7B2C\u4E00\u53F0\u673A\u5668\u5230\u8DE8\u5E73\u53F0\u96C6\u7FA4\uFF0C\u4ECE\u5355\u4EBA\u5230\u56E2\u961F\u534F\u4F5C\uFF0CGoPanel \u8BA9\u6240\u6709\u5173\u952E\u52A8\u4F5C\u90FD\u6709\u6E05\u6670\u8DEF\u5F84\u4E0E\u53EF\u9760\u7ED3\u679C\u3002 </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/"),
        size: "xl",
        class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7ACB\u5373\u5B89\u88C5 `);
          } else {
            return [
              createTextVNode(" \u7ACB\u5373\u5B89\u88C5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: navigateToDemo,
        size: "xl",
        class: "rounded-full px-10 py-4 border border-blue-600 hover:bg-blue-700 text-blue-600 shadow-xl shadow-blue-600/20 bg-white hover:text-white hover:-translate-y-0.5 transition-all font-bold text-lg w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5728\u7EBF\u4F53\u9A8C `);
          } else {
            return [
              createTextVNode(" \u5728\u7EBF\u4F53\u9A8C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
