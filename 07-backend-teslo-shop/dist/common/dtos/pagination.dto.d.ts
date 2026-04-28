export declare class PaginationDto {
    limit?: number;
    offset?: number;
    gender?: 'men' | 'women' | 'unisex' | 'kid' | '';
    minPrice?: number;
    maxPrice?: number;
    sizes?: string;
    q?: string;
}
