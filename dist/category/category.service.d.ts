import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
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
    bySlug(slug: string): Promise<{
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
    create(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    update(id: number, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
}
