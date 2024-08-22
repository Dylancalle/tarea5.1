import generarFizzBuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("generarFizzBuzz solo genera 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("generarFizzBuzz genera el mismo numero", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("generarFizzBuzz genera Fizz cuando sea 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("generarFizzBuzz genera Fizz cuando sea multiplo de 3", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
  it("generarFizzBuzz genera Fizz cuando sea 5", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("generarFizzBuzz genera Fizz cuando sea multiplo de 5", () => {
    expect(generarFizzBuzz(10)).toEqual("Buzz");
  });
  it("generarFizzBuzz genera FizzBuzz cuando sea multiplo de 3 y 5", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
});
