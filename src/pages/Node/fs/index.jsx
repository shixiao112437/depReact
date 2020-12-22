import React, { Component } from 'react'

function Child(props) {
    const { placement, handleChange } = props;
    return (
        <select value={placement} onChange={(e) => { handleChange(e.currentTarget.value) }}>
          <option value="top">top</option>
        <option value="bottom">bottom</option>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
    )
}
class PlacementProvider extends Component {
    constructor(props) {
      super(props);
      this.state = { placement: 'top' };
    }
    
    change = (dir) => {
      this.setState({
        placement: dir,
      })
    }
  
    render() {
      return (
        <div>
          {this.props.content({placement: this.state.placement, handleChange: this.change})}
        </div>
      )
    }
  }
  class Fs extends Component{
      render(){
          return (
            <PlacementProvider content={(data) => {
                return (
                    <Child placement={data.placement} handleChange={data.handleChange} /> 
                )
            }}>

            </PlacementProvider>
          )
      }
  }

export default Fs