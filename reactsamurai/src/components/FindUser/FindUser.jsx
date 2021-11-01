import s from './FindUser.module.css';
import Paginator from './Paginator';
import User from './User/User';

const FindUserClear = (props) => {
    
    let usersBatch = props.users.map(user => (
            <User follow={props.follow}
                unfollow={props.unfollow}
                isInProgress={props.isInProgress}
                key={user.id}
                data={user} />
        )
    );

    return ( 
        <div className={s.users}>

            <h2 className={s.title}>Users</h2>

            <div className={s.pages}>
                <Paginator totalUsersCount={props.totalUsersCount} 
                            pageSize={props.pageSize}
                            currentPage={props.currentPage}
                            setPage={props.setPage}/>
            </div>

            <div className={s.users__list}>
                {usersBatch}
            </div>

            <button className={s.users__more}>Show More</button>

        </div>
    )
}

export default FindUserClear;