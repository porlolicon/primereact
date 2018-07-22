import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KeyFilter from "../keyfilter/KeyFilter";

export class InputText extends Component {

    state = {
        valid: true,
        isFocus: false
    }

    static defaultProps = {
        onInput: null,
        onKeyPress: null,
        onValidated: null,
        keyfilter: null,
        validateOnly: false,
        validateState: false
    };

    static propTypes = {
        onInput: PropTypes.func,
        onValidated: PropTypes.func,
        onKeyPress: PropTypes.func,
        keyfilter: PropTypes.any,
        validateOnly: PropTypes.bool,
        validateState: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.valid = true;
    }

    onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(event);
        }

        if (this.props.keyfilter) {
            KeyFilter.onKeyPress(event, this.props.keyfilter, this.props.validateOnly)
        }
    }

    onInput(e) {
        let validatePattern = true;
        if (this.props.keyfilter && this.props.validateOnly) {
            validatePattern = KeyFilter.validate(e, this.props.keyfilter);
        }

        this.setState({
            valid: validatePattern
        })

        if (this.props.onInput) {
            this.props.onInput(e, validatePattern);
        }

        this.updateFilledState(e.target.value);
    }

    updateFilledState(val) {
        if (val && val.length)
            this.inputEl.classList.add('ui-state-filled');
        else
            this.inputEl.classList.remove('ui-state-filled');
    }

    componentDidMount() {
        let _value = this.props.value || this.props.defaultValue;

        this.updateFilledState(_value);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            this.updateFilledState(this.props.value);
        }
    }

    onFocus() {
        this.setState({
            isFocus: true
        })
    }

    onBlur() {
        if (this.props.onValidated) {
            this.props.onValidated(this.state.valid)
        }
        this.setState({
            isFocus: false
        })
    }

    render() {
        let className = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });
        if (this.props.validateState && this.props.value && !this.state.isFocus && !this.state.valid) {
            className += ' ui-state-error'
        }
        let inputProps = Object.assign({}, this.props);
        delete inputProps.onInput;
        delete inputProps.onKeyPress;
        delete inputProps.keyfilter;
        delete inputProps.validateOnly;
        delete inputProps.validateState;
        if (this.props.validateState) {
            inputProps.onFocus = this.onFocus
            inputProps.onBlur = this.onBlur
        }

        return <input ref={(el) => this.inputEl = el} {...inputProps} className={className} onInput={this.onInput} onKeyPress={this.onKeyPress} />;
    }
}