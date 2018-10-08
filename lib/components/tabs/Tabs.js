'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

var _TabPane = require('./TabPane.jsx');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@fileName: Tabs.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@author: kongwentao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(args) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, args));

        _this.state = {
            acitiveKey: _this.props.defaultActiveKey
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.getTabPanes = _this.getTabPanes.bind(_this);
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleClick',
        value: function handleClick(key, item) {
            var self = this;
            var activeKey = JSON.parse(JSON.stringify(self.state.acitiveKey));
            if (self.props.disable) {
                console.log('current Tabs disabled');
            } else {
                activeKey instanceof Array || this.props.multiChose ? activeKey.indexOf(key) > -1 ? activeKey = activeKey.filter(function (k) {
                    return k != key;
                }) : activeKey.push(key) : activeKey = key;
                self.setState({
                    acitiveKey: activeKey
                });
                console.log('Tabs change', activeKey);
                var fn = this.props.onChange;
                fn && fn(activeKey, item);
            }
        }
    }, {
        key: 'getTabPanes',
        value: function getTabPanes() {
            var _this2 = this;

            var self = this;
            var tabs = this.props.data;
            var tabPanes = [];
            var color = '#858fa5';
            var width = '1px';

            var showDivider = this.props.showDivider;
            if (this.props.dividerStyle) {
                if (this.props.dividerStyle.color) {
                    color = this.props.dividerStyle.color;
                }
                if (this.props.dividerStyle.width) {
                    width = this.props.dividerStyle.width;
                }
            }
            var baseDividerStyle = {
                borderLeft: width + ' solid ' + color
            };

            tabs.map(function (item, index) {
                var tab = item;
                var haskey = item.hasOwnProperty('key');
                if (!haskey) {
                    tab = { key: item, name: item };
                }
                var pane = _react2.default.createElement(_TabPane2.default, {
                    key: JSON.stringify(tab),
                    tab: tab,
                    disable: self.props.disable,
                    acitiveKey: self.state.acitiveKey,
                    tabStyle: self.props.tabStyle || {},
                    horizontalAlign: true,
                    acitiveColor: _this2.props.acitiveColor,
                    defaultColor: _this2.props.defaultColor,
                    mouseOverEnable: _this2.props.mouseOverEnable,
                    onClick: self.handleClick
                });
                tabPanes.push(pane);
                if (showDivider) {
                    var divider = _react2.default.createElement('span', {
                        className: 'divider',
                        key: JSON.stringify(tab) + 'divider',
                        style: baseDividerStyle
                    });
                    tabPanes.push(divider);
                }
            });
            if (showDivider) {
                tabPanes.pop();
            }
            return tabPanes;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var self = this;
            var children = this.props.children;

            if (!children) return;
            console.log('mouseOverEnable', this.props.mouseOverEnable);
            return _react2.default.Children.map(children, function (child) {
                // dom元素，自定义组件
                // if (typeof child.type === 'string') {
                //     return child;
                // }
                if (child) {
                    return _react2.default.cloneElement(child, {
                        onClick: self.handleClick,
                        acitiveKey: self.state.acitiveKey
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var tabPanes = null;
            if (this.props.data) {
                tabPanes = this.getTabPanes();
            }
            return _react2.default.createElement(
                'div',
                {
                    className: 'tabs_span',
                    key: this.props.key || Math.random(3) + 'tab',
                    style: this.props.outerStyle || {}
                },
                tabPanes ? tabPanes : this.renderChildren()
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    showDivider: false
    // tabs support simple array and object array 
    // tabs: [
    //     { name: '性别', key: 'sex', imageUrl: '' },
    //     { name: '教育水平', key: 'education', imageUrl: '' },
    //     // { name: '人生阶段', key: 'life_stage', imageUrl: '/static/juejin/images/life_stage.png' },
    // ],
    // tabs: ['support', 'string', 'array']
};
exports.default = Tabs;