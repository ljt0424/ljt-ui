const o = ["primary"], e = {
  type: {
    type: String,
    validator(t) {
      return o.includes(t);
    }
  },
  // plain: Boolean,
  // round: Boolean,
  disabled: Boolean
};
export {
  o as ButtonType,
  e as buttonProps
};
