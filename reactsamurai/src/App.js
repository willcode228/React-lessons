import { BrowserRouter, Route } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Aside data={props.data.aside}/>

				<Route path="/dialogs" render={ () => <Dialogs data={props.data.dialogs} /> } />

				<Route path="/profile" render={ () => <Profile data={props.data.profile} addPost={props.addPost}/> } />

				<Route path="/news" component={News} />

				<Route path="/music" component={Music} />

				<Route path="/settings" component={Settings} />

			</div>
		</BrowserRouter>
	);
}

export default App;
