// Adjacency List as a Hashmap
// const graph = {
//     a: ['a', 'b'],
//     b: ['c'],
//     c: ['d'],
//     d: ['b', 'c']
// }

class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = []; // adjacency list
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacents() {
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}


// tag::constructor[]
/**
 * Graph data structure implemented with an adjacent list
 */
class Graph {
    /**
     * Initialize the nodes map
     * @param {Symbol} edgeDirection either `Graph.DIRECTED` or `Graph.UNDIRECTED`
     */
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }
    // end::constructor[]

    // tag::addVertex[]
    /**
     * Add a node to the graph.
     * Runtime: O(1)
     * @param {any} value node's value
     * @returns {Node} the new node or the existing one if it already exits.
     */
    addVertex(value) {
        if (this.nodes.has(value)) { // <1>
            return this.nodes.get(value);
        }
        const vertex = new Node(value); // <2>
        this.nodes.set(value, vertex); // <3>
        return vertex;
    }
    // end::addVertex[]

    // tag::removeVertex[]
    /**
     * Removes node from graph
     * It also removes the reference of the deleted node from
     *  anywhere it was adjacent to.
     * Runtime: O(|V|) because adjacency list is implemented with a HashSet.
     * It were implemented with an array then it would be O(|V| + |E|).
     * @param {any} value node's value
     */
    removeVertex(value) {
        const current = this.nodes.get(value); // <1>
        if (current) {
            Array.from(this.nodes.values()).forEach((node) => node.removeAdjacent(current)); // <2>
        }
        return this.nodes.delete(value); // <3>
    }
    // end::removeVertex[]

    // tag::addEdge[]
    /**
     * Create a connection between the source node and the destination node.
     * If the graph is undirected, it will also create the link from destination to source.
     * If the nodes don't exist, then it will make them on the fly.
     * Runtime: O(1)
     * @param {any} source
     * @param {any} destination
     * @returns {[Node, Node]} source/destination node pair
     */
    addEdge(source, destination) {
        const sourceNode = this.addVertex(source); // <1>
        const destinationNode = this.addVertex(destination); // <1>

        sourceNode.addAdjacent(destinationNode); // <2>

        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode); // <3>
        }

        return [sourceNode, destinationNode];
    }
    // end::addEdge[]

    // tag::removeEdge[]
    /**
     * Remove the connection between source node and destination.
     * If the graph is undirected, it will also create the link from destination to source.
     *
     * Runtime: O(1): implemented with HashSet.
     * If implemented with array, would be O(|E|).
     *
     * @param {any} source
     * @param {any} destination
     */
    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);

            if (this.edgeDirection === Graph.UNDIRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }

        return [sourceNode, destinationNode];
    }
    // end::removeEdge[]

    // tag::areAdjacents[]
    /**
     * True if two nodes are adjacent.
     * @param {any} source node's value
     * @param {any} destination node's value
     */
    areAdjacents(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if (sourceNode && destinationNode) {
            return sourceNode.isAdjacent(destinationNode);
        }

        return false;
    }
    // end::areAdjacents[]

    //Depth first traversal recursive
    traverse(start) {
        let node = this.nodes.get(start)
        if (!node) return

        let visited = new Set();
        this.traverseHelper(visited, start)
    }

    traverseHelper(visited, startNode) {
        console.log("startNode----", startNode)
        visited.set(startNode);
        let destinations = this.nodes.get(startNode)

        for (let destination of destinations.adjacents) {
            if (destination.value === 'Z') {
                return;
            }

            if (!visited.has(destination.value)) {
                this.traverseHelper(visited, destination.value)
            }
        }
    }
}

const graphV = new Graph();
graphV.addVertex('A');
// graphV.addVertex('A');
graphV.addVertex('B');
graphV.addVertex('C');
graphV.addVertex('D');
graphV.addEdge('A', 'C');
graphV.addEdge('D', 'C');
graphV.addEdge('A', 'D');
// graphV.removeNode('B')
// graphV.removeEdge("C")
// graphV.printGraph()
graphV.traverse('A')
// console.log("hereee+++++", graphV.nodes.get('A'))