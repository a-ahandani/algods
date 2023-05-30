class LinkedListNode<T> {
  public data: T | undefined;
  public next: LinkedListNode<T>;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList<T> {
  public head: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
  }
  public add(value) {
    const newNode = new LinkedListNode<T>(value, this.head);
    this.head = newNode;
  }
  public search(value): boolean {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  public remove(value) {
    let current = this.head;
    let previus: LinkedListNode<T> | null = null;
    while (current) {
      if (current.data == value) {
        if (previus === null) {
          this.head = current.next;
        } else {
          previus.next = current.next;
        }
      }
      previus = current;
      current = current.next;
    }
  }
}
