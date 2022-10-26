console.log(`--------------------------문제21--------------------------`);

// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript'); (V)
// 4)  var x = new Set(range(5));
// 5)  var x = new Set(); (V)

// 3)  var x = new Set('javascript'); (V)
let x1 = new Set("javascript");
console.log(x1);
// 5)  var x = new Set(); (V)
let x2 = new Set();
console.log(x2);

console.log(`--------------------------문제22--------------------------`);

// 문제22 : 배수인지 확인하기
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

// 1)  i / 6 == 0
// 2)  i % 6 == 0 (V)
// 3)  i & 6 == 0
// 4)  i | 6 == 0
// 5)  i // 6 == 0

// let i = prompt("숫자를 입력하세요");
// if (i % 6 === 0) {
//     console.log(`${i}은(는) 6의 배수입니다!`);
// } else {
//     console.log(i + "은(는) 6의 배수가 아닙니다!");
// }

let i = 12;
if (i % 6 === 0) {
    console.log(`${i}은(는) 6의 배수입니다!`);
} else {
    console.log(i + "은(는) 6의 배수가 아닙니다!");
}

console.log(`--------------------------문제23--------------------------`);

// 문제23 : OX문제
// console.log(10/3)의 출력 결과는 3이다.

// X : 3.3333333333333335

// why? 3.3333333333333335
// 숫자는 내부적으로 64비트 형식 IEEE-754으로 표현되기 때문에 숫자를 저장하려면 정확히 64비트가 필요. 64비트 중 52비트는 숫자를 저장하는 데 사용, 11비트는 소수점 위치를(정수는 0), 1비트는 부호를 저장하는 데 사용. but 너무 큰 수는 표현하는 데 64비트를 초과하기 때문에 Infinity로 처리.

// 참고
// console.log(9999999999999999); // 10000000000000000

console.log(10 / 3);

console.log(`--------------------------문제24--------------------------`);

// 문제24 : 대문자로 바꿔주세요!
// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 입출력

// 입력 : mary
// 출력 : MARY

// let input = prompt("이름을 입력해주세요!")
// let output = input.toUpperCase();
// console.log(`입력 : ${input}\n출력 : ${output}`)

let input = "mary";
let output = input.toUpperCase();
console.log(`입력 : ${input}\n출력 : ${output}`);

console.log(`--------------------------문제25--------------------------`);

// 문제25 : 원의 넓이를 구하세요
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// let radius = prompt("반지름을 입력하세요!");
// let area = radius * radius * Math.PI;
// console.log(`원의 넓이는 ${area.toFixed(2)}cm^2 입니다.`);

// let radius = 3;
// let area = radius * radius * Math.PI;
// console.log(`원의 넓이는 ${area.toFixed(2)}cm^2 입니다.`);

// let radius = prompt("반지름을 입력하세요!")
// function area () {
//     let area = radius * radius * Math.PI;
//     console.log(`원의 넓이는 ${area.toFixed(2)}cm^2 입니다.`)
// }
// area()

let radius = 3;
function area() {
    let area = radius * radius * Math.PI;
    console.log(`원의 넓이는 ${area.toFixed(2)}cm^2 입니다.`);
}
area();

console.log(`--------------------------문제26--------------------------`);

// 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

// let solarSystemKo = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

// let solarSystemKo = prompt("행성의 한글 이름을 입력하세요!");

// switch (solarSystemKo) {
//     case "수성":
//         console.log("Mercury");
//         break;
//     case "금성":
//         console.log("Venus");
//         break;
//     case "지구":
//         console.log("Earth");
//         break;
//     case "화성":
//         console.log("Mars");
//         break;
//     case "목성":
//         console.log("Jupiter");
//         break;
//     case "토성":
//         console.log("Saturn");
//         break;
//     case "천왕성":
//         console.log("Uranus");
//         break;
//     case "해왕성":
//         console.log("Neptune");
//         break;
//     default:
//         console.log("올바른 행성을 입력하세요.")
// }

let solarSystemKo = "지구";

switch (solarSystemKo) {
    case "수성":
        console.log("Mercury");
        break;
    case "금성":
        console.log("Venus");
        break;
    case "지구":
        console.log("Earth");
        break;
    case "화성":
        console.log("Mars");
        break;
    case "목성":
        console.log("Jupiter");
        break;
    case "토성":
        console.log("Saturn");
        break;
    case "천왕성":
        console.log("Uranus");
        break;
    case "해왕성":
        console.log("Neptune");
        break;
    default:
        console.log("올바른 행성을 입력하세요.");
}

// solution
// const planets = {
// 	'수성' : 'Mercury',
// 	'금성' : 'Venus',
// 	'지구' : 'Earth',
// 	'화성' : 'Mars',
// 	'목성' : 'Jupiter',
// 	'토성' : 'Saturn',
// 	'천왕성' : 'Uranus',
// 	'해왕성' : 'Neptune',
// };

// const name = prompt("행성의 이름을 입력하세요.");

// console.log(planets[name]);

console.log(`--------------------------문제27--------------------------`);

// 문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

// let studentName = prompt("공백으로 구분하여 학생의 이름들을 입력해주세요.");
// let studentScore = prompt("공백으로 구분하여 학생의 점수들을 입력해주세요.");
// let name_ = studentName.split(" ");
// let score_ = studentScore.split(" ");

// let obj = {}

// for (let i = 0; i < name_.length; i++) {
//     obj[name_[i]] = score_[i] * 1
// }
// console.log(obj)

let studentName = "Yujin Hyewon";
let studentScore = "70 100";
let name_ = studentName.split(" ");
let score_ = studentScore.split(" ");

let obj = {};

for (let i = 0; i < name_.length; i++) {
    obj[name_[i]] = score_[i] * 1;
}
console.log(obj);

console.log(`--------------------------문제28--------------------------`);

// 문제28 : 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// let input_ = prompt("단어를 입력해주세요.");
// (function _2_gram() {
//     for (let i = 0; i < input_.length - 1; i++) {
//         let output_ = "";
//         output_ = `${input_[i]} ${input_[i + 1]}`;
//         console.log(output_);
//     }
// })();

// IIFE
let input_ = "Javascript";
(function _2_gram() {
    for (let i = 0; i < input_.length - 1; i++) {
        // let output_ = "";
        // output_ = `${input_[i]} ${input_[i + 1]}`;
        console.log(`${input_[i]} ${input_[i + 1]}`);
    }
})();

// solution
// const data = prompt("문자를 입력하세요.");

// for (let i = 0; i < data.length - 1; i++) {
//     console.log(data[i], data[i + 1]);
// }

console.log(`--------------------------문제29--------------------------`);

// 문제29 : 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

// let alphabetInput = prompt("알파벳을 하나만 입력해주세요");
// if (alphabetInput === alphabetInput.toUpperCase()) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// case1
let alphabetInput = "A";
if (alphabetInput === alphabetInput.toUpperCase()) {
    console.log("YES");
} else {
    console.log("NO");
}

// case2
// let alphabetInput = "a";
// if (alphabetInput === alphabetInput.toUpperCase()) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

console.log(`--------------------------문제30--------------------------`);

// 문제30 : 문자열 속 문자 찾기

// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

// let txt = prompt("문장을 입력해주세요.");
// let find = prompt("찾을 문자를 입력해주세요.");
// console.log(txt.indexOf(find))
// if (txt.indexOf(find) !== -1) {
//     console.log(
//         `찾으시는 문자는 입력해주신 문장의 ${
//             txt.indexOf(find) + 1
//         }번째부터 시작합니다.`
//     );
// } else {
//     console.log("문자를 찾을 수 없습니다.");
// }

let txt = "pineapple is yummy";
let find = "apple";
console.log(txt.indexOf(find));
// if (txt.indexOf(find) !== -1) {
//     console.log(
//         `찾으시는 문자는 입력해주신 문장의 ${
//             txt.indexOf(find) + 1
//         }번째부터 시작합니다.`
//     );
// } else {
//     console.log("문자를 찾을 수 없습니다");
// }
