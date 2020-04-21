import React, { Component, Fragment } from 'react'
// import './index.scss'
export default class MessageBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'最新职位',
             worklist:[
                 {
                    id:1,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:2,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:3,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:4,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:5,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:6,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },
                 {
                    id:7,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:8,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:9,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 },{
                    id:10,
                    post:'喀什发你哈接口是否',
                    city:'上海',
                    time:1
                 }
             ]
        }
    }
     listitem=()=>{
         const {worklist}=this.state
        return  worklist.map(item=>(
            <li key={item.id}> 
                <span><a href="#">{item.post}</a></span>
                <span className="city">{item.city}</span>
                <span className="time">{item.time}小时前</span>
            </li>
        ))    
    }
    render() {
        return (
            <Fragment >
                {this.listitem()}
            </Fragment>
        )
    }
}
