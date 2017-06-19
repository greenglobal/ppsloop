// utils / shuffle

export let shuffle = (arr) => {
  return arr.sort(() => {
    let r = Math.random();
    if (r === 0 || r === 0.5 || r === 1) {
      return 0;
    }
    return r > 0.5;
  });
};
