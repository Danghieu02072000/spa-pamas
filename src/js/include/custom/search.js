import { select, on, addClass, hasClass, removeClass } from '../lib/dom'

const SEARCH_SELECTOR = '.js-main-search'
const SEARCH_TOOGLE_SELECTOR = '.js-main-search-trigger'
const SEARCH_DROPDOWN_SELECTOR = '.js-main-search-dropdown'
const SEARCH_DROPDOWN_ACTIVE_CLASS = 'nav-main__search---active'

export default () => {
  const el = select(SEARCH_SELECTOR)
  if (el) {
    const toggleEl = select(SEARCH_TOOGLE_SELECTOR, el)
    const dropdownEl = select(SEARCH_DROPDOWN_SELECTOR, el)
    if (toggleEl && dropdownEl) {
      on('click', () => {
        if (!hasClass(SEARCH_DROPDOWN_ACTIVE_CLASS, el)) {
          addClass(SEARCH_DROPDOWN_ACTIVE_CLASS, el)
        } else {
          removeClass(SEARCH_DROPDOWN_ACTIVE_CLASS, el)
        }
      }, toggleEl)
    }

    on('click', (e) => {
      if (!el.contains(e.target)) {
        removeClass(SEARCH_DROPDOWN_ACTIVE_CLASS, el)
      }
    }, window)
  }
}
