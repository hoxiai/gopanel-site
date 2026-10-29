import { H as useRoute, D as useLocaleRouter, bz as useUserSession, u as useI18n, aw as _sfc_main$W, O as __nuxt_component_3$1, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
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

const persistentDirectoryLayout = true;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { user } = useUserSession();
    const { t } = useI18n();
    const userLabel = computed(
      () => {
        var _a, _b, _c;
        return ((_a = user.value) == null ? void 0 : _a.nickName) || ((_b = user.value) == null ? void 0 : _b.nickname) || ((_c = user.value) == null ? void 0 : _c.email) || t("panel.member.shell.guest");
      }
    );
    const userEmail = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.email) || "";
    });
    const userAvatar = computed(
      () => {
        var _a;
        return ((_a = user.value) == null ? void 0 : _a.avatarUrl) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userEmail.value || userLabel.value || "gopanel")}`;
      }
    );
    const navItems = computed(() => [
      { key: "dashboard", label: t("panel.member.nav.dashboard"), icon: "ph:gauge-duotone", to: "/user/dashboard" },
      { key: "monitors", label: t("panel.member.nav.monitors"), icon: "ph:crosshair-duotone", to: "/user/monitors" },
      { key: "notify", label: t("panel.member.nav.notify"), icon: "ph:bell-duotone", to: "/user/notify" }
    ]);
    const isActive = (path) => {
      const targetPath = localePath(path);
      return route.path === targetPath || route.path.startsWith(`${targetPath}/`);
    };
    const currentTitle = computed(() => {
      const match = navItems.value.find((item) => isActive(item.to));
      return (match == null ? void 0 : match.label) || t("panel.member.nav.dashboard");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}><div class="max-w-[1400px] mx-auto px-6 lg:px-10 py-8"><div class="flex flex-col gap-8 lg:flex-row"><aside class="w-full lg:w-60 lg:shrink-0"><div class="lg:sticky lg:top-24 space-y-4"><div class="rounded-2xl border border-gray-100 bg-white p-4"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UAvatar, {
        src: userAvatar.value,
        alt: userLabel.value,
        size: "sm"
      }, null, _parent));
      _push(`<div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold text-gray-900">${ssrInterpolate(userLabel.value)}</p><p class="truncate text-xs text-gray-500">${ssrInterpolate(userEmail.value)}</p></div></div></div><nav class="rounded-2xl border border-gray-100 bg-white p-2"><div class="px-3 py-2 text-xs font-medium text-gray-400">${ssrInterpolate(_ctx.$t("panel.member.shell.mainNavigation"))}</div><!--[-->`);
      ssrRenderList(navItems.value, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.key,
          to: unref(localePath)(item.to),
          class: ["flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "w-4 h-4 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: "w-4 h-4 shrink-0"
                }, null, 8, ["name"]),
                createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></aside><main class="min-w-0 flex-1"><div class="mb-6"><h1 class="text-2xl font-bold tracking-tight text-gray-900">${ssrInterpolate(currentTitle.value)}</h1></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/user/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default, persistentDirectoryLayout };
//# sourceMappingURL=layout-msTZWOto.mjs.map
