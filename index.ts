//Stack = lifo - last in - first out
//Queue = fifo - first in - first out

class Queue<T> {
  #array = [];
  push(val: T) {
    this.#array.push(val);
  }

  pop(): T {
    return this.#array.shift();
  }
}
const queue = new Queue<string>();
queue.push('message1');
queue.push('message2');
queue.push('message3');
queue.push('message4');
queue.push('message5');
//queue.#array = [];

// let el = null;
// while(el = queue.pop()) {
//   console.log(el);
// }

function sendMessage() {
  const message = queue.pop();
  if (!message) return;
  //emulate server request
  setTimeout(() => {
    console.log('message sent: ' + message);
    sendMessage();
  }, 1000);
}
sendMessage();
