function solution(routes) {
  routes = routes.sort((a, b) => a[1] - b[1]);
  return routes.reduce(
    ({ position, result }, [start, end]) => {
      if (position < start) {
        position = end;
        result += 1;
      }
      return {
        position,
        result,
      };
    },
    {
      position: -Infinity,
      result: 0,
    },
  ).result;
}

export { solution };
