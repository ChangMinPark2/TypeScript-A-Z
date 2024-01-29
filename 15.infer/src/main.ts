type AType<T> = T extends infer R ? R : null;

const a : AType<number> = 1;

type BType<T> = T extends {a : infer A; b: 1} ? A : any;

type Inferred = BType<{a : 'hi'; b: 1}>;