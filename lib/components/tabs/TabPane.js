'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@fileName: TabPane.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *@author: kongwentao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TabPane = function (_React$Component) {
    _inherits(TabPane, _React$Component);

    function TabPane(args) {
        _classCallCheck(this, TabPane);

        var _this = _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, args));

        _this.state = {
            mouseOverFlag: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.getTabPane = _this.getTabPane.bind(_this);
        return _this;
    }

    _createClass(TabPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleClick',
        value: function handleClick(key, item) {
            var fn = this.props.handleClick;
            fn && fn(key, item);
        }
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
                        onClick: self.handleClick
                    });
                }
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {}
    }, {
        key: 'getTabPane',
        value: function getTabPane() {
            var self = this;
            var panel = '';
            var tab = self.props.tab;
            var iconSize = self.props.iconSize;
            var acitiveColor = self.props.acitiveColor;
            var defaultColor = self.props.defaultColor;
            if (tab instanceof HTMLElement || _react2.default.isValidElement(tab)) {
                // let outerStyle = {display:'inline-block'}
                // panel = <div style={outerStyle}>{tab}</div>
                panel = tab;
            } else {
                var acitiveKey = self.props.acitiveKey;
                var color = ((acitiveKey instanceof Array ? acitiveKey.indexOf(tab.key) > -1 : tab.key == acitiveKey) || self.state.mouseOverFlag) && !self.props.disable ? acitiveColor : defaultColor;
                var filter = 'drop-shadow( ' + iconSize + 'px 0 0px ' + color + ')';
                var imageModule = null;
                if (tab.imageUrl && !!tab.imageUrl) {
                    var style = {
                        background: 'url(' + (tab.imageUrl || '/static/juejin/images/clock.png') + ') ',
                        position: 'relative',
                        width: iconSize + 'px',
                        height: iconSize + 'px',
                        left: '-' + iconSize + 'px',
                        // margin: 'auto 5px',
                        // backgroundSize: '100% 100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRight: iconSize + 'px solid transparent',
                        filter: filter
                    };

                    imageModule = _react2.default.createElement(
                        'div',
                        { style: {
                                width: iconSize + 'px',
                                height: iconSize + 'px',
                                overflow: 'hidden'
                            } },
                        _react2.default.createElement('div', {
                            style: style
                        })
                    );
                }
                var dispaly = self.props.horizontalAlign ? 'inline-flex' : 'inline-grid';
                panel = _react2.default.createElement(
                    'span',
                    { style: {
                            display: dispaly,
                            justifyItems: 'center',
                            alignItems: 'center'
                        },
                        onMouseEnter: function onMouseEnter() {
                            var enable = self.props.mouseOverEnable;
                            console.log('TabPane mouseEnter', enable);
                            if (enable) {
                                self.setState({ mouseOverFlag: true });
                            }
                        },
                        onMouseOut: function onMouseOut() {
                            self.setState({ mouseOverFlag: false });
                        },
                        onMouseLeave: function onMouseLeave() {
                            self.setState({ mouseOverFlag: false });
                        }
                    },
                    imageModule,
                    _react2.default.createElement(
                        'div',
                        { style: {
                                display: 'inline-block',
                                color: color
                            }
                        },
                        tab.name
                    )
                );
            }

            var outerStyle = {
                display: 'inline-block'
                // margin: '0 30px 0 0',
            };
            if (self.props.tabStyle) {
                Object.assign(outerStyle, self.props.tabStyle);
            }

            return _react2.default.createElement(
                'div',
                { style: outerStyle },
                panel
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var panes = this.getTabPane();
            console.log('mouseOverEnable', this.props.mouseOverEnable);
            return _react2.default.createElement(
                'span',
                {
                    className: 'tabs_pane_span',
                    key: this.props.key || JSON.stringify(this.props.tab) + Math.random(),
                    onClick: function onClick() {
                        _this2.props.onClick(_this2.props.tab.key, _this2.props.tab);
                    }
                },
                panes
            );
        }
    }]);

    return TabPane;
}(_react2.default.Component);

TabPane.defaultProps = {
    mouseOverEnable: true,
    acitiveColor: '#5e87db',
    defaultColor: '#666',
    acitiveKey: '',
    disable: false,
    horizontalAlign: false
    // iconSize: 25,
    // tab: { name: '性别', key: 'sex', imageUrl: '/static/juejin/images/sex.png' },
    // tabStyle: {
    //     display: 'inline-block',
    //     margin: '0 30px 0 0',
    // },
};

exports.default = TabPane;