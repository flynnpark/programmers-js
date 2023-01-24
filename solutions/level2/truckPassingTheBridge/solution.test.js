import { solution } from './solution';

const cases = [
  {
    input: {
      bridge_length: 2,
      weight: 10,
      truck_weights: [7, 4, 5, 6],
    },
    result: 8,
  },
  {
    input: {
      bridge_length: 100,
      weight: 100,
      truck_weights: [10],
    },
    result: 101,
  },
  {
    input: {
      bridge_length: 100,
      weight: 100,
      truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    result: 110,
  },
];

test('다리를 지나는 트럭', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
