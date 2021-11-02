import { useState } from 'react';
import s from '../FindUser.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, setPage}) => {

    const portionSize = 10;

    let [portionCount, setPortionCount] = useState(0);
    let pagesPaginationCount = Math.ceil(totalItemsCount / pageSize);
    let pagesPagination = [];

    let leftSide = (portionCount * portionSize) + 1;
    let rightSide = pagesPaginationCount <= leftSide + portionSize 
                                        ? (leftSide - 1) + (pagesPaginationCount % portionSize) 
                                        : (portionCount * portionSize) + portionSize;

    for(let i = leftSide; i <= rightSide; i++) {
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
            <button disabled={leftSide === 1} 
                    onClick={() => setPortionCount(portionCount - 1)}
            >
                Prev
            </button>

            {pagesPagination}

            <button disabled={rightSide === pagesPaginationCount} 
                onClick={() => setPortionCount(portionCount + 1)}
            >
                    Next
            </button>
        </>
    );
}

export default Paginator;