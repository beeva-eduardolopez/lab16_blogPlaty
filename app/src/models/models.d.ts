declare module models {
    interface IPost {
        id?: number;
        title: string;
        author: string;
        content: string;
    }

    interface IResponse {
        status: string;
        message?: string;
        data?: any;
        errors?: Array<Error>;
    }
}

declare module contexts {
    interface IBlogs {
        posts: Array<models.IPost>;
    }
}