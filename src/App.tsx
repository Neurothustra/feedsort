import React from 'react';
import { readDir } from './common/readWriteDir';
import logoImage from './assets/logo-edit.png';
import './App.css';

function App() {
	const handleClick = async () => {
		readDir();
	};

	return (
		<div className='App'>
			<header>
				<img className='logo' src={logoImage} alt='' />
			</header>
			<div className='container'>
				<button id='directory-btn' type='button' onClick={handleClick}>
					Generate
				</button>
			</div>
		</div>
	);
}

export default App;
