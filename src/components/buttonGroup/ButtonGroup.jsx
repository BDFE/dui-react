import React from 'react';
import uncontrollable from 'uncontrollable'
import './index.less';

class ButtonGroup extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            activeKey: this.props.activeKey || 0
        };
    }

    componentDidMount() {

    }

    onClick(index, item) {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(index);
            let fn = this.props.onClick;
            fn && fn(index, item);
        } else {
            this.setState({
                activeKey: index
            });
        }
    }

    render() {
        let self = this
        let listTypes = this.props.data;
        let radios = [];
        if (listTypes) {
            radios = listTypes.map((item, key) => {
                for (let i in item) {
                    var className = 'radio';
                    // console.log(i);
                    if (i == this.props.activeKey) {
                        className += ' active';
                    }
                    return (<div key={key}
                        // style={this.props.buttonStyle || { color: 'white' }}
                        className={className}
                        value={item.value}
                        onClick={self.onClick.bind(this, i, item)}
                    >
                        {item[i]}
                    </div >);
                }
            });
        }
        return (
            <div
                className="button_group"
                style={this.props.groupStyle || { color: 'white' }}
            >
                {radios}
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
