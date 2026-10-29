import { d as useFormatTime, e as useToast, i as _sfc_main$S, G as _sfc_main$p, _ as _sfc_main$X, v as _sfc_main$q, j as _sfc_main$t, k as _sfc_main$N, z as _sfc_main$z, b as _sfc_main$w, n as _sfc_main$H } from './server.mjs';
import { defineComponent, h, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, unref, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const PKG = "gopanel";
const API_BASE = "/api/admin/panel/installs";
const serverPageSize = 25;
const eventPageSize = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "install-stats",
  __ssrInlineRender: true,
  setup(__props) {
    const StatsBucket = defineComponent({
      name: "StatsBucket",
      props: {
        title: { type: String, required: true },
        items: { type: Array, default: () => [] }
      },
      setup(props) {
        return () => h("div", { class: "rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-black/20" }, [
          h("p", { class: "font-medium text-gray-900 dark:text-white" }, props.title),
          h("div", { class: "mt-3 space-y-2" }, props.items.length ? props.items.map((item) => h("div", { key: item.name, class: "flex items-center justify-between gap-2 text-sm" }, [
            h("span", { class: "truncate text-gray-600 dark:text-gray-300" }, item.name || "\u672A\u77E5"),
            h("span", { class: "font-mono text-gray-800 dark:text-gray-100" }, String(item.total))
          ])) : [h("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u6570\u636E")])
        ]);
      }
    });
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const errorMessage = (error) => {
      const data = error == null ? void 0 : error.data;
      return (data == null ? void 0 : data.statusMessage) || (data == null ? void 0 : data.message) || (error instanceof Error ? error.message : "\u8BF7\u6C42\u5931\u8D25");
    };
    const stats = ref(null);
    const statsPending = ref(false);
    const loadError = ref("");
    const loadStats = async () => {
      statsPending.value = true;
      try {
        stats.value = await $fetch(`${API_BASE}/stats`, { query: { pkg: PKG } });
      } catch (error) {
        loadError.value = `\u7EDF\u8BA1\u52A0\u8F7D\u5931\u8D25\uFF1A${errorMessage(error)}`;
      } finally {
        statsPending.value = false;
      }
    };
    const totalCards = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const totals = (_a = stats.value) == null ? void 0 : _a.totals;
      const recent = ((_b = stats.value) == null ? void 0 : _b.recent) || {};
      return [
        { label: "\u670D\u52A1\u5668", value: (_c = totals == null ? void 0 : totals.servers) != null ? _c : 0, tone: "text-gray-900 dark:text-white", hint: "" },
        { label: "\u72EC\u7ACB IP", value: (_d = totals == null ? void 0 : totals.ips) != null ? _d : 0, tone: "text-gray-900 dark:text-white", hint: "" },
        { label: "30 \u5929\u6D3B\u8DC3", value: (_e = totals == null ? void 0 : totals.active) != null ? _e : 0, tone: "text-emerald-500 dark:text-emerald-400", hint: "" },
        { label: "\u5B89\u88C5", value: (_f = totals == null ? void 0 : totals.installs) != null ? _f : 0, tone: "text-blue-500 dark:text-blue-400", hint: `\u8FD1 30 \u5929 ${recent.install_success || 0}` },
        { label: "\u5347\u7EA7\u6210\u529F", value: (_g = totals == null ? void 0 : totals.upgrades) != null ? _g : 0, tone: "text-cyan-500 dark:text-cyan-400", hint: `\u8FD1 30 \u5929 ${recent.upgrade_success || 0}` },
        { label: "\u5347\u7EA7\u5931\u8D25", value: (_h = totals == null ? void 0 : totals.upgradeFailures) != null ? _h : 0, tone: "text-red-500 dark:text-red-400", hint: `\u8FD1 30 \u5929 ${recent.upgrade_failed || 0}` }
      ];
    });
    const buckets = computed(() => {
      var _a;
      const distributions = (_a = stats.value) == null ? void 0 : _a.distributions;
      return [
        { title: "\u7248\u672C", items: (distributions == null ? void 0 : distributions.versions) || [] },
        { title: "\u56FD\u5BB6/\u5730\u533A", items: (distributions == null ? void 0 : distributions.countries) || [] },
        { title: "\u7CFB\u7EDF", items: (distributions == null ? void 0 : distributions.os) || [] },
        { title: "\u67B6\u6784", items: (distributions == null ? void 0 : distributions.arch) || [] },
        { title: "\u53D1\u884C\u7248", items: (distributions == null ? void 0 : distributions.distros) || [] },
        { title: "\u6E20\u9053", items: (distributions == null ? void 0 : distributions.channels) || [] }
      ];
    });
    const keyword = ref("");
    const debouncedKeyword = ref("");
    let keywordTimer;
    watch(keyword, (value) => {
      clearTimeout(keywordTimer);
      keywordTimer = setTimeout(() => {
        debouncedKeyword.value = value.trim();
      }, 300);
    });
    const servers = ref([]);
    const serverTotal = ref(0);
    const serverPage = ref(1);
    const serversPending = ref(false);
    const loadServers = async () => {
      serversPending.value = true;
      try {
        const result = await $fetch(`${API_BASE}/servers`, {
          query: { pkg: PKG, page: serverPage.value, pageSize: serverPageSize, q: debouncedKeyword.value || void 0 }
        });
        servers.value = result.servers;
        serverTotal.value = result.total;
      } catch (error) {
        loadError.value = `\u670D\u52A1\u5668\u5217\u8868\u52A0\u8F7D\u5931\u8D25\uFF1A${errorMessage(error)}`;
      } finally {
        serversPending.value = false;
      }
    };
    const serverColumns = [
      { accessorKey: "publicIp", header: "\u516C\u7F51 IP / \u5730\u533A" },
      { accessorKey: "currentVersion", header: "\u7248\u672C" },
      { accessorKey: "os", header: "\u7CFB\u7EDF" },
      { id: "counts", header: "\u5B89\u88C5 / \u5347\u7EA7" },
      { accessorKey: "lastSeenAt", header: "\u6700\u540E\u4E0A\u62A5" },
      { accessorKey: "installId", header: "install_id" },
      { id: "actions", header: "" }
    ];
    const eventsOpen = ref(false);
    const selectedServer = ref(null);
    const events = ref([]);
    const eventTotal = ref(0);
    const eventPage = ref(1);
    const eventsPending = ref(false);
    const eventsError = ref("");
    const loadEvents = async () => {
      if (!selectedServer.value) return;
      eventsPending.value = true;
      eventsError.value = "";
      try {
        const result = await $fetch(`${API_BASE}/events`, {
          query: { pkg: PKG, installId: selectedServer.value.installId, page: eventPage.value, pageSize: eventPageSize }
        });
        events.value = result.events;
        eventTotal.value = result.total;
      } catch (error) {
        eventsError.value = `\u8BB0\u5F55\u52A0\u8F7D\u5931\u8D25\uFF1A${errorMessage(error)}`;
      } finally {
        eventsPending.value = false;
      }
    };
    const openEvents = (server) => {
      selectedServer.value = server;
      events.value = [];
      eventTotal.value = 0;
      eventsOpen.value = true;
      if (eventPage.value === 1) loadEvents();
      else eventPage.value = 1;
    };
    const eventColumns = [
      { accessorKey: "createdAt", header: "\u65F6\u95F4" },
      { accessorKey: "event", header: "\u4E8B\u4EF6" },
      { accessorKey: "version", header: "\u7248\u672C" },
      { accessorKey: "publicIp", header: "IP / \u5730\u533A" },
      { accessorKey: "source", header: "\u6765\u6E90" }
    ];
    const EVENT_META = {
      install_success: { label: "\u5B89\u88C5", color: "success" },
      upgrade_success: { label: "\u5347\u7EA7", color: "primary" },
      upgrade_failed: { label: "\u5347\u7EA7\u5931\u8D25", color: "error" },
      agent_upgrade_success: { label: "Agent \u5347\u7EA7", color: "neutral" }
    };
    const eventMeta = (event) => EVENT_META[event] || { label: event, color: "neutral" };
    const SOURCE_LABELS = { script: "\u5B89\u88C5\u811A\u672C", panel: "\u9762\u677F", legacy: "\u5386\u53F2\u6570\u636E" };
    const sourceLabel = (source) => source && SOURCE_LABELS[source] || source || "-";
    const formatLocation = (item) => [...new Set([item.country, item.region, item.city].filter(Boolean))].join(" \xB7 ") || "-";
    const formatSystem = (server) => [[server.os, server.arch].filter(Boolean).join("/"), server.distro].filter(Boolean).join(" \xB7 ") || "-";
    const shortId = (value) => value && value.length > 14 ? `${value.slice(0, 8)}\u2026${value.slice(-4)}` : value || "-";
    const copyText = async (value) => {
      try {
        await (void 0).clipboard.writeText(value);
        toast.add({ title: "\u5DF2\u590D\u5236", color: "success" });
      } catch {
        toast.add({ title: "\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C", color: "error" });
      }
    };
    const refreshAll = async () => {
      loadError.value = "";
      await Promise.all([loadStats(), loadServers()]);
    };
    watch(debouncedKeyword, () => {
      if (serverPage.value === 1) loadServers();
      else serverPage.value = 1;
    });
    watch(serverPage, loadServers);
    watch(eventPage, loadEvents);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$S;
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$X;
      const _component_UInput = _sfc_main$w;
      const _component_UAlert = _sfc_main$q;
      const _component_UTable = _sfc_main$t;
      const _component_UBadge = _sfc_main$N;
      const _component_UPagination = _sfc_main$z;
      const _component_UModal = _sfc_main$H;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex items-end justify-between gap-4"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> \u5B89\u88C5\u4E0E\u5347\u7EA7\u7EDF\u8BA1 </h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400"> \u6BCF\u53F0\u670D\u52A1\u5668\uFF08install_id\uFF09\u4E00\u6761\u8BB0\u5F55\uFF0CIP \u4E0E\u5730\u533A\u53D6\u81EA\u4E0A\u62A5\u8BF7\u6C42\u6765\u6E90\uFF1B\u70B9\u300C\u8BB0\u5F55\u300D\u67E5\u770B\u8BE5\u670D\u52A1\u5668\u7684\u5B89\u88C5\u3001\u5347\u7EA7\u660E\u7EC6\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        loading: statsPending.value || serversPending.value,
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
      _push(`</div><div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6"><!--[-->`);
      ssrRenderList(totalCards.value, (card) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: card.label,
          class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(card.label)}</p><p class="${ssrRenderClass([card.tone, "mt-2 text-3xl font-bold"])}"${_scopeId}>${ssrInterpolate(card.value)}</p>`);
              if (card.hint) {
                _push2(`<p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(card.hint)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("p", { class: "text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400" }, toDisplayString(card.label), 1),
                createVNode("p", {
                  class: ["mt-2 text-3xl font-bold", card.tone]
                }, toDisplayString(card.value), 3),
                card.hint ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
                }, toDisplayString(card.hint), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-pie-slice",
              class: "h-5 w-5 text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(` \u670D\u52A1\u5668\u5206\u5E03 </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                createVNode(_component_UIcon, {
                  name: "ph:chart-pie-slice",
                  class: "h-5 w-5 text-blue-400"
                }),
                createTextVNode(" \u670D\u52A1\u5668\u5206\u5E03 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6"${_scopeId}><!--[-->`);
            ssrRenderList(buckets.value, (bucket) => {
              _push2(ssrRenderComponent(unref(StatsBucket), {
                key: bucket.title,
                title: bucket.title,
                items: bucket.items
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(buckets.value, (bucket) => {
                  return openBlock(), createBlock(unref(StatsBucket), {
                    key: bucket.title,
                    title: bucket.title,
                    items: bucket.items
                  }, null, 8, ["title", "items"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:hard-drives",
              class: "h-5 w-5 text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(` \u670D\u52A1\u5668\u5217\u8868 </div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: keyword.value,
              "onUpdate:modelValue": ($event) => keyword.value = $event,
              icon: "ph:magnifying-glass",
              class: "w-full sm:w-72",
              placeholder: "\u6309\u516C\u7F51 IP \u6216 install_id \u641C\u7D22"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:hard-drives",
                    class: "h-5 w-5 text-emerald-400"
                  }),
                  createTextVNode(" \u670D\u52A1\u5668\u5217\u8868 ")
                ]),
                createVNode(_component_UInput, {
                  modelValue: keyword.value,
                  "onUpdate:modelValue": ($event) => keyword.value = $event,
                  icon: "ph:magnifying-glass",
                  class: "w-full sm:w-72",
                  placeholder: "\u6309\u516C\u7F51 IP \u6216 install_id \u641C\u7D22"
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
              data: servers.value,
              columns: serverColumns,
              loading: serversPending.value,
              sticky: "",
              class: "min-w-full"
            }, {
              "publicIp-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-mono text-sm text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(row.original.publicIp || "-")}</p><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(formatLocation(row.original))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-mono text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.publicIp || "-"), 1),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatLocation(row.original)), 1)
                  ];
                }
              }),
              "currentVersion-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-mono text-xs text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(row.original.currentVersion || "-")}</p>`);
                  if (row.original.firstVersion) {
                    _push3(`<p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}> \u9996\u88C5 ${ssrInterpolate(row.original.firstVersion)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("p", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.currentVersion || "-"), 1),
                    row.original.firstVersion ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
                    }, " \u9996\u88C5 " + toDisplayString(row.original.firstVersion), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              "os-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(formatSystem(row.original))}</p><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate([row.original.runtime, row.original.kernel].filter(Boolean).join(" \xB7 "))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(formatSystem(row.original)), 1),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString([row.original.runtime, row.original.kernel].filter(Boolean).join(" \xB7 ")), 1)
                  ];
                }
              }),
              "counts-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(row.original.installCount)} / ${ssrInterpolate(row.original.upgradeCount)}</span>`);
                  if (row.original.upgradeFailedCount) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "error",
                      variant: "subtle",
                      class: "ml-2"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u5931\u8D25 ${ssrInterpolate(row.original.upgradeFailedCount)}`);
                        } else {
                          return [
                            createTextVNode(" \u5931\u8D25 " + toDisplayString(row.original.upgradeFailedCount), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.installCount) + " / " + toDisplayString(row.original.upgradeCount), 1),
                    row.original.upgradeFailedCount ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      color: "error",
                      variant: "subtle",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5931\u8D25 " + toDisplayString(row.original.upgradeFailedCount), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ];
                }
              }),
              "lastSeenAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.lastSeenAt))}</p><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>\u9996\u6B21 ${ssrInterpolate(unref(formatDateTime)(row.original.firstSeenAt))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.lastSeenAt)), 1),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, "\u9996\u6B21 " + toDisplayString(unref(formatDateTime)(row.original.firstSeenAt)), 1)
                  ];
                }
              }),
              "installId-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1"${_scopeId2}><span class="font-mono text-xs text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(shortId(row.original.installId))}</span>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    size: "xs",
                    onClick: ($event) => copyText(row.original.installId)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1" }, [
                      createVNode("span", { class: "font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(shortId(row.original.installId)), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:copy",
                        size: "xs",
                        onClick: ($event) => copyText(row.original.installId)
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              "actions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "soft",
                    size: "xs",
                    icon: "ph:list-bullets",
                    onClick: ($event) => openEvents(row.original)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u8BB0\u5F55 `);
                      } else {
                        return [
                          createTextVNode(" \u8BB0\u5F55 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "soft",
                      size: "xs",
                      icon: "ph:list-bullets",
                      onClick: ($event) => openEvents(row.original)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8BB0\u5F55 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="py-6 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>\u6682\u65E0\u4E0A\u62A5\u8BB0\u5F55</p>`);
                } else {
                  return [
                    createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u4E0A\u62A5\u8BB0\u5F55")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (serverTotal.value > serverPageSize) {
              _push2(`<div class="flex justify-center border-t border-gray-200 px-4 pt-4 dark:border-gray-800/50"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                page: serverPage.value,
                "onUpdate:page": ($event) => serverPage.value = $event,
                total: serverTotal.value,
                "items-per-page": serverPageSize,
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
                data: servers.value,
                columns: serverColumns,
                loading: serversPending.value,
                sticky: "",
                class: "min-w-full"
              }, {
                "publicIp-cell": withCtx(({ row }) => [
                  createVNode("p", { class: "font-mono text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.publicIp || "-"), 1),
                  createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatLocation(row.original)), 1)
                ]),
                "currentVersion-cell": withCtx(({ row }) => [
                  createVNode("p", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.currentVersion || "-"), 1),
                  row.original.firstVersion ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
                  }, " \u9996\u88C5 " + toDisplayString(row.original.firstVersion), 1)) : createCommentVNode("", true)
                ]),
                "os-cell": withCtx(({ row }) => [
                  createVNode("p", { class: "text-sm text-gray-800 dark:text-gray-200" }, toDisplayString(formatSystem(row.original)), 1),
                  createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString([row.original.runtime, row.original.kernel].filter(Boolean).join(" \xB7 ")), 1)
                ]),
                "counts-cell": withCtx(({ row }) => [
                  createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(row.original.installCount) + " / " + toDisplayString(row.original.upgradeCount), 1),
                  row.original.upgradeFailedCount ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    color: "error",
                    variant: "subtle",
                    class: "ml-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5931\u8D25 " + toDisplayString(row.original.upgradeFailedCount), 1)
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                "lastSeenAt-cell": withCtx(({ row }) => [
                  createVNode("p", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.lastSeenAt)), 1),
                  createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, "\u9996\u6B21 " + toDisplayString(unref(formatDateTime)(row.original.firstSeenAt)), 1)
                ]),
                "installId-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("span", { class: "font-mono text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(shortId(row.original.installId)), 1),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:copy",
                      size: "xs",
                      onClick: ($event) => copyText(row.original.installId)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                "actions-cell": withCtx(({ row }) => [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "soft",
                    size: "xs",
                    icon: "ph:list-bullets",
                    onClick: ($event) => openEvents(row.original)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u8BB0\u5F55 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                empty: withCtx(() => [
                  createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u4E0A\u62A5\u8BB0\u5F55")
                ]),
                _: 1
              }, 8, ["data", "loading"]),
              serverTotal.value > serverPageSize ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex justify-center border-t border-gray-200 px-4 pt-4 dark:border-gray-800/50"
              }, [
                createVNode(_component_UPagination, {
                  page: serverPage.value,
                  "onUpdate:page": ($event) => serverPage.value = $event,
                  total: serverTotal.value,
                  "items-per-page": serverPageSize,
                  max: 5
                }, null, 8, ["page", "onUpdate:page", "total"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: eventsOpen.value,
        "onUpdate:open": ($event) => eventsOpen.value = $event,
        ui: { content: "sm:max-w-4xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="space-y-4 p-5"${_scopeId}><div class="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800"${_scopeId}><div${_scopeId}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId}>\u670D\u52A1\u5668\u8BB0\u5F55</h3><p class="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(((_a = selectedServer.value) == null ? void 0 : _a.publicIp) || "-")} \xB7 ${ssrInterpolate((_b = selectedServer.value) == null ? void 0 : _b.installId)}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              onClick: ($event) => eventsOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (eventsError.value) {
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "error",
                variant: "subtle",
                icon: "ph:warning",
                title: eventsError.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UTable, {
              data: events.value,
              columns: eventColumns,
              loading: eventsPending.value,
              class: "max-h-[60vh] min-w-full"
            }, {
              "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ];
                }
              }),
              "event-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: eventMeta(row.original.event).color,
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(eventMeta(row.original.event).label)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(eventMeta(row.original.event).label), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: eventMeta(row.original.event).color,
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(eventMeta(row.original.event).label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "version-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-mono text-xs text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(row.original.fromVersion ? `${row.original.fromVersion} \u2192 ` : "")}${ssrInterpolate(row.original.version || "-")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.fromVersion ? `${row.original.fromVersion} \u2192 ` : "") + toDisplayString(row.original.version || "-"), 1)
                  ];
                }
              }),
              "publicIp-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-mono text-xs text-gray-800 dark:text-gray-200"${_scopeId2}>${ssrInterpolate(row.original.publicIp || "-")}</p><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(formatLocation(row.original))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.publicIp || "-"), 1),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatLocation(row.original)), 1)
                  ];
                }
              }),
              "source-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(sourceLabel(row.original.source))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(sourceLabel(row.original.source)), 1)
                  ];
                }
              }),
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="py-6 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>\u6682\u65E0\u8BB0\u5F55</p>`);
                } else {
                  return [
                    createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u8BB0\u5F55")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (eventTotal.value > eventPageSize) {
              _push2(`<div class="flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                page: eventPage.value,
                "onUpdate:page": ($event) => eventPage.value = $event,
                total: eventTotal.value,
                "items-per-page": eventPageSize,
                max: 5
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-5" }, [
                createVNode("div", { class: "flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, "\u670D\u52A1\u5668\u8BB0\u5F55"),
                    createVNode("p", { class: "mt-1 font-mono text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(((_c = selectedServer.value) == null ? void 0 : _c.publicIp) || "-") + " \xB7 " + toDisplayString((_d = selectedServer.value) == null ? void 0 : _d.installId), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    onClick: ($event) => eventsOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                eventsError.value ? (openBlock(), createBlock(_component_UAlert, {
                  key: 0,
                  color: "error",
                  variant: "subtle",
                  icon: "ph:warning",
                  title: eventsError.value
                }, null, 8, ["title"])) : createCommentVNode("", true),
                createVNode(_component_UTable, {
                  data: events.value,
                  columns: eventColumns,
                  loading: eventsPending.value,
                  class: "max-h-[60vh] min-w-full"
                }, {
                  "createdAt-cell": withCtx(({ row }) => [
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                  ]),
                  "event-cell": withCtx(({ row }) => [
                    createVNode(_component_UBadge, {
                      color: eventMeta(row.original.event).color,
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(eventMeta(row.original.event).label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  "version-cell": withCtx(({ row }) => [
                    createVNode("span", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.fromVersion ? `${row.original.fromVersion} \u2192 ` : "") + toDisplayString(row.original.version || "-"), 1)
                  ]),
                  "publicIp-cell": withCtx(({ row }) => [
                    createVNode("p", { class: "font-mono text-xs text-gray-800 dark:text-gray-200" }, toDisplayString(row.original.publicIp || "-"), 1),
                    createVNode("p", { class: "mt-1 text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(formatLocation(row.original)), 1)
                  ]),
                  "source-cell": withCtx(({ row }) => [
                    createVNode("span", { class: "text-xs text-gray-600 dark:text-gray-300" }, toDisplayString(sourceLabel(row.original.source)), 1)
                  ]),
                  empty: withCtx(() => [
                    createVNode("p", { class: "py-6 text-center text-sm text-gray-500 dark:text-gray-400" }, "\u6682\u65E0\u8BB0\u5F55")
                  ]),
                  _: 1
                }, 8, ["data", "loading"]),
                eventTotal.value > eventPageSize ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex justify-center"
                }, [
                  createVNode(_component_UPagination, {
                    page: eventPage.value,
                    "onUpdate:page": ($event) => eventPage.value = $event,
                    total: eventTotal.value,
                    "items-per-page": eventPageSize,
                    max: 5
                  }, null, 8, ["page", "onUpdate:page", "total"])
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
//# sourceMappingURL=install-stats-CJocnIZu.mjs.map
