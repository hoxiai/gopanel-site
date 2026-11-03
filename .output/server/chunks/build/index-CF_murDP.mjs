import { D as useLocaleRouter, u as useI18n, bu as useSeoMeta, d as _sfc_main$S, j as _sfc_main$X, O as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("panel.docs.metaTitle"),
      description: () => t("panel.docs.metaDesc")
    });
    const copied = ref(false);
    const docModules = [
      { slug: "website", icon: "ph:globe-hemisphere-west-duotone", iconBg: "bg-blue-50", iconBorder: "border-blue-100", iconColor: "text-blue-600" },
      { slug: "certificate", icon: "ph:shield-check-duotone", iconBg: "bg-emerald-50", iconBorder: "border-emerald-100", iconColor: "text-emerald-600" },
      { slug: "container", icon: "ph:cube-duotone", iconBg: "bg-amber-50", iconBorder: "border-amber-100", iconColor: "text-amber-600" },
      { slug: "database", icon: "ph:database-duotone", iconBg: "bg-purple-50", iconBorder: "border-purple-100", iconColor: "text-purple-600" },
      { slug: "pipeline", icon: "ph:git-branch-duotone", iconBg: "bg-cyan-50", iconBorder: "border-cyan-100", iconColor: "text-cyan-600" },
      { slug: "ai", icon: "ph:sparkle-duotone", iconBg: "bg-pink-50", iconBorder: "border-pink-100", iconColor: "text-pink-600" }
    ];
    const securityGuards = [
      { title: "panel.docs.lg1Title", desc: "panel.docs.lg1Desc", icon: "ph:key-duotone", iconBg: "bg-blue-50", iconBorder: "border-blue-100", iconColor: "text-blue-600" },
      { title: "panel.docs.lg2Title", desc: "panel.docs.lg2Desc", icon: "ph:shield-check-duotone", iconBg: "bg-emerald-50", iconBorder: "border-emerald-100", iconColor: "text-emerald-600" },
      { title: "panel.docs.lg3Title", desc: "panel.docs.lg3Desc", icon: "ph:users-three-duotone", iconBg: "bg-purple-50", iconBorder: "border-purple-100", iconColor: "text-purple-600" },
      { title: "panel.docs.lg4Title", desc: "panel.docs.lg4Desc", icon: "ph:clock-counter-clockwise-duotone", iconBg: "bg-amber-50", iconBorder: "border-amber-100", iconColor: "text-amber-600" }
    ];
    const faqItems = [
      { title: "panel.docs.ts1Title", paragraphs: ["panel.docs.ts1p1", "panel.docs.ts1p2", "panel.docs.ts1p3"] },
      { title: "panel.docs.ts2Title", paragraphs: ["panel.docs.ts2p1", "panel.docs.ts2p2"] },
      { title: "panel.docs.ts3Title", paragraphs: ["panel.docs.ts3p1", "panel.docs.ts3p2"] }
    ];
    const openDemo = () => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$S;
      const _component_UIcon = _sfc_main$X;
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 transition-colors flex items-center gap-2">${ssrInterpolate(_ctx.$t("panel.docs.badge"))}</div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.docs.title"))}</h1><p class="text-lg text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.subtitle"))}</p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><aside class="lg:col-span-4"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><div class="text-lg font-bold text-gray-900 mb-4">${ssrInterpolate(_ctx.$t("panel.docs.toc"))}</div><nav class="space-y-2 text-sm"><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#quickstart">${ssrInterpolate(_ctx.$t("panel.docs.tocQuickstart"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#modules">${ssrInterpolate(_ctx.$t("panel.docs.tocModules"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#security">${ssrInterpolate(_ctx.$t("panel.docs.tocSecurity"))}</a><a class="block px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700" href="#troubleshoot">${ssrInterpolate(_ctx.$t("panel.docs.tocTroubleshoot"))}</a></nav><div class="mt-8 pt-6 border-t border-gray-100"><div class="text-sm font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.docs.shortcuts"))}</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">`);
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
      _push(` ${ssrInterpolate(unref(copied) ? _ctx.$t("panel.common.copied") : _ctx.$t("panel.common.copy"))}</button></div></div><div class="p-6 font-mono text-sm sm:text-base text-gray-200"><span class="text-green-400 font-bold">$</span> ${ssrInterpolate(installCommand)}</div></div><div class="mt-3 text-sm text-gray-500 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.qs2Note"))}</div></div></div><div class="flex gap-6"><div class="shrink-0"><div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold">3</div></div><div><div class="text-lg font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.qs3Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.docs.qs3Desc"))}</div></div></div></div></div><div id="modules" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.modulesTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.modulesDesc"))}</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(docModules, (module) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: module.slug,
          to: unref(localePath)(`/docs/${module.slug}`),
          class: "group rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3 mb-3"${_scopeId}><div class="${ssrRenderClass([[module.iconBg, module.iconBorder], "w-10 h-10 rounded-2xl border flex items-center justify-center"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: module.icon,
                class: ["w-6 h-6", module.iconColor]
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-lg font-bold text-gray-900"${_scopeId}>${ssrInterpolate(_ctx.$t(`panel.docs.modules.${module.slug}.title`))}</div></div><div class="text-gray-600 leading-relaxed text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t(`panel.docs.modules.${module.slug}.desc`))}</div><div class="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.docs.readGuide"))} `);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3 mb-3" }, [
                  createVNode("div", {
                    class: ["w-10 h-10 rounded-2xl border flex items-center justify-center", [module.iconBg, module.iconBorder]]
                  }, [
                    createVNode(_component_UIcon, {
                      name: module.icon,
                      class: ["w-6 h-6", module.iconColor]
                    }, null, 8, ["name", "class"])
                  ], 2),
                  createVNode("div", { class: "text-lg font-bold text-gray-900" }, toDisplayString(_ctx.$t(`panel.docs.modules.${module.slug}.title`)), 1)
                ]),
                createVNode("div", { class: "text-gray-600 leading-relaxed text-sm" }, toDisplayString(_ctx.$t(`panel.docs.modules.${module.slug}.desc`)), 1),
                createVNode("div", { class: "mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600" }, [
                  createTextVNode(toDisplayString(_ctx.$t("panel.docs.readGuide")) + " ", 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div id="security" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.securityTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.securityDesc"))}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(securityGuards, (guard) => {
        _push(`<div class="rounded-2xl border border-gray-100 bg-gray-50 p-6"><div class="flex items-center gap-3 mb-3"><div class="${ssrRenderClass([[guard.iconBg, guard.iconBorder], "w-10 h-10 rounded-2xl border flex items-center justify-center"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: guard.icon,
          class: ["w-6 h-6", guard.iconColor]
        }, null, _parent));
        _push(`</div><div class="text-lg font-bold text-gray-900">${ssrInterpolate(_ctx.$t(guard.title))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t(guard.desc))}</div></div>`);
      });
      _push(`<!--]--></div></div><div id="troubleshoot" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.faqTitle"))}</h2><p class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.docs.faqDesc"))}</p><div class="space-y-4"><!--[-->`);
      ssrRenderList(faqItems, (faq, index) => {
        _push(`<details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"${ssrIncludeBooleanAttr(index === 0) ? " open" : ""}><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t(faq.title))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-2"><!--[-->`);
        ssrRenderList(faq.paragraphs, (paragraph) => {
          _push(`<p>${ssrInterpolate(_ctx.$t(paragraph))}</p>`);
        });
        _push(`<!--]--></div></details>`);
      });
      _push(`<!--]--></div></div></main></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/docs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CF_murDP.mjs.map
