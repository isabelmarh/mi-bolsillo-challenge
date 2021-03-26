const { graph } = require('../data/graph.js')

// @param routes is a string from A to E e.g. 'ABC', 'ADC'
// @return the distance of the routes 
function findDistance(routes) {
    let distance = 0;
    for (let i = 0; i < routes.length - 1; i++) {
        let start = routes[i];
        let next = routes[i + 1];
        let startAndNextDistance = graph[start][next];
        if (startAndNextDistance === undefined) {
            return 'NO SUCH ROUTE';
        }
        distance += startAndNextDistance;
    }
    return distance;
}

console.log(findDistance('ABC')); //returns 9 
console.log(findDistance('AD')); //returns 5 
console.log(findDistance('ADC')); //returns 13
console.log(findDistance('AEBCD')); //returns 22
console.log(findDistance('AED')); // returns NO SUCH ROUTE




