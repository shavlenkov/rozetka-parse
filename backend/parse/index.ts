import axios from 'axios'
import cheerio from 'cheerio'

import { connect, Prisma } from '../prisma/connect'

import { headers } from './config/headers'

async function parseLinks(url: string, selector: string): Promise<string[]> {
    const $ = await parsePage(url)
    const links: string[] = []

    $(selector).each((index, element) => {
        links.push($(element).attr('href') || '')
    })

    return links
}

async function parsePage(url: string) {
    const response = await axios.get(url, { headers })
    return cheerio.load(response.data)
}

async function createProduct(data: Prisma.ProductsCreateInput) {
    return await connect.products.create({
        data: {
            ...data
        }
    })
}

async function parseSpecifications(url: string): Promise<string> {
    const $ = await parsePage(url)
    let specifications = ''

    $('section.group').each((index, element) => {
        const heading =
            $(element).find('h3.sub-heading').text().trim() || 'Основне'
        const items = $(element).find('dl.list div.item')

        items.each((index, item) => {
            const label = $(item).find('dt.label').text()
            const value =
                $(item)
                    .find('dd.value > ul.sub-list > li.ng-star-inserted > *')
                    .html() || ''

            specifications += `${heading}: ${label}: ${value
                .split('<br>')
                .join(' ')
                .replace(/<(?!br\s*\/?)[^>]+>/gi, '')} \n`
        })
    })

    return specifications.replace(/\n\n/g, '').trimEnd()
}

async function main() {
    const base_url = 'https://rozetka.com.ua/'

    const categories_selector = 'a.menu-categories__link'
    const subcategories_selector = '.tile-cats__heading'
    const product_selector = 'a.product-link.goods-tile__picture'

    const categories_links = await parseLinks(base_url, categories_selector)

    for (const category_link of categories_links) {
        await processSubcategory(category_link)
    }

    async function processSubcategory(link: string) {
        const subcategories_links = await parseLinks(
            link,
            subcategories_selector
        )

        for (const subcategory_link of subcategories_links) {
            const product_links = await parseLinks(
                subcategory_link,
                product_selector
            )

            if (product_links.length > 0) {
                for (const product_link of product_links) {
                    const $ = await parsePage(product_link)

                    const title = $('h1.h2.bold.ng-star-inserted').text().trim()
                    const price = parseFloat(
                        $('p.product-price__big')
                            .text()
                            .slice(0, -1)
                            .replace(/\s/g, '')
                    )
                    const currency = $('p.product-price__big').text().slice(-1)
                    let description =
                        $('.product-about__description-content > div').html() ??
                        ''
                    const profileImage =
                        $('img.picture-container__picture').attr('src') || ''
                    const subtitle = $(
                        '.product-about__sticky > p.ng-star-inserted'
                    )
                        .text()
                        .trim()
                    const type = $('.breadcrumbs__item')
                        .eq(1)
                        .text()
                        .trim()
                        .replace('/', '')

                    if (description !== '') {
                        description = description
                            .split('<br>')
                            .join(' ')
                            .replace(/<(?!br\s*\/?)[^>]+>/gi, '')
                    }

                    const specifications = await parseSpecifications(
                        product_link + 'characteristics'
                    )

                    await createProduct({
                        title,
                        subtitle,
                        price,
                        currency,
                        description,
                        specifications,
                        type,
                        profileImage,
                        url: product_link,
                        source: 'rozetka'
                    })
                }
            } else {
                await processSubcategory(subcategory_link)
            }
        }
    }
}

;(async () => {
    await main()
})()
