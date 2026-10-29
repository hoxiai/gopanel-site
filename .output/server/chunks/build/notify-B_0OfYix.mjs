import { u as useI18n, U as useRequestURL, bs as useSeoMeta, i as _sfc_main$T, n as _sfc_main$I } from './server.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "notify",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const requestUrl = useRequestURL();
    const loading = ref(true);
    const error = ref("");
    const email = ref("");
    const emailEnabled = ref(true);
    const channels = ref([]);
    const inboundToken = ref("");
    const inbound = ref([]);
    const results = ref([]);
    const testing = ref(false);
    const testMsg = ref("");
    const modalOpen = ref(false);
    const editingId = ref(null);
    const savingChannel = ref(false);
    const modalError = ref("");
    const channelTypes = ["wecom", "dingtalk", "feishu", "bark", "telegram", "webhook"];
    const form = reactive({ type: "wecom", name: "", target: "", secret: "", chatId: "" });
    const inboundUrl = computed(() => `${requestUrl.origin}/api/panel/monitors/inbound/${inboundToken.value}`);
    const targetPlaceholder = computed(() => form.type === "telegram" ? "123456:ABC..." : "https://...");
    const typeLabel = (type) => t(`panel.notify.types.${type}`);
    const channelResult = (id) => results.value.find((r) => r.id === id);
    const load = async () => {
      loading.value = true;
      error.value = "";
      try {
        const res = await $fetch("/api/panel/monitors/notify");
        emailEnabled.value = res.config.emailEnabled;
        email.value = res.email || "";
        channels.value = res.channels;
        inboundToken.value = res.inboundToken;
        const inboundRes = await $fetch("/api/panel/monitors/notify/inbound").catch(() => ({ items: [] }));
        inbound.value = inboundRes.items;
      } catch {
        error.value = t("panel.notify.loadError");
      } finally {
        loading.value = false;
      }
    };
    const testAll = async () => {
      testing.value = true;
      testMsg.value = "";
      results.value = [];
      try {
        const res = await $fetch("/api/panel/monitors/notify/test", { method: "POST" });
        results.value = res.channels;
        const emailPart = !res.emailConfigured ? t("panel.notify.skipped") : res.email ? t("panel.notify.ok") : t("panel.notify.fail");
        testMsg.value = `${t("panel.notify.emailTitle")}: ${emailPart}`;
      } catch {
        testMsg.value = t("panel.notify.testError");
      } finally {
        testing.value = false;
      }
    };
    const openAdd = () => {
      editingId.value = null;
      form.type = "wecom";
      form.name = "";
      form.target = "";
      form.secret = "";
      form.chatId = "";
      modalError.value = "";
      modalOpen.value = true;
    };
    const openEdit = (channel) => {
      editingId.value = channel.id;
      form.type = channel.type;
      form.name = channel.name;
      form.target = channel.target;
      form.secret = "";
      form.chatId = "";
      modalError.value = "";
      modalOpen.value = true;
    };
    const saveChannel = async () => {
      var _a, _b;
      savingChannel.value = true;
      modalError.value = "";
      try {
        if (editingId.value) {
          await $fetch(`/api/panel/monitors/notify/channels/${editingId.value}`, { method: "PUT", body: { name: form.name, target: form.target || void 0, secret: form.secret || void 0, chatId: form.chatId || void 0 } });
        } else {
          await $fetch("/api/panel/monitors/notify/channels", { method: "POST", body: { type: form.type, name: form.name, target: form.target, secret: form.secret, chatId: form.chatId } });
        }
        modalOpen.value = false;
        await load();
      } catch (err) {
        const code = (_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.data) == null ? void 0 : _b.code;
        modalError.value = code === "MONITOR_TARGET_PRIVATE" ? t("panel.monitor.errorPrivateTarget") : code === "MONITOR_CHANNEL_INVALID" ? t("panel.notify.channelInvalid") : t("panel.notify.saveError");
      } finally {
        savingChannel.value = false;
      }
    };
    const toggleChannel = async (channel) => {
      try {
        await $fetch(`/api/panel/monitors/notify/channels/${channel.id}`, { method: "PUT", body: { enabled: !channel.enabled } });
        await load();
      } catch {
      }
    };
    const removeChannel = async (channel) => {
      try {
        await $fetch(`/api/panel/monitors/notify/channels/${channel.id}`, { method: "DELETE" });
        await load();
      } catch {
      }
    };
    const testChannel = async (channel) => {
      try {
        const res = await $fetch(`/api/panel/monitors/notify/channels/${channel.id}/test`, { method: "POST" });
        results.value = [...results.value.filter((r) => r.id !== channel.id), { id: channel.id, ok: res.ok, detail: res.detail }];
      } catch {
        results.value = [...results.value.filter((r) => r.id !== channel.id), { id: channel.id, ok: false, detail: "request failed" }];
      }
    };
    const copyInbound = async () => {
      try {
        await (void 0).clipboard.writeText(inboundUrl.value);
      } catch {
      }
    };
    useSeoMeta({
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$T;
      const _component_UModal = _sfc_main$I;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (error.value) {
        _push(`<div class="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-600"><span>${ssrInterpolate(error.value)}</span><button type="button" class="ml-2 font-semibold underline">${ssrInterpolate(_ctx.$t("panel.notify.retry"))}</button></div>`);
      } else if (loading.value) {
        _push(`<div class="rounded-2xl border border-gray-100 bg-white p-10 text-center text-sm text-gray-400">${ssrInterpolate(_ctx.$t("panel.notify.loading"))}</div>`);
      } else {
        _push(`<!--[--><div class="rounded-2xl border border-gray-100 bg-white p-5"><div class="flex items-start justify-between gap-4"><div class="min-w-0"><h2 class="text-base font-semibold text-gray-900">${ssrInterpolate(_ctx.$t("panel.notify.emailTitle"))}</h2><p class="mt-1 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.notify.emailHint", { email: email.value || "-" }))}</p></div><input${ssrIncludeBooleanAttr(emailEnabled.value) ? " checked" : ""} type="checkbox" class="mt-1 h-5 w-5 shrink-0 cursor-pointer" style="${ssrRenderStyle({ "accent-color": "#2563eb" })}"></div></div><div class="rounded-2xl border border-gray-100 bg-white p-5"><div class="flex items-center justify-between gap-4"><div><h2 class="text-base font-semibold text-gray-900">${ssrInterpolate(_ctx.$t("panel.notify.channelsTitle"))}</h2><p class="mt-1 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.notify.channelsHint"))}</p></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "primary",
          onClick: openAdd
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.notify.addChannel"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.notify.addChannel")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (!channels.value.length) {
          _push(`<div class="mt-4 rounded-xl border border-dashed border-gray-200 p-6 text-center text-sm text-gray-400">${ssrInterpolate(_ctx.$t("panel.notify.noChannels"))}</div>`);
        } else {
          _push(`<div class="mt-4 space-y-2"><!--[-->`);
          ssrRenderList(channels.value, (ch) => {
            _push(`<div class="flex items-center justify-between gap-3 rounded-xl border border-gray-100 px-4 py-3"><div class="min-w-0"><div class="flex items-center gap-2"><span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">${ssrInterpolate(typeLabel(ch.type))}</span><span class="truncate text-sm font-medium text-gray-900">${ssrInterpolate(ch.name)}</span><span class="${ssrRenderClass([ch.enabled ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-400", "rounded-full px-2 py-0.5 text-xs font-medium"])}">${ssrInterpolate(ch.enabled ? _ctx.$t("panel.notify.enabled") : _ctx.$t("panel.notify.disabled"))}</span></div>`);
            if (channelResult(ch.id)) {
              _push(`<p class="${ssrRenderClass([channelResult(ch.id).ok ? "text-emerald-600" : "text-rose-600", "mt-1 text-xs"])}">${ssrInterpolate(channelResult(ch.id).ok ? _ctx.$t("panel.notify.ok") : _ctx.$t("panel.notify.fail"))} \xB7 ${ssrInterpolate(channelResult(ch.id).detail)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="flex shrink-0 items-center gap-1">`);
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              onClick: ($event) => testChannel(ch)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("panel.notify.testChannel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.notify.testChannel")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              onClick: ($event) => openEdit(ch)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("panel.notify.edit"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.notify.edit")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              onClick: ($event) => toggleChannel(ch)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(ch.enabled ? _ctx.$t("panel.notify.disable") : _ctx.$t("panel.notify.enable"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(ch.enabled ? _ctx.$t("panel.notify.disable") : _ctx.$t("panel.notify.enable")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "ghost",
              color: "error",
              onClick: ($event) => removeChannel(ch)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("panel.notify.delete"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.notify.delete")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div><div class="rounded-2xl border border-gray-100 bg-white p-5"><h2 class="text-base font-semibold text-gray-900">${ssrInterpolate(_ctx.$t("panel.notify.inboundTitle"))}</h2><p class="mt-1 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("panel.notify.inboundHint"))}</p><div class="mt-3 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">${ssrInterpolate(inboundUrl.value)}</code>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          variant: "soft",
          onClick: copyInbound
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.notify.inboundCopy"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.notify.inboundCopy")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (inbound.value.length) {
          _push(`<div class="mt-3 space-y-1"><p class="text-xs font-medium text-gray-400">${ssrInterpolate(_ctx.$t("panel.notify.inboundRecent"))}</p><!--[-->`);
          ssrRenderList(inbound.value, (row) => {
            _push(`<code class="block truncate rounded-lg bg-gray-50 px-3 py-1.5 text-xs text-gray-500">${ssrInterpolate(row.createdAt)} \xB7 ${ssrInterpolate(JSON.stringify(row.payload))}</code>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-wrap items-center gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "soft",
          loading: testing.value,
          onClick: testAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("panel.notify.test"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("panel.notify.test")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (testMsg.value) {
          _push(`<span class="text-sm text-gray-600">${ssrInterpolate(testMsg.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: modalOpen.value,
        "onUpdate:open": ($event) => modalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-6"${_scopeId}><h3 class="text-base font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(editingId.value ? _ctx.$t("panel.notify.edit") : _ctx.$t("panel.notify.addChannel"))}</h3>`);
            if (!editingId.value) {
              _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.notify.channelType"))}</label><div class="grid grid-cols-3 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(channelTypes, (option) => {
                _push2(`<button type="button" class="${ssrRenderClass([form.type === option ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50", "rounded-xl border px-2 py-2 text-xs font-medium transition-colors"])}"${_scopeId}>${ssrInterpolate(typeLabel(option))}</button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.notify.channelName"))}</label><input${ssrRenderAttr("value", form.name)} type="text" class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"${_scopeId}></div><div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(form.type === "telegram" ? _ctx.$t("panel.notify.channelBotToken") : _ctx.$t("panel.notify.channelTarget"))}</label><input${ssrRenderAttr("value", form.target)} type="text"${ssrRenderAttr("placeholder", targetPlaceholder.value)} class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"${_scopeId}></div>`);
            if (form.type === "telegram") {
              _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.notify.channelChatId"))}</label><input${ssrRenderAttr("value", form.chatId)} type="text" class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (form.type === "dingtalk" || form.type === "feishu") {
              _push2(`<div${_scopeId}><label class="mb-1.5 block text-xs font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$t("panel.notify.channelSecret"))}</label><input${ssrRenderAttr("value", form.secret)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("panel.notify.channelSecretPlaceholder"))} class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (modalError.value) {
              _push2(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(modalError.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              onClick: ($event) => modalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("panel.notify.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("panel.notify.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: savingChannel.value,
              color: "primary",
              onClick: saveChannel
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(editingId.value ? _ctx.$t("panel.notify.save") : _ctx.$t("panel.notify.create"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(editingId.value ? _ctx.$t("panel.notify.save") : _ctx.$t("panel.notify.create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-6" }, [
                createVNode("h3", { class: "text-base font-semibold text-gray-900" }, toDisplayString(editingId.value ? _ctx.$t("panel.notify.edit") : _ctx.$t("panel.notify.addChannel")), 1),
                !editingId.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.notify.channelType")), 1),
                  createVNode("div", { class: "grid grid-cols-3 gap-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(channelTypes, (option) => {
                      return createVNode("button", {
                        key: option,
                        type: "button",
                        class: ["rounded-xl border px-2 py-2 text-xs font-medium transition-colors", form.type === option ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"],
                        onClick: ($event) => form.type = option
                      }, toDisplayString(typeLabel(option)), 11, ["onClick"]);
                    }), 64))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.notify.channelName")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    type: "text",
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, form.name]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(form.type === "telegram" ? _ctx.$t("panel.notify.channelBotToken") : _ctx.$t("panel.notify.channelTarget")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.target = $event,
                    type: "text",
                    placeholder: targetPlaceholder.value,
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, form.target]
                  ])
                ]),
                form.type === "telegram" ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.notify.channelChatId")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.chatId = $event,
                    type: "text",
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, form.chatId]
                  ])
                ])) : createCommentVNode("", true),
                form.type === "dingtalk" || form.type === "feishu" ? (openBlock(), createBlock("div", { key: 2 }, [
                  createVNode("label", { class: "mb-1.5 block text-xs font-semibold text-gray-700" }, toDisplayString(_ctx.$t("panel.notify.channelSecret")), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.secret = $event,
                    type: "text",
                    placeholder: _ctx.$t("panel.notify.channelSecretPlaceholder"),
                    class: "h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, form.secret]
                  ])
                ])) : createCommentVNode("", true),
                modalError.value ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "text-xs text-rose-600"
                }, toDisplayString(modalError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    onClick: ($event) => modalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("panel.notify.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    loading: savingChannel.value,
                    color: "primary",
                    onClick: saveChannel
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(editingId.value ? _ctx.$t("panel.notify.save") : _ctx.$t("panel.notify.create")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/pages/user/notify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notify-B_0OfYix.mjs.map
