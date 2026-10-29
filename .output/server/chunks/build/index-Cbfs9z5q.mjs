import { u as useI18n, e as useToast, d as useFormatTime, q as useConfirm, D as useLocaleRouter, r as useSettings, f as useAdminPermissions, x as usePagination, y as useFetch, o as navigateTo, k as _sfc_main$O, i as _sfc_main$T, _ as _sfc_main$Y, b as _sfc_main$A, l as _sfc_main$v, j as _sfc_main$t, z as _sfc_main$y } from './server.mjs';
import { _ as _sfc_main$1 } from './DropdownMenu-Cf2yW8HY.mjs';
import { _ as _sfc_main$2 } from './Switch-CHpGzJxp.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { gw as localePathForSeo } from '../nitro/nitro.mjs';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';
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
import './useArrowNavigation-C4FOBlvk.mjs';
import './useFilter-YI-ACgZf.mjs';
import './Kbd-Btx37SrR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const toast = useToast();
    const { formatDate } = useFormatTime();
    const { confirm } = useConfirm();
    const { localePath } = useLocaleRouter();
    const { settings, fetchSettings } = useSettings();
    void fetchSettings();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { buildImageProxyUrl } = useImageProxy();
    const rawSupportedLocales = computed(() => {
      if (settings.value) {
        let i18nEnabled = "true";
        let rawLocales = "en,zh";
        if (Array.isArray(settings.value)) {
          const i18nSetting = settings.value.find((s) => s.key === "i18n_enabled");
          if (i18nSetting) i18nEnabled = String(i18nSetting.value);
          const localesSetting = settings.value.find((s) => s.key === "supported_locales");
          if (localesSetting) rawLocales = String(localesSetting.value);
        } else {
          if (settings.value.i18n_enabled !== void 0) {
            i18nEnabled = String(settings.value.i18n_enabled);
          }
          if (settings.value.supported_locales !== void 0) {
            rawLocales = String(settings.value.supported_locales);
          }
        }
        if (i18nEnabled === "false") return ["en"];
        if (rawLocales === "") return ["en"];
        return rawLocales.split(",").map((l) => l.trim()).filter(Boolean);
      }
      return ["en", "zh"];
    });
    const defaultLocale = computed(() => {
      if (settings.value) {
        if (Array.isArray(settings.value)) {
          const defaultLocaleSetting = settings.value.find((s) => s.key === "default_locale");
          if (defaultLocaleSetting && defaultLocaleSetting.value) {
            return defaultLocaleSetting.value;
          }
        } else if (settings.value.default_locale) {
          return settings.value.default_locale;
        }
      }
      return rawSupportedLocales.value[0] || "en";
    });
    const supportedLocales = computed(() => {
      const list = [...rawSupportedLocales.value];
      const def = defaultLocale.value;
      if (!def || !list.includes(def)) return list;
      return [def, ...list.filter((l) => l !== def)];
    });
    const getPostUrlPath = (post) => {
      const basePath = `/blog/${post.slug}`;
      if (post.locale && supportedLocales.value.length > 1) {
        return localePathForSeo(basePath, post.locale, defaultLocale.value || "en");
      }
      return basePath;
    };
    const getPostPreviewTo = (post) => {
      if (post.locale && supportedLocales.value.length > 1) {
        return getPostUrlPath(post);
      }
      return localePath(`/blog/${post.slug}`);
    };
    const formatNumber = (num) => {
      return new Intl.NumberFormat().format(num || 0);
    };
    const copyPostUrl = async (slug, postLocale) => {
      try {
        const origin = (void 0).location.origin;
        const path = getPostUrlPath({ slug, locale: postLocale });
        const fullUrl = `${origin}${path}`;
        await (void 0).clipboard.writeText(fullUrl);
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.copiedUrl"),
          color: "success"
        });
      } catch {
        toast.add({
          title: t("admin.common.error"),
          description: "\u590D\u5236\u5931\u8D25",
          color: "error"
        });
      }
    };
    const getTypeBadgeColor = (type) => {
      switch (type) {
        case "changelog":
          return "primary";
        // 紫色
        case "announcement":
          return "warning";
        // 琥珀色
        case "page":
          return "info";
        // 青蓝色
        case "blog":
        default:
          return "neutral";
      }
    };
    const getTypeBadgeIcon = (type) => {
      switch (type) {
        case "changelog":
          return "ph:rocket-launch";
        case "announcement":
          return "ph:megaphone";
        case "page":
          return "ph:file-text";
        case "blog":
        default:
          return "ph:article";
      }
    };
    const typeLabel = (type) => t(`admin.posts.type.${type}`, t(`admin.posts.type.blog`));
    const columns = computed(() => [
      { accessorKey: "id", header: "ID", meta: { class: { th: "w-16 text-center font-mono", td: "text-center font-mono text-xs text-gray-500" } } },
      { accessorKey: "image", header: t("admin.posts.col.cover"), meta: { class: { th: "w-20" } } },
      { accessorKey: "title", header: t("admin.posts.col.title") },
      { accessorKey: "type", header: t("admin.posts.col.type"), meta: { class: { th: "w-32" } } },
      { accessorKey: "views", header: t("admin.posts.col.views"), meta: { class: { th: "w-28" } } },
      { accessorKey: "status", header: t("admin.posts.col.status"), meta: { class: { th: "w-36" } } },
      { accessorKey: "createdAt", header: t("admin.posts.col.date"), meta: { class: { th: "w-36" } } },
      {
        accessorKey: "actions",
        header: t("admin.posts.col.actions"),
        meta: {
          class: {
            th: "w-32 text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const searchInput = ref("");
    const searchKeyword = ref("");
    const selectedType = ref("all");
    const selectedLocale = ref("all");
    const selectedStatus = ref("all");
    const typeOptions = computed(() => [
      { label: t("admin.posts.filter.allTypes"), value: "all" },
      { label: t("admin.posts.type.blog"), value: "blog" },
      { label: t("admin.posts.type.changelog"), value: "changelog" },
      { label: t("admin.posts.type.announcement"), value: "announcement" },
      { label: t("admin.posts.type.page"), value: "page" }
    ]);
    const localeOptions = computed(() => [
      { label: t("admin.posts.filter.allLocales", "\u5168\u90E8\u8BED\u8A00"), value: "all" },
      ...supportedLocales.value.map((loc) => ({
        label: loc.toUpperCase(),
        value: loc
      }))
    ]);
    const statusOptions = computed(() => [
      { label: t("admin.posts.filter.allStatus"), value: "all" },
      { label: t("admin.posts.filter.statusPublished"), value: "published" },
      { label: t("admin.posts.filter.statusDraft"), value: "draft" }
    ]);
    let searchDebounceTimer = null;
    watch(searchInput, (val) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchKeyword.value = val.trim();
        page.value = 1;
      }, 300);
    });
    watch([selectedType, selectedLocale, selectedStatus], () => {
      page.value = 1;
    });
    const resetFilters = () => {
      searchInput.value = "";
      searchKeyword.value = "";
      selectedType.value = "all";
      selectedLocale.value = "all";
      selectedStatus.value = "all";
      page.value = 1;
    };
    const { page, pageSize, onPageChange } = usePagination(15);
    const {
      data: postsData,
      pending,
      refresh
    } = useFetch(
      "/api/admin/posts",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageSize.value,
          type: selectedType.value === "all" ? void 0 : selectedType.value,
          locale: selectedLocale.value === "all" ? void 0 : selectedLocale.value,
          status: selectedStatus.value === "all" ? void 0 : selectedStatus.value,
          search: searchKeyword.value || void 0
        })),
        watch: [page, selectedType, selectedLocale, selectedStatus, searchKeyword]
      },
      "$PJcZevdyFw"
      /* nuxt-injected */
    );
    const totalItems = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.total) || 0;
    });
    const paginatedPosts = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.data) || [];
    });
    const stats = computed(() => {
      var _a;
      return ((_a = postsData.value) == null ? void 0 : _a.stats) || { total: 0, published: 0, draft: 0, totalViews: 0 };
    });
    const togglingId = ref(null);
    const togglePostStatus = async (post, newStatus) => {
      var _a;
      if (togglingId.value !== null) return;
      togglingId.value = post.id;
      try {
        await $fetch(`/api/admin/posts/${post.id}/status`, {
          method: "PATCH",
          body: { isActive: newStatus }
        });
        post.isActive = newStatus;
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.statusUpdated"),
          color: "success"
        });
        refresh();
      } catch (err) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = err.data) == null ? void 0 : _a.message) || "\u72B6\u6001\u5207\u6362\u5931\u8D25",
          color: "error"
        });
      } finally {
        togglingId.value = null;
      }
    };
    const createMenuItems = computed(() => [
      [
        {
          label: t("admin.posts.createMenu.article"),
          icon: "ph:article",
          onSelect: () => navigateTo("/admin/posts/create")
        },
        {
          label: t("admin.posts.createMenu.changelog"),
          icon: "ph:rocket-launch",
          onSelect: () => navigateTo("/admin/posts/create?type=changelog")
        }
      ]
    ]);
    const editPost = (post) => {
      navigateTo(`/admin/posts/${post.id}`);
    };
    const deletePost = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.posts.delete.title"),
        description: t("admin.posts.delete.description")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/posts/${id}`, {
          method: "DELETE"
        });
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.posts.toast.deleted"),
          color: "success"
        });
        refresh();
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.posts.toast.deleteFailed"),
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$O;
      const _component_UButton = _sfc_main$T;
      const _component_UDropdownMenu = _sfc_main$1;
      const _component_UIcon = _sfc_main$Y;
      const _component_UInput = _sfc_main$A;
      const _component_USelect = _sfc_main$v;
      const _component_UTable = _sfc_main$t;
      const _component_USwitch = _sfc_main$2;
      const _component_UPagination = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.posts.title"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(totalItems.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(totalItems.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">${ssrInterpolate(_ctx.$t("admin.posts.subtitle"))}</p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        loading: unref(pending),
        class: "rounded-xl",
        onClick: unref(refresh)
      }, null, _parent));
      if (unref(hasAdminPerm)("posts:edit")) {
        _push(ssrRenderComponent(_component_UDropdownMenu, {
          items: createMenuItems.value,
          ui: { content: "w-48" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "sm",
                class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
                icon: "ph:plus-bold",
                "trailing-icon": "ph:caret-down-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.createPost"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "primary",
                  size: "sm",
                  class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
                  icon: "ph:plus-bold",
                  "trailing-icon": "ph:caret-down-bold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 shrink-0"><div class="${ssrRenderClass([{ "ring-1 ring-purple-500 border-purple-500": selectedStatus.value === "all" && !searchKeyword.value }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-purple-500/50 hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:files-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.total"))}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.total)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-emerald-500 border-emerald-500": selectedStatus.value === "published" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.published"))}</div></div></div><span class="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.published)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-amber-500 border-amber-500": selectedStatus.value === "draft" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-amber-500/50 hover:bg-amber-50/20 dark:hover:bg-amber-950/10 transition-all group"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pencil-circle-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.draft"))}</div></div></div><span class="text-base font-bold text-amber-600 dark:text-amber-400 font-mono ml-2 shrink-0">${ssrInterpolate(stats.value.draft)}</span></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-bar-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.posts.stats.views"))}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(formatNumber(stats.value.totalViews))}</span></div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="p-4 border-b border-gray-200/70 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50 dark:bg-[#18181b]/30"><div class="w-full sm:w-80">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchInput.value,
        "onUpdate:modelValue": ($event) => searchInput.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: _ctx.$t("admin.posts.filter.searchPlaceholder"),
        size: "md",
        class: "w-full",
        ui: { base: "rounded-xl" },
        clearable: ""
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-3 w-full sm:w-auto flex-wrap justify-end">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedType.value,
        "onUpdate:modelValue": ($event) => selectedType.value = $event,
        items: typeOptions.value,
        size: "md",
        class: "w-36",
        ui: { base: "rounded-xl" }
      }, null, _parent));
      if (supportedLocales.value.length > 1) {
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: selectedLocale.value,
          "onUpdate:modelValue": ($event) => selectedLocale.value = $event,
          items: localeOptions.value,
          size: "md",
          class: "w-32",
          ui: { base: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedStatus.value,
        "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
        items: statusOptions.value,
        size: "md",
        class: "w-32",
        ui: { base: "rounded-xl" }
      }, null, _parent));
      if (searchKeyword.value || selectedType.value !== "all" || selectedLocale.value !== "all" || selectedStatus.value !== "all") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle",
          size: "md",
          icon: "ph:x",
          class: "rounded-xl",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.posts.empty.clear"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedPosts.value,
        columns: columns.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "image-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-16 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-2xs group relative"${_scopeId}>`);
            if (row.original.imageUrl) {
              _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(String(row.original.imageUrl)))} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"${ssrRenderAttr("alt", String(row.original.title))}${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:image-duotone",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-16 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-2xs group relative" }, [
                row.original.imageUrl ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(buildImageProxyUrl)(String(row.original.imageUrl)),
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  alt: String(row.original.title)
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-500"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:image-duotone",
                    class: "w-5 h-5"
                  })
                ]))
              ])
            ];
          }
        }),
        "title-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-1 py-1 max-w-md"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white leading-snug hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"${_scopeId}>${ssrInterpolate(row.original.title)}</span></div>`);
            if (row.original.description) {
              _push2(`<p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 leading-relaxed"${_scopeId}>${ssrInterpolate(row.original.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-2 flex-wrap pt-0.5"${_scopeId}>`);
            if (row.original.locale) {
              _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded-md uppercase"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:translate",
                class: "w-3 h-3 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(row.original.locale)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-1.5 py-0.5 rounded-md cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors" title="\u70B9\u51FB\u590D\u5236\u94FE\u63A5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:link-simple",
              class: "w-3 h-3 shrink-0"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(getPostUrlPath(row.original))}</span>`);
            if (row.original.key) {
              _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded-md"${_scopeId}> key: ${ssrInterpolate(row.original.key)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (row.original.sort !== null && row.original.sort !== void 0 && row.original.sort !== 0) {
              _push2(`<span class="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded-md"${_scopeId}> sort: ${ssrInterpolate(row.original.sort)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-1 py-1 max-w-md" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", {
                    class: "text-sm font-semibold text-gray-900 dark:text-white leading-snug hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer",
                    onClick: ($event) => editPost(row.original)
                  }, toDisplayString(row.original.title), 9, ["onClick"])
                ]),
                row.original.description ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-xs text-gray-500 dark:text-gray-400 line-clamp-1 leading-relaxed"
                }, toDisplayString(row.original.description), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center gap-2 flex-wrap pt-0.5" }, [
                  row.original.locale ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded-md uppercase"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:translate",
                      class: "w-3 h-3 shrink-0"
                    }),
                    createTextVNode(" " + toDisplayString(row.original.locale), 1)
                  ])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-1.5 py-0.5 rounded-md cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors",
                    onClick: withModifiers(($event) => copyPostUrl(row.original.slug, row.original.locale), ["stop"]),
                    title: "\u70B9\u51FB\u590D\u5236\u94FE\u63A5"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-simple",
                      class: "w-3 h-3 shrink-0"
                    }),
                    createTextVNode(" " + toDisplayString(getPostUrlPath(row.original)), 1)
                  ], 8, ["onClick"]),
                  row.original.key ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded-md"
                  }, " key: " + toDisplayString(row.original.key), 1)) : createCommentVNode("", true),
                  row.original.sort !== null && row.original.sort !== void 0 && row.original.sort !== 0 ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded-md"
                  }, " sort: " + toDisplayString(row.original.sort), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        "type-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: getTypeBadgeColor(row.original.type),
              variant: "subtle",
              size: "sm",
              class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: getTypeBadgeIcon(row.original.type),
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(typeLabel(String(row.original.type)))}`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: getTypeBadgeIcon(row.original.type),
                      class: "w-3.5 h-3.5"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(typeLabel(String(row.original.type))), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: getTypeBadgeColor(row.original.type),
                variant: "subtle",
                size: "sm",
                class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: getTypeBadgeIcon(row.original.type),
                    class: "w-3.5 h-3.5"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(typeLabel(String(row.original.type))), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "views-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-600 dark:text-gray-300 font-mono text-sm inline-flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye-duotone",
              class: "w-4 h-4 text-gray-400 dark:text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(formatNumber(row.original.views || 0))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-600 dark:text-gray-300 font-mono text-sm inline-flex items-center gap-1.5" }, [
                createVNode(_component_UIcon, {
                  name: "ph:eye-duotone",
                  class: "w-4 h-4 text-gray-400 dark:text-gray-500"
                }),
                createTextVNode(" " + toDisplayString(formatNumber(row.original.views || 0)), 1)
              ])
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              "model-value": Boolean(row.original.isActive),
              disabled: !unref(hasAdminPerm)("posts:edit") || togglingId.value === row.original.id,
              size: "sm",
              "onUpdate:modelValue": (val) => togglePostStatus(row.original, val)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UBadge, {
              color: row.original.isActive ? "success" : "neutral",
              variant: "subtle",
              size: "xs",
              class: "font-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_USwitch, {
                  "model-value": Boolean(row.original.isActive),
                  disabled: !unref(hasAdminPerm)("posts:edit") || togglingId.value === row.original.id,
                  size: "sm",
                  "onUpdate:modelValue": (val) => togglePostStatus(row.original, val)
                }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]),
                createVNode(_component_UBadge, {
                  color: row.original.isActive ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs",
                  class: "font-medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.posts.status.published") : _ctx.$t("admin.posts.status.draft")), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ])
            ];
          }
        }),
        "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-xs"${_scopeId}><span class="text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(unref(formatDate)(row.original.createdAt))}</span>`);
            if (row.original.updatedAt && row.original.updatedAt !== row.original.createdAt) {
              _push2(`<span class="text-gray-400 dark:text-gray-500 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatDate)(row.original.updatedAt))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-xs" }, [
                createVNode("span", { class: "text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(unref(formatDate)(row.original.createdAt)), 1),
                row.original.updatedAt && row.original.updatedAt !== row.original.createdAt ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-gray-400 dark:text-gray-500 text-[11px]"
                }, toDisplayString(unref(formatDate)(row.original.updatedAt)), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:arrow-square-out",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.preview"),
              to: getPostPreviewTo(row.original),
              target: "_blank",
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:copy",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.copyLink"),
              onClick: ($event) => copyPostUrl(row.original.slug, row.original.locale),
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:pencil-simple",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.edit"),
              onClick: ($event) => editPost(row.original),
              disabled: !unref(hasAdminPerm)("posts:edit"),
              class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:trash",
              size: "sm",
              title: _ctx.$t("admin.posts.actions.delete"),
              onClick: ($event) => deletePost(row.original.id),
              disabled: !unref(hasAdminPerm)("posts:edit"),
              class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:arrow-square-out",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.preview"),
                  to: getPostPreviewTo(row.original),
                  target: "_blank",
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "to"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.copyLink"),
                  onClick: ($event) => copyPostUrl(row.original.slug, row.original.locale),
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "onClick"]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:pencil-simple",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.edit"),
                  onClick: ($event) => editPost(row.original),
                  disabled: !unref(hasAdminPerm)("posts:edit"),
                  class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                }, null, 8, ["title", "onClick", "disabled"]),
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  icon: "ph:trash",
                  size: "sm",
                  title: _ctx.$t("admin.posts.actions.delete"),
                  onClick: ($event) => deletePost(row.original.id),
                  disabled: !unref(hasAdminPerm)("posts:edit"),
                  class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                }, null, 8, ["title", "onClick", "disabled"])
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 flex flex-col items-center justify-center text-center"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:article-duotone",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.posts.empty.title"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.posts.empty.description"))}</p><div class="mt-4 flex items-center gap-2"${_scopeId}>`);
            if (searchKeyword.value || selectedType.value !== "all" || selectedLocale.value !== "all" || selectedStatus.value !== "all") {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xs",
                class: "rounded-lg",
                onClick: resetFilters
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.empty.clear"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(hasAdminPerm)("posts:edit")) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xs",
                class: "rounded-lg",
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("/admin/posts/create"))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("admin.posts.createPost"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 flex flex-col items-center justify-center text-center" }, [
                createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:article-duotone",
                    class: "w-6 h-6"
                  })
                ]),
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.posts.empty.title")), 1),
                createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs" }, toDisplayString(_ctx.$t("admin.posts.empty.description")), 1),
                createVNode("div", { class: "mt-4 flex items-center gap-2" }, [
                  searchKeyword.value || selectedType.value !== "all" || selectedLocale.value !== "all" || selectedStatus.value !== "all" ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    class: "rounded-lg",
                    onClick: resetFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.empty.clear")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(hasAdminPerm)("posts:edit") ? (openBlock(), createBlock(_component_UButton, {
                    key: 1,
                    color: "primary",
                    size: "xs",
                    class: "rounded-lg",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("/admin/posts/create"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.posts.createPost")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4 border-t border-gray-200/70 dark:border-gray-800/60 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214] rounded-b-2xl"><span class="text-sm text-gray-500 dark:text-gray-400 font-mono text-xs">${ssrInterpolate(_ctx.$t("admin.posts.pagination.showing", {
        from: totalItems.value === 0 ? 0 : Math.min((unref(page) - 1) * unref(pageSize) + 1, totalItems.value),
        to: Math.min(unref(page) * unref(pageSize), totalItems.value),
        total: totalItems.value
      }))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: totalItems.value,
        "items-per-page": unref(pageSize),
        max: 5,
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cbfs9z5q.mjs.map
