// getPlaceHolder

var getPlaceHolder = (opts) => {

  let {
    text = '?!?',
    fontSize = 20,
    width = 160,
    height = 120,
    backgroundColor = 'eeffaa',
    textColor = '333333'
  } = opts;

  let params = [
    `txt=${text}`,
    `txtsize=${fontSize}`,
    `w=${width}`,
    `h=${height}`,
    `bg=${backgroundColor}`,
    `txtclr=${textColor}`
  ].join('&');

  return `https://placeholdit.imgix.net/~text?${params}`;
};

module.exports = getPlaceHolder;
