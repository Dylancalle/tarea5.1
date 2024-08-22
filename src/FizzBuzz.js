function generarFizzBuzz(numero){
  let result = numero + ""
  if(numero % 5 == 0 && numero % 3 == 0) {result = "FizzBuzz"}
  else if(numero % 3 == 0){ result = "Fizz"}
  else if(numero % 5 == 0){result = "Buzz"}
  return result;
}
export default generarFizzBuzz;
