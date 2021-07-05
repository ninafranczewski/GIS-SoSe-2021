import { Url } from "url";

export interface User {
    username: string;
    password: string;
    favorites: Recipe[];
}

export interface Recipe {
    title: string;
    image: Url;
    ingredients: string;
    preparation: string;
}

