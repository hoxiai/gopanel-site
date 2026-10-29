import { u as useI18n, d as useFormatTime, U as useRequestURL, bs as useSeoMeta, i as _sfc_main$T, _ as _sfc_main$Y, n as _sfc_main$I } from './server.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "monitors",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const requestUrl = useRequestURL();
    const kindOptions = ["heartbeat", "http", "tcp"];
    const targets = ref([]);
    const limit = ref(3);
    const used = ref(0);
    const loading = ref(true);
    const error = ref("");
    const copiedId = ref(null);
    const createOpen = ref(false);
    const creating = ref(false);
    const createError = ref("");
    const form = reactive({ name: "", kind: "heartbeat", intervalSeconds: 180, targetUrl: "" });
    const bindOpen = ref(false);
    const binding = ref(false);
    const bindError = ref("");
    const bindForm = reactive({ installId: "" });
    const atLimit = computed(() => used.value >= limit.value);
    const canSubmit = computed(() => Boolean(form.name.trim()) && (form.kind === "heartbeat" || Boolean(form.targetUrl.trim())));
    const load = async () => {
      loading.value = true;
      error.value = "";
      try {
        const res = await $fetch("/api/panel/monitors");
        targets.value = res.targets;
        limit.value = res.limit;
        used.value = res.used;
      } catch {
        error.value = t("panel.monitor.loadError");
      } finally {
        loading.value = false;
      }
    };
    const checkinUrl = (target) => target.token ? `${requestUrl.origin}/api/panel/monitors/checkin/${target.token}` : "";
    const kindLabel = (kind) => t(`panel.monitor.kind.${kind}`);
    const statusLabel = (status) => t(`panel.monitor.status.${status}`);
    const statusClass = (status) => {
      if (status === "up") return "bg-emerald-50 text-emerald-600";
      if (status === "down") return "bg-rose-50 text-rose-600";
      return "bg-gray-100 text-gray-500";
    };
    const copy = async (target) => {
      try {
        await (void 0).clipboard.writeText(checkinUrl(target));
        copiedId.value = target.id;
        setTimeout(() => {
          if (copiedId.value === target.id) copiedId.value = null;
        }, 1500);
      } catch {
      }
    };
    const openCreate = () => {
      if (atLimit.value) return;
      form.name = "";
      form.kind = "heartbeat";
      form.intervalSeconds = 180;
      form.targetUrl = "";
      createError.value = "";
      createOpen.value = true;
    };
    const submitCreate = async () => {
      var _a, _b, _c;
      if (creating.value || !canSubmit.value) return;
      creating.value = true;
      createError.value = "";
      try {
        await $fetch("/api/panel/monitors", {
          method: "POST",
          body: {
            name: form.name.trim(),
            kind: form.kind,
            intervalSeconds: form.intervalSeconds,
            targetUrl: form.kind === "heartbeat" ? void 0 : form.targetUrl.trim()
          }
        });
        createOpen.value = false;
        await load();
      } catch (err) {
        const code = ((_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.data) == null ? void 0 : _b.code) || ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.code);
        if (code === "MONITOR_LIMIT_REACHED") createError.value = t("panel.monitor.limit.desc");
        else if (code === "MONITOR_TARGET_PRIVATE") createError.value = t("panel.monitor.errorPrivateTarget");
        else if (code === "MONITOR_TARGET_INVALID") createError.value = t("panel.monitor.errorInvalidTarget");
        else createError.value = t("panel.monitor.createError");
      } finally {
        creating.value = false;
      }
    };
    const toggleEnabled = async (target) => {
      try {
        await $fetch(`/api/panel/monitors/${target.id}`, { method: "PUT", body: { enabled: !target.enabled } });
        await load();
      } catch {
      }
    };
    const removeTarget = async (target) => {
      try {
        await $fetch(`/api/panel/monitors/${target.id}`, { method: "DELETE" });
        await load();
      } catch {
      }
    };
    const openBind = () => {
      bindForm.installId = "";
      bindError.value = "";
      bindOpen.value = true;
    };
    const submitBind = async () => {
      var _a, _b, _c;
      if (binding.value || !bindForm.installId.trim()) return;
      binding.value = true;
      bindError.value = "";
      try {
        await $fetch("/api/panel/monitors/panel/claim", { method: "POST", body: { installId: bindForm.installId.trim() } });
        bindOpen.value = false;
        await load();
      } catch (err) {
        const code = ((_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.data) == null ? void 0 : _b.code) || ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.code);
        if (code === "MONITOR_BIND_NOT_FOUND") bindError.value = t("panel.monitor.bind.notFound");
        else if (code === "MONITOR_BIND_TAKEN") bindError.value = t("panel.monitor.bind.taken");
        else if (code === "MONITOR_BIND_INVALID") bindError.value = t("panel.monitor.bind.invalid");
        else bindError.value = t("panel.monitor.createError");
      } finally {
        binding.value = false;
      }
    };
    const unbind = async (target) => {
      if (!target.installId) return;
      try {
        await $fetch("/api/panel/monitors/panel/release", { method: "POST", body: { installId: target.installId } });
        await load();
      } catch {
      }
    };
    useSeoMeta({
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$T;
      const _component_UIcon = _sfc_main$Y;
      const _component_UModal = _sfc_main$I;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p class="text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.monitor.usage", { used: used.value, limit: limit.value }))}</p><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "soft",
        onClick: openBind
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.monitor.bind.button"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.monitor.bind.button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        disabled: atLimit.value,
        color: "primary",
        onClick: openCreate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("panel.monitor.new"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("panel.monitor.new")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (atLimit.value) {
        _push(`<div class="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700"><p class="font-semibold">${ssrInterpolate(_ctx.$t("panel.monitor.limit.title", { limit: limit.value }))}</p><p class="mt-1 text-blue-600">${ssrInterpolate(_ctx.$t("panel.monitor.limit.desc"))}</p><a href="https://github.com/hoxiai/gopanel" target="_blank" class="mt-2 inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:github-logo-bold",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("panel.monitor.limit.cta"))}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-600"><span>${ssrInterpolate(error.value)}</span><button type="button" class="ml-2 font-semibold underline">${ssrInterpolate(_ctx.$t("panel.monitor.retry"))}</button></div>`);
      } else if (loading.value) {
        _push(`<div class="rounded-2xl border border-gray-100 bg-white p-10 text-center text-sm text-gray-400">${ssrInterpolate(_ctx.$t("panel.monitor.loading"))}</div>`);
      } else if (!targets.value.length) {
        _push(`<div class="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:crosshair-duotone",
          class: "h-6 w-6 text-blue-500"
        }, null, _parent));
        _push(`</div><h2 class="mt-4 text-base font-semibold text-gray-900">${ssrInterpolate(_ctx.$t("panel.monitor.empty.title"))}</h2><p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">${ssrInterpolate(_ctx.$t("panel.monitor.empty.desc"))}</p></div>`);
      } else {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(targets.value, (target) => {
          _push(`<div class="rounded-2xl border border-gray-100 bg-white p-4"><div class="flex items-start justify-between gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><span class="truncate font-semibold text-gray-900">${ssrInterpolate(target.name)}</span>`);
          if (target.source === "panel") {
            _push(`<span class="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">${ssrInterpolate(_ctx.$t("panel.monitor.source.panel"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">${ssrInterpolate(kindLabel(target.kind))}</span><span class="${ssrRenderClass([statusClass(target.status), "rounded-full px-2 py-0.5 text-xs font-medium"])}">${ssrInterpolate(statusLabel(target.status))}</span></div><p class="mt-1 text-xs text-gray-500">${ssrInterpolate(_ctx.$t("panel.monitor.interval"))}: ${ssrInterpolate(target.intervalSeconds)}s \xB7 ${ssrInterpolate(_ctx.$t("panel.monitor.lastSeen"))}: ${ssrInterpolate(target.lastSeenAt ? unref(formatDateTime)(target.lastSeenAt) : _ctx.$t("panel.monitor.never"))}</p></div><div class="flex shrink-0 items-center gap-2">`);
          if (target.source === "panel") {
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "error",
              onClick: ($event) => unbind(target)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("panel.monitor.unbind"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.unbind")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              onClick: ($event) => toggleEnabled(target)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(target.enabled ? _ctx.$t("panel.monitor.disable") : _ctx.$t("panel.monitor.enable"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(target.enabled ? _ctx.$t("panel.monitor.disable") : _ctx.$t("panel.monitor.enable")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "error",
              onClick: ($event) => removeTarget(target)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("panel.monitor.delete"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.delete")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<!--]-->`);
          }
          _push(`</div></div>`);
          if (target.source === "panel") {
            _push(`<div class="mt-3 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">${ssrInterpolate(target.installId)}</code></div>`);
          } else if (target.kind === "heartbeat" && target.token) {
            _push(`<div class="mt-3 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">${ssrInterpolate(checkinUrl(target))}</code>`);
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "soft",
              onClick: ($event) => copy(target)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(copiedId.value === target.id ? _ctx.$t("panel.monitor.copied") : _ctx.$t("panel.monitor.copyUrl"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(copiedId.value === target.id ? _ctx.$t("panel.monitor.copied") : _ctx.$t("panel.monitor.copyUrl")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else if (target.targetUrl) {
            _push(`<div class="mt-3 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">${ssrInterpolate(target.targetUrl)}</code></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: bindOpen.value,
        "onUpdate:open": ($event) => bindOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-6"${_scopeId}><h3 class="text-base font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.bind.title"))}</h3><div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.bind.installId"))}</label><input${ssrRenderAttr("value", bindForm.installId)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("panel.monitor.bind.placeholder"))} class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"${_scopeId}><p class="mt-1 text-xs text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.bind.hint"))}</p></div>`);
            if (bindError.value) {
              _push2(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(bindError.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              onClick: ($event) => bindOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("panel.monitor.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: binding.value,
              disabled: !bindForm.installId.trim(),
              color: "primary",
              onClick: submitBind
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("panel.monitor.bind.submit"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.bind.submit")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-6" }, [
                createVNode("h3", { class: "text-base font-semibold text-gray-900" }, toDisplayString(_ctx.$t("panel.monitor.bind.title")), 1),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.monitor.bind.installId")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => bindForm.installId = $event,
                    type: "text",
                    placeholder: _ctx.$t("panel.monitor.bind.placeholder"),
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, bindForm.installId]
                  ]),
                  createVNode("p", { class: "mt-1 text-xs text-gray-400" }, toDisplayString(_ctx.$t("panel.monitor.bind.hint")), 1)
                ]),
                bindError.value ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-xs text-rose-600"
                }, toDisplayString(bindError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    onClick: ($event) => bindOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("panel.monitor.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    loading: binding.value,
                    disabled: !bindForm.installId.trim(),
                    color: "primary",
                    onClick: submitBind
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("panel.monitor.bind.submit")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: createOpen.value,
        "onUpdate:open": ($event) => createOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-6"${_scopeId}><h3 class="text-base font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.new"))}</h3><div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.kindLabel"))}</label><div class="grid grid-cols-3 gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(kindOptions, (option) => {
              _push2(`<button type="button" class="${ssrRenderClass([form.kind === option ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50", "rounded-xl border px-3 py-2 text-sm font-medium transition-colors"])}"${_scopeId}>${ssrInterpolate(kindLabel(option))}</button>`);
            });
            _push2(`<!--]--></div></div><div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.name"))}</label><input${ssrRenderAttr("value", form.name)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("panel.monitor.namePlaceholder"))} class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"${_scopeId}></div>`);
            if (form.kind !== "heartbeat") {
              _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.targetUrl"))}</label><input${ssrRenderAttr("value", form.targetUrl)} type="text"${ssrRenderAttr("placeholder", form.kind === "http" ? "https://example.com" : "example.com:443")} class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.interval"))}</label><input${ssrRenderAttr("value", form.intervalSeconds)} type="number" min="60" class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"${_scopeId}><p class="mt-1 text-xs text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.monitor.intervalHint"))}</p></div>`);
            if (createError.value) {
              _push2(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(createError.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              onClick: ($event) => createOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("panel.monitor.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: creating.value,
              disabled: !canSubmit.value,
              color: "primary",
              onClick: submitCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("panel.monitor.create"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.monitor.create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-6" }, [
                createVNode("h3", { class: "text-base font-semibold text-gray-900" }, toDisplayString(_ctx.$t("panel.monitor.new")), 1),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.monitor.kindLabel")), 1),
                  createVNode("div", { class: "grid grid-cols-3 gap-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(kindOptions, (option) => {
                      return createVNode("button", {
                        key: option,
                        type: "button",
                        class: ["rounded-xl border px-3 py-2 text-sm font-medium transition-colors", form.kind === option ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"],
                        onClick: ($event) => form.kind = option
                      }, toDisplayString(kindLabel(option)), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.monitor.name")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    type: "text",
                    placeholder: _ctx.$t("panel.monitor.namePlaceholder"),
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, form.name]
                  ])
                ]),
                form.kind !== "heartbeat" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.monitor.targetUrl")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.targetUrl = $event,
                    type: "text",
                    placeholder: form.kind === "http" ? "https://example.com" : "example.com:443",
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, form.targetUrl]
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.monitor.interval")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.intervalSeconds = $event,
                    type: "number",
                    min: "60",
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [
                      vModelText,
                      form.intervalSeconds,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  createVNode("p", { class: "mt-1 text-xs text-gray-400" }, toDisplayString(_ctx.$t("panel.monitor.intervalHint")), 1)
                ]),
                createError.value ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-xs text-rose-600"
                }, toDisplayString(createError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    onClick: ($event) => createOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("panel.monitor.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    loading: creating.value,
                    disabled: !canSubmit.value,
                    color: "primary",
                    onClick: submitCreate
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("panel.monitor.create")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/user/monitors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=monitors-CNpqnjBN.mjs.map
