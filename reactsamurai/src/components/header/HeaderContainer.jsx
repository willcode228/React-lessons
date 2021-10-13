import React from "react";
import { connect } from "react-redux";
import {auth, setAuthUserData} from '../../redux/AuthReducer'
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    email={this.props.email}/>
        );
    }
}

let mapStateToProps = (props) => ({
    isAuth: props.auth.isAuth,
    login: props.auth.login,
    email: props.auth.email,
})


export default connect(mapStateToProps,{
    setAuthUserData, auth
})(HeaderContainer);