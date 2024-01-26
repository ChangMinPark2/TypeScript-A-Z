// function getArrayLength(arr : number[] | string []) : number {
//     return arr.length;
// }

function getArrayLength<T>(arr: T[]) : number {
    return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["1,", "a"];

getArrayLength<number>(array1);
getArrayLength<string>(array2);

interface Vehicle<T> {
    name: string;
    option: T;
}

// @ts-ignore
const car : Vehicle<{price: number} > = {
    name: 'Car',
    option: {
        price: 1000
    }
}

