class Node {
    constructor(char) {
        this.value = char;
        this.children = {};
        this.isEndOfWord = false;
    }

    // getChildren() {
    //     console.log("this.children.value", this.children)
    //     // return [...this.children.value]
    // }

    getChildren = () => {

        if (this.children === null) return;
        const arr = [];
        for (let child in this.children) {
            if (child !== null) {
                arr.push(this.children[child])
            }
        }
        return arr;
    }

    hasChildren = () => {
        return Object.keys(this.children).length !== 0;
    }

    removeChild = (ch) => {
        delete this.children[ch];
    }

    getChild = (ch) => {
        return this.children[ch];
    }
}

class Trie extends Node {
    constructor() {
        super();
        this.root = new Node(null);
        // this.data = [];
    }
    //insert recursively
    insert(word) {
        // we start at the root
        let current = this.root
        // iterate through all the characters of word
        for (let char of word) {
            // if node doesn't have the current character as child, insert it
            if (current.children[char] === undefined) {
                current.children[char] = new Node(char)
            }

            // move down, to match next character
            current = current.children[char];
        }
        // mark the last inserted character as end of the word
        current.isEndOfWord = true

    }

    contains(word) {

        if (word === null || word === undefined) {
            return false;
        }
        // we start at the root
        let current = this.root
        // iterate through all the characters of word
        for (let char of word) {
            // if node doesn't have the current character as child, insert it
            if (current.children[char] === undefined) {
                return false;
            }

            // move down, to match next character
            current = current.children[char];
        }
        // return true if character is end of the word
        return current.isEndOfWord;

    }

    traverse = () => {
        this.traverseHelper(this.root);
    }

    traverseHelper = (node, count = 0) => {
        //pre-order traversal
        //console.log("value", node.value)

        //post-order traversal
        for (let child of node.getChildren()) {
            this.traverseHelper(child);

        }
        console.log("value", node.value)


    }

    // Remove word from tire
    remove(word) {
        if (word == null)
            return;

        this.removeHelper(this.root, word, 0);
    }

    removeHelper(root, word, index) {
        if (index == word.length) {
            root.isEndOfWord = false;
            return;
        }

        var ch = word.charAt(index);
        var child = root.getChild(ch);
        if (child == null)
            return;

        this.removeHelper(child, word, index + 1);

        // Post-order traversal
        if (!child.hasChildren() && !child.isEndOfWord)
            root.removeChild(ch);
    }

    autocomplete(word) {
        if (word === null)
            return;
        const list = [];
        this.autocompleteHelper(this.root, list, word, 0);
    }

    autocomplete(prefix) {
        let words = [];
        const lastNode = this.findLastNodeOf(prefix);
        this.autocompleteHelper(lastNode, prefix, words);

        return words;
    }

    autocompleteHelper(root, prefix, words) {
        if (root == null)
            return;

        if (root.isEndOfWord)
            words.push(prefix);

        for (let child of root.getChildren())
            this.autocompleteHelper(child, prefix + child.value, words);
    }

    findLastNodeOf(prefix) {
        if (prefix == null)
            return null;

        var current = this.root;
        for (let ch of prefix) {
            let child = current.getChild(ch);
            if (child == null)
                return null;
            current = child;
        }
        return current;
    }

    // recusively contain
    containsRecursive(word) {
        if (word == null)
            return false;

        return this.containsRecursiveHelper(this.root, word, 0);
    }

    containsRecursiveHelper(root, word, index) {
        // Base condition
        if (index == word.length())
            return root.isEndOfWord;

        if (root == null)
            return false;

        var ch = word.charAt(index);
        var child = root.getChild(ch);
        if (child == null)
            return false;

        return this.containsRecursiveHelper(child, word, index + 1);
    }

    // count words
    countWords() {
        return this.countWordsHelper(this.root);
    }

    countWordsHelper(root) {
        var total = 0;

        if (root.isEndOfWord)
            total++;

        for (let child of root.getChildren())
            total += this.countWordsHelper(child);

        return total;
    }

    // print words
    printWords() {
        this.printWordsHelper(this.root, "");
    }

    printWordsHelper(root, word) {
        if (root.isEndOfWord)
            console.log(word);

        for (let child of root.getChildren())
            this.printWordsHelper(child, word + child.value);
    }

}


const TrieTree = new Trie();

TrieTree.insert("boy");
TrieTree.insert("book");
TrieTree.insert("cat");
TrieTree.insert("card");
TrieTree.insert("careful");
TrieTree.insert("care");
// TrieTree.remove('book')
// TrieTree.contains("joy")
const word = TrieTree.autocomplete("bo")
console.log("TrieTree************", TrieTree.traverse())