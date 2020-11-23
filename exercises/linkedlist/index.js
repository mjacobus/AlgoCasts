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
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size += 1;
      node = node.next;
    }
    return size;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;

    if (node && !this.head.next) {
      this.head = null;
      return;
    }

    while (node) {
      if (node.next && node.next.next) {
        node = node.next;
      } else {
        node.next = null;
        return;
      }
    }
  }

  insertLast(value) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(value);
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
}

module.exports = { Node, LinkedList };
