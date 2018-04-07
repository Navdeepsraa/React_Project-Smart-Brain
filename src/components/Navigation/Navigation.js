import React from 'react';

const Navigation = ({route,issignedIn}) =>
{
  if(issignedIn)
  {
  return(
    <nav  style={{display:"flex",justifyContent:"flex-end"}}>
    <p className='pa3 underline f4 link dim pointer' onClick={()=>route('SignIn')}>
    Sign Out</p>
    </nav>
  );
}
else {
  return(
    <nav  style={{display:"flex",justifyContent:"flex-end"}}>
    <p className='pa3 underline f4 link dim pointer' onClick={()=>route('SignIn')}>
    Sign In</p>
    <p className='pa3 underline f4 link dim pointer' onClick={()=>route('register')}>
    Register</p>

    </nav>
  );
}
}


export default Navigation;
