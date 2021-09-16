import './App.css';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';

function App() {
	return (
		<div className="App">
			<Header />
			<Aside />
			{/* <Profile /> */}
            <Dialogs />
		</div>
	);
}

export default App;
