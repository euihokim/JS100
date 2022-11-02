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

let now = new Date();
now.getTime();
let time = now.getTime() / 1000 / 60 / 60 / 24 / 365;
console.log(`현재 연도 (${1970 + ~~time})`);

// solution
// const d = new Date();

// let year = d.getTime();
// year = Math.floor(year/(3600*24*365*1000))+1970

// console.log(year);

console.log(`--------------------------문제46--------------------------`);

// 문제46 : 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

// 방법 1
// let start = prompt("시작을 입력해주세요")
// let end = prompt("끝을 입력해주세요")
// let arr = ""
// let _sum = 0
// for (let i = start; i <= end; i++) {
//     arr += i
// }
// arr = arr.split("")
// arr.forEach(e => _sum += e * 1)
// console.log(_sum)

// 방법 2
// let start = prompt("시작을 입력해주세요")
// let end = prompt("끝을 입력해주세요")
// let arr = ""
// let _sum = 0
// for (let i = start; i <= end; i++) {
//     arr += i
// }
// for (i of arr.split("")) {
//     _sum += i * 1
// }
// console.log(_sum)

let start = "1";
let end = "20";
let arr = "";
let _sum = 0;
for (let i = start; i <= end; i++) {
    arr += i;
}
for (i of arr.split("")) {
    _sum += i * 1;
}
console.log(_sum);

// solution
// let arr = [];
// let sum = 0;

// for (let i=0; i<20; i++){
//   arr[i] = i+1;
// }

// arr.forEach((n) => {
//   while(n !== 0){
//     sum += (n % 10);
//     n = Math.floor(n/10);
//   }
// })

// console.log(sum);

console.log(`--------------------------문제47--------------------------`);

// 문제47 : set 자료형의 응용
// 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
// 중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.

// 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.

// const people = {
//     이호준: "01050442903",
//     이호상: "01051442904",
//     이준호: "01050342904",
//     이호준: "01050442903",
//     이준: "01050412904",
//     이호: "01050443904",
//     이호준: "01050442903"
//   };

const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903",
};

let result = {};
for (let i = 0; i < Object.keys(people).length; i++) {
    result[Object.keys(people)[i]] = Object.values(people)[i];
}
console.log(Object.keys(result).length);

// solution
// const people = {
//     이호준: "01050442903",
//     이호상: "01051442904",
//     이준호: "01050342904",
//     이호준: "01050442903",
//     이준: "01050412904",
//     이호: "01050443904",
//     이호준: "01050442903"
//   };

//   let result = new Set();
//   for (let key in people) {
//     result.add(people[key]);
//   }
//   console.log(result.size); //size 는 set 객체 내 값의 개수를 반환합니다.

console.log(`--------------------------문제48--------------------------`);

// 문제48 : 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

// let string = prompt("문자열을 입력하세요.").split("");
// let stringResult = "";
// string.forEach((e) => {
//     if (e === e.toUpperCase()) {
//         stringResult += e.toLowerCase();
//     } else stringResult += e.toUpperCase();
// });
// console.log(stringResult);

let string = "AAABBBcccddd".split("");
let stringResult = "";
string.forEach((e) => {
    if (e === e.toUpperCase()) {
        stringResult += e.toLowerCase();
    } else stringResult += e.toUpperCase();
});
console.log(stringResult);

// solution
// let a = prompt('문자열을 입력하세요.');
// let b = [];
// let s = '';

// for (let i=0; i<a.length; i++){
// 	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
//   if(a[i] === a[i].toLowerCase()){
//     b.push(a[i].toUpperCase());
//   } else {
//     b.push(a[i].toLowerCase());
//   }
// }

// for (let j=0; j<b.length; j++){
//   s += b[j];
// }

// console.log(s);

console.log(`--------------------------문제49--------------------------`);

// 문제49 : 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

// 입출력

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

// 풀이 1
// let number_ = prompt("공백으로 구분하여 10개의 숫자를 입력해주세요.").split(" ")
// console.log(number_.sort((a, b) => (b - a))[0])

// 풀이 2
// let number_ = prompt("공백으로 구분하여 10개의 숫자를 입력해주세요.").split(" ")
// console.log(Math.max(...number_))

let number_ = "10 9 8 7 6 5 4 3 2 1".split(" ");
console.log(Math.max(...number_));

// solution
// let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
//     return parseInt(n, 10);
//   });

//   numbers.sort((a, b) => {
//     return b-a;
//   });

//   console.log(numbers[0]);

console.log(`--------------------------문제50--------------------------`);

// 문제50 : 버블정렬 구현하기
// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

// function bubble(arr) {
//     let result = arr.slice();

//     for (let i = 0; i < result.length - 1; i++) {
//       for (/*빈칸을 채워주세요.*/) {
//         if (result[j] > result[j + 1]) {
//            //빈칸을 채워주세요.
//         }
//       }
//     }
//     return result;
//   }

//   const items = prompt('입력해주세요.').split(' ').map((n) => {
//     return parseInt(n, 10);
//   });

//   console.log(bubble(items));

// function bubble(arr) {
//     let result = arr.slice();

//     for (let i = 0; i < result.length - 1; i++) {
//         for (let j = 0; j < result.length - 1; j++) {
//         if (result[j] > result[j + 1]) {

//         }
//         }
//     }
//     return result;
//     }

//     const items = "4 2 3 5 8".split(' ').map((n) => {
//     return parseInt(n, 10);
//     });

//     console.log(bubble(items));
