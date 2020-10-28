export interface Response<T> {
    code: number;
    description: string;
    response: T;
}
