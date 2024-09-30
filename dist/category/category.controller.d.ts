import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        products: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string;
            price: number;
            images: string[];
            categoryId: number | null;
            userId: number | null;
        }[];
    }[]>;
    getBySlug(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        products: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string;
            price: number;
            images: string[];
            categoryId: number | null;
            userId: number | null;
        }[];
    }>;
    getById(id: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            products: number;
        };
        slug: string;
        products: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string;
            price: number;
            images: string[];
            categoryId: number | null;
            userId: number | null;
        }[];
    }>;
    create(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    update(id: string, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
}
