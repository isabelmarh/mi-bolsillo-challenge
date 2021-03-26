const graph = [
    //A B  C  D  E    
    [0, 5, 0, 5, 7],
    [0, 0, 4, 0, 0],
    [0, 0, 0, 8, 2],
    [0, 0, 8, 0, 6],
    [0, 3, 2, 0, 0],
];

const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const { length } = graph;
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length - 1; i++) {
        const u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] &&
                graph[u][v] !== 0 &&
                dist[u] !== INF &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
};

const minDistance = (dist, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};

console.log(dijkstra(graph, 0)); // returns 9 for A - C
//   A  B  C  D  E
//A [0, 5, 9, 5, 7]

console.log(dijkstra(graph, 2)); // returns <9 for B - B
//    A  B  C  D  E
// B [ 9007199254740991, 5, 0, 8, 2 ]