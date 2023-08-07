class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.len = 0;
    }

    // Recursive solution1;

    // insertIter = data => {
    //     const newNode = new Node(data);
    //     if (!this.root) {
    //         this.root = newNode;
    //     } else {
    //         this.insertNode(this.root, newNode)
    //     }
    // }

    // insertNode(node, newNode) {
    //     if (newNode.data < node.data) {
    //         if (node.left === null) {
    //             node.left = newNode;
    //         } else {
    //             this.insertNode(node.left, newNode);
    //         };
    //     } else {
    //         if (node.right === null) {
    //             node.right = newNode;
    //         } else {
    //             this.insertNode(node.right, newNode);
    //         };
    //     };
    // };

    insertNode = value => {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                }
                current = current.right
            }
        }
    }

    searchIter = value => {
        let current = this.root;

        while (current) {
            if (value === current.data) {
                return true;
            } else if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Preorder Depth First traversal (Root, Left, Right)
    preOrderTraversal = () => {
        this.preOrderTraversalHelper(this.root)

    }
    preOrderTraversalHelper = (root) => {
        if (root !== null) {
            console.log("hereeeee", root.data);
            this.preOrderTraversalHelper(root.left)
            this.preOrderTraversalHelper(root.right)
        }

    }

    // inOrder Depth First traversal (Left, Root, Right)
    inOrderTraversal = () => {
        this.inOrderTraversalHelper(this.root)
    }

    inOrderTraversalHelper = (root) => {
        if (root !== null) {
            this.inOrderTraversalHelper(root.left)
            console.log("hereeeee", root.data);
            this.inOrderTraversalHelper(root.right)
        }

    }

    // postOrder Depth First traversal (Left, Right, Root)
    postOrderTraversal = () => {
        this.postOrderTraversalHelper(this.root)
    }

    postOrderTraversalHelper = (root) => {
        if (root !== null) {
            this.postOrderTraversalHelper(root.left)
            this.postOrderTraversalHelper(root.right)
            this.len++
            console.log("hereeeee", root.data);
        }

    }

    // Level order, while loop easy with queue

    levelOrder = () => {
        if (!this.root) return;
        const queue = [this.root];
        while (queue.length !== 0) {

            const temp = queue.shift();
            console.log('temmp', temp.value);
            if (temp.left !== null) {
                queue.push(temp.left)

            }
            if (temp.right !== null) {
                queue.push(temp.right)
            }

        }
    }

    // calculate tree height using preOrder Depth First traversal (Left, Right, Root)
    calculateRootHeight = () => {
        return this.calculateRootHeightHelper(this.root)
    }
    calculateRootHeightHelper = (root) => {
        if (root === null) return -1;
        if (root.left === null && root.right === null) return 0;

        let lDepth = this.calculateRootHeightHelper(root.left);
        let rDepth = this.calculateRootHeightHelper(root.right);
        return Math.max(lDepth, rDepth) + 1;
    }

    // Calculate min/max value in a tree in a binary binary search tree
    // Time complexity O(log n) logarithmic time

    minBinarySearchTree = () => {
        if (this.root === null) return -1;

        let current = this.root;
        let last = current;

        while (current !== null) {
            last = current;
            current = current.left;
        }

        return last.data
    }

    // Calculate min/max value in a tree in a binary tree not binary search tree
    // Time complexity O(n) Linear time

    min = () => {
        return this.minHelper(this.root);
    }
    minHelper = (root) => {
        if (root.left === null && root.right === null) return root.data;

        const lefty = this.minHelper(root.left)
        const righty = this.minHelper(root.right)

        // return Math.min(Math.min(lefty, righty), root.data)
        return Math.max(Math.max(lefty, righty), root.data)
    }

    // Check if two trees are equal
    equals = (other) => {
        if (other === null) return false
        return this.equalsHelper(this.root, other.root);
    }

    equalsHelper = (first, second) => {
        if (first === null && second === null) return true;
        if (first !== null && second !== null) {
            return first.data === second.data && this.equalsHelper(first.left, second.left) &&
                this.equalsHelper(first.right, second.right)
        }
        return false;

    }

    // swapRoot method to mess the order of BST

    swapRoot = () => {
        let temp = this.root.left;
        this.root.left = this.root.right;
        this.root.right = temp;

        return this.root;
    }

    isValidBST = () => {
        return this.helperIsValidBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }

    helperIsValidBST = (node, min, max) => {
        if (!node) return true
        if (node.data <= min || node.data >= max) return false
        return this.helperIsValidBST(node.left, min, node.data - 1) && this.helperIsValidBST(node.right, node.data + 1, max)
    }

    //Print Nodes at K distance
    kDistance = (k) => {
        const arr = [];
        this.helperKDistance(this.root, k, arr)
        return arr;
    }

    helperKDistance = (root, k, arr) => {
        if (root === null) return;
        if (k === 0) {
            arr.push(root.data)
            return;
        }
        this.helperKDistance(root.left, k - 1, arr)
        this.helperKDistance(root.right, k - 1, arr)

    }

    traverseLevelOrder = () => {
        for (let i = 0; i <= this.calculateRootHeight(); i++) {
            const array = this.kDistance(i)
            for (let value of array) {
                console.log("arreeee-----", value)
            }
        }
    }

    //Count number of leaves/leaf nodes
    leafNodes = () => {
        return this.helperNumberOfLeafNodes(this.root)
    }

    helperNumberOfLeafNodes = (root) => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) {

            return 1;

        } else {
            return this.helperNumberOfLeafNodes(root.left) + this.helperNumberOfLeafNodes(root.right)

        }
    }

    //Count number of non-leaves/non-leaf nodes
    NonLeafNodes = () => {
        return this.helperNumberOfNonLeafNodes(this.root)
    }

    helperNumberOfNonLeafNodes = (root) => {
        if (root === null || (root.left === null && root.right === null)) {
            return 0;
        } else {
            return 1 + this.helperNumberOfNonLeafNodes(root.left) + this.helperNumberOfNonLeafNodes(root.right)

        }


    }
}


const BST = new BinarySearchTree();
BST.insertNode(7);
BST.insertNode(4);
BST.insertNode(9);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(8);
BST.insertNode(10);

// const BST2 = new BinarySearchTree();
// BST2.insertNode(7);
// BST2.insertNode(4);
// BST2.insertNode(9);
// BST2.insertNode(1);
// BST2.insertNode(6);
// BST2.insertNode(8);
// BST2.insertNode(10);

// invalid tree
// BST.insertNode(20);
// BST.insertNode(10);
// BST.insertNode(30);
// BST.insertNode(6);
// BST.insertNode(14);
// BST.insertNode(24);
// BST.insertNode(3);
// BST.insertNode(8);
// BST.insertNode(26);

// BST.preOrderTraversal();
// BST.inOrderTraversal();
// BST.preOrderTraversal();
// const height = BST.calculateRootHeight();
// const minimum = BST.min()

// console.log(BST.searchIter(2));
// console.log(BST.searchIter(12));
// console.log(BST.searchIter(50));
// console.log(BST.searchIter(-22));
// console.log(BST.searchIter(200));
// BST.swapRoot()
// const valid = BST.isValidBST()
// BST.traverseLevelOrder()

console.log("BSTtttt-----", BST.NonLeafNodes())
// console.log("BST222222-----", BST2.root)
