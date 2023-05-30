import Queue from "./index";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  describe("enqueue", () => {
    test("should add items to the end of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.getSize()).toBe(3);
      expect(queue.peek()).toBe(1);
    });
  });

  describe("dequeue", () => {
    test("should remove and return the first item in the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
      expect(queue.getSize()).toBe(2);
      expect(queue.peek()).toBe(2);
    });

    test("should return undefined if the queue is empty", () => {
      expect(queue.dequeue()).toBeUndefined();
      expect(queue.getSize()).toBe(0);
    });
  });

  describe("peek", () => {
    test("should return the first item in the queue without removing it", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
      expect(queue.getSize()).toBe(2);
    });

    test("should return undefined if the queue is empty", () => {
      expect(queue.peek()).toEqual(undefined);
      expect(queue.getSize()).toBe(0);
    });
  });

  describe("isEmpty", () => {
    test("should return true if the queue is empty", () => {
      expect(queue.isEmpty()).toBe(true);
    });

    test("should return false if the queue is not empty", () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("getSize", () => {
    test("should return the number of items in the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.getSize()).toBe(3);
    });
  });

  describe("clear", () => {
    test("should remove all items from the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.clear();
      expect(queue.getSize()).toBe(0);
      expect(queue.peek()).toBeUndefined();
    });
  });
});
