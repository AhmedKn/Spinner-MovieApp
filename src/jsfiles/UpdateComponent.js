import React from 'react'

const UpdateComponent = WrappedComponent =>{
    class NewComponent extends React.Component{
constructor(props){
    super(props)
    this.state = {
        loading : true
    }
}

render(){
     setInterval(() => this.setState({loading : false}),3500)
    return <WrappedComponent loading={this.state.loading} />
}
    }

return NewComponent
}

export default UpdateComponent
