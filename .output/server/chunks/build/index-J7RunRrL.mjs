import { D as useLocaleRouter, u as useI18n, bu as useSeoMeta, l as useFormatTime, H as useRoute, y as useFetch, by as useCollectionPageJsonLd, O as __nuxt_component_3$1, j as _sfc_main$X, d as _sfc_main$S } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as usePostCategories } from './usePostCategories-luVLOPLu.mjs';
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

const pageSize = 9;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("panel.blog.metaTitle"),
      description: () => t("panel.blog.metaDesc")
    });
    const { formatDate } = useFormatTime();
    const route = useRoute();
    const { categories } = usePostCategories({ key: "panel-blog-categories" });
    const activeCategory = computed(() => {
      const raw = route.query.category;
      return typeof raw === "string" ? raw.trim() : "";
    });
    const page = ref(1);
    const total = ref(0);
    const items = ref([]);
    const errorMessage = ref("");
    watch(activeCategory, () => {
      page.value = 1;
      items.value = [];
    });
    const listUrl = computed(() => {
      const params = new URLSearchParams({
        type: "blog",
        page: String(page.value),
        pageSize: String(pageSize)
      });
      if (activeCategory.value) params.set("category", activeCategory.value);
      return `/api/posts?${params.toString()}`;
    });
    const { data, pending, error } = useFetch(
      listUrl,
      "$l2fqXj0g0C"
      /* nuxt-injected */
    );
    watch(
      [data, error],
      () => {
        var _a;
        const err = error.value;
        if (err) {
          errorMessage.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || t("panel.blog.loadFailed");
          return;
        }
        errorMessage.value = "";
        const payload = data.value;
        total.value = Number((payload == null ? void 0 : payload.total) || 0);
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
    const loadMore = () => {
      if (!hasMore.value) return;
      page.value += 1;
    };
    const metaOf = (post) => {
      let meta = post == null ? void 0 : post.metaData;
      if (typeof meta === "string") {
        try {
          meta = JSON.parse(meta);
        } catch {
          meta = {};
        }
      }
      return meta && typeof meta === "object" ? meta : {};
    };
    const categoryOf = (post) => {
      var _a;
      return String(((_a = post == null ? void 0 : post.category) == null ? void 0 : _a.name) || metaOf(post).category || "");
    };
    const tldrOf = (post) => String(metaOf(post).tldr || "");
    useCollectionPageJsonLd("panel-blog-list", {
      path: "/blog",
      name: "GoPanel \u5E94\u7528\u90E8\u7F72\u4E0E\u8FD0\u7EF4\u535A\u5BA2",
      description: "GoPanel \u5E94\u7528\u5546\u5E97\u5E94\u7528\u90E8\u7F72\u6307\u5357\u3001\u7248\u672C\u66F4\u65B0\u89E3\u6790\u4E0E\u670D\u52A1\u5668\u8FD0\u7EF4\u5B9E\u64CD\u4E13\u680F\u3002",
      items: computed(() => items.value.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$X;
      const _component_UButton = _sfc_main$S;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 transition-colors flex items-center gap-2">${ssrInterpolate(_ctx.$t("panel.blog.badge"))}</div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.blog.title"))}</h1><p class="text-lg text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.blog.subtitle"))}</p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16">`);
      if (unref(categories).length > 0) {
        _push(`<div class="mb-10 flex flex-wrap items-center justify-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/blog"),
          class: ["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors", unref(activeCategory) ? "border-gray-200 text-gray-500 hover:text-gray-900" : "border-blue-600/20 bg-blue-600/10 text-blue-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.blog.allCategories"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.blog.allCategories")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(categories), (cat) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: cat.slug,
            to: { path: unref(localePath)("/blog"), query: { category: cat.slug } },
            class: ["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors", unref(activeCategory) === cat.slug ? "border-blue-600/20 bg-blue-600/10 text-blue-700" : "border-gray-200 text-gray-500 hover:text-gray-900"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(cat.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(cat.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<div class="mb-6 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-4">${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending) && unref(items).length === 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="h-72 rounded-3xl bg-white shadow-sm border border-gray-100 animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(items).length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(unref(items), (post) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: post.slug,
            to: unref(localePath)(`/blog/${post.slug}`),
            class: "group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="p-8 flex flex-col flex-grow"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
                if (categoryOf(post)) {
                  _push2(`<span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/10"${_scopeId}>${ssrInterpolate(categoryOf(post))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (post.createdAt) {
                  _push2(`<span class="text-xs text-gray-400 font-medium"${_scopeId}>${ssrInterpolate(unref(formatDate)(post.createdAt))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h2 class="text-xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow"${_scopeId}>${ssrInterpolate(tldrOf(post) || post.description)}</p><div class="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.blog.readMore"))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "p-8 flex flex-col flex-grow" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      categoryOf(post) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/10"
                      }, toDisplayString(categoryOf(post)), 1)) : createCommentVNode("", true),
                      post.createdAt ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-xs text-gray-400 font-medium"
                      }, toDisplayString(unref(formatDate)(post.createdAt)), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("h2", { class: "text-xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors" }, toDisplayString(post.title), 1),
                    createVNode("p", { class: "text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow" }, toDisplayString(tldrOf(post) || post.description), 1),
                    createVNode("div", { class: "mt-6 flex items-center gap-2 text-sm font-bold text-blue-600" }, [
                      createTextVNode(toDisplayString(_ctx.$t("panel.blog.readMore")) + " ", 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:article-duotone",
          class: "w-14 h-14 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<div class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.blog.emptyTitle"))}</div><div class="text-gray-500">${ssrInterpolate(_ctx.$t("panel.blog.emptyDesc"))}</div></div>`);
      }
      if (unref(items).length > 0) {
        _push(`<div class="mt-12 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xl",
          loading: unref(pending) && unref(items).length > 0,
          disabled: !unref(hasMore),
          class: "rounded-full px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all font-bold text-lg disabled:opacity-60 disabled:hover:translate-y-0",
          onClick: loadMore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(hasMore) ? _ctx.$t("panel.blog.loadMore") : _ctx.$t("panel.blog.noMore"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(hasMore) ? _ctx.$t("panel.blog.loadMore") : _ctx.$t("panel.blog.noMore")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-J7RunRrL.mjs.map
