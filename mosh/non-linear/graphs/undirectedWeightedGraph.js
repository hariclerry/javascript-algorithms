class Node {
    constructor(value) {
        this.value = value;
        this.adjacencyList = [];
        // this.edges = new Map;
    }

    addAdjacent(node) {
        // const newEdge = this.edges.set() 
        this.adjacencyList.push(node);
    }
}

class Edge {
    constructor(source, destination, weight) {
        this.from = source;
        this.to = destination;
        this.weight = weight;
    }
}

class WeightedGraph {
    constructor() {
        this.data = new Map();
    }

    // Add node/vertex
    addNode(value) {
        const newNode = new Node(value);
        this.data.set(value, newNode.adjacencyList);
    }

    // Add edges
    addEdges(source, destination, weight) {
        const newEdgeSource = new Edge(source, destination, weight)
        const newEdgeDestination = new Edge(destination, source, weight)
        const sourceNode = this.data.has(source);
        const destinationNode = this.data.has(destination);

        if (sourceNode && destinationNode) {
            this.data.get(source).push(newEdgeSource)
            this.data.get(destination).push(newEdgeDestination)
        }
    }

    hasCycle() {
        const visited = new Map();

        for (let [key, value] of this.data) {
            if (!visited.has(key) &&
                this.hasCycleHelper(key, null, visited))
                return true;
        }

        return false;
    }

    hasCycleHelper(node, parent, visited) {
        visited.set(node);

        for (let edge of this.data.get(node)) {
            if (edge.to === parent)
                continue;

            if (visited.has(edge.to) ||
                this.hasCycleHelper(edge.to, node, visited))
                return true;
        }

        return false;
    }

    // Print graph edges
    printGraph() {
        for (let [key, value] of this.data) {
            value.forEach(element => {
                console.log(element.from, "to", element.to);
            });
        }
    }
}

const graphV = new WeightedGraph();
graphV.addNode('A');
graphV.addNode('B');
graphV.addNode('C');
// graphV.addVertex('D');
graphV.addEdges('A', 'B', 0);
graphV.addEdges('B', 'C', 0);
// graphV.addEdge('B', 'D');
// graphV.addEdge('D', 'C');
// graphV.traverseIterative('A')
// graphV.hasCycle()

console.log("hereee+++++", graphV.hasCycle())