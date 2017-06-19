// utils / getItemFrom

export let getItemFrom = (arr) => {
  return {
    by: (key, value) => {
      let candidates = arr.filter((item) => {
        return item[key] === value;
      });
      return candidates.length > 0 ? candidates[0] : false;
    }
  };
};
