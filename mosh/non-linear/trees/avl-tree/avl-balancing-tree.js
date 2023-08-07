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


/// second attem🌴 

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//         this.height = 0;
//     }
// }

// class AVL {
//     constructor() {
//         this.root = null;
//     }
//     heightCheck = (root) => {
//         if (root === null) return -1;

//         return root.height;
//     }
//     balancedFactor = (node) => {
//         console.log('this.heightCheck(node.left) - this.heightCheck(node.right)---', this.heightCheck(node.left) - this.heightCheck(node.right))
//         return (node === null) ? 0 : this.heightCheck(node.left) - this.heightCheck(node.right)
//     }
//     leftRotate = (root) => {
//         const newRoot = root.right;
//         // shift root if right is not null
//         root.right = newRoot.left;
//         newRoot.left = root;

//         // reset and get height: 
//         root.height = Math.max(this.heightCheck(root.left), this.heightCheck(root.right)) + 1;
//         // reset and get height: 
//         root.height = Math.max(this.heightCheck(newRoot.left), this.heightCheck(newRoot.right)) + 1;

//         return newRoot;
//     }

//     rightRotate = (root) => {
//         const newRoot = root.left;
//         // shift root if left is not null
//         root.left = newRoot.left;

//         newRoot.right = root;
//         // reset and get height: 
//         root.height = Math.max(this.heightCheck(root.left), this.heightCheck(root.right)) + 1;
//         // reset and get height: 
//         root.height = Math.max(this.heightCheck(newRoot.left), this.heightCheck(newRoot.right)) + 1;

//         return newRoot;
//     }

//     insert = (value) => {

//         const insertHelper = (root, value) => {

//             if (root === null) {
//                 return new Node(value);
//             }
//             if (root.value < value) {
//                 root.left = insertHelper(root.left, value);
//             } else {
//                 root.right = insertHelper(root.right, value);
//             }

//             // reset and get height: 
//             root.height = Math.max(this.heightCheck(root.left), this.heightCheck(root.right)) + 1;

//             //get and check if the tree is balanced 
//             const balancedFactor = this.balancedFactor(root)
//             // console.log('balancedFactor---', balancedFactor)
//             // left heavy
//             if (balancedFactor > 1) {

//                 if (this.balancedFactor(root.left) < 0) {
//                     root.left = this.leftRotate(root.left)
//                 }
//                 return this.rightRotate(root)
//             } else if (balancedFactor < -1) {   // right heavy
//                 if (this.balancedFactor(root.right) > 0) {
//                     root.left = this.rightRotate(root.right)
//                 }
//                 return this.leftRotate(root)
//             }
//             return root;

//         }
//         this.root = insertHelper(this.root, value)
//     }

// }

// // [10, 5, 15, 6, 1, 8, 12, 18, 17]
// // const data = [10, 5, 15, 6, 1]

// const AVLTree = new AVL();


// // AVLTree.insert(7);
// // AVLTree.insert(4);
// // AVLTree.insert(9);
// // bst.insert(1);
// // bst.insert(6);
// // bst.insert(8);
// // bst.insert(10);


// // AVLTree2;
// AVLTree.insert(3);
// AVLTree.insert(2);
// AVLTree.insert(1);
// // AVLTree.insert(4);
// // AVLTree.insert(5);
// // AVLTree.insert(8);
// // AVLTree.insert(10);

// console.log('BST:', AVLTree.root.height)