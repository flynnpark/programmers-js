import { solution } from './solution';

const cases = [
  {
    input: {
      s: '110010101001',
    },
    result: [3, 8],
  },
  {
    input: {
      s: '01110',
    },
    result: [3, 3],
  },
  {
    input: {
      s: '1111111',
    },
    result: [4, 1],
  },
];

test('이진 변환 반복하기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
