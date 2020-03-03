import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

//import Home from './panels/Home';
//import Persik from './panels/Persik';
import data from './data/data'
import Card from './Card'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
	//	addEventListener("click", this.handle.bind(this))
		this.onClick = this.handle.bind(this);
		this.mount()
  }

  tick() {
    const newIndex = Math.floor((
			data.properties.length - 1) * Math.random());
    this.setState ({
			property:data.properties[newIndex]
		})
  }
	mount(){
		this.mounted = 1;
		this.timerID = setInterval(() => this.tick(), 100);
	}
	unmount(){
		this.mounted = 0;
		clearInterval(this.timerID);
	}
	handle(){
		if (this.mounted) {
			this.unmount();
      const ConV = Math.random() * Math.random() * Math.random();
      var newIndex = 0;
      if (ConV <= 0.2) {
        newIndex = Math.floor((
    			data.properties.length - 1) * Math.random() / 10);
      } else if (ConV <= 0.5) {
        newIndex = Math.floor(( data.properties.length - 1) / 10 +
    			(data.properties.length - 1) * Math.random() / 10);
      } else if (ConV <= 0.7) {
        newIndex = Math.floor(( data.properties.length - 1) / 5 +
    			3 * (data.properties.length - 1) * Math.random() / 10);
      }else if (ConV <= 0.9) {
        newIndex = Math.floor(( data.properties.length - 1) / 2 +
    			(data.properties.length - 1) * Math.random() / 4);
      } else {
        newIndex = Math.floor(( 3 * data.properties.length - 1) / 4 +
    			 (data.properties.length - 1) * Math.random() / 4);
      }

      this.setState ({
        property:data.properties[newIndex]
      })
		} else {
			this.mount();
		}

	}
	//displayImage(){
	//	this.nextProperty();
//	};

  render() {
		//
			return(
				<div onClick={this.onClick}>
					<Card property={this.state.property}/>
					</div>
	    );

  }
}
//App application;

export default App;
