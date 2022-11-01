console.log(`--------------------------문제41--------------------------`);

// 문제41 : 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// let inputNumber = prompt("숫자를 입력해주세요") * 1;
// if (
//     (inputNumber % 2 === 0 && inputNumber !== 2) ||
//     (inputNumber % 3 === 0 && inputNumber !== 3) ||
//     (inputNumber % 5 === 0 && inputNumber !== 5) ||
//     (inputNumber % 7 === 0 && inputNumber !== 7)
// ) {
//     console.log("NO");
// } else {
//     console.log("YES");
// }

// ex) 41 입력
let inputNumber = "41" * 1;
if (
    (inputNumber % 2 === 0 && inputNumber !== 2) ||
    (inputNumber % 3 === 0 && inputNumber !== 3) ||
    (inputNumber % 5 === 0 && inputNumber !== 5) ||
    (inputNumber % 7 === 0 && inputNumber !== 7)
) {
    console.log("NO");
} else {
    console.log("YES");
}

// solution
// const num = prompt('숫자를 입력하세요.');

// function check_prime(num) {
//   for (let i=2; i<num; i++) {
//     const result = num % i;
//     if (result === 0) {
//       console.log('NO');
//       return false;
//     }
//   }
//   if (num === 1) {
//     console.log('NO');
//     return;
//   }
//   console.log('YES');
// }

// check_prime(num);

console.log(`--------------------------문제42--------------------------`);

// 문제42 : 2020년
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// let month = prompt("월을 입력하세요.")
// let day = prompt("일을 입력하세요.")
// let date = new Date(2020, month - 1, day).toString();
// console.log(date.slice(0, 3).toUpperCase())

let month = 5;
let day = 24;
let date = new Date(2020, month - 1, day).toString();
console.log(date.slice(0, 3).toUpperCase());

// solution
// const month = prompt('월을 입력하세요.');
// const date = prompt('일을 입력하세요.');

// function solution(a,b){
//     const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

//     const x = new Date('2020-'+a+'-'+b);
//     return day[x.getDay()];
// }
// console.log(solution(month, date));

console.log(`--------------------------문제43--------------------------`);

// 문제43 : 10진수를 2진수로
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

// let decimal = prompt("숫자를 입력해주세요.") * 1;
// console.log(decimal.toString(2).padStart(4, 0));

// ex) 43 입력
let decimal = "43" * 1;
console.log(decimal.toString(2).padStart(4, 0));

// solution
// let a = prompt('10진수를 입력해주세요.')
// let b = [];
// let result = '';

// a가 false가 될 때까지 반복
// while (a){
// 	b.push(a % 2);
// 	a = parseInt(a / 2, 10);
// }
// b.reverse();

// b.forEach((n) => {
//   result += n;
// })

// console.log(result);

console.log(`--------------------------문제44--------------------------`);

// 문제44 : 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

// 예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 입출력

// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24

// let number = prompt("양의 정수를 입력해주세요")
// console.log(`입력 : ${number}`)
// number = number.split("")
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     sum += number[i] * 1
// }
// console.log(`출력 : ${sum}`)

let number = "18234";
console.log(`입력 : ${number}`);
number = number.split("");
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i] * 1;
}
console.log(`출력 : ${sum}`);

// solution
// let n = prompt('숫자를 입력하세요.');
// let sum = 0;

// while(n !== 0){
//   sum += (n % 10);
//   n = Math.floor(n/10);
// }

// console.log(sum);

console.log(`--------------------------문제45--------------------------`);

// 문제45 : getTime()함수 사용하기
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(2019)를 출력해보세요.
