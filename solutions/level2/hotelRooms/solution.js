function solution(book_time) {
  const bookTimes = book_time
    .map(([start, end]) => [timeToMinute(start), timeToMinute(end)])
    .sort((a, b) => a[0] - b[0]);

  const rooms = [bookTimes.shift()];

  bookTimes.forEach((currentTime) => {
    const [currentStart, currentEnd] = currentTime;

    const isFull = rooms.every(([start, end]) => end + 10 > currentStart);
    if (isFull) {
      rooms.push(currentTime);
    } else {
      const roomNumber = rooms.findIndex(
        ([start, end]) => end + 10 <= currentStart,
      );
      rooms[roomNumber] = currentTime;
    }
  });

  return rooms.length;
}

function timeToMinute(time) {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
}

export { solution };
