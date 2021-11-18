import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import Pngtree from './assets/img/Pngtree.png';

const {Title}=Typography;

function App(){
	return(
		<div className="App">
		 <br /> 
		<h1>Opps... page no found!</h1>
		<img src={Pngtree} />
        </div>
	);
	
}

export default App;
