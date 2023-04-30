/* global $ */

export default () => {
  const $title = $('.js-title')
  const content = '.js-content'

  $title.on('click', function () {
    $(this).next(content).slideToggle()
    $(this).parent().siblings().children().next().slideUp()
    return false
  })
}
