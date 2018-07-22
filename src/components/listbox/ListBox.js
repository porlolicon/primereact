import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import {ListBoxItem} from './ListBoxItem';
import {ListBoxHeader} from './ListBoxHeader';

export class ListBox extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        itemTemplate: null,
        style: null,
        listStyle: null,
        className: null,
        disabled: null,
        key: null,
        multiple: false,
        metaKeySelection: false,
        filter: false,
        onChange: null
    }
    
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        listStyle: PropTypes.object,
        className: PropTypes.string,
        key: PropTypes.string,
        multiple: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        filter: PropTypes.bool,
        onChange: PropTypes.func
    };
    
    constructor() {
        super();
        this.state = {
            filter: ''
        }
        
        this.onFilter = this.onFilter.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }
    
    onOptionClick(event) {
        if(this.props.disabled) {
            return;
        }
        
        if(this.props.multiple)
            this.onOptionClickMultiple(event.originalEvent, event.option);
        else
            this.onOptionClickSingle(event.originalEvent, event.option);
            
        this.optionTouched = false;
    }
    
    onOptionTouchEnd(event, option) {
        if(this.props.disabled) {
            return;
        }
        
        this.optionTouched = true;
    }
    
    onOptionClickSingle(event, option) {        
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if(metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            
            if(selected) {
                if(metaKey) {
                    value = null;
                    valueChanged = true;
                }
            }
            else {
                value = this.getOptionValue(option);
                valueChanged = true;
            }
        }
        else {
            value = selected ? null : this.getOptionValue(option);
            valueChanged = true;
        }

        if(valueChanged) {
            this.updateModel(event, value);
        }
    }

    onOptionClickMultiple(event, option) {        
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if(metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            
            if(selected) {
                if(metaKey)
                    value = this.removeOption(option);
                else
                    value = [this.getOptionValue(option)];
                
                valueChanged = true;
            }
            else {
                value = (metaKey) ? this.props.value || [] : [];
                value = [...value, this.getOptionValue(option)];
                valueChanged = true;
            }
        }
        else {
            if(selected)
                value = this.removeOption(option);
            else
                value = [...this.props.value || [], this.getOptionValue(option)];
            
            valueChanged = true;
        }

        if(valueChanged) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }
    
    onFilter(event) {
        this.setState({filter: event.query});
    }
    
    updateModel(event, value) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }
    
    removeOption(option) {
        return this.props.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.props.key));
    }
    
    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);

        if(this.props.multiple) {
            if(this.props.value) {
                for(let val of this.props.value) {
                    if(ObjectUtils.equals(val, optionValue, this.props.key)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.props.value, optionValue, this.props.key);
        }

        return selected;
    }
    
    filter(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        let optionLabel = this.getOptionLabel(option);
        
        return optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }
    
    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }
    
    getOptionValue(option) {
        return this.props.optionLabel ? option : option.value;
    }
    
    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option.label;
    }

    render() {
        let className = classNames('ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });
        let items = this.props.options;
        let header;
        
        if(this.props.options) {
            if(this.hasFilter()) {
                items = items.filter((option) => {
                    return this.filter(option);
                });
            }

            items = items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);
                
                return <ListBoxItem key={optionLabel} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.isSelected(option)}
                        onClick={this.onOptionClick} onTouchEnd={(e) => this.onOptionTouchEnd(e, option, index)} />;
            });
        }
        
        if(this.props.filter) {
            header = <ListBoxHeader filter={this.state.filter} onFilter={this.onFilter} disabled={this.props.disabled} />
        }
        
        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {header}
                <div className="ui-listbox-list-wrapper">
                    <ul className="ui-listbox-list" style={this.props.listStyle}>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}