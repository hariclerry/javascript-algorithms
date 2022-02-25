class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

class AVL {
    constructor() {
        this.root = null;
        // this.height = 0;
    }

    //insert recursively
    insert(value) {
        this.root = this.insertHelper(this.root, value);
    }

    insertHelper(root, value) {

        if (root === null) {
            return new Node(value);
        }
        if (value < root.data) {
            root.left = this.insertHelper(root.left, value)

        } else {
            root.right = this.insertHelper(root.right, value)

        }

        // Set height of tree
        // root.height = Math.max(this.heightCheck(root.left), this.heightCheck(root.right)) + 1
        this.setHeight(root);

        return this.balance(root)
    }

    // Helper methods

    balance(root) {
        //Balance-factor == height(L) - height(R)
        const balanceFactor = this.balancedFactor(root.right)
        const balanceFactorLeft = this.balancedFactor(root.left)
        if (this.isLeftHeavy(root)) {
            if (balanceFactorLeft < 0) {
                root.left = this.rotateLeft(root.left);
            }
            return this.rotateRight(root);

        } else if (this.isRightHeavy(root)) {
            if (balanceFactor > 0) {
                root.right = this.rotateRight(root.left);
            }
            return this.rotateLeft(root);


        }
        return root;
    }
    isLeftHeavy(node) {
        return this.balancedFactor(node) > 1
    }

    isRightHeavy(node) {
        return this.balancedFactor(node) < -1
    }
    balancedFactor(node) {
        return (node === null) ? 0 : this.heightCheck(node.left) - this.heightCheck(node.right)
    }
    heightCheck(node) {
        if (node === null) {
            return -1;
        } else {
            return node.height
        }
    }

    setHeight(node) {
        node.height = Math.max(this.heightCheck(node.left), this.heightCheck(node.right)) + 1
    }
    rotateLeft(root) {
        let newRoot = root.right;

        root.right = newRoot.left;
        newRoot.left = root;

        this.setHeight(root);
        this.setHeight(newRoot);

        return newRoot;
    }

    rotateRight(root) {
        let newRoot = root.left;

        root.left = newRoot.right;
        newRoot.right = root;

        // Reset heights
        this.setHeight(root);
        this.setHeight(newRoot);

        return newRoot;
    }

}

const AVLTree = new AVL();
// AVLTree.insert(7);
// AVLTree.insert(4);
// AVLTree.insert(9);
// AVLTree.insert(1);
// AVLTree.insert(6);
// AVLTree.insert(8);
// AVLTree.insert(10);

//right skewed tree

AVLTree.insert(10);
AVLTree.insert(30);
AVLTree.insert(20);

// const AVLTree2 = new BinarySearchTree();
// AVLTree2.insert(7);
// AVLTree2.insert(4);
// AVLTree2.insert(9);
// AVLTree2.insert(1);
// AVLTree2.insert(6);
// AVLTree2.insert(8);
// AVLTree2.insert(10);

// invalid tree
// AVLTree.insert(20);
// AVLTree.insert(10);
// AVLTree.insert(30);
// AVLTree.insert(6);
// AVLTree.insert(14);
// AVLTree.insert(24);
// AVLTree.insert(3);
// AVLTree.insert(8);
// AVLTree.insert(26);

// console.log("AVLTree************", AVLTree.root)