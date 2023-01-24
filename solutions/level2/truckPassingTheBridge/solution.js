function solution(bridge_length, weight, truck_weights) {
  let result = 0;
  const bridge = Array(bridge_length).fill(0);
  let weightSum = 0;

  while (truck_weights.length > 0 || weightSum > 0) {
    result++;
    weightSum -= bridge.shift();

    if (truck_weights.length > 0 && weightSum + truck_weights[0] <= weight) {
      weightSum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return result;
}

export { solution };
