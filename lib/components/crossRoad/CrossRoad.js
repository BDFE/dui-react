'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TopRoad = require('./topRoad/TopRoad.js');

var _TopRoad2 = _interopRequireDefault(_TopRoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./index.less');

var CrossRoad = function (_React$Component) {
    _inherits(CrossRoad, _React$Component);

    function CrossRoad(args) {
        _classCallCheck(this, CrossRoad);

        var _this = _possibleConstructorReturn(this, (CrossRoad.__proto__ || Object.getPrototypeOf(CrossRoad)).call(this, args));

        _this.state = {
            activeKey: _this.props.activeKey || 0
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

            return _react2.default.createElement(
                'div',
                { 'class': 'road_bord' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'top_road_container' },
                    _react2.default.createElement(_TopRoad2.default, {
                        iconBaseLoc: self.props.iconBaseLoc,
                        infos: self.props.topInfo,
                        direction: 'top',
                        multiChose: 'true',
                        onCheckboxChange: function onCheckboxChange(value) {
                            console.log('new checkbox value', value);
                        }
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'bottom_road_container' },
                    _react2.default.createElement(_TopRoad2.default, {
                        iconBaseLoc: self.props.iconBaseLoc,
                        infos: self.props.topInfo,
                        direction: 'bottom'
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'right_road_container' },
                    _react2.default.createElement(_TopRoad2.default, {
                        iconBaseLoc: self.props.iconBaseLoc,
                        infos: self.props.topInfo,
                        direction: 'right'
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'left_road_container' },
                    _react2.default.createElement(_TopRoad2.default, {
                        iconBaseLoc: self.props.iconBaseLoc,
                        infos: self.props.topInfo,
                        direction: 'left'
                    })
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
    activeKey: 0
};

exports.default = CrossRoad;

// export default uncontrollable(CrossRoad, {
//     activeKey: 'onChange'
// });