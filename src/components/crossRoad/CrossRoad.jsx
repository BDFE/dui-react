import React from 'react';
// import uncontrollable from 'uncontrollable'
// import './index.less';
require('./index.css');

class CrossRoad extends React.Component {
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

        return (
            <div class="cross_road_container">
                <div class="top_road">
                    <div class="top_road_info_box">
                        <div class="direction_images">
                            <img src='../../../src/static/images/crossRoad/turnright.png' />
                            <img src='../../../src/static/images/crossRoad/gostraight.png' />
                            <img src='../../../src/static/images/crossRoad/turnleft.png' />
                            <img src='../../../src/static/images/crossRoad/turnback.png' />
                        </div>
                        <div class="direction_num">
                        </div>
                    </div>
                </div>
                <div class="left_road"></div>
                <div class="right_road"></div>
                <div class="bottom_road"></div>
            </div>
        );
    }

}

CrossRoad.defaultProps = {
    data: {},
    activeKey: 0,
};

export default CrossRoad;

// export default uncontrollable(CrossRoad, {
//     activeKey: 'onChange'
// });
