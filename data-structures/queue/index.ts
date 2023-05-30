class QueueNode<T> {
  public data: T | undefined;
  public next: QueueNode<T> | null;
  constructor(data: T, next: QueueNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}
class Queue<T> {
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  public enqueue(value) {
    const newNode = new QueueNode(value, null);
    if (this.tail) {
      this.tail.next = newNode;
    }
    if (!this.head) {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  public dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.data;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  public getSize() {
    return this.size;
  }
  public peek() {
    return this.head?.data;
  }
  public isEmpty() {
    return this.size === 0;
  }
  public clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

export default Queue;
