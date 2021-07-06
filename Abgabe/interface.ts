import { Url } from "url";

export interface User {
    username: string;
    password: string;
}

export interface Recipes {
    _id: string;
    title: string;
    image: Url;
    ingredients: string;
    preparation: string;
}

