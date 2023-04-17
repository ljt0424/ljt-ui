import r from "./Licon.vue2.mjs";
import { openBlock as o, createElementBlock as n, normalizeStyle as t, createElementVNode as i, normalizeClass as s, toDisplayString as a, createCommentVNode as c } from "vue";
import l from "../../_virtual/_plugin-vue_export-helper.mjs";
const d = { class: "Licon-icon" }, m = ["xlink:href"];
function f(e, p, u, _, h, k) {
  return o(), n("div", d, [
    (o(), n("svg", {
      class: "icon",
      style: t(e.iconColor),
      "aria-hidden": "true"
    }, [
      i("use", { "xlink:href": e.iconName }, null, 8, m)
    ], 4)),
    e.dot ? (o(), n("div", {
      key: 0,
      class: s(["Licon-info", e.styleDot])
    }, a(e.badge), 3)) : c("", !0)
  ]);
}
const v = /* @__PURE__ */ l(r, [["render", f]]);
export {
  v as default
};
