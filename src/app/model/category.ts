export interface Categorys {
    key: string;
    value: Category;
}

export interface Category {
    name: string;
    description: string;
}

export interface Sentence {
    sentence: string;
    category: string;
}
