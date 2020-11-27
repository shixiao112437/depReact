import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// import Banner from '../../components/Banner/index'

class Three extends PureComponent {


    render() {
        console.log(this.props,'少时诵诗书所所所所所所');
        // let {name,age} = this.props
        return (
            <div>
                 <button onClick={() => {
                     console.log(1);
                     this.props.editAge(111)
                 }}></button>
              <hr/>
       
            </div>
        )
    }
}

let mapStateToProps = (state,ownProp) => {
    return {
     age:state
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
        }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Three)