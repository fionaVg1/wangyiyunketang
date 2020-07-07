import React from "react"
// 将引入类变成常量，用来继承
const Component = React.Component
const Fragment = React.Fragment


function Confirm(props) {
    function allowTransition() {
      props.setConfirm(false);
      props.confirmCallback(true);
    }
  
    function blockTransition() {
      props.setConfirm(false);
      props.confirmCallback(false);
    }
  
    return (
      <React.Fragment>
        <div>Are you sure?</div>
        <button onClick={allowTransition}>Yes</button>
        <button onClick={blockTransition}>No way</button>
      </React.Fragment>
    );
  }
