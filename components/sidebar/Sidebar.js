'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sidebar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = exports.Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.state = { visible: _this.props.visible };
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.visible) {
                this.show();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unbindMaskClickListener();
            this.disableModality();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.visible !== this.props.visible) {
                if (this.props.visible) this.show();else {
                    if (this.preventVisibleChangePropagation) this.preventVisibleChangePropagation = false;else this.hide();
                }
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.setState({ visible: true });
            this.container.style.zIndex = String(this.props.baseZIndex + _DomHandler2.default.generateZIndex());
            this.enableModality();
            if (this.props.onShow) {
                this.props.onShow();
            }
        }
    }, {
        key: 'enableModality',
        value: function enableModality() {
            var _this2 = this;

            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
                _DomHandler2.default.addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');

                this.maskClickListener = function (event) {
                    _this2.onClose(event);
                };
                this.mask.addEventListener('click', this.maskClickListener);
                document.body.appendChild(this.mask);
                if (this.props.blockScroll) {
                    _DomHandler2.default.addClass(document.body, 'ui-overflow-hidden');
                }
            }
        }
    }, {
        key: 'onClose',
        value: function onClose(event) {
            this.hide();
            event.preventDefault();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({ visible: false });
            this.unbindMaskClickListener();
            this.disableModality();
            if (this.props.onHide) {
                this.props.onHide();
            }
        }
    }, {
        key: 'disableModality',
        value: function disableModality() {
            if (this.mask) {
                document.body.removeChild(this.mask);
                if (this.props.blockScroll) {
                    _DomHandler2.default.removeClass(document.body, 'ui-overflow-hidden');
                }
                this.mask = null;
            }
        }
    }, {
        key: 'unbindMaskClickListener',
        value: function unbindMaskClickListener() {
            if (this.maskClickListener) {
                this.mask.removeEventListener('click', this.maskClickListener);
                this.maskClickListener = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var containerClass = (0, _classnames2.default)('ui-sidebar ui-widget ui-widget-content ui-shadow', this.props.className, 'ui-sidebar-' + this.props.position, { 'ui-sidebar-active': this.state.visible, 'ui-sidebar-full': this.props.fullScreen });

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.container = el;
                    }, id: this.props.id, className: containerClass, style: this.props.style },
                _react2.default.createElement(
                    'a',
                    { className: 'ui-sidebar-close ui-corner-all', role: 'button', onClick: this.onClose },
                    _react2.default.createElement('span', { className: 'pi pi-times' })
                ),
                this.props.children
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

Sidebar.defaultProps = {
    id: null,
    style: null,
    className: null,
    visible: false,
    position: 'left',
    fullScreen: false,
    blockScroll: false,
    baseZIndex: 0,
    onShow: null,
    onHide: null
};
Sidebar.propTypes = {
    id: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    visible: _propTypes2.default.bool,
    position: _propTypes2.default.string,
    fullScreen: _propTypes2.default.bool,
    blockScroll: _propTypes2.default.bool,
    baseZIndex: _propTypes2.default.number,
    onShow: _propTypes2.default.func,
    onHide: _propTypes2.default.func
};