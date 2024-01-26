// interface Animal {
//     name: string;
// }
//
// interface Bear extends Animal {
//     honey: boolean;
// }
//
// const bear1 : Bear = {
//     name: "honey bear",
//     honey: true
// }

// 인터페이스는 알아서 병합을 해준다.
interface Animal {
    name : string;
}

interface Animal {
    honey : boolean;
}

const bear1 : Animal = {
    name: 'honey bear',
    honey: true
}
