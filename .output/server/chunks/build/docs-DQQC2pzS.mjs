import { D as useLocaleRouter, u as useI18n, br as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("panel.docs.metaTitle"),
      description: () => t("panel.docs.metaDesc")
    });
    const copied = ref(false);
    const openDemo = () => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2">${ssrInterpolate(_ctx.$t("panel.docs.badge"))}</div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.docs.title"))}</h1><p class="text-lg text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.subtitle"))}</p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><aside class="lg:col-span-4"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><div class="text-lg font-bold text-gray-900 mb-4">${ssrInterpolate(_ctx.$t("panel.docs.toc"))}</div><nav class="space-y-2 text-sm"><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#quickstart">${ssrInterpolate(_ctx.$t("panel.docs.tocQuickstart"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#first-login">${ssrInterpolate(_ctx.$t("panel.docs.tocLogin"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#common">${ssrInterpolate(_ctx.$t("panel.docs.tocCommon"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#ai">${ssrInterpolate(_ctx.$t("panel.docs.tocAi"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#team">${ssrInterpolate(_ctx.$t("panel.docs.tocTeam"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#troubleshoot">${ssrInterpolate(_ctx.$t("panel.docs.tocTroubleshoot"))}</a></nav><div class="mt-8 pt-6 border-t border-gray-100"><div class="text-sm font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.docs.shortcuts"))}</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/licenses"),
        size: "lg",
        class: "rounded-xl bg-white text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all font-bold justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.docs.licensesBtn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.docs.licensesBtn")), 1)
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
            _push2(`${ssrInterpolate(_ctx.$t("panel.docs.demoBtn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.docs.demoBtn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></aside><main class="lg:col-span-8 space-y-10"><div id="quickstart" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.quickstartTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.quickstartDesc"))}</p><div class="space-y-8"><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">1</div></div><div><div class="text-lg font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.qs1Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.qs1Desc"))}</div></div></div><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">2</div></div><div class="w-full"><div class="text-lg font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.qs2Title"))}</div><div class="text-gray-600 leading-relaxed mb-4">${ssrInterpolate(_ctx.$t("panel.docs.qs2Desc"))}</div><div class="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden"><div class="bg-[#161B22] px-4 py-3 flex items-center gap-2 border-b border-gray-800"><div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div class="w-3 h-3 rounded-full bg-[#27C93F]"></div><span class="ml-4 text-xs text-gray-500 font-mono">bash</span><div class="ml-auto"><button type="button" class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:copy-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(copied) ? _ctx.$t("panel.common.copied") : _ctx.$t("panel.common.copy"))}</button></div></div><div class="p-6 font-mono text-sm sm:text-base text-gray-200"><span class="text-green-400 font-bold">$</span> ${ssrInterpolate(installCommand)}</div></div><div class="mt-3 text-sm text-gray-500 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.qs2Note"))}</div></div></div><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">3</div></div><div><div class="text-lg font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.qs3Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.qs3Desc"))}</div></div></div></div></div><div id="first-login" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.loginTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.loginDesc"))}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:key-duotone",
        class: "w-6 h-6 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.lg1Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.lg1Desc"))}</div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "w-6 h-6 text-emerald-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.lg2Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.lg2Desc"))}</div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "w-6 h-6 text-purple-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.lg3Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.lg3Desc"))}</div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:clock-counter-clockwise-duotone",
        class: "w-6 h-6 text-amber-600"
      }, null, _parent));
      _push(`</div><div class="text-lg font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.lg4Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.lg4Desc"))}</div></div></div></div><div id="common" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.commonTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.commonDesc"))}</p><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.cm1Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.docs.cm1p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm1p2"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm1p3"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm1p4"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.cm2Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.docs.cm2p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm2p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.cm3Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.docs.cm3p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm3p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.cm4Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.docs.cm4p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm4p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.cm5Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.docs.cm5p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.cm5p2"))}</p></div></details></div></div><div id="ai" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.aiTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.aiDesc"))}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="text-sm font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.docs.ai1Title"))}</div><div class="text-gray-600 leading-relaxed space-y-2 text-sm"><p>${ssrInterpolate(_ctx.$t("panel.docs.ai1p1"))}</p><p class="font-mono text-xs bg-white border border-gray-100 rounded-lg p-3 text-gray-700">${ssrInterpolate(_ctx.$t("panel.docs.ai1sample"))}</p></div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="text-sm font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.docs.ai2Title"))}</div><div class="text-gray-600 leading-relaxed space-y-2 text-sm"><p>${ssrInterpolate(_ctx.$t("panel.docs.ai2p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.ai2p2"))}</p></div></div></div></div><div id="team" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.teamTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.teamDesc"))}</p><div class="space-y-4"><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.team1Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.team1Desc"))}</div></div><div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.team2Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.team2Desc"))}</div></div></div></div><div id="troubleshoot" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.tsTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.tsDesc"))}</p><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.ts1Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>${ssrInterpolate(_ctx.$t("panel.docs.ts1p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.ts1p2"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.ts1p3"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.ts2Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>${ssrInterpolate(_ctx.$t("panel.docs.ts2p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.ts2p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.docs.ts3Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><p>${ssrInterpolate(_ctx.$t("panel.docs.ts3p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.docs.ts3p2"))}</p></div></details></div></div></main></div></div></section></div>`);
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
//# sourceMappingURL=docs-DQQC2pzS.mjs.map
