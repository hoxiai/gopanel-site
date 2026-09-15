import { g as useToast, k as _sfc_main$z, b as _sfc_main$E, n as _sfc_main$v, d as _sfc_main$i, p as _sfc_main$q } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-jMFP8cqX.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import 'node:os';
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

const pageSize = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "appstore",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const loading = ref(false);
    const building = ref(false);
    const showBuildModal = ref(false);
    const showDetailModal = ref(false);
    const currentApp = ref(null);
    const buildResultLogs = ref([]);
    const showComposeModal = ref(false);
    const loadingCompose = ref(false);
    const savingCompose = ref(false);
    const resettingCompose = ref(false);
    const editingAppKey = ref("");
    const editingVersion = ref("");
    const editingComposeContent = ref("");
    const composeHasLocal = ref(false);
    const stats = ref({
      exists: true,
      totalApps: 0,
      totalVersions: 0,
      zipSizeFormatted: "0 KB",
      builtAt: ""
    });
    const appsList = ref([]);
    const searchKeyword = ref("");
    const currentPage = ref(1);
    const formattedBuiltTime = computed(() => {
      if (!stats.value.builtAt) return "\u672A\u8BB0\u5F55";
      try {
        const d = new Date(stats.value.builtAt);
        return d.toLocaleString();
      } catch {
        return stats.value.builtAt;
      }
    });
    const getAppKey = (app) => {
      var _a;
      return ((_a = app.additionalProperties) == null ? void 0 : _a.key) || app.id || "";
    };
    const filteredApps = computed(() => {
      if (!searchKeyword.value.trim()) return appsList.value;
      const kw = searchKeyword.value.toLowerCase().trim();
      return appsList.value.filter((a) => {
        var _a;
        const name = (a.name || "").toLowerCase();
        const key = getAppKey(a).toLowerCase();
        const desc = (((_a = a.additionalProperties) == null ? void 0 : _a.shortDescZh) || a.description || "").toLowerCase();
        return name.includes(kw) || key.includes(kw) || desc.includes(kw);
      });
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredApps.value.length / pageSize) || 1;
    });
    const paginatedApps = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      return filteredApps.value.slice(start, start + pageSize);
    });
    const refreshData = async () => {
      loading.value = true;
      try {
        const statsRes = await $fetch("/api/panel/apps/stats");
        if (statsRes == null ? void 0 : statsRes.data) {
          stats.value = statsRes.data;
        }
        const appsRes = await $fetch("/api/panel/apps");
        if ((appsRes == null ? void 0 : appsRes.apps) && Array.isArray(appsRes.apps)) {
          appsList.value = appsRes.apps;
          if (!stats.value.totalApps) {
            stats.value.totalApps = appsRes.apps.length;
          }
        }
      } catch (err) {
        toast.add({
          title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u72B6\u6001",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    };
    const openBuildModal = () => {
      buildResultLogs.value = [];
      showBuildModal.value = true;
    };
    const handleBuild = async () => {
      building.value = true;
      buildResultLogs.value = ["\u6B63\u5728\u542F\u52A8\u6784\u5EFA\u6D41\u6C34\u7EBF..."];
      try {
        const res = await $fetch("/api/panel/apps/build", {
          method: "POST",
          body: {}
        });
        if ((res == null ? void 0 : res.code) === 0 && res.data) {
          stats.value = {
            exists: true,
            totalApps: res.data.totalApps,
            totalVersions: res.data.totalVersions,
            zipSizeFormatted: res.data.zipSizeFormatted,
            builtAt: res.data.builtAt
          };
          buildResultLogs.value = res.data.logs || ["\u6784\u5EFA\u5B8C\u6210"];
          toast.add({
            title: "\u4E00\u952E\u6784\u5EFA\u6210\u529F\uFF01",
            description: `\u5DF2\u6210\u529F\u6E05\u6D17\u5E76\u6253\u5305 ${res.data.totalApps} \u6B3E\u5E94\u7528\uFF0C\u5305\u4F53\u79EF: ${res.data.zipSizeFormatted}`,
            color: "success"
          });
          await refreshData();
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u6784\u5EFA\u672A\u77E5\u9519\u8BEF");
        }
      } catch (err) {
        buildResultLogs.value.push(`\u6784\u5EFA\u5931\u8D25: ${(err == null ? void 0 : err.message) || err}`);
        toast.add({
          title: "\u6784\u5EFA\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u68C0\u67E5\u65E5\u5FD7\u8F93\u51FA",
          color: "error"
        });
      } finally {
        building.value = false;
      }
    };
    const openDetail = (app) => {
      currentApp.value = app;
      showDetailModal.value = true;
    };
    const openComposeEditor = async (key, version) => {
      editingAppKey.value = key;
      editingVersion.value = version;
      editingComposeContent.value = "";
      composeHasLocal.value = false;
      loadingCompose.value = true;
      showComposeModal.value = true;
      try {
        const res = await $fetch("/api/panel/apps/compose", {
          params: { key, version }
        });
        if ((res == null ? void 0 : res.code) === 0 && res.data) {
          editingComposeContent.value = res.data.compose || "";
          composeHasLocal.value = Boolean(res.data.isLocal);
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u8BFB\u53D6 Compose \u6A21\u677F\u5931\u8D25");
        }
      } catch (err) {
        toast.add({
          title: "\u8BFB\u53D6 Compose \u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u83B7\u53D6\u5E94\u7528\u6A21\u677F\u5185\u5BB9",
          color: "error"
        });
      } finally {
        loadingCompose.value = false;
      }
    };
    const quickNormalizeCompose = () => {
      if (!editingComposeContent.value) return;
      const before = editingComposeContent.value;
      const after = before.replace(/\/opt\/1panel/g, "/opt/gopanel").replace(/1panel-network/g, "gopanel-network").replace(/1Panel/g, "GoPanel").replace(/1panel/g, "gopanel");
      if (before === after) {
        toast.add({
          title: "\u65E0\u9700\u66FF\u6362",
          description: "\u672A\u68C0\u6D4B\u5230\u9700\u8981\u66FF\u6362\u7684 1Panel \u76F8\u5173\u7F51\u7EDC\u540D\u6216\u8DEF\u5F84",
          color: "neutral"
        });
        return;
      }
      editingComposeContent.value = after;
      toast.add({
        title: "\u5DF2\u89C4\u8303\u5316\u66FF\u6362",
        description: "\u5DF2\u5C06 1panel-network \u66FF\u6362\u4E3A gopanel-network\uFF0C/opt/1panel \u66FF\u6362\u4E3A /opt/gopanel",
        color: "success"
      });
    };
    const handleSaveCompose = async () => {
      var _a;
      if (!editingComposeContent.value.trim()) {
        toast.add({
          title: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
          description: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 docker-compose.yml \u5185\u5BB9",
          color: "error"
        });
        return;
      }
      savingCompose.value = true;
      try {
        const res = await $fetch("/api/panel/apps/compose", {
          method: "POST",
          body: {
            key: editingAppKey.value,
            version: editingVersion.value,
            compose: editingComposeContent.value
          }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          composeHasLocal.value = true;
          toast.add({
            title: "\u91CD\u65B0\u6253\u5305\u8986\u76D6\u6210\u529F\uFF01",
            description: `${editingAppKey.value} (v${editingVersion.value}) \u5DF2\u66F4\u65B0\u5E76\u91CD\u65B0\u751F\u6210\u79BB\u7EBF\u5305 (${((_a = res.data) == null ? void 0 : _a.sizeFormatted) || "\u5DF2\u4FDD\u5B58"})`,
            color: "success"
          });
          showComposeModal.value = false;
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u5931\u8D25");
        }
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u68C0\u67E5\u670D\u52A1\u7AEF\u6267\u884C\u72B6\u6001",
          color: "error"
        });
      } finally {
        savingCompose.value = false;
      }
    };
    const handleResetCompose = async () => {
      resettingCompose.value = true;
      try {
        const res = await $fetch("/api/panel/apps/compose", {
          method: "DELETE",
          params: {
            key: editingAppKey.value,
            version: editingVersion.value
          }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          toast.add({
            title: "\u5DF2\u91CD\u7F6E\u4E3A\u5B98\u65B9\u6E05\u6D17\u5305",
            description: "\u5DF2\u91CD\u65B0\u62C9\u53D6\u4E0A\u6E38\u5B98\u65B9\u5305\u5E76\u5B8C\u6210\u6807\u51C6\u5316\u6E05\u6D17",
            color: "success"
          });
          await openComposeEditor(editingAppKey.value, editingVersion.value);
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u91CD\u7F6E\u5931\u8D25");
        }
      } catch (err) {
        toast.add({
          title: "\u91CD\u7F6E\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u91CD\u8BD5",
          color: "error"
        });
      } finally {
        resettingCompose.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$z;
      const _component_UCard = _sfc_main$1;
      const _component_UIcon = _sfc_main$E;
      const _component_UInput = _sfc_main$i;
      const _component_UBadge = _sfc_main$v;
      const _component_UModal = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> \u5E94\u7528\u5546\u5E97\u7BA1\u7406 </h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400"> \u5168\u91CF\u5E94\u7528\u5143\u6570\u636E\u7BA1\u7406\u30011Panel \u54C1\u724C\u4E0E\u53C2\u6570\u7EDF\u4E00\u6E05\u6D17\uFF0C\u4E00\u952E\u6784\u5EFA GoPanel \u7EAF\u51C0\u79BB\u7EBF\u5305\u3002 </p></div><div class="flex flex-wrap items-center gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:download-simple",
        href: "/themes/panel/apps/gopanel.json.zip",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0B\u8F7D\u6700\u65B0\u5305 `);
          } else {
            return [
              createTextVNode(" \u4E0B\u8F7D\u6700\u65B0\u5305 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        loading: loading.value,
        onClick: refreshData
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
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "ph:lightning",
        loading: building.value,
        onClick: openBuildModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E00\u952E\u540C\u6B65\u5E76\u6784\u5EFA `);
          } else {
            return [
              createTextVNode(" \u4E00\u952E\u540C\u6B65\u5E76\u6784\u5EFA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u6536\u5F55\u5E94\u7528\u6570</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:squares-four",
              class: "h-5 w-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(stats.value.totalApps || 0)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u8986\u76D6\u6570\u636E\u5E93\u3001\u8FD0\u884C\u73AF\u5883\u3001Web\u5E94\u7528\u7B49</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u6536\u5F55\u5E94\u7528\u6570"),
                createVNode(_component_UIcon, {
                  name: "ph:squares-four",
                  class: "h-5 w-5 text-blue-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-gray-900 dark:text-white" }, toDisplayString(stats.value.totalApps || 0), 1),
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u8986\u76D6\u6570\u636E\u5E93\u3001\u8FD0\u884C\u73AF\u5883\u3001Web\u5E94\u7528\u7B49")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u7248\u672C\u603B\u6570</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:git-commit",
              class: "h-5 w-5 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-3xl font-bold text-purple-500 dark:text-purple-400"${_scopeId}>${ssrInterpolate(stats.value.totalVersions || 0)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u9884\u5904\u7406\u5404\u5E94\u7528\u5386\u53F2\u4E0E\u6700\u65B0\u53D1\u884C\u7248</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u7248\u672C\u603B\u6570"),
                createVNode(_component_UIcon, {
                  name: "ph:git-commit",
                  class: "h-5 w-5 text-purple-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-purple-500 dark:text-purple-400" }, toDisplayString(stats.value.totalVersions || 0), 1),
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u9884\u5904\u7406\u5404\u5E94\u7528\u5386\u53F2\u4E0E\u6700\u65B0\u53D1\u884C\u7248")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u79BB\u7EBF\u538B\u7F29\u5305\u5927\u5C0F</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:package",
              class: "h-5 w-5 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-3xl font-bold text-emerald-500 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(stats.value.zipSizeFormatted || "0 KB")}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>gopanel.json.zip \u6781\u901F\u540C\u6B65\u5305</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u79BB\u7EBF\u538B\u7F29\u5305\u5927\u5C0F"),
                createVNode(_component_UIcon, {
                  name: "ph:package",
                  class: "h-5 w-5 text-emerald-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-emerald-500 dark:text-emerald-400" }, toDisplayString(stats.value.zipSizeFormatted || "0 KB"), 1),
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "gopanel.json.zip \u6781\u901F\u540C\u6B65\u5305")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u6700\u8FD1\u6784\u5EFA\u65F6\u95F4</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:clock",
              class: "h-5 w-5 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-lg font-bold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(formattedBuiltTime.value)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u6570\u636E\u72B6\u6001\uFF1A${ssrInterpolate(stats.value.exists ? "\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1" : "\u5C1A\u672A\u6784\u5EFA")}</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u6700\u8FD1\u6784\u5EFA\u65F6\u95F4"),
                createVNode(_component_UIcon, {
                  name: "ph:clock",
                  class: "h-5 w-5 text-amber-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-lg font-bold text-gray-900 dark:text-white truncate" }, toDisplayString(formattedBuiltTime.value), 1),
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u6570\u636E\u72B6\u6001\uFF1A" + toDisplayString(stats.value.exists ? "\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1" : "\u5C1A\u672A\u6784\u5EFA"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:list-dashes",
              class: "h-5 w-5 text-cyan-500"
            }, null, _parent2, _scopeId));
            _push2(` \u5E94\u7528\u76EE\u5F55\u9884\u89C8\uFF08\u5171 ${ssrInterpolate(filteredApps.value.length)} \u6B3E\uFF09 </div><div class="flex flex-col gap-2 sm:flex-row sm:items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchKeyword.value,
              "onUpdate:modelValue": ($event) => searchKeyword.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u641C\u7D22\u5E94\u7528\u540D\u79F0\u3001Key\u3001\u8BF4\u660E...",
              class: "w-full sm:w-64"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:list-dashes",
                    class: "h-5 w-5 text-cyan-500"
                  }),
                  createTextVNode(" \u5E94\u7528\u76EE\u5F55\u9884\u89C8\uFF08\u5171 " + toDisplayString(filteredApps.value.length) + " \u6B3E\uFF09 ", 1)
                ]),
                createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-center" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchKeyword.value,
                    "onUpdate:modelValue": ($event) => searchKeyword.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u641C\u7D22\u5E94\u7528\u540D\u79F0\u3001Key\u3001\u8BF4\u660E...",
                    class: "w-full sm:w-64"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-sm"${_scopeId}><thead class="border-b border-gray-200 text-xs uppercase text-gray-500 dark:border-gray-800"${_scopeId}><tr${_scopeId}><th class="py-3 px-4"${_scopeId}>\u5E94\u7528\u4FE1\u606F</th><th class="py-3 px-4"${_scopeId}>\u5206\u7C7B\u4E0E\u6807\u7B7E</th><th class="py-3 px-4"${_scopeId}>\u7248\u672C\u6570</th><th class="py-3 px-4"${_scopeId}>\u67B6\u6784\u652F\u6301</th><th class="py-3 px-4 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/60"${_scopeId}><!--[-->`);
            ssrRenderList(paginatedApps.value, (app) => {
              var _a, _b;
              _push2(`<tr class="hover:bg-gray-50/60 dark:hover:bg-gray-800/30"${_scopeId}><td class="py-3 px-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
              if (app.icon) {
                _push2(`<img${ssrRenderAttr("src", app.icon)} class="h-9 w-9 rounded-lg object-contain bg-gray-100 dark:bg-gray-800 p-1" alt="icon"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(app.name || getAppKey(app))}</div><div class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(getAppKey(app))}</div></div></div></td><td class="py-3 px-4"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(app.tags || ((_a = app.additionalProperties) == null ? void 0 : _a.tags) || [], (tag) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: tag,
                  color: "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></td><td class="py-3 px-4 font-mono font-medium"${_scopeId}>${ssrInterpolate(app.versions ? app.versions.length : 0)}</td><td class="py-3 px-4"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(((_b = app.additionalProperties) == null ? void 0 : _b.architectures) || ["amd64", "arm64"], (arch) => {
                _push2(`<span class="text-xs text-gray-500 font-mono"${_scopeId}>${ssrInterpolate(arch)}</span>`);
              });
              _push2(`<!--]--></div></td><td class="py-3 px-4 text-right"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "ph:eye",
                onClick: ($event) => openDetail(app)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u67E5\u770B\u8BE6\u60C5 `);
                  } else {
                    return [
                      createTextVNode(" \u67E5\u770B\u8BE6\u60C5 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]-->`);
            if (filteredApps.value.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="5" class="py-12 text-center text-gray-400"${_scopeId}> \u6682\u672A\u68C0\u7D22\u5230\u5339\u914D\u7684\u5E94\u7528 </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
            if (totalPages.value > 1) {
              _push2(`<div class="mt-4 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800"${_scopeId}><p class="text-xs text-gray-400"${_scopeId}> \u663E\u793A\u7B2C ${ssrInterpolate((currentPage.value - 1) * pageSize + 1)} \u5230 ${ssrInterpolate(Math.min(currentPage.value * pageSize, filteredApps.value.length))} \u6761\uFF0C\u5171 ${ssrInterpolate(filteredApps.value.length)} \u6761 </p><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "outline",
                disabled: currentPage.value <= 1,
                onClick: ($event) => currentPage.value--
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4E0A\u4E00\u9875 `);
                  } else {
                    return [
                      createTextVNode(" \u4E0A\u4E00\u9875 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="px-2 py-1 text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "outline",
                disabled: currentPage.value >= totalPages.value,
                onClick: ($event) => currentPage.value++
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4E0B\u4E00\u9875 `);
                  } else {
                    return [
                      createTextVNode(" \u4E0B\u4E00\u9875 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-sm" }, [
                  createVNode("thead", { class: "border-b border-gray-200 text-xs uppercase text-gray-500 dark:border-gray-800" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "py-3 px-4" }, "\u5E94\u7528\u4FE1\u606F"),
                      createVNode("th", { class: "py-3 px-4" }, "\u5206\u7C7B\u4E0E\u6807\u7B7E"),
                      createVNode("th", { class: "py-3 px-4" }, "\u7248\u672C\u6570"),
                      createVNode("th", { class: "py-3 px-4" }, "\u67B6\u6784\u652F\u6301"),
                      createVNode("th", { class: "py-3 px-4 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800/60" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(paginatedApps.value, (app) => {
                      var _a, _b;
                      return openBlock(), createBlock("tr", {
                        key: getAppKey(app),
                        class: "hover:bg-gray-50/60 dark:hover:bg-gray-800/30"
                      }, [
                        createVNode("td", { class: "py-3 px-4" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            app.icon ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: app.icon,
                              class: "h-9 w-9 rounded-lg object-contain bg-gray-100 dark:bg-gray-800 p-1",
                              alt: "icon",
                              onError: (e) => e.target.style.display = "none"
                            }, null, 40, ["src", "onError"])) : createCommentVNode("", true),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(app.name || getAppKey(app)), 1),
                              createVNode("div", { class: "text-xs text-gray-400 font-mono" }, toDisplayString(getAppKey(app)), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "py-3 px-4" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(app.tags || ((_a = app.additionalProperties) == null ? void 0 : _a.tags) || [], (tag) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: tag,
                                color: "neutral",
                                variant: "subtle",
                                size: "xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "py-3 px-4 font-mono font-medium" }, toDisplayString(app.versions ? app.versions.length : 0), 1),
                        createVNode("td", { class: "py-3 px-4" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(((_b = app.additionalProperties) == null ? void 0 : _b.architectures) || ["amd64", "arm64"], (arch) => {
                              return openBlock(), createBlock("span", {
                                key: arch,
                                class: "text-xs text-gray-500 font-mono"
                              }, toDisplayString(arch), 1);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "py-3 px-4 text-right" }, [
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:eye",
                            onClick: ($event) => openDetail(app)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u67E5\u770B\u8BE6\u60C5 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    filteredApps.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "5",
                        class: "py-12 text-center text-gray-400"
                      }, " \u6682\u672A\u68C0\u7D22\u5230\u5339\u914D\u7684\u5E94\u7528 ")
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              totalPages.value > 1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800"
              }, [
                createVNode("p", { class: "text-xs text-gray-400" }, " \u663E\u793A\u7B2C " + toDisplayString((currentPage.value - 1) * pageSize + 1) + " \u5230 " + toDisplayString(Math.min(currentPage.value * pageSize, filteredApps.value.length)) + " \u6761\uFF0C\u5171 " + toDisplayString(filteredApps.value.length) + " \u6761 ", 1),
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "outline",
                    disabled: currentPage.value <= 1,
                    onClick: ($event) => currentPage.value--
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4E0A\u4E00\u9875 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode("span", { class: "px-2 py-1 text-xs text-gray-400 font-mono" }, toDisplayString(currentPage.value) + " / " + toDisplayString(totalPages.value), 1),
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "outline",
                    disabled: currentPage.value >= totalPages.value,
                    onClick: ($event) => currentPage.value++
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4E0B\u4E00\u9875 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: showBuildModal.value,
        "onUpdate:modelValue": ($event) => showBuildModal.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:hammer",
                    class: "h-5 w-5 text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(` \u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305 </div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2 font-bold text-gray-900 dark:text-white" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:hammer",
                        class: "h-5 w-5 text-primary-500"
                      }),
                      createTextVNode(" \u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305 ")
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    disabled: building.value,
                    onClick: ($event) => showBuildModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u53D6\u6D88 `);
                      } else {
                        return [
                          createTextVNode(" \u53D6\u6D88 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    loading: building.value,
                    icon: "ph:play",
                    onClick: handleBuild
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5F00\u59CB\u6784\u5EFA `);
                      } else {
                        return [
                          createTextVNode(" \u5F00\u59CB\u6784\u5EFA ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        disabled: building.value,
                        onClick: ($event) => showBuildModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53D6\u6D88 ")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        loading: building.value,
                        icon: "ph:play",
                        onClick: handleBuild
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5F00\u59CB\u6784\u5EFA ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 text-sm"${_scopeId2}><p class="text-gray-600 dark:text-gray-300"${_scopeId2}> \u70B9\u51FB\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u6D41\u6C34\u7EBF\u4EFB\u52A1\uFF1A </p><ul class="list-disc pl-5 space-y-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId2}><li${_scopeId2}>\u6DF1\u5EA6\u66FF\u6362\u6240\u6709\u5E94\u7528\u540D\u79F0\u4E0E\u6587\u672C\uFF08<code${_scopeId2}>1Panel</code> \u2192 <code${_scopeId2}>GoPanel</code>\uFF09</li><li${_scopeId2}>\u6807\u51C6\u5316\u5BB9\u5668\u7F51\u7EDC\u540D\uFF08<code${_scopeId2}>1panel-network</code> \u2192 <code${_scopeId2}>gopanel-network</code>\uFF09</li><li${_scopeId2}>\u4FEE\u590D\u914D\u7F6E\u8DEF\u5F84\uFF08<code${_scopeId2}>/opt/1panel</code> \u2192 <code${_scopeId2}>/opt/gopanel</code>\uFF09</li><li${_scopeId2}>\u5F7B\u5E95\u6E05\u9664 1Panel \u7B2C\u4E09\u65B9\u9065\u6D4B\u4E0E\u56DE\u8C03\u8BF7\u6C42</li><li${_scopeId2}>\u91CD\u65B0\u538B\u7F29\u5E76\u53D1\u5E03 <code${_scopeId2}>gopanel.json.zip</code> \u53CA <code${_scopeId2}>apps.json</code></li></ul>`);
                  if (buildResultLogs.value.length > 0) {
                    _push3(`<div class="mt-4 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-48 overflow-y-auto space-y-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(buildResultLogs.value, (line, idx) => {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(line)}</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 text-sm" }, [
                      createVNode("p", { class: "text-gray-600 dark:text-gray-300" }, " \u70B9\u51FB\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u6D41\u6C34\u7EBF\u4EFB\u52A1\uFF1A "),
                      createVNode("ul", { class: "list-disc pl-5 space-y-1 text-xs text-gray-500 dark:text-gray-400" }, [
                        createVNode("li", null, [
                          createTextVNode("\u6DF1\u5EA6\u66FF\u6362\u6240\u6709\u5E94\u7528\u540D\u79F0\u4E0E\u6587\u672C\uFF08"),
                          createVNode("code", null, "1Panel"),
                          createTextVNode(" \u2192 "),
                          createVNode("code", null, "GoPanel"),
                          createTextVNode("\uFF09")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("\u6807\u51C6\u5316\u5BB9\u5668\u7F51\u7EDC\u540D\uFF08"),
                          createVNode("code", null, "1panel-network"),
                          createTextVNode(" \u2192 "),
                          createVNode("code", null, "gopanel-network"),
                          createTextVNode("\uFF09")
                        ]),
                        createVNode("li", null, [
                          createTextVNode("\u4FEE\u590D\u914D\u7F6E\u8DEF\u5F84\uFF08"),
                          createVNode("code", null, "/opt/1panel"),
                          createTextVNode(" \u2192 "),
                          createVNode("code", null, "/opt/gopanel"),
                          createTextVNode("\uFF09")
                        ]),
                        createVNode("li", null, "\u5F7B\u5E95\u6E05\u9664 1Panel \u7B2C\u4E09\u65B9\u9065\u6D4B\u4E0E\u56DE\u8C03\u8BF7\u6C42"),
                        createVNode("li", null, [
                          createTextVNode("\u91CD\u65B0\u538B\u7F29\u5E76\u53D1\u5E03 "),
                          createVNode("code", null, "gopanel.json.zip"),
                          createTextVNode(" \u53CA "),
                          createVNode("code", null, "apps.json")
                        ])
                      ]),
                      buildResultLogs.value.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-4 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-48 overflow-y-auto space-y-1"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(buildResultLogs.value, (line, idx) => {
                          return openBlock(), createBlock("div", { key: idx }, toDisplayString(line), 1);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-2 font-bold text-gray-900 dark:text-white" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:hammer",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    createTextVNode(" \u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305 ")
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      disabled: building.value,
                      onClick: ($event) => showBuildModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u53D6\u6D88 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      loading: building.value,
                      icon: "ph:play",
                      onClick: handleBuild
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5F00\u59CB\u6784\u5EFA ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4 text-sm" }, [
                    createVNode("p", { class: "text-gray-600 dark:text-gray-300" }, " \u70B9\u51FB\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u6D41\u6C34\u7EBF\u4EFB\u52A1\uFF1A "),
                    createVNode("ul", { class: "list-disc pl-5 space-y-1 text-xs text-gray-500 dark:text-gray-400" }, [
                      createVNode("li", null, [
                        createTextVNode("\u6DF1\u5EA6\u66FF\u6362\u6240\u6709\u5E94\u7528\u540D\u79F0\u4E0E\u6587\u672C\uFF08"),
                        createVNode("code", null, "1Panel"),
                        createTextVNode(" \u2192 "),
                        createVNode("code", null, "GoPanel"),
                        createTextVNode("\uFF09")
                      ]),
                      createVNode("li", null, [
                        createTextVNode("\u6807\u51C6\u5316\u5BB9\u5668\u7F51\u7EDC\u540D\uFF08"),
                        createVNode("code", null, "1panel-network"),
                        createTextVNode(" \u2192 "),
                        createVNode("code", null, "gopanel-network"),
                        createTextVNode("\uFF09")
                      ]),
                      createVNode("li", null, [
                        createTextVNode("\u4FEE\u590D\u914D\u7F6E\u8DEF\u5F84\uFF08"),
                        createVNode("code", null, "/opt/1panel"),
                        createTextVNode(" \u2192 "),
                        createVNode("code", null, "/opt/gopanel"),
                        createTextVNode("\uFF09")
                      ]),
                      createVNode("li", null, "\u5F7B\u5E95\u6E05\u9664 1Panel \u7B2C\u4E09\u65B9\u9065\u6D4B\u4E0E\u56DE\u8C03\u8BF7\u6C42"),
                      createVNode("li", null, [
                        createTextVNode("\u91CD\u65B0\u538B\u7F29\u5E76\u53D1\u5E03 "),
                        createVNode("code", null, "gopanel.json.zip"),
                        createTextVNode(" \u53CA "),
                        createVNode("code", null, "apps.json")
                      ])
                    ]),
                    buildResultLogs.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-48 overflow-y-auto space-y-1"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(buildResultLogs.value, (line, idx) => {
                        return openBlock(), createBlock("div", { key: idx }, toDisplayString(line), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: showDetailModal.value,
        "onUpdate:modelValue": ($event) => showDetailModal.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (currentApp.value) {
              _push2(ssrRenderComponent(_component_UCard, null, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}>`);
                    if (currentApp.value.icon) {
                      _push3(`<img${ssrRenderAttr("src", currentApp.value.icon)} class="h-8 w-8 rounded-lg object-contain" alt="icon"${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}><div class="font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(currentApp.value.name)}</div><div class="text-xs font-mono text-gray-400"${_scopeId2}>${ssrInterpolate(getAppKey(currentApp.value))}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        currentApp.value.icon ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: currentApp.value.icon,
                          class: "h-8 w-8 rounded-lg object-contain",
                          alt: "icon"
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(currentApp.value.name), 1),
                          createVNode("div", { class: "text-xs font-mono text-gray-400" }, toDisplayString(getAppKey(currentApp.value)), 1)
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(`<div class="space-y-4 text-sm max-h-[70vh] overflow-y-auto"${_scopeId2}><div${_scopeId2}><p class="text-xs font-semibold uppercase text-gray-400"${_scopeId2}>\u7B80\u4ECB\u8BF4\u660E</p><p class="mt-1 text-gray-600 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(((_a = currentApp.value.additionalProperties) == null ? void 0 : _a.shortDescZh) || currentApp.value.description || "\u6682\u65E0\u63CF\u8FF0")}</p></div><div${_scopeId2}><p class="text-xs font-semibold uppercase text-gray-400"${_scopeId2}>\u6536\u5F55\u7248\u672C\uFF08${ssrInterpolate(((_b = currentApp.value.versions) == null ? void 0 : _b.length) || 0)} \u4E2A\uFF09</p><div class="mt-2 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(currentApp.value.versions, (v) => {
                      _push3(`<div class="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/60 p-2.5 dark:border-gray-800 dark:bg-gray-900/60"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UBadge, {
                        color: "primary",
                        variant: "subtle",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` v${ssrInterpolate(v.name)}`);
                          } else {
                            return [
                              createTextVNode(" v" + toDisplayString(v.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (v.lastModified) {
                        _push3(`<span class="text-xs text-gray-400 font-mono"${_scopeId2}>${ssrInterpolate(new Date(v.lastModified * 1e3).toLocaleDateString())}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        size: "xs",
                        color: "primary",
                        variant: "soft",
                        icon: "ph:code",
                        onClick: ($event) => openComposeEditor(getAppKey(currentApp.value), v.name)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u7F16\u8F91 Compose \u5E76\u91CD\u6253\u5305 `);
                          } else {
                            return [
                              createTextVNode(" \u7F16\u8F91 Compose \u5E76\u91CD\u6253\u5305 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:download-simple",
                        href: v.downloadUrl,
                        target: "_blank"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u4E0B\u8F7D\u5305 `);
                          } else {
                            return [
                              createTextVNode(" \u4E0B\u8F7D\u5305 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                    if (currentApp.value.readMe) {
                      _push3(`<div${_scopeId2}><p class="text-xs font-semibold uppercase text-gray-400"${_scopeId2}>ReadMe \u6587\u6863\u9884\u89C8</p><pre class="mt-2 rounded-lg bg-gray-100 p-3 text-xs font-mono text-gray-800 dark:bg-gray-900 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap max-h-48"${_scopeId2}>${ssrInterpolate(currentApp.value.readMe)}</pre></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-4 text-sm max-h-[70vh] overflow-y-auto" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "\u7B80\u4ECB\u8BF4\u660E"),
                          createVNode("p", { class: "mt-1 text-gray-600 dark:text-gray-300" }, toDisplayString(((_c = currentApp.value.additionalProperties) == null ? void 0 : _c.shortDescZh) || currentApp.value.description || "\u6682\u65E0\u63CF\u8FF0"), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "\u6536\u5F55\u7248\u672C\uFF08" + toDisplayString(((_d = currentApp.value.versions) == null ? void 0 : _d.length) || 0) + " \u4E2A\uFF09", 1),
                          createVNode("div", { class: "mt-2 space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(currentApp.value.versions, (v) => {
                              return openBlock(), createBlock("div", {
                                key: v.name,
                                class: "flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/60 p-2.5 dark:border-gray-800 dark:bg-gray-900/60"
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_UBadge, {
                                    color: "primary",
                                    variant: "subtle",
                                    size: "sm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" v" + toDisplayString(v.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  v.lastModified ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-xs text-gray-400 font-mono"
                                  }, toDisplayString(new Date(v.lastModified * 1e3).toLocaleDateString()), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_UButton, {
                                    size: "xs",
                                    color: "primary",
                                    variant: "soft",
                                    icon: "ph:code",
                                    onClick: ($event) => openComposeEditor(getAppKey(currentApp.value), v.name)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7F16\u8F91 Compose \u5E76\u91CD\u6253\u5305 ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UButton, {
                                    size: "xs",
                                    color: "neutral",
                                    variant: "ghost",
                                    icon: "ph:download-simple",
                                    href: v.downloadUrl,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u4E0B\u8F7D\u5305 ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        currentApp.value.readMe ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "ReadMe \u6587\u6863\u9884\u89C8"),
                          createVNode("pre", { class: "mt-2 rounded-lg bg-gray-100 p-3 text-xs font-mono text-gray-800 dark:bg-gray-900 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap max-h-48" }, toDisplayString(currentApp.value.readMe), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              currentApp.value ? (openBlock(), createBlock(_component_UCard, { key: 0 }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    currentApp.value.icon ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: currentApp.value.icon,
                      class: "h-8 w-8 rounded-lg object-contain",
                      alt: "icon"
                    }, null, 8, ["src"])) : createCommentVNode("", true),
                    createVNode("div", null, [
                      createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(currentApp.value.name), 1),
                      createVNode("div", { class: "text-xs font-mono text-gray-400" }, toDisplayString(getAppKey(currentApp.value)), 1)
                    ])
                  ])
                ]),
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode("div", { class: "space-y-4 text-sm max-h-[70vh] overflow-y-auto" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "\u7B80\u4ECB\u8BF4\u660E"),
                        createVNode("p", { class: "mt-1 text-gray-600 dark:text-gray-300" }, toDisplayString(((_a = currentApp.value.additionalProperties) == null ? void 0 : _a.shortDescZh) || currentApp.value.description || "\u6682\u65E0\u63CF\u8FF0"), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "\u6536\u5F55\u7248\u672C\uFF08" + toDisplayString(((_b = currentApp.value.versions) == null ? void 0 : _b.length) || 0) + " \u4E2A\uFF09", 1),
                        createVNode("div", { class: "mt-2 space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(currentApp.value.versions, (v) => {
                            return openBlock(), createBlock("div", {
                              key: v.name,
                              class: "flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/60 p-2.5 dark:border-gray-800 dark:bg-gray-900/60"
                            }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_UBadge, {
                                  color: "primary",
                                  variant: "subtle",
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" v" + toDisplayString(v.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                v.lastModified ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-xs text-gray-400 font-mono"
                                }, toDisplayString(new Date(v.lastModified * 1e3).toLocaleDateString()), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_UButton, {
                                  size: "xs",
                                  color: "primary",
                                  variant: "soft",
                                  icon: "ph:code",
                                  onClick: ($event) => openComposeEditor(getAppKey(currentApp.value), v.name)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u7F16\u8F91 Compose \u5E76\u91CD\u6253\u5305 ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UButton, {
                                  size: "xs",
                                  color: "neutral",
                                  variant: "ghost",
                                  icon: "ph:download-simple",
                                  href: v.downloadUrl,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u4E0B\u8F7D\u5305 ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      currentApp.value.readMe ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "ReadMe \u6587\u6863\u9884\u89C8"),
                        createVNode("pre", { class: "mt-2 rounded-lg bg-gray-100 p-3 text-xs font-mono text-gray-800 dark:bg-gray-900 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap max-h-48" }, toDisplayString(currentApp.value.readMe), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: showComposeModal.value,
        "onUpdate:modelValue": ($event) => showComposeModal.value = $event,
        ui: { width: "sm:max-w-4xl" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:code",
                    class: "h-5 w-5 text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-bold text-gray-900 dark:text-white"${_scopeId2}> \u7F16\u8F91 docker-compose.yml - ${ssrInterpolate(editingAppKey.value)} (v${ssrInterpolate(editingVersion.value)}) </span></div>`);
                  if (composeHasLocal.value) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "success",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA `);
                        } else {
                          return [
                            createTextVNode(" \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "neutral",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 `);
                        } else {
                          return [
                            createTextVNode(" \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:code",
                          class: "h-5 w-5 text-primary-500"
                        }),
                        createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, " \u7F16\u8F91 docker-compose.yml - " + toDisplayString(editingAppKey.value) + " (v" + toDisplayString(editingVersion.value) + ") ", 1)
                      ]),
                      composeHasLocal.value ? (openBlock(), createBlock(_component_UBadge, {
                        key: 0,
                        color: "success",
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_UBadge, {
                        key: 1,
                        color: "neutral",
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 ")
                        ]),
                        _: 1
                      }))
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}>`);
                  if (composeHasLocal.value) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "error",
                      variant: "ghost",
                      size: "xs",
                      icon: "ph:arrow-counter-clockwise",
                      loading: resettingCompose.value,
                      onClick: handleResetCompose
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 `);
                        } else {
                          return [
                            createTextVNode(" \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    disabled: savingCompose.value,
                    onClick: ($event) => showComposeModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u53D6\u6D88 `);
                      } else {
                        return [
                          createTextVNode(" \u53D6\u6D88 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    icon: "ph:check",
                    loading: savingCompose.value,
                    onClick: handleSaveCompose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 `);
                      } else {
                        return [
                          createTextVNode(" \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        composeHasLocal.value ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          color: "error",
                          variant: "ghost",
                          size: "xs",
                          icon: "ph:arrow-counter-clockwise",
                          loading: resettingCompose.value,
                          onClick: handleResetCompose
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 ")
                          ]),
                          _: 1
                        }, 8, ["loading"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          disabled: savingCompose.value,
                          onClick: ($event) => showComposeModal.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u53D6\u6D88 ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"]),
                        createVNode(_component_UButton, {
                          color: "primary",
                          icon: "ph:check",
                          loading: savingCompose.value,
                          onClick: handleSaveCompose
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 text-sm"${_scopeId2}><div class="flex items-center justify-between rounded-lg bg-blue-50/60 p-3 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"${_scopeId2}><span${_scopeId2}> \u63D0\u793A\uFF1A\u53EF\u76F4\u63A5\u5728\u6B64\u4FEE\u6539\u6A21\u677F\u3002\u70B9\u51FB\u300C\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6\u300D\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u8BE5\u6A21\u677F\u91CD\u65B0\u6253\u5305\u4E3A\u6700\u65B0\u7684 <code${_scopeId2}>.tar.gz</code> \u5E76\u8986\u76D6\u672C\u5730\u79BB\u7EBF\u5305\u3002\u9762\u677F\u4E0B\u6B21\u5B89\u88C5\u8BE5\u5E94\u7528\u65F6\u5C06\u76F4\u63A5\u4F7F\u7528\u6700\u65B0\u914D\u7F6E\u3002 </span>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "primary",
                    variant: "outline",
                    icon: "ph:magic-wand",
                    onClick: quickNormalizeCompose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC `);
                      } else {
                        return [
                          createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (loadingCompose.value) {
                    _push3(`<div class="py-16 text-center text-gray-400"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner",
                      class: "mx-auto h-8 w-8 animate-spin text-primary-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="mt-2 text-xs"${_scopeId2}>\u6B63\u5728\u89E3\u5305\u5E76\u8BFB\u53D6 docker-compose.yml \u6A21\u677F...</p></div>`);
                  } else {
                    _push3(`<div class="relative"${_scopeId2}><textarea rows="18" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-primary-500 focus:outline-none dark:border-gray-800" spellcheck="false" placeholder="\u8BF7\u8F93\u5165 docker-compose.yml \u914D\u7F6E\u5185\u5BB9..."${_scopeId2}>${ssrInterpolate(editingComposeContent.value)}</textarea></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 text-sm" }, [
                      createVNode("div", { class: "flex items-center justify-between rounded-lg bg-blue-50/60 p-3 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300" }, [
                        createVNode("span", null, [
                          createTextVNode(" \u63D0\u793A\uFF1A\u53EF\u76F4\u63A5\u5728\u6B64\u4FEE\u6539\u6A21\u677F\u3002\u70B9\u51FB\u300C\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6\u300D\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u8BE5\u6A21\u677F\u91CD\u65B0\u6253\u5305\u4E3A\u6700\u65B0\u7684 "),
                          createVNode("code", null, ".tar.gz"),
                          createTextVNode(" \u5E76\u8986\u76D6\u672C\u5730\u79BB\u7EBF\u5305\u3002\u9762\u677F\u4E0B\u6B21\u5B89\u88C5\u8BE5\u5E94\u7528\u65F6\u5C06\u76F4\u63A5\u4F7F\u7528\u6700\u65B0\u914D\u7F6E\u3002 ")
                        ]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "primary",
                          variant: "outline",
                          icon: "ph:magic-wand",
                          onClick: quickNormalizeCompose
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC ")
                          ]),
                          _: 1
                        })
                      ]),
                      loadingCompose.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "py-16 text-center text-gray-400"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:spinner",
                          class: "mx-auto h-8 w-8 animate-spin text-primary-500"
                        }),
                        createVNode("p", { class: "mt-2 text-xs" }, "\u6B63\u5728\u89E3\u5305\u5E76\u8BFB\u53D6 docker-compose.yml \u6A21\u677F...")
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => editingComposeContent.value = $event,
                          rows: "18",
                          class: "w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-primary-500 focus:outline-none dark:border-gray-800",
                          spellcheck: "false",
                          placeholder: "\u8BF7\u8F93\u5165 docker-compose.yml \u914D\u7F6E\u5185\u5BB9..."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, editingComposeContent.value]
                        ])
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:code",
                        class: "h-5 w-5 text-primary-500"
                      }),
                      createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, " \u7F16\u8F91 docker-compose.yml - " + toDisplayString(editingAppKey.value) + " (v" + toDisplayString(editingVersion.value) + ") ", 1)
                    ]),
                    composeHasLocal.value ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      color: "success",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_UBadge, {
                      key: 1,
                      color: "neutral",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 ")
                      ]),
                      _: 1
                    }))
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      composeHasLocal.value ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "error",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:arrow-counter-clockwise",
                        loading: resettingCompose.value,
                        onClick: handleResetCompose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 ")
                        ]),
                        _: 1
                      }, 8, ["loading"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        disabled: savingCompose.value,
                        onClick: ($event) => showComposeModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53D6\u6D88 ")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        icon: "ph:check",
                        loading: savingCompose.value,
                        onClick: handleSaveCompose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4 text-sm" }, [
                    createVNode("div", { class: "flex items-center justify-between rounded-lg bg-blue-50/60 p-3 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300" }, [
                      createVNode("span", null, [
                        createTextVNode(" \u63D0\u793A\uFF1A\u53EF\u76F4\u63A5\u5728\u6B64\u4FEE\u6539\u6A21\u677F\u3002\u70B9\u51FB\u300C\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6\u300D\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u8BE5\u6A21\u677F\u91CD\u65B0\u6253\u5305\u4E3A\u6700\u65B0\u7684 "),
                        createVNode("code", null, ".tar.gz"),
                        createTextVNode(" \u5E76\u8986\u76D6\u672C\u5730\u79BB\u7EBF\u5305\u3002\u9762\u677F\u4E0B\u6B21\u5B89\u88C5\u8BE5\u5E94\u7528\u65F6\u5C06\u76F4\u63A5\u4F7F\u7528\u6700\u65B0\u914D\u7F6E\u3002 ")
                      ]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "primary",
                        variant: "outline",
                        icon: "ph:magic-wand",
                        onClick: quickNormalizeCompose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC ")
                        ]),
                        _: 1
                      })
                    ]),
                    loadingCompose.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "py-16 text-center text-gray-400"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner",
                        class: "mx-auto h-8 w-8 animate-spin text-primary-500"
                      }),
                      createVNode("p", { class: "mt-2 text-xs" }, "\u6B63\u5728\u89E3\u5305\u5E76\u8BFB\u53D6 docker-compose.yml \u6A21\u677F...")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "relative"
                    }, [
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => editingComposeContent.value = $event,
                        rows: "18",
                        class: "w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-primary-500 focus:outline-none dark:border-gray-800",
                        spellcheck: "false",
                        placeholder: "\u8BF7\u8F93\u5165 docker-compose.yml \u914D\u7F6E\u5185\u5BB9..."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, editingComposeContent.value]
                      ])
                    ]))
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/admin/pages/appstore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
