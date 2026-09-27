import { br as useUserSession, v as useSettings, h as useToast, f as useI18n, D as useLocaleRouter, b as _sfc_main$G, l as _sfc_main$B, bi as useLocalizedSettings, a as __nuxt_component_3$1, N as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, computed, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1, a as _sfc_main$5 } from './Slideover-CVuYQh_a.mjs';
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

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EmailVerificationBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, loggedIn, ready, fetch } = useUserSession();
    const { getSetting } = useSettings();
    const toast = useToast();
    const { t } = useI18n();
    useLocaleRouter();
    const isSending = ref(false);
    const isRefreshing = ref(false);
    const isLoggingOut = ref(false);
    const cooldown = ref(0);
    let timer = null;
    const policy = computed(() => {
      return getSetting("email_verify_policy") || "banner";
    });
    const isVerified = computed(() => {
      if (!user.value) return true;
      const u = user.value;
      return Boolean(u.emailVerifiedAt || u.emailVerified);
    });
    const userEmail = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.email) || "";
    });
    const showSoftBanner = computed(() => {
      if (!ready.value || !loggedIn.value || !user.value) return false;
      if (policy.value !== "banner") return false;
      return !isVerified.value;
    });
    const showStrictModal = computed(() => {
      if (!ready.value || !loggedIn.value || !user.value) return false;
      if (policy.value !== "strict") return false;
      return !isVerified.value;
    });
    const startCooldown = (seconds = 60) => {
      cooldown.value = seconds;
      if (timer) clearInterval(timer);
      timer = setInterval();
    };
    const resendEmail = async () => {
      var _a;
      if (cooldown.value > 0 || isSending.value) return;
      isSending.value = true;
      try {
        const res = await $fetch("/api/auth/resend-verification", {
          method: "POST",
          body: {
            email: userEmail.value
          }
        });
        if (res == null ? void 0 : res.alreadyVerified) {
          toast.add({
            title: t("site.auth.email_verification.already_verified"),
            color: "success"
          });
          await fetch();
          return;
        }
        startCooldown((res == null ? void 0 : res.cooldownSeconds) || 60);
        toast.add({
          title: t("site.auth.email_verification.toast_sent_title"),
          description: t("site.auth.email_verification.toast_sent_desc", { email: userEmail.value }),
          color: "success"
        });
      } catch (err) {
        const errMsg = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || t("site.auth.email_verification.toast_failed");
        toast.add({
          title: t("common.error"),
          description: errMsg,
          color: "error"
        });
      } finally {
        isSending.value = false;
      }
    };
    const refreshVerificationStatus = async () => {
      var _a, _b;
      if (isRefreshing.value) return;
      isRefreshing.value = true;
      try {
        const res = await $fetch("/api/auth/me");
        await fetch();
        const verified = Boolean(((_a = res == null ? void 0 : res.user) == null ? void 0 : _a.emailVerified) || ((_b = res == null ? void 0 : res.user) == null ? void 0 : _b.emailVerifiedAt) || isVerified.value);
        if (verified) {
          toast.add({
            title: t("site.auth.email_verification.verified_success"),
            color: "success"
          });
        } else {
          toast.add({
            title: t("site.auth.email_verification.still_unverified"),
            color: "warning"
          });
        }
      } catch {
        toast.add({
          title: t("site.auth.email_verification.still_unverified"),
          color: "warning"
        });
      } finally {
        isRefreshing.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (showSoftBanner.value) {
        _push(`<div class="w-full bg-amber-500/10 dark:bg-amber-950/40 border-b border-amber-500/20 dark:border-amber-800/40 px-4 py-2 transition-all duration-300 relative z-30"><div class="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm"><div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-medium truncate">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-simple-fill",
          class: "w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(_ctx.$t("site.auth.email_verification.banner_unverified"))}</span></div><div class="flex items-center gap-2 shrink-0">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "warning",
          variant: "soft",
          class: "rounded-lg font-medium shadow-xs text-xs",
          loading: isSending.value,
          disabled: cooldown.value > 0,
          onClick: resendEmail
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:paper-plane-tilt-bold",
                  class: "w-3.5 h-3.5"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showStrictModal.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/10 dark:bg-black/55 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true"><div class="w-full max-w-md bg-white dark:bg-[#121214] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden p-6 sm:p-8 text-center space-y-6 animate-scale-in"><div class="mx-auto w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-open-duotone",
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</div><div class="space-y-2"><h3 class="text-xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("site.auth.email_verification.strict_modal_title"))}</h3><p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${ssrInterpolate(_ctx.$t("site.auth.email_verification.strict_modal_desc"))}</p>`);
        if (userEmail.value) {
          _push(`<div class="inline-block mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800/80 rounded-full text-xs font-mono text-gray-700 dark:text-gray-300">${ssrInterpolate(userEmail.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3 pt-2">`);
        _push(ssrRenderComponent(_component_UButton, {
          block: "",
          size: "lg",
          color: "primary",
          class: "rounded-xl font-semibold shadow-md py-3",
          loading: isSending.value,
          disabled: cooldown.value > 0,
          onClick: resendEmail
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:paper-plane-tilt-bold",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          block: "",
          size: "lg",
          color: "neutral",
          variant: "soft",
          class: "rounded-xl font-semibold py-3",
          loading: isRefreshing.value,
          onClick: refreshVerificationStatus
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-clockwise-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-clockwise-bold",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("site.auth.email_verification.refresh_status"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("site.auth.email_verification.refresh_status")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="pt-2 border-t border-gray-100 dark:border-gray-800/80"><button type="button" class="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"${ssrIncludeBooleanAttr(isLoggingOut.value) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sign-out",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("site.auth.email_verification.logout_btn"))}</span></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmailVerificationBanner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "EmailVerificationBanner" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  emits: ["open-mobile-menu"],
  setup(__props) {
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_SiteLogo = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur dark:border-gray-800/50 dark:bg-[#09090b]/80" }, _attrs))}><div class="max-w-[1440px] w-full px-6 lg:px-12 mx-auto h-16 flex items-center justify-between"><div class="flex items-center gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-2.5 mr-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(getSetting)("site_logo")) {
              _push2(`<div class="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SiteLogo, {
                "logo-data": unref(getSetting)("site_logo"),
                alt: unref(getLocalizedSetting)("site_name")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl"${_scopeId}><span class="absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm opacity-0 group-hover:opacity-100 dark:opacity-40 dark:animate-pulse transition-opacity duration-700 pointer-events-none"${_scopeId}></span><span class="relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300"${_scopeId}>${ssrInterpolate(unref(getLocalizedSetting)("site_name"))}</span></span>`);
          } else {
            return [
              unref(getSetting)("site_logo") ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              }, [
                createVNode(_component_SiteLogo, {
                  "logo-data": unref(getSetting)("site_logo"),
                  alt: unref(getLocalizedSetting)("site_name")
                }, null, 8, ["logo-data", "alt"])
              ])) : createCommentVNode("", true),
              createVNode("span", { class: "relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl" }, [
                createVNode("span", { class: "absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm opacity-0 group-hover:opacity-100 dark:opacity-40 dark:animate-pulse transition-opacity duration-700 pointer-events-none" }),
                createVNode("span", { class: "relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300" }, toDisplayString(unref(getLocalizedSetting)("site_name")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "transition-colors hover:text-purple-500 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "transition-colors hover:text-purple-500 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "transition-colors hover:text-purple-500 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "transition-colors hover:text-purple-500 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex items-center gap-4"><div class="hidden md:block">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/login",
        class: "text-sm text-gray-600 transition-colors hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white rounded-full px-6 font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            }, {
              leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "ph:user-fill" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "ph:user-fill" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login `);
                } else {
                  return [
                    createTextVNode(" Login ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white rounded-full px-6 font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              }, {
                leading: withCtx(() => [
                  createVNode(_component_Icon, { name: "ph:user-fill" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" Login ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:list-bold",
        class: "md:hidden",
        onClick: ($event) => _ctx.$emit("open-mobile-menu")
      }, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AppHeader" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppMobileMenu",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    const innerOpen = computed({
      get: () => props.open,
      set: (val) => emit("update:open", val)
    });
    const closeMenu = () => {
      innerOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlideover = _sfc_main$5;
      const _component_SiteLogo = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$B;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_USlideover, mergeProps({
        open: unref(innerOpen),
        "onUpdate:open": ($event) => isRef(innerOpen) ? innerOpen.value = $event : null,
        side: "left"
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col bg-white p-6 text-gray-900 dark:bg-[#09090b] dark:text-gray-100"${_scopeId}><div class="flex items-center justify-between mb-8"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}>`);
            if (unref(getSetting)("site_logo")) {
              _push2(`<div class="w-8 h-8 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SiteLogo, {
                "logo-data": unref(getSetting)("site_logo"),
                alt: unref(getLocalizedSetting)("site_name")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl"${_scopeId}><span class="absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm dark:opacity-40 dark:animate-pulse pointer-events-none"${_scopeId}></span><span class="relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"${_scopeId}>${ssrInterpolate(unref(getLocalizedSetting)("site_name"))}</span></span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              onClick: closeMenu
            }, null, _parent2, _scopeId));
            _push2(`</div><nav class="flex flex-col flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/products",
              class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Products`);
                } else {
                  return [
                    createTextVNode("Products")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/pricing",
              class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pricing`);
                } else {
                  return [
                    createTextVNode("Pricing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/about",
              class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`About`);
                } else {
                  return [
                    createTextVNode("About")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contact",
              class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact`);
                } else {
                  return [
                    createTextVNode("Contact")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-auto pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/login",
              onClick: closeMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    class: "w-full justify-center bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "ph:user-fill" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "ph:user-fill" })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Login `);
                      } else {
                        return [
                          createTextVNode(" Login ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "primary",
                      class: "w-full justify-center bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    }, {
                      leading: withCtx(() => [
                        createVNode(_component_Icon, { name: "ph:user-fill" })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Login ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></nav></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col bg-white p-6 text-gray-900 dark:bg-[#09090b] dark:text-gray-100" }, [
                createVNode("div", { class: "flex items-center justify-between mb-8" }, [
                  createVNode("div", { class: "flex items-center gap-2.5" }, [
                    unref(getSetting)("site_logo") ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-8 h-8 flex items-center justify-center"
                    }, [
                      createVNode(_component_SiteLogo, {
                        "logo-data": unref(getSetting)("site_logo"),
                        alt: unref(getLocalizedSetting)("site_name")
                      }, null, 8, ["logo-data", "alt"])
                    ])) : createCommentVNode("", true),
                    createVNode("span", { class: "relative inline-flex items-center font-bold tracking-tight text-lg sm:text-xl" }, [
                      createVNode("span", { class: "absolute -inset-x-1.5 -inset-y-0.5 rounded-lg bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-cyan-500/15 blur-sm dark:opacity-40 dark:animate-pulse pointer-events-none" }),
                      createVNode("span", { class: "relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-indigo-200/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" }, toDisplayString(unref(getLocalizedSetting)("site_name")), 1)
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    onClick: closeMenu
                  })
                ]),
                createVNode("nav", { class: "flex flex-col flex-1" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
                    onClick: closeMenu
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Home")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/products",
                    class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
                    onClick: closeMenu
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Products")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/pricing",
                    class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
                    onClick: closeMenu
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Pricing")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/about",
                    class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
                    onClick: closeMenu
                  }, {
                    default: withCtx(() => [
                      createTextVNode("About")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/contact",
                    class: "rounded-xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white",
                    onClick: closeMenu
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Contact")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-auto pt-8" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/admin/login",
                      onClick: closeMenu
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "primary",
                          class: "w-full justify-center bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        }, {
                          leading: withCtx(() => [
                            createVNode(_component_Icon, { name: "ph:user-fill" })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Login ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppMobileMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AppMobileMenu" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { getLocalizedSetting } = useLocalizedSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-20 border-t border-gray-200/80 py-12 dark:border-gray-800/50" }, _attrs))}><div class="max-w-7xl mx-auto px-4"><div class="flex flex-col md:flex-row items-center justify-between"><p class="text-sm leading-6 text-gray-500 dark:text-gray-500"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(getLocalizedSetting)("site_name", "Your Site"))}. All rights reserved. <span class="ml-1">Designed &amp; Developed by <a href="https://apay.run/" target="_blank" class="text-gray-600 transition-colors hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400">APay</a></span></p><div class="flex items-center space-x-4 mt-4 md:mt-0"><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white" aria-label="Twitter">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:twitter-logo-fill",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</a><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white" aria-label="LinkedIn">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:linkedin-logo-fill",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</a><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white" aria-label="YouTube">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:youtube-logo-fill",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</a><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white" aria-label="GitHub">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:github-logo-fill",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</a></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      const _component_AppMobileMenu = __nuxt_component_2;
      const _component_AppFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-gray-900 font-sans dark:bg-[#09090b] dark:text-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_EmailVerificationBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, {
        onOpenMobileMenu: ($event) => isMobileMenuOpen.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_AppMobileMenu, {
        open: isMobileMenuOpen.value,
        "onUpdate:open": ($event) => isMobileMenuOpen.value = $event
      }, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("core/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
