//Partial

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> = {};

const you: Partial<Address> = {email: 'abc.com'};

const all: Address = {email: 'abc.com', address: 'john'};


//Pick
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
const todo : TodoPreview = {
    title: "clean",
    completed: false
}

//Omit -> 특정 소스만 제거한다.

//Exclude

//Required
type User = {
    firstName: string,
    lastName?: string
}

let fistUser : User= {
    firstName: "tom"
}

// let secondUser : Required<User> = {
//     fistName: "tom",
// }

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris"

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: 'per'},
    boris: {age: 5, breed: 'con'}
}

//Return type;
type T0 = ReturnType<() => string>

function fn(str: string) {
    return str;
}

const a : ReturnType<typeof fn> = 'hello';