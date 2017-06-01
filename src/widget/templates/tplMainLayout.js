// templates / tplMainLayout

export let tplMainLayout = `
  <div class="pps__frame--left">
    <div class="pps__frame--top">
      <div class="pps__techlogo-outer">
        <div class="pps__techlogo">
          <label class="pps__label pps__label--no-padding">{{labelTech}}</label>
          <div class="pps__techlogo-image"></div>
          <span class="pps__techselect-arrow"></span>
        </div>
        <div class="pps__select-outer">
          <select class="pps__select pps__stack-selector">
            {{options}}
          </select>
        </div>
      </div>
      <div class="pps__block--people">
        <label class="pps__label">
          {{labelPeople}} <span class="pps__teamnumber--small"></span>
        </label>
        <div class="pps__swiper-wrapper">
          <div class="pps__swiper--nav pps__swiper--prev">
            <span class="pps__btn-link prev"></span>
          </div>
          <div class="pps__swiper-container"></div>
          <div class="pps__swiper--nav pps__swiper--next">
            <span class="pps__btn-link next"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="pps__frame--bottom">
      <div class="pps__block--project">
        <label class="pps__label">
          {{labelProject}}
        </label>
        <div class="pps__list--project"></div>
        <div class="pps__view-all pps__is-disabled"></div>
      </div>
    </div>
  </div>
  <div class="pps__frame--right">
    <div class="pps__block--stack">
      <label class="pps__label">
        {{labelTech}}
      </label>
      <div class="pps__list--stack"></div>
    </div>
  </div>
`;


