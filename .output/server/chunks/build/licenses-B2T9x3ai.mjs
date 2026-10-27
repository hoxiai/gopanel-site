import { r as useSettings, u as useI18n, bq as useSeoMeta, b as _sfc_main$v, i as _sfc_main$R, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, isRef, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("panel.licenses.metaTitle"),
      description: () => t("panel.licenses.metaDesc")
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
        errorMessage.value = t("panel.licenses.enterOrder");
        return;
      }
      loading.value = true;
      try {
        const url = `/api/orders/status?orderId=${encodeURIComponent(id)}`;
        const resp = await $fetch(url);
        const data = resp == null ? void 0 : resp.data;
        if (!(data == null ? void 0 : data.id)) {
          errorMessage.value = (resp == null ? void 0 : resp.message) || t("panel.licenses.notFoundOrder");
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
        errorMessage.value = ((_b = e == null ? void 0 : e.data) == null ? void 0 : _b.message) || (e == null ? void 0 : e.message) || t("panel.licenses.queryFailed");
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$v;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white selection:bg-blue-100" }, _attrs))}><section class="max-w-[1400px] mx-auto px-6 pt-16 pb-16 lg:pb-24"><div class="mx-auto max-w-4xl text-center"><div class="mb-8 flex justify-center"><div class="relative rounded-full px-4 py-1.5 text-sm font-medium leading-6 text-blue-600 bg-blue-50 ring-1 ring-blue-500/20 hover:bg-blue-100 transition-colors flex items-center gap-2">${ssrInterpolate(_ctx.$t("panel.licenses.badge"))}</div></div><h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.1]">${ssrInterpolate(_ctx.$t("panel.licenses.title"))}</h1><p class="text-lg text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.licenses.subtitle"))}</p></div></section><section class="bg-gray-50 border-y border-gray-100"><div class="max-w-[1400px] mx-auto px-6 py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-10"><div class="lg:col-span-1"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sticky top-24"><h2 class="text-xl font-bold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.licenses.query"))}</h2><p class="text-sm text-gray-500 mb-8">${ssrInterpolate(_ctx.$t("panel.licenses.queryDesc"))}</p><div class="space-y-4"><div><div class="text-sm font-semibold text-gray-700 mb-2">${ssrInterpolate(_ctx.$t("panel.licenses.orderId"))}</div>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(orderId),
        "onUpdate:modelValue": ($event) => isRef(orderId) ? orderId.value = $event : null,
        size: "lg",
        placeholder: _ctx.$t("panel.licenses.orderPlaceholder"),
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
            _push2(`${ssrInterpolate(_ctx.$t("panel.licenses.queryBtn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.licenses.queryBtn")), 1)
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
        _push(`<div class="bg-white border border-gray-100 rounded-2xl p-5"><div class="flex items-center justify-between gap-3 mb-3"><div class="text-sm font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.resultTitle"))}</div><div class="${ssrRenderClass([unref(result).payStatus === "paid" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100", "text-xs font-semibold px-2.5 py-1 rounded-full"])}">${ssrInterpolate(unref(result).payStatus === "paid" ? _ctx.$t("panel.licenses.paid") : _ctx.$t("panel.licenses.unpaid"))}</div></div><div class="grid grid-cols-1 gap-3 text-sm text-gray-700"><div class="flex items-center justify-between gap-3"><span class="text-gray-500">${ssrInterpolate(_ctx.$t("panel.licenses.orderId"))}</span><span class="font-mono text-xs text-gray-900 truncate max-w-[220px]">${ssrInterpolate(unref(result).id)}</span></div><div class="flex items-center justify-between gap-3"><span class="text-gray-500">${ssrInterpolate(_ctx.$t("panel.licenses.amount"))}</span><span class="font-semibold text-gray-900">${ssrInterpolate(unref(result).amount)}</span></div><div class="flex items-center justify-between gap-3"><span class="text-gray-500">${ssrInterpolate(_ctx.$t("panel.licenses.status"))}</span><span class="font-semibold text-gray-900">${ssrInterpolate(unref(result).status)}</span></div></div><div class="mt-5"><div class="flex items-center justify-between mb-2"><div class="text-sm font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("panel.licenses.delivery"))}</div>`);
        if (unref(result).deliveryInfo) {
          _push(`<button type="button" class="text-xs font-semibold text-blue-600 hover:text-blue-700">${ssrInterpolate(_ctx.$t("panel.common.copy"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap break-words min-h-[56px]">${ssrInterpolate(unref(result).deliveryInfo || _ctx.$t("panel.licenses.noDelivery"))}</div>`);
        if (unref(copied)) {
          _push(`<div class="mt-2 text-xs text-emerald-600 font-semibold">${ssrInterpolate(_ctx.$t("panel.common.copied"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.licenses.hint"))}</div></div></div><div class="lg:col-span-2"><div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><div class="flex items-start justify-between gap-6 mb-8"><div><h2 class="text-2xl font-extrabold text-gray-900 mb-2">${ssrInterpolate(_ctx.$t("panel.licenses.termsTitle"))}</h2><p class="text-gray-600">${ssrInterpolate(_ctx.$t("panel.licenses.termsDesc"))}</p></div><div class="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600">${ssrInterpolate(_ctx.$t("panel.licenses.effectiveDate", { date: unref(effectiveDate) }))}</div></div><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.term1Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.term1p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.term1p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.term2Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.term2p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.term2p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.term3Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.term3p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.term3p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.term4Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.term4p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.term4p2"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.term5Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.term5p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.term5p2"))}</p></div></details></div><div class="mt-10 pt-8 border-t border-gray-100"><div class="text-sm text-gray-500 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.licenses.contact"))}</div></div></div><div class="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-10"><h2 class="text-2xl font-extrabold text-gray-900 mb-3">${ssrInterpolate(_ctx.$t("panel.licenses.faqTitle"))}</h2><div class="text-gray-600 mb-8">${ssrInterpolate(_ctx.$t("panel.licenses.faqDesc"))}</div><div class="space-y-4"><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6" open><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.faq1Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed space-y-3"><p>${ssrInterpolate(_ctx.$t("panel.licenses.faq1p1"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.faq1p2"))}</p><p>${ssrInterpolate(_ctx.$t("panel.licenses.faq1p3"))}</p></div></details><details class="group rounded-2xl border border-gray-100 bg-gray-50 p-6"><summary class="cursor-pointer list-none flex items-center justify-between gap-4"><div class="font-bold text-gray-900">${ssrInterpolate(_ctx.$t("panel.licenses.faq2Title"))}</div><div class="text-gray-400 group-open:rotate-180 transition-transform">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div></summary><div class="mt-4 text-gray-600 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.licenses.faq2p1"))}</div></details></div></div></div></div></div></section></div>`);
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
//# sourceMappingURL=licenses-B2T9x3ai.mjs.map
