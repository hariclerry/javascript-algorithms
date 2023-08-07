class Node {
    constructor(value) {
        this.value = value;
        this.adjacent = [];
    }
}

class Graph {
    constructor() {
        this.data = new Map();
    }

    addVertex(value) {
        const newNode = new Node(value)
        this.data.set(value, newNode.adjacent)
    }
    removeNode(value) {
        const hasVal = this.data.has(value)
        if (hasVal) {
            this.removeEdge(value);
            this.data.delete(value)
        }
        return "Not found";
    }
    addEdge(fro, to) {
        const hasVal = this.data.has(fro)
        const hasVal2 = this.data.has(to)
        if (hasVal && hasVal2) {
            this.data.get(fro).push(to);
        }
        return "Not found";
    }


    // add edge to the graph
    addEdge2(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.data.get(v).push(w);

        // Since graph is undirected,
        // add an edge from w to v also
        this.data.get(w).push(v);
    }

    removeEdge(value) {
        const hasVal = this.data.has(value)
        if (hasVal) {
            for (let [key, val] of this.data) {
                val.map((v, idx) => {
                    if (v === value) {
                        val.splice(idx, 1);
                    }
                })
            }
            this.data.delete(value)
        }
        return "Not found";
    }
    printGraph() {
        for (let [key, value] of this.data) {
            console.log(key + ' is connected with ' + value)
        }
    }

    //Depth first traversal recursive
    traverse(start) {
        let node = this.data.get(start)
        if (!node) return

        let visited = new Set();
        this.traverseHelper(visited, start)
    }

    traverseHelper(visited, startNode) {
        console.log("startNode----", startNode)
        visited.add(startNode);
        let destinations = this.data.get(startNode)

        for (let destination of destinations) {

            if (!visited.has(destination)) {
                this.traverseHelper(visited, destination)
            }
        }
    }

    //Depth first traversal iterative
    // uses stack(last-in first-out)
    // array pop()

    traverseIterative(start) {
        const stack = [start];
        const visited = new Map;

        while (stack.length) {
            let currentVertex = stack.pop();
            if (visited.has(currentVertex))
                continue;

            console.log("hereeeeee----", currentVertex)
            visited.set(currentVertex);
            for (let neighbor of this.data.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }

    }

    // Breath First traversal
    // uses queue(first-in first-out)
    // array shift()

    traverseBFIterative(start) {
        const queue = [start];
        const visited = new Map;
        while (queue.length) {
            let currentVertex = queue.shift();
            if (visited.has(currentVertex))
                continue;

            console.log("hereeeeee----", currentVertex)
            visited.set(currentVertex);
            for (let neighbor of this.data.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }

    }

    //Topological sort
    // uses DFS and stack(last-in first-out)
    // array pop()

    topologicalSort() {
        const stack = [];
        const visited = new Set();
        console.log('node', this.data)
        for (let [key, value] of this.data) {
            this.topologicalSortHelper(key, visited, stack);
        }
        const sorted = [];
        while (stack.length !== 0)
            sorted.push(stack.pop());

        return sorted;
    }

    topologicalSortHelper(node, visited, stack) {
        if (visited.has(node))
            return;

        visited.add(node);

        for (let neighbour of this.data.get(node))
            this.topologicalSortHelper(neighbour, visited, stack);

        stack.push(node);
    }


    hasCycle() {
        const visited = {};
        const recStack = {};

        for (let [key, value] of this.data) {
            if (this.hasCycleHelper(key, visited, recStack))
                return 'there is a cycle'
        }
        return 'no cycle!'
    }

    hasCycleHelper(vertex, visited, recStack) {
        if (!visited[vertex]) {
            visited[vertex] = true;
            recStack[vertex] = true;
            const nodeNeighbors = this.data.get(vertex);
            for (let neighbour of nodeNeighbors) {
                if (!visited[neighbour] && this.hasCycleHelper(neighbour, visited, recStack)) {
                    return true;
                } else if (recStack[neighbour]) {
                    return true;
                }
            }
        }
        recStack[vertex] = false;
        return false;
    }

    hasCycle1() {
        // Add all nodes
        const all = new Set(this.data.keys());
        // Keep track of all the nodes being visited and it's neighbor
        const visiting = new Set();
        // Keep track of all the nodes visited
        const visited = new Set();

        // Iterate all the nodes and pick the first node
        while (all.size !== 0) {
            let [current] = all; // Pick first node
            if (this.hasCycleHelper1(current, all, visiting, visited)) // Depth first search
                return true;
        }
        // No cycle and return false
        return false;
    }

    hasCycleHelper1(node, all, visiting, visited) {
        // remove node from all set
        all.delete(node)
        // add node to visiting set
        visiting.add(node);

        // Iterate and get neighbor
        for (let neighbour of this.data.get(node)) {
            // continue/jump to start of loop if neighbor is already visited
            if (visited.has(neighbour))
                continue;
            // Return true if neighbor is in visiting while node is also in visiting
            if (visiting.has(neighbour))
                return true;
            // Call method recursively and if it returns true, return
            if (this.hasCycleHelper1(neighbour, all, visiting, visited))
                return true;
        }

        // remove node from visiting set
        visiting.delete(node);
        // and add node to visited set
        visited.add(node);
        // If the while loop doesn't return true, return false
        return false;
    }
}

const graphV = new Graph();
graphV.addVertex('A');
graphV.addVertex('B');
graphV.addVertex('C');
graphV.addVertex('D');
graphV.addEdge('A', 'B');
graphV.addEdge('A', 'C');
graphV.addEdge('B', 'D');
graphV.addEdge('D', 'C');
// graphV.removeNode('B')
// graphV.removeEdge("C")
// graphV.printGraph()
// graphV.traverse('A')
graphV.traverseIterative('A')
// graphV.traverseBFIterative('A')
// console.log("hereee+++++", graphV.data)
