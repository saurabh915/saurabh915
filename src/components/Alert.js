import React from 'react'

function Alert(props) {
 

  return (
     <div style={{height: '50px'}}>
{/* this && operator help to use and operator as both props.alert and div should be true execute this part */}
    {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
     </div>
    
  )
}

export default Alert
