//fifo - first in - first out
class Stack {
  push(val) {}

  pop(): {};
}
const queue = new Stack<string>();
queue.push('message1');
queue.push('message2');

queue.pop(); //message1
queue.pop(); //message2
