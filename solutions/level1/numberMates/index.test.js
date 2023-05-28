import { solution } from "./solution";

const cases = [
  {
    input: {
      X: "100",
      Y: "2345",
    },
    result: "-1",
  },
  {
    input: {
      X: "100",
      Y: "203045",
    },
    result: "0",
  },
  {
    input: {
      X: "100",
      Y: "123450",
    },
    result: "10",
  },
  {
    input: {
      X: "12321",
      Y: "42531",
    },
    result: "321",
  },
  {
    input: {
      X: "5525",
      Y: "1255",
    },
    result: "552",
  },
];

describe("숫자 짝꿍", () => {
  test.each(cases)("%o", ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
