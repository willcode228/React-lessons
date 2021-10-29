import { Route } from 'react-router-dom';
import FindUserContainer from './components/FindUser/FindUserContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Aside from './components/Aside/Aside';
import News from './components/News/News';
import './App.css';
import Login from './components/Login/Login';
import React from 'react';
import { compose } from 'redux';
import { auth } from './redux/AuthReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { initializedApp } from './redux/AppReducer';
import Loading from './components/common/Loading/Loading';

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Loading />
        }

        return (
            <div className="App">

                <HeaderContainer />

                <Aside data={this.props.state.aside} />

                <Route path="/dialogs" render={() => <DialogsContainer />} />

                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

                <Route path="/find" render={() => <FindUserContainer />} />

                <Route path="/news" component={News} />

                <Route path="/music" component={Music} />

                <Route path="/settings" component={Settings} />

                <Route path="/login" component={Login}/>

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, { initializedApp }))(App);
