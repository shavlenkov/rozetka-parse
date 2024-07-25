import { create } from 'zustand'
import axios from 'axios'

import StoreProductsInterface from '../interfaces/storeProducts.interface'

const useStoreComments = create<StoreProductsInterface>(set => ({
    products: [],
    loading: true,

    setProducts: async () => {
        try {
            const productsResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/products`
            )
            set({ products: productsResponse.data })
        } catch (error) {
            console.error('Failed to fetch products:', error)
        } finally {
            set({ loading: false })
        }
    }
}))

export default useStoreComments
