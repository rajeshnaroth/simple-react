import sayHello from "../js/utils/hello"

test("sayHelloWorks", () => {
  expect(sayHello("World")).toEqual("Hello World")
})
