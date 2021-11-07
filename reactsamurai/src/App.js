import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Loading from './components/common/Loading/Loading';
import { initializedApp } from './redux/AppReducer';
import Aside from './components/Aside/Aside';
import { Redirect, Switch, withRouter } from 'react-router'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';
import './App.css';
import { Suspense } from 'react';

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const FindUserContainer = React.lazy(() => import('./components/FindUser/FindUserContainer'));


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


                <Suspense fallback={<Loading />}>

                <Switch>

                    <Route path="/news" component={News} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/music" component={Music} exact/>
                    <Route path="/settings" component={Settings} exact/>
                    <Route path="/find" component={FindUserContainer} exact/>
                    <Route path="/dialogs" component={DialogsContainer} exact/>
                    <Route path="/profile/:userId?" component={ProfileContainer} exact/>

                    <Redirect to='/profile/:userId?'/>
                </Switch>

                </Suspense>

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
