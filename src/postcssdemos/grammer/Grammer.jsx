import React from 'react';
import ReactDOM from 'react-dom';

require('./css/style.css');
import './css/stylus.styl';

class Grammer extends React.Component {
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
                <div
                    className="container_1"
                    container_1
                >
                    <div className="container_2_1">
                        container_2_1
                    </div>
                    <div className="container_2_2">
                        container_2_2
                    </div >
                </div >
                <div className="container_2">
                    {/* for  */}
                    <div className="p_list_for">
                        <p>11111</p>
                        <p>22222</p>
                        <p>33333</p>
                    </div>

                    {/* each */}
                    <div className="p_list_each">
                        <div className='divspan-red'>red</div>
                        <div className='divspan-blue'>blue</div>
                        <div className='divspan-green'>green</div>
                    </div>

                    <div className="mixins">
                        <div className='first'>first</div>
                        <div className='second'>second</div>
                    </div>
                    <div className="define_extend">
                        <button className='blue_button'>first</button>
                        <button className='red_button'>second</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Grammer;

