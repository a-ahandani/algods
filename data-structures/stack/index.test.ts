import Stack from "./index";
describe("Stack data structure", () => {
  test("push method should add an item to the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.getSize()).toBe(3);
  });

  test("pop method should remove and return the top item from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.getSize()).toBe(0);
  });

  test("peek method should return the top item from the stack without removing it", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.getSize()).toBe(3);
  });
});
