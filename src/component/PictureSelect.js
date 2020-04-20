import React, { Component,Fragment } from 'react'
import './PictureSelect.css'
export default class PictureSelect extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          f:false,
          value:props.value,
        }
    }
     ImgItem=()=>{
       const {pictures}= this.props
       const {value}=this.state
      return pictures.map(item=>(
        <div style={{position:'relative'}} key={item.id}>
          <img style = {{
                        position:'absolute',left:'0',top:'0',
                        width: '25px',
                        height: '25px',
                    }} onClick={()=>this.clickhandle(item.id)} src={value.includes(item.id)?require('../assets/img/choosed.svg'):require('../assets/img/choose.svg') } alt=''></img>
          <img style = {{
            width: '100px',
            height: '100px'
          }}  src={item.url}  alt=''></img>
        </div>
           
       ))
    }
    AllCheck=()=>{
      const {f}=this.state
      this.props.onChange(!f?['1','2','3']:[])
      this.setState({
        f:!f,
        value:!f?['1','2','3']:[]
      })
    }
    clickhandle =val=>{
      const {value}=this.state
      if(value.indexOf(val)>-1){
        value.splice(value.indexOf(val),1) 
      }else{
        value.push(val)
      }
      if(value.length>=3){
        this.setState({
          f:true
        })
      }else{
        this.setState({
          f:false
        })
      }
      this.setState({
        value
      })
      this.props.onChange(value)
    }
    render() {
      const {f,value}=this.state
        return (
            <Fragment>
                <div className='row'>
                    <img style = {{
                        width: '25px',
                        height: '25px',
                        marginRight:'5px'
                    }} src={f?require('../assets/img/choosed.svg'):require('../assets/img/choose.svg') } alt='' onClick={this.AllCheck}></img>
                    <span>已经选中{value.length}文件</span>
                </div>
                <div className='row' >
                    {this.ImgItem()}
                </div>
            </Fragment>
        )
    }
}
