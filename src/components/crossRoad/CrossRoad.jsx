import React from 'react';
// import 'index.less';
// import './index.scss';
// require('./index.scss');
require('./index.less');


class CrossRoad extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            activeKey: this.props.activeKey || 0,
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
        let topIcons = self.props.topInfo.iconNames.map((name) => {
            return <img src={`${self.props.iconBaseLoc}${name}.png`} />
        })
        let topRefNumSpans = self.props.topInfo.refNums.map((num) => {
            return <div>{num}</div>
        })
        let topNumSpans = self.props.topInfo.nums.map((num) => {
            return <div>{num}</div>
        })
        return (
            <div class="cross_road_container">
                <div class="top_road">
                    <div class="top_road_info_box">
                        <div class="top_ref_nums">
                            {topRefNumSpans}
                        </div>
                        <div class="top_icons">
                            {topIcons}
                        </div>
                        <div class="top_nums">
                            {topNumSpans}
                        </div>
                    </div>
                </div>
                <div class="top_reverse_road_info_box">
                    <div class="top_ref_num">
                        <div> {self.props.topInfo.reverseInfo.refNum}</div>
                    </div>
                    <div class="top_icon">
                        <img src={`${self.props.iconBaseLoc}${self.props.topInfo.reverseInfo.iconName}.png`} />
                    </div>
                    <div class="top_num">
                        <div> {self.props.topInfo.reverseInfo.num}</div>
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
    iconBaseLoc: '../../../src/static/images/crossRoad/',
    topInfo: {
        refNums: [12, 14, 14, 40],
        iconNames: ['turnright', 'gostraight', 'turnleft', 'turnback'],
        nums: [13, 33, 33, 12],
        reverseInfo: {
            refNum: 15,
            iconName: 'gostraight',
            num: 300,
        }
    },
    activeKey: 0,
};

export default CrossRoad;

// export default uncontrollable(CrossRoad, {
//     activeKey: 'onChange'
// });
