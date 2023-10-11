type AA<T> = T extends `${infer A}${string}` ? A : T;

type W = AA<'Hello'>;
