import { solution } from './solution';

const cases = [
  {
    input: {
      routes: [
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
      ],
    },
    result: 2,
  },
];

describe('감시카메라', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
