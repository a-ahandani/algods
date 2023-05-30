class StackNode<T> {
  public data: T | null = null;
  public next: StackNode<T> | null = null;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack<T> {
  public top: StackNode<T> | null;
  public size: number;
  constructor() {
    this.top = null;
    this.size = 0;
  }
  public push(value: T) {
    const newItem = new StackNode<T>(value, this.top);
    this.top = newItem;
    this.size++;
  }

  public pop() {
    if (this.top) {
      const value = this.top.data;
      this.top = this.top.next ?? null;
      this.size--;
      return value;
    } else {
      return undefined;
    }
  }

  public peek() {
    const value = this.top?.data;
    return value;
  }

  public getSize() {
    if (this.top === null) {
      return 0;
    }
    let count = 1;
    let item = this.top;
    while (item.next) {
      count++;
      item = item.next;
    }
    return count;
  }
}

export default Stack;
