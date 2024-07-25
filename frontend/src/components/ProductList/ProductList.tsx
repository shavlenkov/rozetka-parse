import React from 'react'
import ProductInterface from '../../interfaces/product.interface'
import ProductItem from '../ProductItem/ProductItem'

const ProductList: React.FC<{
    data: ProductInterface[]
    currentPage: number
    itemsPerPage: number
}> = ({ data, currentPage, itemsPerPage }) => {
    const startIndex = currentPage * itemsPerPage
    const selectedProducts = data.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="mx-auto my-[20px] w-100 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {selectedProducts.map((item: ProductInterface) => (
                <ProductItem key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ProductList
