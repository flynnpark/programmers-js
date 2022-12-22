import { solution } from './solution';

const cases = [
  {
    input: {
      data: [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
      ],
      col: 2,
      row_begin: 2,
      row_end: 3,
    },
    result: 4,
  },
];

test('테이블 해시 함수', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
