import React, { Component } from 'react'
import MessageBox from '../component/MessageBox'
import {BoxHoc} from '../Hoc/BoxHoc'
const  HocMessageBox=BoxHoc(MessageBox)
export default class LayOut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'最新职位',
          
        }
    }
    
    render() {
        const {title}=this.state
        return (
            <div>
             <HocMessageBox  title={title}></HocMessageBox>
            </div>
        )
    }
}
