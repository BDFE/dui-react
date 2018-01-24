import React from 'react';
import ReactDOM from 'react-dom';
import {test

} from '../../../lib/index.js';
require('./css/style.css');
// import classNames from './style.js'
console.log(1111, require('../../../lib/index.js'));
class PlugIns extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
        };
    }

    componentDidMount() {

    }


    render() {
        let self = this

        return (
            <div>
                PlugIns
                <div className='postcss-assets-png'>
                </div >
                {/* <div className={classNames['postcss-hash-classname']}>
                    <div>postcss-hash-classname</div>
                </div > */}
                <div className='postcss-inline-svg'>
                    postcss-inline-svg
                </div >
                <div className='postcss-inline-svg-2'>
                </div >
                <div>
                    {/* <Test /> */}
                </div>
                <div>
                    <CrossRoad />
                </div>
            </div>
        );
    }

}

export default PlugIns;

