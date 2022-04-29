export interface Page<T> {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    content: T[];
}

export function initPage(page: number, limit: number): Page<any> {
    return {
        content: [],
        page,
        size: limit,
        totalElements: 0,
        totalPages: 0
    }
}