'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_React$Component) {
    _inherits(ButtonGroup, _React$Component);

    function ButtonGroup(args) {
        _classCallCheck(this, ButtonGroup);

        return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, args));
    }

    _createClass(ButtonGroup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onClick',
        value: function onClick(index, item) {
            var onChange = this.props.onChange;
            if (onChange) {
                onChange(index);
                var fn = this.props.onClick;
                fn && fn(index, item);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var listTypes = this.props.data;
            var doms = [];

            if (listTypes) {
                listTypes.map(function (item, index) {
                    var buttonStyle = {};
                    _this2.props.buttonStyle ? Object.assign(buttonStyle, _this2.props.buttonStyle) : '';
                    self.props.defaultBgColor ? buttonStyle['background'] = self.props.defaultBgColor : '';
                    self.props.defaultFontColor ? buttonStyle['color'] = self.props.defaultFontColor : '';

                    for (var i in item) {
                        var className = 'radio';
                        if (i == _this2.props.activeKey) {
                            className += ' active';
                            self.props.activeBgColor ? buttonStyle['background'] = self.props.activeBgColor : '';
                            self.props.activeFontColor ? buttonStyle['color'] = self.props.activeFontColor : '';
                        }
                        var radio = _react2.default.createElement(
                            'div',
                            {
                                key: JSON.stringify(item) + index,
                                className: className,
                                style: buttonStyle,
                                value: item.value,
                                onClick: self.onClick.bind(_this2, i, item)
                            },
                            item[i]
                        );
                        doms.push(radio);
                    }
                    if (self.props.divider) {
                        if (index !== listTypes.length - 1) {
                            doms.push(self.props.divider);
                        }
                    }
                });
            }
            var containerStyle = this.props.groupStyle;
            if (!containerStyle.background) {
                containerStyle.background = this.props.defaultBgColor;
            }
            return _react2.default.createElement(
                'div',
                {
                    className: 'button_group',
                    style: containerStyle || { color: '#333' }
                },
                doms
            );
        }
    }]);

    return ButtonGroup;
}(_react2.default.Component);

ButtonGroup.defaultProps = {
    data: {},
    activeKey: 0
};

// export default ButtonGroup;
exports.default = (0, _uncontrollable2.default)(ButtonGroup, {
    activeKey: 'onChange'
});