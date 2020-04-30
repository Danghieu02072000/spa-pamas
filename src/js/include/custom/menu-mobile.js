/* global $ */
import { ready } from '../lib/dom'

const menuMobile = () => {
  if ($('.js-menu-mobile').length > 0) {
    const MENU_ITEM_SELECTOR = '.menu__item'
    const MENU_DROPDOWN_SELECTOR = '.menu__dropdown'
    const MENU_SUB_OPEN_CLASS = 'menu__item--open'

    $('.js-menu-mobile .menu__item--sub .menu__toggle').on('click', function () {
      var element = $(this).closest(MENU_ITEM_SELECTOR)
      if (element.hasClass(MENU_SUB_OPEN_CLASS)) {
        element.removeClass(MENU_SUB_OPEN_CLASS)
        element.find(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
      } else {
        element.addClass(MENU_SUB_OPEN_CLASS)
        element.siblings(MENU_ITEM_SELECTOR).children(MENU_DROPDOWN_SELECTOR)
        element.siblings(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
        element.siblings(MENU_ITEM_SELECTOR).find(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
      }
    })
  }
}

ready(menuMobile())
