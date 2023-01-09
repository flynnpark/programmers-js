function solution(cap, n, deliveries, pickups) {
  let result = 0;
  let deliveriesIndexes = [];
  let pickupsIndexes = [];
  let boxes = 0;

  for (let i = 0; i < n; i++) {
    if (deliveries[i] !== 0) deliveriesIndexes.push(i);
    if (pickups[i] !== 0) pickupsIndexes.push(i);
  }

  while (deliveriesIndexes.length || pickupsIndexes.length) {
    result += (Math.max(...deliveriesIndexes, ...pickupsIndexes) + 1) * 2;
    boxes = 0;
    while (deliveriesIndexes.length && boxes <= cap) {
      const lastIndex = deliveriesIndexes[deliveriesIndexes.length - 1];
      if (deliveries[lastIndex] + boxes <= cap) {
        boxes += deliveries[deliveriesIndexes.pop()];
      } else {
        deliveries[lastIndex] -= cap - boxes;
        break;
      }
    }

    boxes = 0;
    while (pickupsIndexes.length && boxes <= cap) {
      const lastIndex = pickupsIndexes[pickupsIndexes.length - 1];
      if (pickups[lastIndex] + boxes <= cap)
        boxes += pickups[pickupsIndexes.pop()];
      else {
        pickups[lastIndex] -= cap - boxes;
        break;
      }
    }
  }

  return result;
}

export { solution };
