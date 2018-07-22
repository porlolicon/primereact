import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class CalendarPanel extends Component {

    static defaultProps = {
        appendTo: null,
        className: null,
        onClick: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    renderElement() {
        return (
            <div ref={(el) => this.element = el} className={this.props.className} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }

}