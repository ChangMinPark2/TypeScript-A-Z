function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("hello", "world");
add(1, 2);


function saySomething(word: string | string[]): string {
    if (typeof word === "string") return word;
    if (typeof Array.isArray(word)) return word.join(" ");

    throw new Error("unable to say something");
}

saySomething('hello'); // hello