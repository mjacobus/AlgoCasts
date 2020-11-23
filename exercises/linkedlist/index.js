// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.insertAt(data, 0); // TODO: WHY dos not this work?
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.getAt(0);
  }

  size() {
    let size = 0;
    this.forEach((node) => {
      size += 1;
    });
    return size;
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(value) {
    const node = new Node(value);
    const last = this.getLast();

    if (last) {
      last.next = node;
      return;
    }

    this.head = new Node(value);
  }

  getAt(index) {
    let currentIndex = 0;
    let node = this.head;

    while (node) {
      if (currentIndex === index) return node;

      node = node.next;
      currentIndex += 1;
    }
    return null;
  }

  removeAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }

    const left = this.getAt(index - 1);

    if (!left) {
      return;
    }

    const right = this.getAt(index + 1);

    left.next = right;
  }

  insertAt(value, index) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }

    const left = this.getAt(index - 1) || this.getLast();
    const right = this.getAt(index);
    left.next = new Node(value, right);
  }

  forEach(fn) {
    let node = this.head;
    let index = 0;

    while (node) {
      const result = fn(node, index);
      if (result !== undefined) {
        return result;
      }
      index++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
