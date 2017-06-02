if (!Array.from) {
  Array.from = (c) => {
    let a = [];
    for (let i = 0; i < c.length; i++) {
      a.push(c[i]);
    }
    return a;
  };
}
