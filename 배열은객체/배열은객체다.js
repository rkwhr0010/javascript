//배열 선언
const arr = [];

//확인
// console.log(typeof arr);

const funcKey = function() {}
class classKey{}

//배열 객체처럼 다뤄보기1, 블록 접근
arr['string'] = '리터럴';
arr[{}] = '객체';
arr[[]] = '배열';
arr[()=> 'a'] = '화살표함수';
arr[funcKey] = '함수';
arr[classKey] = '클래스';


//확인
console.log(Object.entries(arr));



//배열 객체처럼 다뤄보기2, 점 접근
const arr2 = [];

arr2.name = "홍길동";
arr2.age = 10;

console.log(arr2);

//객체처럼 다룬 배열을 배열처럼 사용해보기
console.log(arr.length);
arr.pop();
arr.pop();
arr.unshift();
arr.unshift();
console.log(arr);

arr[9] = 10;
arr[5] = 6;
console.log(arr.length);
console.log(arr.toString());
console.log(arr.join(","));


//응용해보기
const obj = {};

obj['string'] = '리터럴';
obj[{}] = '객체';
obj[[]] = '배열';
obj[()=> 'a'] = '화살표함수';
obj[funcKey] = '함수';
obj[classKey] = '클래스';

console.log(obj);

console.log("\n\n\n")
//배열과 함수를 받아 순회하는 함수
function each(objOrArr){
    const keys = Object.keys(objOrArr);
    keys.forEach(key => console.log(key, objOrArr[key]));
}
each(arr);
each(obj);

