class StackNode<T> {
  constructor(public data: T, public next: StackNode<T> | null) {}
}

class Stack<T> {
  private top: StackNode<T> | null = null;

  public push(value: T) {
    const newItem = new StackNode<T>(value, this.top);
    this.top = newItem;
  }

  public pop() {
    const value = this.top?.data;
    this.top = this.top?.next ?? null;
    return value;
  }

  public peek() {
    const value = this.top?.data;
    return value;
  }

  public size() {
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
