import { defineComponent as o, computed as s, openBlock as l, createElementBlock as u, normalizeClass as p, unref as a, renderSlot as c } from "vue";
import "./style/index.css";
import { buttonProps as i } from "./types.mjs";
const m = o({ name: "Flowing-button" }), g = /* @__PURE__ */ o({
  ...m,
  props: i,
  setup(e) {
    const t = e, n = s(() => ({
      [`Flowing-button--${t.type}`]: t.type,
      "is-disabled": t.disabled
    }));
    return (r, d) => (l(), u("button", {
      class: p(["Flowing-button", a(n)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  g as default
};
