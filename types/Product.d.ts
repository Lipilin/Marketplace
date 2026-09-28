export default interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    categories: Category[];
    avatar: string;
    images: string[];
}