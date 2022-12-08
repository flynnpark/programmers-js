function solution(topping) {
  let result = 0;
  let numOfToppings = 0;
  const toppingType = new Set();
  const toppings = {};

  topping.forEach((item) => {
    if (item in toppings) {
      toppings[item]++;
    } else {
      toppings[item] = 1;
      numOfToppings++;
    }
  });

  topping.forEach((item) => {
    toppings[item]--;
    toppingType.add(item);

    if (toppings[item] == 0) {
      delete toppings[item];
      numOfToppings--;
    }

    if (toppingType.size == numOfToppings) {
      result++;
    }
  });

  return result;
}

export { solution };
