import React, { Component } from 'react';
import '../component/MessageBox/index.scss'
export const BoxHoc = Comp => {
    return class _ extends Component {
        // 复用逻辑
      
        render() {
            return (
                <div className="contain" >
                    <div className='header'>
                        <b>{this.props.title}</b>
                        <span>更多</span>
                    </div>
                    <div className="body">
                        <ul className='list'>
                            <Comp {...this.props} />
                        </ul>
                    </div>
                </div>
               
            )
        }
    }
}