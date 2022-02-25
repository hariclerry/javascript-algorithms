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

    //Not working as expected, check dijkstraGraph.js
    hasCycle() {
        const visited = new Map();

        for (let node of this.data.values()) {
            // console.log("hereeee----", node)
            if (!visited.has(node) &&
                this.hasCycleHelper(node, null, visited))
                return true;
        }

        return false;
    }

    //Not working as expected, check dijkstraGraph.js
    hasCycleHelper(node, parent, visited) {
        visited.set(node);

        for (let edgy of this.data.values()) {
            for (let edge in edgy) {
                if (edgy[edge].to == parent)
                    continue;

                if (visited.has(edgy[edge].to) ||
                    this.hasCycleHelper(edgy[edge].to, node, visited))
                    return true;
            }
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