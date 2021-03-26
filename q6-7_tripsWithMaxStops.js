//@param key cities A-E
//@param adjacent - routes connecting cities
function GraphCityNode(key) {
    this.key = key; // 
    this.adjacent = []; // 
}

// @param source/destination: string from A to E
// @param maxStops: integer e.g. 3
// @return numberOfRoutes between a source and destination with maxStop constraint
function numberOfRoutes(source, destination, maxStops) {
    let totalRoutes = 0;
    const visited = new Set()

    // recursion/backtracking starts at source city, currentStop is 0 
    function recursionFn(cityNode, currentStop) {
        if (visited.has(cityNode.key))
        return;
        if (currentStop === maxStops) {
            totalRoutes += cityNode.key === destination.key;
            return
        }
        // visit every neighbor city 
        cityNode.adjacent.forEach(neighborCity => {
        recursionFn(neighborCity, currentStop + 1)
        })
    }
    recursionFn(source, 0 -1);
    return totalRoutes;
}

let graphCityNodeA = new GraphCityNode('A')
let graphCityNodeB = new GraphCityNode('B')
let graphCityNodeC = new GraphCityNode('C')
let graphCityNodeD = new GraphCityNode('D')
let graphCityNodeE = new GraphCityNode('E')
graphCityNodeA.adjacent.push(graphCityNodeB)
graphCityNodeA.adjacent.push(graphCityNodeD)
graphCityNodeA.adjacent.push(graphCityNodeE)
graphCityNodeB.adjacent.push(graphCityNodeC)
graphCityNodeC.adjacent.push(graphCityNodeD)
graphCityNodeC.adjacent.push(graphCityNodeE)
graphCityNodeD.adjacent.push(graphCityNodeC)
graphCityNodeD.adjacent.push(graphCityNodeE)
graphCityNodeE.adjacent.push(graphCityNodeB)

console.log('numberOfRoutes', numberOfRoutes(graphCityNodeC, graphCityNodeC, 3));
// returns numberOfRoutes 2
console.log('numberOfRoutes', numberOfRoutes(graphCityNodeA, graphCityNodeC, 4))
// returns numberOfRoutes 3

