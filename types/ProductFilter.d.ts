export default interface ProductFilter<T extends FilterValue>{
    name: string;
    options: Option<T>[];
}

interface Option<T extends FilterValue>{
    name: string;
    value: T;
}

type FilterValue = string | number | boolean;