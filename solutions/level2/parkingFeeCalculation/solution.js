function parseRecord(record) {
  const [timeString, carNumber, type] = record.split(' ');
  return {
    timeString,
    carNumber,
    type,
  };
}

function parseTimeString(timeString) {
  const [hours, minutes] = timeString.split(':');
  return Number(hours) * 60 + Number(minutes);
}

function upsertTime(totalTimeObject, carNumber, time) {
  if (totalTimeObject[carNumber]) {
    totalTimeObject[carNumber] += time;
  } else {
    totalTimeObject[carNumber] = time;
  }
}

function calculateParkingFee(fees, totalTime) {
  const [firstTime, firstFee, unitTime, unitFee] = fees;

  if (totalTime <= firstTime) {
    return firstFee;
  }
  return firstFee + Math.ceil((totalTime - firstTime) / unitTime) * unitFee;
}

function solution(fees, records) {
  const totalTimeObject = {};
  const recordObject = {};
  for (const record of records) {
    const { timeString, carNumber, type } = parseRecord(record);
    const time = parseTimeString(timeString);

    if (type === 'IN') {
      recordObject[carNumber] = time;
    } else {
      const totalTime = time - recordObject[carNumber];
      upsertTime(totalTimeObject, carNumber, totalTime);
      delete recordObject[carNumber];
    }
  }

  for (const carNumber of Object.keys(recordObject)) {
    const time = parseTimeString('23:59');
    const totalTime = time - recordObject[carNumber];
    upsertTime(totalTimeObject, carNumber, totalTime);
    delete recordObject[carNumber];
  }

  const totalFees = [];
  for (const carNumber of Object.keys(totalTimeObject)) {
    const fee = calculateParkingFee(fees, totalTimeObject[carNumber]);
    totalFees.push([carNumber, fee]);
  }

  return totalFees.sort().map((item) => item[1]);
}

export { solution };
