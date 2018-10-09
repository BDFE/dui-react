import React from 'react';
import uncontrollable from 'uncontrollable';
import './index.less';

class ButtonGroup extends React.Component {
    constructor(args) {
        super(args);
    }

    componentDidMount() {

    }

    onClick(index, item) {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(index);
            let fn = this.props.onClick;
            fn && fn(index, item);
        }
    }

    render() {
        let self = this;
        let listTypes = this.props.data;
        let doms = [];

        if (listTypes) {
            listTypes.map((item, index) => {
                let buttonStyle = {};
                this.props.buttonStyle ? Object.assign(buttonStyle, this.props.buttonStyle) : '';
                self.props.defaultBgColor ? buttonStyle['background'] = self.props.defaultBgColor : '';
                self.props.defaultFontColor ? buttonStyle['color'] = self.props.defaultFontColor : '';

                for (let i in item) {
                    var className = 'radio';
                    if (i == this.props.activeKey) {
                        className += ' active';
                        self.props.activeBgColor ? buttonStyle['background'] = self.props.activeBgColor : '';
                        self.props.activeFontColor ? buttonStyle['color'] = self.props.activeFontColor : '';
                    }
                    let radio = <div
                        key={JSON.stringify(item) + index}
                        className={className}
                        style={buttonStyle}
                        value={item.value}
                        onClick={self.onClick.bind(this, i, item)}
                    >
                        {item[i]}
                    </div >;
                    doms.push(radio);
                }
                if (self.props.divider) {
                    if (index !== listTypes.length - 1) {
                        doms.push(self.props.divider);
                    }
                }
            });
        }
        let containerStyle = this.props.groupStyle;
        if (!containerStyle.background) {
            containerStyle.background = this.props.defaultBgColor;
        }
        return (
            <div
                className="button_group"
                style={containerStyle || { color: '#333' }}
            >
                {doms}
            </div>
        );
    }

}

ButtonGroup.defaultProps = {
    data: {},
    activeKey: 0,
};

// export default ButtonGroup;
export default uncontrollable(ButtonGroup, {
    activeKey: 'onChange'
});
