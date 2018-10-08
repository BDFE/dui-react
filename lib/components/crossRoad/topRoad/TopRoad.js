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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'index.less';
// import './index.scss';
// require('./index.scss');
require('./index.less');

var CrossRoad = function (_React$Component) {
    _inherits(CrossRoad, _React$Component);

    function CrossRoad(args) {
        _classCallCheck(this, CrossRoad);

        var _this = _possibleConstructorReturn(this, (CrossRoad.__proto__ || Object.getPrototypeOf(CrossRoad)).call(this, args));

        _this.state = {
            checkboxStatus: _this.props.checkboxStatus,
            activeKey: _this.props.activeKey
        };
        return _this;
    }

    _createClass(CrossRoad, [{
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
            } else {
                this.setState({
                    activeKey: index
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var topIcons = null;
            var refNumSpans = null;
            var numSpans = null;
            var roadName = null;

            if (!self.props.multiChose) {
                refNumSpans = self.props.topInfo.refNums.map(function (num) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        num
                    );
                });
                numSpans = self.props.topInfo.nums.map(function (num) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        num
                    );
                });
            } else {
                numSpans = self.props.topInfo.iconNames.map(function (name, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'checkbox_div' },
                        _react2.default.createElement('input', {
                            type: 'checkbox',
                            style: { zoom: '150%', backgroundColor: 'white' },
                            name: name
                            // value={index}
                            , checked: self.state.checkboxStatus[index],
                            onClick: function onClick(e) {
                                var checkboxStatus = self.state.checkboxStatus;
                                checkboxStatus[index] = e.target.checked;
                                self.setState({ checkboxStatus: checkboxStatus }, function () {
                                    // console.log('dd', checkboxStatus);
                                    self.props.onCheckboxChange && self.props.onCheckboxChange(checkboxStatus);
                                });
                            }
                        })
                    );
                });
            }

            roadName = self.props.roadName.split('').map(function (c) {
                return _react2.default.createElement(
                    'span',
                    null,
                    c
                );
            });
            topIcons = self.props.topInfo.iconNames.map(function (name) {
                return _react2.default.createElement('img', { src: '' + self.props.iconBaseLoc + name + '.png' });
            });
            var rotate_class_name = ' ';
            switch (this.props.direction) {
                case 'top':
                    {
                        rotate_class_name = 'top_rotate ';
                        break;
                    }
                case 'bottom':
                    {
                        rotate_class_name = 'bottom_rotate ';
                        break;
                    }
                case 'left':
                    {
                        rotate_class_name = 'left_rotate ';
                        break;
                    }
                case 'right':
                    {
                        rotate_class_name = 'right_rotate ';
                        break;
                    }
                default:
                    break;
            }

            return _react2.default.createElement(
                'span',
                { onClick: function onClick(e) {
                        console.log(self.props.direction);
                        self.props.onClick && self.props.onClick(e);
                    } },
                _react2.default.createElement(
                    'div',
                    { 'class': 'road' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'road_info_box' },
                        _react2.default.createElement(
                            'div',
                            { 'class': rotate_class_name + 'ref_nums' },
                            refNumSpans
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'icons' },
                            topIcons
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': rotate_class_name + 'nums' },
                            numSpans
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'roadname_' + rotate_class_name + 'roadname' },
                            _react2.default.createElement(
                                'div',
                                null,
                                roadName
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'reverse_road' },
                    _react2.default.createElement(
                        'div',
                        { 'class': rotate_class_name + 'ref_num' },
                        _react2.default.createElement(
                            'div',
                            null,
                            ' ',
                            self.props.topInfo.reverseInfo.refNum
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'icon' },
                        _react2.default.createElement('img', { src: '' + self.props.iconBaseLoc + self.props.topInfo.reverseInfo.iconName + '.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': rotate_class_name + 'num' },
                        _react2.default.createElement(
                            'div',
                            null,
                            ' ',
                            self.props.topInfo.reverseInfo.num
                        )
                    )
                )
            );
        }
    }]);

    return CrossRoad;
}(_react2.default.Component);

CrossRoad.defaultProps = {
    iconBaseLoc: '../../../src/static/images/crossRoad/',
    topInfo: {
        refNums: [12, 14, 14, 40],
        iconNames: ['turnright', 'gostraight', 'turnleft', 'turnback'],
        nums: [13, 33, 33, 12],
        reverseInfo: {
            refNum: 15,
            iconName: 'gostraight',
            num: 300
        }
    },
    multiChose: false,
    roadName: '信息路与上地五街',
    activeKey: 0,
    checkboxStatus: [false, false, false, false]
};

exports.default = CrossRoad;

// export default uncontrollable(CrossRoad, {
//     activeKey: 'onChange'
// });