import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//import components
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
