/* global $ */
export default () => {
  $('.js-carousel-logo').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true

  })
  $('.js-carousel-main').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
  })
  $('.js-carousel-history').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true
  })
  $('.js-carousel-event').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    watchCSS: true
  })
  $('.js-carousel-journey').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false
  })
  $('.js-carousel-product').flickity({
    wrapAround: true,
    cellAlign: 'left',
    contain: false,
    pageDots: false
  })
  $('.js-carousel-event-info').flickity({
    wrapAround: true,
    cellAlign: 'left',
    contain: false,
    pageDots: false
  })
  $('.js-carousel-utils').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false
  })
  $('.js-carousel-home-product').flickity({
    wrapAround: true,
    cellAlign: 'left',
    contain: false,
    pageDots: false,
    watchCSS: true
  })
}
