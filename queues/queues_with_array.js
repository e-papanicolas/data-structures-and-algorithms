// use push and shift methods OR unshift/pop

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(el) {
  // add an element to the end of the queue
  this.dataStore.push(el);
}

function dequeue() {
  // removes an element from the front of the queue
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  // uses a string to display all elements in the queue
  let str = "";
  for (let i = 0; i < this.dataStore.length; i++) {
    str + this.dataStore[i] + "\n";
  }
  return str;
}

function empty() {
  if (this.dataStore.length === 0) return true;
  else return false;
}
