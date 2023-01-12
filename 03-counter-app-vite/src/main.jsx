import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={0} />
		{/* <FirstApp
			title="Andres"
			subTitle={123}
		/> */}
	</React.StrictMode>
);
