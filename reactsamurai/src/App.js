import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Aside from './components/Aside/Aside';
import News from './components/News/News';
import './App.css';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				
				<Aside data={props.state.aside}/>

				<Route path="/dialogs" render={ () => <DialogsContainer/> } />

				<Route path="/profile" render={ () => <Profile/> } />

				<Route path="/news" component={News} />

				<Route path="/music" component={Music} />

				<Route path="/settings" component={Settings} />

			</div>
		</BrowserRouter>
	);
}

export default App;
