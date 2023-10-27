function solution(n, k, cmd) {
  const result = new Array(n).fill('O');
  const table = createTable(n);
  let cursor = k;
  const workStack = [];

  for (const input of cmd) {
    switch (input) {
      case 'C':
        cursor = cmdCAction(table, workStack, result, cursor);
        break;
      case 'Z':
        cursor = cmdZAction(table, workStack, result, cursor);
        break;
      default:
        cursor = cmdMoveAction(table, cursor, input);
        break;
    }
  }

  return result.join('');
}

function createTable(n) {
  const table = {};
  for (let i = 0; i < n; i++) {
    table[i] = [i - 1, i + 1];
  }
  table[0] = [null, 1];
  table[n - 1] = [n - 2, null];

  return table;
}

function cmdCAction(table, workStack, result, cursor) {
  result[cursor] = 'X';
  const [prev, next] = table[cursor];
  workStack.push([prev, cursor, next]);

  if (next === null) cursor = table[cursor][0];
  else cursor = table[cursor][1];

  if (prev === null) table[next][0] = null;
  else if (next === null) table[prev][1] = null;
  else {
    table[next][0] = prev;
    table[prev][1] = next;
  }
  return cursor;
}

function cmdZAction(table, workStack, result, cursor) {
  const [prev, now, next] = workStack.pop();
  result[now] = 'O';

  if (prev === null) table[next][0] = now;
  else if (next === null) table[prev][1] = now;
  else {
    table[next][0] = now;
    table[prev][1] = now;
  }
  return cursor;
}

function cmdMoveAction(table, cursor, command) {
  const [type, strNum] = command.split(' ');
  const num = Number(strNum);

  const j = type === 'U' ? 0 : 1;
  for (let i = 0; i < num; i++) {
    cursor = table[cursor][j];
  }

  return cursor;
}

export { solution };
