import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {setAuthUserData} from '../../redux/AuthReducer'
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.status === 200 && !response.data.resultCode) {
                    this.props.setAuthUserData(response.data.data);
                }
            })
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
    setAuthUserData
})(HeaderContainer);
