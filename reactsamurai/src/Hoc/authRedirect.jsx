import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

const authRedirect = (Container) => {

    class RedirectContainer extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to='/login'/>
            }

            return <Container {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToProps)(RedirectContainer);;
}



export default authRedirect;
