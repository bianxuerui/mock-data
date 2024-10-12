import { Controller, Get, Query } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get('list')
    getProductList(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        const allProducts = [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
            { id: 3, name: 'Product 3', price: 300 },
            { id: 4, name: 'Product 4', price: 400 },
            { id: 5, name: 'Product 5', price: 500 },
            { id: 6, name: 'Product 6', price: 600 },
            { id: 7, name: 'Product 7', price: 700 },
            { id: 8, name: 'Product 8', price: 800 },
            { id: 9, name: 'Product 9', price: 900 },
            { id: 10, name: 'Product 10', price: 1000 },
            { id: 11, name: 'Product 11', price: 1100 },
            { id: 12, name: 'Product 12', price: 1200 },
        ];

        page = Number(page);
        pageSize = Number(pageSize);

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const paginatedProducts = allProducts.slice(startIndex, endIndex);

        return {
            totalItems: allProducts.length,
            page,
            pageSize,
            totalPages: Math.ceil(allProducts.length / pageSize),
            data: paginatedProducts,
        };
    }
}
