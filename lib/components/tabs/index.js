'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = require('./Tabs.jsx');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabPane = require('./TabPane.jsx');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _TabCollapse = require('./TabCollapse.jsx');

var _TabCollapse2 = _interopRequireDefault(_TabCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tabs2.default.TabPane = _TabPane2.default;
_Tabs2.default.TabCollapse = _TabCollapse2.default;

exports.default = _Tabs2.default;