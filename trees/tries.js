class TrieNode {
  constructor() {
    this.isEnd = false;
    this.children = new Array(26);
    // total number of english alphabets, initialize all to null
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  getIndex(node) {
    return node.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(word) {
    let current = this.root;

    for (let c of word) {
      let i = this.getIndex(c);
      if (current.children[i] === null) {
        current.children[i] = new TrieNode();
      }
      current = current.children[i];
    }
    current.isEnd = true;
  }

  search(word) {
    let current = this.root;

    for (let c of word) {
      let i = this.getIndex(c);
      if (current.children[i] === null) {
        return false;
      }
      current = current.children[i];
    }
    return current.isEnd;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let c of prefix) {
      let i = this.getIndex(c);
      if (current.children[i] === null) {
        return false;
      }
      current = current.children[i];
    }
    return true;
  }
}

let t = new Trie();
t.insert("apple");
t.insert("blanket");
t.insert("apes");

console.log("search", t.search("apple"));
console.log("search", t.search("app"));
console.log("starts with", t.startsWith("bla"));
console.log("starts with", t.startsWith("bal"));
