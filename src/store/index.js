
import {createStore} from 'redux'

let state = {
  name:'石磊磊',
  age:18,
  list:[]
}

let reducer = (state,action) => {
  const {type,value} = action
  const newState = {...state}
  if(type==='editAge'){
    newState.age += value.age
    return newState
  }else if(type==='editName'){
    newState.name = value.age
    return newState
  }else if(type==='addList'){
    newState.list.push(action.item)
    return newState
  }else if(type==='delList'){
    const index = state.list.findIndex( item => { return item.id===action.delListId})
    newState.list.splice(index,1)
    return newState
  }else if(type==='editList'){
    const index = state.list.findIndex( item => { return item.id===action.id})
    return Object.assign({},state,{
      lsit: state.list[index].status = true
    })
  }else{
    return newState
  }
}

let store = createStore(reducer,state)

export {store}