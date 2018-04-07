import React from 'react';
import './FaceReco.css';

const FaceReco = ({imageUrl,box}) =>
{
  return(
    <div className='ma'>
    <div className=' mt2'>
      <img alt='' id='faceimg' src={imageUrl} style={{height:'300px',width:'300px'}}/>
      <div className='bounding_box'
      style={{top:box.top_row,right:box.right_col,left:box.left_col,
        bottom:box.bottom_row}}>
    </div>
    </div>
    </div>
  );
}

export default FaceReco;
