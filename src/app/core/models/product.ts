// Product type

export class Product {
    category!: string;
    description!: string;
    id!: number;
    image!: string;
    price!: number
    rating!: {
        rate: number;
        count: number
    };
    title!: string
}