function solution(progresses, speeds) {
  let result = [];
  let day = 0;

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      const currentProgress = progresses[i] + speeds[i];
      progresses[i] = currentProgress > 100 ? 100 : currentProgress;
    }

    if (progresses[0] === 100) {
      let count = 0;
      while (progresses[0] === 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      result.push(count);
    }

    day++;
  }

  return result;
}

export { solution };
