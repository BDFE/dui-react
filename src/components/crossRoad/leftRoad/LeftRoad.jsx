import React from 'react';
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

    render() {
        let self = this
        let topIcons = self.props.infos.iconNames.map((name) => {
            return <img src={`${self.props.iconBaseLoc}${name}.png`} />
        })
        let topRefNumSpans = self.props.infos.refNums.map((num) => {
            return <div>{num}</div>
        })
        let topNumSpans = self.props.infos.nums.map((num) => {
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
                <div class="top_reverse_road_info_box">
                    <div class="top_ref_num">
                        <div> {self.props.infos.reverseInfo.refNum}</div>
                    </div>
                    <div class="top_icon">
                        <img src={`${self.props.iconBaseLoc}${self.props.infos.reverseInfo.iconName}.png`} />
                    </div>
                    <div class="top_num">
                        <div> {self.props.infos.reverseInfo.num}</div>
                    </div>
                </div>
            </span>
        );
    }
}

CrossRoad.defaultProps = {
    iconBaseLoc: '../../../src/static/images/crossRoad/',
    infos: {
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
