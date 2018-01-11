import React from 'react';
import TopRoad from './topRoad/TopRoad.jsx'
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

        return (
            <div class="road_bord">
                <div class="top_road_container">
                    <TopRoad
                        iconBaseLoc={self.props.iconBaseLoc}
                        infos={self.props.topInfo}
                        direction='top'
                        multiChose='true'
                        onCheckboxChange={(value)=>{
                            console.log('new checkbox value',value);
                        }}
                    />
                   
                </div>
                <div class="bottom_road_container">
                    <TopRoad
                        iconBaseLoc={self.props.iconBaseLoc}
                        infos={self.props.topInfo}
                        direction='bottom'
                    />
                </div>

                <div class="right_road_container">
                    <TopRoad
                        iconBaseLoc={self.props.iconBaseLoc}
                        infos={self.props.topInfo}
                        direction='right'
                    />
                </div>
                <div class="left_road_container">
                    <TopRoad
                        iconBaseLoc={self.props.iconBaseLoc}
                        infos={self.props.topInfo}
                        direction='left'
                    />
                </div>
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
