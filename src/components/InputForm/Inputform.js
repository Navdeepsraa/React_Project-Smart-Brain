import React from 'react';
import './Form.css'
const Inputform = ({input,onSubmit}) =>
{
  return(
    <div className="f4">
    <p>The Magic Brain will detect faces in your pictures</p>
    <div className=' shadow-5  pa4  center w-40 form'>
    <input type="tex" className="f4 pa2 w-70 " onChange={input}/>
    <button className=' ph3 f4 pv2 w-30  white bg-light-purple' onClick={onSubmit}>
    Detect</button>
    </div>
    </div>
  );
}

export default Inputform;
