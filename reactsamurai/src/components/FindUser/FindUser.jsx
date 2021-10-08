import s from './FindUser.module.css';
import User from './User/User';

const FindUserClear = (props) => {

    let usersBatch = props.users.map(user => (
            <User follow={props.follow}
                unfollow={props.unfollow}
                key={user.id}
                data={user} />
        )
    );

    let pagesPaginationCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesPagination = [];

    for(let i = 1; i <= pagesPaginationCount; i++) {
        pagesPagination.push(
    <span className={props.currentPage === i 
                            ? `${s.selectedPage} ${s.pagePagination}` 
                            : `${s.pagePagination}`} 

                    onClick={ () => { props.setPage(i) } }
                    key={i}>
                {i}
            </span>
        );
    }

    return ( 
        <div className={s.users}>

            <h2 className={s.title}>Users</h2>

            <div className={s.pages}>
                {pagesPagination}
            </div>

            <div className={s.users__list}>
                {usersBatch}
            </div>

            <button className={s.users__more}>Show More</button>

        </div>
    )
}

export default FindUserClear;