type TGetContent<T> = T extends (infer K)[] ? K : T;
