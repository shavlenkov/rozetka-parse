import { Request, Response } from 'express'
import { connect } from '../prisma/connect'
import ProductInterface from '../interfaces/product.interface'

export async function getProducts(req: Request, res: Response) {
    try {
        const allProducts: ProductInterface[] =
            await connect.products.findMany()

        const mappedArr = allProducts.map((item: ProductInterface) => {
            if (typeof item.specifications === 'string') {
                const obj: Record<string, Record<string, string>> = {}

                for (const specification of item.specifications.split('\n')) {
                    const parts = specification.split(':')
                    const specificationPartArray = [
                        parts[0],
                        parts[1],
                        parts.slice(2).join(':')
                    ]

                    const [head, key, value] = specificationPartArray

                    if (!obj[head]) {
                        obj[head] = {}
                    }

                    obj[head][key] = value.trim()
                }

                item.specifications = obj
            }

            return item
        })

        res.json(mappedArr)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ error: 'Internal backend error' })
    }
}
