function getQuotient(char) {
  if (char === 'T') {
    return 3;
  } else if (char === 'D') {
    return 2;
  }
  return 1;
}

function solution(dartResult) {
  const roundsScore = [];
  const rounds = [];

  let temp = [];
  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];
    if (!isNaN(char) && temp.length > 0 && !isNaN(temp[temp.length - 1])) {
      temp[temp.length - 1] = temp[temp.length - 1] + char;
    } else {
      temp.push(char);
    }

    if (
      i === dartResult.length - 1 ||
      (isNaN(char) && !isNaN(dartResult[i + 1]))
    ) {
      rounds.push(temp);
      temp = [];
    }
  }

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];

    const score = Number(round[0]);
    const quotient = getQuotient(round[1]);
    const option = round[2];

    let roundScore = score ** quotient;

    if (option === '*') {
      roundScore *= 2;
      roundsScore[roundsScore.length - 1] *= 2;
    } else if (option === '#') {
      roundScore *= -1;
    }
    roundsScore.push(roundScore);
  }

  return roundsScore.reduce((a, b) => a + b, 0);
}

export { solution };
