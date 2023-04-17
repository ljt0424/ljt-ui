import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FlowingButton: typeof components.Button;
    EaIcon: typeof components.Licon;
  }
}
export {};

