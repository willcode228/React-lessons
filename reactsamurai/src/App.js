import { BrowserRouter, Route } from 'react-router-dom';
import FindUserContainer from './components/FindUser/FindUserContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Aside from './components/Aside/Aside';
import News from './components/News/News';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
                
				<HeaderContainer />
				
				<Aside data={props.state.aside}/>

				<Route path="/dialogs" render={ () => <DialogsContainer/> } />

				<Route path="/profile/:userId?" render={ () => <ProfileContainer/> } />

				<Route path="/find" render={ () => <FindUserContainer /> } />

				<Route path="/news" component={News} />

				<Route path="/music" component={Music} />

				<Route path="/settings" component={Settings} />

			</div>
		</BrowserRouter>
	);
}

export default App;
