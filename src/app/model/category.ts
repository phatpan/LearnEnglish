export interface CategoryInfo {
    key: string;
    value: Category;
}

export interface Category {
    name: string;
    description: string;
}

export interface SentenceInfo {
    key: string;
    value: Sentence;
}

export interface Sentence {
    category: string;
    name: string;
    thaiTranslation: string;
    read: string;
}
