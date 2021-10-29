import React from "react";
import { connect } from "react-redux";
import {logout} from '../../redux/AuthReducer'
import Header from "./Header";

class HeaderContainer extends React.Component{
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
    logout
})(HeaderContainer);