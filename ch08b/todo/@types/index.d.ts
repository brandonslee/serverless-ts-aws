export interface IResponseBody {
    result: boolean;
    message?: string;
    data?: any;
}

export interface ITodo {
    id: string;
    deletedAt: number;
    createdAt: string;
    isCompleted: boolean;
    task:string;
}