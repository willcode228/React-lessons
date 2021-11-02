import React from 'react';
import { connect } from 'react-redux';
import { setProfile, getStatus, updateStatus, savePhoto } from '../../redux/ProfileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import authRedirect from '../../Hoc/authRedirect';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if(!userId && this.props.isAuth) {
            userId = this.props.authorizedUserId;
        }

        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    isAuth={this.props.isAuth}
                    userId={this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { setProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    authRedirect,
)(ProfileContainer);


