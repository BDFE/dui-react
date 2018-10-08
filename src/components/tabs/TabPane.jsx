/**
 *@fileName: TabPane.jsx
 *@author: kongwentao
 */
import React from 'react';

class TabPane extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            mouseOverFlag: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getTabPane = this.getTabPane.bind(this);
    }

    componentDidMount() {
    }

    handleClick(key, item) {
        let fn = this.props.handleClick;
        fn && fn(key, item);
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
                    onClick: self.handleClick
                });
            }
        });
    }

    componentWillUpdate() {

    }

    getTabPane() {
        const self = this;
        let panel = '';
        let tab = self.props.tab;
        let iconSize = self.props.iconSize;
        let acitiveColor = self.props.acitiveColor;
        let defaultColor = self.props.defaultColor;
        if (tab instanceof HTMLElement || React.isValidElement(tab)) {
            // let outerStyle = {display:'inline-block'}
            // panel = <div style={outerStyle}>{tab}</div>
            panel = tab;
        } else {
            let acitiveKey = self.props.acitiveKey;
            let color = (
                (
                    (acitiveKey instanceof Array
                        ? acitiveKey.indexOf(tab.key) > -1
                        : tab.key == acitiveKey
                    )
                    || self.state.mouseOverFlag
                ) && !self.props.disable)
                ? acitiveColor
                : defaultColor;
            let filter = `drop-shadow( ${iconSize}px 0 0px ${color})`;
            let imageModule = null;
            if (tab.imageUrl && (!!tab.imageUrl)) {
                let style = {
                    background: `url(${tab.imageUrl || '/static/juejin/images/clock.png'}) `,
                    position: 'relative',
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    left: `-${iconSize}px`,
                    // margin: 'auto 5px',
                    // backgroundSize: '100% 100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRight: `${iconSize}px solid transparent`,
                    filter: filter,
                };

                imageModule = (<div style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    overflow: 'hidden',
                }}>
                    <div
                        style={style}
                    />
                </div>);
            }
            let dispaly = self.props.horizontalAlign ? 'inline-flex' : 'inline-grid';
            panel = (<span style={{
                display: dispaly,
                justifyItems: 'center',
                alignItems: 'center',
            }}
                onMouseEnter={() => {
                    let enable = self.props.mouseOverEnable;
                    console.log('TabPane mouseEnter', enable)
                    if (enable) {
                        self.setState({ mouseOverFlag: true });
                    }
                }}
                onMouseOut={() => {
                    self.setState({ mouseOverFlag: false });
                }}
                onMouseLeave={() => {
                    self.setState({ mouseOverFlag: false });
                }}
            >
                {imageModule}
                <div style={{
                    display: 'inline-block',
                    color: color
                }}
                >
                    {tab.name}
                </div>
            </span>);
        }

        let outerStyle = {
            display: 'inline-block',
            // margin: '0 30px 0 0',
        };
        if (self.props.tabStyle) {
            Object.assign(outerStyle, self.props.tabStyle);
        }

        return (<div style={outerStyle}>{panel}</div>);
    }

    render() {
        let panes = this.getTabPane();
        console.log('mouseOverEnable', this.props.mouseOverEnable);
        return (
            <span
                className="tabs_pane_span"
                key={this.props.key || JSON.stringify(this.props.tab) + Math.random()}
                onClick={() => {
                    this.props.onClick(this.props.tab.key, this.props.tab);
                }}
            >
                {panes}
            </span>
        );
    }
}

TabPane.defaultProps = {
    mouseOverEnable: true,
    acitiveColor: '#5e87db',
    defaultColor: '#666',
    acitiveKey: '',
    disable: false,
    horizontalAlign: false,
    // iconSize: 25,
    // tab: { name: '性别', key: 'sex', imageUrl: '/static/juejin/images/sex.png' },
    // tabStyle: {
    //     display: 'inline-block',
    //     margin: '0 30px 0 0',
    // },
};

export default TabPane;
