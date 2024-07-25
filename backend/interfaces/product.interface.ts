export default interface ProductInterface {
    id: number
    title: string
    subtitle: string | null
    price: number
    currency: string
    description: string
    type: string
    profileImage: string
    url: string
    source: string
    specifications: string | Record<string, Record<string, string>>
}
