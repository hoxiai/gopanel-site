import { H as useRoute, D as useLocaleRouter, u as useI18n, bu as useSeoMeta, O as __nuxt_component_3$1, j as _sfc_main$X, d as _sfc_main$S } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { t, tm } = useI18n();
    const docModules = [
      { slug: "website", icon: "ph:globe-hemisphere-west-duotone", iconBg: "bg-blue-50", iconBorder: "border-blue-100", iconColor: "text-blue-600" },
      { slug: "certificate", icon: "ph:shield-check-duotone", iconBg: "bg-emerald-50", iconBorder: "border-emerald-100", iconColor: "text-emerald-600" },
      { slug: "container", icon: "ph:cube-duotone", iconBg: "bg-amber-50", iconBorder: "border-amber-100", iconColor: "text-amber-600" },
      { slug: "database", icon: "ph:database-duotone", iconBg: "bg-purple-50", iconBorder: "border-purple-100", iconColor: "text-purple-600" },
      { slug: "pipeline", icon: "ph:git-branch-duotone", iconBg: "bg-cyan-50", iconBorder: "border-cyan-100", iconColor: "text-cyan-600" },
      { slug: "ai", icon: "ph:sparkle-duotone", iconBg: "bg-pink-50", iconBorder: "border-pink-100", iconColor: "text-pink-600" }
    ];
    const slugParam = route.params.slug;
    const slug = Array.isArray(slugParam) ? String(slugParam[slugParam.length - 1] || "") : String(slugParam || "");
    const currentModule = docModules.find((item) => item.slug === slug);
    const moduleFound = Boolean(currentModule);
    const moduleIndex = docModules.findIndex((item) => item.slug === slug);
    const prevModule = moduleIndex > 0 ? docModules[moduleIndex - 1] : null;
    const nextModule = moduleIndex >= 0 && moduleIndex < docModules.length - 1 ? docModules[moduleIndex + 1] : null;
    const sections = computed(() => {
      if (!moduleFound) return [];
      const value = tm(`panel.docs.modules.${slug}.sections`);
      return Array.isArray(value) ? value : [];
    });
    useSeoMeta({
      title: () => moduleFound ? `${t(`panel.docs.modules.${slug}.title`)} - GoPanel` : t("panel.docs.notFoundTitle"),
      description: () => moduleFound ? t(`panel.docs.modules.${slug}.desc`) : t("panel.docs.notFoundDesc")
    });
    const copied = ref(false);
    const openDemo = () => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$X;
      const _component_UButton = _sfc_main$S;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><aside class="lg:col-span-4"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/docs"),
        class: "inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("panel.docs.backToDocs"))}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "w-4 h-4"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("panel.docs.backToDocs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-lg font-bold text-gray-900 mb-4">${ssrInterpolate(_ctx.$t("panel.docs.moduleList"))}</div><nav class="space-y-2 text-sm"><!--[-->`);
      ssrRenderList(docModules, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.slug,
          to: unref(localePath)(`/docs/${item.slug}`),
          class: ["flex items-center gap-3 px-3 py-2 rounded-xl transition-colors", item.slug === unref(slug) ? "bg-blue-50 text-blue-700 font-bold" : "hover:bg-gray-50 text-gray-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: ["w-5 h-5", item.slug === unref(slug) ? "text-blue-600" : "text-gray-400"]
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t(`panel.docs.modules.${item.slug}.title`))}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: ["w-5 h-5", item.slug === unref(slug) ? "text-blue-600" : "text-gray-400"]
                }, null, 8, ["name", "class"]),
                createTextVNode(" " + toDisplayString(_ctx.$t(`panel.docs.modules.${item.slug}.title`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="mt-8 pt-6 border-t border-gray-100"><div class="text-sm font-bold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.docs.shortcuts"))}</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">`);
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
      _push(`</div></div></div></aside><main class="lg:col-span-8 space-y-10">`);
      if (unref(moduleFound)) {
        _push(`<!--[--><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><div class="flex items-start gap-4"><div class="${ssrRenderClass([[unref(currentModule).iconBg, unref(currentModule).iconBorder], "w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(currentModule).icon,
          class: ["w-7 h-7", unref(currentModule).iconColor]
        }, null, _parent));
        _push(`</div><div><h1 class="text-3xl font-extrabold tracking-tight text-gray-900">${ssrInterpolate(_ctx.$t(`panel.docs.modules.${unref(slug)}.title`))}</h1><p class="text-gray-600 leading-relaxed mt-2">${ssrInterpolate(_ctx.$t(`panel.docs.modules.${unref(slug)}.desc`))}</p></div></div><p class="text-gray-600 leading-relaxed mt-6 pt-6 border-t border-gray-100">${ssrInterpolate(_ctx.$t(`panel.docs.modules.${unref(slug)}.intro`))}</p></div><!--[-->`);
        ssrRenderList(unref(sections), (section, index) => {
          _push(`<div${ssrRenderAttr("id", `section-${index}`)} class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-xl font-extrabold text-gray-900 mb-4">${ssrInterpolate(section.title)}</h2><div class="space-y-3"><!--[-->`);
          ssrRenderList(section.paragraphs, (paragraph, pIndex) => {
            _push(`<p class="text-gray-600 leading-relaxed">${ssrInterpolate(paragraph)}</p>`);
          });
          _push(`<!--]--></div>`);
          if (section.code) {
            _push(`<div class="mt-5 bg-[#0D1117] rounded-xl border border-gray-800 shadow-lg overflow-hidden"><div class="bg-[#161B22] px-4 py-2.5 flex items-center justify-between border-b border-gray-800"><span class="text-xs text-gray-500 font-mono">config</span><button type="button" class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:copy-duotone",
              class: "w-4 h-4"
            }, null, _parent));
            _push(` ${ssrInterpolate(unref(copied) ? _ctx.$t("panel.common.copied") : _ctx.$t("panel.common.copy"))}</button></div><pre class="p-5 font-mono text-sm text-gray-200 whitespace-pre-wrap break-words">${ssrInterpolate(section.code)}</pre></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="flex items-center justify-between gap-4">`);
        if (unref(prevModule)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/docs/${unref(prevModule).slug}`),
            class: "group flex-1 rounded-2xl border border-gray-100 bg-white p-5 hover:border-blue-200 hover:shadow-md transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.docs.prevModule"))}</div><div class="font-bold text-gray-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t(`panel.docs.modules.${unref(prevModule).slug}.title`))}</div>`);
              } else {
                return [
                  createVNode("div", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("panel.docs.prevModule")), 1),
                  createVNode("div", { class: "font-bold text-gray-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t(`panel.docs.modules.${unref(prevModule).slug}.title`)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="flex-1"></div>`);
        }
        if (unref(nextModule)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/docs/${unref(nextModule).slug}`),
            class: "group flex-1 rounded-2xl border border-gray-100 bg-white p-5 text-right hover:border-blue-200 hover:shadow-md transition-shadow"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.docs.nextModule"))}</div><div class="font-bold text-gray-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t(`panel.docs.modules.${unref(nextModule).slug}.title`))}</div>`);
              } else {
                return [
                  createVNode("div", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("panel.docs.nextModule")), 1),
                  createVNode("div", { class: "font-bold text-gray-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t(`panel.docs.modules.${unref(nextModule).slug}.title`)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-16 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:magnifying-glass-duotone",
          class: "w-16 h-16 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<h1 class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.docs.notFoundTitle"))}</h1><p class="text-gray-500 mb-6">${ssrInterpolate(_ctx.$t("panel.docs.notFoundDesc"))}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/docs"),
          variant: "soft"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.docs.backToDocs"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.docs.backToDocs")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</main></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/docs/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CZvkl7P5.mjs.map
