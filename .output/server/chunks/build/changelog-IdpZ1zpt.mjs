import { D as useLocaleRouter, bc as useSeoMeta, g as useFormatTime, z as useFetch, l as _sfc_main$B, b as _sfc_main$G } from './server.mjs';
import { defineComponent, ref, computed, watch, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const pageSize = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "changelog",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    useSeoMeta({
      title: "\u66F4\u65B0\u65E5\u5FD7 - GoPanel",
      description: "GoPanel \u7248\u672C\u66F4\u65B0\u65E5\u5FD7\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5728\u8FD9\u91CC\u5B8C\u6574\u7684\u8BB0\u5F55\u6211\u4EEC\u7684\u4EA7\u54C1\u66F4\u65B0\u5185\u5BB9\u3002"
    });
    const { formatDateTime, formatDate } = useFormatTime();
    const page = ref(1);
    const total = ref(0);
    const items = ref([]);
    const errorMessage = ref("");
    const listUrl = computed(
      () => `/api/posts?type=changelog&page=${page.value}&pageSize=${pageSize}`
    );
    const { data, pending, error, refresh } = useFetch(
      listUrl,
      "$EJsud34_sb"
      /* nuxt-injected */
    );
    watch(
      [data, error],
      () => {
        var _a;
        const err = error.value;
        if (err) {
          errorMessage.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
          return;
        }
        errorMessage.value = "";
        const payload = data.value;
        const nextTotal = Number((payload == null ? void 0 : payload.total) || 0);
        total.value = nextTotal;
        const list = Array.isArray(payload == null ? void 0 : payload.data) ? payload.data : [];
        if (page.value === 1) {
          items.value = list;
        } else if (list.length > 0) {
          const existed = new Set(items.value.map((x) => String(x == null ? void 0 : x.id)));
          const appended = list.filter((x) => !existed.has(String(x == null ? void 0 : x.id)));
          items.value = [...items.value, ...appended];
        }
      },
      { immediate: true }
    );
    const hasMore = computed(() => items.value.length < total.value);
    const refreshList = async () => {
      page.value = 1;
      await refresh();
    };
    const loadMore = async () => {
      if (!hasMore.value) return;
      page.value += 1;
    };
    const openSlug = ref(null);
    const detailLoadingSlug = ref(null);
    const copied = ref(false);
    const detailsMap = reactive({});
    const getDetail = (slug) => detailsMap[slug];
    const getDetailContent = (slug, fallback) => {
      const d = getDetail(slug);
      const content = (d == null ? void 0 : d.content) || (d == null ? void 0 : d.description) || fallback;
      return content || "\u6682\u65E0\u8BE6\u60C5\u3002";
    };
    const copyText = async (text) => {
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2"> \u66F4\u65B0\u65E5\u5FD7 </div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]"> GoPanel \u66F4\u65B0\u65E5\u5FD7 </h1><p class="text-lg text-gray-600 leading-relaxed"> \u6301\u7EED\u8FED\u4EE3\u7684\u7248\u672C\u8BB0\u5F55\uFF1A\u65B0\u529F\u80FD\u3001\u4F18\u5316\u4E0E\u4FEE\u590D\u3002\u70B9\u51FB\u6761\u76EE\u53EF\u5C55\u5F00\u67E5\u770B\u8BE6\u60C5\u3002 </p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><aside class="lg:col-span-4"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><div class="text-lg font-bold text-gray-900 mb-2">\u8BF4\u660E</div><div class="text-sm text-gray-600 leading-relaxed"> \u672C\u9875\u4ECE\u7CFB\u7EDF\u5185\u5BB9\u5E93\u8BFB\u53D6 <span class="font-mono text-xs px-2 py-0.5 rounded bg-gray-50 border border-gray-100">posts.type = changelog</span> \u7684\u8BB0\u5F55\u8FDB\u884C\u5C55\u793A\u3002 </div><div class="mt-8 pt-6 border-t border-gray-100"><div class="text-sm font-bold text-gray-900 mb-3">\u5FEB\u6377\u5165\u53E3</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/docs"),
        size: "lg",
        class: "rounded-xl bg-white text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all font-bold justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4F7F\u7528\u5E2E\u52A9 `);
          } else {
            return [
              createTextVNode(" \u4F7F\u7528\u5E2E\u52A9 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: unref(localePath)("/licenses"),
        size: "lg",
        class: "rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all font-bold justify-center"
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
      _push(`</div></div></div></aside><main class="lg:col-span-8"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10"><div class="flex items-center justify-between gap-4 mb-8"><div><div class="text-xl font-extrabold text-gray-900">\u7248\u672C\u5217\u8868</div><div class="text-sm text-gray-500 mt-1"> \u5171 ${ssrInterpolate(unref(total))} \u6761 </div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "outline",
        size: "lg",
        class: "rounded-xl border-gray-200 bg-white hover:bg-gray-50 font-semibold",
        loading: unref(pending),
        onClick: refreshList
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5237\u65B0 `);
          } else {
            return [
              createTextVNode(" \u5237\u65B0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(errorMessage)) {
        _push(`<div class="mb-6 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-4">${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending) && unref(items).length === 0) {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<div class="h-24 rounded-2xl bg-gray-50 border border-gray-100 animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(items), (post) => {
          var _a, _b;
          _push(`<div class="rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50/40 transition-colors overflow-hidden"><button type="button" class="w-full text-left p-6 flex items-start justify-between gap-6"><div class="min-w-0"><div class="flex items-center gap-2 mb-2"><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-gray-100 text-gray-600">${ssrInterpolate(unref(formatDateTime)(post.createdAt))}</span><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/10"> v${ssrInterpolate(post.slug)}</span></div><div class="text-lg font-extrabold text-gray-900 truncate">${ssrInterpolate(post.title || "\u66F4\u65B0\u5185\u5BB9")}</div>`);
          if (post.description) {
            _push(`<div class="text-sm text-gray-600 mt-2 line-clamp-2">${ssrInterpolate(post.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="shrink-0 text-gray-400 mt-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:caret-down-bold",
            class: ["w-5 h-5 transition-transform", unref(openSlug) === post.slug ? "rotate-180" : ""]
          }, null, _parent));
          _push(`</div></button>`);
          if (unref(openSlug) === post.slug) {
            _push(`<div class="px-6 pb-6">`);
            if (unref(detailLoadingSlug) === post.slug) {
              _push(`<div class="h-20 rounded-xl bg-white border border-gray-100 animate-pulse"></div>`);
            } else {
              _push(`<div class="bg-white border border-gray-100 rounded-2xl p-6 text-sm text-gray-700 whitespace-pre-wrap break-words">${ssrInterpolate(getDetailContent(post.slug, post.description))}</div>`);
            }
            _push(`<div class="mt-4 flex items-center justify-between gap-4"><div class="text-xs text-gray-500"> \u66F4\u65B0\u65F6\u95F4\uFF1A${ssrInterpolate(unref(formatDate)(((_a = getDetail(post.slug)) == null ? void 0 : _a.updatedAt) || post.updatedAt || post.createdAt))}</div><div class="flex items-center gap-2">`);
            if ((_b = getDetail(post.slug)) == null ? void 0 : _b.content) {
              _push(ssrRenderComponent(_component_UButton, {
                size: "sm",
                variant: "outline",
                class: "rounded-lg border-gray-200 bg-white hover:bg-gray-50 font-semibold",
                onClick: ($event) => {
                  var _a2;
                  return copyText(String((_a2 = getDetail(post.slug)) == null ? void 0 : _a2.content));
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` \u590D\u5236\u8BE6\u60C5 `);
                  } else {
                    return [
                      createTextVNode(" \u590D\u5236\u8BE6\u60C5 ")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
            if (unref(copied)) {
              _push(`<div class="mt-2 text-xs text-emerald-600 font-semibold"> \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F </div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(items).length === 0) {
          _push(`<div class="text-center py-16">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:note-pencil-duotone",
            class: "w-14 h-14 text-gray-300 mx-auto mb-4"
          }, null, _parent));
          _push(`<div class="text-xl font-bold text-gray-900 mb-2">\u6682\u65E0\u66F4\u65B0\u65E5\u5FD7</div><div class="text-gray-500">\u8BF7\u7A0D\u540E\u518D\u6765\u770B\u770B\u3002</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (unref(items).length > 0) {
        _push(`<div class="mt-10 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xl",
          loading: unref(pending) && unref(items).length > 0,
          disabled: !unref(hasMore),
          class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg disabled:opacity-60 disabled:hover:translate-y-0",
          onClick: loadMore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(hasMore) ? "\u52A0\u8F7D\u66F4\u591A" : "\u6CA1\u6709\u66F4\u591A\u4E86")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(hasMore) ? "\u52A0\u8F7D\u66F4\u591A" : "\u6CA1\u6709\u66F4\u591A\u4E86"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/changelog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
