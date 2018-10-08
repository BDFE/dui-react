/**
 *@fileName: Tabs.jsx
 *@author: kongwentao
 */
import React from 'react';
import './index.less';
import TabPane from './TabPane.jsx';

class Tabs extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            acitiveKey: this.props.defaultActiveKey
        };
        this.handleClick = this.handleClick.bind(this);
        this.getTabPanes = this.getTabPanes.bind(this);
    }

    componentDidMount() {
    }

    handleClick(key, item) {
        const self = this;
        let activeKey = JSON.parse(JSON.stringify(self.state.acitiveKey));
        if (self.props.disable) {
            console.log('current Tabs disabled');
        } else {
            (activeKey instanceof Array || this.props.multiChose)
                ? activeKey.indexOf(key) > -1
                    ? activeKey = activeKey.filter(k => k != key)
                    : activeKey.push(key)
                : activeKey = key
            self.setState({
                acitiveKey: activeKey
            });
            console.log('Tabs change', activeKey);
            let fn = this.props.onChange;
            fn && fn(activeKey, item);
        }
    }

    getTabPanes() {
        const self = this;
        const tabs = this.props.data;
        const tabPanes = [];
        let color = '#858fa5';
        let width = '1px';

        let showDivider = this.props.showDivider;
        if (this.props.dividerStyle) {
            if (this.props.dividerStyle.color) {
                color = this.props.dividerStyle.color;
            }
            if (this.props.dividerStyle.width) {
                width = this.props.dividerStyle.width;
            }
        }
        let baseDividerStyle = {
            borderLeft: `${width} solid ${color}`,
        };

        tabs.map((item, index) => {
            let tab = item;
            let haskey = item.hasOwnProperty('key');
            if (!haskey) {
                tab = { key: item, name: item, }
            }
            let pane = <TabPane
                key={JSON.stringify(tab)}
                tab={tab}
                disable={self.props.disable}
                acitiveKey={self.state.acitiveKey}
                tabStyle={self.props.tabStyle || {}}
                horizontalAlign={true}
                acitiveColor={this.props.acitiveColor}
                defaultColor={this.props.defaultColor}
                mouseOverEnable={this.props.mouseOverEnable}
                onClick={self.handleClick}
            />;
            tabPanes.push(pane);
            if (showDivider) {
                let divider = <span
                    className='divider'
                    key={JSON.stringify(tab) + 'divider'}
                    style={baseDividerStyle}
                />;
                tabPanes.push(divider);
            }
        });
        if (showDivider) {
            tabPanes.pop();
        }
        return tabPanes;
    }

    renderChildren() {
        const self = this;
        const { children } = this.props;
        if (!children) return;
        console.log('mouseOverEnable', this.props.mouseOverEnable);
        return React.Children.map(children, child => {
            // dom元素，自定义组件
            // if (typeof child.type === 'string') {
            //     return child;
            // }
            if (child) {
                return React.cloneElement(child, {
                    onClick: self.handleClick,
                    acitiveKey: self.state.acitiveKey
                });
            }
        });
    }

    render() {
        let tabPanes = null;
        if (this.props.data) {
            tabPanes = this.getTabPanes();
        }
        return (
            <div
                className="tabs_span"
                key={this.props.key || Math.random(3) + 'tab'}
                style={this.props.outerStyle || {}}
            >
                {tabPanes ? tabPanes : this.renderChildren()}
            </div>
        );
    }
}

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    showDivider: false,
    // tabs support simple array and object array 
    // tabs: [
    //     { name: '性别', key: 'sex', imageUrl: '' },
    //     { name: '教育水平', key: 'education', imageUrl: '' },
    //     // { name: '人生阶段', key: 'life_stage', imageUrl: '/static/juejin/images/life_stage.png' },
    // ],
    // tabs: ['support', 'string', 'array']
}
export default Tabs;
