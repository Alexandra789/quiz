import {useState} from "react";
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const navigation = (data) => {
        setCurrentPage(data.selected);
    }

    return (
        <div className="pagination-wrapper">
            <ReactPaginate
                pageCount={13}
                onPageChange={navigation}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                initialPage={currentPage}
            />
        </div>
    )
}