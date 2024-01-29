// type SomeType = string;
// type ConditionalType = SomeType extends string ? string : null;
//
// function fn1<T>(value: T) {
//     const fn2 = (
//         arg: T extends boolean ? 'A' : 'B'
//     ) => {};
//     return fn2;
// }
//
// const result = fn1(' ');
//

type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type Atype<T> = (() => T) extends () => string | number ? T : never;
type MyResult = Atype<string | number | boolean>;