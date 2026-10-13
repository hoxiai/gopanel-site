import { e as useToast, i as _sfc_main$N, S as _sfc_main$k, _ as _sfc_main$S, k as _sfc_main$I, b as _sfc_main$s, n as _sfc_main$C } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, vModelText, vModelCheckbox, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
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
    const syncSourceUrl = ref("https://apps-assets.fit2cloud.com/stable/1panel.json");
    const showComposeModal = ref(false);
    const loadingCompose = ref(false);
    const savingCompose = ref(false);
    const resettingCompose = ref(false);
    const editingAppKey = ref("");
    const editingVersion = ref("");
    const editingComposeContent = ref("");
    const composeHasLocal = ref(false);
    const composeIsFallback = ref(false);
    const stats = ref({
      exists: true,
      totalApps: 0,
      totalVersions: 0,
      customAppsCount: 0,
      zipSizeFormatted: "0 KB",
      builtAt: ""
    });
    const appsList = ref([]);
    const searchKeyword = ref("");
    const appTypeFilter = ref("all");
    const currentPage = ref(1);
    const presetsList = ref([]);
    const customAppsList = ref([]);
    const showCustomModal = ref(false);
    const isEditingCustom = ref(false);
    const savingCustom = ref(false);
    const selectedPresetId = ref("");
    const customForm = ref({
      key: "",
      name: "",
      tagsInput: "",
      type: "database",
      icon: "",
      description: "",
      version: "",
      overrideMode: "merge",
      compose: "",
      formFields: []
    });
    const showUploadModal = ref(false);
    const uploadingPackage = ref(false);
    const fileInputRef = ref(null);
    const selectedFile = ref(null);
    const uploadLogs = ref([]);
    const uploadOverrides = ref({
      key: "",
      name: "",
      version: ""
    });
    const customAppsCount = computed(() => {
      return appsList.value.filter((a) => Boolean(a.isCustom)).length;
    });
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
      let list = appsList.value;
      if (appTypeFilter.value === "custom") {
        list = list.filter((a) => Boolean(a.isCustom));
      } else if (appTypeFilter.value === "official") {
        list = list.filter((a) => !a.isCustom);
      }
      if (!searchKeyword.value.trim()) return list;
      const kw = searchKeyword.value.toLowerCase().trim();
      return list.filter((a) => {
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
        const statsRes = await $fetch("/api/admin/panel/apps/stats");
        if (statsRes == null ? void 0 : statsRes.data) {
          stats.value = statsRes.data;
        }
        const customRes = await $fetch("/api/admin/panel/apps/custom").catch(() => null);
        if (customRes == null ? void 0 : customRes.data) {
          customAppsList.value = customRes.data.customApps || [];
          presetsList.value = customRes.data.presets || [];
          if (customRes.data.customApps) {
            stats.value.customAppsCount = customRes.data.customApps.length;
          }
        }
        const appsRes = await $fetch("/api/panel/apps", { cache: "no-store" });
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
    const applyPreset = (preset) => {
      selectedPresetId.value = preset.id;
      customForm.value = {
        key: preset.key,
        name: preset.name,
        tagsInput: (preset.tags || []).join(", "),
        type: preset.type || "database",
        icon: preset.icon || "",
        description: preset.description || "",
        version: preset.version || "1.0.0",
        overrideMode: "merge",
        compose: preset.compose || "",
        formFields: JSON.parse(JSON.stringify(preset.formFields || []))
      };
    };
    const openCreateCustomModal = () => {
      isEditingCustom.value = false;
      selectedPresetId.value = "";
      if (presetsList.value.length > 0) {
        applyPreset(presetsList.value[0]);
      } else {
        customForm.value = {
          key: "",
          name: "",
          tagsInput: "\u6570\u636E\u5E93",
          type: "database",
          icon: "",
          description: "",
          version: "1.0.0",
          overrideMode: "merge",
          compose: `version: '3.8'
services:
  app:
    image: alpine:latest
    networks:
      - gopanel-network

networks:
  gopanel-network:
    external: true
`,
          formFields: []
        };
      }
      showCustomModal.value = true;
    };
    const openEditCustomModal = (app) => {
      var _a, _b, _c, _d, _e, _f, _g;
      isEditingCustom.value = true;
      selectedPresetId.value = "";
      const key = getAppKey(app);
      const existingCustom = customAppsList.value.find((c) => c.key === key);
      const latestVer = ((_a = app.versions) == null ? void 0 : _a[0]) || {};
      customForm.value = {
        key,
        name: app.name || key,
        tagsInput: (app.tags || ((_b = app.additionalProperties) == null ? void 0 : _b.tags) || []).join(", "),
        type: ((_c = app.additionalProperties) == null ? void 0 : _c.type) || "tool",
        icon: app.icon || "",
        description: ((_d = app.additionalProperties) == null ? void 0 : _d.shortDescZh) || app.description || "",
        version: latestVer.name || "1.0.0",
        overrideMode: (existingCustom == null ? void 0 : existingCustom.overrideMode) || "merge",
        compose: ((_f = (_e = existingCustom == null ? void 0 : existingCustom.versions) == null ? void 0 : _e.find((v) => v.name === latestVer.name)) == null ? void 0 : _f.compose) || "",
        formFields: JSON.parse(JSON.stringify(((_g = latestVer.additionalProperties) == null ? void 0 : _g.formFields) || []))
      };
      if (!customForm.value.compose && latestVer.name) {
        $fetch("/api/admin/panel/apps/compose", {
          params: { key, version: latestVer.name }
        }).then((res) => {
          var _a2;
          if ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.compose) {
            customForm.value.compose = res.data.compose;
          }
        }).catch(() => {
        });
      }
      showCustomModal.value = true;
    };
    const addCustomFormField = () => {
      customForm.value.formFields.push({
        envKey: "",
        labelZh: "",
        labelEn: "",
        default: "",
        type: "text",
        required: false,
        random: false
      });
    };
    const removeCustomFormField = (index) => {
      customForm.value.formFields.splice(index, 1);
    };
    const quickNormalizeCustomCompose = () => {
      if (!customForm.value.compose) return;
      const before = customForm.value.compose;
      const after = before.replace(/\/opt\/1panel/g, "/opt/gopanel").replace(/1panel-network/g, "gopanel-network").replace(/1Panel/g, "GoPanel").replace(/1panel/g, "gopanel");
      if (before === after) {
        toast.add({
          title: "\u65E0\u9700\u66FF\u6362",
          description: "\u672A\u68C0\u6D4B\u5230\u9700\u8981\u66FF\u6362\u7684 1Panel \u76F8\u5173\u7F51\u7EDC\u540D\u6216\u8DEF\u5F84",
          color: "neutral"
        });
        return;
      }
      customForm.value.compose = after;
      toast.add({
        title: "\u5DF2\u89C4\u8303\u5316\u66FF\u6362",
        description: "\u5DF2\u5C06 1panel-network \u89C4\u8303\u5316\u4E3A gopanel-network",
        color: "success"
      });
    };
    const handleSaveCustomApp = async () => {
      const form = customForm.value;
      if (!form.key.trim() || !form.name.trim() || !form.version.trim() || !form.compose.trim()) {
        toast.add({
          title: "\u8BF7\u586B\u5199\u5B8C\u6574\u5FC5\u586B\u9879",
          description: "\u5E94\u7528 Key\u3001\u663E\u793A\u540D\u79F0\u3001\u7248\u672C\u53F7\u4E0E Compose \u5747\u4E0D\u80FD\u4E3A\u7A7A",
          color: "error"
        });
        return;
      }
      savingCustom.value = true;
      try {
        const tags = form.tagsInput.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
        const res = await $fetch("/api/admin/panel/apps/custom", {
          method: "POST",
          body: {
            key: form.key.trim(),
            name: form.name.trim(),
            tags,
            type: form.type,
            icon: form.icon.trim(),
            description: form.description.trim(),
            version: form.version.trim(),
            overrideMode: form.overrideMode,
            compose: form.compose.trim(),
            formFields: form.formFields
          }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          toast.add({
            title: "\u53D1\u5E03\u81EA\u5EFA\u5E94\u7528\u6210\u529F\uFF01",
            description: res.message || `${form.name} \u5DF2\u6253\u5305\u5E76\u751F\u6210\u5546\u5E97\u79BB\u7EBF\u5305`,
            color: "success"
          });
          showCustomModal.value = false;
          await refreshData();
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u4FDD\u5B58\u5931\u8D25");
        }
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u81EA\u5EFA\u5E94\u7528\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u68C0\u67E5\u8F93\u5165\u683C\u5F0F\u4E0E\u670D\u52A1\u7AEF\u65E5\u5FD7",
          color: "error"
        });
      } finally {
        savingCustom.value = false;
      }
    };
    const confirmDeleteCustom = async (app) => {
      const key = getAppKey(app);
      const name = app.name || key;
      if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664\u81EA\u5EFA\u5E94\u7528\u300C${name}\u300D(${key}) \u5417\uFF1F\u5BF9\u5E94\u7684\u672C\u5730\u79BB\u7EBF\u5305\u4E5F\u5C06\u88AB\u6E05\u7406\u3002`)) {
        return;
      }
      try {
        const res = await $fetch("/api/admin/panel/apps/custom", {
          method: "DELETE",
          params: { key }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          toast.add({
            title: "\u5220\u9664\u6210\u529F",
            description: `\u81EA\u5EFA\u5E94\u7528 ${name} \u5DF2\u4ECE\u5E94\u7528\u5546\u5E97\u4E2D\u79FB\u9664`,
            color: "success"
          });
          await refreshData();
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u5220\u9664\u5931\u8D25");
        }
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u91CD\u8BD5",
          color: "error"
        });
      }
    };
    const openUploadModal = () => {
      selectedFile.value = null;
      uploadLogs.value = [];
      uploadOverrides.value = { key: "", name: "", version: "" };
      showUploadModal.value = true;
    };
    const triggerFileInput = () => {
      if (fileInputRef.value) {
        fileInputRef.value.click();
      }
    };
    const handleFileSelected = (e) => {
      const target = e.target;
      if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0];
      }
    };
    const handleUploadSubmit = async () => {
      var _a;
      if (!selectedFile.value) {
        toast.add({ title: "\u8BF7\u5148\u9009\u62E9\u5B89\u88C5\u5305\u6587\u4EF6", color: "error" });
        return;
      }
      uploadingPackage.value = true;
      uploadLogs.value = ["\u6B63\u5728\u4E0A\u4F20\u5B89\u88C5\u5305..."];
      try {
        const formData = new FormData();
        formData.append("file", selectedFile.value);
        if (uploadOverrides.value.key.trim()) {
          formData.append("key", uploadOverrides.value.key.trim());
        }
        if (uploadOverrides.value.name.trim()) {
          formData.append("name", uploadOverrides.value.name.trim());
        }
        if (uploadOverrides.value.version.trim()) {
          formData.append("version", uploadOverrides.value.version.trim());
        }
        const res = await $fetch("/api/admin/panel/apps/upload", {
          method: "POST",
          body: formData
        });
        if ((res == null ? void 0 : res.code) === 0) {
          uploadLogs.value = ((_a = res.data) == null ? void 0 : _a.logs) || ["\u4E0A\u4F20\u89E3\u6790\u5E76\u53D1\u5E03\u6210\u529F"];
          toast.add({
            title: "\u4E0A\u4F20\u53D1\u5E03\u6210\u529F\uFF01",
            description: res.message || "\u5B89\u88C5\u5305\u5DF2\u81EA\u52A8\u6536\u5F55",
            color: "success"
          });
          await refreshData();
          setTimeout(() => {
            showUploadModal.value = false;
          }, 1e3);
        } else {
          throw new Error((res == null ? void 0 : res.message) || "\u4E0A\u4F20\u5904\u7406\u5931\u8D25");
        }
      } catch (err) {
        uploadLogs.value.push(`\u5904\u7406\u5931\u8D25: ${(err == null ? void 0 : err.message) || err}`);
        toast.add({
          title: "\u4E0A\u4F20\u5904\u7406\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u65E0\u6CD5\u89E3\u6790\u8BE5\u5B89\u88C5\u5305",
          color: "error"
        });
      } finally {
        uploadingPackage.value = false;
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
        const res = await $fetch("/api/admin/panel/apps/build", {
          method: "POST",
          body: {
            sourceUrl: syncSourceUrl.value ? syncSourceUrl.value.trim() : void 0
          }
        });
        if ((res == null ? void 0 : res.code) === 0 && res.data) {
          stats.value = {
            exists: true,
            totalApps: res.data.totalApps,
            totalVersions: res.data.totalVersions,
            customAppsCount: customAppsList.value.length,
            zipSizeFormatted: res.data.zipSizeFormatted,
            builtAt: res.data.builtAt
          };
          buildResultLogs.value = res.data.logs || ["\u6784\u5EFA\u5B8C\u6210"];
          toast.add({
            title: "\u4E00\u952E\u6784\u5EFA\u6210\u529F\uFF01",
            description: `\u5DF2\u6210\u529F\u6E05\u6D17\u5E76\u6253\u5305 ${res.data.totalApps} \u6B3E\u5E94\u7528\uFF08\u5DF2\u5305\u542B\u81EA\u5EFA\u5B9A\u5236\uFF09\uFF0C\u5305\u4F53\u79EF: ${res.data.zipSizeFormatted}`,
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
    const formatTimestamp = (ts) => {
      if (!ts) return "";
      try {
        const num = Number(ts);
        if (isNaN(num)) return String(ts);
        const ms = num < 1e11 ? num * 1e3 : num;
        return new Date(ms).toLocaleDateString();
      } catch {
        return String(ts);
      }
    };
    const openDetail = (app) => {
      currentApp.value = app;
      showDetailModal.value = true;
    };
    const openComposeEditor = async (key, version) => {
      showDetailModal.value = false;
      editingAppKey.value = key;
      editingVersion.value = version;
      editingComposeContent.value = "";
      composeHasLocal.value = false;
      composeIsFallback.value = false;
      loadingCompose.value = true;
      showComposeModal.value = true;
      try {
        const res = await $fetch("/api/admin/panel/apps/compose", {
          params: { key, version }
        });
        if ((res == null ? void 0 : res.code) === 0 && res.data) {
          editingComposeContent.value = res.data.compose || "";
          composeHasLocal.value = Boolean(res.data.isLocal);
          composeIsFallback.value = Boolean(res.data.isFallback);
          if (res.data.isFallback) {
            toast.add({
              title: "\u5DF2\u751F\u6210\u57FA\u7840 Compose \u6A21\u677F",
              description: "\u4E0A\u6E38\u672A\u63D0\u4F9B\u8BE5\u7248\u672C\u79BB\u7EBF\u5305\uFF0C\u5DF2\u81EA\u52A8\u751F\u6210\u57FA\u7840\u6A21\u677F\uFF0C\u76F4\u63A5\u7F16\u8F91\u4FDD\u5B58\u5373\u53EF\u751F\u6210\u65B0\u5305\uFF01",
              color: "info"
            });
          }
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
        const res = await $fetch("/api/admin/panel/apps/compose", {
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
      var _a, _b;
      resettingCompose.value = true;
      try {
        const res = await $fetch("/api/admin/panel/apps/compose", {
          method: "DELETE",
          params: {
            key: editingAppKey.value,
            version: editingVersion.value
          }
        });
        if ((res == null ? void 0 : res.code) === 0) {
          toast.add({
            title: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.isUpstream) ? "\u5DF2\u91CD\u7F6E\u4E3A\u5B98\u65B9\u6E05\u6D17\u5305" : "\u5DF2\u91CD\u7F6E\u4E3A\u57FA\u7840\u6A21\u677F",
            description: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.message) || "\u5DF2\u5B8C\u6210\u6807\u51C6\u5316\u91CD\u7F6E",
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
      const _component_UButton = _sfc_main$N;
      const _component_UCard = _sfc_main$k;
      const _component_UIcon = _sfc_main$S;
      const _component_UInput = _sfc_main$s;
      const _component_UBadge = _sfc_main$I;
      const _component_UModal = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> \u5E94\u7528\u5546\u5E97\u7BA1\u7406 </h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400"> \u5168\u91CF\u5E94\u7528\u5143\u6570\u636E\u7BA1\u7406\u3001\u81EA\u5B9A\u4E49 MySQL / Redis / \u5BB9\u5668\u5E94\u7528\u53D1\u5E03\uFF0C\u4E00\u952E\u6784\u5EFA GoPanel \u7EAF\u51C0\u79BB\u7EBF\u5305\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "success",
        icon: "ph:plus-circle",
        onClick: openCreateCustomModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u65B0\u5EFA\u81EA\u5EFA\u5E94\u7528 `);
          } else {
            return [
              createTextVNode(" \u65B0\u5EFA\u81EA\u5EFA\u5E94\u7528 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:upload-simple",
        onClick: openUploadModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0A\u4F20\u5B89\u88C5\u5305 (ZIP/Tar) `);
          } else {
            return [
              createTextVNode(" \u4E0A\u4F20\u5B89\u88C5\u5305 (ZIP/Tar) ")
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(`</div></div><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u6536\u5F55\u5E94\u7528\u6570</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:squares-four",
              class: "h-5 w-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(stats.value.totalApps || 0)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u5168\u91CF\u5E94\u7528\uFF08\u542B\u5B98\u65B9\u4E0E\u81EA\u5EFA\uFF09</p>`);
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
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u5168\u91CF\u5E94\u7528\uFF08\u542B\u5B98\u65B9\u4E0E\u81EA\u5EFA\uFF09")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 bg-white dark:border-gray-800/50 dark:bg-[#121214]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"${_scopeId}>\u81EA\u5EFA\u4E0E\u5B9A\u5236\u5E94\u7528</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle",
              class: "h-5 w-5 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(stats.value.customAppsCount || 0)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u79C1\u6709\u7EF4\u62A4\u4E0E\u5B9A\u5236\u4F18\u5316\u7248\u672C</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u81EA\u5EFA\u4E0E\u5B9A\u5236\u5E94\u7528"),
                createVNode(_component_UIcon, {
                  name: "ph:sparkle",
                  class: "h-5 w-5 text-emerald-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400" }, toDisplayString(stats.value.customAppsCount || 0), 1),
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u79C1\u6709\u7EF4\u62A4\u4E0E\u5B9A\u5236\u4F18\u5316\u7248\u672C")
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
            _push2(`</div><p class="mt-2 text-3xl font-bold text-purple-500 dark:text-purple-400"${_scopeId}>${ssrInterpolate(stats.value.totalVersions || 0)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u5404\u5E94\u7528\u5386\u53F2\u4E0E\u6700\u65B0\u53D1\u884C\u7248</p>`);
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
              createVNode("p", { class: "mt-1 text-xs text-gray-400" }, "\u5404\u5E94\u7528\u5386\u53F2\u4E0E\u6700\u65B0\u53D1\u884C\u7248")
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
            _push2(`</div><p class="mt-2 text-base font-bold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(formattedBuiltTime.value)}</p><p class="mt-1 text-xs text-gray-400"${_scopeId}>\u6570\u636E\u72B6\u6001\uFF1A${ssrInterpolate(stats.value.exists ? "\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1" : "\u5C1A\u672A\u6784\u5EFA")}</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "\u6700\u8FD1\u6784\u5EFA\u65F6\u95F4"),
                createVNode(_component_UIcon, {
                  name: "ph:clock",
                  class: "h-5 w-5 text-amber-500"
                })
              ]),
              createVNode("p", { class: "mt-2 text-base font-bold text-gray-900 dark:text-white truncate" }, toDisplayString(formattedBuiltTime.value), 1),
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
            _push2(`<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:list-dashes",
              class: "h-5 w-5 text-cyan-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5E94\u7528\u76EE\u5F55\uFF08\u5171 ${ssrInterpolate(filteredApps.value.length)} \u6B3E\uFF09</span></div><div class="flex items-center rounded-lg bg-gray-100 p-0.5 dark:bg-gray-800 text-xs"${_scopeId}><button type="button" class="${ssrRenderClass([appTypeFilter.value === "all" ? "bg-white font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-colors"])}"${_scopeId}> \u5168\u90E8\u5E94\u7528 (${ssrInterpolate(appsList.value.length)}) </button><button type="button" class="${ssrRenderClass([appTypeFilter.value === "custom" ? "bg-white font-semibold text-emerald-600 shadow-sm dark:bg-gray-700 dark:text-emerald-400" : "text-gray-500 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle",
              class: "h-3.5 w-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u81EA\u5EFA/\u5B9A\u5236 (${ssrInterpolate(customAppsCount.value)})</span></button><button type="button" class="${ssrRenderClass([appTypeFilter.value === "official" ? "bg-white font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-md transition-colors"])}"${_scopeId}> \u5B98\u65B9\u540C\u6B65 (${ssrInterpolate(appsList.value.length - customAppsCount.value)}) </button></div></div><div class="flex flex-col gap-2 sm:flex-row sm:items-center"${_scopeId}>`);
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
              createVNode("div", { class: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                  createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:list-dashes",
                      class: "h-5 w-5 text-cyan-500"
                    }),
                    createVNode("span", null, "\u5E94\u7528\u76EE\u5F55\uFF08\u5171 " + toDisplayString(filteredApps.value.length) + " \u6B3E\uFF09", 1)
                  ]),
                  createVNode("div", { class: "flex items-center rounded-lg bg-gray-100 p-0.5 dark:bg-gray-800 text-xs" }, [
                    createVNode("button", {
                      type: "button",
                      class: ["px-2.5 py-1 rounded-md transition-colors", appTypeFilter.value === "all" ? "bg-white font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                      onClick: ($event) => appTypeFilter.value = "all"
                    }, " \u5168\u90E8\u5E94\u7528 (" + toDisplayString(appsList.value.length) + ") ", 11, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      class: ["px-2.5 py-1 rounded-md transition-colors flex items-center gap-1", appTypeFilter.value === "custom" ? "bg-white font-semibold text-emerald-600 shadow-sm dark:bg-gray-700 dark:text-emerald-400" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                      onClick: ($event) => appTypeFilter.value = "custom"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:sparkle",
                        class: "h-3.5 w-3.5"
                      }),
                      createVNode("span", null, "\u81EA\u5EFA/\u5B9A\u5236 (" + toDisplayString(customAppsCount.value) + ")", 1)
                    ], 10, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      class: ["px-2.5 py-1 rounded-md transition-colors", appTypeFilter.value === "official" ? "bg-white font-semibold text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                      onClick: ($event) => appTypeFilter.value = "official"
                    }, " \u5B98\u65B9\u540C\u6B65 (" + toDisplayString(appsList.value.length - customAppsCount.value) + ") ", 11, ["onClick"])
                  ])
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
              _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(app.name || getAppKey(app))}</span>`);
              if (app.isCustom) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u81EA\u5EFA\u5B9A\u5236 `);
                    } else {
                      return [
                        createTextVNode(" \u81EA\u5EFA\u5B9A\u5236 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(getAppKey(app))}</div></div></div></td><td class="py-3 px-4"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
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
              _push2(`<!--]--></div></td><td class="py-3 px-4 text-right"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "ph:eye",
                onClick: ($event) => openDetail(app)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BE6\u60C5 `);
                  } else {
                    return [
                      createTextVNode(" \u8BE6\u60C5 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (app.isCustom) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "primary",
                  variant: "ghost",
                  icon: "ph:pencil-simple",
                  onClick: ($event) => openEditCustomModal(app)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u7F16\u8F91 `);
                    } else {
                      return [
                        createTextVNode(" \u7F16\u8F91 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (app.isCustom) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "error",
                  variant: "ghost",
                  icon: "ph:trash",
                  onClick: ($event) => confirmDeleteCustom(app)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u5220\u9664 `);
                    } else {
                      return [
                        createTextVNode(" \u5220\u9664 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td></tr>`);
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
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(app.name || getAppKey(app)), 1),
                                app.isCustom ? (openBlock(), createBlock(_component_UBadge, {
                                  key: 0,
                                  color: "success",
                                  variant: "subtle",
                                  size: "xs"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u81EA\u5EFA\u5B9A\u5236 ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
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
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            createVNode(_component_UButton, {
                              size: "xs",
                              color: "neutral",
                              variant: "ghost",
                              icon: "ph:eye",
                              onClick: ($event) => openDetail(app)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8BE6\u60C5 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            app.isCustom ? (openBlock(), createBlock(_component_UButton, {
                              key: 0,
                              size: "xs",
                              color: "primary",
                              variant: "ghost",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditCustomModal(app)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7F16\u8F91 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            app.isCustom ? (openBlock(), createBlock(_component_UButton, {
                              key: 1,
                              size: "xs",
                              color: "error",
                              variant: "ghost",
                              icon: "ph:trash",
                              onClick: ($event) => confirmDeleteCustom(app)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
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
        open: showCustomModal.value,
        "onUpdate:open": ($event) => showCustomModal.value = $event,
        ui: { content: "sm:max-w-4xl" },
        title: isEditingCustom.value ? "\u7F16\u8F91\u81EA\u5EFA\u5E94\u7528" : "\u65B0\u5EFA\u81EA\u5EFA\u5E94\u7528"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-5 max-h-[88vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle",
              class: "h-5 w-5 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-bold text-gray-900 dark:text-white text-base"${_scopeId}>${ssrInterpolate(isEditingCustom.value ? `\u7F16\u8F91\u81EA\u5EFA\u5E94\u7528: ${customForm.value.name} (${customForm.value.key})` : "\u65B0\u5EFA\u81EA\u5EFA\u5E94\u7528")}</span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              disabled: savingCustom.value,
              onClick: ($event) => showCustomModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (!isEditingCustom.value) {
              _push2(`<div class="space-y-2 rounded-xl bg-gray-50/80 p-3.5 border border-gray-100 dark:bg-gray-900/60 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>\u5FEB\u901F\u9009\u7528\u5B98\u65B9\u89C4\u8303\u6A21\u677F\uFF1A</span><span class="text-[11px] text-gray-400"${_scopeId}>\u70B9\u51FB\u81EA\u52A8\u586B\u5145\u5BF9\u5E94\u7684 Compose \u67B6\u6784\u4E0E\u8868\u5355\u53C2\u6570</span></div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1"${_scopeId}><!--[-->`);
              ssrRenderList(presetsList.value, (preset) => {
                _push2(`<button type="button" class="${ssrRenderClass([selectedPresetId.value === preset.id ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200 shadow-sm" : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:border-gray-300", "flex flex-col text-left p-2 rounded-lg border text-xs transition-all"])}"${_scopeId}><span class="font-bold truncate"${_scopeId}>${ssrInterpolate(preset.name)}</span><span class="text-[11px] text-gray-400 truncate"${_scopeId}>${ssrInterpolate(preset.badge)}</span></button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-4 text-xs"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5E94\u7528 Key (\u552F\u4E00\u6807\u8BC6\uFF0C\u5982 mysql / redis / myapp) <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.key,
              "onUpdate:modelValue": ($event) => customForm.value.key = $event,
              disabled: isEditingCustom.value,
              placeholder: "\u4F8B\u5982: mysql / redis / halo",
              class: "font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u663E\u793A\u540D\u79F0 <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.name,
              "onUpdate:modelValue": ($event) => customForm.value.name = $event,
              placeholder: "\u4F8B\u5982: MySQL 8.4 (\u9AD8\u53EF\u7528\u4F18\u5316\u7248)"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u53D1\u884C\u7248\u672C\u53F7 <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.version,
              "onUpdate:modelValue": ($event) => customForm.value.version = $event,
              placeholder: "\u4F8B\u5982: 8.4.11 \u6216 1.0.0",
              class: "font-mono"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>\u5206\u7C7B\u6807\u7B7E (\u9017\u53F7\u5206\u9694)</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.tagsInput,
              "onUpdate:modelValue": ($event) => customForm.value.tagsInput = $event,
              placeholder: "\u6570\u636E\u5E93, \u4E2D\u95F4\u4EF6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>\u5E94\u7528\u7C7B\u578B (Type)</label><select class="w-full rounded-md border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 py-1.5 px-2 text-xs text-gray-900 dark:text-white"${_scopeId}><option value="database"${ssrIncludeBooleanAttr(Array.isArray(customForm.value.type) ? ssrLooseContain(customForm.value.type, "database") : ssrLooseEqual(customForm.value.type, "database")) ? " selected" : ""}${_scopeId}>database (\u6570\u636E\u5E93)</option><option value="website"${ssrIncludeBooleanAttr(Array.isArray(customForm.value.type) ? ssrLooseContain(customForm.value.type, "website") : ssrLooseEqual(customForm.value.type, "website")) ? " selected" : ""}${_scopeId}>website (Web \u7F51\u7AD9\u4E0E\u5E94\u7528)</option><option value="tool"${ssrIncludeBooleanAttr(Array.isArray(customForm.value.type) ? ssrLooseContain(customForm.value.type, "tool") : ssrLooseEqual(customForm.value.type, "tool")) ? " selected" : ""}${_scopeId}>tool (\u5B9E\u7528\u5DE5\u5177)</option><option value="runtime"${ssrIncludeBooleanAttr(Array.isArray(customForm.value.type) ? ssrLooseContain(customForm.value.type, "runtime") : ssrLooseEqual(customForm.value.type, "runtime")) ? " selected" : ""}${_scopeId}>runtime (\u8FD0\u884C\u73AF\u5883)</option><option value="server"${ssrIncludeBooleanAttr(Array.isArray(customForm.value.type) ? ssrLooseContain(customForm.value.type, "server") : ssrLooseEqual(customForm.value.type, "server")) ? " selected" : ""}${_scopeId}>server (Web \u670D\u52A1\u5668)</option></select></div><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>\u56FE\u6807\u94FE\u63A5 (Icon URL)</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.icon,
              "onUpdate:modelValue": ($event) => customForm.value.icon = $event,
              placeholder: "https://... \u6216\u7559\u7A7A"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}>\u5E94\u7528\u7B80\u4ECB\u8BF4\u660E</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: customForm.value.description,
              "onUpdate:modelValue": ($event) => customForm.value.description = $event,
              placeholder: "\u7B80\u8981\u8BF4\u660E\u6B64\u5E94\u7528\u7684\u529F\u80FD\u4E0E\u4F18\u5316\u7279\u6027..."
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>\u5B89\u88C5\u53C2\u6570\u4E0E\u73AF\u5883\u53D8\u91CF\u6620\u5C04 (formFields)</span><p class="text-[11px] text-gray-400"${_scopeId}>\u9762\u677F\u7528\u6237\u5728\u5B89\u88C5\u6B64\u5E94\u7528\u65F6\u5F39\u51FA\u7684\u4EA4\u4E92\u5F0F\u914D\u7F6E\u8868\u5355\uFF0C\u81EA\u52A8\u6CE8\u5165 Compose \u73AF\u5883\u53D8\u91CF</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              onClick: addCustomFormField
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u53C2\u6570\u9879 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u53C2\u6570\u9879 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2 max-h-44 overflow-y-auto pr-1"${_scopeId}><!--[-->`);
            ssrRenderList(customForm.value.formFields, (field, fIdx) => {
              _push2(`<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800"${_scopeId}><div class="flex-1"${_scopeId}><input${ssrRenderAttr("value", field.envKey)} placeholder="\u73AF\u5883\u53D8\u91CF\u540D (\u5982 PANEL_DB_ROOT_PASSWORD)" class="w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-28"${_scopeId}><input${ssrRenderAttr("value", field.labelZh)} placeholder="\u4E2D\u6587\u63CF\u8FF0 (\u5982 \u5BC6\u7801)" class="w-full bg-transparent text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-28"${_scopeId}><input${ssrRenderAttr("value", field.default)} placeholder="\u9ED8\u8BA4\u503C (\u5982 3306)" class="w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-24"${_scopeId}><select class="w-full rounded border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 py-1 px-1.5 text-xs text-gray-900 dark:text-white"${_scopeId}><option value="text"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "text") : ssrLooseEqual(field.type, "text")) ? " selected" : ""}${_scopeId}>text</option><option value="password"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "password") : ssrLooseEqual(field.type, "password")) ? " selected" : ""}${_scopeId}>password</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}${_scopeId}>number</option></select></div><div class="flex items-center gap-1.5 shrink-0 text-[11px] text-gray-500"${_scopeId}><label class="flex items-center gap-1 cursor-pointer"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(field.required) ? ssrLooseContain(field.required, null) : field.required) ? " checked" : ""} class="rounded text-emerald-600"${_scopeId}><span${_scopeId}>\u5FC5\u586B</span></label>`);
              if (field.type === "password") {
                _push2(`<label class="flex items-center gap-1 cursor-pointer"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(field.random) ? ssrLooseContain(field.random, null) : field.random) ? " checked" : ""} class="rounded text-emerald-600"${_scopeId}><span${_scopeId}>\u968F\u673A</span></label>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><button type="button" class="text-gray-400 hover:text-red-500 p-1" title="\u79FB\u9664\u53C2\u6570"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:x",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            });
            _push2(`<!--]-->`);
            if (!customForm.value.formFields || customForm.value.formFields.length === 0) {
              _push2(`<div class="py-2 text-center text-xs text-gray-400"${_scopeId}> \u5C1A\u672A\u914D\u7F6E\u8868\u5355\u53C2\u6570\uFF0C\u53EF\u76F4\u63A5\u5728\u4E0A\u65B9\u70B9\u51FB\u300C\u6DFB\u52A0\u53C2\u6570\u9879\u300D </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><label class="font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> docker-compose.yml \u5BB9\u5668\u7F16\u6392\u5185\u5BB9 <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "outline",
              icon: "ph:magic-wand",
              onClick: quickNormalizeCustomCompose
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC\u4E0E\u8DEF\u5F84 `);
                } else {
                  return [
                    createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC\u4E0E\u8DEF\u5F84 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><textarea rows="14" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800" spellcheck="false" placeholder="\u8BF7\u8F93\u5165 docker-compose.yml \u6A21\u677F\u914D\u7F6E..."${_scopeId}>${ssrInterpolate(customForm.value.compose)}</textarea></div></div><div class="flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              disabled: savingCustom.value,
              onClick: ($event) => showCustomModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "success",
              icon: "ph:check",
              loading: savingCustom.value,
              onClick: handleSaveCustomApp
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u53D1\u5E03\u79BB\u7EBF\u5305 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u53D1\u5E03\u79BB\u7EBF\u5305 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-5 max-h-[88vh] overflow-y-auto" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:sparkle",
                      class: "h-5 w-5 text-emerald-500"
                    }),
                    createVNode("span", { class: "font-bold text-gray-900 dark:text-white text-base" }, toDisplayString(isEditingCustom.value ? `\u7F16\u8F91\u81EA\u5EFA\u5E94\u7528: ${customForm.value.name} (${customForm.value.key})` : "\u65B0\u5EFA\u81EA\u5EFA\u5E94\u7528"), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    disabled: savingCustom.value,
                    onClick: ($event) => showCustomModal.value = false
                  }, null, 8, ["disabled", "onClick"])
                ]),
                !isEditingCustom.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-2 rounded-xl bg-gray-50/80 p-3.5 border border-gray-100 dark:bg-gray-900/60 dark:border-gray-800"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("span", { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, "\u5FEB\u901F\u9009\u7528\u5B98\u65B9\u89C4\u8303\u6A21\u677F\uFF1A"),
                    createVNode("span", { class: "text-[11px] text-gray-400" }, "\u70B9\u51FB\u81EA\u52A8\u586B\u5145\u5BF9\u5E94\u7684 Compose \u67B6\u6784\u4E0E\u8868\u5355\u53C2\u6570")
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(presetsList.value, (preset) => {
                      return openBlock(), createBlock("button", {
                        key: preset.id,
                        type: "button",
                        class: ["flex flex-col text-left p-2 rounded-lg border text-xs transition-all", selectedPresetId.value === preset.id ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200 shadow-sm" : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:border-gray-300"],
                        onClick: ($event) => applyPreset(preset)
                      }, [
                        createVNode("span", { class: "font-bold truncate" }, toDisplayString(preset.name), 1),
                        createVNode("span", { class: "text-[11px] text-gray-400 truncate" }, toDisplayString(preset.badge), 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "space-y-4 text-xs" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                        createTextVNode(" \u5E94\u7528 Key (\u552F\u4E00\u6807\u8BC6\uFF0C\u5982 mysql / redis / myapp) "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_UInput, {
                        modelValue: customForm.value.key,
                        "onUpdate:modelValue": ($event) => customForm.value.key = $event,
                        disabled: isEditingCustom.value,
                        placeholder: "\u4F8B\u5982: mysql / redis / halo",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                        createTextVNode(" \u663E\u793A\u540D\u79F0 "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_UInput, {
                        modelValue: customForm.value.name,
                        "onUpdate:modelValue": ($event) => customForm.value.name = $event,
                        placeholder: "\u4F8B\u5982: MySQL 8.4 (\u9AD8\u53EF\u7528\u4F18\u5316\u7248)"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, [
                        createTextVNode(" \u53D1\u884C\u7248\u672C\u53F7 "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_UInput, {
                        modelValue: customForm.value.version,
                        "onUpdate:modelValue": ($event) => customForm.value.version = $event,
                        placeholder: "\u4F8B\u5982: 8.4.11 \u6216 1.0.0",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "\u5206\u7C7B\u6807\u7B7E (\u9017\u53F7\u5206\u9694)"),
                      createVNode(_component_UInput, {
                        modelValue: customForm.value.tagsInput,
                        "onUpdate:modelValue": ($event) => customForm.value.tagsInput = $event,
                        placeholder: "\u6570\u636E\u5E93, \u4E2D\u95F4\u4EF6"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "\u5E94\u7528\u7C7B\u578B (Type)"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => customForm.value.type = $event,
                        class: "w-full rounded-md border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 py-1.5 px-2 text-xs text-gray-900 dark:text-white"
                      }, [
                        createVNode("option", { value: "database" }, "database (\u6570\u636E\u5E93)"),
                        createVNode("option", { value: "website" }, "website (Web \u7F51\u7AD9\u4E0E\u5E94\u7528)"),
                        createVNode("option", { value: "tool" }, "tool (\u5B9E\u7528\u5DE5\u5177)"),
                        createVNode("option", { value: "runtime" }, "runtime (\u8FD0\u884C\u73AF\u5883)"),
                        createVNode("option", { value: "server" }, "server (Web \u670D\u52A1\u5668)")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, customForm.value.type]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "\u56FE\u6807\u94FE\u63A5 (Icon URL)"),
                      createVNode(_component_UInput, {
                        modelValue: customForm.value.icon,
                        "onUpdate:modelValue": ($event) => customForm.value.icon = $event,
                        placeholder: "https://... \u6216\u7559\u7A7A"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "\u5E94\u7528\u7B80\u4ECB\u8BF4\u660E"),
                    createVNode(_component_UInput, {
                      modelValue: customForm.value.description,
                      "onUpdate:modelValue": ($event) => customForm.value.description = $event,
                      placeholder: "\u7B80\u8981\u8BF4\u660E\u6B64\u5E94\u7528\u7684\u529F\u80FD\u4E0E\u4F18\u5316\u7279\u6027..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode("span", { class: "font-semibold text-gray-700 dark:text-gray-300" }, "\u5B89\u88C5\u53C2\u6570\u4E0E\u73AF\u5883\u53D8\u91CF\u6620\u5C04 (formFields)"),
                        createVNode("p", { class: "text-[11px] text-gray-400" }, "\u9762\u677F\u7528\u6237\u5728\u5B89\u88C5\u6B64\u5E94\u7528\u65F6\u5F39\u51FA\u7684\u4EA4\u4E92\u5F0F\u914D\u7F6E\u8868\u5355\uFF0C\u81EA\u52A8\u6CE8\u5165 Compose \u73AF\u5883\u53D8\u91CF")
                      ]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "outline",
                        icon: "ph:plus",
                        onClick: addCustomFormField
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6DFB\u52A0\u53C2\u6570\u9879 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "space-y-2 max-h-44 overflow-y-auto pr-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(customForm.value.formFields, (field, fIdx) => {
                        return openBlock(), createBlock("div", {
                          key: fIdx,
                          class: "flex items-center gap-2 p-2 rounded-lg bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800"
                        }, [
                          createVNode("div", { class: "flex-1" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => field.envKey = $event,
                              placeholder: "\u73AF\u5883\u53D8\u91CF\u540D (\u5982 PANEL_DB_ROOT_PASSWORD)",
                              class: "w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, field.envKey]
                            ])
                          ]),
                          createVNode("div", { class: "w-28" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => field.labelZh = $event,
                              placeholder: "\u4E2D\u6587\u63CF\u8FF0 (\u5982 \u5BC6\u7801)",
                              class: "w-full bg-transparent text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, field.labelZh]
                            ])
                          ]),
                          createVNode("div", { class: "w-28" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => field.default = $event,
                              placeholder: "\u9ED8\u8BA4\u503C (\u5982 3306)",
                              class: "w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, field.default]
                            ])
                          ]),
                          createVNode("div", { class: "w-24" }, [
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => field.type = $event,
                              class: "w-full rounded border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 py-1 px-1.5 text-xs text-gray-900 dark:text-white"
                            }, [
                              createVNode("option", { value: "text" }, "text"),
                              createVNode("option", { value: "password" }, "password"),
                              createVNode("option", { value: "number" }, "number")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, field.type]
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-1.5 shrink-0 text-[11px] text-gray-500" }, [
                            createVNode("label", { class: "flex items-center gap-1 cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => field.required = $event,
                                class: "rounded text-emerald-600"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, field.required]
                              ]),
                              createVNode("span", null, "\u5FC5\u586B")
                            ]),
                            field.type === "password" ? (openBlock(), createBlock("label", {
                              key: 0,
                              class: "flex items-center gap-1 cursor-pointer"
                            }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => field.random = $event,
                                class: "rounded text-emerald-600"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, field.random]
                              ]),
                              createVNode("span", null, "\u968F\u673A")
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("button", {
                            type: "button",
                            class: "text-gray-400 hover:text-red-500 p-1",
                            title: "\u79FB\u9664\u53C2\u6570",
                            onClick: ($event) => removeCustomFormField(fIdx)
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:x",
                              class: "h-4 w-4"
                            })
                          ], 8, ["onClick"])
                        ]);
                      }), 128)),
                      !customForm.value.formFields || customForm.value.formFields.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "py-2 text-center text-xs text-gray-400"
                      }, " \u5C1A\u672A\u914D\u7F6E\u8868\u5355\u53C2\u6570\uFF0C\u53EF\u76F4\u63A5\u5728\u4E0A\u65B9\u70B9\u51FB\u300C\u6DFB\u52A0\u53C2\u6570\u9879\u300D ")) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("label", { class: "font-semibold text-gray-700 dark:text-gray-300" }, [
                        createTextVNode(" docker-compose.yml \u5BB9\u5668\u7F16\u6392\u5185\u5BB9 "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "outline",
                        icon: "ph:magic-wand",
                        onClick: quickNormalizeCustomCompose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC\u4E0E\u8DEF\u5F84 ")
                        ]),
                        _: 1
                      })
                    ]),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => customForm.value.compose = $event,
                      rows: "14",
                      class: "w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800",
                      spellcheck: "false",
                      placeholder: "\u8BF7\u8F93\u5165 docker-compose.yml \u6A21\u677F\u914D\u7F6E..."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, customForm.value.compose]
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    disabled: savingCustom.value,
                    onClick: ($event) => showCustomModal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_component_UButton, {
                    color: "success",
                    icon: "ph:check",
                    loading: savingCustom.value,
                    onClick: handleSaveCustomApp
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u5E76\u53D1\u5E03\u79BB\u7EBF\u5305 ")
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
      _push(ssrRenderComponent(_component_UModal, {
        open: showUploadModal.value,
        "onUpdate:open": ($event) => showUploadModal.value = $event,
        ui: { content: "sm:max-w-xl" },
        title: "\u4E0A\u4F20\u5E94\u7528\u5B89\u88C5\u5305"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4 max-h-[85vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:upload-simple",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-bold text-gray-900 dark:text-white"${_scopeId}>\u4E0A\u4F20\u5E94\u7528\u79BB\u7EBF\u5B89\u88C5\u5305</span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              disabled: uploadingPackage.value,
              onClick: ($event) => showUploadModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4 text-xs"${_scopeId}><p class="text-gray-500 dark:text-gray-400 leading-relaxed"${_scopeId}> \u652F\u6301\u4E0A\u4F20 1Panel / GoPanel \u89C4\u8303\u7684 <code${_scopeId}>.zip</code>\u3001<code${_scopeId}>.tar.gz</code> \u79BB\u7EBF\u5305\u3002\u7CFB\u7EDF\u5C06\u81EA\u52A8\u89E3\u5305\u3001\u6E05\u6D17 1Panel \u7F51\u7EDC\u4E0E\u8DEF\u5F84\u3001\u63D0\u53D6 <code${_scopeId}>docker-compose.yml</code> \u548C <code${_scopeId}>data.yml</code> \u5E76\u81EA\u52A8\u53D1\u5E03\u81F3\u5546\u5E97\u3002 </p><div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer bg-gray-50/50 dark:bg-gray-900/50"${_scopeId}><input type="file" accept=".zip,.tar.gz,.tgz" class="hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:package",
              class: "mx-auto h-10 w-10 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-2 font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>${ssrInterpolate(selectedFile.value ? selectedFile.value.name : "\u70B9\u51FB\u9009\u62E9\u6216\u62D6\u62FD\u5B89\u88C5\u5305\u5230\u6B64\u5904")}</p><p class="mt-1 text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(selectedFile.value ? `${(selectedFile.value.size / 1024).toFixed(1)} KB` : "\u652F\u6301 .zip\u3001.tar.gz \u683C\u5F0F")}</p></div><div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><span class="font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>\u53EF\u9009\u53C2\u6570\u91CD\u5199\uFF08\u7559\u7A7A\u5219\u81EA\u52A8\u4ECE\u538B\u7F29\u5305\u63D0\u53D6\u63A8\u5BFC\uFF09\uFF1A</span><div class="grid grid-cols-1 sm:grid-cols-3 gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: uploadOverrides.value.key,
              "onUpdate:modelValue": ($event) => uploadOverrides.value.key = $event,
              placeholder: "Key (\u5982 mysql)",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: uploadOverrides.value.name,
              "onUpdate:modelValue": ($event) => uploadOverrides.value.name = $event,
              placeholder: "\u540D\u79F0 (\u5982 MySQL)",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: uploadOverrides.value.version,
              "onUpdate:modelValue": ($event) => uploadOverrides.value.version = $event,
              placeholder: "\u7248\u672C (\u5982 8.4.11)",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (uploadLogs.value.length > 0) {
              _push2(`<div class="mt-3 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-40 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
              ssrRenderList(uploadLogs.value, (line, idx) => {
                _push2(`<div${_scopeId}>${ssrInterpolate(line)}</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              disabled: uploadingPackage.value,
              onClick: ($event) => showUploadModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "ph:cloud-arrow-up",
              loading: uploadingPackage.value,
              disabled: !selectedFile.value,
              onClick: handleUploadSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5F00\u59CB\u4E0A\u4F20\u5E76\u89E3\u6790\u53D1\u5E03 `);
                } else {
                  return [
                    createTextVNode(" \u5F00\u59CB\u4E0A\u4F20\u5E76\u89E3\u6790\u53D1\u5E03 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4 max-h-[85vh] overflow-y-auto" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:upload-simple",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, "\u4E0A\u4F20\u5E94\u7528\u79BB\u7EBF\u5B89\u88C5\u5305")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    disabled: uploadingPackage.value,
                    onClick: ($event) => showUploadModal.value = false
                  }, null, 8, ["disabled", "onClick"])
                ]),
                createVNode("div", { class: "space-y-4 text-xs" }, [
                  createVNode("p", { class: "text-gray-500 dark:text-gray-400 leading-relaxed" }, [
                    createTextVNode(" \u652F\u6301\u4E0A\u4F20 1Panel / GoPanel \u89C4\u8303\u7684 "),
                    createVNode("code", null, ".zip"),
                    createTextVNode("\u3001"),
                    createVNode("code", null, ".tar.gz"),
                    createTextVNode(" \u79BB\u7EBF\u5305\u3002\u7CFB\u7EDF\u5C06\u81EA\u52A8\u89E3\u5305\u3001\u6E05\u6D17 1Panel \u7F51\u7EDC\u4E0E\u8DEF\u5F84\u3001\u63D0\u53D6 "),
                    createVNode("code", null, "docker-compose.yml"),
                    createTextVNode(" \u548C "),
                    createVNode("code", null, "data.yml"),
                    createTextVNode(" \u5E76\u81EA\u52A8\u53D1\u5E03\u81F3\u5546\u5E97\u3002 ")
                  ]),
                  createVNode("div", {
                    class: "border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer bg-gray-50/50 dark:bg-gray-900/50",
                    onClick: triggerFileInput
                  }, [
                    createVNode("input", {
                      ref_key: "fileInputRef",
                      ref: fileInputRef,
                      type: "file",
                      accept: ".zip,.tar.gz,.tgz",
                      class: "hidden",
                      onChange: handleFileSelected
                    }, null, 544),
                    createVNode(_component_UIcon, {
                      name: "ph:package",
                      class: "mx-auto h-10 w-10 text-emerald-500"
                    }),
                    createVNode("p", { class: "mt-2 font-semibold text-gray-800 dark:text-gray-200" }, toDisplayString(selectedFile.value ? selectedFile.value.name : "\u70B9\u51FB\u9009\u62E9\u6216\u62D6\u62FD\u5B89\u88C5\u5305\u5230\u6B64\u5904"), 1),
                    createVNode("p", { class: "mt-1 text-[11px] text-gray-400" }, toDisplayString(selectedFile.value ? `${(selectedFile.value.size / 1024).toFixed(1)} KB` : "\u652F\u6301 .zip\u3001.tar.gz \u683C\u5F0F"), 1)
                  ]),
                  createVNode("div", { class: "space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("span", { class: "font-semibold text-gray-700 dark:text-gray-300" }, "\u53EF\u9009\u53C2\u6570\u91CD\u5199\uFF08\u7559\u7A7A\u5219\u81EA\u52A8\u4ECE\u538B\u7F29\u5305\u63D0\u53D6\u63A8\u5BFC\uFF09\uFF1A"),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-2" }, [
                      createVNode(_component_UInput, {
                        modelValue: uploadOverrides.value.key,
                        "onUpdate:modelValue": ($event) => uploadOverrides.value.key = $event,
                        placeholder: "Key (\u5982 mysql)",
                        size: "xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        modelValue: uploadOverrides.value.name,
                        "onUpdate:modelValue": ($event) => uploadOverrides.value.name = $event,
                        placeholder: "\u540D\u79F0 (\u5982 MySQL)",
                        size: "xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UInput, {
                        modelValue: uploadOverrides.value.version,
                        "onUpdate:modelValue": ($event) => uploadOverrides.value.version = $event,
                        placeholder: "\u7248\u672C (\u5982 8.4.11)",
                        size: "xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  uploadLogs.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-3 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-40 overflow-y-auto space-y-1"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(uploadLogs.value, (line, idx) => {
                      return openBlock(), createBlock("div", { key: idx }, toDisplayString(line), 1);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    disabled: uploadingPackage.value,
                    onClick: ($event) => showUploadModal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    icon: "ph:cloud-arrow-up",
                    loading: uploadingPackage.value,
                    disabled: !selectedFile.value,
                    onClick: handleUploadSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5F00\u59CB\u4E0A\u4F20\u5E76\u89E3\u6790\u53D1\u5E03 ")
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
        open: showBuildModal.value,
        "onUpdate:open": ($event) => showBuildModal.value = $event,
        ui: { content: "sm:max-w-xl" },
        title: "\u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4 max-h-[85vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:hammer",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305</span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              disabled: building.value,
              onClick: ($event) => showBuildModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4 text-sm"${_scopeId}><p class="text-gray-600 dark:text-gray-300"${_scopeId}> \u70B9\u51FB\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u6D41\u6C34\u7EBF\u4EFB\u52A1\uFF1A </p><ul class="list-disc pl-5 space-y-1 text-xs text-gray-500 dark:text-gray-400"${_scopeId}><li${_scopeId}>\u4ECE\u5B98\u65B9\u7A33\u5B9A\u6E90\u540C\u6B65\u6700\u65B0\u7684\u5168\u91CF\u5E94\u7528\u76EE\u5F55\u4E0E\u7248\u672C\u6E05\u5355</li><li${_scopeId}>\u6DF1\u5EA6\u66FF\u6362\u6240\u6709\u5E94\u7528\u540D\u79F0\u4E0E\u6587\u672C\uFF08<code${_scopeId}>1Panel</code> \u2192 <code${_scopeId}>GoPanel</code>\uFF09</li><li${_scopeId}>\u6807\u51C6\u5316\u5BB9\u5668\u7F51\u7EDC\u540D\uFF08<code${_scopeId}>1panel-network</code> \u2192 <code${_scopeId}>gopanel-network</code>\uFF09</li><li${_scopeId}>\u4FEE\u590D\u914D\u7F6E\u8DEF\u5F84\uFF08<code${_scopeId}>/opt/1panel</code> \u2192 <code${_scopeId}>/opt/gopanel</code>\uFF09</li><li${_scopeId}>\u5F7B\u5E95\u6E05\u9664\u7B2C\u4E09\u65B9\u9065\u6D4B\u4E0E\u4E0A\u62A5\u56DE\u8C03</li><li class="text-emerald-600 dark:text-emerald-400 font-semibold"${_scopeId}> \u81EA\u52A8\u6DF1\u5EA6\u5408\u5E76\u6240\u6709\u81EA\u5EFA\u5B9A\u5236\u5E94\u7528\uFF08${ssrInterpolate(stats.value.customAppsCount || 0)} \u6B3E\uFF09\uFF0C\u786E\u4FDD\u79C1\u6709\u5E94\u7528\u6C38\u4E0D\u4E22\u5931 </li><li${_scopeId}>\u91CD\u65B0\u538B\u7F29\u5E76\u53D1\u5E03 <code${_scopeId}>gopanel.json.zip</code> \u53CA <code${_scopeId}>apps.json</code></li></ul><div class="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="text-xs font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>\u4E0A\u6E38\u540C\u6B65\u6E90\u5730\u5740\uFF1A</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: syncSourceUrl.value,
              "onUpdate:modelValue": ($event) => syncSourceUrl.value = $event,
              placeholder: "https://apps-assets.fit2cloud.com/stable/1panel.json",
              class: "w-full font-mono text-xs"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap gap-1.5 pt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "subtle",
              color: "neutral",
              onClick: ($event) => syncSourceUrl.value = "https://apps-assets.fit2cloud.com/stable/1panel.json"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5B98\u65B9\u7A33\u5B9A\u6E90 (JSON) `);
                } else {
                  return [
                    createTextVNode(" \u5B98\u65B9\u7A33\u5B9A\u6E90 (JSON) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "subtle",
              color: "neutral",
              onClick: ($event) => syncSourceUrl.value = "https://apps-assets.fit2cloud.com/stable/1panel.json.zip"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5B98\u65B9\u538B\u7F29\u5305 (ZIP) `);
                } else {
                  return [
                    createTextVNode(" \u5B98\u65B9\u538B\u7F29\u5305 (ZIP) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "subtle",
              color: "neutral",
              onClick: ($event) => syncSourceUrl.value = "https://apps.1panel.pro/stable/1panel.json.zip"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6D77\u5916\u955C\u50CF\u6E90 (ZIP) `);
                } else {
                  return [
                    createTextVNode(" \u6D77\u5916\u955C\u50CF\u6E90 (ZIP) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              variant: "subtle",
              color: "neutral",
              onClick: ($event) => syncSourceUrl.value = ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4F7F\u7528\u672C\u5730\u7F13\u5B58 `);
                } else {
                  return [
                    createTextVNode(" \u4F7F\u7528\u672C\u5730\u7F13\u5B58 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (buildResultLogs.value.length > 0) {
              _push2(`<div class="mt-4 rounded-lg bg-gray-950 p-3 font-mono text-xs text-emerald-400 max-h-48 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
              ssrRenderList(buildResultLogs.value, (line, idx) => {
                _push2(`<div${_scopeId}>${ssrInterpolate(line)}</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              disabled: building.value,
              onClick: ($event) => showBuildModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: building.value,
              icon: "ph:play",
              onClick: handleBuild
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5F00\u59CB\u6784\u5EFA `);
                } else {
                  return [
                    createTextVNode(" \u5F00\u59CB\u6784\u5EFA ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4 max-h-[85vh] overflow-y-auto" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2 font-bold text-gray-900 dark:text-white" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:hammer",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    createVNode("span", null, "\u4E00\u952E\u540C\u6B65\u4E0E\u6784\u5EFA\u5E94\u7528\u5546\u5E97\u5305")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    disabled: building.value,
                    onClick: ($event) => showBuildModal.value = false
                  }, null, 8, ["disabled", "onClick"])
                ]),
                createVNode("div", { class: "space-y-4 text-sm" }, [
                  createVNode("p", { class: "text-gray-600 dark:text-gray-300" }, " \u70B9\u51FB\u5C06\u81EA\u52A8\u6267\u884C\u4EE5\u4E0B\u6D41\u6C34\u7EBF\u4EFB\u52A1\uFF1A "),
                  createVNode("ul", { class: "list-disc pl-5 space-y-1 text-xs text-gray-500 dark:text-gray-400" }, [
                    createVNode("li", null, "\u4ECE\u5B98\u65B9\u7A33\u5B9A\u6E90\u540C\u6B65\u6700\u65B0\u7684\u5168\u91CF\u5E94\u7528\u76EE\u5F55\u4E0E\u7248\u672C\u6E05\u5355"),
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
                    createVNode("li", null, "\u5F7B\u5E95\u6E05\u9664\u7B2C\u4E09\u65B9\u9065\u6D4B\u4E0E\u4E0A\u62A5\u56DE\u8C03"),
                    createVNode("li", { class: "text-emerald-600 dark:text-emerald-400 font-semibold" }, " \u81EA\u52A8\u6DF1\u5EA6\u5408\u5E76\u6240\u6709\u81EA\u5EFA\u5B9A\u5236\u5E94\u7528\uFF08" + toDisplayString(stats.value.customAppsCount || 0) + " \u6B3E\uFF09\uFF0C\u786E\u4FDD\u79C1\u6709\u5E94\u7528\u6C38\u4E0D\u4E22\u5931 ", 1),
                    createVNode("li", null, [
                      createTextVNode("\u91CD\u65B0\u538B\u7F29\u5E76\u53D1\u5E03 "),
                      createVNode("code", null, "gopanel.json.zip"),
                      createTextVNode(" \u53CA "),
                      createVNode("code", null, "apps.json")
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-700 dark:text-gray-300" }, "\u4E0A\u6E38\u540C\u6B65\u6E90\u5730\u5740\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: syncSourceUrl.value,
                      "onUpdate:modelValue": ($event) => syncSourceUrl.value = $event,
                      placeholder: "https://apps-assets.fit2cloud.com/stable/1panel.json",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex flex-wrap gap-1.5 pt-1" }, [
                      createVNode(_component_UButton, {
                        size: "xs",
                        variant: "subtle",
                        color: "neutral",
                        onClick: ($event) => syncSourceUrl.value = "https://apps-assets.fit2cloud.com/stable/1panel.json"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5B98\u65B9\u7A33\u5B9A\u6E90 (JSON) ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        variant: "subtle",
                        color: "neutral",
                        onClick: ($event) => syncSourceUrl.value = "https://apps-assets.fit2cloud.com/stable/1panel.json.zip"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5B98\u65B9\u538B\u7F29\u5305 (ZIP) ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        variant: "subtle",
                        color: "neutral",
                        onClick: ($event) => syncSourceUrl.value = "https://apps.1panel.pro/stable/1panel.json.zip"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6D77\u5916\u955C\u50CF\u6E90 (ZIP) ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        variant: "subtle",
                        color: "neutral",
                        onClick: ($event) => syncSourceUrl.value = ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4F7F\u7528\u672C\u5730\u7F13\u5B58 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
                ]),
                createVNode("div", { class: "flex justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800" }, [
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: showDetailModal.value,
        "onUpdate:open": ($event) => showDetailModal.value = $event,
        ui: { content: "sm:max-w-3xl" },
        title: "\u5E94\u7528\u8BE6\u60C5"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            if (currentApp.value) {
              _push2(`<div class="p-6 space-y-5 max-h-[85vh] overflow-y-auto"${_scopeId}><div class="flex items-start justify-between pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
              if (currentApp.value.icon) {
                _push2(`<img${ssrRenderAttr("src", currentApp.value.icon)} class="h-10 w-10 rounded-xl object-contain bg-gray-100 dark:bg-gray-800 p-1" alt="icon"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><h3 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentApp.value.name || getAppKey(currentApp.value))}</h3>`);
              if (currentApp.value.isCustom) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u81EA\u5EFA\u5B9A\u5236 `);
                    } else {
                      return [
                        createTextVNode(" \u81EA\u5EFA\u5B9A\u5236 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "primary",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate(((_a2 = currentApp.value.versions) == null ? void 0 : _a2.length) || 0)} \u4E2A\u7248\u672C `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(((_b2 = currentApp.value.versions) == null ? void 0 : _b2.length) || 0) + " \u4E2A\u7248\u672C ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-1 flex items-center gap-2 text-xs text-gray-400 font-mono"${_scopeId}><span${_scopeId}>${ssrInterpolate(getAppKey(currentApp.value))}</span>`);
              if ((_a = currentApp.value.additionalProperties) == null ? void 0 : _a.type) {
                _push2(`<span class="text-gray-500"${_scopeId}> \xB7 ${ssrInterpolate(currentApp.value.additionalProperties.type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x",
                size: "xs",
                onClick: ($event) => showDetailModal.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap items-center justify-between gap-2 text-xs"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(currentApp.value.tags || ((_b = currentApp.value.additionalProperties) == null ? void 0 : _b.tags) || [], (tag) => {
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
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(((_c = currentApp.value.additionalProperties) == null ? void 0 : _c.architectures) || ["amd64", "arm64"], (arch) => {
                _push2(`<span class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[11px] text-gray-500 font-mono"${_scopeId}>${ssrInterpolate(arch)}</span>`);
              });
              _push2(`<!--]--></div><div class="flex items-center gap-3"${_scopeId}>`);
              if ((_d = currentApp.value.additionalProperties) == null ? void 0 : _d.website) {
                _push2(`<a${ssrRenderAttr("href", currentApp.value.additionalProperties.website)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:globe",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>\u5B98\u7F51</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_e = currentApp.value.additionalProperties) == null ? void 0 : _e.document) {
                _push2(`<a${ssrRenderAttr("href", currentApp.value.additionalProperties.document)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:book-open",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>\u6587\u6863</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_f = currentApp.value.additionalProperties) == null ? void 0 : _f.github) {
                _push2(`<a${ssrRenderAttr("href", currentApp.value.additionalProperties.github)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:github-logo",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>GitHub</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="rounded-lg bg-gray-50/70 dark:bg-gray-900/60 p-3.5 border border-gray-100 dark:border-gray-800 text-xs leading-relaxed text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(((_g = currentApp.value.additionalProperties) == null ? void 0 : _g.shortDescZh) || currentApp.value.description || "\u6682\u65E0\u63CF\u8FF0")}</div><div class="space-y-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-semibold uppercase text-gray-400"${_scopeId}>\u6536\u5F55\u7248\u672C\u5217\u8868\uFF08\u5171 ${ssrInterpolate(((_h = currentApp.value.versions) == null ? void 0 : _h.length) || 0)} \u4E2A\uFF09</p></div><div class="space-y-2 max-h-56 overflow-y-auto pr-1"${_scopeId}><!--[-->`);
              ssrRenderList(currentApp.value.versions || [], (v) => {
                _push2(`<div class="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/60 p-2.5 dark:border-gray-800 dark:bg-gray-900/60 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "primary",
                  variant: "subtle",
                  size: "sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` v${ssrInterpolate(v.name)}`);
                    } else {
                      return [
                        createTextVNode(" v" + toDisplayString(v.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (v.lastModified) {
                  _push2(`<span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(formatTimestamp(v.lastModified))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "primary",
                  variant: "soft",
                  icon: "ph:code",
                  onClick: ($event) => openComposeEditor(getAppKey(currentApp.value), v.name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u7F16\u8F91 Compose `);
                    } else {
                      return [
                        createTextVNode(" \u7F16\u8F91 Compose ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:download-simple",
                  href: v.downloadUrl,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u4E0B\u8F7D\u5305 `);
                    } else {
                      return [
                        createTextVNode(" \u4E0B\u8F7D\u5305 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]-->`);
              if (!currentApp.value.versions || currentApp.value.versions.length === 0) {
                _push2(`<div class="py-4 text-center text-xs text-gray-400"${_scopeId}> \u6682\u65E0\u7248\u672C\u4FE1\u606F </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              if (currentApp.value.readMe) {
                _push2(`<div class="space-y-1.5"${_scopeId}><p class="text-xs font-semibold uppercase text-gray-400"${_scopeId}>ReadMe \u6587\u6863\u9884\u89C8</p><pre class="rounded-lg bg-gray-950 p-3 text-xs font-mono text-gray-200 overflow-x-auto whitespace-pre-wrap max-h-48 border border-gray-800"${_scopeId}>${ssrInterpolate(currentApp.value.readMe)}</pre></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center justify-end pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                onClick: ($event) => showDetailModal.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5173\u95ED `);
                  } else {
                    return [
                      createTextVNode(" \u5173\u95ED ")
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
              currentApp.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-6 space-y-5 max-h-[85vh] overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-start justify-between pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    currentApp.value.icon ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: currentApp.value.icon,
                      class: "h-10 w-10 rounded-xl object-contain bg-gray-100 dark:bg-gray-800 p-1",
                      alt: "icon",
                      onError: (e) => e.target.style.display = "none"
                    }, null, 40, ["src", "onError"])) : createCommentVNode("", true),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(currentApp.value.name || getAppKey(currentApp.value)), 1),
                        currentApp.value.isCustom ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          color: "success",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u81EA\u5EFA\u5B9A\u5236 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UBadge, {
                          color: "primary",
                          variant: "subtle",
                          size: "xs"
                        }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode(toDisplayString(((_a2 = currentApp.value.versions) == null ? void 0 : _a2.length) || 0) + " \u4E2A\u7248\u672C ", 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mt-1 flex items-center gap-2 text-xs text-gray-400 font-mono" }, [
                        createVNode("span", null, toDisplayString(getAppKey(currentApp.value)), 1),
                        ((_i = currentApp.value.additionalProperties) == null ? void 0 : _i.type) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-gray-500"
                        }, " \xB7 " + toDisplayString(currentApp.value.additionalProperties.type), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    onClick: ($event) => showDetailModal.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2 text-xs" }, [
                  createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(currentApp.value.tags || ((_j = currentApp.value.additionalProperties) == null ? void 0 : _j.tags) || [], (tag) => {
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
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(((_k = currentApp.value.additionalProperties) == null ? void 0 : _k.architectures) || ["amd64", "arm64"], (arch) => {
                      return openBlock(), createBlock("span", {
                        key: arch,
                        class: "px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[11px] text-gray-500 font-mono"
                      }, toDisplayString(arch), 1);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    ((_l = currentApp.value.additionalProperties) == null ? void 0 : _l.website) ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: currentApp.value.additionalProperties.website,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:globe",
                        class: "h-3.5 w-3.5"
                      }),
                      createVNode("span", null, "\u5B98\u7F51")
                    ], 8, ["href"])) : createCommentVNode("", true),
                    ((_m = currentApp.value.additionalProperties) == null ? void 0 : _m.document) ? (openBlock(), createBlock("a", {
                      key: 1,
                      href: currentApp.value.additionalProperties.document,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:book-open",
                        class: "h-3.5 w-3.5"
                      }),
                      createVNode("span", null, "\u6587\u6863")
                    ], 8, ["href"])) : createCommentVNode("", true),
                    ((_n = currentApp.value.additionalProperties) == null ? void 0 : _n.github) ? (openBlock(), createBlock("a", {
                      key: 2,
                      href: currentApp.value.additionalProperties.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:github-logo",
                        class: "h-3.5 w-3.5"
                      }),
                      createVNode("span", null, "GitHub")
                    ], 8, ["href"])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "rounded-lg bg-gray-50/70 dark:bg-gray-900/60 p-3.5 border border-gray-100 dark:border-gray-800 text-xs leading-relaxed text-gray-600 dark:text-gray-300" }, toDisplayString(((_o = currentApp.value.additionalProperties) == null ? void 0 : _o.shortDescZh) || currentApp.value.description || "\u6682\u65E0\u63CF\u8FF0"), 1),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "\u6536\u5F55\u7248\u672C\u5217\u8868\uFF08\u5171 " + toDisplayString(((_p = currentApp.value.versions) == null ? void 0 : _p.length) || 0) + " \u4E2A\uFF09", 1)
                  ]),
                  createVNode("div", { class: "space-y-2 max-h-56 overflow-y-auto pr-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(currentApp.value.versions || [], (v) => {
                      return openBlock(), createBlock("div", {
                        key: v.name,
                        class: "flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/60 p-2.5 dark:border-gray-800 dark:bg-gray-900/60 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
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
                          }, toDisplayString(formatTimestamp(v.lastModified)), 1)) : createCommentVNode("", true)
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
                              createTextVNode(" \u7F16\u8F91 Compose ")
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
                    }), 128)),
                    !currentApp.value.versions || currentApp.value.versions.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "py-4 text-center text-xs text-gray-400"
                    }, " \u6682\u65E0\u7248\u672C\u4FE1\u606F ")) : createCommentVNode("", true)
                  ])
                ]),
                currentApp.value.readMe ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-1.5"
                }, [
                  createVNode("p", { class: "text-xs font-semibold uppercase text-gray-400" }, "ReadMe \u6587\u6863\u9884\u89C8"),
                  createVNode("pre", { class: "rounded-lg bg-gray-950 p-3 text-xs font-mono text-gray-200 overflow-x-auto whitespace-pre-wrap max-h-48 border border-gray-800" }, toDisplayString(currentApp.value.readMe), 1)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center justify-end pt-3 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => showDetailModal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5173\u95ED ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: showComposeModal.value,
        "onUpdate:open": ($event) => showComposeModal.value = $event,
        ui: { content: "sm:max-w-4xl" },
        title: "\u7F16\u8F91 docker-compose.yml"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4 max-h-[90vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:code",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-bold text-gray-900 dark:text-white"${_scopeId}> \u7F16\u8F91 docker-compose.yml - ${ssrInterpolate(editingAppKey.value)} (v${ssrInterpolate(editingVersion.value)}) </span>`);
            if (composeHasLocal.value) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "success",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA `);
                  } else {
                    return [
                      createTextVNode(" \u672C\u5730\u8986\u76D6\u5305\u5DF2\u5C31\u7EEA ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (composeIsFallback.value) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "warning",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u57FA\u7840\u964D\u7EA7\u6A21\u677F (\u4E0A\u6E38\u65E0\u6E90\u5305) `);
                  } else {
                    return [
                      createTextVNode(" \u57FA\u7840\u964D\u7EA7\u6A21\u677F (\u4E0A\u6E38\u65E0\u6E90\u5305) ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 `);
                  } else {
                    return [
                      createTextVNode(" \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x",
              size: "xs",
              disabled: savingCompose.value,
              onClick: ($event) => showComposeModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4 text-sm"${_scopeId}><div class="flex items-center justify-between rounded-lg bg-blue-50/60 p-3 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"${_scopeId}><span${_scopeId}> \u63D0\u793A\uFF1A\u53EF\u76F4\u63A5\u5728\u6B64\u4FEE\u6539\u6A21\u677F\u3002\u70B9\u51FB\u300C\u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6\u300D\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u8BE5\u6A21\u677F\u91CD\u65B0\u6253\u5305\u4E3A\u6700\u65B0\u7684 <code${_scopeId}>.tar.gz</code> \u5E76\u8986\u76D6\u672C\u5730\u79BB\u7EBF\u5305\u3002\u9762\u677F\u4E0B\u6B21\u5B89\u88C5\u8BE5\u5E94\u7528\u65F6\u5C06\u76F4\u63A5\u4F7F\u7528\u6700\u65B0\u914D\u7F6E\u3002 </span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "primary",
              variant: "outline",
              icon: "ph:magic-wand",
              onClick: quickNormalizeCompose
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC `);
                } else {
                  return [
                    createTextVNode(" \u4E00\u952E\u89C4\u8303\u5316\u7F51\u7EDC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (loadingCompose.value) {
              _push2(`<div class="py-16 text-center text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner",
                class: "mx-auto h-8 w-8 animate-spin text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-xs"${_scopeId}>\u6B63\u5728\u89E3\u5305\u5E76\u8BFB\u53D6 docker-compose.yml \u6A21\u677F...</p></div>`);
            } else {
              _push2(`<div class="relative"${_scopeId}><textarea rows="18" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-primary-500 focus:outline-none dark:border-gray-800" spellcheck="false" placeholder="\u8BF7\u8F93\u5165 docker-compose.yml \u914D\u7F6E\u5185\u5BB9..."${_scopeId}>${ssrInterpolate(editingComposeContent.value)}</textarea></div>`);
            }
            _push2(`</div><div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div${_scopeId}>`);
            if (composeHasLocal.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-counter-clockwise",
                loading: resettingCompose.value,
                onClick: handleResetCompose
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 `);
                  } else {
                    return [
                      createTextVNode(" \u91CD\u7F6E\u4E3A\u4E0A\u6E38\u5B98\u65B9\u5305 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              disabled: savingCompose.value,
              onClick: ($event) => showComposeModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "ph:check",
              loading: savingCompose.value,
              onClick: handleSaveCompose
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u91CD\u65B0\u6253\u5305\u8986\u76D6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4 max-h-[90vh] overflow-y-auto" }, [
                createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:code",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, " \u7F16\u8F91 docker-compose.yml - " + toDisplayString(editingAppKey.value) + " (v" + toDisplayString(editingVersion.value) + ") ", 1),
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
                    })) : composeIsFallback.value ? (openBlock(), createBlock(_component_UBadge, {
                      key: 1,
                      color: "warning",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u57FA\u7840\u964D\u7EA7\u6A21\u677F (\u4E0A\u6E38\u65E0\u6E90\u5305) ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_UBadge, {
                      key: 2,
                      color: "neutral",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4E0A\u6E38\u81EA\u52A8\u6E05\u6D17\u6E90 ")
                      ]),
                      _: 1
                    }))
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x",
                    size: "xs",
                    disabled: savingCompose.value,
                    onClick: ($event) => showComposeModal.value = false
                  }, null, 8, ["disabled", "onClick"])
                ]),
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
                ]),
                createVNode("div", { class: "flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/panel/admin/pages/appstore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=appstore-QkWIiBmB.mjs.map
