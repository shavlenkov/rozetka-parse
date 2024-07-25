import React, { useEffect, useState } from 'react'
import './scss/App.scss'

import ProductList from './components/ProductList/ProductList'
import Pagination from './components/Pagination/Pagination'
import Spinner from './components/Spinner/Spinner'
import Logo from './components/Logo/Logo'

import useStoreProducts from './store/useStoreProducts'

const ITEMS_PER_PAGE = 10

function App() {
    const { products, loading, setProducts } = useStoreProducts()
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setProducts()
    }, [setProducts])

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected)
    }

    return (
        <div className="App">
            <div className="container mx-auto max-w-[1200px]">
                <Logo />

                {loading ? (
                    <Spinner />
                ) : products.length ? (
                    <>
                        <ProductList
                            data={products}
                            currentPage={currentPage}
                            itemsPerPage={ITEMS_PER_PAGE}
                        />
                        <Pagination
                            pageCount={Math.ceil(
                                products.length / ITEMS_PER_PAGE
                            )}
                            onPageChange={handlePageClick}
                        />
                    </>
                ) : (
                    <div>There is nothing here yet</div>
                )}
            </div>
        </div>
    )
}

export default App
