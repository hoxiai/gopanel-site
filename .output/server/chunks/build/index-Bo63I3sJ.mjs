import { D as useLocaleRouter, r as useSettings, bs as useSeoMeta, i as _sfc_main$T, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
      const _component_UButton = _sfc_main$T;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden selection:bg-blue-100" }, _attrs))}><div class="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#3b82f6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div></div><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 text-center lg:pb-24 relative overflow-hidden"><div class="absolute inset-0 -z-10 pointer-events-none"><div class="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div><div class="absolute -left-32 -top-28 w-[620px] h-[620px] bg-blue-500/15 rounded-full blur-3xl"></div><div class="absolute -right-32 top-8 w-[620px] h-[620px] bg-purple-500/15 rounded-full blur-3xl"></div><div class="absolute left-1/2 top-24 -translate-x-1/2 w-[880px] h-[560px] bg-gradient-to-tr from-blue-500/0 via-blue-500/12 to-purple-500/0 blur-2xl"></div></div><div class="mx-auto max-w-4xl"><div class="mb-10 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2 cursor-pointer"><span class="flex h-2 w-2 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> ${ssrInterpolate(_ctx.$t("panel.home.badge"))}</div></div><h1 class="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.home.title"))}</h1><p class="mt-6 text-xl leading-8 text-gray-500 mb-12 max-w-3xl mx-auto">${ssrInterpolate(_ctx.$t("panel.home.subtitle"))}</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        onClick: scrollToInstall,
        class: "w-full sm:w-auto rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.home.ctaInstall"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.home.ctaInstall")), 1)
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
            _push2(`${ssrInterpolate(_ctx.$t("panel.home.ctaDemo"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.home.ctaDemo")), 1)
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
      _push(`</div><div class="flex-1"><div class="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.home.card1Title"))}</div><div class="text-gray-600 leading-relaxed mb-6">${ssrInterpolate(_ctx.$t("panel.home.card1Desc"))}</div><ul class="space-y-3 text-sm text-gray-700"><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card1Items[0]"))}</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card1Items[1]"))}</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card1Items[2]"))}</span></li></ul></div></div></div></div><div class="relative overflow-hidden bg-white/80 backdrop-blur rounded-3xl border border-gray-100 shadow-xl shadow-purple-600/10 p-10"><div class="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl"></div><div class="relative"><div class="flex items-start gap-5"><div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magic-wand-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="flex-1"><div class="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.home.card2Title"))}</div><div class="text-gray-600 leading-relaxed mb-6">${ssrInterpolate(_ctx.$t("panel.home.card2Desc"))}</div><ul class="space-y-3 text-sm text-gray-700"><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card2Items[0]"))}</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card2Items[1]"))}</span></li><li class="flex items-start gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("panel.home.card2Items[2]"))}</span></li></ul></div></div></div></div></div></div><div class="mt-20 sm:mt-28 relative"><div class="absolute -left-10 top-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div><div class="absolute -right-10 bottom-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div><div class="relative mx-auto max-w-[1400px] rounded-2xl bg-white p-2 ring-1 ring-inset ring-gray-900/5 shadow-2xl"><img${ssrRenderAttr("src", "/themes/panel/preview.png")} alt="GoPanel Dashboard Preview" class="w-full rounded-xl border border-gray-100 object-cover"></div></div></section><section class="bg-gray-50 py-24 sm:py-32 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">${ssrInterpolate(_ctx.$t("panel.home.appStoreTitle"))}</h2><p class="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">${ssrInterpolate(_ctx.$t("panel.home.appStoreDesc"))}</p><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList(["WordPress", "MySQL", "Redis", "Nginx", "PostgreSQL", "MongoDB", "Docker", "Halo", "Gitea", "Minio", "Node.js", "PHP"], (app) => {
        _push(`<div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3"><div class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:cube-duotone",
          class: "w-6 h-6 text-gray-400"
        }, null, _parent));
        _push(`</div><span class="font-semibold text-gray-700 text-sm">${ssrInterpolate(app)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white py-20 border-b border-gray-100"><div class="mx-auto max-w-[1400px] px-6"><dl class="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4"><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.statsNodes"))}</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">1,722K+</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.statsPipelines"))}</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">34.9K</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.statsApps"))}</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">150+</dd></div><div class="mx-auto flex max-w-xs flex-col gap-y-2"><dt class="text-base text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.statsCerts"))}</dt><dd class="order-first text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">5M+</dd></div></dl></div></section><section id="features" class="py-24 sm:py-32 max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">${ssrInterpolate(_ctx.$t("panel.home.featuresTitle"))}</h2><p class="text-xl text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.featuresDesc"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.home.f1Title"))}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.f1Desc"))}</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:storefront-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.home.f2Title"))}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.f2Desc"))}</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magic-wand-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.home.f3Title"))}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.f3Desc"))}</p></div></div><div class="flex gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100 group"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "w-8 h-8 text-blue-600"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.home.f4Title"))}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.f4Desc"))}</p></div></div></div></section><section id="install" class="bg-white py-24 sm:py-32 border-t border-gray-100"><div class="max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">${ssrInterpolate(_ctx.$t("panel.home.installTitleA"))} <span class="text-blue-600">${ssrInterpolate(_ctx.$t("panel.home.installTitleB"))}</span></h2><p class="text-lg text-gray-600">${ssrInterpolate(_ctx.$t("panel.home.installDesc"))}</p></div><div class="max-w-5xl mx-auto space-y-10"><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">1</div></div><div class="pt-1"><div class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.home.step1Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.step1Desc"))}</div><div class="mt-3 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.step1Note"))}</div></div></div><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">2</div></div><div class="pt-1 w-full"><div class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.home.step2Title"))}</div><div class="text-gray-600 leading-relaxed mb-6">${ssrInterpolate(_ctx.$t("panel.home.step2Desc"))}</div><div class="bg-[#0D1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden"><div class="bg-[#161B22] px-4 py-3 flex items-center gap-2 border-b border-gray-800"><div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div class="w-3 h-3 rounded-full bg-[#27C93F]"></div><span class="ml-4 text-xs text-gray-500 font-mono">bash</span><div class="ml-auto flex items-center gap-2"><button type="button" class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:copy-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(copied) ? _ctx.$t("panel.common.copied") : _ctx.$t("panel.common.copy"))}</button></div></div><div class="p-6 font-mono text-sm sm:text-base text-gray-200"><span class="text-green-400 font-bold">$</span> ${ssrInterpolate(installCommand)}</div></div><div class="mt-4 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.home.step2Note"))}</div></div></div><div class="flex gap-6 sm:gap-8"><div class="shrink-0"><div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-sm">3</div></div><div class="pt-1"><div class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.home.step3Title"))}</div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.home.step3Desc"))}</div></div></div><div class="pt-4 text-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/products"),
        size: "xl",
        class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.home.ctaMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.home.ctaMore")), 1)
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
//# sourceMappingURL=index-Bo63I3sJ.mjs.map
