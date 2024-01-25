//Boolean
let boolean: boolean
let falseBoolean: boolean = true;

//Number
let number: number
let integer: number = 6;
let float: number = 1.2345

//String
let string: string
let fistName: string = 'Doe';

// Array
// 한 가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'kim'];

// 여러 타입을 가지는 배열(유니온 타입을 사용한다.)
let array1: (string | number) [] = ['john', 1, 2];
let array2: Array<string | number> = ['john', 1, 2];

//여러 타입을 단언 X any
let someArray: any[] = ['john', 1, [], {}, false];

//Interface, Type

//읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2] -> 할당 x [1,a] 도 안된다.

let users: [number, string][]
users = [[1, 'john'], [2, 'a']];

//메서드를 통한 푸쉬 가능.
let tuple2: [string, number]
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2)

//any
let any: any = 'abc';
any = 1;
any = [];

//unknown -> 어떤 값이든 넣을 수 있지만, 변수 할당은 불가능하다.
let unknown: unknown = false;
let string2: boolean = unknown as boolean; // 이건 가능하다.

//Object -> null 형식은 할당 할 수 없다.
let obj: object = {};
let arr: object = [];
let date: Object = new Date();

const obj1: { id: number, title: string } = {
    id: 1,
    title: 'title'
}

// Union 타입
let union: (string | number)
union = 'hi';
union = 123;

//Function
let func1: (arg1 : number, arg2 : number) => number;
func1 = function (x, y) {
    return x * y
}

let func2 : () => void;
func2 = function () {
    console.log('hi');
}

let number1 = undefined;

function greeting(): void {
    console.log('hi');
}

const hi: void=greeting()
console.log(hi) // -> undefined

//never
function throwError() : never {
    throw new Error('error');
}

function throws() : never {
    throw new Error('test');
}
//불가능
// const never = [] = []
// never.push(1);

const never: number[] = []
never.push(1);