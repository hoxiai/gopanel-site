import { D as useLocaleRouter, bc as useSeoMeta, l as _sfc_main$B, b as _sfc_main$G } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const installCommand = "curl -sSL https://gopanel.run | bash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    useSeoMeta({
      title: "\u4F7F\u7528\u5E2E\u52A9 - GoPanel",
      description: "GoPanel \u5FEB\u901F\u5F00\u59CB\u4E0E\u5E38\u89C1\u529F\u80FD\u4F7F\u7528\u6307\u5357\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u5173\u4E8E GoPanel \u7684\u4F7F\u7528\u8BF4\u660E\u3002"
    });
    const copied = ref(false);
    const openDemo = () => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2"> \u4F7F\u7528\u5E2E\u52A9 </div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]"> GoPanel \u7B80\u660E\u4F7F\u7528\u6307\u5357 </h1><p class="text-lg text-gray-600 leading-relaxed"> \u9762\u5411\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u7684\u5FEB\u901F\u4E0A\u624B\uFF1A\u5B89\u88C5\u3001\u8BBF\u95EE\u3001\u7F51\u7AD9\u4E0E\u8BC1\u4E66\u3001\u5BB9\u5668\u4E0E\u6570\u636E\u5E93\u3001\u6D41\u6C34\u7EBF\u4E0E\u534F\u4F5C\u3001AI \u52A9\u624B\u3001\u5E38\u89C1\u95EE\u9898\u6392\u67E5\u3002 </p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><aside class="lg:col-span-4"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><div class="text-lg font-bold text-gray-900 mb-4">\u76EE\u5F55</div><nav class="space-y-2 text-sm"><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#quickstart">\u5FEB\u901F\u5F00\u59CB</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#first-login">\u9996\u6B21\u767B\u5F55\u4E0E\u5B89\u5168</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#common">\u5E38\u7528\u529F\u80FD</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#ai">AI \u52A9\u624B</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#team">\u56E2\u961F\u534F\u4F5C</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#troubleshoot">\u5E38\u89C1\u95EE\u9898</a></nav><div class="mt-8 pt-6 border-t border-gray-100"><div class="text-sm font-bold text-gray-900 mb-3">\u5FEB\u6377\u5165\u53E3</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/licenses"),
        size: "lg",
        class: "rounded-xl bg-white text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all font-bold justify-center"
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
      _push(ssrRenderComponent(_component_UButton, {
        onClick: openDemo,
        size: "lg",
        class: "rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all font-bold justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5728\u7EBF\u6F14\u793A `);
          } else {
            return [
              createTextVNode(" \u5728\u7EBF\u6F14\u793A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></aside><main class="lg:col-span-8 space-y-10"><div id="quickstart" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u5FEB\u901F\u5F00\u59CB</h2><p class="text-gray-600 mb-8"> \u76EE\u6807\uFF1A\u4ECE\u4E00\u53F0\u65B0\u673A\u5668\u5F00\u59CB\uFF0C\u5728\u51E0\u5206\u949F\u5185\u5B89\u88C5\u5E76\u6253\u5F00 GoPanel\u3002 </p><div class="space-y-8"><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">1</div></div><div><div class="text-lg font-bold text-gray-900 mb-2">\u51C6\u5907\u670D\u52A1\u5668</div><div class="text-gray-600 leading-relaxed"> \u63A8\u8350\u4F7F\u7528\u5177\u5907\u516C\u7F51\u8BBF\u95EE\u80FD\u529B\u7684\u670D\u52A1\u5668\u6216\u865A\u62DF\u673A\uFF1B\u786E\u4FDD\u5F00\u653E\u9762\u677F\u7AEF\u53E3\uFF08\u5177\u4F53\u7AEF\u53E3\u4EE5\u5B89\u88C5\u8F93\u51FA\u4E3A\u51C6\uFF09\uFF0C\u5E76\u51C6\u5907\u597D\u53EF\u767B\u5F55\u7684\u7CFB\u7EDF\u8D26\u6237\uFF08Linux \u901A\u5E38\u4E3A root \u6216\u5177\u5907 sudo \u6743\u9650\u7684\u7528\u6237\uFF09\u3002 </div></div></div><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">2</div></div><div class="w-full"><div class="text-lg font-bold text-gray-900 mb-2">\u8FD0\u884C\u5B89\u88C5\u547D\u4EE4</div><div class="text-gray-600 leading-relaxed mb-4"> \u5728\u670D\u52A1\u5668\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\u5B89\u88C5\u4E0E\u521D\u59CB\u5316\uFF1A </div><div class="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden"><div class="bg-[#161B22] px-4 py-3 flex items-center gap-2 border-b border-gray-800"><div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div class="w-3 h-3 rounded-full bg-[#27C93F]"></div><span class="ml-4 text-xs text-gray-500 font-mono">bash</span><div class="ml-auto"><button type="button" class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:copy-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(copied) ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div class="p-6 font-mono text-sm sm:text-base text-gray-200"><span class="text-green-400 font-bold">$</span> ${ssrInterpolate(installCommand)}</div></div><div class="mt-3 text-sm text-gray-500 leading-relaxed"> \u5B89\u88C5\u8FC7\u7A0B\u4F1A\u8F93\u51FA\u8BBF\u95EE\u5730\u5740\u4E0E\u521D\u59CB\u8D26\u53F7\u4FE1\u606F\u3002\u5EFA\u8BAE\u4FDD\u7559\u65E5\u5FD7\u6216\u622A\u56FE\u4FDD\u5B58\u3002 </div></div></div><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">3</div></div><div><div class="text-lg font-bold text-gray-900 mb-2">\u6253\u5F00\u9762\u677F</div><div class="text-gray-600 leading-relaxed"> \u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u5B89\u88C5\u8F93\u51FA\u7684\u5730\u5740\uFF0C\u5B8C\u6210\u9996\u6B21\u767B\u5F55\u540E\u5373\u53EF\u5F00\u59CB\u7BA1\u7406\u7F51\u7AD9\u3001\u8BC1\u4E66\u3001\u5BB9\u5668\u3001\u6570\u636E\u5E93\u3001\u6D41\u6C34\u7EBF\u7B49\u529F\u80FD\u3002 </div></div></div></div></div><div id="first-login" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u9996\u6B21\u767B\u5F55\u4E0E\u5B89\u5168\u5EFA\u8BAE</h2><p class="text-gray-600 mb-8"> \u5148\u628A\u5B89\u5168\u5E95\u7EBF\u6253\u597D\uFF0C\u540E\u9762\u4F1A\u7701\u6389\u5927\u91CF\u6392\u969C\u6210\u672C\u3002 </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:key-duotone",
        class: "w-6 h-6 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">\u4FEE\u6539\u521D\u59CB\u5BC6\u7801</div></div><div class="text-gray-600 leading-relaxed"> \u9996\u6B21\u767B\u5F55\u540E\u7ACB\u5373\u4FEE\u6539\u7BA1\u7406\u5458\u5BC6\u7801\uFF0C\u5E76\u786E\u4FDD\u4F7F\u7528\u5F3A\u5BC6\u7801\uFF08\u957F\u5EA6\u3001\u590D\u6742\u5EA6\u3001\u552F\u4E00\u6027\uFF09\u3002 </div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "w-6 h-6 text-emerald-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">\u5F00\u542F HTTPS</div></div><div class="text-gray-600 leading-relaxed"> \u63A8\u8350\u4E3A\u9762\u677F\u5165\u53E3\u7ED1\u5B9A\u57DF\u540D\u5E76\u5F00\u542F HTTPS\uFF0C\u907F\u514D\u660E\u6587\u767B\u5F55\u4E0E\u4F1A\u8BDD\u52AB\u6301\u98CE\u9669\u3002 </div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "w-6 h-6 text-purple-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">\u6700\u5C0F\u6743\u9650\u534F\u4F5C</div></div><div class="text-gray-600 leading-relaxed"> \u56E2\u961F\u591A\u4EBA\u4F7F\u7528\u65F6\uFF0C\u4E3A\u6BCF\u4F4D\u6210\u5458\u521B\u5EFA\u72EC\u7ACB\u8D26\u53F7\u5E76\u5206\u914D\u6700\u5C0F\u6743\u9650\uFF0C\u907F\u514D\u5171\u4EAB\u7BA1\u7406\u5458\u8D26\u53F7\u3002 </div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:clock-counter-clockwise-duotone",
        class: "w-6 h-6 text-amber-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">\u914D\u7F6E\u5907\u4EFD\u7B56\u7565</div></div><div class="text-gray-600 leading-relaxed"> \u5BF9\u5173\u952E\u914D\u7F6E\u4E0E\u6570\u636E\u5E93\u5EFA\u7ACB\u5B9A\u671F\u5907\u4EFD\u4E0E\u4FDD\u7559\u7B56\u7565\uFF0C\u91CD\u5927\u53D8\u66F4\u524D\u624B\u52A8\u505A\u4E00\u6B21\u5FEB\u7167\u3002 </div></div></div></div><div id="common" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u5E38\u7528\u529F\u80FD\uFF08\u600E\u4E48\u7528\u66F4\u987A\uFF09</h2><p class="text-gray-600 mb-8"> \u4E0B\u5217\u662F\u6700\u5178\u578B\u7684\u4F7F\u7528\u8DEF\u5F84\uFF0C\u9002\u5408\u7B2C\u4E00\u6B21\u4E0A\u624B\u6309\u6B65\u9AA4\u7167\u505A\u3002 </p><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u7F51\u7AD9\u4E0E\u57DF\u540D\uFF1A\u4ECE 0 \u5230\u4E0A\u7EBF</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>1) \u6DFB\u52A0\u7AD9\u70B9\uFF1A\u9009\u62E9\u57DF\u540D\u4E0E\u7AD9\u70B9\u76EE\u5F55\u6216\u5E94\u7528\u90E8\u7F72\u65B9\u5F0F\u3002</p><p>2) \u914D\u7F6E\u53CD\u5411\u4EE3\u7406\uFF1A\u5C06\u57DF\u540D\u6307\u5411\u4F60\u7684\u5E94\u7528\u7AEF\u53E3\u6216\u5BB9\u5668\u670D\u52A1\u3002</p><p>3) \u5F00\u542F HTTPS\uFF1A\u7533\u8BF7\u8BC1\u4E66\u5E76\u914D\u7F6E\u81EA\u52A8\u7EED\u671F\u3002</p><p>4) \u9A8C\u8BC1\u4E0A\u7EBF\uFF1A\u68C0\u67E5 DNS\u3001\u7AEF\u53E3\u3001\u8BC1\u4E66\u94FE\u4E0E\u8BBF\u95EE\u65E5\u5FD7\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">SSL \u8BC1\u4E66\uFF1A\u7533\u8BF7\u4E0E\u81EA\u52A8\u7EED\u7B7E</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u786E\u4FDD\u8BC1\u4E66\u7533\u8BF7\u524D\u57DF\u540D\u89E3\u6790\u5DF2\u751F\u6548\uFF0C\u4E14\u9A8C\u8BC1\u65B9\u5F0F\uFF08HTTP/DNS\uFF09\u53EF\u901A\u8FC7\u3002</p><p>\u5EFA\u8BAE\uFF1A\u4E3A\u5173\u952E\u4E1A\u52A1\u57DF\u540D\u542F\u7528\u81EA\u52A8\u7EED\u7B7E\uFF0C\u5E76\u5173\u6CE8\u7EED\u7B7E\u5931\u8D25\u901A\u77E5\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u5BB9\u5668\u4E0E\u5E94\u7528\uFF1A\u5FEB\u901F\u90E8\u7F72\u5E38\u7528\u670D\u52A1</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u4F18\u5148\u4F7F\u7528\u201C\u5E94\u7528\u5546\u5E97/\u6A21\u677F\u201D\u90E8\u7F72\u6570\u636E\u5E93\u3001\u7F13\u5B58\u3001\u6D88\u606F\u961F\u5217\u7B49\u5E38\u89C1\u7EC4\u4EF6\u3002</p><p>\u90E8\u7F72\u540E\u68C0\u67E5\uFF1A\u7AEF\u53E3\u6620\u5C04\u3001\u6570\u636E\u5377\u6302\u8F7D\u3001\u73AF\u5883\u53D8\u91CF\u3001\u5065\u5EB7\u68C0\u67E5\u4E0E\u65E5\u5FD7\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u6570\u636E\u5E93\uFF1A\u521B\u5EFA\u3001\u6388\u6743\u4E0E\u5907\u4EFD</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\uFF1A\u5355\u72EC\u8D26\u53F7\u3001\u6700\u5C0F\u6743\u9650\u3001\u5B9A\u671F\u5907\u4EFD\u3001\u53EF\u7528\u6027\u76D1\u63A7\u3002</p><p>\u53D8\u66F4\u5EFA\u8BAE\uFF1A\u5148\u5907\u4EFD\u518D\u6539\u7ED3\u6784\uFF0C\u5173\u952E\u64CD\u4F5C\u7559\u5B58\u5BA1\u8BA1\u8BB0\u5F55\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u6D41\u6C34\u7EBF\uFF08CI/CD\uFF09\uFF1A\u628A\u53D1\u5E03\u6D41\u7A0B\u56FA\u5316\u4E0B\u6765</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u63A8\u8350\u6D41\u7A0B\uFF1A\u62C9\u4EE3\u7801 \u2192 \u6784\u5EFA \u2192 \u6D4B\u8BD5 \u2192 \u6253\u5305 \u2192 \u90E8\u7F72 \u2192 \u5065\u5EB7\u68C0\u67E5 \u2192 \u53EF\u9009\u56DE\u6EDA\u3002</p><p>\u628A\u201C\u73AF\u5883\u53D8\u91CF/\u5BC6\u94A5/\u51ED\u8BC1\u201D\u653E\u5230\u5B89\u5168\u914D\u7F6E\u91CC\u7EDF\u4E00\u7BA1\u7406\uFF0C\u4E0D\u8981\u5199\u8FDB\u4ED3\u5E93\u3002</p></div></details></div></div><div id="ai" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">AI \u52A9\u624B\uFF1A\u600E\u4E48\u95EE\u66F4\u6709\u6548</h2><p class="text-gray-600 mb-8"> AI \u7684\u4EF7\u503C\u4E0D\u53EA\u662F\u56DE\u7B54\u95EE\u9898\uFF0C\u66F4\u662F\u628A\u201C\u6392\u969C\u601D\u8DEF + \u53EF\u6267\u884C\u52A8\u4F5C\u201D\u4E32\u8D77\u6765\u3002 </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="text-sm font-bold text-gray-900 mb-3">\u63A8\u8350\u63D0\u95EE\u65B9\u5F0F</div><div class="text-gray-600 leading-relaxed space-y-2 text-sm"><p>\u628A\u76EE\u6807\u3001\u5F53\u524D\u73B0\u8C61\u3001\u5173\u952E\u65E5\u5FD7\u4E09\u4EF6\u4E8B\u8BF4\u6E05\u695A\uFF1A</p><p class="font-mono text-xs bg-white border border-gray-100 rounded-lg p-3 text-gray-700"> \u201C\u6211\u5728\u90E8\u7F72 Nginx \u53CD\u4EE3\u5230 3000 \u7AEF\u53E3\uFF0C\u8BBF\u95EE 502\uFF1B\u8BF7\u6839\u636E\u65E5\u5FD7\u7ED9\u51FA\u6392\u67E5\u987A\u5E8F\uFF0C\u5E76\u544A\u8BC9\u6211\u6BCF\u4E00\u6B65\u8BE5\u770B\u4EC0\u4E48\u3002\u201D </p></div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="text-sm font-bold text-gray-900 mb-3">\u628A\u52A8\u4F5C\u53D8\u6210\u6A21\u677F</div><div class="text-gray-600 leading-relaxed space-y-2 text-sm"><p>\u5EFA\u8BAE\u628A\u5E38\u7528\u6D41\u7A0B\u56FA\u5316\u6210\u56E2\u961F\u6A21\u677F\uFF1A</p><p>\u4F8B\u5982\uFF1A\u8BC1\u4E66\u7EED\u7B7E\u5931\u8D25\u6392\u67E5\u3001\u5BB9\u5668\u5347\u7EA7\u56DE\u6EDA\u3001\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u6F14\u7EC3\u3002</p></div></div></div></div><div id="team" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u56E2\u961F\u534F\u4F5C\uFF1A\u63A8\u8350\u7684\u6700\u5C0F\u95ED\u73AF</h2><p class="text-gray-600 mb-8"> \u4ECE\u201C\u4E00\u4E2A\u4EBA\u80FD\u7528\u201D\u5230\u201C\u56E2\u961F\u53EF\u9760\u5730\u7528\u201D\uFF0C\u5DEE\u522B\u5728\u89C4\u8303\u4E0E\u6743\u9650\u3002 </p><div class="space-y-4"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="font-bold text-gray-900 mb-2">\u6743\u9650\u4E0E\u5BA1\u8BA1</div><div class="text-gray-600 leading-relaxed"> \u7BA1\u7406\u5458\u53EA\u505A\u201C\u6388\u6743\u4E0E\u7B56\u7565\u201D\uFF1B\u65E5\u5E38\u64CD\u4F5C\u5C3D\u91CF\u7531\u6210\u5458\u7684\u4E2A\u4EBA\u8D26\u53F7\u5B8C\u6210\uFF0C\u6240\u6709\u5173\u952E\u52A8\u4F5C\u53EF\u8FFD\u6EAF\u3002 </div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="font-bold text-gray-900 mb-2">\u53D1\u5E03\u89C4\u8303</div><div class="text-gray-600 leading-relaxed"> \u901A\u8FC7\u6D41\u6C34\u7EBF\u53D1\u5E03\uFF0C\u907F\u514D\u624B\u5DE5\u767B\u5F55\u670D\u52A1\u5668\u6539\u914D\u7F6E\uFF1B\u5BF9\u751F\u4EA7\u73AF\u5883\u53D8\u66F4\u6267\u884C\u201C\u5907\u4EFD \u2192 \u53D8\u66F4 \u2192 \u9A8C\u8BC1 \u2192 \u56DE\u6EDA\u9884\u6848\u201D\u3002 </div></div></div></div><div id="troubleshoot" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u5E38\u89C1\u95EE\u9898\uFF08\u5148\u770B\u8FD9\u91CC\uFF09</h2><p class="text-gray-600 mb-8"> \u9047\u5230\u95EE\u9898\u65F6\uFF0C\u4F18\u5148\u6309\u201C\u7F51\u7EDC \u2192 \u7AEF\u53E3 \u2192 \u670D\u52A1\u72B6\u6001 \u2192 \u65E5\u5FD7\u201D\u987A\u5E8F\u6392\u67E5\u3002 </p><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u6253\u4E0D\u5F00\u9762\u677F\uFF08\u8FDE\u63A5\u8D85\u65F6/\u62D2\u7EDD\u8FDE\u63A5\uFF09</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>1) \u68C0\u67E5\u670D\u52A1\u5668\u5B89\u5168\u7EC4/\u9632\u706B\u5899\u662F\u5426\u653E\u884C\u7AEF\u53E3\u3002</p><p>2) \u68C0\u67E5\u9762\u677F\u670D\u52A1\u662F\u5426\u8FD0\u884C\uFF0C\u5FC5\u8981\u65F6\u91CD\u542F\u670D\u52A1\u3002</p><p>3) \u82E5\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\uFF0C\u786E\u8BA4\u4E0A\u6E38\u7AEF\u53E3\u4E0E\u5065\u5EB7\u72B6\u6001\u6B63\u5E38\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u8BC1\u4E66\u7533\u8BF7\u5931\u8D25</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>\u5E38\u89C1\u539F\u56E0\uFF1ADNS \u672A\u751F\u6548\u300180/443 \u672A\u5F00\u653E\u3001\u9A8C\u8BC1\u8DEF\u5F84\u88AB\u62E6\u622A\u3001\u4EE3\u7406\u89C4\u5219\u51B2\u7A81\u3002</p><p>\u5EFA\u8BAE\uFF1A\u5148\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\u9A8C\u8BC1\u8DEF\u5F84\u786E\u8BA4\u53EF\u8FBE\uFF0C\u518D\u91CD\u8BD5\u7533\u8BF7\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u90E8\u7F72\u540E 502/404</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>502\uFF1A\u4E0A\u6E38\u670D\u52A1\u672A\u542F\u52A8/\u7AEF\u53E3\u4E0D\u901A/\u5BB9\u5668\u5065\u5EB7\u68C0\u67E5\u5931\u8D25\u3002</p><p>404\uFF1A\u8DEF\u7531\u89C4\u5219\u4E0D\u5339\u914D\u6216\u7AD9\u70B9\u6839\u76EE\u5F55\u8BBE\u7F6E\u4E0D\u6B63\u786E\u3002</p></div></details></div></div></main></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
