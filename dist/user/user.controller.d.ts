import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isAdmin: boolean;
        orders: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            total: number;
            userId: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }[];
        favorites: {
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
        _count: {
            orders: number;
            reviews: number;
            favorites: number;
        };
    }>;
    getNewTokens(id: number, dto: CreateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
    toggleFavorite(id: number, productId: string): Promise<{
        message: string;
    }>;
}
