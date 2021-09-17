import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Aside />

				<Route path="/dialogs" component={Dialogs} />

				<Route path="/profile" component={Profile} />

				<Route path="/news" component={News} />

				<Route path="/music" component={Music} />

				<Route path="/settings" component={Settings} />

			</div>
		</Router>
	);
}

export default App;
