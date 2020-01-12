// Given a matrix of direction with L, R, U, D, at any point you can move to the direction which is written over the cell[i, j].We have to tell minimum number of modifications to reach from[0, 0] to[N - 1, M - 1].

// Example : -
//         R R D
//         L L L
//         U U R
// Answer is 1, we can modify cell[1, 2] from L To D.


// ------------------------------------------------------------------------------
// Primitive types in JS: null, undefined, str, number, boolean, BIG INT
// Goal: write a recur func that travels through all possible paths from top left to bottom right.
// Only possible moves are right or down.
function traverse(graph, row = 0, col = 0, visited = new Set()){
    // if we are at the bottom right position
    const pos = row + ',' + col;

   
    // if we have already visited this position, stop (prevent cycles)
    if (visited.has(pos)) return 0;

    // if we are at the bottom right pos, we are done; return
    if (row === graph.length - 1 && col === graph[0].length  - 1) return 1;
    // if we are out of bounds,return
    if (col < 0 || col >= graph[0].length) return 0;
    if (row < 0 || row >= graph.length) return 0;
    
    visited.add(pos);
    
    let numWays = 0;
    // move right
    // use set to make a copy of the visited set b/c same visited nodes in different paths is ok but not in the same path itself
    // still want to the visited nodes that led to current node
    numWays += traverse(graph, row, col + 1, new Set(visited));
    
    // move down
    numWays += traverse(graph, row + 1, col, new Set(visited));
    
    // move up
    numWays += traverse(graph, row - 1, col, new Set(visited));

    // move left
    numWays += traverse(graph, row, col - 1, new Set(visited));
    
    return numWays;
}


// // n * m grid
graph_1 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],

];

console.log(traverse(graph_1));


graph_2 = [
    ['L', 'L', 'L', 'L'],
    ['L', 'W', 'W', 'L'],
    ['L', 'L', 'L', 'L'],
    ['L', 'W', 'W', 'L'],
    ['L', 'L', 'L', 'L'],

];



function traverse_walk(graph, row = 0, col = 0, visited = new Set(), memo={}) {
    // if we are at the bottom right position
    const pos = row + ',' + col;
     if (pos in memo) return memo[pos];
    // if we have already visited this position, stop (prevent cycles)
   
    if (visited.has(pos)) return 0;

    // if we are at the bottom right pos, we are done; return
    if (row === graph.length - 1 && col === graph[0].length - 1) return 1;
    // if we are out of bounds,return
    if (col < 0 || col >= graph[0].length) return 0;
    if (row < 0 || row >= graph.length) return 0;
    if (graph[row][col] === 'W') return 0;

    visited.add(pos);

    let numWays = 0;
    // move right
    // use set to make a copy of the visited set b/c same visited nodes in different paths is ok but not in the same path itself
    // still want to the visited nodes that led to current node
    numWays += traverse_walk(graph, row, col + 1, new Set(visited), memo);

    // move down
    numWays += traverse_walk(graph, row + 1, col, new Set(visited), memo);

    // move up
    numWays += traverse_walk(graph, row - 1, col, new Set(visited), memo);

    // move left
    numWays += traverse_walk(graph, row, col - 1, new Set(visited), memo);
    memo[pos] = numWays;
    return numWays;
}

// console.log(traverse_walk(graph_2));

graph_3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L']
]

console.log(traverse_walk(graph_3));