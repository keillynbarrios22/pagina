import React from 'react';
import logo from './logo.svg';
import { Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import Pngtree from './assets/img/Pngtree.png';
import { WarningOutlined } from '@ant-design/icons';
import './App.css';


const {Title}=Typography;

function App(){
	return(
		<div className="App">
		 
		<div className="raya"></div>
		<img src={Pngtree} />
		<div className="Descripcion">
		 		<h1>Ups..<br />La página no ha sido encontrada <WarningOutlined style={{fontSize: '40px', color: 'orange'}} /></h1>
		 		<h3>Parece que ha habido un error con la página que estabas buscando.<br />
		 		Es posible que la entrada alla sido eliminada o que la dirección no exista.</h3>
                <br />
                <br />
                <br />
                <Button type="ghost">Volver a la página principal</Button>
                <br />
                <br />
                <br />
		 		
				
		</div>
        </div>
	);
	
}

export default App;
