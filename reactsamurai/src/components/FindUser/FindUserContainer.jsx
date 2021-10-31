import React from 'react';
import FindUser from './FindUser';
import {connect} from 'react-redux';
import { follow, getUsers, unfollow } from '../../redux/FindUserReducer';
import Loading from '../common/Loading/Loading';
import { Main } from '../StyledComponents/Main';
import { getCurrentPageSelector, getIsFetchingSelector, getIsInProgress, getPageSizeSelector, getTotalCountSelector, getUsersSelectorSuper } from '../../redux/FindUsersSelectors';

class FindUserApi extends React.Component{

    componentDidMount() {
        this.setPage();
    }

    setPage = (page = 1) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    follow = (userId) => {
        this.props.follow(userId);
    }

    unfollow = (userId) => {
        this.props.unfollow(userId);
    }

    render() {
        return (
            <Main>
                <Loading isFetching={this.props.isFetching}/>

                <FindUser users={this.props.users}
                            setPage={this.setPage}
                            setProgress={this.setProgress}
                            follow={this.follow}
                            unfollow={this.unfollow}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            isInProgress={this.props.isInProgress}
                            />
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelectorSuper(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isInProgress: getIsInProgress(state)
    }
};



export default connect(mapStateToProps, {
    getUsers, follow, unfollow
})(FindUserApi);


