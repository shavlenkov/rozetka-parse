import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination: React.FC<{
    pageCount: number
    onPageChange: (data: { selected: number }) => void
}> = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={'flex justify-center my-6'}
            pageClassName={'mx-1'}
            pageLinkClassName={
                'px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition duration-300'
            }
            previousClassName={'mx-1'}
            previousLinkClassName={
                'px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition duration-300'
            }
            nextClassName={'mx-1'}
            nextLinkClassName={
                'px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition duration-300'
            }
            activeClassName={'bg-blue-500 text-white dark:bg-blue-600'}
            breakLinkClassName={
                'px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white dark:text-white dark:bg-gray-700 dark:border-gray-600'
            }
            disabledClassName={'opacity-50 cursor-not-allowed'}
        />
    )
}

export default Pagination
