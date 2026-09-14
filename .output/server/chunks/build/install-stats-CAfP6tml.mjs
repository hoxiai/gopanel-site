import { f as useFormatTime, x as usePagination, k as _sfc_main$z, b as _sfc_main$E, l as _sfc_main$f, n as _sfc_main$v, z as _sfc_main$l, d as _sfc_main$i } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-jMFP8cqX.mjs';
import { _ as _sfc_main$2 } from './SelectMenu-CYQ-kRxC.mjs';
import { defineComponent, h, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, unref, isRef, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
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
import './virtualizer-7nRBDeVI.mjs';
import './arrays-DNHUHQBd.mjs';
import './utils-DD3u_B8M.mjs';
import './VisuallyHiddenInput-DQVmNwmJ.mjs';

const pkg = "gopanel";
const ALL_OPTION = "all";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "install-stats",
  __ssrInlineRender: true,
  setup(__props) {
    const { formatDateTime } = useFormatTime();
    const StatsBucket = defineComponent({
      name: "StatsBucket",
      props: {
        title: {
          type: String,
          required: true
        },
        items: {
          type: Array,
          default: () => []
        }
      },
      setup(props) {
        return () => h("div", { class: "rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-black/20" }, [
          h("p", { class: "font-medium text-gray-900 dark:text-white" }, props.title),
          h(
            "div",
            { class: "mt-3 space-y-2" },
            props.items.length ? props.items.map(
              (item) => h("div", { key: item.key, class: "flex items-center justify-between text-sm" }, [
                h(
                  "span",
                  { class: "max-w-[220px] truncate text-gray-600 dark:text-gray-300" },
                  item.key || "-"
                ),
                h(
                  "span",
                  { class: "font-mono text-gray-800 dark:text-gray-100" },
                  String(item.value)
                )
              ])
            ) : [h("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u6570\u636E")]
          )
        ]);
      }
    });
    const eventOptions = [
      { label: "\u5168\u90E8", value: ALL_OPTION },
      { label: "\u5B89\u88C5", value: "install_success" },
      { label: "\u5347\u7EA7", value: "upgrade_success" }
    ];
    const eventFilter = ref(ALL_OPTION);
    const installIdQuery = ref("");
    const { page, pageSize, onPageChange } = usePagination(25);
    const statsData = ref(null);
    const statsPending = ref(false);
    const recordsData = ref(null);
    const recordsPending = ref(false);
    const refreshStats = async () => {
      statsPending.value = true;
      try {
        statsData.value = await $fetch("/api/panel/installs/stats", {
          query: { pkg }
        });
      } catch {
        statsData.value = null;
      } finally {
        statsPending.value = false;
      }
    };
    const totals = computed(() => {
      var _a;
      return ((_a = statsData.value) == null ? void 0 : _a.totals) || { installs: 0, upgrades: 0 };
    });
    const installsByChannel = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.installs) == null ? void 0 : _b.byChannel) || {};
    });
    const installsByOs = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.installs) == null ? void 0 : _b.byOs) || {};
    });
    const installsByArch = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.installs) == null ? void 0 : _b.byArch) || {};
    });
    const upgradesByChannel = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.upgrades) == null ? void 0 : _b.byChannel) || {};
    });
    const upgradesByVersion = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.upgrades) == null ? void 0 : _b.byVersion) || {};
    });
    const upgradesByOs = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.upgrades) == null ? void 0 : _b.byOs) || {};
    });
    const upgradesByArch = computed(() => {
      var _a, _b;
      return ((_b = (_a = statsData.value) == null ? void 0 : _a.upgrades) == null ? void 0 : _b.byArch) || {};
    });
    const refreshRecords = async () => {
      recordsPending.value = true;
      try {
        recordsData.value = await $fetch("/api/panel/installs/records", {
          query: {
            pkg,
            page: page.value,
            pageSize: pageSize.value,
            eventName: eventFilter.value !== ALL_OPTION ? eventFilter.value : void 0,
            installId: installIdQuery.value || void 0
          }
        });
      } catch {
        recordsData.value = null;
      } finally {
        recordsPending.value = false;
      }
    };
    const records = computed(() => {
      var _a;
      return ((_a = recordsData.value) == null ? void 0 : _a.records) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return Number(((_a = recordsData.value) == null ? void 0 : _a.total) || 0);
    });
    const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value));
    const columns = [
      { accessorKey: "createdAt", header: "\u65F6\u95F4" },
      { accessorKey: "eventName", header: "\u4E8B\u4EF6" },
      { accessorKey: "version", header: "\u7248\u672C" },
      { accessorKey: "channel", header: "\u6E20\u9053" },
      { accessorKey: "device", header: "\u673A\u578B" },
      { accessorKey: "installId", header: "install_id" }
    ];
    const refreshAll = async () => {
      await Promise.all([refreshStats(), refreshRecords()]);
    };
    watch([eventFilter, installIdQuery], () => {
      page.value = 1;
    });
    watch([page, eventFilter, installIdQuery], () => {
      refreshRecords();
    });
    const topItems = (obj, limit = 8) => Object.entries(obj || {}).map(([key, value]) => ({ key, value: Number(value) || 0 })).sort((a, b) => b.value - a.value).slice(0, limit);
    const upgradeDeviceItems = computed(() => [
      ...topItems(upgradesByOs.value).map((item) => ({ key: `OS: ${item.key}`, value: item.value })),
      ...topItems(upgradesByArch.value).map((item) => ({ key: `Arch: ${item.key}`, value: item.value }))
    ]);
    const shortId = (value) => {
      if (!value) return "-";
      if (value.length <= 14) return value;
      return `${value.slice(0, 8)}\u2026${value.slice(-4)}`;
    };
    const formatDevice = (row) => {
      const parts = [row.os || "", row.arch ? `/${row.arch}` : ""].join("");
      const extra = [row.distro, row.machine].filter(Boolean).join(" \xB7 ");
      return [parts || "-", extra].filter(Boolean).join("  ");
    };
    const formatRuntime = (row) => {
      const items = [row.runtime, row.kernel].filter(Boolean).join(" \xB7 ");
      return items || "";
    };
    const copyText = async (value) => {
      if (!value) return;
      try {
        await (void 0).clipboard.writeText(value);
      } catch {
        const textarea = (void 0).createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        (void 0).body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        (void 0).execCommand("copy");
        (void 0).body.removeChild(textarea);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$z;
      const _component_UCard = _sfc_main$1;
      const _component_UIcon = _sfc_main$E;
      const _component_USelectMenu = _sfc_main$2;
      const _component_UInput = _sfc_main$i;
      const _component_UTable = _sfc_main$f;
      const _component_UBadge = _sfc_main$v;
      const _component_UPagination = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> \u5B89\u88C5\u4E0E\u5347\u7EA7\u7EDF\u8BA1 </h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400"> \u53EA\u7EDF\u8BA1\u6210\u529F\u4E0A\u62A5\u7684\u5B89\u88C5/\u5347\u7EA7\u4E8B\u4EF6\uFF0C\u67E5\u770B\u6700\u8FD1\u8BB0\u5F55\u4E0E\u673A\u578B\u4FE1\u606F\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        loading: statsPending.value || recordsPending.value,
        onClick: refreshAll
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5237\u65B0 `);
          } else {
            return [
              createTextVNode(" \u5237\u65B0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 gap-4 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u5B89\u88C5</p><p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(totals.value.installs)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u5B89\u88C5"),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-gray-900 dark:text-white" }, toDisplayString(totals.value.installs), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u5347\u7EA7\u6210\u529F</p><p class="mt-2 text-3xl font-bold text-cyan-500 dark:text-cyan-400"${_scopeId}>${ssrInterpolate(totals.value.upgrades)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u5347\u7EA7\u6210\u529F"),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-cyan-500 dark:text-cyan-400" }, toDisplayString(totals.value.upgrades), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>Package</p><p class="mt-3 font-mono text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(pkg)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "Package"),
              createVNode("p", { class: "mt-3 font-mono text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(pkg))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 gap-4 xl:grid-cols-2">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:trend-up",
              class: "h-5 w-5 text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(` \u5B89\u88C5\u5206\u5E03 </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                createVNode(_component_UIcon, {
                  name: "ph:trend-up",
                  class: "h-5 w-5 text-blue-400"
                }),
                createTextVNode(" \u5B89\u88C5\u5206\u5E03 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "\u6E20\u9053",
              items: topItems(installsByChannel.value)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "OS",
              items: topItems(installsByOs.value)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "Arch",
              items: topItems(installsByArch.value)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [
                createVNode(unref(StatsBucket), {
                  title: "\u6E20\u9053",
                  items: topItems(installsByChannel.value)
                }, null, 8, ["items"]),
                createVNode(unref(StatsBucket), {
                  title: "OS",
                  items: topItems(installsByOs.value)
                }, null, 8, ["items"]),
                createVNode(unref(StatsBucket), {
                  title: "Arch",
                  items: topItems(installsByArch.value)
                }, null, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:rocket-launch",
              class: "h-5 w-5 text-purple-400"
            }, null, _parent2, _scopeId));
            _push2(` \u5347\u7EA7\u5206\u5E03 </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                createVNode(_component_UIcon, {
                  name: "ph:rocket-launch",
                  class: "h-5 w-5 text-purple-400"
                }),
                createTextVNode(" \u5347\u7EA7\u5206\u5E03 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "\u6E20\u9053",
              items: topItems(upgradesByChannel.value)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "\u7248\u672C",
              items: topItems(upgradesByVersion.value)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(StatsBucket), {
              title: "\u673A\u578B",
              items: upgradeDeviceItems.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [
                createVNode(unref(StatsBucket), {
                  title: "\u6E20\u9053",
                  items: topItems(upgradesByChannel.value)
                }, null, 8, ["items"]),
                createVNode(unref(StatsBucket), {
                  title: "\u7248\u672C",
                  items: topItems(upgradesByVersion.value)
                }, null, 8, ["items"]),
                createVNode(unref(StatsBucket), {
                  title: "\u673A\u578B",
                  items: upgradeDeviceItems.value
                }, null, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:list-bullets",
              class: "h-5 w-5 text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(` \u6700\u8FD1\u8BB0\u5F55 </div><div class="flex flex-col gap-2 sm:flex-row sm:items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: eventFilter.value,
              "onUpdate:modelValue": ($event) => eventFilter.value = $event,
              items: eventOptions,
              "value-key": "value",
              class: "w-full sm:w-44"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: installIdQuery.value,
              "onUpdate:modelValue": ($event) => installIdQuery.value = $event,
              class: "w-full sm:w-64",
              placeholder: "\u6309 install_id \u641C\u7D22"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:list-bullets",
                    class: "h-5 w-5 text-emerald-400"
                  }),
                  createTextVNode(" \u6700\u8FD1\u8BB0\u5F55 ")
                ]),
                createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-center" }, [
                  createVNode(_component_USelectMenu, {
                    modelValue: eventFilter.value,
                    "onUpdate:modelValue": ($event) => eventFilter.value = $event,
                    items: eventOptions,
                    "value-key": "value",
                    class: "w-full sm:w-44"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UInput, {
                    modelValue: installIdQuery.value,
                    "onUpdate:modelValue": ($event) => installIdQuery.value = $event,
                    class: "w-full sm:w-64",
                    placeholder: "\u6309 install_id \u641C\u7D22"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]"${_scopeId}><div class="flex-1 overflow-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTable, {
              data: records.value,
              columns,
              loading: recordsPending.value,
              sticky: "",
              class: "min-w-full"
            }, {
              "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ];
                }
              }),
              "eventName-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.original.eventName === "install_success" ? "success" : "primary",
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.original.eventName === "install_success" ? "\u5B89\u88C5" : "\u5347\u7EA7")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.original.eventName === "install_success" ? "\u5B89\u88C5" : "\u5347\u7EA7"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: row.original.eventName === "install_success" ? "success" : "primary",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.eventName === "install_success" ? "\u5B89\u88C5" : "\u5347\u7EA7"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "version-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-mono text-xs text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(row.original.version || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.version || "-"), 1)
                  ];
                }
              }),
              "channel-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(row.original.channel || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(row.original.channel || "-"), 1)
                  ];
                }
              }),
              "device-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="min-w-0"${_scopeId2}><p class="truncate text-sm text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(formatDevice(row.original))}</p><p class="mt-1 truncate text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(formatRuntime(row.original))}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "min-w-0" }, [
                      createVNode("p", { class: "truncate text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(formatDevice(row.original)), 1),
                      createVNode("p", { class: "mt-1 truncate text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatRuntime(row.original)), 1)
                    ])
                  ];
                }
              }),
              "installId-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><span class="font-mono text-xs text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(shortId(row.original.installId))}</span>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    size: "sm",
                    onClick: ($event) => copyText(row.original.installId)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(shortId(row.original.installId)), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:copy",
                        size: "sm",
                        onClick: ($event) => copyText(row.original.installId)
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (totalPages.value > 1) {
              _push2(`<div class="flex justify-center border-t border-gray-200 px-4 py-4 dark:border-gray-800/50"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                modelValue: unref(page),
                "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                total: totalItems.value,
                "items-per-page": unref(pageSize),
                max: 5,
                "onUpdate:page": (val) => unref(onPageChange)(val, refreshRecords)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, [
                createVNode("div", { class: "flex-1 overflow-auto" }, [
                  createVNode(_component_UTable, {
                    data: records.value,
                    columns,
                    loading: recordsPending.value,
                    sticky: "",
                    class: "min-w-full"
                  }, {
                    "createdAt-cell": withCtx(({ row }) => [
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                    ]),
                    "eventName-cell": withCtx(({ row }) => [
                      createVNode(_component_UBadge, {
                        color: row.original.eventName === "install_success" ? "success" : "primary",
                        variant: "subtle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.eventName === "install_success" ? "\u5B89\u88C5" : "\u5347\u7EA7"), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    "version-cell": withCtx(({ row }) => [
                      createVNode("span", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.version || "-"), 1)
                    ]),
                    "channel-cell": withCtx(({ row }) => [
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, toDisplayString(row.original.channel || "-"), 1)
                    ]),
                    "device-cell": withCtx(({ row }) => [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("p", { class: "truncate text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(formatDevice(row.original)), 1),
                        createVNode("p", { class: "mt-1 truncate text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatRuntime(row.original)), 1)
                      ])
                    ]),
                    "installId-cell": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(shortId(row.original.installId)), 1),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          icon: "ph:copy",
                          size: "sm",
                          onClick: ($event) => copyText(row.original.installId)
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["data", "loading"])
                ]),
                totalPages.value > 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex justify-center border-t border-gray-200 px-4 py-4 dark:border-gray-800/50"
                }, [
                  createVNode(_component_UPagination, {
                    modelValue: unref(page),
                    "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                    total: totalItems.value,
                    "items-per-page": unref(pageSize),
                    max: 5,
                    "onUpdate:page": (val) => unref(onPageChange)(val, refreshRecords)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "items-per-page", "onUpdate:page"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/admin/pages/install-stats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
