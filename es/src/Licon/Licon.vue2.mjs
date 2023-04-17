import "./style/index.css";
import "./font/iconfont.mjs";
import { defineComponent as i, computed as t } from "vue";
import { iconProps as m } from "./types.mjs";
const f = i({
  name: "Licon",
  props: m,
  setup(o) {
    const n = t(() => `#Licon-${o.name}`), e = t(() => ({
      ["Licon-dot"]: o.dot && !o.badge
    })), r = t(() => o.badge), c = t(() => ({
      color: o.color
    }));
    return {
      iconName: n,
      styleDot: e,
      badge: r,
      iconColor: c
    };
  }
});
export {
  f as default
};
