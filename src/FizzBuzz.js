function generarFizzBuzz(numero){
  let result = numero + ""
  if(numero % 3 == 0){ result = "Fizz"}
  if(numero % 5 == 0){result = "Buzz"}
  return result;
}
export default generarFizzBuzz;
