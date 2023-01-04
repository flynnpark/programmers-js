import { solution } from './solution';

const cases = [
  {
    input: {
      arr1: [
        [1, 2],
        [2, 3],
      ],
      arr2: [
        [3, 4],
        [5, 6],
      ],
    },
    result: [
      [4, 6],
      [7, 9],
    ],
  },
  {
    input: {
      arr1: [[1], [2]],
      arr2: [[3], [4]],
    },
    result: [[4], [6]],
  },
];

test('행렬의 덧셈', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
