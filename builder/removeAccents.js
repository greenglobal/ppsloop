// removeAccents

var removeAccents = (s) => {
  let map = {
    a: 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|ä',
    A: 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Ä',
    c: 'ç',
    C: 'Ç',
    d: 'đ',
    D: 'Đ',
    e: 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë',
    E: 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë',
    i: 'í|ì|ỉ|ĩ|ị|ï|î',
    I: 'Í|Ì|Ỉ|Ĩ|Ị|Ï|Î',
    o: 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ö',
    O: 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ô|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ö',
    u: 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û',
    U: 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û',
    y: 'ý|ỳ|ỷ|ỹ|ỵ',
    Y: 'Ý|Ỳ|Ỷ|Ỹ|Ỵ'
  };
  for (let k in map) {
    if (map.hasOwnProperty(k)) {
      let r = new RegExp(map[k], 'g');
      s = s.replace(r, k);
    }
  }

  return s;
};

module.exports = removeAccents;
