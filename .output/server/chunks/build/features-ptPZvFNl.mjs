import { D as useLocaleRouter, r as useSettings, u as useI18n, br as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    useSettings();
    const { t, tm } = useI18n();
    useSeoMeta({
      title: () => t("panel.features.metaTitle"),
      description: () => t("panel.features.metaDesc")
    });
    const cardIcons = [
      { icon: "ph:cube-duotone", iconClass: "text-indigo-600" },
      { icon: "ph:globe-simple-duotone", iconClass: "text-blue-600" },
      { icon: "ph:shield-check-duotone", iconClass: "text-emerald-600" },
      { icon: "ph:database-duotone", iconClass: "text-purple-600" },
      { icon: "ph:git-merge-duotone", iconClass: "text-amber-600" },
      { icon: "ph:robot-duotone", iconClass: "text-rose-600" }
    ];
    const capabilityCards = computed(() => {
      const cards = tm("panel.features.cards") || [];
      return cards.map((card, index) => ({
        title: card.title,
        description: card.description,
        tags: card.tags || [],
        ...cardIcons[index] || cardIcons[0]
      }));
    });
    const handleToGithub = () => {
      (void 0).open("https://github.com/hoxiai/gopanel", "_blank");
    };
    const navigateToDemo = () => {
      (void 0).open("https://demo.gopanel.run", "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden selection:bg-blue-100" }, _attrs))}><div class="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#3b82f6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div></div><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 lg:pb-24"><div class="mx-auto max-w-5xl text-center"><div class="mb-10 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2 cursor-pointer"><span class="flex h-2 w-2 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> ${ssrInterpolate(_ctx.$t("panel.features.badge"))}</div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.features.titleA"))} <span class="text-blue-600">${ssrInterpolate(_ctx.$t("panel.features.titleB"))}</span> ${ssrInterpolate(_ctx.$t("panel.features.titleC"))}</h1><p class="mt-6 text-xl leading-8 text-gray-500 mb-12 max-w-4xl mx-auto">${ssrInterpolate(_ctx.$t("panel.features.subtitle"))}</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/"),
        size: "xl",
        class: "w-full sm:w-auto rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.features.ctaStart"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.features.ctaStart")), 1)
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
      _push(`</div></div></section><section class="bg-gray-50 py-20 sm:py-28 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">${ssrInterpolate(_ctx.$t("panel.features.coreTitle"))}</h2><p class="text-lg text-gray-600">${ssrInterpolate(_ctx.$t("panel.features.coreDesc"))}</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-duotone",
        class: "w-6 h-6 text-blue-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.features.adv1Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.features.adv1Desc"))}</div></div><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:rocket-launch-duotone",
        class: "w-6 h-6 text-emerald-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.features.adv2Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.features.adv2Desc"))}</div></div><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "w-6 h-6 text-purple-600"
      }, null, _parent));
      _push(`</div><div class="text-xl font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.features.adv3Title"))}</div></div><div class="text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.features.adv3Desc"))}</div></div></div></div></section><section class="py-24 sm:py-32 max-w-[1400px] mx-auto px-6"><div class="mx-auto max-w-3xl text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">${ssrInterpolate(_ctx.$t("panel.features.stackTitle"))}</h2><p class="text-lg text-gray-600">${ssrInterpolate(_ctx.$t("panel.features.stackDesc"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><!--[-->`);
      ssrRenderList(unref(capabilityCards), (item) => {
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
      _push(`<!--]--></div></section><section class="bg-white py-24 sm:py-32 relative overflow-hidden border-t border-gray-100"><div class="absolute -left-10 top-24 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div><div class="absolute -right-10 bottom-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl"></div><div class="relative max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">${ssrInterpolate(_ctx.$t("panel.features.finalTitle"))}</h2><p class="text-lg text-gray-600 mb-12">${ssrInterpolate(_ctx.$t("panel.features.finalDesc"))}</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/"),
        size: "xl",
        class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.features.ctaInstall"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.features.ctaInstall")), 1)
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
            _push2(`${ssrInterpolate(_ctx.$t("panel.features.ctaDemo"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.features.ctaDemo")), 1)
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
//# sourceMappingURL=features-ptPZvFNl.mjs.map
