import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
    onValidated?(e: bool): void;
    validateState?: boolean;
    validateOnly?: boolean;
    onValidated?(e: boolean): void;
    onInput?(): void;

}

export class InputText extends React.Component<InputTextProps, any> { }