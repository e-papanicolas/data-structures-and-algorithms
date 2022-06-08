// * HANDLING COLLISIONS
// * SEPARATE CHAINING:
// at each index in the array we store values using a more sophisticated data structure like array or linked list
// this allows us to store multiple key/value pairs at the same index
// * LINEAR PROBING:
// when we find a collision we search through the array to find the next empty slot

class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    // accepts a key and a value
    // hashes the key
    let hashIdx = this._hash(key);
    // stores the key/val pair in the hash table array via separate chaining
    // check if there is NOTHING in the hash table at the hashIdx
    if (!this.keyMap[hashIdx]) {
      // set a new empty array at that index
      this.keyMap[hashIdx] = [];
    }
    // push the key/value pair into the array at the index
    this.keyMap[hashIdx].push([key, value]);
  }

  get(key) {
    // accepts a key, hashes the key
    let hashIdx = this._hash(key);
    // retrieves the key/val pair from the hash table
    if (this.keyMap[hashIdx]) {
      for (let i = 0; i < this.keyMap[hashIdx].length; i++) {
        if (this.keyMap[hashIdx][i][0] === key) {
          return this.keyMap[hashIdx][i][1];
        }
      }
    }
    // if not found return undefined
    return undefined;
  }

  keys() {
    // loops through the hash table array and returns an array of keys in the table
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    // loops through the hash table array and returns an array of values in the table
    // init an empty array to store the values
    let valuesArr = [];
    // loop over the hash table array
    for (let i = 0; i < this.keyMap.length; i++) {
      // if there is something in the index of the array, loop through the subarray and push those values into the array
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
