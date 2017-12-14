import React from 'react';
import ReactDOM from 'react-dom';
import Grammer from './grammer/Grammer.jsx'
import Plugins from './plugins/Plugins.jsx'

class PostCss extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            module: 1,
        };
    }

    componentDidMount() {

    }


    render() {
        let self = this;
        let displayModule = null;
        if (self.state.module == 1) {
            displayModule = < Grammer />
        } else if (self.state.module == 2) {
            displayModule = < Plugins />
        }
        return (
            <div>
                <div>
                    <input type="checkbox"
                        checked={self.state.module == 1 ? true : false}
                        onClick={(e) => {
                            console.log(e)
                            self.setState({ module: 1 })
                        }} /> postCss 语法
                    <input type="checkbox"
                        checked={self.state.module == 2 ? true : false}
                        onClick={(e) => {
                            console.log(e)
                            self.setState({ module: 2 })
                        }} />
                    postCss 插件
                </div>
                {displayModule}
            </div>
        );
    }

}

export default PostCss;

