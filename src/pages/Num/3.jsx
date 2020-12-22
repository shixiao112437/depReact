import React, { Component,createRef } from 'react'
import { connect } from 'react-redux'
import { Modal, Button ,Form, Input,} from 'antd';
import './3.scss'
// import Banner from '../../components/Banner/index'

class Three extends Component {
    form = createRef()
    state={
        visible:false
    }
    render() {
        console.log(this.props,'少时诵诗书所所所所所所');
        let {name,age} = this.props
        return (
            <div>
                {name}
                <hr/>
                {age}
                <hr/>
                {this.renderList()}
                 <button onClick={() => {
                     console.log(11);
                     this.props.editAge(111)
                 }}>
                     修改年龄
                 </button>
                 <Button type="primary" onClick={() => {
                     this.setState({
                        visible:true
                     })
                 }}>
                   添加事件
                 </Button>

            
              <hr/>
                    <Modal
                        title="添加事件详情"
                        visible={this.state.visible}
                        onOk={this.add}
                        onCancel={() => {

                        }}
                        >
                          <Form
                          ref={this.form}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                      
                            >
                            <Form.Item
                                label="任务"
                                name="thing">
                                <Input />
                            </Form.Item>
                            </Form>
                    </Modal>
            </div>
        )
    }
    renderList(){
        return this.props.todoList.map(item => {
            return (
                <div className='wrap' key={item.id}>
                    <div >
                        事情:{item.thing}
                    </div>
                    <div>
                        状态:{item.status?'已完成':'未完成'}
                    </div>

                    <div>
                     {item.status?
                     ( <Button disabled>
                        已完成
                       </Button>):
                      (<Button onClick={
                        ()=>{
                            alert(1)
                            console.log(this.props);
                          this.props.editTodo(item.id)  
                        }
                      }>
                       马上去做
                      </Button>)
                    }
                    </div>
                </div>
            )
        })
    }
    add = () => {
        
      let thing =   this.form.current.getFieldValue('thing')
      let item = {
        thing,
        status:false,
        id:Math.random()
      }
      this.props.addToda(item)
      console.log(this.props.todoList);
      this.setState({
        visible:false
      })
    }
}

let mapStateToProps = (state) => {
    return {
     age:state.age,
     name:state.name,
     todoList:state.list
    }
}
let mapDispatchToProps = (dispatch,ownProp) => {
    return {
        editAge: (val) => {
            dispatch({
                type:'editAge',
                value:{
                    age:val,
                }
            })
        },
        editName: (val) => {
            dispatch({
                type:'editAge',
                value:{
                    age:val,
                }
            })
        },
        addToda:(val) => {
            dispatch({
                type:'addList',
                item:val
            })
        },
        delTodo: (val) => {
           dispatch({
            type:'delList',
            delListId:val
           }) 
        },
        editTodo: (val) => {
            dispatch({
             type:'editList',
             id:val
            }) 
         },



    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Three)