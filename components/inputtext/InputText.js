'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _KeyFilter = require('../keyfilter/KeyFilter');

var _KeyFilter2 = _interopRequireDefault(_KeyFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var specialChars = "-./";

var InputText = exports.InputText = function (_Component) {
    _inherits(InputText, _Component);

    function InputText(props) {
        _classCallCheck(this, InputText);

        var _this = _possibleConstructorReturn(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this, props));

        _this.state = {
            valid: true,
            isFocus: false
        };

        _this.onInput = _this.onInput.bind(_this);
        _this.onKeyPress = _this.onKeyPress.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.valid = true;
        return _this;
    }

    _createClass(InputText, [{
        key: 'onKeyPress',
        value: function onKeyPress(event) {
            if (this.props.onKeyPress) {
                this.props.onKeyPress(event);
            }

            if (this.props.keyfilter) {
                _KeyFilter2.default.onKeyPress(event, this.props.keyfilter, this.props.validateOnly);
            }
        }
    }, {
        key: 'onInput',
        value: function onInput(e) {
            var validatePattern = true;
            if (this.props.mask && e.target.value) {
                var len = e.target.value.length;
                if (len > this.props.value.length) {
                    if (len > this.props.mask.length) {
                        e.target.value = e.target.value.slice(0, -1);
                    } else {
                        if (specialChars.indexOf(this.props.mask[len]) !== -1) {
                            e.target.value += this.props.mask[len];
                        }
                        if (this.props.convertDate && e.target.value.length === 10) {
                            var year = parseInt(e.target.value.split('/')[2]);
                            if (year > new Date().getFullYear()) {
                                year -= 543;
                            }
                            e.target.value = e.target.value.slice(0, -4) + year;
                        }
                    }
                }
            }
            if (this.props.keyfilter && this.props.validateOnly) {
                validatePattern = _KeyFilter2.default.validate(e, this.props.keyfilter);
            }

            this.setState({
                valid: validatePattern
            });

            if (this.props.onInput) {
                this.props.onInput(e, validatePattern);
            }

            this.updateFilledState(e.target.value);
        }
    }, {
        key: 'updateFilledState',
        value: function updateFilledState(val) {
            if (val && val.length) this.inputEl.classList.add('ui-state-filled');else this.inputEl.classList.remove('ui-state-filled');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _value = this.props.value || this.props.defaultValue;

            this.updateFilledState(_value);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.value !== this.props.value) {
                this.updateFilledState(this.props.value);
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.setState({
                isFocus: true
            });
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            if (this.props.onValidated) {
                this.props.onValidated(this.state.valid);
            }
            this.setState({
                isFocus: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var className = (0, _classnames2.default)('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
                'ui-state-disabled': this.props.disabled
            });
            if (this.props.validateState && this.props.value && !this.state.isFocus && !this.state.valid) {
                className += ' ui-state-error';
            }
            var inputProps = Object.assign({}, this.props);
            delete inputProps.onInput;
            delete inputProps.onKeyPress;
            delete inputProps.keyfilter;
            delete inputProps.validateOnly;
            delete inputProps.validateState;
            delete inputProps.onValidated;
            delete inputProps.mask;
            delete inputProps.convertDate;
            if (this.props.validateState) {
                inputProps.onFocus = this.onFocus;
                inputProps.onBlur = this.onBlur;
            }

            return _react2.default.createElement('input', _extends({ ref: function ref(el) {
                    return _this2.inputEl = el;
                } }, inputProps, { className: className, onInput: this.onInput, onKeyPress: this.onKeyPress }));
        }
    }]);

    return InputText;
}(_react.Component);

InputText.defaultProps = {
    onInput: null,
    mask: null,
    convertDate: null,
    onKeyPress: null,
    onValidated: null,
    keyfilter: null,
    validateOnly: false,
    validateState: false
};
InputText.propTypes = {
    onInput: _propTypes2.default.func,
    mask: _propTypes2.default.string,
    convertDate: _propTypes2.default.bool,
    onValidated: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    keyfilter: _propTypes2.default.any,
    validateOnly: _propTypes2.default.bool,
    validateState: _propTypes2.default.bool
};