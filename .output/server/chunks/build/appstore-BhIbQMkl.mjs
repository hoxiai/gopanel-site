import { e as useToast, i as _sfc_main$R, G as _sfc_main$n, _ as _sfc_main$W, k as _sfc_main$M, b as _sfc_main$v, n as _sfc_main$G, a1 as useAppConfig, a2 as useComponentUI, ao as useLocale, as as createReusableTemplate, a5 as useFormField, a6 as tv, aw as _sfc_main$U, Z as Primitive, b8 as VisuallyHidden_default } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, vModelText, vModelCheckbox, useSlots, useModel, toRefs, watch, toRef, unref, renderSlot, withModifiers, resolveDynamicComponent, withKeys, mergeModels, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import require$$0__default from 'process';
import require$$0$1__default from 'buffer';
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

function parseAcceptToDataTypes(accept) {
  if (!accept || accept === "*") {
    return void 0;
  }
  const types = accept.split(",").map((type) => {
    const trimmedType = type.trim();
    if (trimmedType.includes("/") && trimmedType.endsWith("/*")) {
      return trimmedType.split("/")[0] || trimmedType;
    }
    return trimmedType;
  }).filter((type) => {
    return !type.startsWith(".");
  });
  return types.length > 0 ? types : void 0;
}
function useFileUpload(options) {
  const {
    accept = "*"
  } = options;
  const inputRef = ref();
  const dropzoneRef = ref();
  computed(() => parseAcceptToDataTypes(unref(accept)));
  const isDragging = ref(false);
  const fileDialog = reactive({
    open: () => {
    }
  });
  function open() {
    fileDialog.open();
  }
  return {
    isDragging,
    open,
    inputRef,
    dropzoneRef
  };
}
const theme = {
  "slots": {
    "root": "relative flex flex-col",
    "base": [
      "w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2",
      "transition-[background]"
    ],
    "wrapper": "flex flex-col items-center justify-center text-center",
    "icon": "shrink-0",
    "avatar": "shrink-0",
    "label": "font-medium text-default mt-2",
    "description": "text-muted mt-1",
    "actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
    "files": "",
    "file": "relative",
    "fileLeadingAvatar": "shrink-0",
    "fileWrapper": "flex flex-col min-w-0",
    "fileName": "text-default truncate",
    "fileSize": "text-muted truncate",
    "fileTrailingButton": ""
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "area": {
        "wrapper": "px-4 py-3",
        "base": "p-4"
      },
      "button": {}
    },
    "size": {
      "xs": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2 py-1 gap-1",
        "fileWrapper": "flex-row gap-1"
      },
      "sm": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2.5 py-1.5 gap-1.5",
        "fileWrapper": "flex-row gap-1"
      },
      "md": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-xs px-2.5 py-1.5 gap-1.5"
      },
      "lg": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-sm px-3 py-2 gap-2",
        "fileSize": "text-xs"
      },
      "xl": {
        "base": "text-base",
        "icon": "size-6",
        "file": "text-sm px-3 py-2 gap-2"
      }
    },
    "layout": {
      "list": {
        "root": "gap-2 items-start",
        "files": "flex flex-col w-full gap-2",
        "file": "min-w-0 flex items-center border border-default rounded-md w-full",
        "fileTrailingButton": "ms-auto"
      },
      "grid": {
        "fileWrapper": "hidden",
        "fileLeadingAvatar": "size-full rounded-lg",
        "fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
      }
    },
    "position": {
      "inside": "",
      "outside": ""
    },
    "dropzone": {
      "true": "border-dashed data-[dragging=true]:bg-elevated/25"
    },
    "interactive": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "multiple": {
      "true": ""
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "class": "focus-visible:outline-primary"
    },
    {
      "color": "secondary",
      "class": "focus-visible:outline-secondary"
    },
    {
      "color": "success",
      "class": "focus-visible:outline-success"
    },
    {
      "color": "info",
      "class": "focus-visible:outline-info"
    },
    {
      "color": "warning",
      "class": "focus-visible:outline-warning"
    },
    {
      "color": "error",
      "class": "focus-visible:outline-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "border-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "border-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "border-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "border-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "border-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "border-error"
    },
    {
      "color": "neutral",
      "class": "focus-visible:outline-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "border-inverted"
    },
    {
      "size": "xs",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1"
      }
    },
    {
      "size": "sm",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "md",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "lg",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "size": "xl",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "variant": "button",
      "size": "xs",
      "class": {
        "base": "p-1"
      }
    },
    {
      "variant": "button",
      "size": "sm",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "md",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "lg",
      "class": {
        "base": "p-2"
      }
    },
    {
      "variant": "button",
      "size": "xl",
      "class": {
        "base": "p-2"
      }
    },
    {
      "layout": "grid",
      "multiple": true,
      "class": {
        "files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
        "file": "p-0 aspect-square"
      }
    },
    {
      "layout": "grid",
      "multiple": false,
      "class": {
        "file": "absolute inset-0 p-0"
      }
    },
    {
      "interactive": true,
      "disabled": false,
      "class": "hover:bg-elevated/25"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "area",
    "size": "md"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UFileUpload",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    icon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    layout: { type: null, required: false, default: "grid" },
    position: { type: null, required: false, default: "outside" },
    highlight: { type: Boolean, required: false },
    accept: { type: String, required: false, default: "*" },
    multiple: { type: Boolean, required: false, default: false },
    reset: { type: Boolean, required: false, default: false },
    dropzone: { type: Boolean, required: false, default: true },
    interactive: { type: Boolean, required: false, default: true },
    required: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    fileIcon: { type: null, required: false },
    fileImage: { type: Boolean, required: false, default: true },
    fileDelete: { type: [Boolean, Object], required: false, default: true },
    fileDeleteIcon: { type: null, required: false },
    preview: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("fileUpload", props);
    const { t } = useLocale();
    const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
    const { accept, multiple, reset } = toRefs(props);
    const { isDragging, open, inputRef, dropzoneRef } = useFileUpload({
      accept,
      dropzone: props.dropzone
    });
    const { emitFormInput, emitFormChange, id, name, disabled, ariaAttrs } = useFormField(props);
    const variant = computed(() => props.multiple ? "area" : props.variant);
    const layout = computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
    const position = computed(() => {
      if (layout.value === "grid" && props.multiple) {
        return "inside";
      }
      if (variant.value === "button") {
        return "outside";
      }
      return props.position;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.fileUpload) || {} })({
        dropzone: props.dropzone,
        interactive: props.interactive,
        color: props.color,
        size: props.size,
        variant: variant.value,
        layout: layout.value,
        position: position.value,
        multiple: props.multiple,
        highlight: props.highlight,
        disabled: props.disabled
      });
    });
    function createObjectUrl(file) {
      if (!props.fileImage) return void 0;
      return URL.createObjectURL(file);
    }
    function formatFileSize(bytes) {
      if (bytes === 0) {
        return "0B";
      }
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const size = bytes / Math.pow(k, i);
      const formattedSize = i === 0 ? size.toString() : size.toFixed(0);
      return `${formattedSize}${sizes[i]}`;
    }
    function onUpdate(files, reset2 = false) {
      var _a;
      if (props.multiple) {
        if (reset2) {
          modelValue.value = files;
        } else {
          const existingFiles = modelValue.value || [];
          modelValue.value = [...existingFiles, ...files || []];
        }
      } else {
        modelValue.value = (_a = files == null ? void 0 : files[0]) != null ? _a : null;
      }
      const event = new Event("change", { target: { value: modelValue.value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function removeFile(index) {
      var _a, _b;
      if (!modelValue.value) {
        return;
      }
      if (!props.multiple || index === void 0) {
        onUpdate([], true);
        (_a = dropzoneRef.value) == null ? void 0 : _a.focus();
        return;
      }
      const files = [...modelValue.value];
      files.splice(index, 1);
      onUpdate(files, true);
      (_b = dropzoneRef.value) == null ? void 0 : _b.focus();
    }
    watch(modelValue, (newValue) => {
      var _a;
      const hasModelReset = props.multiple ? !(newValue == null ? void 0 : newValue.length) : !newValue;
      if (hasModelReset && ((_a = inputRef.value) == null ? void 0 : _a.$el)) {
        inputRef.value.$el.value = "";
      }
    });
    __expose({
      inputRef: toRef(() => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.$el;
      }),
      dropzoneRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineFilesTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (props.preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
              _push2(`<!--[-->`);
              ssrRenderSlot(_ctx.$slots, "files-top", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<div data-slot="files" class="${ssrRenderClass(ui.value.files({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.files }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => {
                _push2(`<!--[-->`);
                ssrRenderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                  var _a3;
                  _push2(`<div data-slot="file" class="${ssrRenderClass(ui.value.file({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.file }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "file", {
                    file,
                    index
                  }, () => {
                    var _a4, _b2, _c;
                    ssrRenderSlot(_ctx.$slots, "file-leading", {
                      file,
                      index,
                      ui: ui.value
                    }, () => {
                      var _a5;
                      _push2(ssrRenderComponent(_sfc_main$U, {
                        as: { img: "img" },
                        src: createObjectUrl(file),
                        icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                        size: props.size,
                        "data-slot": "fileLeadingAvatar",
                        class: ui.value.fileLeadingAvatar({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.fileLeadingAvatar })
                      }, null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                    _push2(`<div data-slot="fileWrapper" class="${ssrRenderClass(ui.value.fileWrapper({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.fileWrapper }))}"${_scopeId}><span data-slot="fileName" class="${ssrRenderClass(ui.value.fileName({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.fileName }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-name", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(file.name)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span><span data-slot="fileSize" class="${ssrRenderClass(ui.value.fileSize({ class: (_c = unref(uiProp)) == null ? void 0 : _c.fileSize }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-size", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(formatFileSize(file.size))}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span></div>`);
                    ssrRenderSlot(_ctx.$slots, "file-trailing", {
                      file,
                      index,
                      ui: ui.value
                    }, () => {
                      var _a5;
                      if (__props.fileDelete) {
                        _push2(ssrRenderComponent(_sfc_main$R, mergeProps({ color: "neutral" }, { ref_for: true }, {
                          ...layout.value === "grid" ? {
                            variant: "solid",
                            size: "xs"
                          } : {
                            variant: "link",
                            size: __props.size
                          },
                          ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                        }, {
                          "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                          "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                          "data-slot": "fileTrailingButton",
                          class: ui.value.fileTrailingButton({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.fileTrailingButton }),
                          onClick: ($event) => removeFile(index)
                        }), null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                    }, _push2, _parent2, _scopeId);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              ssrRenderSlot(_ctx.$slots, "files-bottom", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                renderSlot(_ctx.$slots, "files-top", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                }),
                createVNode("div", {
                  "data-slot": "files",
                  class: ui.value.files({ class: (_b = unref(uiProp)) == null ? void 0 : _b.files })
                }, [
                  renderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                      var _a3;
                      return openBlock(), createBlock("div", {
                        key: file.name,
                        "data-slot": "file",
                        class: ui.value.file({ class: (_a3 = unref(uiProp)) == null ? void 0 : _a3.file })
                      }, [
                        renderSlot(_ctx.$slots, "file", {
                          file,
                          index
                        }, () => {
                          var _a4, _b2, _c;
                          return [
                            renderSlot(_ctx.$slots, "file-leading", {
                              file,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a5;
                              return [
                                createVNode(_sfc_main$U, {
                                  as: { img: "img" },
                                  src: createObjectUrl(file),
                                  icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                                  size: props.size,
                                  "data-slot": "fileLeadingAvatar",
                                  class: ui.value.fileLeadingAvatar({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.fileLeadingAvatar })
                                }, null, 8, ["src", "icon", "size", "class"])
                              ];
                            }),
                            createVNode("div", {
                              "data-slot": "fileWrapper",
                              class: ui.value.fileWrapper({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.fileWrapper })
                            }, [
                              createVNode("span", {
                                "data-slot": "fileName",
                                class: ui.value.fileName({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.fileName })
                              }, [
                                renderSlot(_ctx.$slots, "file-name", {
                                  file,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(file.name), 1)
                                ])
                              ], 2),
                              createVNode("span", {
                                "data-slot": "fileSize",
                                class: ui.value.fileSize({ class: (_c = unref(uiProp)) == null ? void 0 : _c.fileSize })
                              }, [
                                renderSlot(_ctx.$slots, "file-size", {
                                  file,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(formatFileSize(file.size)), 1)
                                ])
                              ], 2)
                            ], 2),
                            renderSlot(_ctx.$slots, "file-trailing", {
                              file,
                              index,
                              ui: ui.value
                            }, () => {
                              var _a5;
                              return [
                                __props.fileDelete ? (openBlock(), createBlock(_sfc_main$R, mergeProps({
                                  key: 0,
                                  color: "neutral"
                                }, { ref_for: true }, {
                                  ...layout.value === "grid" ? {
                                    variant: "solid",
                                    size: "xs"
                                  } : {
                                    variant: "link",
                                    size: __props.size
                                  },
                                  ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                                }, {
                                  "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                                  "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                                  "data-slot": "fileTrailingButton",
                                  class: ui.value.fileTrailingButton({ class: (_a5 = unref(uiProp)) == null ? void 0 : _a5.fileTrailingButton }),
                                  onClick: withModifiers(($event) => removeFile(index), ["stop", "prevent"])
                                }), null, 16, ["aria-label", "trailing-icon", "class", "onClick"])) : createCommentVNode("", true)
                              ];
                            })
                          ];
                        })
                      ], 2);
                    }), 128))
                  ])
                ], 2),
                renderSlot(_ctx.$slots, "files-bottom", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                })
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(uiProp)) == null ? void 0 : _a.root, props.class] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              open: unref(open),
              removeFile,
              ui: ui.value
            }, () => {
              var _a2;
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                ref_key: "dropzoneRef",
                ref: dropzoneRef,
                type: variant.value === "button" ? "button" : void 0,
                role: variant.value === "button" ? void 0 : "button",
                "data-dragging": unref(isDragging),
                "data-slot": "base",
                class: ui.value.base({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.base }),
                tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                onKeydown: () => {
                },
                onKeyup: ($event) => __props.interactive && !unref(disabled) && unref(open)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                  if (_push3) {
                    if (position.value === "inside") {
                      _push3(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (position.value === "inside" ? !props.preview || (unref(multiple) ? !((_a3 = modelValue.value) == null ? void 0 : _a3.length) : !modelValue.value) : true) {
                      _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_b = unref(uiProp)) == null ? void 0 : _b.wrapper }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                        var _a4, _b2;
                        if (variant.value === "button") {
                          _push3(ssrRenderComponent(_sfc_main$W, {
                            name: __props.icon || unref(appConfig).ui.icons.upload,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.icon })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_sfc_main$U, {
                            icon: __props.icon || unref(appConfig).ui.icons.upload,
                            size: props.size,
                            "data-slot": "avatar",
                            class: ui.value.avatar({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.avatar })
                          }, null, _parent3, _scopeId2));
                        }
                      }, _push3, _parent3, _scopeId2);
                      if (variant.value !== "button") {
                        _push3(`<!--[-->`);
                        if (__props.label || !!slots.label) {
                          _push3(`<div data-slot="label" class="${ssrRenderClass(ui.value.label({ class: (_c = unref(uiProp)) == null ? void 0 : _c.label }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                            _push3(`${ssrInterpolate(__props.label)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_d = unref(uiProp)) == null ? void 0 : _d.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (!!slots.actions) {
                          _push3(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: (_e = unref(uiProp)) == null ? void 0 : _e.actions }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: unref(open),
                            removeFile
                          }, null, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                      (position.value === "inside" ? !props.preview || (unref(multiple) ? !((_f = modelValue.value) == null ? void 0 : _f.length) : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: (_g = unref(uiProp)) == null ? void 0 : _g.wrapper })
                      }, [
                        renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                          var _a4, _b2;
                          return [
                            variant.value === "button" ? (openBlock(), createBlock(_sfc_main$W, {
                              key: 0,
                              name: __props.icon || unref(appConfig).ui.icons.upload,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.icon })
                            }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$U, {
                              key: 1,
                              icon: __props.icon || unref(appConfig).ui.icons.upload,
                              size: props.size,
                              "data-slot": "avatar",
                              class: ui.value.avatar({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.avatar })
                            }, null, 8, ["icon", "size", "class"]))
                          ];
                        }),
                        variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "label",
                            class: ui.value.label({ class: (_h = unref(uiProp)) == null ? void 0 : _h.label })
                          }, [
                            renderSlot(_ctx.$slots, "label", {}, () => [
                              createTextVNode(toDisplayString(__props.label), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "description",
                            class: ui.value.description({ class: (_i = unref(uiProp)) == null ? void 0 : _i.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.actions ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "actions",
                            class: ui.value.actions({ class: (_j = unref(uiProp)) == null ? void 0 : _j.actions })
                          }, [
                            renderSlot(_ctx.$slots, "actions", {
                              files: modelValue.value,
                              open: unref(open),
                              removeFile
                            })
                          ], 2)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 3
              }), _parent2, _scopeId);
              if (position.value === "outside") {
                _push2(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(VisuallyHidden_default), mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              as: "input",
              type: "file",
              feature: "fully-hidden",
              name: unref(name),
              accept: unref(accept),
              multiple: unref(multiple),
              required: __props.required,
              disabled: unref(disabled)
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                open: unref(open),
                removeFile,
                ui: ui.value
              }, () => {
                var _a2;
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                    ref_key: "dropzoneRef",
                    ref: dropzoneRef,
                    type: variant.value === "button" ? "button" : void 0,
                    role: variant.value === "button" ? void 0 : "button",
                    "data-dragging": unref(isDragging),
                    "data-slot": "base",
                    class: ui.value.base({ class: (_a2 = unref(uiProp)) == null ? void 0 : _a2.base }),
                    tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                    onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                    onKeydown: withKeys(withModifiers(() => {
                    }, ["prevent"]), ["space"]),
                    onKeyup: withKeys(($event) => __props.interactive && !unref(disabled) && unref(open)(), ["enter", "space"])
                  }, {
                    default: withCtx(() => {
                      var _a3, _b, _c, _d, _e;
                      return [
                        position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                        (position.value === "inside" ? !props.preview || (unref(multiple) ? !((_a3 = modelValue.value) == null ? void 0 : _a3.length) : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "wrapper",
                          class: ui.value.wrapper({ class: (_b = unref(uiProp)) == null ? void 0 : _b.wrapper })
                        }, [
                          renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                            var _a4, _b2;
                            return [
                              variant.value === "button" ? (openBlock(), createBlock(_sfc_main$W, {
                                key: 0,
                                name: __props.icon || unref(appConfig).ui.icons.upload,
                                "data-slot": "icon",
                                class: ui.value.icon({ class: (_a4 = unref(uiProp)) == null ? void 0 : _a4.icon })
                              }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$U, {
                                key: 1,
                                icon: __props.icon || unref(appConfig).ui.icons.upload,
                                size: props.size,
                                "data-slot": "avatar",
                                class: ui.value.avatar({ class: (_b2 = unref(uiProp)) == null ? void 0 : _b2.avatar })
                              }, null, 8, ["icon", "size", "class"]))
                            ];
                          }),
                          variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: (_c = unref(uiProp)) == null ? void 0 : _c.label })
                            }, [
                              renderSlot(_ctx.$slots, "label", {}, () => [
                                createTextVNode(toDisplayString(__props.label), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "description",
                              class: ui.value.description({ class: (_d = unref(uiProp)) == null ? void 0 : _d.description })
                            }, [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.actions ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "actions",
                              class: ui.value.actions({ class: (_e = unref(uiProp)) == null ? void 0 : _e.actions })
                            }, [
                              renderSlot(_ctx.$slots, "actions", {
                                files: modelValue.value,
                                open: unref(open),
                                removeFile
                              })
                            ], 2)) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true)
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 40, ["type", "role", "data-dragging", "class", "tabindex", "onClick", "onKeydown", "onKeyup"])),
                  position.value === "outside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true)
                ];
              }),
              createVNode(unref(VisuallyHidden_default), mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                as: "input",
                type: "file",
                feature: "fully-hidden",
                name: unref(name),
                accept: unref(accept),
                multiple: unref(multiple),
                required: __props.required,
                disabled: unref(disabled)
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), null, 16, ["id", "name", "accept", "multiple", "required", "disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dist = {};
var composer = {};
var directives = {};
var identity = {};
var hasRequiredIdentity;
function requireIdentity() {
  if (hasRequiredIdentity) return identity;
  hasRequiredIdentity = 1;
  const ALIAS = /* @__PURE__ */ Symbol.for("yaml.alias");
  const DOC = /* @__PURE__ */ Symbol.for("yaml.document");
  const MAP = /* @__PURE__ */ Symbol.for("yaml.map");
  const PAIR = /* @__PURE__ */ Symbol.for("yaml.pair");
  const SCALAR = /* @__PURE__ */ Symbol.for("yaml.scalar");
  const SEQ = /* @__PURE__ */ Symbol.for("yaml.seq");
  const NODE_TYPE = /* @__PURE__ */ Symbol.for("yaml.node.type");
  const isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
  const isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
  const isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
  const isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
  const isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
  const isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
  function isCollection(node) {
    if (node && typeof node === "object")
      switch (node[NODE_TYPE]) {
        case MAP:
        case SEQ:
          return true;
      }
    return false;
  }
  function isNode(node) {
    if (node && typeof node === "object")
      switch (node[NODE_TYPE]) {
        case ALIAS:
        case MAP:
        case SCALAR:
        case SEQ:
          return true;
      }
    return false;
  }
  const hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
  identity.ALIAS = ALIAS;
  identity.DOC = DOC;
  identity.MAP = MAP;
  identity.NODE_TYPE = NODE_TYPE;
  identity.PAIR = PAIR;
  identity.SCALAR = SCALAR;
  identity.SEQ = SEQ;
  identity.hasAnchor = hasAnchor;
  identity.isAlias = isAlias;
  identity.isCollection = isCollection;
  identity.isDocument = isDocument;
  identity.isMap = isMap;
  identity.isNode = isNode;
  identity.isPair = isPair;
  identity.isScalar = isScalar;
  identity.isSeq = isSeq;
  return identity;
}
var visit = {};
var hasRequiredVisit;
function requireVisit() {
  if (hasRequiredVisit) return visit;
  hasRequiredVisit = 1;
  var identity2 = requireIdentity();
  const BREAK = /* @__PURE__ */ Symbol("break visit");
  const SKIP = /* @__PURE__ */ Symbol("skip children");
  const REMOVE = /* @__PURE__ */ Symbol("remove node");
  function visit$1(node, visitor) {
    const visitor_ = initVisitor(visitor);
    if (identity2.isDocument(node)) {
      const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
      if (cd === REMOVE)
        node.contents = null;
    } else
      visit_(null, node, visitor_, Object.freeze([]));
  }
  visit$1.BREAK = BREAK;
  visit$1.SKIP = SKIP;
  visit$1.REMOVE = REMOVE;
  function visit_(key, node, visitor, path) {
    const ctrl = callVisitor(key, node, visitor, path);
    if (identity2.isNode(ctrl) || identity2.isPair(ctrl)) {
      replaceNode(key, path, ctrl);
      return visit_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== "symbol") {
      if (identity2.isCollection(node)) {
        path = Object.freeze(path.concat(node));
        for (let i = 0; i < node.items.length; ++i) {
          const ci = visit_(i, node.items[i], visitor, path);
          if (typeof ci === "number")
            i = ci - 1;
          else if (ci === BREAK)
            return BREAK;
          else if (ci === REMOVE) {
            node.items.splice(i, 1);
            i -= 1;
          }
        }
      } else if (identity2.isPair(node)) {
        path = Object.freeze(path.concat(node));
        const ck = visit_("key", node.key, visitor, path);
        if (ck === BREAK)
          return BREAK;
        else if (ck === REMOVE)
          node.key = null;
        const cv = visit_("value", node.value, visitor, path);
        if (cv === BREAK)
          return BREAK;
        else if (cv === REMOVE)
          node.value = null;
      }
    }
    return ctrl;
  }
  async function visitAsync(node, visitor) {
    const visitor_ = initVisitor(visitor);
    if (identity2.isDocument(node)) {
      const cd = await visitAsync_(null, node.contents, visitor_, Object.freeze([node]));
      if (cd === REMOVE)
        node.contents = null;
    } else
      await visitAsync_(null, node, visitor_, Object.freeze([]));
  }
  visitAsync.BREAK = BREAK;
  visitAsync.SKIP = SKIP;
  visitAsync.REMOVE = REMOVE;
  async function visitAsync_(key, node, visitor, path) {
    const ctrl = await callVisitor(key, node, visitor, path);
    if (identity2.isNode(ctrl) || identity2.isPair(ctrl)) {
      replaceNode(key, path, ctrl);
      return visitAsync_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== "symbol") {
      if (identity2.isCollection(node)) {
        path = Object.freeze(path.concat(node));
        for (let i = 0; i < node.items.length; ++i) {
          const ci = await visitAsync_(i, node.items[i], visitor, path);
          if (typeof ci === "number")
            i = ci - 1;
          else if (ci === BREAK)
            return BREAK;
          else if (ci === REMOVE) {
            node.items.splice(i, 1);
            i -= 1;
          }
        }
      } else if (identity2.isPair(node)) {
        path = Object.freeze(path.concat(node));
        const ck = await visitAsync_("key", node.key, visitor, path);
        if (ck === BREAK)
          return BREAK;
        else if (ck === REMOVE)
          node.key = null;
        const cv = await visitAsync_("value", node.value, visitor, path);
        if (cv === BREAK)
          return BREAK;
        else if (cv === REMOVE)
          node.value = null;
      }
    }
    return ctrl;
  }
  function initVisitor(visitor) {
    if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
      return Object.assign({
        Alias: visitor.Node,
        Map: visitor.Node,
        Scalar: visitor.Node,
        Seq: visitor.Node
      }, visitor.Value && {
        Map: visitor.Value,
        Scalar: visitor.Value,
        Seq: visitor.Value
      }, visitor.Collection && {
        Map: visitor.Collection,
        Seq: visitor.Collection
      }, visitor);
    }
    return visitor;
  }
  function callVisitor(key, node, visitor, path) {
    var _a, _b, _c, _d, _e;
    if (typeof visitor === "function")
      return visitor(key, node, path);
    if (identity2.isMap(node))
      return (_a = visitor.Map) == null ? void 0 : _a.call(visitor, key, node, path);
    if (identity2.isSeq(node))
      return (_b = visitor.Seq) == null ? void 0 : _b.call(visitor, key, node, path);
    if (identity2.isPair(node))
      return (_c = visitor.Pair) == null ? void 0 : _c.call(visitor, key, node, path);
    if (identity2.isScalar(node))
      return (_d = visitor.Scalar) == null ? void 0 : _d.call(visitor, key, node, path);
    if (identity2.isAlias(node))
      return (_e = visitor.Alias) == null ? void 0 : _e.call(visitor, key, node, path);
    return void 0;
  }
  function replaceNode(key, path, node) {
    const parent = path[path.length - 1];
    if (identity2.isCollection(parent)) {
      parent.items[key] = node;
    } else if (identity2.isPair(parent)) {
      if (key === "key")
        parent.key = node;
      else
        parent.value = node;
    } else if (identity2.isDocument(parent)) {
      parent.contents = node;
    } else {
      const pt = identity2.isAlias(parent) ? "alias" : "scalar";
      throw new Error(`Cannot replace node with ${pt} parent`);
    }
  }
  visit.visit = visit$1;
  visit.visitAsync = visitAsync;
  return visit;
}
var hasRequiredDirectives;
function requireDirectives() {
  if (hasRequiredDirectives) return directives;
  hasRequiredDirectives = 1;
  var identity2 = requireIdentity();
  var visit2 = requireVisit();
  const escapeChars = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
  };
  const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
  class Directives {
    constructor(yaml, tags2) {
      this.docStart = null;
      this.docEnd = false;
      this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
      this.tags = Object.assign({}, Directives.defaultTags, tags2);
    }
    clone() {
      const copy = new Directives(this.yaml, this.tags);
      copy.docStart = this.docStart;
      return copy;
    }
    /**
     * During parsing, get a Directives instance for the current document and
     * update the stream state according to the current version's spec.
     */
    atDocument() {
      const res = new Directives(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = true;
          break;
        case "1.2":
          this.atNextDocument = false;
          this.yaml = {
            explicit: Directives.defaultYaml.explicit,
            version: "1.2"
          };
          this.tags = Object.assign({}, Directives.defaultTags);
          break;
      }
      return res;
    }
    /**
     * @param onError - May be called even if the action was successful
     * @returns `true` on success
     */
    add(line, onError) {
      if (this.atNextDocument) {
        this.yaml = { explicit: Directives.defaultYaml.explicit, version: "1.1" };
        this.tags = Object.assign({}, Directives.defaultTags);
        this.atNextDocument = false;
      }
      const parts = line.trim().split(/[ \t]+/);
      const name = parts.shift();
      switch (name) {
        case "%TAG": {
          if (parts.length !== 2) {
            onError(0, "%TAG directive should contain exactly two parts");
            if (parts.length < 2)
              return false;
          }
          const [handle, prefix] = parts;
          this.tags[handle] = prefix;
          return true;
        }
        case "%YAML": {
          this.yaml.explicit = true;
          if (parts.length !== 1) {
            onError(0, "%YAML directive should contain exactly one part");
            return false;
          }
          const [version] = parts;
          if (version === "1.1" || version === "1.2") {
            this.yaml.version = version;
            return true;
          } else {
            const isValid = /^\d+\.\d+$/.test(version);
            onError(6, `Unsupported YAML version ${version}`, isValid);
            return false;
          }
        }
        default:
          onError(0, `Unknown directive ${name}`, true);
          return false;
      }
    }
    /**
     * Resolves a tag, matching handles to those defined in %TAG directives.
     *
     * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
     *   `'!local'` tag, or `null` if unresolvable.
     */
    tagName(source, onError) {
      if (source === "!")
        return "!";
      if (source[0] !== "!") {
        onError(`Not a valid tag: ${source}`);
        return null;
      }
      if (source[1] === "<") {
        const verbatim = source.slice(2, -1);
        if (verbatim === "!" || verbatim === "!!") {
          onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
          return null;
        }
        if (source[source.length - 1] !== ">")
          onError("Verbatim tags must end with a >");
        return verbatim;
      }
      const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
      if (!suffix)
        onError(`The ${source} tag has no suffix`);
      const prefix = this.tags[handle];
      if (prefix) {
        try {
          return prefix + decodeURIComponent(suffix);
        } catch (error) {
          onError(String(error));
          return null;
        }
      }
      if (handle === "!")
        return source;
      onError(`Could not resolve tag: ${source}`);
      return null;
    }
    /**
     * Given a fully resolved tag, returns its printable string form,
     * taking into account current tag prefixes and defaults.
     */
    tagString(tag) {
      for (const [handle, prefix] of Object.entries(this.tags)) {
        if (tag.startsWith(prefix))
          return handle + escapeTagName(tag.substring(prefix.length));
      }
      return tag[0] === "!" ? tag : `!<${tag}>`;
    }
    toString(doc) {
      const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
      const tagEntries = Object.entries(this.tags);
      let tagNames;
      if (doc && tagEntries.length > 0 && identity2.isNode(doc.contents)) {
        const tags2 = {};
        visit2.visit(doc.contents, (_key, node) => {
          if (identity2.isNode(node) && node.tag)
            tags2[node.tag] = true;
        });
        tagNames = Object.keys(tags2);
      } else
        tagNames = [];
      for (const [handle, prefix] of tagEntries) {
        if (handle === "!!" && prefix === "tag:yaml.org,2002:")
          continue;
        if (!doc || tagNames.some((tn) => tn.startsWith(prefix)))
          lines.push(`%TAG ${handle} ${prefix}`);
      }
      return lines.join("\n");
    }
  }
  Directives.defaultYaml = { explicit: false, version: "1.2" };
  Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
  directives.Directives = Directives;
  return directives;
}
var Document = {};
var Alias = {};
var anchors = {};
var hasRequiredAnchors;
function requireAnchors() {
  if (hasRequiredAnchors) return anchors;
  hasRequiredAnchors = 1;
  var identity2 = requireIdentity();
  var visit2 = requireVisit();
  function anchorIsValid(anchor) {
    if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
      const sa = JSON.stringify(anchor);
      const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
      throw new Error(msg);
    }
    return true;
  }
  function anchorNames(root) {
    const anchors2 = /* @__PURE__ */ new Set();
    visit2.visit(root, {
      Value(_key, node) {
        if (node.anchor)
          anchors2.add(node.anchor);
      }
    });
    return anchors2;
  }
  function findNewAnchor(prefix, exclude) {
    for (let i = 1; true; ++i) {
      const name = `${prefix}${i}`;
      if (!exclude.has(name))
        return name;
    }
  }
  function createNodeAnchors(doc, prefix) {
    const aliasObjects = [];
    const sourceObjects = /* @__PURE__ */ new Map();
    let prevAnchors = null;
    return {
      onAnchor: (source) => {
        aliasObjects.push(source);
        prevAnchors != null ? prevAnchors : prevAnchors = anchorNames(doc);
        const anchor = findNewAnchor(prefix, prevAnchors);
        prevAnchors.add(anchor);
        return anchor;
      },
      /**
       * With circular references, the source node is only resolved after all
       * of its child nodes are. This is why anchors are set only after all of
       * the nodes have been created.
       */
      setAnchors: () => {
        for (const source of aliasObjects) {
          const ref2 = sourceObjects.get(source);
          if (typeof ref2 === "object" && ref2.anchor && (identity2.isScalar(ref2.node) || identity2.isCollection(ref2.node))) {
            ref2.node.anchor = ref2.anchor;
          } else {
            const error = new Error("Failed to resolve repeated object (this should not happen)");
            error.source = source;
            throw error;
          }
        }
      },
      sourceObjects
    };
  }
  anchors.anchorIsValid = anchorIsValid;
  anchors.anchorNames = anchorNames;
  anchors.createNodeAnchors = createNodeAnchors;
  anchors.findNewAnchor = findNewAnchor;
  return anchors;
}
var Node = {};
var applyReviver = {};
var hasRequiredApplyReviver;
function requireApplyReviver() {
  if (hasRequiredApplyReviver) return applyReviver;
  hasRequiredApplyReviver = 1;
  function applyReviver$1(reviver, obj, key, val) {
    if (val && typeof val === "object") {
      if (Array.isArray(val)) {
        for (let i = 0, len = val.length; i < len; ++i) {
          const v0 = val[i];
          const v1 = applyReviver$1(reviver, val, String(i), v0);
          if (v1 === void 0)
            delete val[i];
          else if (v1 !== v0)
            val[i] = v1;
        }
      } else if (val instanceof Map) {
        for (const k of Array.from(val.keys())) {
          const v0 = val.get(k);
          const v1 = applyReviver$1(reviver, val, k, v0);
          if (v1 === void 0)
            val.delete(k);
          else if (v1 !== v0)
            val.set(k, v1);
        }
      } else if (val instanceof Set) {
        for (const v0 of Array.from(val)) {
          const v1 = applyReviver$1(reviver, val, v0, v0);
          if (v1 === void 0)
            val.delete(v0);
          else if (v1 !== v0) {
            val.delete(v0);
            val.add(v1);
          }
        }
      } else {
        for (const [k, v0] of Object.entries(val)) {
          const v1 = applyReviver$1(reviver, val, k, v0);
          if (v1 === void 0)
            delete val[k];
          else if (v1 !== v0)
            val[k] = v1;
        }
      }
    }
    return reviver.call(obj, key, val);
  }
  applyReviver.applyReviver = applyReviver$1;
  return applyReviver;
}
var toJS = {};
var hasRequiredToJS;
function requireToJS() {
  if (hasRequiredToJS) return toJS;
  hasRequiredToJS = 1;
  var identity2 = requireIdentity();
  function toJS$1(value, arg, ctx) {
    if (Array.isArray(value))
      return value.map((v, i) => toJS$1(v, String(i), ctx));
    if (value && typeof value.toJSON === "function") {
      if (!ctx || !identity2.hasAnchor(value))
        return value.toJSON(arg, ctx);
      const data = { aliasCount: 0, count: 1, res: void 0 };
      ctx.anchors.set(value, data);
      ctx.onCreate = (res2) => {
        data.res = res2;
        delete ctx.onCreate;
      };
      const res = value.toJSON(arg, ctx);
      if (ctx.onCreate)
        ctx.onCreate(res);
      return res;
    }
    if (typeof value === "bigint" && !(ctx == null ? void 0 : ctx.keep))
      return Number(value);
    return value;
  }
  toJS.toJS = toJS$1;
  return toJS;
}
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return Node;
  hasRequiredNode = 1;
  var applyReviver2 = requireApplyReviver();
  var identity2 = requireIdentity();
  var toJS2 = requireToJS();
  class NodeBase {
    constructor(type) {
      Object.defineProperty(this, identity2.NODE_TYPE, { value: type });
    }
    /** Create a copy of this node.  */
    clone() {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    /** A plain JavaScript representation of this node. */
    toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      if (!identity2.isDocument(doc))
        throw new TypeError("A document argument is required");
      const ctx = {
        anchors: /* @__PURE__ */ new Map(),
        doc,
        keep: true,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS2.toJS(this, "", ctx);
      if (typeof onAnchor === "function")
        for (const { count, res: res2 } of ctx.anchors.values())
          onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver2.applyReviver(reviver, { "": res }, "", res) : res;
    }
  }
  Node.NodeBase = NodeBase;
  return Node;
}
var hasRequiredAlias;
function requireAlias() {
  if (hasRequiredAlias) return Alias;
  hasRequiredAlias = 1;
  var anchors2 = requireAnchors();
  var visit2 = requireVisit();
  var identity2 = requireIdentity();
  var Node2 = requireNode();
  var toJS2 = requireToJS();
  let Alias$1 = class Alias extends Node2.NodeBase {
    constructor(source) {
      super(identity2.ALIAS);
      this.source = source;
      Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags");
        }
      });
    }
    /**
     * Resolve the value of this alias within `doc`, finding the last
     * instance of the `source` anchor before this node.
     */
    resolve(doc, ctx) {
      if ((ctx == null ? void 0 : ctx.maxAliasCount) === 0)
        throw new ReferenceError("Alias resolution is disabled");
      let nodes;
      if (ctx == null ? void 0 : ctx.aliasResolveCache) {
        nodes = ctx.aliasResolveCache;
      } else {
        nodes = [];
        visit2.visit(doc, {
          Node: (_key, node) => {
            if (identity2.isAlias(node) || identity2.hasAnchor(node))
              nodes.push(node);
          }
        });
        if (ctx)
          ctx.aliasResolveCache = nodes;
      }
      let found = void 0;
      for (const node of nodes) {
        if (node === this)
          break;
        if (node.anchor === this.source)
          found = node;
      }
      return found;
    }
    toJSON(_arg, ctx) {
      if (!ctx)
        return { source: this.source };
      const { anchors: anchors3, doc, maxAliasCount } = ctx;
      const source = this.resolve(doc, ctx);
      if (!source) {
        const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(msg);
      }
      let data = anchors3.get(source);
      if (!data) {
        toJS2.toJS(source, null, ctx);
        data = anchors3.get(source);
      }
      if ((data == null ? void 0 : data.res) === void 0) {
        const msg = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(msg);
      }
      if (maxAliasCount >= 0) {
        data.count += 1;
        if (data.aliasCount === 0)
          data.aliasCount = getAliasCount(doc, source, anchors3);
        if (data.count * data.aliasCount > maxAliasCount) {
          const msg = "Excessive alias count indicates a resource exhaustion attack";
          throw new ReferenceError(msg);
        }
      }
      return data.res;
    }
    toString(ctx, _onComment, _onChompKeep) {
      const src = `*${this.source}`;
      if (ctx) {
        anchors2.anchorIsValid(this.source);
        if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
          const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(msg);
        }
        if (ctx.implicitKey)
          return `${src} `;
      }
      return src;
    }
  };
  function getAliasCount(doc, node, anchors3) {
    if (identity2.isAlias(node)) {
      const source = node.resolve(doc);
      const anchor = anchors3 && source && anchors3.get(source);
      return anchor ? anchor.count * anchor.aliasCount : 0;
    } else if (identity2.isCollection(node)) {
      let count = 0;
      for (const item of node.items) {
        const c = getAliasCount(doc, item, anchors3);
        if (c > count)
          count = c;
      }
      return count;
    } else if (identity2.isPair(node)) {
      const kc = getAliasCount(doc, node.key, anchors3);
      const vc = getAliasCount(doc, node.value, anchors3);
      return Math.max(kc, vc);
    }
    return 1;
  }
  Alias.Alias = Alias$1;
  return Alias;
}
var Collection = {};
var createNode = {};
var Scalar = {};
var hasRequiredScalar;
function requireScalar() {
  if (hasRequiredScalar) return Scalar;
  hasRequiredScalar = 1;
  var identity2 = requireIdentity();
  var Node2 = requireNode();
  var toJS2 = requireToJS();
  const isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
  let Scalar$1 = class Scalar extends Node2.NodeBase {
    constructor(value) {
      super(identity2.SCALAR);
      this.value = value;
    }
    toJSON(arg, ctx) {
      return (ctx == null ? void 0 : ctx.keep) ? this.value : toJS2.toJS(this.value, arg, ctx);
    }
    toString() {
      return String(this.value);
    }
  };
  Scalar$1.BLOCK_FOLDED = "BLOCK_FOLDED";
  Scalar$1.BLOCK_LITERAL = "BLOCK_LITERAL";
  Scalar$1.PLAIN = "PLAIN";
  Scalar$1.QUOTE_DOUBLE = "QUOTE_DOUBLE";
  Scalar$1.QUOTE_SINGLE = "QUOTE_SINGLE";
  Scalar.Scalar = Scalar$1;
  Scalar.isScalarValue = isScalarValue;
  return Scalar;
}
var hasRequiredCreateNode;
function requireCreateNode() {
  if (hasRequiredCreateNode) return createNode;
  hasRequiredCreateNode = 1;
  var Alias2 = requireAlias();
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  const defaultTagPrefix = "tag:yaml.org,2002:";
  function findTagObject(value, tagName, tags2) {
    var _a;
    if (tagName) {
      const match = tags2.filter((t) => t.tag === tagName);
      const tagObj = (_a = match.find((t) => !t.format)) != null ? _a : match[0];
      if (!tagObj)
        throw new Error(`Tag ${tagName} not found`);
      return tagObj;
    }
    return tags2.find((t) => {
      var _a2;
      return ((_a2 = t.identify) == null ? void 0 : _a2.call(t, value)) && !t.format;
    });
  }
  function createNode$1(value, tagName, ctx) {
    var _a, _b, _c, _d;
    if (identity2.isDocument(value))
      value = value.contents;
    if (identity2.isNode(value))
      return value;
    if (identity2.isPair(value)) {
      const map2 = (_b = (_a = ctx.schema[identity2.MAP]).createNode) == null ? void 0 : _b.call(_a, ctx.schema, null, ctx);
      map2.items.push(value);
      return map2;
    }
    if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
      value = value.valueOf();
    }
    const { aliasDuplicateObjects, onAnchor, onTagObj, schema: schema2, sourceObjects } = ctx;
    let ref2 = void 0;
    if (aliasDuplicateObjects && value && typeof value === "object") {
      ref2 = sourceObjects.get(value);
      if (ref2) {
        (_c = ref2.anchor) != null ? _c : ref2.anchor = onAnchor(value);
        return new Alias2.Alias(ref2.anchor);
      } else {
        ref2 = { anchor: null, node: null };
        sourceObjects.set(value, ref2);
      }
    }
    if (tagName == null ? void 0 : tagName.startsWith("!!"))
      tagName = defaultTagPrefix + tagName.slice(2);
    let tagObj = findTagObject(value, tagName, schema2.tags);
    if (!tagObj) {
      if (value && typeof value.toJSON === "function") {
        value = value.toJSON();
      }
      if (!value || typeof value !== "object") {
        const node2 = new Scalar2.Scalar(value);
        if (ref2)
          ref2.node = node2;
        return node2;
      }
      tagObj = value instanceof Map ? schema2[identity2.MAP] : Symbol.iterator in Object(value) ? schema2[identity2.SEQ] : schema2[identity2.MAP];
    }
    if (onTagObj) {
      onTagObj(tagObj);
      delete ctx.onTagObj;
    }
    const node = (tagObj == null ? void 0 : tagObj.createNode) ? tagObj.createNode(ctx.schema, value, ctx) : typeof ((_d = tagObj == null ? void 0 : tagObj.nodeClass) == null ? void 0 : _d.from) === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar2.Scalar(value);
    if (tagName)
      node.tag = tagName;
    else if (!tagObj.default)
      node.tag = tagObj.tag;
    if (ref2)
      ref2.node = node;
    return node;
  }
  createNode.createNode = createNode$1;
  return createNode;
}
var hasRequiredCollection;
function requireCollection() {
  if (hasRequiredCollection) return Collection;
  hasRequiredCollection = 1;
  var createNode2 = requireCreateNode();
  var identity2 = requireIdentity();
  var Node2 = requireNode();
  function collectionFromPath(schema2, path, value) {
    let v = value;
    for (let i = path.length - 1; i >= 0; --i) {
      const k = path[i];
      if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
        const a = [];
        a[k] = v;
        v = a;
      } else {
        v = /* @__PURE__ */ new Map([[k, v]]);
      }
    }
    return createNode2.createNode(v, void 0, {
      aliasDuplicateObjects: false,
      keepUndefined: false,
      onAnchor: () => {
        throw new Error("This should not happen, please report a bug.");
      },
      schema: schema2,
      sourceObjects: /* @__PURE__ */ new Map()
    });
  }
  const isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
  let Collection$1 = class Collection extends Node2.NodeBase {
    constructor(type, schema2) {
      super(type);
      Object.defineProperty(this, "schema", {
        value: schema2,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    /**
     * Create a copy of this collection.
     *
     * @param schema - If defined, overwrites the original's schema
     */
    clone(schema2) {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (schema2)
        copy.schema = schema2;
      copy.items = copy.items.map((it) => identity2.isNode(it) || identity2.isPair(it) ? it.clone(schema2) : it);
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    /**
     * Adds a value to the collection. For `!!map` and `!!omap` the value must
     * be a Pair instance or a `{ key, value }` object, which may not have a key
     * that already exists in the map.
     */
    addIn(path, value) {
      if (isEmptyPath(path))
        this.add(value);
      else {
        const [key, ...rest] = path;
        const node = this.get(key, true);
        if (identity2.isCollection(node))
          node.addIn(rest, value);
        else if (node === void 0 && this.schema)
          this.set(key, collectionFromPath(this.schema, rest, value));
        else
          throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
    /**
     * Removes a value from the collection.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path) {
      const [key, ...rest] = path;
      if (rest.length === 0)
        return this.delete(key);
      const node = this.get(key, true);
      if (identity2.isCollection(node))
        return node.deleteIn(rest);
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path, keepScalar) {
      const [key, ...rest] = path;
      const node = this.get(key, true);
      if (rest.length === 0)
        return !keepScalar && identity2.isScalar(node) ? node.value : node;
      else
        return identity2.isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
    }
    hasAllNullValues(allowScalar) {
      return this.items.every((node) => {
        if (!identity2.isPair(node))
          return false;
        const n = node.value;
        return n == null || allowScalar && identity2.isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     */
    hasIn(path) {
      const [key, ...rest] = path;
      if (rest.length === 0)
        return this.has(key);
      const node = this.get(key, true);
      return identity2.isCollection(node) ? node.hasIn(rest) : false;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path, value) {
      const [key, ...rest] = path;
      if (rest.length === 0) {
        this.set(key, value);
      } else {
        const node = this.get(key, true);
        if (identity2.isCollection(node))
          node.setIn(rest, value);
        else if (node === void 0 && this.schema)
          this.set(key, collectionFromPath(this.schema, rest, value));
        else
          throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
  };
  Collection.Collection = Collection$1;
  Collection.collectionFromPath = collectionFromPath;
  Collection.isEmptyPath = isEmptyPath;
  return Collection;
}
var Pair = {};
var stringifyPair = {};
var stringify = {};
var stringifyComment = {};
var hasRequiredStringifyComment;
function requireStringifyComment() {
  if (hasRequiredStringifyComment) return stringifyComment;
  hasRequiredStringifyComment = 1;
  const stringifyComment$1 = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
  function indentComment(comment, indent) {
    if (/^\n+$/.test(comment))
      return comment.substring(1);
    return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
  }
  const lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
  stringifyComment.indentComment = indentComment;
  stringifyComment.lineComment = lineComment;
  stringifyComment.stringifyComment = stringifyComment$1;
  return stringifyComment;
}
var stringifyString = {};
var foldFlowLines = {};
var hasRequiredFoldFlowLines;
function requireFoldFlowLines() {
  if (hasRequiredFoldFlowLines) return foldFlowLines;
  hasRequiredFoldFlowLines = 1;
  const FOLD_FLOW = "flow";
  const FOLD_BLOCK = "block";
  const FOLD_QUOTED = "quoted";
  function foldFlowLines$1(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
    if (!lineWidth || lineWidth < 0)
      return text;
    if (lineWidth < minContentWidth)
      minContentWidth = 0;
    const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
    if (text.length <= endStep)
      return text;
    const folds = [];
    const escapedFolds = {};
    let end = lineWidth - indent.length;
    if (typeof indentAtStart === "number") {
      if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
        folds.push(0);
      else
        end = lineWidth - indentAtStart;
    }
    let split = void 0;
    let prev = void 0;
    let overflow = false;
    let i = -1;
    let escStart = -1;
    let escEnd = -1;
    if (mode === FOLD_BLOCK) {
      i = consumeMoreIndentedLines(text, i, indent.length);
      if (i !== -1)
        end = i + endStep;
    }
    for (let ch; ch = text[i += 1]; ) {
      if (mode === FOLD_QUOTED && ch === "\\") {
        escStart = i;
        switch (text[i + 1]) {
          case "x":
            i += 3;
            break;
          case "u":
            i += 5;
            break;
          case "U":
            i += 9;
            break;
          default:
            i += 1;
        }
        escEnd = i;
      }
      if (ch === "\n") {
        if (mode === FOLD_BLOCK)
          i = consumeMoreIndentedLines(text, i, indent.length);
        end = i + indent.length + endStep;
        split = void 0;
      } else {
        if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
          const next = text[i + 1];
          if (next && next !== " " && next !== "\n" && next !== "	")
            split = i;
        }
        if (i >= end) {
          if (split) {
            folds.push(split);
            end = split + endStep;
            split = void 0;
          } else if (mode === FOLD_QUOTED) {
            while (prev === " " || prev === "	") {
              prev = ch;
              ch = text[i += 1];
              overflow = true;
            }
            const j = i > escEnd + 1 ? i - 2 : escStart - 1;
            if (escapedFolds[j])
              return text;
            folds.push(j);
            escapedFolds[j] = true;
            end = j + endStep;
            split = void 0;
          } else {
            overflow = true;
          }
        }
      }
      prev = ch;
    }
    if (overflow && onOverflow)
      onOverflow();
    if (folds.length === 0)
      return text;
    if (onFold)
      onFold();
    let res = text.slice(0, folds[0]);
    for (let i2 = 0; i2 < folds.length; ++i2) {
      const fold = folds[i2];
      const end2 = folds[i2 + 1] || text.length;
      if (fold === 0)
        res = `
${indent}${text.slice(0, end2)}`;
      else {
        if (mode === FOLD_QUOTED && escapedFolds[fold])
          res += `${text[fold]}\\`;
        res += `
${indent}${text.slice(fold + 1, end2)}`;
      }
    }
    return res;
  }
  function consumeMoreIndentedLines(text, i, indent) {
    let end = i;
    let start = i + 1;
    let ch = text[start];
    while (ch === " " || ch === "	") {
      if (i < start + indent) {
        ch = text[++i];
      } else {
        do {
          ch = text[++i];
        } while (ch && ch !== "\n");
        end = i;
        start = i + 1;
        ch = text[start];
      }
    }
    return end;
  }
  foldFlowLines.FOLD_BLOCK = FOLD_BLOCK;
  foldFlowLines.FOLD_FLOW = FOLD_FLOW;
  foldFlowLines.FOLD_QUOTED = FOLD_QUOTED;
  foldFlowLines.foldFlowLines = foldFlowLines$1;
  return foldFlowLines;
}
var hasRequiredStringifyString;
function requireStringifyString() {
  if (hasRequiredStringifyString) return stringifyString;
  hasRequiredStringifyString = 1;
  var Scalar2 = requireScalar();
  var foldFlowLines2 = requireFoldFlowLines();
  const getFoldOptions = (ctx, isBlock) => ({
    indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
    lineWidth: ctx.options.lineWidth,
    minContentWidth: ctx.options.minContentWidth
  });
  const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
  function lineLengthOverLimit(str, lineWidth, indentLength) {
    if (!lineWidth || lineWidth < 0)
      return false;
    const limit = lineWidth - indentLength;
    const strLen = str.length;
    if (strLen <= limit)
      return false;
    for (let i = 0, start = 0; i < strLen; ++i) {
      if (str[i] === "\n") {
        if (i - start > limit)
          return true;
        start = i + 1;
        if (strLen - start <= limit)
          return false;
      }
    }
    return true;
  }
  function doubleQuotedString(value, ctx) {
    const json = JSON.stringify(value);
    if (ctx.options.doubleQuotedAsJSON)
      return json;
    const { implicitKey } = ctx;
    const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    let str = "";
    let start = 0;
    for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
      if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
        str += json.slice(start, i) + "\\ ";
        i += 1;
        start = i;
        ch = "\\";
      }
      if (ch === "\\")
        switch (json[i + 1]) {
          case "u":
            {
              str += json.slice(start, i);
              const code = json.substr(i + 2, 4);
              switch (code) {
                case "0000":
                  str += "\\0";
                  break;
                case "0007":
                  str += "\\a";
                  break;
                case "000b":
                  str += "\\v";
                  break;
                case "001b":
                  str += "\\e";
                  break;
                case "0085":
                  str += "\\N";
                  break;
                case "00a0":
                  str += "\\_";
                  break;
                case "2028":
                  str += "\\L";
                  break;
                case "2029":
                  str += "\\P";
                  break;
                default:
                  if (code.substr(0, 2) === "00")
                    str += "\\x" + code.substr(2);
                  else
                    str += json.substr(i, 6);
              }
              i += 5;
              start = i + 1;
            }
            break;
          case "n":
            if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
              i += 1;
            } else {
              str += json.slice(start, i) + "\n\n";
              while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
                str += "\n";
                i += 2;
              }
              str += indent;
              if (json[i + 2] === " ")
                str += "\\";
              i += 1;
              start = i + 1;
            }
            break;
          default:
            i += 1;
        }
    }
    str = start ? str + json.slice(start) : json;
    return implicitKey ? str : foldFlowLines2.foldFlowLines(str, indent, foldFlowLines2.FOLD_QUOTED, getFoldOptions(ctx, false));
  }
  function singleQuotedString(value, ctx) {
    if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value))
      return doubleQuotedString(value, ctx);
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
    return ctx.implicitKey ? res : foldFlowLines2.foldFlowLines(res, indent, foldFlowLines2.FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function quotedString(value, ctx) {
    const { singleQuote } = ctx.options;
    let qs;
    if (singleQuote === false)
      qs = doubleQuotedString;
    else {
      const hasDouble = value.includes('"');
      const hasSingle = value.includes("'");
      if (hasDouble && !hasSingle)
        qs = singleQuotedString;
      else if (hasSingle && !hasDouble)
        qs = doubleQuotedString;
      else
        qs = singleQuote ? singleQuotedString : doubleQuotedString;
    }
    return qs(value, ctx);
  }
  let blockEndNewlines;
  try {
    blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
  } catch {
    blockEndNewlines = /\n+(?!\n|$)/g;
  }
  function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
    const { blockQuote, commentString, lineWidth } = ctx.options;
    if (!blockQuote || /\n[\t ]+$/.test(value)) {
      return quotedString(value, ctx);
    }
    const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
    const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar2.Scalar.BLOCK_FOLDED ? false : type === Scalar2.Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
    if (!value)
      return literal ? "|\n" : ">\n";
    let chomp;
    let endStart;
    for (endStart = value.length; endStart > 0; --endStart) {
      const ch = value[endStart - 1];
      if (ch !== "\n" && ch !== "	" && ch !== " ")
        break;
    }
    let end = value.substring(endStart);
    const endNlPos = end.indexOf("\n");
    if (endNlPos === -1) {
      chomp = "-";
    } else if (value === end || endNlPos !== end.length - 1) {
      chomp = "+";
      if (onChompKeep)
        onChompKeep();
    } else {
      chomp = "";
    }
    if (end) {
      value = value.slice(0, -end.length);
      if (end[end.length - 1] === "\n")
        end = end.slice(0, -1);
      end = end.replace(blockEndNewlines, `$&${indent}`);
    }
    let startWithSpace = false;
    let startEnd;
    let startNlPos = -1;
    for (startEnd = 0; startEnd < value.length; ++startEnd) {
      const ch = value[startEnd];
      if (ch === " ")
        startWithSpace = true;
      else if (ch === "\n")
        startNlPos = startEnd;
      else
        break;
    }
    let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
    if (start) {
      value = value.substring(start.length);
      start = start.replace(/\n+/g, `$&${indent}`);
    }
    const indentSize = indent ? "2" : "1";
    let header = (startWithSpace ? indentSize : "") + chomp;
    if (comment) {
      header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
      if (onComment)
        onComment();
    }
    if (!literal) {
      const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
      let literalFallback = false;
      const foldOptions = getFoldOptions(ctx, true);
      if (blockQuote !== "folded" && type !== Scalar2.Scalar.BLOCK_FOLDED) {
        foldOptions.onOverflow = () => {
          literalFallback = true;
        };
      }
      const body = foldFlowLines2.foldFlowLines(`${start}${foldedValue}${end}`, indent, foldFlowLines2.FOLD_BLOCK, foldOptions);
      if (!literalFallback)
        return `>${header}
${indent}${body}`;
    }
    value = value.replace(/\n+/g, `$&${indent}`);
    return `|${header}
${indent}${start}${value}${end}`;
  }
  function plainString(item, ctx, onComment, onChompKeep) {
    const { type, value } = item;
    const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
    if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
      return quotedString(value, ctx);
    }
    if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
      return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
    }
    if (!implicitKey && !inFlow && type !== Scalar2.Scalar.PLAIN && value.includes("\n")) {
      return blockString(item, ctx, onComment, onChompKeep);
    }
    if (containsDocumentMarker(value)) {
      if (indent === "") {
        ctx.forceBlockIndent = true;
        return blockString(item, ctx, onComment, onChompKeep);
      } else if (implicitKey && indent === indentStep) {
        return quotedString(value, ctx);
      }
    }
    const str = value.replace(/\n+/g, `$&
${indent}`);
    if (actualString) {
      const test = (tag) => {
        var _a;
        return tag.default && tag.tag !== "tag:yaml.org,2002:str" && ((_a = tag.test) == null ? void 0 : _a.test(str));
      };
      const { compat, tags: tags2 } = ctx.doc.schema;
      if (tags2.some(test) || (compat == null ? void 0 : compat.some(test)))
        return quotedString(value, ctx);
    }
    return implicitKey ? str : foldFlowLines2.foldFlowLines(str, indent, foldFlowLines2.FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function stringifyString$1(item, ctx, onComment, onChompKeep) {
    const { implicitKey, inFlow } = ctx;
    const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
    let { type } = item;
    if (type !== Scalar2.Scalar.QUOTE_DOUBLE) {
      if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
        type = Scalar2.Scalar.QUOTE_DOUBLE;
    }
    const _stringify = (_type) => {
      switch (_type) {
        case Scalar2.Scalar.BLOCK_FOLDED:
        case Scalar2.Scalar.BLOCK_LITERAL:
          return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
        case Scalar2.Scalar.QUOTE_DOUBLE:
          return doubleQuotedString(ss.value, ctx);
        case Scalar2.Scalar.QUOTE_SINGLE:
          return singleQuotedString(ss.value, ctx);
        case Scalar2.Scalar.PLAIN:
          return plainString(ss, ctx, onComment, onChompKeep);
        default:
          return null;
      }
    };
    let res = _stringify(type);
    if (res === null) {
      const { defaultKeyType, defaultStringType } = ctx.options;
      const t = implicitKey && defaultKeyType || defaultStringType;
      res = _stringify(t);
      if (res === null)
        throw new Error(`Unsupported default string type ${t}`);
    }
    return res;
  }
  stringifyString.stringifyString = stringifyString$1;
  return stringifyString;
}
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify;
  hasRequiredStringify = 1;
  var anchors2 = requireAnchors();
  var identity2 = requireIdentity();
  var stringifyComment2 = requireStringifyComment();
  var stringifyString2 = requireStringifyString();
  function createStringifyContext(doc, options) {
    const opt = Object.assign({
      blockQuote: true,
      commentString: stringifyComment2.stringifyComment,
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: false,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      flowCollectionPadding: true,
      indentSeq: true,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: false,
      singleQuote: null,
      trailingComma: false,
      trueStr: "true",
      verifyAliasOrder: true
    }, doc.schema.toStringOptions, options);
    let inFlow;
    switch (opt.collectionStyle) {
      case "block":
        inFlow = false;
        break;
      case "flow":
        inFlow = true;
        break;
      default:
        inFlow = null;
    }
    return {
      anchors: /* @__PURE__ */ new Set(),
      doc,
      flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
      indent: "",
      indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
      inFlow,
      options: opt
    };
  }
  function getTagObject(tags2, item) {
    var _a, _b, _c, _d;
    if (item.tag) {
      const match = tags2.filter((t) => t.tag === item.tag);
      if (match.length > 0)
        return (_a = match.find((t) => t.format === item.format)) != null ? _a : match[0];
    }
    let tagObj = void 0;
    let obj;
    if (identity2.isScalar(item)) {
      obj = item.value;
      let match = tags2.filter((t) => {
        var _a2;
        return (_a2 = t.identify) == null ? void 0 : _a2.call(t, obj);
      });
      if (match.length > 1) {
        const testMatch = match.filter((t) => t.test);
        if (testMatch.length > 0)
          match = testMatch;
      }
      tagObj = (_b = match.find((t) => t.format === item.format)) != null ? _b : match.find((t) => !t.format);
    } else {
      obj = item;
      tagObj = tags2.find((t) => t.nodeClass && obj instanceof t.nodeClass);
    }
    if (!tagObj) {
      const name = (_d = (_c = obj == null ? void 0 : obj.constructor) == null ? void 0 : _c.name) != null ? _d : obj === null ? "null" : typeof obj;
      throw new Error(`Tag not resolved for ${name} value`);
    }
    return tagObj;
  }
  function stringifyProps(node, tagObj, { anchors: anchors$1, doc }) {
    var _a;
    if (!doc.directives)
      return "";
    const props = [];
    const anchor = (identity2.isScalar(node) || identity2.isCollection(node)) && node.anchor;
    if (anchor && anchors2.anchorIsValid(anchor)) {
      anchors$1.add(anchor);
      props.push(`&${anchor}`);
    }
    const tag = (_a = node.tag) != null ? _a : tagObj.default ? null : tagObj.tag;
    if (tag)
      props.push(doc.directives.tagString(tag));
    return props.join(" ");
  }
  function stringify$1(item, ctx, onComment, onChompKeep) {
    var _a, _b;
    if (identity2.isPair(item))
      return item.toString(ctx, onComment, onChompKeep);
    if (identity2.isAlias(item)) {
      if (ctx.doc.directives)
        return item.toString(ctx);
      if ((_a = ctx.resolvedAliases) == null ? void 0 : _a.has(item)) {
        throw new TypeError(`Cannot stringify circular structure without alias nodes`);
      } else {
        if (ctx.resolvedAliases)
          ctx.resolvedAliases.add(item);
        else
          ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
        item = item.resolve(ctx.doc);
      }
    }
    let tagObj = void 0;
    const node = identity2.isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
    tagObj != null ? tagObj : tagObj = getTagObject(ctx.doc.schema.tags, node);
    const props = stringifyProps(node, tagObj, ctx);
    if (props.length > 0)
      ctx.indentAtStart = ((_b = ctx.indentAtStart) != null ? _b : 0) + props.length + 1;
    const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : identity2.isScalar(node) ? stringifyString2.stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
    if (!props)
      return str;
    return identity2.isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
  }
  stringify.createStringifyContext = createStringifyContext;
  stringify.stringify = stringify$1;
  return stringify;
}
var hasRequiredStringifyPair;
function requireStringifyPair() {
  if (hasRequiredStringifyPair) return stringifyPair;
  hasRequiredStringifyPair = 1;
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  var stringify2 = requireStringify();
  var stringifyComment2 = requireStringifyComment();
  function stringifyPair$1({ key, value }, ctx, onComment, onChompKeep) {
    var _a, _b;
    const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
    let keyComment = identity2.isNode(key) && key.comment || null;
    if (simpleKeys) {
      if (keyComment) {
        throw new Error("With simple keys, key nodes cannot have comments");
      }
      if (identity2.isCollection(key) || !identity2.isNode(key) && typeof key === "object") {
        const msg = "With simple keys, collection cannot be used as a key value";
        throw new Error(msg);
      }
    }
    let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || identity2.isCollection(key) || (identity2.isScalar(key) ? key.type === Scalar2.Scalar.BLOCK_FOLDED || key.type === Scalar2.Scalar.BLOCK_LITERAL : typeof key === "object"));
    ctx = Object.assign({}, ctx, {
      allNullValues: false,
      implicitKey: !explicitKey && (simpleKeys || !allNullValues),
      indent: indent + indentStep
    });
    let keyCommentDone = false;
    let chompKeep = false;
    let str = stringify2.stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
    if (!explicitKey && !ctx.inFlow && str.length > 1024) {
      if (simpleKeys)
        throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
      explicitKey = true;
    }
    if (ctx.inFlow) {
      if (allNullValues || value == null) {
        if (keyCommentDone && onComment)
          onComment();
        return str === "" ? "?" : explicitKey ? `? ${str}` : str;
      }
    } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
      str = `? ${str}`;
      if (keyComment && !keyCommentDone) {
        str += stringifyComment2.lineComment(str, ctx.indent, commentString(keyComment));
      } else if (chompKeep && onChompKeep)
        onChompKeep();
      return str;
    }
    if (keyCommentDone)
      keyComment = null;
    if (explicitKey) {
      if (keyComment)
        str += stringifyComment2.lineComment(str, ctx.indent, commentString(keyComment));
      str = `? ${str}
${indent}:`;
    } else {
      str = `${str}:`;
      if (keyComment)
        str += stringifyComment2.lineComment(str, ctx.indent, commentString(keyComment));
    }
    let vsb, vcb, valueComment;
    if (identity2.isNode(value)) {
      vsb = !!value.spaceBefore;
      vcb = value.commentBefore;
      valueComment = value.comment;
    } else {
      vsb = false;
      vcb = null;
      valueComment = null;
      if (value && typeof value === "object")
        value = doc.createNode(value);
    }
    ctx.implicitKey = false;
    if (!explicitKey && !keyComment && identity2.isScalar(value))
      ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && identity2.isSeq(value) && !value.flow && !value.tag && !value.anchor) {
      ctx.indent = ctx.indent.substring(2);
    }
    let valueCommentDone = false;
    const valueStr = stringify2.stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
    let ws = " ";
    if (keyComment || vsb || vcb) {
      ws = vsb ? "\n" : "";
      if (vcb) {
        const cs = commentString(vcb);
        ws += `
${stringifyComment2.indentComment(cs, ctx.indent)}`;
      }
      if (valueStr === "" && !ctx.inFlow) {
        if (ws === "\n" && valueComment)
          ws = "\n\n";
      } else {
        ws += `
${ctx.indent}`;
      }
    } else if (!explicitKey && identity2.isCollection(value)) {
      const vs0 = valueStr[0];
      const nl0 = valueStr.indexOf("\n");
      const hasNewline = nl0 !== -1;
      const flow = (_b = (_a = ctx.inFlow) != null ? _a : value.flow) != null ? _b : value.items.length === 0;
      if (hasNewline || !flow) {
        let hasPropsLine = false;
        if (hasNewline && (vs0 === "&" || vs0 === "!")) {
          let sp0 = valueStr.indexOf(" ");
          if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
            sp0 = valueStr.indexOf(" ", sp0 + 1);
          }
          if (sp0 === -1 || nl0 < sp0)
            hasPropsLine = true;
        }
        if (!hasPropsLine)
          ws = `
${ctx.indent}`;
      }
    } else if (valueStr === "" || valueStr[0] === "\n") {
      ws = "";
    }
    str += ws + valueStr;
    if (ctx.inFlow) {
      if (valueCommentDone && onComment)
        onComment();
    } else if (valueComment && !valueCommentDone) {
      str += stringifyComment2.lineComment(str, ctx.indent, commentString(valueComment));
    } else if (chompKeep && onChompKeep) {
      onChompKeep();
    }
    return str;
  }
  stringifyPair.stringifyPair = stringifyPair$1;
  return stringifyPair;
}
var addPairToJSMap = {};
var log = {};
var hasRequiredLog;
function requireLog() {
  if (hasRequiredLog) return log;
  hasRequiredLog = 1;
  var node_process = require$$0__default;
  function debug(logLevel, ...messages) {
    if (logLevel === "debug")
      console.log(...messages);
  }
  function warn(logLevel, warning) {
    if (logLevel === "debug" || logLevel === "warn") {
      if (typeof node_process.emitWarning === "function")
        node_process.emitWarning(warning);
      else
        console.warn(warning);
    }
  }
  log.debug = debug;
  log.warn = warn;
  return log;
}
var merge = {};
var hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge;
  hasRequiredMerge = 1;
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  const MERGE_KEY = "<<";
  const merge$1 = {
    identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: () => Object.assign(new Scalar2.Scalar(Symbol(MERGE_KEY)), {
      addToJSMap: addMergeToJSMap
    }),
    stringify: () => MERGE_KEY
  };
  const isMergeKey = (ctx, key) => (merge$1.identify(key) || identity2.isScalar(key) && (!key.type || key.type === Scalar2.Scalar.PLAIN) && merge$1.identify(key.value)) && (ctx == null ? void 0 : ctx.doc.schema.tags.some((tag) => tag.tag === merge$1.tag && tag.default));
  function addMergeToJSMap(ctx, map2, value) {
    const source = resolveAliasValue(ctx, value);
    if (identity2.isSeq(source))
      for (const it of source.items)
        mergeValue(ctx, map2, it);
    else if (Array.isArray(source))
      for (const it of source)
        mergeValue(ctx, map2, it);
    else
      mergeValue(ctx, map2, source);
  }
  function mergeValue(ctx, map2, value) {
    const source = resolveAliasValue(ctx, value);
    if (!identity2.isMap(source))
      throw new Error("Merge sources must be maps or map aliases");
    const srcMap = source.toJSON(null, ctx, Map);
    for (const [key, value2] of srcMap) {
      if (map2 instanceof Map) {
        if (!map2.has(key))
          map2.set(key, value2);
      } else if (map2 instanceof Set) {
        map2.add(key);
      } else if (!Object.prototype.hasOwnProperty.call(map2, key)) {
        Object.defineProperty(map2, key, {
          value: value2,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
    return map2;
  }
  function resolveAliasValue(ctx, value) {
    return ctx && identity2.isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
  }
  merge.addMergeToJSMap = addMergeToJSMap;
  merge.isMergeKey = isMergeKey;
  merge.merge = merge$1;
  return merge;
}
var hasRequiredAddPairToJSMap;
function requireAddPairToJSMap() {
  if (hasRequiredAddPairToJSMap) return addPairToJSMap;
  hasRequiredAddPairToJSMap = 1;
  var log2 = requireLog();
  var merge2 = requireMerge();
  var stringify2 = requireStringify();
  var identity2 = requireIdentity();
  var toJS2 = requireToJS();
  function addPairToJSMap$1(ctx, map2, { key, value }) {
    if (identity2.isNode(key) && key.addToJSMap)
      key.addToJSMap(ctx, map2, value);
    else if (merge2.isMergeKey(ctx, key))
      merge2.addMergeToJSMap(ctx, map2, value);
    else {
      const jsKey = toJS2.toJS(key, "", ctx);
      if (map2 instanceof Map) {
        map2.set(jsKey, toJS2.toJS(value, jsKey, ctx));
      } else if (map2 instanceof Set) {
        map2.add(jsKey);
      } else {
        const stringKey = stringifyKey(key, jsKey, ctx);
        const jsValue = toJS2.toJS(value, stringKey, ctx);
        if (stringKey in map2)
          Object.defineProperty(map2, stringKey, {
            value: jsValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        else
          map2[stringKey] = jsValue;
      }
    }
    return map2;
  }
  function stringifyKey(key, jsKey, ctx) {
    if (jsKey === null)
      return "";
    if (typeof jsKey !== "object")
      return String(jsKey);
    if (identity2.isNode(key) && (ctx == null ? void 0 : ctx.doc)) {
      const strCtx = stringify2.createStringifyContext(ctx.doc, {});
      strCtx.anchors = /* @__PURE__ */ new Set();
      for (const node of ctx.anchors.keys())
        strCtx.anchors.add(node.anchor);
      strCtx.inFlow = true;
      strCtx.inStringifyKey = true;
      const strKey = key.toString(strCtx);
      if (!ctx.mapKeyWarned) {
        let jsonStr = JSON.stringify(strKey);
        if (jsonStr.length > 40)
          jsonStr = jsonStr.substring(0, 36) + '..."';
        log2.warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
        ctx.mapKeyWarned = true;
      }
      return strKey;
    }
    return JSON.stringify(jsKey);
  }
  addPairToJSMap.addPairToJSMap = addPairToJSMap$1;
  return addPairToJSMap;
}
var hasRequiredPair;
function requirePair() {
  if (hasRequiredPair) return Pair;
  hasRequiredPair = 1;
  var createNode2 = requireCreateNode();
  var stringifyPair2 = requireStringifyPair();
  var addPairToJSMap2 = requireAddPairToJSMap();
  var identity2 = requireIdentity();
  function createPair(key, value, ctx) {
    const k = createNode2.createNode(key, void 0, ctx);
    const v = createNode2.createNode(value, void 0, ctx);
    return new Pair$1(k, v);
  }
  let Pair$1 = class Pair2 {
    constructor(key, value = null) {
      Object.defineProperty(this, identity2.NODE_TYPE, { value: identity2.PAIR });
      this.key = key;
      this.value = value;
    }
    clone(schema2) {
      let { key, value } = this;
      if (identity2.isNode(key))
        key = key.clone(schema2);
      if (identity2.isNode(value))
        value = value.clone(schema2);
      return new Pair2(key, value);
    }
    toJSON(_, ctx) {
      const pair = (ctx == null ? void 0 : ctx.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      return addPairToJSMap2.addPairToJSMap(ctx, pair, this);
    }
    toString(ctx, onComment, onChompKeep) {
      return (ctx == null ? void 0 : ctx.doc) ? stringifyPair2.stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
    }
  };
  Pair.Pair = Pair$1;
  Pair.createPair = createPair;
  return Pair;
}
var Schema = {};
var map = {};
var YAMLMap = {};
var stringifyCollection = {};
var hasRequiredStringifyCollection;
function requireStringifyCollection() {
  if (hasRequiredStringifyCollection) return stringifyCollection;
  hasRequiredStringifyCollection = 1;
  var identity2 = requireIdentity();
  var stringify2 = requireStringify();
  var stringifyComment2 = requireStringifyComment();
  function stringifyCollection$1(collection, ctx, options) {
    var _a;
    const flow = (_a = ctx.inFlow) != null ? _a : collection.flow;
    const stringify3 = flow ? stringifyFlowCollection : stringifyBlockCollection;
    return stringify3(collection, ctx, options);
  }
  function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
    const { indent, options: { commentString } } = ctx;
    const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
    let chompKeep = false;
    const lines = [];
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      let comment2 = null;
      if (identity2.isNode(item)) {
        if (!chompKeep && item.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
        if (item.comment)
          comment2 = item.comment;
      } else if (identity2.isPair(item)) {
        const ik = identity2.isNode(item.key) ? item.key : null;
        if (ik) {
          if (!chompKeep && ik.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
        }
      }
      chompKeep = false;
      let str2 = stringify2.stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
      if (comment2)
        str2 += stringifyComment2.lineComment(str2, itemIndent, commentString(comment2));
      if (chompKeep && comment2)
        chompKeep = false;
      lines.push(blockItemPrefix + str2);
    }
    let str;
    if (lines.length === 0) {
      str = flowChars.start + flowChars.end;
    } else {
      str = lines[0];
      for (let i = 1; i < lines.length; ++i) {
        const line = lines[i];
        str += line ? `
${indent}${line}` : "\n";
      }
    }
    if (comment) {
      str += "\n" + stringifyComment2.indentComment(commentString(comment), indent);
      if (onComment)
        onComment();
    } else if (chompKeep && onChompKeep)
      onChompKeep();
    return str;
  }
  function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
    const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
    itemIndent += indentStep;
    const itemCtx = Object.assign({}, ctx, {
      indent: itemIndent,
      inFlow: true,
      type: null
    });
    let reqNewline = false;
    let linesAtValue = 0;
    const lines = [];
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      let comment = null;
      if (identity2.isNode(item)) {
        if (item.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, false);
        if (item.comment)
          comment = item.comment;
      } else if (identity2.isPair(item)) {
        const ik = identity2.isNode(item.key) ? item.key : null;
        if (ik) {
          if (ik.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, false);
          if (ik.comment)
            reqNewline = true;
        }
        const iv = identity2.isNode(item.value) ? item.value : null;
        if (iv) {
          if (iv.comment)
            comment = iv.comment;
          if (iv.commentBefore)
            reqNewline = true;
        } else if (item.value == null && (ik == null ? void 0 : ik.comment)) {
          comment = ik.comment;
        }
      }
      if (comment)
        reqNewline = true;
      let str = stringify2.stringify(item, itemCtx, () => comment = null);
      reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
      if (i < items.length - 1) {
        str += ",";
      } else if (ctx.options.trailingComma) {
        if (ctx.options.lineWidth > 0) {
          reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
        }
        if (reqNewline) {
          str += ",";
        }
      }
      if (comment)
        str += stringifyComment2.lineComment(str, itemIndent, commentString(comment));
      lines.push(str);
      linesAtValue = lines.length;
    }
    const { start, end } = flowChars;
    if (lines.length === 0) {
      return start + end;
    } else {
      if (!reqNewline) {
        const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
        reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
      }
      if (reqNewline) {
        let str = start;
        for (const line of lines)
          str += line ? `
${indentStep}${indent}${line}` : "\n";
        return `${str}
${indent}${end}`;
      } else {
        return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
      }
    }
  }
  function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
    if (comment && chompKeep)
      comment = comment.replace(/^\n+/, "");
    if (comment) {
      const ic = stringifyComment2.indentComment(commentString(comment), indent);
      lines.push(ic.trimStart());
    }
  }
  stringifyCollection.stringifyCollection = stringifyCollection$1;
  return stringifyCollection;
}
var hasRequiredYAMLMap;
function requireYAMLMap() {
  if (hasRequiredYAMLMap) return YAMLMap;
  hasRequiredYAMLMap = 1;
  var stringifyCollection2 = requireStringifyCollection();
  var addPairToJSMap2 = requireAddPairToJSMap();
  var Collection2 = requireCollection();
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var Scalar2 = requireScalar();
  function findPair(items, key) {
    const k = identity2.isScalar(key) ? key.value : key;
    for (const it of items) {
      if (identity2.isPair(it)) {
        if (it.key === key || it.key === k)
          return it;
        if (identity2.isScalar(it.key) && it.key.value === k)
          return it;
      }
    }
    return void 0;
  }
  let YAMLMap$1 = class YAMLMap extends Collection2.Collection {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(schema2) {
      super(identity2.MAP, schema2);
      this.items = [];
    }
    /**
     * A generic collection parsing method that can be extended
     * to other node classes that inherit from YAMLMap
     */
    static from(schema2, obj, ctx) {
      const { keepUndefined, replacer } = ctx;
      const map2 = new this(schema2);
      const add = (key, value) => {
        if (typeof replacer === "function")
          value = replacer.call(obj, key, value);
        else if (Array.isArray(replacer) && !replacer.includes(key))
          return;
        if (value !== void 0 || keepUndefined)
          map2.items.push(Pair2.createPair(key, value, ctx));
      };
      if (obj instanceof Map) {
        for (const [key, value] of obj)
          add(key, value);
      } else if (obj && typeof obj === "object") {
        for (const key of Object.keys(obj))
          add(key, obj[key]);
      }
      if (typeof schema2.sortMapEntries === "function") {
        map2.items.sort(schema2.sortMapEntries);
      }
      return map2;
    }
    /**
     * Adds a value to the collection.
     *
     * @param overwrite - If not set `true`, using a key that is already in the
     *   collection will throw. Otherwise, overwrites the previous value.
     */
    add(pair, overwrite) {
      var _a;
      let _pair;
      if (identity2.isPair(pair))
        _pair = pair;
      else if (!pair || typeof pair !== "object" || !("key" in pair)) {
        _pair = new Pair2.Pair(pair, pair == null ? void 0 : pair.value);
      } else
        _pair = new Pair2.Pair(pair.key, pair.value);
      const prev = findPair(this.items, _pair.key);
      const sortEntries = (_a = this.schema) == null ? void 0 : _a.sortMapEntries;
      if (prev) {
        if (!overwrite)
          throw new Error(`Key ${_pair.key} already set`);
        if (identity2.isScalar(prev.value) && Scalar2.isScalarValue(_pair.value))
          prev.value.value = _pair.value;
        else
          prev.value = _pair.value;
      } else if (sortEntries) {
        const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
        if (i === -1)
          this.items.push(_pair);
        else
          this.items.splice(i, 0, _pair);
      } else {
        this.items.push(_pair);
      }
    }
    delete(key) {
      const it = findPair(this.items, key);
      if (!it)
        return false;
      const del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      var _a;
      const it = findPair(this.items, key);
      const node = it == null ? void 0 : it.value;
      return (_a = !keepScalar && identity2.isScalar(node) ? node.value : node) != null ? _a : void 0;
    }
    has(key) {
      return !!findPair(this.items, key);
    }
    set(key, value) {
      this.add(new Pair2.Pair(key, value), true);
    }
    /**
     * @param ctx - Conversion context, originally set in Document#toJS()
     * @param {Class} Type - If set, forces the returned collection type
     * @returns Instance of Type, Map, or Object
     */
    toJSON(_, ctx, Type) {
      const map2 = Type ? new Type() : (ctx == null ? void 0 : ctx.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      if (ctx == null ? void 0 : ctx.onCreate)
        ctx.onCreate(map2);
      for (const item of this.items)
        addPairToJSMap2.addPairToJSMap(ctx, map2, item);
      return map2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      for (const item of this.items) {
        if (!identity2.isPair(item))
          throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
      }
      if (!ctx.allNullValues && this.hasAllNullValues(false))
        ctx = Object.assign({}, ctx, { allNullValues: true });
      return stringifyCollection2.stringifyCollection(this, ctx, {
        blockItemPrefix: "",
        flowChars: { start: "{", end: "}" },
        itemIndent: ctx.indent || "",
        onChompKeep,
        onComment
      });
    }
  };
  YAMLMap.YAMLMap = YAMLMap$1;
  YAMLMap.findPair = findPair;
  return YAMLMap;
}
var hasRequiredMap;
function requireMap() {
  if (hasRequiredMap) return map;
  hasRequiredMap = 1;
  var identity2 = requireIdentity();
  var YAMLMap2 = requireYAMLMap();
  const map$1 = {
    collection: "map",
    default: true,
    nodeClass: YAMLMap2.YAMLMap,
    tag: "tag:yaml.org,2002:map",
    resolve(map2, onError) {
      if (!identity2.isMap(map2))
        onError("Expected a mapping for this tag");
      return map2;
    },
    createNode: (schema2, obj, ctx) => YAMLMap2.YAMLMap.from(schema2, obj, ctx)
  };
  map.map = map$1;
  return map;
}
var seq = {};
var YAMLSeq = {};
var hasRequiredYAMLSeq;
function requireYAMLSeq() {
  if (hasRequiredYAMLSeq) return YAMLSeq;
  hasRequiredYAMLSeq = 1;
  var createNode2 = requireCreateNode();
  var stringifyCollection2 = requireStringifyCollection();
  var Collection2 = requireCollection();
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  var toJS2 = requireToJS();
  let YAMLSeq$1 = class YAMLSeq extends Collection2.Collection {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(schema2) {
      super(identity2.SEQ, schema2);
      this.items = [];
    }
    add(value) {
      this.items.push(value);
    }
    /**
     * Removes a value from the collection.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     *
     * @returns `true` if the item was found and removed.
     */
    delete(key) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        return false;
      const del = this.items.splice(idx, 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        return void 0;
      const it = this.items[idx];
      return !keepScalar && identity2.isScalar(it) ? it.value : it;
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */
    has(key) {
      const idx = asItemIndex(key);
      return typeof idx === "number" && idx < this.items.length;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     *
     * If `key` does not contain a representation of an integer, this will throw.
     * It may be wrapped in a `Scalar`.
     */
    set(key, value) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        throw new Error(`Expected a valid index, not ${key}.`);
      const prev = this.items[idx];
      if (identity2.isScalar(prev) && Scalar2.isScalarValue(value))
        prev.value = value;
      else
        this.items[idx] = value;
    }
    toJSON(_, ctx) {
      const seq2 = [];
      if (ctx == null ? void 0 : ctx.onCreate)
        ctx.onCreate(seq2);
      let i = 0;
      for (const item of this.items)
        seq2.push(toJS2.toJS(item, String(i++), ctx));
      return seq2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      return stringifyCollection2.stringifyCollection(this, ctx, {
        blockItemPrefix: "- ",
        flowChars: { start: "[", end: "]" },
        itemIndent: (ctx.indent || "") + "  ",
        onChompKeep,
        onComment
      });
    }
    static from(schema2, obj, ctx) {
      const { replacer } = ctx;
      const seq2 = new this(schema2);
      if (obj && Symbol.iterator in Object(obj)) {
        let i = 0;
        for (let it of obj) {
          if (typeof replacer === "function") {
            const key = obj instanceof Set ? it : String(i++);
            it = replacer.call(obj, key, it);
          }
          seq2.items.push(createNode2.createNode(it, void 0, ctx));
        }
      }
      return seq2;
    }
  };
  function asItemIndex(key) {
    let idx = identity2.isScalar(key) ? key.value : key;
    if (idx && typeof idx === "string")
      idx = Number(idx);
    return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
  }
  YAMLSeq.YAMLSeq = YAMLSeq$1;
  return YAMLSeq;
}
var hasRequiredSeq;
function requireSeq() {
  if (hasRequiredSeq) return seq;
  hasRequiredSeq = 1;
  var identity2 = requireIdentity();
  var YAMLSeq2 = requireYAMLSeq();
  const seq$1 = {
    collection: "seq",
    default: true,
    nodeClass: YAMLSeq2.YAMLSeq,
    tag: "tag:yaml.org,2002:seq",
    resolve(seq2, onError) {
      if (!identity2.isSeq(seq2))
        onError("Expected a sequence for this tag");
      return seq2;
    },
    createNode: (schema2, obj, ctx) => YAMLSeq2.YAMLSeq.from(schema2, obj, ctx)
  };
  seq.seq = seq$1;
  return seq;
}
var string = {};
var hasRequiredString;
function requireString() {
  if (hasRequiredString) return string;
  hasRequiredString = 1;
  var stringifyString2 = requireStringifyString();
  const string$1 = {
    identify: (value) => typeof value === "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (str) => str,
    stringify(item, ctx, onComment, onChompKeep) {
      ctx = Object.assign({ actualString: true }, ctx);
      return stringifyString2.stringifyString(item, ctx, onComment, onChompKeep);
    }
  };
  string.string = string$1;
  return string;
}
var tags = {};
var _null = {};
var hasRequired_null;
function require_null() {
  if (hasRequired_null) return _null;
  hasRequired_null = 1;
  var Scalar2 = requireScalar();
  const nullTag = {
    identify: (value) => value == null,
    createNode: () => new Scalar2.Scalar(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new Scalar2.Scalar(null),
    stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
  };
  _null.nullTag = nullTag;
  return _null;
}
var bool$1 = {};
var hasRequiredBool$1;
function requireBool$1() {
  if (hasRequiredBool$1) return bool$1;
  hasRequiredBool$1 = 1;
  var Scalar2 = requireScalar();
  const boolTag = {
    identify: (value) => typeof value === "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (str) => new Scalar2.Scalar(str[0] === "t" || str[0] === "T"),
    stringify({ source, value }, ctx) {
      if (source && boolTag.test.test(source)) {
        const sv = source[0] === "t" || source[0] === "T";
        if (value === sv)
          return source;
      }
      return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
  };
  bool$1.boolTag = boolTag;
  return bool$1;
}
var float$1 = {};
var stringifyNumber = {};
var hasRequiredStringifyNumber;
function requireStringifyNumber() {
  if (hasRequiredStringifyNumber) return stringifyNumber;
  hasRequiredStringifyNumber = 1;
  function stringifyNumber$1({ format, minFractionDigits, tag, value }) {
    if (typeof value === "bigint")
      return String(value);
    const num = typeof value === "number" ? value : Number(value);
    if (!isFinite(num))
      return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
    let n = Object.is(value, -0) ? "-0" : JSON.stringify(value);
    if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^-?\d/.test(n) && !n.includes("e")) {
      let i = n.indexOf(".");
      if (i < 0) {
        i = n.length;
        n += ".";
      }
      let d = minFractionDigits - (n.length - i - 1);
      while (d-- > 0)
        n += "0";
    }
    return n;
  }
  stringifyNumber.stringifyNumber = stringifyNumber$1;
  return stringifyNumber;
}
var hasRequiredFloat$1;
function requireFloat$1() {
  if (hasRequiredFloat$1) return float$1;
  hasRequiredFloat$1 = 1;
  var Scalar2 = requireScalar();
  var stringifyNumber2 = requireStringifyNumber();
  const floatNaN = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber2.stringifyNumber
  };
  const floatExp = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber2.stringifyNumber(node);
    }
  };
  const float2 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(str) {
      const node = new Scalar2.Scalar(parseFloat(str));
      const dot = str.indexOf(".");
      if (dot !== -1 && str[str.length - 1] === "0")
        node.minFractionDigits = str.length - dot - 1;
      return node;
    },
    stringify: stringifyNumber2.stringifyNumber
  };
  float$1.float = float2;
  float$1.floatExp = floatExp;
  float$1.floatNaN = floatNaN;
  return float$1;
}
var int$1 = {};
var hasRequiredInt$1;
function requireInt$1() {
  if (hasRequiredInt$1) return int$1;
  hasRequiredInt$1 = 1;
  var stringifyNumber2 = requireStringifyNumber();
  const intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
  const intResolve = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
  function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value) && value >= 0)
      return prefix + value.toString(radix);
    return stringifyNumber2.stringifyNumber(node);
  }
  const intOct = {
    identify: (value) => intIdentify(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 8, opt),
    stringify: (node) => intStringify(node, 8, "0o")
  };
  const int2 = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber2.stringifyNumber
  };
  const intHex = {
    identify: (value) => intIdentify(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: (node) => intStringify(node, 16, "0x")
  };
  int$1.int = int2;
  int$1.intHex = intHex;
  int$1.intOct = intOct;
  return int$1;
}
var schema$2 = {};
var hasRequiredSchema$3;
function requireSchema$3() {
  if (hasRequiredSchema$3) return schema$2;
  hasRequiredSchema$3 = 1;
  var map2 = requireMap();
  var _null2 = require_null();
  var seq2 = requireSeq();
  var string2 = requireString();
  var bool2 = requireBool$1();
  var float2 = requireFloat$1();
  var int2 = requireInt$1();
  const schema2 = [
    map2.map,
    seq2.seq,
    string2.string,
    _null2.nullTag,
    bool2.boolTag,
    int2.intOct,
    int2.int,
    int2.intHex,
    float2.floatNaN,
    float2.floatExp,
    float2.float
  ];
  schema$2.schema = schema2;
  return schema$2;
}
var schema$1 = {};
var hasRequiredSchema$2;
function requireSchema$2() {
  if (hasRequiredSchema$2) return schema$1;
  hasRequiredSchema$2 = 1;
  var Scalar2 = requireScalar();
  var map2 = requireMap();
  var seq2 = requireSeq();
  function intIdentify(value) {
    return typeof value === "bigint" || Number.isInteger(value);
  }
  const stringifyJSON = ({ value }) => JSON.stringify(value);
  const jsonScalars = [
    {
      identify: (value) => typeof value === "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (str) => str,
      stringify: stringifyJSON
    },
    {
      identify: (value) => value == null,
      createNode: () => new Scalar2.Scalar(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: stringifyJSON
    },
    {
      identify: (value) => typeof value === "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^true$|^false$/,
      resolve: (str) => str === "true",
      stringify: stringifyJSON
    },
    {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
      stringify: ({ value }) => intIdentify(value) ? value.toString() : JSON.stringify(value)
    },
    {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (str) => parseFloat(str),
      stringify: stringifyJSON
    }
  ];
  const jsonError = {
    default: true,
    tag: "",
    test: /^/,
    resolve(str, onError) {
      onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
      return str;
    }
  };
  const schema2 = [map2.map, seq2.seq].concat(jsonScalars, jsonError);
  schema$1.schema = schema2;
  return schema$1;
}
var binary = {};
var hasRequiredBinary;
function requireBinary() {
  if (hasRequiredBinary) return binary;
  hasRequiredBinary = 1;
  var node_buffer = require$$0$1__default;
  var Scalar2 = requireScalar();
  var stringifyString2 = requireStringifyString();
  const binary$1 = {
    identify: (value) => value instanceof Uint8Array,
    // Buffer inherits from Uint8Array
    default: false,
    tag: "tag:yaml.org,2002:binary",
    /**
     * Returns a Buffer in node and an Uint8Array in browsers
     *
     * To use the resulting buffer as an image, you'll want to do something like:
     *
     *   const blob = new Blob([buffer], { type: 'image/jpeg' })
     *   document.querySelector('#photo').src = URL.createObjectURL(blob)
     */
    resolve(src, onError) {
      if (typeof node_buffer.Buffer === "function") {
        return node_buffer.Buffer.from(src, "base64");
      } else if (typeof atob === "function") {
        const str = atob(src.replace(/[\n\r]/g, ""));
        const buffer = new Uint8Array(str.length);
        for (let i = 0; i < str.length; ++i)
          buffer[i] = str.charCodeAt(i);
        return buffer;
      } else {
        onError("This environment does not support reading binary tags; either Buffer or atob is required");
        return src;
      }
    },
    stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
      if (!value)
        return "";
      const buf = value;
      let str;
      if (typeof node_buffer.Buffer === "function") {
        str = buf instanceof node_buffer.Buffer ? buf.toString("base64") : node_buffer.Buffer.from(buf.buffer).toString("base64");
      } else if (typeof btoa === "function") {
        let s = "";
        for (let i = 0; i < buf.length; ++i)
          s += String.fromCharCode(buf[i]);
        str = btoa(s);
      } else {
        throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
      }
      type != null ? type : type = Scalar2.Scalar.BLOCK_LITERAL;
      if (type !== Scalar2.Scalar.QUOTE_DOUBLE) {
        const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
        const n = Math.ceil(str.length / lineWidth);
        const lines = new Array(n);
        for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
          lines[i] = str.substr(o, lineWidth);
        }
        str = lines.join(type === Scalar2.Scalar.BLOCK_LITERAL ? "\n" : " ");
      }
      return stringifyString2.stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
    }
  };
  binary.binary = binary$1;
  return binary;
}
var omap = {};
var pairs = {};
var hasRequiredPairs;
function requirePairs() {
  if (hasRequiredPairs) return pairs;
  hasRequiredPairs = 1;
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var Scalar2 = requireScalar();
  var YAMLSeq2 = requireYAMLSeq();
  function resolvePairs(seq2, onError) {
    var _a;
    if (identity2.isSeq(seq2)) {
      for (let i = 0; i < seq2.items.length; ++i) {
        let item = seq2.items[i];
        if (identity2.isPair(item))
          continue;
        else if (identity2.isMap(item)) {
          if (item.items.length > 1)
            onError("Each pair must have its own sequence indicator");
          const pair = item.items[0] || new Pair2.Pair(new Scalar2.Scalar(null));
          if (item.commentBefore)
            pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
          if (item.comment) {
            const cn = (_a = pair.value) != null ? _a : pair.key;
            cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
          }
          item = pair;
        }
        seq2.items[i] = identity2.isPair(item) ? item : new Pair2.Pair(item);
      }
    } else
      onError("Expected a sequence for this tag");
    return seq2;
  }
  function createPairs(schema2, iterable, ctx) {
    const { replacer } = ctx;
    const pairs2 = new YAMLSeq2.YAMLSeq(schema2);
    pairs2.tag = "tag:yaml.org,2002:pairs";
    let i = 0;
    if (iterable && Symbol.iterator in Object(iterable))
      for (let it of iterable) {
        if (typeof replacer === "function")
          it = replacer.call(iterable, String(i++), it);
        let key, value;
        if (Array.isArray(it)) {
          if (it.length === 2) {
            key = it[0];
            value = it[1];
          } else
            throw new TypeError(`Expected [key, value] tuple: ${it}`);
        } else if (it && it instanceof Object) {
          const keys = Object.keys(it);
          if (keys.length === 1) {
            key = keys[0];
            value = it[key];
          } else {
            throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
          }
        } else {
          key = it;
        }
        pairs2.items.push(Pair2.createPair(key, value, ctx));
      }
    return pairs2;
  }
  const pairs$1 = {
    collection: "seq",
    default: false,
    tag: "tag:yaml.org,2002:pairs",
    resolve: resolvePairs,
    createNode: createPairs
  };
  pairs.createPairs = createPairs;
  pairs.pairs = pairs$1;
  pairs.resolvePairs = resolvePairs;
  return pairs;
}
var hasRequiredOmap;
function requireOmap() {
  if (hasRequiredOmap) return omap;
  hasRequiredOmap = 1;
  var identity2 = requireIdentity();
  var toJS2 = requireToJS();
  var YAMLMap2 = requireYAMLMap();
  var YAMLSeq2 = requireYAMLSeq();
  var pairs2 = requirePairs();
  class YAMLOMap extends YAMLSeq2.YAMLSeq {
    constructor() {
      super();
      this.add = YAMLMap2.YAMLMap.prototype.add.bind(this);
      this.delete = YAMLMap2.YAMLMap.prototype.delete.bind(this);
      this.get = YAMLMap2.YAMLMap.prototype.get.bind(this);
      this.has = YAMLMap2.YAMLMap.prototype.has.bind(this);
      this.set = YAMLMap2.YAMLMap.prototype.set.bind(this);
      this.tag = YAMLOMap.tag;
    }
    /**
     * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
     * but TypeScript won't allow widening the signature of a child method.
     */
    toJSON(_, ctx) {
      if (!ctx)
        return super.toJSON(_);
      const map2 = /* @__PURE__ */ new Map();
      if (ctx == null ? void 0 : ctx.onCreate)
        ctx.onCreate(map2);
      for (const pair of this.items) {
        let key, value;
        if (identity2.isPair(pair)) {
          key = toJS2.toJS(pair.key, "", ctx);
          value = toJS2.toJS(pair.value, key, ctx);
        } else {
          key = toJS2.toJS(pair, "", ctx);
        }
        if (map2.has(key))
          throw new Error("Ordered maps must not include duplicate keys");
        map2.set(key, value);
      }
      return map2;
    }
    static from(schema2, iterable, ctx) {
      const pairs$1 = pairs2.createPairs(schema2, iterable, ctx);
      const omap2 = new this();
      omap2.items = pairs$1.items;
      return omap2;
    }
  }
  YAMLOMap.tag = "tag:yaml.org,2002:omap";
  const omap$1 = {
    collection: "seq",
    identify: (value) => value instanceof Map,
    nodeClass: YAMLOMap,
    default: false,
    tag: "tag:yaml.org,2002:omap",
    resolve(seq2, onError) {
      const pairs$1 = pairs2.resolvePairs(seq2, onError);
      const seenKeys = [];
      for (const { key } of pairs$1.items) {
        if (identity2.isScalar(key)) {
          if (seenKeys.includes(key.value)) {
            onError(`Ordered maps must not include duplicate keys: ${key.value}`);
          } else {
            seenKeys.push(key.value);
          }
        }
      }
      return Object.assign(new YAMLOMap(), pairs$1);
    },
    createNode: (schema2, iterable, ctx) => YAMLOMap.from(schema2, iterable, ctx)
  };
  omap.YAMLOMap = YAMLOMap;
  omap.omap = omap$1;
  return omap;
}
var schema = {};
var bool = {};
var hasRequiredBool;
function requireBool() {
  if (hasRequiredBool) return bool;
  hasRequiredBool = 1;
  var Scalar2 = requireScalar();
  function boolStringify({ value, source }, ctx) {
    const boolObj = value ? trueTag : falseTag;
    if (source && boolObj.test.test(source))
      return source;
    return value ? ctx.options.trueStr : ctx.options.falseStr;
  }
  const trueTag = {
    identify: (value) => value === true,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new Scalar2.Scalar(true),
    stringify: boolStringify
  };
  const falseTag = {
    identify: (value) => value === false,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new Scalar2.Scalar(false),
    stringify: boolStringify
  };
  bool.falseTag = falseTag;
  bool.trueTag = trueTag;
  return bool;
}
var float = {};
var hasRequiredFloat;
function requireFloat() {
  if (hasRequiredFloat) return float;
  hasRequiredFloat = 1;
  var Scalar2 = requireScalar();
  var stringifyNumber2 = requireStringifyNumber();
  const floatNaN = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber2.stringifyNumber
  };
  const floatExp = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str.replace(/_/g, "")),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber2.stringifyNumber(node);
    }
  };
  const float$12 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(str) {
      const node = new Scalar2.Scalar(parseFloat(str.replace(/_/g, "")));
      const dot = str.indexOf(".");
      if (dot !== -1) {
        const f = str.substring(dot + 1).replace(/_/g, "");
        if (f[f.length - 1] === "0")
          node.minFractionDigits = f.length;
      }
      return node;
    },
    stringify: stringifyNumber2.stringifyNumber
  };
  float.float = float$12;
  float.floatExp = floatExp;
  float.floatNaN = floatNaN;
  return float;
}
var int = {};
var hasRequiredInt;
function requireInt() {
  if (hasRequiredInt) return int;
  hasRequiredInt = 1;
  var stringifyNumber2 = requireStringifyNumber();
  const intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
  function intResolve(str, offset, radix, { intAsBigInt }) {
    const sign = str[0];
    if (sign === "-" || sign === "+")
      offset += 1;
    str = str.substring(offset).replace(/_/g, "");
    if (intAsBigInt) {
      switch (radix) {
        case 2:
          str = `0b${str}`;
          break;
        case 8:
          str = `0o${str}`;
          break;
        case 16:
          str = `0x${str}`;
          break;
      }
      const n2 = BigInt(str);
      return sign === "-" ? BigInt(-1) * n2 : n2;
    }
    const n = parseInt(str, radix);
    return sign === "-" ? -1 * n : n;
  }
  function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value)) {
      const str = value.toString(radix);
      return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
    }
    return stringifyNumber2.stringifyNumber(node);
  }
  const intBin = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
    stringify: (node) => intStringify(node, 2, "0b")
  };
  const intOct = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
    stringify: (node) => intStringify(node, 8, "0")
  };
  const int$12 = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber2.stringifyNumber
  };
  const intHex = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: (node) => intStringify(node, 16, "0x")
  };
  int.int = int$12;
  int.intBin = intBin;
  int.intHex = intHex;
  int.intOct = intOct;
  return int;
}
var set = {};
var hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set;
  hasRequiredSet = 1;
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var YAMLMap2 = requireYAMLMap();
  class YAMLSet extends YAMLMap2.YAMLMap {
    constructor(schema2) {
      super(schema2);
      this.tag = YAMLSet.tag;
    }
    add(key) {
      let pair;
      if (identity2.isPair(key))
        pair = key;
      else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null)
        pair = new Pair2.Pair(key.key, null);
      else
        pair = new Pair2.Pair(key, null);
      const prev = YAMLMap2.findPair(this.items, pair.key);
      if (!prev)
        this.items.push(pair);
    }
    /**
     * If `keepPair` is `true`, returns the Pair matching `key`.
     * Otherwise, returns the value of that Pair's key.
     */
    get(key, keepPair) {
      const pair = YAMLMap2.findPair(this.items, key);
      return !keepPair && identity2.isPair(pair) ? identity2.isScalar(pair.key) ? pair.key.value : pair.key : pair;
    }
    set(key, value) {
      if (typeof value !== "boolean")
        throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
      const prev = YAMLMap2.findPair(this.items, key);
      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new Pair2.Pair(key));
      }
    }
    toJSON(_, ctx) {
      return super.toJSON(_, ctx, Set);
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      if (this.hasAllNullValues(true))
        return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
      else
        throw new Error("Set items must all have null values");
    }
    static from(schema2, iterable, ctx) {
      const { replacer } = ctx;
      const set2 = new this(schema2);
      if (iterable && Symbol.iterator in Object(iterable))
        for (let value of iterable) {
          if (typeof replacer === "function")
            value = replacer.call(iterable, value, value);
          set2.items.push(Pair2.createPair(value, null, ctx));
        }
      return set2;
    }
  }
  YAMLSet.tag = "tag:yaml.org,2002:set";
  const set$1 = {
    collection: "map",
    identify: (value) => value instanceof Set,
    nodeClass: YAMLSet,
    default: false,
    tag: "tag:yaml.org,2002:set",
    createNode: (schema2, iterable, ctx) => YAMLSet.from(schema2, iterable, ctx),
    resolve(map2, onError) {
      if (identity2.isMap(map2)) {
        if (map2.hasAllNullValues(true))
          return Object.assign(new YAMLSet(), map2);
        else
          onError("Set items must all have null values");
      } else
        onError("Expected a mapping for this tag");
      return map2;
    }
  };
  set.YAMLSet = YAMLSet;
  set.set = set$1;
  return set;
}
var timestamp = {};
var hasRequiredTimestamp;
function requireTimestamp() {
  if (hasRequiredTimestamp) return timestamp;
  hasRequiredTimestamp = 1;
  var stringifyNumber2 = requireStringifyNumber();
  function parseSexagesimal(str, asBigInt) {
    const sign = str[0];
    const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
    const num = (n) => asBigInt ? BigInt(n) : Number(n);
    const res = parts.replace(/_/g, "").split(":").reduce((res2, p) => res2 * num(60) + num(p), num(0));
    return sign === "-" ? num(-1) * res : res;
  }
  function stringifySexagesimal(node) {
    let { value } = node;
    let num = (n) => n;
    if (typeof value === "bigint")
      num = (n) => BigInt(n);
    else if (isNaN(value) || !isFinite(value))
      return stringifyNumber2.stringifyNumber(node);
    let sign = "";
    if (value < 0) {
      sign = "-";
      value *= num(-1);
    }
    const _60 = num(60);
    const parts = [value % _60];
    if (value < 60) {
      parts.unshift(0);
    } else {
      value = (value - parts[0]) / _60;
      parts.unshift(value % _60);
      if (value >= 60) {
        value = (value - parts[0]) / _60;
        parts.unshift(value);
      }
    }
    return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
  }
  const intTime = {
    identify: (value) => typeof value === "bigint" || Number.isInteger(value),
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
    stringify: stringifySexagesimal
  };
  const floatTime = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (str) => parseSexagesimal(str, false),
    stringify: stringifySexagesimal
  };
  const timestamp$1 = {
    identify: (value) => value instanceof Date,
    default: true,
    tag: "tag:yaml.org,2002:timestamp",
    // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
    // may be omitted altogether, resulting in a date format. In such a case, the time part is
    // assumed to be 00:00:00Z (start of day, UTC).
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve(str) {
      const match = str.match(timestamp$1.test);
      if (!match)
        throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
      const [, year, month, day, hour, minute, second] = match.map(Number);
      const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
      let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
      const tz = match[8];
      if (tz && tz !== "Z") {
        let d = parseSexagesimal(tz, false);
        if (Math.abs(d) < 30)
          d *= 60;
        date -= 6e4 * d;
      }
      return new Date(date);
    },
    stringify: ({ value }) => {
      var _a;
      return (_a = value == null ? void 0 : value.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) != null ? _a : "";
    }
  };
  timestamp.floatTime = floatTime;
  timestamp.intTime = intTime;
  timestamp.timestamp = timestamp$1;
  return timestamp;
}
var hasRequiredSchema$1;
function requireSchema$1() {
  if (hasRequiredSchema$1) return schema;
  hasRequiredSchema$1 = 1;
  var map2 = requireMap();
  var _null2 = require_null();
  var seq2 = requireSeq();
  var string2 = requireString();
  var binary2 = requireBinary();
  var bool2 = requireBool();
  var float2 = requireFloat();
  var int2 = requireInt();
  var merge2 = requireMerge();
  var omap2 = requireOmap();
  var pairs2 = requirePairs();
  var set2 = requireSet();
  var timestamp2 = requireTimestamp();
  const schema$12 = [
    map2.map,
    seq2.seq,
    string2.string,
    _null2.nullTag,
    bool2.trueTag,
    bool2.falseTag,
    int2.intBin,
    int2.intOct,
    int2.int,
    int2.intHex,
    float2.floatNaN,
    float2.floatExp,
    float2.float,
    binary2.binary,
    merge2.merge,
    omap2.omap,
    pairs2.pairs,
    set2.set,
    timestamp2.intTime,
    timestamp2.floatTime,
    timestamp2.timestamp
  ];
  schema.schema = schema$12;
  return schema;
}
var hasRequiredTags;
function requireTags() {
  if (hasRequiredTags) return tags;
  hasRequiredTags = 1;
  var map2 = requireMap();
  var _null2 = require_null();
  var seq2 = requireSeq();
  var string2 = requireString();
  var bool2 = requireBool$1();
  var float2 = requireFloat$1();
  var int2 = requireInt$1();
  var schema2 = requireSchema$3();
  var schema$12 = requireSchema$2();
  var binary2 = requireBinary();
  var merge2 = requireMerge();
  var omap2 = requireOmap();
  var pairs2 = requirePairs();
  var schema$22 = requireSchema$1();
  var set2 = requireSet();
  var timestamp2 = requireTimestamp();
  const schemas = /* @__PURE__ */ new Map([
    ["core", schema2.schema],
    ["failsafe", [map2.map, seq2.seq, string2.string]],
    ["json", schema$12.schema],
    ["yaml11", schema$22.schema],
    ["yaml-1.1", schema$22.schema]
  ]);
  const tagsByName = {
    binary: binary2.binary,
    bool: bool2.boolTag,
    float: float2.float,
    floatExp: float2.floatExp,
    floatNaN: float2.floatNaN,
    floatTime: timestamp2.floatTime,
    int: int2.int,
    intHex: int2.intHex,
    intOct: int2.intOct,
    intTime: timestamp2.intTime,
    map: map2.map,
    merge: merge2.merge,
    null: _null2.nullTag,
    omap: omap2.omap,
    pairs: pairs2.pairs,
    seq: seq2.seq,
    set: set2.set,
    timestamp: timestamp2.timestamp
  };
  const coreKnownTags = {
    "tag:yaml.org,2002:binary": binary2.binary,
    "tag:yaml.org,2002:merge": merge2.merge,
    "tag:yaml.org,2002:omap": omap2.omap,
    "tag:yaml.org,2002:pairs": pairs2.pairs,
    "tag:yaml.org,2002:set": set2.set,
    "tag:yaml.org,2002:timestamp": timestamp2.timestamp
  };
  function getTags(customTags, schemaName, addMergeTag) {
    const schemaTags = schemas.get(schemaName);
    if (schemaTags && !customTags) {
      return addMergeTag && !schemaTags.includes(merge2.merge) ? schemaTags.concat(merge2.merge) : schemaTags.slice();
    }
    let tags2 = schemaTags;
    if (!tags2) {
      if (Array.isArray(customTags))
        tags2 = [];
      else {
        const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
      }
    }
    if (Array.isArray(customTags)) {
      for (const tag of customTags)
        tags2 = tags2.concat(tag);
    } else if (typeof customTags === "function") {
      tags2 = customTags(tags2.slice());
    }
    if (addMergeTag)
      tags2 = tags2.concat(merge2.merge);
    return tags2.reduce((tags3, tag) => {
      const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
      if (!tagObj) {
        const tagName = JSON.stringify(tag);
        const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
      }
      if (!tags3.includes(tagObj))
        tags3.push(tagObj);
      return tags3;
    }, []);
  }
  tags.coreKnownTags = coreKnownTags;
  tags.getTags = getTags;
  return tags;
}
var hasRequiredSchema;
function requireSchema() {
  if (hasRequiredSchema) return Schema;
  hasRequiredSchema = 1;
  var identity2 = requireIdentity();
  var map2 = requireMap();
  var seq2 = requireSeq();
  var string2 = requireString();
  var tags2 = requireTags();
  const sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  let Schema$1 = class Schema2 {
    constructor({ compat, customTags, merge: merge2, resolveKnownTags, schema: schema2, sortMapEntries, toStringDefaults }) {
      this.compat = Array.isArray(compat) ? tags2.getTags(compat, "compat") : compat ? tags2.getTags(null, compat) : null;
      this.name = typeof schema2 === "string" && schema2 || "core";
      this.knownTags = resolveKnownTags ? tags2.coreKnownTags : {};
      this.tags = tags2.getTags(customTags, this.name, merge2);
      this.toStringOptions = toStringDefaults != null ? toStringDefaults : null;
      Object.defineProperty(this, identity2.MAP, { value: map2.map });
      Object.defineProperty(this, identity2.SCALAR, { value: string2.string });
      Object.defineProperty(this, identity2.SEQ, { value: seq2.seq });
      this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
    }
    clone() {
      const copy = Object.create(Schema2.prototype, Object.getOwnPropertyDescriptors(this));
      copy.tags = this.tags.slice();
      return copy;
    }
  };
  Schema.Schema = Schema$1;
  return Schema;
}
var stringifyDocument = {};
var hasRequiredStringifyDocument;
function requireStringifyDocument() {
  if (hasRequiredStringifyDocument) return stringifyDocument;
  hasRequiredStringifyDocument = 1;
  var identity2 = requireIdentity();
  var stringify2 = requireStringify();
  var stringifyComment2 = requireStringifyComment();
  function stringifyDocument$1(doc, options) {
    var _a;
    const lines = [];
    let hasDirectives = options.directives === true;
    if (options.directives !== false && doc.directives) {
      const dir = doc.directives.toString(doc);
      if (dir) {
        lines.push(dir);
        hasDirectives = true;
      } else if (doc.directives.docStart)
        hasDirectives = true;
    }
    if (hasDirectives)
      lines.push("---");
    const ctx = stringify2.createStringifyContext(doc, options);
    const { commentString } = ctx.options;
    if (doc.commentBefore) {
      if (lines.length !== 1)
        lines.unshift("");
      const cs = commentString(doc.commentBefore);
      lines.unshift(stringifyComment2.indentComment(cs, ""));
    }
    let chompKeep = false;
    let contentComment = null;
    if (doc.contents) {
      if (identity2.isNode(doc.contents)) {
        if (doc.contents.spaceBefore && hasDirectives)
          lines.push("");
        if (doc.contents.commentBefore) {
          const cs = commentString(doc.contents.commentBefore);
          lines.push(stringifyComment2.indentComment(cs, ""));
        }
        ctx.forceBlockIndent = !!doc.comment;
        contentComment = doc.contents.comment;
      }
      const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
      let body = stringify2.stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
      if (contentComment)
        body += stringifyComment2.lineComment(body, "", commentString(contentComment));
      if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
        lines[lines.length - 1] = `--- ${body}`;
      } else
        lines.push(body);
    } else {
      lines.push(stringify2.stringify(doc.contents, ctx));
    }
    if ((_a = doc.directives) == null ? void 0 : _a.docEnd) {
      if (doc.comment) {
        const cs = commentString(doc.comment);
        if (cs.includes("\n")) {
          lines.push("...");
          lines.push(stringifyComment2.indentComment(cs, ""));
        } else {
          lines.push(`... ${cs}`);
        }
      } else {
        lines.push("...");
      }
    } else {
      let dc = doc.comment;
      if (dc && chompKeep)
        dc = dc.replace(/^\n+/, "");
      if (dc) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
          lines.push("");
        lines.push(stringifyComment2.indentComment(commentString(dc), ""));
      }
    }
    return lines.join("\n") + "\n";
  }
  stringifyDocument.stringifyDocument = stringifyDocument$1;
  return stringifyDocument;
}
var hasRequiredDocument;
function requireDocument() {
  if (hasRequiredDocument) return Document;
  hasRequiredDocument = 1;
  var Alias2 = requireAlias();
  var Collection2 = requireCollection();
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var toJS2 = requireToJS();
  var Schema2 = requireSchema();
  var stringifyDocument2 = requireStringifyDocument();
  var anchors2 = requireAnchors();
  var applyReviver2 = requireApplyReviver();
  var createNode2 = requireCreateNode();
  var directives2 = requireDirectives();
  let Document$1 = class Document2 {
    constructor(value, replacer, options) {
      this.commentBefore = null;
      this.comment = null;
      this.errors = [];
      this.warnings = [];
      Object.defineProperty(this, identity2.NODE_TYPE, { value: identity2.DOC });
      let _replacer = null;
      if (typeof replacer === "function" || Array.isArray(replacer)) {
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
        replacer = void 0;
      }
      const opt = Object.assign({
        intAsBigInt: false,
        keepSourceTokens: false,
        logLevel: "warn",
        prettyErrors: true,
        strict: true,
        stringKeys: false,
        uniqueKeys: true,
        version: "1.2"
      }, options);
      this.options = opt;
      let { version } = opt;
      if (options == null ? void 0 : options._directives) {
        this.directives = options._directives.atDocument();
        if (this.directives.yaml.explicit)
          version = this.directives.yaml.version;
      } else
        this.directives = new directives2.Directives({ version });
      this.setSchema(version, options);
      this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
    }
    /**
     * Create a deep copy of this Document and its contents.
     *
     * Custom Node values that inherit from `Object` still refer to their original instances.
     */
    clone() {
      const copy = Object.create(Document2.prototype, {
        [identity2.NODE_TYPE]: { value: identity2.DOC }
      });
      copy.commentBefore = this.commentBefore;
      copy.comment = this.comment;
      copy.errors = this.errors.slice();
      copy.warnings = this.warnings.slice();
      copy.options = Object.assign({}, this.options);
      if (this.directives)
        copy.directives = this.directives.clone();
      copy.schema = this.schema.clone();
      copy.contents = identity2.isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    /** Adds a value to the document. */
    add(value) {
      if (assertCollection(this.contents))
        this.contents.add(value);
    }
    /** Adds a value to the document. */
    addIn(path, value) {
      if (assertCollection(this.contents))
        this.contents.addIn(path, value);
    }
    /**
     * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
     *
     * If `node` already has an anchor, `name` is ignored.
     * Otherwise, the `node.anchor` value will be set to `name`,
     * or if an anchor with that name is already present in the document,
     * `name` will be used as a prefix for a new unique anchor.
     * If `name` is undefined, the generated anchor will use 'a' as a prefix.
     */
    createAlias(node, name) {
      if (!node.anchor) {
        const prev = anchors2.anchorNames(this);
        node.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        !name || prev.has(name) ? anchors2.findNewAnchor(name || "a", prev) : name;
      }
      return new Alias2.Alias(node.anchor);
    }
    createNode(value, replacer, options) {
      let _replacer = void 0;
      if (typeof replacer === "function") {
        value = replacer.call({ "": value }, "", value);
        _replacer = replacer;
      } else if (Array.isArray(replacer)) {
        const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
        const asStr = replacer.filter(keyToStr).map(String);
        if (asStr.length > 0)
          replacer = replacer.concat(asStr);
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
        replacer = void 0;
      }
      const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options != null ? options : {};
      const { onAnchor, setAnchors, sourceObjects } = anchors2.createNodeAnchors(
        this,
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        anchorPrefix || "a"
      );
      const ctx = {
        aliasDuplicateObjects: aliasDuplicateObjects != null ? aliasDuplicateObjects : true,
        keepUndefined: keepUndefined != null ? keepUndefined : false,
        onAnchor,
        onTagObj,
        replacer: _replacer,
        schema: this.schema,
        sourceObjects
      };
      const node = createNode2.createNode(value, tag, ctx);
      if (flow && identity2.isCollection(node))
        node.flow = true;
      setAnchors();
      return node;
    }
    /**
     * Convert a key and a value into a `Pair` using the current schema,
     * recursively wrapping all values as `Scalar` or `Collection` nodes.
     */
    createPair(key, value, options = {}) {
      const k = this.createNode(key, null, options);
      const v = this.createNode(value, null, options);
      return new Pair2.Pair(k, v);
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    delete(key) {
      return assertCollection(this.contents) ? this.contents.delete(key) : false;
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path) {
      if (Collection2.isEmptyPath(path)) {
        if (this.contents == null)
          return false;
        this.contents = null;
        return true;
      }
      return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    get(key, keepScalar) {
      return identity2.isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
    }
    /**
     * Returns item at `path`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path, keepScalar) {
      if (Collection2.isEmptyPath(path))
        return !keepScalar && identity2.isScalar(this.contents) ? this.contents.value : this.contents;
      return identity2.isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
    }
    /**
     * Checks if the document includes a value with the key `key`.
     */
    has(key) {
      return identity2.isCollection(this.contents) ? this.contents.has(key) : false;
    }
    /**
     * Checks if the document includes a value at `path`.
     */
    hasIn(path) {
      if (Collection2.isEmptyPath(path))
        return this.contents !== void 0;
      return identity2.isCollection(this.contents) ? this.contents.hasIn(path) : false;
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    set(key, value) {
      if (this.contents == null) {
        this.contents = Collection2.collectionFromPath(this.schema, [key], value);
      } else if (assertCollection(this.contents)) {
        this.contents.set(key, value);
      }
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path, value) {
      if (Collection2.isEmptyPath(path)) {
        this.contents = value;
      } else if (this.contents == null) {
        this.contents = Collection2.collectionFromPath(this.schema, Array.from(path), value);
      } else if (assertCollection(this.contents)) {
        this.contents.setIn(path, value);
      }
    }
    /**
     * Change the YAML version and schema used by the document.
     * A `null` version disables support for directives, explicit tags, anchors, and aliases.
     * It also requires the `schema` option to be given as a `Schema` instance value.
     *
     * Overrides all previously set schema options.
     */
    setSchema(version, options = {}) {
      if (typeof version === "number")
        version = String(version);
      let opt;
      switch (version) {
        case "1.1":
          if (this.directives)
            this.directives.yaml.version = "1.1";
          else
            this.directives = new directives2.Directives({ version: "1.1" });
          opt = { resolveKnownTags: false, schema: "yaml-1.1" };
          break;
        case "1.2":
        case "next":
          if (this.directives)
            this.directives.yaml.version = version;
          else
            this.directives = new directives2.Directives({ version });
          opt = { resolveKnownTags: true, schema: "core" };
          break;
        case null:
          if (this.directives)
            delete this.directives;
          opt = null;
          break;
        default: {
          const sv = JSON.stringify(version);
          throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
        }
      }
      if (options.schema instanceof Object)
        this.schema = options.schema;
      else if (opt)
        this.schema = new Schema2.Schema(Object.assign(opt, options));
      else
        throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    // json & jsonArg are only used from toJSON()
    toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      const ctx = {
        anchors: /* @__PURE__ */ new Map(),
        doc: this,
        keep: !json,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS2.toJS(this.contents, jsonArg != null ? jsonArg : "", ctx);
      if (typeof onAnchor === "function")
        for (const { count, res: res2 } of ctx.anchors.values())
          onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver2.applyReviver(reviver, { "": res }, "", res) : res;
    }
    /**
     * A JSON representation of the document `contents`.
     *
     * @param jsonArg Used by `JSON.stringify` to indicate the array index or
     *   property name.
     */
    toJSON(jsonArg, onAnchor) {
      return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
    }
    /** A YAML representation of the document. */
    toString(options = {}) {
      if (this.errors.length > 0)
        throw new Error("Document with errors cannot be stringified");
      if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
        const s = JSON.stringify(options.indent);
        throw new Error(`"indent" option must be a positive integer, not ${s}`);
      }
      return stringifyDocument2.stringifyDocument(this, options);
    }
  };
  function assertCollection(contents) {
    if (identity2.isCollection(contents))
      return true;
    throw new Error("Expected a YAML collection as document contents");
  }
  Document.Document = Document$1;
  return Document;
}
var errors = {};
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  class YAMLError extends Error {
    constructor(name, pos, code, message) {
      super();
      this.name = name;
      this.code = code;
      this.message = message;
      this.pos = pos;
    }
  }
  class YAMLParseError extends YAMLError {
    constructor(pos, code, message) {
      super("YAMLParseError", pos, code, message);
    }
  }
  class YAMLWarning extends YAMLError {
    constructor(pos, code, message) {
      super("YAMLWarning", pos, code, message);
    }
  }
  const prettifyError = (src, lc) => (error) => {
    if (error.pos[0] === -1)
      return;
    error.linePos = error.pos.map((pos) => lc.linePos(pos));
    const { line, col } = error.linePos[0];
    error.message += ` at line ${line}, column ${col}`;
    let ci = col - 1;
    let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
    if (ci >= 60 && lineStr.length > 80) {
      const trimStart = Math.min(ci - 39, lineStr.length - 79);
      lineStr = "\u2026" + lineStr.substring(trimStart);
      ci -= trimStart - 1;
    }
    if (lineStr.length > 80)
      lineStr = lineStr.substring(0, 79) + "\u2026";
    if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
      let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
      if (prev.length > 80)
        prev = prev.substring(0, 79) + "\u2026\n";
      lineStr = prev + lineStr;
    }
    if (/[^ ]/.test(lineStr)) {
      let count = 1;
      const end = error.linePos[1];
      if ((end == null ? void 0 : end.line) === line && end.col > col) {
        count = Math.max(1, Math.min(end.col - col, 80 - ci));
      }
      const pointer = " ".repeat(ci) + "^".repeat(count);
      error.message += `:

${lineStr}
${pointer}
`;
    }
  };
  errors.YAMLError = YAMLError;
  errors.YAMLParseError = YAMLParseError;
  errors.YAMLWarning = YAMLWarning;
  errors.prettifyError = prettifyError;
  return errors;
}
var composeDoc = {};
var composeNode = {};
var composeCollection = {};
var resolveBlockMap = {};
var resolveProps = {};
var hasRequiredResolveProps;
function requireResolveProps() {
  if (hasRequiredResolveProps) return resolveProps;
  hasRequiredResolveProps = 1;
  function resolveProps$1(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
    let spaceBefore = false;
    let atNewline = startOnNewline;
    let hasSpace = startOnNewline;
    let comment = "";
    let commentSep = "";
    let hasNewline = false;
    let reqSpace = false;
    let tab = null;
    let anchor = null;
    let tag = null;
    let newlineAfterProp = null;
    let comma = null;
    let found = null;
    let start = null;
    for (const token of tokens) {
      if (reqSpace) {
        if (token.type !== "space" && token.type !== "newline" && token.type !== "comma")
          onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
        reqSpace = false;
      }
      if (tab) {
        if (atNewline && token.type !== "comment" && token.type !== "newline") {
          onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
        }
        tab = null;
      }
      switch (token.type) {
        case "space":
          if (!flow && (indicator !== "doc-start" || (next == null ? void 0 : next.type) !== "flow-collection") && token.source.includes("	")) {
            tab = token;
          }
          hasSpace = true;
          break;
        case "comment": {
          if (!hasSpace)
            onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const cb = token.source.substring(1) || " ";
          if (!comment)
            comment = cb;
          else
            comment += commentSep + cb;
          commentSep = "";
          atNewline = false;
          break;
        }
        case "newline":
          if (atNewline) {
            if (comment)
              comment += token.source;
            else if (!found || indicator !== "seq-item-ind")
              spaceBefore = true;
          } else
            commentSep += token.source;
          atNewline = true;
          hasNewline = true;
          if (anchor || tag)
            newlineAfterProp = token;
          hasSpace = true;
          break;
        case "anchor":
          if (anchor)
            onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
          if (token.source.endsWith(":"))
            onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
          anchor = token;
          start != null ? start : start = token.offset;
          atNewline = false;
          hasSpace = false;
          reqSpace = true;
          break;
        case "tag": {
          if (tag)
            onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
          tag = token;
          start != null ? start : start = token.offset;
          atNewline = false;
          hasSpace = false;
          reqSpace = true;
          break;
        }
        case indicator:
          if (anchor || tag)
            onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
          if (found)
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow != null ? flow : "collection"}`);
          found = token;
          atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
          hasSpace = false;
          break;
        case "comma":
          if (flow) {
            if (comma)
              onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
            comma = token;
            atNewline = false;
            hasSpace = false;
            break;
          }
        // else fallthrough
        default:
          onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
          atNewline = false;
          hasSpace = false;
      }
    }
    const last = tokens[tokens.length - 1];
    const end = last ? last.offset + last.source.length : offset;
    if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) {
      onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
    }
    if (tab && (atNewline && tab.indent <= parentIndent || (next == null ? void 0 : next.type) === "block-map" || (next == null ? void 0 : next.type) === "block-seq"))
      onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
    return {
      comma,
      found,
      spaceBefore,
      comment,
      hasNewline,
      anchor,
      tag,
      newlineAfterProp,
      end,
      start: start != null ? start : end
    };
  }
  resolveProps.resolveProps = resolveProps$1;
  return resolveProps;
}
var utilContainsNewline = {};
var hasRequiredUtilContainsNewline;
function requireUtilContainsNewline() {
  if (hasRequiredUtilContainsNewline) return utilContainsNewline;
  hasRequiredUtilContainsNewline = 1;
  function containsNewline(key) {
    if (!key)
      return null;
    switch (key.type) {
      case "alias":
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        if (key.source.includes("\n"))
          return true;
        if (key.end) {
          for (const st of key.end)
            if (st.type === "newline")
              return true;
        }
        return false;
      case "flow-collection":
        for (const it of key.items) {
          for (const st of it.start)
            if (st.type === "newline")
              return true;
          if (it.sep) {
            for (const st of it.sep)
              if (st.type === "newline")
                return true;
          }
          if (containsNewline(it.key) || containsNewline(it.value))
            return true;
        }
        return false;
      default:
        return true;
    }
  }
  utilContainsNewline.containsNewline = containsNewline;
  return utilContainsNewline;
}
var utilFlowIndentCheck = {};
var hasRequiredUtilFlowIndentCheck;
function requireUtilFlowIndentCheck() {
  if (hasRequiredUtilFlowIndentCheck) return utilFlowIndentCheck;
  hasRequiredUtilFlowIndentCheck = 1;
  var utilContainsNewline2 = requireUtilContainsNewline();
  function flowIndentCheck(indent, fc, onError) {
    if ((fc == null ? void 0 : fc.type) === "flow-collection") {
      const end = fc.end[0];
      if (end.indent === indent && (end.source === "]" || end.source === "}") && utilContainsNewline2.containsNewline(fc)) {
        const msg = "Flow end indicator should be more indented than parent";
        onError(end, "BAD_INDENT", msg, true);
      }
    }
  }
  utilFlowIndentCheck.flowIndentCheck = flowIndentCheck;
  return utilFlowIndentCheck;
}
var utilMapIncludes = {};
var hasRequiredUtilMapIncludes;
function requireUtilMapIncludes() {
  if (hasRequiredUtilMapIncludes) return utilMapIncludes;
  hasRequiredUtilMapIncludes = 1;
  var identity2 = requireIdentity();
  function mapIncludes(ctx, items, search) {
    const { uniqueKeys } = ctx.options;
    if (uniqueKeys === false)
      return false;
    const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || identity2.isScalar(a) && identity2.isScalar(b) && a.value === b.value;
    return items.some((pair) => isEqual(pair.key, search));
  }
  utilMapIncludes.mapIncludes = mapIncludes;
  return utilMapIncludes;
}
var hasRequiredResolveBlockMap;
function requireResolveBlockMap() {
  if (hasRequiredResolveBlockMap) return resolveBlockMap;
  hasRequiredResolveBlockMap = 1;
  var Pair2 = requirePair();
  var YAMLMap2 = requireYAMLMap();
  var resolveProps2 = requireResolveProps();
  var utilContainsNewline2 = requireUtilContainsNewline();
  var utilFlowIndentCheck2 = requireUtilFlowIndentCheck();
  var utilMapIncludes2 = requireUtilMapIncludes();
  const startColMsg = "All mapping items must start at the same column";
  function resolveBlockMap$1({ composeNode: composeNode2, composeEmptyNode }, ctx, bm, onError, tag) {
    var _a, _b;
    const NodeClass = (_a = tag == null ? void 0 : tag.nodeClass) != null ? _a : YAMLMap2.YAMLMap;
    const map2 = new NodeClass(ctx.schema);
    if (ctx.atRoot)
      ctx.atRoot = false;
    let offset = bm.offset;
    let commentEnd = null;
    for (const collItem of bm.items) {
      const { start, key, sep, value } = collItem;
      const keyProps = resolveProps2.resolveProps(start, {
        indicator: "explicit-key-ind",
        next: key != null ? key : sep == null ? void 0 : sep[0],
        offset,
        onError,
        parentIndent: bm.indent,
        startOnNewline: true
      });
      const implicitKey = !keyProps.found;
      if (implicitKey) {
        if (key) {
          if (key.type === "block-seq")
            onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
          else if ("indent" in key && key.indent !== bm.indent)
            onError(offset, "BAD_INDENT", startColMsg);
        }
        if (!keyProps.anchor && !keyProps.tag && !sep) {
          commentEnd = keyProps.end;
          if (keyProps.comment) {
            if (map2.comment)
              map2.comment += "\n" + keyProps.comment;
            else
              map2.comment = keyProps.comment;
          }
          continue;
        }
        if (keyProps.newlineAfterProp || utilContainsNewline2.containsNewline(key)) {
          onError(key != null ? key : start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
        }
      } else if (((_b = keyProps.found) == null ? void 0 : _b.indent) !== bm.indent) {
        onError(offset, "BAD_INDENT", startColMsg);
      }
      ctx.atKey = true;
      const keyStart = keyProps.end;
      const keyNode = key ? composeNode2(ctx, key, keyProps, onError) : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
      if (ctx.schema.compat)
        utilFlowIndentCheck2.flowIndentCheck(bm.indent, key, onError);
      ctx.atKey = false;
      if (utilMapIncludes2.mapIncludes(ctx, map2.items, keyNode))
        onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
      const valueProps = resolveProps2.resolveProps(sep != null ? sep : [], {
        indicator: "map-value-ind",
        next: value,
        offset: keyNode.range[2],
        onError,
        parentIndent: bm.indent,
        startOnNewline: !key || key.type === "block-scalar"
      });
      offset = valueProps.end;
      if (valueProps.found) {
        if (implicitKey) {
          if ((value == null ? void 0 : value.type) === "block-map" && !valueProps.hasNewline)
            onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
          if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024)
            onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
        }
        const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
        if (ctx.schema.compat)
          utilFlowIndentCheck2.flowIndentCheck(bm.indent, value, onError);
        offset = valueNode.range[2];
        const pair = new Pair2.Pair(keyNode, valueNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        map2.items.push(pair);
      } else {
        if (implicitKey)
          onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
        if (valueProps.comment) {
          if (keyNode.comment)
            keyNode.comment += "\n" + valueProps.comment;
          else
            keyNode.comment = valueProps.comment;
        }
        const pair = new Pair2.Pair(keyNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        map2.items.push(pair);
      }
    }
    if (commentEnd && commentEnd < offset)
      onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
    map2.range = [bm.offset, offset, commentEnd != null ? commentEnd : offset];
    return map2;
  }
  resolveBlockMap.resolveBlockMap = resolveBlockMap$1;
  return resolveBlockMap;
}
var resolveBlockSeq = {};
var hasRequiredResolveBlockSeq;
function requireResolveBlockSeq() {
  if (hasRequiredResolveBlockSeq) return resolveBlockSeq;
  hasRequiredResolveBlockSeq = 1;
  var YAMLSeq2 = requireYAMLSeq();
  var resolveProps2 = requireResolveProps();
  var utilFlowIndentCheck2 = requireUtilFlowIndentCheck();
  function resolveBlockSeq$1({ composeNode: composeNode2, composeEmptyNode }, ctx, bs, onError, tag) {
    var _a;
    const NodeClass = (_a = tag == null ? void 0 : tag.nodeClass) != null ? _a : YAMLSeq2.YAMLSeq;
    const seq2 = new NodeClass(ctx.schema);
    if (ctx.atRoot)
      ctx.atRoot = false;
    if (ctx.atKey)
      ctx.atKey = false;
    let offset = bs.offset;
    let commentEnd = null;
    for (const { start, value } of bs.items) {
      const props = resolveProps2.resolveProps(start, {
        indicator: "seq-item-ind",
        next: value,
        offset,
        onError,
        parentIndent: bs.indent,
        startOnNewline: true
      });
      if (!props.found) {
        if (props.anchor || props.tag || value) {
          if ((value == null ? void 0 : value.type) === "block-seq")
            onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
          else
            onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
        } else {
          commentEnd = props.end;
          if (props.comment)
            seq2.comment = props.comment;
          continue;
        }
      }
      const node = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
      if (ctx.schema.compat)
        utilFlowIndentCheck2.flowIndentCheck(bs.indent, value, onError);
      offset = node.range[2];
      seq2.items.push(node);
    }
    seq2.range = [bs.offset, offset, commentEnd != null ? commentEnd : offset];
    return seq2;
  }
  resolveBlockSeq.resolveBlockSeq = resolveBlockSeq$1;
  return resolveBlockSeq;
}
var resolveFlowCollection = {};
var resolveEnd = {};
var hasRequiredResolveEnd;
function requireResolveEnd() {
  if (hasRequiredResolveEnd) return resolveEnd;
  hasRequiredResolveEnd = 1;
  function resolveEnd$1(end, offset, reqSpace, onError) {
    let comment = "";
    if (end) {
      let hasSpace = false;
      let sep = "";
      for (const token of end) {
        const { source, type } = token;
        switch (type) {
          case "space":
            hasSpace = true;
            break;
          case "comment": {
            if (reqSpace && !hasSpace)
              onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            const cb = source.substring(1) || " ";
            if (!comment)
              comment = cb;
            else
              comment += sep + cb;
            sep = "";
            break;
          }
          case "newline":
            if (comment)
              sep += source;
            hasSpace = true;
            break;
          default:
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
        }
        offset += source.length;
      }
    }
    return { comment, offset };
  }
  resolveEnd.resolveEnd = resolveEnd$1;
  return resolveEnd;
}
var hasRequiredResolveFlowCollection;
function requireResolveFlowCollection() {
  if (hasRequiredResolveFlowCollection) return resolveFlowCollection;
  hasRequiredResolveFlowCollection = 1;
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var YAMLMap2 = requireYAMLMap();
  var YAMLSeq2 = requireYAMLSeq();
  var resolveEnd2 = requireResolveEnd();
  var resolveProps2 = requireResolveProps();
  var utilContainsNewline2 = requireUtilContainsNewline();
  var utilMapIncludes2 = requireUtilMapIncludes();
  const blockMsg = "Block collections are not allowed within flow collections";
  const isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
  function resolveFlowCollection$1({ composeNode: composeNode2, composeEmptyNode }, ctx, fc, onError, tag) {
    var _a, _b, _c;
    const isMap = fc.start.source === "{";
    const fcName = isMap ? "flow map" : "flow sequence";
    const NodeClass = (_a = tag == null ? void 0 : tag.nodeClass) != null ? _a : isMap ? YAMLMap2.YAMLMap : YAMLSeq2.YAMLSeq;
    const coll = new NodeClass(ctx.schema);
    coll.flow = true;
    const atRoot = ctx.atRoot;
    if (atRoot)
      ctx.atRoot = false;
    if (ctx.atKey)
      ctx.atKey = false;
    let offset = fc.offset + fc.start.source.length;
    for (let i = 0; i < fc.items.length; ++i) {
      const collItem = fc.items[i];
      const { start, key, sep, value } = collItem;
      const props = resolveProps2.resolveProps(start, {
        flow: fcName,
        indicator: "explicit-key-ind",
        next: key != null ? key : sep == null ? void 0 : sep[0],
        offset,
        onError,
        parentIndent: fc.indent,
        startOnNewline: false
      });
      if (!props.found) {
        if (!props.anchor && !props.tag && !sep && !value) {
          if (i === 0 && props.comma)
            onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
          else if (i < fc.items.length - 1)
            onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
          if (props.comment) {
            if (coll.comment)
              coll.comment += "\n" + props.comment;
            else
              coll.comment = props.comment;
          }
          offset = props.end;
          continue;
        }
        if (!isMap && ctx.options.strict && utilContainsNewline2.containsNewline(key))
          onError(
            key,
            // checked by containsNewline()
            "MULTILINE_IMPLICIT_KEY",
            "Implicit keys of flow sequence pairs need to be on a single line"
          );
      }
      if (i === 0) {
        if (props.comma)
          onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
      } else {
        if (!props.comma)
          onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
        if (props.comment) {
          let prevItemComment = "";
          loop: for (const st of start) {
            switch (st.type) {
              case "comma":
              case "space":
                break;
              case "comment":
                prevItemComment = st.source.substring(1);
                break loop;
              default:
                break loop;
            }
          }
          if (prevItemComment) {
            let prev = coll.items[coll.items.length - 1];
            if (identity2.isPair(prev))
              prev = (_b = prev.value) != null ? _b : prev.key;
            if (prev.comment)
              prev.comment += "\n" + prevItemComment;
            else
              prev.comment = prevItemComment;
            props.comment = props.comment.substring(prevItemComment.length + 1);
          }
        }
      }
      if (!isMap && !sep && !props.found) {
        const valueNode = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, sep, null, props, onError);
        coll.items.push(valueNode);
        offset = valueNode.range[2];
        if (isBlock(value))
          onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
      } else {
        ctx.atKey = true;
        const keyStart = props.end;
        const keyNode = key ? composeNode2(ctx, key, props, onError) : composeEmptyNode(ctx, keyStart, start, null, props, onError);
        if (isBlock(key))
          onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
        ctx.atKey = false;
        const valueProps = resolveProps2.resolveProps(sep != null ? sep : [], {
          flow: fcName,
          indicator: "map-value-ind",
          next: value,
          offset: keyNode.range[2],
          onError,
          parentIndent: fc.indent,
          startOnNewline: false
        });
        if (valueProps.found) {
          if (!isMap && !props.found && ctx.options.strict) {
            if (sep)
              for (const st of sep) {
                if (st === valueProps.found)
                  break;
                if (st.type === "newline") {
                  onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                  break;
                }
              }
            if (props.start < valueProps.found.offset - 1024)
              onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
          }
        } else if (value) {
          if ("source" in value && ((_c = value.source) == null ? void 0 : _c[0]) === ":")
            onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
          else
            onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
        }
        const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError) : null;
        if (valueNode) {
          if (isBlock(value))
            onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
        } else if (valueProps.comment) {
          if (keyNode.comment)
            keyNode.comment += "\n" + valueProps.comment;
          else
            keyNode.comment = valueProps.comment;
        }
        const pair = new Pair2.Pair(keyNode, valueNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        if (isMap) {
          const map2 = coll;
          if (utilMapIncludes2.mapIncludes(ctx, map2.items, keyNode))
            onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
          map2.items.push(pair);
        } else {
          const map2 = new YAMLMap2.YAMLMap(ctx.schema);
          map2.flow = true;
          map2.items.push(pair);
          const endRange = (valueNode != null ? valueNode : keyNode).range;
          map2.range = [keyNode.range[0], endRange[1], endRange[2]];
          coll.items.push(map2);
        }
        offset = valueNode ? valueNode.range[2] : valueProps.end;
      }
    }
    const expectedEnd = isMap ? "}" : "]";
    const [ce, ...ee] = fc.end;
    let cePos = offset;
    if ((ce == null ? void 0 : ce.source) === expectedEnd)
      cePos = ce.offset + ce.source.length;
    else {
      const name = fcName[0].toUpperCase() + fcName.substring(1);
      const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
      onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
      if (ce && ce.source.length !== 1)
        ee.unshift(ce);
    }
    if (ee.length > 0) {
      const end = resolveEnd2.resolveEnd(ee, cePos, ctx.options.strict, onError);
      if (end.comment) {
        if (coll.comment)
          coll.comment += "\n" + end.comment;
        else
          coll.comment = end.comment;
      }
      coll.range = [fc.offset, cePos, end.offset];
    } else {
      coll.range = [fc.offset, cePos, cePos];
    }
    return coll;
  }
  resolveFlowCollection.resolveFlowCollection = resolveFlowCollection$1;
  return resolveFlowCollection;
}
var hasRequiredComposeCollection;
function requireComposeCollection() {
  if (hasRequiredComposeCollection) return composeCollection;
  hasRequiredComposeCollection = 1;
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  var YAMLMap2 = requireYAMLMap();
  var YAMLSeq2 = requireYAMLSeq();
  var resolveBlockMap2 = requireResolveBlockMap();
  var resolveBlockSeq2 = requireResolveBlockSeq();
  var resolveFlowCollection2 = requireResolveFlowCollection();
  function resolveCollection(CN, ctx, token, onError, tagName, tag) {
    const coll = token.type === "block-map" ? resolveBlockMap2.resolveBlockMap(CN, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq2.resolveBlockSeq(CN, ctx, token, onError, tag) : resolveFlowCollection2.resolveFlowCollection(CN, ctx, token, onError, tag);
    const Coll = coll.constructor;
    if (tagName === "!" || tagName === Coll.tagName) {
      coll.tag = Coll.tagName;
      return coll;
    }
    if (tagName)
      coll.tag = tagName;
    return coll;
  }
  function composeCollection$1(CN, ctx, token, props, onError) {
    var _a, _b, _c;
    const tagToken = props.tag;
    const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
    if (token.type === "block-seq") {
      const { anchor, newlineAfterProp: nl } = props;
      const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor != null ? anchor : tagToken;
      if (lastProp && (!nl || nl.offset < lastProp.offset)) {
        const message = "Missing newline after block sequence props";
        onError(lastProp, "MISSING_CHAR", message);
      }
    }
    const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
    if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap2.YAMLMap.tagName && expType === "map" || tagName === YAMLSeq2.YAMLSeq.tagName && expType === "seq") {
      return resolveCollection(CN, ctx, token, onError, tagName);
    }
    let tag = ctx.schema.tags.find((t) => t.tag === tagName && t.collection === expType);
    if (!tag) {
      const kt = ctx.schema.knownTags[tagName];
      if ((kt == null ? void 0 : kt.collection) === expType) {
        ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
        tag = kt;
      } else {
        if (kt) {
          onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${(_a = kt.collection) != null ? _a : "scalar"}`, true);
        } else {
          onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
        }
        return resolveCollection(CN, ctx, token, onError, tagName);
      }
    }
    const coll = resolveCollection(CN, ctx, token, onError, tagName, tag);
    const res = (_c = (_b = tag.resolve) == null ? void 0 : _b.call(tag, coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options)) != null ? _c : coll;
    const node = identity2.isNode(res) ? res : new Scalar2.Scalar(res);
    node.range = coll.range;
    node.tag = tagName;
    if (tag == null ? void 0 : tag.format)
      node.format = tag.format;
    return node;
  }
  composeCollection.composeCollection = composeCollection$1;
  return composeCollection;
}
var composeScalar = {};
var resolveBlockScalar = {};
var hasRequiredResolveBlockScalar;
function requireResolveBlockScalar() {
  if (hasRequiredResolveBlockScalar) return resolveBlockScalar;
  hasRequiredResolveBlockScalar = 1;
  var Scalar2 = requireScalar();
  function resolveBlockScalar$1(ctx, scalar, onError) {
    const start = scalar.offset;
    const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
    if (!header)
      return { value: "", type: null, comment: "", range: [start, start, start] };
    const type = header.mode === ">" ? Scalar2.Scalar.BLOCK_FOLDED : Scalar2.Scalar.BLOCK_LITERAL;
    const lines = scalar.source ? splitLines(scalar.source) : [];
    let chompStart = lines.length;
    for (let i = lines.length - 1; i >= 0; --i) {
      const content = lines[i][1];
      if (content === "" || content === "\r")
        chompStart = i;
      else
        break;
    }
    if (chompStart === 0) {
      const value2 = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
      let end2 = start + header.length;
      if (scalar.source)
        end2 += scalar.source.length;
      return { value: value2, type, comment: header.comment, range: [start, end2, end2] };
    }
    let trimIndent = scalar.indent + header.indent;
    let offset = scalar.offset + header.length;
    let contentStart = 0;
    for (let i = 0; i < chompStart; ++i) {
      const [indent, content] = lines[i];
      if (content === "" || content === "\r") {
        if (header.indent === 0 && indent.length > trimIndent)
          trimIndent = indent.length;
      } else {
        if (indent.length < trimIndent) {
          const message = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
          onError(offset + indent.length, "MISSING_CHAR", message);
        }
        if (header.indent === 0)
          trimIndent = indent.length;
        contentStart = i;
        if (trimIndent === 0 && !ctx.atRoot) {
          const message = "Block scalar values in collections must be indented";
          onError(offset, "BAD_INDENT", message);
        }
        break;
      }
      offset += indent.length + content.length + 1;
    }
    for (let i = lines.length - 1; i >= chompStart; --i) {
      if (lines[i][0].length > trimIndent)
        chompStart = i + 1;
    }
    let value = "";
    let sep = "";
    let prevMoreIndented = false;
    for (let i = 0; i < contentStart; ++i)
      value += lines[i][0].slice(trimIndent) + "\n";
    for (let i = contentStart; i < chompStart; ++i) {
      let [indent, content] = lines[i];
      offset += indent.length + content.length + 1;
      const crlf = content[content.length - 1] === "\r";
      if (crlf)
        content = content.slice(0, -1);
      if (content && indent.length < trimIndent) {
        const src = header.indent ? "explicit indentation indicator" : "first line";
        const message = `Block scalar lines must not be less indented than their ${src}`;
        onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
        indent = "";
      }
      if (type === Scalar2.Scalar.BLOCK_LITERAL) {
        value += sep + indent.slice(trimIndent) + content;
        sep = "\n";
      } else if (indent.length > trimIndent || content[0] === "	") {
        if (sep === " ")
          sep = "\n";
        else if (!prevMoreIndented && sep === "\n")
          sep = "\n\n";
        value += sep + indent.slice(trimIndent) + content;
        sep = "\n";
        prevMoreIndented = true;
      } else if (content === "") {
        if (sep === "\n")
          value += "\n";
        else
          sep = "\n";
      } else {
        value += sep + content;
        sep = " ";
        prevMoreIndented = false;
      }
    }
    switch (header.chomp) {
      case "-":
        break;
      case "+":
        for (let i = chompStart; i < lines.length; ++i)
          value += "\n" + lines[i][0].slice(trimIndent);
        if (value[value.length - 1] !== "\n")
          value += "\n";
        break;
      default:
        value += "\n";
    }
    const end = start + header.length + scalar.source.length;
    return { value, type, comment: header.comment, range: [start, end, end] };
  }
  function parseBlockScalarHeader({ offset, props }, strict, onError) {
    if (props[0].type !== "block-scalar-header") {
      onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
      return null;
    }
    const { source } = props[0];
    const mode = source[0];
    let indent = 0;
    let chomp = "";
    let error = -1;
    for (let i = 1; i < source.length; ++i) {
      const ch = source[i];
      if (!chomp && (ch === "-" || ch === "+"))
        chomp = ch;
      else {
        const n = Number(ch);
        if (!indent && n)
          indent = n;
        else if (error === -1)
          error = offset + i;
      }
    }
    if (error !== -1)
      onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
    let hasSpace = false;
    let comment = "";
    let length = source.length;
    for (let i = 1; i < props.length; ++i) {
      const token = props[i];
      switch (token.type) {
        case "space":
          hasSpace = true;
        // fallthrough
        case "newline":
          length += token.source.length;
          break;
        case "comment":
          if (strict && !hasSpace) {
            const message = "Comments must be separated from other tokens by white space characters";
            onError(token, "MISSING_CHAR", message);
          }
          length += token.source.length;
          comment = token.source.substring(1);
          break;
        case "error":
          onError(token, "UNEXPECTED_TOKEN", token.message);
          length += token.source.length;
          break;
        /* istanbul ignore next should not happen */
        default: {
          const message = `Unexpected token in block scalar header: ${token.type}`;
          onError(token, "UNEXPECTED_TOKEN", message);
          const ts = token.source;
          if (ts && typeof ts === "string")
            length += ts.length;
        }
      }
    }
    return { mode, indent, chomp, comment, length };
  }
  function splitLines(source) {
    const split = source.split(/\n( *)/);
    const first = split[0];
    const m = first.match(/^( *)/);
    const line0 = (m == null ? void 0 : m[1]) ? [m[1], first.slice(m[1].length)] : ["", first];
    const lines = [line0];
    for (let i = 1; i < split.length; i += 2)
      lines.push([split[i], split[i + 1]]);
    return lines;
  }
  resolveBlockScalar.resolveBlockScalar = resolveBlockScalar$1;
  return resolveBlockScalar;
}
var resolveFlowScalar = {};
var hasRequiredResolveFlowScalar;
function requireResolveFlowScalar() {
  if (hasRequiredResolveFlowScalar) return resolveFlowScalar;
  hasRequiredResolveFlowScalar = 1;
  var Scalar2 = requireScalar();
  var resolveEnd2 = requireResolveEnd();
  function resolveFlowScalar$1(scalar, strict, onError) {
    const { offset, type, source, end } = scalar;
    let _type;
    let value;
    const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
    switch (type) {
      case "scalar":
        _type = Scalar2.Scalar.PLAIN;
        value = plainValue(source, _onError);
        break;
      case "single-quoted-scalar":
        _type = Scalar2.Scalar.QUOTE_SINGLE;
        value = singleQuotedValue(source, _onError);
        break;
      case "double-quoted-scalar":
        _type = Scalar2.Scalar.QUOTE_DOUBLE;
        value = doubleQuotedValue(source, _onError);
        break;
      /* istanbul ignore next should not happen */
      default:
        onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
        return {
          value: "",
          type: null,
          comment: "",
          range: [offset, offset + source.length, offset + source.length]
        };
    }
    const valueEnd = offset + source.length;
    const re = resolveEnd2.resolveEnd(end, valueEnd, strict, onError);
    return {
      value,
      type: _type,
      comment: re.comment,
      range: [offset, valueEnd, re.offset]
    };
  }
  function plainValue(source, onError) {
    let badChar = "";
    switch (source[0]) {
      /* istanbul ignore next should not happen */
      case "	":
        badChar = "a tab character";
        break;
      case ",":
        badChar = "flow indicator character ,";
        break;
      case "%":
        badChar = "directive indicator character %";
        break;
      case "|":
      case ">": {
        badChar = `block scalar indicator ${source[0]}`;
        break;
      }
      case "@":
      case "`": {
        badChar = `reserved character ${source[0]}`;
        break;
      }
    }
    if (badChar)
      onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
    return foldLines(source);
  }
  function singleQuotedValue(source, onError) {
    if (source[source.length - 1] !== "'" || source.length === 1)
      onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
    return foldLines(source.slice(1, -1)).replace(/''/g, "'");
  }
  function foldLines(source) {
    var _a;
    let first, line;
    try {
      first = new RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy");
      line = new RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
    } catch {
      first = /(.*?)[ \t]*\r?\n/sy;
      line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
    }
    let match = first.exec(source);
    if (!match)
      return source;
    let res = match[1];
    let sep = " ";
    let pos = first.lastIndex;
    line.lastIndex = pos;
    while (match = line.exec(source)) {
      if (match[1] === "") {
        if (sep === "\n")
          res += sep;
        else
          sep = "\n";
      } else {
        res += sep + match[1];
        sep = " ";
      }
      pos = line.lastIndex;
    }
    const last = /[ \t]*(.*)/sy;
    last.lastIndex = pos;
    match = last.exec(source);
    return res + sep + ((_a = match == null ? void 0 : match[1]) != null ? _a : "");
  }
  function doubleQuotedValue(source, onError) {
    let res = "";
    for (let i = 1; i < source.length - 1; ++i) {
      const ch = source[i];
      if (ch === "\r" && source[i + 1] === "\n")
        continue;
      if (ch === "\n") {
        const { fold, offset } = foldNewline(source, i);
        res += fold;
        i = offset;
      } else if (ch === "\\") {
        let next = source[++i];
        const cc = escapeCodes[next];
        if (cc)
          res += cc;
        else if (next === "\n") {
          next = source[i + 1];
          while (next === " " || next === "	")
            next = source[++i + 1];
        } else if (next === "\r" && source[i + 1] === "\n") {
          next = source[++i + 1];
          while (next === " " || next === "	")
            next = source[++i + 1];
        } else if (next === "x" || next === "u" || next === "U") {
          const length = next === "x" ? 2 : next === "u" ? 4 : 8;
          res += parseCharCode(source, i + 1, length, onError);
          i += length;
        } else {
          const raw = source.substr(i - 1, 2);
          onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
          res += raw;
        }
      } else if (ch === " " || ch === "	") {
        const wsStart = i;
        let next = source[i + 1];
        while (next === " " || next === "	")
          next = source[++i + 1];
        if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n"))
          res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
      } else {
        res += ch;
      }
    }
    if (source[source.length - 1] !== '"' || source.length === 1)
      onError(source.length, "MISSING_CHAR", 'Missing closing "quote');
    return res;
  }
  function foldNewline(source, offset) {
    let fold = "";
    let ch = source[offset + 1];
    while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
      if (ch === "\r" && source[offset + 2] !== "\n")
        break;
      if (ch === "\n")
        fold += "\n";
      offset += 1;
      ch = source[offset + 1];
    }
    if (!fold)
      fold = " ";
    return { fold, offset };
  }
  const escapeCodes = {
    "0": "\0",
    // null character
    a: "\x07",
    // bell character
    b: "\b",
    // backspace
    e: "\x1B",
    // escape character
    f: "\f",
    // form feed
    n: "\n",
    // line feed
    r: "\r",
    // carriage return
    t: "	",
    // horizontal tab
    v: "\v",
    // vertical tab
    N: "\x85",
    // Unicode next line
    _: "\xA0",
    // Unicode non-breaking space
    L: "\u2028",
    // Unicode line separator
    P: "\u2029",
    // Unicode paragraph separator
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    "	": "	"
  };
  function parseCharCode(source, offset, length, onError) {
    const cc = source.substr(offset, length);
    const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
    const code = ok ? parseInt(cc, 16) : NaN;
    try {
      return String.fromCodePoint(code);
    } catch {
      const raw = source.substr(offset - 2, length + 2);
      onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
      return raw;
    }
  }
  resolveFlowScalar.resolveFlowScalar = resolveFlowScalar$1;
  return resolveFlowScalar;
}
var hasRequiredComposeScalar;
function requireComposeScalar() {
  if (hasRequiredComposeScalar) return composeScalar;
  hasRequiredComposeScalar = 1;
  var identity2 = requireIdentity();
  var Scalar2 = requireScalar();
  var resolveBlockScalar2 = requireResolveBlockScalar();
  var resolveFlowScalar2 = requireResolveFlowScalar();
  function composeScalar$1(ctx, token, tagToken, onError) {
    const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar2.resolveBlockScalar(ctx, token, onError) : resolveFlowScalar2.resolveFlowScalar(token, ctx.options.strict, onError);
    const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
    let tag;
    if (ctx.options.stringKeys && ctx.atKey) {
      tag = ctx.schema[identity2.SCALAR];
    } else if (tagName)
      tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
    else if (token.type === "scalar")
      tag = findScalarTagByTest(ctx, value, token, onError);
    else
      tag = ctx.schema[identity2.SCALAR];
    let scalar;
    try {
      const res = tag.resolve(value, (msg) => onError(tagToken != null ? tagToken : token, "TAG_RESOLVE_FAILED", msg), ctx.options);
      scalar = identity2.isScalar(res) ? res : new Scalar2.Scalar(res);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      onError(tagToken != null ? tagToken : token, "TAG_RESOLVE_FAILED", msg);
      scalar = new Scalar2.Scalar(value);
    }
    scalar.range = range;
    scalar.source = value;
    if (type)
      scalar.type = type;
    if (tagName)
      scalar.tag = tagName;
    if (tag.format)
      scalar.format = tag.format;
    if (comment)
      scalar.comment = comment;
    return scalar;
  }
  function findScalarTagByName(schema2, value, tagName, tagToken, onError) {
    var _a;
    if (tagName === "!")
      return schema2[identity2.SCALAR];
    const matchWithTest = [];
    for (const tag of schema2.tags) {
      if (!tag.collection && tag.tag === tagName) {
        if (tag.default && tag.test)
          matchWithTest.push(tag);
        else
          return tag;
      }
    }
    for (const tag of matchWithTest)
      if ((_a = tag.test) == null ? void 0 : _a.test(value))
        return tag;
    const kt = schema2.knownTags[tagName];
    if (kt && !kt.collection) {
      schema2.tags.push(Object.assign({}, kt, { default: false, test: void 0 }));
      return kt;
    }
    onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
    return schema2[identity2.SCALAR];
  }
  function findScalarTagByTest({ atKey, directives: directives2, schema: schema2 }, value, token, onError) {
    var _a;
    const tag = schema2.tags.find((tag2) => {
      var _a2;
      return (tag2.default === true || atKey && tag2.default === "key") && ((_a2 = tag2.test) == null ? void 0 : _a2.test(value));
    }) || schema2[identity2.SCALAR];
    if (schema2.compat) {
      const compat = (_a = schema2.compat.find((tag2) => {
        var _a2;
        return tag2.default && ((_a2 = tag2.test) == null ? void 0 : _a2.test(value));
      })) != null ? _a : schema2[identity2.SCALAR];
      if (tag.tag !== compat.tag) {
        const ts = directives2.tagString(tag.tag);
        const cs = directives2.tagString(compat.tag);
        const msg = `Value may be parsed as either ${ts} or ${cs}`;
        onError(token, "TAG_RESOLVE_FAILED", msg, true);
      }
    }
    return tag;
  }
  composeScalar.composeScalar = composeScalar$1;
  return composeScalar;
}
var utilEmptyScalarPosition = {};
var hasRequiredUtilEmptyScalarPosition;
function requireUtilEmptyScalarPosition() {
  if (hasRequiredUtilEmptyScalarPosition) return utilEmptyScalarPosition;
  hasRequiredUtilEmptyScalarPosition = 1;
  function emptyScalarPosition(offset, before, pos) {
    if (before) {
      pos != null ? pos : pos = before.length;
      for (let i = pos - 1; i >= 0; --i) {
        let st = before[i];
        switch (st.type) {
          case "space":
          case "comment":
          case "newline":
            offset -= st.source.length;
            continue;
        }
        st = before[++i];
        while ((st == null ? void 0 : st.type) === "space") {
          offset += st.source.length;
          st = before[++i];
        }
        break;
      }
    }
    return offset;
  }
  utilEmptyScalarPosition.emptyScalarPosition = emptyScalarPosition;
  return utilEmptyScalarPosition;
}
var hasRequiredComposeNode;
function requireComposeNode() {
  if (hasRequiredComposeNode) return composeNode;
  hasRequiredComposeNode = 1;
  var Alias2 = requireAlias();
  var identity2 = requireIdentity();
  var composeCollection2 = requireComposeCollection();
  var composeScalar2 = requireComposeScalar();
  var resolveEnd2 = requireResolveEnd();
  var utilEmptyScalarPosition2 = requireUtilEmptyScalarPosition();
  const CN = { composeNode: composeNode$1, composeEmptyNode };
  function composeNode$1(ctx, token, props, onError) {
    const atKey = ctx.atKey;
    const { spaceBefore, comment, anchor, tag } = props;
    let node;
    let isSrcToken = true;
    switch (token.type) {
      case "alias":
        node = composeAlias(ctx, token, onError);
        if (anchor || tag)
          onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
        break;
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "block-scalar":
        node = composeScalar2.composeScalar(ctx, token, tag, onError);
        if (anchor)
          node.anchor = anchor.source.substring(1);
        break;
      case "block-map":
      case "block-seq":
      case "flow-collection":
        try {
          node = composeCollection2.composeCollection(CN, ctx, token, props, onError);
          if (anchor)
            node.anchor = anchor.source.substring(1);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          onError(token, "RESOURCE_EXHAUSTION", message);
        }
        break;
      default: {
        const message = token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`;
        onError(token, "UNEXPECTED_TOKEN", message);
        isSrcToken = false;
      }
    }
    node != null ? node : node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError);
    if (anchor && node.anchor === "")
      onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
    if (atKey && ctx.options.stringKeys && (!identity2.isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) {
      const msg = "With stringKeys, all keys must be strings";
      onError(tag != null ? tag : token, "NON_STRING_KEY", msg);
    }
    if (spaceBefore)
      node.spaceBefore = true;
    if (comment) {
      if (token.type === "scalar" && token.source === "")
        node.comment = comment;
      else
        node.commentBefore = comment;
    }
    if (ctx.options.keepSourceTokens && isSrcToken)
      node.srcToken = token;
    return node;
  }
  function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
    const token = {
      type: "scalar",
      offset: utilEmptyScalarPosition2.emptyScalarPosition(offset, before, pos),
      indent: -1,
      source: ""
    };
    const node = composeScalar2.composeScalar(ctx, token, tag, onError);
    if (anchor) {
      node.anchor = anchor.source.substring(1);
      if (node.anchor === "")
        onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
    }
    if (spaceBefore)
      node.spaceBefore = true;
    if (comment) {
      node.comment = comment;
      node.range[2] = end;
    }
    return node;
  }
  function composeAlias({ options }, { offset, source, end }, onError) {
    const alias = new Alias2.Alias(source.substring(1));
    if (alias.source === "")
      onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
    if (alias.source.endsWith(":"))
      onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
    const valueEnd = offset + source.length;
    const re = resolveEnd2.resolveEnd(end, valueEnd, options.strict, onError);
    alias.range = [offset, valueEnd, re.offset];
    if (re.comment)
      alias.comment = re.comment;
    return alias;
  }
  composeNode.composeEmptyNode = composeEmptyNode;
  composeNode.composeNode = composeNode$1;
  return composeNode;
}
var hasRequiredComposeDoc;
function requireComposeDoc() {
  if (hasRequiredComposeDoc) return composeDoc;
  hasRequiredComposeDoc = 1;
  var Document2 = requireDocument();
  var composeNode2 = requireComposeNode();
  var resolveEnd2 = requireResolveEnd();
  var resolveProps2 = requireResolveProps();
  function composeDoc$1(options, directives2, { offset, start, value, end }, onError) {
    const opts = Object.assign({ _directives: directives2 }, options);
    const doc = new Document2.Document(void 0, opts);
    const ctx = {
      atKey: false,
      atRoot: true,
      directives: doc.directives,
      options: doc.options,
      schema: doc.schema
    };
    const props = resolveProps2.resolveProps(start, {
      indicator: "doc-start",
      next: value != null ? value : end == null ? void 0 : end[0],
      offset,
      onError,
      parentIndent: 0,
      startOnNewline: true
    });
    if (props.found) {
      doc.directives.docStart = true;
      if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline)
        onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
    }
    doc.contents = value ? composeNode2.composeNode(ctx, value, props, onError) : composeNode2.composeEmptyNode(ctx, props.end, start, null, props, onError);
    const contentEnd = doc.contents.range[2];
    const re = resolveEnd2.resolveEnd(end, contentEnd, false, onError);
    if (re.comment)
      doc.comment = re.comment;
    doc.range = [offset, contentEnd, re.offset];
    return doc;
  }
  composeDoc.composeDoc = composeDoc$1;
  return composeDoc;
}
var hasRequiredComposer;
function requireComposer() {
  if (hasRequiredComposer) return composer;
  hasRequiredComposer = 1;
  var node_process = require$$0__default;
  var directives2 = requireDirectives();
  var Document2 = requireDocument();
  var errors2 = requireErrors();
  var identity2 = requireIdentity();
  var composeDoc2 = requireComposeDoc();
  var resolveEnd2 = requireResolveEnd();
  function getErrorPos(src) {
    if (typeof src === "number")
      return [src, src + 1];
    if (Array.isArray(src))
      return src.length === 2 ? src : [src[0], src[1]];
    const { offset, source } = src;
    return [offset, offset + (typeof source === "string" ? source.length : 1)];
  }
  function parsePrelude(prelude) {
    var _a;
    let comment = "";
    let atComment = false;
    let afterEmptyLine = false;
    for (let i = 0; i < prelude.length; ++i) {
      const source = prelude[i];
      switch (source[0]) {
        case "#":
          comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
          atComment = true;
          afterEmptyLine = false;
          break;
        case "%":
          if (((_a = prelude[i + 1]) == null ? void 0 : _a[0]) !== "#")
            i += 1;
          atComment = false;
          break;
        default:
          if (!atComment)
            afterEmptyLine = true;
          atComment = false;
      }
    }
    return { comment, afterEmptyLine };
  }
  class Composer {
    constructor(options = {}) {
      this.doc = null;
      this.atDirectives = false;
      this.prelude = [];
      this.errors = [];
      this.warnings = [];
      this.onError = (source, code, message, warning) => {
        const pos = getErrorPos(source);
        if (warning)
          this.warnings.push(new errors2.YAMLWarning(pos, code, message));
        else
          this.errors.push(new errors2.YAMLParseError(pos, code, message));
      };
      this.directives = new directives2.Directives({ version: options.version || "1.2" });
      this.options = options;
    }
    decorate(doc, afterDoc) {
      const { comment, afterEmptyLine } = parsePrelude(this.prelude);
      if (comment) {
        const dc = doc.contents;
        if (afterDoc) {
          doc.comment = doc.comment ? `${doc.comment}
${comment}` : comment;
        } else if (afterEmptyLine || doc.directives.docStart || !dc) {
          doc.commentBefore = comment;
        } else if (identity2.isCollection(dc) && !dc.flow && dc.items.length > 0) {
          let it = dc.items[0];
          if (identity2.isPair(it))
            it = it.key;
          const cb = it.commentBefore;
          it.commentBefore = cb ? `${comment}
${cb}` : comment;
        } else {
          const cb = dc.commentBefore;
          dc.commentBefore = cb ? `${comment}
${cb}` : comment;
        }
      }
      if (afterDoc) {
        for (let i = 0; i < this.errors.length; ++i)
          doc.errors.push(this.errors[i]);
        for (let i = 0; i < this.warnings.length; ++i)
          doc.warnings.push(this.warnings[i]);
      } else {
        doc.errors = this.errors;
        doc.warnings = this.warnings;
      }
      this.prelude = [];
      this.errors = [];
      this.warnings = [];
    }
    /**
     * Current stream status information.
     *
     * Mostly useful at the end of input for an empty stream.
     */
    streamInfo() {
      return {
        comment: parsePrelude(this.prelude).comment,
        directives: this.directives,
        errors: this.errors,
        warnings: this.warnings
      };
    }
    /**
     * Compose tokens into documents.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    *compose(tokens, forceDoc = false, endOffset = -1) {
      for (const token of tokens)
        yield* this.next(token);
      yield* this.end(forceDoc, endOffset);
    }
    /** Advance the composer by one CST token. */
    *next(token) {
      if (node_process.env.LOG_STREAM)
        console.dir(token, { depth: null });
      switch (token.type) {
        case "directive":
          this.directives.add(token.source, (offset, message, warning) => {
            const pos = getErrorPos(token);
            pos[0] += offset;
            this.onError(pos, "BAD_DIRECTIVE", message, warning);
          });
          this.prelude.push(token.source);
          this.atDirectives = true;
          break;
        case "document": {
          const doc = composeDoc2.composeDoc(this.options, this.directives, token, this.onError);
          if (this.atDirectives && !doc.directives.docStart)
            this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
          this.decorate(doc, false);
          if (this.doc)
            yield this.doc;
          this.doc = doc;
          this.atDirectives = false;
          break;
        }
        case "byte-order-mark":
        case "space":
          break;
        case "comment":
        case "newline":
          this.prelude.push(token.source);
          break;
        case "error": {
          const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
          const error = new errors2.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
          if (this.atDirectives || !this.doc)
            this.errors.push(error);
          else
            this.doc.errors.push(error);
          break;
        }
        case "doc-end": {
          if (!this.doc) {
            const msg = "Unexpected doc-end without preceding document";
            this.errors.push(new errors2.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg));
            break;
          }
          this.doc.directives.docEnd = true;
          const end = resolveEnd2.resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
          this.decorate(this.doc, true);
          if (end.comment) {
            const dc = this.doc.comment;
            this.doc.comment = dc ? `${dc}
${end.comment}` : end.comment;
          }
          this.doc.range[2] = end.offset;
          break;
        }
        default:
          this.errors.push(new errors2.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
      }
    }
    /**
     * Call at end of input to yield any remaining document.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    *end(forceDoc = false, endOffset = -1) {
      if (this.doc) {
        this.decorate(this.doc, true);
        yield this.doc;
        this.doc = null;
      } else if (forceDoc) {
        const opts = Object.assign({ _directives: this.directives }, this.options);
        const doc = new Document2.Document(void 0, opts);
        if (this.atDirectives)
          this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
        doc.range = [0, endOffset, endOffset];
        this.decorate(doc, false);
        yield doc;
      }
    }
  }
  composer.Composer = Composer;
  return composer;
}
var cst = {};
var cstScalar = {};
var hasRequiredCstScalar;
function requireCstScalar() {
  if (hasRequiredCstScalar) return cstScalar;
  hasRequiredCstScalar = 1;
  var resolveBlockScalar2 = requireResolveBlockScalar();
  var resolveFlowScalar2 = requireResolveFlowScalar();
  var errors2 = requireErrors();
  var stringifyString2 = requireStringifyString();
  function resolveAsScalar(token, strict = true, onError) {
    if (token) {
      const _onError = (pos, code, message) => {
        const offset = typeof pos === "number" ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
        if (onError)
          onError(offset, code, message);
        else
          throw new errors2.YAMLParseError([offset, offset + 1], code, message);
      };
      switch (token.type) {
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return resolveFlowScalar2.resolveFlowScalar(token, strict, _onError);
        case "block-scalar":
          return resolveBlockScalar2.resolveBlockScalar({ options: { strict } }, token, _onError);
      }
    }
    return null;
  }
  function createScalarToken(value, context) {
    var _a;
    const { implicitKey = false, indent, inFlow = false, offset = -1, type = "PLAIN" } = context;
    const source = stringifyString2.stringifyString({ type, value }, {
      implicitKey,
      indent: indent > 0 ? " ".repeat(indent) : "",
      inFlow,
      options: { blockQuote: true, lineWidth: -1 }
    });
    const end = (_a = context.end) != null ? _a : [
      { type: "newline", offset: -1, indent, source: "\n" }
    ];
    switch (source[0]) {
      case "|":
      case ">": {
        const he = source.indexOf("\n");
        const head = source.substring(0, he);
        const body = source.substring(he + 1) + "\n";
        const props = [
          { type: "block-scalar-header", offset, indent, source: head }
        ];
        if (!addEndtoBlockProps(props, end))
          props.push({ type: "newline", offset: -1, indent, source: "\n" });
        return { type: "block-scalar", offset, indent, props, source: body };
      }
      case '"':
        return { type: "double-quoted-scalar", offset, indent, source, end };
      case "'":
        return { type: "single-quoted-scalar", offset, indent, source, end };
      default:
        return { type: "scalar", offset, indent, source, end };
    }
  }
  function setScalarValue(token, value, context = {}) {
    let { afterKey = false, implicitKey = false, inFlow = false, type } = context;
    let indent = "indent" in token ? token.indent : null;
    if (afterKey && typeof indent === "number")
      indent += 2;
    if (!type)
      switch (token.type) {
        case "single-quoted-scalar":
          type = "QUOTE_SINGLE";
          break;
        case "double-quoted-scalar":
          type = "QUOTE_DOUBLE";
          break;
        case "block-scalar": {
          const header = token.props[0];
          if (header.type !== "block-scalar-header")
            throw new Error("Invalid block scalar header");
          type = header.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
          break;
        }
        default:
          type = "PLAIN";
      }
    const source = stringifyString2.stringifyString({ type, value }, {
      implicitKey: implicitKey || indent === null,
      indent: indent !== null && indent > 0 ? " ".repeat(indent) : "",
      inFlow,
      options: { blockQuote: true, lineWidth: -1 }
    });
    switch (source[0]) {
      case "|":
      case ">":
        setBlockScalarValue(token, source);
        break;
      case '"':
        setFlowScalarValue(token, source, "double-quoted-scalar");
        break;
      case "'":
        setFlowScalarValue(token, source, "single-quoted-scalar");
        break;
      default:
        setFlowScalarValue(token, source, "scalar");
    }
  }
  function setBlockScalarValue(token, source) {
    const he = source.indexOf("\n");
    const head = source.substring(0, he);
    const body = source.substring(he + 1) + "\n";
    if (token.type === "block-scalar") {
      const header = token.props[0];
      if (header.type !== "block-scalar-header")
        throw new Error("Invalid block scalar header");
      header.source = head;
      token.source = body;
    } else {
      const { offset } = token;
      const indent = "indent" in token ? token.indent : -1;
      const props = [
        { type: "block-scalar-header", offset, indent, source: head }
      ];
      if (!addEndtoBlockProps(props, "end" in token ? token.end : void 0))
        props.push({ type: "newline", offset: -1, indent, source: "\n" });
      for (const key of Object.keys(token))
        if (key !== "type" && key !== "offset")
          delete token[key];
      Object.assign(token, { type: "block-scalar", indent, props, source: body });
    }
  }
  function addEndtoBlockProps(props, end) {
    if (end)
      for (const st of end)
        switch (st.type) {
          case "space":
          case "comment":
            props.push(st);
            break;
          case "newline":
            props.push(st);
            return true;
        }
    return false;
  }
  function setFlowScalarValue(token, source, type) {
    switch (token.type) {
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        token.type = type;
        token.source = source;
        break;
      case "block-scalar": {
        const end = token.props.slice(1);
        let oa = source.length;
        if (token.props[0].type === "block-scalar-header")
          oa -= token.props[0].source.length;
        for (const tok of end)
          tok.offset += oa;
        delete token.props;
        Object.assign(token, { type, source, end });
        break;
      }
      case "block-map":
      case "block-seq": {
        const offset = token.offset + source.length;
        const nl = { type: "newline", offset, indent: token.indent, source: "\n" };
        delete token.items;
        Object.assign(token, { type, source, end: [nl] });
        break;
      }
      default: {
        const indent = "indent" in token ? token.indent : -1;
        const end = "end" in token && Array.isArray(token.end) ? token.end.filter((st) => st.type === "space" || st.type === "comment" || st.type === "newline") : [];
        for (const key of Object.keys(token))
          if (key !== "type" && key !== "offset")
            delete token[key];
        Object.assign(token, { type, indent, source, end });
      }
    }
  }
  cstScalar.createScalarToken = createScalarToken;
  cstScalar.resolveAsScalar = resolveAsScalar;
  cstScalar.setScalarValue = setScalarValue;
  return cstScalar;
}
var cstStringify = {};
var hasRequiredCstStringify;
function requireCstStringify() {
  if (hasRequiredCstStringify) return cstStringify;
  hasRequiredCstStringify = 1;
  const stringify2 = (cst2) => "type" in cst2 ? stringifyToken(cst2) : stringifyItem(cst2);
  function stringifyToken(token) {
    switch (token.type) {
      case "block-scalar": {
        let res = "";
        for (const tok of token.props)
          res += stringifyToken(tok);
        return res + token.source;
      }
      case "block-map":
      case "block-seq": {
        let res = "";
        for (const item of token.items)
          res += stringifyItem(item);
        return res;
      }
      case "flow-collection": {
        let res = token.start.source;
        for (const item of token.items)
          res += stringifyItem(item);
        for (const st of token.end)
          res += st.source;
        return res;
      }
      case "document": {
        let res = stringifyItem(token);
        if (token.end)
          for (const st of token.end)
            res += st.source;
        return res;
      }
      default: {
        let res = token.source;
        if ("end" in token && token.end)
          for (const st of token.end)
            res += st.source;
        return res;
      }
    }
  }
  function stringifyItem({ start, key, sep, value }) {
    let res = "";
    for (const st of start)
      res += st.source;
    if (key)
      res += stringifyToken(key);
    if (sep)
      for (const st of sep)
        res += st.source;
    if (value)
      res += stringifyToken(value);
    return res;
  }
  cstStringify.stringify = stringify2;
  return cstStringify;
}
var cstVisit = {};
var hasRequiredCstVisit;
function requireCstVisit() {
  if (hasRequiredCstVisit) return cstVisit;
  hasRequiredCstVisit = 1;
  const BREAK = /* @__PURE__ */ Symbol("break visit");
  const SKIP = /* @__PURE__ */ Symbol("skip children");
  const REMOVE = /* @__PURE__ */ Symbol("remove item");
  function visit2(cst2, visitor) {
    if ("type" in cst2 && cst2.type === "document")
      cst2 = { start: cst2.start, value: cst2.value };
    _visit(Object.freeze([]), cst2, visitor);
  }
  visit2.BREAK = BREAK;
  visit2.SKIP = SKIP;
  visit2.REMOVE = REMOVE;
  visit2.itemAtPath = (cst2, path) => {
    let item = cst2;
    for (const [field, index] of path) {
      const tok = item == null ? void 0 : item[field];
      if (tok && "items" in tok) {
        item = tok.items[index];
      } else
        return void 0;
    }
    return item;
  };
  visit2.parentCollection = (cst2, path) => {
    const parent = visit2.itemAtPath(cst2, path.slice(0, -1));
    const field = path[path.length - 1][0];
    const coll = parent == null ? void 0 : parent[field];
    if (coll && "items" in coll)
      return coll;
    throw new Error("Parent collection not found");
  };
  function _visit(path, item, visitor) {
    let ctrl = visitor(item, path);
    if (typeof ctrl === "symbol")
      return ctrl;
    for (const field of ["key", "value"]) {
      const token = item[field];
      if (token && "items" in token) {
        for (let i = 0; i < token.items.length; ++i) {
          const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
          if (typeof ci === "number")
            i = ci - 1;
          else if (ci === BREAK)
            return BREAK;
          else if (ci === REMOVE) {
            token.items.splice(i, 1);
            i -= 1;
          }
        }
        if (typeof ctrl === "function" && field === "key")
          ctrl = ctrl(item, path);
      }
    }
    return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
  }
  cstVisit.visit = visit2;
  return cstVisit;
}
var hasRequiredCst;
function requireCst() {
  if (hasRequiredCst) return cst;
  hasRequiredCst = 1;
  var cstScalar2 = requireCstScalar();
  var cstStringify2 = requireCstStringify();
  var cstVisit2 = requireCstVisit();
  const BOM = "\uFEFF";
  const DOCUMENT = "";
  const FLOW_END = "";
  const SCALAR = "";
  const isCollection = (token) => !!token && "items" in token;
  const isScalar = (token) => !!token && (token.type === "scalar" || token.type === "single-quoted-scalar" || token.type === "double-quoted-scalar" || token.type === "block-scalar");
  function prettyToken(token) {
    switch (token) {
      case BOM:
        return "<BOM>";
      case DOCUMENT:
        return "<DOC>";
      case FLOW_END:
        return "<FLOW_END>";
      case SCALAR:
        return "<SCALAR>";
      default:
        return JSON.stringify(token);
    }
  }
  function tokenType(source) {
    switch (source) {
      case BOM:
        return "byte-order-mark";
      case DOCUMENT:
        return "doc-mode";
      case FLOW_END:
        return "flow-error-end";
      case SCALAR:
        return "scalar";
      case "---":
        return "doc-start";
      case "...":
        return "doc-end";
      case "":
      case "\n":
      case "\r\n":
        return "newline";
      case "-":
        return "seq-item-ind";
      case "?":
        return "explicit-key-ind";
      case ":":
        return "map-value-ind";
      case "{":
        return "flow-map-start";
      case "}":
        return "flow-map-end";
      case "[":
        return "flow-seq-start";
      case "]":
        return "flow-seq-end";
      case ",":
        return "comma";
    }
    switch (source[0]) {
      case " ":
      case "	":
        return "space";
      case "#":
        return "comment";
      case "%":
        return "directive-line";
      case "*":
        return "alias";
      case "&":
        return "anchor";
      case "!":
        return "tag";
      case "'":
        return "single-quoted-scalar";
      case '"':
        return "double-quoted-scalar";
      case "|":
      case ">":
        return "block-scalar-header";
    }
    return null;
  }
  cst.createScalarToken = cstScalar2.createScalarToken;
  cst.resolveAsScalar = cstScalar2.resolveAsScalar;
  cst.setScalarValue = cstScalar2.setScalarValue;
  cst.stringify = cstStringify2.stringify;
  cst.visit = cstVisit2.visit;
  cst.BOM = BOM;
  cst.DOCUMENT = DOCUMENT;
  cst.FLOW_END = FLOW_END;
  cst.SCALAR = SCALAR;
  cst.isCollection = isCollection;
  cst.isScalar = isScalar;
  cst.prettyToken = prettyToken;
  cst.tokenType = tokenType;
  return cst;
}
var lexer = {};
var hasRequiredLexer;
function requireLexer() {
  if (hasRequiredLexer) return lexer;
  hasRequiredLexer = 1;
  var cst2 = requireCst();
  function isEmpty(ch) {
    switch (ch) {
      case void 0:
      case " ":
      case "\n":
      case "\r":
      case "	":
        return true;
      default:
        return false;
    }
  }
  const hexDigits = new Set("0123456789ABCDEFabcdef");
  const tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
  const flowIndicatorChars = new Set(",[]{}");
  const invalidAnchorChars = new Set(" ,[]{}\n\r	");
  const isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
  class Lexer {
    constructor() {
      this.atEnd = false;
      this.blockScalarIndent = -1;
      this.blockScalarKeep = false;
      this.buffer = "";
      this.flowKey = false;
      this.flowLevel = 0;
      this.indentNext = 0;
      this.indentValue = 0;
      this.lineEndPos = null;
      this.next = null;
      this.pos = 0;
    }
    /**
     * Generate YAML tokens from the `source` string. If `incomplete`,
     * a part of the last line may be left as a buffer for the next call.
     *
     * @returns A generator of lexical tokens
     */
    *lex(source, incomplete = false) {
      var _a;
      if (source) {
        if (typeof source !== "string")
          throw TypeError("source is not a string");
        this.buffer = this.buffer ? this.buffer + source : source;
        this.lineEndPos = null;
      }
      this.atEnd = !incomplete;
      let next = (_a = this.next) != null ? _a : "stream";
      while (next && (incomplete || this.hasChars(1)))
        next = yield* this.parseNext(next);
    }
    atLineEnd() {
      let i = this.pos;
      let ch = this.buffer[i];
      while (ch === " " || ch === "	")
        ch = this.buffer[++i];
      if (!ch || ch === "#" || ch === "\n")
        return true;
      if (ch === "\r")
        return this.buffer[i + 1] === "\n";
      return false;
    }
    charAt(n) {
      return this.buffer[this.pos + n];
    }
    continueScalar(offset) {
      let ch = this.buffer[offset];
      if (this.indentNext > 0) {
        let indent = 0;
        while (ch === " ")
          ch = this.buffer[++indent + offset];
        if (ch === "\r") {
          const next = this.buffer[indent + offset + 1];
          if (next === "\n" || !next && !this.atEnd)
            return offset + indent + 1;
        }
        return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
      }
      if (ch === "-" || ch === ".") {
        const dt = this.buffer.substr(offset, 3);
        if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3]))
          return -1;
      }
      return offset;
    }
    getLine() {
      let end = this.lineEndPos;
      if (typeof end !== "number" || end !== -1 && end < this.pos) {
        end = this.buffer.indexOf("\n", this.pos);
        this.lineEndPos = end;
      }
      if (end === -1)
        return this.atEnd ? this.buffer.substring(this.pos) : null;
      if (this.buffer[end - 1] === "\r")
        end -= 1;
      return this.buffer.substring(this.pos, end);
    }
    hasChars(n) {
      return this.pos + n <= this.buffer.length;
    }
    setNext(state) {
      this.buffer = this.buffer.substring(this.pos);
      this.pos = 0;
      this.lineEndPos = null;
      this.next = state;
      return null;
    }
    peek(n) {
      return this.buffer.substr(this.pos, n);
    }
    *parseNext(next) {
      switch (next) {
        case "stream":
          return yield* this.parseStream();
        case "line-start":
          return yield* this.parseLineStart();
        case "block-start":
          return yield* this.parseBlockStart();
        case "doc":
          return yield* this.parseDocument();
        case "flow":
          return yield* this.parseFlowCollection();
        case "quoted-scalar":
          return yield* this.parseQuotedScalar();
        case "block-scalar":
          return yield* this.parseBlockScalar();
        case "plain-scalar":
          return yield* this.parsePlainScalar();
      }
    }
    *parseStream() {
      let line = this.getLine();
      if (line === null)
        return this.setNext("stream");
      if (line[0] === cst2.BOM) {
        yield* this.pushCount(1);
        line = line.substring(1);
      }
      if (line[0] === "%") {
        let dirEnd = line.length;
        let cs = line.indexOf("#");
        while (cs !== -1) {
          const ch = line[cs - 1];
          if (ch === " " || ch === "	") {
            dirEnd = cs - 1;
            break;
          } else {
            cs = line.indexOf("#", cs + 1);
          }
        }
        while (true) {
          const ch = line[dirEnd - 1];
          if (ch === " " || ch === "	")
            dirEnd -= 1;
          else
            break;
        }
        const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
        yield* this.pushCount(line.length - n);
        this.pushNewline();
        return "stream";
      }
      if (this.atLineEnd()) {
        const sp = yield* this.pushSpaces(true);
        yield* this.pushCount(line.length - sp);
        yield* this.pushNewline();
        return "stream";
      }
      yield cst2.DOCUMENT;
      return yield* this.parseLineStart();
    }
    *parseLineStart() {
      const ch = this.charAt(0);
      if (!ch && !this.atEnd)
        return this.setNext("line-start");
      if (ch === "-" || ch === ".") {
        if (!this.atEnd && !this.hasChars(4))
          return this.setNext("line-start");
        const s = this.peek(3);
        if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
          yield* this.pushCount(3);
          this.indentValue = 0;
          this.indentNext = 0;
          return s === "---" ? "doc" : "stream";
        }
      }
      this.indentValue = yield* this.pushSpaces(false);
      if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
        this.indentNext = this.indentValue;
      return yield* this.parseBlockStart();
    }
    *parseBlockStart() {
      const [ch0, ch1] = this.peek(2);
      if (!ch1 && !this.atEnd)
        return this.setNext("block-start");
      if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
        const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
        this.indentNext = this.indentValue + 1;
        this.indentValue += n;
        return "block-start";
      }
      return "doc";
    }
    *parseDocument() {
      yield* this.pushSpaces(true);
      const line = this.getLine();
      if (line === null)
        return this.setNext("doc");
      let n = yield* this.pushIndicators();
      switch (line[n]) {
        case "#":
          yield* this.pushCount(line.length - n);
        // fallthrough
        case void 0:
          yield* this.pushNewline();
          return yield* this.parseLineStart();
        case "{":
        case "[":
          yield* this.pushCount(1);
          this.flowKey = false;
          this.flowLevel = 1;
          return "flow";
        case "}":
        case "]":
          yield* this.pushCount(1);
          return "doc";
        case "*":
          yield* this.pushUntil(isNotAnchorChar);
          return "doc";
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case "|":
        case ">":
          n += yield* this.parseBlockScalarHeader();
          n += yield* this.pushSpaces(true);
          yield* this.pushCount(line.length - n);
          yield* this.pushNewline();
          return yield* this.parseBlockScalar();
        default:
          return yield* this.parsePlainScalar();
      }
    }
    *parseFlowCollection() {
      let nl, sp;
      let indent = -1;
      do {
        nl = yield* this.pushNewline();
        if (nl > 0) {
          sp = yield* this.pushSpaces(false);
          this.indentValue = indent = sp;
        } else {
          sp = 0;
        }
        sp += yield* this.pushSpaces(true);
      } while (nl + sp > 0);
      const line = this.getLine();
      if (line === null)
        return this.setNext("flow");
      if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
        const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}");
        if (!atFlowEndMarker) {
          this.flowLevel = 0;
          yield cst2.FLOW_END;
          return yield* this.parseLineStart();
        }
      }
      let n = 0;
      while (line[n] === ",") {
        n += yield* this.pushCount(1);
        n += yield* this.pushSpaces(true);
        this.flowKey = false;
      }
      n += yield* this.pushIndicators();
      switch (line[n]) {
        case void 0:
          return "flow";
        case "#":
          yield* this.pushCount(line.length - n);
          return "flow";
        case "{":
        case "[":
          yield* this.pushCount(1);
          this.flowKey = false;
          this.flowLevel += 1;
          return "flow";
        case "}":
        case "]":
          yield* this.pushCount(1);
          this.flowKey = true;
          this.flowLevel -= 1;
          return this.flowLevel ? "flow" : "doc";
        case "*":
          yield* this.pushUntil(isNotAnchorChar);
          return "flow";
        case '"':
        case "'":
          this.flowKey = true;
          return yield* this.parseQuotedScalar();
        case ":": {
          const next = this.charAt(1);
          if (this.flowKey || isEmpty(next) || next === ",") {
            this.flowKey = false;
            yield* this.pushCount(1);
            yield* this.pushSpaces(true);
            return "flow";
          }
        }
        // fallthrough
        default:
          this.flowKey = false;
          return yield* this.parsePlainScalar();
      }
    }
    *parseQuotedScalar() {
      const quote = this.charAt(0);
      let end = this.buffer.indexOf(quote, this.pos + 1);
      if (quote === "'") {
        while (end !== -1 && this.buffer[end + 1] === "'")
          end = this.buffer.indexOf("'", end + 2);
      } else {
        while (end !== -1) {
          let n = 0;
          while (this.buffer[end - 1 - n] === "\\")
            n += 1;
          if (n % 2 === 0)
            break;
          end = this.buffer.indexOf('"', end + 1);
        }
      }
      const qb = this.buffer.substring(0, end);
      let nl = qb.indexOf("\n", this.pos);
      if (nl !== -1) {
        while (nl !== -1) {
          const cs = this.continueScalar(nl + 1);
          if (cs === -1)
            break;
          nl = qb.indexOf("\n", cs);
        }
        if (nl !== -1) {
          end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
        }
      }
      if (end === -1) {
        if (!this.atEnd)
          return this.setNext("quoted-scalar");
        end = this.buffer.length;
      }
      yield* this.pushToIndex(end + 1, false);
      return this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
      this.blockScalarIndent = -1;
      this.blockScalarKeep = false;
      let i = this.pos;
      while (true) {
        const ch = this.buffer[++i];
        if (ch === "+")
          this.blockScalarKeep = true;
        else if (ch > "0" && ch <= "9")
          this.blockScalarIndent = Number(ch) - 1;
        else if (ch !== "-")
          break;
      }
      return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
    }
    *parseBlockScalar() {
      let nl = this.pos - 1;
      let indent = 0;
      let ch;
      loop: for (let i2 = this.pos; ch = this.buffer[i2]; ++i2) {
        switch (ch) {
          case " ":
            indent += 1;
            break;
          case "\n":
            nl = i2;
            indent = 0;
            break;
          case "\r": {
            const next = this.buffer[i2 + 1];
            if (!next && !this.atEnd)
              return this.setNext("block-scalar");
            if (next === "\n")
              break;
          }
          // fallthrough
          default:
            break loop;
        }
      }
      if (!ch && !this.atEnd)
        return this.setNext("block-scalar");
      if (indent >= this.indentNext) {
        if (this.blockScalarIndent === -1)
          this.indentNext = indent;
        else {
          this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
        }
        do {
          const cs = this.continueScalar(nl + 1);
          if (cs === -1)
            break;
          nl = this.buffer.indexOf("\n", cs);
        } while (nl !== -1);
        if (nl === -1) {
          if (!this.atEnd)
            return this.setNext("block-scalar");
          nl = this.buffer.length;
        }
      }
      let i = nl + 1;
      ch = this.buffer[i];
      while (ch === " ")
        ch = this.buffer[++i];
      if (ch === "	") {
        while (ch === "	" || ch === " " || ch === "\r" || ch === "\n")
          ch = this.buffer[++i];
        nl = i - 1;
      } else if (!this.blockScalarKeep) {
        do {
          let i2 = nl - 1;
          let ch2 = this.buffer[i2];
          if (ch2 === "\r")
            ch2 = this.buffer[--i2];
          const lastChar = i2;
          while (ch2 === " ")
            ch2 = this.buffer[--i2];
          if (ch2 === "\n" && i2 >= this.pos && i2 + 1 + indent > lastChar)
            nl = i2;
          else
            break;
        } while (true);
      }
      yield cst2.SCALAR;
      yield* this.pushToIndex(nl + 1, true);
      return yield* this.parseLineStart();
    }
    *parsePlainScalar() {
      const inFlow = this.flowLevel > 0;
      let end = this.pos - 1;
      let i = this.pos - 1;
      let ch;
      while (ch = this.buffer[++i]) {
        if (ch === ":") {
          const next = this.buffer[i + 1];
          if (isEmpty(next) || inFlow && flowIndicatorChars.has(next))
            break;
          end = i;
        } else if (isEmpty(ch)) {
          let next = this.buffer[i + 1];
          if (ch === "\r") {
            if (next === "\n") {
              i += 1;
              ch = "\n";
              next = this.buffer[i + 1];
            } else
              end = i;
          }
          if (next === "#" || inFlow && flowIndicatorChars.has(next))
            break;
          if (ch === "\n") {
            const cs = this.continueScalar(i + 1);
            if (cs === -1)
              break;
            i = Math.max(i, cs - 2);
          }
        } else {
          if (inFlow && flowIndicatorChars.has(ch))
            break;
          end = i;
        }
      }
      if (!ch && !this.atEnd)
        return this.setNext("plain-scalar");
      yield cst2.SCALAR;
      yield* this.pushToIndex(end + 1, true);
      return inFlow ? "flow" : "doc";
    }
    *pushCount(n) {
      if (n > 0) {
        yield this.buffer.substr(this.pos, n);
        this.pos += n;
        return n;
      }
      return 0;
    }
    *pushToIndex(i, allowEmpty) {
      const s = this.buffer.slice(this.pos, i);
      if (s) {
        yield s;
        this.pos += s.length;
        return s.length;
      } else if (allowEmpty)
        yield "";
      return 0;
    }
    *pushIndicators() {
      let n = 0;
      loop: while (true) {
        switch (this.charAt(0)) {
          case "!":
            n += yield* this.pushTag();
            n += yield* this.pushSpaces(true);
            continue loop;
          case "&":
            n += yield* this.pushUntil(isNotAnchorChar);
            n += yield* this.pushSpaces(true);
            continue loop;
          case "-":
          // this is an error
          case "?":
          // this is an error outside flow collections
          case ":": {
            const inFlow = this.flowLevel > 0;
            const ch1 = this.charAt(1);
            if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
              if (!inFlow)
                this.indentNext = this.indentValue + 1;
              else if (this.flowKey)
                this.flowKey = false;
              n += yield* this.pushCount(1);
              n += yield* this.pushSpaces(true);
              continue loop;
            }
          }
        }
        break loop;
      }
      return n;
    }
    *pushTag() {
      if (this.charAt(1) === "<") {
        let i = this.pos + 2;
        let ch = this.buffer[i];
        while (!isEmpty(ch) && ch !== ">")
          ch = this.buffer[++i];
        return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
      } else {
        let i = this.pos + 1;
        let ch = this.buffer[i];
        while (ch) {
          if (tagChars.has(ch))
            ch = this.buffer[++i];
          else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) {
            ch = this.buffer[i += 3];
          } else
            break;
        }
        return yield* this.pushToIndex(i, false);
      }
    }
    *pushNewline() {
      const ch = this.buffer[this.pos];
      if (ch === "\n")
        return yield* this.pushCount(1);
      else if (ch === "\r" && this.charAt(1) === "\n")
        return yield* this.pushCount(2);
      else
        return 0;
    }
    *pushSpaces(allowTabs) {
      let i = this.pos - 1;
      let ch;
      do {
        ch = this.buffer[++i];
      } while (ch === " " || allowTabs && ch === "	");
      const n = i - this.pos;
      if (n > 0) {
        yield this.buffer.substr(this.pos, n);
        this.pos = i;
      }
      return n;
    }
    *pushUntil(test) {
      let i = this.pos;
      let ch = this.buffer[i];
      while (!test(ch))
        ch = this.buffer[++i];
      return yield* this.pushToIndex(i, false);
    }
  }
  lexer.Lexer = Lexer;
  return lexer;
}
var lineCounter = {};
var hasRequiredLineCounter;
function requireLineCounter() {
  if (hasRequiredLineCounter) return lineCounter;
  hasRequiredLineCounter = 1;
  class LineCounter {
    constructor() {
      this.lineStarts = [];
      this.addNewLine = (offset) => this.lineStarts.push(offset);
      this.linePos = (offset) => {
        let low = 0;
        let high = this.lineStarts.length;
        while (low < high) {
          const mid = low + high >> 1;
          if (this.lineStarts[mid] < offset)
            low = mid + 1;
          else
            high = mid;
        }
        if (this.lineStarts[low] === offset)
          return { line: low + 1, col: 1 };
        if (low === 0)
          return { line: 0, col: offset };
        const start = this.lineStarts[low - 1];
        return { line: low, col: offset - start + 1 };
      };
    }
  }
  lineCounter.LineCounter = LineCounter;
  return lineCounter;
}
var parser = {};
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  var node_process = require$$0__default;
  var cst2 = requireCst();
  var lexer2 = requireLexer();
  function includesToken(list, type) {
    for (let i = 0; i < list.length; ++i)
      if (list[i].type === type)
        return true;
    return false;
  }
  function findNonEmptyIndex(list) {
    for (let i = 0; i < list.length; ++i) {
      switch (list[i].type) {
        case "space":
        case "comment":
        case "newline":
          break;
        default:
          return i;
      }
    }
    return -1;
  }
  function isFlowToken(token) {
    switch (token == null ? void 0 : token.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return true;
      default:
        return false;
    }
  }
  function getPrevProps(parent) {
    var _a;
    switch (parent.type) {
      case "document":
        return parent.start;
      case "block-map": {
        const it = parent.items[parent.items.length - 1];
        return (_a = it.sep) != null ? _a : it.start;
      }
      case "block-seq":
        return parent.items[parent.items.length - 1].start;
      /* istanbul ignore next should not happen */
      default:
        return [];
    }
  }
  function getFirstKeyStartProps(prev) {
    var _a;
    if (prev.length === 0)
      return [];
    let i = prev.length;
    loop: while (--i >= 0) {
      switch (prev[i].type) {
        case "doc-start":
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
        case "newline":
          break loop;
      }
    }
    while (((_a = prev[++i]) == null ? void 0 : _a.type) === "space") {
    }
    return prev.splice(i, prev.length);
  }
  function arrayPushArray(target, source) {
    if (source.length < 1e5)
      Array.prototype.push.apply(target, source);
    else
      for (let i = 0; i < source.length; ++i)
        target.push(source[i]);
  }
  function fixFlowSeqItems(fc) {
    if (fc.start.type === "flow-seq-start") {
      for (const it of fc.items) {
        if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
          if (it.key)
            it.value = it.key;
          delete it.key;
          if (isFlowToken(it.value)) {
            if (it.value.end)
              arrayPushArray(it.value.end, it.sep);
            else
              it.value.end = it.sep;
          } else
            arrayPushArray(it.start, it.sep);
          delete it.sep;
        }
      }
    }
  }
  class Parser {
    /**
     * @param onNewLine - If defined, called separately with the start position of
     *   each new line (in `parse()`, including the start of input).
     */
    constructor(onNewLine) {
      this.atNewLine = true;
      this.atScalar = false;
      this.indent = 0;
      this.offset = 0;
      this.onKeyLine = false;
      this.stack = [];
      this.source = "";
      this.type = "";
      this.lexer = new lexer2.Lexer();
      this.onNewLine = onNewLine;
    }
    /**
     * Parse `source` as a YAML stream.
     * If `incomplete`, a part of the last line may be left as a buffer for the next call.
     *
     * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
     *
     * @returns A generator of tokens representing each directive, document, and other structure.
     */
    *parse(source, incomplete = false) {
      if (this.onNewLine && this.offset === 0)
        this.onNewLine(0);
      for (const lexeme of this.lexer.lex(source, incomplete))
        yield* this.next(lexeme);
      if (!incomplete)
        yield* this.end();
    }
    /**
     * Advance the parser by the `source` of one lexical token.
     */
    *next(source) {
      this.source = source;
      if (node_process.env.LOG_TOKENS)
        console.log("|", cst2.prettyToken(source));
      if (this.atScalar) {
        this.atScalar = false;
        yield* this.step();
        this.offset += source.length;
        return;
      }
      const type = cst2.tokenType(source);
      if (!type) {
        const message = `Not a YAML token: ${source}`;
        yield* this.pop({ type: "error", offset: this.offset, message, source });
        this.offset += source.length;
      } else if (type === "scalar") {
        this.atNewLine = false;
        this.atScalar = true;
        this.type = "scalar";
      } else {
        this.type = type;
        yield* this.step();
        switch (type) {
          case "newline":
            this.atNewLine = true;
            this.indent = 0;
            if (this.onNewLine)
              this.onNewLine(this.offset + source.length);
            break;
          case "space":
            if (this.atNewLine && source[0] === " ")
              this.indent += source.length;
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            if (this.atNewLine)
              this.indent += source.length;
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = false;
        }
        this.offset += source.length;
      }
    }
    /** Call at end of input to push out any remaining constructions */
    *end() {
      while (this.stack.length > 0)
        yield* this.pop();
    }
    get sourceToken() {
      const st = {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
      return st;
    }
    *step() {
      const top = this.peek(1);
      if (this.type === "doc-end" && (top == null ? void 0 : top.type) !== "doc-end") {
        while (this.stack.length > 0)
          yield* this.pop();
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source
        });
        return;
      }
      if (!top)
        return yield* this.stream();
      switch (top.type) {
        case "document":
          return yield* this.document(top);
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return yield* this.scalar(top);
        case "block-scalar":
          return yield* this.blockScalar(top);
        case "block-map":
          return yield* this.blockMap(top);
        case "block-seq":
          return yield* this.blockSequence(top);
        case "flow-collection":
          return yield* this.flowCollection(top);
        case "doc-end":
          return yield* this.documentEnd(top);
      }
      yield* this.pop();
    }
    peek(n) {
      return this.stack[this.stack.length - n];
    }
    *pop(error) {
      const token = error != null ? error : this.stack.pop();
      if (!token) {
        const message = "Tried to pop an empty stack";
        yield { type: "error", offset: this.offset, source: "", message };
      } else if (this.stack.length === 0) {
        yield token;
      } else {
        const top = this.peek(1);
        if (token.type === "block-scalar") {
          token.indent = "indent" in top ? top.indent : 0;
        } else if (token.type === "flow-collection" && top.type === "document") {
          token.indent = 0;
        }
        if (token.type === "flow-collection")
          fixFlowSeqItems(token);
        switch (top.type) {
          case "document":
            top.value = token;
            break;
          case "block-scalar":
            top.props.push(token);
            break;
          case "block-map": {
            const it = top.items[top.items.length - 1];
            if (it.value) {
              top.items.push({ start: [], key: token, sep: [] });
              this.onKeyLine = true;
              return;
            } else if (it.sep) {
              it.value = token;
            } else {
              Object.assign(it, { key: token, sep: [] });
              this.onKeyLine = !it.explicitKey;
              return;
            }
            break;
          }
          case "block-seq": {
            const it = top.items[top.items.length - 1];
            if (it.value)
              top.items.push({ start: [], value: token });
            else
              it.value = token;
            break;
          }
          case "flow-collection": {
            const it = top.items[top.items.length - 1];
            if (!it || it.value)
              top.items.push({ start: [], key: token, sep: [] });
            else if (it.sep)
              it.value = token;
            else
              Object.assign(it, { key: token, sep: [] });
            return;
          }
          /* istanbul ignore next should not happen */
          default:
            yield* this.pop();
            yield* this.pop(token);
        }
        if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
          const last = token.items[token.items.length - 1];
          if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
            if (top.type === "document")
              top.end = last.start;
            else
              top.items.push({ start: last.start });
            token.items.splice(-1, 1);
          }
        }
      }
    }
    *stream() {
      switch (this.type) {
        case "directive-line":
          yield { type: "directive", offset: this.offset, source: this.source };
          return;
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          yield this.sourceToken;
          return;
        case "doc-mode":
        case "doc-start": {
          const doc = {
            type: "document",
            offset: this.offset,
            start: []
          };
          if (this.type === "doc-start")
            doc.start.push(this.sourceToken);
          this.stack.push(doc);
          return;
        }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source
      };
    }
    *document(doc) {
      if (doc.value)
        return yield* this.lineEnd(doc);
      switch (this.type) {
        case "doc-start": {
          if (findNonEmptyIndex(doc.start) !== -1) {
            yield* this.pop();
            yield* this.step();
          } else
            doc.start.push(this.sourceToken);
          return;
        }
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          doc.start.push(this.sourceToken);
          return;
      }
      const bv = this.startBlockValue(doc);
      if (bv)
        this.stack.push(bv);
      else {
        yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML document`,
          source: this.source
        };
      }
    }
    *scalar(scalar) {
      if (this.type === "map-value-ind") {
        const prev = getPrevProps(this.peek(2));
        const start = getFirstKeyStartProps(prev);
        let sep;
        if (scalar.end) {
          sep = scalar.end;
          sep.push(this.sourceToken);
          delete scalar.end;
        } else
          sep = [this.sourceToken];
        const map2 = {
          type: "block-map",
          offset: scalar.offset,
          indent: scalar.indent,
          items: [{ start, key: scalar, sep }]
        };
        this.onKeyLine = true;
        this.stack[this.stack.length - 1] = map2;
      } else
        yield* this.lineEnd(scalar);
    }
    *blockScalar(scalar) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          scalar.props.push(this.sourceToken);
          return;
        case "scalar":
          scalar.source = this.source;
          this.atNewLine = true;
          this.indent = 0;
          if (this.onNewLine) {
            let nl = this.source.indexOf("\n") + 1;
            while (nl !== 0) {
              this.onNewLine(this.offset + nl);
              nl = this.source.indexOf("\n", nl) + 1;
            }
          }
          yield* this.pop();
          break;
        /* istanbul ignore next should not happen */
        default:
          yield* this.pop();
          yield* this.step();
      }
    }
    *blockMap(map2) {
      var _a;
      const it = map2.items[map2.items.length - 1];
      switch (this.type) {
        case "newline":
          this.onKeyLine = false;
          if (it.value) {
            const end = "end" in it.value ? it.value.end : void 0;
            const last = Array.isArray(end) ? end[end.length - 1] : void 0;
            if ((last == null ? void 0 : last.type) === "comment")
              end == null ? void 0 : end.push(this.sourceToken);
            else
              map2.items.push({ start: [this.sourceToken] });
          } else if (it.sep) {
            it.sep.push(this.sourceToken);
          } else {
            it.start.push(this.sourceToken);
          }
          return;
        case "space":
        case "comment":
          if (it.value) {
            map2.items.push({ start: [this.sourceToken] });
          } else if (it.sep) {
            it.sep.push(this.sourceToken);
          } else {
            if (this.atIndentedComment(it.start, map2.indent)) {
              const prev = map2.items[map2.items.length - 2];
              const end = (_a = prev == null ? void 0 : prev.value) == null ? void 0 : _a.end;
              if (Array.isArray(end)) {
                arrayPushArray(end, it.start);
                end.push(this.sourceToken);
                map2.items.pop();
                return;
              }
            }
            it.start.push(this.sourceToken);
          }
          return;
      }
      if (this.indent >= map2.indent) {
        const atMapIndent = !this.onKeyLine && this.indent === map2.indent;
        const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
        let start = [];
        if (atNextItem && it.sep && !it.value) {
          const nl = [];
          for (let i = 0; i < it.sep.length; ++i) {
            const st = it.sep[i];
            switch (st.type) {
              case "newline":
                nl.push(i);
                break;
              case "space":
                break;
              case "comment":
                if (st.indent > map2.indent)
                  nl.length = 0;
                break;
              default:
                nl.length = 0;
            }
          }
          if (nl.length >= 2)
            start = it.sep.splice(nl[1]);
        }
        switch (this.type) {
          case "anchor":
          case "tag":
            if (atNextItem || it.value) {
              start.push(this.sourceToken);
              map2.items.push({ start });
              this.onKeyLine = true;
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              it.start.push(this.sourceToken);
            }
            return;
          case "explicit-key-ind":
            if (!it.sep && !it.explicitKey) {
              it.start.push(this.sourceToken);
              it.explicitKey = true;
            } else if (atNextItem || it.value) {
              start.push(this.sourceToken);
              map2.items.push({ start, explicitKey: true });
            } else {
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [this.sourceToken], explicitKey: true }]
              });
            }
            this.onKeyLine = true;
            return;
          case "map-value-ind":
            if (it.explicitKey) {
              if (!it.sep) {
                if (includesToken(it.start, "newline")) {
                  Object.assign(it, { key: null, sep: [this.sourceToken] });
                } else {
                  const start2 = getFirstKeyStartProps(it.start);
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: start2, key: null, sep: [this.sourceToken] }]
                  });
                }
              } else if (it.value) {
                map2.items.push({ start: [], key: null, sep: [this.sourceToken] });
              } else if (includesToken(it.sep, "map-value-ind")) {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start, key: null, sep: [this.sourceToken] }]
                });
              } else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
                const start2 = getFirstKeyStartProps(it.start);
                const key = it.key;
                const sep = it.sep;
                sep.push(this.sourceToken);
                delete it.key;
                delete it.sep;
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: start2, key, sep }]
                });
              } else if (start.length > 0) {
                it.sep = it.sep.concat(start, this.sourceToken);
              } else {
                it.sep.push(this.sourceToken);
              }
            } else {
              if (!it.sep) {
                Object.assign(it, { key: null, sep: [this.sourceToken] });
              } else if (it.value || atNextItem) {
                map2.items.push({ start, key: null, sep: [this.sourceToken] });
              } else if (includesToken(it.sep, "map-value-ind")) {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: [], key: null, sep: [this.sourceToken] }]
                });
              } else {
                it.sep.push(this.sourceToken);
              }
            }
            this.onKeyLine = true;
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const fs = this.flowScalar(this.type);
            if (atNextItem || it.value) {
              map2.items.push({ start, key: fs, sep: [] });
              this.onKeyLine = true;
            } else if (it.sep) {
              this.stack.push(fs);
            } else {
              Object.assign(it, { key: fs, sep: [] });
              this.onKeyLine = true;
            }
            return;
          }
          default: {
            const bv = this.startBlockValue(map2);
            if (bv) {
              if (bv.type === "block-seq") {
                if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
                  yield* this.pop({
                    type: "error",
                    offset: this.offset,
                    message: "Unexpected block-seq-ind on same line with key",
                    source: this.source
                  });
                  return;
                }
              } else if (atMapIndent) {
                map2.items.push({ start });
              }
              this.stack.push(bv);
              return;
            }
          }
        }
      }
      yield* this.pop();
      yield* this.step();
    }
    *blockSequence(seq2) {
      var _a;
      const it = seq2.items[seq2.items.length - 1];
      switch (this.type) {
        case "newline":
          if (it.value) {
            const end = "end" in it.value ? it.value.end : void 0;
            const last = Array.isArray(end) ? end[end.length - 1] : void 0;
            if ((last == null ? void 0 : last.type) === "comment")
              end == null ? void 0 : end.push(this.sourceToken);
            else
              seq2.items.push({ start: [this.sourceToken] });
          } else
            it.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (it.value)
            seq2.items.push({ start: [this.sourceToken] });
          else {
            if (this.atIndentedComment(it.start, seq2.indent)) {
              const prev = seq2.items[seq2.items.length - 2];
              const end = (_a = prev == null ? void 0 : prev.value) == null ? void 0 : _a.end;
              if (Array.isArray(end)) {
                arrayPushArray(end, it.start);
                end.push(this.sourceToken);
                seq2.items.pop();
                return;
              }
            }
            it.start.push(this.sourceToken);
          }
          return;
        case "anchor":
        case "tag":
          if (it.value || this.indent <= seq2.indent)
            break;
          it.start.push(this.sourceToken);
          return;
        case "seq-item-ind":
          if (this.indent !== seq2.indent)
            break;
          if (it.value || includesToken(it.start, "seq-item-ind"))
            seq2.items.push({ start: [this.sourceToken] });
          else
            it.start.push(this.sourceToken);
          return;
      }
      if (this.indent > seq2.indent) {
        const bv = this.startBlockValue(seq2);
        if (bv) {
          this.stack.push(bv);
          return;
        }
      }
      yield* this.pop();
      yield* this.step();
    }
    *flowCollection(fc) {
      const it = fc.items[fc.items.length - 1];
      if (this.type === "flow-error-end") {
        let top;
        do {
          yield* this.pop();
          top = this.peek(1);
        } while ((top == null ? void 0 : top.type) === "flow-collection");
      } else if (fc.end.length === 0) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            if (!it || it.sep)
              fc.items.push({ start: [this.sourceToken] });
            else
              it.start.push(this.sourceToken);
            return;
          case "map-value-ind":
            if (!it || it.value)
              fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
            else if (it.sep)
              it.sep.push(this.sourceToken);
            else
              Object.assign(it, { key: null, sep: [this.sourceToken] });
            return;
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            if (!it || it.value)
              fc.items.push({ start: [this.sourceToken] });
            else if (it.sep)
              it.sep.push(this.sourceToken);
            else
              it.start.push(this.sourceToken);
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const fs = this.flowScalar(this.type);
            if (!it || it.value)
              fc.items.push({ start: [], key: fs, sep: [] });
            else if (it.sep)
              this.stack.push(fs);
            else
              Object.assign(it, { key: fs, sep: [] });
            return;
          }
          case "flow-map-end":
          case "flow-seq-end":
            fc.end.push(this.sourceToken);
            return;
        }
        const bv = this.startBlockValue(fc);
        if (bv)
          this.stack.push(bv);
        else {
          yield* this.pop();
          yield* this.step();
        }
      } else {
        const parent = this.peek(2);
        if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
          yield* this.pop();
          yield* this.step();
        } else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          fixFlowSeqItems(fc);
          const sep = fc.end.splice(1, fc.end.length);
          sep.push(this.sourceToken);
          const map2 = {
            type: "block-map",
            offset: fc.offset,
            indent: fc.indent,
            items: [{ start, key: fc, sep }]
          };
          this.onKeyLine = true;
          this.stack[this.stack.length - 1] = map2;
        } else {
          yield* this.lineEnd(fc);
        }
      }
    }
    flowScalar(type) {
      if (this.onNewLine) {
        let nl = this.source.indexOf("\n") + 1;
        while (nl !== 0) {
          this.onNewLine(this.offset + nl);
          nl = this.source.indexOf("\n", nl) + 1;
        }
      }
      return {
        type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    startBlockValue(parent) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar",
            offset: this.offset,
            indent: this.indent,
            props: [this.sourceToken],
            source: ""
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection",
            offset: this.offset,
            indent: this.indent,
            start: this.sourceToken,
            items: [],
            end: []
          };
        case "seq-item-ind":
          return {
            type: "block-seq",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken] }]
          };
        case "explicit-key-ind": {
          this.onKeyLine = true;
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          start.push(this.sourceToken);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start, explicitKey: true }]
          };
        }
        case "map-value-ind": {
          this.onKeyLine = true;
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start, key: null, sep: [this.sourceToken] }]
          };
        }
      }
      return null;
    }
    atIndentedComment(start, indent) {
      if (this.type !== "comment")
        return false;
      if (this.indent <= indent)
        return false;
      return start.every((st) => st.type === "newline" || st.type === "space");
    }
    *documentEnd(docEnd) {
      if (this.type !== "doc-mode") {
        if (docEnd.end)
          docEnd.end.push(this.sourceToken);
        else
          docEnd.end = [this.sourceToken];
        if (this.type === "newline")
          yield* this.pop();
      }
    }
    *lineEnd(token) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          yield* this.pop();
          yield* this.step();
          break;
        case "newline":
          this.onKeyLine = false;
        // fallthrough
        case "space":
        case "comment":
        default:
          if (token.end)
            token.end.push(this.sourceToken);
          else
            token.end = [this.sourceToken];
          if (this.type === "newline")
            yield* this.pop();
      }
    }
  }
  parser.Parser = Parser;
  return parser;
}
var publicApi = {};
var hasRequiredPublicApi;
function requirePublicApi() {
  if (hasRequiredPublicApi) return publicApi;
  hasRequiredPublicApi = 1;
  var composer2 = requireComposer();
  var Document2 = requireDocument();
  var errors2 = requireErrors();
  var log2 = requireLog();
  var identity2 = requireIdentity();
  var lineCounter2 = requireLineCounter();
  var parser2 = requireParser();
  function parseOptions(options) {
    const prettyErrors = options.prettyErrors !== false;
    const lineCounter$1 = options.lineCounter || prettyErrors && new lineCounter2.LineCounter() || null;
    return { lineCounter: lineCounter$1, prettyErrors };
  }
  function parseAllDocuments(source, options = {}) {
    const { lineCounter: lineCounter22, prettyErrors } = parseOptions(options);
    const parser$1 = new parser2.Parser(lineCounter22 == null ? void 0 : lineCounter22.addNewLine);
    const composer$1 = new composer2.Composer(options);
    const docs = Array.from(composer$1.compose(parser$1.parse(source)));
    if (prettyErrors && lineCounter22)
      for (const doc of docs) {
        doc.errors.forEach(errors2.prettifyError(source, lineCounter22));
        doc.warnings.forEach(errors2.prettifyError(source, lineCounter22));
      }
    if (docs.length > 0)
      return docs;
    return Object.assign([], { empty: true }, composer$1.streamInfo());
  }
  function parseDocument(source, options = {}) {
    const { lineCounter: lineCounter22, prettyErrors } = parseOptions(options);
    const parser$1 = new parser2.Parser(lineCounter22 == null ? void 0 : lineCounter22.addNewLine);
    const composer$1 = new composer2.Composer(options);
    let doc = null;
    for (const _doc of composer$1.compose(parser$1.parse(source), true, source.length)) {
      if (!doc)
        doc = _doc;
      else if (doc.options.logLevel !== "silent") {
        doc.errors.push(new errors2.YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
        break;
      }
    }
    if (prettyErrors && lineCounter22) {
      doc.errors.forEach(errors2.prettifyError(source, lineCounter22));
      doc.warnings.forEach(errors2.prettifyError(source, lineCounter22));
    }
    return doc;
  }
  function parse(src, reviver, options) {
    let _reviver = void 0;
    if (typeof reviver === "function") {
      _reviver = reviver;
    } else if (options === void 0 && reviver && typeof reviver === "object") {
      options = reviver;
    }
    const doc = parseDocument(src, options);
    if (!doc)
      return null;
    doc.warnings.forEach((warning) => log2.warn(doc.options.logLevel, warning));
    if (doc.errors.length > 0) {
      if (doc.options.logLevel !== "silent")
        throw doc.errors[0];
      else
        doc.errors = [];
    }
    return doc.toJS(Object.assign({ reviver: _reviver }, options));
  }
  function stringify2(value, replacer, options) {
    var _a;
    let _replacer = null;
    if (typeof replacer === "function" || Array.isArray(replacer)) {
      _replacer = replacer;
    } else if (options === void 0 && replacer) {
      options = replacer;
    }
    if (typeof options === "string")
      options = options.length;
    if (typeof options === "number") {
      const indent = Math.round(options);
      options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
    }
    if (value === void 0) {
      const { keepUndefined } = (_a = options != null ? options : replacer) != null ? _a : {};
      if (!keepUndefined)
        return void 0;
    }
    if (identity2.isDocument(value) && !_replacer)
      return value.toString(options);
    return new Document2.Document(value, _replacer, options).toString(options);
  }
  publicApi.parse = parse;
  publicApi.parseAllDocuments = parseAllDocuments;
  publicApi.parseDocument = parseDocument;
  publicApi.stringify = stringify2;
  return publicApi;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  var composer2 = requireComposer();
  var Document2 = requireDocument();
  var Schema2 = requireSchema();
  var errors2 = requireErrors();
  var Alias2 = requireAlias();
  var identity2 = requireIdentity();
  var Pair2 = requirePair();
  var Scalar2 = requireScalar();
  var YAMLMap2 = requireYAMLMap();
  var YAMLSeq2 = requireYAMLSeq();
  var cst2 = requireCst();
  var lexer2 = requireLexer();
  var lineCounter2 = requireLineCounter();
  var parser2 = requireParser();
  var publicApi2 = requirePublicApi();
  var visit2 = requireVisit();
  dist.Composer = composer2.Composer;
  dist.Document = Document2.Document;
  dist.Schema = Schema2.Schema;
  dist.YAMLError = errors2.YAMLError;
  dist.YAMLParseError = errors2.YAMLParseError;
  dist.YAMLWarning = errors2.YAMLWarning;
  dist.Alias = Alias2.Alias;
  dist.isAlias = identity2.isAlias;
  dist.isCollection = identity2.isCollection;
  dist.isDocument = identity2.isDocument;
  dist.isMap = identity2.isMap;
  dist.isNode = identity2.isNode;
  dist.isPair = identity2.isPair;
  dist.isScalar = identity2.isScalar;
  dist.isSeq = identity2.isSeq;
  dist.Pair = Pair2.Pair;
  dist.Scalar = Scalar2.Scalar;
  dist.YAMLMap = YAMLMap2.YAMLMap;
  dist.YAMLSeq = YAMLSeq2.YAMLSeq;
  dist.CST = cst2;
  dist.Lexer = lexer2.Lexer;
  dist.LineCounter = lineCounter2.LineCounter;
  dist.Parser = parser2.Parser;
  dist.parse = publicApi2.parse;
  dist.parseAllDocuments = publicApi2.parseAllDocuments;
  dist.parseDocument = publicApi2.parseDocument;
  dist.stringify = publicApi2.stringify;
  dist.visit = visit2.visit;
  dist.visitAsync = visit2.visitAsync;
  return dist;
}
var distExports = requireDist();
const YAML = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
const isConfigObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
function readCustomDataDocument(content) {
  var _a, _b;
  const document = YAML.parseDocument(content);
  if (document.errors.length) throw new Error(`data.yml \u683C\u5F0F\u9519\u8BEF: ${(_a = document.errors[0]) == null ? void 0 : _a.message}`);
  const data = document.toJS();
  if (!isConfigObject(data)) throw new Error("data.yml \u5FC5\u987B\u662F YAML \u5BF9\u8C61");
  const properties = (_b = data.additionalProperties) != null ? _b : {};
  if (!isConfigObject(properties)) throw new Error("data.yml \u7684 additionalProperties \u5FC5\u987B\u662F\u5BF9\u8C61");
  return { document, properties };
}
function readCustomDataYml(content) {
  var _a;
  const { document, properties } = readCustomDataDocument(content);
  const rawFields = (_a = properties.formFields) != null ? _a : [];
  if (!Array.isArray(rawFields)) throw new Error("data.yml \u7684 formFields \u5FC5\u987B\u662F\u6570\u7EC4");
  const formFields = rawFields.map((field, index) => {
    var _a2, _b;
    if (!isConfigObject(field) || typeof field.envKey !== "string" || !field.envKey.trim()) {
      throw new Error(`data.yml \u7684\u7B2C ${index + 1} \u4E2A\u53C2\u6570\u7F3A\u5C11 envKey`);
    }
    const label = isConfigObject(field.label) ? field.label : {};
    const type = (_a2 = field.type) != null ? _a2 : "text";
    if (typeof type !== "string" || !type.trim()) {
      throw new Error(`data.yml \u7684\u53C2\u6570 ${field.envKey} \u7C7B\u578B\u65E0\u6548`);
    }
    const defaultValue = (_b = field.default) != null ? _b : "";
    if (!["string", "number", "boolean"].includes(typeof defaultValue)) {
      throw new Error(`data.yml \u7684\u53C2\u6570 ${field.envKey} \u9ED8\u8BA4\u503C\u5FC5\u987B\u662F\u6587\u672C\u3001\u6570\u5B57\u6216\u5E03\u5C14\u503C`);
    }
    return {
      ...field,
      envKey: field.envKey,
      labelZh: typeof field.labelZh === "string" ? field.labelZh : typeof label.zh === "string" ? label.zh : field.envKey,
      labelEn: typeof field.labelEn === "string" ? field.labelEn : typeof label.en === "string" ? label.en : void 0,
      default: typeof defaultValue === "string" || typeof defaultValue === "number" || typeof defaultValue === "boolean" ? defaultValue : "",
      type
    };
  });
  return { document, properties, formFields };
}
function renderCustomFormFields(fields) {
  return fields.map((field) => {
    var _a, _b;
    return {
      ...field,
      default: (_a = field.default) != null ? _a : "",
      edit: (_b = field.edit) != null ? _b : true,
      labelEn: field.labelEn || field.labelZh,
      label: {
        ...isConfigObject(field.label) ? field.label : {},
        zh: field.labelZh,
        en: field.labelEn || field.labelZh
      },
      random: Boolean(field.random),
      required: Boolean(field.required),
      rule: field.rule || (field.type === "number" ? "paramPort" : void 0),
      type: field.type || "text"
    };
  });
}
function renderCustomDataYml(app, version) {
  var _a;
  const document = ((_a = version.dataYml) == null ? void 0 : _a.trim()) ? readCustomDataDocument(version.dataYml).document : new YAML.Document({
    title: app.name,
    additionalProperties: {
      name: app.name,
      tags: app.tags || ["\u901A\u7528"],
      shortDescZh: app.description || "",
      shortDescEn: app.description || "",
      type: app.type || "website"
    }
  });
  document.set("name", app.key);
  document.set("version", version.name);
  document.setIn(["additionalProperties", "key"], app.key);
  document.setIn(["additionalProperties", "formFields"], renderCustomFormFields(version.formFields || []));
  return document.toString();
}
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
    const loadingCustomConfig = ref(false);
    const customConfigLoadError = ref("");
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
      dataYml: "",
      envContent: "",
      formFields: []
    });
    const customDataYml = computed({
      get: () => customForm.value.dataYml || renderCustomDataYml({
        key: customForm.value.key,
        name: customForm.value.name,
        tags: customForm.value.tagsInput.split(/[,，]/).map((tag) => tag.trim()).filter(Boolean),
        description: customForm.value.description,
        type: customForm.value.type
      }, { name: customForm.value.version, formFields: customForm.value.formFields }),
      set: (content) => {
        customForm.value.dataYml = content;
      }
    });
    const syncCustomFieldsFromDataYml = () => {
      if (!customForm.value.dataYml.trim()) return true;
      try {
        customForm.value.formFields = readCustomDataYml(customForm.value.dataYml).formFields;
        return true;
      } catch (error) {
        toast.add({ title: "data.yml \u683C\u5F0F\u9519\u8BEF", description: error instanceof Error ? error.message : "\u8BF7\u68C0\u67E5 YAML \u5185\u5BB9", color: "error" });
        return false;
      }
    };
    const syncCustomDataYmlFromFields = () => {
      try {
        customForm.value.dataYml = renderCustomDataYml({
          key: customForm.value.key,
          name: customForm.value.name
        }, { name: customForm.value.version, dataYml: customForm.value.dataYml || customDataYml.value, formFields: customForm.value.formFields });
      } catch (error) {
        toast.add({ title: "data.yml \u683C\u5F0F\u9519\u8BEF", description: error instanceof Error ? error.message : "\u8BF7\u68C0\u67E5 YAML \u5185\u5BB9", color: "error" });
      }
    };
    const showUploadModal = ref(false);
    const uploadingPackage = ref(false);
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
        dataYml: "",
        envContent: "",
        formFields: JSON.parse(JSON.stringify(preset.formFields || []))
      };
    };
    const openCreateCustomModal = () => {
      loadingCustomConfig.value = false;
      customConfigLoadError.value = "";
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
          dataYml: "",
          envContent: "",
          formFields: []
        };
      }
      showCustomModal.value = true;
    };
    const openEditCustomModal = (app) => {
      var _a, _b, _c, _d, _e, _f;
      loadingCustomConfig.value = false;
      customConfigLoadError.value = "";
      isEditingCustom.value = true;
      selectedPresetId.value = "";
      const key = getAppKey(app);
      const existingCustom = customAppsList.value.find((c) => c.key === key);
      const latestVer = ((_a = app.versions) == null ? void 0 : _a[0]) || {};
      const existingVersion = (_b = existingCustom == null ? void 0 : existingCustom.versions) == null ? void 0 : _b.find((v) => v.name === latestVer.name);
      customForm.value = {
        key,
        name: app.name || key,
        tagsInput: (app.tags || ((_c = app.additionalProperties) == null ? void 0 : _c.tags) || []).join(", "),
        type: ((_d = app.additionalProperties) == null ? void 0 : _d.type) || "tool",
        icon: app.icon || "",
        description: ((_e = app.additionalProperties) == null ? void 0 : _e.shortDescZh) || app.description || "",
        version: latestVer.name || "1.0.0",
        overrideMode: (existingCustom == null ? void 0 : existingCustom.overrideMode) || "merge",
        compose: (existingVersion == null ? void 0 : existingVersion.compose) || "",
        dataYml: (existingVersion == null ? void 0 : existingVersion.dataYml) || "",
        envContent: (existingVersion == null ? void 0 : existingVersion.envContent) || "",
        formFields: JSON.parse(JSON.stringify(((_f = latestVer.additionalProperties) == null ? void 0 : _f.formFields) || []))
      };
      showCustomModal.value = true;
      const draft = customForm.value;
      if (latestVer.name && (!draft.compose || (existingVersion == null ? void 0 : existingVersion.dataYml) === void 0 || (existingVersion == null ? void 0 : existingVersion.envContent) === void 0)) {
        loadingCustomConfig.value = true;
        $fetch("/api/admin/panel/apps/compose", {
          params: { key, version: latestVer.name }
        }).then((res) => {
          if (customForm.value !== draft || !showCustomModal.value) return;
          if (res.code !== 0 || !res.data) throw new Error(res.message || "\u8BFB\u53D6\u5E94\u7528\u914D\u7F6E\u5931\u8D25");
          if (!draft.compose) draft.compose = res.data.compose;
          if (!draft.dataYml && (existingVersion == null ? void 0 : existingVersion.dataYml) === void 0) {
            draft.dataYml = res.data.dataYml;
            syncCustomFieldsFromDataYml();
          }
          if (!draft.envContent && (existingVersion == null ? void 0 : existingVersion.envContent) === void 0) draft.envContent = res.data.envContent;
        }).catch((error) => {
          if (customForm.value !== draft || !showCustomModal.value) return;
          customConfigLoadError.value = error instanceof Error ? error.message : "\u8BFB\u53D6\u5E94\u7528\u914D\u7F6E\u5931\u8D25";
          toast.add({ title: "\u8BFB\u53D6\u5E94\u7528\u914D\u7F6E\u5931\u8D25", description: customConfigLoadError.value, color: "error" });
        }).finally(() => {
          if (customForm.value === draft) loadingCustomConfig.value = false;
        });
      }
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
      syncCustomDataYmlFromFields();
    };
    const removeCustomFormField = (index) => {
      customForm.value.formFields.splice(index, 1);
      syncCustomDataYmlFromFields();
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
      if (loadingCustomConfig.value || customConfigLoadError.value || !syncCustomFieldsFromDataYml()) return;
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
        const tags2 = form.tagsInput.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
        const res = await $fetch("/api/admin/panel/apps/custom", {
          method: "POST",
          body: {
            key: form.key.trim(),
            name: form.name.trim(),
            tags: tags2,
            type: form.type,
            icon: form.icon.trim(),
            description: form.description.trim(),
            version: form.version.trim(),
            overrideMode: form.overrideMode,
            compose: form.compose.trim(),
            dataYml: customDataYml.value,
            envContent: form.envContent,
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
    const handlePackageSelected = (file) => {
      if (uploadingPackage.value) return;
      if (file && !/\.(zip|tar\.gz|tgz)$/i.test(file.name)) {
        toast.add({
          title: "\u4E0D\u652F\u6301\u7684\u5B89\u88C5\u5305\u683C\u5F0F",
          description: "\u8BF7\u9009\u62E9 .zip\u3001.tar.gz \u6216 .tgz \u6587\u4EF6",
          color: "error"
        });
        return;
      }
      selectedFile.value = file != null ? file : null;
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
      const _component_UButton = _sfc_main$R;
      const _component_UCard = _sfc_main$n;
      const _component_UIcon = _sfc_main$W;
      const _component_UInput = _sfc_main$v;
      const _component_UBadge = _sfc_main$M;
      const _component_UModal = _sfc_main$G;
      const _component_UFileUpload = _sfc_main$1;
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
            if (loadingCustomConfig.value) {
              _push2(`<p class="text-xs text-gray-500"${_scopeId}>\u6B63\u5728\u8BFB\u53D6\u5B89\u88C5\u5305\u914D\u7F6E...</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (customConfigLoadError.value) {
              _push2(`<p class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(customConfigLoadError.value)}\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u540E\u91CD\u8BD5\u3002</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<fieldset${ssrIncludeBooleanAttr(loadingCustomConfig.value || savingCustom.value) ? " disabled" : ""} class="space-y-4 text-xs"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}><div${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId}> \u5E94\u7528 Key (\u552F\u4E00\u6807\u8BC6\uFF0C\u5982 mysql / redis / myapp) <span class="text-red-500"${_scopeId}>*</span></label>`);
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
              _push2(`<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800"${_scopeId}><div class="flex-1"${_scopeId}><input${ssrRenderAttr("value", field.envKey)} placeholder="\u73AF\u5883\u53D8\u91CF\u540D (\u5982 PANEL_DB_ROOT_PASSWORD)" class="w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-28"${_scopeId}><input${ssrRenderAttr("value", field.labelZh)} placeholder="\u4E2D\u6587\u63CF\u8FF0 (\u5982 \u5BC6\u7801)" class="w-full bg-transparent text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-28"${_scopeId}><input${ssrRenderAttr("value", field.default)} placeholder="\u9ED8\u8BA4\u503C (\u5982 3306)" class="w-full bg-transparent font-mono text-xs text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-emerald-500 pb-0.5"${_scopeId}></div><div class="w-24"${_scopeId}><select class="w-full rounded border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 py-1 px-1.5 text-xs text-gray-900 dark:text-white"${_scopeId}><option value="text"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "text") : ssrLooseEqual(field.type, "text")) ? " selected" : ""}${_scopeId}>text</option><option value="password"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "password") : ssrLooseEqual(field.type, "password")) ? " selected" : ""}${_scopeId}>password</option><option value="number"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "number") : ssrLooseEqual(field.type, "number")) ? " selected" : ""}${_scopeId}>number</option><option value="select"${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, "select") : ssrLooseEqual(field.type, "select")) ? " selected" : ""}${_scopeId}>select</option>`);
              if (field.type && !["text", "password", "number", "select"].includes(field.type)) {
                _push2(`<option${ssrRenderAttr("value", field.type)}${ssrIncludeBooleanAttr(Array.isArray(field.type) ? ssrLooseContain(field.type, field.type) : ssrLooseEqual(field.type, field.type)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(field.type)}</option>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</select></div><div class="flex items-center gap-1.5 shrink-0 text-[11px] text-gray-500"${_scopeId}><label class="flex items-center gap-1 cursor-pointer"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(field.required) ? ssrLooseContain(field.required, null) : field.required) ? " checked" : ""} class="rounded text-emerald-600"${_scopeId}><span${_scopeId}>\u5FC5\u586B</span></label>`);
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
            _push2(`</div></div><div class="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>data.yml \u5E94\u7528\u7248\u672C\u5143\u6570\u636E</label><p class="text-[11px] text-gray-400"${_scopeId}>\u53EF\u76F4\u63A5\u7F16\u8F91 YAML\uFF1BformFields \u4E2D\u7684\u9ED8\u8BA4\u503C\u4F1A\u540C\u6B65\u5230\u5B89\u88C5\u53C2\u6570\u8868\u683C\uFF0C\u5176\u4ED6\u5143\u6570\u636E\u4FDD\u7559\u5728\u79BB\u7EBF\u5305\u4E2D\u3002</p><textarea rows="12" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800" spellcheck="false" aria-label="data.yml \u5E94\u7528\u7248\u672C\u5143\u6570\u636E"${_scopeId}>${ssrInterpolate(customDataYml.value)}</textarea></div><div class="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="block font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>.env \u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C</label><p class="text-[11px] text-gray-400"${_scopeId}>\u6BCF\u884C\u586B\u5199 KEY=\u9ED8\u8BA4\u503C\uFF0C\u652F\u6301\u7A7A\u503C\u548C\u6CE8\u91CA\uFF1B\u4FDD\u5B58\u540E\u4E0E Compose \u4E00\u8D77\u6253\u5305\uFF0C\u5B89\u88C5\u53C2\u6570\u4E0E .env \u6309\u5404\u81EA\u914D\u7F6E\u4FDD\u5B58\u3002</p><textarea rows="8" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800" spellcheck="false" aria-label=".env \u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C" placeholder="APP_PORT=8080
APP_PASSWORD=
# \u5E94\u7528\u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C"${_scopeId}>${ssrInterpolate(customForm.value.envContent)}</textarea></div><div class="space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><label class="font-semibold text-gray-700 dark:text-gray-300"${_scopeId}> docker-compose.yml \u5BB9\u5668\u7F16\u6392\u5185\u5BB9 <span class="text-red-500"${_scopeId}>*</span></label>`);
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
            _push2(`</div><textarea rows="14" class="w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800" spellcheck="false" placeholder="\u8BF7\u8F93\u5165 docker-compose.yml \u6A21\u677F\u914D\u7F6E..."${_scopeId}>${ssrInterpolate(customForm.value.compose)}</textarea></div></fieldset><div class="flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
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
              disabled: loadingCustomConfig.value || Boolean(customConfigLoadError.value),
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
                loadingCustomConfig.value ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-xs text-gray-500"
                }, "\u6B63\u5728\u8BFB\u53D6\u5B89\u88C5\u5305\u914D\u7F6E...")) : createCommentVNode("", true),
                customConfigLoadError.value ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: "text-xs text-red-500"
                }, toDisplayString(customConfigLoadError.value) + "\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u540E\u91CD\u8BD5\u3002", 1)) : createCommentVNode("", true),
                createVNode("fieldset", {
                  disabled: loadingCustomConfig.value || savingCustom.value,
                  class: "space-y-4 text-xs"
                }, [
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
                    createVNode("div", {
                      class: "space-y-2 max-h-44 overflow-y-auto pr-1",
                      onChange: syncCustomDataYmlFromFields
                    }, [
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
                              createVNode("option", { value: "number" }, "number"),
                              createVNode("option", { value: "select" }, "select"),
                              field.type && !["text", "password", "number", "select"].includes(field.type) ? (openBlock(), createBlock("option", {
                                key: 0,
                                value: field.type
                              }, toDisplayString(field.type), 9, ["value"])) : createCommentVNode("", true)
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
                    ], 32)
                  ]),
                  createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300" }, "data.yml \u5E94\u7528\u7248\u672C\u5143\u6570\u636E"),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, "\u53EF\u76F4\u63A5\u7F16\u8F91 YAML\uFF1BformFields \u4E2D\u7684\u9ED8\u8BA4\u503C\u4F1A\u540C\u6B65\u5230\u5B89\u88C5\u53C2\u6570\u8868\u683C\uFF0C\u5176\u4ED6\u5143\u6570\u636E\u4FDD\u7559\u5728\u79BB\u7EBF\u5305\u4E2D\u3002"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => customDataYml.value = $event,
                      rows: "12",
                      class: "w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800",
                      spellcheck: "false",
                      "aria-label": "data.yml \u5E94\u7528\u7248\u672C\u5143\u6570\u636E",
                      onBlur: syncCustomFieldsFromDataYml
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, customDataYml.value]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("label", { class: "block font-semibold text-gray-700 dark:text-gray-300" }, ".env \u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C"),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, "\u6BCF\u884C\u586B\u5199 KEY=\u9ED8\u8BA4\u503C\uFF0C\u652F\u6301\u7A7A\u503C\u548C\u6CE8\u91CA\uFF1B\u4FDD\u5B58\u540E\u4E0E Compose \u4E00\u8D77\u6253\u5305\uFF0C\u5B89\u88C5\u53C2\u6570\u4E0E .env \u6309\u5404\u81EA\u914D\u7F6E\u4FDD\u5B58\u3002"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => customForm.value.envContent = $event,
                      rows: "8",
                      class: "w-full rounded-lg border border-gray-200 bg-gray-950 p-3 font-mono text-xs leading-relaxed text-emerald-400 focus:border-emerald-500 focus:outline-none dark:border-gray-800",
                      spellcheck: "false",
                      "aria-label": ".env \u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C",
                      placeholder: "APP_PORT=8080\nAPP_PASSWORD=\n# \u5E94\u7528\u73AF\u5883\u53D8\u91CF\u9ED8\u8BA4\u503C"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, customForm.value.envContent]
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
                ], 8, ["disabled"]),
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
                    disabled: loadingCustomConfig.value || Boolean(customConfigLoadError.value),
                    onClick: handleSaveCustomApp
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u5E76\u53D1\u5E03\u79BB\u7EBF\u5305 ")
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
            _push2(`</div><div class="space-y-4 text-xs"${_scopeId}><p class="text-gray-500 dark:text-gray-400 leading-relaxed"${_scopeId}> \u652F\u6301\u4E0A\u4F20 1Panel / GoPanel \u89C4\u8303\u7684 <code${_scopeId}>.zip</code>\u3001<code${_scopeId}>.tar.gz</code>\u3001<code${_scopeId}>.tgz</code> \u79BB\u7EBF\u5305\u3002\u7CFB\u7EDF\u5C06\u81EA\u52A8\u89E3\u5305\u3001\u6E05\u6D17 1Panel \u7F51\u7EDC\u4E0E\u8DEF\u5F84\u3001\u63D0\u53D6 <code${_scopeId}>docker-compose.yml</code> \u548C <code${_scopeId}>data.yml</code> \u5E76\u81EA\u52A8\u53D1\u5E03\u81F3\u5546\u5E97\u3002 </p>`);
            _push2(ssrRenderComponent(_component_UFileUpload, {
              "model-value": selectedFile.value,
              accept: ".zip,.gz,.tgz",
              reset: true,
              disabled: uploadingPackage.value,
              "file-image": false,
              icon: "ph:package",
              label: "\u70B9\u51FB\u9009\u62E9\u6216\u62D6\u62FD\u5B89\u88C5\u5305\u5230\u6B64\u5904",
              description: "\u652F\u6301 .zip\u3001.tar.gz\u3001.tgz \u683C\u5F0F",
              class: "w-full",
              "onUpdate:modelValue": handlePackageSelected
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><span class="font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>\u53EF\u9009\u53C2\u6570\u91CD\u5199\uFF08\u7559\u7A7A\u5219\u81EA\u52A8\u4ECE\u538B\u7F29\u5305\u63D0\u53D6\u63A8\u5BFC\uFF09\uFF1A</span><div class="grid grid-cols-1 sm:grid-cols-3 gap-2"${_scopeId}>`);
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
                    createTextVNode("\u3001"),
                    createVNode("code", null, ".tgz"),
                    createTextVNode(" \u79BB\u7EBF\u5305\u3002\u7CFB\u7EDF\u5C06\u81EA\u52A8\u89E3\u5305\u3001\u6E05\u6D17 1Panel \u7F51\u7EDC\u4E0E\u8DEF\u5F84\u3001\u63D0\u53D6 "),
                    createVNode("code", null, "docker-compose.yml"),
                    createTextVNode(" \u548C "),
                    createVNode("code", null, "data.yml"),
                    createTextVNode(" \u5E76\u81EA\u52A8\u53D1\u5E03\u81F3\u5546\u5E97\u3002 ")
                  ]),
                  createVNode(_component_UFileUpload, {
                    "model-value": selectedFile.value,
                    accept: ".zip,.gz,.tgz",
                    reset: true,
                    disabled: uploadingPackage.value,
                    "file-image": false,
                    icon: "ph:package",
                    label: "\u70B9\u51FB\u9009\u62E9\u6216\u62D6\u62FD\u5B89\u88C5\u5305\u5230\u6B64\u5904",
                    description: "\u652F\u6301 .zip\u3001.tar.gz\u3001.tgz \u683C\u5F0F",
                    class: "w-full",
                    "onUpdate:modelValue": handlePackageSelected
                  }, null, 8, ["model-value", "disabled"]),
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
//# sourceMappingURL=appstore-BhIbQMkl.mjs.map
