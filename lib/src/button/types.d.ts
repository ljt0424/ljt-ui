import { ExtractDefaultPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    disabled: BooleanConstructor;
};
export declare type ButtonProps = ExtractDefaultPropTypes<typeof buttonProps>;
