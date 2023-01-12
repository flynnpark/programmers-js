import { solution } from './solution';

const cases = [
  {
    input: {
      places: [
        ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
        ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
        ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
        ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
        ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
      ],
    },
    result: [1, 0, 1, 1, 1],
  },
];

test('거리두기 확인하기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
