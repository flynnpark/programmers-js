import { solution } from './solution';

const cases = [
  {
    input: {
      today: '2022.05.19',
      terms: ['A 6', 'B 12', 'C 3'],
      privacies: [
        '2021.05.02 A',
        '2021.07.01 B',
        '2022.02.19 C',
        '2022.02.20 C',
      ],
    },
    result: [1, 3],
  },
  {
    input: {
      today: '2020.01.01',
      terms: ['Z 3', 'D 5'],
      privacies: [
        '2019.01.01 D',
        '2019.11.15 Z',
        '2019.08.02 D',
        '2019.07.01 D',
        '2018.12.28 Z',
      ],
    },
    result: [1, 4, 5],
  },
];

test('개인정보 수집 유효기간', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
