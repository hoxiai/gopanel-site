import { u as useI18n, H as useRoute, D as useLocaleRouter, bq as useCustomerAuth, br as useSeoMeta, O as __nuxt_component_3$1, o as navigateTo } from './server.mjs';
import { _ as __nuxt_component_1 } from './CaptchaSlider-BJqv3jPw.mjs';
import { defineComponent, reactive, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-qis7SKx2.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { login } = useCustomerAuth();
    const form = reactive({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const error = ref("");
    const captchaRef = ref(null);
    const captchaTicket = ref("");
    const safeRedirect = computed(() => {
      const raw = route.query.redirect;
      return typeof raw === "string" && raw.startsWith("/") && !raw.startsWith("//") ? raw : "";
    });
    const registerLink = computed(() => {
      const base = localePath("/auth/register");
      return safeRedirect.value ? `${base}?redirect=${encodeURIComponent(safeRedirect.value)}` : base;
    });
    const displayError = computed(() => error.value);
    async function redirectAfterAuth() {
      const target = safeRedirect.value || localePath("/user/dashboard");
      await navigateTo(target, { replace: true });
    }
    async function handleCaptchaSuccess(ticket) {
      captchaTicket.value = ticket;
      await handleLogin();
    }
    async function handleLogin() {
      var _a, _b, _c;
      if (loading.value) return;
      loading.value = true;
      error.value = "";
      try {
        await login({
          email: form.email.trim(),
          password: form.password,
          captchaTicket: captchaTicket.value || void 0
        });
        captchaTicket.value = "";
        await redirectAfterAuth();
      } catch (err) {
        error.value = (err == null ? void 0 : err.message) || ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || t("panel.auth.loginFailed");
        if ((err == null ? void 0 : err.needCaptcha) || ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.needCaptcha) || (err == null ? void 0 : err.statusCode) === 403) {
          captchaTicket.value = "";
          (_c = captchaRef.value) == null ? void 0 : _c.show();
        }
      } finally {
        loading.value = false;
      }
    }
    useSeoMeta({
      title: () => t("panel.auth.loginTitle"),
      description: () => t("panel.auth.loginSubtitle"),
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_CaptchaSlider = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12 bg-gray-50" }, _attrs))}><div class="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 shadow-sm"><div class="flex flex-col items-center text-center mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="GoPanel" class="h-10"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "GoPanel",
                class: "h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-xl font-bold text-gray-900 tracking-tight">${ssrInterpolate(_ctx.$t("panel.auth.loginTitle"))}</h1><p class="mt-1.5 text-xs text-gray-500 leading-relaxed">${ssrInterpolate(_ctx.$t("panel.auth.loginSubtitle"))}</p></div><form class="space-y-4"><div><label class="block text-xs font-semibold text-gray-700 mb-1.5">${ssrInterpolate(_ctx.$t("panel.auth.email"))}</label><input${ssrRenderAttr("value", form.email)} type="email" required autocomplete="email"${ssrRenderAttr("placeholder", _ctx.$t("panel.auth.emailPlaceholder"))} class="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 transition-colors"></div><div><label class="block text-xs font-semibold text-gray-700 mb-1.5">${ssrInterpolate(_ctx.$t("panel.auth.password"))}</label><input${ssrRenderAttr("value", form.password)} type="password" required autocomplete="current-password"${ssrRenderAttr("placeholder", _ctx.$t("panel.auth.passwordPlaceholder"))} class="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 transition-colors"></div>`);
      if (displayError.value) {
        _push(`<div class="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs text-rose-600">${ssrInterpolate(displayError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full h-10 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-sm">${ssrInterpolate(loading.value ? _ctx.$t("panel.auth.signingIn") : _ctx.$t("panel.auth.signIn"))}</button></form><div class="mt-6 pt-5 border-t border-gray-100 text-center text-xs text-gray-500"><span>${ssrInterpolate(_ctx.$t("panel.auth.noAccount"))}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: registerLink.value,
        class: "ml-1.5 font-semibold text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.auth.createAccount"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.auth.createAccount")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_CaptchaSlider, {
        ref_key: "captchaRef",
        ref: captchaRef,
        onSuccess: handleCaptchaSuccess
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Dh3ezg09.mjs.map
