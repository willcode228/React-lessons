import React from "react";
import { connect } from "react-redux";
import {auth, setAuthUserData, logout} from '../../redux/AuthReducer'
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.auth();
    }

    containerLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    email={this.props.email}
                    logout={this.containerLogout}/>
        );
    }
}

let mapStateToProps = (props) => ({
    isAuth: props.auth.isAuth,
    login: props.auth.login,
    email: props.auth.email,
})


export default connect(mapStateToProps,{
    setAuthUserData, auth, logout
})(HeaderContainer);