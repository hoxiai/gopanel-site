import { z as useLocaleRouter, r as useSettings, bf as useSeoMeta, i as _sfc_main$D, _ as _sfc_main$I } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const installCommand = "bash <(curl -fsSL https://gopanel.run)";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const siteTitle = computed(
      () => getSetting("zh_site_title") || getSetting("site_title")
    );
    const siteDescription = computed(
      () => getSetting("zh_site_description") || getSetting("site_description")
    );
    useSeoMeta({
      title: () => siteTitle.value || "GoPanel",
      description: () => siteDescription.value
    });
    const copied = ref(false);
    const scrollToInstall = () => {
      return;
    };
    const handleToGithub = () => {
      (void 0).open("https://github.com/hoxiai/gopanel", "_blank");
    };
    const openDemo = () => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$D;
      const _component_UIcon = _sfc_main$I;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden selection:bg-blue-100" }, _attrs))}><div class="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#3b82f6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div></div><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 text-center lg:pb-24 relative overflow-hidden"><div class="absolute inset-0 -z-10 pointer-events-none"><div class="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div><div class="absolute -left-32 -top-28 w-[620px] h-[620px] bg-blue-500/15 rounded-full blur-3xl"></div><div class="absolute -right-32 top-8 w-[620px] h-[620px] bg-purple-500/15 rounded-full blur-3xl"></div><div class="absolute left-1/2 top-24 -translate-x-1/2 w-[880px] h-[560px] bg-gradient-to-tr from-blue-500/0 via-blue-500/12 to-purple-500/0 blur-2xl"></div></div><div class="mx-auto max-w-4xl"><div class="mb-10 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2 cursor-pointer"><span class="flex h-2 w-2 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> \u5168\u5E73\u53F0 \xB7 AI \u8D4B\u80FD\u7814\u53D1 \xB7 \u5F00\u6E90 </div></div><h1 class="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8 leading-[1.1]">\u5B89\u5168\u3001\u597D\u7528\u7684\u5F00\u53D1\u8005\u9762\u677F</h1><p class="mt-6 text-xl leading-8 text-gray-500 mb-12 max-w-3xl mx-auto"> \u5F00\u53D1\u8005\u4E13\u5C5E\uFF0C\u6DF1\u5EA6\u6574\u5408 Podman Rootless \u6280\u672F\uFF0C\u5728\u975E Root \u73AF\u5883\u4E0B\u6784\u5EFA\u575A\u5B9E\u7684\u6743\u9650\u62A4\u57CE\u6CB3\u3002\u6211\u4EEC\u91CD\u65B0\u5B9A\u4E49\u4E86\u8FD0\u7EF4\u4F53\u9A8C\uFF0C\u8BA9\u5F00\u53D1\u3001\u6D4B\u8BD5\u5230\u90E8\u7F72\uFF0C\u7686\u53EF\u4E00\u952E\u89E6\u8FBE\u3002 </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        onClick: scrollToInstall,
        class: "w-full sm:w-auto rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5FEB\u901F\u5B89\u88C5 `);
          } else {
            return [
              createTextVNode(" \u5FEB\u901F\u5B89\u88C5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: openDemo,
        size: "xl",
        class: "w-full sm:w-auto rounded-full px-10 py-4 border border-blue-600 hover:bg-blue-700 text-blue-600 shadow-xl shadow-blue-600/20 bg-white hover:text-white hover:-translate-y-0.5 transition-all font-bold text-lg"
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
      _push(`</div><div class="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left"><div class="relative overflow-hidden bg-white/80 backdrop-blur rounded-3xl border border-gray-100 shadow-xl shadow-blue-600/10 p-10"><div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl"></div><div class="relative"><div class="flex items-start gap-5"><div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="flex-1"><div class="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">\u66F4\u5B89\u5168</div><div class="text-gray-600 leading-relaxed mb-6"> \u57FA\u4E8E Podman Rootless\uFF1A\u9ED8\u8BA4\u4EE5\u975E Root \u6743\u9650\u8FD0\u884C\u670D\u52A1\u4E0E\u5BB9\u5668\uFF0C\u628A\u98CE\u9669\u9501\u5728\u201C\u6743\u9650\u8FB9\u754C\u201D\u5185\uFF0C\u751F\u4EA7\u73AF\u5883\u66F4\u653E\u5FC3\u3002 </div><ul class="space-y-3 text-sm text-gray-700"><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u975E Root \u6743\u9650\u6267\u884C\uFF0C\u907F\u514D\u201C\u4E00\u6B21\u6F0F\u6D1E=\u6574\u673A\u6CA6\u9677\u201D\u7684\u9AD8\u5371\u94FE\u8DEF</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u66F4\u6E05\u6670\u7684\u9694\u79BB\u4E0E\u6700\u5C0F\u6743\u9650\u601D\u8DEF\uFF0C\u51CF\u5C11\u8BEF\u64CD\u4F5C\u5E26\u6765\u7684\u7CFB\u7EDF\u7EA7\u98CE\u9669</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u9ED8\u8BA4\u5B89\u5168\u57FA\u7EBF\u66F4\u9AD8\uFF0C\u9002\u5408\u957F\u671F\u8DD1\u5728\u516C\u7F51\u7684\u4E1A\u52A1\u73AF\u5883</span></li></ul></div></div></div></div><div class="relative overflow-hidden bg-white/80 backdrop-blur rounded-3xl border border-gray-100 shadow-xl shadow-purple-600/10 p-10"><div class="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl"></div><div class="relative"><div class="flex items-start gap-5"><div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magic-wand-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="flex-1"><div class="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">\u66F4\u597D\u7528</div><div class="text-gray-600 leading-relaxed mb-6"> \u7531\u300C\u80E1\u8BF4\u4EE3\u7801\u7684\u53EF\u4E50\u300D\u4E3B\u5BFC\u5F00\u53D1\uFF0C20 \u5E74\u7814\u53D1/\u8FD0\u7EF4\u7ECF\u9A8C\u6C89\u6DC0\uFF0C\u628A\u771F\u5B9E\u573A\u666F\u7684\u9AD8\u9891\u64CD\u4F5C\u505A\u6210\u4E00\u952E\u3002 </div><ul class="space-y-3 text-sm text-gray-700"><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u81EA\u52A8 SSL \u8BC1\u4E66\u7B7E\u53D1\u4E0E\u7EED\u671F\uFF0C\u57DF\u540D\u4E0E\u7AD9\u70B9\u4E0A\u7EBF\u66F4\u7701\u5FC3</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u81EA\u52A8\u7F51\u7AD9\u4E0E\u53CD\u5411\u4EE3\u7406\u7BA1\u7406\uFF0C\u5E38\u89C1\u573A\u666F\u5F00\u7BB1\u5373\u7528</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>\u6D41\u6C34\u7EBF\u4F5C\u4E1A\uFF08CI/CD\uFF09+ \u5E38\u7528\u6570\u636E\u5E93\u53EF\u89C6\u5316\u7BA1\u7406\uFF0C\u65E5\u5E38\u7EF4\u62A4\u66F4\u987A\u624B</span></li></ul></div></div></div></div></div></div><div class="mt-20 sm:mt-28 relative"><div class="absolute -left-10 top-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div><div class="absolute -right-10 bottom-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div><div class="relative mx-auto max-w-[1400px] rounded-2xl bg-white p-2 ring-1 ring-inset ring-gray-900/5 shadow-2xl"><img${ssrRenderAttr("src", "/themes/panel/preview.png")} alt="GoPanel Dashboard Preview" class="w-full rounded-xl border border-gray-100 object-cover"></div></div></section><section class="bg-gray-50 py-24 sm:py-32 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">\u4E30\u5BCC\u7684\u5E94\u7528\u5546\u5E97</h2><p class="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">\u7CBE\u9009\u4F18\u8D28\u5F00\u6E90\u5E94\u7528\uFF0C\u4E00\u952E\u5B89\u88C5\u90E8\u7F72\uFF0C\u6EE1\u8DB3\u5404\u79CD\u4E1A\u52A1\u9700\u6C42\uFF0C\u5FEB\u901F\u6784\u5EFA\u5B8C\u6574\u7684\u5E94\u7528\u751F\u6001\u3002</p><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList(["WordPress", "MySQL", "Redis", "Nginx", "PostgreSQL", "MongoDB", "Docker", "Halo", "Gitea", "Minio", "Node.js", "PHP"], (app) => {
        _push(`<div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3"><div class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:cube-duotone",
          class: "w-6 h-6 text-gray-400"
        }, null, _parent));
        _push(`</div><span class="font-semibold text-gray-700 text-sm">${ssrInterpolate(app)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white py-20 border-b border-gray-100"><div class="mx-auto max-w-[1400px] px-6"><dl class="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4"><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">\u8DE8\u5E73\u53F0\u8282\u70B9</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">1,722K+</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">\u6D41\u6C34\u7EBF\u8FD0\u884C</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">34.9K</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">\u53EF\u7528\u5E94\u7528</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">150+</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">\u8BC1\u4E66\u81EA\u52A8\u7EED\u7B7E</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">5M+</dd></div></dl></div></section><section id="features" class="py-24 sm:py-32 max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">\u5F3A\u5927\u7684\u529F\u80FD\u7279\u6027</h2><p class="text-xl text-gray-600 leading-relaxed">\u5168\u9762\u62E5\u62B1\u73B0\u4EE3\u5316\u5168\u6808\u7814\u53D1\uFF0C\u8BA9\u670D\u52A1\u5668\u7BA1\u7406\u3001\u4EE3\u7801\u6D41\u6C34\u7EBF\u548C\u56E2\u961F\u534F\u4F5C\u53D8\u5F97\u524D\u6240\u672A\u6709\u7684\u667A\u80FD\u4E0E\u9AD8\u6548\u3002</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">\u8DE8\u5E73\u53F0\u5168\u7CFB\u7EDF\u652F\u6301</h3><p class="text-gray-600 leading-relaxed">\u652F\u6301 Linux\u3001Windows\u3001macOS \u7B49\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u5373\u53EF\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u8FD0\u884C\u3002</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:storefront-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">AI \u9A71\u52A8\u7814\u53D1\u534F\u4F5C</h3><p class="text-gray-600 leading-relaxed">\u5229\u7528 AI \u52A9\u624B\uFF0C\u5FEB\u901F\u90E8\u7F72\u548C\u7BA1\u7406\u60A8\u7684\u5E94\u7528\uFF0C\u65E0\u9700\u624B\u52A8\u64CD\u4F5C\u3002</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magic-wand-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">\u81EA\u52A8\u5316 CI/CD \u6D41\u6C34\u7EBF</h3><p class="text-gray-600 leading-relaxed">\u81EA\u52A8\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u60A8\u7684\u5E94\u7528\uFF0C\u65E0\u9700\u624B\u52A8\u64CD\u4F5C\u3002</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">\u4E30\u5BCC\u7684\u5E94\u7528\u751F\u6001</h3><p class="text-gray-600 leading-relaxed">\u652F\u6301\u591A\u79CD\u5E94\u7528\u7C7B\u578B\uFF0C\u5305\u62EC Web \u5E94\u7528\u3001\u79FB\u52A8\u5E94\u7528\u3001API \u7B49\u3002</p></div></div></div></section><section id="install" class="bg-white py-24 sm:py-32 border-t border-gray-100"><div class="max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4"> \u4FBF\u6377\u7684 <span class="text-blue-600">\u5B89\u88C5\u65B9\u5F0F</span></h2><p class="text-lg text-gray-600"> \u53EA\u9700\u51E0\u4E2A\u7B80\u5355\u6B65\u9AA4\uFF0C\u5373\u53EF\u5728\u60A8\u7684\u670D\u52A1\u5668\u4E0A\u5B89\u88C5\u5E76\u8FD0\u884C GoPanel </p></div><div class="max-w-5xl mx-auto space-y-10"><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">1</div></div><div class="pt-1"><div class="text-xl font-bold text-gray-900 mb-2">\u51C6\u5907\u670D\u52A1\u5668\u73AF\u5883</div><div class="text-gray-600 leading-relaxed"> \u652F\u6301 Linux / Windows / macOS\uFF0C\u63A8\u8350\u4F7F\u7528\u5177\u5907\u516C\u7F51\u8BBF\u95EE\u80FD\u529B\u7684\u670D\u52A1\u5668\u6216\u865A\u62DF\u673A\u3002Linux \u5E38\u89C1\u53D1\u884C\u7248\uFF08Ubuntu\u3001Debian\u3001CentOS \u7B49\uFF09\u53EF\u76F4\u63A5\u4F7F\u7528\u4E00\u952E\u811A\u672C\u5FEB\u901F\u5B89\u88C5\u3002 </div><div class="mt-3 text-sm text-gray-500"> \u5E38\u89C1\u67B6\u6784\uFF1Ax86_64\u3001aarch64\u3001armv7 </div></div></div><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">2</div></div><div class="pt-1 w-full"><div class="text-xl font-bold text-gray-900 mb-2">\u8FD0\u884C\u5B89\u88C5\u811A\u672C</div><div class="text-gray-600 leading-relaxed mb-6"> \u4F7F\u7528\u5177\u5907\u6743\u9650\u7684\u8D26\u6237\u6267\u884C\u4E00\u952E\u5B89\u88C5\u547D\u4EE4\uFF0C\u81EA\u52A8\u5B8C\u6210\u4E0B\u8F7D\u3001\u5B89\u88C5\u4E0E\u521D\u59CB\u5316\u3002 </div><div class="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden"><div class="bg-[#161B22] px-4 py-3 flex items-center gap-2 border-b border-gray-800"><div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div class="w-3 h-3 rounded-full bg-[#27C93F]"></div><span class="ml-4 text-xs text-gray-500 font-mono">bash</span><div class="ml-auto flex items-center gap-2"><button type="button" class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:copy-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(copied) ? "\u5DF2\u590D\u5236" : "\u590D\u5236")}</button></div></div><div class="p-6 font-mono text-sm sm:text-base text-gray-200"><span class="text-green-400 font-bold">$</span> ${ssrInterpolate(installCommand)}</div></div><div class="mt-4 text-sm text-gray-500"> \u5982\u9700\u79BB\u7EBF\u5B89\u88C5\u6216\u5185\u7F51\u90E8\u7F72\uFF0C\u53EF\u6309\u5B9E\u9645\u73AF\u5883\u4E0B\u8F7D\u79BB\u7EBF\u5305\u540E\u518D\u8FDB\u884C\u521D\u59CB\u5316\u3002 </div></div></div><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">3</div></div><div class="pt-1"><div class="text-xl font-bold text-gray-900 mb-2">\u8BBF\u95EE\u7BA1\u7406\u9762\u677F</div><div class="text-gray-600 leading-relaxed"> \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6309\u7EC8\u7AEF\u8F93\u51FA\u63D0\u793A\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u9762\u677F\u5730\u5740\uFF0C\u5373\u53EF\u5F00\u59CB\u7BA1\u7406\u7F51\u7AD9\u3001\u5BB9\u5668\u3001\u8BC1\u4E66\u3001\u6570\u636E\u5E93\u4E0E\u6D41\u6C34\u7EBF\u3002 </div></div></div><div class="pt-4 text-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/products"),
        size: "xl",
        class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u83B7\u53D6\u66F4\u591A\u5B89\u88C5\u9009\u9879 `);
          } else {
            return [
              createTextVNode(" \u83B7\u53D6\u66F4\u591A\u5B89\u88C5\u9009\u9879 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
