import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import 'tachyons';
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank.js'
import Inputform from './components/InputForm/Inputform'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceReco from './components/FaceReco/FaceReco.js'
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/SignIn/Register.js'

const particlesOptions =
{
  particles:{
      number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 500
                    }
                  }
  }
}
const app = new Clarifai.App({
 apiKey: 'e8070e6363ea41fe9347dc457acf0a88'
});

class App extends Component {
  constructor()
  {
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'SignIn',
      issignedIn:false
    }
  }
  calculateFace=(data)=>
{
  const result=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById('faceimg');
  const width=Number(image.width);
  const height=Number(image.height);
  return{
    leftCol:result.left_col*width,
    topRow:result.top_row*height,
    rightCol:width-(result.right_col*width),
    bottomRow:height-(result.bottom_row*height)
  }
}
displayFace=(box)=>
{
  this.setState({box:box});
}


  onInputChange=(event)=>
  {
    this.setState({input:event.target.value});
  }

  onSubmitChange=()=>
  {
    this.setState({imageUrl:this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response=>this.displayFace(this.calculateFace(response)))
      .catch(err=>console.log(err));
      // do something with response
    //console.log('click');
  }

routeChange=(routes)=>
{
  if(routes==='home')
  {
    this.setState({issignedIn:true});
  }
  else {
    this.setState({issignedIn:false});
  }
  this.setState({route:routes});

  /*this.state.route==='SignIn'?
  this.setState({route:'home'})
  :
  this.setState({route:'SignIn'})*/

}

  render() {
    return (
    <div className="App">
     <Particles params={particlesOptions} className='particles'/>
       <Navigation route={this.routeChange} issignedIn={this.state.issignedIn}/>
     { this.state.route === 'home' ?
     <div>
      <Logo/>
       <Rank/>
      <Inputform input={this.onInputChange} onSubmit={this.onSubmitChange}/>
      <FaceReco imageUrl={this.state.imageUrl} box={this.state.box}/>
      </div>
      :
      <div>
      {this.state.route === 'SignIn' ?
      <SignIn route={this.routeChange}/>
      :
      <Register route={this.routeChange}/>
    }
    </div>
}
      </div>
    );
  }
}

export default App;
