import { solution } from './solution';

const cases = [
  {
    input: {
      dartResult: '1S2D*3T',
    },
    result: 37,
  },
  {
    input: {
      dartResult: '1D2S#10S',
    },
    result: 9,
  },
  {
    input: {
      dartResult: '1D2S0T',
    },
    result: 3,
  },
  {
    input: {
      dartResult: '1S*2T*3S',
    },
    result: 23,
  },
  {
    input: {
      dartResult: '1D#2S*3S',
    },
    result: 5,
  },
  {
    input: {
      dartResult: '1T2D3D#',
    },
    result: -4,
  },
  {
    input: {
      dartResult: '1D2S3T*',
    },
    result: 59,
  },
];

test('다트 게임', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
