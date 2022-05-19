function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeue() {
  let priority = this.dataStore[0].code;
  for (let i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
      priority = i;
    }
  }
  return this.dataStore.splice(priority, 1);
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr +=
      this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }
  return retStr;
}
