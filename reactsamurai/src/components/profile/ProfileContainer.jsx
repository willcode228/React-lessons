import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount() {
        console.log(this.props);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response => {
                if(response.status === 200) {
                    this.props.setUserProfile(response.data);
                }
            })
    }

    render() {
        return (
            <Profile profile={ this.props.profile }/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));