import './App.css';
import logoImage from './assets/logo-edit.png';
import generateJson from './common/generate-json';

function App() {
	const handleClick = async () => {
		generateJson();
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
