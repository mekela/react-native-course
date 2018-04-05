import { View, Text} from "react-native";
import React, { Component } from "react";
import Layout from "../components/layout"
import io from 'socket.io-client';

import Button from '../components/button';
import Input from "../components/input";
// constructor()
// componentWillReceiveProps()
// componentWillUpdate()
// componentWillMount()
// render()
// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()



class welcomeScene extends Component {
  constructor(){
    super();
    this.state = {
      isShow: true,
      icon: 'rocket'
    };
  }

  componentWillMount(){

    const socket = io('http://showroo.me:2089');
    console.log(socket);
    socket.on('connect', function(){ console.log('connect');});
    socket.on('event', function(data){ console.log('event');});
    socket.on('disconnect', function(){ console.log('disconnect');});
  }

  buttonClick() {
    this.setState(prevState=>{
      return { isShow: !prevState.isShow };
    })
  }
  toogleIcon(){
    this.setState(prevState=>{
      return { icon:
        prevState.icon=='rocket' ? 'user' : 'rocket'
      };
    })
  }

  render(){
    return (
      <Layout>


        <Text>123</Text>
        <View>
          {this.state.isShow
          ?<Input icon={this.state.icon} />
          :null}
         </View>

        <Button text="toggle component"
                click={ this.buttonClick.bind(this) }/>
        <Button text="toggle icon"
                click={ this.toogleIcon.bind(this) }/>


      </Layout>
    )
  }
}

export default welcomeScene;