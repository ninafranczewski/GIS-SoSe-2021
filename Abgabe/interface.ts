export interface User {
    username: string;
    password: string;
}

export interface Recipes {
    _id: string;
    title: string;
    ingredients: string;
    preparation: string;
}

export interface UserLogin {
    message: string;
    error: string;
}

