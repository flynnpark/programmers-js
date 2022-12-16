function solution(N, stages) {
  const stageMembers = {};

  for (const stage of stages) {
    if (stageMembers[stage]) {
      stageMembers[stage] += 1;
    } else {
      stageMembers[stage] = 1;
    }
  }

  let challengers = stages.length;
  const failure = {};
  for (let stage = 1; stage <= N; stage++) {
    failure[stage] = stageMembers[stage]
      ? stageMembers[stage] / challengers
      : 0;
    if (stageMembers[stage]) {
      challengers -= stageMembers[stage];
    }
  }

  const rankBoard = [];
  for (const stage of Object.keys(failure)) {
    rankBoard.push([stage, failure[stage]]);
  }

  rankBoard.sort((a, b) => b[1] - a[1]);

  return rankBoard.map((item) => Number(item[0]));
}

export { solution };
