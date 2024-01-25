const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";


const bodyElement2 = document.querySelector('body');
bodyElement2!.innerText = "Hello";

const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerText = "HEllO";
}

function func(arg : string | null) {
    if(arg) {
        return (arg as string).toLowerCase();
    }
}

func('hello');
func(null);

