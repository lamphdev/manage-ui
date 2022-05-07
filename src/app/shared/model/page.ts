export interface Page<T> {
    page: number;
    limit: number;
    totals: number;
    pages: number;
    content: T[];
}

export function initPage(page: number, limit: number): Page<any> {
    return {
        content: [],
        page,
        limit,
        totals: 0,
        pages: 0
    }
}