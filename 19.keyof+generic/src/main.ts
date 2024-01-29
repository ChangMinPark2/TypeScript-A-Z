interface Person {
    name: string;
    age: number;
    address: string;
}

const person: Person = {
    name: 'tom',
    age: 30,
    address: 'seoul'
}
const age = getProperty(person, 'age');
// const name = getProperty(person, 'name');

function getProperty<T, K extends keyof T>(obj : T, key: K) {
    return obj[key];
}