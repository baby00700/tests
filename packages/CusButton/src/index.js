import React from 'react'

class CusButton extends React.Component{
 
    render () {
        return <div style={{color:'red'}}>{this.props.children}</div>
    }
    
}

export default CusButton
