const userNumber = +prompt(`Enter the simple number, please:`);
let isSimple = true;
if (userNumber > 1) {
  /* Начинаю счётчик i с 2-х и не включаю в него значение числа, введённого пользователем,
   так как простое число - это число, которое делится только на 1 и на само себя*/
  for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
      isSimple = false;
      break; /* используем директиву break, чтобы прервать цикл и не проходить
              его до конца при смене значения переменной isSimple
              с true на false, что символизирует о том , что число не является
              простым, так как делится без остатка на любое число, кроме себя 
              и 1 */
    }
  }
} else {
  isSimple = false;
}
console.log(isSimple);
