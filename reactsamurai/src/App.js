import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<Aside />
				<Profile />
			</main>

		</div>
	);
}

export default App;
