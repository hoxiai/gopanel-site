import { P as _export_sfc, H as useRoute, D as useLocaleRouter, y as useFetch, bv as usePageResourceState, l as useFormatTime, bw as useBlogPostingJsonLd, bu as useSeoMeta, O as __nuxt_component_3$1, j as _sfc_main$X, S as PageRequestError, d as _sfc_main$S } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
    const slugParam = route.params.slug;
    const slug = Array.isArray(slugParam) ? String(slugParam[1] || slugParam[0] || "") : String(slugParam || "");
    const { data, status, error, refresh } = useFetch(
      `/api/posts/${encodeURIComponent(slug)}`,
      "$47nrJgK4uI"
      /* nuxt-injected */
    );
    const { pending, requestFailed } = usePageResourceState(data, status, error);
    const { formatDate } = useFormatTime();
    const post = computed(() => data.value || null);
    const metaOf = (value) => {
      let meta2 = value;
      if (typeof meta2 === "string") {
        try {
          meta2 = JSON.parse(meta2);
        } catch {
          meta2 = {};
        }
      }
      return meta2 && typeof meta2 === "object" ? meta2 : {};
    };
    const meta = computed(() => {
      var _a;
      return metaOf((_a = post.value) == null ? void 0 : _a.metaData);
    });
    const category = computed(() => String(meta.value.category || ""));
    const tldr = computed(() => String(meta.value.tldr || ""));
    const sourceUrl = computed(() => String(meta.value.sourceUrl || ""));
    const sourceLabel = computed(() => String(meta.value.sourceLabel || ""));
    const keySpecs = computed(() => Array.isArray(meta.value.keySpecs) ? meta.value.keySpecs : []);
    const faqs = computed(() => Array.isArray(meta.value.faqs) ? meta.value.faqs : []);
    const relatedLinks = computed(() => Array.isArray(meta.value.relatedLinks) ? meta.value.relatedLinks : []);
    useBlogPostingJsonLd("panel-blog-post", post);
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) ? `${post.value.title} - GoPanel` : "GoPanel";
      },
      description: () => {
        var _a;
        return String(((_a = post.value) == null ? void 0 : _a.description) || tldr.value || "");
      },
      ogType: "article"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$X;
      const _component_PageRequestError = PageRequestError;
      const _component_UButton = _sfc_main$S;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))} data-v-20a1de75><div class="max-w-4xl mx-auto px-6 py-12 lg:py-16" data-v-20a1de75>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/blog"),
        class: "inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("panel.blog.backToList"))}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "w-4 h-4"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("panel.blog.backToList")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<div class="animate-pulse space-y-6" data-v-20a1de75><div class="h-5 w-32 bg-gray-100 rounded" data-v-20a1de75></div><div class="h-12 w-3/4 bg-gray-100 rounded" data-v-20a1de75></div><div class="h-40 bg-white rounded-3xl border border-gray-100" data-v-20a1de75></div><div class="h-64 bg-white rounded-3xl border border-gray-100" data-v-20a1de75></div></div>`);
      } else if (unref(requestFailed)) {
        _push(ssrRenderComponent(_component_PageRequestError, { retry: unref(refresh) }, null, _parent));
      } else if (unref(post)) {
        _push(`<article class="space-y-8" data-v-20a1de75><header class="space-y-6" data-v-20a1de75><div class="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-400" data-v-20a1de75>`);
        if (unref(category)) {
          _push(`<span class="px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/10 font-semibold" data-v-20a1de75>${ssrInterpolate(unref(category))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(post).createdAt) {
          _push(`<span class="flex items-center gap-1.5" data-v-20a1de75>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:calendar-blank",
            class: "w-4 h-4"
          }, null, _parent));
          _push(` ${ssrInterpolate(unref(formatDate)(unref(post).createdAt))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(sourceUrl)) {
          _push(`<a${ssrRenderAttr("href", unref(sourceUrl))} target="_blank" rel="noopener noreferrer" class="ml-auto text-blue-600 hover:underline" data-v-20a1de75>${ssrInterpolate(unref(sourceLabel) || _ctx.$t("panel.blog.source"))} \u2197 </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight" data-v-20a1de75>${ssrInterpolate(unref(post).title)}</h1>`);
        if (unref(post).description) {
          _push(`<p class="text-lg text-gray-600 leading-relaxed" data-v-20a1de75>${ssrInterpolate(unref(post).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(tldr)) {
          _push(`<div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-6" data-v-20a1de75><div class="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.tldr"))}</div><p class="text-gray-800 leading-relaxed" data-v-20a1de75>${ssrInterpolate(unref(tldr))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(keySpecs).length) {
          _push(`<div class="rounded-2xl border border-gray-100 bg-gray-50 p-6" data-v-20a1de75><div class="text-sm font-bold text-gray-900 mb-4" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.keySpecs"))}</div><dl class="grid grid-cols-1 sm:grid-cols-2 gap-3" data-v-20a1de75><!--[-->`);
          ssrRenderList(unref(keySpecs), (spec, idx) => {
            _push(`<div class="rounded-xl bg-white border border-gray-100 px-4 py-3" data-v-20a1de75><dt class="text-xs text-gray-400 mb-1" data-v-20a1de75>${ssrInterpolate(spec.label)}</dt><dd class="text-sm font-bold text-gray-900" data-v-20a1de75>${ssrInterpolate(spec.value)}</dd></div>`);
          });
          _push(`<!--]--></dl></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header><div class="go-panel-article prose max-w-none text-gray-700 leading-8" data-v-20a1de75>${(_a = unref(post).content) != null ? _a : ""}</div>`);
        if (unref(faqs).length) {
          _push(`<section class="pt-8 border-t border-gray-100 space-y-4" data-v-20a1de75><h2 class="text-2xl font-extrabold text-gray-900" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.faq"))}</h2><!--[-->`);
          ssrRenderList(unref(faqs), (faq, idx) => {
            _push(`<div class="rounded-2xl border border-gray-100 bg-gray-50 p-5" data-v-20a1de75><h3 class="text-base font-bold text-gray-900 mb-2" data-v-20a1de75> Q: ${ssrInterpolate(faq.question)}</h3><p class="text-sm text-gray-600 leading-relaxed" data-v-20a1de75>${ssrInterpolate(faq.answer)}</p></div>`);
          });
          _push(`<!--]--></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(relatedLinks).length) {
          _push(`<section class="pt-8 border-t border-gray-100 space-y-4" data-v-20a1de75><h2 class="text-2xl font-extrabold text-gray-900" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.related"))}</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-20a1de75><!--[-->`);
          ssrRenderList(unref(relatedLinks), (rel, idx) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: idx,
              to: unref(localePath)(rel.url),
              class: "rounded-2xl border border-gray-100 bg-white p-5 hover:border-blue-300 hover:shadow-sm transition-all"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="font-bold text-blue-600 mb-1" data-v-20a1de75${_scopeId}>${ssrInterpolate(rel.title)} \u2192 </div>`);
                  if (rel.description) {
                    _push2(`<div class="text-sm text-gray-500" data-v-20a1de75${_scopeId}>${ssrInterpolate(rel.description)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "font-bold text-blue-600 mb-1" }, toDisplayString(rel.title) + " \u2192 ", 1),
                    rel.description ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-gray-500"
                    }, toDisplayString(rel.description), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<footer class="pt-8 border-t border-gray-100" data-v-20a1de75>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/blog"),
          variant: "soft",
          size: "lg",
          class: "rounded-full font-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.blog.returnBlog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.blog.returnBlog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</footer></article>`);
      } else {
        _push(`<div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm" data-v-20a1de75>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:file-x-duotone",
          class: "w-16 h-16 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<h1 class="text-2xl font-bold text-gray-900 mb-2" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.notFoundTitle"))}</h1><p class="text-gray-500 mb-6" data-v-20a1de75>${ssrInterpolate(_ctx.$t("panel.blog.notFoundDesc"))}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/blog"),
          variant: "soft"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.blog.returnBlog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.blog.returnBlog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20a1de75"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Dfcy2L66.mjs.map
