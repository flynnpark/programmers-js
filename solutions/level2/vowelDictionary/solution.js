const vowels = [...'AEIOU'];

function solution(word) {
  const words = [];
  for (let i = 1; i <= 5; i++) combination(words, '', i);
  return words.sort().indexOf(word) + 1;
}

function combination(results, word, restLength) {
  if (!restLength) {
    results.push(word);
    return;
  }

  vowels.forEach((vowel) =>
    combination(results, `${word}${vowel}`, restLength - 1),
  );
}

export { solution };
