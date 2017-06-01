// utils / getLocatePoint

export let getLocatePoint = (origin) => {
  let ol = origin.offsetLeft;
  let ot = origin.offsetTop;
  let ow = origin.offsetWidth;
  let oh = origin.offsetHeight;

  return {
    left: Math.floor(ol - ow),
    top: Math.floor(ot - oh),
    width: ow,
    height: oh
  };
};
