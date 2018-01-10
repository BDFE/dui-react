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
            <span>
                <div class="road">
                    <div class="road_info_box">
                        <div class="ref_nums">
                            {topRefNumSpans}
                        </div>
                        <div class="icons">
                            {topIcons}
                        </div>
                        <div class="nums">
                            {topNumSpans}
                        </div>
                    </div>
                </div>
                <div class="reverse_road_info_box">
                    <div class="ref_num">
                        <div> {self.props.topInfo.reverseInfo.refNum}</div>
                    </div>
                    <div class="icon">
                        <img src={`${self.props.iconBaseLoc}${self.props.topInfo.reverseInfo.iconName}.png`} />
                    </div>
                    <div class="num">
                        <div> {self.props.topInfo.reverseInfo.num}</div>
                    </div>
                </div>
            </span>
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
