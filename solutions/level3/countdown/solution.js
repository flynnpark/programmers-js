function solution(target) {
  // target + 1만큼 배열 생성
  // [던질 다트의 갯수, 싱글 또는 불을 맞춘 횟수의 합]
  const dp = new Array(target + 1).fill(null).map(() => [Infinity, 0]);
  // 맞출 수 있는 과녁의 점수 후보
  const scores = new Array(20).fill(null).map((_, index) => index + 1);

  dp[0][0] = 0;

  const check = (targetScore, offset, singleOrBullCount) => {
    if (targetScore + offset > target) return;
    // 구할 점수가 target보다 크다면 계산하지 않음

    if (dp[targetScore + offset][0] >= dp[targetScore][0] + 1) {
      // 다음으로 계산할 점수의 다트 갯수가 현재 점수의 다트 갯수보다 같거나 크다면
      if (dp[targetScore + offset][0] === dp[targetScore][0] + 1) {
        // 다음으로 계산할 점수의 다트 갯수와 현재 점수의 다트 갯수가 같다면
        // dp[targetScore + offset]: 다음으로 계산할 점수의 [던질 다트의 갯수, 싱글 또는 불을 맞춘 횟수의 합]
        // 던진 다트 갯수가 같다면 싱글 또는 불을 맞춘 횟수가 높은 걸 선택
        dp[targetScore + offset][1] = Math.max(
          dp[targetScore + offset][1],
          dp[targetScore][1] + singleOrBullCount,
        );
      } else {
        // 만약 아니라면 다음으로 계산할 점수 계산
        // 현재 점수에 던진 다트 갯수 + 1
        // 현재 점수에 던진 싱글 또는 불의 갯수 + 새로 던진 싱글 또는 불의 갯수
        dp[targetScore + offset] = [
          dp[targetScore][0] + 1,
          dp[targetScore][1] + singleOrBullCount,
        ];
      }
    }
  };

  for (let i = 0; i < target; i++) {
    for (const score of scores) {
      // 싱글, 더블, 트리플 계산
      [
        [1, 1],
        [2, 0],
        [3, 0],
      ].forEach(([multiple, singleOrBullCount]) =>
        check(i, score * multiple, singleOrBullCount),
      );
    }
    // 불 계산
    check(i, 50, 1);
  }

  return dp[target];
}

export { solution };
