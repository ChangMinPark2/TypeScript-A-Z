"use strict";
//Boolean
let boolean;
let falseBoolean = true;
//Number
let number;
let integer = 6;
let float = 1.2345;
//String
let string;
let fistName = 'Doe';
// Array
// 한 가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'kim'];
// 여러 타입을 가지는 배열(유니온 타입을 사용한다.)
let array1 = ['john', 1, 2];
let array2 = ['john', 1, 2];
//여러 타입을 단언 X any
let someArray = ['john', 1, [], {}, false];
//Interface, Type
//읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2] -> 할당 x [1,a] 도 안된다.
let users;
users = [[1, 'john'], [2, 'a']];
//메서드를 통한 푸쉬 가능.
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
