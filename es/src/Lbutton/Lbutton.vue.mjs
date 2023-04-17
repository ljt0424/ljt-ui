import { defineComponent as l, computed as r, openBlock as i, createElementBlock as d, normalizeClass as b, unref as n, createBlock as c, createCommentVNode as a, renderSlot as f } from "vue";
import "./style/index.css";
import { buttonProps as _ } from "./types.mjs";
import m from "../Licon/Licon.vue.mjs";
const N = l({ name: "L-button" }), z = /* @__PURE__ */ l({
  ...N,
  props: _,
  setup(u) {
    const o = u, p = r(() => ({
      [`L-button--${o.type}`]: o.type,
      [`L-button--${o.size}`]: o.size,
      "is-plain": o.plain,
      "is-round": o.round,
      "is-disabled": o.disabled
    })), t = r(() => {
      const e = o.icon, s = o.iconPosition;
      return {
        iconName: e,
        position: s
      };
    });
    return (e, s) => (i(), d("button", {
      class: b(["L-button", n(p)])
    }, [
      n(t).iconName && n(t).position != "right" ? (i(), c(m, {
        key: 0,
        class: "icon",
        name: n(t).iconName
      }, null, 8, ["name"])) : a("", !0),
      f(e.$slots, "default"),
      n(t).position == "right" && n(t).iconName ? (i(), c(m, {
        key: 1,
        class: "icon",
        name: n(t).iconName
      }, null, 8, ["name"])) : a("", !0)
    ], 2));
  }
});
export {
  z as default
};
