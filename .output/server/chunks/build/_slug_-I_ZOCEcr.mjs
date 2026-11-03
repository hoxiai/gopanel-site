import { D as useLocaleRouter, u as useI18n, l as useFormatTime, H as useRoute, y as useFetch, bx as createError, by as useCollectionPageJsonLd, bu as useSeoMeta, O as __nuxt_component_3$1, j as _sfc_main$X } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { t } = useI18n();
    const { formatDate } = useFormatTime();
    const route = useRoute();
    const slug = computed(() => String(route.params.slug || "").trim());
    const { categories } = usePostCategories({ key: "panel-blog-categories" });
    const currentCategory = computed(() => categories.value.find((c) => c.slug === slug.value) || null);
    const categoryName = computed(() => {
      var _a;
      return ((_a = currentCategory.value) == null ? void 0 : _a.name) || "";
    });
    const categoryDescription = computed(() => {
      var _a;
      return ((_a = currentCategory.value) == null ? void 0 : _a.description) || "";
    });
    const items = ref([]);
    const { data, pending } = useFetch(
      computed(() => `/api/posts?type=blog&category=${encodeURIComponent(slug.value)}&page=1&pageSize=50`),
      "$H5kXs8IJbA"
      /* nuxt-injected */
    );
    watch(data, () => {
      var _a;
      items.value = Array.isArray((_a = data.value) == null ? void 0 : _a.data) ? data.value.data : [];
    }, { immediate: true });
    if (currentCategory.value === null && categories.value.length > 0) {
      throw createError({ statusCode: 404, statusMessage: "Category not found", fatal: true });
    }
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
    const tldrOf = (post) => String(metaOf(post).tldr || "");
    useCollectionPageJsonLd("panel-blog-category", {
      path: () => `/blog/category/${slug.value}`,
      name: () => categoryName.value || t("panel.blog.title"),
      description: () => categoryDescription.value || t("panel.blog.metaDesc"),
      items: computed(() => items.value.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })))
    });
    useSeoMeta({
      title: () => `${categoryName.value || slug.value} - ${t("panel.blog.title")}`,
      description: () => categoryDescription.value || t("panel.blog.metaDesc")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$X;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-10 lg:pb-16"><div class="mx-auto max-w-4xl text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/blog"),
        class: "mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left",
              class: "h-3.5 w-3.5"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("panel.blog.title"))}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left",
                class: "h-3.5 w-3.5"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("panel.blog.title")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">${ssrInterpolate(unref(categoryName) || unref(slug))}</h1>`);
      if (unref(categoryDescription)) {
        _push(`<p class="text-lg leading-relaxed text-gray-600">${ssrInterpolate(unref(categoryDescription))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="border-y border-gray-100 bg-gray-50"><div class="max-w-[1400px] mx-auto px-6 py-16">`);
      if (unref(pending) && unref(items).length === 0) {
        _push(`<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="h-72 rounded-3xl border border-gray-100 bg-white shadow-sm animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(items).length > 0) {
        _push(`<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(items), (post) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: post.slug,
            to: unref(localePath)(`/blog/${post.slug}`),
            class: "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-grow flex-col p-8"${_scopeId}><div class="mb-4 flex items-center gap-2"${_scopeId}>`);
                if (post.createdAt) {
                  _push2(`<span class="text-xs font-medium text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDate)(post.createdAt))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h2 class="mb-3 text-xl font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-blue-700"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600"${_scopeId}>${ssrInterpolate(tldrOf(post) || post.description)}</p><div class="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.blog.readMore"))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-grow flex-col p-8" }, [
                    createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                      post.createdAt ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs font-medium text-gray-400"
                      }, toDisplayString(unref(formatDate)(post.createdAt)), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("h2", { class: "mb-3 text-xl font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-blue-700" }, toDisplayString(post.title), 1),
                    createVNode("p", { class: "line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600" }, toDisplayString(tldrOf(post) || post.description), 1),
                    createVNode("div", { class: "mt-6 flex items-center gap-2 text-sm font-bold text-blue-600" }, [
                      createTextVNode(toDisplayString(_ctx.$t("panel.blog.readMore")) + " ", 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "h-4 w-4 transition-transform group-hover:translate-x-1"
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
        _push(`<div class="rounded-3xl border border-gray-100 bg-white py-20 text-center shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:folder-open-duotone",
          class: "mx-auto mb-4 h-14 w-14 text-gray-300"
        }, null, _parent));
        _push(`<div class="mb-2 text-xl font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.blog.categoryEmpty"))}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/blog"),
          class: "text-blue-600 hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.blog.backToList"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.blog.backToList")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/blog/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-I_ZOCEcr.mjs.map
