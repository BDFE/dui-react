'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _TabPane = require('./TabPane.jsx');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Tabs = require('./Tabs.jsx');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@fileName: Tabs.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@author: kongwentao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = {};
Object.assign(styles, _index2.default);

var TabCollapse = function (_React$Component) {
    _inherits(TabCollapse, _React$Component);

    function TabCollapse(args) {
        _classCallCheck(this, TabCollapse);

        var _this = _possibleConstructorReturn(this, (TabCollapse.__proto__ || Object.getPrototypeOf(TabCollapse)).call(this, args));

        _this.defautStyle = { width: '100%', height: '30px', color: '#8690A6', fontSize: '14px', letterSpacing: '0.8px', padding: '0px 0px 0px 16px' };
        return _this;
    }

    _createClass(TabCollapse, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var self = this;
            var children = this.props.children;

            if (!children) return;
            return _react2.default.Children.map(children, function (child) {
                // dom元素，自定义组件
                // if (typeof child.type === 'string') {
                //     return child;
                // }
                if (child) {
                    return _react2.default.cloneElement(child, {
                        acitiveKey: self.props.acitiveKey
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var tabs = self.props.tabs;
            var tabStyle = Object.assign({ margin: '0px 14px 0px 16px' }, self.props.tabStyle);

            var tabPanes = tabs.map(function (tab) {
                return _react2.default.createElement(_TabPane2.default, {
                    key: JSON.stringify(tab),
                    tab: tab,
                    horizontalAlign: true,
                    tabStyle: tabStyle,
                    mouseOverEnable: false
                    // acitiveColor={self.props.acitiveColor || '#FFFFFF'}
                    // defaultColor={self.props.style.color || '#8690A6'}
                });
            });
            var buttonClassName = self.props.collapsed ? '' : 'down_arrow';
            var buttonPathData = 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z';
            // self.props.collapsed
            //     ? 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
            //     : 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z';

            var c_style = Object.assign({}, self.defautStyle, self.props.style);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'tab_collapse_container', style: c_style },
                    _react2.default.createElement(
                        'div',
                        { className: 'left_tabs' },
                        _react2.default.createElement(
                            _Tabs2.default,
                            {
                                defaultActiveKey: self.props.activeTab,
                                onChange: function onChange(key) {
                                    self.props.onTabChange(key);
                                },
                                mouseOverEnable: false
                                // acitiveColor={'#F5533D'}
                                // defaultColor={'#858fa5'}
                            },
                            tabPanes
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'right_button',
                            onClick: function onClick() {
                                self.props.toggleCollapse(!self.props.collapsed);
                            }
                        },
                        self.props.collapsed ? '收起' : '展开',
                        _react2.default.createElement(
                            'svg',
                            { viewBox: '0 0 24 24',
                                className: 'up_arrow ' + buttonClassName
                            },
                            _react2.default.createElement('path', { d: buttonPathData })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'children ' + (self.props.collapsed ? '' : 'hide')
                    },
                    this.renderChildren()
                )
            );
        }
    }]);

    return TabCollapse;
}(_react2.default.Component);

TabCollapse.defaultProps = {
    // activeTab: 'edu',
    // collapsed: true,
    // tabStyle: { margin: '0 30px 0 0' },
    // style: { margin: '0px' },
    // tabs: [
    //     { name: 'sex', key: 'sex' },
    //     { name: 'edu', key: 'edu' },
    // ],
};
exports.default = (0, _uncontrollable2.default)(TabCollapse, {
    activeTab: 'onTabChange',
    collapsed: 'toggleCollapse'
});

// const TempModule = uncontrollable(TabCollapse, {
//     activeTab: 'onTabChange',
//     collapsed: 'toggleCollapse'
// });
// export default CSSModules(TempModule, styles, { allowMultiple: true });