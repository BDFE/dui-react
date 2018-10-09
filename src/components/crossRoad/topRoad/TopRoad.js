import React from 'react';
// import 'index.less';
// import './index.scss';
// require('./index.scss');
require('./index.less');


class CrossRoad extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            checkboxStatus: this.props.checkboxStatus,
            activeKey: this.props.activeKey,
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
        let topIcons = null;
        let refNumSpans = null;
        let numSpans = null;
        let roadName = null;

        if (!self.props.multiChose) {
            refNumSpans = self.props.topInfo.refNums.map((num) => {
                return <div>{num}</div>;
            })
            numSpans = self.props.topInfo.nums.map((num) => {
                return <div>{num}</div>;
            })
        } else {
            numSpans = self.props.topInfo.iconNames.map((name, index) => {
                return (<div className='checkbox_div'>
                    <input
                        type="checkbox"
                        style={{zoom:'150%',backgroundColor:'white'}}
                        name={name}
                        // value={index}
                        checked={self.state.checkboxStatus[index]}
                        onClick={(e) => {
                            const checkboxStatus = self.state.checkboxStatus
                            checkboxStatus[index] = e.target.checked;
                            self.setState({ checkboxStatus }, () => {
                                // console.log('dd', checkboxStatus);
                                self.props.onCheckboxChange && self.props.onCheckboxChange(checkboxStatus);
                            });
                        }}
                    />
                </div>);
            })
        }

        roadName = self.props.roadName.split('').map((c) => {
            return <span>{c}</span>;
        })
        topIcons = self.props.topInfo.iconNames.map((name) => {
            return <img src={`${self.props.iconBaseLoc}${name}.png`} />;
        })
        let rotate_class_name = ' ';
        switch (this.props.direction) {
            case 'top': {
                rotate_class_name = 'top_rotate ';
                break;
            }
            case 'bottom': {
                rotate_class_name = 'bottom_rotate ';
                break;
            }
            case 'left': {
                rotate_class_name = 'left_rotate ';
                break;
            }
            case 'right': {
                rotate_class_name = 'right_rotate ';
                break;
            }
            default: break;
        }

        return (
            <span onClick={(e) => {
                console.log(self.props.direction);
                self.props.onClick && self.props.onClick(e);
            }}>
                <div class="road">
                    <div class="road_info_box">
                        <div class={`${rotate_class_name}ref_nums`}>
                            {refNumSpans}
                        </div>
                        <div class="icons">
                            {topIcons}
                        </div>
                        <div class={`${rotate_class_name}nums`}>
                            {numSpans}
                        </div>
                        <div class={`roadname_${rotate_class_name}roadname`}>
                            <div>
                                {roadName}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reverse_road">
                    <div class={`${rotate_class_name}ref_num`}>
                        <div> {self.props.topInfo.reverseInfo.refNum}</div>
                    </div>
                    <div class="icon">
                        <img src={`${self.props.iconBaseLoc}${self.props.topInfo.reverseInfo.iconName}.png`} />
                    </div>
                    <div class={`${rotate_class_name}num`}>
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
    multiChose: false,
    roadName: '信息路与上地五街',
    activeKey: 0,
    checkboxStatus: [false, false, false, false],
};

export default CrossRoad;

// export default uncontrollable(CrossRoad, {
//     activeKey: 'onChange'
// });
