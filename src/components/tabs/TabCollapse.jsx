/**
 *@fileName: Tabs.jsx
 *@author: kongwentao
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import uncontrollable from 'uncontrollable';
import TabPane from './TabPane.jsx';
import Tabs from './Tabs.jsx';
import './index.less';
import _style from './index.less';
let styles = {};
Object.assign(styles, _style);

class TabCollapse extends React.Component {
    constructor(args) {
        super(args);
        this.defautStyle = { width: '100%', height: '30px', color: '#8690A6', fontSize: '14px', letterSpacing: '0.8px', padding: '0px 0px 0px 16px' }
    }

    componentDidMount() {
    }

    renderChildren() {
        const self = this;
        const { children } = this.props;
        if (!children) return;
        return React.Children.map(children, child => {
            // dom元素，自定义组件
            // if (typeof child.type === 'string') {
            //     return child;
            // }
            if (child) {
                return React.cloneElement(child, {
                    acitiveKey: self.props.acitiveKey
                });
            }
        });
    }

    render() {
        const self = this;
        const tabs = self.props.tabs;
        let tabStyle = Object.assign({ margin: '0px 14px 0px 16px' }, self.props.tabStyle);

        const tabPanes = tabs.map((tab) => {
            return <TabPane
                key={JSON.stringify(tab)}
                tab={tab}
                horizontalAlign={true}
                tabStyle={tabStyle}
                mouseOverEnable={false}
                // acitiveColor={self.props.acitiveColor || '#FFFFFF'}
                // defaultColor={self.props.style.color || '#8690A6'}
            />;
        });
        let buttonClassName = self.props.collapsed ? '' : 'down_arrow';
        let buttonPathData = 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z';
        // self.props.collapsed
        //     ? 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        //     : 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z';

        let c_style = Object.assign({}, self.defautStyle, self.props.style);
        return (
            <div>
                <div className="tab_collapse_container" style={c_style}>
                    <div className="left_tabs">
                        <Tabs
                            defaultActiveKey={self.props.activeTab}
                            onChange={key => { self.props.onTabChange(key); }}
                            mouseOverEnable={false}
                        // acitiveColor={'#F5533D'}
                        // defaultColor={'#858fa5'}
                        >
                            {tabPanes}
                        </Tabs>
                    </div>
                    <div className="right_button"
                        onClick={() => {
                            self.props.toggleCollapse(!self.props.collapsed);
                        }}
                    >
                        {self.props.collapsed ? '收起' : '展开'}
                        <svg viewBox="0 0 24 24"
                            className={`up_arrow ${buttonClassName}`}
                        >
                            <path d={buttonPathData}>
                            </path>
                        </svg>
                    </div>
                </div>
                <div
                    className={`children ${self.props.collapsed ? '' : 'hide'}`}
                >
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}
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
export default uncontrollable(TabCollapse, {
    activeTab: 'onTabChange',
    collapsed: 'toggleCollapse'
});

// const TempModule = uncontrollable(TabCollapse, {
//     activeTab: 'onTabChange',
//     collapsed: 'toggleCollapse'
// });
// export default CSSModules(TempModule, styles, { allowMultiple: true });
