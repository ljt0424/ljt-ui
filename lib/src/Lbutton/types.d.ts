import { ExtractDefaultPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    icon: StringConstructor;
    iconPosition: StringConstructor;
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
};
export declare type ButtonProps = ExtractDefaultPropTypes<typeof buttonProps>;
