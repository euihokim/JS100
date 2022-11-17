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
