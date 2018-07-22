import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
    onValidated?(e: bool): void;
    validateState?: boolean;
    validateOnly?: boolean;
    onInput?(): void;

}

export class InputText extends React.Component<InputTextProps, any> { }