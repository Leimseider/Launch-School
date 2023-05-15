
/*
if empty array spot, put object in front of

enqueu
*/

class CircularQueue {
  constructor(spaces) {
    this.spaces = spaces;
    this.currentLocation = 0;
    this.tracker = this.createQueTracker(this.spaces);
  }
  enqueue(object) {
    this.tracker[this.currentLocation].value = object;
    this.tracker[this.currentLocation].age = 0;
    this.updateAges();
    this.updateCurrentLocation();
  }
  updateAges() {
    for (let idx = 0; idx < this.spaces; idx++) {
      if (idx === this.currentLocation) continue;
      if (this.tracker[idx].value === null) continue;
      this.tracker[idx].age++;
    }
  }

  dequeue() {
    //finds oldest number, resets it to null, returns oldest number;
    let oldestNumber = null;
    let returnValue = null;
    for (let idx = 0; idx < this.spaces; idx++) {
      if (this.tracker[idx].age > oldestNumber) {
        oldestNumber = this.tracker[idx].age;
      }
    }
    if (oldestNumber === null) return null;
    for (let idx = 0; idx < this.spaces; idx++) {
      if (this.tracker[idx].age === oldestNumber) {
        returnValue = this.tracker[idx].value;
        this.tracker[idx].value = null;
        this.tracker[idx].age = 0;
      } else this.tracker[idx].age++;
    }
    return returnValue;
  }
  updateCurrentLocation() {
    if (this.currentLocation === (this.spaces - 1)) this.currentLocation = 0;
    else this.currentLocation++;
  }
  createQueTracker(spaces) {
    let tracker = [];
    for (let idx = 0; idx < spaces; idx++) {
      let space = {
        location: idx,
        age: null,
        value: null
      };
      tracker.push(space);
    }
    return tracker;
  }
  logTracker() {
    console.log(this.tracker);
  }
}


let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);