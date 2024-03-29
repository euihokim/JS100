console.log(`--------------------------문제71--------------------------`);

// 문제71 : 깊이 우선 탐색

// 깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

//       E
//   D       A
//F        C   B

// 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D F A C B

let graph = {
    E: ["D", "A"],
    F: ["D"],
    A: ["E", "C", "B"],
    B: ["A"],
    C: ["A"],
    D: ["E", "F"],
};

function dfs(graph, startNode) {
    let visited = [];
    let stack = [startNode];

    while (stack.length !== 0) {
        let node = stack.pop();
        if (!visited.includes(node)) {
            visited.push(node);
            stack = [...stack, ...graph[node].reverse()];
        }
    }
    return visited;
}
console.log(dfs(graph, "E"));

// solution
// const graph = {
//     'A': ['E', 'C', 'B'],
//     'B': ['A'],
//     'C': ['A'],
//     'D': ['E','F'],
//     'E': ['D', 'A'],
//     'F': ['D'],
//   };

//   function dfs(graph, start){
//     let visited = [];
//     let stack = [start];

//     while (stack.length !== 0){
//       let n = stack.pop();
//       if (!visited.includes(n)){
//         visited.push(n);
//         let sub = graph[n].filter(x => !visited.includes(x));
//         for(let i of sub) {
//           stack.push(i);
//         }
//       }
//     }
//     return visited;
//   }

//   console.log(dfs(graph, 'E'));

console.log(`--------------------------문제72--------------------------`);

// 문제72 : 너비 우선 탐색
// 너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

// //       E
// //   D       A
// //F        C   B

// 다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D A F C B

const graph2 = {
    E: ["D", "A"],
    F: ["D"],
    A: ["E", "C", "B"],
    B: ["A"],
    C: ["A"],
    D: ["E", "F"],
};

function bfs(graph2, startNode2) {
    let visited2 = [];
    let queue = [startNode2];

    while (queue.length !== 0) {
        let node2 = queue.shift();
        if (!visited2.includes(node2)) {
            visited2.push(node2);
            queue = [...queue, ...graph2[node2]];
        }
    }
    return visited2;
}
console.log(bfs(graph2, "E"));

// solution
// const graph = {
//     'A': ['E', 'C', 'B'],
//     'B': ['A'],
//     'C': ['A'],
//     'D': ['E','F'],
//     'E': ['D', 'A'],
//     'F': ['D'],
//   };

//   function bfs(graph, start){
//     let visited = [];
//     let queue = [start];

//     while (queue.length !== 0){
//       let n = queue.shift();
//       if (!visited.includes(n)){
//         visited.push(n);
//         let sub = graph[n].filter(x => !visited.includes(x));
//         for(let i of sub){
//           queue.push(i);
//         }
//       }
//     }
//     return visited;
//   }

//   console.log(bfs(graph, 'E'));

console.log(`--------------------------문제73--------------------------`);

// 문제73 : 최단 경로 찾기
// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터
// graph = {'A': ['B', 'C'],
//          'B': ['A', 'D', 'E'],
//          'C': ['A', 'F'],
//          'D': ['B'],
//          'E': ['B', 'F'],
//          'F': ['C', 'E']}

// 입력
// A F

// 출력
// 2

// ㅠㅠ
// const graph3 = {
//     A: ["B", "C"],
//     B: ["A", "D", "E"],
//     C: ["A", "F"],
//     D: ["B"],
//     E: ["B", "F"],
//     F: ["C", "E"],
// };

// function bfsShortestRoute(graph3, dfsStartNode) {
//     let dfsVisited = [];
//     let dfsStack = [dfsStartNode];

//     while (dfsStack.length !== 0) {
//         let dfsNode = dfsStack.pop();
//         if (!dfsVisited.includes(dfsNode)) {
//             dfsVisited.push(dfsNode);
//             dfsStack = [...dfsStack, ...graph3[dfsNode]];
//         }
//     }
//     return dfsVisited;
// }

// function dfsShortestRoute(graph3, bfsStartNode) {
//     let bfsVisited = [];
//     let bfsQueue = [bfsStartNode];

//     while (bfsQueue.length !== 0) {
//         let bfsNode = bfsQueue.shift();
//         if (!bfsStartNode.includes(bfsNode)) {
//             bfsVisited.push(bfsNode);
//             bfsQueue = [...bfsQueue, ...graph3[bfsNode]];
//         }
//     }
//     return bfsVisited;
// }

// solution
// const graph = {'A': ['B', 'C'],
//          'B': ['A', 'D', 'E'],
//          'C': ['A', 'F'],
//          'D': ['B'],
//          'E': ['B', 'F'],
//          'F': ['C', 'E']};

// const user_input = prompt('입력해주세요').split(' ');
// const start = user_input[0];
// const end = user_input[1];

// let queue = [start];
// let visited = [start];

// function solution(){
//   let count = -1;

//   while (queue.length !== 0){
//     count += 1;

//     let size = queue.length;

//     for (let i=0; i<size; i++){let node = queue.splice(0,1);
// 			if (node == end){
//                 return count;
//             }

// 			for (let next_node in graph[node]) {
//                 if (!visited.includes(graph[node][next_node])){
//                     visited.push(graph[node][next_node]);
//                     queue.push(graph[node][next_node]);

//                 }
//             }
//         }
//     }
// }
// console.log(solution());

console.log(`--------------------------문제74--------------------------`);

// 문제74 : 최장 경로 찾기
// 다음과 같이 노드의 연결 관계가 주어집니다.
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다.
// 우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
// graph = {
//     1: [2, 3, 4],
//     2: [1, 3, 4, 5, 6],
//     3: [1, 2, 7],
//     4: [1, 2, 5, 6],
//     5: [2, 4, 6, 7],
//     6: [2, 4, 5, 7],
//     7: [3, 5, 6]
// }

// 입력
// 1 7

// 출력
// 6

console.log(`--------------------------문제75--------------------------`);

// 문제75 : 이상한 369
// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

// 입력
// '93'

// 출력
// 10

// let num = prompt("숫자를 입력해주세요") * 1;
// let result = [];

// for (let i = 1; i <= num; i++) {
//     let arrNum = [...i.toString()];
//     let temp = [];

//     arrNum.forEach((x) => {
//         if (x % 3 === 0 && x !== "0") {
//             temp.push(x);
//         }
//         if (temp.join("") === i.toString()) {
//             result.push(i);
//         }
//     });
// }
// console.log(`입력: ${num.toString()}\n출력: ${result.length}`);

let num = 93;
let result = [];

for (let i = 1; i <= num; i++) {
    let arrNum = [...i.toString()];
    let temp = [];

    arrNum.forEach((x) => {
        if (x % 3 === 0 && x !== "0") {
            temp.push(x);
        }
        if (temp.join("") === i.toString()) {
            result.push(i);
        }
    });
}
console.log(`입력: ${num.toString()}\n출력: ${result.length}`);

// solution
// function sol(n){
//     let answer = 0;
//     let count = 1;
//     const d = {3 : 1, 6 : 2, 9 : 3};

//     while (n.length !== 0){
//         answer += d[parseInt(n.pop(), 10)] * count;
//         count *= 3;
//     }
//     return answer;
// }

// const user_input = new String(prompt('입력해주세요')).split('');

// console.log(sol(user_input));

console.log(`--------------------------문제76--------------------------`);

// 문제76 : 안전한 땅
// 전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다.
// 정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

// 수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

// 가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
// 각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

// 그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다.
// 0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

// 각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

// 입력
// 1
// 5 3
// 1 0 0 1 0
// 0 1 0 0 1
// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0

// 출력
// 3

// let size = prompt("수색할 도시의 크기를 입력해 주세요") * 1
// let mine = []
// let city = []

// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//      mine.push(parseInt(Math.random() * 2))
//     }
// }

// for (let i = 0; i < mine.length; i += size) {
//     city.push(mine.slice(i, i + size))
// }
// console.log(city)

// let range = prompt("수색 가능한 범위를 입력해 주세요.") * 1;
// let find = [];
// let temp = [];

// for (let i = 0; i <= city.length - range; i++) {
//     for (let j = 0; j <= city[0].length - range; j++) {
//         for (let k = 0; k < range; k++) {
//             for (let m = 0; m < range; m++) {
//                 temp.push(city[i + k][j + m])
//             }
//         }
//     }
// }

// let condition = temp.length / (range * range);
// for (let i = 0; i < condition; i++) {
//     find.push(temp.splice(0, range * range).filter((x) => x === 1).length);
// }

// find.sort((a, b) => b - a);
// console.log(
//     `입력\n테스트 케이스 수: 1\n수색할 도시의 크기: ${city.length}, 수색반이 한 번에 수색 가능한 범위: ${range}`
// );
// console.log(`지뢰밭:`, city)
// console.log(`출력\n${find[0]}`);

let city = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
];
let range = 3;
let find = [];
let temp = [];

for (let i = 0; i <= city.length - range; i++) {
    for (let j = 0; j <= city[0].length - range; j++) {
        temp.push(
            city[i + 0][j + 0],
            city[i + 0][j + 1],
            city[i + 0][j + 2],
            city[i + 1][j + 0],
            city[i + 1][j + 1],
            city[i + 1][j + 2],
            city[i + 2][j + 0],
            city[i + 2][j + 1],
            city[i + 2][j + 2]
        );
    }
}

let condition = temp.length / 9;
for (let i = 0; i < condition; i++) {
    find.push(temp.splice(0, 9).filter((x) => x === 1).length);
}

find.sort((a, b) => b - a);
console.log(
    `입력\n테스트 케이스 수: 1\n수색할 도시의 크기: ${city.length}, 수색반이 한 번에 수색 가능한 범위: ${range}`
);
console.log(`출력\n${find[0]}`);

// solution
// let 사각형 = 5;
// let 탐색가능지역 = 3;
// let 지뢰밭 = [
//   [1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0]
// ];

// let iadd = 0;
// let jadd = 0;
// let value = 0;
// let valueArray = [];
// for (let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++) {
//   for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) {
//     for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) {
//       for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) {
//         // console.log(i, j);
//         value += 지뢰밭[i][j];
//       }
//     }
//     valueArray.push(value);
//     console.log("---------");
//     value = 0;
//   }
//   console.log("!!!!!!!");
// }

// console.log(valueArray);
// console.log(Math.max.apply(null, valueArray));

console.log(`--------------------------문제77--------------------------`);

// 문제77 : 가장 긴 공통 부분 문자열
// 가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

// 예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

// 이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

// - Test Case -

// 입력
// THISISSTRINGS
// THISIS

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// TATHISISKKQQAEW

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// KIOTHIKESSISKKQQAEW

// 출력
// 3

// -

// 입력
// THISISSTRINGS
// TKHKIKSIS

// 출력
// 3

// let s1 = 'THISISSTRINGS'
// let s2 = 'ATHISIS'
// let count = 0
// let temp = 0

// for (let i = 0; i < s2.length; i++) {
//         if (s1.indexOf(s2[i]) === -1) {
//             continue
//         } else {
//             temp++
//             for (let j = i; j < s2.length; j++) {
//                if(s1[s1.split('').findIndex(x => x === s2[i]) + j] === s2[j]) {
//                    temp++
//                } else {
//                    break
//                }
//             }
//             if(count < temp) {
//             count = temp
//     }
//         }
//     }

console.log(`--------------------------문제78--------------------------`);

// 문제78 : 원형 테이블
// 기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
// 음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

// 기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
// 한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
// 하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

// 마지막으로 남는 음식은 어떤 접시인가요?

// n = 6, k = 3
//       2
// 1           3

// 6           4
//       5

// 입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
// 첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
// 첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

// 입력
// 6 3

// 남은 음식들의 번호를 배열의 형태로 출력합니다.

// 출력
// [3, 5]

// const n = prompt("음식의 개수를 입력하세요.") * 1
// const k = prompt("몇 번째의 음식을 다음 음식으로 먹을지 입력해 주세요.")

// let food = Array(n).fill(0).map((v, i) => v + i +1)

// do {
//     food.shift()
// } while (false)

// while (food.length > 2) {
//     food.splice(k - 1, 1)

//     for(let i = 1; i < k; i++) {
//         food.push(food.shift())
//     }
// }

// console.log(`입력: ${n} ${k}`)
// console.log(`출력:`, food)

const n = 6;
const k = 3;

let food = Array(n)
    .fill(0)
    .map((v, i) => v + i + 1);

do {
    food.shift();
} while (false);

while (food.length > 2) {
    food.splice(k - 1, 1);

    for (let i = 1; i < k; i++) {
        food.push(food.shift());
    }
}

console.log(`입력: ${n} ${k}`);
console.log(`출력:`, food);

// solution
// const user_input = prompt('입력해주세요').split(' ');
// const n = parseInt(user_input[0], 10);
// const k = parseInt(user_input[1], 10);

// function sol(n, k) {
//   let index = 0;
//   // q에 n만큼의 숫자를 넣어준다.
//   let q = [];
//   for(let i = 0; i < n; i++){
//     q.push(i + 1);
//   }

//   while (q.length > 2) {
//     if (index > q.length-1) {
//       // 순환하다 index가 q의 길이보다 클 경우에 q.length만큼 빼준다.
//       // [1,2,3,4,5,6] -> 1다음 4가 빠지고 그 다음은 4+3 = 7(index : 6)이 빠져야 하는데
//       // index(현재 빠져야 할 index)가 q.length보다 크므로 q.legnth, 즉 4를 빼준다.
//       // 이걸 마지막 2개가 남을 때까지 반복한다.
//       index -= q.length;
//     }

//     q.splice(index, 1);
//     index += k;
//     index -= 1;
//   }

//   return q;
// }

// console.log(sol(n, k));

console.log(`--------------------------문제79--------------------------`);

// 문제79 : 순회하는 리스트

// 다음의 값이 주어졌을 때
// l = [10, 20, 25, 27, 34, 35, 39]

// n번 순회를 결정합니다. 예를 들어 2번 순회하면
// l = [35, 39, 10, 20, 25, 27, 34]

// 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

// const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
// const n = parseInt(prompt('순회횟수는?), 10);

// function rotate(inL, inN){

// 		<빈칸을 채워주세요>
// }

// rotate(l, n)

// 입력
// 순회횟수는 : 2

// 출력
// index : 6
// value : 39, 34

// ---

// 입력
// 순회횟수는 : 3

// 출력
// index : 5
// value : 35, 25

// const l = [10, 20, 25, 27, 34, 35, 39];
// const N = parseInt(prompt("순회횟수는?"), 10);

// function rotate(inL, inN) {
//     let rotateL = [];
//     let result = [];
//     let index;

//     rotateL.push(inL);
//     rotateL = rotateL.flat();

//     for (let i = 1; i <= inN; i++) {
//         rotateL.unshift(rotateL.pop());
//     }

//     for (let i = 0; i < l.length; i++) {
//         result.push(Math.abs(inL[i] - rotateL[i]));
//     }

//     index = result.findIndex((x) => x === Math.min(...result));

//     console.log(
//         `입력\n순환횟수는 : ${inN}\n출력\nindex : ${index}\nvalue : ${inL[index]}, ${rotateL[index]}`
//     );
// }

// rotate(l, N);

const l = [10, 20, 25, 27, 34, 35, 39];
const n1 = 2;
const n2 = 3;

function rotate(inL, inN) {
    let rotateL = [];
    let result = [];
    let index;

    rotateL.push(inL);
    rotateL = rotateL.flat();

    for (let i = 1; i <= inN; i++) {
        rotateL.unshift(rotateL.pop());
    }

    for (let i = 0; i < l.length; i++) {
        result.push(Math.abs(inL[i] - rotateL[i]));
    }

    index = result.findIndex((x) => x === Math.min(...result));

    console.log(
        `입력\n순환횟수는 : ${inN}\n\n출력\nindex : ${index}\nvalue : ${inL[index]}, ${rotateL[index]}`
    );
}

rotate(l, n1);
console.log(`\n`);
rotate(l, n2);

// solution
// function rotate(a, t){
//     let b = a.slice();
//     let c = [];
//     for (let i = 0; i < t; i++){
//         b.unshift(b.pop());
//     }

//     for (let i in a){ // let i in b 로 해도됩니다.
//         c.push(Math.abs(a[i]-b[i]));
//     }

//     //최솟값
//     const m = Math.min.apply(null, c);

// 		//최솟값의 인덱스 구하기
//     let index = c.indexOf(m);

//     console.log("index :", index);
//     console.log("value :", a[index], b[index]);
// }

// const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
// const turn = prompt('순회 횟수는?');

// rotate(l, turn);

console.log(`--------------------------문제80--------------------------`);

// 문제80 : 순열과 조합
// 조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
// 순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

// 한글의 자모 24자 중 자음은 총 14개입니다.
// 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

// ‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

// 나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

// <--요구 조건-->
// 1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
// 2. 두 번째 입력으로 조합의 수가 주어집니다.
// 3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

// 입력
// ㄱ,ㄴ,ㄷ,ㄹ
// 3

// 출력
// ['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
// 4

// let input = prompt("선택할 한글 자음을 공백으로 구분하여 입력하세요.").split(" ");
// let combination = prompt("조합의 수를 입력하세요.") * 1;

// solution
// function combination(chars) {
//     let combi = [];

//     const f = (prefix, chars) => {
//       for (let i=0; i<chars.length; i++) {
//         combi.push(prefix + chars[i]);

//         f(prefix + chars[i], chars.slice(i + 1));
//       }
//     }

//     f('', chars);

//     //조합의 수에 맞는 것만 추출!
//     const result = combi.filter(x => x.length === n);
//     console.log(result);

//     return result.length;
// }

// const arr = prompt('입력해주세요').split(',');
// const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

// console.log(combination(arr));