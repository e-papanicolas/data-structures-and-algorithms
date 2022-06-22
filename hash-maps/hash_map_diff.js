class HashMap {
  constructor(size = 137) {
    this.map = new Array(size);
  }

  _hash(string, arr) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % arr.length;
    return parseInt(total);
  }

  buildChains() {
    for (let i = 0; i < this.map.length; ++i) {
      this.map[i] = new Array();
    }
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.map.length; ++i) {
      if (this.map[i][0] !== undefined) {
        print(i + ": " + this.map[i]);
      }
    }
  }

  put(key, data) {
    // uses a pair of the chain’s cells to store a keyvalue pair; the first cell stores the key and the adjacent cell of the chain stores the value
    let pos = this._hash(key);
    let index = 0;
    if (this.map[pos][index] === undefined) {
      this.map[pos][index + 1] = data;
    }
    ++index;
    if (this.map[pos][index] !== undefined) {
      while (this.map[pos][index] !== undefined) {
        ++index;
      }
      this.map[pos][index] = data;
    }
  }

  get(key) {
    let index = 0;
    let pos = this._hash(key);
    if (this.map[pos][index] === key) {
      return this.map[pos][index + 1];
    }
    index += 2;
    if (this.map[pos][index] !== key) {
      while (this.map[pos][index] !== key) {
        index += 2;
      }
      return this.map[pos][index + 1];
    }
    return undefined;
  }
}

// Linear probing should be chosen over separate chaining when your array for storing
// data can be fairly large. Here’s a formula commonly used to determine which collision
// method to use: if the size of the array can be up to half the number of elements to be
// stored, you should use separate chaining; but if the size of the array can be twice the size
// of the number of elements to be stored, you should use linear probing.

class HashMapWithLinearProbing {
  constructor(size = 137) {
    this.map = new Array(size);
    this.values = [];
  }

  _hash(string, arr) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % arr.length;
    return parseInt(total);
  }

  put(key, data) {
    let pos = this._hash(key);
    if (this.map[pos] === undefined) {
      this.map[pos] = key;
      this.values[pos] = data;
    } else {
      while (this.map[pos] !== undefined) {
        pos++;
      }
      this.map[pos] = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    let hash = -1;
    hash = this._hash(key);
    if (hash > -1) {
      for (let i = hash; this.map[hash] !== undefined; i++) {
        if (this.map[hash] == key) {
          return this.values[hash];
        }
      }
    }
    return undefined;
  }
}
