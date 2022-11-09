console.log(`--------------------------문제61--------------------------`);

// 문제61 : 문자열 압축하기
// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

// let str = prompt("공백없이 문자열을 입력해주세요.").split("");
// let result = [];
// while (!!str.length) {
//     result.push(str[0], str.filter((x) => x === str[0]).length);
//     str.splice(0, str.filter((x) => x === str[0]).length);
// }
// console.log(result.join(""));

let str = "aaabbbbcdddd".split("");
let result = [];
while (!!str.length) {
    result.push(str[0], str.filter((x) => x === str[0]).length);
    str.splice(0, str.filter((x) => x === str[0]).length);
}
console.log(result.join(""));

// solution
// const user_s = new String(prompt('문자열을 입력하세요'));
// let result_s = '';
// let store_s = user_s[0];
// let count = 0;

// for (let i of user_s){
//   if (i === store_s){
//     count += 1;
//   } else{
//     result_s += store_s + String(count);
//     store_s = i;
//     count = 1;
//   }
// }

// result_s += store_s + String(count);
// console.log(result_s);

console.log(`--------------------------문제62--------------------------`);

// 문제62 : 20190923출력하기
// 20190923을 출력합니다.  아래 기준만 만족하면 됩니다.
// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

let zero = "".length;
let one = "a".length;
let two = "ab".length;
let three = "abc".length;
let nine = "abcdefghi".length;
let res = [];
res.push(two, zero, one, nine, zero, nine, two, three);
console.log(res.join(""));

// solution
//abcdefgh
//20190923
// const user_s = 'aacdddddddddfffffffffgghhh';
// let result_s = '';

// console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);

console.log(`--------------------------문제63--------------------------`);

// 문제63 : 친해지고 싶어
// 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
// 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

// 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
// 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

// 입력
// 복잡한 세상 편하게 살자

// 출력
// 복세편살

// let string = prompt("공백으로 구분하여 입력해주세요.").split(" ")
// let abbreviation = ""
// for (let i = 0; i < string.length; i++) {
//     abbreviation += string[i][0]
// }
// console.log(abbreviation)

let string = "복잡한 세상 편하게 살자".split(" ");
let abbreviation = "";
for (let i = 0; i < string.length; i++) {
    abbreviation += string[i][0];
}
console.log(abbreviation);

// solution
// const user_input = prompt('문자열을 입력하세요').split(' ');
// let result = '';

// for (let s of user_input){
//   result += s.slice(0, 1);
// }

// console.log(result);

console.log(`--------------------------문제64--------------------------`);

// 문제64 : 이상한 엘레베이터
// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// 입력
// 정량 N이 입력됩니다.

// 출력
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

// let N = prompt("무게를 입력해주세요.") * 1;
// if (N % 7 === 0) {
//     console.log(N / 7);
// } else if ((N % 7) % 3 === 0) {
//     console.log(~~(N / 7) + (N - ~~(7 * ~~(N / 7))) / 3);
// } else if (N % 3 === 0) {
//     console.log(N / 3);
// } else {
//     console.log(-1);
// }

let N = 24;
if (N % 7 === 0) {
    console.log(N / 7);
} else if ((N % 7) % 3 === 0) {
    console.log(~~(N / 7) + (N - ~~(7 * ~~(N / 7))) / 3);
} else if (N % 3 === 0) {
    console.log(N / 3);
} else {
    console.log(-1);
}

// solution
// let N = parseInt(prompt('정량을 입력하세요'), 10);
// let result = 0;

// while (true){
//   if (N%7 === 0){
//     result += parseInt(N/7, 10);
//     console.log(result);
//     break;
//   }
//   N -= 3;
//   result += 1;
//   if (N < 0){
//     console.log(-1);
//     break;
//   }
// }

console.log(`--------------------------문제65--------------------------`);

// 문제65 : 변형된 리스트
// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

// let a = prompt("공백없이 문자를 입력해주세요").split("")
// let b = prompt("공백없이 문자를 입력해주세요").split("")
// let ab = [...a, ...b];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//     if ((i + 2) % 2 === 0) {
//         c.push([ab[i], ab[i + a.length]]);
//     } else {
//         c.push([ab[i + a.length], ab[i]]);
//     }
// }
// console.log(c);

// let a = "1234".split("");
// let b = "abcd".split("");
// let ab = [...a, ...b];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//     if ((i + 2) % 2 === 0) {
//         c.push([ab[i], ab[i + a.length]]);
//     } else {
//         c.push([ab[i + a.length], ab[i]]);
//     }
// }
// console.log(c);

let a = "1234".split("");
let b = "abcd".split("");
let zip = (a, b) =>
    a.map((v, i) => {
        if (i % 2 === 0) {
            return [v, b[i]];
        } else {
            return [b[i], v];
        }
    });
console.log(zip(a, b));

// solution
// 방법 1 - forEach 사용
// const a = [1, 2, 3, 4];
// const b = ['a', 'b', 'c', 'd'];
// let c = [];

// a.forEach(function(e, i){
//   if (i%2 === 0){
//     c.push([e, b[i]]);
//   } else {
//     c.push([b[i], e]);
//   }
// });

// console.log(c);

// // 방법 2 - map 사용
// const a = [1, 2, 3, 4];
// const b = ['a', 'b', 'c', 'd'];

// let c = a.map(function(e, i){
//     if(i%2 === 0){
//         return [e, b[i]];
//     } else{
//         return [b[i], e];
//     }
// });

// console.log(c);

console.log(`--------------------------문제66--------------------------`);

// 문제66 : 블럭탑쌓기
// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

// 입력
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// 출력
// ["가능", "불가능", "가능", "가능", "가능"]

let tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let rule = "ABD";
