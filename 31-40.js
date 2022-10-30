console.log(`--------------------------문제31--------------------------`);

// 문제31 : 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice() (V)
// 4)  arr.pop()
// 5)  arr.includes(5) (V)

console.log(`3, 5는 O(n)의 시간복잡도를 갖는다.`);

console.log(`--------------------------문제32--------------------------`);

// 문제32 : 문자열 만들기
// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.

// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

// 입출력

// 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5

// let input = prompt("자기소개를 작성해주세요.");
// console.log(input.split(" ").filter(x => x!=="").length)

let input = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(input.split(" ").filter((x) => x !== "").length);

console.log(`--------------------------문제33--------------------------`);

// 문제33 : 거꾸로 출력하기
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// function reverseNum() {
//     let input = prompt("숫자를 입력해주세요");
//     console.log(`입력 : ${input}\n출력 : ${input.split("").reverse().join("")}`);
// };
// reverseNum()
// reverseNum()

(function reverseNum() {
    let input1 = "1 2 3 4 5";
    let input2 = "2 4 6 7 8";
    console.log(
        `입력 : ${input1}\n출력 : ${input1.split(" ").reverse().join(" ")}`
    );
    console.log(
        `입력 : ${input2}\n출력 : ${input2.split(" ").reverse().join(" ")}`
    );
})();

console.log(`--------------------------문제34--------------------------`);

// 문제34 : sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

// let height = prompt("공백으로 구분하여 키를 입력하세요").split(" ");
// let i = 0
// while (i < height.length - 1) {
//     for (i = 0; i < height.length - 1; i++) {
//         if (height[i] > height[i + 1]) {
//             height.splice(i, 0, height.splice(i + 1, 1).toString());
//         }
//     }
//     i++
// }
// console.log(height.join(" "));

// let height = prompt("공백으로 구분하여 키를 입력하세요").split(" ")
// // Q 왜 변수를 선언하지 않아도 정상적으로 작동할까?
// let temp
// for (let j = 0; j < height.length - 1; j++) {
//     for (let i = 0; i < height.length - 1; i++) {
//         if (height[i] > height[i + 1]) {
//             temp = height[i];
//             height[i] = height[i + 1];
//             height[i + 1] = temp;
//         }
//     }
// }
// console.log(height.join(" "));

// solution
// const unsorted = prompt('키를 입력하세요');
// let sorted = "";

// sorted = unsorted
//   .split(" ")
//   .sort(function(a, b) {
//     return a - b;
//   })
//   .join(" ");

// if (unsorted === sorted) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const unsorted = "176 156 155 165 166 169";
let sorted = "";

sorted = unsorted
    .split(" ")
    .sort(function (a, b) {
        return a - b;
    })
    .join(" ");

if (unsorted === sorted) {
    console.log(`입력 : ${sorted}\n출력 : YES`);
} else {
    console.log(`입력 : ${unsorted}\n출력 : NO`);
}

console.log(`--------------------------문제35--------------------------`);

// 문제35 : Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n) {
    function two(value) {
        return Math.pow(value, n);
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

console.log(`--------------------------문제36--------------------------`);

// 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

// let inputNum = prompt("1 ~ 9 사이의 숫자를 입력하세요");
// let timesTable = [];
// for (let i = inputNum; i <= inputNum; i++) {
//     for (let j = 1; j <= 9; j++) {
//         timesTable.push(`${i * j}`);
//     }
// }
// console.log(`입력 : ${inputNum}\n출력 : ${timesTable.join(" ")}`);

let inputNum = "2";
let timesTable = [];
for (let i = inputNum; i <= inputNum; i++) {
    for (let j = 1; j <= 9; j++) {
        timesTable.push(`${i * j}`);
    }
}
console.log(`입력 : ${inputNum}\n출력 : ${timesTable.join(" ")}`);

// solution
// const num = prompt("1 ~ 9까지의 숫자 중 하나를 입력하세요.");
// let result = "";

// for (let i = 1; i <= 9; i++) {
//     result += i * num + " ";
// }

// console.log(result);

console.log(`--------------------------문제37--------------------------`);

// 문제37 : 반장 선거
// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

let inputName = prompt("뽑힌 후보들을 공백으로 구분하여 입력하세요")
    .split(" ")
    .sort();
let count = 0;
for (let i = 0; i < inputName.length - 1; i++) {
    if (inputName[i] === inputName[i + 1]) {
        count++;
    } else {
        break;
    }
}
console.log(count + 1);

console.log(`--------------------------문제38--------------------------`);

// 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// let score = prompt("공백으로 구분하여 점수를 입력해주세요!")
// let arrScore = score.split(" ").sort((a, b) => b - a);
// let first = arrScore.filter(x => x === arrScore[0]);
// let second = arrScore.filter(x => x === arrScore[first.length]);
// let third = arrScore.filter(x => x === arrScore[`${first.length + second.length}`])
// console.log(`입력 : ${score}\n출력 : ${first.length + second.length + third.length}`)

let score = "97 86 75 66 55 97 85 97 97 95";
let arrScore = score.split(" ").sort((a, b) => b - a);
let first = arrScore.filter((x) => x === arrScore[0]);
let second = arrScore.filter((x) => x === arrScore[first.length]);
let third = arrScore.filter(
    (x) => x === arrScore[`${first.length + second.length}`]
);
console.log(
    `입력 : ${score}\n출력 : ${first.length + second.length + third.length}`
);

// solution
// const scores = prompt("점수입력")
//     .split(" ")
//     .map(function (n) {
//         return parseInt(n, 10);
//     });

// scores.sort((a, b) => {
//     return a - b;
// });

// let count = 0;
// let arr = [];

// while (arr.length < 3) {
//     let n = scores.pop();
//     if (!arr.includes(n)) {
//         arr.push(n);
//     }
//     count += 1;
// }

// console.log(count);

console.log(`--------------------------문제39--------------------------`);

// 문제39 : 오타 수정하기
// 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다.

// 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다.
// 혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

// 입출력

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// let sentence = prompt('문장을 입력해주세요')
// console.log(`입력 : ${sentence}\n출력 : ${sentence.replace(/q/g, "e")}`)

let sentence = "hqllo my namq is hyqwon";
console.log(`입력 : ${sentence}\n출력 : ${sentence.replace(/q/g, "e")}`);

// solution
//0.
// const word = prompt('입력하세요.');
// console.log(word.split("q").join("e"));
//1. 함수 사용
// const word = prompt('입력하세요.');

// function replaceAll(str, searchStr, replaceStr) {
//    return str.split(searchStr).join(replaceStr);
// }

// console.log(replaceAll(word,"q","e"));

// //2. 정규식 사용
// const word = prompt('입력하세요.');

// console.log(word.replace(/q/gi, 'e'));

console.log(`--------------------------문제40--------------------------`);

// 문제40 : 놀이동산에 가자
// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

// let weightLimit = prompt("제한 무게를 입력해주세요");
// let headCount = prompt("탑승인원을 입력해주세요")
// let weight = prompt("탑승인원의 무게를 공백으로 구분하여 입력하세요")
// let arrWeight = weight.split(" ")
// let arrWeightCount = []
// for (let i = 0; i < arrWeight.length; i++) {
//     if (arrWeight[i] <= 50) {
//     arrWeightCount.push(arrWeight.shift())
//     }
// }

// console.log(`입력 : \n${weightLimit}\n${headCount}\n${weight}\n출력 : ${arrWeightCount.length}`)
