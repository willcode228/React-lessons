import './App.css';
import { Redirect, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
	return (
		<div className="app__wrapper">
			<Header />
			<main className="content">
				<Nav data={props.data.Nav}/>
				<Route path="/dialogs" render={ () => <Dialogs data={props.data.Dialogs}/>} />
				<Route path="/profile" render={ () => <ProfileContainer/>} />
				<Route path="/settings" component={Settings} />
				<Route path="/music" component={Music} />
				<Redirect from="/" to="profile"/> 
			</main>
		</div>
	);
}

export default App;
