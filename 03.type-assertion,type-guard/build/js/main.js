"use strict";
const bodyElement = document.querySelector('body');
bodyElement.innerText = "Hello";
const bodyElement2 = document.querySelector('body');
bodyElement2.innerText = "Hello";
const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerText = "HEllO";
}
function func(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func('hello');
func(null);
