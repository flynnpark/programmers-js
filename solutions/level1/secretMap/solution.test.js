import { solution } from './solution';

const cases = [
  {
    input: {
      n: 5,
      arr1: [9, 20, 28, 18, 11],
      arr2: [30, 1, 21, 17, 28],
    },
    result: ['#####', '# # #', '### #', '# ##', '#####'],
  },
  {
    input: {
      n: 6,
      arr1: [46, 33, 33, 22, 31, 50],
      arr2: [27, 56, 19, 14, 14, 10],
    },
    result: ['######', '### #', '## ##', ' #### ', ' #####', '### # '],
  },
];

test('비밀지도', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});