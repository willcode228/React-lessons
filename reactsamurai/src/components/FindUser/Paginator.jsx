import s from './FindUser.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, setPage}) => {
    let pagesPaginationCount = Math.ceil(totalUsersCount / pageSize);

    let pagesPagination = [];

    for(let i = 1; i <= pagesPaginationCount; i++) {
        pagesPagination.push(
            <span className={currentPage === i 
                            ? `${s.selectedPage} ${s.pagePagination}` 
                            : `${s.pagePagination}`} 

                    onClick={ () => { setPage(i) } }
                    key={i}
            >
                {i}
            </span>
        );
    }

    return (
        <>
            {pagesPagination}
        </>
    );
}

export default Paginator;