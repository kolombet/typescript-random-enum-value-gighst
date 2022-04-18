//fifo - first in - first out
class Stack<T> {
  array = [];
  push(val:T) {
    this.array.push(val);
  }

  pop():T {
    return this.array.pop();
  };
}
const queue = new Stack<string>();
queue.push('message1');
queue.push('message2');

queue.pop(); //message1
queue.pop(); //message2
