class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert Last node
  insertLastNode(data) {
    if (!this.head) {
      this.insertFirstNode(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
      this.size++;
    }
  }

  // Insert at Index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirstNode(data);
    }
    let current = this.head;
    let previous;
    let count = 0;
    for (let key in current) {
      if (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
    }
    const node = new Node(data);
    node.next = current;
    previous.next = node;
    this.size++;
  }
}

const ll = new LinkedList(200);
ll.insertFirstNode(200);
ll.insertFirstNode(2500);
ll.insertLastNode(26600);
console.log(ll);
