import React from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { setProfile }),
    withRouter,
    // authRedirect,
)(ProfileContainer);

