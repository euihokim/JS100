console.log(`--------------------------문제51--------------------------`);

// 문제51 : merge sort를 만들어보자
// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// >

// 출처 : 위키피디아

// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

// function mergeSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0,mid);
//     const right = arr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
//   }

//   function merge(left, right){
//     let result = [];

//     while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
//       if (/*빈칸을 채워주세요*/){
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     while (left.length) {
//       /*빈칸을 채워주세요*/
//     }
//     while (right.length) {
//       /*빈칸을 채워주세요*/
//     }

//     return result;
//   }

//   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

//   console.log(mergeSort(array));

console.log(`--------------------------문제52--------------------------`);

// 문제52 : quick sort
// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

// function quickSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }

//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for (let i=1; i<arr.length; i++){
//       if(/*빈칸을 채워주세요*/){
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return /*빈칸을 채워주세요*/
//   }

//   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

//   console.log(quickSort(array));

console.log(`--------------------------문제53--------------------------`);

// 문제53 : 괄호 문자열
// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

// let string = prompt("괄호 문자열을 입력해주세요.").split("")
// let left = string.find(x => x === '(')
// let right = string.find(x => x !== '(')
// let temp = 0
// for (let i = 0; i < string.length; i++) {
//     if (string[i] === '(') {
//         temp++
//     } else {
//         temp--
//         if (temp < 0) {
//             break
//         }
//     }
// }
// if ((string.filter(x => x === left).length === string.filter(x => x === right).length) && (temp >= 0)) {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

let string = "()())".split("");
let left = string.find((x) => x === "(");
let right = string.find((x) => x !== "(");
let temp = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
        temp++;
    } else {
        temp--;
        if (temp < 0) {
            break;
        }
    }
}
if (
    string.filter((x) => x === left).length ===
        string.filter((x) => x === right).length &&
    temp >= 0
) {
    console.log("YES");
} else {
    console.log("NO");
}

// solution
// function mathBrackets(e){
//     let count = 0;

//     //괄호 개수가 같지 않으면 false
//     for (let i=0; i<e.length; i++){
//         if (e[i] === '('){
//             count++;
//         }
//         if (e[i] === ')'){
//             count--;
//         }
//     }
//     if (count !== 0){
//         return false;
//     }

//     let 괄호 = [];
//     for (let i in e){
//         if (e[i] === '(') {
//             괄호.push('(');
//         }

//         if (e[i] === ')') {
//             if (괄호.length === 0) {
//                 return false;
//             }
//             괄호.pop();
//         }
//     }
//     return true;
// }

// const n = prompt('입력해주세요.').split('');

// if (mathBrackets(n) === true) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

console.log(`--------------------------문제54--------------------------`);

// 문제54 : 연속되는 수
// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

// 입력1
// 1 2 3 4 5

// 출력1
// YES

// 입력2
// 1 4 2 6 3

// 출력2
// NO
