import { sayHello } from "./utils";

describe('sayHello tests', () => {
  test('greets like a cat', async () => {
    expect(sayHello()).toEqual("Meow!");
  });
});
