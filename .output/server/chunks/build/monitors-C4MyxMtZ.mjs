import { d as useFormatTime, i as _sfc_main$T, G as _sfc_main$p, v as _sfc_main$q, j as _sfc_main$t, k as _sfc_main$O, z as _sfc_main$y, _ as _sfc_main$Y, b as _sfc_main$A } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const pageSize = 25;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "monitors",
  __ssrInlineRender: true,
  setup(__props) {
    const { formatDateTime } = useFormatTime();
    const targets = ref([]);
    const total = ref(0);
    const page = ref(1);
    const pending = ref(false);
    const loadError = ref("");
    const keyword = ref("");
    let keywordTimer;
    const columns = [
      { accessorKey: "name", header: "\u540D\u79F0 / \u5730\u5740" },
      { accessorKey: "source", header: "\u6765\u6E90" },
      { accessorKey: "status", header: "\u72B6\u6001" },
      { accessorKey: "installId", header: "install_id" },
      { accessorKey: "lastSeenAt", header: "\u6700\u540E\u5728\u7EBF" }
    ];
    const statusLabel = (status) => ({ up: "\u5728\u7EBF", down: "\u4E0D\u53EF\u8FBE", pending: "\u5F85\u4E0A\u62A5", paused: "\u5DF2\u505C\u7528" })[status] || status;
    const statusColor = (status) => status === "up" ? "success" : status === "down" ? "error" : "neutral";
    const load = async () => {
      var _a;
      pending.value = true;
      loadError.value = "";
      try {
        const res = await $fetch("/api/admin/panel/monitors", {
          query: { page: page.value, pageSize, q: keyword.value.trim() || void 0 }
        });
        targets.value = res.targets;
        total.value = res.total;
      } catch (error) {
        loadError.value = `\u52A0\u8F7D\u5931\u8D25\uFF1A${((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || "\u8BF7\u6C42\u5931\u8D25"}`;
      } finally {
        pending.value = false;
      }
    };
    watch(keyword, () => {
      clearTimeout(keywordTimer);
      keywordTimer = setTimeout(() => {
        if (page.value !== 1) page.value = 1;
        else load();
      }, 300);
    });
    watch(page, load);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$T;
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$Y;
      const _component_UInput = _sfc_main$A;
      const _component_UAlert = _sfc_main$q;
      const _component_UTable = _sfc_main$t;
      const _component_UBadge = _sfc_main$O;
      const _component_UPagination = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> \u76D1\u63A7\u76EE\u6807 </h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400"> \u5168\u90E8\u76D1\u63A7\u76EE\u6807\uFF0C\u542B\u9762\u677F\u81EA\u52A8\u63A5\u5165\u7684\u670D\u52A1\u5668\uFF08\u6765\u6E90\u4E3A\u300C\u9762\u677F\u300D\uFF0C\u4E0D\u8BA1\u5165\u7528\u6237\u514D\u8D39\u989D\u5EA6\uFF09\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        loading: pending.value,
        onClick: load
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:crosshair",
              class: "h-5 w-5 text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(` \u76EE\u6807\u5217\u8868 </div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: keyword.value,
              "onUpdate:modelValue": ($event) => keyword.value = $event,
              icon: "ph:magnifying-glass",
              class: "w-full sm:w-72",
              placeholder: "\u6309\u540D\u79F0 / install_id / \u5730\u5740\u641C\u7D22"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:crosshair",
                    class: "h-5 w-5 text-blue-400"
                  }),
                  createTextVNode(" \u76EE\u6807\u5217\u8868 ")
                ]),
                createVNode(_component_UInput, {
                  modelValue: keyword.value,
                  "onUpdate:modelValue": ($event) => keyword.value = $event,
                  icon: "ph:magnifying-glass",
                  class: "w-full sm:w-72",
                  placeholder: "\u6309\u540D\u79F0 / install_id / \u5730\u5740\u641C\u7D22"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loadError.value) {
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "error",
                variant: "subtle",
                icon: "ph:warning",
                title: loadError.value,
                class: "mb-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UTable, {
              data: targets.value,
              columns,
              loading: pending.value,
              sticky: "",
              class: "min-w-full"
            }, {
              "name-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(row.original.name)}</p><p class="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(row.original.kind === "heartbeat" ? "\u5FC3\u8DF3" : row.original.targetUrl || "-")}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.name), 1),
                    createVNode("p", { class: "mt-1 font-mono text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.kind === "heartbeat" ? "\u5FC3\u8DF3" : row.original.targetUrl || "-"), 1)
                  ];
                }
              }),
              "source-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.original.source === "panel" ? "primary" : "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.original.source === "panel" ? "\u9762\u677F" : "\u624B\u52A8")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.original.source === "panel" ? "\u9762\u677F" : "\u624B\u52A8"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: row.original.source === "panel" ? "primary" : "neutral",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.source === "panel" ? "\u9762\u677F" : "\u624B\u52A8"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "status-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: statusColor(row.original.status),
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(statusLabel(row.original.status))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: statusColor(row.original.status),
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "installId-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-mono text-xs text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(row.original.installId || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-mono text-xs text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.installId || "-"), 1)
                  ];
                }
              }),
              "lastSeenAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(row.original.lastSeenAt ? unref(formatDateTime)(row.original.lastSeenAt) : "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.lastSeenAt ? unref(formatDateTime)(row.original.lastSeenAt) : "-"), 1)
                  ];
                }
              }),
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="py-6 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>\u6682\u65E0\u76D1\u63A7\u76EE\u6807</p>`);
                } else {
                  return [
                    createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u76D1\u63A7\u76EE\u6807")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (total.value > pageSize) {
              _push2(`<div class="mt-4 flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                page: page.value,
                "onUpdate:page": ($event) => page.value = $event,
                total: total.value,
                "items-per-page": pageSize,
                max: 5
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              loadError.value ? (openBlock(), createBlock(_component_UAlert, {
                key: 0,
                color: "error",
                variant: "subtle",
                icon: "ph:warning",
                title: loadError.value,
                class: "mb-4"
              }, null, 8, ["title"])) : createCommentVNode("", true),
              createVNode(_component_UTable, {
                data: targets.value,
                columns,
                loading: pending.value,
                sticky: "",
                class: "min-w-full"
              }, {
                "name-cell": withCtx(({ row }) => [
                  createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.name), 1),
                  createVNode("p", { class: "mt-1 font-mono text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.kind === "heartbeat" ? "\u5FC3\u8DF3" : row.original.targetUrl || "-"), 1)
                ]),
                "source-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: row.original.source === "panel" ? "primary" : "neutral",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.original.source === "panel" ? "\u9762\u677F" : "\u624B\u52A8"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "status-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: statusColor(row.original.status),
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "installId-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "font-mono text-xs text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.installId || "-"), 1)
                ]),
                "lastSeenAt-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.lastSeenAt ? unref(formatDateTime)(row.original.lastSeenAt) : "-"), 1)
                ]),
                empty: withCtx(() => [
                  createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u76D1\u63A7\u76EE\u6807")
                ]),
                _: 1
              }, 8, ["data", "loading"]),
              total.value > pageSize ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-4 flex justify-center"
              }, [
                createVNode(_component_UPagination, {
                  page: page.value,
                  "onUpdate:page": ($event) => page.value = $event,
                  total: total.value,
                  "items-per-page": pageSize,
                  max: 5
                }, null, 8, ["page", "onUpdate:page", "total"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/admin/pages/monitors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=monitors-C4MyxMtZ.mjs.map
