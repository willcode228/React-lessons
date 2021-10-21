import React from 'react';
import { connect } from 'react-redux';
import { setProfile, getStatus, updateStatus } from '../../redux/ProfileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import authRedirect from '../../Hoc/authRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 20009;
        }

        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
    withRouter,
    authRedirect,
)(ProfileContainer);

