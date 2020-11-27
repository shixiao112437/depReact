import {createStore} from 'redux'

const state = {
 num:''
}

const reducer = (state,action) => {
  const {type} = action.type
  switch (type) {
     
  }
}
let store = createStore(reducer,state)

export {store}