console.log(`--------------------------문제11--------------------------`);

// 문제11 : for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

let sum_ = 0;

//pass
for (let i = 1; i <= 100; i++) {
    sum_ = sum_ + i;
}

console.log(sum_);

console.log(`--------------------------문제12--------------------------`);

// 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

// 데이터
// 여기에 class를 작성하세요.

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 출력
// 545 210 10
// 파이어볼

// 여기에 class를 작성하세요.
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

console.log(`--------------------------문제13--------------------------`);

// 문제13 : 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력

// 입력 : 1
// 출력 : 수성

// let order = prompt();
// const solarSystem = [
//     "수성",
//     "금성",
//     "지구",
//     "화성",
//     "목성",
//     "토성",
//     "천왕성",
//     "해왕성",
// ];

// console.log(solarSystem[order-1]);

let order = 1;
const solarSystem = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
];

console.log(solarSystem[order - 1]);

console.log(`--------------------------문제14--------------------------`);

// 문제14 : 3의 배수 인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

// 입력으로 랜덤한 숫자 n이 주어집니다.

// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

// 입출력

// 입력 : 3
// 출력 : 짝

// 입력 : 2
// 출력 : 2

// let ranNum = parseInt(prompt())
// if (ranNum % 3 === 0) {
//     console.log("짝")
// } else {
//     console.log(ranNum);
// }

let ranNum1 = 3;
if (ranNum1 % 3 === 0) {
    console.log("짝");
} else {
    console.log(ranNum1);
}

let ranNum2 = 2;
if (ranNum2 % 3 === 0) {
    console.log("짝");
} else {
    console.log(ranNum2);
}

console.log(`--------------------------문제15--------------------------`);

// 문제15 : 자기소개
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게
// 해주세요.

// 입출력

// 입력 : 김다정
// 출력 : 안녕하세요. 저는 김다정입니다.

// let name_ = prompt();
let name_ = "김다정";
console.log(`안녕하세요. 저는 ${name_}입니다.`);

console.log(`--------------------------문제16--------------------------`);

// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

// sol 1
// let input = prompt();
// input = input.split("")
// let output = "";
// for (let i = input.length; i > 0; i--) {
//     output += input.splice(-1);
// }
// console.log(output)

// sol 2
// let input = prompt();
// input = input.split("")
// let output = input.reverse()
// output = output.join("")
// console.log(output)

// sol3
let input = "거꾸로";
let output = "";
for (let i = input.length - 1; i >= 0; i--) {
    output += input[i];
}
console.log(output);

// solution
// const n = prompt('입력하세요.');

// const reverseString = n.split('').reverse().join('');
// /*
// * split() 메서드는 문자열을 배열로 만들어 반환하고,
// * reverse() 메서드는 배열의 순서를 반전하며,
// * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
// */
// console.log(reverseString);

console.log(`--------------------------문제17--------------------------`);

// 문제17 : 놀이기구 키 제한
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// Q : height 문자열로 할당 받았는데 if 조건문이 어떻게 정상 작동?
// A : 비교 연산자가 형변환 일으켰기 때문에

// let height = prompt("키를 입력하세요!");
// if (height > 150) {
//     console.log("YES")
// }else {
//     console.log("NO")
// }

let height1 = 160;
if (height1 > 150) {
    console.log("YES");
} else {
    console.log("NO");
}

let height2 = 140;
if (height2 > 150) {
    console.log("YES");
} else {
    console.log("NO");
}

console.log(`--------------------------문제18--------------------------`);
// 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

// let score = prompt().split(" ");
// let sum = 0;
// score.forEach((score) => {
//     sum += score * 1;
// });
// console.log(Math.floor(sum / score.length));

let score = "20 30 40".split(" ");
let sum = 0;
score.forEach((score) => {
    sum += score * 1;
});
console.log(Math.floor(sum / score.length));

console.log(`--------------------------문제19--------------------------`);
// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

// let num = prompt().split(" ");
// let aToThePowerOfB = num[0] ** num[1]
// console.log(aToThePowerOfB);

let num1 = "2 3".split(" ");
let aToThePowerOfB = num1[0] ** num1[1];
console.log(aToThePowerOfB);

// solution
// const n = prompt('수를 입력하세요.').split(' ');

// console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

console.log(`--------------------------문제20--------------------------`);

// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력

// 입력 : 10 2
// 출력 : 5 0

// let num2 = prompt().split(" ");
// let quotient = Math.floor(num2[0] / num2[1]);
// let remainder = num2[0] % num2[1];
// console.log(` 몫 : ${quotient} 나머지 : ${remainder}`);

let num2 = "10 2".split(" ");
let quotient = Math.floor(num2[0] / num2[1]);
let remainder = num2[0] % num2[1];
console.log(`${quotient} ${remainder}`);
