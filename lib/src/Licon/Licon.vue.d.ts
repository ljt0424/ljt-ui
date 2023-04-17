declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
    };
    dot: {
        type: BooleanConstructor;
    };
    badge: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
}, {
    iconName: import("vue").ComputedRef<string>;
    styleDot: import("vue").ComputedRef<{
        "Licon-dot": boolean;
    }>;
    badge: import("vue").ComputedRef<string | undefined>;
    iconColor: import("vue").ComputedRef<{
        color: string | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    dot: {
        type: BooleanConstructor;
    };
    badge: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
}>>, {
    dot: boolean;
}>;
export default _sfc_main;
