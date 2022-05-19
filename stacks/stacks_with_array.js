// easy array implementation
// use built in methods to simulate stack methods

// The array that stores the stack elements is named dataStore

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.reset = reset;
  this.length = length;
}

function push(el) {
  // push a new element onto a stack, store it in the top position and increment the top variable so that the new top is the next empty position in the array
  // the ++ operator ensures that the current value of top is used to place the new element at the top of the stack before top is incremented
  this.dataStore[this.top++] = el;
}

function pop() {
  // return the element at the top of stack and decrement the top variable
  return this.dataStore[--this.top];
}

function peek() {
  // return the top element of the stack by accessing the top - 1 position
  return this.dataStore[this.top - 1];
}

function length() {
  // return top
  return this.top;
}

function reset() {
  // clear the stack by setting top variable to 0
  this.top = 0;
}
