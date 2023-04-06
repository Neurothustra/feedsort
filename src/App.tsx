import React from 'react';
import { readDir } from './common/readWriteDir';

function App() {
	const handleClick = async () => {
		readDir();
	};

	return (
		<div className='App'>
			<header>
				<p>
					<img src='./assets/logo-edit.png' alt='' />
					<button id='directory-btn' type='button' onClick={handleClick}>
						Generate
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
