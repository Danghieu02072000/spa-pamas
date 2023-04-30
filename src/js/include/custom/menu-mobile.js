import { select, selectAll, on, addClass, hasClass, removeClass, closest } from '../lib/dom'

const BODY = document.body
const MENU_SELECTOR = '.js-menu-mobile'
const MENU_ITEM_SELECTOR = '.menu__item'
const MENU_DROPDOWN_SELECTOR = '.menu__dropdown'
const MENU_SUB_OPEN_CLASS = 'menu__item--open'
const MENU_CLASS_ACTIVE_CLASS = 'is-menu-expanded'
const MENU_SUB_TOGGLE_SELECTOR = '.menu__toggle'

export default () => {
  const menuEl = select(MENU_SELECTOR)
  const colspanAll = (els) => {
    if (els.length > 0) {
      els.forEach((item) => {
        const parentSubEl = closest(MENU_ITEM_SELECTOR, item)
        if (hasClass(MENU_SUB_OPEN_CLASS, parentSubEl)) {
          removeClass(MENU_SUB_OPEN_CLASS, parentSubEl)
        }
      })
    }
  }
  if (menuEl) {
    const menuSubEls = selectAll(MENU_DROPDOWN_SELECTOR, menuEl)
    if (menuSubEls.length > 0) {
      menuSubEls.map((item) => {
        const parentSubEl = closest(MENU_ITEM_SELECTOR, item)
        const toggleEl = select(MENU_SUB_TOGGLE_SELECTOR, parentSubEl)
        if (toggleEl) {
          on('click', () => {
            if (!hasClass(MENU_SUB_OPEN_CLASS, parentSubEl)) {
              colspanAll(menuSubEls)
              addClass(MENU_SUB_OPEN_CLASS, parentSubEl)
              addClass(MENU_CLASS_ACTIVE_CLASS, BODY)
            } else {
              removeClass(MENU_SUB_OPEN_CLASS, parentSubEl)
              removeClass(MENU_CLASS_ACTIVE_CLASS, BODY)
            }
          }, toggleEl)
        }
      })
    }
  }
}
