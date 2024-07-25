export default interface StoreProductsInterface {
    products: []
    loading: boolean
    setProducts: () => Promise<void>
}
