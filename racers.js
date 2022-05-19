function measureRacerScore(name, seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} racer finished in ${seconds} seconds.`);
    }, seconds * 1000);
  });
}

function measureRedRacerScore() {
  return measureRacerScore("Red", 5);
}

function measureBlueRacerScore() {
  return measureRacerScore("Blue", 7);
}
