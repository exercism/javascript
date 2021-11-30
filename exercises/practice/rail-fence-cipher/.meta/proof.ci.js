export const encode = (msg, rails) => {
  let stringRails = Array(rails).fill('');
  cycleRails(msg, rails).forEach((cycle, index) => {
    stringRails[cycle] += msg[index];
  });
  return stringRails.join('');
};

export const decode = (msg, rails) => {
  const cycles = cycleRails(msg, rails);
  let stringRails = Array(rails).fill('');
  cycleRails(msg, rails).forEach((cycle) => {
    for (let j = 0; j < rails; j++) {
      stringRails[j] += cycle === j ? '?' : '.';
    }
  });
  let msgIndex = 0;
  stringRails.forEach((rail, index) => {
    let newRail = '';
    rail.split('').forEach((char) => {
      if (char === '?') {
        newRail += msg[msgIndex];
        msgIndex++;
      } else {
        newRail += '.';
      }
    });
    stringRails[index] = newRail;
  });
  return cycles.reduce(
    (str, cycle, index) => str + stringRails[cycle][index],
    ''
  );
};

const cycleRails = (msg, rails) => {
  let currentRail = 0;
  let isIncreasing = true;
  let cycles = [];
  for (let i = 0; i < msg.length; i++) {
    cycles.push(currentRail);
    currentRail = isIncreasing ? currentRail + 1 : currentRail - 1;
    if (currentRail < 0) {
      currentRail = 1;
      isIncreasing = true;
    } else if (currentRail === rails) {
      currentRail = rails - 2;
      isIncreasing = false;
    }
  }
  return cycles;
};
