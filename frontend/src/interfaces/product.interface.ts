export default interface ProductInterface {
    id: number
    title: string
    subtitle: string
    price: number
    currency: string
    description: string
    type: string
    profileImage: string
    url: string
    source: string
    specifications: Record<string, Record<string, string>>
}
