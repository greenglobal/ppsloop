// utils / existsInArray

export let existsInArray = (v, arr) => {
  return arr.some((k) => {
    return k === v;
  });
};
