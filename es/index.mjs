import * as o from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
import { LButton as m } from "./src/Lbutton/index.mjs";
import { Licon as s } from "./src/Licon/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  i as Button,
  m as LButton,
  s as Licon,
  e as default
};
