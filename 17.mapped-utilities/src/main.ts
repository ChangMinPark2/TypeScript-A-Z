type Properties = 'propA' | 'propB';

type MyNewType = MyMappedType<{a: 'a',b: 'b'}>

type MyMappedType<T> = {
    [P in keyof T]: T[P];
}

// type MyMappedType<Properties extends string| number| symbol>= {
//     [P in Properties] : P;
// }

