// templates / tplSimpleLayout

export let tplSimpleLayout = `
  <div class="pps__swiper-wrapper pps__swiper-wrapper-simple">
    <div class="pps__swiper--nav pps__swiper--prev">
      <span class="pps__btn-link prev"></span>
    </div>
    <div class="pps__swiper-container pps__swiper-container-simple">{{content}}</div>
    <div class="pps__swiper--nav pps__swiper--next">
      <span class="pps__btn-link next"></span>
    </div>
  </div>
`;

