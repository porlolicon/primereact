import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class FirstPageLink extends Component {

    static defaultProps = {
        disabled: false,
        onClick: null
    }

    static propsTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }
    
    render() {
        let className = classNames('ui-paginator-first ui-paginator-element ui-state-default ui-corner-all', {'ui-state-disabled': this.props.disabled});
        
        return (
            <a className={className} onClick={this.props.onClick} tabIndex={this.props.disabled ? -1 : null}>
                <span className="ui-paginator-icon pi pi-step-backward"></span>
            </a>
        );
    }
}