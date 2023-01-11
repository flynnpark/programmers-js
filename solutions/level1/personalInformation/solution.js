const MONTH = 28;

function solution(today, terms, privacies) {
  const result = [];

  const getDateNumber = (dateString) =>
    dateString
      .split('.')
      .map((item, index) => {
        if (index == 0) return parseInt(item.slice(2), 10) * 12 * 28;
        else if (index == 1) return parseInt(item) * 28;
        else return parseInt(item);
      })
      .reduce((a, b) => a + b, 0);

  const todayNumber = getDateNumber(today);

  const termsObject = {};
  terms.forEach((item) => {
    const [term, periodMonth] = item.split(' ');
    termsObject[term] = periodMonth * 28;
  });

  privacies.forEach((privacy, index) => {
    const [dateString, term] = privacy.split(' ');
    const date = getDateNumber(dateString);
    if (todayNumber - date >= termsObject[term]) {
      result.push(index + 1);
    }
  });

  return result;
}

export { solution };
