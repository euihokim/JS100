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
let match = [];
for (let i of tower) {
    match.push(i.match(/A|B|D/g));
}
for (let i = 0; i < match.length; i++) {
    if (match[i] === null || match[i].join("") === match[i].sort().join("")) {
        console.log("가능");
    } else {
        console.log("불가능");
    }
}

// solution
// function solution(전체블록, 규칙){
//     let answer = [];
//     for (let 부분블록 of 전체블록){
//       answer.push(블록순서체크(부분블록, 규칙));
//     }
//     return answer;
//   }

//   function 블록순서체크(부분블록, 규칙){
//     let 임시변수 = 규칙.indexOf(규칙[0]);
//     for (let 문자 of 부분블록){
//       if (규칙.includes(문자)){
//         if (임시변수 > 규칙.indexOf(문자)){
//           return '불가능';
//         }
//         임시변수 = 규칙.indexOf(문자);
//       }
//     }
//     return '가능';
//   }

//   const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
//   const 규칙 = 'ABCD';

//   console.log(solution(전체블록, 규칙));
//   //["가능", "불가능", "가능", "가능", "불가능"]

console.log(`--------------------------문제67--------------------------`);

// 문제67 : 민규의 악수
// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
// 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
// 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
// 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

// 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

// 입력
// 59

// 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]

// let input = prompt("행사에서 진행된 악수 횟수(n)를 입력하세요.") * 1;
// let multiply = 0;
// let num = 1;
// for(let n = 1; n < Infinity; n++) {
//         multiply = (n * (n-1))/2
//         if (input < multiply){
//                 --n
//                 multiply = (n * (n-1))/2
//             break
//         }
//     ++num
//     }
// console.log(`악수횟수: ${input - multiply} 행사 참가자 수: ${num}`)

let input = "59" * 1;
let multiply = 0;
let num = 1;
for (let n = 1; n < Infinity; n++) {
    multiply = (n * (n - 1)) / 2;
    if (input < multiply) {
        --n;
        multiply = (n * (n - 1)) / 2;
        break;
    }
    ++num;
}
console.log(
    `입력: ${input}\n악수횟수: ${input - multiply} 행사 참가자 수: ${num}`
);

// solution
// function solution(n){
//     let 사람 = 0;
//     let 총악수 = 0;
//     let temp = 0;
//     while(true){
//       총악수 = parseInt((사람*(사람-1))/2, 10);
//       if(n < 총악수){
//         break;
//       }
//       temp = 총악수;
//       사람 += 1;
//     }
//     return [parseInt(n-temp, 10), 사람];
//   }

//   const 악수의수 = 59;
//   console.log(solution(악수의수));

console.log(`--------------------------문제68--------------------------`);

// 문제68 : 버스 시간표
// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

// let bus = prompt("버스 시간표를 공백으로 구분하여 입력해 주세요. ex) 09:30 10:00 10:30").split(" ");
// let now = prompt("현재 시간을 입력해 주세요. ex) 09:40");
// now = now.split(":")
// let result = []
// let busSchedule = []
// bus.forEach(x => {
//     busSchedule.push(x.split(":"))
// })

// for (let i = 0; i < bus.length; i++) {
//     let diff = (((busSchedule[i][0] * 60) + (busSchedule[i][1] * 1)) - ((now[0] * 60) + (now[1] * 1)))
//     let hour = ~~(diff / 60)
//     let min = (diff % 60)
//     if (diff >= 0) {
//         result.push(`${hour.toString().padStart(2, 0)}시간 ${min.toString().padStart(2, 0)}분`)
//     } else {
//         result.push(`지나갔습니다`)
//     }
// }

// console.log(result)

let bus = ["12:30", "13:20", "14:13"];
let now = ["12:40"];
now = now.join("").split(":");
let output = [];
let busSchedule = [];
bus.forEach((x) => {
    busSchedule.push(x.split(":"));
});

for (let i = 0; i < bus.length; i++) {
    let diff =
        busSchedule[i][0] * 60 +
        busSchedule[i][1] * 1 -
        (now[0] * 60 + now[1] * 1);
    let hour = ~~(diff / 60);
    let min = diff % 60;
    if (diff >= 0) {
        output.push(
            `${hour.toString().padStart(2, 0)}시간 ${min
                .toString()
                .padStart(2, 0)}분`
        );
    } else {
        output.push(`지나갔습니다`);
    }
}
console.log(output);

// solution
// function solution(버스시간, 기준시간){
//     let answer = [];
//     기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
//     기준시간 = (기준시간[0] * 60) + 기준시간[1];

//     for (let i in 버스시간){
//       let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
//       time = (time[0] * 60) + time[1];

//       if (time < 기준시간){
//         answer.push('지나갔습니다');
//       } else{
//         let 시간 = parseInt((time - 기준시간) / 60, 10);
//         let 분 = (time - 기준시간) % 60;
//         answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
//       }
//     }
//     return answer;
//   }

//   console.log(solution(["12:30", "13:20", "14:13"], "12:40"));

console.log(`--------------------------문제69--------------------------`);

// 문제69 : 골드바흐의 추측
// 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

// 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

// 예)
// 100 == 47 + 53
// 56 == 19 + 37

// 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요.

// * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

// let num = prompt('2보다 큰 짝수를 n을 입력해주세요.') * 1
// let numLessThan = (num / 2) - 1
// let numMoreThan = (num / 2) + 1

// let nLT = []
// let nMT = []
// let result = []

// while(numLessThan > 1) {
//     if((numLessThan % 2 !== 0) && (numLessThan % 3 !== 0) && (numLessThan % 5 !== 0) && (numLessThan % 7 !== 0)) {
//         nLT.push(numLessThan)
//     }
//     --numLessThan
// }

// while(numMoreThan <= num) {
//     if((numMoreThan % 2 !== 0) && (numMoreThan % 3 !== 0) && (numMoreThan % 5 !== 0) && (numMoreThan % 7 !== 0)) {
//         nMT.push(numMoreThan)
//     }
//     ++numMoreThan
// }

// for (let i = 0; i < (num / 2) - 1; i++) {
//     if (nLT[i] + nMT[i] === 50) {
//         result.push(`${num} = ${nLT[i]} + ${nMT[i]}`)
//     }
// }

// console.log(result)
