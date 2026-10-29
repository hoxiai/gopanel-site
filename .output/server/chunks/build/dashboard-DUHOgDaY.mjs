import { u as useI18n, r as useSettings, bs as useSeoMeta, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { getSetting } = useSettings();
    const fallbackLimit = computed(() => Number(getSetting("monitor_free_limit")) || 3);
    const stats = ref(null);
    const loading = ref(true);
    const error = ref("");
    const cards = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return [
        {
          label: t("panel.member.overview.targetsLabel"),
          value: `${(_b = (_a = stats.value) == null ? void 0 : _a.used) != null ? _b : 0} / ${(_d = (_c = stats.value) == null ? void 0 : _c.limit) != null ? _d : fallbackLimit.value}`,
          icon: "ph:crosshair-duotone"
        },
        { label: t("panel.member.overview.serversLabel"), value: String((_f = (_e = stats.value) == null ? void 0 : _e.servers) != null ? _f : 0), icon: "ph:hard-drives-duotone" },
        { label: t("panel.member.overview.alertsLabel"), value: String((_h = (_g = stats.value) == null ? void 0 : _g.alerts) != null ? _h : 0), icon: "ph:warning-octagon-duotone" }
      ];
    });
    useSeoMeta({
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid grid-cols-1 gap-4 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(cards.value, (card) => {
        _push(`<div class="rounded-2xl border border-gray-100 bg-white p-5"><div class="flex items-center justify-between"><span class="text-sm text-gray-500">${ssrInterpolate(card.label)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "w-5 h-5 text-blue-500"
        }, null, _parent));
        _push(`</div><div class="mt-2 text-2xl font-bold tabular-nums text-gray-900">`);
        if (loading.value) {
          _push(`<span class="text-gray-300">\u2014</span>`);
        } else {
          _push(`<span>${ssrInterpolate(card.value)}</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (error.value) {
        _push(`<div class="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-600"><span>${ssrInterpolate(error.value)}</span><button type="button" class="ml-2 font-semibold underline">${ssrInterpolate(_ctx.$t("panel.member.overview.retry"))}</button></div>`);
      } else if (!loading.value && stats.value && stats.value.used + stats.value.servers === 0) {
        _push(`<div class="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:radar-duotone",
          class: "h-6 w-6 text-blue-500"
        }, null, _parent));
        _push(`</div><h2 class="mt-4 text-base font-semibold text-gray-900">${ssrInterpolate(_ctx.$t("panel.member.overview.emptyTitle"))}</h2><p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">${ssrInterpolate(_ctx.$t("panel.member.overview.emptyDesc"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/user/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DUHOgDaY.mjs.map
