function solution(plans) {
  const result = [];

  if (!plans.length) return result;

  plans = plans
    .map(([name, start, playtime]) => ({
      name,
      start: timeToMinute(start),
      playtime: Number(playtime),
    }))
    .sort((a, b) => a.start - b.start);

  let index = 0;
  const stack = []; // 가장 최근에 멈춘 과제부터 시작하기 위해서 스택을 사용

  for (let time = plans.at(0).start; time < 1440; time++) {
    if (stack.length) {
      const currentPlan = stack.at(-1);
      currentPlan.playtime--;
      if (currentPlan.playtime === 0) {
        result.push(currentPlan.name);
        stack.pop();
      }
    }

    if (time === plans[index]?.start) {
      stack.push(plans[index++]);
    }
  }

  stack.reverse().forEach((plan) => result.push(plan.name)); // 가장 최근에 멈춘 과제부터 해야 하므로 stack을 그냥 뒤집고 차례대로 넣는다

  return result;
}

function timeToMinute(time) {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
}

export { solution };
