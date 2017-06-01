// utils / preloadImages

export let preloadImages = (images, imgPath = '') => {

  let preload = () => {

    let src = images.shift();

    let next = () => {
      if (images.length > 0) {
        preload();
      }
    };

    let P = new Image();
    P.onerror = next;
    P.onload = next;
    P.src = imgPath + src;
  };

  preload();
};

