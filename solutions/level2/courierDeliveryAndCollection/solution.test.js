import { solution } from './solution';

const cases = [
  {
    input: {
      cap: 4,
      n: 5,
      deliveries: [1, 0, 3, 1, 2],
      pickups: [0, 3, 0, 4, 0],
    },
    result: 16,
  },
  {
    input: {
      cap: 2,
      n: 7,
      deliveries: [1, 0, 2, 0, 1, 0, 2],
      pickups: [0, 2, 0, 1, 0, 2, 0],
    },
    result: 30,
  },
  {
    input: {
      cap: 2,
      n: 2,
      deliveries: [0, 0],
      pickups: [0, 4],
    },
    result: 8,
  },
];

test('택배 배달과 수거하기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
