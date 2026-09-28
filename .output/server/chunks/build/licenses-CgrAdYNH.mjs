import { r as useSettings, bf as useSeoMeta, b as _sfc_main$k, i as _sfc_main$D, _ as _sfc_main$I } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, isRef, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "licenses",
  __ssrInlineRender: true,
  setup(__props) {
    const { getSetting } = useSettings();
    useSeoMeta({
      title: "\u6388\u6743\u8BB8\u53EF\u534F\u8BAE - GoPanel",
      description: "GoPanel \u6388\u6743\u8BB8\u53EF\u534F\u8BAE\u4E0E\u4EA4\u4ED8\u4FE1\u606F\u67E5\u8BE2"
    });
    const effectiveDate = computed(() => {
      const v = getSetting("license_effective_date");
      return v || "2026-01-01";
    });
    const orderId = ref("");
    const loading = ref(false);
    const errorMessage = ref("");
    const copied = ref(false);
    const result = ref(null);
    const normalizeOrderId = (v) => v.trim();
    const handleQuery = async () => {
      var _a, _b;
      errorMessage.value = "";
      result.value = null;
      copied.value = false;
      const id = normalizeOrderId(orderId.value);
      if (!id) {
        errorMessage.value = "\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7\u3002";
        return;
      }
      loading.value = true;
      try {
        const url = `/api/orders/status?orderId=${encodeURIComponent(id)}`;
        const resp = await $fetch(url);
        const data = resp == null ? void 0 : resp.data;
        if (!(data == null ? void 0 : data.id)) {
          errorMessage.value = (resp == null ? void 0 : resp.message) || "\u672A\u67E5\u8BE2\u5230\u8BA2\u5355\u4FE1\u606F\u3002";
          return;
        }
        result.value = {
          id: String(data.id),
          amount: Number(data.amount || 0),
          status: String(data.status || ""),
          payStatus: String(data.payStatus || ""),
          deliveryInfo: (_a = data.deliveryInfo) != null ? _a : null
        };
      } catch (e) {
        errorMessage.value = ((_b = e == null ? void 0 : e.data) == null ? void 0 : _b.message) || (e == null ? void 0 : e.message) || "\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$D;
      const _component_UIcon = _sfc_main$I;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 lg:pb-24"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2"> \u6388\u6743\u534F\u8BAE\u4E0E\u67E5\u8BE2 </div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]"> GoPanel \u6388\u6743\u8BB8\u53EF\u534F\u8BAE </h1><p class="text-lg text-gray-600 leading-relaxed"> \u672C\u9875\u9762\u7528\u4E8E\u8BF4\u660E GoPanel \u7684\u6388\u6743\u8BB8\u53EF\u6761\u6B3E\uFF0C\u5E76\u63D0\u4F9B\u6388\u6743\u4EA4\u4ED8\u4FE1\u606F\u7684\u81EA\u52A9\u67E5\u8BE2\u5165\u53E3\u3002 </p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-10"><div class="lg:col-span-1"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><h2 class="text-xl font-bold text-gray-900 mb-2">\u6388\u6743\u67E5\u8BE2</h2><p class="text-sm text-gray-500 mb-8"> \u901A\u8FC7\u8BA2\u5355\u53F7\u67E5\u8BE2\u5DF2\u8D2D\u4E70\u6388\u6743\u7684\u4EA4\u4ED8\u4FE1\u606F\uFF08\u9700\u4E0E\u4E0B\u5355\u6D4F\u89C8\u5668\u4FDD\u6301\u4E00\u81F4\uFF09\u3002 </p><div class="space-y-4"><div><div class="text-sm font-semibold text-gray-700 mb-2">\u8BA2\u5355\u53F7</div>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(orderId),
        "onUpdate:modelValue": ($event) => isRef(orderId) ? orderId.value = $event : null,
        size: "lg",
        placeholder: "\u4F8B\u5982\uFF1A2026xxxxxxxxxxxx",
        class: "w-full"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        loading: unref(loading),
        class: "w-full rounded-xl font-bold py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all",
        onClick: handleQuery
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u8BE2\u4EA4\u4ED8\u4FE1\u606F `);
          } else {
            return [
              createTextVNode(" \u67E5\u8BE2\u4EA4\u4ED8\u4FE1\u606F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errorMessage)) {
        _push(`<div class="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-4">${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(result)) {
        _push(`<div class="bg-white border border-gray-100 rounded-2xl p-5"><div class="flex items-center justify-between gap-3 mb-3"><div class="text-sm font-bold text-gray-900">\u67E5\u8BE2\u7ED3\u679C</div><div class="${ssrRenderClass([unref(result).payStatus === "paid" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100", "text-xs font-semibold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(unref(result).payStatus === "paid" ? "\u5DF2\u652F\u4ED8" : "\u672A\u652F\u4ED8/\u672A\u786E\u8BA4")}</div></div><div class="grid grid-cols-1 gap-3 text-sm text-gray-700"><div class="flex items-center justify-between gap-3"><span class="text-gray-500">\u8BA2\u5355\u53F7</span><span class="font-mono text-xs text-gray-900 truncate max-w-[220px]">${ssrInterpolate(unref(result).id)}</span></div><div class="flex items-center justify-between gap-3"><span class="text-gray-500">\u91D1\u989D</span><span class="font-semibold text-gray-900">${ssrInterpolate(unref(result).amount)}</span></div><div class="flex items-center justify-between gap-3"><span class="text-gray-500">\u72B6\u6001</span><span class="font-semibold text-gray-900">${ssrInterpolate(unref(result).status)}</span></div></div><div class="mt-5"><div class="flex items-center justify-between mb-2"><div class="text-sm font-semibold text-gray-800">\u4EA4\u4ED8\u4FE1\u606F</div>`);
        if (unref(result).deliveryInfo) {
          _push(`<button type="button" class="text-xs font-semibold text-blue-600 hover:text-blue-700"> \u590D\u5236 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap break-words min-h-[56px]">${ssrInterpolate(unref(result).deliveryInfo || "\u672A\u67E5\u8BE2\u5230\u4EA4\u4ED8\u4FE1\u606F\uFF08\u53EF\u80FD\u672A\u652F\u4ED8\u5B8C\u6210\u6216\u8BA2\u5355\u4E0D\u5C5E\u4E8E\u5F53\u524D\u6D4F\u89C8\u5668\uFF09\u3002")}</div>`);
        if (unref(copied)) {
          _push(`<div class="mt-2 text-xs text-emerald-600 font-semibold"> \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed"> \u5982\u4F60\u5728\u5176\u4ED6\u8BBE\u5907\u4E0B\u5355\uFF0C\u8BF7\u5728\u539F\u4E0B\u5355\u8BBE\u5907/\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u672C\u9875\u9762\u518D\u67E5\u8BE2\uFF1B\u6216\u767B\u5F55\u540E\u5728\u7528\u6237\u4E2D\u5FC3\u67E5\u770B\u8BA2\u5355\u8BE6\u60C5\u3002 </div></div></div><div class="lg:col-span-2"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><div class="flex items-start justify-between gap-6 mb-8"><div><h2 class="text-2xl font-extrabold text-gray-900 mb-2">\u8BB8\u53EF\u6761\u6B3E\uFF08\u7B80\u7248\uFF09</h2><p class="text-gray-600"> \u8D2D\u4E70\u5E76\u4F7F\u7528 GoPanel \u5373\u8868\u793A\u4F60\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u4EE5\u4E0B\u6761\u6B3E\u3002\u82E5\u4E0E\u6B63\u5F0F\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u4EE5\u6B63\u5F0F\u534F\u8BAE\u4E3A\u51C6\u3002 </p></div><div class="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600"> \u751F\u6548\u65E5\u671F\uFF1A${ssrInterpolate(unref(effectiveDate))}</div></div><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">1. \u6388\u6743\u8303\u56F4</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u6388\u6743\u4EC5\u7528\u4E8E\u5408\u6CD5\u7528\u9014\u7684\u670D\u52A1\u5668\u7BA1\u7406\u4E0E\u8FD0\u7EF4\u573A\u666F\uFF0C\u4E0D\u5F97\u7528\u4E8E\u4EFB\u4F55\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u6216\u4FB5\u5BB3\u4ED6\u4EBA\u6743\u76CA\u7684\u884C\u4E3A\u3002</p><p>\u6388\u6743\u7C7B\u578B\u4EE5\u4F60\u8D2D\u4E70\u7684\u5546\u54C1\u8BF4\u660E\u4E3A\u51C6\uFF08\u8BA2\u9605\u3001\u6C38\u4E45\u6388\u6743\u3001\u6216\u5176\u5B83\u6388\u6743\u5F62\u6001\uFF09\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">2. \u4F7F\u7528\u9650\u5236</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u7981\u6B62\u5BF9 GoPanel \u8FDB\u884C\u9006\u5411\u5DE5\u7A0B\u3001\u7834\u89E3\u3001\u7ED5\u8FC7\u6388\u6743\u6821\u9A8C\u3001\u4E8C\u6B21\u5206\u53D1\u6216\u552E\u5356\u6388\u6743\u51ED\u8BC1\u3002</p><p>\u7981\u6B62\u79FB\u9664\u6216\u7BE1\u6539\u4EA7\u54C1\u4E2D\u7684\u7248\u6743\u3001\u5546\u6807\u4E0E\u6743\u5229\u58F0\u660E\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">3. \u4EA4\u4ED8\u4E0E\u7ED1\u5B9A</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u652F\u4ED8\u6210\u529F\u540E\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u53D1\u653E\u4EA4\u4ED8\u4FE1\u606F\uFF08\u5982\u6388\u6743\u7801\u3001\u4E0B\u8F7D\u5730\u5740\u3001\u4F7F\u7528\u8BF4\u660E\u7B49\uFF09\u3002</p><p>\u5982\u6388\u6743\u5B58\u5728\u7ED1\u5B9A\u89C4\u5219\uFF08\u8BBE\u5907/\u8282\u70B9\u6570/\u5230\u671F\u65F6\u95F4/\u529F\u80FD\u8303\u56F4\uFF09\uFF0C\u4EE5\u5546\u54C1\u9875\u9762\u6216\u4EA4\u4ED8\u8BF4\u660E\u4E3A\u51C6\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">4. \u9000\u6B3E\u4E0E\u98CE\u63A7</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>\u6570\u5B57\u5316\u5546\u54C1\u4E00\u7ECF\u4EA4\u4ED8\u53EF\u80FD\u65E0\u6CD5\u64A4\u56DE\uFF0C\u56E0\u6B64\u9000\u6B3E\u653F\u7B56\u4EE5\u5546\u54C1\u9875\u8BF4\u660E\u4E0E\u552E\u540E\u653F\u7B56\u4E3A\u51C6\u3002</p><p>\u82E5\u68C0\u6D4B\u5230\u5F02\u5E38\u4F7F\u7528\u3001\u5171\u4EAB/\u5012\u5356\u6388\u6743\u6216\u5176\u4ED6\u9AD8\u98CE\u9669\u884C\u4E3A\uFF0C\u5E73\u53F0\u6709\u6743\u6682\u505C\u670D\u52A1\u5E76\u4FDD\u7559\u8FFD\u8D23\u6743\u5229\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">5. \u514D\u8D23\u58F0\u660E</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>GoPanel \u6309\u201C\u73B0\u72B6\u201D\u63D0\u4F9B\u3002\u6211\u4EEC\u5C06\u6301\u7EED\u4F18\u5316\uFF0C\u4F46\u4E0D\u5BF9\u56E0\u4E0D\u53EF\u6297\u529B\u3001\u7B2C\u4E09\u65B9\u670D\u52A1\u6545\u969C\u3001\u914D\u7F6E\u9519\u8BEF\u7B49\u9020\u6210\u7684\u635F\u5931\u627F\u62C5\u8D23\u4EFB\u3002</p><p>\u4F60\u5E94\u81EA\u884C\u505A\u597D\u6570\u636E\u5907\u4EFD\u3001\u6743\u9650\u7BA1\u7406\u4E0E\u5B89\u5168\u52A0\u56FA\uFF0C\u5E76\u5BF9\u81EA\u8EAB\u4F7F\u7528\u884C\u4E3A\u8D1F\u8D23\u3002</p></div></details></div><div class="mt-10 pt-8 border-t border-gray-100"><div class="text-sm text-gray-500 leading-relaxed"> \u82E5\u4F60\u9700\u8981\u4F01\u4E1A\u6388\u6743\u6761\u6B3E\u3001\u6279\u91CF\u91C7\u8D2D\u3001\u53D1\u7968\u6216\u5B9A\u5236\u529F\u80FD\uFF0C\u8BF7\u8054\u7CFB\u5546\u52A1\u652F\u6301\u3002\u82E5\u4F60\u5BF9\u6761\u6B3E\u6709\u7591\u95EE\uFF0C\u53EF\u63D0\u4EA4\u5DE5\u5355\u6216\u901A\u8FC7\u793E\u533A\u6E20\u9053\u54A8\u8BE2\u3002 </div></div></div><div class="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-3">\u5E38\u89C1\u95EE\u9898</h2><div class="text-gray-600 mb-8">\u4F18\u5148\u89E3\u7B54\u8D2D\u4E70\u540E\u6700\u5E38\u89C1\u7684\u67E5\u8BE2\u4E0E\u6388\u6743\u95EE\u9898\u3002</div><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u67E5\u8BE2\u4E0D\u5230\u4EA4\u4ED8\u4FE1\u606F\u600E\u4E48\u529E\uFF1F</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>1) \u8BF7\u786E\u8BA4\u8BA2\u5355\u5DF2\u652F\u4ED8\u6210\u529F\uFF1B\u672A\u652F\u4ED8\u8BA2\u5355\u4E0D\u4F1A\u663E\u793A\u4EA4\u4ED8\u4FE1\u606F\u3002</p><p>2) \u8BF7\u5728\u4E0B\u5355\u65F6\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E2D\u67E5\u8BE2\uFF08\u7CFB\u7EDF\u4F1A\u6821\u9A8C\u6D4F\u89C8\u5668\u8BBF\u5BA2\u6807\u8BC6\uFF09\u3002</p><p>3) \u82E5\u5DF2\u767B\u5F55\uFF0C\u8BF7\u8FDB\u5165\u7528\u6237\u4E2D\u5FC3\u67E5\u770B\u8BA2\u5355\u8BE6\u60C5\u3002</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">\u6388\u6743\u7801\u53EF\u4EE5\u591A\u4EBA\u5171\u4EAB\u5417\uFF1F</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed"> \u4E0D\u53EF\u4EE5\u3002\u6388\u6743\u4EC5\u9650\u8D2D\u4E70\u65B9\u5728\u8BB8\u53EF\u8303\u56F4\u5185\u4F7F\u7528\u3002\u5171\u4EAB\u3001\u5012\u5356\u6216\u516C\u5F00\u4F20\u64AD\u6388\u6743\u7801\u5C06\u89E6\u53D1\u98CE\u63A7\u5904\u7406\u3002 </div></details></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/licenses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
